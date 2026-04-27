import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 DS基礎とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "統計検定 データサイエンス基礎(DS基礎)の内容・受験対象・出題範囲・対策方針を完全解説。Excel を使った実データ分析が中心で、データリテラシー入門に最適。無料の教科書・演習問題付き。",
  alternates: { canonical: "/certs/ds-basic" },
  openGraph: {
    title: "統計検定 データサイエンス基礎(DS基礎)とは",
    description:
      "DS基礎の内容・対象・出題範囲・対策方針をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "統計検定 DS基礎は誰向けですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excel を使ったデータ分析の入口を学びたい高校生・大学生・社会人向け。データを根拠に意思決定する「データリテラシー」を身につけたい全ての人が対象です。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定2級と DS基礎、どちらを先に受けるべきですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目的次第です。理論・公式を体系的に学びたいなら2級、Excel で実データを動かす実用力を身につけたいなら DS基礎が向いています。両方並行も可能です。",
      },
    },
    {
      "@type": "Question",
      name: "DS基礎の試験形式と所要時間は?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CBT 方式(コンピュータ受験)で、Excel が使える PC 環境で出題されます。所要時間は約90分。詳細は公式サイトをご確認ください。",
      },
    },
  ],
};

export default function DsBasicPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS基礎", href: "/certs/ds-basic" },
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
        <span>DS基礎</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計検定 データサイエンス基礎(DS基礎)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          通常の統計検定(4級〜1級)とは別系統の、**Excel を用いた実データ分析** を中心に問う検定。データリテラシーの入口として、数式の暗記より「**データから意味を読み解く力**」を測ります。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          統計検定 データサイエンス基礎(略称: **DS基礎**、英名 Data Science Base)は、日本統計学会が認定する検定の 1 つ。**Excel を使って実データを集計・可視化・分析する力** を問います。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          通常の統計検定が「**理論と公式の理解**」を測るのに対し、DS基礎は「**現場で使えるデータ操作力**」を測る位置付けです。両者は補完関係にあり、片方だけ持っていれば十分というものではありません。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "データの基本処理",
              body: "Excel の関数・テーブル機能・ピボットテーブルでデータを集計する力。",
            },
            {
              title: "統計の基礎",
              body: "平均・分散・標準偏差・相関係数といった代表値や指標の理解と算出。",
            },
            {
              title: "可視化",
              body: "棒グラフ・折れ線・散布図・ヒストグラム・箱ひげ図など、目的に応じたグラフ選び。",
            },
            {
              title: "確率と分布",
              body: "正規分布・二項分布など基本的な確率分布の Excel での扱い。",
            },
            {
              title: "推定・検定の入口",
              body: "信頼区間・t 検定・カイ二乗検定など、Excel 関数で実行できる範囲。",
            },
            {
              title: "回帰分析",
              body: "Excel の回帰機能で単回帰・重回帰を実行し、結果を解釈する。",
            },
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
            <strong>Excel に慣れる</strong>: SUM・AVERAGE・STDEV.S・COUNTIF などの基本関数、ピボットテーブル、グラフ機能を実際に手で操作。
          </li>
          <li>
            <strong>統計の基本概念を押さえる</strong>: 当サイトの{" "}
            <Link
              href="/textbook/grade-3"
              className="text-[var(--link)] hover:underline"
            >
              3 級教科書
            </Link>{" "}
            と{" "}
            <Link
              href="/textbook/grade-2"
              className="text-[var(--link)] hover:underline"
            >
              2 級教科書
            </Link>{" "}
            で代表値・分布・検定・回帰の意味を理解。
          </li>
          <li>
            <strong>過去問・公式問題集</strong>: DS基礎専用の問題集で出題形式に慣れる。Excel での操作手順を意識。
          </li>
          <li>
            <strong>実データで遊ぶ</strong>: 政府統計・スポーツ統計・自分のデータなど、実例で集計・可視化を繰り返す。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">通常の統計検定との比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">DS基礎</th>
                <th className="py-2 pr-3">統計検定 2級</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">出題形式</td>
                <td className="py-2 pr-3">Excel 操作中心</td>
                <td className="py-2 pr-3">数式・選択式問題中心</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">データ操作力</td>
                <td className="py-2 pr-3">理論・公式の理解</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">実務でデータを扱う人</td>
                <td className="py-2 pr-3">理論を体系的に学びたい人</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">補完関係</td>
                <td className="py-2 pr-3" colSpan={2}>
                  両方持つと「理論 × 実務」両面で強い武器に
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">
          DS基礎の学習を始める
        </h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DS基礎対策の **教科書本編** と **演習問題** を公開しています。Excel 関数・ピボット・グラフ・回帰機能まで、章立てで読み進められます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/ds-basic/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/ds-basic/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <nav className="mt-10 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/roadmap"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 学習ロードマップへ
        </Link>
        <Link
          href="/certs/survey"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          統計調査士について →
        </Link>
      </nav>
    </article>
  );
}
