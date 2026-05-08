import type { Metadata } from "next";
import { gcpGenAiLeaderTextbook } from "@/data/textbooks/gcp-gen-ai-leader";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GCP Generative AI Leader 教科書 ─ Vertex AI ・ Gemini を完全解説",
  description:
    "Google Cloud Generative AI Leader 対策の無料教科書。生成 AI 基礎 ・ Vertex AI ・ Gemini ファミリ ・ Imagen ・ Veo ・ Gemini for Workspace ・ 責任ある AI ・ コスト最適化 ・ 業務変革を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/gcp-gen-ai-leader/textbook" },
  openGraph: {
    title: "GCP Generative AI Leader 教科書",
    description:
      "Google Cloud の生成 AI 認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function GcpGenAiLeaderTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "GCP Generative AI Leader", href: "/certs/gcp-gen-ai-leader" },
          { name: "教科書", href: "/certs/gcp-gen-ai-leader/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Google Cloud Generative AI Leader 対策教科書"
        description="生成 AI 基礎 ・ Vertex AI ・ Gemini ファミリ ・ Imagen ・ Veo ・ Gemini for Workspace ・ 責任ある AI ・ コスト最適化 ・ 業務変革を全 10 章で体系的に解説。"
        url="/certs/gcp-gen-ai-leader/textbook"
        about={[
          "Google Cloud",
          "Vertex AI",
          "Gemini",
          "Imagen",
          "生成 AI",
          "クラウド AI",
        ]}
      />
      <TextbookView
        book={gcpGenAiLeaderTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "GCP Generative AI Leader", href: "/certs/gcp-gen-ai-leader" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← GCP Gen AI Leader の概要に戻る", href: "/certs/gcp-gen-ai-leader" },
          {
            label: "GCP Gen AI Leader の問題を解く →",
            href: "/certs/gcp-gen-ai-leader/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
