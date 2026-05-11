import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Azure Data Engineer Associate(DP-203)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft Azure Data Engineer Associate(DP-203)の受験対象・出題範囲・対策方針を完全解説。Synapse ・ Data Factory ・ Databricks ・ Stream Analytics ・ Event Hubs ・ Cosmos DB ・ Purview を取込 ・ 変換 ・ 保管 ・ 配信 ・ 監視 ・ ガバナンスで問う Azure データエンジニア認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-dp-203" },
  openGraph: {
    title: "Azure Data Engineer Associate(DP-203)とは",
    description:
      "DP-203 の対象・出題範囲・対策・三大クラウド DE 比較をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["azure-dp-203"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AzureDp203Page() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure DP-203", href: "/certs/azure-dp-203" },
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
        <span>Azure DP-203</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Certified: Azure Data Engineer Associate(DP-203)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Azure 上のデータエンジニアリングを設計 ・ 実装 ・ 運用** する Associate 認定。**Synapse Analytics ・ Data Factory ・ Databricks ・ Stream Analytics ・ Event Hubs ・ ADLS Gen2 ・ Cosmos DB ・ Purview** など Azure データプラットフォームの中核を **取込 ・ 変換 ・ 保管 ・ 配信 ・ 監視 ・ ガバナンス** で問います。**AWS DEA-C01 ・ GCP Professional Data Engineer** と並ぶ三大クラウド Data Engineer 認定の 1 つ。
        </p>
      </header>

      <StudyFlow
        textbookHref="/certs/azure-dp-203/textbook"
        quizHref="/certs/azure-dp-203/quiz"
        examLabel="DP-203 本番"
      />

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分(参考) / 単一・複数選択 + ドラッグ&ドロップ + ケーススタディ / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**SQL ・ Python / Scala ・ Azure 基本** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **Synapse Analytics(Dedicated SQL / Serverless SQL / Spark の 3 プール)+ Data Factory** を軸に、Streaming は Stream Analytics / Event Hubs、ML 連携は Databricks、ガバナンスは Purview で補完するのが Azure データエンジニアリングの王道構成。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "データストレージ設計(15〜20%)", body: "ADLS Gen2 ・ Cosmos DB ・ パーティション ・ アクセス階層。" },
            { title: "データ処理開発(40〜45%)", body: "Synapse 3 プール ・ ADF ・ Mapping Data Flow ・ Stream Analytics ・ Databricks。" },
            { title: "セキュリティ設計(10〜15%)", body: "Managed Identity ・ Private Link ・ CMEK ・ RLS ・ Dynamic Data Masking。" },
            { title: "監視 ・ 最適化(25〜30%)", body: "Azure Monitor ・ Log Analytics ・ Workload Management ・ Result Set Cache。" },
            { title: "ストリーム処理", body: "Event Hubs ・ IoT Hub ・ Stream Analytics ・ Tumbling/Hopping/Sliding/Session Window。" },
            { title: "Lakehouse + Delta", body: "Delta Lake ・ Medallion Architecture ・ Auto Loader ・ Delta Live Tables。" },
            { title: "BI 連携", body: "Power BI Import / DirectQuery / Composite ・ Synapse Link for Cosmos DB / Dataverse。" },
            { title: "ガバナンス(Purview)", body: "Data Map ・ Data Catalog ・ Data Lineage ・ Sensitivity Labels ・ Data Policy。" },
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
            <strong>Azure 基本を固める</strong>: 本サイトの[Azure AI-900 教科書](/certs/azure-ai-900/textbook)で基礎を確認。
          </li>
          <li>
            <strong>Synapse 3 プールの使い分け</strong>: Dedicated SQL / Serverless SQL / Spark の役割を体得。
          </li>
          <li>
            <strong>本サイトの[DP-203 教科書](/certs/azure-dp-203/textbook)</strong> で 10 章を体系的に学習。
          </li>
          <li>
            <strong>Microsoft Learn DP-203 ラーニングパス</strong>: 公式の手厚いハンズオン。
          </li>
          <li>
            <strong>三大クラウド DE の比較</strong>: 本サイトの [AWS DEA-C01](/certs/aws-data-engineer) ・ [GCP Pro Data Engineer](/certs/gcp-data-engineer) と併読でクラウド横断理解。
          </li>
          <li>
            <strong>本サイトの演習問題</strong>: 主要トピックを網羅した 20 問で習熟度確認。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DP-203 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DP-203 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。ADLS Gen2 ・ Cosmos DB ・ Synapse(3 プール)・ ADF ・ Stream Analytics ・ Databricks ・ Lakehouse ・ Power BI ・ 監視 ・ Purview まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/azure-dp-203/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/azure-dp-203/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">三大クラウド Data Engineer 認定比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">AWS DEA-C01</th>
                <th className="py-2 pr-3">Azure DP-203(本資格)</th>
                <th className="py-2 pr-3">GCP Pro DE</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Professional</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中心 DWH</td>
                <td className="py-2 pr-3">Redshift</td>
                <td className="py-2 pr-3">Synapse</td>
                <td className="py-2 pr-3">BigQuery</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中心 ETL</td>
                <td className="py-2 pr-3">Glue / EMR</td>
                <td className="py-2 pr-3">ADF / Databricks</td>
                <td className="py-2 pr-3">Dataflow / Dataproc</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">150 USD</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">200 USD</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
                <td className="py-2 pr-3">150 〜 250 時間</td>
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
        heading="Azure DP-203 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-data-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS DEA-C01 について
        </Link>
        <Link
          href="/certs/gcp-data-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          GCP Pro Data Engineer について →
        </Link>
      </nav>
    </article>
  );
}
