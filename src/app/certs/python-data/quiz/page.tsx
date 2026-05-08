import type { Metadata } from "next";
import Link from "next/link";
import { pythonDataQuestions } from "@/data/questions/python-data";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Python データ分析試験 演習問題 ─ NumPy / pandas / sklearn の無料選択式問題",
  description:
    "Python 3 エンジニア認定 データ分析試験対策の無料オリジナル選択式問題。NumPy / pandas / Matplotlib / scikit-learn の頻出トピックをコード片で確認できます。",
  alternates: { canonical: "/certs/python-data/quiz" },
  openGraph: {
    title: "Python データ分析試験 演習問題",
    description:
      "NumPy / pandas / scikit-learn の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/python-data/quiz";

export default function PythonDataQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Python データ分析", href: "/certs/python-data" },
          { name: "演習問題", href: "/certs/python-data/quiz" },
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
        <Link href="/certs/python-data" className="hover:underline">
          Python データ分析
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Python Data Analysis</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Python データ分析試験 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {pythonDataQuestions.length}{" "}
          問のオリジナル類題。NumPy・pandas・Matplotlib・scikit-learn の主要 API と機械学習の基礎を、コード片を読みながら確認できます。
        </p>
      </header>

      <Quiz
        questions={pythonDataQuestions}
        quizKey="python-data"
        shareUrl={SHARE_URL}
        shareLabel="Python データ分析試験 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/python-data/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Python データ分析の教科書を読む
        </Link>
        <Link
          href="/certs/python-data"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Python データ分析の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
