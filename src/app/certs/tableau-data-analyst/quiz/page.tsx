import type { Metadata } from "next";
import Link from "next/link";
import { tableauDataAnalystQuestions } from "@/data/questions/tableau-data-analyst";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tableau Data Analyst 演習問題 ─ LOD / Calc / Dashboard / Server の無料選択式問題",
  description: "Tableau Certified Data Analyst 対策の無料オリジナル選択式問題。Connect / LOD / Table Calc / Dashboard / Story / Server / Cloud / Pulse の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/tableau-data-analyst/quiz" },
  openGraph: { title: "Tableau Data Analyst 演習問題", description: "Tableau DA の出題範囲を選択式問題で確認。", type: "article" },
};

const SHARE_URL = "https://toukei-app.com/certs/tableau-data-analyst/quiz";

export default function TableauDaQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Tableau Data Analyst", href: "/certs/tableau-data-analyst" }, { name: "演習問題", href: "/certs/tableau-data-analyst/quiz" }]} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><Link href="/certs/tableau-data-analyst" className="hover:underline">Tableau Data Analyst</Link>
        <span className="mx-2">›</span><span>演習問題</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Tableau Data Analyst</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Tableau Data Analyst 演習問題</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {tableauDataAnalystQuestions.length} 問のオリジナル類題。Connect / LOD / Calc / Filter / Dashboard / Story / Server / Cloud / Pulse の主要論点を実戦形式で確認できます。
        </p>
      </header>
      <Quiz questions={tableauDataAnalystQuestions} quizKey="tableau-data-analyst" shareUrl={SHARE_URL} shareLabel="Tableau Data Analyst の演習問題" />
      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/tableau-data-analyst/textbook" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← Tableau Data Analyst の教科書を読む</Link>
        <Link href="/certs/tableau-data-analyst" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">Tableau Data Analyst の概要に戻る</Link>
      </nav>
    </article>
  );
}
