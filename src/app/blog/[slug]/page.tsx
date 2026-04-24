import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { TextbookBody } from "@/components/TextbookBody";

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
        <div className="ui-sans text-xs text-[var(--muted)] mb-2 flex items-center gap-2">
          <span>{post.publishedAt}</span>
          <span>·</span>
          <span className="px-1.5 py-0.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded text-[10px] font-bold tracking-wider">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide leading-tight">
          {post.title}
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose mt-3 max-w-3xl">
          {post.description}
        </p>
      </header>

      <div className="paper rounded-lg p-7 md:p-9">
        <TextbookBody blocks={post.body} />
      </div>

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
