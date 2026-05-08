import type { Metadata } from "next";
import { basicInfoTextbook } from "@/data/textbooks/basic-info";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "基本情報技術者試験 教科書 ─ AI ・ データ重点で完全解説",
  description:
    "基本情報技術者試験(IPA)対策の無料教科書。コンピュータ基礎・アルゴリズム・情報セキュリティ・ネットワーク・データベース・ソフトウェア工学・PM・経営戦略・AI 用語を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/basic-info/textbook" },
  openGraph: {
    title: "基本情報技術者試験 教科書",
    description:
      "FE 対策をまとめた無料教科書。Python 風疑似言語のトレース習慣付き。",
    type: "article",
  },
};

export default function BasicInfoTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "基本情報技術者試験", href: "/certs/basic-info" },
          { name: "教科書", href: "/certs/basic-info/textbook" },
        ]}
      />
      <CourseJsonLd
        name="基本情報技術者試験 対策教科書"
        description="コンピュータ基礎・アルゴリズム・情報セキュリティ・ネットワーク・データベース・ソフトウェア工学・PM・経営戦略・AI 用語を全 10 章で体系的に解説。"
        url="/certs/basic-info/textbook"
        about={[
          "基本情報技術者試験",
          "アルゴリズム",
          "情報セキュリティ",
          "データベース",
          "ネットワーク",
        ]}
      />
      <TextbookView
        book={basicInfoTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "基本情報技術者試験", href: "/certs/basic-info" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← 基本情報の概要に戻る", href: "/certs/basic-info" },
          {
            label: "基本情報の問題を解く →",
            href: "/certs/basic-info/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
