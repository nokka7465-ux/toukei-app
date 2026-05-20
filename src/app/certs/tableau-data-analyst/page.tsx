import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Tableau Certified Data Analyst とは ─ 受験対象・出題範囲・対策まとめ",
  description: "Tableau Certified Data Analyst の受験対象・出題範囲・対策方針を完全解説。Connect ・ Prep ・ LOD ・ Calc ・ Filter ・ Dashboard ・ Story ・ Server / Cloud ・ Pulse ・ Einstein Copilot ・ Performance までを実務 + ハンズオン Performance Task で問う Tableau の中級認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/tableau-data-analyst" },
  openGraph: { title: "Tableau Certified Data Analyst とは", description: "Tableau DA の対象・出題範囲・対策をまとめた解説ページ。", type: "article" },
};

const FAQ_ITEMS = certFaq["tableau-data-analyst"] ?? [];
const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) };

export default function TableauDaPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Tableau Data Analyst", href: "/certs/tableau-data-analyst" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><span>Tableau Data Analyst</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Tableau Certified Data Analyst</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Tableau Specialist の上位 ・ 中級 BI Analyst 認定**(2022+ 新体系)。**Connect / Prep / LOD / Calc / Filter / Dashboard / Story / Server-Cloud / Pulse / Einstein Copilot / Performance** までの **実務 + ハンズオン Performance Task** で問う総合試験です。**実務 3-6 ヶ月推奨**。
        </p>
      </header>
      <StudyFlow textbookHref="/certs/tableau-data-analyst/textbook" quizHref="/certs/tableau-data-analyst/quiz" examLabel="Tableau DA 本番" />
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose">
          **38 問 / 120 分 / 750 / 1000 / 250 USD / 有効期限 2 年**。**6-8 問のハンズオン Performance Task**(実機 Tableau 操作)あり。**Specialist と比べて Calculation / Dashboard 設計 / Server 管理が大きく深掘り**されます。
        </p>
      </section>
      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Connect / Prep", body: "Live / Extract(Hyper)/ Relationships / Cross-DB Join / Tableau Prep(Step Type / Conductor)。" },
            { title: "Calculation", body: "LOD(FIXED / INCLUDE / EXCLUDE)/ Table Calc / Logical / Date / String / Aggregation / ATTR。" },
            { title: "Filter / Parameter / Set", body: "Filter 順序 / Parameter Action / Set Action / Quick Filter / Context Filter。" },
            { title: "Visualization", body: "Show Me / Chart Type / Reference Line / Distribution / Bullet / Box Plot / Polygon Map。" },
            { title: "Dashboard / Story", body: "Container / Action(Filter / Highlight / URL / Set / Parameter / Navigate)/ Device Designer / Story Points。" },
            { title: "Server / Cloud", body: "Site Role / Permission / RLS / OLS / Virtual Connection / Connected Apps / Subscription / Bridge / Schedule。" },
            { title: "Performance", body: "Performance Recorder / Extract / Aggregation / Pre-join / 巨大 Custom SQL 回避。" },
            { title: "AI / Pulse / Einstein", body: "Explain Data / Forecast / Cluster / Tableau Pulse / Einstein Copilot for Tableau。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">Tableau Data Analyst の学習を始める</h2>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link href="/certs/tableau-data-analyst/textbook" className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]">教科書を読む →</Link>
          <Link href="/certs/tableau-data-analyst/quiz" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]">問題を解く</Link>
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="border-b border-[var(--page-border)] pb-3 last:border-b-0">
              <dt className="font-bold mb-1.5">Q. {item.q}</dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-relaxed">A. {item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <SchoolPicks category="BI" heading="Tableau Data Analyst 対策に強いスクール" />
      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/tableau-specialist" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← Tableau Specialist について</Link>
        <Link href="/certs/power-bi" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">Power BI PL-300 について →</Link>
      </nav>
    </article>
  );
}
