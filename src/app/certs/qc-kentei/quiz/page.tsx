import type { Metadata } from "next";
import Link from "next/link";
import { qcKenteiQuestions } from "@/data/questions/qc-kentei";
import { Quiz } from "@/components/Quiz";

export const metadata: Metadata = {
  title: "QC検定 演習問題 ─ 品質管理・管理図・抜取検査・QC 7 つ道具",
  description:
    "QC 検定(品質管理検定)対策のオリジナル選択式問題。品質管理思想・SPC・管理図・工程能力指数・OC 曲線・QC 7 つ道具など、2-3 級の頻出トピックを実戦形式で確認できます。",
  openGraph: {
    title: "QC検定 演習問題",
    description: "品質管理の選択式問題で、QC 検定の出題トピックに慣れる。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app-eight.vercel.app/certs/qc-kentei/quiz";

export default function QcKenteiQuizPage() {
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
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <Link href="/certs/qc-kentei" className="hover:underline">
          QC検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · QC</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          QC検定 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {qcKenteiQuestions.length}{" "}
          問のオリジナル類題。品質管理思想・PDCA・管理図・工程能力(Cp/Cpk)・抜取検査(OC 曲線・AQL/LTPD)・QC 7 つ道具・新 QC 7 つ道具など、QC 検定 2-3 級の頻出トピックを実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={qcKenteiQuestions}
        quizKey="qc-kentei"
        shareUrl={SHARE_URL}
        shareLabel="QC検定(品質管理検定)の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/qc-kentei/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← QC検定の教科書を読む
        </Link>
        <Link
          href="/certs/qc-kentei"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          QC検定の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
