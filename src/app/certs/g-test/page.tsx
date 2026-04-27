import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "G検定(JDLA)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "G検定(JDLA ジェネラリスト検定)の受験対象・出題範囲・対策方針を完全解説。AI / ディープラーニングを事業に活かす広範な知識を測る検定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/g-test" },
  openGraph: {
    title: "G検定とは",
    description:
      "G検定の対象・出題範囲・対策・統計検定との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "G検定はどんな試験ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JDLA(日本ディープラーニング協会)主催の検定で、AI / ディープラーニングを事業に活用するための知識を問います。実装力ではなく概念・歴史・倫理を広く浅く押さえる試験です。",
      },
    },
    {
      "@type": "Question",
      name: "G検定と統計検定2級、どちらが先?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目的次第。AI業界に入りたい・AIプロジェクトに関わりたいならG検定、データ分析の理論を体系的に身につけたいなら統計検定2級が向いています。両者は補完的なので、両方取得する人も多いです。",
      },
    },
    {
      "@type": "Question",
      name: "G検定の試験形式は?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "自宅PCでのオンライン受験(検索可能)、120分で200問程度(年により変動)。年に複数回開催。詳細は公式サイトをご確認ください。",
      },
    },
  ],
};

export default function GTestPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "G検定", href: "/certs/g-test" },
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
        <span>G検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          G検定(JDLA ジェネラリスト検定)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **JDLA(日本ディープラーニング協会)** が主催する、**AI / ディープラーニングを事業に活用するための広範な知識** を問う検定。「**実装はしないが、AI を理解して仕事に活かしたい人**」に向けた位置付けです。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          G 検定の「G」は **Generalist**(ジェネラリスト)。「**AI・機械学習を **使う側** の知識**」を測る試験で、実装力(Python コードを書ける、など)は問われません。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          AI ブームを背景に **受験者数が多く**、転職市場でも「AI リテラシーの証明」として一定の評価があります。学習時間も比較的短く(30〜60 時間目安)、社会人にも取り組みやすい資格です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "AI の歴史と概論", body: "3 度の AI ブーム、エキスパートシステム、現代の AI(機械学習・DL)に至る流れ。" },
            { title: "機械学習の基礎", body: "教師あり / 教師なし / 強化学習、主要アルゴリズム、評価指標。" },
            { title: "ディープラーニング", body: "CNN・RNN・Transformer・GAN など、代表的なモデルの概念。" },
            { title: "AI 数理(基礎)", body: "勾配降下法、誤差逆伝播、正則化、活性化関数の概念。" },
            { title: "応用領域", body: "画像認識・自然言語処理・音声・強化学習の実応用例。" },
            { title: "AI 倫理・法律・社会", body: "公平性・説明可能性・プライバシー・雇用への影響・各国規制。" },
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
            <strong>公式テキストを 1 周</strong>: JDLA 公式テキスト(白本)で全範囲をざっと押さえる。
          </li>
          <li>
            <strong>用語と概念を整理</strong>: 各手法の名前と「何ができるか」を即答できるレベルに。本サイトの[G検定 教科書](/certs/g-test/textbook)も活用。
          </li>
          <li>
            <strong>過去問・問題集</strong>: 黒本などの公式問題集で出題傾向を把握。本検定はオンライン受験で問題数が多いので、スピード勝負。
          </li>
          <li>
            <strong>最新動向のキャッチアップ</strong>: G 検定は時事性が強い試験。生成 AI・LLM・各国 AI 規制(EU AI Act)などのニュースもチェック。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">G検定の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは G検定対策の **教科書本編** と **演習問題** を公開しています。AI の歴史 / 機械学習・DL の概念 / 倫理 ─ 主要トピックを段階的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/g-test/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/g-test/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">統計検定 2 級との比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">G検定</th>
                <th className="py-2 pr-3">統計検定 2 級</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">AI/ML 概念・歴史・倫理</td>
                <td className="py-2 pr-3">統計理論・検定・回帰</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">数学要否</td>
                <td className="py-2 pr-3">ほぼ不要(用語中心)</td>
                <td className="py-2 pr-3">必須(高校数学+α)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">30 〜 60 時間</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">AI 業界転職、概念把握</td>
                <td className="py-2 pr-3">分析実務、研究志向</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-basic"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DS基礎について
        </Link>
        <Link
          href="/certs/ds-literacy"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          データサイエンティスト検定 →
        </Link>
      </nav>
    </article>
  );
}
