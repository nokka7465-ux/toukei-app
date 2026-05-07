import type { Metadata } from "next";
import Link from "next/link";
import { glossary, type GlossaryTerm } from "@/data/glossary";
import { PrintButton } from "@/components/PrintButton";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { GlossaryFilter } from "./GlossaryFilter";

export const metadata: Metadata = {
  title: `統計用語集 ─ 統計検定 / 機械学習 / 公的統計の頻出 ${glossary.length} 語`,
  description: `統計検定 4 級〜1 級の出題範囲に加え、機械学習・AI 用語、公的統計の関連用語まで全 ${glossary.length} 語を、定義・関連教科書節へのリンクとともに解説する用語辞典。`,
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: `統計用語集 ─ 全 ${glossary.length} 語`,
    description:
      "平均・分散・回帰・ベイズ・尤度比検定・機械学習・公的統計まで、重要用語を一覧で確認。",
    type: "article",
  },
};

const LEVEL_ORDER: GlossaryTerm["level"][] = ["4", "3", "2", "準1", "1"];

export default function GlossaryPage() {
  // Group by level for navigable structure
  const byLevel = LEVEL_ORDER.map((lv) => ({
    level: lv,
    terms: glossary.filter((t) => t.level === lv),
  })).filter((g) => g.terms.length > 0);

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "統計用語集", href: "/glossary" },
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
        <span>統計用語集</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
          <div className="chapter-eyebrow">Glossary</div>
          <div className="ui-sans text-xs print-hide">
            <PrintButton label="🖨 PDF / 印刷" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計用語集
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 4級〜1級で登場する重要用語をまとめた辞典です。各用語に短い定義と「関連する教科書の節」へのリンクを付けています。試験前の最終チェックや、学習中に意味を素早く確認したいときにお使いください。全 {glossary.length} 語。
        </p>
      </header>

      <GlossaryFilter groups={byLevel} />
    </article>
  );
}
