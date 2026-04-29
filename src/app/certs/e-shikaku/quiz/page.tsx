import type { Metadata } from "next";
import Link from "next/link";
import { eShikakuQuestions } from "@/data/questions/e-shikaku";
import { Quiz } from "@/components/Quiz";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "E資格 演習問題 ─ DL 数理・最適化・主要モデル(無料)",
  description:
    "E 資格(JDLA Engineer)対策の無料オリジナル選択式問題。線形代数・最適化・CNN/RNN/Transformer・GAN/VAE・モデル軽量化・倫理など、E 資格の頻出トピックを実戦形式で確認できます。",
  alternates: { canonical: "/certs/e-shikaku/quiz" },
  openGraph: {
    title: "E資格 演習問題",
    description: "DL の数理・最適化・主要モデル・倫理の選択式問題。",
    type: "article",
  },
};

const SHARE_URL = "https://toukei-app.com/certs/e-shikaku/quiz";

export default function EShikakuQuizPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "E資格", href: "/certs/e-shikaku" },
          { name: "演習問題", href: "/certs/e-shikaku/quiz" },
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
        <Link href="/certs/e-shikaku" className="hover:underline">
          E資格
        </Link>
        <span className="mx-2">›</span>
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice · E Engineer</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          E資格 演習問題
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          全 {eShikakuQuestions.length}{" "}
          問のオリジナル類題。線形代数・最適化・CNN / RNN / Transformer・GAN / VAE・モデル軽量化・倫理など、E 資格の頻出トピックを実戦形式で確認できます。1 問 1 答モードで「解答する → 解説 → 次の問題」の流れで学べます。
        </p>
      </header>

      <Quiz
        questions={eShikakuQuestions}
        quizKey="e-shikaku"
        shareUrl={SHARE_URL}
        shareLabel="E資格(JDLA Engineer)の演習問題"
      />

      <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/e-shikaku/textbook"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← E資格の教科書を読む
        </Link>
        <Link
          href="/certs/e-shikaku"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          E資格の概要に戻る
        </Link>
      </nav>
    </article>
  );
}
