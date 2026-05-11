"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Quiz } from "@/components/Quiz";
import { getQuestionsById, tracks, type EnrichedQuestion } from "@/lib/all-questions";
import {
  PROGRESS_EVENT,
  getProgress,
  type ProgressData,
} from "@/lib/progress";

type Mode = "weakness" | "untried" | "mixed" | "wrong-srs";

const MODE_OPTIONS: { key: Mode; label: string; description: string }[] = [
  {
    key: "weakness",
    label: "苦手分野重点",
    description: "間違えたカテゴリの問題を優先的に集めます",
  },
  {
    key: "untried",
    label: "未挑戦のみ",
    description: "まだ解いていない問題から出題します",
  },
  {
    key: "mixed",
    label: "難易度ミックス",
    description: "易しい→普通→難しいの順でバランス良く出題",
  },
  {
    key: "wrong-srs",
    label: "間違い + 期限の問題",
    description: "間違えた問題とSRSで今日が復習日の問題",
  },
];

const QUESTION_COUNT_OPTIONS = [5, 10, 20, 30] as const;

function buildQueue(
  data: ProgressData,
  mode: Mode,
  count: number,
  trackFilter: string | "all",
): EnrichedQuestion[] {
  const lookup = getQuestionsById();
  const all = [...lookup.values()].filter(
    (q) => trackFilter === "all" || q.trackKey === trackFilter,
  );

  if (mode === "untried") {
    const tried = new Set(Object.keys(data.questions));
    const candidates = all.filter((q) => !tried.has(q.id));
    return shuffle(candidates).slice(0, count);
  }

  if (mode === "wrong-srs") {
    const now = Date.now();
    const endOfToday = (() => {
      const d = new Date(now);
      d.setHours(23, 59, 59, 999);
      return d.getTime();
    })();
    const ids: { id: string; weight: number }[] = [];
    for (const [id, r] of Object.entries(data.questions)) {
      const q = lookup.get(id);
      if (!q) continue;
      if (trackFilter !== "all" && q.trackKey !== trackFilter) continue;
      if (!r.correct) ids.push({ id, weight: 100 });
      else if (r.srsDueAt !== undefined && r.srsDueAt <= endOfToday) {
        ids.push({ id, weight: 80 });
      }
    }
    ids.sort((a, b) => b.weight - a.weight);
    const picked = ids
      .slice(0, count)
      .map((x) => lookup.get(x.id))
      .filter((q): q is EnrichedQuestion => Boolean(q));
    return picked;
  }

  if (mode === "weakness") {
    // Score categories by wrong rate; pick questions in those categories
    const catStats = new Map<string, { wrong: number; attempted: number }>();
    for (const [id, r] of Object.entries(data.questions)) {
      const q = lookup.get(id);
      if (!q) continue;
      if (trackFilter !== "all" && q.trackKey !== trackFilter) continue;
      const s = catStats.get(q.category) ?? { wrong: 0, attempted: 0 };
      s.attempted += 1;
      if (!r.correct) s.wrong += 1;
      catStats.set(q.category, s);
    }
    const weakCats = new Set(
      Array.from(catStats.entries())
        .filter(([, s]) => s.attempted > 0 && s.wrong / s.attempted > 0.3)
        .sort(
          (a, b) =>
            b[1].wrong / b[1].attempted - a[1].wrong / a[1].attempted,
        )
        .slice(0, 5)
        .map(([cat]) => cat),
    );
    const candidates = weakCats.size > 0
      ? all.filter((q) => weakCats.has(q.category))
      : all;
    return shuffle(candidates).slice(0, count);
  }

  // mixed: easy → medium → hard, equal split, randomized within each
  const byDifficulty: Record<number, EnrichedQuestion[]> = { 1: [], 2: [], 3: [] };
  for (const q of all) {
    const d = (q.difficulty ?? 2) as 1 | 2 | 3;
    byDifficulty[d].push(q);
  }
  const each = Math.ceil(count / 3);
  const out: EnrichedQuestion[] = [
    ...shuffle(byDifficulty[1]).slice(0, each),
    ...shuffle(byDifficulty[2]).slice(0, each),
    ...shuffle(byDifficulty[3]).slice(0, count - each * 2),
  ];
  return out.slice(0, count);
}

