import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { AdaptivePracticeClient } from "./AdaptivePracticeClient";

export const metadata: Metadata = {
  title: "適応型クイズ ─ 苦手分野・SRS・難易度ミックスを自動選択",
  description:
    "あなたの学習履歴に合わせて出題を自動調整する適応型クイズ。苦手分野重点・未挑戦のみ・難易度ミックス・SRS復習日の問題を自由に組み合わせ。",
  alternates: { canonical: "/practice/adaptive" },
  openGraph: {
    title: "適応型クイズ",
    description:
      "学習履歴から、苦手分野・未挑戦・SRS復習日の問題を自動抽出するパーソナライズ演習。",
    type: "website",
  },
};

export default function AdaptivePracticePage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ランダム練習", href: "/practice" },
          { name: "適応型クイズ", href: "/practice/adaptive" },
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
        <Link href="/practice" className="hover:underline">
          ランダム練習
        </Link>
        <span className="mx-2">›</span>
        <span>適応型クイズ</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Adaptive Practice</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wider">
          適応型クイズ
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          あなたの学習履歴から最適な問題セットを自動抽出します。{" "}
          <strong>苦手分野重点</strong>・<strong>未挑戦のみ</strong>・
          <strong>難易度ミックス</strong>・<strong>間違い + SRS 復習日</strong>{" "}
          の 4 モードを切り替えて、効率的に弱点を潰しましょう。
        </p>
      </header>

      <AdaptivePracticeClient />
    </article>
  );
}
