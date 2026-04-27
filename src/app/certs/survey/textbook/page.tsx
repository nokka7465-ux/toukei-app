import type { Metadata } from "next";
import { surveyTextbook } from "@/data/textbooks/survey";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計調査士 対策教科書 ─ 統計法・公的統計・標本抽出",
  description:
    "統計調査士対策の無料教科書。統計法・基幹統計・主要な公的統計・標本抽出法・調査票設計まで、章立てで解説。",
  alternates: { canonical: "/certs/survey/textbook" },
  openGraph: {
    title: "統計調査士 教科書",
    description:
      "統計法・公的統計・標本抽出・調査票設計まで、統計調査士対策をまとめた教科書。",
    type: "article",
  },
};

export default function SurveyTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "統計調査士", href: "/certs/survey" },
          { name: "教科書", href: "/certs/survey/textbook" },
        ]}
      />
      <CourseJsonLd
        name="統計調査士 対策教科書"
        description="統計法・基幹統計・主要な公的統計・標本抽出法・調査票設計まで、章立てで解説した統計調査士対策の教科書。"
        url="/certs/survey/textbook"
        about={["統計法", "公的統計", "標本抽出", "調査票設計", "社会調査"]}
      />
      <TextbookView
        book={surveyTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "統計調査士", href: "/certs/survey" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← 統計調査士の概要に戻る", href: "/certs/survey" },
          {
            label: "統計調査士の問題を解く →",
            href: "/certs/survey/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
