import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { isAffiliateEnabled } from "@/data/books";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { StructuredData } from "@/components/StructuredData";
import { ThemeToggle, themeInitScript } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import { BackToTop } from "@/components/BackToTop";
import { ReadingProgress } from "@/components/ReadingProgress";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { Logo } from "@/components/Logo";
import { GlossaryLookup } from "@/components/GlossaryLookup";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const SITE_URL = "https://toukei-app.com";
const SITE_NAME = "統計ロードマップ";
const SITE_TAGLINE =
  "AIエンジニアになるための統計・数学・Python を一気通貫で学ぶ";
const SITE_DESCRIPTION =
  "AIエンジニアになるための統計・数学・Python を一気通貫で学べる無料サイト。統計検定 4 級〜1 級・G検定・E資格・DS検定・QC検定など関連検定も網羅。インタラクティブ図解・統計計算ツール・Python/R コード併記で、理論から実装までスムーズに繋がる学習ロードマップを提供。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AIエンジニア",
    "統計ロードマップ",
    "機械学習",
    "ディープラーニング",
    "Python",
    "数学",
    "統計学",
    "統計検定",
    "2級",
    "準1級",
    "E資格",
    "G検定",
    "DS検定",
    "データサイエンス",
    "学習ロードマップ",
    "無料",
    "問題集",
    "公式集",
    "QC検定",
    "JDLA",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "yejvEtQ4WDL7RvEEdi84O_aJlPCz8Z_kvLSO3iW0NB4",
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#101826" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable}`}
    >
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--page)] focus:text-[var(--link)] focus:border-2 focus:border-[var(--accent)] focus:rounded focus:shadow-lg ui-sans text-sm font-bold"
        >
          本文へスキップ
        </a>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener("click",function(e){var ds=document.querySelectorAll("details.header-more[open]");for(var i=0;i<ds.length;i++){var d=ds[i];var t=e.target;if(t instanceof Node&&d.contains(t)){if(t!==d.querySelector("summary")&&!(t instanceof HTMLElement&&t.closest("summary"))){d.removeAttribute("open");}}else{d.removeAttribute("open");}}});`,
          }}
        />
        <StructuredData />
        <GoogleAnalytics />
        <GoogleAdSense />
        <ReadingProgress />
        <KeyboardShortcuts />
        <GlossaryLookup />
        <ServiceWorkerRegistration />
        <header className="border-b border-[var(--page-border)] bg-[var(--page)]/70 backdrop-blur-sm sticky top-0 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 leading-tight"
              aria-label={`${SITE_NAME} ─ ${SITE_TAGLINE}`}
            >
              <Logo size={36} className="shrink-0" />
              <span>
                <span className="block text-lg font-bold tracking-wide">
                  統計ロードマップ
                </span>
                <span className="hidden sm:block text-[10px] text-[var(--muted)] ui-sans tracking-wide">
                  AIエンジニアへの統計・数学・Python
                </span>
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <nav className="hidden md:flex gap-0.5 text-sm ui-sans items-center rounded-full border border-[var(--page-border-strong)] bg-[var(--page)]/60 px-1.5 py-1 backdrop-blur-sm shadow-sm">
                <Link href="/" className="px-2.5 py-1 rounded-full hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors">
                  ホーム
                </Link>
                <Link href="/roadmap" className="px-2.5 py-1 rounded-full hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors">
                  ロードマップ
                </Link>
                <Link href="/textbook" className="px-2.5 py-1 rounded-full hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors">
                  教科書
                </Link>
                <Link
                  href="/tools"
                  className="px-2.5 py-1 rounded-full hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors"
                  title="統計計算ツール集"
                >
                  ツール
                </Link>
                <Link
                  href="/certs/ds-basic"
                  className="px-2.5 py-1 rounded-full hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors"
                  title="統計検定の関連検定"
                >
                  関連検定
                </Link>
                <details className="header-more relative">
                  <summary className="px-2.5 py-1 rounded-full hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors cursor-pointer list-none flex items-center gap-1 select-none">
                    もっと見る
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="header-more-chevron"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="absolute right-0 top-full mt-2 paper rounded-lg p-3 shadow-lg z-20 border border-[var(--page-border-strong)] min-w-[460px] grid grid-cols-2 gap-x-4 gap-y-3">
                    {/* 列1: 診断 + 入門 */}
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-1.5 px-2">
                        診断・入門
                      </div>
                      <ul className="space-y-0.5">
                        <li>
                          <Link href="/score" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            🎯 統計偏差値診断
                          </Link>
                        </li>
                        <li>
                          <Link href="/diagnose" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            級診断(3 問)
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-ai" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            AI とは(5 分入門)
                          </Link>
                        </li>
                        <li>
                          <Link href="/plan" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            学習プラン計算
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* 列1下段: 学習サポート */}
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-1.5 px-2">
                        学習・参照
                      </div>
                      <ul className="space-y-0.5">
                        <li>
                          <Link href="/math" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            数学基礎
                          </Link>
                        </li>
                        <li>
                          <Link href="/figures" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            図解で学ぶ統計
                          </Link>
                        </li>
                        <li>
                          <Link href="/glossary" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            用語集
                          </Link>
                        </li>
                        <li>
                          <Link href="/cheatsheet" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            公式チートシート
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* 列2: 演習・復習 */}
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-1.5 px-2">
                        演習・復習
                      </div>
                      <ul className="space-y-0.5">
                        <li>
                          <Link href="/review" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            苦手復習
                          </Link>
                        </li>
                        <li>
                          <Link href="/flashcards" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            暗記カード
                          </Link>
                        </li>
                        <li>
                          <Link href="/exam-info" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            受験情報まとめ
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* 列2下段: 読み物 */}
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-1.5 px-2">
                        読み物
                      </div>
                      <ul className="space-y-0.5">
                        <li>
                          <Link href="/blog" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            ブログ
                          </Link>
                        </li>
                        <li>
                          <Link href="/programming" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            プログラミング
                          </Link>
                        </li>
                        <li>
                          <Link href="/causal-inference" className="block px-2 py-1.5 rounded hover:bg-[var(--background)] hover:text-[var(--link)] transition-colors text-xs">
                            因果推論
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </nav>
              <Link
                href="/search"
                aria-label="サイト内を検索"
                title="サイト内を検索"
                className="w-7 h-7 rounded border border-[var(--page-border-strong)] flex items-center justify-center hover:bg-[var(--background)] transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </Link>
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </header>
        <main id="main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
        <BackToTop />
        <footer className="border-t border-[var(--page-border)] mt-16 bg-[var(--page)]/40 print-hide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
              <div>
                <div className="chapter-eyebrow mb-2">学習開始</div>
                <ul className="space-y-1.5 ui-sans">
                  <li>
                    <Link href="/" className="hover:underline text-[var(--muted-strong)]">
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <Link href="/roadmap" className="hover:underline text-[var(--muted-strong)]">
                      ロードマップ
                    </Link>
                  </li>
                  <li>
                    <Link href="/diagnose" className="hover:underline text-[var(--muted-strong)]">
                      級診断
                    </Link>
                  </li>
                  <li>
                    <Link href="/score" className="hover:underline text-[var(--muted-strong)]">
                      統計偏差値診断
                    </Link>
                  </li>
                  <li>
                    <Link href="/exam-info" className="hover:underline text-[var(--muted-strong)]">
                      受験情報まとめ
                    </Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:underline text-[var(--muted-strong)]">
                      サイト内検索
                    </Link>
                  </li>
                  <li>
                    <Link href="/review" className="hover:underline text-[var(--muted-strong)]">
                      苦手問題の復習
                    </Link>
                  </li>
                  <li>
                    <Link href="/flashcards" className="hover:underline text-[var(--muted-strong)]">
                      暗記カード
                    </Link>
                  </li>
                  <li>
                    <Link href="/mock" className="hover:underline text-[var(--muted-strong)]">
                      模試 一覧
                    </Link>
                  </li>
                  <li>
                    <Link href="/practice" className="hover:underline text-[var(--muted-strong)]">
                      ランダム練習
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="chapter-eyebrow mb-2">統計検定</div>
                <ul className="space-y-1.5 ui-sans">
                  <li>
                    <Link href="/textbook/intro" className="hover:underline text-[var(--muted-strong)]">
                      入門編
                    </Link>
                  </li>
                  <li>
                    <Link href="/textbook/grade-4" className="hover:underline text-[var(--muted-strong)]">
                      4 級
                    </Link>
                  </li>
                  <li>
                    <Link href="/textbook/grade-3" className="hover:underline text-[var(--muted-strong)]">
                      3 級
                    </Link>
                  </li>
                  <li>
                    <Link href="/textbook/grade-2" className="hover:underline text-[var(--muted-strong)]">
                      2 級
                    </Link>
                  </li>
                  <li>
                    <Link href="/textbook/grade-pre1" className="hover:underline text-[var(--muted-strong)]">
                      準 1 級
                    </Link>
                  </li>
                  <li>
                    <Link href="/textbook/grade-1" className="hover:underline text-[var(--muted-strong)]">
                      1 級
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="chapter-eyebrow mb-2">関連検定</div>
                <ul className="space-y-1.5 ui-sans">
                  <li>
                    <Link href="/certs/ds-basic" className="hover:underline text-[var(--muted-strong)]">
                      DS基礎
                    </Link>
                  </li>
                  <li>
                    <Link href="/certs/survey" className="hover:underline text-[var(--muted-strong)]">
                      統計調査士
                    </Link>
                  </li>
                  <li>
                    <Link href="/certs/survey-specialist" className="hover:underline text-[var(--muted-strong)]">
                      専門統計調査士
                    </Link>
                  </li>
                  <li>
                    <Link href="/certs/g-test" className="hover:underline text-[var(--muted-strong)]">
                      G検定
                    </Link>
                  </li>
                  <li>
                    <Link href="/certs/e-shikaku" className="hover:underline text-[var(--muted-strong)]">
                      E資格
                    </Link>
                  </li>
                  <li>
                    <Link href="/certs/ds-literacy" className="hover:underline text-[var(--muted-strong)]">
                      DS検定
                    </Link>
                  </li>
                  <li>
                    <Link href="/certs/qc-kentei" className="hover:underline text-[var(--muted-strong)]">
                      QC検定
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="chapter-eyebrow mb-2">学習サポート</div>
                <ul className="space-y-1.5 ui-sans">
                  <li>
                    <Link href="/math" className="hover:underline text-[var(--muted-strong)]">
                      数学基礎
                    </Link>
                  </li>
                  <li>
                    <Link href="/figures" className="hover:underline text-[var(--muted-strong)]">
                      図解で学ぶ統計
                    </Link>
                  </li>
                  <li>
                    <Link href="/explore" className="hover:underline text-[var(--muted-strong)]">
                      動かして学ぶ統計
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools" className="hover:underline text-[var(--muted-strong)]">
                      統計計算ツール
                    </Link>
                  </li>
                  <li>
                    <Link href="/glossary" className="hover:underline text-[var(--muted-strong)]">
                      用語集
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:underline text-[var(--muted-strong)]">
                      ブログ
                    </Link>
                  </li>
                  <li>
                    <Link href="/cheatsheet" className="hover:underline text-[var(--muted-strong)]">
                      公式チートシート
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-ai" className="hover:underline text-[var(--muted-strong)]">
                      AI とは
                    </Link>
                  </li>
                  <li>
                    <Link href="/programming" className="hover:underline text-[var(--muted-strong)]">
                      プログラミング入門
                    </Link>
                  </li>
                  <li>
                    <Link href="/causal-inference" className="hover:underline text-[var(--muted-strong)]">
                      因果推論入門
                    </Link>
                  </li>
                  <li>
                    <Link href="/time-series" className="hover:underline text-[var(--muted-strong)]">
                      時系列分析入門
                    </Link>
                  </li>
                  <li>
                    <Link href="/deep-learning-basics" className="hover:underline text-[var(--muted-strong)]">
                      ディープラーニング基礎
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="chapter-eyebrow mb-2">サイト情報</div>
                <ul className="space-y-1.5 ui-sans">
                  <li>
                    <Link href="/about" className="hover:underline text-[var(--muted-strong)]">
                      このサイトについて
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline text-[var(--muted-strong)]">
                      お問い合わせ
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:underline text-[var(--muted-strong)]">
                      プライバシーポリシー
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--page-border)] text-xs text-[var(--muted)] ui-sans space-y-2">
              <div>
                © 統計ロードマップ. 問題はすべてオリジナル類題です。学習の参考用にご利用ください。
              </div>
              {isAffiliateEnabled && (
                <div className="leading-relaxed">
                  当サイトは Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon
                  アソシエイト・プログラムの参加者です。
                </div>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
