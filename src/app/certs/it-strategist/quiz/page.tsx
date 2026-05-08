import type { Metadata } from "next";
import Link from "next/link";
import { itStrategistQuestions } from "@/data/questions/it-strategist";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ITストラテジスト試験 演習問題 ─ 経営戦略 ・ IT 戦略の無料選択式問題",
  description:
    "ITストラテジスト試験(ST、IPA レベル 4)対策の無料オリジナル選択式問題。経営戦略 ・ STP マーケティング ・ EA ・ DX ・ BPR ・ 投資判断 ・ イノベーションなどの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/it-strategist/quiz" },
  openGraph: {
    title: "ITストラテジスト試験 演習問題",
    description:
      "ST の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/it-strategist/quiz";

export default function ItStrategistQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ITストラテジスト試験", href: "/certs/it-strategist" },
          { name: "演習問題", href: "/certs/it-strategist/quiz" },
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
        <Link href="/certs/it-strategist" className="hover:underline">
          ITストラテジスト試験
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · IT Strategist</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ITストラテジスト試験 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {itStrategistQuestions.length}{" "}
          問のオリジナル類題。経営戦略 ・ STP ・ EA ・ DX ・ BPR ・ 投資判断 ・ イノベーションの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={itStrategistQuestions}
        quizKey="it-strategist"
        shareUrl={SHARE_URL}
        shareLabel="ITストラテジスト試験 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/it-strategist/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← ITストラテジストの教科書を読む
        </Link>
        <Link
          href="/certs/it-strategist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ITストラテジストの概要に戻る
        </Link>
      </nav>
    </article>
  );
}
