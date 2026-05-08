import type { Metadata } from "next";
import Link from "next/link";
import { awsSaaQuestions } from "@/data/questions/aws-saa";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS SAA-C03 演習問題 ─ EC2 / S3 / VPC の無料選択式問題",
  description:
    "AWS Certified Solutions Architect ─ Associate(SAA-C03)対策の無料オリジナル選択式問題。EC2 / S3 / RDS / DynamoDB / VPC / Auto Scaling / DR / メッセージングの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/aws-saa/quiz" },
  openGraph: {
    title: "AWS SAA-C03 演習問題",
    description:
      "SAA-C03 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/aws-saa/quiz";

export default function AwsSaaQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS Solutions Architect Associate", href: "/certs/aws-saa" },
          { name: "演習問題", href: "/certs/aws-saa/quiz" },
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
        <Link href="/certs/aws-saa" className="hover:underline">
          AWS Solutions Architect Associate
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · AWS SAA-C03</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS SAA-C03 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {awsSaaQuestions.length}{" "}
          問のオリジナル類題。EC2 / S3 / RDS / DynamoDB / VPC / Auto Scaling / DR / メッセージング / コスト最適化の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={awsSaaQuestions}
        quizKey="aws-saa"
        shareUrl={SHARE_URL}
        shareLabel="AWS SAA-C03 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-saa/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS SAA の教科書を読む
        </Link>
        <Link
          href="/certs/aws-saa"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS SAA の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
