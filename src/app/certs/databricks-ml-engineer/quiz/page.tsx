import type { Metadata } from "next";
import Link from "next/link";
import { databricksMlEngineerQuestions } from "@/data/questions/databricks-ml-engineer";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Databricks ML Engineer 演習問題 ─ MLflow / Mosaic AI / MLOps の無料選択式問題",
  description: "Databricks Certified ML Engineer Professional 対策の無料オリジナル選択式問題。MLflow / Feature Store / AutoML / Model Serving / Mosaic AI / MLOps の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/databricks-ml-engineer/quiz" },
  openGraph: { title: "Databricks ML Engineer 演習問題", description: "Databricks ML Engineer の出題範囲を選択式問題で確認。", type: "article" },
};

const SHARE_URL = "https://toukei-app.com/certs/databricks-ml-engineer/quiz";

export default function DatabricksMlQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Databricks ML Engineer", href: "/certs/databricks-ml-engineer" }, { name: "演習問題", href: "/certs/databricks-ml-engineer/quiz" }]} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><Link href="/certs/databricks-ml-engineer" className="hover:underline">Databricks ML Engineer</Link>
        <span className="mx-2">›</span><span>演習問題</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Databricks ML Engineer</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Databricks ML Engineer 演習問題</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {databricksMlEngineerQuestions.length} 問のオリジナル類題。MLflow / Feature Store / AutoML / Hyperopt / Model Serving / Lakehouse Monitoring / Mosaic AI / Asset Bundle の主要論点を実戦形式で確認できます。
        </p>
      </header>
      <Quiz questions={databricksMlEngineerQuestions} quizKey="databricks-ml-engineer" shareUrl={SHARE_URL} shareLabel="Databricks ML Engineer の演習問題" />
      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/databricks-ml-engineer/textbook" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← Databricks ML Engineer の教科書を読む</Link>
        <Link href="/certs/databricks-ml-engineer" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">Databricks ML Engineer の概要に戻る</Link>
      </nav>
    </article>
  );
}
