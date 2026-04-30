import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "検定比較 ─ 統計検定 / G 検定 / E 資格 / DS 検定 / QC",
  description:
    "AIエンジニア・データサイエンティストが受ける主要な検定 7 種を、目的・難易度・費用・取得期間・必要数学レベルで一覧比較。",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "検定比較表 ─ 統計検定・G 検定・E 資格・DS 検定 等",
    description:
      "主要 7 検定の費用 ・ 難易度 ・ 受験形式を 1 ページで比較できる早見表。",
    type: "article",
  },
};

type Cert = {
  slug: string;
  name: string;
  organizer: string;
  fee: string;
  duration: string;
  format: string;
  difficulty: string;
  studyHours: string;
  pass: string;
  best: string;
  notes: string;
};

const CERTS: Cert[] = [
  {
    slug: "/textbook/grade-4",
    name: "統計検定 4 級",
    organizer: "日本統計学会",
    fee: "5,000 円",
    duration: "通年(CBT)",
    format: "60 分・30 問",
    difficulty: "★☆☆☆☆",
    studyHours: "20〜40h",
    pass: "60%",
    best: "中高生 / 統計入門",
    notes: "中学数学レベル。社会人の最初の一歩",
  },
  {
    slug: "/textbook/grade-3",
    name: "統計検定 3 級",
    organizer: "日本統計学会",
    fee: "6,000 円",
    duration: "通年(CBT)",
    format: "60 分・30 問",
    difficulty: "★★☆☆☆",
    studyHours: "40〜80h",
    pass: "65%",
    best: "大学初学・社会人入門",
    notes: "標準偏差・相関・正規分布まで",
  },
  {
    slug: "/textbook/grade-2",
    name: "統計検定 2 級",
    organizer: "日本統計学会",
    fee: "7,000 円",
    duration: "通年(CBT)",
    format: "90 分・35 問",
    difficulty: "★★★☆☆",
    studyHours: "100〜200h",
    pass: "60%",
    best: "実務 DS の必修",
    notes: "推定・検定・回帰まで一通り。統計の本命",
  },
  {
    slug: "/textbook/grade-pre1",
    name: "統計検定 準 1 級",
    organizer: "日本統計学会",
    fee: "8,000 円",
    duration: "通年(CBT)",
    format: "90 分",
    difficulty: "★★★★☆",
    studyHours: "200〜400h",
    pass: "60%",
    best: "DS 上級・大学院",
    notes: "多変量・ベイズ・時系列。AI エンジニアの上限",
  },
  {
    slug: "/textbook/grade-1",
    name: "統計検定 1 級",
    organizer: "日本統計学会",
    fee: "12,000 円",
    duration: "年 1 回(11 月)",
    format: "記述・90 分 × 2",
    difficulty: "★★★★★",
    studyHours: "400h+",
    pass: "受験により",
    best: "研究者・上級分析者",
    notes: "数理統計学の理論。AI エンジニアには過剰",
  },
  {
    slug: "/certs/g-test",
    name: "G 検定",
    organizer: "JDLA",
    fee: "13,200 円",
    duration: "年 6 回(自宅)",
    format: "120 分・約 200 問",
    difficulty: "★★☆☆☆",
    studyHours: "60〜120h",
    pass: "約 70%",
    best: "AI を使う立場",
    notes: "AI 全般のリテラシー。文系 OK",
  },
  {
    slug: "/certs/e-shikaku",
    name: "E 資格",
    organizer: "JDLA",
    fee: "33,000 円 + 認定講座 5〜30 万円",
    duration: "年 2 回",
    format: "120 分・約 100 問",
    difficulty: "★★★★☆",
    studyHours: "200〜400h",
    pass: "約 60〜70%",
    best: "ML エンジニア",
    notes: "実装重視。事前認定講座必須",
  },
  {
    slug: "/certs/ds-literacy",
    name: "DS 検定リテラシー",
    organizer: "DS 協会",
    fee: "10,000 円",
    duration: "年 2 回",
    format: "100 分",
    difficulty: "★★☆☆☆",
    studyHours: "40〜80h",
    pass: "約 70%",
    best: "データ職入門",
    notes: "DS / DE / ビジネス力 3 軸",
  },
  {
    slug: "/certs/ds-basic",
    name: "DS 基礎",
    organizer: "日本統計学会",
    fee: "7,000 円",
    duration: "通年(CBT)",
    format: "90 分",
    difficulty: "★★☆☆☆",
    studyHours: "30〜60h",
    pass: "60%",
    best: "Excel 派の分析担当",
    notes: "Excel での実データ分析中心",
  },
  {
    slug: "/certs/qc-kentei",
    name: "QC 検定 2-3 級",
    organizer: "日本規格協会",
    fee: "5,170〜6,380 円",
    duration: "年 2 回",
    format: "90 分",
    difficulty: "★★☆☆☆",
    studyHours: "40〜100h",
    pass: "約 70%",
    best: "製造業・改善推進",
    notes: "品質管理 ・ 管理図 ・ QC 7 つ道具",
  },
];

