import type { Metadata } from "next";
import Link from "next/link";
import { azureDp700Questions } from "@/data/questions/azure-dp-700";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Microsoft Fabric DP-700 演習問題 ─ Lakehouse / Spark / KQL / Pipeline の無料選択式問題",
  description:
    "Microsoft Fabric Data Engineer Associate(DP-700)対策の無料オリジナル選択式問題。Lakehouse / Notebook / Spark / Pipeline / Eventstream / KQL / Real-Time / Git Integration の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/azure-dp-700/quiz" },
  openGraph: {
    title: "Microsoft Fabric DP-700 演習問題",
    description:
      "DP-700 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/azure-dp-700/quiz";

export default function AzureDp700QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Microsoft Fabric DP-700", href: "/certs/azure-dp-700" },
          { name: "演習問題", href: "/certs/azure-dp-700/quiz" },
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
        <Link href="/certs/azure-dp-700" className="hover:underline">
          Microsoft Fabric DP-700
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Microsoft Fabric DP-700</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Fabric DP-700 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {azureDp700Questions.length}{" "}
          問のオリジナル類題。Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL DB ・ Real-Time Dashboard ・ Reflex ・ Git Integration の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={azureDp700Questions}
        quizKey="azure-dp-700"
        shareUrl={SHARE_URL}
        shareLabel="Microsoft Fabric DP-700 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-dp-700/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Microsoft Fabric DP-700 の教科書を読む
        </Link>
        <Link
          href="/certs/azure-dp-700"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Microsoft Fabric DP-700 の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
