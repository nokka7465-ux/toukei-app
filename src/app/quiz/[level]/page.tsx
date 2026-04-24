import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { gradeFourQuestions } from "@/data/questions/grade-4";
import { gradeThreeQuestions } from "@/data/questions/grade-3";
import { gradeTwoQuestions } from "@/data/questions/grade-2";
import { gradePre1Questions } from "@/data/questions/grade-pre1";
import { gradeOneQuestions } from "@/data/questions/grade-1";
import { Quiz } from "@/components/Quiz";
import type { Question } from "@/types/content";

const questionsByLevel: Record<string, Question[]> = {
  "grade-4": gradeFourQuestions,
  "grade-3": gradeThreeQuestions,
  "grade-2": gradeTwoQuestions,
  "grade-pre1": gradePre1Questions,
  "grade-1": gradeOneQuestions,
};

export function generateStaticParams() {
  return Object.keys(questionsByLevel).map((level) => ({ level }));
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
    <div>
      <div className="mb-6">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← ホーム
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-1">
        {meta.title} 過去問(オリジナル類題)
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        全 {questions.length} 問。すべて選択したら「採点する」を押してください。
      </p>

      <Quiz questions={questions} />

      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
        <Link
          href={`/formulas/${level}`}
          className="text-sm text-blue-600 hover:underline"
        >
          ← {meta.title} の公式集を見る
        </Link>
      </div>
    </div>
  );
}
