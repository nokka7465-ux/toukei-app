import type { Metadata } from "next";
import Link from "next/link";
import { snowflakeSnowProQuestions } from "@/data/questions/snowflake-snowpro";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Snowflake SnowPro Core 演習問題 ─ Time Travel ・ Cloning ・ Sharing の無料選択式問題",
  description:
    "Snowflake SnowPro Core(COF-C02)対策の無料オリジナル選択式問題。アーキテクチャ ・ Virtual Warehouse ・ COPY/Snowpipe ・ VARIANT ・ Time Travel ・ Zero-Copy Cloning ・ Data Sharing ・ RBAC ・ Cortex などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/snowflake-snowpro/quiz" },
  openGraph: {
    title: "Snowflake SnowPro Core 演習問題",
    description:
      "SnowPro Core の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/snowflake-snowpro/quiz";

export default function SnowflakeSnowProQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Snowflake SnowPro Core", href: "/certs/snowflake-snowpro" },
          { name: "演習問題", href: "/certs/snowflake-snowpro/quiz" },
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
        <Link href="/certs/snowflake-snowpro" className="hover:underline">
          Snowflake SnowPro Core
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Snowflake SnowPro Core</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Snowflake SnowPro Core 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {snowflakeSnowProQuestions.length}{" "}
          問のオリジナル類題。アーキテクチャ ・ Virtual Warehouse ・ COPY/Snowpipe ・ VARIANT ・ Time Travel ・ Cloning ・ Data Sharing ・ RBAC ・ Cortex の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={snowflakeSnowProQuestions}
        quizKey="snowflake-snowpro"
        shareUrl={SHARE_URL}
        shareLabel="Snowflake SnowPro Core の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/snowflake-snowpro/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Snowflake SnowPro Core の教科書を読む
        </Link>
        <Link
          href="/certs/snowflake-snowpro"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Snowflake SnowPro Core の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
