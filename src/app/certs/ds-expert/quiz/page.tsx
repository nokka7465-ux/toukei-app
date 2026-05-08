import type { Metadata } from "next";
import Link from "next/link";
import { dsExpertQuestions } from "@/data/questions/ds-expert";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DS エキスパート 演習問題 ─ 高度統計 ・ ML ・ 因果推論の無料選択式問題",
  description:
    "統計検定 DS エキスパート対策の無料オリジナル選択式問題。EDA・GLM・ML・ベイズ・時系列・因果推論・MLOps の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/ds-expert/quiz" },
  openGraph: {
    title: "DS エキスパート 演習問題",
    description:
      "EDA から MLOps まで、DS エキスパートの出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/ds-expert/quiz";

export default function DsExpertQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS エキスパート", href: "/certs/ds-expert" },
          { name: "演習問題", href: "/certs/ds-expert/quiz" },
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
        <Link href="/certs/ds-expert" className="hover:underline">
          DS エキスパート
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · DS Expert</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          DS エキスパート 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {dsExpertQuestions.length}{" "}
          問のオリジナル類題。EDA / GLM / ML / ベイズ / 時系列 / 因果推論 / MLOps の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={dsExpertQuestions}
        quizKey="ds-expert"
        shareUrl={SHARE_URL}
        shareLabel="DS エキスパート の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-expert/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DS エキスパートの教科書を読む
        </Link>
        <Link
          href="/certs/ds-expert"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DS エキスパートの概要に戻る
        </Link>
      </nav>
    </article>
  );
}
