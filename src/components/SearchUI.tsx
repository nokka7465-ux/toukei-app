"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { search, sourceLabel, type SearchSource } from "@/lib/search";

const SOURCE_STYLE: Record<SearchSource, string> = {
  textbook:
    "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  glossary:
    "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  blog:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  formula:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
};

const FILTERS: { key: SearchSource | "all"; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "textbook", label: "教科書" },
  { key: "glossary", label: "用語集" },
  { key: "blog", label: "ブログ" },
  { key: "formula", label: "公式集" },
];

export function SearchUI({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState<SearchSource | "all">("all");

  // Read q param from URL on mount (initialQuery can also be passed via SSR if desired).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q && q !== query) setQuery(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = useMemo(() => {
    if (query.trim().length < 1) return [];
    const all = search(query, 100);
    if (filter === "all") return all;
    return all.filter((r) => r.item.source === filter);
  }, [query, filter]);

  const counts = useMemo(() => {
    if (query.trim().length < 1) {
      return { all: 0, textbook: 0, glossary: 0, blog: 0, formula: 0 };
    }
    const all = search(query, 1000);
    return {
      all: all.length,
      textbook: all.filter((r) => r.item.source === "textbook").length,
      glossary: all.filter((r) => r.item.source === "glossary").length,
      blog: all.filter((r) => r.item.source === "blog").length,
      formula: all.filter((r) => r.item.source === "formula").length,
    };
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="paper rounded-lg p-5">
        <label
          htmlFor="search-input"
          className="block ui-sans text-xs text-[var(--muted)] mb-2"
        >
          キーワード検索(教科書 ・ 用語集 ・ ブログ ・ 公式集 を横断)
        </label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="例: 正規分布、t 検定、回帰、ベイズ ..."
          autoFocus
          className="w-full px-4 py-3 border border-[var(--page-border-strong)] rounded text-base bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
        />
        {query.trim().length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 ui-sans text-xs">
            {FILTERS.map((f) => {
              const count =
                f.key === "all" ? counts.all : counts[f.key as SearchSource];
              const isActive = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1 rounded border transition ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                      : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  {f.label} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {query.trim().length === 0 ? (
        <div className="paper rounded-lg p-7 text-center text-sm text-[var(--muted-strong)] leading-relaxed">
          <p className="mb-3">
            知りたいトピックや用語を入力してください。教科書本文・用語集の定義・ブログ記事・公式集を横断で検索します。
          </p>
          <p className="text-xs text-[var(--muted)] ui-sans">
            よく使われる例: 「正規分布」「t 検定」「回帰係数」「ベイズ」「最尤推定」
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="paper rounded-lg p-7 text-center text-sm text-[var(--muted-strong)]">
          一致する結果が見つかりませんでした。表記やスペースを変えてお試しください。
        </div>
      ) : (
        <ul className="space-y-3">
          {results.map((r) => (
            <li key={r.item.id}>
              <Link
                href={r.item.url}
                className="paper block p-5 rounded-lg hover:-translate-y-0.5 transition group"
              >
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold ui-sans ${SOURCE_STYLE[r.item.source]}`}
                  >
                    {sourceLabel(r.item.source)}
                  </span>
                  <span className="text-xs text-[var(--muted)] ui-sans">
                    {r.item.context}
                  </span>
                </div>
                <div className="font-bold text-base mb-1 group-hover:text-[var(--link)]">
                  {r.item.title}
                </div>
                <div className="text-xs text-[var(--muted-strong)] leading-relaxed line-clamp-3">
                  {r.snippet}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
