"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  getAllUniqueGlossaryTerms,
  termToSlug,
} from "@/lib/glossary-registry";
import type { GlossaryTerm } from "@/data/glossary";

const STORAGE_KEY = "toukei-app:flashcards:v2";

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * SM-2-lite spaced repetition scheduling.
 * - quality 0: didn't know → reset interval to 1 day, drop ease
 * - quality 1: hesitated → 1 day interval, slight ease drop
 * - quality 2: knew it well → standard interval × ease
 */
type CardState = {
  /** Number of consecutive successful reviews. */
  streak: number;
  /** Days until next review. */
  interval: number;
  /** Ease factor (1.3 minimum, 2.5 default, 3.0 cap). */
  ease: number;
  /** Next review timestamp (ms). */
  dueAt: number;
  /** Last review timestamp (ms). */
  lastAt: number;
  /** Box for legacy compatibility (0=未, 1=学習中, ≥3=習得). */
  box: number;
};

type State = {
  knowledge: Record<string, CardState>;
};

function nextSm2(prev: CardState | undefined, quality: 0 | 1 | 2): CardState {
  const prevEase = prev?.ease ?? 2.5;
  const prevInterval = prev?.interval ?? 0;
  const prevStreak = prev?.streak ?? 0;
  const now = Date.now();

  if (quality === 0) {
    const ease = Math.max(1.3, prevEase - 0.2);
    return {
      streak: 0,
      interval: 1,
      ease,
      dueAt: now + DAY_MS,
      lastAt: now,
      box: 0,
    };
  }
  if (quality === 1) {
    const ease = Math.max(1.3, prevEase - 0.05);
    const interval = 1;
    return {
      streak: 0,
      interval,
      ease,
      dueAt: now + interval * DAY_MS,
      lastAt: now,
      box: 1,
    };
  }
  // quality === 2: confident
  const streak = prevStreak + 1;
  let interval: number;
  if (streak === 1) interval = 2;
  else if (streak === 2) interval = 6;
  else interval = Math.min(180, Math.round((prevInterval || 6) * prevEase));
  const ease = Math.min(3.0, prevEase + 0.1);
  return {
    streak,
    interval,
    ease,
    dueAt: now + interval * DAY_MS,
    lastAt: now,
    box: streak >= 3 ? 3 : streak,
  };
}

function readState(): State {
  if (typeof window === "undefined") return { knowledge: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { knowledge: {} };
    return JSON.parse(raw) as State;
  } catch {
    return { knowledge: {} };
  }
}

function writeState(s: State) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

type LevelFilter = "all" | GlossaryTerm["level"];
type ProgressFilter = "all" | "due" | "unknown" | "learning" | "known";

const LEVEL_LABEL: Record<GlossaryTerm["level"], string> = {
  "4": "4級",
  "3": "3級",
  "2": "2級",
  "準1": "準1級",
  "1": "1級",
};

const LEVEL_STYLE: Record<GlossaryTerm["level"], string> = {
  "4": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  "3": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  "2": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  "準1": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  "1": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
};

