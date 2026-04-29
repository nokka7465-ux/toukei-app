import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { introQuestions } from "@/data/questions/intro";
import { gradeFourQuestions } from "@/data/questions/grade-4";
import { gradeThreeQuestions } from "@/data/questions/grade-3";
import { gradeTwoQuestions } from "@/data/questions/grade-2";
import { gradePre1Questions } from "@/data/questions/grade-pre1";
import { gradeOneQuestions } from "@/data/questions/grade-1";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Question } from "@/types/content";

const questionsByLevel: Record<string, Question[]> = {
  intro: introQuestions,
  "grade-4": gradeFourQuestions,
  "grade-3": gradeThreeQuestions,
  "grade-2": gradeTwoQuestions,
  "grade-pre1": gradePre1Questions,
  "grade-1": gradeOneQuestions,
};

export function generateStaticParams() {
  return Object.keys(questionsByLevel).map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const questions = questionsByLevel[level];
  if (!meta || !questions) return {};
  const title = `統計検定 ${meta.title} 演習問題 ─ ${questions.length} 問の無料類題`;
  const description = `統計検定 ${meta.title} のオリジナル類題を ${questions.length} 問収録した無料演習問題集。各問題に ★☆☆ 基礎 / ★★☆ 標準 / ★★★ 応用 の難易度バッジ付き。自動採点で実力チェックできます。`;
  return {
    title,
    description,
    alternates: { canonical: `/quiz/${level}` },
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const questions = questionsByLevel[level];
  if (!meta || !questions) notFound();

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "演習問題", href: "/quiz" },
          { name: `${meta.title} 演習問題`, href: `/quiz/${level}` },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <Link href="/quiz" className="hover:underline">
          演習問題
        </Link>
        <span className="mx-2">›</span>
        <span>{meta.title}</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          {meta.title} 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {questions.length}{" "}
          問のオリジナル類題。各問題に ★☆☆ 基礎 / ★★☆ 標準 / ★★★ 応用 の難易度バッジが付いています。すべて選択したら「採点する」を押してください。
        </p>
      </header>

      <Quiz
        questions={questions}
        quizKey={level}
        shareUrl={`https://toukei-app.com/quiz/${level}`}
        shareLabel={`統計検定 ${meta.title} の演習問題`}
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href={`/textbook/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← {meta.title} の教科書を読む
        </Link>
        <Link
          href={`/formulas/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← {meta.title} の公式集
        </Link>
      </nav>
    </article>
  );
}
