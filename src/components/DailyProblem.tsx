"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MixedText } from "./MixedText";
import { tracks } from "@/lib/all-questions";
import {
  PROGRESS_EVENT,
  getProgress,
  recordAnswer,
  type ProgressData,
} from "@/lib/progress";
import type { Question } from "@/types/content";

const circled = (i: number) => String.fromCharCode(0x2460 + i);

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

/**
 * Pick today's question deterministically. We rotate level by weekday so
 * users see a mix, and fall back to the global pool if a level is empty.
 */
function pickTodaysQuestion(date: string): {
  q: Question;
  trackKey: string;
  trackLabel: string;
  trackHref: string;
} {
  const all = tracks.flatMap((t) =>
    t.questions.map((q) => ({
      q,
      trackKey: t.key,
      trackLabel: t.label,
      trackHref: t.href,
    })),
  );
  const idx = hashString(date) % all.length;
  return all[idx];
}

export function DailyProblem() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<ProgressData>({ questions: {} });
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
    setData(getProgress());
    const handler = () => setData(getProgress());
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, []);

  const today = useMemo(() => todayKey(), []);
  const todays = useMemo(() => pickTodaysQuestion(today), [today]);

  if (!mounted) {
    return (
      <section className="mb-12 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">Daily</div>
        <h2 className="text-2xl font-bold mb-3">今日の 1 問</h2>
        <p className="text-sm text-[var(--muted)] ui-sans">読み込み中…</p>
      </section>
    );
  }

  const previousResult = data.questions[todays.q.id];
  const alreadyAnsweredToday =
    previousResult &&
    new Date(previousResult.lastAt).toISOString().slice(0, 10) === today;

  // If user already answered today, show the answered state.
  const showAnswered = revealed || alreadyAnsweredToday;
  const isCorrect = revealed
    ? selected === todays.q.correctIndex
    : alreadyAnsweredToday
      ? previousResult?.correct
      : false;

  function handleSelect(cIdx: number) {
    if (showAnswered) return;
    setSelected(cIdx);
  }

  function handleReveal() {
    if (selected === null) return;
    setRevealed(true);
    recordAnswer(todays.q.id, selected === todays.q.correctIndex);
  }

  return (
    <section className="mb-12 paper rounded-lg p-6 md:p-7">
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
        <div>
          <div className="chapter-eyebrow mb-1">Daily</div>
          <h2 className="text-2xl font-bold">今日の 1 問</h2>
        </div>
        <Link
          href={todays.trackHref}
          className="text-xs px-2.5 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)] ui-sans"
        >
          出題: {todays.trackLabel} →
        </Link>
      </div>

      <div className="text-xs text-[var(--muted)] mb-3 ui-sans">
        {today.replaceAll("-", "/")} · {todays.q.category}
      </div>

      <div className="mb-5 leading-relaxed">
        <MixedText text={todays.q.question} />
      </div>

      <div className="space-y-2 ui-sans">
        {todays.q.choices.map((choice, cIdx) => {
          const isSelected = selected === cIdx;
          const isChoiceCorrect = showAnswered && cIdx === todays.q.correctIndex;
          const isChoiceWrong =
            showAnswered && isSelected && cIdx !== todays.q.correctIndex;
          const base =
            "w-full text-left px-4 py-2.5 rounded border transition";
          const state = isChoiceCorrect
            ? "bg-green-50 border-green-500 dark:bg-green-950/40"
            : isChoiceWrong
              ? "bg-red-50 border-red-500 dark:bg-red-950/40"
              : isSelected
                ? "bg-blue-50 border-blue-500 dark:bg-blue-950/40"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]";
          return (
            <button
              key={cIdx}
              type="button"
              onClick={() => handleSelect(cIdx)}
              disabled={showAnswered}
              className={`${base} ${state} ${showAnswered ? "cursor-default" : "cursor-pointer"}`}
            >
              <span className="mr-2 font-bold">{circled(cIdx)}</span>
              <MixedText text={choice} />
            </button>
          );
        })}
      </div>

      {!showAnswered ? (
        <div className="mt-5 flex items-center gap-3 ui-sans text-sm">
          <button
            type="button"
            onClick={handleReveal}
            disabled={selected === null}
            className="px-5 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
          >
            解答する
          </button>
          <span className="text-xs text-[var(--muted)]">
            毎日 0 時に問題が更新されます
          </span>
        </div>
      ) : (
        <div className="mt-5 p-4 bg-[var(--background)] border border-[var(--page-border)] rounded text-sm">
          <div className="font-bold mb-2 ui-sans flex items-center gap-2">
            <span
              className={
                isCorrect
                  ? "text-green-700 dark:text-green-400"
                  : "text-red-700 dark:text-red-400"
              }
            >
              {isCorrect ? "✓ 正解" : "✗ 不正解"}
            </span>
            {!isCorrect && (
              <span className="text-[var(--muted)] font-normal">
                正解: {circled(todays.q.correctIndex)}
              </span>
            )}
            {alreadyAnsweredToday && !revealed && (
              <span className="ml-auto text-[10px] text-[var(--muted)] font-normal">
                本日解答済み
              </span>
            )}
          </div>
          <div className="leading-relaxed text-[var(--muted-strong)]">
            <MixedText text={todays.q.explanation} />
          </div>
        </div>
      )}
    </section>
  );
}
