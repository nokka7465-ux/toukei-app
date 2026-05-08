import type { Question } from "@/types/content";

export const powerBiQuestions: Question[] = [
  {
    id: "pbi-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Microsoft Power BI Data Analyst Associate(PL-300)の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Fundamentals",
      "Associate",
      "Expert",
      "Specialty",
    ],
    correctIndex: 1,
    explanation:
      "PL-300 は **Associate レベル**。Fundamentals(AI-900 / DP-900 等)の上位、Expert(DP-203 等)の前段。データアナリスト向けの中堅認定。",
  },
  {
    id: "pbi-q2",
    category: "アーキテクチャ",
    difficulty: 2,
    question:
      "Power BI でレポート作成の中心となる **無料の開発用 Windows アプリ** として最も適切なものを選びなさい。",
    choices: [
      "Power BI Service",
      "Power BI Desktop",
      "Power BI Mobile",
      "Power BI Embedded",
    ],
    correctIndex: 1,
    explanation:
      "**Power BI Desktop** は無料の Windows アプリで、レポート作成 ・ DAX ・ Power Query の中心。Service はクラウド共有(app.powerbi.com)、Mobile は閲覧用、Embedded はアプリ組込み。",
  },
  {
    id: "pbi-q3",
    category: "接続モード",
    difficulty: 3,
    question:
      "クエリの度にデータソースに問合せる接続モードとして最も適切なものを選びなさい。",
    choices: [
      "Import",
      "DirectQuery",
      "Live Connection",
      "Composite",
    ],
    correctIndex: 1,
    explanation:
      "**DirectQuery** はクエリの度にソースへ問合せる方式。常に最新だが性能注意。**Import** はデータを Power BI に取込む(高速、容量制限)、Live は SSAS / AAS への接続。",
  },
  {
    id: "pbi-q4",
    category: "Power Query",
    difficulty: 2,
    question:
      "Power Query で **横長テーブルを縦長に変換する** 操作の名称として最も適切なものを選びなさい。",
    choices: [
      "ピボット(Pivot)",
      "アンピボット(Unpivot)",
      "マージ(Merge)",
      "アペンド(Append)",
    ],
    correctIndex: 1,
    explanation:
      "**アンピボット(Unpivot)** は横長(列が値)→ 縦長(行が値)変換。tidy data 形式に整える基本操作。Pivot は逆。Merge は JOIN、Append は UNION 相当。",
  },
  {
    id: "pbi-q5",
    category: "M 言語",
    difficulty: 3,
    question:
      "Power Query 内部で使われる関数型言語として最も適切なものを選びなさい。",
    choices: [
      "DAX",
      "M 言語(Power Query Formula Language)",
      "T-SQL",
      "MDX",
    ],
    correctIndex: 1,
    explanation:
      "**M 言語** が Power Query の内部言語。DAX はデータモデリング ・ 計算列 ・ メジャー用、T-SQL は SQL Server、MDX は SSAS Multidimensional 用。",
  },
  {
    id: "pbi-q6",
    category: "モデリング",
    difficulty: 2,
    question:
      "Power BI で **推奨される** データモデル設計として最も適切なものを選びなさい。",
    choices: [
      "1 つの巨大なフラットテーブル",
      "スタースキーマ(Fact + Dimension)",
      "完全な BCNF まで正規化",
      "ハッシュテーブル",
    ],
    correctIndex: 1,
    explanation:
      "**スタースキーマ**(中心 = ファクト、周辺 = ディメンション)が Power BI の推奨設計。性能 ・ 可読性 ・ DAX 書きやすさのすべてで有利。",
  },
  {
    id: "pbi-q7",
    category: "リレーション",
    difficulty: 2,
    question:
      "Power BI でディメンションテーブルとファクトテーブル間の標準的なリレーションのカーディナリティとして最も適切なものを選びなさい。",
    choices: [
      "1:1(One-to-One)",
      "1:多(One-to-Many)",
      "多:多(Many-to-Many)",
      "リレーションなし",
    ],
    correctIndex: 1,
    explanation:
      "**1:多** が標準。ディメンション(1 側)→ ファクト(多 側)の方向。多:多 は必要時のみ ・ ブリッジテーブルが推奨される。",
  },
  {
    id: "pbi-q8",
    category: "DAX",
    difficulty: 2,
    question:
      "Power BI で **集計値(KPI / メトリクス)** を実装する際に推奨される手段として最も適切なものを選びなさい。",
    choices: [
      "計算列(Calculated Column)",
      "メジャー(Measure)",
      "Excel に書き出して計算",
      "外部 API を呼出す",
    ],
    correctIndex: 1,
    explanation:
      "**メジャー** はフィルタ文脈に応じて再計算され、メモリも消費しないため、KPI 実装の標準。計算列は行に紐づくフラグ ・ カテゴリで使う。",
  },
  {
    id: "pbi-q9",
    category: "DAX",
    difficulty: 3,
    question:
      "DAX でフィルタ文脈を変更する **最も重要な関数** として最も適切なものを選びなさい。",
    choices: [
      "SUM",
      "FILTER",
      "CALCULATE",
      "RELATED",
    ],
    correctIndex: 2,
    explanation:
      "**CALCULATE** は唯一フィルタ文脈を変更できる関数。前年比 ・ 累計 ・ 条件付き集計などほぼすべての高度な計算で使う、DAX 学習の中核。",
  },
  {
    id: "pbi-q10",
    category: "DAX",
    difficulty: 3,
    question:
      "前年同期の値を計算するのに最も適切な DAX の Time Intelligence 関数を選びなさい。",
    choices: [
      "SAMEPERIODLASTYEAR",
      "TOTALYTD",
      "DISTINCTCOUNT",
      "USERELATIONSHIP",
    ],
    correctIndex: 0,
    explanation:
      "**SAMEPERIODLASTYEAR** が前年同期。`CALCULATE([Sales], SAMEPERIODLASTYEAR('Date'[Date]))` のように使う。Time Intelligence は **Date テーブル + Mark as date table** が前提。",
  },
  {
    id: "pbi-q11",
    category: "ビジュアル",
    difficulty: 2,
    question:
      "自然言語で『今月の売上トップ 5 製品は?』のような質問に答えるビジュアルとして最も適切なものを選びなさい。",
    choices: [
      "棒グラフ",
      "Q&A ビジュアル",
      "テーブル",
      "ゲージ",
    ],
    correctIndex: 1,
    explanation:
      "**Q&A ビジュアル** は自然言語クエリに応答する。背後で AI が DAX に変換してビジュアルを生成。Smart Narrative や Copilot と並ぶ Power BI の AI 機能。",
  },
  {
    id: "pbi-q12",
    category: "AI ビジュアル",
    difficulty: 3,
    question:
      "ある KPI を増減させる **影響要因** を機械学習で自動分析するビジュアルとして最も適切なものを選びなさい。",
    choices: [
      "Decomposition Tree",
      "Key Influencers",
      "Smart Narrative",
      "Q&A",
    ],
    correctIndex: 1,
    explanation:
      "**Key Influencers** はターゲット指標を増減させる影響要因を自動分析する AI ビジュアル(裏で機械学習)。Decomposition Tree は階層的な分解、Smart Narrative はテキスト生成。",
  },
  {
    id: "pbi-q13",
    category: "ビジュアル",
    difficulty: 2,
    question:
      "**ホバー時に詳細を別ページとして表示する** Power BI の機能として最も適切なものを選びなさい。",
    choices: [
      "ブックマーク",
      "ツールチップページ",
      "ドリルスルー",
      "選択ペイン",
    ],
    correctIndex: 1,
    explanation:
      "**ツールチップページ** は別ページをツールチップとして表示する機能。視覚的に詳細情報を提供できる。ドリルスルーはクリックで遷移する詳細ページ。",
  },
  {
    id: "pbi-q14",
    category: "サービス",
    difficulty: 2,
    question:
      "**クラウドからオンプレミスのデータベース** へ安全に接続するための Power BI コンポーネントとして最も適切なものを選びなさい。",
    choices: [
      "Power BI Service",
      "Power BI Mobile",
      "On-premises Data Gateway",
      "Power BI Embedded",
    ],
    correctIndex: 2,
    explanation:
      "**On-premises Data Gateway** はクラウド Power BI Service からオンプレ DB へ安全に接続するためのブリッジコンポーネント。",
  },
  {
    id: "pbi-q15",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "Power BI で **行単位** に表示制御するセキュリティ機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Row-Level Security(RLS)",
      "Object-Level Security(OLS)",
      "Sensitivity Labels",
      "Workspace Roles",
    ],
    correctIndex: 0,
    explanation:
      "**RLS(Row-Level Security)** は行単位のアクセス制御(例: 営業担当は自分の顧客のみ表示)。**OLS** は列 ・ テーブル単位、Sensitivity Labels は機密ラベル。",
  },
  {
    id: "pbi-q16",
    category: "ライセンス",
    difficulty: 2,
    question:
      "Power BI で **個人ライセンスで共有 ・ 共同作業ができる** 一般的なエディションとして最も適切なものを選びなさい。",
    choices: [
      "Power BI Free",
      "Power BI Pro",
      "Power BI Premium Capacity",
      "Power BI Embedded",
    ],
    correctIndex: 1,
    explanation:
      "**Power BI Pro** は個人ライセンスで共有 ・ 共同作業を可能にするエディション。Premium Capacity は容量ベース、Premium Per User(PPU)は個人で Premium 機能を使えるエディション。",
  },
  {
    id: "pbi-q17",
    category: "更新",
    difficulty: 2,
    question:
      "Power BI Service で **大量データの差分のみを更新する** 機能の名称として最も適切なものを選びなさい。",
    choices: [
      "スケジュール更新",
      "増分更新(Incremental Refresh)",
      "DirectQuery",
      "Composite Model",
    ],
    correctIndex: 1,
    explanation:
      "**増分更新** は古いデータをそのまま、新しい範囲のみを更新する機能。大量データ ・ 履歴データで効果的。Premium / Pro いずれでも利用可。",
  },
  {
    id: "pbi-q18",
    category: "Fabric",
    difficulty: 3,
    question:
      "Microsoft Fabric の **統合データレイク** の名称として最も適切なものを選びなさい。",
    choices: [
      "OneDrive",
      "OneLake",
      "OneStream",
      "OneGate",
    ],
    correctIndex: 1,
    explanation:
      "**OneLake** は Microsoft Fabric の統合データレイク(Delta / Parquet ベース)。Lakehouse / Warehouse / KQL Database など異なる形式の上位ストレージ。",
  },
  {
    id: "pbi-q19",
    category: "Fabric",
    difficulty: 3,
    question:
      "Microsoft Fabric の **Lakehouse から Power BI で直接読み取る** 接続モードの名称として最も適切なものを選びなさい。",
    choices: [
      "Import",
      "DirectQuery",
      "Direct Lake",
      "Live Connection",
    ],
    correctIndex: 2,
    explanation:
      "**Direct Lake** は Fabric Lakehouse の Parquet / Delta ファイルから直接読み取る新モード。Import の高速性 + DirectQuery の最新性を両立する。",
  },
  {
    id: "pbi-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "PL-300 合格後、Microsoft の Fabric / データ分析でステップアップする認定として最も適切なものを選びなさい。",
    choices: [
      "AI-900",
      "AZ-900",
      "DP-600(Microsoft Fabric Analytics Engineer Associate)",
      "MS-900",
    ],
    correctIndex: 2,
    explanation:
      "**DP-600(Fabric Analytics Engineer Associate)** は PL-300 から Fabric 分野へ進むステップアップ認定。同レベルで **DP-700(Fabric Data Engineer Associate)** もある。",
  },
];
