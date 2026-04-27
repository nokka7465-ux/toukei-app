import type { Metadata } from "next";
import { dsBasicTextbook } from "@/data/textbooks/ds-basic";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 DS基礎 対策教科書 ─ Excel でデータ分析",
  description:
    "統計検定 データサイエンス基礎(DS基礎)対策の無料教科書。Excel関数・ピボットテーブル・グラフ・回帰機能の操作を、章立てで丁寧に解説。",
  alternates: { canonical: "/certs/ds-basic/textbook" },
  openGraph: {
    title: "DS基礎 教科書 ─ Excelでデータ分析を学ぶ",
    description:
      "Excel関数・ピボット・グラフ・回帰機能まで、DS基礎対策を 1 冊にまとめた教科書。",
    type: "article",
  },
};

export default function DsBasicTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS基礎", href: "/certs/ds-basic" },
          { name: "教科書", href: "/certs/ds-basic/textbook" },
        ]}
      />
      <CourseJsonLd
        name="統計検定 DS基礎 対策教科書"
        description="Excel関数・ピボットテーブル・グラフ・回帰機能の操作を、章立てで丁寧に解説したDS基礎対策の教科書。"
        url="/certs/ds-basic/textbook"
        about={["Excel", "データ分析", "ピボットテーブル", "回帰", "DS基礎"]}
      />
      <TextbookView
        book={dsBasicTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "DS基礎", href: "/certs/ds-basic" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← DS基礎の概要に戻る", href: "/certs/ds-basic" },
          {
            label: "DS基礎の問題を解く →",
            href: "/certs/ds-basic/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
