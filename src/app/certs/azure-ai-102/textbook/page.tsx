import type { Metadata } from "next";
import { azureAi102Textbook } from "@/data/textbooks/azure-ai-102";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure AI-102 教科書 ─ Azure OpenAI ・ AI Search ・ Foundry を完全解説",
  description:
    "Microsoft AI-102(Azure AI Engineer Associate)対策の無料教科書。Azure AI services リソース管理 ・ Azure OpenAI ・ RAG ・ AI Search ・ Vision ・ Language ・ Speech ・ AI Foundry ・ Agent Service ・ Content Safety ・ デプロイを全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/azure-ai-102/textbook" },
  openGraph: {
    title: "Azure AI-102 教科書",
    description:
      "Azure AI Engineer Associate 対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AzureAi102TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Azure AI Engineer Associate", href: "/certs/azure-ai-102" },
          { name: "教科書", href: "/certs/azure-ai-102/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Microsoft AI-102 対策教科書"
        description="Azure AI services リソース管理 ・ Azure OpenAI ・ RAG ・ AI Search ・ Vision ・ Language ・ Speech ・ AI Foundry ・ Agent Service ・ Content Safety ・ デプロイを全 10 章で体系的に解説。"
        url="/certs/azure-ai-102/textbook"
        about={[
          "Azure",
          "Azure OpenAI",
          "Azure AI",
          "AI Engineer",
          "RAG",
          "クラウド AI",
        ]}
      />
      <TextbookView
        book={azureAi102Textbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Azure AI Engineer Associate", href: "/certs/azure-ai-102" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Azure AI-102 の概要に戻る", href: "/certs/azure-ai-102" },
          {
            label: "Azure AI-102 の問題を解く →",
            href: "/certs/azure-ai-102/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
