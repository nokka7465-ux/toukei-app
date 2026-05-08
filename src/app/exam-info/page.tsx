import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "統計検定 / G検定 / DS検定 受験情報 ─ 日程・受験料・合格率まとめ",
  description:
    "統計検定 4 級〜1 級、DS基礎、G検定、E資格、統計調査士、データサイエンティスト検定、QC検定、生成AIパスポートの受験時期・受験料・試験形式・合格率(参考値)・申込先を一覧で。",
  alternates: { canonical: "/exam-info" },
  openGraph: {
    title: "受験情報まとめ",
    description:
      "統計検定・関連検定の受験時期・受験料・合格率(参考値)を一覧でまとめました。",
    type: "website",
  },
};

type Exam = {
  id: string;
  title: string;
  organizer: string;
  format: string;
  schedule: string;
  duration: string;
  fee: string;
  passCriteria: string;
  passRate: string;
  takers: string;
  officialUrl: string;
  studyHref?: string;
  studyLabel?: string;
  highlight?: string;
};

const TOUKEI_EXAMS: Exam[] = [
  {
    id: "grade-4",
    title: "統計検定 4 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式(全国の試験会場でパソコン受験)",
    schedule: "通年(会場ごとに随時実施)",
    duration: "60 分 / 30 問程度(四肢択一)",
    fee: "一般 5,000 円 / 学割 3,500 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 60〜70%(回により変動)",
    takers: "年間およそ 2,000〜3,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade4/",
    studyHref: "/textbook/grade-4",
    studyLabel: "4 級の教科書を見る",
    highlight: "中学レベルの数学までで挑戦可能。統計の入口。",
  },
  {
    id: "grade-3",
    title: "統計検定 3 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "60 分 / 30 問程度(四肢択一)",
    fee: "一般 6,000 円 / 学割 4,000 円(参考)",
    passCriteria: "100 点満点中 65 点以上で合格(参考)",
    passRate: "おおむね 60〜70%",
    takers: "年間およそ 5,000〜7,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade3/",
    studyHref: "/textbook/grade-3",
    studyLabel: "3 級の教科書を見る",
    highlight: "高校データの活用レベル。データサイエンス入門にも。",
  },
  {
    id: "grade-2",
    title: "統計検定 2 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "90 分 / 35 問程度(五肢択一)",
    fee: "一般 7,000 円 / 学割 5,000 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 40〜50%",
    takers: "年間およそ 10,000 名以上(最も人気の級)",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade2/",
    studyHref: "/textbook/grade-2",
    studyLabel: "2 級の教科書を見る",
    highlight: "実務で使える統計の標準。データサイエンティストの登竜門。",
  },
  {
    id: "grade-pre1",
    title: "統計検定 準 1 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "90 分 / 25 問程度(選択 + 部分記述)",
    fee: "一般 8,000 円 / 学割 6,000 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 20〜25%(難関)",
    takers: "年間およそ 2,000〜3,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade-semi1/",
    studyHref: "/textbook/grade-pre1",
    studyLabel: "準 1 級の教科書を見る",
    highlight: "多変量・ベイズ・時系列など実務統計の総合力を問う。",
  },
  {
    id: "grade-1",
    title: "統計検定 1 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "PBT(紙ベース)方式・年 1 回",
    schedule: "毎年 11 月(年 1 回)",
    duration: "統計数理 90 分 + 統計応用 90 分(両方合格で 1 級認定)",
    fee: "1 科目 6,000 円 / 2 科目同時 10,000 円(参考)",
    passCriteria: "記述式・部分点あり。両科目で合格水準到達が必要(参考)",
    passRate: "おおむね 20〜25%(科目別)",
    takers: "年間およそ 1,500〜2,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade1/",
    studyHref: "/textbook/grade-1",
    studyLabel: "1 級の教科書を見る",
    highlight: "数理統計学の最高峰。研究者・専門職向け。",
  },
];

