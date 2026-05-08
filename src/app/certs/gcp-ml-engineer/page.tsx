import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "GCP Professional Machine Learning Engineer とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Google Cloud Professional Machine Learning Engineer の受験対象・出題範囲・対策方針を完全解説。Vertex AI / Gemini / BigQuery ML / Kubeflow を扱う Professional レベル ML 認定。AWS MLA / Azure AI-102 と並ぶ三大クラウド ML 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/gcp-ml-engineer" },
  openGraph: {
    title: "GCP Professional Machine Learning Engineer とは",
    description:
      "GCP の ML Engineer 認定の対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["gcp-ml-engineer"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function GcpMlEngineerPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Professional ML Engineer", href: "/certs/gcp-ml-engineer" },
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
        <span>GCP Professional ML Engineer</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Google Cloud Professional Machine Learning Engineer
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Google Cloud 認定の Professional レベル** で、ML パイプラインの設計 ・ 構築 ・ デプロイ ・ 運用ができるエンジニアを認定。**AWS MLA-C01 / Azure AI-102** と並ぶ三大クラウド ML 認定の 1 つで、**Vertex AI ・ Gemini ・ BigQuery ML ・ TensorFlow / PyTorch on GCP ・ Kubeflow** を扱います。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン監督受験 or テストセンター / 50 〜 60 問 / 120 分 / 選択式 + ケーススタディ / 受験料 200 USD / 有効期限 2 年**。**実機での Vertex AI 操作経験 ・ ML / Python / SQL / Cloud Architecture の実務 3 年以上** が推奨される高度試験です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **AI / ML エンジニアの上位職** で評価が高く、**機械学習基盤の設計者 ・ MLOps エンジニア ・ AI ソリューションアーキテクト** へのキャリアパスとして強力。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Low-code AI ソリューション(13%)", body: "AutoML / BQML / 学習済 API。" },
            { title: "MLOps と協業(14%)", body: "Vertex AI Pipelines / 共同作業 / Lineage。" },
            { title: "プロトタイプ → 本番化(18%)", body: "TF / PyTorch / Custom Training / 分散学習。" },
            { title: "サービング ・ スケーリング(20%)", body: "Online / Batch / Triton / TensorRT。" },
            { title: "パイプライン自動化(22%)", body: "Kubeflow / Cloud Composer / Cloud Build。" },
            { title: "AI ソリューション監視(13%)", body: "Training-Serving Skew / Prediction Drift / Explanations。" },
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
            <strong>GCP 基礎 + ML 基礎</strong>: 本サイトの[Generative AI Leader 教科書](/certs/gcp-gen-ai-leader/textbook)で土台を作る。
          </li>
          <li>
            <strong>Google Cloud Skills Boost + 300 USD クレジット</strong>: 公式無料学習 + 実機ハンズオン。
          </li>
          <li>
            <strong>本サイトの[GCP ML Engineer 教科書](/certs/gcp-ml-engineer/textbook)</strong> で Vertex AI 全体像 ・ BQML ・ Kubeflow を体系学習。
          </li>
          <li>
            <strong>Vertex AI Pipelines を実装</strong>: Kubeflow ベースのワークフローを実機で試す。
          </li>
          <li>
            <strong>Coursera のスペシャライゼーション</strong> も補強教材として有効。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Google Cloud の練習問題 + 本サイトの[演習問題](/certs/gcp-ml-engineer/quiz)。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">GCP ML Engineer の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは GCP Professional ML Engineer 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Vertex AI ・ BQML ・ データエンジニアリング ・ TF / PyTorch / JAX ・ Kubeflow ・ デプロイ ・ Monitoring ・ 生成 AI まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/gcp-ml-engineer/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/gcp-ml-engineer/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">三大クラウド ML 認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">GCP ML Engineer(本資格)</th>
                <th className="py-2 pr-3">AWS MLA-C01</th>
                <th className="py-2 pr-3">Azure AI-102</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">Professional</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Associate</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中核サービス</td>
                <td className="py-2 pr-3">Vertex AI / Gemini / BQML</td>
                <td className="py-2 pr-3">SageMaker / Bedrock</td>
                <td className="py-2 pr-3">Azure OpenAI / AI Foundry</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">200 USD</td>
                <td className="py-2 pr-3">150 USD</td>
                <td className="py-2 pr-3">約 21,000 円(165 USD)</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">200 〜 300 時間</td>
                <td className="py-2 pr-3">150 〜 250 時間</td>
                <td className="py-2 pr-3">120 〜 200 時間</td>
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
        category="Google Cloud"
        heading="GCP ML Engineer 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/gcp-gen-ai-leader"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← GCP Generative AI Leader について
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
