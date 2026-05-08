import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "DX 検定とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "DX 検定(日本イノベーション融合学会主催)の受験対象・出題範囲・対策方針を完全解説。AI / IoT / クラウド / 5G / ブロックチェーン / RPA など最新 IT トレンドと DX 推進実務を測るスコア型認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/dx-kentei" },
  openGraph: {
    title: "DX 検定とは",
    description:
      "DX 検定の対象・出題範囲・対策・3 段階のスコア認定をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["dx-kentei"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function DxKenteiPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DX 検定", href: "/certs/dx-kentei" },
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
        <span>DX 検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          DX 検定
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **一般社団法人 日本イノベーション融合学会**(共催: ICT 産業推進機構)が主催する、**デジタルトランスフォーメーション(DX)** に関するビジネス × IT の知識を測る検定。**ビジネスサイド ・ 経営層 ・ 企画 ・ コンサルタント** が想定対象で、AI / IoT / クラウド / 5G / ブロックチェーン / RPA など最新 IT トレンドと DX 推進実務を扱います。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン IBT / 120 問 / 60 分 / 4 択選択式**(参考)。**スコア型認定** で、得点に応じて 3 段階のレベル認定が付与されます: **800 点以上 = DX エキスパート、700 点以上 = DX プロフェッショナル、600 点以上 = DX スタンダード**。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          年 2 回(7 月 ・ 1 月)実施。**毎年シラバスがアップデート** されるため、過去問だけでなく『最新 IT ニュースのキャッチアップ』が合格の鍵です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "DX の概念", body: "経産省 DX 定義 / 3 段階 / 2025 年の崖 / DX 推進指標。" },
            { title: "AI / 生成 AI", body: "ChatGPT 系 / RAG / プロンプト / EU AI Act / 業務活用事例。" },
            { title: "クラウド", body: "IaaS/PaaS/SaaS / 3 大クラウド / コンテナ / サーバレス。" },
            { title: "IoT ・ 5G", body: "センサー / LPWA / デジタルツイン / 5G の 3 特性。" },
            { title: "ブロックチェーン", body: "Bitcoin / NFT / DeFi / DAO / Web3 / CBDC。" },
            { title: "RPA ・ アジャイル", body: "RPA / Hyperautomation / スクラム / DevOps / IaC。" },
            { title: "セキュリティ", body: "ゼロトラスト / SASE / ランサムウェア / EDR / SIEM。" },
            { title: "DX 人材 ・ 経営", body: "BI / KPI / OKR / リスキリング / マナビ DX。" },
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
            <strong>DX 概念 + 経産省ガイドライン</strong>: DX レポートの主要メッセージ(2025 年の崖、3 段階)は必須。本サイトの[DX 検定 教科書](/certs/dx-kentei/textbook)で体系学習。
          </li>
          <li>
            <strong>最新 IT トレンド</strong>: AI / IoT / クラウド / 5G / ブロックチェーンを浅く広く。**毎年シラバス更新** されるので最新情報の素直な把握。
          </li>
          <li>
            <strong>生成 AI 関連</strong>: 本サイトの[生成 AI パスポート 教科書](/certs/genai-passport/textbook)で深掘り。
          </li>
          <li>
            <strong>業界別 DX 事例</strong>: 金融 / 製造 / 小売 / 医療 / 公共。実例を 1 〜 2 件覚える。
          </li>
          <li>
            <strong>過去問演習</strong>: 公式問題集と本サイトの[演習問題](/certs/dx-kentei/quiz)で出題傾向を体感。1 問 30 秒のスピード感を作る。
          </li>
          <li>
            <strong>直近 1 年の IT ニュース</strong>: 日経クロステック ・ ITmedia の定期チェックを習慣化。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DX 検定の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DX 検定対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。DX 概念 ・ AI ・ クラウド ・ IoT ・ 5G ・ ブロックチェーン ・ RPA ・ アジャイル ・ セキュリティ ・ 業界事例まで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/dx-kentei/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/dx-kentei/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">DX 関連認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">DX 検定</th>
                <th className="py-2 pr-3">G 検定</th>
                <th className="py-2 pr-3">生成 AI パスポート</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">DX 全般 + 最新 IT トレンド</td>
                <td className="py-2 pr-3">AI / DL に特化</td>
                <td className="py-2 pr-3">生成 AI に特化</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主対象</td>
                <td className="py-2 pr-3">経営 ・ 企画 ・ コンサル</td>
                <td className="py-2 pr-3">企画 ・ DX 推進</td>
                <td className="py-2 pr-3">全職種</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">60 〜 120 時間</td>
                <td className="py-2 pr-3">30 〜 50 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">問題数 / 時間</td>
                <td className="py-2 pr-3">120 問 / 60 分</td>
                <td className="py-2 pr-3">145 問 / 100-120 分</td>
                <td className="py-2 pr-3">60 問 / 60 分</td>
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
        category="DX"
        heading="DX 検定対策に強いスクール"
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
