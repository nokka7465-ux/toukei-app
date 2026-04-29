import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "AIエンジニア・ロードマップ ─ 統計・数学・Python の最短学習ルート",
  description:
    "AIエンジニアになるための統計・数学・Python を一気通貫で学ぶための完全ロードマップ。数学基礎 → 統計学 → 機械学習 → AI 検定の 5 フェーズで、必要時間・前提知識・到達点を 1 枚に整理。",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    title: "AIエンジニア・ロードマップ ─ 統計・数学・Python",
    description:
      "数学 → 統計 → 機械学習 → AI 検定。AIエンジニアになるための学習計画を 5 フェーズに整理。",
    type: "article",
    images: [
      { url: "/og/roadmap", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIエンジニア・ロードマップ",
    description:
      "数学 → 統計 → 機械学習 → AI 検定。学習計画を 5 フェーズに整理した完全版ロードマップ。",
    images: ["/og/roadmap"],
  },
};

type Phase = {
  num: number;
  emoji: string;
  title: string;
  englishTitle: string;
  audience: string;
  prerequisites: string;
  hours: string;
  months: string;
  goal: string;
  topics: string[];
  deliverables: string[];
  primary: { href: string; label: string };
  secondary: Array<{ href: string; label: string }>;
  /** Solid colour used for the top accent stripe + numbered chip. */
  accent: string;
  /** Subtle tint applied to the goal callout box. */
  tint: string;
};

