import type { Metadata } from "next";
import Link from "next/link";
import { gTestQuestions } from "@/data/questions/g-test";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "G検定 演習問題 ─ AI / DL / 倫理の無料選択式問題",
  description:
    "G検定対策の無料オリジナル選択式問題。AI の歴史・機械学習・ディープラーニング・倫理など頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/g-test/quiz" },
  openGraph: {
    title: "G検定 演習問題",
    description:
      "AI の歴史 / 機械学習 / DL / 倫理など、G検定の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/g-test/quiz";

export default function GTestQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "G検定", href: "/certs/g-test" },
          { name: "演習問題", href: "/certs/g-test/quiz" },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <Link href="/certs/g-test" className="hover:underline">
          G検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · G Test</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          G検定 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {gTestQuestions.length}{" "}
          問のオリジナル類題。AI の歴史 / 機械学習 / ディープラーニング / 倫理など、G検定の主要トピックを実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={gTestQuestions}
        quizKey="g-test"
        shareUrl={SHARE_URL}
        shareLabel="G検定 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G検定の教科書を読む
        </Link>
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          G検定の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
