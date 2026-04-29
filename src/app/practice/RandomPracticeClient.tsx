"use client";

import { useEffect, useState } from "react";
import { Quiz } from "@/components/Quiz";
import { tracks as allTracks } from "@/lib/all-questions";
import { getProgress } from "@/lib/progress";
import type { Question } from "@/types/content";

type TrackInfo = {
  key: string;
  label: string;
  group: "main" | "math" | "cert";
  count: number;
};

type Mode = "all" | "wrong-first" | "selected";

const COUNT_OPTIONS = [5, 10, 20, 30] as const;

function shuffle<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function RandomPracticeClient({ tracks }: { tracks: TrackInfo[] }) {
  const [mode, setMode] = useState<Mode>("all");
  const [count, setCount] = useState<number>(10);
  const [selectedTracks, setSelectedTracks] = useState<Set<string>>(
    () => new Set(tracks.map((t) => t.key)),
  );
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    // Reset selection if tracks change.
    setSelectedTracks(new Set(tracks.map((t) => t.key)));
  }, [tracks]);

  function buildPool(): Question[] {
    const activeKeys =
      mode === "selected"
        ? selectedTracks
        : new Set(allTracks.map((t) => t.key));
    return allTracks
      .filter((t) => activeKeys.has(t.key))
      .flatMap((t) => t.questions);
  }

  function start() {
    const pool = buildPool();
    if (pool.length === 0) {
      setQuestions([]);
      return;
    }
    let ordered = shuffle(pool);
    if (mode === "wrong-first") {
      const data = getProgress();
      const wrongIds = new Set(
        Object.entries(data.questions)
          .filter(([, r]) => !r.correct)
          .map(([id]) => id),
      );
      const wrong = ordered.filter((q) => wrongIds.has(q.id));
      const others = ordered.filter((q) => !wrongIds.has(q.id));
      ordered = [...wrong, ...others];
    }
    setQuestions(ordered.slice(0, Math.min(count, ordered.length)));
    setVersion((v) => v + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setQuestions(null);
  }

  function toggleTrack(key: string) {
    setSelectedTracks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  if (questions !== null) {
    if (questions.length === 0) {
      return (
        <div className="paper rounded-lg p-6 text-center text-sm">
          選択範囲に問題がありません。条件を変えて再度お試しください。
          <div className="mt-4">
            <button
              type="button"
              onClick={reset}
              className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)] text-sm ui-sans"
            >
              設定に戻る
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="space-y-5">
        <div className="paper rounded-lg p-4 flex items-center justify-between gap-3 flex-wrap text-xs ui-sans">
          <div>
            <span className="text-[var(--muted)]">出題</span>{" "}
            <span className="font-bold tabular-nums">{questions.length} 問</span>
            <span className="text-[var(--muted)]"> / </span>
            <span className="text-[var(--muted)]">
              モード:{" "}
              {mode === "all"
                ? "全範囲"
                : mode === "wrong-first"
                  ? "弱点集中"
                  : "級を選択"}
            </span>
          </div>
          <button
            type="button"
            onClick={reset}
            className="px-3 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            ← 設定をやり直す
          </button>
        </div>
        <Quiz key={version} questions={questions} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="paper rounded-lg p-6">
        <div className="text-sm font-bold mb-3 ui-sans">出題モード</div>
        <div className="space-y-2 text-sm">
          <ModeOption
            current={mode}
            value="all"
            onChange={setMode}
            label="🎲 全範囲ランダム"
            sub="全トラック・約 280 問のプールから完全ランダム"
          />
          <ModeOption
            current={mode}
            value="wrong-first"
            onChange={setMode}
            label="🎯 弱点集中"
            sub="過去に間違えた問題を優先して出題(なければ全範囲から)"
          />
          <ModeOption
            current={mode}
            value="selected"
            onChange={setMode}
            label="🎚 級を選択"
            sub="特定の級・検定だけから抽出"
          />
        </div>
      </div>

      {mode === "selected" && (
        <div className="paper rounded-lg p-6">
          <div className="text-sm font-bold mb-3 ui-sans">出題範囲</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs ui-sans">
            {tracks.map((t) => {
              const active = selectedTracks.has(t.key);
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => toggleTrack(t.key)}
                  className={`px-3 py-2 rounded border text-left transition ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--page-border)] opacity-60"
                  }`}
                >
                  <div className="font-bold flex items-center justify-between gap-1">
                    <span>{t.label}</span>
                    <span aria-hidden="true">{active ? "✓" : ""}</span>
                  </div>
                  <div className="text-[var(--muted)]">{t.count} 問</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="paper rounded-lg p-6">
        <div className="text-sm font-bold mb-3 ui-sans">出題数</div>
        <div className="flex flex-wrap gap-2 text-sm ui-sans">
          {COUNT_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setCount(n)}
              className={`px-4 py-2 rounded border ${
                count === n
                  ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              {n} 問
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={start}
          className="px-6 py-3 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)] ui-sans"
        >
          開始する →
        </button>
      </div>
    </div>
  );
}

function ModeOption({
  current,
  value,
  onChange,
  label,
  sub,
}: {
  current: Mode;
  value: Mode;
  onChange: (v: Mode) => void;
  label: string;
  sub: string;
}) {
  const checked = current === value;
  return (
    <label
      className={`flex items-start gap-3 p-3 rounded border cursor-pointer ${
        checked
          ? "border-[var(--accent)] bg-[var(--accent)]/10"
          : "border-[var(--page-border)] hover:bg-[var(--background)]"
      }`}
    >
      <input
        type="radio"
        name="mode"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="mt-1"
      />
      <div>
        <div className="font-bold">{label}</div>
        <div className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed">
          {sub}
        </div>
      </div>
    </label>
  );
}
