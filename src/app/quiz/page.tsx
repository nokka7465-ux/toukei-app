import type { Metadata } from "next";
import Link from "next/link";
import { introQuestions } from "@/data/questions/intro";
import { gradeFourQuestions } from "@/data/questions/grade-4";
import { gradeThreeQuestions } from "@/data/questions/grade-3";
import { gradeTwoQuestions } from "@/data/questions/grade-2";
import { gradePre1Questions } from "@/data/questions/grade-pre1";
import { gradeOneQuestions } from "@/data/questions/grade-1";
import { mathBasicsQuestions } from "@/data/questions/math";
import { dsBasicQuestions } from "@/data/questions/ds-basic";
import { surveyQuestions } from "@/data/questions/survey";
import { gTestQuestions } from "@/data/questions/g-test";
import { dsLiteracyQuestions } from "@/data/questions/ds-literacy";
import { eShikakuQuestions } from "@/data/questions/e-shikaku";
import { qcKenteiQuestions } from "@/data/questions/qc-kentei";
import { surveySpecialistQuestions } from "@/data/questions/survey-specialist";
import { genaiPassportQuestions } from "@/data/questions/genai-passport";
import { dsExpertQuestions } from "@/data/questions/ds-expert";
import { pythonDataQuestions } from "@/data/questions/python-data";
import { aiImplementationQuestions } from "@/data/questions/ai-implementation";
import { imageProcessingQuestions } from "@/data/questions/image-processing";
import { appliedInfoQuestions } from "@/data/questions/applied-info";
import { awsAiPractitionerQuestions } from "@/data/questions/aws-ai-practitioner";
import { basicInfoQuestions } from "@/data/questions/basic-info";
import { azureAi900Questions } from "@/data/questions/azure-ai-900";
import { gcpGenAiLeaderQuestions } from "@/data/questions/gcp-gen-ai-leader";
import { dbSpecialistQuestions } from "@/data/questions/db-specialist";
import { dxKenteiQuestions } from "@/data/questions/dx-kentei";
import { awsSaaQuestions } from "@/data/questions/aws-saa";
import { itPassportQuestions } from "@/data/questions/it-passport";
import { powerBiQuestions } from "@/data/questions/power-bi";
import { tableauSpecialistQuestions } from "@/data/questions/tableau-specialist";
import { azureAi102Questions } from "@/data/questions/azure-ai-102";
import { awsMlEngineerQuestions } from "@/data/questions/aws-ml-engineer";
import { snowflakeSnowProQuestions } from "@/data/questions/snowflake-snowpro";
import { gcpMlEngineerQuestions } from "@/data/questions/gcp-ml-engineer";
import { databricksDataEngineerQuestions } from "@/data/questions/databricks-data-engineer";
import { itStrategistQuestions } from "@/data/questions/it-strategist";
import { awsMlSpecialtyQuestions } from "@/data/questions/aws-ml-specialty";
import { azureDp100Questions } from "@/data/questions/azure-dp-100";
import { awsDataEngineerQuestions } from "@/data/questions/aws-data-engineer";
import { azureDp203Questions } from "@/data/questions/azure-dp-203";
import { gcpDataEngineerQuestions } from "@/data/questions/gcp-data-engineer";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 演習問題集 ─ 4級〜1級・関連検定の無料問題",
  description:
    "統計検定 入門編〜1 級、関連検定(DS基礎・統計調査士・G検定・E資格・DS検定・QC検定・生成AIパスポート)、数学基礎の無料演習問題を一覧から選択。1 問 1 答モード・タイマー機能・解説付き。",
  alternates: { canonical: "/quiz" },
  openGraph: {
    title: "演習問題 一覧",
    description:
      "全レベル・全検定の演習問題を一覧から選択。1 問 1 答 + 解説 + タイマー。",
    type: "website",
  },
};

type Track = {
  href: string;
  title: string;
  count: number;
  description: string;
};

const MAIN_TRACKS: Track[] = [
  { href: "/quiz/intro", title: "入門編", count: introQuestions.length, description: "算数レベルの統計入門" },
  { href: "/quiz/grade-4", title: "4 級", count: gradeFourQuestions.length, description: "代表値・確率・場合の数" },
  { href: "/quiz/grade-3", title: "3 級", count: gradeThreeQuestions.length, description: "分散・分布・推定基礎" },
  { href: "/quiz/grade-2", title: "2 級", count: gradeTwoQuestions.length, description: "推定・検定・回帰" },
  { href: "/quiz/grade-pre1", title: "準 1 級", count: gradePre1Questions.length, description: "多変量・ベイズ・時系列" },
  { href: "/quiz/grade-1", title: "1 級", count: gradeOneQuestions.length, description: "数理統計学の理論" },
];

