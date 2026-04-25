import type { Metadata } from "next";
import Link from "next/link";
import { SearchUI } from "@/components/SearchUI";

export const metadata: Metadata = {
  title: "サイト内検索",
  description:
    "教科書・用語集・ブログ・公式集を横断するサイト内検索。気になるトピックや統計用語をすばやく見つけられます。",
  openGraph: {
    title: "サイト内検索",
    description:
      "教科書・用語集・ブログ・公式集を横断するキーワード検索。",
    type: "website",
  },
  robots: {
    index: false, // 検索結果ページはインデックスしない
  },
};

export default function SearchPage() {
  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>検索</span>
      </nav>

      <header className="mb-8 pb-4 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Search</div>
        <h1 className="text-4xl font-bold tracking-wider">サイト内検索</h1>
      </header>

      <SearchUI />
    </article>
  );
}
