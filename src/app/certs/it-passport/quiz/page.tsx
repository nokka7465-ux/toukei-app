import type { Metadata } from "next";
import Link from "next/link";
import { itPassportQuestions } from "@/data/questions/it-passport";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ITパスポート試験 演習問題 ─ 3 分野バランスの無料選択式問題",
  description:
    "ITパスポート試験対策の無料オリジナル選択式問題。コンピュータ ・ ネットワーク ・ セキュリティ ・ マネジメント ・ 経営戦略 ・ 法務 ・ AI / DX の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/it-passport/quiz" },
  openGraph: {
    title: "ITパスポート試験 演習問題",
    description:
      "iパスの出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/it-passport/quiz";

export default function ItPassportQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ITパスポート試験", href: "/certs/it-passport" },
          { name: "演習問題", href: "/certs/it-passport/quiz" },
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
        <Link href="/certs/it-passport" className="hover:underline">
          ITパスポート試験
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · IT Passport</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ITパスポート試験 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {itPassportQuestions.length}{" "}
          問のオリジナル類題。コンピュータ ・ ネットワーク ・ セキュリティ ・ マネジメント ・ 経営戦略 ・ 法務 ・ AI / DX の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={itPassportQuestions}
        quizKey="it-passport"
        shareUrl={SHARE_URL}
        shareLabel="ITパスポート試験 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/it-passport/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← ITパスポートの教科書を読む
        </Link>
        <Link
          href="/certs/it-passport"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ITパスポートの概要に戻る
        </Link>
      </nav>
    </article>
  );
}
