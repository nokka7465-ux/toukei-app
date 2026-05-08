import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "応用情報技術者試験(AP)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "応用情報技術者試験(IPA 主催、レベル 3)の受験対象・出題範囲・対策方針を完全解説。アルゴリズム・データベース・ネットワーク・セキュリティ・AI/データ・経営戦略まで広範に出題される国家試験。無料の対策教科書(AI/データ重点)・演習問題付き。",
  alternates: { canonical: "/certs/applied-info" },
  openGraph: {
    title: "応用情報技術者試験とは",
    description:
      "応用情報技術者試験の対象・出題範囲・対策・選択戦略をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["applied-info"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AppliedInfoPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "応用情報技術者試験", href: "/certs/applied-info" },
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
        <span>応用情報技術者試験</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          応用情報技術者試験(IPA)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **情報処理推進機構(IPA)** が主催する国家試験(レベル 3)。実務 3 〜 5 年の IT エンジニアが想定対象で、**ITストラテジスト ・ システムアーキテクト ・ DB スペシャリスト** など高度試験(レベル 4)の登竜門に位置付けられます。本サイトは AI / データ重点で対策できる教科書を提供します。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **午前(80 問 / 150 分)+ 午後(11 問中 5 問選択 / 150 分)**。午前はテクノロジ系 / マネジメント系 / ストラテジ系の幅広い分野からマークシート、午後は記述式の選択問題で深い理解が問われます。**両方で 60 点以上** が合格基準です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          合格率は **約 23 〜 26%**。基本情報技術者(FE)合格者で 200 〜 300 時間、未経験者で 300 〜 500 時間が学習時間の目安です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(本サイト重点)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "アルゴリズムと計算量", body: "Big-O / ソート / 探索 / 動的計画法 / グラフアルゴリズム。" },
            { title: "データベース", body: "正規化 / SQL / JOIN / トランザクション / ACID / 分離レベル。" },
            { title: "確率統計と AI", body: "条件付確率 / 正規分布 / 評価指標(混同行列)/ ML 用語。" },
            { title: "ネットワーク・セキュリティ", body: "OSI / TCP-IP / 暗号 / 認証 / 攻撃と対策。" },
            { title: "システム設計", body: "RAID / 仮想化 / クラウド / 信頼性指標。" },
            { title: "ソフトウェア工学", body: "テスト / アジャイル / SOLID / デザインパターン。" },
            { title: "PM ・ 監査", body: "PMBOK / WBS / EVM / クリティカルパス / ITIL。" },
            { title: "経営戦略 ・ DX", body: "SWOT / 5 forces / DX 3 段階 / バランススコアカード。" },
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
            <strong>午前は過去問演習 8 割</strong>: 直近 5 〜 10 年分を 2 周。1 問 約 2 分のペース感覚を作る。
          </li>
          <li>
            <strong>午後の選択 5 問を固定</strong>: 必須の問 1 セキュリティ + 得意 4 問を事前決定。本サイト読者は **プログラミング ・ DB ・ 組込み ・ システム開発** がおすすめ。
          </li>
          <li>
            <strong>テクノロジ系の AI / データ部分</strong>: 本サイトの[応用情報 教科書](/certs/applied-info/textbook)で重点学習。混同行列の計算 ・ アルゴリズム計算量 ・ 正規化は頻出。
          </li>
          <li>
            <strong>マネジメント / ストラテジ系</strong>: 公式テキストや過去問で補強。SWOT / 5 forces / DX 3 段階は午前 ・ 午後ともに頻出。
          </li>
          <li>
            <strong>記述問題は『キーワード採点』</strong>: 完璧な日本語より重要語句の漏れを防ぐ。空欄を恐れず書く。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">応用情報の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは応用情報技術者試験対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。アルゴリズム ・ DB ・ AI / データ ・ セキュリティ ・ システム設計 ・ ソフトウェア工学 ・ PM ・ 経営戦略まで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/applied-info/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/applied-info/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">IPA 試験のレベル比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3">レベル</th>
                <th className="py-2 pr-3">試験名</th>
                <th className="py-2 pr-3">対象 ・ 想定経験</th>
                <th className="py-2 pr-3">学習時間目安</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル 1</td>
                <td className="py-2 pr-3">ITパスポート</td>
                <td className="py-2 pr-3">学生 ・ 全社会人入門</td>
                <td className="py-2 pr-3">100 時間程度</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル 2</td>
                <td className="py-2 pr-3">基本情報 / SG</td>
                <td className="py-2 pr-3">IT 実務 1 〜 2 年</td>
                <td className="py-2 pr-3">150 〜 250 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル 3</td>
                <td className="py-2 pr-3">応用情報技術者(本資格)</td>
                <td className="py-2 pr-3">IT 実務 3 〜 5 年</td>
                <td className="py-2 pr-3">200 〜 500 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">レベル 4</td>
                <td className="py-2 pr-3">高度試験(ストラテジスト等)</td>
                <td className="py-2 pr-3">IT 実務 5 年〜</td>
                <td className="py-2 pr-3">300 時間〜</td>
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
        category="情報処理"
        heading="応用情報技術者対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G 検定について
        </Link>
        <Link
          href="/certs/aws-ai-practitioner"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS AI Practitioner について →
        </Link>
      </nav>
    </article>
  );
}
