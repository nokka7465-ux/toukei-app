import type { Metadata } from "next";
import { azureDp100Textbook } from "@/data/textbooks/azure-dp-100";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure DP-100 教科書 ─ Azure ML 実装力を完全解説",
  description:
    "Microsoft Azure Data Scientist Associate(DP-100)対策の無料教科書。Workspace ・ Compute ・ Data Asset ・ Job / Environment ・ AutoML / Designer ・ Sweep ・ Endpoint ・ Responsible AI ・ MLOps ・ セキュリティを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-dp-100/textbook" },
  openGraph: {
    title: "Azure DP-100 教科書",
    description:
      "Azure ML を使ったデータサイエンティスト実装力を測る DP-100 対策の無料教科書。",
    type: "article",
  },
};

export default function AzureDp100TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure DP-100", href: "/certs/azure-dp-100" },
          { name: "教科書", href: "/certs/azure-dp-100/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft Azure Data Scientist Associate(DP-100)対策教科書"
        description="Workspace ・ Compute ・ Data Asset ・ Job / Environment ・ AutoML / Designer ・ Sweep ・ Endpoint ・ Responsible AI ・ MLOps ・ セキュリティを全 10 章で体系的に解説。"
        url="/certs/azure-dp-100/textbook"
        about={[
          "Azure",
          "Azure Machine Learning",
          "Data Scientist",
          "MLflow",
          "MLOps",
        ]}
      />
      <TextbookView
        book={azureDp100Textbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Azure DP-100", href: "/certs/azure-dp-100" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Azure DP-100 の概要に戻る", href: "/certs/azure-dp-100" },
          {
            label: "Azure DP-100 の問題を解く →",
            href: "/certs/azure-dp-100/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
