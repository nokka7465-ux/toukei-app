import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { introTextbook } from "@/data/textbooks/intro";
import { gradeFourTextbook } from "@/data/textbooks/grade-4";
import { gradeThreeTextbook } from "@/data/textbooks/grade-3";
import { gradeTwoTextbook } from "@/data/textbooks/grade-2";
import { gradePre1Textbook } from "@/data/textbooks/grade-pre1";
import { gradeOneTextbook } from "@/data/textbooks/grade-1";
import { TextbookBody } from "@/components/TextbookBody";
import { RecommendedBooks } from "@/components/RecommendedBooks";
import { ReadingTracker } from "@/components/ReadingTracker";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";
import type { Textbook } from "@/types/content";

const LEVEL_KEYWORDS: Record<string, { title: string; description: string; about: string[] }> = {
  intro: {
    title: "統計入門 教科書 ─ グラフ・割合・平均から学ぶ",
    description:
      "統計の入門編。グラフの読み方・割合・平均・中央値など、算数レベルから統計に親しめる超初心者向けの無料教科書。",
    about: ["記述統計", "代表値", "グラフ", "割合"],
  },
  "grade-4": {
    title: "統計検定 4級 教科書 ─ データの基本・確率の初歩",
    description:
      "統計検定 4級の出題範囲(データの代表値・ばらつき・確率・場合の数)を、章立てで読める教科書形式で無料解説。中高生・大人の入門に。",
    about: ["記述統計", "確率", "場合の数", "データの代表値", "ばらつき"],
  },
  "grade-3": {
    title: "統計検定 3級 教科書 ─ 推定・検定の基礎を無料解説",
    description:
      "統計検定 3級の出題範囲(記述統計・確率分布・推定・検定の基礎)を、Σ や標準偏差の式まで丁寧に追える教科書形式で無料解説。",
    about: ["記述統計", "確率分布", "正規分布", "推定", "検定", "区間推定"],
  },
  "grade-2": {
    title: "統計検定 2級 教科書 ─ 推定・検定・回帰分析",
    description:
      "統計検定 2級の出題範囲(推定・検定・回帰分析・分散分析・相関)を、データ分析実務に直結する形で無料解説。受験者数最多の本命級。",
    about: [
      "推定",
      "仮説検定",
      "回帰分析",
      "分散分析",
      "相関",
      "確率分布",
      "正規分布",
      "t分布",
      "カイ二乗分布",
    ],
  },
  "grade-pre1": {
    title: "統計検定 準1級 教科書 ─ 多変量解析・ベイズ・時系列",
    description:
      "統計検定 準1級の出題範囲(多変量解析・ベイズ統計・時系列・ノンパラ・実験計画)を、応用統計の幅広い手法として無料解説。",
    about: [
      "多変量解析",
      "主成分分析",
      "因子分析",
      "ベイズ統計",
      "時系列",
      "実験計画",
      "ノンパラメトリック",
    ],
  },
  "grade-1": {
    title: "統計検定 1級 教科書 ─ 数理統計学の理論を無料解説",
    description:
      "統計検定 1級の出題範囲(数理統計学・十分統計量・最尤推定・漸近理論・尤度比検定)を、研究志向で無料解説。",
    about: [
      "数理統計学",
      "最尤推定",
      "十分統計量",
      "漸近理論",
      "尤度比検定",
      "確率変数",
      "推測統計",
    ],
  },
};

const textbookByLevel: Record<string, Textbook> = {
  intro: introTextbook,
  "grade-4": gradeFourTextbook,
  "grade-3": gradeThreeTextbook,
  "grade-2": gradeTwoTextbook,
  "grade-pre1": gradePre1Textbook,
  "grade-1": gradeOneTextbook,
};

