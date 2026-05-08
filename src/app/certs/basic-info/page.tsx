import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "基本情報技術者試験(FE)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "基本情報技術者試験(IPA、レベル 2)の受験対象・出題範囲・対策方針を完全解説。通年 CBT で受けられる IT エンジニアの登竜門。アルゴリズム・情報セキュリティ重点の科目 B 戦略付き。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/basic-info" },
  openGraph: {
    title: "基本情報技術者試験(FE)とは",
    description:
      "FE の対象・出題範囲・対策・科目 B 戦略をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["basic-info"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function BasicInfoPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "基本情報技術者試験", href: "/certs/basic-info" },
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
        <span>基本情報技術者試験</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          基本情報技術者試験(FE / IPA)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **情報処理推進機構(IPA)** が主催する国家試験(レベル 2)。**通年 CBT で受験可能** な IT エンジニアの登竜門で、年間 10 万人超が受験。**新卒 IT 採用 ・ 中途エンジニア転職** の最低ラインとして広く認知され、応用情報技術者(AP)の前段に位置付けられます。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **科目 A 60 問 / 90 分 + 科目 B 20 問 / 100 分** の CBT 方式。**両方で 600 / 1000 点以上** が合格基準。2023 年改訂で **通年実施 + Python 風疑似言語** に変わり、より受けやすくなりました。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          合格率は **約 25 〜 35%**。基本情報合格者で 150 〜 250 時間が学習時間の目安。**科目 B のアルゴリズム + 情報セキュリティ** が合格の最大の鍵です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "コンピュータシステム", body: "2 進数 / 浮動小数 / 論理演算 / プロセッサ / メモリ階層 / RAID。" },
            { title: "アルゴリズム(科目 B 重点)", body: "疑似言語 / スタック / キュー / 木 / ソート / 探索。" },
            { title: "情報セキュリティ(科目 B 必須)", body: "暗号 / 認証 / 攻撃と対策 / ISMS / CIA トライアド。" },
            { title: "ネットワーク", body: "OSI / TCP-IP / DNS / NAT / ポート番号。" },
            { title: "データベース", body: "正規化 / SQL / JOIN / ACID / 分離レベル。" },
            { title: "ソフトウェア工学", body: "ウォーターフォール / アジャイル / テスト / OOP。" },
            { title: "PM ・ サービス", body: "WBS / EVM / クリティカルパス / ITIL / SLA。" },
            { title: "経営戦略 ・ AI", body: "SWOT / 4P / AI 用語 / DX 3 段階。" },
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
            <strong>科目 A は過去問演習</strong>: 直近 5 〜 10 年分を 2 周。1 問 1.5 分のペース感覚を作る。
          </li>
          <li>
            <strong>科目 B のアルゴリズム対策</strong>: Python 風疑似言語のトレース表を必ず書く習慣をつける。本サイトの[基本情報 教科書](/certs/basic-info/textbook)で体系学習。
          </li>
          <li>
            <strong>科目 B の情報セキュリティ</strong>: シナリオ読解問題が中心。代表的な攻撃と対策を整理。
          </li>
          <li>
            <strong>IPA 公式アプリ</strong>: 隙間時間に過去問演習。本サイトの[演習問題](/certs/basic-info/quiz)も併用を。
          </li>
          <li>
            <strong>応用情報を視野に</strong>: 合格後すぐ AP に進むなら、FE 対策時から AP の出題範囲を意識して学ぶと効率的。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">基本情報の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは基本情報技術者試験対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。コンピュータ基礎 ・ アルゴリズム ・ 情報セキュリティ ・ ネットワーク ・ DB ・ ソフトウェア工学 ・ PM ・ 経営戦略まで体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/basic-info/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/basic-info/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">FE と AP の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">基本情報(FE)</th>
                <th className="py-2 pr-3">応用情報(AP)</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">レベル</td>
                <td className="py-2 pr-3">レベル 2(基本)</td>
                <td className="py-2 pr-3">レベル 3(応用)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">実施</td>
                <td className="py-2 pr-3">通年(CBT)</td>
                <td className="py-2 pr-3">年 2 回(4 月・10 月)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">問題数 / 時間</td>
                <td className="py-2 pr-3">A 60 問 / 90 分 + B 20 問 / 100 分</td>
                <td className="py-2 pr-3">午前 80 問 / 150 分 + 午後 5 問選択 / 150 分</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">記述問題</td>
                <td className="py-2 pr-3">なし(全選択式)</td>
                <td className="py-2 pr-3">あり(午後)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">150 〜 250 時間</td>
                <td className="py-2 pr-3">200 〜 500 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">合格率</td>
                <td className="py-2 pr-3">25 〜 35%</td>
                <td className="py-2 pr-3">23 〜 26%</td>
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
        heading="基本情報技術者対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/applied-info"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← 応用情報技術者試験について
        </Link>
        <Link
          href="/certs/azure-ai-900"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure AI Fundamentals について →
        </Link>
      </nav>
    </article>
  );
}
