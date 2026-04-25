import type { Metadata } from "next";
import Link from "next/link";
import { introQuestions } from "@/data/questions/intro";
import { gradeFourQuestions } from "@/data/questions/grade-4";
import { gradeThreeQuestions } from "@/data/questions/grade-3";
import { gradeTwoQuestions } from "@/data/questions/grade-2";
import { gradePre1Questions } from "@/data/questions/grade-pre1";
import { gradeOneQuestions } from "@/data/questions/grade-1";
import { mathBasicsQuestions } from "@/data/questions/math";
import { dsBasicQuestions } from "@/data/questions/ds-basic";
import { surveyQuestions } from "@/data/questions/survey";
import { gTestQuestions } from "@/data/questions/g-test";
import { dsLiteracyQuestions } from "@/data/questions/ds-literacy";

export const metadata: Metadata = {
  title: "演習問題 一覧 ─ 級・関連検定・数学基礎まで",
  description:
    "統計検定 入門編〜1級、関連検定、数学基礎の演習問題を一覧から選べます。1 問 1 答モード・タイマー機能・解説付きで実戦的に学べます。",
  openGraph: {
    title: "演習問題 一覧",
    description:
      "全レベル・全検定の演習問題を一覧から選択。1 問 1 答 + 解説 + タイマー。",
    type: "website",
  },
};

type Track = {
  href: string;
  title: string;
  count: number;
  description: string;
};

const MAIN_TRACKS: Track[] = [
  { href: "/quiz/intro", title: "入門編", count: introQuestions.length, description: "算数レベルの統計入門" },
  { href: "/quiz/grade-4", title: "4 級", count: gradeFourQuestions.length, description: "代表値・確率・場合の数" },
  { href: "/quiz/grade-3", title: "3 級", count: gradeThreeQuestions.length, description: "分散・分布・推定基礎" },
  { href: "/quiz/grade-2", title: "2 級", count: gradeTwoQuestions.length, description: "推定・検定・回帰" },
  { href: "/quiz/grade-pre1", title: "準 1 級", count: gradePre1Questions.length, description: "多変量・ベイズ・時系列" },
  { href: "/quiz/grade-1", title: "1 級", count: gradeOneQuestions.length, description: "数理統計学の理論" },
];

const SUPPORT_TRACKS: Track[] = [
  { href: "/math/quiz", title: "数学基礎", count: mathBasicsQuestions.length, description: "割合・Σ・指数対数の基本" },
];

const CERT_TRACKS: Track[] = [
  { href: "/certs/ds-basic/quiz", title: "統計検定 DS基礎", count: dsBasicQuestions.length, description: "Excel 中心のデータ分析" },
  { href: "/certs/survey/quiz", title: "統計調査士", count: surveyQuestions.length, description: "統計法・公的統計・標本抽出" },
  { href: "/certs/g-test/quiz", title: "G検定(JDLA)", count: gTestQuestions.length, description: "AI / DL の概念・倫理" },
  { href: "/certs/ds-literacy/quiz", title: "データサイエンティスト検定", count: dsLiteracyQuestions.length, description: "DS / DE / ビジネス力 3 軸" },
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
          全 {track.count} 問
        </span>
      </div>
      <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
        {track.description}
      </p>
      <div className="mt-3 text-xs text-[var(--link)] ui-sans">
        問題を解く →
      </div>
    </Link>
  );
}

export default function QuizIndexPage() {
  const total =
    [...MAIN_TRACKS, ...SUPPORT_TRACKS, ...CERT_TRACKS].reduce(
      (s, t) => s + t.count,
      0,
    );

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
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice Index</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          演習問題 一覧
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 入門編〜1 級、関連検定、数学基礎の演習問題を一覧から選べます。すべての問題は{" "}
          <strong>1 問 1 答モード</strong>(解答するたびに解説表示)と{" "}
          <strong>時間制限つき模擬試験モード</strong>に対応しています。全 {total} 問。
        </p>
      </header>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">統計検定本体</div>
          <h2 className="text-2xl font-bold">入門編 〜 1 級</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MAIN_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">学習サポート</div>
          <h2 className="text-2xl font-bold">数学基礎</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUPPORT_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>

      <section>
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">関連検定(別系統)</div>
          <h2 className="text-2xl font-bold">DS基礎 / 統計調査士 / G検定 / DS検定</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERT_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>
    </article>
  );
}
