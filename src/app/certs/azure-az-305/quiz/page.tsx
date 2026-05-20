import type { Metadata } from "next";
import Link from "next/link";
import { azureAz305Questions } from "@/data/questions/azure-az-305";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure AZ-305 演習問題 ─ Solutions Architect Expert の無料選択式問題",
  description:
    "Azure Solutions Architect Expert(AZ-305)対策の無料オリジナル選択式問題。Entra ID / Policy / VM / AKS / Storage / SQL / Cosmos / Network / Security / BCP / Cost の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/azure-az-305/quiz" },
  openGraph: { title: "Azure AZ-305 演習問題", description: "AZ-305 の出題範囲を選択式問題で確認。", type: "article" },
};

const SHARE_URL = "https://toukei-app.com/certs/azure-az-305/quiz";

export default function AzureAz305QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Azure AZ-305", href: "/certs/azure-az-305" }, { name: "演習問題", href: "/certs/azure-az-305/quiz" }]} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><Link href="/certs/azure-az-305" className="hover:underline">Azure AZ-305</Link>
        <span className="mx-2">›</span><span>演習問題</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Azure AZ-305</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Azure AZ-305 演習問題</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {azureAz305Questions.length} 問のオリジナル類題。Identity / Governance / Compute / Storage / DB / Network / Security / BCP / Cost / Architecture の主要論点を実戦形式で確認できます。
        </p>
      </header>
      <Quiz questions={azureAz305Questions} quizKey="azure-az-305" shareUrl={SHARE_URL} shareLabel="Azure AZ-305 の演習問題" />
      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/azure-az-305/textbook" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← Azure AZ-305 の教科書を読む</Link>
        <Link href="/certs/azure-az-305" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">Azure AZ-305 の概要に戻る</Link>
      </nav>
    </article>
  );
}
