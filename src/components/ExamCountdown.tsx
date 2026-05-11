"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  EXAM_TARGET_EVENT,
  computeCountdown,
  getExamTarget,
  type ExamTarget,
} from "@/lib/exam-target";

export function ExamCountdown() {
  const [mounted, setMounted] = useState(false);
  const [target, setTarget] = useState<ExamTarget | null>(null);

  useEffect(() => {
    setMounted(true);
    setTarget(getExamTarget());
    const handler = () => setTarget(getExamTarget());
    window.addEventListener(EXAM_TARGET_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EXAM_TARGET_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  if (!mounted) return null;

  if (!target) {
    return (
      <section className="mb-12 paper rounded-lg p-5 md:p-6 border-l-4 border-[var(--page-border-strong)]">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <div>
            <div className="chapter-eyebrow mb-1">Exam Target</div>
            <h2 className="text-base font-bold">受験する検定を決めましょう</h2>
            <p className="text-xs text-[var(--muted)] ui-sans mt-1 leading-relaxed">
              目標を設定すると、ホーム画面に「あと◯日」のカウントダウンと推奨ペースが表示されます。
            </p>
          </div>
          <Link
            href="/plan"
            className="text-xs px-3 py-1.5 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] ui-sans whitespace-nowrap"
          >
            目標を設定 →
          </Link>
        </div>
      </section>
    );
  }

  const c = computeCountdown(target);
  const examPassed = c.daysLeft === 0;
  const urgent = c.daysLeft > 0 && c.daysLeft <= 30;
  const accent = examPassed
    ? "border-gray-400"
    : urgent
      ? "border-red-500"
      : c.onPace
        ? "border-green-500"
        : "border-amber-500";

  return (
    <section
      className={`mb-12 paper rounded-lg p-5 md:p-6 border-l-4 ${accent}`}
    >
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
        <div>
          <div className="chapter-eyebrow mb-1">Exam Target</div>
          <h2 className="text-base font-bold">
            <Link href={target.href} className="hover:underline">
              {target.certLabel}
            </Link>
          </h2>
          <div className="text-xs text-[var(--muted)] ui-sans mt-0.5">
            目標日: {target.date.replaceAll("-", "/")}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans">
            残り
          </div>
          <div className="text-3xl md:text-4xl font-bold tabular-nums leading-none">
            {c.daysLeft}
            <span className="text-sm text-[var(--muted)] font-normal ml-1">
              日
            </span>
          </div>
          <div className="text-[10px] text-[var(--muted)] ui-sans">
            約 {c.weeksLeft.toFixed(1)} 週
          </div>
        </div>
      </div>

      {/* Progress bar from setAt → target */}
      <div className="h-2 rounded-full bg-[var(--background)] border border-[var(--page-border)] overflow-hidden mb-3">
        <div
          className={`h-full transition-all ${
            urgent ? "bg-red-500" : "bg-[var(--accent)]"
          }`}
          style={{ width: `${c.progressPct}%` }}
          aria-label={`期間進捗 ${c.progressPct}%`}
        />
      </div>

      {!examPassed && (
        <div className="grid grid-cols-2 gap-3 text-center text-xs ui-sans">
          <div className="paper rounded p-2.5 border border-[var(--page-border)]">
            <div className="text-[10px] text-[var(--muted)]">現在の確保</div>
            <div className="text-base font-bold tabular-nums">
              {target.hoursPerWeek}
              <span className="text-[10px] text-[var(--muted)] ml-0.5">時間/週</span>
            </div>
          </div>
          <div
            className={`paper rounded p-2.5 border ${
              c.onPace
                ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950/20"
                : "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20"
            }`}
          >
            <div className="text-[10px] text-[var(--muted)]">推奨ペース</div>
            <div className="text-base font-bold tabular-nums">
              {c.recommendedWeeklyHours}
              <span className="text-[10px] text-[var(--muted)] ml-0.5">時間/週</span>
            </div>
          </div>
        </div>
      )}

      {!examPassed && !c.onPace && (
        <p className="text-xs text-amber-800 dark:text-amber-300 ui-sans mt-3 leading-relaxed">
          ⚠️ 推奨ペースに足りていません。週あたり{" "}
          <strong>{c.recommendedWeeklyHours - target.hoursPerWeek} 時間</strong>{" "}
          増やすか、目標日を延ばすことを検討してください。
        </p>
      )}

      {examPassed && (
        <p className="text-xs text-[var(--muted-strong)] ui-sans mt-2">
          目標日を過ぎました。お疲れ様でした！
          <Link href="/plan" className="text-[var(--link)] hover:underline ml-1">
            次の目標を設定 →
          </Link>
        </p>
      )}

      <div className="mt-3 flex items-center justify-end ui-sans text-[10px]">
        <Link
          href="/plan"
          className="text-[var(--muted)] hover:text-[var(--link)] hover:underline"
        >
          学習プラン計算へ →
        </Link>
      </div>
    </section>
  );
}
