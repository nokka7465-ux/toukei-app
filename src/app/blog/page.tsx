import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 学習ブログ ─ 勉強法・級選び・用語解説",
  description:
    "統計検定の効率的な勉強法、級選びのコツ、紛らわしい統計用語の整理など、独学者に役立つ記事を掲載。級別の学習時間目安や試験当日のコツまで。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "ブログ ─ 統計検定の勉強法と統計用語の解説",
    description:
      "統計検定の勉強法・級選び・紛らわしい用語の解説など、独学に役立つ記事をまとめます。",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ブログ", href: "/blog" },
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
        <span>ブログ</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Blog</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          学習ブログ
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定の独学者に役立つ記事をまとめています。級選び・勉強法・紛らわしい用語の整理など、教科書の補足として読める内容。
        </p>
      </header>

      <ul className="space-y-5">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="paper block p-6 rounded-lg hover:-translate-y-0.5 transition group"
            >
              <div className="flex flex-wrap items-baseline gap-3 mb-2 ui-sans text-xs text-[var(--muted)]">
                <span>{post.publishedAt}</span>
                <span>·</span>
                <span className="px-1.5 py-0.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded text-[10px] font-bold tracking-wider">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--link)]">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {post.description}
              </p>
              <div className="mt-3 text-xs text-[var(--link)] ui-sans">
                続きを読む →
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
