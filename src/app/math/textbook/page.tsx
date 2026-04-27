import type { Metadata } from "next";
import { mathBasicsTextbook } from "@/data/textbooks/math";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計のための数学基礎 教科書 ─ Σ・対数・微積分・線形代数",
  description:
    "統計のための数学基礎の無料教科書。割合・百分率・指数表記・総和記号 Σ・対数・微積分・線形代数まで、章立てで整理。統計検定の前提となる数学を最小限で。",
  alternates: { canonical: "/math/textbook" },
  openGraph: {
    title: "数学基礎 教科書 ─ 統計のための数学を 1 冊に",
    description:
      "割合・Σ・対数・微積分・線形代数まで、統計に必要な数学を一通り。",
    type: "article",
  },
};

export default function MathTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "数学基礎", href: "/math" },
          { name: "教科書", href: "/math/textbook" },
        ]}
      />
      <CourseJsonLd
        name="統計のための数学基礎"
        description="割合・百分率・指数表記・総和記号 Σ・対数・微積分・線形代数まで、統計学を学ぶうえで前提となる数学を、必要なところだけ抜粋した補助教材。"
        url="/math/textbook"
        about={["数学", "Σ", "指数対数", "微分積分", "線形代数", "統計学"]}
      />
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
    </>
  );
}
