import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "AWS Certified AI Practitioner(AIF-C01)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "AWS Certified AI Practitioner(AIF-C01)の受験対象・出題範囲・対策方針を完全解説。Bedrock・SageMaker・各 AI サービスと、責任ある AI / 生成 AI の基礎を測る AWS 認定の Foundational レベル試験。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/aws-ai-practitioner" },
  openGraph: {
    title: "AWS Certified AI Practitioner とは",
    description:
      "AWS の AI / 生成 AI 認定 AIF-C01 の対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["aws-ai-practitioner"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AwsAiPractitionerPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS AI Practitioner", href: "/certs/aws-ai-practitioner" },
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
        <span>AWS AI Practitioner</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS Certified AI Practitioner(AIF-C01)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Amazon Web Services** が提供する **AI / 生成 AI / 機械学習の基礎リテラシー** を測る Foundational レベルの認定試験。エンジニア限定ではなく、**ビジネスサイド ・ PM ・ 営業 ・ コンサルタント** など AWS の AI を活用するすべての職種が想定対象です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE 試験会場)or オンライン監督受験 / 65 問 / 90 分 / 選択式 / 合格 700 点(1000 点満点)**。コードを書く問題はほぼなく、**「この要件にはどの AWS サービスが最適か」** を選ばせる問題が中心です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は約 **100 USD**、有効期限は **3 年**。Cloud Practitioner(CLF-C02)の AI 版として 2024 年に追加された比較的新しい認定です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Domain 1: AI / ML 基礎(20%)", body: "AI ⊃ ML ⊃ DL ⊃ Gen AI / 教師あり-なし-強化 / 評価指標。" },
            { title: "Domain 2: 生成 AI 基礎(24%)", body: "LLM / Transformer / プロンプト / RAG / 基盤モデル。" },
            { title: "Domain 3: 基盤モデル応用(28%)", body: "Bedrock / モデル選定 / カスタマイズ(プロンプト/RAG/微調整)/ Knowledge Bases / Agents。" },
            { title: "Domain 4: 責任ある AI(14%)", body: "公平性 / 説明可能性 / プライバシー / Guardrails / Clarify。" },
            { title: "Domain 5: 安全性 ・ コンプライアンス(14%)", body: "IAM / KMS / VPC エンドポイント / Macie / 監査ログ。" },
            { title: "AI Services 一覧", body: "Rekognition / Comprehend / Transcribe / Polly / Translate / Textract / Forecast / Personalize / Kendra。" },
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
            <strong>AI / ML / 生成 AI の基礎を 1 周</strong>: 本サイトの[G 検定 教科書](/certs/g-test/textbook) ・ [生成 AI パスポート 教科書](/certs/genai-passport/textbook)で土台を作る。
          </li>
          <li>
            <strong>AWS の AI / ML サービスを一覧で把握</strong>: 本サイトの[AWS AI Practitioner 教科書](/certs/aws-ai-practitioner/textbook)で 30 以上のサービスの守備範囲を整理。
          </li>
          <li>
            <strong>Bedrock を実機で触る</strong>: AWS マネジメントコンソールから Claude / Titan を試すと、概念が腑に落ちる。
          </li>
          <li>
            <strong>責任ある AI とコンプライアンス</strong>: SageMaker Clarify / Bedrock Guardrails / IAM / KMS の役割を整理。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: AWS 公式の Skill Builder + 本サイトの[演習問題](/certs/aws-ai-practitioner/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">AWS AI Practitioner の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは AWS AI Practitioner 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。AI / ML 基礎 ・ AWS AI サービス群 ・ Bedrock ・ SageMaker ・ 責任ある AI ・ ユースケース別パターンまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/aws-ai-practitioner/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/aws-ai-practitioner/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AWS 認定の AI / ML 系比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3">レベル</th>
                <th className="py-2 pr-3">試験名</th>
                <th className="py-2 pr-3">主な対象</th>
                <th className="py-2 pr-3">学習時間目安</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">Foundational</td>
                <td className="py-2 pr-3">AI Practitioner(本資格)</td>
                <td className="py-2 pr-3">AWS の AI を活用する全職種</td>
                <td className="py-2 pr-3">60 〜 80 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">Foundational</td>
                <td className="py-2 pr-3">Cloud Practitioner</td>
                <td className="py-2 pr-3">AWS 全般入門</td>
                <td className="py-2 pr-3">40 〜 60 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">Associate</td>
                <td className="py-2 pr-3">ML Engineer Associate</td>
                <td className="py-2 pr-3">ML エンジニア中堅</td>
                <td className="py-2 pr-3">120 〜 200 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">Specialty</td>
                <td className="py-2 pr-3">ML Specialty</td>
                <td className="py-2 pr-3">ML エンジニア専門</td>
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
        heading="AWS AI 認定対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/genai-passport"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 生成 AI パスポートについて
        </Link>
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          G 検定について →
        </Link>
      </nav>
    </article>
  );
}
