import type { Metadata } from "next";
import Link from "next/link";
import { LOGOS } from "@/components/LogoCandidates";

export const metadata: Metadata = {
  title: "ロゴ案 プレビュー",
  description:
    "サイトロゴの候補案 6 パターンをプレビューするための内部ページ。",
  alternates: { canonical: "/logos" },
  robots: { index: false, follow: false },
};

const SAMPLE_SIZES = [
  { size: 32, label: "32px (favicon)" },
  { size: 48, label: "48px (header)" },
  { size: 96, label: "96px (PWA)" },
  { size: 192, label: "192px (large)" },
];

export default function LogosPage() {
  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>ロゴ案プレビュー</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Logo Preview</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wider">
          ロゴ案 プレビュー
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          『統計ロードマップ』のロゴ候補 6 パターンを、複数サイズ・配置コンテキスト・ライト/ダーク両方で並べました。気に入ったものを教えていただければ、サイト全体のロゴ・favicon・PWA アイコン・OG 画像にすべて反映します。
        </p>
      </header>

      {/* Side-by-side comparison */}
      <section className="mb-12 paper rounded-lg p-6">
        <h2 className="text-lg font-bold mb-5">並べて比較(48px)</h2>
        <div className="flex flex-wrap gap-6 justify-around items-end">
          {LOGOS.map(({ id, name, Component }) => (
            <div key={id} className="text-center">
              <Component size={64} />
              <div className="text-xs font-bold ui-sans mt-2">{id}</div>
              <div className="text-[10px] text-[var(--muted)] ui-sans">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed cards per candidate */}
      <div className="space-y-10">
        {LOGOS.map(({ id, name, description, Component }) => (
          <section
            key={id}
            id={`logo-${id}`}
            className="paper rounded-lg p-6 md:p-7 scroll-mt-20"
          >
            <header className="mb-5 pb-3 border-b border-[var(--page-border)]">
              <div className="chapter-eyebrow mb-1">Candidate {id}</div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Component size={36} />
                <span>
                  {id} ─ {name}
                </span>
              </h2>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed mt-2">
                {description}
              </p>
            </header>

            {/* Sizes */}
            <div className="mb-6">
              <div className="chapter-eyebrow mb-3">サイズ展開</div>
              <div className="flex flex-wrap gap-6 items-end">
                {SAMPLE_SIZES.map(({ size, label }) => (
                  <div key={size} className="text-center">
                    <Component size={size} />
                    <div className="text-[10px] text-[var(--muted)] ui-sans mt-2">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In context: header */}
            <div className="mb-6">
              <div className="chapter-eyebrow mb-3">ヘッダーでの見え方</div>
              <div className="rounded border border-[var(--page-border-strong)] bg-[var(--page)] px-4 py-3 flex items-center gap-3">
                <Component size={36} />
                <div>
                  <div className="text-base font-bold tracking-wide">
                    統計ロードマップ
                  </div>
                  <div className="text-[10px] text-[var(--muted)] ui-sans">
                    AIエンジニアへの統計・数学・Python
                  </div>
                </div>
              </div>
            </div>

            {/* Light + dark backgrounds */}
            <div>
              <div className="chapter-eyebrow mb-3">背景色テスト</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="rounded border border-[var(--page-border)] py-6 flex justify-center bg-white">
                  <Component size={64} variant="light" />
                </div>
                <div className="rounded border border-[var(--page-border)] py-6 flex justify-center bg-[#faf6ec]">
                  <Component size={64} variant="light" />
                </div>
                <div className="rounded border border-[var(--page-border-strong)] py-6 flex justify-center bg-[#1f2937]">
                  <Component size={64} variant="dark" />
                </div>
                <div className="rounded border border-[var(--page-border-strong)] py-6 flex justify-center bg-black">
                  <Component size={64} variant="dark" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-1 text-[10px] text-[var(--muted)] ui-sans text-center">
                <div>純白</div>
                <div>クリーム(現サイト)</div>
                <div>ダークグレー</div>
                <div>純黒</div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">Next</div>
        <h2 className="text-lg font-bold mb-3">気に入った案が見つかったら</h2>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-3">
          『A 〜 F のどれにします』と教えていただければ、サイト全体に一括反映します:
        </p>
        <ul className="text-sm text-[var(--muted-strong)] leading-loose list-disc ml-6 space-y-1">
          <li>ヘッダーのテキストロゴ → 選ばれた SVG ロゴに差し替え</li>
          <li>
            <code>/icon</code> / <code>/apple-icon</code> / PWA manifest アイコン
          </li>
          <li>OG 画像（ホーム / ロードマップ / 模試）にも組み込み</li>
          <li>favicon の差し替え</li>
        </ul>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4">
          どれもしっくり来ない場合は、希望のテイスト(『もっとモダン』『手描き感』『AI 感』など)を教えてもらえれば、追加案を作成します。
        </p>
      </section>
    </article>
  );
}
