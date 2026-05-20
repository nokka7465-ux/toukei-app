import type { Metadata } from "next";
import { azureAz305Textbook } from "@/data/textbooks/azure-az-305";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure AZ-305 教科書 ─ Solutions Architect Expert 認定の完全解説",
  description:
    "Azure Solutions Architect Expert(AZ-305)対策の無料教科書。Entra ID ・ Policy ・ コンピュート ・ ストレージ ・ DB ・ ネットワーク ・ セキュリティ ・ Business Continuity ・ Well-Architected ・ Cloud Adoption Framework を全 8 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-az-305/textbook" },
  openGraph: { title: "Azure AZ-305 教科書", description: "Azure Solutions Architect Expert 認定の対策をまとめた無料教科書。", type: "article" },
};

export default function AzureAz305TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Azure AZ-305", href: "/certs/azure-az-305" }, { name: "教科書", href: "/certs/azure-az-305/textbook" }]} />
      <CourseJsonLd name="Azure Solutions Architect Expert(AZ-305)対策教科書" description="Entra ID ・ Policy ・ コンピュート ・ ストレージ ・ DB ・ ネットワーク ・ セキュリティ ・ Business Continuity ・ Well-Architected ・ Cloud Adoption Framework を全 8 章で体系的に解説。" url="/certs/azure-az-305/textbook" about={["Azure", "Solutions Architect", "Identity", "Network", "Storage", "Security", "Business Continuity"]} />
      <TextbookView book={azureAz305Textbook} breadcrumb={[{ label: "ホーム", href: "/" }, { label: "関連検定" }, { label: "Azure AZ-305", href: "/certs/azure-az-305" }, { label: "教科書" }]} bottomLinks={[{ label: "← AZ-305 の概要に戻る", href: "/certs/azure-az-305" }, { label: "AZ-305 の問題を解く →", href: "/certs/azure-az-305/quiz", primary: true }]} />
    </>
  );
}
