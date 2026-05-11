import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "統計検定 DS エキスパートとは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "統計検定 データサイエンス エキスパート(DS エキスパート、日本統計学会)の受験対象・出題範囲・対策方針を完全解説。Python/R での高度な統計・ML・因果推論・MLOps を測る最高峰 DS 試験。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/ds-expert" },
  openGraph: {
    title: "統計検定 DS エキスパートとは",
    description:
      "DS エキスパートの対象・出題範囲・対策・DS 発展との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["ds-expert"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function DsExpertPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS エキスパート", href: "/certs/ds-expert" },
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
        <span>DS エキスパート</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          統計検定 DS エキスパート(日本統計学会)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **日本統計学会** が主催する **データサイエンス系統計検定の最高峰**。**Python / R による高度な統計分析・機械学習・ベイズ・時系列・因果推論・MLOps まで**、現場のデータサイエンティストに求められる広範な能力を測ります。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          DS シリーズには **DS 基礎(Excel 中心)→ DS 発展(Python/R での標準分析)→ DS エキスパート(高度な統計 + ML + 因果推論 + MLOps)** の 3 段階があり、本資格は最上位。実務で **1 〜 3 年データ分析を経験した中堅 DS 以上** が想定受験者です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          試験は **CBT(全国の試験会場で随時受験可) / 40 問 / 90 分 / 選択式 + 一部数値入力**。設計の判断ができるかが問われ、用語暗記だけでは合格しません。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "統計推測 ・ 多変量解析", body: "推定 ・ 検定 ・ GLM ・ PCA ・ クラスタリングなど。" },
            { title: "機械学習", body: "教師あり/なし ・ Tree 系 ・ NN ・ ハイパーパラメータ ・ 評価。" },
            { title: "ベイズ推論 ・ MCMC", body: "事前/事後 ・ HMC ・ 階層モデル ・ Stan/PyMC。" },
            { title: "時系列分析", body: "ARIMA ・ 状態空間 ・ Prophet ・ 季節性。" },
            { title: "因果推論", body: "RCT ・ DID ・ 傾向スコア ・ DAG ・ IV ・ RDD。" },
            { title: "DE ・ MLOps", body: "SQL 中級 ・ ETL/ELT ・ 特徴量ストア ・ ドリフト検出。" },
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
            <strong>統計検定 2 級・準 1 級の取りこぼしを補強</strong>: 推定 ・ 検定 ・ GLM の基礎が抜けていると上位概念が乗らない。
          </li>
          <li>
            <strong>scikit-learn / statsmodels を実機で動かす</strong>: 教科書を読むだけでなく、Jupyter で `fit / predict / summary` を体感する。本サイトの[DS エキスパート 教科書](/certs/ds-expert/textbook)も活用。
          </li>
          <li>
            <strong>因果推論 + ベイズ + 時系列を一通り</strong>: DS 発展との差分はここ。各論点で『**設計の判断**』ができることが要。
          </li>
          <li>
            <strong>SQL + MLOps を入れる</strong>: ウィンドウ関数・ELT・特徴量ストア・ドリフトの基本概念を整理。
          </li>
          <li>
            <strong>過去問・演習</strong>: 統計学会の過去問と本サイトの[演習問題](/certs/ds-expert/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DS エキスパートの学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DS エキスパート対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。EDA から因果推論 / MLOps まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/ds-expert/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/ds-expert/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">DS 基礎 / DS 発展 / DS エキスパートの比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">DS 基礎</th>
                <th className="py-2 pr-3">DS 発展</th>
                <th className="py-2 pr-3">DS エキスパート</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主な道具</td>
                <td className="py-2 pr-3">Excel</td>
                <td className="py-2 pr-3">Python / R(標準的)</td>
                <td className="py-2 pr-3">Python / R(高度)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">記述 ・ 簡単な推定</td>
                <td className="py-2 pr-3">回帰 ・ 標準的 ML</td>
                <td className="py-2 pr-3">高度 ML ・ ベイズ ・ 因果 ・ MLOps</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">30 〜 60 時間</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
                <td className="py-2 pr-3">300 時間〜</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">Excel 派の分析担当</td>
                <td className="py-2 pr-3">DS 業務 1 年目〜</td>
                <td className="py-2 pr-3">中堅 DS / リード候補</td>
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
        category="データサイエンス"
        heading="DS エキスパート対策に強いスクール / コース"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-basic"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DS 基礎について
        </Link>
        <Link
          href="/certs/e-shikaku"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          E 資格について →
        </Link>
      </nav>
    </article>
  );
}
