import type { Metadata } from "next";
import Link from "next/link";
import { tableauSpecialistQuestions } from "@/data/questions/tableau-specialist";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tableau Desktop Specialist 演習問題 ─ ピル ・ LOD ・ ダッシュボードの無料選択式問題",
  description:
    "Tableau Desktop Specialist 対策の無料オリジナル選択式問題。データ接続 ・ ピル ・ Marks ・ ダッシュボード ・ Action ・ LOD ・ パラメータ ・ Analytics などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/tableau-specialist/quiz" },
  openGraph: {
    title: "Tableau Desktop Specialist 演習問題",
    description:
      "Tableau Desktop Specialist の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/tableau-specialist/quiz";

export default function TableauSpecialistQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Tableau Desktop Specialist", href: "/certs/tableau-specialist" },
          { name: "演習問題", href: "/certs/tableau-specialist/quiz" },
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
        <Link href="/certs/tableau-specialist" className="hover:underline">
          Tableau Desktop Specialist
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Tableau Desktop Specialist</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Tableau Desktop Specialist 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {tableauSpecialistQuestions.length}{" "}
          問のオリジナル類題。データ接続 ・ ピル ・ Marks ・ ダッシュボード ・ Action ・ LOD ・ パラメータ ・ Analytics ・ 共有の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={tableauSpecialistQuestions}
        quizKey="tableau-specialist"
        shareUrl={SHARE_URL}
        shareLabel="Tableau Desktop Specialist の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/tableau-specialist/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Tableau Desktop Specialist の教科書を読む
        </Link>
        <Link
          href="/certs/tableau-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Tableau Desktop Specialist の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
