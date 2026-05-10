import type { Metadata } from "next";
import Link from "next/link";
import { gcpDataEngineerQuestions } from "@/data/questions/gcp-data-engineer";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP Pro Data Engineer 演習問題 ─ BigQuery / Dataflow / Pub/Sub の無料選択式問題",
  description:
    "GCP Professional Data Engineer 対策の無料オリジナル選択式問題。BigQuery 分割/クラスタ ・ Materialized View ・ BQML ・ Bigtable/Spanner ・ Dataflow Beam ・ Pub/Sub ・ Composer ・ Looker ・ Dataplex ・ VPC SC などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/gcp-data-engineer/quiz" },
  openGraph: {
    title: "GCP Pro Data Engineer 演習問題",
    description:
      "GCP Pro DE の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/gcp-data-engineer/quiz";

export default function GcpDataEngineerQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Professional Data Engineer", href: "/certs/gcp-data-engineer" },
          { name: "演習問題", href: "/certs/gcp-data-engineer/quiz" },
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
        <Link href="/certs/gcp-data-engineer" className="hover:underline">
          GCP Professional Data Engineer
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · GCP Pro DE</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          GCP Pro Data Engineer 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {gcpDataEngineerQuestions.length}{" "}
          問のオリジナル類題。BigQuery ・ GCS ・ Bigtable/Spanner ・ Dataflow ・ Pub/Sub ・ Dataproc ・ Composer/Workflows ・ Looker ・ Dataplex ・ セキュリティの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={gcpDataEngineerQuestions}
        quizKey="gcp-data-engineer"
        shareUrl={SHARE_URL}
        shareLabel="GCP Pro Data Engineer の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/gcp-data-engineer/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← GCP Pro DE の教科書を読む
        </Link>
        <Link
          href="/certs/gcp-data-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          GCP Pro DE の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
