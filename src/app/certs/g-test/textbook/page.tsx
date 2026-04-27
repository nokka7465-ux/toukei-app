import type { Metadata } from "next";
import { gTestTextbook } from "@/data/textbooks/g-test";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "G検定 対策教科書 ─ AI / ディープラーニング基礎を完全解説",
  description:
    "G検定(JDLA ジェネラリスト検定)対策の無料教科書。AI の歴史・機械学習・ディープラーニング・社会実装と倫理を、章立てで体系的に解説。",
  alternates: { canonical: "/certs/g-test/textbook" },
  openGraph: {
    title: "G検定 教科書 ─ AI/DL の概念を体系的に",
    description:
      "AI の歴史 / 機械学習 / DL の主要モデル / 倫理まで、G検定対策をまとめた教科書。",
    type: "article",
  },
};

export default function GTestTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "G検定", href: "/certs/g-test" },
          { name: "教科書", href: "/certs/g-test/textbook" },
        ]}
      />
      <CourseJsonLd
        name="G検定(JDLA)対策教科書"
        description="AI の歴史・機械学習・ディープラーニング・社会実装と倫理を、章立てで体系的に解説したG検定対策教科書。"
        url="/certs/g-test/textbook"
        about={["AI", "機械学習", "ディープラーニング", "JDLA", "社会実装", "倫理"]}
      />
      <TextbookView
        book={gTestTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "G検定", href: "/certs/g-test" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← G検定の概要に戻る", href: "/certs/g-test" },
          {
            label: "G検定の問題を解く →",
            href: "/certs/g-test/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
