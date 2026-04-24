import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | 統計検定 学習サイト",
  description: "統計検定 学習サイトへのお問い合わせ先です。",
};

const CONTACT_EMAIL = "contact.tamalu+toukei@gmail.com";

export default function ContactPage() {
  return (
    <div>
      <div className="mb-6">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← ホーム
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">お問い合わせ</h1>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          本サイトに関するご質問・ご意見・誤りのご指摘などは、以下のメールアドレスまでご連絡ください。
        </p>

        <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="text-xs text-gray-500 mb-1">メールアドレス</div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-blue-600 hover:underline font-mono text-base"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            よくあるお問い合わせ
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>問題・解説の誤りのご指摘</li>
            <li>追加してほしいトピックのリクエスト</li>
            <li>その他、本サイトの運営に関するお問い合わせ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            ご注意
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>個別の学習相談・進路相談にはお答えしかねます。</li>
            <li>
              いただいたご連絡へのご返信は、内容により数日〜数週間かかる場合があります。あらかじめご了承ください。
            </li>
            <li>
              営業目的・宣伝目的のご連絡にはお答えできません。
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
