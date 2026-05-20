import type { Metadata } from "next";
import { databricksMlEngineerTextbook } from "@/data/textbooks/databricks-ml-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Databricks ML Engineer 教科書 ─ MLflow / Mosaic AI / MLOps の完全解説",
  description:
    "Databricks Certified ML Engineer Professional 対策の無料教科書。MLflow / Feature Store / AutoML / Hyperopt / Model Serving / Lakehouse Monitoring / Mosaic AI(Vector Search + Foundation Model API + Agent Framework)/ Asset Bundle を全 6 章で体系的に解説。",
  alternates: { canonical: "/certs/databricks-ml-engineer/textbook" },
  openGraph: { title: "Databricks ML Engineer 教科書", description: "Databricks ML Engineer 認定の対策をまとめた無料教科書。", type: "article" },
};

export default function DatabricksMlTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Databricks ML Engineer", href: "/certs/databricks-ml-engineer" }, { name: "教科書", href: "/certs/databricks-ml-engineer/textbook" }]} />
      <CourseJsonLd name="Databricks Certified ML Engineer Professional 対策教科書" description="MLflow / Feature Store / AutoML / Model Serving / Lakehouse Monitoring / Mosaic AI / Asset Bundle を全 6 章で体系的に解説。" url="/certs/databricks-ml-engineer/textbook" about={["Databricks", "ML Engineer", "MLflow", "Mosaic AI", "MLOps", "Feature Store"]} />
      <TextbookView book={databricksMlEngineerTextbook} breadcrumb={[{ label: "ホーム", href: "/" }, { label: "関連検定" }, { label: "Databricks ML Engineer", href: "/certs/databricks-ml-engineer" }, { label: "教科書" }]} bottomLinks={[{ label: "← Databricks ML Engineer の概要に戻る", href: "/certs/databricks-ml-engineer" }, { label: "問題を解く →", href: "/certs/databricks-ml-engineer/quiz", primary: true }]} />
    </>
  );
}
