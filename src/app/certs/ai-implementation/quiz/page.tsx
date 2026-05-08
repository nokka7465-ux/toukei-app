import type { Metadata } from "next";
import Link from "next/link";
import { aiImplementationQuestions } from "@/data/questions/ai-implementation";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AI 実装検定 演習問題 ─ PyTorch ・ Keras ・ CNN の無料選択式問題",
  description:
    "AI 実装検定対策の無料オリジナル選択式問題。Python / NumPy / scikit-learn / PyTorch / Keras / CNN / Transformer / エッジ AI など頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/ai-implementation/quiz" },
  openGraph: {
    title: "AI 実装検定 演習問題",
    description:
      "Python から PyTorch / Keras 実装まで、AI 実装検定の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/ai-implementation/quiz";

export default function AiImplementationQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AI 実装検定", href: "/certs/ai-implementation" },
          { name: "演習問題", href: "/certs/ai-implementation/quiz" },
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
        <Link href="/certs/ai-implementation" className="hover:underline">
          AI 実装検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · AI Implementation</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AI 実装検定 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {aiImplementationQuestions.length}{" "}
          問のオリジナル類題。PyTorch / Keras の実装パターン、CNN / Transformer の代表モデル、エッジ AI / MLOps の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={aiImplementationQuestions}
        quizKey="ai-implementation"
        shareUrl={SHARE_URL}
        shareLabel="AI 実装検定 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ai-implementation/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AI 実装検定の教科書を読む
        </Link>
        <Link
          href="/certs/ai-implementation"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AI 実装検定の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
