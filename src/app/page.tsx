import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/data/levels";
import { blogPosts } from "@/data/blog";
import { FaqJsonLd } from "@/components/StructuredData";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { DailyProblem } from "@/components/DailyProblem";
import { ExamCountdown } from "@/components/ExamCountdown";
import { RecommendedQuestions } from "@/components/RecommendedQuestions";
import { AchievementsPanel } from "@/components/AchievementsPanel";
import { AiRoadmap } from "@/components/AiRoadmap";
import { toolsRegistry } from "@/lib/tools-registry";
import { blogTheme } from "@/lib/blog-theme";

const availableLevels = new Set<string>([
  "intro",
  "grade-4",
  "grade-3",
  "grade-2",
  "grade-pre1",
  "grade-1",
]);

const HOME_TITLE =
  "統計ロードマップ ─ AIエンジニアになるための統計・数学・Python";
const HOME_DESCRIPTION =
  "AIエンジニアになるための統計・数学・Python を一気通貫で学べる無料サイト。数学基礎 → 統計学 → 機械学習 → AI 検定対策まで、4 ステップのロードマップで迷わず進めます。統計検定 4 級〜1 級・G 検定・E 資格・DS 検定にも完全対応。";

const HOME_FAQ = [
  {
    q: "統計ロードマップは無料で利用できますか?",
    a: "はい、教科書・公式集・演習問題・統計計算ツール・図解 ─ サイト上のすべてのコンテンツを完全無料でご利用いただけます。会員登録も不要です。",
  },
  {
    q: "AIエンジニアを目指すなら、どの順で学ぶのがいいですか?",
    a: "数学基礎(微分・線形代数・確率) → 統計学(記述・推定・検定) → 機械学習(回帰・分類・DL) → 関連検定(G検定・E資格・DS検定)の 4 ステップが王道です。本サイトの『AIエンジニア・ロードマップ』セクションがそのまま学習順になっています。",
  },
  {
    q: "統計検定はどの級から始めるのがおすすめですか?",
    a: "統計学を初めて学ぶ方は『入門編』、高校数学を経験している方は『4級』、大学初年度の確率統計を理解したい方は『3級』、AI/機械学習の前提として実務レベルを身につけたい方は『2級』からの開始がおすすめです。3 問の級診断で目安が出せます。",
  },
  {
    q: "Python や R のコードはありますか?",
    a: "はい、教科書・図解の各章に Python(NumPy/SciPy/Pandas/scikit-learn)と R のコード例を併記しています。理論を式で理解した後、コードで動かして再確認できます。AIエンジニアに必要な実装感覚をそのまま養えます。",
  },
  {
    q: "AI 系の検定(G 検定・E 資格)は対策できますか?",
    a: "はい、G 検定・E 資格・DS 検定それぞれに教科書・演習問題・受験情報を用意しています。統計の基礎を固めたあとそのまま AI 系検定に進めるカリキュラムです。",
  },
  {
    q: "スマートフォンでも使えますか?",
    a: "はい、レスポンシブ対応済みでスマートフォン・タブレット・PC のいずれからも快適に学習できます。インタラクティブ図解もタッチ操作に対応。PWA 対応でホーム画面に追加すればアプリのように使えます。",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og/home"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <FaqJsonLd entries={HOME_FAQ} />
      <section className="hero-band mb-16 md:mb-20 text-center px-6 py-14 md:py-20">
        <span className="chip mb-5">Toukei Roadmap</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-5 tracking-[0.05em] leading-[1.15]">
          統計ロードマップ
        </h1>
        <hr className="rule-double max-w-xs mx-auto" />
        <p className="text-base md:text-lg text-[var(--muted-strong)] leading-loose max-w-2xl mx-auto mt-6">
          <strong className="text-[var(--foreground)]">
            AIエンジニアになるための
          </strong>
          <br className="md:hidden" />
          <strong className="text-[var(--foreground)]">
            統計・数学・Python
          </strong>
          を、<br className="hidden md:block" />
          一気通貫で学べる無料サイト。
        </p>
        <p className="text-sm text-[var(--muted)] leading-loose max-w-xl mx-auto mt-3 ui-sans">
          数学基礎 → 統計学 → 機械学習 → AI 検定 ─ 4 ステップで迷わず進める学習ロードマップ。
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-8 ui-sans text-sm">
          <Link
            href="#roadmap"
            className="px-7 py-3 bg-[var(--accent)] text-[var(--accent-fg)] rounded-xl font-bold hover:bg-[var(--accent-strong)] shadow-sm transition"
          >
            ロードマップを見る ↓
          </Link>
          <Link
            href="/diagnose"
            className="px-7 py-3 border-2 border-[var(--accent)] text-[var(--link)] rounded-xl font-bold hover:bg-[var(--highlight)] transition"
          >
            まずは級診断 →
          </Link>
        </div>
        <ul
          aria-label="サイト指標"
          className="mt-7 flex flex-wrap justify-center gap-2 text-[11px] ui-sans"
        >
          {[
            { label: "問題", value: "280+" },
            { label: "用語", value: "320+" },
            { label: "図解", value: "33" },
            { label: "計算ツール", value: `${toolsRegistry.length}` },
            { label: "ブログ", value: `${blogPosts.length}` },
          ].map((m) => (
            <li
              key={m.label}
              className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]/70 backdrop-blur-sm"
            >
              <strong className="text-[var(--accent)]">{m.value}</strong>{" "}
              <span className="text-[var(--muted-strong)]">{m.label}</span>
            </li>
          ))}
          <li className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]/70 backdrop-blur-sm">
            <span className="text-[var(--muted-strong)]">
              完全無料・登録不要
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-14 md:mb-20 paper rounded-xl p-7 md:p-8">
        <span className="chip-soft mb-3">For Beginners</span>
        <h2 className="text-2xl font-bold mb-3 mt-2">初めての方へ</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-4">
          このサイトは、<strong>AIエンジニアになるための統計・数学・Python</strong>{" "}
          を一気通貫で学べるロードマップです。全体像を把握したい方は{" "}
          <Link
            href="/roadmap"
            className="text-[var(--link)] hover:underline font-bold"
          >
            AIエンジニア・ロードマップ
          </Link>
          、自分の現在地を確認したい方は{" "}
          <Link
            href="/diagnose"
            className="text-[var(--link)] hover:underline font-bold"
          >
            3 問の級診断
          </Link>{" "}
          、学習計画を逆算したい方は{" "}
          <Link
            href="/plan"
            className="text-[var(--link)] hover:underline font-bold"
          >
            学習プラン計算
          </Link>{" "}
          からどうぞ。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose mb-4">
          学習は <strong>5 つのフェーズ</strong>{" "}
          で積み上げます ─ 数学基礎 → 統計学(基礎) → 統計学(応用) → 機械学習・DL → AI 系検定。数学に不安があれば{" "}
          <Link href="/math" className="text-[var(--link)] hover:underline font-bold">
            数学基礎
          </Link>{" "}
          から、統計の言葉に慣れたい方は{" "}
          <Link
            href="/textbook/grade-3"
            className="text-[var(--link)] hover:underline font-bold"
          >
            統計検定 3 級の教科書
          </Link>{" "}
          が入口になります。AI 検定(G 検定 / E 資格 / DS 検定)や統計検定 1 級まで同じサイト内で対策できます。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose mb-4">
          各章には <strong>図解</strong> ・ <strong>Python / R コード</strong>{" "}
          ・ <strong>演習問題</strong>{" "}
          が併記されており、理論 → 動かす → 解くのループで定着します。各問題に付く難易度バッジ(
          <span className="inline-block mx-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 tracking-wider ui-sans">
            ★☆☆ 基礎
          </span>
          <span className="inline-block mx-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 tracking-wider ui-sans">
            ★★☆ 標準
          </span>
          <span className="inline-block mx-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 tracking-wider ui-sans">
            ★★★ 応用
          </span>
          )を目印に、無理のない順で力をつけていけます。会員登録不要 ・ 完全無料 ・ ブラウザ完結。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/roadmap"
            className="px-5 py-2.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded-lg font-bold hover:bg-[var(--accent-strong)]"
          >
            AIエンジニア・ロードマップを見る →
          </Link>
          <Link
            href="/about-ai"
            className="px-5 py-2.5 border-2 border-[var(--accent)] text-[var(--link)] rounded-lg font-bold hover:bg-[var(--highlight)]"
          >
            AI とは?(5 分で分かる)
          </Link>
          <Link
            href="/score"
            className="px-5 py-2.5 border-2 border-violet-500 text-violet-700 dark:text-violet-300 rounded-lg font-bold hover:bg-violet-50 dark:hover:bg-violet-900/20"
          >
            🎯 統計偏差値を測る
          </Link>
          <Link
            href="/diagnose"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            3 問の級診断
          </Link>
          <Link
            href="/plan"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            学習プラン計算
          </Link>
          <Link
            href="/math"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            Phase 1 数学基礎
          </Link>
          <Link
            href="/textbook/grade-3"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            Phase 2 統計学(3 級)
          </Link>
          <Link
            href="/figures"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            図解で学ぶ統計
          </Link>
          <Link
            href="/explore"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            動かして学ぶ統計
          </Link>
        </div>
      </section>

      {/* 3 層構造: 記事 → 診断 → 学習 */}
      <section className="mb-14 md:mb-20">
        <header className="mb-6 text-center">
          <span className="chip-soft">Learning Flow</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3">
            学習の 3 ステップ
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            <strong>気づく</strong> → <strong>測る</strong> →{" "}
            <strong>学ぶ</strong> の順で進めるのがおすすめです。
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {[
            {
              step: "STEP 1",
              chip: "Discover",
              icon: "📰",
              title: "記事で気づく",
              description:
                "ブログ・AI とは・統計入門で、興味のあるトピックから自由に。",
              href: "/blog",
              cta: "ブログを読む",
              gradient: "from-sky-500 to-emerald-500",
            },
            {
              step: "STEP 2",
              chip: "Measure",
              icon: "📊",
              title: "診断で測る",
              description:
                "統計偏差値診断で現在地を数値化。15 問で実力を可視化します。",
              href: "/score",
              cta: "偏差値を測る",
              gradient: "from-violet-500 to-sky-500",
            },
            {
              step: "STEP 3",
              chip: "Master",
              icon: "📚",
              title: "教科書で学ぶ",
              description:
                "あなたのレベルに合った教科書から体系的に。15 教科書 150+ 章。",
              href: "/textbook",
              cta: "教科書一覧へ",
              gradient: "from-amber-500 to-rose-500",
            },
          ].map((p, idx) => (
            <Link
              key={p.title}
              href={p.href}
              className="paper rounded-xl overflow-hidden flex flex-col group hover:-translate-y-0.5 transition relative"
            >
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`}
                aria-hidden="true"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}
                  >
                    {p.step}
                  </span>
                  <span className="chip-soft text-[10px]">{p.chip}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl" aria-hidden="true">
                    {p.icon}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-[var(--link)]">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--muted-strong)] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 text-sm font-bold text-[var(--link)] ui-sans">
                  {p.cta} →
                </div>
              </div>
              {/* 矢印(ステップ間) */}
              {idx < 2 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-[var(--muted)] text-2xl pointer-events-none"
                >
                  →
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* 二軸ナビゲーション: 目的 × 検定 */}
      <section className="mb-14 md:mb-20">
        <header className="mb-6 text-center">
          <span className="chip-soft">Find Your Path</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3">
            目的 × 検定 で探す
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            あなたの目的と進めたい検定の交点から、最適な入口を見つけられます。
          </p>
        </header>
        <div className="paper rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-xs ui-sans">
            <thead>
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="text-left py-3 pr-3 font-bold text-[var(--muted)] uppercase tracking-[0.1em] text-[10px]">
                  目的 ＼ 検定
                </th>
                <th className="text-center py-3 px-2 font-bold">統計検定</th>
                <th className="text-center py-3 px-2 font-bold">DS 検定</th>
                <th className="text-center py-3 px-2 font-bold">G 検定</th>
                <th className="text-center py-3 px-2 font-bold">E 資格</th>
                <th className="text-center py-3 px-2 font-bold">QC 検定</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  goal: "🎓 試験合格",
                  cells: [
                    { label: "級診断", href: "/diagnose" },
                    { label: "教科書", href: "/certs/ds-literacy/textbook" },
                    { label: "教科書", href: "/certs/g-test/textbook" },
                    { label: "教科書", href: "/certs/e-shikaku/textbook" },
                    { label: "教科書", href: "/certs/qc-kentei/textbook" },
                  ],
                },
                {
                  goal: "💼 実務応用",
                  cells: [
                    { label: "2 級", href: "/textbook/grade-2" },
                    { label: "DS 基礎", href: "/certs/ds-basic/textbook" },
                    { label: "AI 倫理", href: "/about-ai" },
                    { label: "PyTorch", href: "/programming#ch8" },
                    { label: "管理図", href: "/certs/qc-kentei/textbook" },
                  ],
                },
                {
                  goal: "🚀 AI 転職",
                  cells: [
                    { label: "ロードマップ", href: "/roadmap" },
                    { label: "ML 手法", href: "/certs/ds-literacy/textbook" },
                    { label: "G 検定", href: "/certs/g-test/textbook" },
                    { label: "E 資格", href: "/certs/e-shikaku/textbook" },
                    { label: "─", href: "/certs/qc-kentei/textbook" },
                  ],
                },
                {
                  goal: "📚 学術研究",
                  cells: [
                    { label: "1 級", href: "/textbook/grade-1" },
                    { label: "─", href: "/certs/ds-literacy/textbook" },
                    { label: "─", href: "/certs/g-test/textbook" },
                    { label: "深層学習", href: "/deep-learning-basics" },
                    { label: "─", href: "/certs/qc-kentei/textbook" },
                  ],
                },
                {
                  goal: "🧠 教養",
                  cells: [
                    { label: "入門編", href: "/textbook/intro" },
                    { label: "DS 基礎", href: "/certs/ds-basic/textbook" },
                    { label: "AI とは", href: "/about-ai" },
                    { label: "─", href: "/certs/e-shikaku/textbook" },
                    { label: "─", href: "/certs/qc-kentei/textbook" },
                  ],
                },
                {
                  goal: "🏭 製造業",
                  cells: [
                    { label: "2 級", href: "/textbook/grade-2" },
                    { label: "─", href: "/certs/ds-literacy/textbook" },
                    { label: "─", href: "/certs/g-test/textbook" },
                    { label: "─", href: "/certs/e-shikaku/textbook" },
                    { label: "QC 教科書", href: "/certs/qc-kentei/textbook" },
                  ],
                },
              ].map((row) => (
                <tr
                  key={row.goal}
                  className="border-b border-[var(--page-border)] last:border-0"
                >
                  <td className="py-2.5 pr-3 font-bold whitespace-nowrap">
                    {row.goal}
                  </td>
                  {row.cells.map((c, i) => (
                    <td
                      key={i}
                      className="py-2.5 px-2 text-center"
                    >
                      {c.label === "─" ? (
                        <span className="text-[var(--muted)]">─</span>
                      ) : (
                        <Link
                          href={c.href}
                          className="text-[var(--link)] hover:underline whitespace-nowrap"
                        >
                          {c.label}
                        </Link>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 最新動向 */}
      <section className="mb-14 md:mb-20 paper rounded-xl p-6">
        <header className="mb-4 flex items-baseline justify-between gap-3 flex-wrap">
          <div>
            <span className="chip-soft mb-2 inline-flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              Latest
            </span>
            <h2 className="text-xl font-bold mt-2">最新動向 ─ 2026 春</h2>
          </div>
          <Link
            href="/blog"
            className="text-xs text-[var(--link)] hover:underline ui-sans"
          >
            すべての記事 →
          </Link>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {[
            {
              tag: "AI",
              title: "Claude Opus 4.7・GPT-5.5 時代の AI エージェント",
              text: "MCP 標準化が進み、Claude Code・Devin・Manus が実用域。E 資格 Ch11 で詳解。",
              href: "/certs/e-shikaku/textbook#ch11",
            },
            {
              tag: "統計",
              title: "因果推論が 1 級・準 1 級の主要トピックに",
              text: "Pearl の DAG・do-calculus・反事実推論。1 級 Ch11 で完全網羅。",
              href: "/textbook/grade-1#ch11",
            },
            {
              tag: "規制",
              title: "EU AI Act 段階適用 + 日本 AI 事業者ガイドライン",
              text: "リスクレベル別の規制が本格化。DS 検定リテラシー Ch5・G 検定 Ch5 で。",
              href: "/certs/ds-literacy/textbook#ch5",
            },
            {
              tag: "数学",
              title: "GNN とスペクトラルグラフ理論",
              text: "math Ch11 でグラフラプラシアン・PageRank・GNN を新規追加。",
              href: "/math/textbook#ch11",
            },
          ].map((n) => (
            <li key={n.title}>
              <Link
                href={n.href}
                className="paper rounded-lg p-4 block hover:-translate-y-0.5 transition group h-full"
              >
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-[var(--accent)] text-[var(--accent-fg)] text-[10px] font-bold tracking-wider ui-sans">
                    {n.tag}
                  </span>
                </div>
                <div className="font-bold text-sm leading-snug group-hover:text-[var(--link)]">
                  {n.title}
                </div>
                <div className="text-xs text-[var(--muted-strong)] mt-1.5 leading-relaxed">
                  {n.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14 md:mb-20">
        <header className="mb-5 text-center">
          <span className="chip-soft">Start Here</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3">
            3 つの始め方から選ぶ
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            読む・解く・試す ─ どこからでも 1 タップで学習開始。
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              chip: "Read",
              icon: "📖",
              title: "教科書から学ぶ",
              description:
                "明朝体の読み物として概念から積み上げる。図解 ・ Python/R コード併記。",
              href: "/textbook",
              cta: "教科書一覧へ",
              accent: "bg-emerald-500",
            },
            {
              chip: "Solve",
              icon: "✏️",
              title: "演習から始める",
              description:
                "全 14 トラック・約 280 問のオリジナル類題。難易度・カテゴリで絞れる。",
              href: "/quiz",
              cta: "演習問題を見る",
              accent: "bg-sky-500",
            },
            {
              chip: "Test",
              icon: "🎯",
              title: "模試で力試し",
              description:
                "本番形式の時間制限付き模試。合否判定 + 受験履歴をブラウザに記録。",
              href: "/mock",
              cta: "模試一覧へ",
              accent: "bg-violet-500",
            },
          ].map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="paper rounded-xl overflow-hidden flex flex-col group hover:-translate-y-0.5 transition"
            >
              <div className={`h-1.5 w-full ${p.accent}`} aria-hidden="true" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl" aria-hidden="true">
                    {p.icon}
                  </span>
                  <span className="chip-soft text-[10px]">{p.chip}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--link)]">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted-strong)] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 text-sm font-bold text-[var(--link)] ui-sans">
                  {p.cta} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AiRoadmap />

      <ExamCountdown />

      <DailyProblem />

      <RecommendedQuestions />

      <ProgressDashboard />

      <AchievementsPanel />

      <section className="mb-14 md:mb-20">
        <div className="mb-5 flex items-baseline justify-between">
          <div>
            <div className="chapter-eyebrow mb-1">Blog</div>
            <h2 className="text-2xl font-bold">学習ブログ</h2>
          </div>
          <Link
            href="/blog"
            className="text-xs text-[var(--link)] hover:underline ui-sans"
          >
            すべての記事 →
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[...blogPosts]
            .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
            .slice(0, 3)
            .map((post) => {
              const cat = post.category;
              const theme = blogTheme(cat);
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="paper block rounded-xl overflow-hidden hover:-translate-y-0.5 transition group h-full flex flex-col"
                  >
                    <div
                      className={`relative aspect-[16/9] bg-gradient-to-br ${theme.grad} flex items-center justify-center overflow-hidden`}
                    >
                      <span
                        className="text-6xl drop-shadow-md"
                        aria-hidden="true"
                      >
                        {theme.emoji}
                      </span>
                      <span className="absolute top-3 left-3 chip">{cat}</span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="ui-sans text-[10px] text-[var(--muted)] mb-2">
                        {post.publishedAt}
                      </div>
                      <div className="font-bold text-sm mb-2 group-hover:text-[var(--link)] leading-snug">
                        {post.title}
                      </div>
                      <div className="text-xs text-[var(--muted-strong)] leading-relaxed line-clamp-3 flex-1">
                        {post.description}
                      </div>
                      <div className="mt-3 text-xs font-bold text-[var(--link)] ui-sans">
                        記事を読む →
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>

      <section>
        <div className="mb-6">
          <div className="chapter-eyebrow mb-1">Contents</div>
          <h2 className="text-2xl font-bold">級別コンテンツ</h2>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
            受験したい級、または自分のレベルに合った級を選んでください。**入門編** はサイト独自の超初心者向け、4級〜1級が公式の統計検定範囲です。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {levels.map((level) => {
            const enabled = availableLevels.has(level.slug);
            return (
              <div
                key={level.slug}
                className={`paper rounded-lg p-6 transition ${
                  enabled ? "hover:-translate-y-0.5" : "opacity-60"
                }`}
              >
                <div className="chapter-eyebrow mb-1">
                  {level.title.replace("級", "").toUpperCase()} Grade
                </div>
                <h3 className="text-2xl font-bold mb-2">{level.title}</h3>
                <p className="text-sm text-[var(--muted-strong)] mb-4 leading-relaxed">
                  {level.description}
                </p>
                {enabled ? (
                  <div className="flex flex-wrap gap-2 ui-sans text-sm">
                    <Link
                      href={`/textbook/${level.slug}`}
                      className="px-3 py-1.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)]"
                    >
                      教科書
                    </Link>
                    <Link
                      href={`/formulas/${level.slug}`}
                      className="px-3 py-1.5 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
                    >
                      公式集
                    </Link>
                    <Link
                      href={`/quiz/${level.slug}`}
                      className="px-3 py-1.5 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
                    >
                      問題を解く
                    </Link>
                  </div>
                ) : (
                  <div className="text-sm text-[var(--muted)]">準備中</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Related certifications - tightly attached under the level cards */}
        <div className="mt-10 pt-8 border-t border-dashed border-[var(--page-border-strong)]">
          <div className="text-center mb-6">
            <span className="chip-soft">Related Certs</span>
            <h3 className="text-xl font-bold mt-3">関連検定(別系統)</h3>
            <p className="text-xs text-[var(--muted)] mt-2 ui-sans">
              データ・AI 系資格の代表的なパス。実務志向・調査志向・AI 概念・全方位リテラシー・生成 AI 活用から目的に応じて選べます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                href: "/certs/ds-basic",
                chip: "DS Base",
                emoji: "📊",
                accent: "bg-cyan-500",
                title: "統計検定 DS基礎",
                description:
                  "Excel を使った実データ分析を中心に問う、データリテラシー入口の検定(統計学会主催)。理論より実務操作を重視。",
              },
              {
                href: "/certs/survey",
                chip: "Survey",
                emoji: "📋",
                accent: "bg-indigo-500",
                title: "統計調査士",
                description:
                  "社会調査の設計・実施、公的統計の知識を問う検定(統計学会主催)。行政・調査会社・公務員に実務直結。",
              },
              {
                href: "/certs/g-test",
                chip: "G Test",
                emoji: "🤖",
                accent: "bg-blue-500",
                title: "G検定(JDLA)",
                description:
                  "AI / ディープラーニングを事業に活かすための広範な知識を問う検定(日本ディープラーニング協会主催)。",
              },
              {
                href: "/certs/ds-literacy",
                chip: "DS Cert",
                emoji: "📈",
                accent: "bg-purple-500",
                title: "データサイエンティスト検定",
                description:
                  "DS 協会主催。DS 力 / DE 力 / ビジネス力 の 3 軸を測るリテラシーレベル検定。データ職入門に最適。",
              },
              {
                href: "/certs/genai-passport",
                chip: "GenAI",
                emoji: "✨",
                accent: "bg-pink-500",
                title: "生成AIパスポート",
                description:
                  "GUGA 主催。生成 AI を業務で安全 / 効果的に使うリテラシーを問う、全職種向けの入門検定。30 〜 50 時間で取得可能。",
              },
            ].map((cert) => (
              <Link
                key={cert.href}
                href={cert.href}
                className="paper rounded-xl overflow-hidden hover:-translate-y-0.5 transition group block flex flex-col"
              >
                <div
                  className={`h-1.5 w-full ${cert.accent}`}
                  aria-hidden="true"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      {cert.emoji}
                    </span>
                    <span className="chip-soft text-[10px]">{cert.chip}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2 group-hover:text-[var(--link)] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-strong)] leading-relaxed flex-1">
                    {cert.description}
                  </p>
                  <div className="mt-3 text-xs font-bold text-[var(--link)] ui-sans">
                    詳しく見る →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      <section className="mt-16 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-2xl font-bold mb-5">よくある質問</h2>
        <dl className="space-y-5">
          {HOME_FAQ.map((item, i) => (
            <div key={i} className="border-b border-[var(--page-border)] last:border-0 pb-5 last:pb-0">
              <dt className="font-bold mb-2 text-[var(--foreground)] flex items-baseline gap-2">
                <span className="text-[var(--link)] font-mono text-sm">Q.</span>
                <span>{item.q}</span>
              </dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-loose pl-6">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

    </div>
  );
}
