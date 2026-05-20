import type { Metadata } from "next";
import { tableauDataAnalystTextbook } from "@/data/textbooks/tableau-data-analyst";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tableau Data Analyst 教科書 ─ LOD / Calc / Dashboard / Story / Server を完全解説",
  description:
    "Tableau Certified Data Analyst 対策の無料教科書。Connect / Prep / LOD / Table Calc / Dashboard / Story / Server / Cloud / Pulse / Einstein を全 6 章で体系的に解説。",
  alternates: { canonical: "/certs/tableau-data-analyst/textbook" },
  openGraph: { title: "Tableau Data Analyst 教科書", description: "Tableau Data Analyst 認定の対策をまとめた無料教科書。", type: "article" },
};

export default function TableauDaTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Tableau Data Analyst", href: "/certs/tableau-data-analyst" }, { name: "教科書", href: "/certs/tableau-data-analyst/textbook" }]} />
      <CourseJsonLd name="Tableau Certified Data Analyst 対策教科書" description="Connect / Prep / LOD / Table Calc / Dashboard / Story / Server / Cloud / Pulse / Einstein を全 6 章で体系的に解説。" url="/certs/tableau-data-analyst/textbook" about={["Tableau", "Data Analyst", "LOD", "Dashboard", "Story", "Tableau Server"]} />
      <TextbookView book={tableauDataAnalystTextbook} breadcrumb={[{ label: "ホーム", href: "/" }, { label: "関連検定" }, { label: "Tableau Data Analyst", href: "/certs/tableau-data-analyst" }, { label: "教科書" }]} bottomLinks={[{ label: "← Tableau Data Analyst の概要に戻る", href: "/certs/tableau-data-analyst" }, { label: "問題を解く →", href: "/certs/tableau-data-analyst/quiz", primary: true }]} />
    </>
  );
}
