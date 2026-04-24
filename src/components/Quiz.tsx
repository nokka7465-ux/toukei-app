"use client";

import { useEffect, useState } from "react";
import type { Difficulty, Question } from "@/types/content";
import { MixedText } from "./MixedText";
import { ShareButton } from "./ShareButton";

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
    window.localStorage.setItem(
      STORAGE_PREFIX + quizKey,
      JSON.stringify(score),
    );
  } catch {
    /* ignore */
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

const circled = (i: number) => String.fromCharCode(0x2460 + i);

type Mode = "single" | "list";
type LimitOption = "none" | "15" | "30" | "60";

const LIMIT_TO_SECONDS: Record<LimitOption, number | null> = {
  none: null,
  "15": 15 * 60,
  "30": 30 * 60,
  "60": 60 * 60,
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
  const [mode, setMode] = useState<Mode>("single");
  const [limit, setLimit] = useState<LimitOption>("none");
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(questions.length).fill(null),
  );
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    Array(questions.length).fill(false),
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [previous, setPrevious] = useState<PreviousScore | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  const limitSeconds = LIMIT_TO_SECONDS[limit];
  const remaining =
    limitSeconds !== null ? Math.max(0, limitSeconds - elapsed) : null;
  const correctCount = answers.reduce<number>(
    (acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0),
    0,
  );
  const allRevealed = revealed.every((r) => r);

  useEffect(() => {
    if (quizKey) setPrevious(loadPrevious(quizKey));
  }, [quizKey]);

  useEffect(() => {
    if (startedAt === null && answers.some((a) => a !== null)) {
      setStartedAt(Date.now());
    }
  }, [answers, startedAt]);

  useEffect(() => {
    if (showFinal || startedAt === null) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [showFinal, startedAt]);

  // Auto-finish when timer expires.
  useEffect(() => {
    if (
      !showFinal &&
      limitSeconds !== null &&
      elapsed >= limitSeconds &&
      startedAt !== null
    ) {
      finishQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsed, limitSeconds, showFinal, startedAt]);

  function handleSelect(qIdx: number, cIdx: number) {
    if (revealed[qIdx] || showFinal) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = cIdx;
      return next;
    });
  }

  function handleReveal(qIdx: number) {
    if (answers[qIdx] === null) return;
    setRevealed((prev) => {
      const next = [...prev];
      next[qIdx] = true;
      return next;
    });
  }

  function handleNext() {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrev() {
    if (currentIdx > 0) {
      setCurrentIdx((i) => i - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function finishQuiz() {
    setRevealed(Array(questions.length).fill(true));
    if (quizKey) {
      const c = answers.reduce<number>(
        (acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0),
        0,
      );
      const score: PreviousScore = {
        correct: c,
        total: questions.length,
        ts: Date.now(),
      };
      savePrevious(quizKey, score);
      setPrevious(score);
    }
    setShowFinal(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmitListMode() {
    setRevealed(Array(questions.length).fill(true));
    finishQuiz();
  }

  function handleReset() {
    setAnswers(Array(questions.length).fill(null));
    setRevealed(Array(questions.length).fill(false));
    setCurrentIdx(0);
    setShowFinal(false);
    setStartedAt(null);
    setElapsed(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // -----------------------------
  // FINAL RESULT VIEW
  // -----------------------------
  if (showFinal) {
    return (
      <div className="space-y-6">
        <div className="paper rounded-lg p-7 text-center">
          <div className="chapter-eyebrow mb-2">Result</div>
          <div className="text-5xl font-bold mb-3">
            {correctCount}{" "}
            <span className="text-[var(--muted)]">/ {questions.length}</span>
          </div>
          <p className="text-[var(--muted-strong)] mb-1">問正解</p>
          <p className="text-xs text-[var(--muted)] ui-sans">
            所要時間 {formatDuration(elapsed)}
          </p>
        </div>

        <div className="ui-sans flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            もう一度チャレンジ
          </button>
          {shareUrl && (
            <ShareButton
              url={shareUrl}
              text={`${shareLabel ?? "統計検定の演習問題"}を解きました: ${correctCount}/${questions.length} 問正解!`}
              hashtags={["統計検定", "統計検定学習帳"]}
            />
          )}
        </div>

        {/* Detailed review of all questions */}
        <details className="paper rounded-lg p-5">
          <summary className="cursor-pointer font-bold ui-sans text-sm">
            全問の解説を見る
          </summary>
          <div className="mt-4 space-y-4">
            {questions.map((q, qIdx) => (
              <div
                key={q.id}
                className="border-t border-[var(--page-border)] pt-3 first:border-t-0 first:pt-0"
              >
                <div className="text-xs text-[var(--muted)] mb-1 ui-sans">
                  問 {qIdx + 1} ·{" "}
                  {answers[qIdx] === q.correctIndex ? "✓ 正解" : "✗ 不正解"}
                </div>
                <div className="text-sm mb-2">
                  <MixedText text={q.question} />
                </div>
                <div className="text-xs text-[var(--muted-strong)] leading-relaxed">
                  <span className="font-bold">正解 {circled(q.correctIndex)}:</span>{" "}
                  <MixedText text={q.choices[q.correctIndex]} />
                </div>
                <div className="text-xs text-[var(--muted-strong)] leading-relaxed mt-1">
                  <MixedText text={q.explanation} />
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    );
  }

  // -----------------------------
  // SETTINGS PANEL (top of every quiz)
  // -----------------------------
  const settingsPanel = (
    <div className="paper rounded-lg p-4 ui-sans text-xs flex flex-wrap items-center gap-x-5 gap-y-2">
      <div className="flex items-center gap-2">
        <span className="text-[var(--muted)]">モード</span>
        <div className="flex border border-[var(--page-border-strong)] rounded overflow-hidden">
          <button
            type="button"
            onClick={() => setMode("single")}
            className={`px-2.5 py-1 ${mode === "single" ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold" : "hover:bg-[var(--background)]"}`}
          >
            1 問 1 答
          </button>
          <button
            type="button"
            onClick={() => setMode("list")}
            className={`px-2.5 py-1 border-l border-[var(--page-border-strong)] ${mode === "list" ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold" : "hover:bg-[var(--background)]"}`}
          >
            一覧で表示
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[var(--muted)]">時間制限</span>
        <select
          value={limit}
          onChange={(e) => setLimit(e.target.value as LimitOption)}
          className="border border-[var(--page-border-strong)] rounded px-2 py-1 bg-[var(--page)]"
          disabled={startedAt !== null}
        >
          <option value="none">なし</option>
          <option value="15">15 分</option>
          <option value="30">30 分</option>
          <option value="60">60 分</option>
        </select>
      </div>
      {previous && (
        <div className="text-[var(--muted)] ml-auto">
          前回: <span className="font-bold text-[var(--foreground)]">{previous.correct}/{previous.total}</span>{" "}
          ({formatRelative(previous.ts)})
        </div>
      )}
    </div>
  );

  // -----------------------------
  // TIMER STRIP
  // -----------------------------
  const timerStrip =
    startedAt !== null ? (
      <div className="ui-sans text-xs text-[var(--muted)] flex items-center gap-3 sticky top-16 z-10 bg-[var(--background)]/85 backdrop-blur-sm py-1.5 -mx-2 px-3 rounded">
        <span aria-hidden="true">⏱</span>
        <span>
          経過 <span className="font-bold text-[var(--foreground)]">{formatDuration(elapsed)}</span>
        </span>
        {remaining !== null && (
          <span>
            ・残り{" "}
            <span
              className={`font-bold ${remaining < 60 ? "text-red-600 dark:text-red-400" : "text-[var(--foreground)]"}`}
            >
              {formatDuration(remaining)}
            </span>
          </span>
        )}
        <span className="ml-auto">
          進行 {revealed.filter(Boolean).length}/{questions.length}
        </span>
      </div>
    ) : null;

  // -----------------------------
  // SINGLE QUESTION RENDERER
  // -----------------------------
  function renderQuestionCard(qIdx: number, q: Question, isInList: boolean) {
    const selected = answers[qIdx];
    const isRevealed = revealed[qIdx];
    const isCorrect = isRevealed && selected === q.correctIndex;

    return (
      <div className="paper rounded-lg p-5 md:p-6">
        <div className="text-xs text-[var(--muted)] mb-3 flex items-center gap-2 flex-wrap ui-sans">
          <span className="font-bold">
            問 {qIdx + 1}
            {!isInList && ` / ${questions.length}`}
          </span>
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

        <div className="mb-5 leading-relaxed">
          <MixedText text={q.question} />
        </div>

        <div className="space-y-2 ui-sans">
          {q.choices.map((choice, cIdx) => {
            const isSelected = selected === cIdx;
            const isChoiceCorrect = isRevealed && cIdx === q.correctIndex;
            const isChoiceWrong =
              isRevealed && isSelected && cIdx !== q.correctIndex;
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
                disabled={isRevealed}
                className={`${base} ${state} ${isRevealed ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className="mr-2 font-bold">{circled(cIdx)}</span>
                <MixedText text={choice} />
              </button>
            );
          })}
        </div>

        {/* Reveal action and explanation */}
        {!isRevealed ? (
          <div className="mt-5 flex items-center gap-3 ui-sans">
            <button
              type="button"
              onClick={() => handleReveal(qIdx)}
              disabled={selected === null}
              className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
            >
              解答する
            </button>
            {selected === null && (
              <span className="text-xs text-[var(--muted)]">
                選択肢を選んでから「解答する」を押してください
              </span>
            )}
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
                  正解: {circled(q.correctIndex)}
                </span>
              )}
            </div>
            <div className="leading-relaxed text-[var(--muted-strong)]">
              <MixedText text={q.explanation} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // -----------------------------
  // SINGLE MODE LAYOUT
  // -----------------------------
  if (mode === "single") {
    const q = questions[currentIdx];
    const isRevealed = revealed[currentIdx];
    const isLast = currentIdx === questions.length - 1;

    return (
      <div className="space-y-5">
        {settingsPanel}
        {timerStrip}

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 flex-wrap ui-sans text-xs">
          {questions.map((qq, i) => {
            const r = revealed[i];
            const correct = r && answers[i] === qq.correctIndex;
            const cls = !r
              ? i === currentIdx
                ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold"
                : "border border-[var(--page-border-strong)] text-[var(--muted)] hover:bg-[var(--background)]"
              : correct
                ? "bg-green-200 text-green-900 dark:bg-green-900/60 dark:text-green-200"
                : "bg-red-200 text-red-900 dark:bg-red-900/60 dark:text-red-200";
            return (
              <button
                key={qq.id}
                type="button"
                onClick={() => setCurrentIdx(i)}
                className={`w-7 h-7 rounded text-[10px] flex items-center justify-center transition ${cls}`}
                aria-label={`問 ${i + 1} へ移動`}
                title={`問 ${i + 1}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        {renderQuestionCard(currentIdx, q, false)}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 ui-sans">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded text-sm hover:bg-[var(--page)] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← 前の問題
          </button>

          {isLast && allRevealed ? (
            <button
              type="button"
              onClick={finishQuiz}
              className="px-5 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] text-sm"
            >
              結果を見る →
            </button>
          ) : isLast ? (
            <button
              type="button"
              onClick={finishQuiz}
              disabled={!revealed[currentIdx]}
              className="px-5 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600 text-sm"
              title={!revealed[currentIdx] ? "解答してから次へ" : ""}
            >
              結果を見る →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isRevealed}
              className="px-5 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600 text-sm"
              title={!isRevealed ? "解答してから次へ" : ""}
            >
              次の問題 →
            </button>
          )}
        </div>

        {!isLast && allRevealed && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={finishQuiz}
              className="text-xs text-[var(--link)] hover:underline ui-sans"
            >
              すべて解答済み ─ 結果を見る
            </button>
          </div>
        )}
      </div>
    );
  }

  // -----------------------------
  // LIST MODE (legacy, all-at-once)
  // -----------------------------
  return (
    <div className="space-y-6">
      {settingsPanel}
      {timerStrip}
      {questions.map((q, qIdx) => renderQuestionCard(qIdx, q, true))}
      <div className="flex items-center gap-4 pt-2 ui-sans flex-wrap">
        <button
          type="button"
          onClick={handleSubmitListMode}
          disabled={!answers.every((a) => a !== null)}
          className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
        >
          採点する
        </button>
      </div>
    </div>
  );
}