const PHASES: Phase[] = [
  {
    num: 1,
    emoji: "📐",
    title: "数学基礎",
    englishTitle: "Mathematical Foundations",
    audience: "AIエンジニアを目指すすべての人。式が読めない / 久しぶりに数学に戻る方",
    prerequisites: "中学〜高校 1 年程度の代数",
    hours: "30〜60 時間",
    months: "1〜2 か月",
    goal: "教科書に出てくる数式を意味で読めるようになり、後の統計・ML パートで止まらないこと",
    topics: [
      "割合・百分率・比率(基礎の基礎)",
      "総和記号 Σ・指数 / 対数",
      "微分・積分(関数の傾きと面積)",
      "ベクトルと行列(線形代数)",
      "勾配・偏微分(最適化の前提)",
    ],
    deliverables: [
      "$\\sum_{i=1}^n x_i$ / $\\frac{\\partial f}{\\partial x}$ が読めて意味を説明できる",
      "行列の積と逆行列を手で計算できる",
      "勾配降下法が何を最小化しているか言葉で説明できる",
    ],
    primary: { href: "/math/textbook", label: "数学基礎 教科書" },
    secondary: [
      { href: "/math", label: "数学基礎 概要" },
      { href: "/math/quiz", label: "数学基礎 演習" },
    ],
    accent: "bg-emerald-500",
    tint: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    num: 2,
    emoji: "📊",
    title: "統計学(基礎)",
    englishTitle: "Descriptive & Probability Foundations",
    audience: "数学基礎が固まった方。データ分析の言葉に慣れたい方",
    prerequisites: "数学基礎 Phase 1",
    hours: "60〜120 時間",
    months: "2〜4 か月",
    goal: "データを「眺める言語」を獲得し、確率分布のかたちが頭に浮かぶようになる",
    topics: [
      "代表値・ばらつき(平均・中央値・分散・標準偏差)",
      "ヒストグラム・箱ひげ図・散布図",
      "場合の数・確率・条件付き確率",
      "確率変数・期待値・分散",
      "二項分布・正規分布",
      "標準化・偏差値・共分散・相関係数",
    ],
    deliverables: [
      "データセットから記述統計量を手と Python の両方で計算できる",
      "正規分布の 68/95/99.7 ルールを使える",
      "Bayes の定理を式で書ける(感覚は次フェーズで)",
    ],
    primary: { href: "/textbook/grade-3", label: "3 級 教科書(本命)" },
    secondary: [
      { href: "/textbook/intro", label: "入門編 教科書" },
      { href: "/textbook/grade-4", label: "4 級 教科書" },
      { href: "/quiz/grade-3", label: "3 級 演習" },
      { href: "/mock/grade-3", label: "3 級 模試" },
    ],
    accent: "bg-sky-500",
    tint: "bg-sky-50 dark:bg-sky-950/30",
  },
  {
    num: 3,
    emoji: "🔬",
    title: "統計学(応用)",
    englishTitle: "Inference, Regression & Multivariate",
    audience: "AI モデルの中身を統計の言葉で説明したい方。データ職を狙う方",
    prerequisites: "統計学 基礎 Phase 2",
    hours: "120〜250 時間",
    months: "3〜6 か月",
    goal: "推定・検定・回帰・多変量・ベイズの基本道具を、論文も読める粒度で持つ",
    topics: [
      "標本分布・中心極限定理・不偏推定量",
      "信頼区間 / 仮説検定(z, t, $\\chi^2$, F)",
      "単回帰・重回帰・ロジスティック回帰",
      "主成分分析(PCA)・因子分析",
      "ベイズの定理と事後分布・共役分布",
      "時系列解析(AR, MA, ARIMA)",
    ],
    deliverables: [
      "p 値・信頼区間・第 1/2 種の誤りを実例で説明できる",
      "scikit-learn で回帰 / ロジスティック回帰を実装し評価できる",
      "PCA で次元削減できる",
    ],
    primary: { href: "/textbook/grade-2", label: "2 級 教科書(本命)" },
    secondary: [
      { href: "/textbook/grade-pre1", label: "準 1 級 教科書" },
      { href: "/quiz/grade-2", label: "2 級 演習" },
      { href: "/mock/grade-2", label: "2 級 模試" },
      { href: "/explore", label: "動かして学ぶ統計" },
    ],
    accent: "bg-violet-500",
    tint: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    num: 4,
    emoji: "🤖",
    title: "機械学習・ディープラーニング",
    englishTitle: "Machine Learning & Deep Learning",
    audience: "AI モデルを設計・学習・評価できるレベルを目指す方",
    prerequisites: "統計学(応用)Phase 3 + Python 基本文法",
    hours: "120〜300 時間",
    months: "3〜6 か月",
    goal: "教師あり / 教師なし / 深層学習を Python で実装し、ドメインに応用できる",
    topics: [
      "教師あり学習(回帰・分類・SVM・木系・GBDT)",
      "教師なし学習(クラスタリング・次元削減)",
      "ニューラルネット(順伝播・誤差逆伝播・最適化)",
      "CNN(画像)・RNN/Transformer(系列)",
      "損失関数・正則化・過学習対策",
      "評価指標(精度・再現率・AUC・対数尤度)",
    ],
    deliverables: [
      "scikit-learn でベンチマーク問題を解ける",
      "PyTorch / TensorFlow で MLP/CNN を学習できる",
      "Transformer の attention をスクラッチで書ける(理想)",
    ],
    primary: { href: "/certs/e-shikaku/textbook", label: "E 資格 教科書" },
    secondary: [
      { href: "/textbook/grade-pre1", label: "準 1 級 教科書(多変量・ベイズ)" },
      { href: "/figures", label: "図解で学ぶ統計" },
      { href: "/explore", label: "動かして学ぶ統計" },
      { href: "/certs/e-shikaku/quiz", label: "E 資格 演習" },
    ],
    accent: "bg-amber-500",
    tint: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    num: 5,
    emoji: "🎓",
    title: "AI 系検定(仕上げ)",
    englishTitle: "AI Certifications",
    audience: "知識を可視化・証明したい方。転職 / 昇進 / 学生のスキルアピール",
    prerequisites: "Phase 1〜4 の知識(部分的でも OK)",
    hours: "40〜200 時間(検定により異なる)",
    months: "1〜3 か月",
    goal: "履歴書 / 名刺に書ける AI 系検定を 1〜2 つ取得し、学習の節目を作る",
    topics: [
      "G 検定(JDLA): AI を使う立場での全方位リテラシー",
      "E 資格(JDLA): エンジニア向け実装重視。E 資格は事前認定講座が必須",
      "DS 検定(DS 協会): リテラシーレベル DS 力 / DE 力 / ビジネス力",
      "統計検定 2 級〜準 1 級(後押しの定番)",
      "DS 基礎(統計学会): Excel で実データ分析",
      "QC 検定: 品質管理 / 製造業ドメイン特化",
    ],
    deliverables: [
      "G 検定 もしくは DS 検定リテラシーで 1 つ合格",
      "E 資格 取得(理想 / 事前認定講座が必要)",
      "統計検定 2 級 + 準 1 級で実力の裏付け",
    ],
    primary: { href: "/exam-info", label: "受験情報まとめ" },
    secondary: [
      { href: "/certs/g-test", label: "G 検定 対策" },
      { href: "/certs/e-shikaku", label: "E 資格 対策" },
      { href: "/certs/ds-literacy", label: "DS 検定 対策" },
      { href: "/certs/ds-basic", label: "DS 基礎 対策" },
    ],
    accent: "bg-rose-500",
    tint: "bg-rose-50 dark:bg-rose-950/30",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AIエンジニアになるには何から学べばいいですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "数学基礎(微分・線形代数・確率) → 統計学(記述・推定・検定) → 機械学習・DL → AI 系検定 の 4 フェーズが王道です。本サイトの 5 段階ロードマップ通りに進めれば、AI モデルが何をしているのか統計の言葉で説明できるようになります。",
      },
    },
    {
      "@type": "Question",
      name: "全部で何時間くらい必要ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最短ルートで 約 350 時間、しっかり身につけるなら 約 700 時間が目安です。週 5 日 × 1 時間で 1 年程度。社会人で平日 30 分・週末 2 時間ペースなら 1.5 年でフェーズ 4 まで到達できます。",
      },
    },
    {
      "@type": "Question",
      name: "数学が苦手でも AIエンジニアになれますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "なれますが、一定レベルの数学は必須です。本サイトの『数学基礎』フェーズで微分・線形代数・確率の必要部分だけを抜粋した教科書を用意しているので、苦手でも逃げずにここから始めれば大丈夫です。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定とAI 検定はどちらが先ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "統計検定 2 級を先に取り、その後 G 検定 → E 資格 / DS 検定 の順がおすすめです。統計の土台があると AI 検定の理解が大幅に楽になります。順序を逆にすると遠回りになることが多いです。",
      },
    },
    {
      "@type": "Question",
      name: "Python はどこで学びますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本サイトの教科書・図解には Python(NumPy / SciPy / Pandas / scikit-learn)と R のコード例が併記されています。理論を式で理解した直後にコードで動かす学習設計なので、別途 Python 入門書を読まずに済みます。",
      },
    },
  ],
};

