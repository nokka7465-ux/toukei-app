import type { Metadata } from "next";
import { appliedInfoTextbook } from "@/data/textbooks/applied-info";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "応用情報技術者試験 教科書 ─ AI / データ重点で完全解説",
  description:
    "応用情報技術者試験(IPA)対策の無料教科書。アルゴリズム・データベース・確率統計・AI 基礎・ネットワーク・セキュリティ・システム設計・ソフトウェア工学・PM・経営戦略を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/applied-info/textbook" },
  openGraph: {
    title: "応用情報技術者試験 教科書",
    description:
      "AI / データ重点で応用情報技術者試験対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function AppliedInfoTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "応用情報技術者試験", href: "/certs/applied-info" },
          { name: "教科書", href: "/certs/applied-info/textbook" },
        ]}
      />
      <CourseJsonLd
        name="応用情報技術者試験 対策教科書"
        description="アルゴリズム・データベース・確率統計・AI 基礎・ネットワーク・セキュリティ・システム設計・ソフトウェア工学・PM・経営戦略を全 10 章で体系的に解説。"
        url="/certs/applied-info/textbook"
        about={[
          "応用情報技術者試験",
          "アルゴリズム",
          "データベース",
          "AI",
          "ネットワーク",
          "セキュリティ",
        ]}
      />
      <TextbookView
        book={appliedInfoTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "応用情報技術者試験", href: "/certs/applied-info" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← 応用情報の概要に戻る", href: "/certs/applied-info" },
          {
            label: "応用情報の問題を解く →",
            href: "/certs/applied-info/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
