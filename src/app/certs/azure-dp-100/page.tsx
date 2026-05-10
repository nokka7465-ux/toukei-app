import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Azure Data Scientist Associate(DP-100)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft Azure Data Scientist Associate(DP-100)の受験対象・出題範囲・対策方針を完全解説。Azure ML の Workspace ・ Job ・ AutoML ・ Sweep ・ Endpoint ・ Responsible AI ・ MLOps を実装力で問う Associate 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-dp-100" },
  openGraph: {
    title: "Microsoft Azure Data Scientist Associate(DP-100)とは",
    description:
      "DP-100 の対象・出題範囲・対策・AI-900 / AI-102 との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["azure-dp-100"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AzureDp100Page() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure DP-100", href: "/certs/azure-dp-100" },
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
        <span>Azure DP-100</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Certified: Azure Data Scientist Associate(DP-100)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Azure Machine Learning(Azure ML)を用いた ML ワークロードの設計 ・ 実装 ・ 運用** を問う **Associate レベル** の Microsoft 認定。**AI-900(Fundamentals)・ AI-102(AI Engineer)と並ぶ Azure AI/ML 三本柱** の 1 つで、**データサイエンティスト ・ ML エンジニア** にとって Azure における最重要認定。**SDK / CLI v2 ・ AutoML ・ Sweep ・ Endpoints ・ Responsible AI Dashboard** までを実装力で問います。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分(参考) / 単一・複数選択 + ドラッグ&ドロップ + ケーススタディ / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**Python ・ scikit-learn ・ MLflow ・ Azure 基本** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          AI-900 が概念中心、AI-102 が AI サービス API 統合中心だったのに対し、**DP-100 は ML プロジェクトを Azure ML で完結させる『データサイエンティスト』としての実装力** が問われます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "ML ソリューション設計 / 準備(20〜25%)", body: "Workspace ・ Compute ・ Datastore ・ Environment 設計。" },
            { title: "データ探索 / 準備(20〜25%)", body: "Data Asset / MLTable / Featurization / Feature Store。" },
            { title: "モデル学習 / 評価(25〜30%)", body: "Command/Sweep/Pipeline Job ・ AutoML ・ Designer ・ MLflow。" },
            { title: "デプロイ / 運用(20〜25%)", body: "Online/Batch Endpoint ・ Blue-Green ・ Model Monitoring。" },
            { title: "Sweep ・ HPO", body: "Grid / Random / Bayesian ・ Bandit / Median Stopping。" },
            { title: "Responsible AI", body: "RAI Dashboard ・ Counterfactual ・ 公平性 ・ 解釈可能性。" },
            { title: "MLOps + Pipeline", body: "Component / Pipeline / GitHub Actions / Azure DevOps 統合。" },
            { title: "セキュリティ + コスト", body: "Managed Identity / Private Link / RBAC / Spot VM / 自動シャットダウン。" },
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
            <strong>AI-900 範囲を完全マスター</strong>:
            本サイトの[Azure AI Fundamentals 教科書](/certs/azure-ai-900/textbook)で土台を完璧に。
          </li>
          <li>
            <strong>SDK / CLI v2 の概念モデル</strong>: Job / Component / Pipeline / Environment / Compute / Data Asset を身体化。
          </li>
          <li>
            <strong>本サイトの[DP-100 教科書](/certs/azure-dp-100/textbook)</strong> で AutoML / Sweep / Endpoint / RAI を 10 章で網羅。
          </li>
          <li>
            <strong>Microsoft Learn DP-100 ラーニングパス</strong>: 公式の手厚いハンズオン教材。
          </li>
          <li>
            <strong>azureml-examples リポジトリ</strong>: GitHub の公式サンプルで CLI v2 YAML を写経。
          </li>
          <li>
            <strong>本サイトの演習問題</strong>: 主要トピックを網羅した 20 問で習熟度確認。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DP-100 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DP-100 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Workspace ・ Compute ・ Data Asset ・ Job / Environment ・ AutoML / Designer ・ Sweep ・ Model Registry / Endpoint ・ Responsible AI ・ MLOps ・ セキュリティまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/azure-dp-100/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/azure-dp-100/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">Azure AI/ML 認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">AI-900</th>
                <th className="py-2 pr-3">AI-102</th>
                <th className="py-2 pr-3">DP-100(本資格)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">Fundamentals</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Associate</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">概念入門</td>
                <td className="py-2 pr-3">AI サービス API 統合</td>
                <td className="py-2 pr-3">Azure ML で実装</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">対象職種</td>
                <td className="py-2 pr-3">全職種</td>
                <td className="py-2 pr-3">AI Engineer</td>
                <td className="py-2 pr-3">Data Scientist / ML Engineer</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">99 USD</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">165 USD</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">20 〜 40 時間</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
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
        heading="Azure DP-100 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-ai-900"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure AI-900 について
        </Link>
        <Link
          href="/certs/azure-ai-102"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure AI-102 について →
        </Link>
      </nav>
    </article>
  );
}
