import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/data/levels";
import { externalLinks } from "@/data/external-links";
import { blogPosts } from "@/data/blog";

const availableLevels = new Set<string>([
  "intro",
  "grade-4",
  "grade-3",
  "grade-2",
  "grade-pre1",
  "grade-1",
]);

const HOME_TITLE = "統計検定 学習帳 | 4級〜1級対応の無料学習サイト";
const HOME_DESCRIPTION =
  "統計検定4級〜1級に対応した無料学習サイト。教科書・公式集・演習問題をすべて無料で学習できます。データサイエンスやPythonと組み合わせた実践的な統計学習にも対応。";

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
            通常の統計検定(4級〜1級)とは別の系統。実務志向(DS基礎)・調査志向(統計調査士)で目的に応じて選べます。
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
                Excel を使った実データ分析を中心に問う、データリテラシー入口の検定。理論より実務操作を重視。
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
                社会調査の設計・実施、公的統計の知識を問う検定。行政・調査会社・公務員に実務直結。上位は専門統計調査士。
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                詳しく見る →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
