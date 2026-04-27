import type { Metadata } from "next";
import Link from "next/link";
import { SampleSizeCalc } from "@/components/tools/SampleSizeCalc";
import { ConfidenceIntervalCalc } from "@/components/tools/ConfidenceIntervalCalc";
import { PValueCalc } from "@/components/tools/PValueCalc";
import { PowerCalc } from "@/components/tools/PowerCalc";
import { TwoProportionTest } from "@/components/tools/TwoProportionTest";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計計算ツール ─ 信頼区間・p値・サンプルサイズの無料計算機",
  description:
    "信頼区間・p 値・サンプルサイズ・検出力・A/B テストの 5 つの統計計算機を無料で。学習にも実務にも使える、ブラウザ完結のオンライン計算ツール。データ送信なし。",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "統計計算ツール集",
    description:
      "信頼区間・p 値・サンプルサイズ・検出力・A/B テストの計算をブラウザで完結。",
    type: "article",
  },
};

export default function ToolsPage() {
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
          学習中の確認や実務での意思決定にすぐ使える、5 つの統計計算機。すべて{" "}
          <strong>ブラウザ内で完結</strong>{" "}
          ─ データ送信・ログイン・サーバ計算は一切ありません。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-xs ui-sans">
          {[
            { id: "sample-size", label: "サンプルサイズ" },
            { id: "ci", label: "信頼区間" },
            { id: "p-value", label: "p 値" },
            { id: "power", label: "検出力" },
            { id: "ab-test", label: "A/B テスト" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[var(--link)] hover:underline"
            >
              ↓ {item.label}
            </a>
          ))}
        </div>
      </header>

      <section className="space-y-8">
        <div id="sample-size" className="scroll-mt-20">
          <SampleSizeCalc />
        </div>
        <div id="ci" className="scroll-mt-20">
          <ConfidenceIntervalCalc />
        </div>
        <div id="p-value" className="scroll-mt-20">
          <PValueCalc />
        </div>
        <div id="power" className="scroll-mt-20">
          <PowerCalc />
        </div>
        <div id="ab-test" className="scroll-mt-20">
          <TwoProportionTest />
        </div>
      </section>

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
              図解で学ぶ統計 → 24 種の SVG 図解一覧
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
        ※ 計算は標準的な近似(正規・t・カイ二乗の数値近似)で行っています。学習・予備計算用途を想定しており、医薬品申請等の正式報告には専用ソフト(R, Python の statsmodels など)での再計算をお勧めします。
      </p>
    </article>
  );
}
