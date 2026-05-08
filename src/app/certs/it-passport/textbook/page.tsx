import type { Metadata } from "next";
import { itPassportTextbook } from "@/data/textbooks/it-passport";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ITパスポート試験 教科書 ─ ストラテジ ・ マネジメント ・ テクノロジ系を完全解説",
  description:
    "ITパスポート試験(IPA)対策の無料教科書。コンピュータ ・ ネットワーク ・ セキュリティ ・ マネジメント ・ 経営戦略 ・ 法務 ・ 開発 ・ AI / DX を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/it-passport/textbook" },
  openGraph: {
    title: "ITパスポート試験 教科書",
    description:
      "iパス対策をまとめた無料教科書。3 分野バランスよく学習できます。",
    type: "article",
  },
};

export default function ItPassportTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ITパスポート試験", href: "/certs/it-passport" },
          { name: "教科書", href: "/certs/it-passport/textbook" },
        ]}
      />
      <CourseJsonLd
        name="ITパスポート試験 対策教科書"
        description="コンピュータ ・ ネットワーク ・ セキュリティ ・ マネジメント ・ 経営戦略 ・ 法務 ・ 開発 ・ AI / DX を全 10 章で体系的に解説。"
        url="/certs/it-passport/textbook"
        about={[
          "ITパスポート",
          "iパス",
          "情報処理技術者試験",
          "AI",
          "DX",
        ]}
      />
      <TextbookView
        book={itPassportTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "ITパスポート試験", href: "/certs/it-passport" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← ITパスポートの概要に戻る", href: "/certs/it-passport" },
          {
            label: "ITパスポートの問題を解く →",
            href: "/certs/it-passport/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
