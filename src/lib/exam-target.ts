"use client";

const STORAGE_KEY = "toukei-app:exam-target:v1";
export const EXAM_TARGET_EVENT = "toukei-exam-target-update";

/** Typical study-hours estimate per certification, used by the planner. */
export type CertPreset = {
  key: string;
  label: string;
  href: string;
  /** Recommended total study hours from zero (rough midpoint). */
  hours: number;
};

export const CERT_PRESETS: CertPreset[] = [
  { key: "grade-4", label: "統計検定 4級", href: "/textbook/grade-4", hours: 30 },
  { key: "grade-3", label: "統計検定 3級", href: "/textbook/grade-3", hours: 60 },
  { key: "grade-2", label: "統計検定 2級", href: "/textbook/grade-2", hours: 150 },
  { key: "grade-pre1", label: "統計検定 準1級", href: "/textbook/grade-pre1", hours: 300 },
  { key: "grade-1", label: "統計検定 1級", href: "/textbook/grade-1", hours: 500 },
  { key: "g-test", label: "G検定", href: "/certs/g-test", hours: 80 },
  { key: "e-shikaku", label: "E資格", href: "/certs/e-shikaku", hours: 250 },
  { key: "ds-literacy", label: "DSリテラシーレベル", href: "/certs/ds-literacy", hours: 30 },
  { key: "ds-basic", label: "DS基礎レベル", href: "/certs/ds-basic", hours: 80 },
  { key: "survey", label: "統計調査士", href: "/certs/survey", hours: 80 },
  { key: "survey-specialist", label: "専門統計調査士", href: "/certs/survey-specialist", hours: 180 },
  { key: "qc-kentei", label: "QC検定", href: "/certs/qc-kentei", hours: 80 },
  { key: "genai-passport", label: "生成AIパスポート", href: "/certs/genai-passport", hours: 40 },
];

export type ExamTarget = {
  certKey: string;
  certLabel: string;
  href: string;
  /** Target date in YYYY-MM-DD. */
  date: string;
  hoursPerWeek: number;
  /** Set timestamp — used for "since X" display & progress %. */
  setAt: number;
};

function read(): ExamTarget | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ExamTarget;
    if (!parsed?.certKey || !parsed?.date) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getExamTarget(): ExamTarget | null {
  return read();
}

export function setExamTarget(target: ExamTarget): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(target));
    window.dispatchEvent(new Event(EXAM_TARGET_EVENT));
  } catch {
    /* ignore */
  }
}

export function clearExamTarget(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EXAM_TARGET_EVENT));
}

function isoToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function diffDays(fromIso: string, toIso: string): number {
  const [fy, fm, fd] = fromIso.split("-").map(Number);
  const [ty, tm, td] = toIso.split("-").map(Number);
  const a = new Date(fy, fm - 1, fd).getTime();
  const b = new Date(ty, tm - 1, td).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

export type Countdown = {
  daysLeft: number;
  weeksLeft: number;
  /** Recommended weekly hours to clear remaining workload. */
  recommendedWeeklyHours: number;
  /** Whether the user's hoursPerWeek meets recommended. */
  onPace: boolean;
  /** % of total elapsed since setAt. 0..100. */
  progressPct: number;
};

export function computeCountdown(
  target: ExamTarget,
  now: Date = new Date(),
): Countdown {
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const daysLeft = Math.max(0, diffDays(today, target.date));
  const weeksLeft = daysLeft / 7;
  const preset = CERT_PRESETS.find((p) => p.key === target.certKey);
  const totalHours = preset?.hours ?? 100;
  const recommendedWeeklyHours =
    weeksLeft <= 0 ? totalHours : Math.ceil(totalHours / weeksLeft);
  const onPace = target.hoursPerWeek >= recommendedWeeklyHours;

  // Progress as days elapsed since setAt vs total span set→target.
  const setIso = (() => {
    const d = new Date(target.setAt);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  })();
  const totalSpan = Math.max(1, diffDays(setIso, target.date));
  const elapsed = Math.max(0, diffDays(setIso, today));
  const progressPct = Math.min(100, Math.round((elapsed / totalSpan) * 100));

  return { daysLeft, weeksLeft, recommendedWeeklyHours, onPace, progressPct };
}

export { isoToday };
