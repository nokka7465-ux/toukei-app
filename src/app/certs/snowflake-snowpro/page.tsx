import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Snowflake SnowPro Core(COF-C02)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Snowflake SnowPro Core(COF-C02)の受験対象・出題範囲・対策方針を完全解説。Snowflake クラウドデータプラットフォームのアーキテクチャ・SQL・パフォーマンス・セキュリティ・Time Travel・Data Sharing を測る基礎認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/snowflake-snowpro" },
  openGraph: {
    title: "Snowflake SnowPro Core(COF-C02)とは",
    description:
      "SnowPro Core の対象・出題範囲・対策・他 Snowflake 認定との位置付けをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["snowflake-snowpro"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function SnowflakeSnowProPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Snowflake SnowPro Core", href: "/certs/snowflake-snowpro" },
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
        <span>Snowflake SnowPro Core</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Snowflake SnowPro Core(COF-C02)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Snowflake** が提供するクラウドデータプラットフォーム認定の **エントリーレベル**。**マルチクラウド対応 ・ ストレージとコンピュートの分離 ・ セキュアデータシェアリング** で世界中の企業に採用されている Snowflake の **アーキテクチャ ・ 基本機能 ・ SQL ・ パフォーマンス ・ セキュリティ** を測ります。**Specialty / Advanced** 認定の前提となる必須資格です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン監督受験(Pearson VUE)or テストセンター / 100 問 / 115 分 / 多肢選択 + 複数選択 / 合格 750 / 1000 点 / 受験料 175 USD / 有効期限 2 年**。**SQL の基礎 + データベースの基本概念** が前提知識です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **データエンジニア ・ DWH 担当 ・ アナリティクスエンジニア** が想定対象。**dbt + Snowflake** の組合せが多く、モダンデータスタックの標準として急速に拡大中です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "アーキテクチャ(25%)", body: "3 層構造 / Virtual Warehouse / マルチクラウド / オブジェクト階層。" },
            { title: "アクセス ・ セキュリティ(20%)", body: "RBAC / ロール階層 / MFA / Network Policy / Tri-Secret Secure。" },
            { title: "パフォーマンス(15%)", body: "Micro-partition / クラスタリング / 3 種キャッシュ / Search Optimization。" },
            { title: "データロード ・ アンロード(10%)", body: "COPY / Snowpipe / Stage / File Format。" },
            { title: "データ変換(20%)", body: "SQL / VARIANT / Stored Procedure / UDF / Snowpark / Cortex。" },
            { title: "データ保護 ・ 共有(10%)", body: "Time Travel / Fail-safe / Zero-Copy Cloning / Secure Data Sharing。" },
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
            <strong>Snowflake 30 日トライアル</strong>: 400 USD クレジット付きで実機演習。
          </li>
          <li>
            <strong>Snowflake University</strong>: 公式無料学習プラットフォーム。SnowPro Core 専用ラーニングパスがある。
          </li>
          <li>
            <strong>本サイトの[SnowPro Core 教科書](/certs/snowflake-snowpro/textbook)</strong> でアーキテクチャ ・ Edition 別機能差を体系学習。
          </li>
          <li>
            <strong>TPC-H サンプルデータ</strong> で SQL ・ Time Travel ・ Cloning ・ Sharing を実機で試す。
          </li>
          <li>
            <strong>Cortex AI</strong> も最新シラバスで出題増、無料で試せる。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: Snowflake University の練習問題 + 本サイトの[演習問題](/certs/snowflake-snowpro/quiz)。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">SnowPro Core の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは SnowPro Core 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。アーキテクチャ ・ オブジェクト階層 ・ ロード ・ SQL / VARIANT ・ パフォーマンス ・ Time Travel ・ Data Sharing ・ セキュリティ ・ Snowpark / Cortex まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/snowflake-snowpro/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/snowflake-snowpro/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">DB 系認定の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">SnowPro Core(本資格)</th>
                <th className="py-2 pr-3">DB スペシャリスト(IPA)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主催</td>
                <td className="py-2 pr-3">Snowflake</td>
                <td className="py-2 pr-3">IPA(国家試験)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">Snowflake 専用</td>
                <td className="py-2 pr-3">RDB 全般 ・ NoSQL ・ DWH</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">基礎(Core)</td>
                <td className="py-2 pr-3">高度(レベル 4)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">60 〜 100 時間</td>
                <td className="py-2 pr-3">300 〜 500 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">クラウドデータエンジニア</td>
                <td className="py-2 pr-3">DBA / データアーキテクト</td>
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
        category="Snowflake"
        heading="Snowflake 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/db-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← データベーススペシャリスト試験について
        </Link>
        <Link
          href="/certs/aws-saa"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AWS SAA について →
        </Link>
      </nav>
    </article>
  );
}
