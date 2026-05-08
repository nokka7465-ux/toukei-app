import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";

export const metadata: Metadata = {
  title: "統計検定 教科書一覧 ─ 4級〜1級・関連検定・数学基礎",
  description:
    "統計検定の入門編〜1級と、関連検定(DS基礎・統計調査士・G検定・E資格・DS検定・QC検定・生成AIパスポート)、数学基礎まで全教科書を一覧で。すべて無料で読めます。",
  alternates: { canonical: "/textbook" },
  openGraph: {
    title: "統計検定 教科書一覧 ─ 4級〜1級・関連検定・数学基礎",
    description:
      "統計検定 入門編〜1級・関連検定・数学基礎の教科書を一覧から選択。すべて無料。",
    type: "website",
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "統計検定の教科書は、どの級から読み始めればいいですか?",
    a: "統計をこれから学ぶ方は『入門編』、高校で数学I・Aを学んだ方は『4級』、大学初年度の確率統計を理解したい方は『3級』から始めるのがおすすめです。迷う場合は『3問の級診断』で目安が分かります。",
  },
  {
    q: "教科書はすべて無料ですか?",
    a: "はい、本サイトに掲載されている教科書・公式集・演習問題はすべて無料でご利用いただけます。会員登録も不要です。",
  },
  {
    q: "関連検定とはどんな試験ですか?",
    a: "統計検定本体(4級〜1級)とは別系統の、データサイエンス基礎・統計調査士・専門統計調査士・G検定・E資格・DS検定・QC検定・生成AIパスポートなど、データ・AI・調査・品質管理関連の資格試験です。各教科書ページから対策を始められます。",
  },
  {
    q: "数学基礎の教科書は誰向けですか?",
    a: "統計学の式が読めない・前提の数学に不安がある方向けの補助教材です。割合・Σ・指数対数・微分積分・線形代数を、必要なところだけ抜粋して解説しています。",
  },
];

type Track = {
  href: string;
  title: string;
  description: string;
  audience?: string;
  chip: string;
  emoji: string;
  accent: string;
};

const MAIN_TRACKS: Track[] = [
  {
    href: "/textbook/intro",
    title: "入門編",
    description:
      "サイト独自の超初心者向け教材。割合・グラフ・平均など算数レベルから統計に親しむ。",
    audience: "統計をこれから学ぶ方",
    chip: "Intro",
    emoji: "🌱",
    accent: "bg-emerald-400",
  },
  {
    href: "/textbook/grade-4",
    title: "4 級",
    description: "高校基礎レベル。データの代表値・確率・場合の数。",
    audience: "中高生・大人の入門",
    chip: "Grade 4",
    emoji: "🎒",
    accent: "bg-emerald-500",
  },
  {
    href: "/textbook/grade-3",
    title: "3 級",
    description:
      "大学基礎レベル。記述統計・確率分布・推定の基礎。Σ も登場。",
    audience: "大学生・社会人の足腰",
    chip: "Grade 3",
    emoji: "📘",
    accent: "bg-sky-500",
  },
  {
    href: "/textbook/grade-2",
    title: "2 級",
    description:
      "推定・検定・回帰など、データ分析実務でいちばんよく使う技法。",
    audience: "データ分析実務・研究志向",
    chip: "Grade 2",
    emoji: "📗",
    accent: "bg-sky-600",
  },
  {
    href: "/textbook/grade-pre1",
    title: "準 1 級",
    description: "多変量解析・ベイズ・時系列など、応用統計の幅広い手法。",
    audience: "データサイエンス・院試",
    chip: "Pre-1",
    emoji: "📕",
    accent: "bg-violet-500",
  },
  {
    href: "/textbook/grade-1",
    title: "1 級",
    description:
      "数理統計学の理論。十分統計量・最尤推定・漸近理論・尤度比検定。",
    audience: "研究職・上級分析者",
    chip: "Grade 1",
    emoji: "👑",
    accent: "bg-rose-500",
  },
];

const SUPPORT_TRACKS: Track[] = [
  {
    href: "/math/textbook",
    title: "数学基礎",
    description:
      "統計学に必要な数学(割合・Σ・対数・微積分・線形代数)を最小限で。",
    audience: "数式が苦手な学習者",
    chip: "Math",
    emoji: "📐",
    accent: "bg-teal-500",
  },
];

