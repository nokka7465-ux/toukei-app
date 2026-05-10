import type { Metadata } from "next";
import { gcpDataEngineerTextbook } from "@/data/textbooks/gcp-data-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP Pro Data Engineer 教科書 ─ BigQuery / Dataflow / Pub/Sub / Looker を完全解説",
  description:
    "GCP Professional Data Engineer 対策の無料教科書。BigQuery ・ GCS ・ Bigtable / Spanner ・ Dataflow ・ Pub/Sub ・ Dataproc ・ Composer / Workflows ・ Looker / Looker Studio ・ Dataplex を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/gcp-data-engineer/textbook" },
  openGraph: {
    title: "GCP Pro Data Engineer 教科書",
    description:
      "GCP Pro DE 対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function GcpDataEngineerTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Professional Data Engineer", href: "/certs/gcp-data-engineer" },
          { name: "教科書", href: "/certs/gcp-data-engineer/textbook" },
        ]}
      />
      <CourseJsonLd
        name="GCP Professional Data Engineer 対策教科書"
        description="BigQuery ・ GCS ・ Bigtable / Spanner ・ Dataflow ・ Pub/Sub ・ Dataproc ・ Composer / Workflows ・ Looker ・ Dataplex を全 10 章で体系的に解説。"
        url="/certs/gcp-data-engineer/textbook"
        about={[
          "Google Cloud",
          "BigQuery",
          "Dataflow",
          "Pub/Sub",
          "Looker",
          "Data Engineering",
        ]}
      />
      <TextbookView
        book={gcpDataEngineerTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "GCP Professional Data Engineer", href: "/certs/gcp-data-engineer" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← GCP Pro DE の概要に戻る", href: "/certs/gcp-data-engineer" },
          {
            label: "GCP Pro DE の問題を解く →",
            href: "/certs/gcp-data-engineer/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
