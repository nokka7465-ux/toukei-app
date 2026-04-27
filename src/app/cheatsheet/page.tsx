import type { Metadata } from "next";
import Link from "next/link";
import { Math } from "@/components/Math";
import { PrintButton } from "@/components/PrintButton";
import { introFormulas } from "@/data/formulas/intro";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";
import type { Formula } from "@/types/content";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 公式チートシート ─ 全級の重要公式を 1 枚で印刷可能",
  description:
    "統計検定 入門編〜1 級の重要公式 99 項目を 1 ページに集約した、印刷可能な無料チートシート。試験前の最終確認や学習の振り返りに。",
  alternates: { canonical: "/cheatsheet" },
  openGraph: {
    title: "公式チートシート ─ 全級の重要公式を 1 枚に",
    description:
      "入門編〜1 級の重要公式を 1 ページに集約。印刷して試験前の最終確認に。",
    type: "article",
  },
};

const SECTIONS: { title: string; href: string; formulas: Formula[] }[] = [
  { title: "入門編", href: "/formulas/intro", formulas: introFormulas },
  { title: "4 級", href: "/formulas/grade-4", formulas: gradeFourFormulas },
  { title: "3 級", href: "/formulas/grade-3", formulas: gradeThreeFormulas },
  { title: "2 級", href: "/formulas/grade-2", formulas: gradeTwoFormulas },
  { title: "準 1 級", href: "/formulas/grade-pre1", formulas: gradePre1Formulas },
  { title: "1 級", href: "/formulas/grade-1", formulas: gradeOneFormulas },
];

export default function CheatsheetPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "公式チートシート", href: "/cheatsheet" },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6 print-hide"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>公式チートシート</span>
      </nav>

      <header className="mb-8 pb-4 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Cheatsheet</div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-2">
          公式チートシート
        </h1>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed max-w-3xl">
          統計検定 入門編〜1 級の重要公式を 1 ページに集約しました。**ブラウザの印刷機能(Ctrl/Cmd + P)** で A4 サイズに最適化された印刷ができます。試験前の最終確認や、学習の振り返りにご利用ください。
        </p>
        <div className="mt-3 flex flex-wrap gap-2 ui-sans text-xs print-hide">
          <PrintButton />
          <Link
            href="/math/textbook"
            className="px-3 py-1.5 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            数学基礎へ
          </Link>
        </div>
      </header>

      <div className="space-y-8">
        {SECTIONS.map((section) => {
          const byCategory = section.formulas.reduce<Record<string, Formula[]>>(
            (acc, f) => {
              (acc[f.category] ??= []).push(f);
              return acc;
            },
            {},
          );
          return (
            <section key={section.title}>
              <header className="mb-3 pb-2 border-b border-[var(--page-border-strong)] flex items-baseline justify-between flex-wrap gap-2">
                <h2 className="text-xl font-bold tracking-wide">
                  {section.title}
                </h2>
                <Link
                  href={section.href}
                  className="text-xs text-[var(--link)] hover:underline ui-sans print-hide"
                >
                  {section.title} の公式集ページへ →
                </Link>
              </header>
              {Object.entries(byCategory).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <div className="chapter-eyebrow mb-2">{category}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map((f) => (
                      <div
                        key={f.id}
                        className="paper rounded p-3 text-xs"
                      >
                        <div className="font-bold text-sm mb-1">{f.name}</div>
                        <div className="overflow-x-auto">
                          <Math tex={f.tex} block />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </div>

      <footer className="mt-10 pt-4 border-t border-[var(--page-border)] text-xs text-[var(--muted)] ui-sans print-hide">
        <p>
          各公式の詳しい意味と使い場面は、各級の{" "}
          <Link href="/textbook/grade-2" className="text-[var(--link)] hover:underline">
            教科書
          </Link>{" "}
          ・{" "}
          <Link href="/glossary" className="text-[var(--link)] hover:underline">
            用語集
          </Link>{" "}
          で確認できます。
        </p>
      </footer>
    </article>
  );
}
