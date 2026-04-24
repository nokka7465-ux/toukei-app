"use client";

import { useState } from "react";
import type { Difficulty, Question } from "@/types/content";
import { MixedText } from "./MixedText";

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

export function Quiz({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(questions.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, choiceIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = choiceIdx;
      return next;
    });
  };

  const handleSubmit = () => setSubmitted(true);
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

      <div className="flex items-center gap-4 pt-2 ui-sans">
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
          </>
        )}
      </div>
    </div>
  );
}
