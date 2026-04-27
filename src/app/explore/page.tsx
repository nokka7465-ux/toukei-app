import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveNormal } from "@/components/interactive/InteractiveNormal";
import { InteractiveBinomial } from "@/components/interactive/InteractiveBinomial";
import { InteractiveCLT } from "@/components/interactive/InteractiveCLT";
import { InteractivePValue } from "@/components/interactive/InteractivePValue";
import { InteractiveCI } from "@/components/interactive/InteractiveCI";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "動かして学ぶ統計 ─ 正規分布・p値・信頼区間のインタラクティブ図解",
  description:
    "正規分布・二項分布・中心極限定理・p 値・信頼区間をスライダーで動かして体感できる無料インタラクティブ図解。式と図と動きの 3 軸で『直感』を養えます。",
  alternates: { canonical: "/explore" },
  openGraph: {
    title: "動かして学ぶ統計",
    description: "5 つのキー概念をスライダー操作で体感する。",
    type: "article",
  },
};

export default function ExplorePage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "動かして学ぶ統計", href: "/explore" },
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
        <span>動かして学ぶ統計</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Interactive</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          動かして学ぶ統計
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          スライダーやボタンでパラメータを動かし、{" "}
          <strong>式・図・動きの 3 軸</strong>{" "}
          から統計の直感を養えます。「正規分布の σ を 0.5 にしたら山はどれくらい鋭くなる?」「中心極限定理は本当にどんな分布でも効くの?」という問いに、その場で答えが出る。
        </p>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4 leading-relaxed">
          ※ すべて完全クライアントサイド・端末内で動作。データ送信なし・ログイン不要・印刷可。
        </p>
      </header>

      <section className="space-y-8">
        <InteractiveNormal />
        <InteractiveBinomial />
        <InteractiveCLT />
        <InteractivePValue />
        <InteractiveCI />
      </section>

      <section className="mt-16 paper rounded-lg p-6">
        <header className="mb-3">
          <div className="chapter-eyebrow mb-1">Next Steps</div>
          <h2 className="text-xl font-bold">次に進む</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm ui-sans">
          <li>
            <Link
              href="/tools"
              className="block py-2 text-[var(--link)] hover:underline"
            >
              統計計算ツール集 → 信頼区間・p 値・サンプルサイズ計算
            </Link>
          </li>
          <li>
            <Link
              href="/figures"
              className="block py-2 text-[var(--link)] hover:underline"
            >
              図解で学ぶ統計 → 24 種の SVG 図解一覧
            </Link>
          </li>
          <li>
            <Link
              href="/textbook"
              className="block py-2 text-[var(--link)] hover:underline"
            >
              教科書一覧 → 各級の本文を読み進める
            </Link>
          </li>
          <li>
            <Link
              href="/quiz"
              className="block py-2 text-[var(--link)] hover:underline"
            >
              演習問題 → 1 問 1 答 + タイマー付き模擬試験
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
