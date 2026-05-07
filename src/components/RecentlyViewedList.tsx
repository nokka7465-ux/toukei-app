"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  RECENT_EVENT,
  clearRecent,
  listRecent,
  type RecentEntry,
} from "@/lib/recently-viewed";

const KIND_LABEL: Record<NonNullable<RecentEntry["kind"]>, string> = {
  blog: "ブログ",
  textbook: "教科書",
  tool: "ツール",
  glossary: "用語",
  page: "ページ",
};

function relativeTime(ts: number): string {
  const diffMs = Date.now() - ts;
  const min = Math.floor(diffMs / 60_000);
  if (min < 1) return "今";
  if (min < 60) return `${min} 分前`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} 時間前`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day} 日前`;
  return new Date(ts).toISOString().slice(0, 10);
}

export function RecentlyViewedList({
  limit = 10,
  showClear = true,
}: {
  limit?: number;
  showClear?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<RecentEntry[]>([]);

  useEffect(() => {
    setMounted(true);
    setItems(listRecent());
    const handler = () => setItems(listRecent());
    window.addEventListener(RECENT_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(RECENT_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  if (!mounted) return null;
  if (items.length === 0) {
    return (
      <p className="text-xs text-[var(--muted)] ui-sans">
        まだ閲覧履歴がありません。記事・教科書・ツールページを開くとここに残ります。
      </p>
    );
  }

  const visible = items.slice(0, limit);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {visible.map((it) => (
          <li key={it.id}>
            <Link
              href={it.href}
              className="paper rounded-lg p-3 hover:-translate-y-0.5 transition group block"
            >
              <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1 flex items-center gap-2">
                {it.kind && (
                  <span className="px-1.5 py-0.5 bg-[var(--background)] rounded font-bold">
                    {KIND_LABEL[it.kind]}
                  </span>
                )}
                {it.context && <span>{it.context}</span>}
                <span className="ml-auto text-[var(--muted)] normal-case tracking-normal">
                  {relativeTime(it.ts)}
                </span>
              </div>
              <div className="text-sm font-bold leading-snug group-hover:text-[var(--link)]">
                {it.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {showClear && items.length > 0 && (
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => {
              if (window.confirm("閲覧履歴をすべて消去しますか?")) {
                clearRecent();
              }
            }}
            className="text-[11px] text-[var(--muted)] hover:text-red-600 hover:underline ui-sans"
          >
            履歴を消去
          </button>
        </div>
      )}
    </div>
  );
}
