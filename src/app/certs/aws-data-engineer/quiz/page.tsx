import type { Metadata } from "next";
import Link from "next/link";
import { awsDataEngineerQuestions } from "@/data/questions/aws-data-engineer";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS DEA-C01 演習問題 ─ Glue / Athena / Redshift / Kinesis の無料選択式問題",
  description:
    "AWS Certified Data Engineer - Associate(DEA-C01)対策の無料オリジナル選択式問題。Parquet ・ Partition Projection ・ Job Bookmarks ・ Distribution Style ・ Enhanced Fan-Out ・ Iceberg ・ Lake Formation などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/aws-data-engineer/quiz" },
  openGraph: {
    title: "AWS DEA-C01 演習問題",
    description:
      "DEA-C01 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/aws-data-engineer/quiz";

export default function AwsDataEngineerQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS Data Engineer Associate", href: "/certs/aws-data-engineer" },
          { name: "演習問題", href: "/certs/aws-data-engineer/quiz" },
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
        <Link href="/certs/aws-data-engineer" className="hover:underline">
          AWS Data Engineer Associate
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · AWS DEA-C01</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS DEA-C01 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {awsDataEngineerQuestions.length}{" "}
          問のオリジナル類題。S3 ・ Glue ・ Athena ・ Redshift ・ EMR ・ Kinesis / MSK ・ Step Functions / MWAA ・ Iceberg ・ Lake Formation ・ セキュリティの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={awsDataEngineerQuestions}
        quizKey="aws-data-engineer"
        shareUrl={SHARE_URL}
        shareLabel="AWS DEA-C01 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-data-engineer/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS DEA-C01 の教科書を読む
        </Link>
        <Link
          href="/certs/aws-data-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS DEA-C01 の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
