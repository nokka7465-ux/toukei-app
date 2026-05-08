import type { Metadata } from "next";
import { dbSpecialistTextbook } from "@/data/textbooks/db-specialist";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "データベーススペシャリスト 教科書 ─ 関係代数 ・ 正規化 ・ NoSQL ・ DWH 完全解説",
  description:
    "データベーススペシャリスト試験(IPA、レベル 4)対策の無料教科書。関係代数 ・ 正規化 ・ ER 図 ・ SQL 上級 ・ ACID ・ チューニング ・ NoSQL ・ ビッグデータ ・ DWH を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/db-specialist/textbook" },
  openGraph: {
    title: "データベーススペシャリスト 教科書",
    description:
      "DB スペシャリスト対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function DbSpecialistTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "データベーススペシャリスト", href: "/certs/db-specialist" },
          { name: "教科書", href: "/certs/db-specialist/textbook" },
        ]}
      />
      <CourseJsonLd
        name="データベーススペシャリスト試験 対策教科書"
        description="関係代数 ・ 正規化 ・ ER 図 ・ SQL 上級 ・ ACID ・ チューニング ・ NoSQL ・ ビッグデータ ・ DWH を全 10 章で体系的に解説。"
        url="/certs/db-specialist/textbook"
        about={[
          "データベース",
          "SQL",
          "正規化",
          "NoSQL",
          "DWH",
          "情報処理技術者試験",
        ]}
      />
      <TextbookView
        book={dbSpecialistTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "データベーススペシャリスト", href: "/certs/db-specialist" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          {
            label: "← データベーススペシャリストの概要に戻る",
            href: "/certs/db-specialist",
          },
          {
            label: "データベーススペシャリストの問題を解く →",
            href: "/certs/db-specialist/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
