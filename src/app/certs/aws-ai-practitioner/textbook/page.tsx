import type { Metadata } from "next";
import { awsAiPractitionerTextbook } from "@/data/textbooks/aws-ai-practitioner";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS AI Practitioner 教科書 ─ Bedrock / SageMaker / 責任ある AI を完全解説",
  description:
    "AWS Certified AI Practitioner(AIF-C01)対策の無料教科書。AI / ML / 生成 AI 基礎・AWS AI サービス全体像・Bedrock・SageMaker・プロンプト・責任ある AI・コスト最適化・ユースケース別パターンを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/aws-ai-practitioner/textbook" },
  openGraph: {
    title: "AWS AI Practitioner 教科書",
    description:
      "AWS の AI / 生成 AI 認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AwsAiPractitionerTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS AI Practitioner", href: "/certs/aws-ai-practitioner" },
          { name: "教科書", href: "/certs/aws-ai-practitioner/textbook" },
        ]}
      />
      <CourseJsonLd
        name="AWS Certified AI Practitioner 対策教科書"
        description="AI / ML / 生成 AI 基礎・AWS AI サービス全体像・Bedrock・SageMaker・プロンプト・責任ある AI・コスト最適化・ユースケース別パターンを全 10 章で体系的に解説。"
        url="/certs/aws-ai-practitioner/textbook"
        about={[
          "AWS",
          "Bedrock",
          "SageMaker",
          "生成 AI",
          "責任ある AI",
          "クラウド AI",
        ]}
      />
      <TextbookView
        book={awsAiPractitionerTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "AWS AI Practitioner", href: "/certs/aws-ai-practitioner" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          {
            label: "← AWS AI Practitioner の概要に戻る",
            href: "/certs/aws-ai-practitioner",
          },
          {
            label: "AWS AI Practitioner の問題を解く →",
            href: "/certs/aws-ai-practitioner/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
