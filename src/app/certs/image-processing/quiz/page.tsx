import type { Metadata } from "next";
import Link from "next/link";
import { imageProcessingQuestions } from "@/data/questions/image-processing";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "画像処理エンジニア検定 演習問題 ─ フィルタ ・ 周波数 ・ CNN の無料選択式問題",
  description:
    "画像処理エンジニア検定 エキスパート対策の無料オリジナル選択式問題。標本化・フィルタ・周波数解析・SIFT/HOG・CNN・U-Net・YOLO・3 次元視覚など頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/image-processing/quiz" },
  openGraph: {
    title: "画像処理エンジニア検定 演習問題",
    description:
      "古典 CV から DL ベース CV まで、画像処理エンジニア検定の出題範囲を選択式問題で確認。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/image-processing/quiz";

export default function ImageProcessingQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "画像処理エンジニア検定", href: "/certs/image-processing" },
          { name: "演習問題", href: "/certs/image-processing/quiz" },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <Link href="/certs/image-processing" className="hover:underline">
          画像処理エンジニア検定
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · Image Processing</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          画像処理エンジニア検定 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {imageProcessingQuestions.length}{" "}
          問のオリジナル類題。古典フィルタ ・ 周波数解析 ・ 特徴量 ・ CNN ・ U-Net ・ YOLO ・ 3 次元視覚など、画像処理エンジニア検定 エキスパートの主要論点を実戦形式で確認できます。
        </p>
      </header>

      <Quiz
        questions={imageProcessingQuestions}
        quizKey="image-processing"
        shareUrl={SHARE_URL}
        shareLabel="画像処理エンジニア検定 の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/image-processing/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 画像処理エンジニア検定の教科書を読む
        </Link>
        <Link
          href="/certs/image-processing"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          画像処理エンジニア検定の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
