import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { isAffiliateEnabled } from "@/data/books";
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
const SITE_NAME = "統計検定 学習帖";
const SITE_DESCRIPTION =
  "統計検定4級〜1級に対応した、教科書仕立ての学習サイト。明朝体の本文で読める教科書本編、重要公式集、難易度バッジ付きの選択式オリジナル類題で、初心者から1級受験者まで級別に学習できます。";

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
    "統計検定4級",
    "統計検定3級",
    "統計検定2級",
    "統計検定準1級",
    "統計検定1級",
    "公式集",
    "過去問",
    "学習サイト",
    "統計学",
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
        <header className="border-b border-[var(--page-border)] bg-[var(--page)]/70 backdrop-blur-sm sticky top-0 z-10">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-wide">
              統計検定 学習帖
            </Link>
            <nav className="flex gap-5 text-sm ui-sans">
              <Link href="/" className="hover:underline">
                ホーム
              </Link>
              <Link href="/textbook/grade-4" className="hover:underline">
                教科書
              </Link>
            </nav>
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
