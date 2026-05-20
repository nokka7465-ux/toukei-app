import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Cybersecurity Architect Expert(SC-100)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft Cybersecurity Architect Expert(SC-100)の受験対象・出題範囲・対策方針を完全解説。Zero Trust ・ Defender XDR ・ Sentinel ・ Entra ID ・ Purview ・ Compliance ・ AI Security ・ Resilience を統合設計で問う Microsoft の Expert セキュリティ認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/sc-100" },
  openGraph: { title: "Microsoft Cybersecurity Architect Expert(SC-100)とは", description: "SC-100 の対象・出題範囲・対策をまとめた解説ページ。", type: "article" },
};

const FAQ_ITEMS = certFaq["sc-100"] ?? [];
const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) };

export default function Sc100Page() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "SC-100", href: "/certs/sc-100" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><span>SC-100</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Microsoft Certified: Cybersecurity Architect Expert(SC-100)</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Zero Trust + Microsoft Security Stack(Defender XDR ・ Sentinel ・ Entra ・ Purview ・ Intune)+ Compliance + AI Security + Resilience** の統合設計を担う Cybersecurity Architect Expert 認定(2022 リリース)。**AZ-500 / SC-200 / SC-300 / MS-500 等の Associate 取得 + Architect 実務経験**が前提の Expert レベル試験です。
        </p>
      </header>
      <StudyFlow textbookHref="/certs/sc-100/textbook" quizHref="/certs/sc-100/quiz" examLabel="SC-100 本番" />
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose">
          **CBT(Pearson VUE)or オンライン監督 / 40〜60 問 / 120 分前後 / 単一・複数選択 + D&D + ケーススタディ / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**ケーススタディ重視**で、顧客状況 → セキュリティ要件 → ソリューション設計 → ロードマップが中心。
        </p>
      </section>
      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Zero Trust 戦略", body: "3 原則 + 6 Pillars + MCRA(Microsoft Cybersecurity Reference Architecture)。" },
            { title: "Identity / Access(Entra)", body: "Entra ID Protection / Conditional Access / PIM / Permissions Management(CIEM)/ Verified ID / External ID / Workload ID / Authentication Strength / CAE。" },
            { title: "Defender XDR + Sentinel", body: "Defender for Endpoint / Identity / Office 365 / Cloud Apps / Cloud / IoT ・ Sentinel(SIEM+SOAR)・ Copilot for Security。" },
            { title: "Defender for Cloud + CNAPP", body: "CSPM + CWPP + CIEM + DevOps Security + AWS / GCP 統合 + Attack Path。" },
            { title: "Purview + Compliance", body: "Data Map / DLP / Insider Risk / Compliance Manager(320+ テンプレ)・ NIST CSF 2.0 / ISO 27001 / SOC 2 / GDPR / FedRAMP / ISMAP / FISC。" },
            { title: "AI Security", body: "OWASP LLM Top 10 + Defender AI / Purview AI Hub / Content Safety / Prompt Shields / Groundedness。" },
            { title: "Network / SASE / Container", body: "Microsegmentation / Global Secure Access(SASE)/ Container Security / DevSecOps / Shift Left。" },
            { title: "Resilience + Threat Model", body: "Ransomware 対策 / Identity Resilience / STRIDE / MITRE ATT&CK / Cyber Kill Chain。" },
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
        <h2 className="text-xl font-bold mb-3">SC-100 の学習を始める</h2>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link href="/certs/sc-100/textbook" className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]">教科書を読む →</Link>
          <Link href="/certs/sc-100/quiz" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]">問題を解く</Link>
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
      <SchoolPicks category="Azure" heading="SC-100 対策に強いスクール" />
      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/azure-az-305" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← AZ-305(Solutions Architect Expert)について</Link>
      </nav>
    </article>
  );
}
