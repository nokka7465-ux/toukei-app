import type { Metadata } from "next";
import { webAnalyticsTextbook } from "@/data/textbooks/web-analytics";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ウェブ解析士(初級)教科書 ─ GA4 / GTM / KPI 完全解説",
  description:
    "ウェブ解析士(初級)対策の無料教科書。KGI/KPI 設計 ・ アクセス解析の指標 ・ GA4 ・ GTM ・ アトリビューション ・ Looker Studio ・ A/B テスト ・ Cookieless 対応 ・ キャリア展望を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/web-analytics/textbook" },
  openGraph: {
    title: "ウェブ解析士(初級)教科書",
    description:
      "WACA 認定ウェブ解析士(初級)対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function WebAnalyticsTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ウェブ解析士", href: "/certs/web-analytics" },
          { name: "教科書", href: "/certs/web-analytics/textbook" },
        ]}
      />
      <CourseJsonLd
        name="ウェブ解析士(初級)対策教科書"
        description="KGI/KPI ・ GA4 ・ GTM ・ アトリビューション ・ A/B テスト ・ Cookieless 対応 ・ Looker Studio を全 10 章で体系的に解説。"
        url="/certs/web-analytics/textbook"
        about={[
          "Web Analytics",
          "GA4",
          "Google Tag Manager",
          "KPI",
          "Attribution",
          "CRO",
        ]}
      />
      <TextbookView
        book={webAnalyticsTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "ウェブ解析士", href: "/certs/web-analytics" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← ウェブ解析士の概要に戻る", href: "/certs/web-analytics" },
          {
            label: "ウェブ解析士の問題を解く →",
            href: "/certs/web-analytics/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
