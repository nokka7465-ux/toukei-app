import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { isAffiliateEnabled } from "@/data/books";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";
import { ThemeToggle, themeInitScript } from "@/components/ThemeToggle";
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

const SITE_URL = "https://toukei-app-eight.vercel.app";
const SITE_NAME = "統計検定 学習帳";
const SITE_DESCRIPTION =
  "統計検定4級〜1級に対応した無料学習サイト。教科書・公式集・演習問題をすべて無料で学習できます。データサイエンスやPythonと組み合わせた実践的な統計学習にも対応。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "統計検定",
    "統計学",
    "2級",
    "準1級",
    "1級",
    "3級",
    "4級",
    "学習",
    "無料",
    "問題集",
    "公式集",
    "データサイエンス",
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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData />
        <GoogleAnalytics />
        <header className="border-b border-[var(--page-border)] bg-[var(--page)]/70 backdrop-blur-sm sticky top-0 z-10">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-wide">
              統計検定 学習帳
            </Link>
            <div className="flex items-center gap-3">
              <nav className="flex gap-4 text-sm ui-sans flex-wrap justify-end">
                <Link href="/" className="hover:underline">
                  ホーム
                </Link>
                <Link href="/roadmap" className="hover:underline">
                  ロードマップ
                </Link>
                <Link href="/textbook/grade-4" className="hover:underline">
                  教科書
                </Link>
                <Link
                  href="/math"
                  className="hover:underline"
                  title="統計のための数学基礎"
                >
                  数学基礎
                </Link>
                <Link
                  href="/certs/ds-basic"
                  className="hover:underline"
                  title="統計検定の関連検定"
                >
                  関連検定
                </Link>
                <Link href="/glossary" className="hover:underline">
                  用語集
                </Link>
                <Link href="/blog" className="hover:underline">
                  ブログ
                </Link>
                <Link href="/diagnose" className="hover:underline">
                  級診断
                </Link>
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
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="border-t border-[var(--page-border)] mt-16 bg-[var(--page)]/40">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-[var(--muted)] space-y-3">
            <div className="ui-sans text-xs">
              問題はすべてオリジナル類題です。学習の参考用にご利用ください。
            </div>
            <nav className="flex gap-4 text-xs ui-sans">
              <Link href="/privacy" className="hover:underline">
                プライバシーポリシー
              </Link>
              <Link href="/contact" className="hover:underline">
                お問い合わせ
              </Link>
            </nav>
            {isAffiliateEnabled && (
              <div className="text-xs leading-relaxed ui-sans">
                当サイトは Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon
                アソシエイト・プログラムの参加者です。
              </div>
            )}
          </div>
        </footer>
      </body>
    </html>
  );
}
