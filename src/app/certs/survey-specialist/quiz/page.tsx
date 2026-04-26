import type { Metadata } from "next";
import Link from "next/link";
import { surveySpecialistQuestions } from "@/data/questions/survey-specialist";
import { Quiz } from "@/components/Quiz";

export const metadata: Metadata = {
  title: "専門統計調査士 演習問題 ─ 標本設計・公的統計・現代統計",
  description:
    "専門統計調査士対策のオリジナル選択式問題。標本誤差・デザイン効果・層化抽出の精度・サンプリングウエイト・MAR・差分プライバシーなど、上位資格の頻出トピックを実戦形式で確認できます。",
  openGraph: {
    title: "専門統計調査士 演習問題",
    description: "標本設計と公的統計の選択式問題で、専門統計調査士の出題に慣れる。",
    type: "article",
  },
};

const SHARE_URL =
  "https://toukei-app-eight.vercel.app/certs/survey-specialist/quiz";

export default function SurveySpecialistQuizPage() {
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
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <Link href="/certs/survey-specialist" className="hover:underline">
          専門統計調査士
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Survey Specialist</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          専門統計調査士 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {surveySpecialistQuestions.length}{" "}
          問のオリジナル類題。標本誤差・デザイン効果・ネイマン配分・サンプリングウエイト・MAR・差分プライバシー・SDGs 指標など、専門統計調査士の頻出トピックを実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={surveySpecialistQuestions}
        quizKey="survey-specialist"
        shareUrl={SHARE_URL}
        shareLabel="専門統計調査士の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/survey-specialist/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 専門統計調査士の教科書を読む
        </Link>
        <Link
          href="/certs/survey-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          専門統計調査士の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
