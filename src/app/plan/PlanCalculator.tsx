"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Phase = {
  num: number;
  emoji: string;
  title: string;
  hoursMin: number;
  hoursMax: number;
  href: string;
};

const PHASES: Phase[] = [
  { num: 1, emoji: "📐", title: "数学基礎", hoursMin: 30, hoursMax: 60, href: "/math" },
  { num: 2, emoji: "📊", title: "統計学(基礎)", hoursMin: 60, hoursMax: 120, href: "/textbook/grade-3" },
  { num: 3, emoji: "🔬", title: "統計学(応用)", hoursMin: 120, hoursMax: 250, href: "/textbook/grade-2" },
  { num: 4, emoji: "🤖", title: "機械学習・DL", hoursMin: 120, hoursMax: 300, href: "/certs/e-shikaku" },
  { num: 5, emoji: "🎓", title: "AI 系検定", hoursMin: 40, hoursMax: 200, href: "/exam-info" },
];

type Pace = "min" | "mid" | "max";

const PACE_LABEL: Record<Pace, string> = {
  min: "最短(本気で集中)",
  mid: "標準(無理なく)",
  max: "じっくり(理解優先)",
};

function isoToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function diffDays(fromIso: string, toIso: string): number {
  const [fy, fm, fd] = fromIso.split("-").map(Number);
  const [ty, tm, td] = toIso.split("-").map(Number);
  const a = new Date(fy, fm - 1, fd).getTime();
  const b = new Date(ty, tm - 1, td).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

function pickHours(p: Phase, pace: Pace): number {
  if (pace === "min") return p.hoursMin;
  if (pace === "max") return p.hoursMax;
  return Math.round((p.hoursMin + p.hoursMax) / 2);
}

export function PlanCalculator() {
  const [today, setToday] = useState<string>("2026-01-01");
  const [targetDate, setTargetDate] = useState<string>("2027-01-01");
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(7);
  const [startPhase, setStartPhase] = useState<number>(1);
  const [pace, setPace] = useState<Pace>("mid");

  // Initialise after mount so SSR doesn't lock in a stale date.
  useEffect(() => {
    const t = isoToday();
    setToday(t);
    // Default target = 1 year from today
    const oneYear = new Date(t);
    oneYear.setFullYear(oneYear.getFullYear() + 1);
    setTargetDate(
      `${oneYear.getFullYear()}-${String(oneYear.getMonth() + 1).padStart(2, "0")}-${String(oneYear.getDate()).padStart(2, "0")}`,
    );
  }, []);

  const result = useMemo(() => {
    const remainingDays = Math.max(1, diffDays(today, targetDate));
    const remainingWeeks = remainingDays / 7;
    const totalAvailableHours = remainingWeeks * hoursPerWeek;
    const activePhases = PHASES.filter((p) => p.num >= startPhase);
    const requiredTotal = activePhases.reduce(
      (acc, p) => acc + pickHours(p, pace),
      0,
    );

    // Distribute time proportionally; produce per-phase deadlines.
    let cumHours = 0;
    const breakdown = activePhases.map((p) => {
      const h = pickHours(p, pace);
      const startHours = cumHours;
      cumHours += h;
      const startWeek = startHours / hoursPerWeek;
      const endWeek = cumHours / hoursPerWeek;
      const startISO = addDays(today, Math.round(startWeek * 7));
      const endISO = addDays(today, Math.round(endWeek * 7));
      return { ...p, hours: h, startISO, endISO };
    });

    return {
      remainingDays,
      remainingWeeks,
      totalAvailableHours,
      requiredTotal,
      gap: requiredTotal - totalAvailableHours,
      breakdown,
      finishISO: addDays(today, Math.round((cumHours / hoursPerWeek) * 7)),
    };
  }, [today, targetDate, hoursPerWeek, startPhase, pace]);

  const feasible = result.gap <= 0;

  return (
    <div className="space-y-6">
      <div className="paper rounded-lg p-6 md:p-7 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="text-sm ui-sans">
            <span className="block font-bold mb-1.5">📅 目標日(検定 / 就職など)</span>
            <input
              type="date"
              value={targetDate}
              min={today}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
            />
            <span className="text-[10px] text-[var(--muted)]">
              残り {result.remainingDays} 日 ({result.remainingWeeks.toFixed(1)} 週)
            </span>
          </label>
          <label className="text-sm ui-sans">
            <span className="block font-bold mb-1.5">⏱ 1 週間に確保できる時間</span>
            <input
              type="number"
              value={hoursPerWeek}
              min={1}
              max={80}
              step={0.5}
              onChange={(e) =>
                setHoursPerWeek(Math.max(1, Number(e.target.value) || 0))
              }
              className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
            />
            <span className="text-[10px] text-[var(--muted)]">
              週 {hoursPerWeek} 時間 = 1 日あたり約 {(hoursPerWeek / 7).toFixed(1)} 時間
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="text-sm ui-sans">
            <span className="block font-bold mb-1.5">🚩 開始フェーズ</span>
            <select
              value={startPhase}
              onChange={(e) => setStartPhase(Number(e.target.value))}
              className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
            >
              {PHASES.map((p) => (
                <option key={p.num} value={p.num}>
                  Phase {p.num} ─ {p.emoji} {p.title}
                </option>
              ))}
            </select>
            <span className="text-[10px] text-[var(--muted)]">
              既に習得済みのフェーズはスキップ可能
            </span>
          </label>
          <div className="text-sm ui-sans">
            <span className="block font-bold mb-1.5">🐢🐇 学習ペース</span>
            <div className="flex flex-wrap gap-2">
              {(["min", "mid", "max"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPace(p)}
                  className={`px-3 py-2 rounded border ${
                    pace === p
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 font-bold"
                      : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  {PACE_LABEL[p]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div
        className={`rounded-lg p-6 border-2 ${
          feasible
            ? "border-green-500 bg-green-50 dark:bg-green-950/30"
            : "border-amber-500 bg-amber-50 dark:bg-amber-950/30"
        }`}
      >
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {feasible ? (
              <>
                <span aria-hidden="true">✅</span> 達成可能
              </>
            ) : (
              <>
                <span aria-hidden="true">⚠️</span> ペース見直し推奨
              </>
            )}
          </h2>
          <div className="text-xs ui-sans text-[var(--muted-strong)]">
            必要 {result.requiredTotal} 時間 / 確保可能{" "}
            {Math.round(result.totalAvailableHours)} 時間
          </div>
        </div>
        <p className="text-sm leading-relaxed mt-3 text-[var(--muted-strong)]">
          {feasible ? (
            <>
              現在のペースで <strong>{result.finishISO.replaceAll("-", "/")}</strong>{" "}
              にロードマップを完走できます。目標日まで{" "}
              <strong>{Math.max(0, result.remainingDays - diffDays(today, result.finishISO))}</strong> 日の余裕あり。
            </>
          ) : (
            <>
              目標日までに必要な時間が <strong>{Math.round(result.gap)} 時間</strong>{" "}
              不足しています。次のいずれかを検討してください:
              <span className="block mt-2">
                ・週あたり時間を{" "}
                <strong>
                  {Math.ceil(result.requiredTotal / result.remainingWeeks)} 時間
                </strong>{" "}
                以上に増やす
                <br />
                ・目標日を{" "}
                <strong>
                  {addDays(
                    today,
                    Math.ceil(result.requiredTotal / hoursPerWeek) * 7,
                  ).replaceAll("-", "/")}
                </strong>{" "}
                以降にする
                <br />・既に習得済みのフェーズがあれば「開始フェーズ」を後ろに
              </span>
            </>
          )}
        </p>
      </div>

      {/* Per-phase breakdown */}
      <section className="paper rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">フェーズ別 ・ 完了見込み</h2>
        <ol className="space-y-3">
          {result.breakdown.map((p, i) => {
            const overdue =
              !feasible &&
              diffDays(today, p.endISO) > result.remainingDays &&
              i === result.breakdown.length - 1;
            return (
              <li
                key={p.num}
                className="border-l-4 border-[var(--accent)] pl-4 py-1"
              >
                <div className="flex items-baseline justify-between flex-wrap gap-2 ui-sans text-sm">
                  <span className="font-bold">
                    Phase {p.num} {p.emoji} {p.title}
                  </span>
                  <span className="text-xs text-[var(--muted)] tabular-nums">
                    {p.hours} 時間 / 約{" "}
                    {Math.round((p.hours / hoursPerWeek) * 7)} 日
                  </span>
                </div>
                <div className="text-xs text-[var(--muted-strong)] ui-sans mt-1">
                  {p.startISO.replaceAll("-", "/")} 〜{" "}
                  <span className={overdue ? "text-amber-700 dark:text-amber-400 font-bold" : ""}>
                    {p.endISO.replaceAll("-", "/")}
                  </span>{" "}
                  に完了予定
                </div>
                <Link
                  href={p.href}
                  className="text-xs text-[var(--link)] hover:underline ui-sans mt-1 inline-block"
                >
                  Phase {p.num} を始める →
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
