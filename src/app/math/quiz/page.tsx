import type { Metadata } from "next";
import Link from "next/link";
import { mathBasicsQuestions } from "@/data/questions/math";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計のための数学基礎 演習問題 ─ Σ・指数対数の練習",
  description:
    "統計のための数学基礎の無料オリジナル選択式問題。割合・百分率・科学記法・総和記号 Σ・指数対数の頻出パターンを実戦形式で確認できます。",
  alternates: { canonical: "/math/quiz" },
  openGraph: {
    title: "数学基礎 演習問題",
    description:
      "割合・Σ・対数など、統計に必要な数学を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/math/quiz";

export default function MathQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "数学基礎", href: "/math" },
          { name: "演習問題", href: "/math/quiz" },
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
        <Link href="/math" className="hover:underline">
          数学基礎
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Math</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          数学基礎 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {mathBasicsQuestions.length}{" "}
          問のオリジナル類題。割合・百分率・指数表記・総和記号 Σ・対数など、統計に必要な数学のキーポイントを選択式で確認できます。
        </p>
      </header>

      <Quiz
        questions={mathBasicsQuestions}
        quizKey="math-basics"
        shareUrl={SHARE_URL}
        shareLabel="統計のための数学基礎 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/math/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 数学基礎の教科書を読む
        </Link>
        <Link
          href="/math"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          数学基礎の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
