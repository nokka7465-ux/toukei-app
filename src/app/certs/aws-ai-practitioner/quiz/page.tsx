import type { Metadata } from "next";
import Link from "next/link";
import { awsAiPractitionerQuestions } from "@/data/questions/aws-ai-practitioner";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS AI Practitioner 演習問題 ─ Bedrock / SageMaker の無料選択式問題",
  description:
    "AWS Certified AI Practitioner(AIF-C01)対策の無料オリジナル選択式問題。AWS AI サービス・Bedrock・SageMaker・プロンプト・責任ある AI・ユースケース選択など頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/aws-ai-practitioner/quiz" },
  openGraph: {
    title: "AWS AI Practitioner 演習問題",
    description:
      "AWS の AI 認定 AIF-C01 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/aws-ai-practitioner/quiz";

export default function AwsAiPractitionerQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS AI Practitioner", href: "/certs/aws-ai-practitioner" },
          { name: "演習問題", href: "/certs/aws-ai-practitioner/quiz" },
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
        <Link href="/certs/aws-ai-practitioner" className="hover:underline">
          AWS AI Practitioner
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · AWS AI Practitioner</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS AI Practitioner 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {awsAiPractitionerQuestions.length}{" "}
          問のオリジナル類題。AWS AI サービス選択 ・ Bedrock ・ SageMaker ・ プロンプト ・ 責任ある AI ・ ユースケース別アーキテクチャの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={awsAiPractitionerQuestions}
        quizKey="aws-ai-practitioner"
        shareUrl={SHARE_URL}
        shareLabel="AWS AI Practitioner の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-ai-practitioner/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS AI Practitioner の教科書を読む
        </Link>
        <Link
          href="/certs/aws-ai-practitioner"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS AI Practitioner の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
