import type { Metadata } from "next";
import { azureDp203Textbook } from "@/data/textbooks/azure-dp-203";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure DP-203 教科書 ─ Synapse / ADF / Databricks / Stream Analytics を完全解説",
  description:
    "Microsoft Azure Data Engineer Associate(DP-203)対策の無料教科書。ADLS Gen2 ・ Cosmos DB ・ Synapse(3 プール)・ ADF ・ Stream Analytics ・ Event Hubs ・ Databricks ・ Lakehouse ・ Power BI ・ Purview ・ 監視 ・ セキュリティを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-dp-203/textbook" },
  openGraph: {
    title: "Azure DP-203 教科書",
    description:
      "Azure データエンジニアリング Associate 認定の対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AzureDp203TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure DP-203", href: "/certs/azure-dp-203" },
          { name: "教科書", href: "/certs/azure-dp-203/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft Azure Data Engineer Associate(DP-203)対策教科書"
        description="ADLS Gen2 ・ Cosmos DB ・ Synapse ・ ADF ・ Stream Analytics ・ Event Hubs ・ Databricks ・ Lakehouse ・ Power BI ・ Purview ・ 監視 ・ セキュリティを全 10 章で体系的に解説。"
        url="/certs/azure-dp-203/textbook"
        about={[
          "Azure",
          "Synapse",
          "Data Factory",
          "Databricks",
          "Stream Analytics",
          "Data Engineering",
        ]}
      />
      <TextbookView
        book={azureDp203Textbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Azure DP-203", href: "/certs/azure-dp-203" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Azure DP-203 の概要に戻る", href: "/certs/azure-dp-203" },
          {
            label: "Azure DP-203 の問題を解く →",
            href: "/certs/azure-dp-203/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
