"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Question } from "@/types/content";
import { MixedText } from "./MixedText";
import { recordAnswer, recordMockAttempt, getMockHistory } from "@/lib/progress";
import type { MockAttempt } from "@/lib/progress";

const circled = (i: number) => String.fromCharCode(0x2460 + i);

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function shuffle<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

type Stage = "intro" | "running" | "finished";

export function MockExam({
  trackKey,
  trackLabel,
  questions,
  timeMinutes,
  questionTarget,
  passPct,
  practiceHref,
}: {
  trackKey: string;
  trackLabel: string;
  questions: Question[];
  timeMinutes: number;
  questionTarget: number;
  passPct: number;
  practiceHref: string;
}) {
  const [stage, setStage] = useState<Stage>("intro");
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState<MockAttempt[]>([]);

  useEffect(() => {
    setHistory(getMockHistory(trackKey));
  }, [trackKey]);

  const limitSeconds = timeMinutes * 60;
  const remaining =
    startedAt === null ? limitSeconds : Math.max(0, limitSeconds - elapsed);

  useEffect(() => {
    if (stage !== "running" || startedAt === null) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [stage, startedAt]);

  useEffect(() => {
    if (
      stage === "running" &&
      startedAt !== null &&
      elapsed >= limitSeconds
    ) {
      finalize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsed, limitSeconds, stage, startedAt]);

  function startExam() {
    const sample = shuffle(questions).slice(
      0,
      Math.min(questionTarget, questions.length),
    );
    setExamQuestions(sample);
    setAnswers(Array(sample.length).fill(null));
    setStartedAt(Date.now());
    setElapsed(0);
    setStage("running");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finalize() {
    const correctCount = examQuestions.reduce<number>(
      (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
      0,
    );
    examQuestions.forEach((q, i) => {
      if (answers[i] !== null) {
        recordAnswer(q.id, answers[i] === q.correctIndex);
      }
    });
    const pct =
      examQuestions.length === 0
        ? 0
        : Math.round((correctCount / examQuestions.length) * 100);
    const passed = pct >= passPct;
    const durationSec = Math.min(elapsed, limitSeconds);
    const attempt: MockAttempt = {
      trackKey,
      trackLabel,
      correct: correctCount,
      total: examQuestions.length,
      durationSec,
      passed,
      ts: Date.now(),
    };
    recordMockAttempt(attempt);
    setHistory((prev) => [attempt, ...prev]);
    setStage("finished");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSelect(qIdx: number, cIdx: number) {
    if (stage !== "running") return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = cIdx;
      return next;
    });
  }

  const answeredCount = answers.filter((a) => a !== null).length;

  // -----------------------------
  // INTRO STAGE
  // -----------------------------
  if (stage === "intro") {
    return (
      <div className="space-y-6">
        <div className="paper rounded-lg p-6 md:p-7">
          <div className="chapter-eyebrow mb-2">Mock Exam</div>
          <h2 className="text-2xl font-bold mb-3">本番形式で挑戦</h2>
          <ul className="space-y-2 text-sm text-[var(--muted-strong)] mb-5 ui-sans">
            <li>
              ⏱ 制限時間: <strong>{timeMinutes} 分</strong>
            </li>
            <li>
              📋 出題数:{" "}
              <strong>
                {Math.min(questionTarget, questions.length)} 問
              </strong>{" "}
              ({questions.length} 問のプールからランダム抽出)
            </li>
            <li>
              🎯 合格基準: <strong>{passPct}% 以上正解</strong>
            </li>
            <li>
              🚫 試験中は<strong>各問の解答・解説を表示しません</strong>
              。すべて解いてから「採点」を押すか、時間切れで採点されます。
            </li>
            <li>
              💾 結果はブラウザに保存され、ここに履歴として残ります。
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 ui-sans text-sm">
            <button
              type="button"
              onClick={startExam}
              className="px-6 py-2.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
            >
              模試を開始する →
            </button>
            <Link
              href={practiceHref}
              className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
            >
              通常演習に戻る
            </Link>
          </div>
        </div>

        {history.length > 0 && (
          <div className="paper rounded-lg p-5">
            <div className="chapter-eyebrow mb-2">History</div>
            <h3 className="text-sm font-bold mb-3 ui-sans">
              これまでの受験履歴 ({history.length} 回)
            </h3>
            <ul className="space-y-1.5 text-xs ui-sans">
              {history.slice(0, 10).map((a) => {
                const pct = Math.round((a.correct / a.total) * 100);
                return (
                  <li
                    key={a.ts}
                    className="flex items-center justify-between border-t border-[var(--page-border)] pt-1.5 first:border-t-0 first:pt-0"
                  >
                    <span className="text-[var(--muted)]">
                      {new Date(a.ts).toLocaleString("ja-JP", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="tabular-nums">
                      {a.correct}/{a.total}{" "}
                      <span className="text-[var(--muted)]">({pct}%)</span>
                    </span>
                    <span className="text-[var(--muted)]">
                      {formatDuration(a.durationSec)}
                    </span>
                    <span
                      className={
                        a.passed
                          ? "px-2 py-0.5 rounded font-bold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                          : "px-2 py-0.5 rounded font-bold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                      }
                    >
                      {a.passed ? "合格" : "不合格"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // -----------------------------
  // FINISHED STAGE
  // -----------------------------
  if (stage === "finished") {
    const correctCount = examQuestions.reduce<number>(
      (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
      0,
    );
    const pct =
      examQuestions.length === 0
        ? 0
        : Math.round((correctCount / examQuestions.length) * 100);
    const passed = pct >= passPct;
    return (
      <div className="space-y-6">
        <div
          className={`rounded-lg p-7 text-center border-2 ${
            passed
              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
              : "border-red-500 bg-red-50 dark:bg-red-950/30"
          }`}
        >
          <div className="chapter-eyebrow mb-2">Result</div>
          <div className="text-4xl font-bold mb-1">
            {passed ? "合格" : "不合格"}
          </div>
          <div className="text-5xl font-bold mb-3 tabular-nums">
            {correctCount}{" "}
            <span className="text-[var(--muted)]">
              / {examQuestions.length}
            </span>
          </div>
          <p className="text-[var(--muted-strong)] text-sm mb-1">
            正答率 {pct}% (合格基準 {passPct}%)
          </p>
          <p className="text-xs text-[var(--muted)] ui-sans">
            所要時間 {formatDuration(Math.min(elapsed, limitSeconds))} /{" "}
            {timeMinutes} 分
          </p>
        </div>

        <div className="ui-sans flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setStage("intro");
              setAnswers([]);
              setExamQuestions([]);
              setStartedAt(null);
              setElapsed(0);
            }}
            className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            もう一度受験する
          </button>
          <Link
            href={practiceHref}
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)] text-sm"
          >
            通常演習に戻る
          </Link>
        </div>

        {/* Detailed review */}
        <details className="paper rounded-lg p-5">
          <summary className="cursor-pointer font-bold ui-sans text-sm">
            全問の解説を見る
          </summary>
          <div className="mt-4 space-y-4">
            {examQuestions.map((q, qIdx) => {
              const ok = answers[qIdx] === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className="border-t border-[var(--page-border)] pt-3 first:border-t-0 first:pt-0"
                >
                  <div className="text-xs text-[var(--muted)] mb-1 ui-sans">
                    問 {qIdx + 1} · {ok ? "✓ 正解" : "✗ 不正解"}
                  </div>
                  <div className="text-sm mb-2">
                    <MixedText text={q.question} />
                  </div>
                  <div className="text-xs text-[var(--muted-strong)] leading-relaxed">
                    <span className="font-bold">
                      正解 {circled(q.correctIndex)}:
                    </span>{" "}
                    <MixedText text={q.choices[q.correctIndex]} />
                  </div>
                  <div className="text-xs text-[var(--muted-strong)] leading-relaxed mt-1">
                    <MixedText text={q.explanation} />
                  </div>
                </div>
              );
            })}
          </div>
        </details>
      </div>
    );
  }

  // -----------------------------
  // RUNNING STAGE
  // -----------------------------
  const isLowTime = remaining < 60;
  return (
    <div className="space-y-5">
      {/* Timer strip */}
      <div className="ui-sans text-xs flex items-center gap-3 sticky top-16 z-10 bg-[var(--background)]/90 backdrop-blur-sm py-2 px-3 rounded border border-[var(--page-border-strong)]">
        <span aria-hidden="true">⏱</span>
        <span>
          残り{" "}
          <span
            className={`font-bold ${isLowTime ? "text-red-600 dark:text-red-400" : "text-[var(--foreground)]"} tabular-nums`}
          >
            {formatDuration(remaining)}
          </span>
        </span>
        <span className="text-[var(--muted)]">
          / {timeMinutes}:00 (経過 {formatDuration(elapsed)})
        </span>
        <span className="ml-auto">
          解答済み{" "}
          <span className="font-bold text-[var(--foreground)] tabular-nums">
            {answeredCount}/{examQuestions.length}
          </span>
        </span>
      </div>

      {/* Question cards (no reveal during exam) */}
      {examQuestions.map((q, qIdx) => {
        const selected = answers[qIdx];
        return (
          <ExamCard
            key={q.id}
            qIdx={qIdx}
            q={q}
            selected={selected}
            onSelect={(cIdx) => handleSelect(qIdx, cIdx)}
          />
        );
      })}

      <div className="flex items-center gap-4 pt-2 ui-sans flex-wrap">
        <button
          type="button"
          onClick={finalize}
          className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
        >
          採点する
        </button>
        {answeredCount < examQuestions.length && (
          <span className="text-xs text-[var(--muted)]">
            未解答 {examQuestions.length - answeredCount} 問あります
          </span>
        )}
      </div>
    </div>
  );
}

function ExamCard({
  qIdx,
  q,
  selected,
  onSelect,
}: {
  qIdx: number;
  q: Question;
  selected: number | null;
  onSelect: (cIdx: number) => void;
}) {
  return (
    <div className="paper rounded-lg p-5 md:p-6">
      <div className="text-xs text-[var(--muted)] mb-3 ui-sans">
        <span className="font-bold">問 {qIdx + 1}</span>
        <span className="mx-2">·</span>
        <span>{q.category}</span>
      </div>
      <div className="mb-5 leading-relaxed">
        <MixedText text={q.question} />
      </div>
      <div className="space-y-2 ui-sans">
        {q.choices.map((choice, cIdx) => {
          const isSelected = selected === cIdx;
          return (
            <button
              key={cIdx}
              type="button"
              onClick={() => onSelect(cIdx)}
              className={`w-full text-left px-4 py-3 md:px-5 md:py-3.5 rounded-md border transition cursor-pointer leading-relaxed ${
                isSelected
                  ? "bg-blue-50 border-blue-500 dark:bg-blue-950/40"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              <span className="mr-2 font-bold">{circled(cIdx)}</span>
              <MixedText text={choice} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
