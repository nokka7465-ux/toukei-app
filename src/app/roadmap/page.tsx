import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "統計検定 学習ロードマップ ─ 4級から1級までの最短ルート",
  description:
    "統計検定 4級から1級まで、合格に必要な学習時間・前提知識・推奨の進め方を 1 枚にまとめた完全ロードマップ。「どの級から始める?」「どれくらいの期間が必要?」に答えます。",
  openGraph: {
    title: "統計検定 学習ロードマップ ─ 4級から1級までの最短ルート",
    description:
      "統計検定 4級〜1級の学習計画を 1 枚に。前提知識・推定学習時間・推奨教材も。",
    type: "article",
  },
};

const ROADMAP = [
  {
    slug: "grade-4",
    title: "4級",
    target: "中高生・大学初学者・統計を初めて学ぶ社会人",
    prerequisites: "中学数学(分数・割合)程度",
    hours: "20〜40 時間",
    months: "1〜2 か月",
    topics: [
      "データの代表値(平均・中央値・最頻値)",
      "ばらつき(範囲・四分位数・四分位範囲)",
      "度数分布表とヒストグラム",
      "場合の数(順列・組合せ・樹形図)",
      "確率の基本(同様に確からしい・余事象・独立事象)",
    ],
    color: "from-emerald-50 to-emerald-100/40 dark:from-emerald-950/30 dark:to-emerald-900/10",
    border: "border-emerald-200 dark:border-emerald-900/40",
  },
  {
    slug: "grade-3",
    title: "3級",
    target: "高校生・大学1〜2年・データ分析の基礎を固めたい社会人",
    prerequisites: "高校数学Ⅰ + 場合の数・確率",
    hours: "40〜80 時間",
    months: "2〜3 か月",
    topics: [
      "標本平均・分散・標準偏差",
      "共分散・相関係数(2変数データ)",
      "標準化と偏差値",
      "確率変数の期待値・分散",
      "二項分布・正規分布",
      "母平均の信頼区間($\\sigma$ 既知)",
    ],
    color: "from-sky-50 to-sky-100/40 dark:from-sky-950/30 dark:to-sky-900/10",
    border: "border-sky-200 dark:border-sky-900/40",
  },
  {
    slug: "grade-2",
    title: "2級",
    target: "実務でデータ分析を扱う社会人・大学生・データサイエンス志望",
    prerequisites: "3級レベル + 微分積分の初歩",
    hours: "100〜200 時間",
    months: "3〜6 か月",
    topics: [
      "不偏分散と標本分布",
      "信頼区間(t 分布)・母比率の信頼区間",
      "仮説検定(p 値・第1/第2種の誤り)",
      "z 検定・t 検定・カイ二乗検定",
      "単回帰分析・回帰係数の検定",
    ],
    color: "from-violet-50 to-violet-100/40 dark:from-violet-950/30 dark:to-violet-900/10",
    border: "border-violet-200 dark:border-violet-900/40",
  },
  {
    slug: "grade-pre1",
    title: "準1級",
    target: "データサイエンティスト・統計学を専門に学ぶ大学生/院生",
    prerequisites: "2級レベル + 線形代数",
    hours: "200〜400 時間",
    months: "6〜12 か月",
    topics: [
      "ポアソン・指数・幾何分布",
      "多変量正規分布",
      "ベイズの定理と事後分布・共役分布",
      "重回帰・ロジスティック回帰",
      "主成分分析(PCA)",
      "AR・MA・ARIMA(時系列解析)",
    ],
    color: "from-amber-50 to-amber-100/40 dark:from-amber-950/30 dark:to-amber-900/10",
    border: "border-amber-200 dark:border-amber-900/40",
  },
  {
    slug: "grade-1",
    title: "1級",
    target: "数理統計学の研究者・上級データサイエンティスト",
    prerequisites: "準1級レベル + 数学的成熟",
    hours: "400 時間〜",
    months: "1 年〜",
    topics: [
      "指数型分布族と十分統計量",
      "最尤推定・フィッシャー情報量・CR下限",
      "デルタ法・スラツキーの定理(漸近理論)",
      "ネイマン・ピアソン補題・尤度比/Wald/スコア検定",
      "EM アルゴリズム・MCMC・ブートストラップ",
    ],
    color: "from-rose-50 to-rose-100/40 dark:from-rose-950/30 dark:to-rose-900/10",
    border: "border-rose-200 dark:border-rose-900/40",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "統計検定はどの級から始めればいいですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "統計を初めて学ぶ方は4級から、高校数学が分かる方は3級から、実務でデータ分析を扱う方は2級から始めるのが標準的です。3問の級診断で目安を確認することもできます。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定2級の合格には何時間くらい必要ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100〜200時間が目安です。週末2時間+平日30分のペースなら3〜6か月で到達できます。テキスト1周(60時間)、演習(80時間)、過去問(40時間)、復習(20時間)が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定は飛び級できますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。受験資格に下位級の合格は不要なので、いきなり2級や準1級から受けても問題ありません。ただし、下位級の範囲(分散・正規分布など)の理解は必須です。",
      },
    },
    {
      "@type": "Question",
      name: "データサイエンティストには統計検定が必要ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格そのものより「資格を取る過程で身につく知識」が実務で重要です。2級レベル(検定・回帰)が業務基礎、準1級レベル(多変量・ベイズ・時系列)があれば応用範囲を完全カバーできます。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定はいつ受験できますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4級・3級・2級・準1級は CBT 方式で通年受験可能です。1級は年1回(11月)のペーパー試験のみです。",
      },
    },
  ],
};

