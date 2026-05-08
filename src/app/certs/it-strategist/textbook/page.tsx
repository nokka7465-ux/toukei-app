import type { Metadata } from "next";
import { itStrategistTextbook } from "@/data/textbooks/it-strategist";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ITストラテジスト試験 教科書 ─ 経営戦略 + IT 統合を完全解説",
  description:
    "ITストラテジスト試験(IPA、レベル 4 高度試験)対策の無料教科書。経営戦略フレームワーク ・ 事業戦略 ・ IT 戦略 ・ EA ・ システム企画 ・ DX ・ BPR ・ 投資判断 ・ イノベーション ・ 論述試験対策を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/it-strategist/textbook" },
  openGraph: {
    title: "ITストラテジスト試験 教科書",
    description:
      "ST 対策をまとめた無料教科書。論述試験のロジック構築まで対応。",
    type: "article",
  },
};

export default function ItStrategistTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ITストラテジスト試験", href: "/certs/it-strategist" },
          { name: "教科書", href: "/certs/it-strategist/textbook" },
        ]}
      />
      <CourseJsonLd
        name="ITストラテジスト試験 対策教科書"
        description="経営戦略フレームワーク ・ 事業戦略 ・ IT 戦略 ・ EA ・ システム企画 ・ DX ・ BPR ・ 投資判断 ・ イノベーション ・ 論述試験対策を全 10 章で体系的に解説。"
        url="/certs/it-strategist/textbook"
        about={[
          "ITストラテジスト",
          "経営戦略",
          "IT 戦略",
          "DX",
          "情報処理技術者試験",
        ]}
      />
      <TextbookView
        book={itStrategistTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "ITストラテジスト試験", href: "/certs/it-strategist" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← ITストラテジストの概要に戻る", href: "/certs/it-strategist" },
          {
            label: "ITストラテジストの問題を解く →",
            href: "/certs/it-strategist/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
