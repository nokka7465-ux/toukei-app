"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MixedText } from "@/components/MixedText";
import { BookmarkButton } from "@/components/BookmarkButton";
import { termToSlug } from "@/lib/glossary-registry";
import type { GlossaryTerm } from "@/data/glossary";

const LEVEL_STYLE: Record<GlossaryTerm["level"], string> = {
  "4": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  "3": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  "2": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  "準1": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  "1": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
};

const LEVEL_ORDER: GlossaryTerm["level"][] = ["4", "3", "2", "準1", "1"];

type Group = { level: GlossaryTerm["level"]; terms: GlossaryTerm[] };

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFKC");
}

function matches(term: GlossaryTerm, query: string): boolean {
  if (!query) return true;
  const q = normalize(query);
  return (
    normalize(term.term).includes(q) ||
    normalize(term.reading).includes(q) ||
    (term.english ? normalize(term.english).includes(q) : false) ||
    normalize(term.category).includes(q) ||
    normalize(term.definition).includes(q)
  );
}

export function GlossaryFilter({ groups }: { groups: Group[] }) {
  const [query, setQuery] = useState("");
  const [activeLevels, setActiveLevels] = useState<Set<GlossaryTerm["level"]>>(
    new Set(LEVEL_ORDER),
  );

  const totalAll = useMemo(
    () => groups.reduce((s, g) => s + g.terms.length, 0),
    [groups],
  );

  const filtered = useMemo(() => {
    return groups
      .map((g) => ({
        level: g.level,
        terms: activeLevels.has(g.level)
          ? g.terms.filter((t) => matches(t, query))
          : [],
      }))
      .filter((g) => g.terms.length > 0);
  }, [groups, query, activeLevels]);

  const totalShown = filtered.reduce((s, g) => s + g.terms.length, 0);

  const toggleLevel = (lv: GlossaryTerm["level"]) => {
    setActiveLevels((prev) => {
      const next = new Set(prev);
      if (next.has(lv)) next.delete(lv);
      else next.add(lv);
      return next;
    });
  };

  return (
    <>
      <div className="paper rounded-lg p-4 mb-6 ui-sans text-sm">
        <label htmlFor="glossary-q" className="sr-only">
          用語を検索
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="glossary-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="用語名・読み・英語・カテゴリ・定義から検索"
              className="w-full pl-9 pr-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
            />
          </div>
          <div className="text-xs text-[var(--muted)] tabular-nums sm:ml-auto whitespace-nowrap">
            {totalShown}/{totalAll} 語
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
          <span className="text-[var(--muted)] mr-1 self-center">
            級フィルタ:
          </span>
          {LEVEL_ORDER.map((lv) => {
            const on = activeLevels.has(lv);
            return (
              <button
                key={lv}
                type="button"
                onClick={() => toggleLevel(lv)}
                aria-pressed={on}
                className={`px-2.5 py-1 rounded border transition ${
                  on
                    ? `${LEVEL_STYLE[lv]} border-transparent font-bold`
                    : "border-[var(--page-border-strong)] text-[var(--muted)] hover:bg-[var(--background)]"
                }`}
              >
                {lv}級
              </button>
            );
          })}
          {(query || activeLevels.size < LEVEL_ORDER.length) && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveLevels(new Set(LEVEL_ORDER));
              }}
              className="ml-auto px-2.5 py-1 rounded border border-[var(--page-border)] text-[var(--muted)] hover:text-red-600 hover:border-red-400"
            >
              リセット
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="paper rounded-lg p-6 text-center text-sm text-[var(--muted-strong)] ui-sans">
          検索条件に合う用語が見つかりません。検索語を短くするか、級フィルタを広げてください。
        </p>
      ) : (
        <div className="space-y-12">
          {filtered.map((group) => (
            <section key={group.level} id={`level-${group.level}`}>
              <header className="mb-5 pb-2 border-b border-[var(--page-border-strong)]">
                <div className="chapter-eyebrow mb-1">Level</div>
                <h2 className="text-2xl font-bold tracking-wide">
                  {group.level}級レベルの用語 ({group.terms.length})
                </h2>
              </header>

              <dl className="space-y-3">
                {group.terms.map((t) => (
                  <div
                    key={t.term}
                    className="paper rounded-lg p-4 grid md:grid-cols-[200px_1fr] gap-3"
                  >
                    <dt className="border-r border-[var(--page-border)] md:pr-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/glossary/${encodeURIComponent(termToSlug(t.term))}`}
                            className="font-bold text-base hover:text-[var(--link)] hover:underline"
                          >
                            {t.term}
                          </Link>
                          <div className="text-xs text-[var(--muted)] ui-sans mt-0.5">
                            {t.reading}
                            {t.english && ` · ${t.english}`}
                          </div>
                        </div>
                        <BookmarkButton kind="glossary" id={t.term} />
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ui-sans ${LEVEL_STYLE[t.level]}`}
                        >
                          {t.level}級
                        </span>
                        <span className="text-[10px] text-[var(--muted)] ui-sans">
                          {t.category}
                        </span>
                      </div>
                    </dt>
                    <dd>
                      <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                        <MixedText text={t.definition} />
                      </p>
                      {t.link && (
                        <Link
                          href={t.link}
                          className="inline-block mt-2 text-xs text-[var(--link)] hover:underline ui-sans"
                        >
                          関連する教科書の節を読む →
                        </Link>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
