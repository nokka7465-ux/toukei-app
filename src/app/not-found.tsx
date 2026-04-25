import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description:
    "お探しのページは見つかりませんでした。教科書一覧、用語集、検索からお探しください。",
  robots: {
    index: false,
    follow: false,
  },
};

const QUICK_LINKS: { href: string; label: string; subtle: string }[] = [
  { href: "/textbook", label: "教科書 一覧", subtle: "入門編 〜 1 級と関連検定" },
  { href: "/quiz", label: "演習問題 一覧", subtle: "1 問 1 答 + 模擬試験" },
  { href: "/glossary", label: "用語集(206 語)", subtle: "統計・ML・公的統計を横断" },
  { href: "/figures", label: "図解で学ぶ統計", subtle: "16 種の SVG 図" },
  { href: "/search", label: "サイト内検索", subtle: "教科書・用語・公式を横断検索" },
  { href: "/exam-info", label: "受験情報まとめ", subtle: "9 検定の試験形式・受験料" },
];

export default function NotFound() {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)] text-center">
        <div className="chapter-eyebrow mb-3">404 ─ Not Found</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
          ページが見つかりませんでした
        </h1>
        <hr className="rule-double max-w-xs mx-auto" />
        <p className="text-[var(--muted-strong)] leading-loose mt-5">
          お探しのページは <strong>移動・削除された</strong> か、URL が{" "}
          <strong>間違っている</strong> 可能性があります。
          <br className="hidden md:block" />
          下の主要ページから目的のコンテンツを探してみてください。
        </p>
      </header>

      <section className="mb-10">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">Where to next?</div>
          <h2 className="text-xl font-bold">主要ページへ</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block"
            >
              <div className="font-bold text-base mb-1 group-hover:text-[var(--link)]">
                {link.label}
              </div>
              <div className="text-xs text-[var(--muted-strong)] leading-relaxed">
                {link.subtle}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="paper rounded-lg p-6 text-center">
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-3">
          それでも見つからないときは、<strong>サイト内検索</strong>{" "}
          をお試しください。気になる用語やトピック名で、教科書・用語集・公式集・ブログを横断して検索できます。
        </p>
        <Link
          href="/search"
          className="inline-block px-5 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold text-sm hover:bg-[var(--accent-strong)] ui-sans"
        >
          サイト内検索を開く →
        </Link>
      </section>

      <p className="mt-10 text-center text-xs text-[var(--muted)] ui-sans">
        誤ったリンクからこのページに来た場合は、{" "}
        <Link href="/contact" className="text-[var(--link)] hover:underline">
          お問い合わせ
        </Link>{" "}
        からご連絡いただけると修正できます。
      </p>
    </article>
  );
}
