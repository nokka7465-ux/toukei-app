import type { Metadata } from "next";
import { powerBiTextbook } from "@/data/textbooks/power-bi";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Power BI(PL-300)教科書 ─ Power Query ・ DAX ・ 可視化を完全解説",
  description:
    "Microsoft Power BI Data Analyst Associate(PL-300)対策の無料教科書。Power BI アーキテクチャ ・ Power Query ・ M 言語 ・ データモデリング ・ DAX ・ ビジュアル ・ Service ・ RLS ・ Microsoft Fabric ・ Copilot を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/power-bi/textbook" },
  openGraph: {
    title: "Power BI(PL-300)教科書",
    description:
      "Microsoft の BI 系 Associate 認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function PowerBiTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Power BI Data Analyst Associate", href: "/certs/power-bi" },
          { name: "教科書", href: "/certs/power-bi/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft Power BI Data Analyst Associate(PL-300)対策教科書"
        description="Power BI アーキテクチャ ・ Power Query ・ M 言語 ・ データモデリング ・ DAX ・ ビジュアル ・ Service ・ RLS ・ Microsoft Fabric ・ Copilot を全 10 章で体系的に解説。"
        url="/certs/power-bi/textbook"
        about={[
          "Power BI",
          "DAX",
          "Power Query",
          "Microsoft Fabric",
          "BI",
          "データ可視化",
        ]}
      />
      <TextbookView
        book={powerBiTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Power BI Data Analyst Associate", href: "/certs/power-bi" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Power BI(PL-300)の概要に戻る", href: "/certs/power-bi" },
          {
            label: "Power BI(PL-300)の問題を解く →",
            href: "/certs/power-bi/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
