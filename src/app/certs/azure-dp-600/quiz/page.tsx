import type { Metadata } from "next";
import Link from "next/link";
import { azureDp600Questions } from "@/data/questions/azure-dp-600";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Microsoft Fabric DP-600 演習問題 ─ OneLake / Direct Lake / DAX の無料選択式問題",
  description:
    "Microsoft Fabric Analytics Engineer Associate(DP-600)対策の無料オリジナル選択式問題。OneLake / Lakehouse / Warehouse / Semantic Model / Direct Lake / DAX / Power BI / Real-Time / Pipeline / Notebook の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/azure-dp-600/quiz" },
  openGraph: {
    title: "Microsoft Fabric DP-600 演習問題",
    description:
      "DP-600 の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/azure-dp-600/quiz";

export default function AzureDp600QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Microsoft Fabric DP-600", href: "/certs/azure-dp-600" },
          { name: "演習問題", href: "/certs/azure-dp-600/quiz" },
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
        <Link href="/certs/azure-dp-600" className="hover:underline">
          Microsoft Fabric DP-600
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Microsoft Fabric DP-600</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Fabric DP-600 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {azureDp600Questions.length}{" "}
          問のオリジナル類題。OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Pipeline ・ Real-Time Intelligence ・ Git Integration の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={azureDp600Questions}
        quizKey="azure-dp-600"
        shareUrl={SHARE_URL}
        shareLabel="Microsoft Fabric DP-600 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/azure-dp-600/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Microsoft Fabric DP-600 の教科書を読む
        </Link>
        <Link
          href="/certs/azure-dp-600"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Microsoft Fabric DP-600 の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
