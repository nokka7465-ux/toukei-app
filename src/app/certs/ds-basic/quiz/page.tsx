import type { Metadata } from "next";
import Link from "next/link";
import { dsBasicQuestions } from "@/data/questions/ds-basic";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DS基礎 演習問題 ─ Excel・データ分析の無料選択式問題",
  description:
    "統計検定 データサイエンス基礎(DS基礎)対策の無料オリジナル選択式問題。Excel関数・ピボット・回帰など、DS基礎の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/ds-basic/quiz" },
  openGraph: {
    title: "DS基礎 演習問題",
    description:
      "Excel・データ分析の選択式問題で、DS基礎の出題トピックに慣れる。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/ds-basic/quiz";

export default function DsBasicQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS基礎", href: "/certs/ds-basic" },
          { name: "演習問題", href: "/certs/ds-basic/quiz" },
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
        <Link href="/certs/ds-basic" className="hover:underline">
          DS基礎
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · DS Base</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          DS基礎 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {dsBasicQuestions.length}{" "}
          問のオリジナル類題。Excel 関数・ピボット・グラフ・回帰など、DS基礎の頻出トピックを実戦形式で確認できます。1 問 1 答モードで「解答する → 解説 → 次の問題」の流れで学べます。
        </p>
      </header>

      <Quiz
        questions={dsBasicQuestions}
        quizKey="ds-basic"
        shareUrl={SHARE_URL}
        shareLabel="統計検定 DS基礎 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-basic/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DS基礎の教科書を読む
        </Link>
        <Link
          href="/certs/ds-basic"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DS基礎の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
