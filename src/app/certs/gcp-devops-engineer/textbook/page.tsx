import type { Metadata } from "next";
import { gcpDevopsEngineerTextbook } from "@/data/textbooks/gcp-devops-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP Pro DevOps 教科書 ─ SRE / Observability / DataOps の完全解説",
  description: "GCP Professional Cloud DevOps Engineer 対策の無料教科書。SRE 原則 / SLI-SLO-Error Budget / Toil / Blameless Postmortem / Cloud Monitoring / Logging / Trace / Profiler / OpenTelemetry / Cloud Build / Deploy / Artifact Registry / Binary Authorization / Anthos / Terraform / Incident Response / DataOps を全 6 章で体系的に解説。",
  alternates: { canonical: "/certs/gcp-devops-engineer/textbook" },
  openGraph: { title: "GCP Pro DevOps 教科書", description: "GCP DevOps Engineer 認定の対策をまとめた無料教科書。SRE / Observability / DataOps カテゴリの中核。", type: "article" },
};

export default function GcpDevopsTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "GCP Pro DevOps", href: "/certs/gcp-devops-engineer" }, { name: "教科書", href: "/certs/gcp-devops-engineer/textbook" }]} />
      <CourseJsonLd name="GCP Professional Cloud DevOps Engineer 対策教科書" description="SRE / Observability / CI-CD / Incident Response / DataOps を全 6 章で体系的に解説。" url="/certs/gcp-devops-engineer/textbook" about={["GCP", "DevOps", "SRE", "Observability", "DataOps", "CI/CD", "Incident Response"]} />
      <TextbookView book={gcpDevopsEngineerTextbook} breadcrumb={[{ label: "ホーム", href: "/" }, { label: "関連検定" }, { label: "GCP Pro DevOps", href: "/certs/gcp-devops-engineer" }, { label: "教科書" }]} bottomLinks={[{ label: "← GCP Pro DevOps の概要に戻る", href: "/certs/gcp-devops-engineer" }, { label: "問題を解く →", href: "/certs/gcp-devops-engineer/quiz", primary: true }]} />
    </>
  );
}
