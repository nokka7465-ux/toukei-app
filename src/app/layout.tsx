import type { Metadata } from "next";
import Link from "next/link";
import { isAffiliateEnabled } from "@/data/books";
import "./globals.css";

export const metadata: Metadata = {
  title: "統計検定 学習サイト",
  description: "統計検定4級〜1級の公式集と過去問(オリジナル類題)で学習できるサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold">
              統計検定 学習サイト
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:underline">ホーム</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500 space-y-3">
            <div>
              問題はすべてオリジナル類題です。学習の参考用にご利用ください。
            </div>
            <nav className="flex gap-4 text-xs">
              <Link href="/privacy" className="hover:underline">
                プライバシーポリシー
              </Link>
              <Link href="/contact" className="hover:underline">
                お問い合わせ
              </Link>
            </nav>
            {isAffiliateEnabled && (
              <div className="text-xs leading-relaxed">
                当サイトは Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon アソシエイト・プログラムの参加者です。
              </div>
            )}
          </div>
        </footer>
      </body>
    </html>
  );
}
