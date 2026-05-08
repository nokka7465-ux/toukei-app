import type { Metadata } from "next";
import { imageProcessingTextbook } from "@/data/textbooks/image-processing";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "画像処理エンジニア検定 教科書 ─ 古典 CV から深層学習まで完全解説",
  description:
    "画像処理エンジニア検定 エキスパート対策の無料教科書。標本化・色空間・フィルタ・周波数解析・幾何変換・モルフォロジ・特徴量・CNN・U-Net・YOLO・3 次元視覚を全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/image-processing/textbook" },
  openGraph: {
    title: "画像処理エンジニア検定 教科書",
    description:
      "古典的画像処理から DL ベース CV まで、画像処理エンジニア検定対策をまとめた無料教科書。",
    type: "article",
  },
};

export default function ImageProcessingTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "画像処理エンジニア検定", href: "/certs/image-processing" },
          { name: "教科書", href: "/certs/image-processing/textbook" },
        ]}
      />
      <CourseJsonLd
        name="画像処理エンジニア検定 エキスパート 対策教科書"
        description="標本化・色空間・フィルタ・周波数解析・幾何変換・モルフォロジ・特徴量・CNN・U-Net・YOLO・3 次元視覚を全 10 章で体系的に解説。"
        url="/certs/image-processing/textbook"
        about={[
          "画像処理",
          "コンピュータビジョン",
          "CNN",
          "U-Net",
          "YOLO",
          "ステレオ視",
          "CG-ARTS",
        ]}
      />
      <TextbookView
        book={imageProcessingTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "画像処理エンジニア検定", href: "/certs/image-processing" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          {
            label: "← 画像処理エンジニア検定の概要に戻る",
            href: "/certs/image-processing",
          },
          {
            label: "画像処理エンジニア検定の問題を解く →",
            href: "/certs/image-processing/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
