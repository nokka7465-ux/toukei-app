import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "AWS Certified Machine Learning Engineer Associate(MLA-C01)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "AWS Certified Machine Learning Engineer ─ Associate(MLA-C01)の受験対象・出題範囲・対策方針を完全解説。AI Practitioner の上位、SageMaker / Bedrock / MLOps の実装力を測る AWS Associate 認定の代表格。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/aws-ml-engineer" },
  openGraph: {
    title: "AWS Machine Learning Engineer Associate(MLA-C01)とは",
    description:
      "MLA-C01 の対象・出題範囲・対策・他 AWS ML 認定との位置付けをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["aws-ml-engineer"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AwsMlEngineerPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS ML Engineer Associate", href: "/certs/aws-ml-engineer" },
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
        <span>AWS ML Engineer Associate</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS Certified Machine Learning Engineer ─ Associate(MLA-C01)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **AWS が 2024 年に正式リリース** した ML Engineer 向けの **Associate レベル** 認定。**AI Practitioner の上位** として、ML パイプラインの **データ準備 ・ 学習 ・ デプロイ ・ 監視 ・ MLOps** までを実装できる技術者を認定します。**SageMaker ・ Bedrock ・ Q ファミリ** を実機で扱う AI エンジニアの標準資格です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 130 分 / 単一・複数選択 + ケーススタディ / 合格 720 点(1000 点満点)**。**実装シナリオ問題** が中心で、要件 → 最適 SageMaker / Bedrock サービス選択 → デプロイ判断を問われます。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は **150 USD**、有効期限は **3 年**。**SageMaker / Python / SQL / 統計の基礎** が前提知識。**AI Practitioner(基礎)+ MLA-C01(実装)** の組合せが AWS ML 系の鉄板パスです。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Domain 1: データ準備(28%)", body: "S3 / Glue / Data Wrangler / 特徴量エンジニアリング / Feature Store。" },
            { title: "Domain 2: モデル開発(26%)", body: "SageMaker / Built-in / BYOC / HPO / 評価 / Autopilot。" },
            { title: "Domain 3: デプロイとオーケストレーション(22%)", body: "Endpoints 5 種 / Pipelines / Model Registry / Step Functions。" },
            { title: "Domain 4: モニタリング ・ セキュリティ(24%)", body: "Model Monitor / Clarify / VPC / KMS / コスト管理。" },
            { title: "AI/ML 基礎", body: "評価指標 / 不均衡対策 / 過学習対策 / バイアス・バリアンス。" },
            { title: "生成 AI", body: "Bedrock / JumpStart / Fine-tuning / Amazon Q ファミリ。" },
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
            <strong>AI Practitioner 範囲を復習</strong>: 本サイトの[AWS AI Practitioner 教科書](/certs/aws-ai-practitioner/textbook)で土台を再確認。
          </li>
          <li>
            <strong>AWS Skill Builder + 無料アカウント</strong>: 公式無料学習 + AWS Free Tier(SageMaker Studio Lab は完全無料)で実機演習。
          </li>
          <li>
            <strong>本サイトの[MLA-C01 教科書](/certs/aws-ml-engineer/textbook)</strong> で SageMaker サブサービス全体像 + Pipelines + Model Monitor を体系学習。
          </li>
          <li>
            <strong>SageMaker Pipelines + Model Registry を実装</strong>: 前処理 → 学習 → 評価 → 登録 → デプロイの一気通貫を体験。
          </li>
          <li>
            <strong>Bedrock + Knowledge Bases を試す</strong>: 生成 AI / RAG パターンも頻出。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: AWS 公式の Practice Exam + 本サイトの[演習問題](/certs/aws-ml-engineer/quiz)。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">MLA-C01 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは MLA-C01 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。SageMaker 全体像 ・ データ準備 ・ 学習 / HPO ・ 推論デプロイ 5 種 ・ MLOps Pipelines ・ Model Monitor / Clarify ・ セキュリティ ・ Bedrock / Q まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/aws-ml-engineer/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/aws-ml-engineer/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AWS ML / AI 認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">AI Practitioner</th>
                <th className="py-2 pr-3">ML Engineer Associate(本資格)</th>
                <th className="py-2 pr-3">ML Specialty</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">Foundational</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Specialty</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">概念 ・ サービス選択</td>
                <td className="py-2 pr-3">SageMaker 実装 ・ MLOps</td>
                <td className="py-2 pr-3">深い数学 ・ アルゴリズム</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">問題数 / 時間</td>
                <td className="py-2 pr-3">65 問 / 90 分</td>
                <td className="py-2 pr-3">65 問 / 130 分</td>
                <td className="py-2 pr-3">65 問 / 180 分</td>
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
        heading="AWS ML Engineer 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-ai-practitioner"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS AI Practitioner について
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
