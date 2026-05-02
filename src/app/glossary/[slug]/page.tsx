import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllUniqueGlossaryTerms,
  getGlossaryBySlug,
  getRelatedTerms,
  termToSlug,
} from "@/lib/glossary-registry";
import { BookmarkButton } from "@/components/BookmarkButton";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

const LEVEL_STYLE: Record<string, string> = {
  "4": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  "3": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  "2": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  "準1": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  "1": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
};

export function generateStaticParams() {
  return getAllUniqueGlossaryTerms().map((t) => ({
    slug: termToSlug(t.term),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const term = getGlossaryBySlug(decoded);
  if (!term) return { title: "用語が見つかりません" };

  const title = `${term.term}とは ─ ${term.level}級 ${term.category} 用語解説`;
  const description = `${term.term}(${term.reading}${
    term.english ? ` / ${term.english}` : ""
  })の定義: ${term.definition.slice(0, 100)}…`;
  const url = `/glossary/${encodeURIComponent(termToSlug(term.term))}`;
  const ogImage = `/og/glossary/${encodeURIComponent(termToSlug(term.term))}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const term = getGlossaryBySlug(decoded);
  if (!term) notFound();

  const related = getRelatedTerms(term, 12);
  const url = `/glossary/${encodeURIComponent(termToSlug(term.term))}`;

  // DefinedTerm schema for rich result eligibility
  const definedTermJson = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    alternateName: term.english,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "統計ロードマップ 用語集",
      url: "https://toukei-app.com/glossary",
    },
    url: `https://toukei-app.com${url}`,
  };

  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "用語集", href: "/glossary" },
          { name: term.term, href: url },
        ]}
      />
      <script
        type="application/ld+json"
        // Rendering JSON-LD inline; safe because content is static.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJson) }}
      />

      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <Link href="/glossary" className="hover:underline">
          用語集
        </Link>
        <span className="mx-2">›</span>
        <span>{term.term}</span>
      </nav>

      <header className="mb-8 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Glossary</div>
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider">
            {term.term}
          </h1>
          <BookmarkButton kind="glossary" id={term.term} />
        </div>
        <div className="text-sm text-[var(--muted-strong)] ui-sans flex flex-wrap items-center gap-3">
          <span>読み: {term.reading}</span>
          {term.english && <span>英: {term.english}</span>}
          <span
            className={`px-2 py-0.5 rounded text-xs font-bold ${LEVEL_STYLE[term.level] ?? ""}`}
          >
            {term.level}級
          </span>
          <span className="text-[var(--muted)]">{term.category}</span>
        </div>
      </header>

      <section className="paper rounded-lg p-6 mb-8 leading-loose">
        <h2 className="text-sm chapter-eyebrow mb-3">定義</h2>
        <p className="leading-loose whitespace-pre-line">{term.definition}</p>
      </section>

      {term.link && (
        <section className="paper rounded-lg p-5 mb-8">
          <h2 className="text-sm chapter-eyebrow mb-2">関連教材</h2>
          <Link
            href={term.link}
            className="text-[var(--link)] hover:underline ui-sans"
          >
            関連する教科書の節を見る →
          </Link>
        </section>
      )}

      {related.length > 0 && (
        <section className="paper rounded-lg p-5 mb-8">
          <h2 className="text-sm chapter-eyebrow mb-3">
            関連する用語({term.category})
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ui-sans text-sm">
            {related.map((r) => (
              <li key={r.term}>
                <Link
                  href={`/glossary/${encodeURIComponent(termToSlug(r.term))}`}
                  className="block py-1.5 px-2 rounded hover:bg-[var(--background)] hover:text-[var(--link)]"
                >
                  <span className="font-bold">{r.term}</span>
                  <span className="text-xs text-[var(--muted)] ml-2">
                    {r.reading}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/glossary"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 用語集トップへ
        </Link>
        <Link
          href="/search"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          サイト内を検索
        </Link>
      </nav>
    </article>
  );
}
