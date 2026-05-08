import type { Metadata } from "next";
import { genaiPassportTextbook } from "@/data/textbooks/genai-passport";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "生成AIパスポート 対策教科書 ─ 業務活用と倫理を完全解説",
  description:
    "生成AIパスポート検定(GUGA)対策の無料教科書。AI / 機械学習の基礎、LLM の仕組み、主要サービス、プロンプト、リスク、法律・倫理まで、全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/genai-passport/textbook" },
  openGraph: {
    title: "生成AIパスポート 教科書 ─ 業務で使う生成AIを体系的に",
    description:
      "AI / ML の基礎、LLM、プロンプト、リスク、法律・倫理まで、生成AIパスポート対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function GenaiPassportTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "生成AIパスポート検定", href: "/certs/genai-passport" },
          { name: "教科書", href: "/certs/genai-passport/textbook" },
        ]}
      />
      <CourseJsonLd
        name="生成AIパスポート(GUGA)対策教科書"
        description="AI / 機械学習の基礎、LLM の仕組み、主要サービス、プロンプト、リスク、法律・倫理まで、生成AIパスポート対策を全 10 章で体系的に解説。"
        url="/certs/genai-passport/textbook"
        about={[
          "生成AI",
          "LLM",
          "プロンプトエンジニアリング",
          "ハルシネーション",
          "AI 倫理",
          "GUGA",
        ]}
      />
      <TextbookView
        book={genaiPassportTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "生成AIパスポート検定", href: "/certs/genai-passport" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          {
            label: "← 生成AIパスポートの概要に戻る",
            href: "/certs/genai-passport",
          },
          {
            label: "生成AIパスポートの問題を解く →",
            href: "/certs/genai-passport/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
