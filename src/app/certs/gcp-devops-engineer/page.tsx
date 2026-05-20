import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "GCP Professional Cloud DevOps Engineer とは ─ SRE / Observability / DataOps カテゴリの中核",
  description: "GCP Professional Cloud DevOps Engineer の受験対象・出題範囲・対策方針を完全解説。SRE 原則(SLI / SLO / Error Budget / Toil / Blameless Postmortem)・ Cloud Monitoring / Logging / Trace / Profiler / OpenTelemetry ・ Cloud Build / Deploy / Artifact Registry / Binary Authorization ・ Anthos ・ Terraform ・ Incident Response ・ DataOps を統合実装で問う Google の Professional 認定。**本サイト初の SRE / Observability / DataOps カテゴリの中核**。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/gcp-devops-engineer" },
  openGraph: { title: "GCP Professional Cloud DevOps Engineer とは", description: "GCP Pro DevOps の対象・出題範囲・対策をまとめた解説ページ。", type: "article" },
};

const FAQ_ITEMS = certFaq["gcp-devops-engineer"] ?? [];
const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) };

export default function GcpDevopsPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "GCP Pro DevOps", href: "/certs/gcp-devops-engineer" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><span>GCP Pro DevOps</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification · SRE / Observability / DataOps カテゴリ</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">GCP Professional Cloud DevOps Engineer</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **SRE / DevOps / CI-CD / Observability / Incident Response / DataOps** を統合する Google Cloud の Professional 認定。**Google は SRE の発祥企業**として **SLI / SLO / Error Budget / Toil / Blameless Postmortem** の概念を体系化しており、本試験は SRE 実務知識を強く問います。**本サイト初の SRE / Observability / DataOps カテゴリ**の中核認定です。
        </p>
      </header>
      <StudyFlow textbookHref="/certs/gcp-devops-engineer/textbook" quizHref="/certs/gcp-devops-engineer/quiz" examLabel="GCP Pro DevOps 本番" />
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose">
          **50-60 問 / 120 分 / 200 USD / 有効期限 2 年**。**前提**: GCP 実務 3 年(うち DevOps 1 年)推奨。**Google SRE Book / SRE Workbook 必読**。
        </p>
      </section>
      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "SRE 5 原則", body: "Embrace Risk / SLO / Eliminate Toil / Monitor / Blameless Postmortem。" },
            { title: "SLI / SLO / Error Budget", body: "4 Golden Signals(Latency / Traffic / Errors / Saturation)/ Burn Rate Alert(Fast/Slow)/ Cloud Monitoring SLO 機能。" },
            { title: "Observability 3 Pillars + Profile", body: "Cloud Monitoring / Logging / Trace / Profiler / OpenTelemetry(OTel)・ Logs-based Metrics ・ Custom Metrics。" },
            { title: "CI/CD", body: "Cloud Build / Cloud Deploy(Canary / Blue-Green)/ Artifact Registry / Binary Authorization / Cosign-Sigstore / SLSA。" },
            { title: "Compute 階層", body: "GKE Autopilot / Standard / Cloud Run / Functions Gen 2 / Anthos(Multi-Cloud)。" },
            { title: "IaC + Hybrid", body: "Terraform + Google Provider / Cloud Foundation Toolkit / Config Connector / Anthos Config Management。" },
            { title: "Incident Response", body: "IC / Comms / Ops Lead / Planning ・ PagerDuty / Opsgenie ・ Blameless Postmortem ・ Five Whys。" },
            { title: "DataOps + Cost + Security", body: "Data Pipeline CI/CD / dbt / Dataform / Airflow ・ CUD / Spot / Custom MT ・ Cloud Armor / Workload Identity Federation / VPC-SC。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">SRE / Observability / DataOps カテゴリ</div>
        <h2 className="text-xl font-bold mb-3">本サイト初の新カテゴリ</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed">
          GCP Pro DevOps を起点に、今後 **AWS Certified DevOps Engineer - Professional**・ **Azure DevOps Engineer Expert(AZ-400)**・ **CNCF CKA / CKAD / CKS**・ **HashiCorp Terraform Associate**・ **FinOps Practitioner** など SRE / Observability / DataOps 領域の認定を本サイトに段階的に追加予定です。
        </p>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">GCP Pro DevOps の学習を始める</h2>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link href="/certs/gcp-devops-engineer/textbook" className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]">教科書を読む →</Link>
          <Link href="/certs/gcp-devops-engineer/quiz" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]">問題を解く</Link>
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
      <SchoolPicks category="GCP" heading="GCP Pro DevOps 対策に強いスクール" />
      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/gcp-data-engineer" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← GCP Pro Data Engineer について</Link>
        <Link href="/certs/gcp-ml-engineer" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">GCP Pro ML Engineer について →</Link>
      </nav>
    </article>
  );
}
