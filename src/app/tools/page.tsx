import type { Metadata } from "next";
import Link from "next/link";
import {
  groupToolsByCategory,
  toolsRegistry,
  DIFFICULTY_LABEL,
  type ToolDifficulty,
} from "@/lib/tools-registry";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

const TOTAL = toolsRegistry.length;

export const metadata: Metadata = {
  title: `統計計算ツール ─ ${TOTAL} 種の無料オンライン計算機(信頼区間・t 検定・p 値・回帰)`,
  description: `信頼区間・p 値・サンプルサイズ・検出力・A/B テスト・t 検定・重回帰・ベイズ更新ほか ${TOTAL} 種の統計計算機を無料で。学習にも実務にも使える、ブラウザ完結のオンラインツール集。`,
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "統計計算ツール集",
    description:
      "信頼区間・p 値・サンプルサイズ・t 検定の計算をブラウザで完結。",
    type: "article",
  },
};

const DIFFICULTY_STYLE: Record<ToolDifficulty, string> = {
  basic:
    "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800/60",
  standard:
    "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800/60",
  advanced:
    "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-800/60",
};

export default function ToolsPage() {
  const groups = groupToolsByCategory();

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "統計計算ツール", href: "/tools" },
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
        <span>統計計算ツール集</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Tools</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計計算ツール集
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          学習中の確認や実務での意思決定にすぐ使える、{TOTAL} 種の統計計算機。すべて{" "}
          <strong>ブラウザ内で完結</strong>{" "}
          ─ データ送信・ログイン・サーバ計算は一切ありません。
        </p>
        <ul
          aria-label="サイト指標"
          className="flex flex-wrap gap-2 mt-5 text-[11px] ui-sans"
        >
          <li className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]">
            <strong className="text-[var(--accent)]">{TOTAL}</strong> 種の計算機
          </li>
          <li className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]">
            完全無料
          </li>
          <li className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]">
            登録不要
          </li>
          <li className="px-3 py-1 rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]">
            データ送信なし
          </li>
        </ul>

        {/* カテゴリ目次(ページ内ジャンプ) */}
        <nav
          aria-label="カテゴリ目次"
          className="mt-6 flex flex-wrap gap-2 text-xs ui-sans"
        >
          {groups.map((g) => (
            <a
              key={g.category}
              href={`#cat-${encodeURIComponent(g.category)}`}
              className="px-3 py-1.5 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)] transition"
            >
              {g.category}
              <span className="ml-1 text-[var(--muted)]">
                ({g.tools.length})
              </span>
            </a>
          ))}
        </nav>
      </header>

      {groups.map((g) => (
        <section
          key={g.category}
          id={`cat-${encodeURIComponent(g.category)}`}
          className="mb-12 scroll-mt-20"
        >
          <header className="mb-4 flex items-baseline gap-3">
            <h2 className="text-2xl font-bold tracking-wide">{g.category}</h2>
            <span className="text-xs text-[var(--muted)] ui-sans">
              {g.tools.length} ツール
            </span>
          </header>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {g.tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="paper rounded-xl p-5 h-full flex flex-col hover:-translate-y-0.5 transition group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className="text-3xl leading-none"
                      aria-hidden="true"
                    >
                      {tool.icon}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border tracking-wider ui-sans whitespace-nowrap ${DIFFICULTY_STYLE[tool.difficulty]}`}
                    >
                      {DIFFICULTY_LABEL[tool.difficulty]}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-1.5 leading-snug group-hover:text-[var(--link)]">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-strong)] leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  <div className="mt-3 text-xs font-bold text-[var(--link)] ui-sans">
                    使ってみる →
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-12 paper rounded-lg p-6 text-sm leading-relaxed">
        <header className="mb-3">
          <div className="chapter-eyebrow mb-1">More</div>
          <h2 className="text-xl font-bold">関連ページ</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ui-sans">
          <li>
            <Link href="/explore" className="text-[var(--link)] hover:underline">
              動かして学ぶ統計 → スライダーで分布を体感
            </Link>
          </li>
          <li>
            <Link href="/figures" className="text-[var(--link)] hover:underline">
              図解で学ぶ統計 → 33 種の SVG 図解一覧
            </Link>
          </li>
          <li>
            <Link href="/textbook" className="text-[var(--link)] hover:underline">
              教科書一覧 → 各級の本文
            </Link>
          </li>
          <li>
            <Link href="/exam-info" className="text-[var(--link)] hover:underline">
              受験情報まとめ → 試験形式・日程・受験料
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-[var(--muted)] ui-sans leading-relaxed">
        ※ 計算は標準的な近似(正規・t・カイ二乗・F の数値近似)で行っています。学習・予備計算用途を想定しており、医薬品申請等の正式報告には専用ソフト(R, Python の statsmodels など)での再計算をお勧めします。
      </p>
    </article>
  );
}