function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FlashcardsClient() {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<State>({ knowledge: {} });
  const [level, setLevel] = useState<LevelFilter>("all");
  const [category, setCategory] = useState<string>("all");
  const [progressFilter, setProgressFilter] = useState<ProgressFilter>("all");
  const [showAnswer, setShowAnswer] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setMounted(true);
    setState(readState());
  }, []);

  const allTerms = useMemo(() => getAllUniqueGlossaryTerms(), []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const t of allTerms) {
      if (level !== "all" && t.level !== level) continue;
      set.add(t.category);
    }
    return ["all", ...Array.from(set).sort()];
  }, [allTerms, level]);

  const filtered = useMemo(() => {
    const now = Date.now();
    const filteredTerms = allTerms.filter((t) => {
      if (level !== "all" && t.level !== level) return false;
      if (category !== "all" && t.category !== category) return false;
      const k = state.knowledge[t.term];
      const box = k?.box ?? 0;
      const due = !k || (k.dueAt ?? 0) <= now;
      if (progressFilter === "due" && !due) return false;
      if (progressFilter === "unknown" && box > 0) return false;
      if (progressFilter === "learning" && (box === 0 || box >= 3)) return false;
      if (progressFilter === "known" && box < 3) return false;
      return true;
    });
    // For 'due' mode, prioritize most-overdue first; otherwise shuffle.
    if (progressFilter === "due") {
      return [...filteredTerms].sort((a, b) => {
        const da = state.knowledge[a.term]?.dueAt ?? 0;
        const db = state.knowledge[b.term]?.dueAt ?? 0;
        return da - db;
      });
    }
    return shuffle(filteredTerms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTerms, level, category, progressFilter, mounted]);

  // When filter changes, reset position
  useEffect(() => {
    setIdx(0);
    setShowAnswer(false);
  }, [level, category, progressFilter]);

  if (!mounted) {
    return <p className="text-sm text-[var(--muted)] ui-sans">読み込み中…</p>;
  }

  const total = filtered.length;
  const card = total > 0 ? filtered[Math.min(idx, total - 1)] : null;

  function mark(quality: 0 | 1 | 2) {
    if (!card) return;
    const prev = state.knowledge[card.term];
    const updated = nextSm2(prev, quality);
    const next: State = {
      knowledge: {
        ...state.knowledge,
        [card.term]: updated,
      },
    };
    setState(next);
    writeState(next);
    advance();
  }

  function advance() {
    setShowAnswer(false);
    if (idx + 1 >= total) {
      // Loop back; in real SRS we'd re-queue, but for now just shuffle
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  }

  // Stats
  const stats = useMemo(() => {
    const now = Date.now();
    let unknown = 0;
    let learning = 0;
    let known = 0;
    let due = 0;
    for (const t of allTerms) {
      const k = state.knowledge[t.term];
      const box = k?.box ?? 0;
      if (box === 0) unknown++;
      else if (box < 3) learning++;
      else known++;
      if (!k || (k.dueAt ?? 0) <= now) due++;
    }
    return { due, unknown, learning, known, total: allTerms.length };
  }, [allTerms, state]);

  return (
    <div className="space-y-5">
      {/* Filters */}
      <section className="paper rounded-lg p-4 ui-sans text-xs space-y-3">
        <div>
          <span className="text-[var(--muted)] mr-2">級:</span>
          {(["all", "4", "3", "2", "準1", "1"] as const).map((lv) => (
            <button
              key={lv}
              type="button"
              onClick={() => setLevel(lv)}
              className={`px-2.5 py-1 rounded mr-1 mb-1 border ${
                level === lv
                  ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              {lv === "all" ? "すべて" : LEVEL_LABEL[lv]}
            </button>
          ))}
        </div>
        <div>
          <span className="text-[var(--muted)] mr-2">習熟度:</span>
          {[
            { key: "due" as const, label: `今日復習(${stats.due})` },
            { key: "all" as const, label: `すべて(${stats.total})` },
            { key: "unknown" as const, label: `未学習(${stats.unknown})` },
            { key: "learning" as const, label: `学習中(${stats.learning})` },
            { key: "known" as const, label: `習得済(${stats.known})` },
          ].map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setProgressFilter(p.key)}
              className={`px-2.5 py-1 rounded mr-1 mb-1 border ${
                progressFilter === p.key
                  ? "bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] border-[var(--accent)] font-bold"
                  : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div>
          <span className="text-[var(--muted)] mr-2">カテゴリ:</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-2 py-1 rounded border border-[var(--page-border-strong)] bg-[var(--page)] text-xs"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "すべて" : c}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Card */}
      {!card ? (
        <div className="paper rounded-lg p-10 text-center">
          <div className="text-4xl mb-3">🎉</div>
          <p className="text-sm text-[var(--muted-strong)] mb-4">
            条件に合う用語がありません。フィルタを緩めるか、別の級を選んでください。
          </p>
        </div>
      ) : (
        <article
          className="paper rounded-xl border-2 border-[var(--page-border-strong)] p-6 md:p-10 min-h-[320px] flex flex-col cursor-pointer select-none"
          onClick={() => setShowAnswer((v) => !v)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              setShowAnswer((v) => !v);
            }
          }}
        >
          <div className="flex items-baseline justify-between gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-2 ui-sans text-xs">
              <span
                className={`px-1.5 py-0.5 rounded font-bold ${LEVEL_STYLE[card.level]}`}
              >
                {LEVEL_LABEL[card.level]}
              </span>
              <span className="text-[var(--muted)]">{card.category}</span>
            </div>
            <div className="ui-sans text-[10px] text-[var(--muted)]">
              {idx + 1} / {total}
            </div>
          </div>

          {!showAnswer ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                {card.term}
              </div>
              <div className="text-sm text-[var(--muted)] ui-sans">
                {card.reading}
                {card.english && ` · ${card.english}`}
              </div>
              <div className="text-xs text-[var(--muted)] ui-sans mt-8">
                クリック / Space / Enter で答えを表示
              </div>
            </div>
          ) : (
            <div className="flex-1">
              <div className="text-2xl font-bold mb-3">{card.term}</div>
              <p className="text-sm leading-relaxed whitespace-pre-line text-[var(--foreground)]">
                {card.definition}
              </p>
              <Link
                href={`/glossary/${encodeURIComponent(termToSlug(card.term))}`}
                className="inline-block mt-4 text-xs text-[var(--link)] hover:underline ui-sans"
                onClick={(e) => e.stopPropagation()}
              >
                詳細ページを開く →
              </Link>
            </div>
          )}
        </article>
      )}

      {/* Action buttons (only when answer shown) */}
      {card && (
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <button
            type="button"
            onClick={() => mark(0)}
            disabled={!showAnswer}
            className="flex-1 px-4 py-3 bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 rounded font-bold hover:bg-red-200 dark:hover:bg-red-900/60 disabled:opacity-50 disabled:cursor-not-allowed"
            title="1日後に再出題"
          >
            ✗ 知らない<span className="text-[10px] opacity-70 ml-1">(明日)</span>
          </button>
          <button
            type="button"
            onClick={() => mark(1)}
            disabled={!showAnswer}
            className="flex-1 px-4 py-3 bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 rounded font-bold hover:bg-amber-200 dark:hover:bg-amber-900/60 disabled:opacity-50 disabled:cursor-not-allowed"
            title="1日後に再出題(ストリーク途切れ)"
          >
            △ 微妙<span className="text-[10px] opacity-70 ml-1">(明日)</span>
          </button>
          <button
            type="button"
            onClick={() => mark(2)}
            disabled={!showAnswer}
            className="flex-1 px-4 py-3 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 rounded font-bold hover:bg-emerald-200 dark:hover:bg-emerald-900/60 disabled:opacity-50 disabled:cursor-not-allowed"
            title="次回出題日が伸びる(SM-2)"
          >
            ✓ 知ってる
            <span className="text-[10px] opacity-70 ml-1">
              ({card && state.knowledge[card.term]?.streak ? `${state.knowledge[card.term].streak === 0 ? "2日後" : state.knowledge[card.term].streak === 1 ? "6日後" : `${Math.round((state.knowledge[card.term].interval || 6) * (state.knowledge[card.term].ease || 2.5))}日後`}` : "2日後"})
            </span>
          </button>
          <button
            type="button"
            onClick={advance}
            className="px-4 py-3 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            スキップ →
          </button>
        </div>
      )}

      <p className="text-[10px] text-[var(--muted)] ui-sans">
        SM-2 アルゴリズムで次回復習日を自動スケジュール ・ 進捗はお使いのブラウザにのみ保存されます。
      </p>
    </div>
  );
}
