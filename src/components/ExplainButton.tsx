"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Feature flag — render nothing unless the flag is explicitly enabled.
 * Toggle by setting `NEXT_PUBLIC_AI_ENABLED=true` (Vercel env var) and
 * redeploying. While disabled, the button is completely hidden from users.
 */
const AI_ENABLED = process.env.NEXT_PUBLIC_AI_ENABLED === "true";

type ExplainMode = "explain" | "deeper" | "similar";

const MODE_OPTIONS: { key: ExplainMode; label: string; emoji: string }[] = [
  { key: "explain", label: "もっと詳しく", emoji: "💡" },
  { key: "deeper", label: "発展的な内容", emoji: "🚀" },
  { key: "similar", label: "類題を作る", emoji: "✨" },
];

const STORAGE_KEY = "toukei-app:ai-usage:v1";

type LocalUsage = { day: string; count: number };

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function readUsage(): LocalUsage {
  if (typeof window === "undefined") return { day: todayKey(), count: 0 };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { day: todayKey(), count: 0 };
    const u = JSON.parse(raw) as LocalUsage;
    if (u.day !== todayKey()) return { day: todayKey(), count: 0 };
    return u;
  } catch {
    return { day: todayKey(), count: 0 };
  }
}

function writeUsage(u: LocalUsage) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
  } catch {
    /* ignore */
  }
}

export function ExplainButton({ questionId }: { questionId: string }) {
  // Hidden until the feature flag is set. Returning null avoids any DOM impact.
  if (!AI_ENABLED) return null;
  return <ExplainButtonImpl questionId={questionId} />;
}

function ExplainButtonImpl({ questionId }: { questionId: string }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ExplainMode>("explain");
  const [running, setRunning] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [localCount, setLocalCount] = useState(0);
  const [userQuestion, setUserQuestion] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setLocalCount(readUsage().count);
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  async function run(selectedMode: ExplainMode) {
    setMode(selectedMode);
    setRunning(true);
    setText("");
    setError(null);
    setProvider(null);
    setRemaining(null);
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId,
          mode: selectedMode,
          userQuestion: userQuestion.trim() || undefined,
        }),
        signal: ctrl.signal,
      });
      setProvider(res.headers.get("X-AI-Provider"));
      const remHdr = res.headers.get("X-AI-Remaining-Daily");
      if (remHdr) setRemaining(parseInt(remHdr, 10));

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(
          data?.message ??
            `エラー(${res.status})が発生しました。しばらくしてからお試しください。`,
        );
        setRunning(false);
        return;
      }

      // Bump local counter optimistically (server is source of truth via header).
      const next: LocalUsage = {
        day: todayKey(),
        count: readUsage().count + 1,
      };
      writeUsage(next);
      setLocalCount(next.count);

      const reader = res.body?.getReader();
      if (!reader) {
        setError("ストリームが受信できませんでした。");
        setRunning(false);
        return;
      }
      const dec = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setText(acc);
      }
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
      setError(`通信エラー: ${(e as Error).message}`);
    } finally {
      setRunning(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs ui-sans px-3 py-1.5 rounded border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 font-bold inline-flex items-center gap-1 print-hide"
        aria-label="AI で詳しく解説"
      >
        ✨ AI に解説を頼む
      </button>
    );
  }

  return (
    <div className="mt-3 paper rounded-lg p-3 print-hide ui-sans">
      <div className="flex items-baseline justify-between mb-2 gap-2 flex-wrap">
        <div className="text-xs font-bold text-[var(--accent)]">
          ✨ AI 解説 (デモ){" "}
          {provider && (
            <span className="text-[var(--muted)] font-normal">
              · {provider === "demo" ? "モック応答" : provider}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
          {remaining !== null && <span>本日あと {remaining} 回</span>}
          <button
            type="button"
            onClick={() => {
              abortRef.current?.abort();
              setOpen(false);
              setText("");
              setError(null);
            }}
            className="hover:text-red-600 dark:hover:text-red-400"
            aria-label="閉じる"
          >
            ✕ 閉じる
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2 text-xs">
        {MODE_OPTIONS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => run(m.key)}
            disabled={running}
            className={`px-2.5 py-1 rounded border ${
              mode === m.key && (running || text)
                ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            } disabled:opacity-50`}
          >
            <span aria-hidden="true">{m.emoji}</span> {m.label}
          </button>
        ))}
      </div>

      <details className="mb-2 text-xs">
        <summary className="cursor-pointer text-[var(--muted)] hover:text-[var(--link)]">
          追加で質問する(任意)
        </summary>
        <textarea
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          rows={2}
          placeholder="例: なぜ②ではなく④が正解なのか?"
          className="w-full mt-2 px-2 py-1.5 border border-[var(--page-border-strong)] rounded bg-[var(--page)] text-xs"
          maxLength={400}
        />
        <div className="text-[10px] text-[var(--muted)] mt-1 text-right">
          {userQuestion.length}/400
        </div>
      </details>

      {running && text === "" && (
        <div className="text-xs text-[var(--muted)] py-2">
          ⏳ AI が考えています...
        </div>
      )}
      {error && (
        <div className="text-xs text-red-700 dark:text-red-400 py-2 leading-relaxed">
          {error}
        </div>
      )}
      {text && (
        <div className="prose prose-sm max-w-none mt-1 text-sm leading-relaxed whitespace-pre-wrap text-[var(--foreground)]">
          {text}
        </div>
      )}

      <div className="text-[10px] text-[var(--muted)] mt-3 leading-relaxed border-t border-[var(--page-border)] pt-2">
        AI 解説はベータ機能です。生成内容は誤りを含むことがあります。重要な判断には公式テキストをご確認ください。本日の利用回数(端末): {localCount}
      </div>
    </div>
  );
}
