import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "データベーススペシャリスト試験(DB)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "データベーススペシャリスト試験(IPA、レベル 4)の受験対象・出題範囲・対策方針を完全解説。リレーショナルモデル・正規化・SQL 上級・チューニング・NoSQL・DWH などデータエンジニア専門知識を測る最高峰 DB 試験。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/db-specialist" },
  openGraph: {
    title: "データベーススペシャリスト試験とは",
    description:
      "DB の対象・出題範囲・対策・午後論述戦略をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["db-specialist"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function DbSpecialistPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "データベーススペシャリスト", href: "/certs/db-specialist" },
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
        <span>データベーススペシャリスト</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          データベーススペシャリスト試験(DB / IPA)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **情報処理推進機構(IPA)** が主催する国家試験(レベル 4 高度試験)。**応用情報技術者(レベル 3)の上位** で、DBA / データエンジニア / データアーキテクトの **専門性証明** として位置付けられます。**金融 ・ 公官庁 ・ 大手 SI** で評価が特に高く、転職市場でも『DB スペシャリスト持ち』はスクリーニングで突出します。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **午前 I + 午前 II + 午後 I + 午後 II の 4 段階**(年 1 回、秋実施)。**各段階で 60 点以上** が合格基準で、合格率は **約 17 〜 18%**。応用情報合格者は午前 I が 2 年免除されます。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **午後 II の論述問題** が最大の壁。120 分で 1 問の事例問題に取り組み、**ER 図 ・ 関係スキーマの設計 + 数百字の記述** が求められます。学習時間は **300 〜 500 時間** が中央値です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "リレーショナルモデル", body: "関係代数 / 関係論理 / 関数従属 / 候補キー。" },
            { title: "正規化", body: "1NF 〜 BCNF / 多値従属 / 4NF / DKNF。" },
            { title: "ER 図 ・ データモデリング", body: "概念設計 → 論理設計 → 物理設計の 3 層。" },
            { title: "SQL 上級", body: "ウィンドウ関数 / 再帰 CTE / LATERAL / トリガー。" },
            { title: "ACID ・ 並行制御", body: "分離レベル / MVCC / 2PL / WAL / ARIES。" },
            { title: "索引 ・ チューニング", body: "B-tree / 実行計画 / 結合方式 / パーティション。" },
            { title: "NoSQL ・ ビッグデータ", body: "KVS / ドキュメント / カラム指向 / グラフ / CAP / Spark / Kafka。" },
            { title: "DWH ・ データ基盤", body: "Snowflake / BigQuery / Redshift / dbt / Airflow / データメッシュ。" },
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
            <strong>応用情報合格 → 午前 I 免除</strong>: 応用情報合格 / 高度試験合格で 2 年間免除可。本サイトの[応用情報](/certs/applied-info)も併用。
          </li>
          <li>
            <strong>午前 II の DB 専門知識</strong>: 過去問演習が圧倒的有効。本サイトの[DB スペシャリスト 教科書](/certs/db-specialist/textbook)で体系学習。
          </li>
          <li>
            <strong>正規化を実例で訓練</strong>: 業務記述から ER 図と 3NF までを導出する練習が午後対策の核。
          </li>
          <li>
            <strong>SQL 上級 + チューニング</strong>: ウィンドウ関数 ・ 再帰 CTE ・ EXPLAIN の読み方は実機で。
          </li>
          <li>
            <strong>過去問 5 〜 10 年分を反復</strong>: 午後 II は同じ問題を 2 周以上で型を身につける。
          </li>
          <li>
            <strong>論述は『キーワード採点』</strong>: 完璧な日本語より重要語句の漏れを防ぐ。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">DB スペシャリストの学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DB スペシャリスト対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。リレーショナルモデル ・ 正規化 ・ SQL 上級 ・ ACID ・ チューニング ・ NoSQL ・ DWH まで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/db-specialist/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/db-specialist/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">IPA レベル 3 ・ レベル 4 の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">応用情報(レベル 3)</th>
                <th className="py-2 pr-3">DB スペシャリスト(レベル 4)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">IT 全般</td>
                <td className="py-2 pr-3">DB ・ データ基盤に特化</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">実施頻度</td>
                <td className="py-2 pr-3">年 2 回</td>
                <td className="py-2 pr-3">年 1 回(秋)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">論述問題</td>
                <td className="py-2 pr-3">記述短文(午後)</td>
                <td className="py-2 pr-3">長文論述 + ER 図(午後 II)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">200 〜 500 時間</td>
                <td className="py-2 pr-3">300 〜 500 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">合格率</td>
                <td className="py-2 pr-3">約 23 〜 26%</td>
                <td className="py-2 pr-3">約 17 〜 18%</td>
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
        heading="DB スペシャリスト対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/applied-info"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 応用情報技術者試験について
        </Link>
        <Link
          href="/certs/ds-expert"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DS エキスパートについて →
        </Link>
      </nav>
    </article>
  );
}
