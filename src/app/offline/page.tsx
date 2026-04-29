import type { Metadata } from "next";
import Link from "next/link";
import { ReloadButton } from "./ReloadButton";

export const metadata: Metadata = {
  title: "オフライン",
  description: "現在オフラインのため、ページを取得できませんでした。",
  alternates: { canonical: "/offline" },
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <article className="text-center py-16">
      <div className="text-6xl mb-4" aria-hidden="true">
        📡
      </div>
      <h1 className="text-3xl font-bold mb-3">オフラインです</h1>
      <p className="text-[var(--muted-strong)] leading-loose max-w-xl mx-auto mb-6">
        ネットワーク接続がないため、リクエストされたページを取得できませんでした。一度開いたことのあるページはキャッシュから表示できます。
      </p>
      <div className="flex flex-wrap gap-3 justify-center ui-sans text-sm">
        <Link
          href="/"
          className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
        >
          ホームへ戻る
        </Link>
        <ReloadButton />
      </div>
    </article>
  );
}
