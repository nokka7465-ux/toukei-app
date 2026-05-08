import type { Metadata } from "next";
import Link from "next/link";
import { dxKenteiQuestions } from "@/data/questions/dx-kentei";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DX 検定 演習問題 ─ 最新 IT トレンドの無料選択式問題",
  description:
    "DX 検定対策の無料オリジナル選択式問題。AI / クラウド / IoT / 5G / ブロックチェーン / RPA / アジャイル / セキュリティ / DX 人材 ・ 経営の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/dx-kentei/quiz" },
  openGraph: {
    title: "DX 検定 演習問題",
    description:
      "DX 検定の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/dx-kentei/quiz";

export default function DxKenteiQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DX 検定", href: "/certs/dx-kentei" },
          { name: "演習問題", href: "/certs/dx-kentei/quiz" },
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
        <Link href="/certs/dx-kentei" className="hover:underline">
          DX 検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · DX Kentei</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          DX 検定 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {dxKenteiQuestions.length}{" "}
          問のオリジナル類題。DX 概念 ・ AI ・ クラウド ・ IoT ・ 5G ・ ブロックチェーン ・ RPA ・ アジャイル ・ セキュリティ ・ BI ・ 経営の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={dxKenteiQuestions}
        quizKey="dx-kentei"
        shareUrl={SHARE_URL}
        shareLabel="DX 検定 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/dx-kentei/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DX 検定の教科書を読む
        </Link>
        <Link
          href="/certs/dx-kentei"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DX 検定の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
