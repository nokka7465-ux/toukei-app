import type { Metadata } from "next";
import { surveySpecialistTextbook } from "@/data/textbooks/survey-specialist";
import { TextbookView } from "@/components/TextbookView";

export const metadata: Metadata = {
  title: "専門統計調査士 教科書 ─ 標本設計の理論と公的統計の高度利用",
  description:
    "専門統計調査士対策の教科書。標本誤差・デザイン効果・推定の精緻化・無回答補正・公的統計の高度利用・現代統計を 4 章で解説。",
  openGraph: {
    title: "専門統計調査士 教科書",
    description: "標本設計と公的統計を理論的に深める 4 章構成の教科書。",
    type: "article",
  },
};

export default function SurveySpecialistTextbookPage() {
  return (
    <TextbookView
      book={surveySpecialistTextbook}
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "関連検定" },
        { label: "専門統計調査士", href: "/certs/survey-specialist" },
        { label: "教科書" },
      ]}
      bottomLinks={[
        { label: "← 専門統計調査士の概要に戻る", href: "/certs/survey-specialist" },
        {
          label: "専門統計調査士の問題を解く →",
          href: "/certs/survey-specialist/quiz",
          primary: true,
        },
      ]}
    />
  );
}
