import type { Metadata } from "next";
import Link from "next/link";
import { Diagnose } from "@/components/Diagnose";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 級診断 ─ どの級から始めるか 3 問で分かる",
  description:
    "統計検定 4 級〜1 級のどの級から学び始めるべきか、3 つの質問に答えるだけで診断。学習経験・数学への慣れ・学習目的をもとに最適な級をご提案します。",
  alternates: { canonical: "/diagnose" },
  openGraph: {
    title: "級診断 ─ 統計検定どの級から始める?",
    description: "3 つの質問で、あなたに合った統計検定の級を診断します。",
    type: "website",
  },
};

const FAQ = [
  {
    q: "統計検定はどの級から受けるのが一般的ですか?",
    a: "受験者数が最も多いのは 2 級で、就職・転職でアピールできる『大学基礎レベル』とされます。一方、まずは合格体験が欲しい・数学に自信がない方は 3 級・4 級から段階的に進むのが定番です。",
  },
  {
    q: "級診断はどんな質問ですか?",
    a: "学習経験(これまでに学んだ統計の量)・数学への慣れ(高校数学/大学数学)・学習目的(就職・実務・教養)の 3 つを伺います。1 分で完了します。",
  },
  {
    q: "診断結果は確実ですか?",
    a: "あくまで目安です。級ごとに教科書のサンプルを実際に読んでみて、内容の手応えで最終判断するのがおすすめです。教科書一覧から各級の冒頭をすぐ確認できます。",
  },
];

export default function DiagnosePage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "級診断", href: "/diagnose" },
        ]}
      />
      <FaqJsonLd entries={FAQ} />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>級診断</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Diagnose</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          どの級から始める?
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          3
          つの簡単な質問にお答えください。あなたの学習経験・数学への慣れ・学習目的をもとに、最初に取り組むのに向いている級をご提案します(あくまで目安としてご利用ください)。
        </p>
      </header>

      <Diagnose />
    </article>
  );
}
