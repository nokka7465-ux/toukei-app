import type { Metadata } from "next";
import Link from "next/link";
import { introFormulas } from "@/data/formulas/intro";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";

export const metadata: Metadata = {
  title: "公式集 一覧 ─ 入門編 〜 1 級まで",
  description:
    "統計検定 入門編〜1 級の公式集を一覧から選べます。代表値・分布・推定・検定・回帰・数理統計の重要公式を級別にまとめました。",
  openGraph: {
    title: "公式集 一覧",
    description:
      "入門編 〜 1 級まで、級ごとの重要公式を一覧から選択できます。",
    type: "website",
  },
};

type Track = {
  href: string;
  title: string;
  count: number;
  description: string;
};

const TRACKS: Track[] = [
  { href: "/formulas/intro", title: "入門編", count: introFormulas.length, description: "平均・割合・百分率・確率の基本式" },
  { href: "/formulas/grade-4", title: "4 級", count: gradeFourFormulas.length, description: "代表値・場合の数・確率の基本公式" },
  { href: "/formulas/grade-3", title: "3 級", count: gradeThreeFormulas.length, description: "標準偏差・正規分布・信頼区間" },
  { href: "/formulas/grade-2", title: "2 級", count: gradeTwoFormulas.length, description: "推定・検定・回帰の主要公式" },
  { href: "/formulas/grade-pre1", title: "準 1 級", count: gradePre1Formulas.length, description: "多変量・ベイズ・時系列の主要公式" },
  { href: "/formulas/grade-1", title: "1 級", count: gradeOneFormulas.length, description: "数理統計の中核公式・定理" },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      href={track.href}
      className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block h-full"
    >
      <div className="flex items-baseline justify-between gap-2 mb-2 flex-wrap">
        <h3 className="text-lg font-bold group-hover:text-[var(--link)]">
          {track.title}
        </h3>
        <span className="text-[10px] font-bold text-[var(--accent-fg)] bg-[var(--accent)] px-1.5 py-0.5 rounded ui-sans">
          {track.count} 項目
        </span>
      </div>
      <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
        {track.description}
      </p>
      <div className="mt-3 text-xs text-[var(--link)] ui-sans">
        公式集を見る →
      </div>
    </Link>
  );
}

export default function FormulasIndexPage() {
  const total = TRACKS.reduce((s, t) => s + t.count, 0);

  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>公式集</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Formulas Index</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          公式集 一覧
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 入門編〜1 級の公式集を一覧から選べます。全 {total}{" "}
          項目。各級ページではカテゴリ別に整理された公式と、その意味の解説を確認できます。試験前の総まとめには{" "}
          <Link href="/cheatsheet" className="text-[var(--link)] hover:underline">
            公式チートシート(全級 1 ページ集約・印刷可)
          </Link>{" "}
          が便利です。
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>
    </article>
  );
}
