import type { Metadata } from "next";
import { dxKenteiTextbook } from "@/data/textbooks/dx-kentei";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DX 検定 教科書 ─ 最新 IT トレンド + DX 推進実務を完全解説",
  description:
    "DX 検定対策の無料教科書。経産省 DX 定義 ・ AI ・ クラウド ・ IoT ・ 5G ・ ブロックチェーン ・ RPA ・ アジャイル ・ セキュリティ ・ BI ・ DX 人材 ・ 業界事例を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/dx-kentei/textbook" },
  openGraph: {
    title: "DX 検定 教科書",
    description:
      "DX 検定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function DxKenteiTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DX 検定", href: "/certs/dx-kentei" },
          { name: "教科書", href: "/certs/dx-kentei/textbook" },
        ]}
      />
      <CourseJsonLd
        name="DX 検定 対策教科書"
        description="経産省 DX 定義 ・ AI ・ クラウド ・ IoT ・ 5G ・ ブロックチェーン ・ RPA ・ アジャイル ・ セキュリティ ・ BI ・ DX 人材 ・ 業界事例を全 10 章で体系的に解説。"
        url="/certs/dx-kentei/textbook"
        about={[
          "DX",
          "デジタルトランスフォーメーション",
          "AI",
          "IoT",
          "5G",
          "ブロックチェーン",
        ]}
      />
      <TextbookView
        book={dxKenteiTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "DX 検定", href: "/certs/dx-kentei" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← DX 検定の概要に戻る", href: "/certs/dx-kentei" },
          {
            label: "DX 検定の問題を解く →",
            href: "/certs/dx-kentei/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