export default function RoadmapPage() {
  const totalHoursMin = 30 + 60 + 120 + 120 + 40;
  const totalHoursMax = 60 + 120 + 250 + 300 + 200;
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "AIエンジニア・ロードマップ", href: "/roadmap" },
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
        <span>AIエンジニア・ロードマップ</span>
      </nav>

      <header className="mb-12 pb-7 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">AI Engineer Roadmap</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider leading-tight">
          AIエンジニアになるための
          <br />
          完全ロードマップ
        </h1>
        <p className="text-base md:text-lg text-[var(--muted-strong)] leading-loose max-w-3xl">
          数学基礎 → 統計学 → 機械学習 → AI 系検定 の 5 フェーズで、迷わず最短距離を走るための学習計画。各フェーズに『前提知識・所要時間・到達点・次のリンク』を具体化しているので、今どこにいるか自己診断しながら進められます。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
          <div className="paper rounded p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              フェーズ
            </div>
            <div className="text-2xl font-bold mt-0.5 tabular-nums">5</div>
          </div>
          <div className="paper rounded p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              最短時間
            </div>
            <div className="text-2xl font-bold mt-0.5 tabular-nums">
              {totalHoursMin}h
            </div>
          </div>
          <div className="paper rounded p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              標準時間
            </div>
            <div className="text-2xl font-bold mt-0.5 tabular-nums">
              {totalHoursMax}h
            </div>
          </div>
          <div className="paper rounded p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              費用
            </div>
            <div className="text-2xl font-bold mt-0.5">¥0</div>
          </div>
        </div>
      </header>

      <section className="mb-12 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">Quick Guide</div>
        <h2 className="text-xl font-bold mb-4">あなたはどこから始める?</h2>
        <ul className="space-y-3 text-[var(--muted-strong)] leading-loose text-sm">
          <li>
            <strong className="text-[var(--foreground)]">数学が苦手・思い出せない</strong>{" "}
            → <Link href="#phase-1" className="text-[var(--link)] hover:underline">Phase 1 数学基礎</Link>
          </li>
          <li>
            <strong className="text-[var(--foreground)]">数学はできるが統計は初めて</strong>{" "}
            → <Link href="#phase-2" className="text-[var(--link)] hover:underline">Phase 2 統計学(基礎)</Link>
          </li>
          <li>
            <strong className="text-[var(--foreground)]">統計検定 3 級程度はわかる</strong>{" "}
            → <Link href="#phase-3" className="text-[var(--link)] hover:underline">Phase 3 統計学(応用)</Link>
          </li>
          <li>
            <strong className="text-[var(--foreground)]">統計はわかる、ML を本格的に</strong>{" "}
            → <Link href="#phase-4" className="text-[var(--link)] hover:underline">Phase 4 機械学習・DL</Link>
          </li>
          <li>
            <strong className="text-[var(--foreground)]">知識の総仕上げをしたい</strong>{" "}
            → <Link href="#phase-5" className="text-[var(--link)] hover:underline">Phase 5 AI 系検定</Link>
          </li>
        </ul>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4">
          迷うときは{" "}
          <Link
            href="/diagnose"
            className="text-[var(--link)] hover:underline font-bold"
          >
            3 問の級診断
          </Link>{" "}
          で適切なスタート位置の目安が出ます。
        </p>
      </section>

      <ol className="space-y-8">
        {PHASES.map((p) => (
          <li
            key={p.num}
            id={`phase-${p.num}`}
            className="paper rounded-xl scroll-mt-20 relative overflow-hidden"
          >
            {/* Top colour stripe to differentiate phases at a glance. */}
            <div className={`h-1.5 w-full ${p.accent}`} aria-hidden="true" />

            <div className="p-7 md:p-8 relative">
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-2 text-[140px] leading-none opacity-[0.06] pointer-events-none select-none"
              >
                {p.emoji}
              </div>

              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold ui-sans ${p.accent}`}
                    aria-hidden="true"
                  >
                    {p.num}
                  </span>
                  <div>
                    <div className="chapter-eyebrow mb-0.5">Phase {p.num}</div>
                    <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                      <span aria-hidden="true">{p.emoji}</span>
                      <span>{p.title}</span>
                    </h2>
                    <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans mt-1">
                      {p.englishTitle}
                    </div>
                  </div>
                </div>
                <div className="text-xs ui-sans text-[var(--muted-strong)] text-right">
                  ⏱ {p.hours}
                  <br />
                  📅 {p.months}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-5">
                <div>
                  <div className="chapter-eyebrow mb-1">対象</div>
                  <div className="text-[var(--muted-strong)]">{p.audience}</div>
                </div>
                <div>
                  <div className="chapter-eyebrow mb-1">前提知識</div>
                  <div className="text-[var(--muted-strong)]">
                    {p.prerequisites}
                  </div>
                </div>
              </div>

              <div
                className={`mb-5 rounded p-4 border border-[var(--page-border)] ${p.tint}`}
              >
                <div className="chapter-eyebrow mb-1">🎯 このフェーズのゴール</div>
                <div className="text-sm text-[var(--foreground)] leading-relaxed">
                  {p.goal}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <div className="chapter-eyebrow mb-2">主要トピック</div>
                  <ul className="list-disc list-outside ml-5 text-sm text-[var(--muted-strong)] leading-relaxed space-y-0.5">
                    {p.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="chapter-eyebrow mb-2">到達点(できるようになる)</div>
                  <ul className="list-[square] list-outside ml-5 text-sm text-[var(--muted-strong)] leading-relaxed space-y-0.5">
                    {p.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 ui-sans text-sm">
                <Link
                  href={p.primary.href}
                  className="px-4 py-2 bg-[var(--accent-strong)] text-white rounded-md font-bold hover:opacity-90 shadow-sm"
                >
                  {p.primary.label} →
                </Link>
                {p.secondary.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="px-3.5 py-2 border border-[var(--page-border-strong)] rounded-md hover:bg-[var(--background)]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-14 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">Tips</div>
        <h2 className="text-xl font-bold mb-3">続けるためのコツ</h2>
        <ul className="list-disc list-outside ml-6 space-y-2.5 text-[var(--muted-strong)] leading-relaxed text-sm">
          <li>
            <strong className="text-[var(--foreground)]">毎日 30 分でも続ける</strong>:
            学習量は時間 × 日数。週 5 日 × 30 分なら 3 ヶ月で 30 時間以上。本サイトの『連続学習日数』ストリーク機能で習慣化を支援します。
          </li>
          <li>
            <strong className="text-[var(--foreground)]">読む → 動かす → 解くのループ</strong>:
            教科書で読み、Python/R コードで動かし、演習で確認。3 つを 1 セットで回すと定着率が段違いです。
          </li>
          <li>
            <strong className="text-[var(--foreground)]">受験日を先に決める</strong>:
            G 検定 / DS 検定 / 統計検定は通年 CBT で予約可能。締切効果は強力です。
          </li>
          <li>
            <strong className="text-[var(--foreground)]">間違えた問題を放置しない</strong>:
            『苦手問題の復習』機能で不正解だけを集めて再挑戦できます。間違いを資産化しましょう。
          </li>
          <li>
            <strong className="text-[var(--foreground)]">数式は「式の意味」と「使う場面」で覚える</strong>:
            丸暗記ではなく、なぜこの式か / どんな場面で使うかをセットで。AI モデルの実装に直結します。
          </li>
        </ul>
      </section>

      <section className="mt-10 text-center py-8">
        <h2 className="text-xl font-bold mb-3">まずは Phase 1 から始めましょう</h2>
        <div className="flex flex-wrap gap-3 justify-center ui-sans text-sm">
          <Link
            href="#phase-1"
            className="px-5 py-2.5 bg-[var(--accent-strong)] text-white rounded-md font-bold hover:opacity-90"
          >
            Phase 1 数学基礎へ ↑
          </Link>
          <Link
            href="/diagnose"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-md hover:bg-[var(--page)]"
          >
            まずは級診断 →
          </Link>
        </div>
      </section>
    </article>
  );
}
