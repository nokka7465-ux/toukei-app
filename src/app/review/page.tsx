import type { Metadata } from "next";
import Link from "next/link";
import { ReviewPageClient } from "./ReviewPageClient";

export const metadata: Metadata = {
  title: "苦手問題の復習",
  description:
    "演習で間違えた問題だけを集めた、あなた専用の復習リスト。ブラウザに保存された学習履歴をもとに、苦手問題を効率的に潰せます。",
  alternates: { canonical: "/review" },
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
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
        <span>復習</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Review</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">苦手問題の復習</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          これまで間違えた問題だけを集めたあなた専用の復習リストです。正解できた問題はリストから自動で消えます。学習履歴はサーバーには送信されず、お使いのブラウザにのみ保存されます。
        </p>
      </header>

      <ReviewPageClient />
    </article>
  );
}