const SUPPORT_TRACKS: Track[] = [
  { href: "/math/quiz", title: "数学基礎", count: mathBasicsQuestions.length, description: "割合・Σ・指数対数の基本" },
];

const CERT_TRACKS: Track[] = [
  { href: "/certs/ds-basic/quiz", title: "統計検定 DS基礎", count: dsBasicQuestions.length, description: "Excel 中心のデータ分析" },
  { href: "/certs/survey/quiz", title: "統計調査士", count: surveyQuestions.length, description: "統計法・公的統計・標本抽出" },
  { href: "/certs/survey-specialist/quiz", title: "専門統計調査士", count: surveySpecialistQuestions.length, description: "標本設計の理論・公的統計の高度利用" },
  { href: "/certs/g-test/quiz", title: "G検定(JDLA)", count: gTestQuestions.length, description: "AI / DL の概念・倫理" },
  { href: "/certs/e-shikaku/quiz", title: "E資格(JDLA Engineer)", count: eShikakuQuestions.length, description: "DL 数理・最適化・主要モデル" },
  { href: "/certs/ds-literacy/quiz", title: "データサイエンティスト検定", count: dsLiteracyQuestions.length, description: "DS / DE / ビジネス力 3 軸" },
  { href: "/certs/qc-kentei/quiz", title: "QC検定(品質管理検定)", count: qcKenteiQuestions.length, description: "管理図・抜取検査・QC 7 つ道具" },
  { href: "/certs/genai-passport/quiz", title: "生成AIパスポート(GUGA)", count: genaiPassportQuestions.length, description: "LLM・プロンプト・リスク・倫理" },
  { href: "/certs/ds-expert/quiz", title: "統計検定 DS エキスパート", count: dsExpertQuestions.length, description: "高度統計 ・ ML ・ ベイズ ・ 因果推論 ・ MLOps" },
  { href: "/certs/python-data/quiz", title: "Python データ分析試験(PythonED)", count: pythonDataQuestions.length, description: "NumPy / pandas / Matplotlib / scikit-learn" },
  { href: "/certs/ai-implementation/quiz", title: "AI 実装検定(AIE)", count: aiImplementationQuestions.length, description: "PyTorch / Keras / CNN / Transformer / エッジ AI" },
  { href: "/certs/image-processing/quiz", title: "画像処理エンジニア検定 エキスパート", count: imageProcessingQuestions.length, description: "古典 CV(フィルタ/周波数)+ DL ベース CV" },
  { href: "/certs/applied-info/quiz", title: "応用情報技術者試験(IPA)", count: appliedInfoQuestions.length, description: "アルゴリズム ・ DB ・ AI ・ セキュリティ ・ 経営戦略" },
  { href: "/certs/aws-ai-practitioner/quiz", title: "AWS Certified AI Practitioner", count: awsAiPractitionerQuestions.length, description: "AWS AI サービス ・ Bedrock ・ SageMaker ・ プロンプト" },
  { href: "/certs/basic-info/quiz", title: "基本情報技術者試験(IPA)", count: basicInfoQuestions.length, description: "アルゴリズム ・ 情報セキュリティ ・ DB ・ ネットワーク" },
  { href: "/certs/azure-ai-900/quiz", title: "Azure AI Fundamentals(AI-900)", count: azureAi900Questions.length, description: "Azure ML ・ AI Vision ・ AI Language ・ OpenAI ・ Copilot" },
  { href: "/certs/gcp-gen-ai-leader/quiz", title: "GCP Generative AI Leader", count: gcpGenAiLeaderQuestions.length, description: "Vertex AI ・ Gemini ・ Imagen ・ Workspace ・ Grounding" },
  { href: "/certs/db-specialist/quiz", title: "データベーススペシャリスト試験(DB)", count: dbSpecialistQuestions.length, description: "関係代数 ・ 正規化 ・ SQL 上級 ・ ACID ・ NoSQL ・ DWH" },
  { href: "/certs/dx-kentei/quiz", title: "DX 検定", count: dxKenteiQuestions.length, description: "AI ・ クラウド ・ IoT ・ 5G ・ ブロックチェーン ・ RPA ・ DX 経営" },
  { href: "/certs/aws-saa/quiz", title: "AWS Solutions Architect Associate", count: awsSaaQuestions.length, description: "EC2 / S3 / RDS / DynamoDB / VPC / Auto Scaling / DR" },
  { href: "/certs/it-passport/quiz", title: "ITパスポート試験(IPA)", count: itPassportQuestions.length, description: "ストラテジ ・ マネジメント ・ テクノロジ 3 分野" },
  { href: "/certs/power-bi/quiz", title: "Microsoft Power BI(PL-300)", count: powerBiQuestions.length, description: "Power Query ・ DAX ・ ビジュアル ・ Fabric ・ Copilot" },
  { href: "/certs/tableau-specialist/quiz", title: "Tableau Desktop Specialist", count: tableauSpecialistQuestions.length, description: "ピル ・ LOD ・ Marks ・ ダッシュボード ・ Analytics" },
  { href: "/certs/azure-ai-102/quiz", title: "Microsoft Azure AI-102", count: azureAi102Questions.length, description: "Azure OpenAI ・ AI Search ・ RAG ・ Foundry ・ Agent" },
  { href: "/certs/aws-ml-engineer/quiz", title: "AWS ML Engineer Associate(MLA-C01)", count: awsMlEngineerQuestions.length, description: "SageMaker ・ Endpoints ・ Pipelines ・ Model Monitor ・ Bedrock" },
  { href: "/certs/snowflake-snowpro/quiz", title: "Snowflake SnowPro Core", count: snowflakeSnowProQuestions.length, description: "アーキテクチャ ・ COPY/Snowpipe ・ Time Travel ・ Cloning ・ Cortex" },
  { href: "/certs/gcp-ml-engineer/quiz", title: "GCP Professional ML Engineer", count: gcpMlEngineerQuestions.length, description: "Vertex AI ・ BQML ・ TPU ・ Kubeflow ・ Monitoring" },
  { href: "/certs/databricks-data-engineer/quiz", title: "Databricks Data Engineer Associate", count: databricksDataEngineerQuestions.length, description: "Lakehouse ・ Delta Lake ・ Auto Loader ・ DLT ・ Unity Catalog" },
  { href: "/certs/it-strategist/quiz", title: "ITストラテジスト試験(ST)", count: itStrategistQuestions.length, description: "経営戦略 ・ 事業戦略 ・ IT 戦略 ・ EA ・ DX ・ 投資判断" },
  { href: "/certs/aws-ml-specialty/quiz", title: "AWS ML Specialty(MLS-C01)", count: awsMlSpecialtyQuestions.length, description: "Built-in アルゴリズム ・ HPO ・ Quantization ・ Clarify ・ Model Monitor" },
  { href: "/certs/azure-dp-100/quiz", title: "Azure Data Scientist(DP-100)", count: azureDp100Questions.length, description: "Workspace ・ AutoML ・ Sweep ・ Endpoint ・ RAI ・ MLOps" },
  { href: "/certs/aws-data-engineer/quiz", title: "AWS Data Engineer Associate(DEA-C01)", count: awsDataEngineerQuestions.length, description: "Glue ・ Athena ・ Redshift ・ Kinesis ・ Iceberg ・ Lake Formation" },
  { href: "/certs/azure-dp-203/quiz", title: "Azure Data Engineer(DP-203)", count: azureDp203Questions.length, description: "Synapse 3 プール ・ ADF ・ Stream Analytics ・ Databricks ・ Purview" },
  { href: "/certs/gcp-data-engineer/quiz", title: "GCP Professional Data Engineer", count: gcpDataEngineerQuestions.length, description: "BigQuery ・ Dataflow ・ Pub/Sub ・ Composer ・ Looker ・ Dataplex" },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      href={track.href}
      className="paper rounded-lg p-5 hover:-translate-y-0.5 transition group block h-full"
    >
      <div className="flex items-baseline justify-between gap-2 mb-2 flex-wrap">
        <h3 className="text-lg font-bold group-hover:text-[var(--link)]">
          {track.title}
        </h3>
        <span className="text-[10px] font-bold text-[var(--accent-fg)] bg-[var(--accent)] px-1.5 py-0.5 rounded ui-sans">
          全 {track.count} 問
        </span>
      </div>
      <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
        {track.description}
      </p>
      <div className="mt-3 text-xs text-[var(--link)] ui-sans">
        問題を解く →
      </div>
    </Link>
  );
}

export default function QuizIndexPage() {
  const total =
    [...MAIN_TRACKS, ...SUPPORT_TRACKS, ...CERT_TRACKS].reduce(
      (s, t) => s + t.count,
      0,
    );

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "演習問題", href: "/quiz" },
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
        <span>演習問題</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Practice Index</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          演習問題 一覧
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 入門編〜1 級、関連検定、数学基礎の演習問題を一覧から選べます。すべての問題は{" "}
          <strong>1 問 1 答モード</strong>(解答するたびに解説表示)と{" "}
          <strong>時間制限つき模擬試験モード</strong>に対応しています。全 {total} 問。
        </p>
      </header>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">統計検定本体</div>
          <h2 className="text-2xl font-bold">入門編 〜 1 級</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MAIN_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">学習サポート</div>
          <h2 className="text-2xl font-bold">数学基礎</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUPPORT_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>

      <section>
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">関連検定(別系統)</div>
          <h2 className="text-2xl font-bold">DS基礎 / 統計調査士 / G検定 / DS検定</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERT_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>
    </article>
  );
}