export default function RoadmapPage() {
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
        <span>学習ロードマップ</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Roadmap</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計検定 学習ロードマップ
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定の合格までに必要な「**学ぶ順序**」「**学習時間の目安**」「**前提知識**」を、4級から1級まで 1 枚にまとめました。「どの級から始めるか迷っている」「合格までの全体像を知りたい」という方への入口です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Quick Guide</div>
        <h2 className="text-xl font-bold mb-3">
          目的別 ─ おすすめの始め方
        </h2>
        <ul className="space-y-3 text-[var(--muted-strong)] leading-loose">
          <li>
            <strong>統計を初めて学ぶ</strong> →{" "}
            <Link href="/textbook/grade-4" className="text-[var(--link)] hover:underline">
              4級
            </Link>{" "}
            から。中高生でも読めるレベルでデータと確率の基礎を固めます。
          </li>
          <li>
            <strong>大学で統計学を少しかじった</strong> →{" "}
            <Link href="/textbook/grade-3" className="text-[var(--link)] hover:underline">
              3級
            </Link>{" "}
            から。分散・標準偏差・正規分布までを体系的に。
          </li>
          <li>
            <strong>実務でデータ分析を扱いたい</strong> →{" "}
            <Link href="/textbook/grade-2" className="text-[var(--link)] hover:underline">
              2級
            </Link>{" "}
            を目標に。検定・回帰までの主要技法をひととおり。
          </li>
          <li>
            <strong>データサイエンスの実務 / 院試</strong> →{" "}
            <Link href="/textbook/grade-pre1" className="text-[var(--link)] hover:underline">
              準1級
            </Link>{" "}
            。多変量解析・ベイズ・時系列の応用まで。
          </li>
          <li>
            <strong>数理統計学を専門に</strong> →{" "}
            <Link href="/textbook/grade-1" className="text-[var(--link)] hover:underline">
              1級
            </Link>{" "}
            。証明を追える数学力が前提。
          </li>
        </ul>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4">
          まだ迷う場合は{" "}
          <Link href="/diagnose" className="text-[var(--link)] hover:underline">
            3 問の級診断
          </Link>{" "}
          がおすすめです。
        </p>
      </section>

      <div className="space-y-8">
        {ROADMAP.map((level, idx) => (
          <section
            key={level.slug}
            className={`paper rounded-lg p-7 bg-gradient-to-br ${level.color} ${level.border}`}
          >
            <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
              <div>
                <div className="chapter-eyebrow mb-1">
                  Step {idx + 1}
                </div>
                <h2 className="text-2xl font-bold">
                  {level.title} ─ {level.target}
                </h2>
              </div>
              <div className="text-xs ui-sans text-[var(--muted)]">
                目安: {level.hours} / {level.months}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-5">
              <div>
                <div className="chapter-eyebrow mb-1">前提知識</div>
                <div className="text-[var(--muted-strong)]">
                  {level.prerequisites}
                </div>
              </div>
              <div>
                <div className="chapter-eyebrow mb-1">学習時間目安</div>
                <div className="text-[var(--muted-strong)]">{level.hours}</div>
              </div>
              <div>
                <div className="chapter-eyebrow mb-1">期間目安</div>
                <div className="text-[var(--muted-strong)]">{level.months}</div>
              </div>
            </div>

            <div className="mb-5">
              <div className="chapter-eyebrow mb-2">主要トピック</div>
              <ul className="list-disc list-outside ml-6 text-sm text-[var(--muted-strong)] leading-relaxed space-y-0.5">
                {level.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 ui-sans text-sm">
              <Link
                href={`/textbook/${level.slug}`}
                className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
              >
                {level.title}の教科書
              </Link>
              <Link
                href={`/formulas/${level.slug}`}
                className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
              >
                公式集
              </Link>
              <Link
                href={`/quiz/${level.slug}`}
                className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
              >
                問題を解く
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Tips</div>
        <h2 className="text-xl font-bold mb-3">学習を続けるためのコツ</h2>
        <ul className="list-disc list-outside ml-6 space-y-2 text-[var(--muted-strong)] leading-relaxed">
          <li>
            <strong>1 日 30 分でも継続</strong>: 統計学は積み上げ型の学問。週 5 日 × 30 分でも、3 か月で 30 時間以上の学習量に。
          </li>
          <li>
            <strong>「読む → 解く → 振り返る」のサイクル</strong>: 教科書を読んだら、その節の演習問題を解き、間違えた問題は教科書に戻る。
          </li>
          <li>
            <strong>受験日を先に決める</strong>: 締切効果は強力。CBT 方式の級は通年受験可能なので、思い切って予約を。
          </li>
          <li>
            <strong>過去問は試験 1 か月前から</strong>: 早すぎると傾向把握できない。教科書を一周してから時間配分の練習を。
          </li>
          <li>
            <strong>数式は「式の意味」と「使う場面」で覚える</strong>: 単に丸暗記ではなく「なぜこの式か」「どんな問題で使うか」をセットで。
          </li>
        </ul>
      </section>
    </article>
  );
}