const CERT_TRACKS: Track[] = [
  {
    href: "/certs/ds-basic/textbook",
    title: "統計検定 DS基礎",
    description: "Excel を使った実データ分析が中心。統計学会主催。",
    audience: "Excel 派の分析担当",
    chip: "DS Base",
    emoji: "📊",
    accent: "bg-cyan-500",
  },
  {
    href: "/certs/survey/textbook",
    title: "統計調査士",
    description: "社会調査の設計・公的統計の読み方。統計学会主催。",
    audience: "行政・調査会社・公務員",
    chip: "Survey",
    emoji: "📋",
    accent: "bg-indigo-500",
  },
  {
    href: "/certs/survey-specialist/textbook",
    title: "専門統計調査士",
    description:
      "統計調査士の上位資格。標本設計の理論・公的統計の高度利用。",
    audience: "調査会社・公的統計機関",
    chip: "Survey+",
    emoji: "🗂",
    accent: "bg-indigo-600",
  },
  {
    href: "/certs/g-test/textbook",
    title: "G検定(JDLA)",
    description: "AI / ディープラーニングを事業に活かすための広範な知識。",
    audience: "AI 業界転職・概念把握",
    chip: "G Test",
    emoji: "🤖",
    accent: "bg-blue-500",
  },
  {
    href: "/certs/e-shikaku/textbook",
    title: "E資格(JDLA Engineer)",
    description:
      "G 検定の上位。DL の実装に必要な数学・モデル・最適化を網羅。",
    audience: "ML エンジニア・データサイエンティスト",
    chip: "E 資格",
    emoji: "⚙️",
    accent: "bg-blue-700",
  },
  {
    href: "/certs/ds-literacy/textbook",
    title: "データサイエンティスト検定",
    description: "DS 力 / DE 力 / ビジネス力の 3 軸を測るリテラシー検定。",
    audience: "データ職入門",
    chip: "DS Cert",
    emoji: "📈",
    accent: "bg-purple-500",
  },
  {
    href: "/certs/qc-kentei/textbook",
    title: "QC検定(品質管理検定)",
    description:
      "品質管理の考え方・管理図・QC 7 つ道具。製造業の必須教養。",
    audience: "製造業・改善推進",
    chip: "QC",
    emoji: "🏭",
    accent: "bg-amber-600",
  },
  {
    href: "/certs/genai-passport/textbook",
    title: "生成AIパスポート(GUGA)",
    description:
      "生成 AI を業務で安全 / 効果的に使うリテラシーを問う。LLM・プロンプト・倫理まで。",
    audience: "全職種・AI 活用初心者",
    chip: "GenAI",
    emoji: "✨",
    accent: "bg-pink-500",
  },
  {
    href: "/certs/ds-expert/textbook",
    title: "統計検定 DS エキスパート",
    description:
      "DS 系統計検定の最高峰。ベイズ・因果推論・MLOps まで含む実務型試験。",
    audience: "中堅 DS / 分析リード",
    chip: "DS Expert",
    emoji: "🧠",
    accent: "bg-emerald-600",
  },
  {
    href: "/certs/python-data/textbook",
    title: "Python データ分析試験",
    description:
      "PythonED 主催。NumPy / pandas / scikit-learn と機械学習基礎を問う登竜門。",
    audience: "Python 派の分析初学者",
    chip: "PyData",
    emoji: "🐍",
    accent: "bg-yellow-500",
  },
  {
    href: "/certs/ai-implementation/textbook",
    title: "AI 実装検定",
    description:
      "エッジ AI 協会主催、S/A/B 3 段階。PyTorch / Keras 実装を問う、G 検定と E 資格の中間。",
    audience: "AI エンジニア中堅",
    chip: "AIE",
    emoji: "🛠️",
    accent: "bg-rose-500",
  },
  {
    href: "/certs/image-processing/textbook",
    title: "画像処理エンジニア(エキスパート)",
    description:
      "CG-ARTS 主催。古典 CV(フィルタ/周波数)から DL(CNN/U-Net/YOLO)まで網羅。",
    audience: "画像 AI 専門家",
    chip: "ImageProc",
    emoji: "🎞️",
    accent: "bg-orange-600",
  },
  {
    href: "/certs/applied-info/textbook",
    title: "応用情報技術者試験(IPA)",
    description:
      "国家試験レベル 3。アルゴリズム/DB/AI/セキュリティ/PM/経営戦略を AI / データ重点で解説。",
    audience: "IT 中堅エンジニア",
    chip: "AP",
    emoji: "🏛️",
    accent: "bg-slate-600",
  },
  {
    href: "/certs/aws-ai-practitioner/textbook",
    title: "AWS Certified AI Practitioner",
    description:
      "AWS の AI / 生成 AI 認定 Foundational。Bedrock / SageMaker / 責任ある AI を網羅。",
    audience: "クラウド AI 入門",
    chip: "AWS AIF",
    emoji: "☁️",
    accent: "bg-amber-500",
  },
  {
    href: "/certs/basic-info/textbook",
    title: "基本情報技術者試験(IPA)",
    description:
      "国家試験レベル 2。通年 CBT で受験可能な IT エンジニアの登竜門。アルゴリズム + 情報セキュリティ重点。",
    audience: "IT エンジニア入門",
    chip: "FE",
    emoji: "🪪",
    accent: "bg-stone-600",
  },
  {
    href: "/certs/azure-ai-900/textbook",
    title: "Azure AI Fundamentals(AI-900)",
    description:
      "Microsoft 認定の AI 入門。Azure ML / OpenAI / Copilot ファミリ / 責任ある AI を網羅。",
    audience: "Azure AI 入門",
    chip: "AI-900",
    emoji: "🟦",
    accent: "bg-sky-600",
  },
  {
    href: "/certs/gcp-gen-ai-leader/textbook",
    title: "GCP Generative AI Leader",
    description:
      "Google Cloud 認定の生成 AI 入門。Vertex AI / Gemini / Workspace / Grounding / SynthID を網羅。",
    audience: "GCP AI 入門",
    chip: "GCP GAI",
    emoji: "🟢",
    accent: "bg-green-600",
  },
  {
    href: "/certs/db-specialist/textbook",
    title: "データベーススペシャリスト(DB)",
    description:
      "IPA レベル 4 高度試験。関係代数・正規化・SQL 上級・ACID・チューニング・NoSQL・DWH を網羅。",
    audience: "DBA / データエンジニア",
    chip: "DB",
    emoji: "🗄️",
    accent: "bg-zinc-700",
  },
  {
    href: "/certs/dx-kentei/textbook",
    title: "DX 検定",
    description:
      "ビジネス × IT のトレンドを総覧。AI / クラウド / IoT / 5G / RPA / セキュリティを広く問う経営層向けスコア型認定。",
    audience: "経営 ・ 企画 ・ コンサル",
    chip: "DX",
    emoji: "🔄",
    accent: "bg-fuchsia-600",
  },
  {
    href: "/certs/aws-saa/textbook",
    title: "AWS Solutions Architect Associate",
    description:
      "AWS Associate の代表認定。EC2 / S3 / VPC / IAM などを Well-Architected に沿って設計する力を測る。",
    audience: "クラウドエンジニア中堅",
    chip: "AWS SAA",
    emoji: "🏗️",
    accent: "bg-orange-500",
  },
  {
    href: "/certs/it-passport/textbook",
    title: "ITパスポート試験(IPA)",
    description:
      "国家試験レベル 1。社会人 ・ 学生の入門認定。3 分野(ストラテジ ・ マネジメント ・ テクノロジ)を網羅。",
    audience: "社会人 ・ 学生入門",
    chip: "iパス",
    emoji: "🎫",
    accent: "bg-teal-500",
  },
  {
    href: "/certs/power-bi/textbook",
    title: "Microsoft Power BI(PL-300)",
    description:
      "BI 系 Associate 認定。Power Query / DAX / 可視化 / Microsoft Fabric / Copilot を網羅。",
    audience: "BI 開発者 ・ アナリスト",
    chip: "PL-300",
    emoji: "📊",
    accent: "bg-yellow-600",
  },
  {
    href: "/certs/tableau-specialist/textbook",
    title: "Tableau Desktop Specialist",
    description:
      "Power BI と並ぶ BI 認定の双璧。Tableau の基本 ・ LOD ・ ダッシュボード ・ Analytics を網羅。",
    audience: "BI 開発者 ・ 欧米系志向",
    chip: "Tableau",
    emoji: "🌊",
    accent: "bg-blue-700",
  },
  {
    href: "/certs/azure-ai-102/textbook",
    title: "Microsoft Azure AI-102",
    description:
      "Azure AI Engineer Associate。AI-900 の上位、Azure OpenAI / AI Search / Foundry を実装する技術者向け。",
    audience: "Azure AI 開発者",
    chip: "AI-102",
    emoji: "🤖",
    accent: "bg-indigo-600",
  },
  {
    href: "/certs/aws-ml-engineer/textbook",
    title: "AWS ML Engineer Associate(MLA-C01)",
    description:
      "AI Practitioner の上位、SageMaker / Bedrock / MLOps の実装力を測る AWS ML 系 Associate 認定。",
    audience: "AWS AI/ML 開発者",
    chip: "MLA-C01",
    emoji: "🧪",
    accent: "bg-orange-700",
  },
  {
    href: "/certs/snowflake-snowpro/textbook",
    title: "Snowflake SnowPro Core",
    description:
      "クラウドデータプラットフォーム認定。Time Travel / Cloning / Data Sharing などモダン DWH 機能を網羅。",
    audience: "データエンジニア",
    chip: "SnowPro",
    emoji: "❄️",
    accent: "bg-cyan-600",
  },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      href={track.href}
      className="paper rounded-xl overflow-hidden hover:-translate-y-0.5 transition group block h-full flex flex-col"
    >
      <div className={`h-1 w-full ${track.accent}`} aria-hidden="true" />
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-2xl" aria-hidden="true">
            {track.emoji}
          </span>
          <span className="chip-soft text-[10px]">{track.chip}</span>
          {track.audience && (
            <span className="text-[10px] text-[var(--muted)] ui-sans ml-auto">
              {track.audience}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--link)]">
          {track.title}
        </h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed flex-1">
          {track.description}
        </p>
        <div className="mt-3 text-xs font-bold text-[var(--link)] ui-sans">
          教科書を読む →
        </div>
      </div>
    </Link>
  );
}

