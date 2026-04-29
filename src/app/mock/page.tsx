import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/data/levels";
import { mockConfigs, mockLevels } from "@/data/mock-config";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "模試 一覧 ─ 本番形式の時間制限付きシミュレーション",
  description:
    "統計検定 入門編〜1 級の本番形式に近い模試をブラウザで無料受験。時間制限・合格基準付きで採点され、受験履歴も自動で記録されます。",
  alternates: { canonical: "/mock" },
  openGraph: {
    title: "模試 一覧",
    description:
      "統計検定の本番形式に近い模試。時間制限・合格基準付きの自動採点で実力チェック。",
    type: "website",
  },
};

export default function MockListPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "模試", href: "/mock" },
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
        <span>模試</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Mock Exams</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">模試 一覧</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          本番形式に近い時間制限・問題数・合格基準で受験できる模試。受験中は解答・解説が表示されず、すべて解答後または時間切れで採点されます。受験履歴はブラウザに保存されます。
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockLevels.map((slug) => {
          const meta = levels.find((l) => l.slug === slug);
          const config = mockConfigs[slug];
          if (!meta || !config) return null;
          return (
            <Link
              key={slug}
              href={`/mock/${slug}`}
              className="paper rounded-lg p-6 hover:-translate-y-0.5 transition group block"
            >
              <div className="chapter-eyebrow mb-1">
                {meta.title.replace("級", "").toUpperCase()} Mock
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--link)]">
                {config.label}
              </h2>
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed mb-3">
                {config.note}
              </p>
              <div className="flex flex-wrap gap-2 ui-sans text-[11px]">
                <span className="px-2 py-0.5 border border-[var(--page-border-strong)] rounded">
                  ⏱ {config.timeMinutes} 分
                </span>
                <span className="px-2 py-0.5 border border-[var(--page-border-strong)] rounded">
                  📋 {config.questionTarget} 問
                </span>
                <span className="px-2 py-0.5 border border-[var(--page-border-strong)] rounded">
                  🎯 合格 {config.passPct}%
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
