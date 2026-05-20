import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Fabric Data Engineer Associate(DP-700)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft Fabric Data Engineer Associate(DP-700)の受験対象・出題範囲・対策方針を完全解説。Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL Database ・ Real-Time Dashboard ・ Reflex ・ Git Integration ・ Deployment Pipeline を実装 ・ 取込 / 変換 ・ 監視 / 最適化で問う Microsoft Fabric Data Engineer 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-dp-700" },
  openGraph: {
    title: "Microsoft Fabric Data Engineer Associate(DP-700)とは",
    description:
      "DP-700 の対象・出題範囲・対策・DP-600/DP-203 比較をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["azure-dp-700"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AzureDp700Page() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Microsoft Fabric DP-700", href: "/certs/azure-dp-700" },
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
        <span>Microsoft Fabric DP-700</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Certified: Fabric Data Engineer Associate(DP-700)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Microsoft Fabric 上でデータ取込 ・ 変換 ・ ストリーミング ・ オーケストレーション ・ 監視を実装** する Data Engineer Associate 認定(2024 リリース)。**Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL Database ・ Real-Time Dashboard ・ Reflex ・ Git Integration ・ Deployment Pipeline** を **実装 ・ 取込 / 変換 ・ 監視 / 最適化** の 3 ドメインで問います。**DP-600(Analytics Engineer)と並ぶ Fabric の双璧** で、両方取得で Fabric 全領域カバーとなります。
        </p>
      </header>

      <StudyFlow
        textbookHref="/certs/azure-dp-700/textbook"
        quizHref="/certs/azure-dp-700/quiz"
        examLabel="DP-700 本番"
      />

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分(参考) / 単一・複数選択 + ドラッグ&ドロップ + ケーススタディ / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**SQL(中級)・ Python / PySpark(中級)・ KQL(基礎)・ Power Query M** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **Lakehouse(Spark + Delta + Notebook)**を中心に、**Pipeline / Dataflow Gen2** で取込変換、**Eventstream + KQL Database + Real-Time Dashboard + Reflex** でリアルタイム分析、**Git Integration + Deployment Pipeline** で CI/CD という Fabric Data Engineering の全領域が出題範囲。**Synapse + ADF 時代の DP-203 後継** とも言えるポジションです。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Implement and Manage(30-35%)", body: "Workspace / Lakehouse / Spark Pool / Git / Deployment Pipeline / Security(RLS / OLS / Workspace Identity / Private Link)。" },
            { title: "Ingest and Transform(30-35%)", body: "Pipeline / Dataflow Gen2 / Notebook / Spark / Eventstream / KQL Ingestion。" },
            { title: "Monitor and Optimize(30-35%)", body: "Monitoring Hub / Capacity Metrics / Performance Tuning / Table Maintenance(OPTIMIZE / Z-ORDER / VACUUM)。" },
            { title: "Lakehouse / Delta", body: "Files / Tables / Schema / MERGE INTO / Schema Evolution / Time Travel / OCC。" },
            { title: "Spark / NEE", body: "Starter / Custom Pool / Environment / NEE(Velox + Gluten)/ AQE / High Concurrency Mode。" },
            { title: "Real-Time Intelligence", body: "Eventstream(Source / 変換 / Destination)/ Eventhouse(KQL DB)/ Materialized View / Update Policy / Real-Time Dashboard / Reflex。" },
            { title: "OneLake / Shortcut / Mirroring", body: "Shortcut(S3 / ADLS / GCS / Iceberg)/ Mirroring(Azure SQL / Cosmos / Snowflake / PostgreSQL / Mongo Atlas)。" },
            { title: "セキュリティ + ガバナンス", body: "Workspace Identity / Managed Private Endpoint / Tenant Private Link / Sensitivity Label / Purview Hub。" },
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
            <strong>Fabric Trial を起動して実機を触る</strong>: 60 日 ・ F64 相当 ・ 全機能無料。
          </li>
          <li>
            <strong>DP-203 / DP-600 の基礎を確認</strong>: 本サイトの[DP-203](/certs/azure-dp-203) ・ [DP-600](/certs/azure-dp-600) と併読。
          </li>
          <li>
            <strong>本サイトの[DP-700 教科書](/certs/azure-dp-700/textbook)</strong> で 10 章を体系的に学習。
          </li>
          <li>
            <strong>Microsoft Learn DP-700 ラーニングパス</strong>: 公式の手厚いハンズオン。
          </li>
          <li>
            <strong>Spark / KQL / Pipeline を実機で書く</strong>: Notebook + Eventstream + Pipeline を Fabric Trial 上で構築 → 課題感を体得。
          </li>
          <li>
            <strong>本サイトの演習問題</strong>: 主要トピックを網羅した 80 問で習熟度確認。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DP-700 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DP-700 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Lakehouse ・ Spark ・ Pipeline ・ Real-Time ・ Git ・ Monitor まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/azure-dp-700/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/azure-dp-700/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">Fabric / Azure DE 系認定比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">DP-700(本資格)</th>
                <th className="py-2 pr-3">DP-600</th>
                <th className="py-2 pr-3">DP-203</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">役割</td>
                <td className="py-2 pr-3">Fabric Data Engineer</td>
                <td className="py-2 pr-3">Fabric Analytics Engineer</td>
                <td className="py-2 pr-3">Azure Data Engineer</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中心</td>
                <td className="py-2 pr-3">Lakehouse / Pipeline / Real-Time</td>
                <td className="py-2 pr-3">Semantic Model / Direct Lake / DAX</td>
                <td className="py-2 pr-3">Synapse / ADF / Databricks</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">165 USD</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">100〜200 時間</td>
                <td className="py-2 pr-3">100〜200 時間</td>
                <td className="py-2 pr-3">100〜200 時間</td>
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
        category="Azure"
        heading="Microsoft Fabric DP-700 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-dp-600"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DP-600(Analytics Engineer)について
        </Link>
        <Link
          href="/certs/azure-dp-203"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure DP-203 について →
        </Link>
      </nav>
    </article>
  );
}
