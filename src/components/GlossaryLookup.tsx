"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { glossary } from "@/data/glossary";
import { MixedText } from "./MixedText";

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (target.isContentEditable) return true;
  return false;
}

const MAX_RESULTS = 12;

export function GlossaryLookup() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Cmd/Ctrl + K toggles the lookup
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      // `\\` opens the lookup (no modifiers, not while typing)
      if (
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !isTypingTarget(e.target) &&
        e.key === "\\"
      ) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length === 0) {
      // Show first few terms as a default sample
      return glossary.slice(0, MAX_RESULTS);
    }
    const lower = q.toLowerCase();
    return glossary
      .filter(
        (t) =>
          t.term.includes(q) ||
          t.reading.includes(q) ||
          (t.english && t.english.toLowerCase().includes(lower)) ||
          t.definition.includes(q),
      )
      .slice(0, MAX_RESULTS);
  }, [query]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="用語クイックルックアップ"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] p-4 print-hide"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative paper rounded-lg w-full max-w-2xl shadow-2xl flex flex-col max-h-[80vh]"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--page-border)]">
          <span aria-hidden="true" className="text-[var(--muted)]">
            🔎
          </span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="用語を入力(例: 標準偏差・p 値・MLE)"
            className="flex-1 bg-transparent outline-none text-base ui-sans"
            aria-label="用語検索"
          />
          <span className="text-[10px] text-[var(--muted)] ui-sans">
            Esc で閉じる
          </span>
        </div>
        <ul className="overflow-y-auto flex-1 divide-y divide-[var(--page-border)]">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-[var(--muted)]">
              該当する用語が見つかりません
            </li>
          ) : (
            results.map((t) => (
              <li key={t.term} className="px-4 py-3">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-bold text-base">{t.term}</span>
                  <span className="text-[11px] text-[var(--muted)] ui-sans">
                    {t.reading}
                    {t.english && ` · ${t.english}`}
                  </span>
                  <span className="ml-auto text-[10px] text-[var(--muted)] ui-sans">
                    {t.level}級 · {t.category}
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-strong)] leading-relaxed mt-1">
                  <MixedText text={t.definition} />
                </p>
                {t.link && (
                  <Link
                    href={t.link}
                    onClick={() => setOpen(false)}
                    className="text-[11px] text-[var(--link)] hover:underline mt-1 inline-block ui-sans"
                  >
                    関連節を読む →
                  </Link>
                )}
              </li>
            ))
          )}
        </ul>
        <div className="px-4 py-2 border-t border-[var(--page-border)] text-[11px] text-[var(--muted)] ui-sans flex items-center justify-between">
          <span>
            <kbd className="px-1.5 py-0.5 bg-[var(--background)] border border-[var(--page-border-strong)] rounded font-mono text-[10px]">
              \
            </kbd>{" "}
            または{" "}
            <kbd className="px-1.5 py-0.5 bg-[var(--background)] border border-[var(--page-border-strong)] rounded font-mono text-[10px]">
              Cmd+K
            </kbd>{" "}
            で開閉
          </span>
          <Link
            href="/glossary"
            onClick={() => setOpen(false)}
            className="text-[var(--link)] hover:underline"
          >
            用語集 全 {glossary.length} 語 →
          </Link>
        </div>
      </div>
    </div>
  );
}
