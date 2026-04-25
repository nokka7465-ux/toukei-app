import type { Metadata } from "next";
import { mathBasicsTextbook } from "@/data/textbooks/math";
import { TextbookView } from "@/components/TextbookView";

export const metadata: Metadata = {
  title: "数学基礎 教科書 ─ 統計のための数学を 1 冊に",
  description:
    "統計のための数学基礎の教科書。割合・百分率・指数表記・総和記号 Σ・対数・微積分・線形代数まで、章立てで整理しています。",
  openGraph: {
    title: "数学基礎 教科書 ─ 統計のための数学を 1 冊に",
    description:
      "割合・Σ・対数・微積分・線形代数まで、統計に必要な数学を一通り。",
    type: "article",
  },
};

export default function MathTextbookPage() {
  return (
    <TextbookView
      book={mathBasicsTextbook}
      breadcrumb={[
        { label: "ホーム", href: "/" },
        { label: "数学基礎", href: "/math" },
        { label: "教科書" },
      ]}
      bottomLinks={[
        { label: "← 数学基礎の概要に戻る", href: "/math" },
        {
          label: "数学基礎の問題を解く →",
          href: "/math/quiz",
          primary: true,
        },
      ]}
    />
  );
}
