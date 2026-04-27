import type { Metadata } from "next";
import Link from "next/link";
import { dsLiteracyQuestions } from "@/data/questions/ds-literacy";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DS検定 演習問題 ─ DS 力・DE 力・ビジネス力 3 軸の無料問題",
  description:
    "DS検定リテラシーレベル対策の無料オリジナル選択式問題。DS 力 / DE 力 / ビジネス力 の 3 軸頻出ポイントを実戦形式で確認できます。",
  alternates: { canonical: "/certs/ds-literacy/quiz" },
  openGraph: {
    title: "データサイエンティスト検定 演習問題",
    description:
      "DS 力 / DE 力 / ビジネス力 の 3 軸を、選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL =
  "https://toukei-app-eight.vercel.app/certs/ds-literacy/quiz";

export default function DsLiteracyQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS検定", href: "/certs/ds-literacy" },
          { name: "演習問題", href: "/certs/ds-literacy/quiz" },
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
        <Link href="/certs/ds-literacy" className="hover:underline">
          データサイエンティスト検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · DS Cert</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          データサイエンティスト検定 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {dsLiteracyQuestions.length}{" "}
          問のオリジナル類題。DS 力(統計・ML)・DE 力(SQL・データ基盤)・ビジネス力 の 3 軸頻出ポイントを実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={dsLiteracyQuestions}
        quizKey="ds-literacy"
        shareUrl={SHARE_URL}
        shareLabel="データサイエンティスト検定 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-literacy/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 教科書を読む
        </Link>
        <Link
          href="/certs/ds-literacy"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          概要に戻る
        </Link>
      </nav>
    </article>
  );
}
