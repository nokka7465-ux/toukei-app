import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { levels } from "@/data/levels";
import { introFormulas } from "@/data/formulas/intro";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";
import { Math } from "@/components/Math";
import { BookmarkButton } from "@/components/BookmarkButton";
import { RecommendedBooks } from "@/components/RecommendedBooks";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Formula } from "@/types/content";

const formulasByLevel: Record<string, Formula[]> = {
  intro: introFormulas,
  "grade-4": gradeFourFormulas,
  "grade-3": gradeThreeFormulas,
  "grade-2": gradeTwoFormulas,
  "grade-pre1": gradePre1Formulas,
  "grade-1": gradeOneFormulas,
};

export function generateStaticParams() {
  return Object.keys(formulasByLevel).map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}): Promise<Metadata> {
  const { level } = await params;
  const meta = levels.find((l) => l.slug === level);
  const formulas = formulasByLevel[level];
  if (!meta || !formulas) return {};
  const title = `統計検定 ${meta.title} 公式集 ─ ${formulas.length} 項目の無料公式まとめ`;
  const description = `統計検定 ${meta.title} の重要公式 ${formulas.length} 項目をカテゴリ別にまとめた無料公式集。${meta.description}`;
  return {
    title,
    description,
    alternates: { canonical: `/formulas/${level}` },
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
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
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "公式集", href: "/formulas" },
          { name: `${meta.title} 公式集`, href: `/formulas/${level}` },
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
        <Link href="/formulas" className="hover:underline">
          公式集
        </Link>
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
                <div
                  key={f.id}
                  id={f.id}
                  className="paper rounded-lg p-5 scroll-mt-20"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="font-bold text-base">{f.name}</div>
                    <BookmarkButton kind="formula" id={f.id} context={level} />
                  </div>
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

      <RecommendedBooks level={level} levelTitle={meta.title} />


      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href={`/textbook/${level}`}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← {meta.title} の教科書を読む
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
