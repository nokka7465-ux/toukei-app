import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/lib/all-questions";
import { glossary } from "@/data/glossary";
import { introFormulas } from "@/data/formulas/intro";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";
import { BookmarksClient } from "./BookmarksClient";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ブックマーク",
  description:
    "ブックマークした問題・公式・用語をまとめて確認できる、あなた専用のページ。",
  alternates: { canonical: "/bookmarks" },
  robots: { index: false, follow: true },
};

const formulasByLevel: Record<string, { id: string; name: string; tex: string; description: string; category: string; level: string }[]> = {
  intro: introFormulas.map((f) => ({ ...f, level: "intro" })),
  "grade-4": gradeFourFormulas.map((f) => ({ ...f, level: "grade-4" })),
  "grade-3": gradeThreeFormulas.map((f) => ({ ...f, level: "grade-3" })),
  "grade-2": gradeTwoFormulas.map((f) => ({ ...f, level: "grade-2" })),
  "grade-pre1": gradePre1Formulas.map((f) => ({ ...f, level: "grade-pre1" })),
  "grade-1": gradeOneFormulas.map((f) => ({ ...f, level: "grade-1" })),
};

const allFormulas = Object.values(formulasByLevel).flat();

export default function BookmarksPage() {
  // Build registries to pass to the client component (so we can resolve
  // bookmark IDs into displayable items without re-importing on the client).
  const questionRegistry = tracks.flatMap((t) =>
    t.questions.map((q) => ({
      id: q.id,
      question: q.question,
      category: q.category,
      trackKey: t.key,
      trackLabel: t.label,
      trackHref: t.href,
    })),
  );

  const formulaRegistry = allFormulas.map((f) => ({
    id: f.id,
    name: f.name,
    tex: f.tex,
    description: f.description,
    category: f.category,
    level: f.level,
  }));

  const glossaryRegistry = glossary.map((g) => ({
    term: g.term,
    reading: g.reading,
    definition: g.definition,
    level: g.level,
    category: g.category,
    link: g.link,
  }));

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ブックマーク", href: "/bookmarks" },
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
        <span>ブックマーク</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Bookmarks</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">ブックマーク</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          各問題・公式・用語の右上にある ☆ マークを押すと、ここに集まります。後でじっくり見直したい項目を保存しておきましょう。データはお使いのブラウザにのみ保存されます。
        </p>
      </header>

      <BookmarksClient
        questions={questionRegistry}
        formulas={formulaRegistry}
        terms={glossaryRegistry}
      />
    </article>
  );
}
