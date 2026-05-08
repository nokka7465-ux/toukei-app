import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "AWS Certified Machine Learning - Specialty(MLS-C01)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "AWS Certified Machine Learning - Specialty(MLS-C01)の受験対象・出題範囲・対策方針を完全解説。AWS ML 認定の最上位、深い数学 + アルゴリズム選択 + 設計判断を測る Specialty レベル試験。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/aws-ml-specialty" },
  openGraph: {
    title: "AWS ML Specialty(MLS-C01)とは",
    description:
      "MLS-C01 の対象・出題範囲・対策・MLA-C01 との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["aws-ml-specialty"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AwsMlSpecialtyPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS ML Specialty", href: "/certs/aws-ml-specialty" },
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
        <span>AWS ML Specialty</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS Certified Machine Learning - Specialty(MLS-C01)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **AWS 認定の Specialty レベル** で **AWS ML 認定の最上位**。**ML Engineer Associate(MLA-C01)の上位** として、**深い数学 ・ アルゴリズム理解 + 設計判断 + 実装ニュアンス** が問われる高度試験。**シニア ML エンジニア ・ ML 専門コンサルタント ・ 研究開発者** を対象とします。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 180 分(MLA より長い) / 単一・複数選択 + ケーススタディ / 合格 750 / 1000 点 / 受験料 300 USD / 有効期限 3 年**。**ML 実務 1 〜 2 年 + 統計 ・ 線形代数 ・ 微積分の基礎** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          MLA-C01 が SageMaker 操作 ・ サービス選択中心だったのに対し、**MLS-C01 は『なぜそのアルゴリズムが最適か』『なぜそのハイパーパラメータか』『なぜそのデータ前処理か』** が問われます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Domain 1: Data Engineering(20%)", body: "Kinesis / Glue / Feature Store / Parquet / RecordIO。" },
            { title: "Domain 2: EDA(24%)", body: "EDA / 特徴量エンジニアリング / 不均衡対策(SMOTE)。" },
            { title: "Domain 3: Modeling(36%)", body: "アルゴリズム選択 / HPO / 評価指標 / Cross Validation。" },
            { title: "Domain 4: 実装と運用(20%)", body: "推論 5 種 / Quantization / Distillation / Inferentia。" },
            { title: "Built-in アルゴリズム", body: "30+ Built-in(XGBoost / DeepAR / RCF / LDA / FM 等)。" },
            { title: "深層学習の深堀り", body: "CNN / RNN / Transformer / 生成モデル / 強化学習。" },
            { title: "MLOps + 監視", body: "Pipelines / Model Monitor 4 種 / Clarify / A2I。" },
            { title: "セキュリティ ・ 責任ある AI", body: "VPC + Network Isolation / KMS / Differential Privacy / Bedrock Guardrails。" },
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
            <strong>MLA-C01 範囲を完全マスター</strong>: 本サイトの[AWS MLA-C01 教科書](/certs/aws-ml-engineer/textbook)で土台を完璧に。
          </li>
          <li>
            <strong>ML の数学的基礎</strong>: 線形代数(固有値分解 / SVD)・ 統計(分布 / 検定 / ベイズ)・ 微積分(偏微分 / 連鎖律)。
          </li>
          <li>
            <strong>本サイトの[MLS-C01 教科書](/certs/aws-ml-specialty/textbook)</strong> で SageMaker Built-in 30+ アルゴリズム + 選び分けを暗記。
          </li>
          <li>
            <strong>不均衡対策 ・ HPO 手法</strong>: SMOTE / Hyperband / Bayesian の使い分け。
          </li>
          <li>
            <strong>推論最適化</strong>: Quantization / Distillation / Neo / Inferentia の選択肢。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: AWS Practice Exam + Coursera / Udemy の MLS 講座。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">MLS-C01 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは MLS-C01 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。ML の数学的基礎 ・ データエンジニアリング ・ EDA / 特徴量 ・ Built-in アルゴリズム ・ HPO ・ 深層学習 ・ デプロイ最適化 ・ MLOps ・ セキュリティまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/aws-ml-specialty/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/aws-ml-specialty/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AWS ML 認定階層の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">AI Practitioner</th>
                <th className="py-2 pr-3">ML Engineer Associate</th>
                <th className="py-2 pr-3">ML Specialty(本資格)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">Foundational</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Specialty(最上位)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">概念 ・ サービス選択</td>
                <td className="py-2 pr-3">SageMaker 実装 ・ MLOps</td>
                <td className="py-2 pr-3">数学 + アルゴリズム選択</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">問題数 / 時間</td>
                <td className="py-2 pr-3">65 問 / 90 分</td>
                <td className="py-2 pr-3">65 問 / 130 分</td>
                <td className="py-2 pr-3">65 問 / **180 分**</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">100 USD</td>
                <td className="py-2 pr-3">150 USD</td>
                <td className="py-2 pr-3">300 USD</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">150 〜 250 時間</td>
                <td className="py-2 pr-3">200 〜 400 時間</td>
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
        heading="AWS ML Specialty 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-ml-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS MLA-C01 について
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
