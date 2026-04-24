import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";
import { booksByLevel, amazonSearchUrl, isAffiliateEnabled } from "@/data/books";
import { Math } from "@/components/Math";
import type { Formula } from "@/types/content";

const formulasByLevel: Record<string, Formula[]> = {
  "grade-4": gradeFourFormulas,
  "grade-3": gradeThreeFormulas,
  "grade-2": gradeTwoFormulas,
  "grade-pre1": gradePre1Formulas,
  "grade-1": gradeOneFormulas,
};

export function generateStaticParams() {
  return Object.keys(formulasByLevel).map((level) => ({ level }));
}

export default async function FormulaPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const formulas = formulasByLevel[level];
  if (!meta || !formulas) notFound();

  const byCategory = formulas.reduce<Record<string, Formula[]>>((acc, f) => {
    (acc[f.category] ??= []).push(f);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline"
        >
          ← ホーム
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-1">{meta.title} 公式集</h1>
      <p className="text-sm text-gray-500 mb-8">{meta.description}</p>

      <div className="space-y-10">
        {Object.entries(byCategory).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-200 dark:border-gray-800">
              {category}
            </h2>
            <div className="space-y-3">
              {items.map((f) => (
                <div
                  key={f.id}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg"
                >
                  <div className="font-bold mb-2">{f.name}</div>
                  <Math tex={f.tex} block />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {(() => {
        const books = booksByLevel[level] ?? [];
        if (books.length === 0) return null;
        return (
          <section className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-bold mb-1">{meta.title} のおすすめ参考書</h2>
            <p className="text-xs text-gray-500 mb-4">
              {isAffiliateEnabled
                ? "当サイトは Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon アソシエイト・プログラムの参加者です。"
                : "以下は学習の参考となる書籍の紹介です。各リンクから Amazon の検索結果に遷移します。"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {books.map((b) => (
                <a
                  key={b.title}
                  href={amazonSearchUrl(b.title)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md hover:border-blue-400 transition"
                >
                  <div className="font-bold text-sm mb-1">{b.title}</div>
                  {b.publisher && (
                    <div className="text-xs text-gray-500 mb-2">{b.publisher}</div>
                  )}
                  {b.note && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {b.note}
                    </p>
                  )}
                  <div className="mt-2 text-xs text-blue-600">
                    Amazon で見る →
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })()}

      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
        <Link
          href={`/quiz/${level}`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          {meta.title} の問題を解く →
        </Link>
      </div>
    </div>
  );
}
