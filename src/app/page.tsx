import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/data/levels";
import { externalLinks } from "@/data/external-links";

const availableLevels = new Set<string>([
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
            href="/textbook/grade-4"
            className="px-4 py-2 bg-[var(--accent)] text-white rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            4級の教科書を読む →
          </Link>
          <Link
            href="/formulas/grade-4"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            4級の公式集
          </Link>
          <Link
            href="/quiz/grade-4"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            4級の問題を解く
          </Link>
        </div>
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
            受験したい級、または自分のレベルに合った級を選んでください。4級が最も基礎的で、1級が最上位です。
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
                      className="px-3 py-1.5 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-strong)]"
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
      </section>
    </div>
  );
}
