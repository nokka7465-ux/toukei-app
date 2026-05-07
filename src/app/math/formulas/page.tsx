import type { Metadata } from "next";
import Link from "next/link";
import { mathBasicsFormulas } from "@/data/formulas/math";
import { Math } from "@/components/Math";
import { BookmarkButton } from "@/components/BookmarkButton";
import { PrintButton } from "@/components/PrintButton";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Formula } from "@/types/content";

const TOTAL = mathBasicsFormulas.length;

export const metadata: Metadata = {
  title: `統計のための数学基礎 公式集 ─ ${TOTAL} 項目の無料公式まとめ`,
  description: `指数・対数・微積分・線形代数(基礎/発展)・確率・多変数微分の各章で頻出する公式 ${TOTAL} 項目をカテゴリ別にまとめた無料公式集。AI/ML の前提となる数学の道具立てを一覧で確認。`,
  alternates: { canonical: "/math/formulas" },
  openGraph: {
    title: "統計のための数学基礎 公式集",
    description:
      "対数の公式・微分の連鎖律・固有値・SVD・正定値性・偏微分まで、AI 時代の数学公式を一覧化。",
    type: "article",
  },
};

export default function MathFormulasPage() {
  const byCategory = mathBasicsFormulas.reduce<Record<string, Formula[]>>(
    (acc, f) => {
      (acc[f.category] ??= []).push(f);
      return acc;
    },
    {},
  );

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "統計のための数学基礎", href: "/math" },
          { name: "公式集", href: "/math/formulas" },
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
        <Link href="/math" className="hover:underline">
          統計のための数学基礎
        </Link>
        <span className="mx-2">›</span>
        <span>公式集</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
          <div className="chapter-eyebrow">Formula Reference</div>
          <div className="ui-sans text-xs print-hide">
            <PrintButton label="🖨 PDF / 印刷" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計のための数学基礎 公式集
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          指数・対数・数列・微積分・線形代数(基礎/発展)・確率・多変数微分。
          統計学・機械学習・AI の前提となる数学の主要公式 {TOTAL} 項目を、章立てに沿ってまとめました。
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 text-[11px] ui-sans">
          {Object.entries(byCategory).map(([cat, items]) => (
            <li
              key={cat}
              className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]"
            >
              {cat}{" "}
              <strong className="text-[var(--accent)]">{items.length}</strong>
            </li>
          ))}
        </ul>
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
                    <BookmarkButton kind="formula" id={f.id} context="math" />
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

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/math/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 数学基礎 教科書を読む
        </Link>
        <Link
          href="/math/quiz"
          className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)]"
        >
          数学基礎の問題を解く →
        </Link>
      </nav>
    </article>
  );
}