export default function ComparePage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "検定比較", href: "/compare" },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>検定比較</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <span className="chip-soft mb-3">Comparison</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-3 tracking-wider">
          検定比較表
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定・G 検定・E 資格・DS 検定・QC 検定 ─ AIエンジニアやデータサイエンティストが目指せる主要 10 検定を、費用・難易度・所要時間・推奨対象者で一覧比較しました。自分に合う 1 つを選ぶ目安に。
        </p>
      </header>

      <section className="overflow-x-auto mb-10">
        <table className="w-full text-xs ui-sans border-collapse min-w-[900px]">
          <thead>
            <tr className="border-b-2 border-[var(--page-border-strong)] text-left">
              <th className="p-3">検定</th>
              <th className="p-3">主催</th>
              <th className="p-3">費用</th>
              <th className="p-3">実施</th>
              <th className="p-3">形式</th>
              <th className="p-3">難易度</th>
              <th className="p-3">学習</th>
              <th className="p-3">合格</th>
              <th className="p-3">主対象</th>
            </tr>
          </thead>
          <tbody>
            {CERTS.map((c) => (
              <tr
                key={c.name}
                className="border-b border-[var(--page-border)] hover:bg-[var(--background)]"
              >
                <td className="p-3 font-bold">
                  <Link href={c.slug} className="text-[var(--link)] hover:underline">
                    {c.name}
                  </Link>
                </td>
                <td className="p-3 text-[var(--muted-strong)]">{c.organizer}</td>
                <td className="p-3 text-[var(--muted-strong)] tabular-nums">{c.fee}</td>
                <td className="p-3 text-[var(--muted-strong)]">{c.duration}</td>
                <td className="p-3 text-[var(--muted-strong)]">{c.format}</td>
                <td className="p-3 text-[var(--muted-strong)]">{c.difficulty}</td>
                <td className="p-3 text-[var(--muted-strong)] tabular-nums">{c.studyHours}</td>
                <td className="p-3 text-[var(--muted-strong)]">{c.pass}</td>
                <td className="p-3 text-[var(--muted-strong)]">{c.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div className="paper rounded-xl p-6">
          <div className="text-3xl mb-3" aria-hidden="true">
            🎯
          </div>
          <h3 className="font-bold text-base mb-2">AIエンジニア志望</h3>
          <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-3">
            王道ルート: 統計検定 2 級 → G 検定 → 統計検定 準 1 級 → E 資格
          </p>
          <Link
            href="/blog/g-test-vs-e-shikaku"
            className="text-xs font-bold text-[var(--link)] hover:underline ui-sans"
          >
            G 検定と E 資格の比較記事を読む →
          </Link>
        </div>
        <div className="paper rounded-xl p-6">
          <div className="text-3xl mb-3" aria-hidden="true">
            📊
          </div>
          <h3 className="font-bold text-base mb-2">データ分析実務</h3>
          <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-3">
            王道ルート: 統計検定 3 級 → 2 級 → DS 検定リテラシー
          </p>
          <Link
            href="/blog/data-scientist-career"
            className="text-xs font-bold text-[var(--link)] hover:underline ui-sans"
          >
            DS のキャリア記事を読む →
          </Link>
        </div>
        <div className="paper rounded-xl p-6">
          <div className="text-3xl mb-3" aria-hidden="true">
            🏭
          </div>
          <h3 className="font-bold text-base mb-2">製造業・品質管理</h3>
          <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-3">
            王道ルート: QC 検定 3 級 → 2 級 → 統計検定 2 級
          </p>
          <Link
            href="/certs/qc-kentei/roadmap"
            className="text-xs font-bold text-[var(--link)] hover:underline ui-sans"
          >
            QC 検定 ロードマップ →
          </Link>
        </div>
      </section>

      <section className="paper rounded-xl p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-5">
          <div>
            <dt className="font-bold mb-2">
              Q. どれか 1 つだけ取るならどれ?
            </dt>
            <dd className="text-sm text-[var(--muted-strong)] leading-relaxed pl-4">
              データ・AI 分野なら **統計検定 2 級** が最も汎用的。実装重視なら **E 資格**、AI のリテラシー重視なら **G 検定**、品質管理職なら **QC 検定** をお選びください。
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-2">
              Q. 飛び級はできますか?
            </dt>
            <dd className="text-sm text-[var(--muted-strong)] leading-relaxed pl-4">
              統計検定はすべて飛び級可能(下位級合格不要)。E 資格は認定講座が前提。G 検定 / DS 検定は誰でも受験できます。
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-2">
              Q. 業務との重なりが大きい順は?
            </dt>
            <dd className="text-sm text-[var(--muted-strong)] leading-relaxed pl-4">
              ML エンジニアなら E 資格 ≧ 統計検定 2/準 1 級 ≧ DS 検定 ≧ G 検定 の順で実装業務に直結します。
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-2">
              Q. 学習の合計時間は?
            </dt>
            <dd className="text-sm text-[var(--muted-strong)] leading-relaxed pl-4">
              AIエンジニア・ロードマップ全 5 フェーズの目安は{" "}
              <Link href="/roadmap" className="text-[var(--link)] hover:underline">
                350〜900 時間
              </Link>
              。検定取得を学習目標として組み込むと効率的です。
              <Link href="/plan" className="text-[var(--link)] hover:underline ml-1">
                学習プラン計算機
              </Link>{" "}
              で逆算できます。
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
