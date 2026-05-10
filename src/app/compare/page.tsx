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
  {
    slug: "/certs/genai-passport",
    name: "生成AIパスポート",
    organizer: "GUGA",
    fee: "11,000 円",
    duration: "年 3〜4 回",
    format: "60 分 / 60 問(IBT)",
    difficulty: "★☆☆☆☆",
    studyHours: "30〜50h",
    pass: "約 70〜80%",
    best: "全職種・AI 活用初心者",
    notes: "生成 AI を業務で使うリテラシー",
  },
  {
    slug: "/certs/ds-expert",
    name: "DS エキスパート",
    organizer: "日本統計学会",
    fee: "10,000 円",
    duration: "通年(CBT)",
    format: "90 分 / 40 問",
    difficulty: "★★★★★",
    studyHours: "300〜500h",
    pass: "約 30〜40%",
    best: "中堅 DS / リード候補",
    notes: "ベイズ ・ 因果 ・ MLOps まで",
  },
  {
    slug: "/certs/python-data",
    name: "Python データ分析試験",
    organizer: "PythonED",
    fee: "11,000 円",
    duration: "通年(CBT)",
    format: "60 分 / 40 問",
    difficulty: "★★☆☆☆",
    studyHours: "60〜100h",
    pass: "約 80%",
    best: "Python 派の分析初学者",
    notes: "NumPy / pandas / sklearn",
  },
  {
    slug: "/certs/ai-implementation",
    name: "AI 実装検定 A 級",
    organizer: "エッジ AI 協会",
    fee: "14,850 円",
    duration: "通年(IBT)",
    format: "60 分 / 60 問",
    difficulty: "★★★☆☆",
    studyHours: "100〜150h",
    pass: "約 60〜70%",
    best: "AI エンジニア中堅",
    notes: "PyTorch / Keras / CNN 実装",
  },
  {
    slug: "/certs/image-processing",
    name: "画像処理エンジニア(エキ)",
    organizer: "CG-ARTS",
    fee: "6,800 円",
    duration: "年 2 回(会場)",
    format: "80 分",
    difficulty: "★★★★☆",
    studyHours: "100〜150h",
    pass: "約 30〜40%",
    best: "画像 AI 専門家",
    notes: "フィルタ ・ 周波数 ・ CNN ・ U-Net",
  },
  {
    slug: "/certs/applied-info",
    name: "応用情報技術者",
    organizer: "IPA",
    fee: "7,500 円",
    duration: "年 2 回",
    format: "午前 150 分 + 午後 150 分",
    difficulty: "★★★★☆",
    studyHours: "200〜500h",
    pass: "約 23〜26%",
    best: "IT 中堅エンジニア",
    notes: "国家試験。レベル 3、高度試験の登竜門",
  },
  {
    slug: "/certs/aws-ai-practitioner",
    name: "AWS AI Practitioner",
    organizer: "AWS",
    fee: "100 USD",
    duration: "通年(CBT)",
    format: "90 分 / 65 問",
    difficulty: "★★☆☆☆",
    studyHours: "40〜100h",
    pass: "公開なし",
    best: "クラウド AI 入門",
    notes: "Bedrock / SageMaker / 責任ある AI",
  },
  {
    slug: "/certs/basic-info",
    name: "基本情報技術者(FE)",
    organizer: "IPA",
    fee: "7,500 円",
    duration: "通年(CBT)",
    format: "科目 A 90 分 + B 100 分",
    difficulty: "★★★☆☆",
    studyHours: "150〜250h",
    pass: "約 25〜35%",
    best: "IT エンジニア入門",
    notes: "国家試験レベル 2、応用情報の前段",
  },
  {
    slug: "/certs/azure-ai-900",
    name: "Azure AI Fundamentals",
    organizer: "Microsoft",
    fee: "約 12,500 円",
    duration: "通年(CBT)",
    format: "60 分 / 40-60 問",
    difficulty: "★★☆☆☆",
    studyHours: "40〜80h",
    pass: "公開なし",
    best: "Azure AI 入門",
    notes: "Azure ML / OpenAI / Copilot、有効期限なし",
  },
  {
    slug: "/certs/gcp-gen-ai-leader",
    name: "GCP Gen AI Leader",
    organizer: "Google Cloud",
    fee: "99 USD",
    duration: "通年",
    format: "90 分 / 50-60 問",
    difficulty: "★★☆☆☆",
    studyHours: "40〜80h",
    pass: "公開なし",
    best: "GCP AI 入門",
    notes: "Vertex AI / Gemini / Workspace",
  },
  {
    slug: "/certs/db-specialist",
    name: "データベーススペシャリスト",
    organizer: "IPA",
    fee: "7,500 円",
    duration: "年 1 回(秋)",
    format: "午前 90 分 + 午後 210 分",
    difficulty: "★★★★★",
    studyHours: "300〜500h",
    pass: "約 17〜18%",
    best: "DBA / データエンジニア",
    notes: "IPA レベル 4 高度試験",
  },
  {
    slug: "/certs/dx-kentei",
    name: "DX 検定",
    organizer: "日本イノベーション融合学会",
    fee: "11,000 円",
    duration: "年 2 回",
    format: "60 分 / 120 問",
    difficulty: "★★☆☆☆",
    studyHours: "40〜80h",
    pass: "公開なし",
    best: "経営 ・ 企画 ・ コンサル",
    notes: "DX エキスパート 800 点認定",
  },
  {
    slug: "/certs/aws-saa",
    name: "AWS SAA",
    organizer: "AWS",
    fee: "150 USD",
    duration: "通年(CBT)",
    format: "130 分 / 65 問",
    difficulty: "★★★★☆",
    studyHours: "100〜200h",
    pass: "公開なし",
    best: "クラウドエンジニア中堅",
    notes: "AWS Associate の代表認定",
  },
  {
    slug: "/certs/it-passport",
    name: "ITパスポート(iパス)",
    organizer: "IPA",
    fee: "7,500 円",
    duration: "通年(CBT)",
    format: "120 分 / 100 問",
    difficulty: "★★☆☆☆",
    studyHours: "100〜200h",
    pass: "約 50%",
    best: "社会人 ・ 学生入門",
    notes: "国家試験レベル 1、IT 入門",
  },
  {
    slug: "/certs/power-bi",
    name: "Power BI(PL-300)",
    organizer: "Microsoft",
    fee: "約 21,000 円",
    duration: "通年(CBT)",
    format: "120 分 / 40-60 問",
    difficulty: "★★★☆☆",
    studyHours: "60〜120h",
    pass: "公開なし",
    best: "BI 開発者 ・ アナリスト",
    notes: "Power Query / DAX / Fabric",
  },
  {
    slug: "/certs/tableau-specialist",
    name: "Tableau Desktop Specialist",
    organizer: "Salesforce(Tableau)",
    fee: "100 USD",
    duration: "通年",
    format: "60 分 / 45 問",
    difficulty: "★★☆☆☆",
    studyHours: "40〜80h",
    pass: "約 75%",
    best: "BI 入門 ・ 欧米系志向",
    notes: "有効期限なし(永続)",
  },
  {
    slug: "/certs/azure-ai-102",
    name: "Azure AI-102",
    organizer: "Microsoft",
    fee: "約 21,000 円",
    duration: "通年(CBT)",
    format: "100 分 / 40-60 問",
    difficulty: "★★★★☆",
    studyHours: "120〜200h",
    pass: "公開なし",
    best: "Azure AI 開発者",
    notes: "Azure OpenAI / AI Search / Foundry",
  },
  {
    slug: "/certs/aws-ml-engineer",
    name: "AWS MLA-C01",
    organizer: "AWS",
    fee: "150 USD",
    duration: "通年(CBT)",
    format: "130 分 / 65 問",
    difficulty: "★★★★☆",
    studyHours: "150〜250h",
    pass: "公開なし",
    best: "AWS AI/ML 開発者",
    notes: "SageMaker / Bedrock / MLOps",
  },
  {
    slug: "/certs/snowflake-snowpro",
    name: "Snowflake SnowPro Core",
    organizer: "Snowflake",
    fee: "175 USD",
    duration: "通年",
    format: "115 分 / 100 問",
    difficulty: "★★★☆☆",
    studyHours: "60〜100h",
    pass: "公開なし",
    best: "データエンジニア",
    notes: "Time Travel / Cloning / Sharing",
  },
  {
    slug: "/certs/gcp-ml-engineer",
    name: "GCP ML Engineer",
    organizer: "Google Cloud",
    fee: "200 USD",
    duration: "通年",
    format: "120 分 / 50-60 問",
    difficulty: "★★★★★",
    studyHours: "200〜300h",
    pass: "公開なし",
    best: "ML エンジニア上位",
    notes: "Vertex AI / Gemini / BQML / Kubeflow",
  },
  {
    slug: "/certs/databricks-data-engineer",
    name: "Databricks Data Engineer",
    organizer: "Databricks",
    fee: "200 USD",
    duration: "通年",
    format: "90 分 / 45 問",
    difficulty: "★★★☆☆",
    studyHours: "60〜100h",
    pass: "約 70%",
    best: "Lakehouse エンジニア",
    notes: "Spark / Delta Lake / DLT / UC",
  },
  {
    slug: "/certs/it-strategist",
    name: "ITストラテジスト試験(ST)",
    organizer: "IPA",
    fee: "7,500 円",
    duration: "年 1 回(春)",
    format: "午前 I / II + 午後 I / II",
    difficulty: "★★★★★",
    studyHours: "300〜500h",
    pass: "約 14〜15%",
    best: "経営 ・ IT 戦略",
    notes: "経営戦略・EA・DX・投資判断・論述",
  },
  {
    slug: "/certs/aws-ml-specialty",
    name: "AWS ML Specialty(MLS-C01)",
    organizer: "AWS",
    fee: "300 USD",
    duration: "通年",
    format: "180 分 / 65 問",
    difficulty: "★★★★★",
    studyHours: "200〜400h",
    pass: "約 75%",
    best: "ML エンジニア最上位",
    notes: "Built-in / HPO / Quantization / Clarify",
  },
  {
    slug: "/certs/azure-dp-100",
    name: "Azure Data Scientist(DP-100)",
    organizer: "Microsoft",
    fee: "165 USD",
    duration: "通年",
    format: "100 分 / 40〜60 問",
    difficulty: "★★★☆☆",
    studyHours: "100〜200h",
    pass: "約 70%",
    best: "Data Scientist / ML エンジニア",
    notes: "Azure ML SDK/CLI v2 / AutoML / Sweep / RAI",
  },
  {
    slug: "/certs/aws-data-engineer",
    name: "AWS Data Engineer Associate(DEA-C01)",
    organizer: "AWS",
    fee: "150 USD",
    duration: "通年",
    format: "130 分 / 65 問",
    difficulty: "★★★☆☆",
    studyHours: "100〜200h",
    pass: "約 72%",
    best: "データエンジニア",
    notes: "Glue / Athena / Redshift / Kinesis / Iceberg",
  },
  {
    slug: "/certs/azure-dp-203",
    name: "Azure Data Engineer(DP-203)",
    organizer: "Microsoft",
    fee: "165 USD",
    duration: "通年",
    format: "100 分 / 40〜60 問",
    difficulty: "★★★☆☆",
    studyHours: "100〜200h",
    pass: "約 70%",
    best: "データエンジニア",
    notes: "Synapse / ADF / Databricks / Stream Analytics",
  },
  {
    slug: "/certs/gcp-data-engineer",
    name: "GCP Pro Data Engineer",
    organizer: "Google Cloud",
    fee: "200 USD",
    duration: "通年",
    format: "120 分 / 50〜60 問",
    difficulty: "★★★★☆",
    studyHours: "150〜250h",
    pass: "約 70%",
    best: "データエンジニア上位",
    notes: "BigQuery / Dataflow / Pub/Sub / Looker",
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
