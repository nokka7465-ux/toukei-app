import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Microsoft Fabric Analytics Engineer Associate(DP-600)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Microsoft Fabric Analytics Engineer Associate(DP-600)の受験対象・出題範囲・対策方針を完全解説。OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Pipeline / Dataflow Gen2 ・ Spark / Notebook ・ Real-Time Intelligence ・ Git Integration を計画 ・ 準備 ・ 実装 ・ 探索 ・ ガバナンスで問う Microsoft Fabric の中核認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-dp-600" },
  openGraph: {
    title: "Microsoft Fabric Analytics Engineer Associate(DP-600)とは",
    description:
      "DP-600 の対象・出題範囲・対策・PL-300/DP-203/DP-700 比較をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["azure-dp-600"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AzureDp600Page() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Microsoft Fabric DP-600", href: "/certs/azure-dp-600" },
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
        <span>Microsoft Fabric DP-600</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Microsoft Certified: Fabric Analytics Engineer Associate(DP-600)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Microsoft Fabric 上で Data + Analytics + BI を設計 ・ 実装** する Analytics Engineer 認定(2024 リリース)。**OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Pipeline / Dataflow Gen2 ・ Spark / Notebook ・ Real-Time Intelligence ・ Git Integration ・ Deployment Pipeline** を **計画 ・ 準備 ・ 実装 ・ 探索 ・ ガバナンス** で問います。**PL-300(Power BI)+ DP-203(Azure DE)の合流地点** に位置し、**dbt 系 Analytics Engineer の Microsoft 版** として注目度の高い新興認定です。
        </p>
      </header>

      <StudyFlow
        textbookHref="/certs/azure-dp-600/textbook"
        quizHref="/certs/azure-dp-600/quiz"
        examLabel="DP-600 本番"
      />

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分(参考) / 単一・複数選択 + ドラッグ&ドロップ + ケーススタディ / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**SQL(中級)・ Python / PySpark(基本)・ Power BI / DAX** が前提知識。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **OneLake**(テナント全体の単一論理データレイク)を中心に、Lakehouse(Spark / 半構造化)と Warehouse(T-SQL / Multi-Table Tx)を組合せ、その上に Semantic Model + Power BI で BI 層を構築するのが Fabric の王道。**Direct Lake** モードによる Import 並速度 + DirectQuery 並鮮度が DP-600 の最大の差別化トピックです。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Plan / Implement / Manage(10-15%)", body: "Workspace / Capacity(F2-F2048)/ Security / Lifecycle / Git Integration / Deployment Pipeline。" },
            { title: "データの準備(25-30%)", body: "Lakehouse / Warehouse / Pipeline / Dataflow Gen2 / Spark / Notebook / Medallion(Bronze-Silver-Gold)。" },
            { title: "Semantic Model 実装(25-30%)", body: "Direct Lake / Import / DirectQuery / DAX / Time Intelligence / RLS / OLS / Calculation Groups / TMDL。" },
            { title: "データ探索 / 分析(20-25%)", body: "Power BI Visual / Copilot / KQL / Real-Time Dashboard / Notebook 探索。" },
            { title: "OneLake / Shortcut / Mirroring", body: "Shortcut(S3/ADLS/GCS/Iceberg)・ Mirroring(Cosmos/Snowflake/SQL DB)・ V-Order。" },
            { title: "Real-Time Intelligence", body: "Eventstream / Eventhouse(KQL DB)/ Real-Time Dashboard / Reflex(Data Activator)。" },
            { title: "Performance / Optimization", body: "V-Order / OPTIMIZE / Z-ORDER / Direct Lake Fallback / Spark NEE / Table Maintenance。" },
            { title: "セキュリティ + ガバナンス", body: "Workspace Identity / Private Link / Managed Private Endpoint / Sensitivity Label / Purview。" },
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
            <strong>Fabric Trial を起動して実機を触る</strong>: 60 日 ・ F64 相当 ・ 全機能無料。Microsoft Learn の手順書通り Bronze→Silver→Gold を構築。
          </li>
          <li>
            <strong>PL-300(Power BI)・ DP-203(Azure DE)の基礎を再確認</strong>: 本サイトの[PL-300](/certs/power-bi) ・ [DP-203](/certs/azure-dp-203) と併読。
          </li>
          <li>
            <strong>本サイトの[DP-600 教科書](/certs/azure-dp-600/textbook)</strong> で 10 章を体系的に学習。
          </li>
          <li>
            <strong>Microsoft Learn DP-600 ラーニングパス</strong>: 公式の手厚いハンズオン。
          </li>
          <li>
            <strong>Direct Lake と DAX を集中演習</strong>: Semantic Model セクションが配点最大。
          </li>
          <li>
            <strong>本サイトの演習問題</strong>: 主要トピックを網羅した {80} 問で習熟度確認。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DP-600 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DP-600 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Real-Time ・ Pipeline ・ Spark ・ ガバナンスまで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/azure-dp-600/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/azure-dp-600/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">Fabric / Power BI / Azure DE 系認定比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">PL-300</th>
                <th className="py-2 pr-3">DP-600(本資格)</th>
                <th className="py-2 pr-3">DP-700</th>
                <th className="py-2 pr-3">DP-203</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">役割</td>
                <td className="py-2 pr-3">Power BI Analyst</td>
                <td className="py-2 pr-3">Fabric Analytics Engineer</td>
                <td className="py-2 pr-3">Fabric Data Engineer</td>
                <td className="py-2 pr-3">Azure Data Engineer</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Associate</td>
                <td className="py-2 pr-3">Associate</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">中心</td>
                <td className="py-2 pr-3">Power BI / DAX</td>
                <td className="py-2 pr-3">Fabric BI + DE 橋渡し</td>
                <td className="py-2 pr-3">Lakehouse + Pipeline</td>
                <td className="py-2 pr-3">Synapse + ADF</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">165 USD</td>
                <td className="py-2 pr-3">165 USD</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">60〜120 時間</td>
                <td className="py-2 pr-3">100〜200 時間</td>
                <td className="py-2 pr-3">100〜200 時間</td>
                <td className="py-2 pr-3">100〜200 時間</td>
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
        category="Azure"
        heading="Microsoft Fabric DP-600 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/power-bi"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Power BI PL-300 について
        </Link>
        <Link
          href="/certs/azure-dp-203"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure DP-203 について →
        </Link>
      </nav>
    </article>
  );
}
