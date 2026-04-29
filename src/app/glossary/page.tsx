import type { Metadata } from "next";
import Link from "next/link";
import { glossary, type GlossaryTerm } from "@/data/glossary";
import { MixedText } from "@/components/MixedText";
import { BookmarkButton } from "@/components/BookmarkButton";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

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

const LEVEL_STYLE: Record<GlossaryTerm["level"], string> = {
  "4": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  "3": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  "2": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  "準1": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  "1": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
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
        <div className="chapter-eyebrow mb-2">Glossary</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計用語集
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 4級〜1級で登場する重要用語をまとめた辞典です。各用語に短い定義と「関連する教科書の節」へのリンクを付けています。試験前の最終チェックや、学習中に意味を素早く確認したいときにお使いください。全 {glossary.length} 語。
        </p>
      </header>

      <nav
        aria-label="sections"
        className="mb-10 paper rounded-lg p-5 ui-sans text-sm flex flex-wrap gap-3"
      >
        <span className="text-[var(--muted)]">級でジャンプ:</span>
        {byLevel.map((g) => (
          <a
            key={g.level}
            href={`#level-${g.level}`}
            className="text-[var(--link)] hover:underline"
          >
            {g.level}級({g.terms.length})
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        {byLevel.map((group) => (
          <section key={group.level} id={`level-${group.level}`}>
            <header className="mb-5 pb-2 border-b border-[var(--page-border-strong)]">
              <div className="chapter-eyebrow mb-1">Level</div>
              <h2 className="text-2xl font-bold tracking-wide">
                {group.level}級レベルの用語
              </h2>
            </header>

            <dl className="space-y-3">
              {group.terms.map((t) => (
                <div
                  key={t.term}
                  className="paper rounded-lg p-4 grid md:grid-cols-[200px_1fr] gap-3"
                >
                  <dt className="border-r border-[var(--page-border)] md:pr-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-bold text-base">{t.term}</div>
                        <div className="text-xs text-[var(--muted)] ui-sans mt-0.5">
                          {t.reading}
                          {t.english && ` · ${t.english}`}
                        </div>
                      </div>
                      <BookmarkButton kind="glossary" id={t.term} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ui-sans ${LEVEL_STYLE[t.level]}`}
                      >
                        {t.level}級
                      </span>
                      <span className="text-[10px] text-[var(--muted)] ui-sans">
                        {t.category}
                      </span>
                    </div>
                  </dt>
                  <dd>
                    <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                      <MixedText text={t.definition} />
                    </p>
                    {t.link && (
                      <Link
                        href={t.link}
                        className="inline-block mt-2 text-xs text-[var(--link)] hover:underline ui-sans"
                      >
                        関連する教科書の節を読む →
                      </Link>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </article>
  );
}
