/**
 * In-memory rate limiter for AI explain requests.
 *
 * For low-traffic demo deployments this is sufficient. For production,
 * swap with Upstash Redis or Vercel KV (see TODO at bottom of file).
 *
 * Two layers:
 *   1. Per-IP daily cap (default 10 requests per UTC day)
 *   2. Site-wide monthly cap (default 1000 requests per UTC month)
 *
 * The state lives in module-level Maps; resets when the server restarts.
 */
type IpEntry = { day: string; count: number };
const perIpDaily = new Map<string, IpEntry>();
let globalMonth = todayUtc().slice(0, 7);
let globalCount = 0;

function todayUtc(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}

function thisMonthUtc(): string {
  return todayUtc().slice(0, 7);
}

export type RateLimitResult =
  | { ok: true; remainingDaily: number; remainingMonthly: number }
  | { ok: false; reason: "daily" | "monthly"; remainingMonthly: number };

export function checkAndConsume(
  ip: string,
  dailyLimit: number,
  monthlyLimit: number,
): RateLimitResult {
  // Reset global counter on month change.
  const month = thisMonthUtc();
  if (month !== globalMonth) {
    globalMonth = month;
    globalCount = 0;
  }

  // Reset per-IP entry on day change.
  const day = todayUtc();
  const entry = perIpDaily.get(ip);
  if (!entry || entry.day !== day) {
    perIpDaily.set(ip, { day, count: 0 });
  }
  const fresh = perIpDaily.get(ip)!;

  // Apply caps.
  if (globalCount >= monthlyLimit) {
    return {
      ok: false,
      reason: "monthly",
      remainingMonthly: 0,
    };
  }
  if (fresh.count >= dailyLimit) {
    return {
      ok: false,
      reason: "daily",
      remainingMonthly: monthlyLimit - globalCount,
    };
  }

  // Consume.
  fresh.count += 1;
  globalCount += 1;
  return {
    ok: true,
    remainingDaily: dailyLimit - fresh.count,
    remainingMonthly: monthlyLimit - globalCount,
  };
}

// TODO: replace with Upstash Redis-based limiter for serverless cold starts:
//   import { Ratelimit } from "@upstash/ratelimit";
//   import { Redis } from "@upstash/redis";
//   const ratelimit = new Ratelimit({
//     redis: Redis.fromEnv(),
//     limiter: Ratelimit.slidingWindow(10, "1 d"),
//   });
