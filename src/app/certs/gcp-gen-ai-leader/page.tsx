import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Google Cloud Generative AI Leader とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Google Cloud Generative AI Leader(Foundational)の受験対象・出題範囲・対策方針を完全解説。Vertex AI・Gemini・Imagen・Gemini for Workspace・責任ある AI を測る Google Cloud の生成 AI 入門認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/gcp-gen-ai-leader" },
  openGraph: {
    title: "Google Cloud Generative AI Leader とは",
    description:
      "GCP の生成 AI 認定の対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["gcp-gen-ai-leader"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function GcpGenAiLeaderPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Generative AI Leader", href: "/certs/gcp-gen-ai-leader" },
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
        <span>GCP Generative AI Leader</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Google Cloud Generative AI Leader
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Google Cloud** が提供する **Foundational(基礎)レベル** の生成 AI 認定。**AWS AI Practitioner ・ Azure AI Fundamentals** と並ぶ三大クラウド AI 入門認定の 1 つで、**Vertex AI ・ Gemini ・ Imagen ・ Veo ・ Gemini for Workspace** などの生成 AI サービス群と、責任ある AI ・ 組織導入のリーダーシップ知識を測ります。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン監督受験 or テストセンター / 50 〜 60 問 / 90 分 / 選択式 / 受験料 99 USD / 有効期限 3 年**。コードを書く問題はなく、**「この要件にはどの Google Cloud サービスが最適か」** を選ばせる問題が中心です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **ビジネスサイド ・ コンサルタント ・ 経営層** が想定対象で、AWS AI Practitioner や Azure AI-900 と並べて取得すると **三大クラウドの生成 AI リテラシー** を網羅できます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "生成 AI の基礎(25%)", body: "LLM / Transformer / プロンプト / RAG / ハルシネーション。" },
            { title: "Google Cloud のポートフォリオ(30%)", body: "Vertex AI / Gemini / Imagen / Veo / Workspace 統合。" },
            { title: "業務変革(20%)", body: "ユースケース / ROI / 組織導入戦略。" },
            { title: "責任ある AI(15%)", body: "Google の 7 原則 / Grounding / SynthID。" },
            { title: "コスト最適化(10%)", body: "Flash vs Pro / Provisioned Throughput / Context Caching。" },
            { title: "BigQuery ML 統合", body: "ML.GENERATE_TEXT で SQL から Gemini 呼出し。" },
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
            <strong>生成 AI / LLM の基礎を 1 周</strong>: 本サイトの[生成 AI パスポート 教科書](/certs/genai-passport/textbook) ・ [G 検定 教科書](/certs/g-test/textbook)で土台。
          </li>
          <li>
            <strong>Google Cloud Skills Boost</strong>: 公式無料学習サイトに **Generative AI Leader 専用ラーニングパス** が公開されており、ハンズオン込みで網羅。
          </li>
          <li>
            <strong>Vertex AI を実機で触る</strong>: Vertex AI Studio から Gemini を試すと概念が腑に落ちる。
          </li>
          <li>
            <strong>Google の 7 つの AI 原則</strong>: 順序ではなく内容を覚える。Grounding と SynthID は頻出キーワード。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Google Cloud の練習問題 + 本サイトの[演習問題](/certs/gcp-gen-ai-leader/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">GCP Generative AI Leader の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは GCP Generative AI Leader 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。生成 AI 基礎 ・ Vertex AI ・ Gemini ファミリ ・ Workspace 統合 ・ 責任ある AI ・ コスト最適化 ・ 業務変革まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/gcp-gen-ai-leader/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/gcp-gen-ai-leader/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">三大クラウド生成 AI 認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">GCP Gen AI Leader</th>
                <th className="py-2 pr-3">AWS AI Practitioner</th>
                <th className="py-2 pr-3">Azure AI-900</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主催</td>
                <td className="py-2 pr-3">Google Cloud</td>
                <td className="py-2 pr-3">AWS</td>
                <td className="py-2 pr-3">Microsoft</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中核モデル</td>
                <td className="py-2 pr-3">Gemini</td>
                <td className="py-2 pr-3">Bedrock(Claude等)</td>
                <td className="py-2 pr-3">Azure OpenAI(GPT等)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">99 USD</td>
                <td className="py-2 pr-3">100 USD</td>
                <td className="py-2 pr-3">約 12,500 円</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">有効期限</td>
                <td className="py-2 pr-3">3 年</td>
                <td className="py-2 pr-3">3 年</td>
                <td className="py-2 pr-3">なし</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">40 〜 100 時間</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
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
        heading="GCP AI 認定対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-ai-900"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure AI-900 について
        </Link>
        <Link
          href="/certs/aws-ai-practitioner"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS AI Practitioner について →
        </Link>
      </nav>
    </article>
  );
}
