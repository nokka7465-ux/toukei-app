import type { Metadata } from "next";
import { dsLiteracyTextbook } from "@/data/textbooks/ds-literacy";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DS検定 対策教科書 ─ DS 力・DE 力・ビジネス力の 3 軸",
  description:
    "DS検定リテラシーレベル対策の無料教科書。データサイエンス力・データエンジニアリング力・ビジネス力の 3 軸を、章立てで体系的に解説。",
  alternates: { canonical: "/certs/ds-literacy/textbook" },
  openGraph: {
    title: "データサイエンティスト検定 教科書",
    description:
      "DS 力 / DE 力 / ビジネス力の 3 軸を、リテラシーレベルでまとめた教科書。",
    type: "article",
  },
};

export default function DsLiteracyTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS検定", href: "/certs/ds-literacy" },
          { name: "教科書", href: "/certs/ds-literacy/textbook" },
        ]}
      />
      <CourseJsonLd
        name="データサイエンティスト検定 リテラシー 対策教科書"
        description="DS 力(統計・ML)・DE 力(SQL・データ基盤)・ビジネス力 の 3 軸を、章立てで体系的に解説したDS検定リテラシー対策教科書。"
        url="/certs/ds-literacy/textbook"
        about={["データサイエンス", "SQL", "機械学習", "ビジネス力", "データ基盤"]}
      />
      <TextbookView
        book={dsLiteracyTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "データサイエンティスト検定", href: "/certs/ds-literacy" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← 概要に戻る", href: "/certs/ds-literacy" },
          {
            label: "問題を解く →",
            href: "/certs/ds-literacy/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
