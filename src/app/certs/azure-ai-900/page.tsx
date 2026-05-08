import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Azure AI Fundamentals(AI-900)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft Azure AI Fundamentals(AI-900)の受験対象・出題範囲・対策方針を完全解説。Azure Machine Learning・AI Vision・AI Language・Azure OpenAI・責任ある AI を測る Microsoft 認定の Fundamentals レベル試験。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-ai-900" },
  openGraph: {
    title: "Microsoft Azure AI Fundamentals(AI-900)とは",
    description:
      "AI-900 の対象・出題範囲・対策・他 Azure 認定との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["azure-ai-900"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AzureAi900Page() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure AI Fundamentals", href: "/certs/azure-ai-900" },
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
        <span>Azure AI Fundamentals</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Azure AI Fundamentals(AI-900)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Microsoft** が提供する Azure 認定の **Fundamentals レベル** に位置する AI 入門認定。**Azure Machine Learning ・ AI Vision ・ AI Language ・ Speech ・ Document Intelligence ・ Azure OpenAI Service ・ Microsoft Copilot ファミリ** を総覧し、各サービスの守備範囲と適切な使い分けを問います。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT or オンライン監督受験 / 約 40 〜 60 問 / 60 分 / 選択式 / 合格 700 点(1000 点満点)**。コードを書く問題はなく、**サービスの選び分け** が中心です。**有効期限なし(継続有効)** の点が AWS AI Practitioner との違い。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は **約 12,500 円(99 USD)**。Microsoft Learn の **AI-900 専用ラーニングパス** が事実上の公式教材で、多くの受験者がここから対策を始めます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "AI と ML 基礎(15-20%)", body: "AI ⊃ ML ⊃ DL ⊃ Gen AI / 教師あり-なし-強化 / 責任ある AI 6 原則。" },
            { title: "Azure ML 基礎(15-20%)", body: "Azure ML Studio / Designer / Automated ML / Pipelines / Endpoints。" },
            { title: "コンピュータビジョン(15-20%)", body: "Azure AI Vision / Custom Vision / Face / Document Intelligence。" },
            { title: "自然言語処理(15-20%)", body: "Azure AI Language / Translator / Speech。" },
            { title: "文書 ・ ナレッジ(15-20%)", body: "Document Intelligence / Azure AI Search / AI Enrichment。" },
            { title: "生成 AI(20-25%)", body: "Azure OpenAI Service / Azure AI Foundry / Microsoft Copilot ファミリ。" },
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
            <strong>AI / ML / 生成 AI の基礎を 1 周</strong>: 本サイトの[G 検定 教科書](/certs/g-test/textbook) ・ [生成 AI パスポート 教科書](/certs/genai-passport/textbook)で土台。
          </li>
          <li>
            <strong>Microsoft Learn の AI-900 ラーニングパス</strong>: 公式無料教材。ハンズオン込みで網羅的。
          </li>
          <li>
            <strong>Azure AI サービス一覧</strong>: 本サイトの[Azure AI-900 教科書](/certs/azure-ai-900/textbook)で 30 以上のサービスの守備範囲を整理。
          </li>
          <li>
            <strong>Azure OpenAI を実機で触る</strong>: Azure ポータルから OpenAI Service を有効化して GPT-4 を試すと概念が腑に落ちる。
          </li>
          <li>
            <strong>責任ある AI 6 原則</strong>: 公平性 ・ 信頼性/安全性 ・ プライバシー/セキュリティ ・ 包括性 ・ 透明性 ・ 説明責任。順序ではなく内容を覚える。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Microsoft Learn の練習問題 + 本サイトの[演習問題](/certs/azure-ai-900/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">Azure AI-900 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは AI-900 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。AI / ML 基礎 ・ Azure ML ・ AI Vision ・ AI Language ・ Speech ・ Azure OpenAI ・ Copilot ファミリ ・ ユースケース別パターンまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/azure-ai-900/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/azure-ai-900/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AI-900 と AWS AI Practitioner の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">Azure AI-900</th>
                <th className="py-2 pr-3">AWS AI Practitioner</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主催</td>
                <td className="py-2 pr-3">Microsoft</td>
                <td className="py-2 pr-3">Amazon Web Services</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">Azure AI 全般 + Copilot</td>
                <td className="py-2 pr-3">AWS AI 全般 + Bedrock</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">約 12,500 円</td>
                <td className="py-2 pr-3">100 USD</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">有効期限</td>
                <td className="py-2 pr-3">なし(継続有効)</td>
                <td className="py-2 pr-3">3 年</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">問題数 / 時間</td>
                <td className="py-2 pr-3">40〜60 問 / 60 分</td>
                <td className="py-2 pr-3">65 問 / 90 分</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">40 〜 100 時間</td>
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
        heading="Azure AI 認定対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-ai-practitioner"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS AI Practitioner について
        </Link>
        <Link
          href="/certs/genai-passport"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          生成 AI パスポートについて →
        </Link>
      </nav>
    </article>
  );
}
