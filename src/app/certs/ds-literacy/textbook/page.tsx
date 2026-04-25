import type { Metadata } from "next";
import { dsLiteracyTextbook } from "@/data/textbooks/ds-literacy";
import { TextbookView } from "@/components/TextbookView";

export const metadata: Metadata = {
  title: "データサイエンティスト検定 教科書 ─ 3 軸スキルを学ぶ",
  description:
    "DS検定リテラシーレベル対策の教科書。データサイエンス力・データエンジニアリング力・ビジネス力の 3 軸を、章立てで解説します。",
  openGraph: {
    title: "データサイエンティスト検定 教科書",
    description:
      "DS 力 / DE 力 / ビジネス力の 3 軸を、リテラシーレベルでまとめた教科書。",
    type: "article",
  },
};

export default function DsLiteracyTextbookPage() {
  return (
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
  );
}
