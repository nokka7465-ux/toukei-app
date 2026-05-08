import type { Metadata } from "next";
import { tableauSpecialistTextbook } from "@/data/textbooks/tableau-specialist";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tableau Desktop Specialist 教科書 ─ 基礎 ・ LOD ・ 計算を完全解説",
  description:
    "Tableau Desktop Specialist 対策の無料教科書。Tableau の基本構造 ・ データ接続 ・ Show Me ・ Marks ・ ダッシュボード ・ 計算 ・ LOD(FIXED/INCLUDE/EXCLUDE)・ パラメータ ・ Analytics ・ 共有を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/tableau-specialist/textbook" },
  openGraph: {
    title: "Tableau Desktop Specialist 教科書",
    description:
      "BI 系認定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function TableauSpecialistTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Tableau Desktop Specialist", href: "/certs/tableau-specialist" },
          { name: "教科書", href: "/certs/tableau-specialist/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Tableau Desktop Specialist 対策教科書"
        description="Tableau の基本構造 ・ データ接続 ・ Show Me ・ Marks ・ ダッシュボード ・ 計算 ・ LOD ・ パラメータ ・ Analytics ・ 共有を全 10 章で体系的に解説。"
        url="/certs/tableau-specialist/textbook"
        about={[
          "Tableau",
          "BI",
          "データ可視化",
          "LOD",
          "ダッシュボード",
        ]}
      />
      <TextbookView
        book={tableauSpecialistTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Tableau Desktop Specialist", href: "/certs/tableau-specialist" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Tableau Desktop Specialist の概要に戻る", href: "/certs/tableau-specialist" },
          {
            label: "Tableau Desktop Specialist の問題を解く →",
            href: "/certs/tableau-specialist/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
