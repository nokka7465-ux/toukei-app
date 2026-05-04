import Link from "next/link";

export const metadata = {
  title: "このサイトについて | 統計ロードマップ",
  description:
    "統計ロードマップの運営者・運営方針・収益化・連絡先について。AIエンジニア向けの統計・数学・Python 学習教材を無料公開する個人運営サイトです。",
};

export default function AboutPage() {
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
        <span>このサイトについて</span>
      </nav>

      <header className="mb-8 pb-4 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">About</div>
        <h1 className="text-3xl font-bold tracking-wider">このサイトについて</h1>
      </header>

      <div className="paper rounded-lg p-7 space-y-8 text-sm leading-relaxed text-[var(--muted-strong)]">
        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            運営者
          </h2>
          <p>
            tamal（たまる）が個人で運営しています。金融機関でのキャリアを経て IT
            エンジニアに転身した実体験から、統計学・データサイエンス・AI
            に関する学習教材を整備・公開しています。
          </p>
          <ul className="mt-3 list-disc list-outside ml-5 space-y-1">
            <li>
              X (Twitter):{" "}
              <a
                href="https://x.com/tamalu_ai_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @tamalu_ai_dev
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/nokka7465-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                nokka7465-ux
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            サイトの目的
          </h2>
          <p>
            <strong>AI エンジニアになるための統計・数学・Python</strong>{" "}
            を、迷わず最短距離で学べる無料教材を提供することを目的としています。統計検定
            4 級〜1 級・G 検定・E 資格・DS 検定・QC
            検定など主要検定を完全網羅し、教科書・図解・演習・Python/R
            コード・チートシート・学習プラン計算・模試・ブログまで、すべて 1
            つのサイトで完結する設計にしています。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            運営方針
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>全コンテンツ無料・会員登録不要・ブラウザ完結</li>
            <li>掲載問題はすべて<strong>オリジナル類題</strong>（公式問題集の転載は行いません）</li>
            <li>図解・解説・例題・コードはすべて運営者による自作</li>
            <li>学習進捗・ブックマーク等のユーザーデータはローカル（ブラウザ内）に保存し、サーバーへ送信しません</li>
            <li>検定範囲の改定（年 1〜2 回）に追従して継続的に更新</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            収益化について
          </h2>
          <p>
            本サイトの運営費（ドメイン・ホスティング・教材作成時間）は、以下の収益で賄っています。読者の皆様の追加負担はありません。
          </p>
          <ul className="mt-2 list-disc list-outside ml-5 space-y-1.5">
            <li>
              <strong>Amazon アソシエイト</strong>（書籍紹介リンク）
            </li>
            <li>
              <strong>Google AdSense</strong>（記事内のディスプレイ広告）
            </li>
            <li>
              <strong>提携スクールへの紹介</strong>（リンク経由でのお申込で運営費を支援できます）
            </li>
          </ul>
          <p className="mt-3">
            アフィリエイトリンクには <code>rel=&quot;sponsored&quot;</code>{" "}
            属性を付与し、紹介リンクであることを明示しています。詳細は{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            技術スタック
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-1">
            <li>Next.js (App Router) + TypeScript + Tailwind CSS</li>
            <li>静的サイト生成（SSG）+ Vercel ホスティング</li>
            <li>
              ソースコード:{" "}
              <a
                href="https://github.com/nokka7465-ux/toukei-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/nokka7465-ux/toukei-app
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            連絡先
          </h2>
          <p>
            ご意見・ご要望・誤りのご指摘などは{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              お問い合わせページ
            </Link>{" "}
            よりお寄せください。教材改善のヒントとして大変参考になります。
          </p>
        </section>
      </div>
    </article>
  );
}
