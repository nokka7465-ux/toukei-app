import type { Metadata } from "next";
import Link from "next/link";
import { ScoreQuiz } from "@/components/ScoreQuiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計偏差値診断 ─ あなたの統計力を 5 分で数値化",
  description:
    "統計偏差値診断で、あなたの統計学・データサイエンス力を数値化。15 問を 4 段階の難易度バンドで出題し、偏差値 + カテゴリ別正答率 + 推奨教科書を表示。学習進度を可視化する独自指標。",
  alternates: { canonical: "/score" },
  openGraph: {
    title: "統計偏差値診断 ─ あなたの統計力を 5 分で数値化",
    description:
      "15 問の段階的問題から偏差値を算出。記述統計・確率・推定・検定・回帰・ML を横断的にカバー。",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ScorePage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "統計偏差値診断", href: "/score" },
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
        <span>統計偏差値診断</span>
      </nav>

      <header className="mb-8 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Stat Score</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計偏差値診断
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          あなたの統計力を <strong>偏差値</strong> として数値化する独自診断。
          記述統計・確率・推定・検定・回帰・機械学習を横断的にカバーする 15
          問を出題し、結果から{" "}
          <strong>推奨教科書・推奨検定</strong>{" "}
          が自動で示されます。学習の伸びは履歴として端末内に最大 20 件保存。
        </p>
      </header>

      <ScoreQuiz />

      <section className="mt-12 paper rounded-lg p-5">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-lg font-bold mb-3 ui-sans">よくある質問</h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-bold mb-1">偏差値はどう算出されますか?</dt>
            <dd className="text-[var(--muted-strong)] leading-relaxed pl-4">
              4 段階の難易度バンド(★☆☆☆〜★★★★)に重み(1, 2, 3, 4)を
              付け、加重得点率から偏差値 30〜75
              の範囲にマップします。50% 正解で偏差値 50、80% 正解で偏差値
              65、満点で偏差値 75 が目安です。
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-1">結果はどこに保存されますか?</dt>
            <dd className="text-[var(--muted-strong)] leading-relaxed pl-4">
              ブラウザの localStorage に履歴(最大 20
              件)として保存されます。サーバには送信されません。学習の伸びを追跡できます。
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-1">『級診断』との違いは何ですか?</dt>
            <dd className="text-[var(--muted-strong)] leading-relaxed pl-4">
              [/diagnose](/diagnose) は学習経験・数学慣れ・目的の{" "}
              <strong>3 問</strong>{" "}
              で『どの級から始めるか』を提案する自己申告型の診断。本ページは
              <strong>15 問の実問題で実力を測定</strong>{" "}
              する点が違います。両方の併用がおすすめです。
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-1">満点を取るとどのくらいですか?</dt>
            <dd className="text-[var(--muted-strong)] leading-relaxed pl-4">
              偏差値 75 = 上位 0.6%
              相当。準 1 級〜1 級レベルの応用も解けるレベルです。
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
