import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "ITパスポート試験(iパス)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "ITパスポート試験(IPA、レベル 1)の受験対象・出題範囲・対策方針を完全解説。通年 CBT で受験できる IT 入門の国家試験。ストラテジ系・マネジメント系・テクノロジ系の 3 分野でバランスよく学習。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/it-passport" },
  openGraph: {
    title: "ITパスポート試験とは",
    description:
      "iパスの対象・出題範囲・対策・3 分野バランス戦略をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["it-passport"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function ItPassportPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "ITパスポート試験", href: "/certs/it-passport" },
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
        <span>ITパスポート試験</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ITパスポート試験(iパス / IPA)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **情報処理推進機構(IPA)** が主催する国家試験(レベル 1)。**IT を活用するすべての社会人 ・ 学生** が想定対象で、ストラテジ系 / マネジメント系 / テクノロジ系の 3 分野で IT 全般のリテラシーを測ります。**通年 CBT** で受験でき、年間受験者数 **20 万人超** の IPA 試験で最も裾野が広い入門認定です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **マウス操作のみのオンライン CBT / 100 問 / 120 分**。**通年随時受験可能** で、平日 ・ 休日問わず受けられる柔軟性の高さが特徴。**合格率は約 50%** で、IPA 試験の中で最も合格しやすい入門レベルです。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          合格基準は **総合 600 / 1000 点 + 各分野評価点 300 点以上の足切り**。3 分野(ストラテジ ・ マネジメント ・ テクノロジ)バランスよく学習する必要があります。受験料 7,500 円(税込)。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "コンピュータの基礎", body: "ハードウェア / ソフトウェア / OS / 数値表現 / 容量単位。" },
            { title: "ネットワーク", body: "TCP/IP / DNS / HTTPS / 5G / IoT / クラウド。" },
            { title: "情報セキュリティ", body: "CIA トライアド / 暗号 / 認証 / 攻撃と対策。" },
            { title: "マネジメント系", body: "PMBOK / WBS / ITIL / SLA / システム監査。" },
            { title: "経営戦略", body: "SWOT / PEST / 5 forces / 4P / STP / 3C。" },
            { title: "業務分析 ・ 財務", body: "BS / PL / CF / ROI / 損益分岐点。" },
            { title: "法務 ・ 知財", body: "著作権 / 特許 / 個人情報 / 労働関連法規。" },
            { title: "AI ・ DX", body: "AI 用語 / 生成 AI / DX 3 段階 / RPA / ブロックチェーン。" },
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
            <strong>過去問演習が王道</strong>: 直近 5 〜 10 年分を 2 周。IPA 公式が過去問を全公開、無料の学習サイトも豊富。
          </li>
          <li>
            <strong>3 分野バランスよく</strong>: 各分野評価点 300 点以上の足切りに注意。**苦手分野を作らない** ことが重要。
          </li>
          <li>
            <strong>iパス専用アプリ</strong>: 隙間時間に演習を回す。本サイトの[ITパスポート 教科書](/certs/it-passport/textbook)で体系学習。
          </li>
          <li>
            <strong>最新トレンドの押さえ</strong>: 直近 1 年の AI / 生成 AI / DX 関連ニュースをキャッチアップ。
          </li>
          <li>
            <strong>本サイトの[演習問題](/certs/it-passport/quiz)</strong> で模擬演習。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">ITパスポートの学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは ITパスポート試験対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。コンピュータ ・ ネットワーク ・ セキュリティ ・ マネジメント ・ 経営戦略 ・ 法務 ・ 開発 ・ AI / DX まで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/it-passport/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/it-passport/quiz"
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
                <td className="py-2 pr-3">ITパスポート(本資格)</td>
                <td className="py-2 pr-3">学生 ・ 全社会人入門</td>
                <td className="py-2 pr-3">100 〜 200 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル 2</td>
                <td className="py-2 pr-3">基本情報技術者(FE)</td>
                <td className="py-2 pr-3">IT 実務 1 〜 2 年</td>
                <td className="py-2 pr-3">150 〜 250 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル 3</td>
                <td className="py-2 pr-3">応用情報技術者(AP)</td>
                <td className="py-2 pr-3">IT 実務 3 〜 5 年</td>
                <td className="py-2 pr-3">200 〜 500 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">レベル 4</td>
                <td className="py-2 pr-3">高度試験(DB スペシャリストなど)</td>
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
        heading="ITパスポート対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/basic-info"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 基本情報技術者試験について
        </Link>
        <Link
          href="/certs/dx-kentei"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          DX 検定について →
        </Link>
      </nav>
    </article>
  );
}
