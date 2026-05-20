import type { Metadata } from "next";
import Link from "next/link";
import { gcpDevopsEngineerQuestions } from "@/data/questions/gcp-devops-engineer";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP Pro DevOps 演習問題 ─ SRE / Observability / CI-CD の無料選択式問題",
  description: "GCP Professional Cloud DevOps Engineer 対策の無料オリジナル選択式問題。SRE 原則 / SLI-SLO-Error Budget / Cloud Monitoring / Build / Deploy / Anthos / Terraform / Incident / DataOps の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/gcp-devops-engineer/quiz" },
  openGraph: { title: "GCP Pro DevOps 演習問題", description: "GCP Pro DevOps の出題範囲を選択式問題で確認。", type: "article" },
};

const SHARE_URL = "https://toukei-app.com/certs/gcp-devops-engineer/quiz";

export default function GcpDevopsQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "GCP Pro DevOps", href: "/certs/gcp-devops-engineer" }, { name: "演習問題", href: "/certs/gcp-devops-engineer/quiz" }]} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><Link href="/certs/gcp-devops-engineer" className="hover:underline">GCP Pro DevOps</Link>
        <span className="mx-2">›</span><span>演習問題</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · GCP Pro DevOps</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">GCP Pro DevOps 演習問題</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {gcpDevopsEngineerQuestions.length} 問のオリジナル類題。SRE 原則 / SLI-SLO-Error Budget / Toil / Observability / CI-CD / Incident Response / DataOps の主要論点を実戦形式で確認できます。本サイト初の SRE / Observability / DataOps カテゴリ。
        </p>
      </header>
      <Quiz questions={gcpDevopsEngineerQuestions} quizKey="gcp-devops-engineer" shareUrl={SHARE_URL} shareLabel="GCP Pro DevOps の演習問題" />
      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/gcp-devops-engineer/textbook" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← GCP Pro DevOps の教科書を読む</Link>
        <Link href="/certs/gcp-devops-engineer" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">GCP Pro DevOps の概要に戻る</Link>
      </nav>
    </article>
  );
}
