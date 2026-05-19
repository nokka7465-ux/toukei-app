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
  { id: "pbi-q21", category: "Power Query", difficulty: 2, question: "Power Query の **M 言語** の役割として最も適切なものを選びなさい。", choices: ["データ取得と変換のクエリ言語", "ビジュアル作成言語", "DAX の別名", "R 互換言語"], correctIndex: 0, explanation: "**M 言語(Power Query Formula Language)**: データソース接続 + ETL ステップを記述。Power BI / Excel / Dataflows 共通。DAX(計算列 / メジャー用)とは別物。" },
  { id: "pbi-q22", category: "Power Query", difficulty: 3, question: "Power Query での **クエリフォールディング(Query Folding)** の意味として最も適切なものを選びなさい。", choices: ["変換ステップをソース側 SQL に押し込んで実行する", "クエリを暗号化する", "結果をキャッシュする", "ビジュアルを折りたたむ"], correctIndex: 0, explanation: "**Query Folding**: M の変換ステップを **データソース(SQL Server 等)のネイティブクエリに変換** して送信 → ソース側で処理 → 転送データ量大幅削減。可能な限り維持するのがベストプラクティス。" },
  { id: "pbi-q23", category: "DAX", difficulty: 3, question: "DAX の **CALCULATE** 関数の主目的として最も適切なものを選びなさい。", choices: ["フィルタコンテキストを変更してメジャーを再評価", "計算列を作成する", "テーブルを結合する", "ビジュアルを生成する"], correctIndex: 0, explanation: "**CALCULATE(<expression>, <filter1>, ...)**: フィルタコンテキスト変更の唯一の関数。DAX の最重要関数。前年比較 / Year-to-Date / 部門別比較で必須。" },
  { id: "pbi-q24", category: "DAX", difficulty: 3, question: "DAX の **計算列(Calculated Column)** と **メジャー(Measure)** の違いとして最も適切なものを選びなさい。", choices: ["計算列は行単位で事前計算 / メジャーは集計時にコンテキスト依存で計算", "完全同義", "計算列は表示時のみ", "メジャーは行ごと"], correctIndex: 0, explanation: "**計算列**: 各行のロード時に計算 ・ ストレージ消費 ・ 行コンテキスト。**メジャー**: ピボット時にフィルタコンテキストで計算 ・ ストレージ不要 ・ パフォーマンス良好。メジャー優先が定石。" },
  { id: "pbi-q25", category: "DAX", difficulty: 3, question: "**Time Intelligence** 関数で **前年同期比較** によく使われるものを選びなさい。", choices: ["SAMEPERIODLASTYEAR / DATEADD / PARALLELPERIOD", "SUM", "AVERAGE", "CONCAT"], correctIndex: 0, explanation: "**Time Intelligence**: SAMEPERIODLASTYEAR / DATEADD / DATESYTD / TOTALYTD / PARALLELPERIOD。**Date テーブル(マークされた日付テーブル)が前提**。連続日付 + ユニーク日付列。" },
  { id: "pbi-q26", category: "ストレージモード", difficulty: 3, question: "Power BI の **Import / DirectQuery / Composite Model / Live Connection** の比較で、**Composite Model** の特徴として最も適切なものを選びなさい。", choices: ["1 つのモデル内で Import と DirectQuery を併用 + Aggregation で高速化", "全テーブル Import", "全テーブル DirectQuery", "ローカル DB のみ"], correctIndex: 0, explanation: "**Composite Model**: Import(高速 ・ ダッシュボード集計)+ DirectQuery(リアルタイム明細)を併用。**Aggregations** で集計済 Import を Drill-through 時に DirectQuery 明細展開。" },
  { id: "pbi-q27", category: "Aggregations", difficulty: 3, question: "Power BI の **Aggregations(集計表)** の動作として最も適切なものを選びなさい。", choices: ["クエリで集計済テーブルを自動利用、Drill 時のみ明細へフォールバック", "全クエリで明細を使用", "集計を手動で計算", "存在しない機能"], correctIndex: 0, explanation: "**Aggregations**: 大規模ファクト DirectQuery + Import の集計テーブルを併用。クエリプランナが集計テーブルで応えられる場合は超高速、できない場合は DirectQuery でフォールバック。" },
  { id: "pbi-q28", category: "Visualization", difficulty: 2, question: "Power BI で **2 軸を持つチャート** を作る際の制約として **正しいもの** を選びなさい。", choices: ["折れ線 + 縦棒の組合せチャート(Combo chart)を使う", "全てのビジュアルが 2 軸対応", "2 軸は使用不可", "DAX で書く"], correctIndex: 0, explanation: "**Line and clustered/stacked column chart**(Combo)で 2 軸表示。売上(棒)+ 成長率(線)の同時表示に頻用。Y 軸が左右別スケール。" },
  { id: "pbi-q29", category: "RLS", difficulty: 3, question: "Power BI の **Row-Level Security(RLS)** の実装方法として最も適切なものを選びなさい。", choices: ["Roles を作成 → DAX 式で行フィルタ定義 → Service でユーザ割当", "Excel で行を消す", "ビジュアル単位で隠す", "DAX を使わない"], correctIndex: 0, explanation: "**RLS**: Power BI Desktop で Role 作成 → DAX `[Region] = USERNAME()` 等のフィルタ → Service で AAD ユーザ / グループに割当。**Dynamic RLS** はユーザマスタテーブル経由。" },
  { id: "pbi-q30", category: "セキュリティ", difficulty: 3, question: "Power BI の **Object-Level Security(OLS)** の説明として最も適切なものを選びなさい。", choices: ["テーブル / 列自体をユーザに非表示にする", "RLS の別名", "ピクセル単位の暗号化", "URL ベース制御"], correctIndex: 0, explanation: "**OLS**: 機密テーブル / 列を **特定ロールから完全に隠す**(メタデータレベル)。RLS が行を隠すのに対し、OLS は構造を隠す。Tabular Editor / XMLA エンドポイント経由で設定。" },
  { id: "pbi-q31", category: "Refresh", difficulty: 2, question: "Power BI Service の **Scheduled Refresh** の Pro ライセンスでの上限として最も適切なものを選びなさい。", choices: ["1 日 8 回", "1 日 1 回", "無制限", "1 時間 1 回"], correctIndex: 0, explanation: "**Pro**: 1 日 8 回。**Premium / PPU**: 1 日 48 回。リアルタイム要件には Streaming Dataset / Push Dataset / DirectQuery を併用。" },
  { id: "pbi-q32", category: "Gateway", difficulty: 3, question: "**On-premises Data Gateway** の役割として最も適切なものを選びなさい。", choices: ["オンプレ DB / ファイル → Power BI Service の安全接続中継", "クラウド DB の暗号化", "ライセンス管理", "ビジュアル生成"], correctIndex: 0, explanation: "**On-premises Data Gateway(Standard / Personal)**: Power BI Service / Power Automate / Power Apps から オンプレリソースに **アウトバウンドのみで安全接続**。中継を担う。" },
  { id: "pbi-q33", category: "Fabric", difficulty: 3, question: "**Microsoft Fabric** が **Power BI** を統合する形として最も適切なものを選びなさい。", choices: ["OneLake + Lakehouse + Warehouse + Data Factory + Power BI を 1 SaaS に統合", "Power BI の代替", "別製品", "Excel の拡張"], correctIndex: 0, explanation: "**Fabric**: OneLake(共通レイク)+ Lakehouse / Warehouse / Real-Time Analytics / Data Factory / Data Activator / Power BI の SaaS 統合。Direct Lake モードで超高速 Power BI 連携。" },
  { id: "pbi-q34", category: "Direct Lake", difficulty: 3, question: "Fabric の **Direct Lake** モードの特徴として最も適切なものを選びなさい。", choices: ["OneLake 上の Delta Parquet を Import 並の速度 + DirectQuery 並のフレッシュさで読む", "Import モードのみ", "ローカル DB のみ", "Excel 連携専用"], correctIndex: 0, explanation: "**Direct Lake**: Import モード(超高速)と DirectQuery(リアルタイム)の良いとこ取り。**Fabric Lakehouse の Delta Parquet を直接読込** → メモリ上で VertiPaq に近い圧縮。" },
  { id: "pbi-q35", category: "Copilot", difficulty: 2, question: "**Copilot in Power BI** が提供する機能として **誤っているもの** を選びなさい。", choices: ["自然言語でレポート / ビジュアル生成", "DAX 式の説明 ・ 自動生成", "Q&A 強化", "ライセンス自動購入"], correctIndex: 3, explanation: "**Copilot in Power BI**: NL でレポート生成 / DAX 自動 / Q&A 強化 / ナラティブ説明。ライセンス操作はしない。Fabric Capacity 必須。" },
  { id: "pbi-q36", category: "Dataflow", difficulty: 3, question: "Power BI **Dataflows Gen2**(Fabric)の特徴として最も適切なものを選びなさい。", choices: ["Power Query を Cloud で実行 + Delta Parquet 出力 + 複数 Lakehouse / Warehouse へ配信", "Excel と同じ", "Desktop でのみ動作", "DAX 専用"], correctIndex: 0, explanation: "**Dataflows Gen2**: Cloud Power Query → 高速エンジン → **OneLake Delta** + 複数宛先(Lakehouse / Warehouse / DB / 旧 Dataflow)。Gen1 より大幅高速 ・ Fabric ネイティブ。" },
  { id: "pbi-q37", category: "Deployment Pipeline", difficulty: 3, question: "Power BI **Deployment Pipeline** の用途として最も適切なものを選びなさい。", choices: ["Dev → Test → Prod の Workspace 間でコンテンツを昇格 + パラメータ自動切替", "ライセンスを購入", "DAX をデバッグ", "Excel 連携"], correctIndex: 0, explanation: "**Deployment Pipeline**: 3 段階 Workspace 間で **Report / Dataset / Dataflow を昇格**。データソース URL ・ パラメータの環境別切替対応。Premium / PPU が必須。" },
  { id: "pbi-q38", category: "DAX Studio", difficulty: 3, question: "**DAX Studio** の主用途として最も適切なものを選びなさい。", choices: ["DAX クエリの実行 / プロファイリング / トレース / 最適化", "Excel の代替", "Python 実行", "Photoshop の代替"], correctIndex: 0, explanation: "**DAX Studio**(OSS): DAX クエリ実行 + Server Timings + Query Plan で性能ボトルネック特定。VertiPaq Analyzer 連携でストレージ分析。Power BI 開発者必携。" },
  { id: "pbi-q39", category: "Tabular Editor", difficulty: 3, question: "**Tabular Editor** の用途として最も適切なものを選びなさい。", choices: ["セマンティックモデル(メジャー / カラム / RLS / OLS / Perspectives 等)の高度編集", "Desktop の代替", "PDF 生成", "Power Automate"], correctIndex: 0, explanation: "**Tabular Editor**(OSS / 商用): Power BI Desktop で扱えない高度オブジェクト(Translations / Perspectives / Calculation Groups / OLS)を編集。Best Practice Analyzer も搭載。" },
  { id: "pbi-q40", category: "Calculation Groups", difficulty: 3, question: "**Calculation Groups** の利点として最も適切なものを選びなさい。", choices: ["時系列計算(YTD / MTD / 前年比 等)を 1 つのアイテムで多数のメジャーに適用", "ピボット表を自動作成", "Excel に変換", "Print 機能"], correctIndex: 0, explanation: "**Calculation Groups**: YTD / MTD / YoY 等を **Calculation Items** として定義 → 任意メジャーに動的適用。メジャー爆発(売上_YTD ・ 売上_MTD ・ 売上_YoY ...)を回避。Tabular Editor で作成。" },
  { id: "pbi-q41", category: "Field Parameters", difficulty: 3, question: "Power BI の **Field Parameters** の利点として最も適切なものを選びなさい。", choices: ["ユーザがビジュアルの軸 / 値を動的に選択できる", "色を変える", "DAX をデバッグ", "Excel 連携"], correctIndex: 0, explanation: "**Field Parameters**: 売上 / 利益 / 数量 などをスライサーで切替 → ビジュアルが動的に更新。ダッシュボードの柔軟性向上。Power BI Desktop で作成。" },
  { id: "pbi-q42", category: "Bookmarks", difficulty: 2, question: "Power BI **Bookmarks** の用途として最も適切なものを選びなさい。", choices: ["ビジュアルの表示状態(フィルタ / 選択)を保存 → ナビゲーション", "ファイルのブックマーク", "Web の Favorite", "印刷ジョブ"], correctIndex: 0, explanation: "**Bookmarks**: ビジュアル状態を保存 → ボタンと連携してナビゲーション ・ ストーリーテリング ・ 表示切替を実現。Selection Pane と組合せが定石。" },
  { id: "pbi-q43", category: "Performance", difficulty: 3, question: "Power BI レポートのパフォーマンス最適化として **誤っているもの** を選びなさい。", choices: ["不要な列を削除 + データ型を最小化", "Auto Date/Time の無効化(独自 Date テーブル使用)", "ビジュアルを 1 ページに 30 個以上配置", "Star Schema の維持"], correctIndex: 2, explanation: "**多すぎるビジュアルは描画遅延**(目安 8 個以内 / ページ)。不要列 / Auto Date 無効 / Star Schema が定石。スライサーの不必要な多用も避ける。" },
  { id: "pbi-q44", category: "Aggregation Awareness", difficulty: 3, question: "Power BI モデリングの **Star Schema** が **Snowflake Schema** より優れる点として最も適切なものを選びなさい。", choices: ["Fact ↔ Dimension の 1 ホップで JOIN 数最小 → パフォーマンス向上", "Dimension を正規化", "ストレージ削減のみ", "DAX が書きやすくなる"], correctIndex: 0, explanation: "**Power BI は Star Schema 推奨**(Snowflake より高速)。VertiPaq は非正規化を前提に圧縮設計 → JOIN を減らした方がパフォーマンス ・ DAX 可読性とも向上。" },
  { id: "pbi-q45", category: "Bidirectional", difficulty: 3, question: "Power BI の **双方向リレーションシップ** の使用について最も適切なものを選びなさい。", choices: ["必要な場合のみ使用、循環依存 ・ あいまいさのリスクで原則回避", "常に双方向を使う", "禁止されている", "片方向は遅い"], correctIndex: 0, explanation: "**双方向リレーション**: M2M リレーション ・ Many-to-many などで必要だが、**フィルタの曖昧性 ・ 性能低下リスク**。原則は単方向 + CROSSFILTER で必要時のみ動的双方向化。" },
  { id: "pbi-q46", category: "Tooltips", difficulty: 2, question: "Power BI **Custom Tooltip Page** の用途として最も適切なものを選びなさい。", choices: ["ホバー時に表示される詳細ページを別レポートページで設計", "ファイル名を表示", "ロゴ表示", "メニュー"], correctIndex: 0, explanation: "**Custom Tooltip Page**: ページサイズを Tooltip 用に小さく設計 → ビジュアルのフィールド上で参照。詳細ドリルダウンを別画面遷移なしで実現。" },
  { id: "pbi-q47", category: "Mobile", difficulty: 2, question: "Power BI **Mobile レイアウト** の作成方法として最も適切なものを選びなさい。", choices: ["Desktop で View → Mobile Layout で縦長プレビューに専用配置", "自動変換のみ", "別ツールで作成", "未対応"], correctIndex: 0, explanation: "**Mobile Layout**: Desktop の View タブで **縦長キャンバスに別途配置**。Mobile / Phone でデスクトップとは異なる UI 提供。重要 KPI を上に。" },
  { id: "pbi-q48", category: "Embedding", difficulty: 3, question: "**Power BI Embedded** の使い分けとして最も適切なものを選びなさい。", choices: ["ISV / SaaS が自社製品に Power BI を組込 → A SKU(Azure) / E SKU(Office) で課金", "Desktop で代用", "PDF 出力", "ライセンス削減のみ"], correctIndex: 0, explanation: "**Embedded**: ISV 向けの埋込 BI。Azure 経由の **A SKU**(時間課金、停止可)/ M365 経由の **E SKU**(年契約)。社内利用は Pro / PPU が安価。" },
  { id: "pbi-q49", category: "REST API", difficulty: 3, question: "Power BI **REST API** で **データセット更新を起動** する典型エンドポイントを選びなさい。", choices: ["POST /groups/{groupId}/datasets/{datasetId}/refreshes", "GET /datasets/list", "DELETE /workspaces", "PUT /licenses"], correctIndex: 0, explanation: "**Refresh API**: `POST .../datasets/{id}/refreshes` で Refresh 起動。`GET /refreshes` で履歴。Power Automate / Service Principal 認証で自動化可。" },
  { id: "pbi-q50", category: "次のステップ", difficulty: 1, question: "PL-300 合格後の Microsoft Data 系の次の認定として最も適切なものを選びなさい。", choices: ["DP-600 / DP-700(Fabric 系 Associate)", "MS-900", "AZ-104", "MD-100"], correctIndex: 0, explanation: "**PL-300 → DP-600(Fabric Analytics Engineer)or DP-700(Fabric Data Engineer)**。データサイエンス寄りは DP-100、データ基盤は DP-203 へ展開可能。" },
];
