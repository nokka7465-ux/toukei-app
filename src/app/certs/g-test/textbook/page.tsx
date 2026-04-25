import type { Metadata } from "next";
import { gTestTextbook } from "@/data/textbooks/g-test";
import { TextbookView } from "@/components/TextbookView";

export const metadata: Metadata = {
  title: "G検定 教科書 ─ AI / ディープラーニング基礎",
  description:
    "G検定(JDLA ジェネラリスト検定)対策の教科書。AI の歴史・機械学習・ディープラーニング・社会実装と倫理 ─ 章立てで解説します。",
  openGraph: {
    title: "G検定 教科書 ─ AI/DL の概念を体系的に",
    description:
      "AI の歴史 / 機械学習 / DL の主要モデル / 倫理まで、G検定対策をまとめた教科書。",
    type: "article",
  },
};

export default function GTestTextbookPage() {
  return (
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
  );
}
