import type { Question } from "@/types/content";

export const tableauSpecialistQuestions: Question[] = [
  {
    id: "tab-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Tableau Desktop Specialist の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "エントリー(Specialist)",
      "中級(Certified Data Analyst)",
      "上級(Server Certified Associate)",
      "専門(Tableau CRM Consultant)",
    ],
    correctIndex: 0,
    explanation:
      "**Tableau Desktop Specialist** は **エントリーレベル**。中級は **Tableau Certified Data Analyst**、Server 運用は **Server Certified Associate**。",
  },
  {
    id: "tab-q2",
    category: "ファイル形式",
    difficulty: 2,
    question:
      "**ワークブック + 抽出データを 1 ファイルにまとめた配布用** の Tableau ファイル形式として最も適切なものを選びなさい。",
    choices: [
      ".twb",
      ".twbx",
      ".tds",
      ".hyper",
    ],
    correctIndex: 1,
    explanation:
      "**.twbx**(Tableau Workbook Packaged)はワークブック + 抽出データの配布用パッケージ。**.twb** はデータを含まないワークブックのみ、**.tds** は接続情報、**.hyper** は抽出ストア。",
  },
  {
    id: "tab-q3",
    category: "ピル",
    difficulty: 2,
    question:
      "Tableau で **離散(Discrete)** な値を表すピルの色として最も適切なものを選びなさい。",
    choices: ["青(Blue)", "緑(Green)", "赤(Red)", "黒(Black)"],
    correctIndex: 0,
    explanation:
      "Tableau は **離散 = 青ピル / 連続 = 緑ピル**。離散はヘッダーを作り、連続は軸を作る。**ピルの色 = 連続/離散** の理解が Tableau の核心。",
  },
  {
    id: "tab-q4",
    category: "接続",
    difficulty: 3,
    question:
      "操作の度に元データソースへ直接クエリを投げる接続モードの名称として最も適切なものを選びなさい。",
    choices: [
      "Extract",
      "Live",
      "Embed",
      "Publish",
    ],
    correctIndex: 1,
    explanation:
      "**Live** 接続は元データソースへ直接クエリ。常に最新だが性能は元 DB 依存。**Extract** は Tableau の高速ストア(.hyper)に抽出。",
  },
  {
    id: "tab-q5",
    category: "データ準備",
    difficulty: 3,
    question:
      "Tableau 2020.2 以降で標準推奨されている、論理レイヤーで多対多も自然に扱えるデータ統合方式の名称として最も適切なものを選びなさい。",
    choices: [
      "Joins(Inner / Left / Right / Full Outer)",
      "Relationships",
      "Unions",
      "Pivot",
    ],
    correctIndex: 1,
    explanation:
      "**Relationships** は 2020.2 で追加された論理レイヤー。多対多も自然に扱え、ビジュアルごとに必要な JOIN を自動生成して行重複を防ぐ。",
  },
  {
    id: "tab-q6",
    category: "Show Me",
    difficulty: 1,
    question:
      "選択中のフィールドから **適切なチャートを Tableau が自動提案** するパネルの名称として最も適切なものを選びなさい。",
    choices: [
      "Marks card",
      "Show Me",
      "Filters shelf",
      "Pages card",
    ],
    correctIndex: 1,
    explanation:
      "**Show Me** パネルがフィールドから適切なチャート種別を自動提案。各種別ごとに必要なフィールドの組合せが視覚的にわかる。",
  },
  {
    id: "tab-q7",
    category: "Marks",
    difficulty: 2,
    question:
      "Marks カードで **集計の粒度を細かくするが描画には影響しない** プロパティとして最も適切なものを選びなさい。",
    choices: [
      "Color",
      "Size",
      "Detail",
      "Tooltip",
    ],
    correctIndex: 2,
    explanation:
      "**Detail** は集計粒度を細かくするが、見た目(色 / サイズ / ラベル)は変えない。同じ顧客でも『地域別の売上』を細かく可視化したいときに使う。",
  },
  {
    id: "tab-q8",
    category: "ダッシュボード",
    difficulty: 2,
    question:
      "ダッシュボードで **整列を保つコンテナ** として最も適切なものを選びなさい。",
    choices: [
      "Tiled レイアウト",
      "Floating レイアウト",
      "Horizontal / Vertical Container",
      "Dashboard Action",
    ],
    correctIndex: 2,
    explanation:
      "**Horizontal / Vertical Container** は子要素の整列を自動的に保つ。サイズ変更時の崩れを防ぎ、レスポンシブ対応で必須。",
  },
  {
    id: "tab-q9",
    category: "Action",
    difficulty: 3,
    question:
      "ダッシュボード内で 1 つのワークシートをクリックすると **他のワークシートが連動してフィルタされる** Action として最も適切なものを選びなさい。",
    choices: [
      "Filter Action",
      "Highlight Action",
      "URL Action",
      "Go to Sheet Action",
    ],
    correctIndex: 0,
    explanation:
      "**Filter Action** はクリック → 他シートをフィルタ。Highlight は強調表示のみ、URL は外部リンク、Go to Sheet は遷移。",
  },
  {
    id: "tab-q10",
    category: "計算",
    difficulty: 2,
    question:
      "Tableau の `IFNULL([Sales], 0)` と同じ動作をする関数として最も適切なものを選びなさい。",
    choices: [
      "ZN([Sales])",
      "ABS([Sales])",
      "ROUND([Sales])",
      "SUM([Sales])",
    ],
    correctIndex: 0,
    explanation:
      "**ZN(Zero if Null)** は NULL を 0 に置換する関数。`ZN([Sales])` ≒ `IFNULL([Sales], 0)`。NULL が混じる集計でよく使う。",
  },
  {
    id: "tab-q11",
    category: "LOD",
    difficulty: 3,
    question:
      "ビジュアルの粒度に **関係なく、指定したディメンションだけで集計** する LOD 式として最も適切なものを選びなさい。",
    choices: [
      "FIXED",
      "INCLUDE",
      "EXCLUDE",
      "TOTAL",
    ],
    correctIndex: 0,
    explanation:
      "**FIXED** はビジュアルの粒度を無視して指定ディメンションだけで集計。例: `{FIXED [Customer]: SUM([Sales])}` は時間 ・ 地域に関わらず顧客の総売上。",
  },
  {
    id: "tab-q12",
    category: "LOD",
    difficulty: 3,
    question:
      "LOD 式 `{INCLUDE [Product]: SUM([Sales])}` の動作として最も適切なものを選びなさい。",
    choices: [
      "ビジュアルの粒度を無視して Product だけで集計",
      "ビジュアルの粒度に Product を加えて集計",
      "ビジュアルの粒度から Product を除外して集計",
      "Product の合計を返す",
    ],
    correctIndex: 1,
    explanation:
      "**INCLUDE** はビジュアルの粒度 + 指定ディメンションで集計。ビジュアルが地域別なら『地域 + Product』粒度で計算した値を集計表示する。",
  },
  {
    id: "tab-q13",
    category: "計算",
    difficulty: 3,
    question:
      "**累計(Running Total)** や **前期との差分** などの集計後計算を、1 クリックで適用できる機能として最も適切なものを選びなさい。",
    choices: [
      "LOD Expression",
      "Quick Table Calculation",
      "Parameter",
      "Set",
    ],
    correctIndex: 1,
    explanation:
      "**Quick Table Calculation** は集計済の値に対する追加計算(累計 / 差分 / % of Total / Rank など)を 1 クリックで適用できる機能。",
  },
  {
    id: "tab-q14",
    category: "パラメータ",
    difficulty: 2,
    question:
      "ユーザがダッシュボード上で **数値や選択肢を変えて結果を確認** できる仕組みとして最も適切なものを選びなさい。",
    choices: [
      "Filter",
      "Parameter",
      "Set",
      "Group",
    ],
    correctIndex: 1,
    explanation:
      "**Parameter** はユーザが値を選択できる変数。Top N の N を可変にしたり、What-if 分析の入力として使う。",
  },
  {
    id: "tab-q15",
    category: "フィルター",
    difficulty: 3,
    question:
      "Tableau のフィルター実行順序で、**Dimension Filter よりも前** に実行されるものとして最も適切なものを選びなさい。",
    choices: [
      "Measure Filter",
      "Table Calculation Filter",
      "Context Filter",
      "Trend Line",
    ],
    correctIndex: 2,
    explanation:
      "Tableau のフィルター順は **Extract → Data Source → Context → FIXED LOD → Dimension → INCLUDE/EXCLUDE LOD → Measure → Table Calc**。Context Filter は Dimension より前。",
  },
  {
    id: "tab-q16",
    category: "Analytics",
    difficulty: 2,
    question:
      "Analytics ペインから **時系列の予測線** を追加する機能として最も適切なものを選びなさい。",
    choices: [
      "Trend Line",
      "Forecast",
      "Reference Line",
      "Cluster",
    ],
    correctIndex: 1,
    explanation:
      "**Forecast** は指数平滑による時系列予測。**Trend Line** は回帰線(線形 / 指数 / ロジ / 多項式 / 移動平均)、**Cluster** は K-means の自動適用。",
  },
  {
    id: "tab-q17",
    category: "Analytics",
    difficulty: 3,
    question:
      "Tableau の Analytics ペインから **散布図に自動的にクラスタリング** を適用する機能として最も適切なものを選びなさい。",
    choices: [
      "Cluster(K-means)",
      "Trend Line",
      "Forecast",
      "Reference Band",
    ],
    correctIndex: 0,
    explanation:
      "**Cluster** は K-means を自動適用してデータをグループ化する Analytics 機能。クラスタ数は手動指定 or 自動。",
  },
  {
    id: "tab-q18",
    category: "地図",
    difficulty: 2,
    question:
      "都道府県や郵便番号など Tableau が **地理的な意味を理解する役割** の名称として最も適切なものを選びなさい。",
    choices: [
      "Geographic Role",
      "Geocode",
      "Spatial File",
      "Geo Pixel",
    ],
    correctIndex: 0,
    explanation:
      "**Geographic Role** は文字列 / 数値カラムに『国 / 県 / 市 / 緯度経度』などの地理的意味を割り当てる。これにより自動で地図上にプロットされる。",
  },
  {
    id: "tab-q19",
    category: "共有",
    difficulty: 2,
    question:
      "**無料の公開共有プラットフォーム** で個人 / 学習用途の Tableau ワークブックを公開できるサービスとして最も適切なものを選びなさい。",
    choices: [
      "Tableau Server",
      "Tableau Cloud",
      "Tableau Public",
      "Tableau Mobile",
    ],
    correctIndex: 2,
    explanation:
      "**Tableau Public** は無料の公開共有プラットフォーム。**Tableau Cloud** はクラウド版有償 Server、**Tableau Server** はオンプレ ・ プライベートクラウド。",
  },
  {
    id: "tab-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "Desktop Specialist 合格後、Tableau の中級認定で次のステップとして最も適切なものを選びなさい。",
    choices: [
      "Tableau Server Certified Associate",
      "Tableau Certified Data Analyst",
      "Tableau Salesforce Trailhead",
      "Tableau Cloud Practitioner",
    ],
    correctIndex: 1,
    explanation:
      "Specialist 合格後は **Tableau Certified Data Analyst**(中級)が王道。Server 系なら **Server Certified Associate** へ進むキャリアパスも。",
  },
  { id: "tab-q21", category: "接続", difficulty: 2, question: "Tableau の **データソース接続** で **Live と Extract** の違いとして最も適切なものを選びなさい。", choices: ["Live: 都度ソースへクエリ、Extract: .hyper にスナップショット保存", "両者同じ", "Live は手動更新", "Extract は遅い"], correctIndex: 0, explanation: "**Live**: リアルタイム ・ ソース負荷あり。**Extract(.hyper 形式)**: スナップショット ・ 高速クエリ ・ Tableau Server 上でスケジュール更新。BI ダッシュボードは Extract が定石。" },
  { id: "tab-q22", category: "Pill", difficulty: 3, question: "Tableau の **Pill(ピル)** で **青(Discrete)と 緑(Continuous)** の違いとして最も適切なものを選びなさい。", choices: ["青: 離散(ヘッダー / カテゴリ)、緑: 連続(軸 / 数値)", "色の違いだけ", "両者同じ", "青は文字列のみ"], correctIndex: 0, explanation: "**青ピル(Discrete)**: 個別ヘッダーを生成。**緑ピル(Continuous)**: 連続軸を生成。日付列は両方の使い方ができ、メニューで切替。" },
  { id: "tab-q23", category: "計算フィールド", difficulty: 3, question: "Tableau の **計算フィールド** で **LOD 表現**(Level of Detail)の基本構文として最も適切なものを選びなさい。", choices: ["{ FIXED [Dim] : SUM([Sales]) }", "SUM([Sales])", "IF [Sales] > 0 THEN 'High' END", "DATETRUNC('year', [Date])"], correctIndex: 0, explanation: "**LOD**: `{ FIXED / INCLUDE / EXCLUDE [dims] : <aggregation> }`。**ビジュアルとは独立した粒度** で集計可能。FIXED は完全固定、INCLUDE / EXCLUDE はビジュアル粒度を相対変更。" },
  { id: "tab-q24", category: "LOD", difficulty: 3, question: "**FIXED LOD** と **INCLUDE LOD** の違いとして最も適切なものを選びなさい。", choices: ["FIXED: ビジュアル粒度を無視、INCLUDE: ビジュアル粒度に追加で含める", "両者同じ", "INCLUDE は廃止", "FIXED は遅い"], correctIndex: 0, explanation: "**FIXED**: 指定 Dim のみで集計(他ビジュアル Dim 無視)。**INCLUDE**: ビジュアル Dim + 指定 Dim で集計。**EXCLUDE**: ビジュアル Dim から指定を除外。" },
  { id: "tab-q25", category: "フィルタ", difficulty: 3, question: "Tableau のフィルタ実行順序の **最初** に評価されるフィルタを選びなさい。", choices: ["Extract Filter", "Data Source Filter", "Context Filter", "Dimension Filter"], correctIndex: 0, explanation: "**Tableau フィルタ順序**: Extract → Data Source → Context → Dimension(FIXED LOD 前)→ FIXED LOD → Measure / Top N → INCLUDE/EXCLUDE LOD → Table Calc Filter。Context Filter は LOD より前に効く。" },
  { id: "tab-q26", category: "結合", difficulty: 3, question: "Tableau の **JOIN と RELATIONSHIP**(2020.2+)の違いとして最も適切なものを選びなさい。", choices: ["JOIN: 物理結合で行レベル統合 / RELATIONSHIP: 論理結合で粒度別に必要時のみ結合", "両者同じ", "JOIN は廃止", "RELATIONSHIP は遅い"], correctIndex: 0, explanation: "**RELATIONSHIP(関係)**(2020.2+): ビジュアルで使う列に応じて自動的に最適 JOIN(LEFT / INNER)。**重複行 ・ NULL ・ 異なる粒度を自然扱い**。新規開発では Relationship が推奨。" },
  { id: "tab-q27", category: "Set", difficulty: 3, question: "Tableau の **Set Action(セットアクション)** の用途として最も適切なものを選びなさい。", choices: ["ユーザがビジュアル選択で Set のメンバーを動的に変更", "セキュリティ設定", "ライセンス管理", "色変更"], correctIndex: 0, explanation: "**Set Action**: マークの選択で Set メンバーを動的更新 → 強調 / 比較 / Top N 切替などインタラクティブダッシュボード実現。Dashboard Actions の 1 種。" },
  { id: "tab-q28", category: "Parameter", difficulty: 3, question: "Tableau の **Parameter Action** の用途として最も適切なものを選びなさい。", choices: ["ビジュアル選択でパラメータ値を動的に変更", "新規ワークブック作成", "データソース変更", "色変更のみ"], correctIndex: 0, explanation: "**Parameter Action**(2019.2+): ユーザがマーク選択 → パラメータ値が更新 → 連動するすべての計算 ・ ビジュアルが変化。What-if 分析の中核。" },
  { id: "tab-q29", category: "Table Calc", difficulty: 3, question: "Tableau の **Table Calculation** で **前年比** を計算する関数として最も適切なものを選びなさい。", choices: ["LOOKUP / DIFFERENCE / WINDOW_AVG / RUNNING_SUM", "SUM", "AVG", "COUNT"], correctIndex: 0, explanation: "**Table Calc**: ビジュアル化されたテーブル上の計算。LOOKUP(前 ・ 次)、DIFFERENCE、RUNNING_SUM(累計)、WINDOW_AVG(移動平均)など。Compute Using で粒度指定。" },
  { id: "tab-q30", category: "Date", difficulty: 3, question: "Tableau の **DATETRUNC** と **DATEPART** の違いとして最も適切なものを選びなさい。", choices: ["DATETRUNC: 日付に切捨て(2024-03-15→2024-03-01)、DATEPART: 部分整数を取得(月=3)", "両者同じ", "DATEPART は廃止", "DATETRUNC は遅い"], correctIndex: 0, explanation: "**DATETRUNC('month', dt)**: 月初日付を返す(時系列軸に有用)。**DATEPART('month', dt)**: 月番号(整数 3)を返す(集計 ・ フィルタに有用)。" },
  { id: "tab-q31", category: "Dashboard", difficulty: 2, question: "Tableau Dashboard の **コンテナ** の使い分けとして最も適切なものを選びなさい。", choices: ["Horizontal: 横並び、Vertical: 縦並び、Tile: 固定配置、Floating: 自由配置", "全て同じ", "Tile は廃止", "Vertical のみ使う"], correctIndex: 0, explanation: "**Layout Container**: Horizontal / Vertical でレスポンシブ。Tile は Layout Container 内の自動配置、Floating は絶対配置(ピクセル単位、ロゴ ・ 装飾用)。" },
  { id: "tab-q32", category: "Dashboard", difficulty: 3, question: "Tableau の **Device Designer** の用途として最も適切なものを選びなさい。", choices: ["デスクトップ / タブレット / モバイル別の Dashboard レイアウト作成", "色テーマ変更", "計算式作成", "DB 接続"], correctIndex: 0, explanation: "**Device Designer**(2016+): デバイス別レイアウト → モバイル ・ タブレットでも見やすい配置を Author 時に確定。Viewer は端末に応じた最適レイアウトを自動表示。" },
  { id: "tab-q33", category: "Story", difficulty: 2, question: "Tableau **Story** の役割として最も適切なものを選びなさい。", choices: ["複数 Dashboard / Sheet を順序立てて『ナラティブ』として提示", "DB 結合", "計算式作成", "ライセンス管理"], correctIndex: 0, explanation: "**Story**: シナリオ立てて 1 つの Story Point ごとに別 Dashboard を表示 → 経営層向けプレゼン ・ 月次レポート ・ 分析結果説明に。" },
  { id: "tab-q34", category: "Server", difficulty: 3, question: "**Tableau Server / Cloud(旧 Online)** の機能として **誤っているもの** を選びなさい。", choices: ["ワークブック公開 + Web 閲覧", "Subscribe で定期メール配信", "Data-Driven Alerts", "GPU 学習"], correctIndex: 3, explanation: "**Tableau Server / Cloud**: 公開 / 閲覧 / 権限 ・ Subscribe(定期 PDF / 画像メール)・ Alerts(閾値超過通知)・ ガバナンス。GPU 学習は無関係。" },
  { id: "tab-q35", category: "セキュリティ", difficulty: 3, question: "Tableau の **Row-Level Security(RLS)** の標準的な実装方法として最も適切なものを選びなさい。", choices: ["User フィルタ + USERNAME() / ISMEMBEROF() による動的フィルタ", "全行に SELECT", "別 Workbook を作成", "Excel で行を消す"], correctIndex: 0, explanation: "**Tableau RLS**: 計算フィールド `[Region] = USERNAME()` 等を Data Source フィルタに設定。**Entitlement テーブル**(ユーザ → 許可属性)を Join するパターンも一般的。" },
  { id: "tab-q36", category: "色", difficulty: 2, question: "Tableau のビジュアル設計で **色パレットの種類** として **誤っているもの** を選びなさい。", choices: ["Categorical(離散)", "Sequential(順序)", "Diverging(発散)", "Quantum Color(量子色)"], correctIndex: 3, explanation: "**色パレット 3 種**: Categorical(離散カテゴリ)・ Sequential(低 → 高)・ Diverging(平均 +/- 発散)。Quantum Color は存在しない。色覚多様性に配慮したパレットも組込済。" },
  { id: "tab-q37", category: "Marks", difficulty: 2, question: "Tableau の **Marks Card** の Mark Type として **誤っているもの** を選びなさい。", choices: ["Bar / Line / Area / Circle / Square / Shape / Map / Text", "Automatic", "Pie", "Hologram"], correctIndex: 3, explanation: "**Mark Types**: Automatic / Bar / Line / Area / Square / Circle / Shape / Text / Map / Pie / Gantt / Polygon / Density(2018+)/ Pie 等。Hologram は存在しない。" },
  { id: "tab-q38", category: "Analytics", difficulty: 3, question: "Tableau の **Analytics ペイン** で **誤っているもの** を選びなさい。", choices: ["Reference Line / Band", "Trend Line(線形 / 多項式 / 指数 / 対数)", "Forecast(予測)", "Quantum Computing"], correctIndex: 3, explanation: "**Analytics ペイン**: 統計 ・ 予測機能。Reference Line / Band / Distribution / Trend Line / Forecast(指数平滑)/ Cluster(K-Means)/ Box Plot 等。Quantum は無関係。" },
  { id: "tab-q39", category: "Forecast", difficulty: 3, question: "Tableau の **Forecast** が内部的に使う手法として最も適切なものを選びなさい。", choices: ["指数平滑法(Holt-Winters 含む)", "ARIMA", "LSTM", "Random Forest"], correctIndex: 0, explanation: "**Tableau Forecast**: **指数平滑法(Exponential Smoothing)**。Holt(トレンド)/ Holt-Winters(トレンド + 季節)を自動選択。ARIMA / DL ベースは別途 R / Python 連携。" },
  { id: "tab-q40", category: "Cluster", difficulty: 3, question: "Tableau の **Cluster 機能** が内部的に使う手法として最も適切なものを選びなさい。", choices: ["K-Means", "DBSCAN", "Hierarchical Clustering", "Gaussian Mixture"], correctIndex: 0, explanation: "**Tableau Cluster**: K-Means(2015+)。K は自動推定(Calinski-Harabasz 指数)or 手動指定。他のクラスタリングは R / Python TabPy 連携で実装。" },
  { id: "tab-q41", category: "Map", difficulty: 3, question: "Tableau で **地図ビジュアル** を作る際の地理的役割の自動認識として **誤っているもの** を選びなさい。", choices: ["Country / State / City / Postcode / Airport", "Latitude / Longitude を自動生成", "町丁目レベル(日本)", "コード難読化"], correctIndex: 3, explanation: "**地理的役割**: Country / State / City / Postcode / Airport / Area Code 等。データに合った Geographic Role を付与すれば Lat/Lng が自動生成 → Map 可視化。難読化は無関係。" },
  { id: "tab-q42", category: "Prep", difficulty: 3, question: "**Tableau Prep Builder** の主用途として最も適切なものを選びなさい。", choices: ["視覚的 ETL でデータ Clean / Pivot / Join / 分割を行いフロー保存", "Dashboard 作成", "DB 管理", "ライセンス管理"], correctIndex: 0, explanation: "**Tableau Prep Builder**: ETL ツール。フロー(.tfl)で Clean / Union / Join / Pivot / Aggregate / Output。**Prep Conductor**(Server) でスケジュール実行。" },
  { id: "tab-q43", category: "API", difficulty: 3, question: "**Tableau Hyper API** の用途として最も適切なものを選びなさい。", choices: ["Python / Java / .NET / C++ から .hyper Extract ファイルを直接作成 ・ 更新", "Dashboard を生成", "認証", "色変更"], correctIndex: 0, explanation: "**Hyper API**: 外部システム(ETL / Spark / Snowflake)から **.hyper Extract ファイルを直接生成** → 配布。Web Data Connector や REST API と組合せた自動化。" },
  { id: "tab-q44", category: "TabPy", difficulty: 3, question: "**TabPy(Tableau Python Server)** の用途として最も適切なものを選びなさい。", choices: ["Tableau から Python スクリプトを呼び出し(SCRIPT_REAL 等)", "Tableau Server の代替", "Python アプリで Tableau を埋込", "Server 認証"], correctIndex: 0, explanation: "**TabPy**: 計算フィールドで `SCRIPT_REAL` / `SCRIPT_STR` / `SCRIPT_INT` / `SCRIPT_BOOL` から Python(scikit-learn / scipy 等)を呼出。同様の **Rserve** で R 連携も。" },
  { id: "tab-q45", category: "VizQL", difficulty: 3, question: "Tableau のクエリエンジン **VizQL** の説明として最も適切なものを選びなさい。", choices: ["ビジュアル定義(行 / 列 / 色)から自動的に SQL を生成 ・ 実行", "Python 拡張", "ファイルフォーマット", "Dashboard デザインツール"], correctIndex: 0, explanation: "**VizQL**: Tableau の核となるクエリエンジン。Drag&Drop で構築したビジュアル定義から **データソースに最適化された SQL を自動生成**。Live 接続では DB に直送、Extract では Hyper エンジンへ。" },
  { id: "tab-q46", category: "Performance", difficulty: 3, question: "Tableau Dashboard の **パフォーマンス最適化** として **誤っているもの** を選びなさい。", choices: ["不要な計算フィールド削除", "Context Filter で対象データ絞込", "Extract 化 ・ Aggregate 化", "ビジュアルを 30 個以上 1 ページに詰込"], correctIndex: 3, explanation: "**Tableau パフォーマンス**: Extract 化 ・ Context Filter ・ LOD 削減 ・ ビジュアル数制限(目安 < 10)。**Performance Recorder** でボトルネック特定。" },
  { id: "tab-q47", category: "Extension", difficulty: 3, question: "**Dashboard Extensions** の主目的として最も適切なものを選びなさい。", choices: ["Web 技術(JS)で構築したカスタム機能を Dashboard 内 Zone として埋込", "DB 接続", "ライセンス管理", "色変更"], correctIndex: 0, explanation: "**Dashboard Extensions**: JavaScript で書いた Web アプリを Dashboard 内 zone として埋込。Write-back / Predictive / Custom Visualization など Tableau 標準機能を超えた拡張に。" },
  { id: "tab-q48", category: "Pulse", difficulty: 3, question: "**Tableau Pulse**(2024+)の特徴として最も適切なものを選びなさい。", choices: ["AI(Tableau GPT)が個人化されたメトリクス insight を自動配信", "Dashboard を全部新規作成", "Server 不要", "色テーマのみ変更"], correctIndex: 0, explanation: "**Tableau Pulse**: Salesforce / Tableau の AI 機能。メトリクス購読 → AI 生成サマリ + 異常検知 + Slack / Email 配信。'Why' を自然言語で深掘り可能。" },
  { id: "tab-q49", category: "ベストプラクティス", difficulty: 2, question: "Tableau ベストプラクティスとして **誤っているもの** を選びなさい。", choices: ["3-clicks rule(3 クリックで主要情報到達)", "色を意味的に統一", "明示的 Title / Tooltip", "ビジュアルは多いほど良い"], correctIndex: 3, explanation: "**良い Dashboard**: シンプル + 一目で分かる + 色を意味的に統一 + 3 クリック以内。**ビジュアル数は最小限**(1 画面 5-8 個が目安)。" },
  { id: "tab-q50", category: "次のステップ", difficulty: 1, question: "Tableau Desktop Specialist 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["Tableau Certified Data Analyst(中級)", "MS-900", "AWS Cloud Practitioner", "再受験のみ"], correctIndex: 0, explanation: "**Specialist → Data Analyst(中級)**。Server 系なら **Server Certified Associate**。**Salesforce 認定 Tableau Architect**(2024 新設)も上位選択肢。" },
  { id: "tab-q51", category: "Calculation", difficulty: 3, question: "**LOD(Level of Detail)Expression** の 3 種類として最も適切なものを選びなさい。", choices: ["FIXED / INCLUDE / EXCLUDE", "ROW / COLUMN / CELL", "SUM / AVG / COUNT", "GPU / CPU / TPU"], correctIndex: 0, explanation: "**LOD**: 集計レベルを式内で制御。**FIXED**(指定次元のみで集計)・ **INCLUDE**(現次元 + 指定追加)・ **EXCLUDE**(現次元から除外)。**カスタマー LTV / コホート分析** 等で必須。" },
  { id: "tab-q52", category: "Calculation", difficulty: 3, question: "**Table Calculation** の **Window Function** の典型用途として最も適切なものを選びなさい。", choices: ["RUNNING_SUM / WINDOW_AVG / RANK 等で表内集計を計算", "DB 接続", "認証", "GPU"], correctIndex: 0, explanation: "**Table Calc**: ビュー結果に対する 2 次計算。**Running / Moving / Difference / Percent / Rank / WINDOW_X**。Compute Using で方向(Pane / Cell / Specific Dim)指定が肝。" },
  { id: "tab-q53", category: "Calculation", difficulty: 3, question: "**LOD vs Table Calc** の主な違いとして最も適切なものを選びなさい。", choices: ["LOD=データソース集計(計算前)、Table Calc=ビュー集計(計算後)", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**実行順序**: Data Source Filter → **LOD** → Dimension Filter → Aggregations → **Table Calc** → Trend Lines。**LOD は集計前 / Table Calc は集計後** が本質。" },
  { id: "tab-q54", category: "Parameter", difficulty: 3, question: "**Parameter** の典型用途として最も適切なものを選びなさい。", choices: ["ユーザー入力で動的にフィルタ / 計算 / Top N / What-If 分析", "DB 接続", "認証", "GPU"], correctIndex: 0, explanation: "**Parameter**: 単一値の動的入力。**Top N、What-If、Measure Swap、Reference Line**等で活用。**Parameter Action**(2019.2+)でビュー上のクリックで設定可。" },
  { id: "tab-q55", category: "Set", difficulty: 3, question: "**Set** と **Group** の違いとして最も適切なものを選びなさい。", choices: ["Set=動的(条件式)・ In/Out で分類、Group=静的(手動)", "両者同じ", "Set は GPU 専用", "Group は GPU"], correctIndex: 0, explanation: "**Set**: 条件 / 計算で動的に IN/OUT を分類(例: 上位 10 顧客)。**Group**: 手動で値をまとめる(例: 地域→ブロック)。**Set Action** でビュー上のクリックで Set 更新可。" },
  { id: "tab-q56", category: "Join vs Blend", difficulty: 3, question: "**Data Blending** の使い分けとして最も適切なものを選びなさい。", choices: ["異なるデータソース ・ 異なる粒度を Primary / Secondary で結合(ビュー単位)", "全 DB 統合", "GUI のみ", "ETL 専用"], correctIndex: 0, explanation: "**Blending**: 異なるデータソース ・ 異なる粒度 ・ Visualization 単位の Lookup。**Join**: 同ソース ・ 同粒度。**Relationship**(2020.2+): 柔軟な Logical Layer Join。" },
  { id: "tab-q57", category: "Relationships", difficulty: 3, question: "**Relationships(Noodles)** の利点として最も適切なものを選びなさい。", choices: ["Logical Layer で柔軟な多対多 ・ ビュー単位で最適 Join を自動選択", "強制 INNER JOIN", "1:1 のみ", "GUI 専用"], correctIndex: 0, explanation: "**Relationships(2020.2+)**: Logical / Physical 2 層モデル。**ビュー単位で最適な Join Type を自動選択**(LEFT/INNER)。粒度違いで Duplication ・ NULL 問題が軽減。" },
  { id: "tab-q58", category: "Performance", difficulty: 3, question: "Tableau パフォーマンス改善として **誤っているもの** を選びなさい。", choices: ["Extract 利用(Hyper エンジン)", "不要な Filter / Sheet を削除", "Custom SQL を避け Native 接続", "全 Measure を 1 Sheet に集約"], correctIndex: 3, explanation: "**Performance**: Extract / Hyper / Filter 順序最適化 / Aggregation / Pre-join Avoidance / Performance Recorder。**1 Sheet に集約**はレンダリング負荷増。**Dashboard 構成 ・ Filter Action**で分離が定番。" },
  { id: "tab-q59", category: "Hyper", difficulty: 3, question: "**Hyper Extract** の特徴として最も適切なものを選びなさい。", choices: ["列指向 + 高速 ・ Tableau の標準 Extract エンジン(2018 以降)", "ROW Index 専用", "GUI", "GPU"], correctIndex: 0, explanation: "**Hyper**(2018 標準化): 列指向 ・ MVCC ・ 並列圧縮 / クエリ。TDE(旧形式)から完全置換。Tableau Server / Cloud / Desktop / Prep の標準エンジン。" },
  { id: "tab-q60", category: "Prep", difficulty: 3, question: "**Tableau Prep Builder** の用途として最も適切なものを選びなさい。", choices: ["GUI で ETL(Clean / Join / Pivot / Aggregate)を構築 ・ Flow を Server で自動実行", "Dashboard 作成", "認証", "GPU 学習"], correctIndex: 0, explanation: "**Tableau Prep**: ビジュアル ETL。Flow を組み → Prep Conductor(Server)/ Tableau Cloud で **スケジュール ・ Incremental Refresh**。Python / R Script Step も対応。" },
  { id: "tab-q61", category: "Server", difficulty: 3, question: "**Tableau Server** の **Permissions Hierarchy** として最も適切なものを選びなさい。", choices: ["Site → Project → Workbook → View(継承 + 上書き)", "Workbook のみ", "GUI のみ", "GPU"], correctIndex: 0, explanation: "**Permission**: Site Role → Project Permission(Locked / Customizable)→ Workbook → View。**Site Admin / Project Leader / Creator / Explorer / Viewer** の Site Role と組合せ。" },
  { id: "tab-q62", category: "Security", difficulty: 3, question: "**Row-Level Security(RLS)** の Tableau 実装として最も適切なものを選びなさい。", choices: ["USERNAME() / ISMEMBEROF() でビュー / データソース Filter を適用", "GUI のみ", "Admin 設定", "GPU"], correctIndex: 0, explanation: "**RLS Patterns**: ① User Filter(計算式 `USERNAME() = [SalesPerson]`)② Entitlements Table Join + USERNAME() ③ Virtual Connection(2022+)。データソース Filter にして全シート横断適用。" },
  { id: "tab-q63", category: "Story", difficulty: 3, question: "**Story Points** の用途として最も適切なものを選びなさい。", choices: ["複数 Dashboard を時系列 / シナリオ順に並べナラティブ伝達", "学習データ", "GPU", "認証"], correctIndex: 0, explanation: "**Story Points**: スライド風に Dashboard を並べる。**Executive Summary / Analyst Briefing / Investigation 過程の追跡** で利用。Story Action や Animation で印象的に。" },
  { id: "tab-q64", category: "API", difficulty: 3, question: "**Tableau Web Data Connector(WDC)** の用途として最も適切なものを選びなさい。", choices: ["JS で書く Web ベースのカスタムデータコネクタ → Web API / OAuth 接続", "Native 接続", "GPU 接続", "認証 SSO"], correctIndex: 0, explanation: "**WDC**(2.0): JavaScript ベースのコネクタで Twitter / Google Analytics / SaaS API などに接続。**Tableau Connector SDK** で TACO ファイルにビルドし配布可。" },
  { id: "tab-q65", category: "実務", difficulty: 3, question: "Tableau Specialist 試験で頻出の **典型ワークフロー** として最も適切なものを選びなさい。", choices: ["Connect → Prep → Worksheet(LOD/Table Calc)→ Dashboard → Story → Server Publish", "DB 直書き", "Excel のみ", "全部 Python"], correctIndex: 0, explanation: "**Tableau 王道**: Connect(DB/Excel/Cloud)→ Prep(クレンジング)→ Worksheet(LOD/Param/Filter)→ Dashboard(Layout/Filter Action)→ Story(ナラティブ)→ Server / Cloud Publish + Subscription。" },
  { id: "tab-q66", category: "Chart", difficulty: 3, question: "**Show Me** が **Tableau で推奨するチャート選択** の根拠として最も適切なものを選びなさい。", choices: ["選択中の Dimension / Measure 数とデータ型に応じて最適 Viz 提案", "ランダム", "GPU 性能", "認証"], correctIndex: 0, explanation: "**Show Me**: Mackinlay の自動可視化研究ベース。**Bar / Line / Scatter / Map / Heat / Box / Histogram / Highlight Table / Bullet / Gantt** を自動推奨。初学者の道標。" },
  { id: "tab-q67", category: "Calc", difficulty: 3, question: "**`IIF` と `IF` 文** の Tableau での使い分けとして最も適切なものを選びなさい。", choices: ["IIF=三項演算(条件 ・ 真 ・ 偽)、IF=多分岐(ELSEIF / END)", "両者同じ", "GUI vs CLI", "学習 vs 推論"], correctIndex: 0, explanation: "**IIF(cond, t, f, [NULL])** : 三項演算簡略形。**IF ... THEN ... ELSEIF ... ELSE ... END**: 多分岐。**CASE WHEN** も使用可。可読性で使い分け。" },
  { id: "tab-q68", category: "Data", difficulty: 3, question: "**Tableau の `Continuous` と `Discrete`** の違いとして最も適切なものを選びなさい。", choices: ["Continuous=連続軸(緑)、Discrete=離散ヘッダー(青)", "両者同じ", "色のみ", "GPU"], correctIndex: 0, explanation: "**Discrete**(青): カテゴリヘッダー化 ・ ソート可。**Continuous**(緑): 連続軸描画。**Date は両対応**(年=Discrete / 連続 Date=Continuous)。理解必須の基本概念。" },
  { id: "tab-q69", category: "Filter", difficulty: 3, question: "**Filter の適用順序** として **誤っているもの** を選びなさい。", choices: ["Extract → Data Source → Context → Dimension → Measure", "Context フィルタが Dimension より先", "Data Source が最優先級", "GPU Filter"], correctIndex: 3, explanation: "**Filter 順序**: ① Extract ② Data Source ③ **Context**(他フィルタ前)④ Dimension ⑤ Measure ⑥ Table Calc。**Context Filter** で複雑な前段フィルタを表現。GPU Filter は存在しない。" },
  { id: "tab-q70", category: "Param", difficulty: 3, question: "**`Parameter Action`** の用途として最も適切なものを選びなさい。", choices: ["ビュー上のクリックで Parameter 値を更新 → 動的計算", "GUI ボタン作成", "認証", "GPU"], correctIndex: 0, explanation: "**Parameter Action**(2019.2+): ビュー要素クリックで Parameter 更新 → Top N 切替 / What-If / 連動切替が直感操作で可能。**Set Action**(Set 更新)・ **Filter Action**(別 Sheet フィルタ)と併用。" },
  { id: "tab-q71", category: "Maps", difficulty: 3, question: "**Tableau の地理ロール** で対応する代表的データとして **誤っているもの** を選びなさい。", choices: ["Country / State / City", "ZIP Code / Postal Code", "Lat / Long / Geometry", "GPU ID"], correctIndex: 3, explanation: "**Geographic Role**: 国 / 州 / 市 / 郡 / ZIP / Postal / Airport / Lat-Long / Geometry(空間ファイル)。**Background Map(Mapbox)・ WMS / TMS** カスタム背景も。" },
  { id: "tab-q72", category: "Calc", difficulty: 3, question: "**LOD `FIXED [Customer] : MIN([Order Date])`** の意味として最も適切なものを選びなさい。", choices: ["Customer 別の初回注文日 → New vs Existing 分類等に活用", "全顧客の最小値", "GPU 値", "認証"], correctIndex: 0, explanation: "**FIXED**: 指定 Dim でのみ集計(ビューの他 Dim 無視)。**Customer 初回注文 / 顧客 LTV / コホート分析** の典型。**EXCLUDE / INCLUDE** と組合せ。" },
  { id: "tab-q73", category: "Performance", difficulty: 3, question: "**Performance Recorder** で診断すべき項目として **誤っているもの** を選びなさい。", choices: ["Query Execution Time", "Computing Layout", "Geocoding / Data Source Connection", "GPU Usage"], correctIndex: 3, explanation: "**Performance Recorder**: ボトルネック診断 → Query / Compiling Query / Geocoding / Computing Layout / Compute View / Connection。GPU は対象外。" },
  { id: "tab-q74", category: "Dashboard", difficulty: 3, question: "**Container(コンテナ)** の用途として最も適切なものを選びなさい。", choices: ["Horizontal/Vertical で Object を整列 ・ Responsive レイアウト", "DB 接続", "GUI", "認証"], correctIndex: 0, explanation: "**Container**: H / V 配置でビュー / Filter / Text を整列。**Floating** より **Tiled + Container** が保守性高。**Show/Hide Container**(2018+)で動的レイアウト。" },
  { id: "tab-q75", category: "Dashboard", difficulty: 3, question: "**Filter Action** の用途として最も適切なものを選びなさい。", choices: ["Source Sheet 選択で Target Sheet を絞り込み(Drill 風 ・ ナビゲーション)", "DB 接続", "GUI", "認証"], correctIndex: 0, explanation: "**Filter Action**(Dashboard Action): Source 選択 → Target Filter。**Highlight Action**(強調のみ)・ **Navigate**(別 Dashboard)・ **URL Action**(外部)も。Story Telling の中核。" },
  { id: "tab-q76", category: "Format", difficulty: 3, question: "**`#,##0`** 等の Tableau 数値フォーマットの意味として最も適切なものを選びなさい。", choices: ["千区切り + 整数表示(Excel 同様)", "小数 4 桁", "通貨記号", "認証"], correctIndex: 0, explanation: "**Custom Format**: Excel 互換。**#,##0**(整数 + 区切り)・ **#,##0.00**(小数 2 桁)・ **#,##0;(#,##0)**(負を括弧表記)・ **0%**(百分率)。" },
  { id: "tab-q77", category: "Extension", difficulty: 3, question: "**Tableau Connector SDK** の用途として最も適切なものを選びなさい。", choices: ["カスタムデータコネクタ(JDBC / API)を TACO 形式で配布", "GUI Extension", "認証 SSO", "GPU"], correctIndex: 0, explanation: "**Connector SDK**: JDBC / REST API ベースのコネクタを **TACO**(Tableau Connector)で配布。**Extension Gallery / Tableau Exchange** でコミュニティ配布。" },
  { id: "tab-q78", category: "Subscriptions", difficulty: 3, question: "**Tableau Cloud / Server の Subscription** 機能の用途として最も適切なものを選びなさい。", choices: ["定期 Email でレポート画像 / PDF 配信", "DB 同期", "GPU 監視", "認証"], correctIndex: 0, explanation: "**Subscription**: 自分や他 User に定期配信(Hourly / Daily / Weekly / Monthly)。**Data-Driven Alerts**(閾値超過時通知)も併用。**Slack 統合**(2022+)も。" },
  { id: "tab-q79", category: "Cert", difficulty: 2, question: "**Tableau Desktop Specialist** 試験の特徴として **誤っているもの** を選びなさい。", choices: ["有効期限なし(他資格は 2 年)", "Tableau Public でも準備可", "60-75 分 ・ 多肢選択 + ハンズオン", "実務 6 ヶ月以上必須"], correctIndex: 3, explanation: "**Tableau Desktop Specialist**: 経験不問 / 入門レベル / **有効期限なし**(中級 Data Analyst は 2 年)。**Tableau Public 無料版**でも準備可能。" },
  { id: "tab-q80", category: "実務", difficulty: 3, question: "Tableau Specialist で重視される **基本操作 + 設計力** として最も適切なものを選びなさい。", choices: ["Connect / Worksheet / Calc / Filter / Group / Set / Dashboard / Story の総合操作力", "ML 実装", "プログラミング", "認証"], correctIndex: 0, explanation: "**Specialist 範囲**: ① 接続 / 準備 ② Worksheet ・ Mark ・ Format ③ Calc ・ Quick Table Calc ・ LOD 入門 ④ Filter ・ Sort ・ Group ・ Set ⑤ Dashboard ・ Story ⑥ Tableau Server / Cloud 基礎。" },
];
