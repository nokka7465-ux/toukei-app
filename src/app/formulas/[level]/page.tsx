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
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>公式集</span>
        <span className="mx-2">›</span>
        <span>{meta.title}</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Formula Reference</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          {meta.title} 公式集
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          {meta.description}
        </p>
      </header>

      <div className="space-y-12">
        {Object.entries(byCategory).map(([category, items]) => (
          <section key={category}>
            <header className="mb-4">
              <div className="chapter-eyebrow mb-1">Category</div>
              <h2 className="text-xl font-bold pb-2 border-b border-[var(--page-border-strong)]">
                {category}
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-4">
              {items.map((f) => (
                <div key={f.id} className="paper rounded-lg p-5">
                  <div className="font-bold text-base mb-3">{f.name}</div>
                  <Math tex={f.tex} block />
                  <p className="text-sm text-[var(--muted-strong)] mt-3 leading-relaxed">
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
          <section className="mt-14 pt-6 border-t-2 border-[var(--page-border-strong)]">
            <div className="chapter-eyebrow mb-1">Recommended</div>
            <h2 className="text-xl font-bold mb-2">
              {meta.title} のおすすめ参考書
            </h2>
            <p className="text-xs text-[var(--muted)] mb-5 ui-sans leading-relaxed">
              {isAffiliateEnabled
                ? "当サイトは Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon アソシエイト・プログラムの参加者です。"
                : "以下は学習の参考となる書籍の紹介です。各リンクから Amazon の検索結果に遷移します。"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {books.map((b) => (
                <a
                  key={b.title}
                  href={amazonSearchUrl(b.title)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="paper block p-5 rounded-lg hover:-translate-y-0.5 transition"
                >
                  <div className="font-bold text-sm mb-1">{b.title}</div>
                  {b.publisher && (
                    <div className="text-xs text-[var(--muted)] mb-2 ui-sans">
                      {b.publisher}
                    </div>
                  )}
                  {b.note && (
                    <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                      {b.note}
                    </p>
                  )}
                  <div className="mt-2 text-xs text-[var(--link)] ui-sans">
                    Amazon で見る →
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })()}

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href={`/textbook/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← {meta.title} の教科書を読む
        </Link>
        <Link
          href={`/quiz/${level}`}
          className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-strong)]"
        >
          {meta.title} の問題を解く →
        </Link>
      </nav>
    </article>
  );
}
