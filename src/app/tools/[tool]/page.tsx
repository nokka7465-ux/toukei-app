import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getToolBySlug,
  toolsRegistry,
} from "@/lib/tools-registry";
import { getGlossaryBySlug, termToSlug } from "@/lib/glossary-registry";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButton } from "@/components/ShareButton";
import { RecentTracker } from "@/components/RecentTracker";

const SITE_URL = "https://toukei-app.com";

export function generateStaticParams() {
  return toolsRegistry.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "ツールが見つかりません" };
  const title = `${tool.title} ─ 無料オンライン計算ツール`;
  const description = `${tool.description} ブラウザ完結・データ送信なし・登録不要。`;
  const url = `/tools/${tool.slug}`;
  const ogImage = `/og/tools/${tool.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: tool.keywords,
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

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const Component = tool.Component;
  const url = `/tools/${tool.slug}`;

  const softwareJson = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    description: tool.description,
    url: `https://toukei-app.com${url}`,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
  };

  const relatedTermsResolved = tool.relatedTerms
    .map((term) => getGlossaryBySlug(term))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const relatedToolsResolved = tool.relatedTools
    .map((s) => toolsRegistry.find((x) => x.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <article className="max-w-3xl mx-auto">
      <RecentTracker
        id={url}
        title={tool.shortName}
        href={url}
        kind="tool"
        context={tool.category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "統計計算ツール", href: "/tools" },
          { name: tool.title, href: url },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJson) }}
      />

      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <Link href="/tools" className="hover:underline">
          統計計算ツール
        </Link>
        <span className="mx-2">›</span>
        <span>{tool.shortName}</span>
      </nav>

      <header className="mb-8 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">{tool.category}</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wider">
          {tool.title}
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          {tool.longDescription}
        </p>
        <p className="text-[10px] text-[var(--muted)] ui-sans mt-3 leading-relaxed">
          ブラウザ内で完結 ・ データ送信なし ・ 登録不要
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 print-hide">
          <BookmarkButton
            kind="tool"
            id={tool.slug}
            context={tool.category}
            title={tool.shortName}
            href={url}
            size="md"
          />
          <ShareButton
            url={`${SITE_URL}${url}`}
            text={`${tool.title} | 統計ロードマップ`}
            hashtags={["統計", "計算ツール"]}
          />
        </div>
      </header>

      <section className="mb-10">
        <Component />
      </section>

      {relatedTermsResolved.length > 0 && (
        <section className="paper rounded-lg p-5 mb-6">
          <h2 className="text-sm chapter-eyebrow mb-3">関連用語</h2>
          <ul className="flex flex-wrap gap-2 ui-sans text-xs">
            {relatedTermsResolved.map((t) => (
              <li key={t.term}>
                <Link
                  href={`/glossary/${encodeURIComponent(termToSlug(t.term))}`}
                  className="px-3 py-1.5 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)]"
                >
                  {t.term}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedToolsResolved.length > 0 && (
        <section className="paper rounded-lg p-5 mb-6">
          <h2 className="text-sm chapter-eyebrow mb-3">関連ツール</h2>
          <ul className="flex flex-wrap gap-2 ui-sans text-xs">
            {relatedToolsResolved.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/tools/${t.slug}`}
                  className="px-3 py-1.5 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)]"
                >
                  {t.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/tools"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 統計計算ツール一覧へ
        </Link>
        <Link
          href="/figures"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          図解で学ぶ統計
        </Link>
      </nav>

      <p className="mt-8 text-xs text-[var(--muted)] ui-sans leading-relaxed">
        ※ 計算は標準的な近似(正規・t・カイ二乗・F の数値近似)で行っています。学習・予備計算用途を想定しており、医薬品申請等の正式報告には専用ソフトでの再計算をお勧めします。
      </p>
    </article>
  );
}
