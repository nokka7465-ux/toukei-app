import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E資格(JDLA Engineer)とは ─ 受験対象・出題範囲・対策",
  description:
    "E資格(JDLA ディープラーニング・エンジニア検定)の受験対象・出題範囲・対策方針をまとめた解説ページ。G 検定の上位として、ディープラーニングを実装するエンジニア向けの認定資格。",
  openGraph: {
    title: "E資格とは",
    description:
      "ディープラーニングを実装できるエンジニアの認定資格 E 資格の対策ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "E資格はどんな試験ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JDLA(日本ディープラーニング協会)主催の検定で、ディープラーニングを実装するエンジニアに必要な数学・ML/DL 理論・実装スキルを問います。G 検定が概念中心だったのに対し、E 資格は実装側を扱います。",
      },
    },
    {
      "@type": "Question",
      name: "E資格は誰向け?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI / ML エンジニア・データサイエンティストを目指す人、現職で DL 実装に携わる人。理工系の数学(線形代数・微分・確率)と Python 実装経験が前提です。",
      },
    },
    {
      "@type": "Question",
      name: "E資格を受けるための条件は?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JDLA 認定プログラム(数十時間〜数百時間の講座)の修了が受験条件。G 検定や他の検定は不要ですが、認定講座の費用が必要です。詳細は公式サイトを確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "G検定とE資格、どう違いますか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "G 検定は『使う側』(企画・マネジメント)、E 資格は『作る側』(エンジニア)。G 検定 → E 資格の順で受ける人が多いです。",
      },
    },
  ],
};

export default function EShikakuPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <span>E資格</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          E資格(JDLA ディープラーニング エンジニア検定)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          <strong>JDLA(日本ディープラーニング協会)</strong>{" "}
          が主催する、<strong>ディープラーニングを実装する技術者を認定する</strong>{" "}
          検定。G 検定が「使う側」だったのに対し、E 資格は「作る側」 ─ AI / ML エンジニア・データサイエンティストの登竜門と位置づけられています。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          E 資格の「E」は <strong>Engineer</strong>。線形代数・微分・確率・情報理論といった{" "}
          <strong>数学的基礎</strong>{" "}
          から、順伝播 / 逆伝播の手計算、最適化アルゴリズム、CNN / RNN / Transformer といった{" "}
          <strong>主要アーキテクチャの理解と実装</strong>{" "}
          まで広範に問われます。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験には JDLA 認定プログラム(数十〜数百時間の講座、有料)の修了が必要。AI 系の本格的なキャリアを目指す人にとって、明確なベンチマークになります。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "応用数学", body: "線形代数(SVD・固有値分解)・確率統計・情報理論(KL ダイバージェンス)" },
            { title: "機械学習", body: "教師あり / なし / 強化学習、汎化誤差、正則化、評価指標" },
            { title: "DL の基礎", body: "順伝播 / 逆伝播、活性化関数、損失関数、最適化(Adam・SGD)" },
            { title: "主要モデル", body: "CNN・RNN/LSTM・Transformer・GAN・VAE・拡散モデル" },
            { title: "応用領域", body: "画像認識・NLP・音声・強化学習・生成モデル" },
            { title: "実装技術", body: "PyTorch/TensorFlow、軽量化(蒸留・量子化)、分散学習" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Strategy</div>
        <h2 className="text-xl font-bold mb-3">対策の方針</h2>
        <ol className="list-decimal list-outside ml-6 space-y-2 text-[var(--muted-strong)] leading-relaxed">
          <li>
            <strong>数学的基礎を固める</strong>:
            線形代数(行列演算・固有値分解・SVD)・微分(連鎖律・勾配)・確率(分布・KL)を確実に押さえる。
            <Link href="/math/textbook" className="text-[var(--link)] hover:underline">
              数学基礎の教科書
            </Link>{" "}
            も活用できます。
          </li>
          <li>
            <strong>JDLA 認定プログラムの受講</strong>:
            E 資格は認定プログラム修了が受験条件。AVILEN / SKILLUP NeXt / スキルアップ AI などが代表的。
          </li>
          <li>
            <strong>本サイトの教科書で全体像を整理</strong>:{" "}
            <Link href="/certs/e-shikaku/textbook" className="text-[var(--link)] hover:underline">
              E資格 教科書
            </Link>{" "}
            で 6 章に圧縮された出題範囲を、図解と Python コードつきで通読。
          </li>
          <li>
            <strong>PyTorch でモデル実装</strong>: CNN・RNN・Transformer を自分で書いて学習させる経験が必須。Kaggle や Hugging Face の事例で手を動かす。
          </li>
          <li>
            <strong>過去問・問題集</strong>: 通称「黒本」(徹底攻略 ディープラーニング E資格 エンジニア問題集)で出題傾向を把握。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">E資格の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは E 資格対策の <strong>6 章構成の教科書</strong> と{" "}
          <strong>演習問題</strong> を公開。数学的基礎・機械学習・DL 理論・主要モデル・応用領域・実装と社会実装まで、E 資格の全範囲をカバーしています。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/e-shikaku/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/e-shikaku/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">G検定 vs E資格 vs 統計検定 2 級</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">G検定</th>
                <th className="py-2 pr-3">E資格</th>
                <th className="py-2 pr-3">統計検定 2 級</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">概念・歴史・倫理</td>
                <td className="py-2 pr-3">DL 実装の理論と数学</td>
                <td className="py-2 pr-3">統計理論・推定・検定</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">数学</td>
                <td className="py-2 pr-3">ほぼ不要</td>
                <td className="py-2 pr-3">必須(線形代数・微分・確率)</td>
                <td className="py-2 pr-3">必須(高校 + α)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験条件</td>
                <td className="py-2 pr-3">なし</td>
                <td className="py-2 pr-3">認定プログラム修了</td>
                <td className="py-2 pr-3">なし</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">30 〜 60 時間</td>
                <td className="py-2 pr-3">200 〜 400 時間</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">企画・営業・PM</td>
                <td className="py-2 pr-3">ML エンジニア・DS</td>
                <td className="py-2 pr-3">データ分析実務全般</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G検定について
        </Link>
        <Link
          href="/certs/ds-literacy"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DS検定 →
        </Link>
      </nav>
    </article>
  );
}
