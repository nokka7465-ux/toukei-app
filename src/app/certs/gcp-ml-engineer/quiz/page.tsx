import type { Metadata } from "next";
import Link from "next/link";
import { gcpMlEngineerQuestions } from "@/data/questions/gcp-ml-engineer";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP ML Engineer 演習問題 ─ Vertex AI ・ BQML ・ Kubeflow の無料選択式問題",
  description:
    "Google Cloud Professional Machine Learning Engineer 対策の無料オリジナル選択式問題。Vertex AI ・ BQML ・ TPU ・ Kubeflow Pipelines ・ Model Monitoring ・ Explanations などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/gcp-ml-engineer/quiz" },
  openGraph: {
    title: "GCP ML Engineer 演習問題",
    description:
      "GCP Professional ML Engineer の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/gcp-ml-engineer/quiz";

export default function GcpMlEngineerQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Professional ML Engineer", href: "/certs/gcp-ml-engineer" },
          { name: "演習問題", href: "/certs/gcp-ml-engineer/quiz" },
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
        <Link href="/certs/gcp-ml-engineer" className="hover:underline">
          GCP Professional ML Engineer
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · GCP ML Engineer</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          GCP Professional ML Engineer 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {gcpMlEngineerQuestions.length}{" "}
          問のオリジナル類題。Vertex AI ・ BQML ・ TPU ・ Kubeflow Pipelines ・ Model Monitoring ・ Explanations ・ Gemini の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={gcpMlEngineerQuestions}
        quizKey="gcp-ml-engineer"
        shareUrl={SHARE_URL}
        shareLabel="GCP Professional ML Engineer の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/gcp-ml-engineer/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← GCP ML Engineer の教科書を読む
        </Link>
        <Link
          href="/certs/gcp-ml-engineer"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          GCP ML Engineer の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
