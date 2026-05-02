"use client";

const STORAGE_KEY = "toukei-app:progress:v1";
export const PROGRESS_EVENT = "toukei-progress-update";

export type QuestionResult = {
  correct: boolean;
  attempts: number;
  lastAt: number;
  /** SM-2-lite ease factor (default 2.5, min 1.3). Optional for backward compat. */
  srsEase?: number;
  /** Current scheduled interval in days. */
  srsInterval?: number;
  /** Next due timestamp (ms since epoch). */
  srsDueAt?: number;
  /** Consecutive correct count (resets to 0 on wrong). */
  srsStreak?: number;
  /** Number of times the user got this wrong after having gotten it right. */
  srsLapses?: number;
};

const DAY_MS = 24 * 60 * 60 * 1000;
const SRS_DEFAULT_EASE = 2.5;
const SRS_MIN_EASE = 1.3;
const SRS_MAX_INTERVAL_DAYS = 180;

function nextSrsState(
  prev: QuestionResult | undefined,
  correct: boolean,
  now: number,
): Pick<QuestionResult, "srsEase" | "srsInterval" | "srsDueAt" | "srsStreak" | "srsLapses"> {
  const prevEase = prev?.srsEase ?? SRS_DEFAULT_EASE;
  const prevInterval = prev?.srsInterval ?? 0;
  const prevStreak = prev?.srsStreak ?? 0;
  const prevLapses = prev?.srsLapses ?? 0;

  if (!correct) {
    // Lapse: drop ease, reset interval, push to tomorrow.
    const srsEase = Math.max(SRS_MIN_EASE, prevEase - 0.2);
    const srsInterval = 1;
    return {
      srsEase,
      srsInterval,
      srsDueAt: now + srsInterval * DAY_MS,
      srsStreak: 0,
      srsLapses: prevStreak > 0 ? prevLapses + 1 : prevLapses,
    };
  }

  const srsStreak = prevStreak + 1;
  let srsInterval: number;
  if (srsStreak === 1) srsInterval = 1;
  else if (srsStreak === 2) srsInterval = 3;
  else srsInterval = Math.min(SRS_MAX_INTERVAL_DAYS, Math.round((prevInterval || 3) * prevEase));
  const srsEase = Math.min(3.0, prevEase + 0.05);
  return {
    srsEase,
    srsInterval,
    srsDueAt: now + srsInterval * DAY_MS,
    srsStreak,
    srsLapses: prevLapses,
  };
}

export type MockAttempt = {
  trackKey: string;
  trackLabel: string;
  correct: number;
  total: number;
  durationSec: number;
  passed: boolean;
  ts: number;
};

export type ProgressData = {
  questions: Record<string, QuestionResult>;
  /** YYYY-MM-DD strings, sorted ascending. Days the user answered any question. */
  activeDates?: string[];
  /** Most recent mock-exam attempts (cap to last 50 across all tracks). */
  mockHistory?: MockAttempt[];
  /** Section ids the user has scrolled through (>= 50% visible). */
  readSections?: string[];
};

const empty = (): ProgressData => ({ questions: {} });

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function shiftDay(date: string, delta: number): string {
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + delta);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function read(): ProgressData {
  if (typeof window === "undefined") return empty();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as ProgressData;
    if (!parsed || typeof parsed !== "object" || !parsed.questions) {
      return empty();
    }
    return parsed;
  } catch {
    return empty();
  }
}

function write(data: ProgressData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  } catch {
    /* quota or disabled storage */
  }
}

export function recordAnswer(questionId: string, correct: boolean): void {
  const data = read();
  const existing = data.questions[questionId];
  const now = Date.now();
  const srs = nextSrsState(existing, correct, now);
  data.questions[questionId] = {
    correct,
    attempts: (existing?.attempts ?? 0) + 1,
    lastAt: now,
    ...srs,
  };
  // Streak bookkeeping: record today as an active study day.
  const today = todayStr();
  const dates = data.activeDates ?? [];
  if (!dates.includes(today)) {
    dates.push(today);
    dates.sort();
    data.activeDates = dates;
  }
  write(data);
}

export function recordMockAttempt(attempt: MockAttempt): void {
  const data = read();
  const history = data.mockHistory ?? [];
  history.unshift(attempt);
  // Cap history to the most recent 50 attempts to avoid unbounded growth.
  data.mockHistory = history.slice(0, 50);
  // Also count this as an active day.
  const today = todayStr();
  const dates = data.activeDates ?? [];
  if (!dates.includes(today)) {
    dates.push(today);
    dates.sort();
    data.activeDates = dates;
  }
  write(data);
}

