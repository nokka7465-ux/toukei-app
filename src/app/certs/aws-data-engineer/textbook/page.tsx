import type { Metadata } from "next";
import { awsDataEngineerTextbook } from "@/data/textbooks/aws-data-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS DEA-C01 教科書 ─ Glue / Athena / Redshift / Kinesis を完全解説",
  description:
    "AWS Certified Data Engineer - Associate(DEA-C01)対策の無料教科書。S3 ・ Glue ・ Athena ・ Redshift ・ EMR ・ Kinesis / MSK ・ Step Functions / MWAA ・ Iceberg / Lakehouse ・ オペレーション ・ セキュリティを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/aws-data-engineer/textbook" },
  openGraph: {
    title: "AWS DEA-C01 教科書",
    description:
      "AWS のデータエンジニアリング Associate 認定の対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AwsDataEngineerTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS Data Engineer Associate", href: "/certs/aws-data-engineer" },
          { name: "教科書", href: "/certs/aws-data-engineer/textbook" },
        ]}
      />
      <CourseJsonLd
        name="AWS Certified Data Engineer - Associate(DEA-C01)対策教科書"
        description="S3 ・ Glue ・ Athena ・ Redshift ・ EMR ・ Kinesis / MSK ・ Step Functions / MWAA ・ Iceberg / Lakehouse ・ オペレーション ・ セキュリティを全 10 章で体系的に解説。"
        url="/certs/aws-data-engineer/textbook"
        about={[
          "AWS",
          "Data Engineering",
          "Glue",
          "Athena",
          "Redshift",
          "Kinesis",
        ]}
      />
      <TextbookView
        book={awsDataEngineerTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "AWS Data Engineer Associate", href: "/certs/aws-data-engineer" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← AWS Data Engineer の概要に戻る", href: "/certs/aws-data-engineer" },
          {
            label: "AWS Data Engineer の問題を解く →",
            href: "/certs/aws-data-engineer/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
