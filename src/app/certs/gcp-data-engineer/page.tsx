import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "GCP Professional Data Engineer とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "GCP Professional Data Engineer の受験対象・出題範囲・対策方針を完全解説。BigQuery ・ Dataflow ・ Dataproc ・ Pub/Sub ・ Cloud Composer ・ Bigtable ・ Spanner ・ Looker ・ Dataplex を 5 ドメインで問う Google Cloud の Professional レベル DE 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/gcp-data-engineer" },
  openGraph: {
    title: "GCP Professional Data Engineer とは",
    description:
      "GCP DE 認定の対象・出題範囲・対策・三大クラウド DE 比較をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["gcp-data-engineer"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function GcpDataEngineerPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Professional Data Engineer", href: "/certs/gcp-data-engineer" },
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
        <span>GCP Professional Data Engineer</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Google Cloud Certified Professional Data Engineer
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Google Cloud(GCP)上のデータエンジニアリング Professional レベル認定**。**BigQuery ・ Dataflow ・ Dataproc ・ Pub/Sub ・ Cloud Composer ・ Cloud Storage ・ Bigtable ・ Spanner ・ Looker ・ Dataplex** を **データシステムの設計 ・ 取込 / 変換 ・ 保管 ・ 分析 / ML 統合 ・ 信頼性 / 自動化 / 監視 ・ セキュリティ / コンプライアンス** で問います。**AWS DEA-C01 ・ Azure DP-203** と並ぶ三大クラウド Data Engineer 認定の 1 つ。
        </p>
      </header>

      <StudyFlow
        textbookHref="/certs/gcp-data-engineer/textbook"
        quizHref="/certs/gcp-data-engineer/quiz"
        examLabel="GCP Pro DE 本番"
      />

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Kryterion)or オンライン監督受験 / 50〜60 問 / 120 分 / 単一・複数選択 + ケーススタディ / 合格スコア非公開(70% 程度が目安) / 受験料 200 USD / 有効期限 2 年**。**SQL ・ Python / Java ・ GCP 基本(Cloud Engineer 相当)** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **BigQuery 中心 + サーバレス志向** が GCP データエンジニアリングの王道。**取込は Pub/Sub + Dataflow、ETL は Dataflow(Apache Beam)、ML は BQML / Vertex AI、可視化は Looker** という構成で運用負荷が低いのが特徴。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "システム設計(22%)", body: "BigQuery / Bigtable / Spanner / Firestore の選び分け。" },
            { title: "データ取込 ・ 処理(25%)", body: "Pub/Sub ・ Dataflow ・ Dataproc ・ Datastream。" },
            { title: "データ保管(20%)", body: "GCS 階層 ・ BigQuery 分割/クラスタ ・ Lifecycle Policy。" },
            { title: "分析 ・ AI 準備(15%)", body: "BQML ・ Vertex AI ・ Object Tables ・ Looker ・ Looker Studio。" },
            { title: "ワークフロー ・ 信頼性(18%)", body: "Cloud Composer ・ Workflows ・ Cloud Scheduler ・ Monitoring。" },
            { title: "BigQuery 高度機能", body: "Materialized View ・ BI Engine ・ Object Tables ・ Storage Write API。" },
            { title: "ストリーム処理", body: "Pub/Sub ・ Pub/Sub Lite ・ Dataflow Streaming Engine ・ Beam Window。" },
            { title: "セキュリティ ・ ガバナンス", body: "Dataplex ・ DLP ・ VPC Service Controls ・ CMEK ・ IAM。" },
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
            <strong>GCP 基本を固める</strong>: Associate Cloud Engineer 相当の IAM / Compute / Networking 知識を整える。
          </li>
          <li>
            <strong>BigQuery を完全マスター</strong>: 分割 / クラスタリング / マテビュー / BQML / Object Tables の手触り。
          </li>
          <li>
            <strong>本サイトの[GCP DE 教科書](/certs/gcp-data-engineer/textbook)</strong> で 10 章を体系的に学習。
          </li>
          <li>
            <strong>Skill Boost の Data Engineer Learning Path</strong>: ハンズオン教材で実機操作。
          </li>
          <li>
            <strong>三大クラウド DE の比較</strong>: 本サイトの [AWS DEA-C01](/certs/aws-data-engineer) ・ [Azure DP-203](/certs/azure-dp-203) と併読でクラウド横断理解。
          </li>
          <li>
            <strong>本サイトの演習問題</strong>: 主要トピックを網羅した 20 問で習熟度確認。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">GCP Pro DE の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは GCP Pro DE 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。BigQuery ・ GCS ・ Bigtable / Spanner ・ Dataflow ・ Pub/Sub ・ Dataproc ・ Composer / Workflows ・ Looker ・ Dataplex まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/gcp-data-engineer/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/gcp-data-engineer/quiz"
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
                <th className="py-2 pr-3">Azure DP-203</th>
                <th className="py-2 pr-3">GCP Pro DE(本資格)</th>
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
        category="GCP"
        heading="GCP Pro Data Engineer 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-dp-203"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure DP-203 について
        </Link>
        <Link
          href="/certs/gcp-ml-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          GCP Pro ML Engineer について →
        </Link>
      </nav>
    </article>
  );
}
