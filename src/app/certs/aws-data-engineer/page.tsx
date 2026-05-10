import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "AWS Certified Data Engineer - Associate(DEA-C01)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "AWS Certified Data Engineer - Associate(DEA-C01)の受験対象・出題範囲・対策方針を完全解説。Glue ・ EMR ・ Athena ・ Redshift ・ Kinesis ・ MSK ・ Step Functions ・ Lake Formation を取込 ・ 変換 ・ 保管 ・ 分析 ・ ガバナンスの 4 ドメインで問う AWS の新 Associate 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/aws-data-engineer" },
  openGraph: {
    title: "AWS Data Engineer Associate(DEA-C01)とは",
    description:
      "DEA-C01 の対象・出題範囲・対策・SAA / MLA-C01 との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["aws-data-engineer"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AwsDataEngineerPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS Data Engineer Associate", href: "/certs/aws-data-engineer" },
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
        <span>AWS Data Engineer Associate</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS Certified Data Engineer - Associate(DEA-C01)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **2024 年 3 月に GA された AWS の新 Associate 認定**。**Glue ・ EMR ・ Athena ・ Redshift ・ Kinesis ・ MSK ・ Lambda ・ Step Functions ・ Lake Formation** など AWS のデータエンジニアリングサービスを **データパイプライン設計 ・ データレイク / DWH 構築 ・ ストリーム処理 ・ オペレーション** の 4 ドメインで体系的に問います。**SAA(設計)・ MLA-C01 / MLS-C01(ML)** と並ぶ AWS 認定の重要 Associate で、**データエンジニアの登竜門**。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 130 分 / 単一・複数選択 + 順序問題 / 合格 720 / 1000 点 / 受験料 150 USD / 有効期限 3 年**。**SQL ・ Python ・ AWS 基本(CLF レベル以上)** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **旧 AWS Data Analytics Specialty(DAS-C01)の後継** とも言える位置付けで、**データレイクハウス時代** の AWS エンジニアに必要な **取込 ・ 変換 ・ 保管 ・ 分析 ・ ガバナンス** を測ります。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Data Ingestion / Transformation(34%)", body: "Glue ・ EMR ・ DataBrew ・ Kinesis ・ Lambda。" },
            { title: "Data Store Management(26%)", body: "S3 ・ Redshift ・ DynamoDB ・ Iceberg ・ パーティショニング。" },
            { title: "Data Operations / Support(22%)", body: "Step Functions ・ MWAA ・ EventBridge ・ CloudWatch。" },
            { title: "Data Security / Governance(18%)", body: "Lake Formation ・ IAM ・ KMS ・ Macie ・ DataZone。" },
            { title: "ファイルフォーマット", body: "Parquet / ORC / Avro / JSON ・ 圧縮 ・ Predicate Pushdown。" },
            { title: "Athena ・ Redshift", body: "Workgroup ・ Federated Query ・ Spectrum ・ Data Sharing ・ Distribution Style。" },
            { title: "ストリーム処理", body: "Kinesis Streams / Firehose / Flink ・ MSK ・ Enhanced Fan-Out。" },
            { title: "Lakehouse + Iceberg", body: "ACID ・ スキーマ進化 ・ Time Travel ・ Hidden Partitioning。" },
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
            <strong>AWS 基本を固める</strong>: 本サイトの[AWS SAA 教科書](/certs/aws-saa/textbook)で IAM / S3 / VPC を完璧に。
          </li>
          <li>
            <strong>サービス選び分けを暗記</strong>: Glue vs EMR、Athena vs Redshift、Kinesis vs MSK、Step Functions vs MWAA。
          </li>
          <li>
            <strong>本サイトの[DEA-C01 教科書](/certs/aws-data-engineer/textbook)</strong> で 10 章を体系的に。
          </li>
          <li>
            <strong>AWS Skill Builder の DEA-C01 公式問題集</strong>: 必ず 2 周。
          </li>
          <li>
            <strong>ハンズオン</strong>: AWS の無料利用枠で Glue + Athena + S3 のデータレイクを実構築。
          </li>
          <li>
            <strong>本サイトの演習問題</strong>: 主要トピックを網羅した 20 問で習熟度確認。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DEA-C01 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DEA-C01 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。S3 ・ Glue ・ Athena ・ Redshift ・ EMR ・ Kinesis / MSK ・ Step Functions / MWAA ・ Iceberg / Lakehouse ・ オペレーション ・ セキュリティまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/aws-data-engineer/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/aws-data-engineer/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AWS Associate 認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">SAA</th>
                <th className="py-2 pr-3">DEA-C01(本資格)</th>
                <th className="py-2 pr-3">MLA-C01</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">汎用設計</td>
                <td className="py-2 pr-3">データエンジニアリング</td>
                <td className="py-2 pr-3">ML 実装</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">対象職種</td>
                <td className="py-2 pr-3">Solutions Architect</td>
                <td className="py-2 pr-3">Data Engineer</td>
                <td className="py-2 pr-3">ML Engineer</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中心サービス</td>
                <td className="py-2 pr-3">EC2 / S3 / VPC</td>
                <td className="py-2 pr-3">Glue / Athena / Redshift</td>
                <td className="py-2 pr-3">SageMaker / Bedrock</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">150 USD</td>
                <td className="py-2 pr-3">150 USD</td>
                <td className="py-2 pr-3">150 USD</td>
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
        category="AWS"
        heading="AWS DEA-C01 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-saa"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS SAA について
        </Link>
        <Link
          href="/certs/aws-ml-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS MLA-C01 について →
        </Link>
      </nav>
    </article>
  );
}
