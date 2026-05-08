import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "生成AIパスポート検定とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "生成AIパスポート検定(GUGA 主催)の受験対象・出題範囲・対策方針を完全解説。生成AIを業務で安全に活用するためのリテラシーを問う検定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/genai-passport" },
  openGraph: {
    title: "生成AIパスポート検定とは",
    description:
      "生成AIパスポート検定(GUGA)の対象・出題範囲・対策・G検定との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["genai-passport"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function GenaiPassportPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "生成AIパスポート検定", href: "/certs/genai-passport" },
        ]}
      />
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
        <span>生成AIパスポート検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          生成AIパスポート検定(GUGA)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **GUGA(一般社団法人 生成AI活用普及協会)** が主催する、**生成AIを業務で安全 / 効果的に使うためのリテラシー** を問うオンライン検定。「**営業・人事・経理など、あらゆる職種のビジネスパーソンが、生成AIを使いこなすための土台**」を整える位置付けの試験です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          技術者向けの検定(G検定・E資格)が **AI 全般 / 実装力** を問うのに対し、生成AIパスポートは **生成AIに特化** し、**業務での活用とコンプライアンス** を中心に問います。「AIエンジニアではないけれど、生成AIを毎日の仕事で使いたい / 使わせる側にいる」人に最適な入口です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          試験は **オンライン IBT(自宅 / 会社で受験可) / 60 問 / 60 分 / 4 択選択式**。計算問題はなく、**用語の理解 + 業務適用の判断** が中心の作りです。学習時間 30 〜 50 時間が中央値で、社会人が 1 〜 2 ヶ月で取得するパターンが典型的です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "AI / 機械学習の基礎", body: "AI ⊃ ML ⊃ DL ⊃ 生成AI の入れ子、3 つの学習スタイル、Transformer の概要。" },
            { title: "生成 AI の仕組み", body: "LLM(トークン・Attention・RLHF)・拡散モデル・GAN・VAE の概念。" },
            { title: "主要サービスの使い分け", body: "ChatGPT・Claude・Gemini・Copilot・画像生成系の特徴比較と業務適用。" },
            { title: "プロンプトエンジニアリング", body: "役割指定・Few-shot・Chain-of-Thought・RAG・プロンプトインジェクションへの対策。" },
            { title: "リスクとハルシネーション", body: "ハルシネーション・バイアス・情報漏洩の代表事例と対策。" },
            { title: "法律 ・ 倫理 ・ ガバナンス", body: "著作権 30 条の 4・個人情報保護・EU AI Act・社内ガイドライン策定。" },
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
            <strong>用語を 1 周</strong>: トークン・Attention・RLHF・拡散モデル・RAG など、出題の核となる用語をまとめて理解。本サイトの[生成AIパスポート 教科書](/certs/genai-passport/textbook)で 10 章を体系学習。
          </li>
          <li>
            <strong>主要サービスを実際に触る</strong>: ChatGPT・Claude・Gemini をそれぞれ 30 分ずつ使い、ハルシネーション・出力の癖を体感。「触ったことがある」が用語の理解を加速します。
          </li>
          <li>
            <strong>法律 ・ ガイドラインを押さえる</strong>: 著作権 30 条の 4・改正個人情報保護法・EU AI Act・経産省 AI 事業者ガイドラインの **概要** を整理。条文暗記は不要だが「何をしてはいけないか」は必須。
          </li>
          <li>
            <strong>過去問・演習</strong>: GUGA の公式問題集と本サイトの[演習問題](/certs/genai-passport/quiz)で出題傾向を体感。1 問 1 分のペース感覚を作る。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">生成AIパスポートの学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは生成AIパスポート対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。AI / ML の基礎から、LLM の仕組み、主要サービス、プロンプト、リスク、法律 ・ 倫理まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/genai-passport/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/genai-passport/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">G検定との比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">生成AIパスポート</th>
                <th className="py-2 pr-3">G検定</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">生成 AI 特化・業務活用</td>
                <td className="py-2 pr-3">AI/ML 全般・概念と歴史</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">数学要否</td>
                <td className="py-2 pr-3">不要(計算問題なし)</td>
                <td className="py-2 pr-3">ほぼ不要(用語中心)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">問題数 / 時間</td>
                <td className="py-2 pr-3">60 問 / 60 分</td>
                <td className="py-2 pr-3">145 問 / 100 〜 120 分</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">30 〜 50 時間</td>
                <td className="py-2 pr-3">60 〜 120 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">全職種、AI 活用初心者</td>
                <td className="py-2 pr-3">企画・DX 推進、AI 全般</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.q}
              className="border-b border-[var(--page-border)] pb-3 last:border-b-0"
            >
              <dt className="font-bold mb-1.5">Q. {item.q}</dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-relaxed">
                A. {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <SchoolPicks
        category="生成AI"
        heading="生成AI / G検定対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G検定について
        </Link>
        <Link
          href="/certs/e-shikaku"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          E資格について →
        </Link>
      </nav>
    </article>
  );
}
