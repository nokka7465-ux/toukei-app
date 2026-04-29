import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { mockConfigs } from "@/data/mock-config";
import { introQuestions } from "@/data/questions/intro";
import { gradeFourQuestions } from "@/data/questions/grade-4";
import { gradeThreeQuestions } from "@/data/questions/grade-3";
import { gradeTwoQuestions } from "@/data/questions/grade-2";
import { gradePre1Questions } from "@/data/questions/grade-pre1";
import { gradeOneQuestions } from "@/data/questions/grade-1";
import { MockExam } from "@/components/MockExam";
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
  const config = mockConfigs[level];
  if (!meta || !config) return {};
  const title = `${config.label} ─ 本番形式の無料模試`;
  const description = `統計検定 ${meta.title} の本番形式に近い模試。${config.timeMinutes} 分・${config.questionTarget} 問・合格基準 ${config.passPct}% で時間制限付き採点。受験履歴も記録されます。`;
  return {
    title,
    description,
    alternates: { canonical: `/mock/${level}` },
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function MockExamPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const questions = questionsByLevel[level];
  const config = mockConfigs[level];
  if (!meta || !questions || !config) notFound();

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "演習問題", href: "/quiz" },
          { name: `${meta.title} 模試`, href: `/mock/${level}` },
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
        <span>{meta.title} 模試</span>
      </nav>

      <header className="mb-8 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Mock Exam</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          {config.label}
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          {config.note}
        </p>
      </header>

      <MockExam
        trackKey={level}
        trackLabel={meta.title}
        questions={questions}
        timeMinutes={config.timeMinutes}
        questionTarget={config.questionTarget}
        passPct={config.passPct}
        practiceHref={`/quiz/${level}`}
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href={`/quiz/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← {meta.title} 通常演習
        </Link>
        <Link
          href={`/textbook/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← {meta.title} 教科書
        </Link>
      </nav>
    </article>
  );
}
