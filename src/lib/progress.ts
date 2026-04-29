"use client";

const STORAGE_KEY = "toukei-app:progress:v1";
export const PROGRESS_EVENT = "toukei-progress-update";

export type QuestionResult = {
  correct: boolean;
  attempts: number;
  lastAt: number;
};

export type ProgressData = {
  questions: Record<string, QuestionResult>;
};

const empty = (): ProgressData => ({ questions: {} });

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
  write(data);
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
