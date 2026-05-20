import type { Metadata } from "next";
import { azureDp600Textbook } from "@/data/textbooks/azure-dp-600";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Microsoft Fabric DP-600 教科書 ─ OneLake / Lakehouse / Direct Lake / DAX を完全解説",
  description:
    "Microsoft Fabric Analytics Engineer Associate(DP-600)対策の無料教科書。OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Real-Time Intelligence ・ Pipeline ・ Dataflow Gen2 ・ Spark NEE ・ Git Integration ・ Deployment Pipeline を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-dp-600/textbook" },
  openGraph: {
    title: "Microsoft Fabric DP-600 教科書",
    description:
      "Microsoft Fabric Analytics Engineer Associate 認定の対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AzureDp600TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Microsoft Fabric DP-600", href: "/certs/azure-dp-600" },
          { name: "教科書", href: "/certs/azure-dp-600/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft Fabric Analytics Engineer Associate(DP-600)対策教科書"
        description="OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Real-Time Intelligence ・ Pipeline / Dataflow Gen2 ・ Spark / NEE ・ Git Integration ・ Deployment Pipeline を全 10 章で体系的に解説。"
        url="/certs/azure-dp-600/textbook"
        about={[
          "Microsoft Fabric",
          "Analytics Engineer",
          "OneLake",
          "Lakehouse",
          "Direct Lake",
          "DAX",
          "Power BI",
        ]}
      />
      <TextbookView
        book={azureDp600Textbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Microsoft Fabric DP-600", href: "/certs/azure-dp-600" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← DP-600 の概要に戻る", href: "/certs/azure-dp-600" },
          {
            label: "DP-600 の問題を解く →",
            href: "/certs/azure-dp-600/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
