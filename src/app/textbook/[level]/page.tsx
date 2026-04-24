import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { gradeFourTextbook } from "@/data/textbooks/grade-4";
import { gradeThreeTextbook } from "@/data/textbooks/grade-3";
import { gradeTwoTextbook } from "@/data/textbooks/grade-2";
import { gradePre1Textbook } from "@/data/textbooks/grade-pre1";
import { gradeOneTextbook } from "@/data/textbooks/grade-1";
import { TextbookBody } from "@/components/TextbookBody";
import { RecommendedBooks } from "@/components/RecommendedBooks";
import type { Textbook } from "@/types/content";

const textbookByLevel: Record<string, Textbook> = {
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
  const title = `${meta.title} 教科書`;
  const description = `統計検定 ${meta.title} の出題範囲を、章立てで読める教科書形式で解説。${book.intro.slice(0, 80)}`;
  return {
    title,
    description,
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

  return (
    <article>
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

      <div className="space-y-16">
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
              {ch.sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="paper rounded-lg p-8 scroll-mt-20"
                >
                  <header className="mb-4">
                    <div className="chapter-eyebrow mb-1">
                      §{sec.number}
                    </div>
                    <h3 className="text-xl font-bold">
                      {sec.title}
                    </h3>
                  </header>
                  <TextbookBody blocks={sec.blocks} />
                </section>
              ))}
            </div>
          </section>
        ))}
      </div>

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
