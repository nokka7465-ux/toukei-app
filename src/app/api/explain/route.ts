import { NextRequest } from "next/server";
import { getQuestionsById } from "@/lib/all-questions";
import { getAiSettings } from "@/lib/ai-config";
import { checkAndConsume } from "@/lib/ai-rate-limit";
import {
  buildPrompt,
  getDemoResponse,
  type ExplainMode,
} from "@/lib/ai-prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ExplainBody = {
  questionId?: string;
  mode?: ExplainMode;
  userQuestion?: string;
};

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

function streamText(text: string, chunkSize = 20): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  let i = 0;
  return new ReadableStream({
    async pull(controller) {
      if (i >= text.length) {
        controller.close();
        return;
      }
      const chunk = text.slice(i, i + chunkSize);
      i += chunkSize;
      controller.enqueue(encoder.encode(chunk));
      // Slight pacing for natural typing feel
      await new Promise((r) => setTimeout(r, 30));
    },
  });
}

async function streamFromOpenAI(
  systemPrompt: string,
  userPrompt: string,
  model: string,
): Promise<ReadableStream<Uint8Array>> {
  const apiKey = process.env.OPENAI_API_KEY!;
  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      stream: true,
      temperature: 0.4,
      max_tokens: 1500,
    }),
  });
  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => "");
    throw new Error(`OpenAI error ${upstream.status}: ${text.slice(0, 200)}`);
  }

  const encoder = new TextEncoder();
  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const raw of lines) {
        const line = raw.trim();
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (payload === "[DONE]") {
          controller.close();
          return;
        }
        try {
          const json = JSON.parse(payload);
          const delta = json.choices?.[0]?.delta?.content;
          if (typeof delta === "string" && delta.length > 0) {
            controller.enqueue(encoder.encode(delta));
          }
        } catch {
          /* ignore malformed chunk */
        }
      }
    },
  });
}

async function streamFromAnthropic(
  systemPrompt: string,
  userPrompt: string,
  model: string,
): Promise<ReadableStream<Uint8Array>> {
  const apiKey = process.env.ANTHROPIC_API_KEY!;
  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 1500,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
      stream: true,
    }),
  });
  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => "");
    throw new Error(`Anthropic error ${upstream.status}: ${text.slice(0, 200)}`);
  }

  const encoder = new TextEncoder();
  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const raw of lines) {
        const line = raw.trim();
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload) continue;
        try {
          const json = JSON.parse(payload);
          if (json.type === "content_block_delta") {
            const text = json.delta?.text;
            if (typeof text === "string" && text.length > 0) {
              controller.enqueue(encoder.encode(text));
            }
          } else if (json.type === "message_stop") {
            controller.close();
            return;
          }
        } catch {
          /* ignore */
        }
      }
    },
  });
}

export async function POST(req: NextRequest) {
  let body: ExplainBody;
  try {
    body = (await req.json()) as ExplainBody;
  } catch {
    return new Response("invalid JSON", { status: 400 });
  }

  const mode: ExplainMode =
    body.mode === "deeper" || body.mode === "similar" ? body.mode : "explain";
  const questionId = body.questionId;
  if (!questionId || typeof questionId !== "string") {
    return new Response("questionId required", { status: 400 });
  }
  const lookup = getQuestionsById();
  const q = lookup.get(questionId);
  if (!q) {
    return new Response("question not found", { status: 404 });
  }

  const settings = getAiSettings();

  // Rate limit (still applies in demo mode to keep behavior consistent).
  const ip = getClientIp(req);
  const rl = checkAndConsume(
    ip,
    settings.dailyUserLimit,
    settings.monthlyGlobalLimit,
  );
  if (!rl.ok) {
    return new Response(
      JSON.stringify({
        error: "rate_limited",
        reason: rl.reason,
        message:
          rl.reason === "daily"
            ? `1 日あたりの利用上限(${settings.dailyUserLimit} 回)に達しました。明日また使えます。`
            : "今月のサイト全体の利用上限に達しました。来月以降にご利用ください。",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }

  const { system, user } = buildPrompt(q, mode, body.userQuestion);

  // Demo mode → instant mock streaming response.
  if (settings.demoMode) {
    const stream = streamText(getDemoResponse(mode));
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-AI-Provider": "demo",
        "X-AI-Remaining-Daily": String(rl.remainingDaily),
      },
    });
  }

  try {
    const stream =
      settings.provider === "anthropic"
        ? await streamFromAnthropic(system, user, settings.model)
        : await streamFromOpenAI(system, user, settings.model);
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-AI-Provider": settings.provider,
        "X-AI-Model": settings.model,
        "X-AI-Remaining-Daily": String(rl.remainingDaily),
      },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown";
    return new Response(
      JSON.stringify({ error: "ai_provider_error", message: msg }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }
}
