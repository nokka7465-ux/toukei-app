import type { Metadata } from "next";
import Link from "next/link";
import { azureAi900Questions } from "@/data/questions/azure-ai-900";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure AI Fundamentals(AI-900)演習問題 ─ Azure AI ・ Copilot の無料選択式問題",
  description:
    "Microsoft Azure AI Fundamentals(AI-900)対策の無料オリジナル選択式問題。Azure ML ・ AI Vision ・ AI Language ・ Azure OpenAI ・ Microsoft Copilot などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/azure-ai-900/quiz" },
  openGraph: {
    title: "Azure AI Fundamentals(AI-900)演習問題",
    description:
      "AI-900 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/azure-ai-900/quiz";

export default function AzureAi900QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure AI Fundamentals", href: "/certs/azure-ai-900" },
          { name: "演習問題", href: "/certs/azure-ai-900/quiz" },
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
        <Link href="/certs/azure-ai-900" className="hover:underline">
          Azure AI Fundamentals
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Azure AI-900</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Azure AI Fundamentals(AI-900)演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {azureAi900Questions.length}{" "}
          問のオリジナル類題。Azure ML ・ AI Vision ・ AI Language ・ Speech ・ Azure OpenAI ・ Microsoft Copilot ファミリの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={azureAi900Questions}
        quizKey="azure-ai-900"
        shareUrl={SHARE_URL}
        shareLabel="Azure AI-900 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-ai-900/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure AI-900 の教科書を読む
        </Link>
        <Link
          href="/certs/azure-ai-900"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure AI-900 の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
