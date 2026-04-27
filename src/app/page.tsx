import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/data/levels";
import { externalLinks } from "@/data/external-links";
import { blogPosts } from "@/data/blog";
import { FaqJsonLd } from "@/components/StructuredData";

const availableLevels = new Set<string>([
  "intro",
  "grade-4",
  "grade-3",
  "grade-2",
  "grade-pre1",
  "grade-1",
]);

const HOME_TITLE = "統計検定 学習帳 ─ 4級〜1級・関連検定 7 種の無料学習サイト";
const HOME_DESCRIPTION =
  "統計検定 4 級〜1 級に対応した無料学習サイト。教科書・公式集・演習問題に加え、関連検定 7 種(DS基礎・統計調査士・専門統計調査士・G検定・E資格・DS検定・QC検定)も完全無料。インタラクティブ図解・統計計算ツール・Python/R コード併記など、検定対策本にない学習体験を提供。";

const HOME_FAQ = [
  {
    q: "統計検定 学習帳は無料で利用できますか?",
    a: "はい、教科書・公式集・演習問題・統計計算ツール・図解 ─ サイト上のすべてのコンテンツを完全無料でご利用いただけます。会員登録も不要です。",
  },
  {
    q: "統計検定はどの級から始めるのがおすすめですか?",
    a: "統計学を初めて学ぶ方は『入門編』、高校数学を経験している方は『4級』、大学初年度の確率統計を理解したい方は『3級』、データ分析の実務知識を身につけたい方は『2級』からの開始がおすすめです。3 問の級診断で目安を出せます。",
  },
  {
    q: "関連検定は何が対策できますか?",
    a: "DS基礎・統計調査士・専門統計調査士・G検定・E資格・DS検定・QC検定の 7 種について、教科書・演習問題・受験情報を提供しています。データ・AI・調査・品質管理の各方向に応じて選択できます。",
  },
  {
    q: "Python や R のコードはありますか?",
    a: "はい、教科書・図解の各章に Python(NumPy/SciPy/Pandas)と R のコード例を併記しています。理論を式で理解した後、コードで動かして再確認できます。",
  },
  {
    q: "スマートフォンでも使えますか?",
    a: "はい、レスポンシブ対応済みでスマートフォン・タブレット・PC のいずれからも快適に学習できます。インタラクティブ図解もタッチ操作に対応。",
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
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <FaqJsonLd entries={HOME_FAQ} />
      <section className="mb-12 text-center py-8">
        <div className="chapter-eyebrow mb-3">Toukei Study Book</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-[0.1em]">
          統計検定 学習帳
        </h1>
        <hr className="rule-double max-w-xs mx-auto" />
        <p className="text-[var(--muted-strong)] leading-loose max-w-2xl mx-auto mt-4">
          統計検定4級〜1級に対応した、読み物としても楽しめる教科書仕立ての学習サイト。
          <br className="hidden md:block" />
          各級の<strong>教科書本文</strong>で概念を学び、<strong>公式集</strong>
          で知識を整理し、<strong>選択式の演習</strong>で理解を確かめられます。
        </p>
      </section>

      <section className="mb-12 paper rounded-lg p-6 md:p-7">
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

      <section className="mb-12 paper rounded-lg p-7">
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

      <section className="mb-12">
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
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...blogPosts]
            .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
            .slice(0, 3)
            .map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="paper block p-5 rounded-lg hover:-translate-y-0.5 transition group h-full"
                >
                  <div className="ui-sans text-[10px] text-[var(--muted)] mb-2 flex items-center gap-2">
                    <span>{post.publishedAt}</span>
                    <span className="px-1.5 py-0.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="font-bold text-sm mb-2 group-hover:text-[var(--link)] leading-snug">
                    {post.title}
                  </div>
                  <div className="text-xs text-[var(--muted-strong)] leading-relaxed line-clamp-3">
                    {post.description}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="mb-12 paper rounded-lg p-7">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <div className="mt-6 pt-6 border-t border-dashed border-[var(--page-border-strong)]">
          <div className="chapter-eyebrow mb-3 text-center">
            ─ 関連検定(別系統) ─
          </div>
          <p className="text-xs text-[var(--muted)] text-center mb-5 ui-sans">
            データ系資格の 4 つのパス。実務志向・調査志向・AI 概念・データ全方位リテラシーから、目的に応じて選べます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              href="/certs/ds-basic"
              className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block"
            >
              <div className="chapter-eyebrow mb-1">DS Base</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--link)]">
                統計検定 データサイエンス基礎
              </h3>
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                Excel を使った実データ分析を中心に問う、データリテラシー入口の検定(統計学会主催)。理論より実務操作を重視。
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                詳しく見る →
              </div>
            </Link>
            <Link
              href="/certs/survey"
              className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block"
            >
              <div className="chapter-eyebrow mb-1">Survey</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--link)]">
                統計調査士
              </h3>
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                社会調査の設計・実施、公的統計の知識を問う検定(統計学会主催)。行政・調査会社・公務員に実務直結。
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                詳しく見る →
              </div>
            </Link>
            <Link
              href="/certs/g-test"
              className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block"
            >
              <div className="chapter-eyebrow mb-1">G Test</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--link)]">
                G検定(JDLA)
              </h3>
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                AI / ディープラーニングを事業に活かすための広範な知識を問う検定(日本ディープラーニング協会主催)。
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                詳しく見る →
              </div>
            </Link>
            <Link
              href="/certs/ds-literacy"
              className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block"
            >
              <div className="chapter-eyebrow mb-1">DS Cert</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--link)]">
                データサイエンティスト検定
              </h3>
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                DS 協会主催。DS 力 / DE 力 / ビジネス力 の 3 軸を測るリテラシーレベル検定。データ職入門に最適。
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                詳しく見る →
              </div>
            </Link>
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
        <div className="mb-5">
          <div className="chapter-eyebrow mb-1">Quick Navigation</div>
          <h2 className="text-2xl font-bold">学習目的から探す</h2>
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
            よくある学習目的別に、次に読むページをまとめました。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ui-sans text-sm">
          <div className="paper p-5 rounded-lg">
            <div className="font-bold mb-2 text-[var(--foreground)]">📚 試験合格を目指す</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/diagnose" className="text-[var(--link)] hover:underline">3 問の級診断 →</Link></li>
              <li><Link href="/roadmap" className="text-[var(--link)] hover:underline">学習ロードマップ(時間目安)→</Link></li>
              <li><Link href="/exam-info" className="text-[var(--link)] hover:underline">受験情報まとめ(日程・受験料)→</Link></li>
              <li><Link href="/cheatsheet" className="text-[var(--link)] hover:underline">公式チートシート(印刷可)→</Link></li>
            </ul>
          </div>
          <div className="paper p-5 rounded-lg">
            <div className="font-bold mb-2 text-[var(--foreground)]">🧠 概念を理解したい</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/figures" className="text-[var(--link)] hover:underline">図解で学ぶ統計(SVG 29 種)→</Link></li>
              <li><Link href="/explore" className="text-[var(--link)] hover:underline">動かして学ぶ統計(対話的)→</Link></li>
              <li><Link href="/glossary" className="text-[var(--link)] hover:underline">統計用語集 →</Link></li>
              <li><Link href="/math" className="text-[var(--link)] hover:underline">統計のための数学基礎 →</Link></li>
            </ul>
          </div>
          <div className="paper p-5 rounded-lg">
            <div className="font-bold mb-2 text-[var(--foreground)]">🛠 実務で使いたい</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/tools" className="text-[var(--link)] hover:underline">統計計算ツール集(信頼区間・p 値)→</Link></li>
              <li><Link href="/textbook/grade-2" className="text-[var(--link)] hover:underline">統計検定 2 級 教科書 →</Link></li>
              <li><Link href="/certs/ds-literacy" className="text-[var(--link)] hover:underline">DS 検定 対策 →</Link></li>
              <li><Link href="/certs/ds-basic" className="text-[var(--link)] hover:underline">DS 基礎 対策(Excel)→</Link></li>
            </ul>
          </div>
          <div className="paper p-5 rounded-lg">
            <div className="font-bold mb-2 text-[var(--foreground)]">🤖 AI / DL を学ぶ</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/certs/g-test" className="text-[var(--link)] hover:underline">G 検定 対策(JDLA)→</Link></li>
              <li><Link href="/certs/e-shikaku" className="text-[var(--link)] hover:underline">E 資格 対策(エンジニア向け)→</Link></li>
              <li><Link href="/textbook/grade-pre1" className="text-[var(--link)] hover:underline">準 1 級 教科書(多変量・ベイズ)→</Link></li>
              <li><Link href="/blog" className="text-[var(--link)] hover:underline">学習ブログ →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
