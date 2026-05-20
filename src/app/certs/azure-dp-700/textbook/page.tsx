import type { Metadata } from "next";
import { azureDp700Textbook } from "@/data/textbooks/azure-dp-700";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Microsoft Fabric DP-700 教科書 ─ Lakehouse / Spark / Pipeline / Real-Time を完全解説",
  description:
    "Microsoft Fabric Data Engineer Associate(DP-700)対策の無料教科書。Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL Database ・ Real-Time Dashboard ・ Reflex ・ Git Integration ・ Deployment Pipeline を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-dp-700/textbook" },
  openGraph: {
    title: "Microsoft Fabric DP-700 教科書",
    description:
      "Microsoft Fabric Data Engineer Associate 認定の対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AzureDp700TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Microsoft Fabric DP-700", href: "/certs/azure-dp-700" },
          { name: "教科書", href: "/certs/azure-dp-700/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft Fabric Data Engineer Associate(DP-700)対策教科書"
        description="Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL DB ・ Real-Time Dashboard ・ Reflex ・ Git Integration ・ Deployment Pipeline を全 10 章で体系的に解説。"
        url="/certs/azure-dp-700/textbook"
        about={[
          "Microsoft Fabric",
          "Data Engineer",
          "Lakehouse",
          "Spark",
          "Pipeline",
          "Real-Time Intelligence",
          "KQL",
        ]}
      />
      <TextbookView
        book={azureDp700Textbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Microsoft Fabric DP-700", href: "/certs/azure-dp-700" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← DP-700 の概要に戻る", href: "/certs/azure-dp-700" },
          {
            label: "DP-700 の問題を解く →",
            href: "/certs/azure-dp-700/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
