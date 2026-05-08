import type { Metadata } from "next";
import { databricksDataEngineerTextbook } from "@/data/textbooks/databricks-data-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Databricks Data Engineer Associate 教科書 ─ Lakehouse / Delta Lake / DLT を完全解説",
  description:
    "Databricks Certified Data Engineer Associate 対策の無料教科書。Lakehouse Platform ・ Delta Lake ・ Spark / PySpark ・ Auto Loader ・ DLT ・ Workflows ・ Unity Catalog ・ Delta Sharing ・ MLflow / Mosaic AI を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/databricks-data-engineer/textbook" },
  openGraph: {
    title: "Databricks Data Engineer Associate 教科書",
    description:
      "Databricks のデータエンジニア認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function DatabricksDataEngineerTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Databricks Data Engineer Associate", href: "/certs/databricks-data-engineer" },
          { name: "教科書", href: "/certs/databricks-data-engineer/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Databricks Certified Data Engineer Associate 対策教科書"
        description="Lakehouse Platform ・ Delta Lake ・ Spark / PySpark ・ Auto Loader ・ DLT ・ Workflows ・ Unity Catalog ・ Delta Sharing ・ MLflow / Mosaic AI を全 10 章で体系的に解説。"
        url="/certs/databricks-data-engineer/textbook"
        about={[
          "Databricks",
          "Lakehouse",
          "Delta Lake",
          "Apache Spark",
          "Unity Catalog",
        ]}
      />
      <TextbookView
        book={databricksDataEngineerTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Databricks Data Engineer Associate", href: "/certs/databricks-data-engineer" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Databricks Data Engineer Associate の概要に戻る", href: "/certs/databricks-data-engineer" },
          {
            label: "Databricks Data Engineer Associate の問題を解く →",
            href: "/certs/databricks-data-engineer/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
