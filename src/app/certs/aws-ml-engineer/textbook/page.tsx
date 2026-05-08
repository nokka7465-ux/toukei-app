import type { Metadata } from "next";
import { awsMlEngineerTextbook } from "@/data/textbooks/aws-ml-engineer";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS MLA-C01 教科書 ─ SageMaker / MLOps / Bedrock を完全解説",
  description:
    "AWS Certified Machine Learning Engineer Associate(MLA-C01)対策の無料教科書。ML 基礎・SageMaker 全体像・データ準備・学習・HPO・推論デプロイ 5 種・MLOps Pipelines・Model Monitor・Clarify・セキュリティ・Bedrock を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/aws-ml-engineer/textbook" },
  openGraph: {
    title: "AWS MLA-C01 教科書",
    description:
      "AWS の ML Engineer Associate 認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AwsMlEngineerTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS ML Engineer Associate", href: "/certs/aws-ml-engineer" },
          { name: "教科書", href: "/certs/aws-ml-engineer/textbook" },
        ]}
      />
      <CourseJsonLd
        name="AWS Machine Learning Engineer Associate(MLA-C01)対策教科書"
        description="ML 基礎・SageMaker 全体像・データ準備・学習・HPO・推論デプロイ 5 種・MLOps Pipelines・Model Monitor・Clarify・セキュリティ・Bedrock を全 10 章で体系的に解説。"
        url="/certs/aws-ml-engineer/textbook"
        about={[
          "AWS",
          "SageMaker",
          "Bedrock",
          "MLOps",
          "ML Engineer",
        ]}
      />
      <TextbookView
        book={awsMlEngineerTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "AWS ML Engineer Associate", href: "/certs/aws-ml-engineer" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← AWS ML Engineer Associate の概要に戻る", href: "/certs/aws-ml-engineer" },
          {
            label: "AWS ML Engineer Associate の問題を解く →",
            href: "/certs/aws-ml-engineer/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
