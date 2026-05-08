import type { Metadata } from "next";
import Link from "next/link";
import { azureAi102Questions } from "@/data/questions/azure-ai-102";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure AI-102 演習問題 ─ Azure OpenAI ・ AI Search ・ Foundry の無料選択式問題",
  description:
    "Microsoft AI-102(Azure AI Engineer Associate)対策の無料オリジナル選択式問題。Azure OpenAI ・ AI Search ・ RAG ・ Vision ・ Language ・ Speech ・ Foundry ・ Agent ・ Content Safety などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/azure-ai-102/quiz" },
  openGraph: {
    title: "Azure AI-102 演習問題",
    description:
      "AI-102 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/azure-ai-102/quiz";

export default function AzureAi102QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure AI Engineer Associate", href: "/certs/azure-ai-102" },
          { name: "演習問題", href: "/certs/azure-ai-102/quiz" },
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
        <Link href="/certs/azure-ai-102" className="hover:underline">
          Azure AI Engineer Associate
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Azure AI-102</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Azure AI-102 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {azureAi102Questions.length}{" "}
          問のオリジナル類題。Azure OpenAI ・ AI Search ・ RAG ・ Vision ・ Language ・ Speech ・ Foundry ・ Agent Service ・ Content Safety の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={azureAi102Questions}
        quizKey="azure-ai-102"
        shareUrl={SHARE_URL}
        shareLabel="Azure AI-102 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-ai-102/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure AI-102 の教科書を読む
        </Link>
        <Link
          href="/certs/azure-ai-102"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure AI-102 の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