const RELATED_EXAMS: Exam[] = [
  {
    id: "ds-basic",
    title: "統計検定 データサイエンス基礎(DS基礎)",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式(Excel を用いた実技形式)",
    schedule: "通年",
    duration: "90 分 / 大問 5 題程度",
    fee: "一般 7,000 円 / 学割 5,000 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 50〜60%",
    takers: "年間およそ 1,000〜2,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/ds-base/",
    studyHref: "/certs/ds-basic",
    studyLabel: "DS基礎の教科書を見る",
    highlight: "Excel での実データ分析力を問う実技試験。",
  },
  {
    id: "survey",
    title: "統計調査士",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "60 分 / 30 問程度",
    fee: "一般 7,000 円 / 学割 5,000 円(参考)",
    passCriteria: "100 点満点中 70 点以上で合格(参考)",
    passRate: "おおむね 50〜60%",
    takers: "年間およそ 500〜1,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/toukei-chosashi/",
    studyHref: "/certs/survey",
    studyLabel: "統計調査士の教科書を見る",
    highlight: "公的統計・統計法・標本調査法など調査実務の知識。",
  },
  {
    id: "g-test",
    title: "G 検定(JDLA Deep Learning for GENERAL)",
    organizer: "日本ディープラーニング協会(JDLA)",
    format: "オンライン(自宅 PC からオープンブック受験)",
    schedule: "年 5〜6 回(主に 1 月・3 月・5 月・7 月・9 月・11 月)",
    duration: "120 分 / 約 200 問(多肢選択)",
    fee: "一般 13,200 円 / 学生 5,500 円(税込・参考)",
    passCriteria: "公式に明示なし。各回ごとに合否判定(参考)",
    passRate: "おおむね 60〜70%",
    takers: "1 回あたり 5,000〜10,000 名規模(累計 10 万人超)",
    officialUrl: "https://www.jdla.org/certificate/general/",
    studyHref: "/certs/g-test",
    studyLabel: "G 検定の教科書を見る",
    highlight: "AI / ディープラーニングのビジネス活用知識。最大規模の AI 検定。",
  },
  {
    id: "ds-literacy",
    title: "データサイエンティスト検定 リテラシーレベル(DS 検定)",
    organizer: "データサイエンティスト協会",
    format: "CBT 方式",
    schedule: "年 2〜3 回(春・夏・冬)",
    duration: "100 分 / 90 問程度(多肢選択)",
    fee: "一般 11,000 円 / 学割 5,500 円(税込・参考)",
    passCriteria: "公式に明示なし(おおむね 8 割が目安・参考)",
    passRate: "おおむね 50%前後",
    takers: "年間およそ 5,000 名以上",
    officialUrl: "https://www.datascientist.or.jp/dskentei/",
    studyHref: "/certs/ds-literacy",
    studyLabel: "DS 検定の教科書を見る",
    highlight: "データサイエンス力 / データエンジニアリング力 / ビジネス力の 3 軸。",
  },
  {
    id: "e-shikaku",
    title: "E 資格(JDLA Engineer)",
    organizer: "日本ディープラーニング協会(JDLA)",
    format: "CBT 方式(全国の試験会場でパソコン受験)",
    schedule: "年 2 回(主に 2 月・8 月)",
    duration: "120 分 / 約 100 問(多肢選択)",
    fee: "一般 33,000 円 / 学生 22,000 円(税込・参考、認定プログラム費用は別途)",
    passCriteria: "公式に明示なし。各回ごとに合否判定(参考)",
    passRate: "おおむね 60〜70%(難関)",
    takers: "1 回あたり 1,000〜2,000 名規模",
    officialUrl: "https://www.jdla.org/certificate/engineer/",
    studyHref: "/certs/e-shikaku",
    studyLabel: "E資格の教科書を見る",
    highlight:
      "DL を実装するエンジニアの認定。受験には JDLA 認定プログラム修了が必須。",
  },
  {
    id: "qc-kentei",
    title: "QC 検定(品質管理検定)",
    organizer: "日本科学技術連盟・日本規格協会(JSA)",
    format: "PBT(マークシート + 一部論述)方式",
    schedule: "年 2 回(3 月・9 月)",
    duration: "90 分(2 級・3 級。級により異なる)",
    fee:
      "4 級 3,300 円 / 3 級 5,500 円 / 2 級 6,600 円 / 準 1 級 8,800 円 / 1 級 11,000 円(税込・参考)",
    passCriteria: "総合 70 点以上、各分野 50 点以上(参考)",
    passRate: "3 級 50% 前後 / 2 級 25% 前後 / 1 級 5〜10%",
    takers: "年間およそ 10 万人以上(全級合計)",
    officialUrl: "https://www.jsa.or.jp/kentei/qc/",
    studyHref: "/certs/qc-kentei",
    studyLabel: "QC検定の教科書を見る",
    highlight:
      "製造業の必須資格。1 〜 4 級の段階で実務経験に応じて取得。",
  },
  {
    id: "survey-specialist",
    title: "専門統計調査士",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "90 分 / 40 問程度",
    fee: "一般 10,000 円 / 学割 6,000 円(参考)",
    passCriteria: "100 点満点中 70 点以上で合格(参考)",
    passRate: "おおむね 30〜40%",
    takers: "年間およそ 200〜400 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/senmon-toukei-chosashi/",
    studyHref: "/certs/survey-specialist",
    studyLabel: "専門統計調査士の教科書を見る",
    highlight:
      "統計調査士の上位資格。標本設計の理論・公的統計の高度利用。",
  },
  {
    id: "genai-passport",
    title: "生成AIパスポート検定",
    organizer: "GUGA(一般社団法人 生成AI活用普及協会)",
    format: "オンライン IBT 方式(自宅 / 会社で受験可)",
    schedule: "年 3 〜 4 回(2 月・6 月・10 月など)",
    duration: "60 分 / 60 問(4 択選択式)",
    fee: "一般 11,000 円 / 学割 5,500 円(税込・参考)",
    passCriteria: "正答率 70% 程度(参考)",
    passRate: "おおむね 70 〜 80%",
    takers: "1 回あたり数千名規模",
    officialUrl: "https://guga.or.jp/outline/",
    studyHref: "/certs/genai-passport",
    studyLabel: "生成AIパスポートの教科書を見る",
    highlight:
      "生成 AI を業務で安全 / 効果的に使うリテラシーを問う、全職種向けの入門検定。30 〜 50 時間で取得可能。",
  },
  {
    id: "ds-expert",
    title: "統計検定 DS エキスパート",
    organizer: "日本統計学会",
    format: "CBT 方式(全国の試験会場で随時)",
    schedule: "通年",
    duration: "90 分 / 約 40 問",
    fee: "一般 10,000 円 / 学割 6,000 円(税込・参考)",
    passCriteria: "おおむね 100 点満点中 60 点以上(参考)",
    passRate: "おおむね 30 〜 40%",
    takers: "1 回あたり数百名規模",
    officialUrl: "https://www.toukei-kentei.jp/exam/ds-expert/",
    studyHref: "/certs/ds-expert",
    studyLabel: "DS エキスパートの教科書を見る",
    highlight:
      "DS 系統計検定の最高峰。ベイズ ・ 因果推論 ・ MLOps まで含む実務型試験。",
  },
  {
    id: "python-data",
    title: "Python 3 エンジニア認定 データ分析試験",
    organizer: "PythonED(Python エンジニア育成推進協会)",
    format: "CBT 方式(全国の試験会場で随時)",
    schedule: "通年",
    duration: "60 分 / 40 問(4 択選択式)",
    fee: "一般 11,000 円 / 学割 5,500 円(税込・参考)",
    passCriteria: "正答率 70% 以上(28 問以上正解)",
    passRate: "おおむね 80% 前後",
    takers: "年間およそ 4,000〜6,000 名",
    officialUrl: "https://www.pythonic-exam.com/exam/analyst",
    studyHref: "/certs/python-data",
    studyLabel: "Python データ分析の教科書を見る",
    highlight:
      "NumPy / pandas / Matplotlib / scikit-learn と機械学習の基礎を測る、データ分析の登竜門。",
  },
  {
    id: "ai-implementation",
    title: "AI 実装検定",
    organizer: "一般社団法人 エッジ AI 協会",
    format: "オンライン IBT 方式",
    schedule: "通年(複数回 / 年)",
    duration: "60 分 / 60 問(A 級・参考)",
    fee: "A 級 14,850 円 / B 級 9,900 円(税込・参考)",
    passCriteria: "おおむね 70%(A 級・参考)",
    passRate: "A 級 60〜70% 前後",
    takers: "1 回あたり数百〜千名規模",
    officialUrl: "https://kentei.ai/",
    studyHref: "/certs/ai-implementation",
    studyLabel: "AI 実装検定の教科書を見る",
    highlight:
      "AI のコードを書く現場の力を測る検定。S/A/B 3 段階、認定講座不要で独学可能。G 検定と E 資格の中間に位置。",
  },
  {
    id: "image-processing",
    title: "画像処理エンジニア検定 エキスパート",
    organizer: "公益財団法人 CG-ARTS 協会",
    format: "マークシート方式(会場試験)",
    schedule: "年 2 回(7 月・11 月頃)",
    duration: "80 分 / 計算 ・ 記述含む選択式",
    fee: "6,800 円(税込・参考)",
    passCriteria: "70 点以上(参考)",
    passRate: "おおむね 30〜40%",
    takers: "1 回あたり数百名規模",
    officialUrl: "https://www.cgarts.or.jp/kentei/",
    studyHref: "/certs/image-processing",
    studyLabel: "画像処理エンジニア検定の教科書を見る",
    highlight:
      "画像処理 ・ コンピュータビジョンの専門性を測る検定。古典 CV から DL ベース CV まで広範に出題。",
  },
  {
    id: "applied-info",
    title: "応用情報技術者試験",
    organizer: "情報処理推進機構(IPA)",
    format: "筆記試験(マークシート + 記述)",
    schedule: "年 2 回(4 月・10 月)",
    duration: "午前 80 問 / 150 分 + 午後 11 問中 5 問選択 / 150 分",
    fee: "7,500 円(税込)",
    passCriteria: "午前 ・ 午後ともに 60 点以上",
    passRate: "約 23 〜 26%",
    takers: "1 回あたり 30,000 〜 40,000 名",
    officialUrl: "https://www.ipa.go.jp/shiken/kubun/ap.html",
    studyHref: "/certs/applied-info",
    studyLabel: "応用情報の教科書を見る",
    highlight:
      "国家試験レベル 3。高度試験(レベル 4)の登竜門で、SI 系企業 ・ 金融 ・ 公官庁での評価が高い。",
  },
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner(AIF-C01)",
    organizer: "Amazon Web Services(AWS)",
    format: "CBT(Pearson VUE)or オンライン監督受験",
    schedule: "通年(随時)",
    duration: "90 分 / 65 問(選択式)",
    fee: "100 USD(参考)",
    passCriteria: "1000 点満点中 700 点(参考)",
    passRate: "AWS 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
    studyHref: "/certs/aws-ai-practitioner",
    studyLabel: "AWS AI Practitioner の教科書を見る",
    highlight:
      "AWS の AI / 生成 AI 認定 Foundational レベル。Bedrock / SageMaker / 責任ある AI を測る。",
  },
  {
    id: "basic-info",
    title: "基本情報技術者試験(FE)",
    organizer: "情報処理推進機構(IPA)",
    format: "CBT(通年)",
    schedule: "通年(随時)",
    duration: "科目 A 60 問 / 90 分 + 科目 B 20 問 / 100 分",
    fee: "7,500 円(税込)",
    passCriteria: "科目 A ・ B ともに 600 / 1000 点以上",
    passRate: "約 25 〜 35%",
    takers: "年間およそ 10 万人超",
    officialUrl: "https://www.ipa.go.jp/shiken/kubun/fe.html",
    studyHref: "/certs/basic-info",
    studyLabel: "基本情報の教科書を見る",
    highlight:
      "国家試験レベル 2。IT エンジニアの登竜門で、新卒 IT 採用 ・ 中途エンジニア転職の最低ラインとして広く認知。",
  },
  {
    id: "azure-ai-900",
    title: "Microsoft Azure AI Fundamentals(AI-900)",
    organizer: "Microsoft",
    format: "CBT(Pearson VUE)or オンライン監督受験",
    schedule: "通年(随時)",
    duration: "60 分 / 約 40 〜 60 問",
    fee: "約 12,500 円(99 USD、参考)",
    passCriteria: "1000 点満点中 700 点(参考)",
    passRate: "Microsoft 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://learn.microsoft.com/ja-jp/credentials/certifications/azure-ai-fundamentals/",
    studyHref: "/certs/azure-ai-900",
    studyLabel: "Azure AI-900 の教科書を見る",
    highlight:
      "Microsoft 認定の AI Fundamentals。Azure ML ・ AI Vision ・ AI Language ・ Azure OpenAI ・ Copilot を測る。**有効期限なし**。",
  },
  {
    id: "gcp-gen-ai-leader",
    title: "Google Cloud Generative AI Leader",
    organizer: "Google Cloud",
    format: "オンライン監督受験 or テストセンター",
    schedule: "通年(随時)",
    duration: "90 分 / 50 〜 60 問",
    fee: "99 USD(参考)",
    passCriteria: "公開なし(参考: 70%)",
    passRate: "Google 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://cloud.google.com/learn/certification/generative-ai-leader",
    studyHref: "/certs/gcp-gen-ai-leader",
    studyLabel: "GCP Gen AI Leader の教科書を見る",
    highlight:
      "Google Cloud 認定の生成 AI Foundational。Vertex AI / Gemini / Workspace / Grounding を測る三大クラウド AI 入門の 1 つ。",
  },
  {
    id: "db-specialist",
    title: "データベーススペシャリスト試験(DB)",
    organizer: "情報処理推進機構(IPA)",
    format: "筆記試験(マークシート + 記述 + 論述)",
    schedule: "年 1 回(秋、10 月)",
    duration: "午前 I 50 分 + 午前 II 40 分 + 午後 I 90 分 + 午後 II 120 分",
    fee: "7,500 円(税込)",
    passCriteria: "各段階で 60 点以上",
    passRate: "約 17 〜 18%",
    takers: "1 回あたり数千名規模",
    officialUrl: "https://www.ipa.go.jp/shiken/kubun/db.html",
    studyHref: "/certs/db-specialist",
    studyLabel: "DB スペシャリストの教科書を見る",
    highlight:
      "IPA レベル 4 高度試験。DB ・ データ基盤の専門家認定。金融 ・ 公官庁 ・ 大手 SI で評価が特に高い国家資格。",
  },
  {
    id: "dx-kentei",
    title: "DX 検定",
    organizer: "一般社団法人 日本イノベーション融合学会",
    format: "オンライン IBT",
    schedule: "年 2 回(7 月・1 月)",
    duration: "60 分 / 120 問(参考)",
    fee: "11,000 円(税込・参考)",
    passCriteria: "800 点以上 = エキスパート / 700 点以上 = プロフェッショナル / 600 点以上 = スタンダード",
    passRate: "公開なし",
    takers: "1 回あたり数千名規模",
    officialUrl: "https://www.dx-kentei.com/",
    studyHref: "/certs/dx-kentei",
    studyLabel: "DX 検定の教科書を見る",
    highlight:
      "ビジネス × IT のトレンドを総覧するスコア型認定。経営 ・ 企画 ・ コンサルタント向け。",
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect ─ Associate(SAA-C03)",
    organizer: "Amazon Web Services(AWS)",
    format: "CBT(Pearson VUE)or オンライン監督受験",
    schedule: "通年(随時)",
    duration: "130 分 / 65 問",
    fee: "150 USD(参考)",
    passCriteria: "1000 点満点中 720 点",
    passRate: "AWS 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    studyHref: "/certs/aws-saa",
    studyLabel: "AWS SAA の教科書を見る",
    highlight:
      "AWS 認定の Associate レベルで最も人気の高いアーキテクト系資格。AWS で仕事をする技術者の標準資格。",
  },
  {
    id: "it-passport",
    title: "ITパスポート試験(iパス)",
    organizer: "情報処理推進機構(IPA)",
    format: "オンライン CBT(マウス操作のみ)",
    schedule: "通年(随時)",
    duration: "120 分 / 100 問",
    fee: "7,500 円(税込)",
    passCriteria: "総合 600 / 1000 + 各分野評価点 300 点以上",
    passRate: "約 50%",
    takers: "年間およそ 20 万人超",
    officialUrl: "https://www3.jitec.ipa.go.jp/JitesCbt/index.html",
    studyHref: "/certs/it-passport",
    studyLabel: "ITパスポートの教科書を見る",
    highlight:
      "国家試験レベル 1。社会人 ・ 学生の入門認定で、新卒採用 ・ 中途採用 ・ 社内 IT リテラシー研修で広く活用される。",
  },
  {
    id: "power-bi",
    title: "Microsoft Power BI Data Analyst Associate(PL-300)",
    organizer: "Microsoft",
    format: "CBT(Pearson VUE)or オンライン監督受験",
    schedule: "通年(随時)",
    duration: "120 分 / 約 40 〜 60 問",
    fee: "約 21,000 円(165 USD、参考)",
    passCriteria: "1000 点満点中 700 点",
    passRate: "Microsoft 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://learn.microsoft.com/ja-jp/credentials/certifications/data-analyst-associate/",
    studyHref: "/certs/power-bi",
    studyLabel: "Power BI(PL-300)の教科書を見る",
    highlight:
      "BI 系 Associate 認定の代表格。Power Query / DAX / Microsoft Fabric / Copilot を測る実機操作型試験。",
  },
  {
    id: "tableau-specialist",
    title: "Tableau Desktop Specialist",
    organizer: "Salesforce(Tableau)",
    format: "オンライン監督受験",
    schedule: "通年(随時)",
    duration: "60 分 / 45 問",
    fee: "100 USD(参考)",
    passCriteria: "約 75%(参考)",
    passRate: "Tableau 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://www.tableau.com/learn/certification/desktop-specialist",
    studyHref: "/certs/tableau-specialist",
    studyLabel: "Tableau Desktop Specialist の教科書を見る",
    highlight:
      "BI 系認定の双璧。Power BI と並ぶ実機操作型試験で、有効期限なし(永続)が特徴。",
  },
  {
    id: "azure-ai-102",
    title: "Microsoft Azure AI Engineer Associate(AI-102)",
    organizer: "Microsoft",
    format: "CBT(Pearson VUE)or オンライン監督受験",
    schedule: "通年(随時)",
    duration: "100 分 / 約 40 〜 60 問",
    fee: "約 21,000 円(165 USD、参考)",
    passCriteria: "1000 点満点中 700 点",
    passRate: "Microsoft 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://learn.microsoft.com/ja-jp/credentials/certifications/azure-ai-engineer/",
    studyHref: "/certs/azure-ai-102",
    studyLabel: "Azure AI-102 の教科書を見る",
    highlight:
      "AI-900 の上位、Azure AI を実装する技術者向け。Python / C# によるコード実装力を測る。",
  },
  {
    id: "aws-ml-engineer",
    title: "AWS Certified Machine Learning Engineer Associate(MLA-C01)",
    organizer: "Amazon Web Services(AWS)",
    format: "CBT(Pearson VUE)or オンライン監督受験",
    schedule: "通年(随時)",
    duration: "130 分 / 65 問",
    fee: "150 USD(参考)",
    passCriteria: "1000 点満点中 720 点",
    passRate: "AWS 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    studyHref: "/certs/aws-ml-engineer",
    studyLabel: "AWS MLA-C01 の教科書を見る",
    highlight:
      "2024 年正式リリース、AI Practitioner の上位。SageMaker / Bedrock / MLOps の実装力を測る。",
  },
  {
    id: "snowflake-snowpro",
    title: "Snowflake SnowPro Core(COF-C02)",
    organizer: "Snowflake",
    format: "オンライン監督受験(Pearson VUE)or テストセンター",
    schedule: "通年(随時)",
    duration: "115 分 / 100 問",
    fee: "175 USD(参考)",
    passCriteria: "1000 点満点中 750 点",
    passRate: "Snowflake 非公開",
    takers: "全世界で大規模",
    officialUrl: "https://www.snowflake.com/certifications/",
    studyHref: "/certs/snowflake-snowpro",
    studyLabel: "Snowflake SnowPro Core の教科書を見る",
    highlight:
      "クラウドデータプラットフォームの基礎認定。Time Travel / Cloning / Data Sharing などモダン DWH 機能を網羅。",
  },
];

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <article
      id={exam.id}
      className="paper rounded-lg p-6 scroll-mt-20"
    >
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-xl font-bold mb-1 tracking-wide">{exam.title}</h3>
        {exam.highlight && (
          <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
            {exam.highlight}
          </p>
        )}
      </header>

      <dl className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-4 gap-y-3 text-sm ui-sans">
        <dt className="text-[var(--muted)] font-bold">主催</dt>
        <dd>{exam.organizer}</dd>

        <dt className="text-[var(--muted)] font-bold">受験形式</dt>
        <dd>{exam.format}</dd>

        <dt className="text-[var(--muted)] font-bold">実施時期</dt>
        <dd>{exam.schedule}</dd>

        <dt className="text-[var(--muted)] font-bold">試験時間 / 問題数</dt>
        <dd>{exam.duration}</dd>

        <dt className="text-[var(--muted)] font-bold">受験料</dt>
        <dd>{exam.fee}</dd>

        <dt className="text-[var(--muted)] font-bold">合格基準</dt>
        <dd>{exam.passCriteria}</dd>

        <dt className="text-[var(--muted)] font-bold">合格率(参考)</dt>
        <dd>{exam.passRate}</dd>

        <dt className="text-[var(--muted)] font-bold">受験者数(参考)</dt>
        <dd>{exam.takers}</dd>
      </dl>

      <div className="mt-5 pt-4 border-t border-[var(--page-border)] flex flex-wrap gap-3 text-sm ui-sans">
        <a
          href={exam.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--link)] hover:underline"
        >
          公式サイト(申込・最新情報) ↗
        </a>
        {exam.studyHref && exam.studyLabel && (
          <Link
            href={exam.studyHref}
            className="text-[var(--link)] hover:underline"
          >
            {exam.studyLabel} →
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ExamInfoPage() {
  const allExams = [...TOUKEI_EXAMS, ...RELATED_EXAMS];

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "受験情報まとめ", href: "/exam-info" },
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
        <span>受験情報まとめ</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Exam Info</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          受験情報まとめ
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定(4 級〜1 級)と関連検定(DS基礎・統計調査士・G 検定・DS 検定)の{" "}
          <strong>受験時期・受験料・試験形式・合格率の目安</strong>{" "}
          をまとめました。学習目標を「合格」に置くと、勉強のモチベーションが大きく変わります。
        </p>
        <div className="mt-4 def-box text-sm leading-relaxed">
          <strong>注意:</strong>{" "}
          受験料・実施時期・問題数・合格基準などは{" "}
          <strong>変更されることがあります</strong>。本ページの数値は{" "}
          <strong>参考値</strong>{" "}
          であり、申込の前に必ず各検定の公式サイトで最新情報を確認してください。
        </div>
      </header>

      <section className="mb-10">
        <header className="mb-4">
          <div className="chapter-eyebrow mb-1">Quick Index</div>
          <h2 className="text-xl font-bold">目次</h2>
        </header>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ui-sans">
          {allExams.map((e) => (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                className="text-[var(--link)] hover:underline"
              >
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">統計検定(本体)</div>
          <h2 className="text-2xl font-bold">統計検定 4 級 〜 1 級</h2>
          <p className="text-sm text-[var(--muted-strong)] mt-2 leading-relaxed">
            4〜準 1 級は CBT 方式で通年受験可能、1 級のみ年 1 回(11
            月)の紙試験です。
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5">
          {TOUKEI_EXAMS.map((e) => (
            <ExamCard key={e.id} exam={e} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">関連検定</div>
          <h2 className="text-2xl font-bold">DS基礎 / 統計調査士 / G 検定 / DS 検定</h2>
          <p className="text-sm text-[var(--muted-strong)] mt-2 leading-relaxed">
            統計検定の派生・関連分野の検定。データサイエンスや AI
            のキャリアにつながります。
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5">
          {RELATED_EXAMS.map((e) => (
            <ExamCard key={e.id} exam={e} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">学習開始</div>
          <h2 className="text-2xl font-bold">どの級から始めるか</h2>
        </header>
        <div className="paper rounded-lg p-6 space-y-4 text-sm leading-relaxed">
          <p>
            「自分はどの級を目指すべきか」迷ったら、まずは{" "}
            <Link href="/diagnose" className="text-[var(--link)] hover:underline">
              級診断(5 問の簡易チェック)
            </Link>{" "}
            か{" "}
            <Link href="/roadmap" className="text-[var(--link)] hover:underline">
              学習ロードマップ
            </Link>{" "}
            から始めるのがおすすめです。
          </p>
          <p>
            まったくの初心者の方は{" "}
            <Link href="/textbook/intro" className="text-[var(--link)] hover:underline">
              入門編(算数レベルから)
            </Link>{" "}
            、数学に不安があれば{" "}
            <Link href="/math" className="text-[var(--link)] hover:underline">
              数学基礎トラック
            </Link>{" "}
            から始めましょう。
          </p>
          <p>
            学習を進めるなら、級別教科書 →{" "}
            <Link href="/quiz" className="text-[var(--link)] hover:underline">
              演習問題(1 問 1 答 + 解説)
            </Link>{" "}
            →{" "}
            <Link href="/cheatsheet" className="text-[var(--link)] hover:underline">
              公式チートシート(印刷可)
            </Link>{" "}
            の順がスムーズです。
          </p>
        </div>
      </section>

      <section className="text-xs text-[var(--muted)] ui-sans leading-relaxed border-t border-[var(--page-border)] pt-6">
        <p>
          ※ 本ページの記載内容(受験料・実施時期・合格率・受験者数など)は、各検定の公式発表や過去の公表値をもとにした{" "}
          <strong>参考情報</strong>{" "}
          です。最新かつ正確な情報は、各検定の公式サイトをご確認ください。誤りを見つけた場合は{" "}
          <Link href="/contact" className="text-[var(--link)] hover:underline">
            お問い合わせ
          </Link>{" "}
          からご連絡いただけると幸いです。
        </p>
      </section>
    </article>
  );
}
