import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { FlashcardsClient } from "./FlashcardsClient";

export const metadata: Metadata = {
  title: "統計用語 暗記カード ─ 380語以上の無料単語帳",
  description:
    "統計検定 4 級〜1 級・データサイエンス・機械学習・AI 倫理用語をカード形式で覚える無料暗記カード。級別・カテゴリ別・習熟度別フィルタ付き。ブラウザ完結・登録不要。",
  alternates: { canonical: "/flashcards" },
  openGraph: {
    title: "統計用語 暗記カード",
    description:
      "380 語以上をフィルタ付きカードで効率記憶。級別・カテゴリ別・習熟度別。",
    type: "website",
  },
};

export default function FlashcardsPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "暗記カード", href: "/flashcards" },
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
        <span>暗記カード</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Flashcards</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計用語 暗記カード
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定・データサイエンス・機械学習・AI 倫理の重要用語{" "}
          <strong>380 語以上</strong> をフィルタ付きカード形式で記憶。級別・カテゴリ別・習熟度別に絞り込めます。「知らない / 微妙 / 知ってる」のセルフ評価で習熟度を自動管理。
        </p>
      </header>

      <FlashcardsClient />

      <section className="mt-12 paper rounded-lg p-5">
        <div className="chapter-eyebrow mb-2">使い方のコツ</div>
        <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1">
          <li>
            移動時間・スキマ時間の **5 分** だけ回す習慣にすると効果的(エビングハウスの忘却曲線対策)
          </li>
          <li>
            「知らない」を選んだ用語は <Link href="/glossary" className="text-[var(--link)] hover:underline">用語集</Link> でじっくり読み込んでから戻る
          </li>
          <li>
            試験 1 ヶ月前から「未学習」フィルタで未知の用語をゼロにする目標を設定
          </li>
          <li>
            演習問題で間違えた問題は{" "}
            <Link href="/review" className="text-[var(--link)] hover:underline">
              復習ページ
            </Link>
            、用語の確認は本ページ、と使い分けを推奨
          </li>
        </ul>
      </section>

      <nav className="mt-10 flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/glossary"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          用語集をブラウズする
        </Link>
        <Link
          href="/practice/adaptive"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          適応型クイズで力試し
        </Link>
      </nav>
    </article>
  );
}
