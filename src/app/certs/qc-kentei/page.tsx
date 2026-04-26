import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QC検定(品質管理検定)とは ─ 受験対象・出題範囲・対策",
  description:
    "QC 検定(品質管理検定)の受験対象・出題範囲・対策方針をまとめた解説ページ。製造業・サービス業の品質管理実務に直結する 4 級〜1 級の資格。",
  openGraph: {
    title: "QC検定とは",
    description:
      "品質管理の実務知識を測る QC 検定の対策ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "QC検定はどんな試験ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "日本科学技術連盟と日本規格協会が主催する、品質管理の知識・実務応用力を測る検定。1 級・準 1 級・2 級・3 級・4 級の 5 段階で、製造業を中心にサービス業でも広く活用されています。",
      },
    },
    {
      "@type": "Question",
      name: "統計検定 2 級と QC 検定 2 級、どちらが先?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "統計検定 2 級で得た理論知識を、QC 検定で品質管理の実務に応用する流れがおすすめ。両者は補完的で、製造業のキャリアでは両方持っていると評価されます。",
      },
    },
    {
      "@type": "Question",
      name: "QC検定の試験時期は?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "年 2 回(3 月・9 月)実施。詳細は公式サイト(JSA)で確認できます。",
      },
    },
  ],
};

export default function QcKenteiPage() {
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
        <span>QC検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          QC検定(品質管理検定)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          <strong>日本科学技術連盟・日本規格協会</strong>{" "}
          が主催する、<strong>品質管理(Quality Control)の知識と実務応用力</strong>{" "}
          を測る検定。製造業の品質保証部門・改善推進部門で広く採用され、現場の改善活動をリードする人材の登竜門です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          QC 検定は <strong>1 級・準 1 級・2 級・3 級・4 級</strong>{" "}
          の 5 段階。本サイトでは、実務で最も需要の高い <strong>2 級〜3 級</strong>{" "}
          を中心に解説しています。
        </p>
        <ul className="list-disc list-outside ml-6 mt-3 space-y-1 text-[var(--muted-strong)] text-sm leading-relaxed">
          <li><strong>4 級</strong>: 品質管理の用語と考え方の基礎(高校生・新人レベル)</li>
          <li><strong>3 級</strong>: QC 7 つ道具・基本統計量・管理図の入口(中堅メンバー)</li>
          <li><strong>2 級</strong>: 工程能力・実験計画法・抜取検査(チームリーダー級)</li>
          <li><strong>準 1 級</strong>: 多変量解析・信頼性工学・品質保証体系(管理職)</li>
          <li><strong>1 級</strong>: 経営的視点での品質マネジメント(経営層)</li>
        </ul>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(2-3 級)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "品質管理の考え方", body: "TQM・PDCA・QC ストーリー・カイゼンの思想" },
            { title: "管理図と SPC", body: "X̄-R / p / c 管理図、Western Electric ルール" },
            { title: "工程能力", body: "Cp・Cpk・Cpm・シックスシグマ" },
            { title: "抜取検査", body: "OC 曲線・AQL/LTPD・JIS Z 9015" },
            { title: "QC 7 つ道具", body: "パレート図・特性要因図・ヒストグラム・散布図ほか" },
            { title: "新 QC 7 つ道具", body: "親和図(KJ 法)・連関図・系統図ほか" },
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
            <strong>統計検定 2 級と並行</strong>:
            QC 検定 2 級の統計部分は、統計検定 2 級と内容が重なります。
            <Link href="/textbook/grade-2" className="text-[var(--link)] hover:underline">
              統計検定 2 級 教科書
            </Link>{" "}
            も活用できます。
          </li>
          <li>
            <strong>本サイトの教科書で全体像を整理</strong>:{" "}
            <Link href="/certs/qc-kentei/textbook" className="text-[var(--link)] hover:underline">
              QC 検定 教科書
            </Link>{" "}
            で 4 章構成を通読。図解 + 実務例で QC 7 つ道具まで網羅。
          </li>
          <li>
            <strong>過去問で出題形式に慣れる</strong>:
            JSA の公式問題集で過去問を解く。論述問題の書き方も練習。
          </li>
          <li>
            <strong>現場での実践</strong>:
            QC ストーリー(テーマ選定 → 現状把握 → 要因解析 → 対策 → 効果確認)を実際の業務で 1 サイクル回すと、深い理解に繋がる。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">QC検定の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは QC 検定対策の <strong>4 章構成の教科書</strong> と{" "}
          <strong>演習問題</strong> を公開。品質管理の思想・統計的工程管理・抜取検査・QC 7 つ道具まで、2-3 級の主要範囲を網羅しています。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/qc-kentei/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/qc-kentei/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/survey-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 専門統計調査士について
        </Link>
        <Link
          href="/certs/e-shikaku"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          E資格 →
        </Link>
      </nav>
    </article>
  );
}
