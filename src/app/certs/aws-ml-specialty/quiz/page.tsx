import type { Metadata } from "next";
import Link from "next/link";
import { awsMlSpecialtyQuestions } from "@/data/questions/aws-ml-specialty";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS MLS-C01 演習問題 ─ 数学 ・ アルゴリズム ・ SageMaker の無料選択式問題",
  description:
    "AWS Certified Machine Learning - Specialty(MLS-C01)対策の無料オリジナル選択式問題。Built-in アルゴリズム ・ SMOTE ・ HPO ・ Quantization ・ Model Monitor ・ Clarify などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/aws-ml-specialty/quiz" },
  openGraph: {
    title: "AWS MLS-C01 演習問題",
    description:
      "MLS-C01 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/aws-ml-specialty/quiz";

export default function AwsMlSpecialtyQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS ML Specialty", href: "/certs/aws-ml-specialty" },
          { name: "演習問題", href: "/certs/aws-ml-specialty/quiz" },
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
        <Link href="/certs/aws-ml-specialty" className="hover:underline">
          AWS ML Specialty
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · AWS MLS-C01</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS MLS-C01 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {awsMlSpecialtyQuestions.length}{" "}
          問のオリジナル類題。Built-in アルゴリズム ・ SMOTE ・ HPO ・ Quantization ・ Model Monitor ・ Clarify ・ Network Isolation の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={awsMlSpecialtyQuestions}
        quizKey="aws-ml-specialty"
        shareUrl={SHARE_URL}
        shareLabel="AWS MLS-C01 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-ml-specialty/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS ML Specialty の教科書を読む
        </Link>
        <Link
          href="/certs/aws-ml-specialty"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS ML Specialty の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
