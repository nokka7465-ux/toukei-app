import type { Metadata } from "next";
import Link from "next/link";
import { dbSpecialistQuestions } from "@/data/questions/db-specialist";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "データベーススペシャリスト 演習問題 ─ 関係代数 ・ 正規化 ・ NoSQL の無料選択式問題",
  description:
    "データベーススペシャリスト試験対策の無料オリジナル選択式問題。関係代数 ・ 正規化 ・ ER 図 ・ SQL 上級 ・ ACID ・ チューニング ・ NoSQL ・ DWH の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/db-specialist/quiz" },
  openGraph: {
    title: "データベーススペシャリスト 演習問題",
    description:
      "DB スペシャリストの出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/db-specialist/quiz";

export default function DbSpecialistQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "データベーススペシャリスト", href: "/certs/db-specialist" },
          { name: "演習問題", href: "/certs/db-specialist/quiz" },
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
        <Link href="/certs/db-specialist" className="hover:underline">
          データベーススペシャリスト
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Database Specialist</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          データベーススペシャリスト 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {dbSpecialistQuestions.length}{" "}
          問のオリジナル類題。関係代数 ・ 正規化 ・ ER 図 ・ SQL 上級 ・ ACID ・ チューニング ・ NoSQL ・ DWH の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={dbSpecialistQuestions}
        quizKey="db-specialist"
        shareUrl={SHARE_URL}
        shareLabel="データベーススペシャリスト の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/db-specialist/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← データベーススペシャリストの教科書を読む
        </Link>
        <Link
          href="/certs/db-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          データベーススペシャリストの概要に戻る
        </Link>
      </nav>
    </article>
  );
}
