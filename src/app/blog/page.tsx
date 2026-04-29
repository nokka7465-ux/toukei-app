import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { blogTheme } from "@/lib/blog-theme";

export const metadata: Metadata = {
  title: "学習ブログ ─ AIエンジニア・統計・Pythonの勉強法",
  description:
    "AIエンジニアになるための統計・数学・Python の学習に役立つ記事まとめ。ロードマップ・級選び・実装入門・チートシートなど、独学者向けに発信中。",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "学習ブログ ─ 統計ロードマップ",
    description:
      "AIエンジニアの学習に役立つ記事まとめ。ロードマップ・級選び・実装入門。",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  // Group remaining by category for a quick filter feel.
  const categories = Array.from(new Set(sorted.map((p) => p.category)));

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
        <span className="chip-soft mb-3">Blog</span>
        <h1 className="text-4xl font-bold mt-3 mb-3 tracking-wider">
          学習ブログ
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          AIエンジニアになるための統計・数学・Python の学習に役立つ記事をまとめています。ロードマップ・級選び・実装入門・チートシートなど、教科書の補足として読める内容です。
        </p>
        <div className="flex flex-wrap gap-2 mt-5 ui-sans text-xs">
          <span className="text-[var(--muted)] mr-1">カテゴリ:</span>
          {categories.map((c) => (
            <span key={c} className="chip-soft text-[10px]">
              {c}
            </span>
          ))}
        </div>
      </header>

      {/* Featured post - large card */}
      {featured && (
        <section className="mb-12">
          <div className="chapter-eyebrow mb-3">Latest</div>
          <Link
            href={`/blog/${featured.slug}`}
            className="paper rounded-xl overflow-hidden hover:-translate-y-0.5 transition group block grid grid-cols-1 md:grid-cols-2"
          >
            {(() => {
              const t = blogTheme(featured.category);
              return (
                <div
                  className={`relative aspect-[16/9] md:aspect-auto bg-gradient-to-br ${t.grad} flex items-center justify-center min-h-[200px]`}
                >
                  <span
                    className="text-7xl drop-shadow-md"
                    aria-hidden="true"
                  >
                    {t.emoji}
                  </span>
                  <span className="absolute top-3 left-3 chip">
                    {featured.category}
                  </span>
                </div>
              );
            })()}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="text-xs text-[var(--muted)] ui-sans mb-2">
                {featured.publishedAt}
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--link)] leading-snug">
                {featured.title}
              </h2>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-4 line-clamp-3">
                {featured.description}
              </p>
              <div className="text-sm font-bold text-[var(--link)] ui-sans">
                記事を読む →
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Rest of posts in grid */}
      <section>
        <div className="chapter-eyebrow mb-4">All Articles ({sorted.length})</div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => {
            const t = blogTheme(post.category);
            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="paper block rounded-xl overflow-hidden hover:-translate-y-0.5 transition group h-full flex flex-col"
                >
                  <div
                    className={`relative aspect-[16/9] bg-gradient-to-br ${t.grad} flex items-center justify-center`}
                  >
                    <span
                      className="text-6xl drop-shadow-md"
                      aria-hidden="true"
                    >
                      {t.emoji}
                    </span>
                    <span className="absolute top-3 left-3 chip">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-[10px] text-[var(--muted)] ui-sans mb-2">
                      {post.publishedAt}
                    </div>
                    <h3 className="font-bold text-base mb-2 group-hover:text-[var(--link)] leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[var(--muted-strong)] leading-relaxed line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="mt-3 text-xs font-bold text-[var(--link)] ui-sans">
                      記事を読む →
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
