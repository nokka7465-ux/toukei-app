import type { Metadata } from "next";
import Link from "next/link";
import { snowflakeDeaQuestions } from "@/data/questions/snowflake-dea";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SnowPro DEA 演習問題 ─ Snowflake Advanced Data Engineer の無料選択式問題",
  description: "SnowPro Advanced: Data Engineer(DEA)対策の無料オリジナル選択式問題。Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Polaris / Performance の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/snowflake-dea/quiz" },
  openGraph: { title: "SnowPro DEA 演習問題", description: "SnowPro DEA の出題範囲を選択式問題で確認。", type: "article" },
};

const SHARE_URL = "https://toukei-app.com/certs/snowflake-dea/quiz";

export default function SnowflakeDeaQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Snowflake DEA", href: "/certs/snowflake-dea" }, { name: "演習問題", href: "/certs/snowflake-dea/quiz" }]} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><Link href="/certs/snowflake-dea" className="hover:underline">Snowflake DEA</Link>
        <span className="mx-2">›</span><span>演習問題</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Snowflake DEA</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">SnowPro DEA 演習問題</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {snowflakeDeaQuestions.length} 問のオリジナル類題。Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Performance の主要論点を実戦形式で確認できます。
        </p>
      </header>
      <Quiz questions={snowflakeDeaQuestions} quizKey="snowflake-dea" shareUrl={SHARE_URL} shareLabel="SnowPro DEA の演習問題" />
      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/snowflake-dea/textbook" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← SnowPro DEA の教科書を読む</Link>
        <Link href="/certs/snowflake-dea" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">SnowPro DEA の概要に戻る</Link>
      </nav>
    </article>
  );
}
