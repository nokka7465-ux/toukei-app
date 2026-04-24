import type { Metadata } from "next";
import Link from "next/link";
import { Diagnose } from "@/components/Diagnose";

export const metadata: Metadata = {
  title: "級診断 ─ あなたに合った級は?",
  description:
    "3 つの質問に答えるだけで、統計検定のどの級から学び始めるとよいかをご提案します。",
  openGraph: {
    title: "級診断 ─ 統計検定どの級から始める?",
    description: "3 つの質問で、あなたに合った統計検定の級を診断します。",
    type: "website",
  },
};

export default function DiagnosePage() {
  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>級診断</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Diagnose</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          どの級から始める?
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          3
          つの簡単な質問にお答えください。あなたの学習経験・数学への慣れ・学習目的をもとに、最初に取り組むのに向いている級をご提案します(あくまで目安としてご利用ください)。
        </p>
      </header>

      <Diagnose />
    </article>
  );
}
