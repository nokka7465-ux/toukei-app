import type { Metadata } from "next";
import { azureAi900Textbook } from "@/data/textbooks/azure-ai-900";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure AI Fundamentals(AI-900)教科書 ─ Azure AI ・ Copilot を完全解説",
  description:
    "Microsoft Azure AI Fundamentals(AI-900)対策の無料教科書。AI / ML / 生成 AI 基礎 ・ Azure ML ・ AI Vision ・ AI Language ・ Azure OpenAI ・ Microsoft Copilot ファミリを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-ai-900/textbook" },
  openGraph: {
    title: "Azure AI Fundamentals(AI-900)教科書",
    description:
      "Microsoft Azure の AI 認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AzureAi900TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure AI Fundamentals", href: "/certs/azure-ai-900" },
          { name: "教科書", href: "/certs/azure-ai-900/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft Azure AI Fundamentals(AI-900)対策教科書"
        description="AI / ML / 生成 AI 基礎 ・ Azure ML ・ AI Vision ・ AI Language ・ Azure OpenAI ・ Microsoft Copilot ファミリを全 10 章で体系的に解説。"
        url="/certs/azure-ai-900/textbook"
        about={[
          "Azure",
          "Azure OpenAI",
          "Azure Machine Learning",
          "Microsoft Copilot",
          "AI Fundamentals",
          "クラウド AI",
        ]}
      />
      <TextbookView
        book={azureAi900Textbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Azure AI Fundamentals", href: "/certs/azure-ai-900" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          {
            label: "← Azure AI-900 の概要に戻る",
            href: "/certs/azure-ai-900",
          },
          {
            label: "Azure AI-900 の問題を解く →",
            href: "/certs/azure-ai-900/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
