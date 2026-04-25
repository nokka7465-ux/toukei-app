import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { TextbookBody } from "@/components/TextbookBody";
import { MixedText } from "@/components/MixedText";
import type { TextbookBlock, BlogPost } from "@/types/content";

const SITE_URL = "https://toukei-app-eight.vercel.app";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function blockTextLength(b: TextbookBlock): number {
  switch (b.type) {
    case "p":
      return b.text.length;
    case "math":
      return b.tex.length;
    case "def":
    case "ex":
      return b.title.length + b.body.length;
    case "list":
      return b.items.reduce((s, i) => s + i.length, 0);
    case "h3":
    case "h4":
      return b.text.length;
    case "intuition":
    case "practical":
      return (b.title?.length ?? 0) + b.body.length;
    case "figure":
      return b.caption?.length ?? 0;
  }
}

function readingMinutes(blocks: TextbookBlock[]): number {
  const total = blocks.reduce((sum, b) => sum + blockTextLength(b), 0);
  return Math.max(1, Math.ceil(total / 500));
}

function extractToc(
  blocks: TextbookBlock[],
): { id: string; text: string; level: number }[] {
  const items: { id: string; text: string; level: number }[] = [];
  blocks.forEach((b, i) => {
    if (b.type === "h3" || b.type === "h4") {
      items.push({
        id: `section-${i}`,
        text: b.text,
        level: b.type === "h3" ? 3 : 4,
      });
    }
  });
  return items;
}

function findRelated(current: BlogPost, all: BlogPost[]): BlogPost[] {
  // Same category first, then any other recent posts.
  const sameCat = all.filter(
    (p) => p.slug !== current.slug && p.category === current.category,
  );
  const others = all.filter(
    (p) => p.slug !== current.slug && p.category !== current.category,
  );
  return [...sameCat, ...others].slice(0, 3);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Adjacent posts in the order shown on /blog (descending by date)
  const sorted = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
  const idx = sorted.findIndex((p) => p.slug === post.slug);
  const prev = sorted[idx + 1];
  const next = sorted[idx - 1];

  const minutes = readingMinutes(post.body);
  const toc = extractToc(post.body);
  const related = findRelated(post, blogPosts);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "統計検定 学習帳",
    },
    publisher: {
      "@type": "Organization",
      name: "統計検定 学習帳",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "ja",
    articleSection: post.category,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:underline">
          ブログ
        </Link>
        <span className="mx-2">›</span>
        <span>{post.category}</span>
      </nav>

      <header className="mb-8 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="ui-sans text-xs text-[var(--muted)] mb-2 flex items-center gap-2 flex-wrap">
          <span>{post.publishedAt}</span>
          <span>·</span>
          <span className="px-1.5 py-0.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded text-[10px] font-bold tracking-wider">
            {post.category}
          </span>
          <span>·</span>
          <span title="読了目安">⏱ 約 {minutes} 分</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide leading-tight">
          {post.title}
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose mt-3 max-w-3xl">
          {post.description}
        </p>
      </header>

      {post.tldr && post.tldr.length > 0 && (
        <aside className="mb-8 paper rounded-lg p-5 border-l-4 border-[var(--accent)]">
          <div className="chapter-eyebrow mb-2">TL;DR ─ 要約</div>
          <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-[var(--muted-strong)] leading-relaxed">
            {post.tldr.map((line, i) => (
              <li key={i}>
                <MixedText text={line} />
              </li>
            ))}
          </ul>
        </aside>
      )}

      {toc.length >= 3 && (
        <aside className="mb-8 paper rounded-lg p-5">
          <div className="chapter-eyebrow mb-2">目次</div>
          <ol className="space-y-1 text-sm ui-sans">
            {toc.map((item) => (
              <li
                key={item.id}
                className={item.level === 4 ? "ml-4" : ""}
              >
                <a
                  href={`#${item.id}`}
                  className="text-[var(--link)] hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      )}

      <div className="paper rounded-lg p-7 md:p-9">
        <TextbookBody blocks={post.body} headingIdPrefix="section" />
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <div className="chapter-eyebrow mb-3">Related Articles</div>
          <h2 className="text-xl font-bold mb-5">関連記事</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="paper block p-5 rounded-lg hover:-translate-y-0.5 transition group h-full"
                >
                  <div className="ui-sans text-[10px] text-[var(--muted)] mb-2 flex items-center gap-2">
                    <span>{p.publishedAt}</span>
                    <span className="px-1.5 py-0.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold tracking-wider">
                      {p.category}
                    </span>
                  </div>
                  <div className="font-bold text-sm mb-2 group-hover:text-[var(--link)] leading-snug">
                    {p.title}
                  </div>
                  <div className="text-xs text-[var(--muted-strong)] leading-relaxed line-clamp-3">
                    {p.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-10 pt-6 border-t border-[var(--page-border)] flex justify-between gap-3 text-xs ui-sans">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="text-[var(--link)] hover:underline max-w-[45%]"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="text-[var(--link)] hover:underline text-right max-w-[45%]"
          >
            {next.title} →
          </Link>
        ) : (
          <Link
            href="/blog"
            className="text-[var(--link)] hover:underline text-right"
          >
            ブログ一覧へ →
          </Link>
        )}
      </nav>
    </article>
  );
}
