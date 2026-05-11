import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "ITストラテジスト試験(ST)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "ITストラテジスト試験(IPA、レベル 4 高度試験)の受験対象・出題範囲・対策方針を完全解説。経営戦略と IT を統合する最高峰の認定。CIO ・ CTO ・ IT コンサルタント ・ DX 推進責任者向け。120 分の論述試験対策付き。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/it-strategist" },
  openGraph: {
    title: "ITストラテジスト試験(ST)とは",
    description:
      "ST の対象・出題範囲・対策・論述試験戦略をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["it-strategist"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function ItStrategistPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ITストラテジスト試験", href: "/certs/it-strategist" },
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
        <span>ITストラテジスト試験</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ITストラテジスト試験(ST / IPA)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **情報処理推進機構(IPA)** が主催する国家試験(レベル 4 高度試験)で、**経営戦略と IT を統合する最高峰の認定**。**CIO ・ CTO ・ IT コンサルタント ・ DX 推進責任者** を目指す技術者が想定対象で、合格率 14 〜 15% の難関。
        </p>
      </header>

      <StudyFlow
        textbookHref="/certs/it-strategist/textbook"
        quizHref="/certs/it-strategist/quiz"
        examLabel="ST 本番"
      />

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **午前 I + 午前 II + 午後 I(記述)+ 午後 II(論述)の 4 段階**(年 1 回、春実施)。**各段階で 60 点以上** が合格基準で、**午後 II は 120 分で 2,000 〜 3,000 字の論述** が最大の関門です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          応用情報合格者は午前 I が 2 年免除されます。学習時間は **300 〜 500 時間** が中央値で、**自身の業務経験を題材** にした論述準備が必須。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "経営戦略フレームワーク", body: "SWOT / PEST / 5 forces / バリューチェーン / BSC / PPM / 両利きの経営。" },
            { title: "事業戦略 ・ マーケティング", body: "STP / 4P / 4C / カスタマージャーニー / RFM / LTV / D2C / オムニチャネル。" },
            { title: "IT 戦略 ・ EA", body: "TOGAF / COBIT / ITIL / IT 戦略策定手順 / IT ガバナンス。" },
            { title: "システム企画 ・ 要件定義", body: "RFP / 要件定義 / 投資判断(ROI / NPV / IRR / TCO)。" },
            { title: "DX とデジタル変革", body: "経産省 DX / 2025 年の崖 / DX 推進指標 / DX 認定。" },
            { title: "業務改革 ・ BPR", body: "Process Mining / Hyperautomation / RPA。" },
            { title: "投資判断 ・ 財務", body: "NPV / IRR / EVA / Real Options / リスクマネジメント / BCP。" },
            { title: "イノベーション", body: "Lean Startup / Design Thinking / オープンイノベーション / 出島組織。" },
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
            <strong>午前 II の経営 ・ IT 戦略</strong>: 過去問演習が中心。本サイトの[ITストラテジスト 教科書](/certs/it-strategist/textbook)で体系学習。
          </li>
          <li>
            <strong>午後 I の事例問題</strong>: 90 分で 4 問中 2 問選択。経営課題 → IT 戦略 → 実装の流れに慣れる。
          </li>
          <li>
            <strong>午後 II の論述準備</strong>: **自身の業務経験を 5 〜 10 のテーマに整理** + **章立てパターン 2 〜 3 種** を体に染み込ませる。**模範解答の写経 + 自分の経験で書き直し** を 10 編以上。
          </li>
          <li>
            <strong>論述指導</strong>: 社内メンター ・ コミュニティでの添削が大きな差を生む。
          </li>
          <li>
            <strong>業界別 DX 事例</strong>: 金融 ・ 製造 ・ 小売 ・ 医療 ・ 公共の代表事例を 2 〜 3 件覚える。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">ITストラテジストの学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは ITストラテジスト試験対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。経営戦略 ・ 事業戦略 ・ IT 戦略 ・ システム企画 ・ DX ・ BPR ・ 投資判断 ・ イノベーションまで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/it-strategist/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/it-strategist/quiz"
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
                <th className="py-2 pr-3">DB スペシャリスト(L4)</th>
                <th className="py-2 pr-3">ITストラテジスト(L4、本資格)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">範囲</td>
                <td className="py-2 pr-3">IT 全般</td>
                <td className="py-2 pr-3">DB ・ データ基盤</td>
                <td className="py-2 pr-3">経営戦略 + IT 統合</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">論述問題</td>
                <td className="py-2 pr-3">なし(記述短文のみ)</td>
                <td className="py-2 pr-3">あり(設計 + 記述)</td>
                <td className="py-2 pr-3">**2,000-3,000 字論述**</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">200 〜 500 時間</td>
                <td className="py-2 pr-3">300 〜 500 時間</td>
                <td className="py-2 pr-3">300 〜 500 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">合格率</td>
                <td className="py-2 pr-3">約 23 〜 26%</td>
                <td className="py-2 pr-3">約 17 〜 18%</td>
                <td className="py-2 pr-3">約 14 〜 15%</td>
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
        heading="ITストラテジスト対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/applied-info"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 応用情報技術者試験について
        </Link>
        <Link
          href="/certs/db-specialist"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DB スペシャリスト試験について →
        </Link>
      </nav>
    </article>
  );
}
