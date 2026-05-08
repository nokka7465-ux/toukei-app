import type { Metadata } from "next";
import Link from "next/link";
import { powerBiQuestions } from "@/data/questions/power-bi";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Power BI(PL-300)演習問題 ─ Power Query ・ DAX ・ 可視化の無料選択式問題",
  description:
    "Microsoft Power BI Data Analyst Associate(PL-300)対策の無料オリジナル選択式問題。Power Query ・ DAX(CALCULATE / Time Intelligence)・ ビジュアル ・ RLS ・ Fabric ・ Copilot などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/power-bi/quiz" },
  openGraph: {
    title: "Power BI(PL-300)演習問題",
    description:
      "PL-300 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/power-bi/quiz";

export default function PowerBiQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Power BI Data Analyst Associate", href: "/certs/power-bi" },
          { name: "演習問題", href: "/certs/power-bi/quiz" },
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
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <Link href="/certs/power-bi" className="hover:underline">
          Power BI Data Analyst Associate
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Power BI PL-300</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Power BI(PL-300)演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {powerBiQuestions.length}{" "}
          問のオリジナル類題。Power Query ・ M 言語 ・ DAX ・ ビジュアル ・ サービス ・ RLS ・ Microsoft Fabric ・ Copilot の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={powerBiQuestions}
        quizKey="power-bi"
        shareUrl={SHARE_URL}
        shareLabel="Power BI(PL-300)の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/power-bi/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Power BI(PL-300)の教科書を読む
        </Link>
        <Link
          href="/certs/power-bi"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Power BI(PL-300)の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
