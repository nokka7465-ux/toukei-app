import type { Metadata } from "next";
import Link from "next/link";
import { databricksDataEngineerQuestions } from "@/data/questions/databricks-data-engineer";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Databricks Data Engineer 演習問題 ─ Delta Lake / DLT / Unity Catalog の無料選択式問題",
  description:
    "Databricks Certified Data Engineer Associate 対策の無料オリジナル選択式問題。Lakehouse ・ Delta Lake(OPTIMIZE/VACUUM/MERGE)・ Auto Loader ・ DLT ・ Workflows ・ Unity Catalog ・ MLflow / DBRX などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/databricks-data-engineer/quiz" },
  openGraph: {
    title: "Databricks Data Engineer Associate 演習問題",
    description:
      "Data Engineer Associate の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/databricks-data-engineer/quiz";

export default function DatabricksDataEngineerQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Databricks Data Engineer Associate", href: "/certs/databricks-data-engineer" },
          { name: "演習問題", href: "/certs/databricks-data-engineer/quiz" },
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
        <Link href="/certs/databricks-data-engineer" className="hover:underline">
          Databricks Data Engineer Associate
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Databricks Data Engineer Associate</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Databricks Data Engineer Associate 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {databricksDataEngineerQuestions.length}{" "}
          問のオリジナル類題。Lakehouse ・ Delta Lake ・ Auto Loader ・ DLT ・ Workflows ・ Unity Catalog ・ MLflow / DBRX の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={databricksDataEngineerQuestions}
        quizKey="databricks-data-engineer"
        shareUrl={SHARE_URL}
        shareLabel="Databricks Data Engineer Associate の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/databricks-data-engineer/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Databricks Data Engineer Associate の教科書を読む
        </Link>
        <Link
          href="/certs/databricks-data-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Databricks Data Engineer Associate の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