function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function AdaptivePracticeClient() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<ProgressData>({ questions: {} });
  const [mode, setMode] = useState<Mode>("mixed");
  const [count, setCount] = useState<number>(10);
  const [trackFilter, setTrackFilter] = useState<string | "all">("all");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setData(getProgress());
    const handler = () => setData(getProgress());
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, []);

  const queue = useMemo(
    () => buildQueue(data, mode, count, trackFilter),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, count, trackFilter, started],
  );

  if (!mounted) {
    return <p className="text-sm text-[var(--muted)] ui-sans">読み込み中…</p>;
  }

  if (started) {
    if (queue.length === 0) {
      return (
        <div className="paper rounded-lg p-6 text-center">
          <p className="text-sm text-[var(--muted-strong)] mb-4">
            該当する問題が見つかりませんでした。設定を変更してください。
          </p>
          <button
            type="button"
            onClick={() => setStarted(false)}
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded ui-sans text-sm hover:bg-[var(--background)]"
          >
            設定に戻る
          </button>
        </div>
      );
    }
    return (
      <div className="space-y-4">
        <div className="paper rounded-lg p-3 ui-sans text-xs flex items-center justify-between gap-3 flex-wrap">
          <span className="text-[var(--muted-strong)]">
            <strong>{MODE_OPTIONS.find((m) => m.key === mode)?.label}</strong>{" "}
            ・ {queue.length} 問
          </span>
          <button
            type="button"
            onClick={() => setStarted(false)}
            className="px-3 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            ← 設定に戻る
          </button>
        </div>
        <Quiz questions={queue} />
      </div>
    );
  }

  // Setup view
  return (
    <div className="space-y-5">
      <section className="paper rounded-lg p-5">
        <div className="chapter-eyebrow mb-2">出題モード</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {MODE_OPTIONS.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setMode(m.key)}
              className={`text-left px-4 py-3 rounded border transition ui-sans ${
                mode === m.key
                  ? "bg-[var(--accent)]/10 border-[var(--accent)]"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              <div className="font-bold text-sm mb-0.5">{m.label}</div>
              <div className="text-xs text-[var(--muted-strong)] leading-relaxed">
                {m.description}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="paper rounded-lg p-5 ui-sans text-sm">
        <div className="chapter-eyebrow mb-2">問題数</div>
        <div className="flex flex-wrap gap-2">
          {QUESTION_COUNT_OPTIONS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCount(c)}
              className={`px-4 py-1.5 rounded border ${
                count === c
                  ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              {c} 問
            </button>
          ))}
        </div>
      </section>

      <section className="paper rounded-lg p-5 ui-sans text-sm">
        <div className="chapter-eyebrow mb-2">対象範囲</div>
        <div className="flex flex-wrap gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setTrackFilter("all")}
            className={`px-3 py-1.5 rounded border ${
              trackFilter === "all"
                ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            全範囲
          </button>
          {tracks.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTrackFilter(t.key)}
              className={`px-3 py-1.5 rounded border ${
                trackFilter === t.key
                  ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <div className="text-xs text-[var(--muted)] ui-sans">
        プレビュー: {queue.length} 問が抽出されました
      </div>

      <div className="flex items-center gap-3 ui-sans flex-wrap">
        <button
          type="button"
          onClick={() => setStarted(true)}
          disabled={queue.length === 0}
          className="px-6 py-2.5 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
        >
          スタート →
        </button>
        <Link
          href="/quiz"
          className="text-xs text-[var(--link)] hover:underline"
        >
          通常の演習問題一覧へ
        </Link>
      </div>
    </div>
  );
}
