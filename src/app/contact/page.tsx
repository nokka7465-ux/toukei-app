import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | 統計検定 学習サイト",
  description: "統計検定 学習サイトへのお問い合わせ先です。",
};

const CONTACT_EMAIL = "contact.tamalu+toukei@gmail.com";

export default function ContactPage() {
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
        <span>お問い合わせ</span>
      </nav>

      <header className="mb-8 pb-4 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Contact</div>
        <h1 className="text-3xl font-bold tracking-wider">お問い合わせ</h1>
      </header>

      <div className="paper rounded-lg p-7 space-y-6 text-sm leading-relaxed text-[var(--muted-strong)]">
        <p>
          本サイトに関するご質問・ご意見・誤りのご指摘などは、以下のメールアドレスまでご連絡ください。
        </p>

        <div className="p-4 border border-[var(--page-border-strong)] rounded-lg bg-[var(--background)]">
          <div className="text-xs text-[var(--muted)] mb-1 ui-sans">
            メールアドレス
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[var(--link)] hover:underline font-mono text-base break-all ui-sans"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <section>
          <h2 className="text-base font-bold mb-2 text-[var(--foreground)]">
            よくあるお問い合わせ
          </h2>
          <ul className="list-disc list-outside ml-6 space-y-1">
            <li>問題・解説の誤りのご指摘</li>
            <li>追加してほしいトピックのリクエスト</li>
            <li>その他、本サイトの運営に関するお問い合わせ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-[var(--foreground)]">
            ご注意
          </h2>
          <ul className="list-disc list-outside ml-6 space-y-1">
            <li>個別の学習相談・進路相談にはお答えしかねます。</li>
            <li>
              いただいたご連絡へのご返信は、内容により数日〜数週間かかる場合があります。あらかじめご了承ください。
            </li>
            <li>営業目的・宣伝目的のご連絡にはお答えできません。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
