import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "SnowPro Advanced: Data Engineer(DEA)とは ─ 受験対象・出題範囲・対策まとめ",
  description: "SnowPro Advanced: Data Engineer(DEA)の受験対象・出題範囲・対策方針を完全解説。Snowpipe ・ Streams ・ Tasks ・ Snowpark ・ Cortex AI ・ Iceberg ・ Apache Polaris ・ Native Apps ・ Streamlit ・ Performance ・ Cost を実装で問う Snowflake の Advanced 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/snowflake-dea" },
  openGraph: { title: "SnowPro Advanced: Data Engineer(DEA)とは", description: "SnowPro DEA の対象・出題範囲・対策をまとめた解説ページ。", type: "article" },
};

const FAQ_ITEMS = certFaq["snowflake-dea"] ?? [];
const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) };

export default function SnowflakeDeaPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Snowflake DEA", href: "/certs/snowflake-dea" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><span>Snowflake DEA</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">SnowPro Advanced: Data Engineer(DEA)</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Snowflake 上でデータ取込 ・ 変換 ・ 最適化を担う Data Engineer の Advanced 認定**。**SnowPro Core(Foundational)の上位**。**Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Polaris / Native Apps / Horizon Catalog / Performance / Cost** の総合実装力を問う、実務 1-2 年経験者向け試験です。
        </p>
      </header>
      <StudyFlow textbookHref="/certs/snowflake-dea/textbook" quizHref="/certs/snowflake-dea/quiz" examLabel="SnowPro DEA 本番" />
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose">
          **65 問 / 115 分 / 750 / 1000 / 375 USD / 有効期限 2 年**。**前提**: SnowPro Core + Snowflake 実務 1-2 年。**Scenario 問題**が多く、設計判断 + 実装パターンが問われます。
        </p>
      </section>
      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Data Movement", body: "Bulk Load(COPY)/ Snowpipe / Snowpipe Streaming / Iceberg Direct Write / Streams + Tasks 増分 ELT。" },
            { title: "Snowpark", body: "Python / Scala / Java DataFrame API ・ UDF / Stored Procedure ・ SPCS(Container Services)。" },
            { title: "Stored Procedure", body: "SQL Scripting / Python / Scala / Java(Snowpark)・ CALLER vs OWNER Rights。" },
            { title: "Cortex AI", body: "Cortex Functions(COMPLETE / SUMMARIZE / EMBED)・ Cortex Search(マネージド RAG)・ Cortex Analyst(NL2SQL)。" },
            { title: "Performance", body: "Clustering Key / SOS / Materialized View / Query Profile / Cache 3 階層 / Spilling。" },
            { title: "Iceberg + Polaris", body: "Iceberg Tables(Snowflake-/Catalog-Managed)・ Apache Polaris(OSS Catalog)・ Open Lakehouse。" },
            { title: "Sharing + Native Apps + Streamlit", body: "Secure Data Sharing / Marketplace / Native App Framework / Streamlit in Snowflake。" },
            { title: "Storage / Security / Governance", body: "Time Travel / Fail-Safe / Replication ・ DDM / RAP / Tag-Based Masking ・ Horizon Catalog。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">SnowPro DEA の学習を始める</h2>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link href="/certs/snowflake-dea/textbook" className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]">教科書を読む →</Link>
          <Link href="/certs/snowflake-dea/quiz" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]">問題を解く</Link>
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="border-b border-[var(--page-border)] pb-3 last:border-b-0">
              <dt className="font-bold mb-1.5">Q. {item.q}</dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-relaxed">A. {item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <SchoolPicks category="Snowflake" heading="SnowPro DEA 対策に強いスクール" />
      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/snowflake-snowpro" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← SnowPro Core について</Link>
        <Link href="/certs/databricks-data-engineer" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">Databricks DE について →</Link>
      </nav>
    </article>
  );
}
