import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Tableau Desktop Specialist とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Tableau Desktop Specialist(Salesforce/Tableau)の受験対象・出題範囲・対策方針を完全解説。BI ツール認定の双璧 Power BI(PL-300)と並ぶエントリー認定。Tableau Desktop の基本操作・データ接続・可視化・LOD・パラメータを測ります。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/tableau-specialist" },
  openGraph: {
    title: "Tableau Desktop Specialist とは",
    description:
      "Tableau Desktop Specialist の対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["tableau-specialist"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function TableauSpecialistPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Tableau Desktop Specialist", href: "/certs/tableau-specialist" },
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
        <span>Tableau Desktop Specialist</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Tableau Desktop Specialist
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Salesforce(Tableau)** が提供する BI ツール認定の **エントリーレベル**。Tableau Desktop の基本操作 ・ データ接続 ・ 可視化 ・ 計算 ・ 分析 ・ 共有のライフサイクル全体を扱い、**Microsoft Power BI(PL-300)と並ぶ BI 認定の双璧**。**有効期限なし(永続)** が特徴です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **オンライン監督受験 / 45 問 / 60 分 / 多肢選択 + ハンズオン形式 / 合格 約 75%(参考)/ 受験料 100 USD / 有効期限なし**。スピード勝負で、Tableau Desktop の基本操作を **直感的に把握しているか** が問われます。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **データアナリスト ・ ビジネスアナリスト ・ レポーティング担当** が想定対象。**金融 ・ コンサル ・ 欧米系企業** で評価が特に高い BI ツールで、Power BI と二刀流が市場価値を高めます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Domain 1: データ接続(25%)", body: "ファイル / DB / クラウド / Live vs Extract / Relationships。" },
            { title: "Domain 2: データ調査と分析(30%)", body: "フィルター / ソート / グループ化 / ピボット / 計算。" },
            { title: "Domain 3: ビジュアライゼーション(25%)", body: "Show Me / Marks / Dual Axis / 主要チャート。" },
            { title: "Domain 4: 共有 ・ 計算(20%)", body: "ダッシュボード / ストーリー / Tableau Public ・ Server。" },
            { title: "重要概念", body: "ディメンション/メジャー、青ピル/緑ピル、連続/離散。" },
            { title: "計算機能", body: "計算フィールド / LOD(FIXED/INCLUDE/EXCLUDE)/ パラメータ / Set。" },
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
            <strong>Tableau Desktop インストール</strong>: Public 版 or 14 日トライアル。サンプルデータ Superstore で全機能を一通り操作。
          </li>
          <li>
            <strong>Tableau eLearning(Trailhead)</strong>: 公式無料教材。Desktop Specialist 専用ラーニングパスがある。
          </li>
          <li>
            <strong>本サイトの[Tableau 教科書](/certs/tableau-specialist/textbook)</strong> で体系学習。青ピル/緑ピル / LOD / フィルター順序 を理解。
          </li>
          <li>
            <strong>[演習問題](/certs/tableau-specialist/quiz)で実戦演習</strong>。
          </li>
          <li>
            <strong>Tableau Public で公開練習</strong>: 個人プロジェクトで実装スキルを磨く。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">Tableau Desktop Specialist の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは Tableau Desktop Specialist 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Tableau の基本構造 ・ データ接続 ・ ビジュアル ・ ダッシュボード ・ 計算 ・ LOD ・ パラメータ ・ Analytics ・ 共有まで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/tableau-specialist/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/tableau-specialist/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">Tableau vs Power BI</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">Tableau Specialist(本資格)</th>
                <th className="py-2 pr-3">Power BI(PL-300)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主催</td>
                <td className="py-2 pr-3">Salesforce(Tableau)</td>
                <td className="py-2 pr-3">Microsoft</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">エントリー</td>
                <td className="py-2 pr-3">Associate(中級)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">受験料</td>
                <td className="py-2 pr-3">100 USD</td>
                <td className="py-2 pr-3">約 21,000 円(165 USD)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">有効期限</td>
                <td className="py-2 pr-3">なし(永続)</td>
                <td className="py-2 pr-3">1 年(再認定で延長)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
                <td className="py-2 pr-3">60 〜 120 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">強み</td>
                <td className="py-2 pr-3">汎用 ・ 高度可視化 ・ 欧米系</td>
                <td className="py-2 pr-3">Microsoft 365 統合</td>
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
        category="Tableau"
        heading="Tableau 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/power-bi"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← Power BI(PL-300)について
        </Link>
        <Link
          href="/certs/ds-literacy"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DS 検定について →
        </Link>
      </nav>
    </article>
  );
}
