import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "統計調査士とは ─ 受験対象・出題範囲・対策",
  description:
    "統計調査士の内容・受験対象・出題範囲・対策方針をまとめた解説ページ。社会調査・公的統計の基礎知識を測る、行政・調査実務向けの検定。",
  openGraph: {
    title: "統計調査士とは",
    description:
      "統計調査士の内容・対象・出題範囲・対策方針をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "統計調査士は誰向けですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公的統計や社会調査に関わる方、行政・自治体・シンクタンクで働く方、市場調査やマーケティングリサーチに携わる方が主な対象です。一般のビジネスパーソンの教養としても価値があります。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定2級と統計調査士、どちらが先ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "両者は出題範囲が異なります。2級は推定・検定・回帰など分析手法が中心、統計調査士は調査の設計・実施・公的統計の知識が中心。受験目的に合わせて選んでください。",
      },
    },
    {
      "@type": "Question",
      name: "上位の専門統計調査士もありますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。統計調査士の上位資格として「専門統計調査士」があり、より高度な調査設計・分析力を測ります。専門統計調査士の受験には統計調査士合格が前提となります。",
      },
    },
  ],
};

export default function SurveyPage() {
  return (
    <article>
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
        <span>統計調査士</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計調査士
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          通常の統計検定とは別系統の、**社会調査・公的統計** に特化した検定。「どうデータを取るか(調査設計)」「公的統計をどう読むか(統計リテラシー)」という、**分析の前段階** を測ります。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          統計調査士は、日本統計学会が認定する社会調査・統計実務向けの検定。「**統計調査の知識**」と「**公的統計の理解**」を測ります。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          通常の統計検定 4級〜1級が「**収集済みのデータをどう分析するか**」を扱うのに対し、統計調査士は「**どうデータを集めるか / 公的統計をどう読み解くか**」という、**分析の前段階・社会的文脈** を測る位置付け。行政・調査会社・シンクタンクで働く方には実務直結の検定です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "統計法と公的統計",
              body: "日本の統計法、基幹統計の制度、公的統計の役割と分類。",
            },
            {
              title: "標本調査の設計",
              body: "標本抽出法(無作為・層化・系統など)、標本サイズの決定。",
            },
            {
              title: "調査票の設計",
              body: "質問文の作り方、回答誤差の扱い、調査票のレイアウト。",
            },
            {
              title: "調査の実施",
              body: "調査員の管理、回答率の確保、データ入力・点検の手順。",
            },
            {
              title: "基礎的な統計分析",
              body: "代表値・分布・相関・推定など、調査結果の基本的な集計と解釈。",
            },
            {
              title: "公的統計の事例",
              body: "国勢調査・労働力調査・家計調査など主要統計の概要と活用事例。",
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
            <strong>公式テキストを読み込む</strong>: 統計調査士の出題は社会的・制度的な内容が多いため、公式テキストでの体系的なインプットが必須。
          </li>
          <li>
            <strong>統計法と基幹統計を覚える</strong>: 「指定統計とは何か」「国勢調査の頻度」など、ファクト型の問題が頻出。
          </li>
          <li>
            <strong>標本抽出法を整理</strong>: 単純無作為抽出・層化抽出・系統抽出・多段抽出 ─ それぞれの長所と短所を比較できるように。
          </li>
          <li>
            <strong>統計の基礎は当サイトで</strong>: 集計・分析パートは{" "}
            <Link
              href="/textbook/grade-3"
              className="text-[var(--link)] hover:underline"
            >
              3 級教科書
            </Link>{" "}
            の代表値・分布・相関の節が役立ちます。
          </li>
          <li>
            <strong>政府統計のサイトに触れる</strong>: 総務省統計局・e-Stat で実際の公的統計に触れ、感覚を養う。
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
                <th className="py-2 pr-3">統計調査士</th>
                <th className="py-2 pr-3">統計検定 2級</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">調査の設計・公的統計</td>
                <td className="py-2 pr-3">推定・検定・回帰の理論</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">統計法・調査設計・基礎分析</td>
                <td className="py-2 pr-3">数理統計の中核手法</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">行政・調査実務・公務員</td>
                <td className="py-2 pr-3">データ分析・研究職</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">上位資格</td>
                <td className="py-2 pr-3">専門統計調査士</td>
                <td className="py-2 pr-3">準1級・1級</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-basic"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DS基礎について
        </Link>
        <Link
          href="/roadmap"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          学習ロードマップ →
        </Link>
      </nav>
    </article>
  );
}
