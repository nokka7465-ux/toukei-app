import type { Metadata } from "next";
import { gcpMlEngineerTextbook } from "@/data/textbooks/gcp-ml-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP ML Engineer 教科書 ─ Vertex AI ・ BQML ・ Kubeflow を完全解説",
  description:
    "Google Cloud Professional Machine Learning Engineer 対策の無料教科書。Vertex AI ・ BigQuery ML ・ データエンジニアリング ・ TensorFlow/PyTorch on GCP ・ Kubeflow Pipelines ・ デプロイ ・ Model Monitoring ・ 生成 AI を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/gcp-ml-engineer/textbook" },
  openGraph: {
    title: "GCP ML Engineer 教科書",
    description:
      "GCP の Professional ML Engineer 認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function GcpMlEngineerTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Professional ML Engineer", href: "/certs/gcp-ml-engineer" },
          { name: "教科書", href: "/certs/gcp-ml-engineer/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Google Cloud Professional Machine Learning Engineer 対策教科書"
        description="Vertex AI ・ BigQuery ML ・ データエンジニアリング ・ TensorFlow/PyTorch on GCP ・ Kubeflow Pipelines ・ デプロイ ・ Model Monitoring ・ 生成 AI を全 10 章で体系的に解説。"
        url="/certs/gcp-ml-engineer/textbook"
        about={[
          "Google Cloud",
          "Vertex AI",
          "BigQuery ML",
          "Kubeflow",
          "ML Engineer",
        ]}
      />
      <TextbookView
        book={gcpMlEngineerTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "GCP Professional ML Engineer", href: "/certs/gcp-ml-engineer" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← GCP ML Engineer の概要に戻る", href: "/certs/gcp-ml-engineer" },
          {
            label: "GCP ML Engineer の問題を解く →",
            href: "/certs/gcp-ml-engineer/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
