"use client";

import { useEffect, useMemo, useState } from "react";
import { Quiz } from "@/components/Quiz";
import { tracks as allTracks } from "@/lib/all-questions";
import { getProgress } from "@/lib/progress";
import type { Difficulty, Question } from "@/types/content";

type TrackInfo = {
  key: string;
  label: string;
  group: "main" | "math" | "cert";
  count: number;
};

type Mode = "all" | "wrong-first" | "selected";

const COUNT_OPTIONS = [5, 10, 20, 30] as const;

const DIFFICULTY_LABELS: Record<Difficulty, { stars: string; label: string }> = {
  1: { stars: "★☆☆", label: "基礎" },
  2: { stars: "★★☆", label: "標準" },
  3: { stars: "★★★", label: "応用" },
};

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
  const [difficulties, setDifficulties] = useState<Set<Difficulty>>(
    () => new Set<Difficulty>([1, 2, 3]),
  );
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    () => new Set(),
  );
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    // Reset selection if tracks change.
    setSelectedTracks(new Set(tracks.map((t) => t.key)));
  }, [tracks]);

  // Categories available within the currently active tracks.
  const availableCategories = useMemo(() => {
    const activeKeys =
      mode === "selected"
        ? selectedTracks
        : new Set(allTracks.map((t) => t.key));
    const set = new Set<string>();
    for (const t of allTracks) {
      if (!activeKeys.has(t.key)) continue;
      for (const q of t.questions) set.add(q.category);
    }
    return [...set].sort();
  }, [mode, selectedTracks]);

  function buildPool(): Question[] {
    const activeKeys =
      mode === "selected"
        ? selectedTracks
        : new Set(allTracks.map((t) => t.key));
    const useCategoryFilter = selectedCategories.size > 0;
    return allTracks
      .filter((t) => activeKeys.has(t.key))
      .flatMap((t) => t.questions)
      .filter((q) => difficulties.has(q.difficulty))
      .filter((q) =>
        useCategoryFilter ? selectedCategories.has(q.category) : true,
      );
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

  function toggleDifficulty(d: Difficulty) {
    setDifficulties((prev) => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      // At least one difficulty must remain selected.
      if (next.size === 0) return prev;
      return next;
    });
  }

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
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
        <div className="text-sm font-bold mb-3 ui-sans">難易度</div>
        <div className="flex flex-wrap gap-2 text-sm ui-sans">
          {([1, 2, 3] as Difficulty[]).map((d) => {
            const info = DIFFICULTY_LABELS[d];
            const active = difficulties.has(d);
            return (
              <button
                key={d}
                type="button"
                onClick={() => toggleDifficulty(d)}
                className={`px-3 py-2 rounded border transition ${
                  active
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 font-bold"
                    : "border-[var(--page-border)] opacity-50"
                }`}
              >
                <span className="tracking-wider mr-1">{info.stars}</span>
                {info.label}
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-[var(--muted)] ui-sans mt-2">
          複数選択可。少なくとも 1 つは選択してください。
        </p>
      </div>

      {availableCategories.length > 0 && (
        <details className="paper rounded-lg p-5">
          <summary className="cursor-pointer text-sm font-bold ui-sans flex items-center justify-between">
            <span>カテゴリで絞り込む(任意)</span>
            <span className="text-[10px] text-[var(--muted)] font-normal">
              {selectedCategories.size === 0
                ? "未指定 = すべて"
                : `${selectedCategories.size} 個選択中`}
            </span>
          </summary>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs ui-sans mt-3">
            {availableCategories.map((cat) => {
              const active = selectedCategories.has(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`px-2.5 py-1.5 rounded border text-left transition ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 font-bold"
                      : "border-[var(--page-border)] opacity-70"
                  }`}
                >
                  {active && <span className="mr-1">✓</span>}
                  {cat}
                </button>
              );
            })}
            {selectedCategories.size > 0 && (
              <button
                type="button"
                onClick={() => setSelectedCategories(new Set())}
                className="px-2.5 py-1.5 rounded border border-dashed border-[var(--page-border)] text-[var(--muted)] hover:bg-[var(--background)]"
              >
                クリア
              </button>
            )}
          </div>
        </details>
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
