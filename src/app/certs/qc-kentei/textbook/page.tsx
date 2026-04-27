import type { Metadata } from "next";
import { qcKenteiTextbook } from "@/data/textbooks/qc-kentei";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "QC検定 対策教科書 ─ 品質管理・管理図・QC 7 つ道具の無料解説",
  description:
    "QC 検定(品質管理検定)2-3 級対策の無料教科書。品質管理の思想・PDCA・管理図・工程能力・抜取検査・QC 7 つ道具・新 QC 7 つ道具を 4 章で体系的に解説。",
  alternates: { canonical: "/certs/qc-kentei/textbook" },
  openGraph: {
    title: "QC検定 教科書",
    description:
      "品質管理の理論と道具を 4 章で網羅。製造業・改善活動の標準教養。",
    type: "article",
  },
};

export default function QcKenteiTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "QC検定", href: "/certs/qc-kentei" },
          { name: "教科書", href: "/certs/qc-kentei/textbook" },
        ]}
      />
      <CourseJsonLd
        name="QC検定(品質管理検定)2-3 級 対策教科書"
        description="品質管理の思想・PDCA・管理図・工程能力・抜取検査・QC 7 つ道具・新 QC 7 つ道具を 4 章で体系的に解説したQC検定対策の教科書。"
        url="/certs/qc-kentei/textbook"
        about={["品質管理", "管理図", "QC 7つ道具", "工程能力", "抜取検査", "PDCA"]}
      />
      <TextbookView
        book={qcKenteiTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "QC検定", href: "/certs/qc-kentei" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← QC検定の概要に戻る", href: "/certs/qc-kentei" },
          {
            label: "QC検定の問題を解く →",
            href: "/certs/qc-kentei/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
