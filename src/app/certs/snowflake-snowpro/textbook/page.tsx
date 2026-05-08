import type { Metadata } from "next";
import { snowflakeSnowProTextbook } from "@/data/textbooks/snowflake-snowpro";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Snowflake SnowPro Core 教科書 ─ アーキテクチャ ・ SQL ・ Time Travel を完全解説",
  description:
    "Snowflake SnowPro Core(COF-C02)対策の無料教科書。3 層アーキテクチャ ・ Virtual Warehouse ・ オブジェクト階層 ・ COPY/Snowpipe ・ SQL/VARIANT ・ パフォーマンス ・ Time Travel/Cloning/Data Sharing ・ RBAC ・ Snowpark/Cortex を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/snowflake-snowpro/textbook" },
  openGraph: {
    title: "Snowflake SnowPro Core 教科書",
    description:
      "Snowflake のクラウドデータプラットフォーム認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function SnowflakeSnowProTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Snowflake SnowPro Core", href: "/certs/snowflake-snowpro" },
          { name: "教科書", href: "/certs/snowflake-snowpro/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Snowflake SnowPro Core(COF-C02)対策教科書"
        description="3 層アーキテクチャ ・ Virtual Warehouse ・ オブジェクト階層 ・ COPY/Snowpipe ・ SQL/VARIANT ・ パフォーマンス ・ Time Travel/Cloning/Data Sharing ・ RBAC ・ Snowpark/Cortex を全 10 章で体系的に解説。"
        url="/certs/snowflake-snowpro/textbook"
        about={[
          "Snowflake",
          "クラウドデータウェアハウス",
          "DWH",
          "Time Travel",
          "Data Sharing",
        ]}
      />
      <TextbookView
        book={snowflakeSnowProTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Snowflake SnowPro Core", href: "/certs/snowflake-snowpro" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Snowflake SnowPro Core の概要に戻る", href: "/certs/snowflake-snowpro" },
          {
            label: "Snowflake SnowPro Core の問題を解く →",
            href: "/certs/snowflake-snowpro/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
