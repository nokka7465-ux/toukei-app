import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計のための数学基礎 ─ Σ・指数対数・微積分・線形代数",
  description:
    "統計学を学ぶうえで前提となる数学の基礎を、必要なところだけ抜粋した無料補助教材。割合・百分率・総和記号 Σ・指数対数・微積分・線形代数まで、つまずきやすい部分を整理。",
  alternates: { canonical: "/math" },
  openGraph: {
    title: "統計のための数学基礎",
    description:
      "統計学に必要な数学の道具を、最小限・実用本位でまとめた補助教材。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "統計検定にどれくらいの数学力が必要ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 級は割合と中学数学で十分。3 級は総和記号 Σ と高校数学Ⅰまで。2 級は微分積分の入口・対数。準1級・1級は線形代数(行列・固有値)・解析(極限・積分)が必須。",
      },
    },
    {
      "@type": "Question",
      name: "数学が苦手でも統計検定 2 級は受かりますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。2 級は数式の意味と計算手順を覚えればパターン的に解けるよう設計されています。本サイトの数学基礎で Σ と対数だけ押さえれば、ほとんどの問題に対応できます。",
      },
    },
    {
      "@type": "Question",
      name: "微分積分は本当に必要ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2 級では結果(分散・期待値)だけ知っていれば計算できる。準1級・1級では微分積分が必須(最尤推定・連続分布の確率計算など)。準1級以上を目指すなら早めの数学復習を推奨します。",
      },
    },
  ],
};

export default function MathHubPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "数学基礎", href: "/math" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>数学基礎</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Math Foundations</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計のための数学基礎
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計学を学ぶうえで前提となる数学の道具を、最小限・実用本位でまとめた補助教材です。「統計の式が読めない」「Σ や $e$ が出てきて止まる」 ─ こうした **つまずきポイント** だけを集中的に整理。統計検定本体の章で詰まったとき、ここに戻ってきて確認するのに使ってください。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">扱うトピック</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "1. 数と式の復習",
              body: "割合・百分率・歩合 / 指数表記と科学記法。算数〜中学数学レベルの再確認。",
              level: "入門〜4級",
            },
            {
              title: "2. 代数の道具",
              body: "総和記号 Σ の使い方 / 指数と対数。3 級〜2 級で必須。",
              level: "3〜2級",
            },
            {
              title: "3. 微分積分の入口",
              body: "微分の意味 / 積分の意味。準1級以降の理論で必須。",
              level: "2〜準1級",
            },
            {
              title: "4. 線形代数の基礎",
              body: "ベクトル・内積 / 行列の積・行列式。重回帰・PCA・多変量正規分布で必須。",
              level: "準1〜1級",
            },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="chapter-eyebrow mb-1">{t.level}</div>
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">数学基礎を学ぶ</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          **教科書本編** で章立てに沿って学ぶか、**演習問題** で自分の理解度を確認できます。統計検定の各級を学んでいて「ここの数学が分からない」となったときに、必要な章だけピンポイントで読み直すのもおすすめです。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/math/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/math/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Per-Grade Math</div>
        <h2 className="text-xl font-bold mb-3">級ごとに必要な数学</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3">級</th>
                <th className="py-2 pr-3">必要な数学</th>
                <th className="py-2 pr-3">本サイトの該当章</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">入門編 / 4 級</td>
                <td className="py-2 pr-3">割合・百分率・場合の数(中学数学)</td>
                <td className="py-2 pr-3">第 1 章</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">3 級</td>
                <td className="py-2 pr-3">総和記号 Σ・指数法則(数学Ⅰ)</td>
                <td className="py-2 pr-3">第 1〜2 章</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">2 級</td>
                <td className="py-2 pr-3">対数・微分の概念(数学ⅡB)</td>
                <td className="py-2 pr-3">第 2〜3 章</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">準 1 級</td>
                <td className="py-2 pr-3">微分積分・線形代数(初級)</td>
                <td className="py-2 pr-3">第 3〜4 章</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">1 級</td>
                <td className="py-2 pr-3">解析・線形代数(中〜上級)</td>
                <td className="py-2 pr-3">第 3〜4 章 + 別書籍</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/roadmap"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 学習ロードマップ
        </Link>
        <Link
          href="/glossary"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          用語集 →
        </Link>
      </nav>
    </article>
  );
}
