import type { Metadata } from "next";
import { awsSaaTextbook } from "@/data/textbooks/aws-saa";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS SAA-C03 教科書 ─ EC2 / S3 / VPC / IAM 完全解説",
  description:
    "AWS Certified Solutions Architect ─ Associate(SAA-C03)対策の無料教科書。Well-Architected ・ IAM ・ EC2 ・ S3 ・ RDS / DynamoDB ・ VPC / Route 53 / CloudFront ・ Auto Scaling / DR ・ メッセージング ・ コスト最適化を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/aws-saa/textbook" },
  openGraph: {
    title: "AWS SAA-C03 教科書",
    description:
      "AWS Solutions Architect Associate 対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AwsSaaTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS Solutions Architect Associate", href: "/certs/aws-saa" },
          { name: "教科書", href: "/certs/aws-saa/textbook" },
        ]}
      />
      <CourseJsonLd
        name="AWS Certified Solutions Architect ─ Associate(SAA-C03)対策教科書"
        description="Well-Architected ・ IAM ・ EC2 ・ S3 ・ RDS / DynamoDB ・ VPC / Route 53 / CloudFront ・ Auto Scaling / DR ・ メッセージング ・ コスト最適化を全 10 章で体系的に解説。"
        url="/certs/aws-saa/textbook"
        about={[
          "AWS",
          "Solutions Architect",
          "EC2",
          "S3",
          "VPC",
          "IAM",
        ]}
      />
      <TextbookView
        book={awsSaaTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "AWS Solutions Architect Associate", href: "/certs/aws-saa" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← AWS SAA の概要に戻る", href: "/certs/aws-saa" },
          {
            label: "AWS SAA の問題を解く →",
            href: "/certs/aws-saa/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
