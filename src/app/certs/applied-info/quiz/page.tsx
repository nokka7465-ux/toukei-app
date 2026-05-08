import type { Metadata } from "next";
import Link from "next/link";
import { appliedInfoQuestions } from "@/data/questions/applied-info";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "応用情報技術者試験 演習問題 ─ AI / データ重点の無料選択式問題",
  description:
    "応用情報技術者試験対策の無料オリジナル選択式問題。アルゴリズム ・ DB ・ 確率統計 ・ AI ・ ネットワーク ・ セキュリティ ・ ソフトウェア工学 ・ PM ・ 経営戦略の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/applied-info/quiz" },
  openGraph: {
    title: "応用情報技術者試験 演習問題",
    description:
      "応用情報の出題範囲を選択式問題で確認(AI / データ重点)。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/applied-info/quiz";

export default function AppliedInfoQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "応用情報技術者試験", href: "/certs/applied-info" },
          { name: "演習問題", href: "/certs/applied-info/quiz" },
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
        <Link href="/certs/applied-info" className="hover:underline">
          応用情報技術者試験
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Applied Info</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          応用情報技術者試験 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {appliedInfoQuestions.length}{" "}
          問のオリジナル類題。アルゴリズム ・ DB ・ 確率統計 ・ AI ・ セキュリティ ・ ソフトウェア工学 ・ PM ・ 経営戦略の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={appliedInfoQuestions}
        quizKey="applied-info"
        shareUrl={SHARE_URL}
        shareLabel="応用情報技術者試験 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/applied-info/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 応用情報の教科書を読む
        </Link>
        <Link
          href="/certs/applied-info"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          応用情報の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
