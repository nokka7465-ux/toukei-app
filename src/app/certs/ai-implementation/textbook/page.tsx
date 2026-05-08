import type { Metadata } from "next";
import { aiImplementationTextbook } from "@/data/textbooks/ai-implementation";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AI 実装検定 教科書 ─ Python ・ PyTorch ・ Keras を完全解説",
  description:
    "AI 実装検定(エッジ AI 協会)対策の無料教科書。Python / NumPy / scikit-learn / PyTorch / Keras / CNN / Transformer / エッジ AI / MLOps を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/ai-implementation/textbook" },
  openGraph: {
    title: "AI 実装検定 教科書",
    description:
      "Python から PyTorch / Keras 実装まで、コード例付きで体系的に学べる無料教科書。",
    type: "article",
  },
};

export default function AiImplementationTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AI 実装検定", href: "/certs/ai-implementation" },
          { name: "教科書", href: "/certs/ai-implementation/textbook" },
        ]}
      />
      <CourseJsonLd
        name="AI 実装検定 対策教科書"
        description="Python / NumPy / scikit-learn / PyTorch / Keras / CNN / Transformer / エッジ AI / MLOps を全 10 章で体系的に解説。"
        url="/certs/ai-implementation/textbook"
        about={[
          "AI 実装",
          "PyTorch",
          "TensorFlow",
          "CNN",
          "Transformer",
          "エッジ AI",
          "MLOps",
        ]}
      />
      <TextbookView
        book={aiImplementationTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "AI 実装検定", href: "/certs/ai-implementation" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← AI 実装検定の概要に戻る", href: "/certs/ai-implementation" },
          {
            label: "AI 実装検定の問題を解く →",
            href: "/certs/ai-implementation/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