export type StreakInfo = {
  current: number;
  best: number;
  totalActiveDays: number;
};

export function getStreak(data?: ProgressData): StreakInfo {
  const d = data ?? read();
  const dates = d.activeDates ?? [];
  if (dates.length === 0) return { current: 0, best: 0, totalActiveDays: 0 };

  const set = new Set(dates);
  const sorted = [...dates].sort();

  // Best streak across the whole history.
  let best = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === shiftDay(sorted[i - 1], 1)) {
      run += 1;
    } else {
      best = Math.max(best, run);
      run = 1;
    }
  }
  best = Math.max(best, run);

  // Current streak: count back consecutively from today (or yesterday if
  // today is not yet active so the streak isn't broken at midnight).
  const today = todayStr();
  const yesterday = shiftDay(today, -1);
  let cursor: string | null = null;
  if (set.has(today)) cursor = today;
  else if (set.has(yesterday)) cursor = yesterday;

  let current = 0;
  while (cursor && set.has(cursor)) {
    current += 1;
    cursor = shiftDay(cursor, -1);
  }

  return { current, best, totalActiveDays: dates.length };
}

export function getActiveDates(data?: ProgressData): string[] {
  const d = data ?? read();
  return [...(d.activeDates ?? [])];
}

export function isActiveToday(data?: ProgressData): boolean {
  const d = data ?? read();
  return (d.activeDates ?? []).includes(todayStr());
}

export function getMockHistory(trackKey?: string): MockAttempt[] {
  const data = read();
  const all = data.mockHistory ?? [];
  if (!trackKey) return all;
  return all.filter((a) => a.trackKey === trackKey);
}

export function markSectionRead(sectionId: string): void {
  const data = read();
  const set = new Set(data.readSections ?? []);
  if (set.has(sectionId)) return;
  set.add(sectionId);
  data.readSections = [...set];
  // Bump active day too — reading counts as studying.
  const today = todayStr();
  const dates = data.activeDates ?? [];
  if (!dates.includes(today)) {
    dates.push(today);
    dates.sort();
    data.activeDates = dates;
  }
  write(data);
}

export function getReadSections(): Set<string> {
  return new Set(read().readSections ?? []);
}

export function summarizeReading(
  sectionIds: readonly string[],
  data?: ProgressData,
): { total: number; read: number; pct: number } {
  const d = data ?? read();
  const set = new Set(d.readSections ?? []);
  let count = 0;
  for (const id of sectionIds) {
    if (set.has(id)) count += 1;
  }
  const total = sectionIds.length;
  const pct = total === 0 ? 0 : Math.round((count / total) * 100);
  return { total, read: count, pct };
}

/** Serialize current progress for backup. */
export function exportProgress(): string {
  const data = read();
  const payload = {
    schema: "toukei-app:progress:v1",
    exportedAt: new Date().toISOString(),
    data,
  };
  return JSON.stringify(payload, null, 2);
}

export type ImportResult =
  | { ok: true; counts: { questions: number; mocks: number; readSections: number; activeDays: number } }
  | { ok: false; error: string };

/** Replace current progress with the supplied payload. Validates schema. */
export function importProgress(jsonText: string): ImportResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    return { ok: false, error: "JSON が読み込めません" };
  }
  if (!parsed || typeof parsed !== "object") {
    return { ok: false, error: "形式が無効です" };
  }
  const obj = parsed as { schema?: string; data?: ProgressData };
  if (obj.schema !== "toukei-app:progress:v1") {
    return { ok: false, error: "対応していないスキーマです" };
  }
  const incoming = obj.data;
  if (
    !incoming ||
    typeof incoming !== "object" ||
    typeof incoming.questions !== "object"
  ) {
    return { ok: false, error: "データ本体が見つかりません" };
  }
  // Pass-through write — we trust our own export but cap obvious overflow.
  const cleaned: ProgressData = {
    questions: incoming.questions ?? {},
    activeDates: Array.isArray(incoming.activeDates)
      ? [...new Set(incoming.activeDates)].sort()
      : undefined,
    mockHistory: Array.isArray(incoming.mockHistory)
      ? incoming.mockHistory.slice(0, 50)
      : undefined,
    readSections: Array.isArray(incoming.readSections)
      ? [...new Set(incoming.readSections)]
      : undefined,
  };
  write(cleaned);
  return {
    ok: true,
    counts: {
      questions: Object.keys(cleaned.questions).length,
      mocks: cleaned.mockHistory?.length ?? 0,
      readSections: cleaned.readSections?.length ?? 0,
      activeDays: cleaned.activeDates?.length ?? 0,
    },
  };
}