export default function TextbookIndexPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "教科書一覧", href: "/textbook" },
        ]}
      />
      <FaqJsonLd entries={FAQ.map((f) => ({ q: f.q, a: f.a }))} />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>教科書一覧</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Textbook Index</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          教科書一覧
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 入門編〜1 級、関連検定(DS基礎・統計調査士・G検定・DS検定)、学習サポートの数学基礎まで、本サイトに公開されている全教科書を一覧から選べます。「自分にちょうどいい級が分からない」という方は{" "}
          <Link href="/diagnose" className="text-[var(--link)] hover:underline">
            3 問の級診断
          </Link>{" "}
          や{" "}
          <Link href="/roadmap" className="text-[var(--link)] hover:underline">
            学習ロードマップ
          </Link>{" "}
          もお試しください。
        </p>
      </header>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">統計検定本体</div>
          <h2 className="text-2xl font-bold">入門編 〜 1 級</h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            日本統計学会が認定する統計検定の各級に対応した教科書。入門編はサイト独自の補助教材。
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MAIN_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">学習サポート</div>
          <h2 className="text-2xl font-bold">数学基礎</h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            統計学を学ぶうえで前提となる数学を、必要なところだけ抜粋した補助教材。
          </p>
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
          <h2 className="text-2xl font-bold">
            DS基礎 / 統計調査士 / G検定 / E資格 / DS検定 / QC検定 / 生成AIパスポート
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            統計検定 4〜1 級とは別系統の、データ・AI・調査・品質管理の各系統の資格。実務志向・調査志向・AI 概念から実装・データ全方位リテラシー・品質工学まで、目的に応じて選択。
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CERT_TRACKS.map((t) => (
            <TrackCard key={t.href} track={t} />
          ))}
        </div>
      </section>

      <SchoolPicks heading="独学に行き詰まったら ─ 提携スクールでサポート" />
    </article>
  );
}
