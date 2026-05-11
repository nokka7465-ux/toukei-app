import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Power BI Data Analyst Associate(PL-300)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft PL-300(Power BI Data Analyst Associate)の受験対象・出題範囲・対策方針を完全解説。Power BI Desktop / Service / Power Query / DAX / Microsoft Fabric / Copilot を測る BI 系 Associate 認定の代表格。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/power-bi" },
  openGraph: {
    title: "Microsoft Power BI Data Analyst(PL-300)とは",
    description:
      "PL-300 の対象・出題範囲・対策・他 Microsoft 認定との位置付けをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["power-bi"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function PowerBiPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Power BI Data Analyst Associate", href: "/certs/power-bi" },
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
        <span>Power BI Data Analyst Associate</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Power BI Data Analyst Associate(PL-300)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Microsoft** が提供する **データアナリスト向けの Associate レベル** 認定。**Power BI Desktop / Power BI Service / Power Query / DAX / Microsoft Fabric / Copilot** を使ってデータの取込み ・ 変換 ・ モデリング ・ 可視化 ・ 共有のライフサイクル全体をカバーする実務寄りの試験です。**ビジネスアナリスト ・ BI 開発者 ・ データアナリスト** が想定対象。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 約 40 〜 60 問 / 120 分 / 選択式 + ケーススタディ + ドラッグ&ドロップ / 合格 700 / 1000 点**。**実機操作スキル** を測るスクリーンショット問題が頻出します。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は **約 21,000 円(165 USD)**、有効期限は **1 年**(Microsoft Learn での再認定で延長可)。Microsoft 認定の中で最も人気の高い Associate レベル試験の 1 つです。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Domain 1: データ準備(25-30%)", body: "Power Query / 接続モード / プロファイリング / クレンジング / M 言語。" },
            { title: "Domain 2: モデリング(25-30%)", body: "スタースキーマ / リレーション / DAX / 計算列 ・ メジャー / Time Intelligence。" },
            { title: "Domain 3: 可視化と分析(25-30%)", body: "標準 / カスタムビジュアル / Q&A / Key Influencers / Smart Narrative / Copilot。" },
            { title: "Domain 4: デプロイと管理(15-20%)", body: "ワークスペース / アプリ / データセット更新 / Gateway / RLS。" },
            { title: "Microsoft Fabric / OneLake", body: "Direct Lake モード / Lakehouse / Warehouse 統合。" },
            { title: "Copilot in Power BI", body: "自然言語からのレポート生成 ・ DAX 提案 ・ ナラティブ。" },
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
            <strong>Power BI Desktop を実機で触る</strong>: 無料インストールで OK。サンプルデータで一通り操作してから対策に入る。
          </li>
          <li>
            <strong>Microsoft Learn の PL-300 ラーニングパス</strong>: 公式無料教材。ハンズオン込みで網羅。本サイトの[PL-300 教科書](/certs/power-bi/textbook)も併用。
          </li>
          <li>
            <strong>DAX の壁を越える</strong>: CALCULATE / フィルタ文脈 / Time Intelligence は反復演習が必須。SQLBI などの動画教材も有効。
          </li>
          <li>
            <strong>スタースキーマ</strong>: Power BI 推奨設計を理解。1:多 / クロスフィルタ方向 / アクティブリレーションを使い分ける。
          </li>
          <li>
            <strong>Microsoft Fabric / Copilot</strong>: 最新シラバスでは出題比重増。最新 Microsoft Learn コンテンツでキャッチアップ。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Microsoft Learn の練習問題 + 本サイトの[演習問題](/certs/power-bi/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">PL-300 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは PL-300 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Power BI Desktop ・ Power Query ・ DAX ・ ビジュアル ・ Service ・ RLS ・ Copilot まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/power-bi/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/power-bi/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">BI 系認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">PL-300(本資格)</th>
                <th className="py-2 pr-3">Tableau Desktop Specialist</th>
                <th className="py-2 pr-3">DS 検定</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主催</td>
                <td className="py-2 pr-3">Microsoft</td>
                <td className="py-2 pr-3">Salesforce(Tableau)</td>
                <td className="py-2 pr-3">DS 協会</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">対象ツール</td>
                <td className="py-2 pr-3">Power BI</td>
                <td className="py-2 pr-3">Tableau Desktop</td>
                <td className="py-2 pr-3">汎用 ・ ツール非依存</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">60 〜 120 時間</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">30 〜 80 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">Microsoft 365 環境の BI</td>
                <td className="py-2 pr-3">汎用 ・ 高度可視化重視</td>
                <td className="py-2 pr-3">DS 全方位リテラシー</td>
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
        category="Power BI"
        heading="Power BI 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-ai-900"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure AI Fundamentals について
        </Link>
        <Link
          href="/certs/ds-literacy"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DS 検定について →
        </Link>
      </nav>
    </article>
  );
}
