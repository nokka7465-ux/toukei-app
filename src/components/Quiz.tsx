"use client";

import { useEffect, useState } from "react";
import type { Difficulty, Question } from "@/types/content";
import { MixedText } from "./MixedText";
import { ShareButton } from "./ShareButton";

type PreviousScore = {
  correct: number;
  total: number;
  ts: number;
};

const STORAGE_PREFIX = "toukei-app:quiz:";

function loadPrevious(quizKey: string): PreviousScore | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + quizKey);
    if (!raw) return null;
    return JSON.parse(raw) as PreviousScore;
  } catch {
    return null;
  }
}

function savePrevious(quizKey: string, score: PreviousScore) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_PREFIX + quizKey, JSON.stringify(score));
  } catch {
    /* ignore quota or privacy errors */
  }
}

function formatRelative(ts: number): string {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return "たった今";
  if (min < 60) return `${min} 分前`;
  const hour = Math.floor(min / 60);
  if (hour < 24) return `${hour} 時間前`;
  const day = Math.floor(hour / 24);
  if (day < 30) return `${day} 日前`;
  const month = Math.floor(day / 30);
  if (month < 12) return `${month} か月前`;
  return `${Math.floor(month / 12)} 年前`;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const difficultyStyle: Record<
  Difficulty,
  { label: string; stars: string; className: string }
> = {
  1: {
    label: "基礎",
    stars: "★☆☆",
    className:
      "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  },
  2: {
    label: "標準",
    stars: "★★☆",
    className:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  },
  3: {
    label: "応用",
    stars: "★★★",
    className: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
  },
};

export function Quiz({
  questions,
  quizKey,
  shareUrl,
  shareLabel,
}: {
  questions: Question[];
  quizKey?: string;
  shareUrl?: string;
  shareLabel?: string;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(questions.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);
  const [previous, setPrevious] = useState<PreviousScore | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (quizKey) {
      setPrevious(loadPrevious(quizKey));
    }
  }, [quizKey]);

  useEffect(() => {
    if (submitted || startedAt === null) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [submitted, startedAt]);

  // Start the elapsed timer the first time the user selects any answer.
  useEffect(() => {
    if (startedAt === null && answers.some((a) => a !== null)) {
      setStartedAt(Date.now());
    }
  }, [answers, startedAt]);

  const handleSelect = (qIdx: number, choiceIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = choiceIdx;
      return next;
    });
  };

  const handleSubmit = () => {
    const correct = answers.filter(
      (a, i) => a === questions[i].correctIndex,
    ).length;
    if (quizKey) {
      const score: PreviousScore = {
        correct,
        total: questions.length,
        ts: Date.now(),
      };
      savePrevious(quizKey, score);
      setPrevious(score);
    }
    setSubmitted(true);
  };
  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const correctCount = submitted
    ? answers.filter((a, i) => a === questions[i].correctIndex).length
    : 0;
  const allAnswered = answers.every((a) => a !== null);
  const circled = (i: number) => String.fromCharCode(0x2460 + i);

  return (
    <div className="space-y-6">
      {(startedAt !== null || submitted) && (
        <div className="ui-sans text-xs text-[var(--muted)] flex items-center gap-2 sticky top-16 z-10 bg-[var(--background)]/80 backdrop-blur-sm py-1 -mx-2 px-2 rounded">
          <span aria-hidden="true">⏱</span>
          <span>
            経過時間 <span className="font-bold text-[var(--foreground)]">{formatDuration(elapsed)}</span>
          </span>
        </div>
      )}
      {previous && !submitted && (
        <div className="paper rounded-lg p-4 text-sm flex items-center justify-between flex-wrap gap-2 ui-sans">
          <div>
            <span className="text-[var(--muted)] mr-2">前回の記録:</span>
            <span className="font-bold">
              {previous.correct} / {previous.total} 問正解
            </span>
            <span className="text-xs text-[var(--muted)] ml-2">
              ({formatRelative(previous.ts)})
            </span>
          </div>
          <div className="text-xs text-[var(--muted)]">
            ※ 記録はあなたのブラウザにのみ保存されます
          </div>
        </div>
      )}
      {questions.map((q, qIdx) => {
        const selected = answers[qIdx];
        const isCorrect = submitted && selected === q.correctIndex;
        return (
          <div key={q.id} className="paper rounded-lg p-5">
            <div className="text-xs text-[var(--muted)] mb-3 flex items-center gap-2 flex-wrap ui-sans">
              <span className="font-bold">問 {qIdx + 1}</span>
              <span>·</span>
              <span>{q.category}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider ${difficultyStyle[q.difficulty].className}`}
                title={`難易度: ${difficultyStyle[q.difficulty].label}`}
              >
                {difficultyStyle[q.difficulty].stars}{" "}
                {difficultyStyle[q.difficulty].label}
              </span>
            </div>
            <div className="mb-4 leading-relaxed">
              <MixedText text={q.question} />
            </div>
            <div className="space-y-2 ui-sans">
              {q.choices.map((choice, cIdx) => {
                const isSelected = selected === cIdx;
                const isChoiceCorrect = submitted && cIdx === q.correctIndex;
                const isChoiceWrong =
                  submitted && isSelected && cIdx !== q.correctIndex;
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
                    onClick={() => handleSelect(qIdx, cIdx)}
                    disabled={submitted}
                    className={`${base} ${state} ${submitted ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span className="mr-2 font-bold">{circled(cIdx)}</span>
                    <MixedText text={choice} />
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-4 p-4 bg-[var(--background)] border border-[var(--page-border)] rounded text-sm">
                <div className="font-bold mb-2 ui-sans">
                  {isCorrect ? "✓ 正解" : "✗ 不正解"}
                  {!isCorrect && (
                    <span className="ml-2 font-normal text-[var(--muted)]">
                      正解: {circled(q.correctIndex)}
                    </span>
                  )}
                </div>
                <div className="leading-relaxed">
                  <MixedText text={q.explanation} />
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="flex items-center gap-4 pt-2 ui-sans flex-wrap">
        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600 font-bold"
          >
            採点する
          </button>
        ) : (
          <>
            <div className="text-lg font-bold">
              結果: {correctCount} / {questions.length} 問正解
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
            >
              もう一度
            </button>
            {shareUrl && (
              <ShareButton
                url={shareUrl}
                text={`${shareLabel ?? "統計検定の演習問題"}を解きました: ${correctCount}/${questions.length} 問正解!`}
                hashtags={["統計検定", "統計検定学習帳"]}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
