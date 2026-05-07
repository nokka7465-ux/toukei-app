import type { Metadata } from "next";
import Link from "next/link";
import { qcKenteiFormulas } from "@/data/formulas/qc-kentei";
import { Math } from "@/components/Math";
import { BookmarkButton } from "@/components/BookmarkButton";
import { PrintButton } from "@/components/PrintButton";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Formula } from "@/types/content";

const TOTAL = qcKenteiFormulas.length;

export const metadata: Metadata = {
  title: `QC 検定 公式集 ─ ${TOTAL} 項目の無料公式まとめ(管理図・工程能力・実験計画・信頼性)`,
  description: `QC 検定(品質管理検定)の頻出公式 ${TOTAL} 項目をカテゴリ別にまとめた無料公式集。X̄-R / p / c 管理図の管理限界・Cp/Cpk・OC 曲線・SN 比・ワイブル分布・MTBF まで網羅。`,
  alternates: { canonical: "/certs/qc-kentei/formulas" },
  openGraph: {
    title: "QC 検定 公式集",
    description:
      "管理図・工程能力指数・抜取検査・分散分析・田口メソッド・信頼性工学の頻出公式を一覧化。",
    type: "article",
  },
};

export default function QcKenteiFormulasPage() {
  const byCategory = qcKenteiFormulas.reduce<Record<string, Formula[]>>(
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
          { name: "関連検定", href: "/certs/ds-basic" },
          { name: "QC 検定", href: "/certs/qc-kentei" },
          { name: "公式集", href: "/certs/qc-kentei/formulas" },
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
        <Link href="/certs/qc-kentei" className="hover:underline">
          QC 検定
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
          QC 検定 公式集
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          QC 検定(品質管理検定)の頻出公式を {TOTAL} 項目、章立て(管理図・工程能力・抜取検査・実験計画法・田口メソッド・信頼性工学)に沿ってまとめました。試験前の最終確認や、品質改善の実務で公式を引き出すリファレンスとしてご利用ください。
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
                    <BookmarkButton
                      kind="formula"
                      id={f.id}
                      context="qc-kentei"
                    />
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
          href="/certs/qc-kentei/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← QC 検定 教科書を読む
        </Link>
        <Link
          href="/certs/qc-kentei/quiz"
          className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)]"
        >
          QC 検定の問題を解く →
        </Link>
      </nav>
    </article>
  );
}
