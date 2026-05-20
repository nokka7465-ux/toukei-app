import type { Metadata } from "next";
import { snowflakeDeaTextbook } from "@/data/textbooks/snowflake-dea";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SnowPro DEA 教科書 ─ Snowflake Advanced Data Engineer の完全解説",
  description:
    "SnowPro Advanced: Data Engineer(DEA)対策の無料教科書。Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Polaris / Native Apps / Performance / Cost を全 6 章で体系的に解説。",
  alternates: { canonical: "/certs/snowflake-dea/textbook" },
  openGraph: { title: "SnowPro DEA 教科書", description: "Snowflake Advanced Data Engineer 認定の対策をまとめた無料教科書。", type: "article" },
};

export default function SnowflakeDeaTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Snowflake DEA", href: "/certs/snowflake-dea" }, { name: "教科書", href: "/certs/snowflake-dea/textbook" }]} />
      <CourseJsonLd name="SnowPro Advanced: Data Engineer 対策教科書" description="Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Polaris / Performance / Cost を全 6 章で体系的に解説。" url="/certs/snowflake-dea/textbook" about={["Snowflake", "Data Engineer", "Snowpipe", "Snowpark", "Cortex AI", "Iceberg"]} />
      <TextbookView book={snowflakeDeaTextbook} breadcrumb={[{ label: "ホーム", href: "/" }, { label: "関連検定" }, { label: "Snowflake DEA", href: "/certs/snowflake-dea" }, { label: "教科書" }]} bottomLinks={[{ label: "← Snowflake DEA の概要に戻る", href: "/certs/snowflake-dea" }, { label: "問題を解く →", href: "/certs/snowflake-dea/quiz", primary: true }]} />
    </>
  );
}
