import type { Metadata } from "next";
import { eShikakuTextbook } from "@/data/textbooks/e-shikaku";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "E資格 対策教科書 ─ 数学・ML・DL 理論を 6 章で完全解説",
  description:
    "E 資格(JDLA Engineer)対策の無料教科書。数学的基礎・機械学習・DL 理論・主要モデル(CNN/RNN/Transformer)・実装と社会実装を、図解と Python/PyTorch コードつきで章立て解説。",
  alternates: { canonical: "/certs/e-shikaku/textbook" },
  openGraph: {
    title: "E資格 教科書",
    description:
      "数学からモデル実装まで、E 資格の全範囲を 6 章で網羅。",
    type: "article",
  },
};

export default function EShikakuTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "E資格", href: "/certs/e-shikaku" },
          { name: "教科書", href: "/certs/e-shikaku/textbook" },
        ]}
      />
      <CourseJsonLd
        name="E資格(JDLA Engineer)対策教科書"
        description="数学的基礎・機械学習・DL 理論・主要モデル(CNN/RNN/Transformer)・実装と社会実装を、図解と Python/PyTorch コードつきで章立て解説。"
        url="/certs/e-shikaku/textbook"
        about={[
          "ディープラーニング",
          "機械学習",
          "Transformer",
          "CNN",
          "RNN",
          "PyTorch",
          "線形代数",
          "最適化",
        ]}
      />
      <TextbookView
        book={eShikakuTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "E資格", href: "/certs/e-shikaku" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← E資格の概要に戻る", href: "/certs/e-shikaku" },
          {
            label: "E資格の問題を解く →",
            href: "/certs/e-shikaku/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
