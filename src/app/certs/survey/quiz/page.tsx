import type { Metadata } from "next";
import Link from "next/link";
import { surveyQuestions } from "@/data/questions/survey";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計調査士 演習問題 ─ 統計法・公的統計・標本抽出の無料問題",
  description:
    "統計調査士対策の無料オリジナル選択式問題。統計法・主要な公的統計・標本抽出法など、頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/survey/quiz" },
  openGraph: {
    title: "統計調査士 演習問題",
    description:
      "統計法・公的統計・標本抽出など、統計調査士の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app-eight.vercel.app/certs/survey/quiz";

export default function SurveyQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "統計調査士", href: "/certs/survey" },
          { name: "演習問題", href: "/certs/survey/quiz" },
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
        <Link href="/certs/survey" className="hover:underline">
          統計調査士
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Survey</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計調査士 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {surveyQuestions.length}{" "}
          問のオリジナル類題。統計法・公的統計・標本抽出法など、統計調査士の頻出トピックを実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={surveyQuestions}
        quizKey="survey"
        shareUrl={SHARE_URL}
        shareLabel="統計調査士 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/survey/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 統計調査士の教科書を読む
        </Link>
        <Link
          href="/certs/survey"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          統計調査士の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
