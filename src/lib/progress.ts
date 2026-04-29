"use client";

const STORAGE_KEY = "toukei-app:progress:v1";
export const PROGRESS_EVENT = "toukei-progress-update";

export type QuestionResult = {
  correct: boolean;
  attempts: number;
  lastAt: number;
};

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
  data.questions[questionId] = {
    correct,
    attempts: (existing?.attempts ?? 0) + 1,
    lastAt: Date.now(),
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

export function getMockHistory(trackKey?: string): MockAttempt[] {
  const data = read();
  const all = data.mockHistory ?? [];
  if (!trackKey) return all;
  return all.filter((a) => a.trackKey === trackKey);
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
