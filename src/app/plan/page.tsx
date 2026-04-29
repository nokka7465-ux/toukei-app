import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { PlanCalculator } from "./PlanCalculator";

export const metadata: Metadata = {
  title: "学習プラン計算 ─ 目標日までの残り時間を逆算",
  description:
    "AIエンジニア・ロードマップの 5 フェーズに対して、現在の学習進度・目標日・週あたりの可処分時間を入力すると、フェーズ別の必要時間と完了見込み日を逆算します。",
  alternates: { canonical: "/plan" },
  openGraph: {
    title: "学習プラン計算",
    description:
      "目標日までの残り時間を、AIエンジニア・ロードマップの 5 フェーズに按分して逆算。",
    type: "article",
  },
};

export default function PlanPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "学習プラン計算", href: "/plan" },
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
        <span>学習プラン計算</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Study Plan</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wider">
          学習プラン計算
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          目標日と 1 週間に確保できる時間を入れると、AIエンジニア・ロードマップの 5 フェーズそれぞれにどれくらいの時間を割くべきか、フェーズ完了の見込み日とともに自動算出します。学習開始前のキャパシティ確認や、進捗が遅れているときの計画見直しに。
        </p>
      </header>

      <PlanCalculator />

      <section className="mt-12 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">Reference</div>
        <h2 className="text-lg font-bold mb-3">5 フェーズの時間目安</h2>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-4">
          算出ロジックは以下の標準時間を基準にしています。詳細は{" "}
          <Link
            href="/roadmap"
            className="text-[var(--link)] hover:underline font-bold"
          >
            ロードマップ
          </Link>
          のページを参照してください。
        </p>
        <ul className="text-sm text-[var(--muted-strong)] leading-loose ui-sans space-y-1">
          <li>📐 Phase 1 数学基礎: 30〜60 時間</li>
          <li>📊 Phase 2 統計学(基礎): 60〜120 時間</li>
          <li>🔬 Phase 3 統計学(応用): 120〜250 時間</li>
          <li>🤖 Phase 4 機械学習・DL: 120〜300 時間</li>
          <li>🎓 Phase 5 AI 系検定: 40〜200 時間</li>
        </ul>
      </section>
    </article>
  );
}
