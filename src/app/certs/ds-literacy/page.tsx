import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DS検定(リテラシー)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "データサイエンティスト検定(DS検定リテラシーレベル)の受験対象・出題範囲・対策方針を完全解説。DS 力・DE 力・ビジネス力の 3 軸スキルを測る。無料教科書・演習問題付き。",
  alternates: { canonical: "/certs/ds-literacy" },
  openGraph: {
    title: "データサイエンティスト検定 リテラシーレベルとは",
    description:
      "DS検定リテラシーの対象・出題範囲・対策・統計検定との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "データサイエンティスト検定とはどんな試験ですか?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データサイエンティスト協会が主催する、データサイエンティストに必要な3軸スキル(DS力・DE力・ビジネス力)をリテラシーレベルで測る試験。実務に入って活躍できる最低限の知識を問います。",
      },
    },
    {
      "@type": "Question",
      name: "DS検定と統計検定 DS基礎、何が違う?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主催団体と主眼が異なります。DS基礎は統計学会主催で Excel 中心の実データ分析。DS検定はデータサイエンティスト協会主催で、統計・SQL・ビジネス力まで全方位カバーします。",
      },
    },
    {
      "@type": "Question",
      name: "DS検定リテラシーと統計検定2級、どちらが先?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目的次第。データ職への転職入門・幅広いリテラシーが欲しい → DS検定。統計の理論を体系的に身につけたい → 統計検定2級。両方取ると相補的に強い武器になります。",
      },
    },
  ],
};

export default function DsLiteracyPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "DS検定", href: "/certs/ds-literacy" },
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
        <span>データサイエンティスト検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          データサイエンティスト検定 リテラシーレベル
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **データサイエンティスト協会** が主催する、**データサイエンティストに必要な実務知識を全方位で問う** 検定。「データサイエンス力 / データエンジニアリング力 / ビジネス力」の 3 軸を、リテラシー(実務に入れる)レベルで測ります。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          DS 検定の **「リテラシーレベル」** は、データサイエンティストとしての職業に **入っていける最低限の知識** を測る位置付け。実務で価値を生むには、統計だけでも・SQL だけでも・ビジネスだけでも足りない、という考え方を反映しています。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          上位資格として **「アソシエイトレベル」** など段階が設定される予定です。リテラシーは「データ職スタート地点」として位置付けられます。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(3 軸スキル)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              area: "データサイエンス力",
              title: "統計・数学・機械学習",
              body: "代表値・分布・検定・回帰・機械学習の主要手法・評価指標。",
            },
            {
              area: "データエンジニアリング力",
              title: "SQL・データ加工・基盤",
              body: "SQL 基本、ETL、データウェアハウスとデータレイクの違い、クラウド基礎。",
            },
            {
              area: "ビジネス力",
              title: "課題定義・KPI・推進",
              body: "課題設定、KPI 設計、プロジェクト進行(CRISP-DM)、ステークホルダーとのコミュニケーション。",
            },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="chapter-eyebrow mb-1">{t.area}</div>
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
            <strong>3 軸の出題範囲を把握</strong>: DS 協会の「スキルチェックリスト」 ★1 項目をベースに、何が問われるかを確認。
          </li>
          <li>
            <strong>統計・ML 部分は本サイトと相性が良い</strong>:{" "}
            <Link href="/textbook/grade-3" className="text-[var(--link)] hover:underline">
              統計検定 3 級教科書
            </Link>
            と{" "}
            <Link href="/textbook/grade-2" className="text-[var(--link)] hover:underline">
              2 級教科書
            </Link>
            で代表値・検定・回帰までを押さえる。
          </li>
          <li>
            <strong>機械学習の用語は別教材で補完</strong>: アルゴリズム名と評価指標(F1・AUC など)を一通り押さえる。本サイトの[G検定教科書](/certs/g-test/textbook)の機械学習・DLパートも参考になる。
          </li>
          <li>
            <strong>SQL は手で書く</strong>: SELECT/JOIN/GROUP BY を、Web 上の SQL 環境(SQLZoo・LeetCode など)で実際に手で書いて慣れる。
          </li>
          <li>
            <strong>過去問・模試</strong>: DS 協会公認の問題集・模擬試験で出題形式に慣れる。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">
          データサイエンティスト検定の学習を始める
        </h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは DS 検定対策の **教科書本編** と **演習問題** を公開しています。3 軸スキル(DS 力 / DE 力 / ビジネス力)の概要から、実務でのポイントまで段階的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/ds-literacy/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/ds-literacy/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">類似資格との比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">DS検定</th>
                <th className="py-2 pr-3">DS基礎(統計検定)</th>
                <th className="py-2 pr-3">G検定</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主催</td>
                <td className="py-2 pr-3">DS 協会</td>
                <td className="py-2 pr-3">統計学会</td>
                <td className="py-2 pr-3">JDLA</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">3 軸の実務リテラシー</td>
                <td className="py-2 pr-3">Excel での実データ分析</td>
                <td className="py-2 pr-3">AI/DL の概念・倫理</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">データ職に転職・育成</td>
                <td className="py-2 pr-3">Excel 派の分析担当</td>
                <td className="py-2 pr-3">AI 業界転職・概念把握</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G検定について
        </Link>
        <Link
          href="/roadmap"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          学習ロードマップ →
        </Link>
      </nav>
    </article>
  );
}