export function getProgress(): ProgressData {
  return read();
}

export function getResultFor(questionId: string): QuestionResult | undefined {
  return read().questions[questionId];
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

export function getWrongQuestionIds(): string[] {
  const data = read();
  return Object.entries(data.questions)
    .filter(([, r]) => !r.correct)
    .sort(([, a], [, b]) => b.lastAt - a.lastAt)
    .map(([id]) => id);
}

/**
 * SRS-due question ids: any answered question whose srsDueAt is on or before
 * the cutoff (defaults to end of today). Items without SRS metadata fall back
 * to the legacy "wrong = due now" rule so old data still surfaces.
 *
 * Sorted by srsDueAt ascending (most-overdue first), with legacy items first.
 */
export function getDueQuestionIds(now: number = Date.now()): string[] {
  const data = read();
  const endOfToday = (() => {
    const d = new Date(now);
    d.setHours(23, 59, 59, 999);
    return d.getTime();
  })();
  type Row = { id: string; due: number; legacy: boolean };
  const rows: Row[] = [];
  for (const [id, r] of Object.entries(data.questions)) {
    if (r.srsDueAt === undefined) {
      if (!r.correct) rows.push({ id, due: r.lastAt, legacy: true });
      continue;
    }
    if (r.srsDueAt <= endOfToday) {
      rows.push({ id, due: r.srsDueAt, legacy: false });
    }
  }
  rows.sort((a, b) => {
    if (a.legacy !== b.legacy) return a.legacy ? -1 : 1;
    return a.due - b.due;
  });
  return rows.map((r) => r.id);
}

/** All scheduled items, sorted by next due date ascending. */
export function getScheduledQuestionIds(): { id: string; dueAt: number }[] {
  const data = read();
  const out: { id: string; dueAt: number }[] = [];
  for (const [id, r] of Object.entries(data.questions)) {
    if (r.srsDueAt !== undefined) out.push({ id, dueAt: r.srsDueAt });
  }
  out.sort((a, b) => a.dueAt - b.dueAt);
  return out;
}

export type SrsStats = {
  dueNow: number;
  dueToday: number;
  dueTomorrow: number;
  dueThisWeek: number;
  scheduled: number;
  legacyWrong: number;
};

export function getSrsStats(now: number = Date.now()): SrsStats {
  const data = read();
  const startOfToday = (() => {
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  })();
  const endOfToday = startOfToday + DAY_MS - 1;
  const endOfTomorrow = endOfToday + DAY_MS;
  const endOfWeek = startOfToday + 7 * DAY_MS - 1;

  let dueNow = 0;
  let dueToday = 0;
  let dueTomorrow = 0;
  let dueThisWeek = 0;
  let scheduled = 0;
  let legacyWrong = 0;
  for (const r of Object.values(data.questions)) {
    if (r.srsDueAt === undefined) {
      if (!r.correct) legacyWrong += 1;
      continue;
    }
    scheduled += 1;
    if (r.srsDueAt <= now) dueNow += 1;
    if (r.srsDueAt <= endOfToday) dueToday += 1;
    else if (r.srsDueAt <= endOfTomorrow) dueTomorrow += 1;
    if (r.srsDueAt <= endOfWeek) dueThisWeek += 1;
  }
  return { dueNow, dueToday, dueTomorrow, dueThisWeek, scheduled, legacyWrong };
}

export type TrackProgress = {
  total: number;
  correct: number;
  wrong: number;
  attempted: number;
  pct: number;
};

export function summarizeTrack(
  questionIds: readonly string[],
  data?: ProgressData,
): TrackProgress {
  const d = data ?? read();
  let correct = 0;
  let wrong = 0;
  for (const id of questionIds) {
    const r = d.questions[id];
    if (!r) continue;
    if (r.correct) correct += 1;
    else wrong += 1;
  }
  const attempted = correct + wrong;
  const total = questionIds.length;
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  return { total, correct, wrong, attempted, pct };
}
