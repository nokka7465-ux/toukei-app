import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/lib/all-questions";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { RandomPracticeClient } from "./RandomPracticeClient";

export const metadata: Metadata = {
  title: "ランダム練習 ─ 全 11 トラックから自動抽出",
  description:
    "統計検定 4 級〜1 級・関連検定 7 種・数学基礎を含むすべての演習問題からランダムに出題。学習レベルや問題数を選んで、苦手範囲を効率よく潰せます。",
  alternates: { canonical: "/practice" },
  openGraph: {
    title: "ランダム練習",
    description:
      "全トラックから自動抽出した問題で力試し。苦手問題を優先する『弱点集中モード』も。",
    type: "website",
  },
};

const trackInfo = tracks.map((t) => ({
  key: t.key,
  label: t.label,
  group: t.group,
  count: t.questions.length,
}));

export default function PracticePage() {
  const totalQuestions = trackInfo.reduce((acc, t) => acc + t.count, 0);
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ランダム練習", href: "/practice" },
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
        <span>ランダム練習</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Random Practice</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">ランダム練習</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {trackInfo.length} トラック・約 {totalQuestions}{" "}
          問のプールから、ランダムに問題を抽出します。レベルや問題数を選択でき、苦手問題を優先的に出す{" "}
          <strong>弱点集中モード</strong>{" "}
          も利用できます。試験直前の総復習や、毎日のウォームアップに。
        </p>
      </header>

      <RandomPracticeClient tracks={trackInfo} />
    </article>
  );
}
