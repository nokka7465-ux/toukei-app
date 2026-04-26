import type { Metadata } from "next";
import { qcKenteiTextbook } from "@/data/textbooks/qc-kentei";
import { TextbookView } from "@/components/TextbookView";

export const metadata: Metadata = {
  title: "QC検定 教科書 ─ 品質管理の考え方から QC 7 つ道具まで",
  description:
    "QC 検定(品質管理検定)2-3 級対策の教科書。品質管理の思想・PDCA・管理図・工程能力・抜取検査・QC 7 つ道具・新 QC 7 つ道具を 4 章で解説。",
  openGraph: {
    title: "QC検定 教科書",
    description:
      "品質管理の理論と道具を 4 章で網羅。製造業・改善活動の標準教養。",
    type: "article",
  },
};

export default function QcKenteiTextbookPage() {
  return (
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
  );
}
