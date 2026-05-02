/**
 * Server-side AI provider configuration.
 *
 * Set environment variables in `.env.local` for development or in your
 * deployment provider (e.g. Vercel) for production.
 *
 * Required for live mode:
 *   - AI_PROVIDER             "openai" | "anthropic" | "google" (default "openai")
 *   - OPENAI_API_KEY          OpenAI API key (when AI_PROVIDER=openai)
 *   - ANTHROPIC_API_KEY       Anthropic key (when AI_PROVIDER=anthropic)
 *   - GOOGLE_AI_API_KEY       Google AI Studio key (when AI_PROVIDER=google)
 *
 * Optional (sensible defaults included):
 *   - AI_MODEL                model name (defaults vary per provider)
 *   - AI_DAILY_USER_LIMIT     per-IP daily request cap (default 10)
 *   - AI_MONTHLY_GLOBAL_LIMIT site-wide monthly cap (default 1000)
 *   - AI_DEMO_MODE            "true" to force mock responses regardless of keys
 *
 * If no API key is configured, the route falls back to a deterministic mock
 * response so the UI is fully functional in development without spend.
 */
export type AiProvider = "openai" | "anthropic" | "google";

export type AiSettings = {
  provider: AiProvider;
  model: string;
  hasKey: boolean;
  demoMode: boolean;
  dailyUserLimit: number;
  monthlyGlobalLimit: number;
};

const DEFAULT_MODELS: Record<AiProvider, string> = {
  openai: "gpt-4o-mini",
  anthropic: "claude-haiku-4-5-20251001",
  google: "gemini-2.0-flash",
};

export function getAiSettings(): AiSettings {
  const provider = (
    (process.env.AI_PROVIDER as AiProvider | undefined) ?? "openai"
  ) as AiProvider;
  const model = process.env.AI_MODEL ?? DEFAULT_MODELS[provider];
  const keyName =
    provider === "anthropic"
      ? "ANTHROPIC_API_KEY"
      : provider === "google"
        ? "GOOGLE_AI_API_KEY"
        : "OPENAI_API_KEY";
  const hasKey = Boolean(process.env[keyName]);
  const demoMode =
    process.env.AI_DEMO_MODE === "true" || !hasKey;

  return {
    provider,
    model,
    hasKey,
    demoMode,
    dailyUserLimit: parseInt(process.env.AI_DAILY_USER_LIMIT ?? "10", 10),
    monthlyGlobalLimit: parseInt(
      process.env.AI_MONTHLY_GLOBAL_LIMIT ?? "1000",
      10,
    ),
  };
}
