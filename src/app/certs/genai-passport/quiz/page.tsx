import type { Metadata } from "next";
import Link from "next/link";
import { genaiPassportQuestions } from "@/data/questions/genai-passport";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "生成AIパスポート 演習問題 ─ LLM・プロンプト・AI倫理の無料選択式問題",
  description:
    "生成AIパスポート検定(GUGA)対策の無料オリジナル選択式問題。LLM の仕組み・プロンプト・ハルシネーション・著作権・EU AI Act など頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/genai-passport/quiz" },
  openGraph: {
    title: "生成AIパスポート 演習問題",
    description:
      "LLM / プロンプト / リスク / 法律など、生成AIパスポートの出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/genai-passport/quiz";

export default function GenaiPassportQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "生成AIパスポート検定", href: "/certs/genai-passport" },
          { name: "演習問題", href: "/certs/genai-passport/quiz" },
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
        <Link href="/certs/genai-passport" className="hover:underline">
          生成AIパスポート検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Generative AI Passport</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          生成AIパスポート 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {genaiPassportQuestions.length}{" "}
          問のオリジナル類題。LLM / プロンプト / ハルシネーション / 著作権 / EU AI Act など、生成AIパスポートの主要トピックを実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={genaiPassportQuestions}
        quizKey="genai-passport"
        shareUrl={SHARE_URL}
        shareLabel="生成AIパスポート の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/genai-passport/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 生成AIパスポートの教科書を読む
        </Link>
        <Link
          href="/certs/genai-passport"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          生成AIパスポートの概要に戻る
        </Link>
      </nav>
    </article>
  );
}
