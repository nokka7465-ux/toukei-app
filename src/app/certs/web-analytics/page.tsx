import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "ウェブ解析士(初級)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "ウェブ解析士協会(WACA)が認定する **ウェブ解析士(初級)** の受験対象・出題範囲・対策方針を完全解説。KGI/KPI 設計 ・ GA4 ・ GTM ・ アトリビューション ・ A/B テスト ・ CRO ・ Cookieless 時代の Web マーケティング基礎を問う民間資格。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/web-analytics" },
  openGraph: {
    title: "ウェブ解析士(初級)とは",
    description:
      "ウェブ解析士の対象・出題範囲・対策・上位資格(上級 / マスター)比較をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["web-analytics"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function WebAnalyticsPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ウェブ解析士", href: "/certs/web-analytics" },
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
        <span>ウェブ解析士</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ウェブ解析士(初級)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **一般社団法人ウェブ解析士協会(WACA)** が 2009 年から運営する **ウェブ解析 × マーケティング × データ** の体系資格。**Google Analytics 4 ・ GTM ・ KGI/KPI 設計 ・ アトリビューション ・ A/B テスト ・ プライバシー対応** など、Web マーケティング業務に必須の知識を 60 問 / 60 分の CBT で測ります。**Web マーケター ・ 広告運用者 ・ 事業会社デジマ部署 ・ SEO 担当者 ・ EC 運営** のスタートライン的資格。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン CBT(自宅 PC から受験)/ 60 問 / 60 分 / 4 択選択式 / 合格 7 割正答**。**公式テキストからの出題** が中心で、用語と GA4 操作の理解、KPI 設計の基本を問います。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は **17,600 円(公式テキスト + 受験料込み)**、有効期限は **1 年(年度毎の更新講座 5,500 円)**。**合格率は 80 〜 90%**(事前学習者が前提)で、未経験者でも 40 〜 60 時間で合格可能です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式テキスト準拠)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "KGI / KPI 設計", body: "事業ゴール → KPI 分解 ・ SMART な指標設計 ・ マクロ/マイクロ CV。" },
            { title: "アクセス解析の基本指標", body: "ユーザー ・ セッション ・ PV ・ エンゲージメント時間 ・ 直帰率 ・ 離脱率。" },
            { title: "GA4 の基礎", body: "イベントベースモデル ・ プロパティ構造 ・ 標準レポート ・ 探索レポート。" },
            { title: "GTM と計測実装", body: "タグ ・ トリガー ・ 変数 ・ dataLayer ・ プレビュー / デバッグ。" },
            { title: "アトリビューション", body: "ラストクリック ・ 線形 ・ 減衰 ・ データドリブン(DDA)。" },
            { title: "A/B テストと CRO", body: "サンプルサイズ ・ 有意差 ・ ICE スコア ・ シンプソンのパラドックス。" },
            { title: "プライバシー対応", body: "GDPR ・ 改正個情法 ・ Cookieless ・ Consent Mode v2 ・ CDP。" },
            { title: "レポートと可視化", body: "Looker Studio ・ ダッシュボード設計 ・ 経営層向け / 運用向けの作り分け。" },
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
            <strong>公式テキストを通読</strong>:WACA の公式テキストに沿った出題のため、まず 1 〜 2 周。本サイトの[教科書](/certs/web-analytics/textbook)で並行学習。
          </li>
          <li>
            <strong>GA4 デモアカウントで操作練習</strong>:Google が提供するデモプロパティ(Google Merchandise Store)で、レポート操作を実際に体感。
          </li>
          <li>
            <strong>用語と指標の整理</strong>:セッション ・ ユーザー ・ エンゲージメント率 ・ CVR ・ CPA ・ ROAS など 50 個程度の重要用語を暗記。
          </li>
          <li>
            <strong>過去問 ・ 演習問題</strong>:本サイトの[演習問題 80 問](/certs/web-analytics/quiz)で出題傾向を確認。
          </li>
          <li>
            <strong>自分のサイト ・ ブログで GA4 を実装</strong>:座学だけでなく実データを触ると圧倒的に定着。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">ウェブ解析士の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは ウェブ解析士(初級)対策の **教科書本編(全 10 章)** と **演習問題 80 問** を公開しています。KGI/KPI ・ GA4 ・ GTM ・ アトリビューション ・ A/B テスト ・ Cookieless 対応 ・ Looker Studio ・ キャリア展望まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/web-analytics/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/web-analytics/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">WACA 認定の階層比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3">レベル</th>
                <th className="py-2 pr-3">対象</th>
                <th className="py-2 pr-3">学習時間目安</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">初級ウェブ解析士</td>
                <td className="py-2 pr-3">用語と基本指標 ・ GA4 操作(本資格)</td>
                <td className="py-2 pr-3">40 〜 60 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">上級ウェブ解析士</td>
                <td className="py-2 pr-3">KPI 設計 ・ 施策立案 ・ レポート提案</td>
                <td className="py-2 pr-3">80 〜 120 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">ウェブ解析士マスター</td>
                <td className="py-2 pr-3">講師育成 ・ カリキュラム設計</td>
                <td className="py-2 pr-3">年 1 〜 2 回開講</td>
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

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/power-bi"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Power BI(PL-300)について
        </Link>
        <Link
          href="/certs/tableau-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Tableau Specialist について →
        </Link>
      </nav>
    </article>
  );
}
