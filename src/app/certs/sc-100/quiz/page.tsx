import type { Metadata } from "next";
import Link from "next/link";
import { sc100Questions } from "@/data/questions/sc-100";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SC-100 演習問題 ─ Microsoft Cybersecurity Architect Expert の無料選択式問題",
  description:
    "Microsoft Cybersecurity Architect Expert(SC-100)対策の無料オリジナル選択式問題。Zero Trust / Defender XDR / Sentinel / Entra / Purview / Compliance / AI Security の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/sc-100/quiz" },
  openGraph: { title: "SC-100 演習問題", description: "SC-100 の出題範囲を選択式問題で確認。", type: "article" },
};

const SHARE_URL = "https://toukei-app.com/certs/sc-100/quiz";

export default function Sc100QuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "SC-100", href: "/certs/sc-100" }, { name: "演習問題", href: "/certs/sc-100/quiz" }]} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><Link href="/certs/sc-100" className="hover:underline">SC-100</Link>
        <span className="mx-2">›</span><span>演習問題</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · SC-100</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">SC-100 演習問題</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {sc100Questions.length} 問のオリジナル類題。Zero Trust / Microsoft Security Stack / Compliance / AI Security の主要論点を実戦形式で確認できます。
        </p>
      </header>
      <Quiz questions={sc100Questions} quizKey="sc-100" shareUrl={SHARE_URL} shareLabel="SC-100 の演習問題" />
      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/sc-100/textbook" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← SC-100 の教科書を読む</Link>
        <Link href="/certs/sc-100" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">SC-100 の概要に戻る</Link>
      </nav>
    </article>
  );
}
