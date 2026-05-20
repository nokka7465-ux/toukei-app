import type { Metadata } from "next";
import Link from "next/link";
import { webAnalyticsQuestions } from "@/data/questions/web-analytics";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ウェブ解析士(初級)演習問題 ─ GA4 / GTM / KPI の無料選択式問題",
  description:
    "ウェブ解析士(初級)対策の無料オリジナル選択式問題。KGI/KPI ・ GA4 ・ GTM ・ アトリビューション ・ A/B テスト ・ Looker Studio ・ Cookieless 対応の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/web-analytics/quiz" },
  openGraph: {
    title: "ウェブ解析士(初級)演習問題",
    description:
      "ウェブ解析士(初級)の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/web-analytics/quiz";

export default function WebAnalyticsQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ウェブ解析士", href: "/certs/web-analytics" },
          { name: "演習問題", href: "/certs/web-analytics/quiz" },
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
        <Link href="/certs/web-analytics" className="hover:underline">
          ウェブ解析士
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Web Analytics Consultant</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ウェブ解析士(初級)演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {webAnalyticsQuestions.length}{" "}
          問のオリジナル類題。KGI/KPI 設計 ・ GA4 のイベントモデル ・ GTM 実装 ・ アトリビューションモデル ・ A/B テスト ・ ROAS/CPA ・ Looker Studio ・ プライバシー対応の主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={webAnalyticsQuestions}
        quizKey="web-analytics"
        shareUrl={SHARE_URL}
        shareLabel="ウェブ解析士(初級)の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/web-analytics/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← ウェブ解析士の教科書を読む
        </Link>
        <Link
          href="/certs/web-analytics"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ウェブ解析士の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
