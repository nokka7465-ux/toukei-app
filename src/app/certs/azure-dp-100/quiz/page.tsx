import type { Metadata } from "next";
import Link from "next/link";
import { azureDp100Questions } from "@/data/questions/azure-dp-100";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure DP-100 演習問題 ─ Azure ML ・ AutoML ・ Sweep ・ RAI の無料選択式問題",
  description:
    "Microsoft Azure Data Scientist Associate(DP-100)対策の無料オリジナル選択式問題。Workspace ・ Compute ・ AutoML ・ Sweep ・ Endpoint ・ Responsible AI ・ MLOps などの頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/azure-dp-100/quiz" },
  openGraph: {
    title: "Azure DP-100 演習問題",
    description:
      "DP-100 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/azure-dp-100/quiz";

export default function AzureDp100QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure DP-100", href: "/certs/azure-dp-100" },
          { name: "演習問題", href: "/certs/azure-dp-100/quiz" },
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
        <Link href="/certs/azure-dp-100" className="hover:underline">
          Azure DP-100
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Azure DP-100</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Azure DP-100 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {azureDp100Questions.length}{" "}
          問のオリジナル類題。Workspace ・ Compute ・ AutoML ・ Sweep ・ Endpoint ・ Responsible AI ・ MLOps ・ セキュリティの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={azureDp100Questions}
        quizKey="azure-dp-100"
        shareUrl={SHARE_URL}
        shareLabel="Azure DP-100 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-dp-100/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Azure DP-100 の教科書を読む
        </Link>
        <Link
          href="/certs/azure-dp-100"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure DP-100 の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
