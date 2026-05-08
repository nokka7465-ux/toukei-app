import type { Metadata } from "next";
import { dsExpertTextbook } from "@/data/textbooks/ds-expert";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 DS エキスパート 教科書 ─ 高度統計 ・ ML ・ 因果推論を完全解説",
  description:
    "統計検定 DS エキスパート対策の無料教科書。EDA・推測統計・GLM・機械学習・ベイズ・時系列・因果推論・MLOps を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/ds-expert/textbook" },
  openGraph: {
    title: "DS エキスパート 教科書 ─ 統計 + ML + 因果推論",
    description:
      "EDA から MLOps まで、DS エキスパート対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function DsExpertTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS エキスパート", href: "/certs/ds-expert" },
          { name: "教科書", href: "/certs/ds-expert/textbook" },
        ]}
      />
      <CourseJsonLd
        name="統計検定 DS エキスパート 対策教科書"
        description="EDA・推測統計・GLM・機械学習・ベイズ・時系列・因果推論・MLOps を全 10 章で体系的に解説。"
        url="/certs/ds-expert/textbook"
        about={[
          "データサイエンス",
          "機械学習",
          "ベイズ統計",
          "因果推論",
          "MLOps",
          "統計検定",
        ]}
      />
      <TextbookView
        book={dsExpertTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "DS エキスパート", href: "/certs/ds-expert" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← DS エキスパートの概要に戻る", href: "/certs/ds-expert" },
          {
            label: "DS エキスパートの問題を解く →",
            href: "/certs/ds-expert/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
