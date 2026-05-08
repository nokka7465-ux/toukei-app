import type { Metadata } from "next";
import Link from "next/link";
import { gcpGenAiLeaderQuestions } from "@/data/questions/gcp-gen-ai-leader";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP Generative AI Leader 演習問題 ─ Vertex AI ・ Gemini の無料選択式問題",
  description:
    "Google Cloud Generative AI Leader 対策の無料オリジナル選択式問題。Vertex AI ・ Gemini ファミリ ・ Workspace ・ Grounding ・ SynthID ・ BigQuery ML などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/gcp-gen-ai-leader/quiz" },
  openGraph: {
    title: "GCP Generative AI Leader 演習問題",
    description:
      "GCP の生成 AI 認定の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/gcp-gen-ai-leader/quiz";

export default function GcpGenAiLeaderQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Generative AI Leader", href: "/certs/gcp-gen-ai-leader" },
          { name: "演習問題", href: "/certs/gcp-gen-ai-leader/quiz" },
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
        <Link href="/certs/gcp-gen-ai-leader" className="hover:underline">
          GCP Generative AI Leader
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · GCP Gen AI Leader</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          GCP Generative AI Leader 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {gcpGenAiLeaderQuestions.length}{" "}
          問のオリジナル類題。Vertex AI ・ Gemini ・ Imagen ・ Workspace ・ Grounding ・ SynthID ・ BigQuery ML などの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={gcpGenAiLeaderQuestions}
        quizKey="gcp-gen-ai-leader"
        shareUrl={SHARE_URL}
        shareLabel="GCP Generative AI Leader の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/gcp-gen-ai-leader/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← GCP Gen AI Leader の教科書を読む
        </Link>
        <Link
          href="/certs/gcp-gen-ai-leader"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          GCP Gen AI Leader の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
