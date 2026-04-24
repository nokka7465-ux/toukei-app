import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 統計検定 学習サイト",
  description:
    "統計検定 学習サイトのプライバシーポリシー・アフィリエイトプログラムに関する表示。",
};

export default function PrivacyPage() {
  return (
    <div>
      <div className="mb-6">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← ホーム
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>

      <div className="space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            基本方針
          </h2>
          <p>
            当サイト(以下「本サイト」)は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本ポリシーは、本サイトにおける個人情報の取り扱いについて定めるものです。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            個人情報の取得について
          </h2>
          <p>
            本サイトは原則として、氏名・住所・電話番号・メールアドレスなどの個人を特定できる情報を取得・保存いたしません。お問い合わせをいただく際には、ご連絡先としてメールアドレスをご提供いただく場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            アクセス解析ツールについて
          </h2>
          <p>
            本サイトでは、今後サイトの利用状況の把握のために、Google Analytics などのアクセス解析ツールを使用する場合があります。これらのツールはトラフィックデータの収集のために Cookie を使用することがありますが、取得されるデータは匿名であり、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            アフィリエイトプログラムについて
          </h2>
          <p>
            本サイトは、Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon アソシエイト・プログラムの参加者です。
          </p>
          <p className="mt-2">
            各商品リンクをクリックして Amazon.co.jp にて商品を購入された場合、本サイト運営者に一定の紹介料が支払われることがあります。商品の情報・価格・在庫状況等はすべて Amazon.co.jp 上の表示に従うものとし、本サイトはこれらについて一切保証するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            免責事項
          </h2>
          <p>
            本サイトの情報は学習の参考用として提供するものであり、正確性・完全性・有用性を保証するものではありません。本サイトに掲載されている問題はすべてオリジナル類題であり、実際の試験問題とは関係ありません。
          </p>
          <p className="mt-2">
            本サイトの利用によって利用者に生じたいかなる損害についても、運営者は責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            著作権
          </h2>
          <p>
            本サイトに掲載されているテキスト・問題・解説等のコンテンツの著作権は、運営者または正当な権利者に帰属します。無断での転載・複製はご遠慮ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            プライバシーポリシーの変更
          </h2>
          <p>
            本ポリシーの内容は、法令の改正やサービスの変更等に応じて予告なく変更される場合があります。変更後のポリシーは、本ページに掲載された時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold mb-2 text-gray-900 dark:text-gray-100">
            お問い合わせ
          </h2>
          <p>
            本ポリシーに関するご質問は
            <Link href="/contact" className="text-blue-600 hover:underline mx-1">
              お問い合わせページ
            </Link>
            よりご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
