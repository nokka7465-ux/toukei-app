import type { Metadata } from "next";
import Link from "next/link";
import { basicInfoQuestions } from "@/data/questions/basic-info";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "基本情報技術者試験 演習問題 ─ AI / データ重点の無料選択式問題",
  description:
    "基本情報技術者試験(FE)対策の無料オリジナル選択式問題。アルゴリズム ・ 情報セキュリティ ・ DB ・ ネットワーク ・ ソフトウェア工学 ・ PM ・ AI / DX の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/basic-info/quiz" },
  openGraph: {
    title: "基本情報技術者試験 演習問題",
    description:
      "FE の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/basic-info/quiz";

export default function BasicInfoQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "基本情報技術者試験", href: "/certs/basic-info" },
          { name: "演習問題", href: "/certs/basic-info/quiz" },
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
        <Link href="/certs/basic-info" className="hover:underline">
          基本情報技術者試験
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Basic Info</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          基本情報技術者試験 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {basicInfoQuestions.length}{" "}
          問のオリジナル類題。アルゴリズム ・ 情報セキュリティ ・ DB ・ ネットワーク ・ ソフトウェア工学 ・ PM ・ AI / DX の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={basicInfoQuestions}
        quizKey="basic-info"
        shareUrl={SHARE_URL}
        shareLabel="基本情報技術者試験 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/basic-info/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 基本情報の教科書を読む
        </Link>
        <Link
          href="/certs/basic-info"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          基本情報の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
