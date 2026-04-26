"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavGroup = {
  label: string;
  items: { href: string; label: string; subtle?: string }[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: "学習を始める",
    items: [
      { href: "/", label: "ホーム" },
      { href: "/roadmap", label: "学習ロードマップ" },
      { href: "/diagnose", label: "級診断" },
      { href: "/exam-info", label: "受験情報まとめ" },
      { href: "/textbook", label: "教科書 一覧" },
      { href: "/formulas", label: "公式集 一覧" },
      { href: "/quiz", label: "演習問題 一覧" },
    ],
  },
  {
    label: "統計検定 教科書(級別)",
    items: [
      { href: "/textbook/intro", label: "入門編" },
      { href: "/textbook/grade-4", label: "4 級" },
      { href: "/textbook/grade-3", label: "3 級" },
      { href: "/textbook/grade-2", label: "2 級" },
      { href: "/textbook/grade-pre1", label: "準 1 級" },
      { href: "/textbook/grade-1", label: "1 級" },
    ],
  },
  {
    label: "関連検定",
    items: [
      { href: "/certs/ds-basic", label: "統計検定 DS基礎" },
      { href: "/certs/survey", label: "統計調査士" },
      { href: "/certs/g-test", label: "G検定" },
      { href: "/certs/ds-literacy", label: "データサイエンティスト検定" },
    ],
  },
  {
    label: "学習サポート",
    items: [
      { href: "/math", label: "数学基礎" },
      { href: "/figures", label: "図解で学ぶ統計" },
      { href: "/explore", label: "動かして学ぶ統計" },
      { href: "/tools", label: "統計計算ツール集" },
      { href: "/glossary", label: "用語集" },
      { href: "/cheatsheet", label: "公式チートシート" },
      { href: "/blog", label: "ブログ" },
      { href: "/search", label: "サイト内検索" },
    ],
  },
  {
    label: "サイト情報",
    items: [
      { href: "/contact", label: "お問い合わせ" },
      { href: "/privacy", label: "プライバシーポリシー" },
    ],
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="メニューを開く"
        className="md:hidden w-7 h-7 rounded border border-[var(--page-border-strong)] flex items-center justify-center hover:bg-[var(--background)]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーションメニュー"
        >
          <div className="absolute inset-0 bg-black/60" />
          <nav
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-[var(--page)] border-l border-[var(--page-border-strong)] overflow-y-auto"
          >
            <div className="sticky top-0 bg-[var(--page)] border-b border-[var(--page-border)] px-5 py-4 flex justify-between items-center">
              <span className="font-bold tracking-wide">メニュー</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="メニューを閉じる"
                className="w-7 h-7 rounded hover:bg-[var(--background)] flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="p-5 space-y-6 ui-sans">
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="chapter-eyebrow mb-2 text-[var(--muted)]">
                    {group.label}
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm hover:text-[var(--link)]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
