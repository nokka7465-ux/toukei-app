import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "専門統計調査士とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "専門統計調査士の受験対象・出題範囲・対策方針を完全解説。統計調査士の上位資格で、標本設計の理論・公的統計の高度利用が問われます。無料の対策教材付き。",
  alternates: { canonical: "/certs/survey-specialist" },
  openGraph: {
    title: "専門統計調査士とは",
    description: "標本設計と公的統計の上位資格 専門統計調査士の対策ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "専門統計調査士はどんな試験ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "日本統計学会と統計質保証推進協会が主催する、統計調査士の上位資格。標本設計の理論・推定の精緻化(ウエイト・補正)・公的統計の高度利用といった、専門的な統計調査実務の知識を問います。",
      },
    },
    {
      "@type": "Question",
      name: "統計調査士と専門統計調査士、どう違う?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "統計調査士が『調査の流れ』を学ぶのに対し、専門統計調査士は『なぜその設計が最適なのか』『どう精度を保証するか』を理論的に深掘り。シリーズの完結編に位置付けられます。",
      },
    },
    {
      "@type": "Question",
      name: "受験条件はありますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "事前条件は特になく、誰でも受験可能。ただし統計調査士の合格を経てから挑戦するのが一般的です。",
      },
    },
  ],
};

export default function SurveySpecialistPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "専門統計調査士", href: "/certs/survey-specialist" },
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
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <span>専門統計調査士</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          専門統計調査士
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          <strong>日本統計学会・統計質保証推進協会</strong>{" "}
          が主催する、<strong>統計調査士の上位資格</strong>。標本設計・推定の理論的精緻、公的統計の高度な利用 ─ 統計調査の理論を深く問う検定で、調査会社・公的統計機関のキャリアにつながります。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          統計調査士で学ぶ『調査の流れ』に対し、専門統計調査士は『**なぜその設計が最適なのか**』『**どう精度を保証するか**』を理論的に深掘りします。標本誤差・デザイン効果・ウエイトバック・無回答補正・統計的開示制御などの精緻な議論が問われます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "標本設計の理論", body: "標本誤差・デザイン効果・層化/クラスター/多段抽出の精度比較" },
            { title: "推定の精緻化", body: "サンプリングウエイト・レシオ推定・事後層別・レイキング" },
            { title: "無回答処理", body: "MCAR/MAR/MNAR・多重代入(MI)・Hot Deck 法" },
            { title: "公的統計の高度利用", body: "国勢調査・労働力調査・SNA の標本設計詳細" },
            { title: "ミクロデータ", body: "オーダーメイド集計・匿名データ・統計的開示制御" },
            { title: "現代統計", body: "ビッグデータ・行政データ・SDGs 指標・国際統計" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Strategy</div>
        <h2 className="text-xl font-bold mb-3">対策の方針</h2>
        <ol className="list-decimal list-outside ml-6 space-y-2 text-[var(--muted-strong)] leading-relaxed">
          <li>
            <strong>統計調査士の知識を前提に</strong>:
            <Link href="/certs/survey" className="text-[var(--link)] hover:underline">
              統計調査士
            </Link>{" "}
            の合格を経てからが推奨。基本概念をすでに押さえていることが前提。
          </li>
          <li>
            <strong>本サイトの教科書で全体像を整理</strong>:{" "}
            <Link href="/certs/survey-specialist/textbook" className="text-[var(--link)] hover:underline">
              専門統計調査士 教科書
            </Link>{" "}
            で 4 章構成を通読。理論的精緻化と現代統計のトレンドを網羅。
          </li>
          <li>
            <strong>過去問演習</strong>: 公式問題集で出題形式に慣れる。記述問題の論理構成も練習。
          </li>
          <li>
            <strong>公的統計のニュース</strong>: 国勢調査・経済センサス・SDGs 指標などのトピックは時事性あり。総務省統計局・内閣府の公表をフォロー。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">専門統計調査士の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは専門統計調査士対策の <strong>4 章構成の教科書</strong> と{" "}
          <strong>演習問題</strong> を公開。標本設計・推定の精緻化・公的統計の高度利用・現代統計の課題まで、上位資格の主要範囲をカバーしています。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/survey-specialist/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/survey-specialist/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/survey"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 統計調査士について
        </Link>
        <Link
          href="/certs/qc-kentei"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          QC検定 →
        </Link>
      </nav>
    </article>
  );
}
