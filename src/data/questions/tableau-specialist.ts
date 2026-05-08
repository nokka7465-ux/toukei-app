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
];
