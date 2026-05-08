import type { Metadata } from "next";
import { awsMlSpecialtyTextbook } from "@/data/textbooks/aws-ml-specialty";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AWS MLS-C01 教科書 ─ 数学 + アルゴリズム + AWS 統合を完全解説",
  description:
    "AWS Certified Machine Learning - Specialty(MLS-C01)対策の無料教科書。ML の数学的基礎 ・ データエンジニアリング ・ EDA ・ Built-in アルゴリズム ・ HPO ・ 深層学習 ・ 推論最適化 ・ MLOps ・ セキュリティを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/aws-ml-specialty/textbook" },
  openGraph: {
    title: "AWS MLS-C01 教科書",
    description:
      "AWS ML 認定の最上位 Specialty 対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AwsMlSpecialtyTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS ML Specialty", href: "/certs/aws-ml-specialty" },
          { name: "教科書", href: "/certs/aws-ml-specialty/textbook" },
        ]}
      />
      <CourseJsonLd
        name="AWS Certified Machine Learning - Specialty(MLS-C01)対策教科書"
        description="ML の数学的基礎 ・ データエンジニアリング ・ EDA ・ Built-in アルゴリズム ・ HPO ・ 深層学習 ・ 推論最適化 ・ MLOps ・ セキュリティを全 10 章で体系的に解説。"
        url="/certs/aws-ml-specialty/textbook"
        about={[
          "AWS",
          "SageMaker",
          "Machine Learning",
          "Specialty",
          "AWS ML",
        ]}
      />
      <TextbookView
        book={awsMlSpecialtyTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "AWS ML Specialty", href: "/certs/aws-ml-specialty" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← AWS ML Specialty の概要に戻る", href: "/certs/aws-ml-specialty" },
          {
            label: "AWS ML Specialty の問題を解く →",
            href: "/certs/aws-ml-specialty/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
