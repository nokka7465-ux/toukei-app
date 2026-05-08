import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Databricks Certified Data Engineer Associate とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Databricks Certified Data Engineer Associate の受験対象・出題範囲・対策方針を完全解説。Snowflake と並ぶモダンデータ基盤の双璧。Apache Spark + Delta Lake + Unity Catalog + Workflows + Photon を測る Associate 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/databricks-data-engineer" },
  openGraph: {
    title: "Databricks Data Engineer Associate とは",
    description:
      "Databricks の Data Engineer Associate 認定の対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["databricks-data-engineer"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function DatabricksDataEngineerPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Databricks Data Engineer Associate", href: "/certs/databricks-data-engineer" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
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
        <span>Databricks Data Engineer Associate</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Databricks Certified Data Engineer Associate
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Databricks Lakehouse Platform** 上でデータエンジニアリングを行うエンジニアを認定する **Associate レベル** 試験。**Snowflake と並ぶモダンデータ基盤の双璧** で、**Apache Spark + Delta Lake + Unity Catalog + Workflows + Photon** など Databricks のフル機能をカバーします。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン監督受験(Kryterion / Webassessor) / 45 問 / 90 分 / 多肢選択 + 複数選択 / 合格 70%(参考) / 受験料 200 USD / 有効期限 2 年**。**SQL + Python の基礎** が前提知識です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **データエンジニア ・ アナリティクスエンジニア ・ ML エンジニア** が想定対象。**Databricks Community Edition(無料)** で実機演習可能、**Databricks Academy(無料公式)** が標準教材。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Lakehouse Platform(24%)", body: "Medallion / Workspace / Cluster / SQL Warehouse。" },
            { title: "ELT with Apache Spark(29%)", body: "SQL / PySpark / Delta Lake / OPTIMIZE / VACUUM / MERGE。" },
            { title: "Incremental Processing(22%)", body: "Auto Loader / Structured Streaming / DLT。" },
            { title: "Production Pipelines(16%)", body: "Workflows / Jobs / Job Cluster / 監視。" },
            { title: "Data Governance(9%)", body: "Unity Catalog / RBAC / Lineage / RLS。" },
            { title: "Photon Engine", body: "C++ 実装の高速化、Spark の 2-10 倍。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Strategy</div>
        <h2 className="text-xl font-bold mb-3">対策の方針</h2>
        <ol className="list-decimal list-outside ml-6 space-y-2 text-[var(--muted-strong)] leading-relaxed">
          <li>
            <strong>Databricks Community Edition</strong>: 無料(機能制限あり)で実機ハンズオン可能。
          </li>
          <li>
            <strong>Databricks Academy</strong>: 公式無料学習プラットフォーム。Data Engineer Associate 専用ラーニングパスがある。
          </li>
          <li>
            <strong>本サイトの[Databricks 教科書](/certs/databricks-data-engineer/textbook)</strong> で Lakehouse / Delta Lake / DLT / Unity Catalog を体系学習。
          </li>
          <li>
            <strong>Delta Lake の特性</strong>: ACID / Time Travel / OPTIMIZE / VACUUM が頻出。
          </li>
          <li>
            <strong>Auto Loader vs COPY INTO</strong> ・ **DLT の Apply Changes Into** などの使い分けを理解。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Databricks Academy + 本サイトの[演習問題](/certs/databricks-data-engineer/quiz)。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">Databricks Data Engineer Associate の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは Data Engineer Associate 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Lakehouse ・ Delta Lake ・ Spark / PySpark ・ Auto Loader / DLT ・ Workflows ・ Unity Catalog ・ Delta Sharing ・ MLflow / Mosaic AI まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/databricks-data-engineer/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/databricks-data-engineer/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">モダンデータ基盤の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">Databricks(本資格)</th>
                <th className="py-2 pr-3">Snowflake</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">アーキテクチャ</td>
                <td className="py-2 pr-3">Lakehouse(Spark + Delta Lake)</td>
                <td className="py-2 pr-3">DWH(独自エンジン)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主要言語</td>
                <td className="py-2 pr-3">SQL / Python / Scala / R</td>
                <td className="py-2 pr-3">SQL / Snowpark</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">ML / AI</td>
                <td className="py-2 pr-3">MLflow / Mosaic AI / DBRX</td>
                <td className="py-2 pr-3">Cortex AI / Snowpark ML</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">テーブル形式</td>
                <td className="py-2 pr-3">Delta Lake / Iceberg</td>
                <td className="py-2 pr-3">独自 / Iceberg</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">エンジニア / ML 重視</td>
                <td className="py-2 pr-3">アナリスト / SQL 重視</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.q}
              className="border-b border-[var(--page-border)] pb-3 last:border-b-0"
            >
              <dt className="font-bold mb-1.5">Q. {item.q}</dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-relaxed">
                A. {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <SchoolPicks
        category="Databricks"
        heading="Databricks 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/snowflake-snowpro"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Snowflake SnowPro Core について
        </Link>
        <Link
          href="/certs/db-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DB スペシャリストについて →
        </Link>
      </nav>
    </article>
  );
}
