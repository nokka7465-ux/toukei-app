import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/data/levels";
import { externalLinks } from "@/data/external-links";
import { blogPosts } from "@/data/blog";
import { FaqJsonLd } from "@/components/StructuredData";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { DailyProblem } from "@/components/DailyProblem";
import { AchievementsPanel } from "@/components/AchievementsPanel";
import { AiRoadmap } from "@/components/AiRoadmap";

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

      <DailyProblem />

      <ProgressDashboard />

      <AchievementsPanel />

      <section className="mb-14 md:mb-20 paper rounded-xl p-6 md:p-8">
        <div className="chapter-eyebrow mb-2 text-center">Quick Search</div>
        <h2 className="text-lg font-bold mb-3 text-center">
          用語・公式・トピックを横断検索
        </h2>
        <form
          action="/search"
          method="get"
          className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto"
          role="search"
        >
          <label htmlFor="home-search" className="sr-only">
            サイト内検索
          </label>
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="home-search"
              type="search"
              name="q"
              placeholder="例: 正規分布、p 値、ベイズ、回帰係数 ..."
              className="w-full pl-9 pr-3 py-2.5 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)]"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold text-sm hover:bg-[var(--accent-strong)] ui-sans"
          >
            検索
          </button>
        </form>
        <p className="mt-3 text-center text-[11px] text-[var(--muted)] ui-sans">
          教科書本文 · 用語集(意味の候補も提案) · 公式集 · ブログ を横断検索
        </p>
      </section>

      <section className="mb-14 md:mb-20 paper rounded-xl p-7 md:p-8">
        <div className="chapter-eyebrow mb-2">For Beginners</div>
        <h2 className="text-2xl font-bold mb-3">初めての方へ</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-4">
          全体像を把握したい方は{" "}
          <Link
            href="/roadmap"
            className="text-[var(--link)] hover:underline font-bold"
          >
            学習ロードマップ
          </Link>
          、どの級から始めればいいか迷うときは{" "}
          <Link href="/diagnose" className="text-[var(--link)] hover:underline font-bold">
            3 問の級診断
          </Link>{" "}
          をどうぞ。学習中に用語の意味をすぐ確認したいときは{" "}
          <Link
            href="/glossary"
            className="text-[var(--link)] hover:underline font-bold"
          >
            用語集
          </Link>{" "}
          が便利です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose mb-4">
          統計を学び始める方は、まず <strong>4級の教科書</strong>{" "}
          からスタートするのがおすすめです。データの代表値・ばらつき・確率・場合の数といった土台を、身近な例とともに明朝体の読み物として読み進められます。各問題に付く難易度バッジ(
          <span className="inline-block mx-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 tracking-wider ui-sans">
            ★☆☆ 基礎
          </span>
          <span className="inline-block mx-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 tracking-wider ui-sans">
            ★★☆ 標準
          </span>
          <span className="inline-block mx-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 tracking-wider ui-sans">
            ★★★ 応用
          </span>
          )を目印に、無理のない順で力をつけていけます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/diagnose"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            級診断を受ける →
          </Link>
          <Link
            href="/figures"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            図解で学ぶ統計
          </Link>
          <Link
            href="/explore"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            動かして学ぶ統計
          </Link>
          <Link
            href="/tools"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            統計計算ツール
          </Link>
          <Link
            href="/exam-info"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            受験情報まとめを見る
          </Link>
          <Link
            href="/textbook/grade-4"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            4級の教科書を読む
          </Link>
          <Link
            href="/quiz/grade-4"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            4級の問題を解く
          </Link>
        </div>
      </section>

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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...blogPosts]
            .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
            .slice(0, 3)
            .map((post) => {
              const cat = post.category;
              const theme =
                cat === "ロードマップ"
                  ? {
                      grad: "from-blue-500 to-indigo-600",
                      emoji: "🗺",
                    }
                  : cat === "Python"
                    ? {
                        grad: "from-yellow-400 to-blue-600",
                        emoji: "🐍",
                      }
                    : cat === "級選び"
                      ? {
                          grad: "from-emerald-500 to-sky-600",
                          emoji: "🎯",
                        }
                      : cat === "学習法"
                        ? {
                            grad: "from-amber-500 to-rose-600",
                            emoji: "📝",
                          }
                        : {
                            grad: "from-slate-500 to-slate-700",
                            emoji: "📰",
                          };
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

      <section className="mb-14 md:mb-20 paper rounded-xl p-7 md:p-8">
        <div className="chapter-eyebrow mb-2">More</div>
        <h2 className="text-2xl font-bold mb-3">もっと深く学びたい方へ</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-4 text-sm">
          サイト本編に加え、<strong>note</strong> での詳細解説記事、
          <strong>BOOTH</strong>{" "}
          での問題集 PDF など、より深く学べる有料・無料コンテンツを順次公開予定です。
        </p>
        <div className="flex flex-wrap gap-3 ui-sans text-sm">
          {externalLinks.note ? (
            <a
              href={externalLinks.note}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)] flex items-center gap-2"
            >
              <span className="font-bold">note</span>
              <span className="text-xs text-[var(--muted)]">詳細解説記事</span>
            </a>
          ) : (
            <div className="px-4 py-2 border border-dashed border-[var(--page-border)] rounded text-[var(--muted)] flex items-center gap-2">
              <span className="font-bold">note</span>
              <span className="text-xs">準備中</span>
            </div>
          )}
          {externalLinks.booth ? (
            <a
              href={externalLinks.booth}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)] flex items-center gap-2"
            >
              <span className="font-bold">BOOTH</span>
              <span className="text-xs text-[var(--muted)]">問題集 PDF</span>
            </a>
          ) : (
            <div className="px-4 py-2 border border-dashed border-[var(--page-border)] rounded text-[var(--muted)] flex items-center gap-2">
              <span className="font-bold">BOOTH</span>
              <span className="text-xs">準備中</span>
            </div>
          )}
        </div>
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
              データ系資格の 4 つのパス。実務志向・調査志向・AI 概念・データ全方位リテラシーから目的に応じて選べます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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

        {/* Math foundations - learning support */}
        <div className="mt-6 pt-6 border-t border-dashed border-[var(--page-border-strong)]">
          <div className="chapter-eyebrow mb-3 text-center">
            ─ 学習サポート ─
          </div>
          <p className="text-xs text-[var(--muted)] text-center mb-5 ui-sans">
            統計学の式が読めない・前提の数学が不安、というときの補助教材。級の学習中に必要な章だけピンポイントで参照できます。
          </p>
          <div className="grid grid-cols-1 gap-5">
            <Link
              href="/math"
              className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block"
            >
              <div className="chapter-eyebrow mb-1">Math Foundations</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--link)]">
                統計のための数学基礎
              </h3>
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                割合・百分率・総和記号 Σ・指数対数・微分積分・線形代数 ─ 統計学を学ぶうえで前提となる数学を、必要なところだけ抜粋した補助教材。
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                詳しく見る →
              </div>
            </Link>
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

      <section className="mt-12">
        <header className="mb-5">
          <span className="chip-soft mb-2">Quick Navigation</span>
          <h2 className="text-2xl font-bold mt-2">学習目的から探す</h2>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
            よくある学習目的別に、次に読むページをまとめました。
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ui-sans text-sm">
          {[
            {
              chip: "Exam",
              icon: "📚",
              title: "試験合格を目指す",
              accent: "bg-emerald-500",
              links: [
                { href: "/diagnose", label: "3 問の級診断" },
                { href: "/roadmap", label: "学習ロードマップ(時間目安)" },
                { href: "/exam-info", label: "受験情報まとめ(日程・受験料)" },
                { href: "/cheatsheet", label: "公式チートシート(印刷可)" },
              ],
            },
            {
              chip: "Concepts",
              icon: "🧠",
              title: "概念を理解したい",
              accent: "bg-sky-500",
              links: [
                { href: "/figures", label: "図解で学ぶ統計(SVG 29 種)" },
                { href: "/explore", label: "動かして学ぶ統計(対話的)" },
                { href: "/glossary", label: "統計用語集" },
                { href: "/math", label: "統計のための数学基礎" },
              ],
            },
            {
              chip: "Practice",
              icon: "🛠",
              title: "実務で使いたい",
              accent: "bg-violet-500",
              links: [
                { href: "/tools", label: "統計計算ツール集(信頼区間・p 値)" },
                { href: "/textbook/grade-2", label: "統計検定 2 級 教科書" },
                { href: "/certs/ds-literacy", label: "DS 検定 対策" },
                { href: "/certs/ds-basic", label: "DS 基礎 対策(Excel)" },
              ],
            },
            {
              chip: "AI / DL",
              icon: "🤖",
              title: "AI / DL を学ぶ",
              accent: "bg-amber-500",
              links: [
                { href: "/certs/g-test", label: "G 検定 対策(JDLA)" },
                { href: "/certs/e-shikaku", label: "E 資格 対策(エンジニア向け)" },
                { href: "/textbook/grade-pre1", label: "準 1 級 教科書(多変量・ベイズ)" },
                { href: "/blog", label: "学習ブログ" },
              ],
            },
          ].map((card) => (
            <article
              key={card.title}
              className="paper rounded-xl overflow-hidden flex flex-col"
            >
              <div className={`h-1 w-full ${card.accent}`} aria-hidden="true" />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">
                    {card.icon}
                  </span>
                  <span className="chip-soft text-[10px]">{card.chip}</span>
                </div>
                <h3 className="font-bold text-base mb-3 text-[var(--foreground)]">
                  {card.title}
                </h3>
                <ul className="space-y-2 text-xs flex-1">
                  {card.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[var(--link)] hover:underline inline-flex items-center gap-1"
                      >
                        <span aria-hidden="true">→</span>
                        <span>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
