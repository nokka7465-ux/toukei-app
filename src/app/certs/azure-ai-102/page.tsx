import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft AI-102(Azure AI Engineer Associate)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft AI-102(Azure AI Engineer Associate)の受験対象・出題範囲・対策方針を完全解説。AI-900 の上位、Azure OpenAI / AI Search / Cognitive Services を実装する技術者向けの認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-ai-102" },
  openGraph: {
    title: "Microsoft AI-102(Azure AI Engineer Associate)とは",
    description:
      "AI-102 の対象・出題範囲・対策・AI-900 との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["azure-ai-102"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AzureAi102Page() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure AI Engineer Associate", href: "/certs/azure-ai-102" },
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
        <span>Azure AI Engineer Associate</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft AI-102(Azure AI Engineer Associate)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Microsoft 認定の Associate レベル** で、**Azure AI Fundamentals(AI-900)の上位** に位置する Azure AI 認定。Azure OpenAI / AI Search / Cognitive Services / Azure AI Foundry を **設計 ・ 実装 ・ デプロイ ・ 運用 ・ 監視** する技術者向け。**AI エンジニア ・ クラウド AI 開発者 ・ データサイエンティスト** が想定対象です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 約 40 〜 60 問 / 100 分 / 選択式 + ケーススタディ + コード補完 + ドラッグ&ドロップ / 合格 700 / 1000 点**。**コード実装力** を測る問題が中心で、AI-900 と異なり **Python / C# / REST API / JSON / Git の基礎** が前提知識です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は **約 21,000 円(165 USD)**、有効期限は **1 年**(Microsoft Learn での再認定で延長)。Azure AI 認定で最も人気の高い Associate レベル試験です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(2024 年改訂)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "AI ソリューション計画と管理(15-20%)", body: "リソース / コスト / セキュリティ / コンテナデプロイ。" },
            { title: "生成 AI ソリューション実装(15-20%)", body: "Azure OpenAI / AI Foundry / Prompt Flow / Fine-tuning。" },
            { title: "エージェント実装(10-15%)", body: "Azure AI Agent Service / Function Calling。" },
            { title: "コンピュータビジョン(15-20%)", body: "AI Vision / Custom Vision / Face / Document Intelligence。" },
            { title: "自然言語処理(15-20%)", body: "AI Language / CLU / Translator / Speech。" },
            { title: "ナレッジマイニング(15-20%)", body: "Azure AI Search / RAG / AI Enrichment / Skillset。" },
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
            <strong>AI-900 範囲を復習</strong>: 本サイトの[AI-900 教科書](/certs/azure-ai-900/textbook)で土台を再確認。
          </li>
          <li>
            <strong>Microsoft Learn の AI-102 ラーニングパス + Azure 無料アカウント</strong>: 200 USD クレジット + 12 ヶ月無料サービスで実機演習。
          </li>
          <li>
            <strong>本サイトの[AI-102 教科書](/certs/azure-ai-102/textbook)</strong> で体系学習。SDK / REST API のシグネチャを暗記。
          </li>
          <li>
            <strong>RAG パイプラインを実装</strong>: Azure AI Search + Azure OpenAI で社内 FAQ ボットを試作。
          </li>
          <li>
            <strong>Azure AI Foundry で Prompt Flow を試す</strong>: プロンプト + RAG + Function Calling のオーケストレーション体験。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Microsoft Learn の練習問題 + 本サイトの[演習問題](/certs/azure-ai-102/quiz)。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">AI-102 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは AI-102 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。リソース管理 ・ Azure OpenAI ・ AI Search / RAG ・ Vision ・ Language ・ Speech ・ Foundry ・ Agent Service ・ Content Safety ・ デプロイまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/azure-ai-102/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/azure-ai-102/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AI-900 と AI-102 の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">AI-900(Fundamentals)</th>
                <th className="py-2 pr-3">AI-102(本資格、Associate)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">対象</td>
                <td className="py-2 pr-3">ビジネス ・ コンサル ・ 全職種</td>
                <td className="py-2 pr-3">AI エンジニア ・ 開発者</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">問題形式</td>
                <td className="py-2 pr-3">選択式 + ドラッグ&ドロップ</td>
                <td className="py-2 pr-3">+ コード補完 + ケーススタディ</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">前提知識</td>
                <td className="py-2 pr-3">なし</td>
                <td className="py-2 pr-3">C# / Python / REST / JSON / Git</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">120 〜 200 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">約 12,500 円</td>
                <td className="py-2 pr-3">約 21,000 円</td>
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
        heading="Azure AI Engineer 対策に強いスクール"
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
