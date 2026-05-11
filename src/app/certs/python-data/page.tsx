import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Python 3 エンジニア認定 データ分析試験とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Python 3 エンジニア認定 データ分析試験(PythonED 主催)の受験対象・出題範囲・対策方針を完全解説。NumPy / pandas / Matplotlib / scikit-learn と統計 / ML 基礎を測る入門資格。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/python-data" },
  openGraph: {
    title: "Python 3 エンジニア認定 データ分析試験とは",
    description:
      "PythonED 主催のデータ分析試験の対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["python-data"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function PythonDataPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Python データ分析", href: "/certs/python-data" },
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
        <span>Python データ分析</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          Python 3 エンジニア認定 データ分析試験(PythonED)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **一般社団法人 Python エンジニア育成推進協会(PythonED)** が主催する、Python によるデータ分析の **基礎力** を測る CBT 試験。**NumPy / pandas / Matplotlib / scikit-learn** の基本的な使い方と、統計 / 機械学習の基礎が出題範囲です。データサイエンティスト未経験者・初学者の **登竜門** に最適です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(全国の試験会場で随時受験可) / 40 問 / 60 分 / 4 択選択式 / 合格基準 70%**。主教材『**Python によるあたらしいデータ分析の教科書**』(翔泳社)に準拠した出題で、**データ分析を始めたばかり〜実務 1 年目までのエンジニア / 分析担当** が主対象です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          技術者向けの体系的な検定で、**「Python でデータ分析ができる」を客観的に証明** したい人にとって、コストパフォーマンスの良い資格として注目されています。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Python と環境", body: "基本文法・仮想環境(venv)・pip・Jupyter。" },
            { title: "数学の基礎", body: "ベクトル・内積・偏微分・勾配・正規分布など。" },
            { title: "NumPy", body: "ndarray・ブロードキャスト・線形代数・乱数。" },
            { title: "pandas", body: "Series / DataFrame・loc/iloc・groupby・merge。" },
            { title: "Matplotlib", body: "Figure / Axes・主要グラフ・subplot。" },
            { title: "scikit-learn", body: "fit / predict / transform・Pipeline・GridSearchCV・主要モデル。" },
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
            <strong>主教材を 1 周</strong>: 『Python によるあたらしいデータ分析の教科書』を一通り読む。本サイトの[Python データ分析 教科書](/certs/python-data/textbook)も併用。
          </li>
          <li>
            <strong>Jupyter で手を動かす</strong>: NumPy の axis、pandas の loc/iloc、scikit-learn の fit/transform は **実機で動かさないと細かい違いが見えません**。1 日 30 分でも触る。
          </li>
          <li>
            <strong>選択肢のシグネチャを比較</strong>: `fit_transform vs transform`、`merge(how='left') vs concat()` など、混同しやすいペアを整理。
          </li>
          <li>
            <strong>過去問・演習</strong>: PythonED の例題と本サイトの[演習問題](/certs/python-data/quiz)で出題傾向を体感。1 問 1.5 分のペース感覚を作る。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">Python データ分析の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは Python データ分析対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Python 文法の復習から、NumPy / pandas / Matplotlib / scikit-learn の主要 API、機械学習の基礎まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/python-data/textbook"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/python-data/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">統計検定 DS 系資格との比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">Python データ分析</th>
                <th className="py-2 pr-3">DS 基礎</th>
                <th className="py-2 pr-3">DS エキスパート</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">Python ライブラリ</td>
                <td className="py-2 pr-3">Excel での実分析</td>
                <td className="py-2 pr-3">高度統計 + ML + 因果</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">想定対象</td>
                <td className="py-2 pr-3">分析初学者(Python 派)</td>
                <td className="py-2 pr-3">分析初学者(Excel 派)</td>
                <td className="py-2 pr-3">中堅 DS</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">60 〜 100 時間</td>
                <td className="py-2 pr-3">30 〜 60 時間</td>
                <td className="py-2 pr-3">300 時間〜</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">統計理論の比重</td>
                <td className="py-2 pr-3">基礎のみ</td>
                <td className="py-2 pr-3">中</td>
                <td className="py-2 pr-3">高(必須)</td>
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
        category="Python"
        heading="Python データ分析対策に強いスクール / コース"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/ds-basic"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← DS 基礎について
        </Link>
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          G 検定について →
        </Link>
      </nav>
    </article>
  );
}