export function generateStaticParams() {
  return Object.keys(textbookByLevel).map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const book = textbookByLevel[level];
  if (!meta || !book) return {};
  const seo = LEVEL_KEYWORDS[level];
  const title = seo?.title ?? `${meta.title} 教科書`;
  const description =
    seo?.description ??
    `統計検定 ${meta.title} の出題範囲を、章立てで読める教科書形式で解説。${book.intro.slice(0, 80)}`;
  return {
    title,
    description,
    alternates: { canonical: `/textbook/${level}` },
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TextbookPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const book = textbookByLevel[level];
  if (!meta || !book) notFound();
  const seo = LEVEL_KEYWORDS[level];

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "教科書一覧", href: "/textbook" },
          { name: `${meta.title} 教科書`, href: `/textbook/${level}` },
        ]}
      />
      <CourseJsonLd
        name={`統計検定 ${meta.title} 教科書`}
        description={seo?.description ?? `統計検定 ${meta.title} の出題範囲を、章立てで読める教科書形式で無料解説。`}
        url={`/textbook/${level}`}
        educationalLevel={meta.title}
        about={seo?.about}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>教科書</span>
        <span className="mx-2">›</span>
        <span>{meta.title}</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Textbook</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">{book.title}</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          {book.intro}
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-6">
        <h2 className="text-sm chapter-eyebrow mb-3">目次</h2>
        <ol className="space-y-3 ui-sans">
          {book.chapters.map((ch) => (
            <li key={ch.id}>
              <div className="font-bold text-[var(--foreground)]">
                第 {ch.number} 章 · {ch.title}
              </div>
              {ch.overview && (
                <div className="text-xs text-[var(--muted)] mt-1">
                  {ch.overview}
                </div>
              )}
              <ul className="mt-2 ml-4 space-y-1 text-sm">
                {ch.sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="text-[var(--link)] hover:underline"
                    >
                      {sec.number} {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {(() => {
        const flatSections = book.chapters.flatMap((ch) => ch.sections);
        const indexOf: Record<string, number> = {};
        flatSections.forEach((sec, i) => {
          indexOf[sec.id] = i;
        });
        return (
          <div className="space-y-16">
            <ReadingTracker sectionIds={flatSections.map((s) => s.id)} />
            {book.chapters.map((ch) => (
              <section key={ch.id}>
                <header className="mb-6">
                  <div className="chapter-eyebrow mb-1">
                    Chapter {ch.number}
                  </div>
                  <h2 className="text-2xl font-bold tracking-wide">
                    第 {ch.number} 章 · {ch.title}
                  </h2>
                  <hr className="rule-double mt-3" />
                </header>
                <div className="space-y-12">
                  {ch.sections.map((sec) => {
                    const idx = indexOf[sec.id];
                    const prev = flatSections[idx - 1];
                    const next = flatSections[idx + 1];
                    return (
                      <section
                        key={sec.id}
                        id={sec.id}
                        className="paper rounded-lg p-8 scroll-mt-20"
                      >
                        <header className="mb-4">
                          <div className="chapter-eyebrow mb-1">
                            §{sec.number}
                          </div>
                          <h3 className="text-xl font-bold">{sec.title}</h3>
                        </header>
                        <TextbookBody blocks={sec.blocks} />
                        <nav className="mt-8 pt-4 border-t border-[var(--page-border)] flex justify-between gap-3 text-xs ui-sans">
                          {prev ? (
                            <a
                              href={`#${prev.id}`}
                              className="text-[var(--link)] hover:underline max-w-[45%]"
                            >
                              ← {prev.number} {prev.title}
                            </a>
                          ) : (
                            <span />
                          )}
                          {next ? (
                            <a
                              href={`#${next.id}`}
                              className="text-[var(--link)] hover:underline text-right max-w-[45%]"
                            >
                              {next.number} {next.title} →
                            </a>
                          ) : (
                            <Link
                              href={`/quiz/${level}`}
                              className="text-[var(--link)] hover:underline text-right max-w-[45%]"
                            >
                              問題を解いてみる →
                            </Link>
                          )}
                        </nav>
                      </section>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        );
      })()}

      <RecommendedBooks level={level} levelTitle={meta.title} />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href={`/formulas/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          {meta.title} の公式集 →
        </Link>
        <Link
          href={`/quiz/${level}`}
          className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)]"
        >
          {meta.title} の問題を解く →
        </Link>
      </nav>
    </article>
  );
}
