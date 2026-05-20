import type { Question } from "@/types/content";

export const dsBasicQuestions: Question[] = [
  {
    id: "ds-q1",
    category: "Excel関数",
    difficulty: 1,
    question:
      "Excel で範囲 A1:A10 の平均を求めたい。最も適切な関数を選びなさい。",
    choices: [
      "$=\\mathrm{SUM}(\\mathrm{A1{:}A10})$",
      "$=\\mathrm{AVERAGE}(\\mathrm{A1{:}A10})$",
      "$=\\mathrm{MEDIAN}(\\mathrm{A1{:}A10})$",
      "$=\\mathrm{COUNT}(\\mathrm{A1{:}A10})$",
    ],
    correctIndex: 1,
    explanation:
      "平均は AVERAGE 関数。SUM は合計、MEDIAN は中央値、COUNT は個数。基本中の基本。",
  },
  {
    id: "ds-q2",
    category: "Excel関数",
    difficulty: 2,
    question:
      "標本データから不偏分散の平方根(標本標準偏差)を求めたいときに使う関数を選びなさい。",
    choices: [
      "$=\\mathrm{STDEV.S}(\\text{範囲})$",
      "$=\\mathrm{STDEV.P}(\\text{範囲})$",
      "$=\\mathrm{VAR.P}(\\text{範囲})$",
      "$=\\mathrm{AVERAGE}(\\text{範囲})$",
    ],
    correctIndex: 0,
    explanation:
      "STDEV.S は標本標準偏差(分母 $n-1$)で、母集団からの標本データを扱うときの標準。STDEV.P は分母 $n$ で「データ自体が母集団全体」のとき。",
  },
  {
    id: "ds-q3",
    category: "条件付き集計",
    difficulty: 2,
    question:
      "売上テーブルで「東京」支店の売上額の合計を求めたい。最も適切な式を選びなさい(B 列に支店名、C 列に売上額)。",
    choices: [
      "$=\\mathrm{SUM}(\\mathrm{C{:}C})$",
      "$=\\mathrm{COUNTIF}(\\mathrm{B{:}B}, \\text{\"東京\"})$",
      "$=\\mathrm{SUMIF}(\\mathrm{B{:}B}, \\text{\"東京\"}, \\mathrm{C{:}C})$",
      "$=\\mathrm{AVERAGEIF}(\\mathrm{B{:}B}, \\text{\"東京\"}, \\mathrm{C{:}C})$",
    ],
    correctIndex: 2,
    explanation:
      "条件付き合計は SUMIF。第1引数=条件範囲、第2引数=条件、第3引数=合計範囲。COUNTIF は件数、AVERAGEIF は条件付き平均、SUM は条件なしの合計。",
  },
  {
    id: "ds-q4",
    category: "セル参照",
    difficulty: 2,
    question:
      "Excel で式をコピーするとき、参照先を固定したい場合の表記として最も適切なものを選びなさい。",
    choices: [
      "A1",
      "$\\$A\\$1$",
      "&A&1",
      "A!1",
    ],
    correctIndex: 1,
    explanation:
      "$ マークが「絶対参照」の印。$A$1 は行も列も固定。$A1 は列だけ固定、A$1 は行だけ固定(複合参照)。F4 キーで切り替えできる。",
  },
  {
    id: "ds-q5",
    category: "ピボットテーブル",
    difficulty: 2,
    question:
      "ピボットテーブルで「商品別 × 月別の売上クロス集計」を作るとき、配置として最も適切な組み合わせを選びなさい。",
    choices: [
      "行 = 商品、列 = 月、値 = 売上(合計)",
      "行 = 売上、列 = 商品、値 = 月",
      "行 = 商品、列 = 売上、値 = 月",
      "フィルタ = 商品、行 = 売上、値 = 月",
    ],
    correctIndex: 0,
    explanation:
      "クロス集計は「行 = 1 つ目の軸、列 = 2 つ目の軸、値 = 集計したい数値」が基本。商品別×月別の売上なら、商品を行・月を列・売上を値(合計)に配置する。",
  },
  {
    id: "ds-q6",
    category: "可視化",
    difficulty: 1,
    question:
      "「2 つの量の関係」(例: 身長と体重)を可視化するのに最も適切なグラフを選びなさい。",
    choices: [
      "棒グラフ",
      "円グラフ",
      "散布図",
      "折れ線グラフ",
    ],
    correctIndex: 2,
    explanation:
      "2 変数の関係は散布図(scatter plot)が定番。横軸 = 一方の変数、縦軸 = もう一方の変数として点を打つと、相関の強さや傾向が一目でわかる。棒は大きさ比較、円は構成比、折れ線は時間変化に向く。",
  },
  {
    id: "ds-q7",
    category: "統計の指標",
    difficulty: 2,
    question:
      "Excel の `=CORREL(A:A, B:B)` の戻り値として最も適切な範囲を選びなさい。",
    choices: [
      "$0$ から $1$ の値",
      "$-1$ から $1$ の値",
      "$0$ から $\\infty$ の値",
      "整数のみ",
    ],
    correctIndex: 1,
    explanation:
      "CORREL はピアソンの相関係数を返す関数。相関係数は必ず $-1 \\leq r \\leq 1$ の範囲。$+1$ は完全な正の相関、$-1$ は完全な負の相関、$0$ は無相関。",
  },
  {
    id: "ds-q8",
    category: "回帰分析",
    difficulty: 3,
    question:
      "Excel の「データ分析」アドインで単回帰分析を実行したところ、決定係数 $R^2 = 0.81$ と出力された。最も適切な解釈を選びなさい。",
    choices: [
      "回帰直線の傾きが 0.81",
      "$y$ の分散の 81% を $x$ で説明できる",
      "誤差が 81%",
      "データが 81 個ある",
    ],
    correctIndex: 1,
    explanation:
      "決定係数 $R^2$ は「応答変数 $y$ の全分散のうち、回帰モデルで説明できた割合」。$R^2 = 0.81$ は「$y$ のばらつきの 81% が $x$ で説明できる」と読む。$0$ なら効果なし、$1$ なら完全フィット。",
  },
  {
    id: "ds-q9",
    category: "Excel関数",
    difficulty: 2,
    question:
      "Excel で 2 群の平均の差を両側 t 検定したい(等分散仮定なし)。最も適切な式を選びなさい。",
    choices: [
      "$=\\mathrm{T.TEST}(範囲1, 範囲2, 1, 2)$",
      "$=\\mathrm{T.TEST}(範囲1, 範囲2, 2, 2)$",
      "$=\\mathrm{T.TEST}(範囲1, 範囲2, 2, 3)$",
      "$=\\mathrm{T.TEST}(範囲1, 範囲2, 1, 1)$",
    ],
    correctIndex: 2,
    explanation:
      "T.TEST(範囲1, 範囲2, 尾, 種類)。尾=2 は両側、種類=3 は等分散仮定なし(Welch 検定)。種類=2 は等分散の独立 2 標本、=1 は対応あり。",
  },
  {
    id: "ds-q10",
    category: "可視化",
    difficulty: 1,
    question:
      "「全体に占める割合」を表現するのに最も適切なグラフを選びなさい(項目は 4 つ程度)。",
    choices: [
      "ヒストグラム",
      "円グラフ",
      "散布図",
      "箱ひげ図",
    ],
    correctIndex: 1,
    explanation:
      "全体を 100% としたシェアを見るには **円グラフ** が定番(項目少なめのとき)。ヒストグラムは 1 変数の分布、散布図は 2 変数の関係、箱ひげ図は群間比較に向く。",
  },
  {
    id: "ds-q11",
    category: "回帰分析",
    difficulty: 2,
    question:
      "Excel の回帰分析出力の「**有意 F**」が示すものとして最も適切なものを選びなさい。",
    choices: [
      "個別の説明変数の有意性",
      "モデル全体(全係数 = 0 という H₀)の有意性",
      "決定係数の値",
      "残差の正規性",
    ],
    correctIndex: 1,
    explanation:
      "「有意 F」は分散分析(ANOVA)による F 検定の p 値で、「全説明変数の係数が 0」という帰無仮説を検定する **モデル全体の有意性** を示す。0.05 未満なら「少なくとも 1 つの説明変数は有効」。",
  },
  {
    id: "dsb-q12",
    difficulty: 1,
    category: "確率分布",
    question:
      "サイコロを 6 回振って 1 が出る回数 $X$ の期待値として最も適切なものはどれか。",
    choices: ["$1/6$", "$1$", "$3$", "$6$"],
    correctIndex: 1,
    explanation:
      "$X \\sim B(6, 1/6)$ で $E[X] = np = 6 \\times 1/6 = 1$。1 回あたり成功確率 $1/6$、6 回試行なので平均 1 回。",
  },
  {
    id: "dsb-q13",
    difficulty: 2,
    category: "信頼区間",
    question:
      "標本平均 $\\bar{x} = 50$、標準偏差 $\\sigma = 10$、$n = 100$ のとき、母平均の 95% 信頼区間として最も近いものはどれか(z = 1.96)。",
    choices: ["[48.04, 51.96]", "[40, 60]", "[49.0, 51.0]", "[30, 70]"],
    correctIndex: 0,
    explanation:
      "$\\bar{x} \\pm 1.96 \\cdot \\sigma/\\sqrt{n} = 50 \\pm 1.96 \\cdot 10/10 = 50 \\pm 1.96$ → [48.04, 51.96]。",
  },
  {
    id: "dsb-q14",
    difficulty: 2,
    category: "仮説検定",
    question:
      "p 値 = 0.03、有意水準 α = 0.05 のとき、最も適切な結論はどれか。",
    choices: [
      "帰無仮説を棄却する(p < α)",
      "帰無仮説を採択する",
      "有意水準を変更する",
      "サンプルが足りないと判断する",
    ],
    correctIndex: 0,
    explanation:
      "p 値 < 有意水準のとき帰無仮説を棄却する。p 値が 0.03 で α = 0.05 より小さいので、帰無仮説のもとで観測された結果はかなり起こりにくいと判断し棄却する。",
  },
  {
    id: "dsb-q15",
    difficulty: 1,
    category: "データの分布",
    question:
      "右に裾の長い分布(右に歪んだ分布)では、平均値・中央値・最頻値の大小関係として最も適切なものはどれか。",
    choices: [
      "最頻値 < 中央値 < 平均値",
      "平均値 < 中央値 < 最頻値",
      "中央値 < 最頻値 < 平均値",
      "三者すべて等しい",
    ],
    correctIndex: 0,
    explanation:
      "右に裾が長いと外れ値的な大きな値が平均を押し上げ、最頻値 < 中央値 < 平均値 の順になる。例: 所得分布。",
  },
  {
    id: "dsb-q16",
    difficulty: 2,
    category: "二変量データ",
    question:
      "相関係数 $r = -0.85$ について最も適切な解釈はどれか。",
    choices: [
      "強い負の線形関係がある",
      "強い正の線形関係がある",
      "ほぼ無相関",
      "因果関係が証明された",
    ],
    correctIndex: 0,
    explanation:
      "$|r|$ が 0.7 以上で強い相関、符号が負なので負の線形関係。ただし相関は因果を意味しない(共変動するだけ)。",
  },
  {
    id: "dsb-q17",
    difficulty: 2,
    category: "サンプリング",
    question:
      "層化抽出法の利点として最も適切な説明はどれか。",
    choices: [
      "母集団内の各層の特性を反映でき、推定精度が高い",
      "計算が最も簡単",
      "サンプルサイズを最小化できる",
      "全数調査と同等の精度を保証する",
    ],
    correctIndex: 0,
    explanation:
      "層化抽出は母集団を性質ごとに層に分け、各層から比例的に抽出する。各層が代表されるため、層内分散が小さければ単純無作為より精度が上がる。",
  },
  {
    id: "dsb-q18",
    difficulty: 3,
    category: "データクレンジング",
    question:
      "欠損値処理の方法として「平均値補完」を選ぶリスクとして最も適切な説明はどれか。",
    choices: [
      "分散を過小評価し、相関や検定統計量にバイアスを与える",
      "計算に時間がかかる",
      "欠損が増える",
      "メモリ消費が増大する",
    ],
    correctIndex: 0,
    explanation:
      "平均補完は欠損行の値を全部平均に固定するため、変動を抑え分散を過小評価する。多重補完(MICE)などの手法のほうが実務では推奨される。",
  },
  {
    id: "dsb-q19",
    difficulty: 2,
    category: "機械学習",
    question:
      "教師あり学習における「過学習(overfitting)」の典型的な兆候として最も適切なものはどれか。",
    choices: [
      "訓練データの精度は高いが、テストデータの精度が大きく劣る",
      "訓練・テスト両方で精度が低い",
      "訓練に時間がかかる",
      "メモリ消費が大きい",
    ],
    correctIndex: 0,
    explanation:
      "過学習は『訓練データに合わせすぎて未知データに般化しない』状態。訓練精度↑・テスト精度↓のギャップが特徴。対策は正則化・ドロップアウト・データ増強・交差検証によるモデル選択。",
  },
  {
    id: "dsb-q20",
    difficulty: 3,
    category: "回帰分析",
    question:
      "重回帰分析で多重共線性が疑われるとき、最も適切な対処法はどれか。",
    choices: [
      "VIF を確認し、5〜10 を超える変数を削減または PCA で次元圧縮",
      "サンプルサイズを増やすだけで解決",
      "モデルを線形からロジスティックに変える",
      "目的変数を対数変換する",
    ],
    correctIndex: 0,
    explanation:
      "多重共線性は説明変数同士の強い相関で起きる。VIF (Variance Inflation Factor) で診断し、相関の強い変数を削除・統合・PCA で対処する。",
  },

  // === Ch4 Excel での仮説検定とカテゴリ分析 ===
  {
    id: "ds-test1",
    difficulty: 2,
    category: "仮説検定",
    question:
      "Excel の `T.TEST` 関数で **対応のある t 検定** を実行する場合、第 4 引数(検定の種類)に指定する値はどれか。",
    choices: [
      "1(対応のある検定)",
      "2(等分散を仮定)",
      "3(Welch、等分散を仮定しない)",
      "0(自動選択)",
    ],
    correctIndex: 0,
    explanation:
      "`T.TEST(範囲1, 範囲2, 尾の数, 検定の種類)` で 検定の種類 = 1: 対応あり、2: 等分散、3: Welch。投薬前後・施策前後など同じ被験者を比較する場合は 1 を指定。",
  },
  {
    id: "ds-test2",
    difficulty: 2,
    category: "仮説検定",
    question:
      "$2 \\times 2$ クロス表で観測度数 $\\begin{pmatrix} 30 & 50 \\\\ 40 & 30 \\end{pmatrix}$ について、セル(男・購入)の期待度数として正しい値はどれか(行合計 80, 70 / 列合計 70, 80 / 総計 150)。",
    choices: [
      "$30$",
      "$33.3$",
      "$37.3$",
      "$45.0$",
    ],
    correctIndex: 2,
    explanation:
      "$E_{ij} = R_i \\cdot C_j / N = 80 \\times 70 / 150 = 5600/150 \\approx 37.33$。期待度数を全セル計算後、$\\chi^2 = \\sum (O-E)^2/E$ で検定統計量。Excel の `CHISQ.TEST(観測, 期待)` で p 値が直接出る。",
  },
  {
    id: "ds-test3",
    difficulty: 2,
    category: "仮説検定",
    question:
      "3 群以上の平均を比較するときに **t 検定の繰り返し** を避け **ANOVA** を使う理由として最も適切なものはどれか。",
    choices: [
      "ANOVA の方が計算が高速だから",
      "3 群を 2 群ずつ繰り返すと第一種の誤りが増殖し、全体の有意水準が制御できなくなるため",
      "ANOVA は標本サイズが小さくてよいから",
      "t 検定は正規分布を仮定しないから",
    ],
    correctIndex: 1,
    explanation:
      "3 群を ABC ペアで 3 回検定すると、各回 α=5% でも全体で $1 - 0.95^3 \\approx 14\\%$ に。**多重比較問題**。ANOVA で全体 α を制御し、その後 Tukey/Bonferroni で個別比較するのが正攻法。",
  },
  {
    id: "ds-test4",
    difficulty: 3,
    category: "仮説検定",
    question:
      "ANOVA の事後検定として、対照群と各処理群の比較に特化した手法はどれか。",
    choices: [
      "Bonferroni 補正",
      "Tukey の HSD",
      "Dunnett 検定",
      "Welch ANOVA",
    ],
    correctIndex: 2,
    explanation:
      "**Dunnett 検定**: 対照群 vs 各処理群の比較に最適化。臨床試験での標準。**Tukey HSD**: 全ペア比較。**Bonferroni**: 最も保守的(α/m)。**Welch ANOVA**: 等分散仮定を緩めた ANOVA。",
  },
  { id: "ds-q25", category: "Excel", difficulty: 2, question: "Excel で **離れたセル群の合計** を計算する関数として最も適切なものを選びなさい。", choices: ["SUM(A1:A5, C1:C5)", "SUMA", "TOTAL", "ADD"], correctIndex: 0, explanation: "**SUM** は複数範囲をカンマ区切りで指定可能。離れたセル群の合計。**SUMIF / SUMIFS** で条件付き合計、**SUMPRODUCT** で配列演算。" },
  { id: "ds-q26", category: "Excel", difficulty: 2, question: "Excel の **VLOOKUP** が **HLOOKUP / XLOOKUP** と異なる点として最も適切なものを選びなさい。", choices: ["VLOOKUP は縦方向(列)検索", "HLOOKUP と同一", "XLOOKUP は古い", "全て横方向"], correctIndex: 0, explanation: "**VLOOKUP**: 縦方向(垂直)。**HLOOKUP**: 横方向(水平)。**XLOOKUP**(2019+): 両方対応 ・ エラー処理 + 範囲指定柔軟、推奨。" },
  { id: "ds-q27", category: "Excel", difficulty: 3, question: "Excel の **ピボットテーブル** の主要要素として **誤っているもの** を選びなさい。", choices: ["行 / 列ラベル / 値 / フィルタ", "Slicer / Timeline", "値の集計方法(合計 / 平均 / 件数)", "GPU 制御"], correctIndex: 3, explanation: "**ピボットテーブル**: 行 / 列 / 値 / フィルタ + Slicer / Timeline + 集計方法選択。**大量データのクロス集計が数クリック**。" },
  { id: "ds-q28", category: "Power Query", difficulty: 3, question: "Excel **Power Query** の用途として最も適切なものを選びなさい。", choices: ["複数データソース → 結合 → クレンジング → 整形を自動化", "セル参照", "VLOOKUP", "条件付き書式"], correctIndex: 0, explanation: "**Power Query**: M 言語で ETL。**繰り返し利用するデータ整形を再現可能 + Refresh で自動更新**。Excel ・ Power BI 共通エンジン。" },
  { id: "ds-q29", category: "Power Pivot", difficulty: 3, question: "Excel **Power Pivot** の DAX で **動的集計を作成** する関数として最も適切なものを選びなさい。", choices: ["CALCULATE", "VLOOKUP", "SUM", "IF"], correctIndex: 0, explanation: "**CALCULATE(<expression>, <filter1>, ...)**: フィルタコンテキストを変更してメジャー再評価。DAX の最重要関数(Power BI と同じ)。" },
  { id: "ds-q30", category: "可視化", difficulty: 3, question: "**散布図** が適切な可視化として最も適切なものを選びなさい。", choices: ["2 つの定量変数の関係 ・ 相関の確認", "離散カテゴリのみ", "時系列のみ", "1 変数の分布"], correctIndex: 0, explanation: "**散布図**: 2 定量変数の関係 + 相関 ・ 外れ値検出。**3 変数目をマーカーサイズ(バブルチャート)・ 色** で追加可。EDA 必須。" },
  { id: "ds-q31", category: "可視化", difficulty: 3, question: "**箱ひげ図(Box Plot)** が示す統計量として **誤っているもの** を選びなさい。", choices: ["第 1 / 第 3 四分位数 + 中央値 + 外れ値", "最小 ・ 最大(ひげ)", "IQR", "平均と標準偏差"], correctIndex: 3, explanation: "**Boxplot**: Q1 / Q2(中央値)/ Q3 / IQR / ひげ(1.5×IQR 内)/ 外れ値。**平均は表示しない**(対象は中央値)。Violin Plot は分布形状も追加。" },
  { id: "ds-q32", category: "前処理", difficulty: 3, question: "**欠損値処理** の方針として **誤っているもの** を選びなさい。", choices: ["欠損率と MCAR/MAR/MNAR 判定", "平均 / 中央値補完(数値)", "最頻値補完(カテゴリ)", "全行削除が常に最適"], correctIndex: 3, explanation: "**欠損値処理**: MCAR / MAR / MNAR で戦略変更。**全行削除はサンプル激減 + バイアス**。**Multiple Imputation / KNN Imputer / MICE** が高度手法。" },
  { id: "ds-q33", category: "前処理", difficulty: 3, question: "**外れ値検出** の代表的手法として **誤っているもの** を選びなさい。", choices: ["IQR 法(Q1-1.5IQR 〜 Q3+1.5IQR の範囲外)", "Z スコア(|z| > 3)", "Isolation Forest", "Random Replace"], correctIndex: 3, explanation: "**外れ値検出**: IQR / Z-score / Mahalanobis 距離 / Isolation Forest / DBSCAN / LOF。**Random Replace は処理 ・ 検出ではない**。" },
  { id: "ds-q34", category: "前処理", difficulty: 3, question: "**標準化(Standardization)** と **正規化(Normalization / Min-Max)** の違いとして最も適切なものを選びなさい。", choices: ["標準化: 平均 0 ・ SD 1 / Min-Max: [0, 1] にスケール", "両者同じ", "標準化は廃止", "Min-Max は不正確"], correctIndex: 0, explanation: "**Standardization**: $(x - \\mu)/\\sigma$ → 平均 0 ・ SD 1。**Min-Max Normalization**: $(x - \\min)/(\\max - \\min)$ → [0, 1]。**算法依存で選択**(KNN / NN は標準化、CNN は Min-Max)。" },
  { id: "ds-q35", category: "回帰", difficulty: 3, question: "**単回帰の OLS 推定量** の重要な仮定として **誤っているもの** を選びなさい。", choices: ["残差の独立 ・ 等分散 ・ 正規性", "線形性", "誤差項と説明変数の独立", "x が y を完全に説明"], correctIndex: 3, explanation: "**OLS 仮定(Gauss-Markov)**: 線形性 / 独立性 / 等分散性 / 誤差正規性 / 内生性なし(x と誤差独立)。**説明力 100% は要求しない**(R² の話)。" },
  { id: "ds-q36", category: "回帰", difficulty: 3, question: "**重回帰** で **多重共線性** が問題となる時の代表的な検出指標を選びなさい。", choices: ["VIF(Variance Inflation Factor)> 10", "F 値", "R²", "p 値のみ"], correctIndex: 0, explanation: "**多重共線性**: 説明変数間の高相関 → 推定量分散爆発。**VIF > 10 で問題**(緩く 5 とも)。**条件指数 / 相関行列 / Ridge 回帰** で対処。" },
  { id: "ds-q37", category: "Logistic", difficulty: 3, question: "**ロジスティック回帰** の出力解釈として最も適切なものを選びなさい。", choices: ["線形結合 → シグモイドで [0, 1] の確率", "符号で分類", "MSE で最適化", "完全に線形"], correctIndex: 0, explanation: "**Logistic**: $p = \\sigma(w^T x) = 1/(1 + e^{-w^T x})$。**Log-likelihood 最大化(MLE)**。**オッズ比 $e^{w_i}$** で説明変数の効果解釈。" },
  { id: "ds-q38", category: "分類評価", difficulty: 3, question: "**F1 スコア** の意味として最も適切なものを選びなさい。", choices: ["Precision と Recall の調和平均", "算術平均", "二乗平均", "幾何平均"], correctIndex: 0, explanation: "**F1 = 2·P·R/(P+R)**(調和平均)。**Precision / Recall のバランス** が必要なときに。**F_β(β=2 で Recall 重視、β=0.5 で Precision 重視)** で重み調整。" },
  { id: "ds-q39", category: "分類評価", difficulty: 3, question: "**ROC 曲線** の縦軸 ・ 横軸として正しいものを選びなさい。", choices: ["縦: TPR(Recall)/ 横: FPR(1-Specificity)", "縦 ・ 横とも Accuracy", "縦: Precision / 横: Recall", "縦: AUC / 横: F1"], correctIndex: 0, explanation: "**ROC**: 縦 TPR vs 横 FPR(閾値変化)。**AUC = ROC 下面積**(0.5=ランダム、1=完璧)。クラス不均衡では **PR 曲線(縦 Precision / 横 Recall)** が好まれる。" },
  { id: "ds-q40", category: "クラスタリング", difficulty: 3, question: "**K-Means クラスタリング** の弱点として **誤っているもの** を選びなさい。", choices: ["球形クラスタを仮定 → 非球形に弱い", "K の事前指定が必要", "初期化依存", "ラベル必須"], correctIndex: 3, explanation: "**K-Means**: 教師なし(ラベル不要)・ K 事前指定 ・ 初期化依存(KMeans++)・ 球形 + 等サイズ前提。**DBSCAN(非球形)・ GMM(楕円)** が代替。" },
  { id: "ds-q41", category: "クラスタリング", difficulty: 3, question: "**シルエットスコア** の値域と解釈として正しいものを選びなさい。", choices: ["[-1, 1]、高いほど凝集 + 分離良", "[0, 1]", "[-∞, ∞]", "[0, ∞]"], correctIndex: 0, explanation: "**Silhouette = (b - a) / max(a, b)**($a$: 自クラスタ内平均距離、$b$: 隣クラスタ平均距離)。**1 に近いほど良い、0 で曖昧、-1 で別クラスタに属すべき**。" },
  { id: "ds-q42", category: "次元削減", difficulty: 3, question: "**PCA(主成分分析)** で **第 1 主成分** が表すものとして最も適切なものを選びなさい。", choices: ["分散最大方向", "平均", "中央値", "ランダム"], correctIndex: 0, explanation: "**PCA**: 共分散行列の固有値分解 → **固有値の大きい順に分散最大方向を採用**。**累積寄与率 80-95% を維持** する次元数を採択。" },
  { id: "ds-q43", category: "Tree", difficulty: 3, question: "**決定木** の分岐基準として **誤っているもの** を選びなさい。", choices: ["Gini 不純度", "情報利得(Entropy)", "MSE / MAE(回帰)", "GPU 数"], correctIndex: 3, explanation: "**決定木分岐基準**: 分類 = Gini / Entropy、回帰 = MSE / MAE / Friedman MSE。**深さ / Leaf Sample 数 / Min Impurity Decrease** で剪定。" },
  { id: "ds-q44", category: "Ensemble", difficulty: 3, question: "**Random Forest** の **Bagging** と **GBDT** の **Boosting** の違いとして最も適切なものを選びなさい。", choices: ["Bagging: 並列 ・ 独立木 ・ 多数決、Boosting: 直列 ・ 残差予測 ・ 重み付き", "両者同じ", "Boosting は廃止", "Bagging は深層"], correctIndex: 0, explanation: "**Bagging(RF)**: ブートストラップ + 独立並列学習 → 多数決(分類)・ 平均(回帰)。**Boosting(GBDT)**: 逐次 ・ 前モデルの残差を補正。XGBoost / LightGBM / CatBoost が代表。" },
  { id: "ds-q45", category: "時系列", difficulty: 3, question: "**時系列の定常性** の意味として最も適切なものを選びなさい。", choices: ["平均 ・ 分散 ・ 自己共分散が時間に依存しない", "周期的", "増加傾向", "ランダム"], correctIndex: 0, explanation: "**定常性(弱定常)**: $E[X_t]$ ・ $Var[X_t]$ ・ $Cov(X_t, X_{t+h})$ が t に依存しない。**ARIMA は定常化(差分)してから AR + MA**。" },
  { id: "ds-q46", category: "AB テスト", difficulty: 3, question: "**A/B テスト** で **第 1 種の過誤(α)** の意味として最も適切なものを選びなさい。", choices: ["実際に差がないのに『ある』と誤判定する確率", "実際の差を見逃す確率", "サンプルサイズ", "効果量"], correctIndex: 0, explanation: "**α(第 1 種、Type I)**: H_0 が真なのに棄却 = False Positive。**β(第 2 種、Type II)**: H_1 が真なのに H_0 維持 = False Negative。**検出力 = 1 - β**。" },
  { id: "ds-q47", category: "ベイズ", difficulty: 3, question: "**ベイズの定理** $P(A|B) = ?$ の正しい式を選びなさい。", choices: ["$P(B|A) P(A) / P(B)$", "$P(A) + P(B)$", "$P(A) P(B)$", "$P(A) / P(B)$"], correctIndex: 0, explanation: "**ベイズの定理**: $P(A|B) = P(B|A) P(A) / P(B)$。**$P(A)$: 事前、$P(A|B)$: 事後、$P(B|A)$: 尤度**。スパムフィルタ / 医療診断で基礎。" },
  { id: "ds-q48", category: "実務", difficulty: 3, question: "DS 基礎の **分析結果報告** で重要な要素として **誤っているもの** を選びなさい。", choices: ["可視化 + 数値", "前提 ・ 限界の明示", "推奨アクション", "完全なる断定"], correctIndex: 3, explanation: "**良い分析報告**: 結論 + 可視化 + 数値根拠 + 前提 ・ 限界(サンプル ・ 期間 ・ 仮定)+ 推奨アクション。**過度な断定は不誠実**。" },
  { id: "ds-q49", category: "倫理", difficulty: 3, question: "**個人情報を含む分析** で **誤っている対応** を選びなさい。", choices: ["匿名化 + Kπ匿名性 / 差分プライバシ", "Pseudonymization(仮名化)", "用途明示 + 同意", "全データを公開"], correctIndex: 3, explanation: "**個人情報取扱**: 匿名化 / 仮名化 / Kπ匿名性 / 差分プライバシ / 暗号化 + 目的同意 + アクセス制御 + 監査ログ。**公開は重大なリスク**。" },
  { id: "ds-q50", category: "次のステップ", difficulty: 1, question: "DS 基礎合格後の次のステップとして最も適切なものを選びなさい。", choices: ["統計検定 3 級 / 2 級 ・ DS 検定リテラシー ・ Python データ分析試験", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**DS 基礎 → 統計検定 ・ DS 検定 ・ Python データ分析** で技術力強化。**DS Expert** で高度な分析手法へ。" },
  { id: "ds-q51", category: "前処理", difficulty: 2, question: "**欠損値** への基本対応として **誤っているもの** を選びなさい。", choices: ["平均値補完", "中央値補完", "リスト削除", "全データ削除して再収集のみ"], correctIndex: 3, explanation: "**欠損値処理**: 平均 / 中央値 / 最頻値補完 ・ KNN 補完 ・ MICE(多重代入)・ 行 / 列削除 ・ 欠損自体を特徴化。**全データ削除は基本的に NG**。MCAR/MAR/MNAR 分析が先。" },
  { id: "ds-q52", category: "前処理", difficulty: 2, question: "**外れ値検出** の基本手法として **誤っているもの** を選びなさい。", choices: ["IQR ベース(1.5×IQR ルール)", "Z スコア($|z| > 3$)", "Isolation Forest", "全件削除"], correctIndex: 3, explanation: "**外れ値検出**: IQR / Z-Score / Isolation Forest / DBSCAN / LOF。**全件削除は当然 NG**。**ドメイン知識による判断**(物理的不可能値 vs 真の珍しい現象)が最重要。" },
  { id: "ds-q53", category: "可視化", difficulty: 2, question: "**カテゴリ別の数値分布比較** に最適なグラフとして最も適切なものを選びなさい。", choices: ["箱ひげ図(Box Plot)/ Violin Plot", "円グラフ", "Pie Chart", "3D Bar"], correctIndex: 0, explanation: "**Box Plot**: 四分位 + 外れ値を 1 つのグラフで表現。**Violin Plot**: Box + 密度(KDE)。**カテゴリ間分布比較**で標準。円 / 3D は避けるべき。" },
  { id: "ds-q54", category: "EDA", difficulty: 2, question: "**EDA(探索的データ分析)** の目的として **最も適切なもの** を選びなさい。", choices: ["データの性質を理解 ・ 仮説生成 ・ 異常 / 偏りの発見 → モデリング前の準備", "モデル学習", "Endpoint デプロイ", "ETL 自動化"], correctIndex: 0, explanation: "**EDA**(Tukey 1977): 数値要約 + 可視化で データの理解 → 仮説生成 → 異常検出 → 特徴量設計。**Confirmatory Data Analysis(CDA)** と対。Jupyter / pandas-profiling / sweetviz が便利。" },
  { id: "ds-q55", category: "統計", difficulty: 2, question: "**相関係数 0.95** と **因果関係** の関係として最も適切なものを選びなさい。", choices: ["相関は強いが因果は別問題(交絡 ・ 偶然 ・ 逆因果の可能性)", "因果確実", "意味なし", "GPU 必要"], correctIndex: 0, explanation: "**Correlation ≠ Causation**: 強い相関も因果を保証しない。**交絡変数 / 逆因果 / 選択バイアス / 偶然**。**因果推論**(DAG / Do 演算子 / RCT)が別途必要。" },
  { id: "ds-q56", category: "サンプリング", difficulty: 2, question: "**層化抽出** の利点として最も適切なものを選びなさい。", choices: ["カテゴリ別比率を維持 → 不均衡データでも代表性確保", "全件抽出", "ランダム性最大", "GPU 不要"], correctIndex: 0, explanation: "**層化抽出**(Stratified Sampling): 性別 / 地域 / クラス比率を母集団と同じに維持。**Train/Test Split・ K-Fold で必須**(不均衡 / 多クラス分類)。" },
  { id: "ds-q57", category: "可視化", difficulty: 2, question: "**Bar Chart** の **0 起点ルール** に関する記述として最も適切なものを選びなさい。", choices: ["棒グラフの Y 軸は必ず 0 開始(差を誇張せず)・ Line / Scatter は例外可", "全て 0 開始", "全て自由開始", "GPU 軸"], correctIndex: 0, explanation: "**Bar Chart の Y 軸 0 起点**: 棒の長さで量を比較するため。**1.0 → 1.1 のグラフを Y 軸 1.0-1.2 で描くと 100% 増に見える誤誘導**。Line/Scatter は 0 起点必須ではない。" },
  { id: "ds-q58", category: "ML", difficulty: 2, question: "**Train / Validation / Test 分割** の典型比率として最も適切なものを選びなさい。", choices: ["6:2:2 や 7:1.5:1.5 等(目安 ・ 大規模では Test を小さく)", "100:0:0", "0:0:100", "GPU 比"], correctIndex: 0, explanation: "**典型分割**: 6:2:2 / 7:1.5:1.5 / 8:1:1。**大規模(100 万件+)**は 98:1:1 でも可。**K-Fold CV** で Train+Val を 1 つにし安定化。**Test は厳格に隔離 ・ 最終評価のみ**。" },
  { id: "ds-q59", category: "ML", difficulty: 2, question: "**過学習(Overfitting)** の対策として **誤っているもの** を選びなさい。", choices: ["正則化(L1/L2)", "Cross Validation", "Early Stopping", "Train データを限界まで増やすほどパラメータも増やす"], correctIndex: 3, explanation: "**過学習対策**: 正則化 / CV / Early Stop / Dropout / データ拡張 / 単純モデル選択。**「パラメータを増やし続ける」**のは逆効果。**バイアス-バリアンスのトレードオフ**理解が肝。" },
  { id: "ds-q60", category: "評価", difficulty: 2, question: "**不均衡分類** で **Accuracy** の代わりに見るべき指標として **誤っているもの** を選びなさい。", choices: ["Precision / Recall / F1", "ROC AUC", "PR AUC", "MAE"], correctIndex: 3, explanation: "**不均衡分類**(99:1 等): Accuracy は無意味(全部 0 予測でも 99%)。**Precision / Recall / F1 / ROC AUC / PR AUC** を見る。**MAE / RMSE は回帰指標**。" },
  { id: "ds-q61", category: "確率", difficulty: 2, question: "**ベイズの定理** $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$ の構成要素として **誤っているもの** を選びなさい。", choices: ["事前確率 $P(A)$", "尤度 $P(B|A)$", "事後確率 $P(A|B)$", "GPU 確率"], correctIndex: 3, explanation: "**ベイズ**: 事後 ∝ 尤度 × 事前。**スパム判定 / 医療診断 / A/B テスト** の基盤。**ベイズ統計** はパラメータも確率分布、**頻度主義**は固定値とみなす点が違い。" },
  { id: "ds-q62", category: "実務", difficulty: 2, question: "**Reproducibility(再現性)** 確保の基本として **誤っているもの** を選びなさい。", choices: ["乱数シード固定", "Notebook + データのバージョン管理", "Docker / Conda 等で環境固定", "実行ログをすぐ消す"], correctIndex: 3, explanation: "**再現性**: シード / Env / コード / データ / 結果ログをすべて保存 ・ Git + DVC + MLflow ・ Docker Image 固定。**ログ削除は再現性 ・ 監査性を破壊**。" },
  { id: "ds-q63", category: "倫理", difficulty: 2, question: "**個人情報を含むデータ分析** の基本として **誤っているもの** を選びなさい。", choices: ["匿名化 / 仮名化 / 集約", "利用目的の同意", "アクセス制限 / 暗号化", "全社員に Read 権限"], correctIndex: 3, explanation: "**個人情報保護法 / GDPR**: 利用目的明示 ・ 同意 ・ 安全管理 ・ 第三者提供制限。**全社員 Read 権限は重大違反**。**Privacy by Design** で最小権限 ・ ロギング ・ 必要なら k-匿名性 / 差分プライバシー。" },
  { id: "ds-q64", category: "可視化", difficulty: 2, question: "**ダッシュボード設計** の基本原則として **誤っているもの** を選びなさい。", choices: ["1 画面 1 メッセージ(KPI 中心)", "色を意味で使い分け", "余白を活用", "全データを 1 画面に詰め込む"], correctIndex: 3, explanation: "**ダッシュボード原則**: KPI Hierarchy(全体→詳細)・ 色は意味付与 ・ 余白で視認性 ・ Drill-Down で詳細。**1 画面詰込はノイズ**。**Stephen Few**(Information Dashboard Design)が古典。" },
  { id: "ds-q65", category: "実務", difficulty: 2, question: "**データドリブン意思決定** の基本フローとして最も適切なものを選びなさい。", choices: ["ビジネス課題定義 → データ収集 → EDA → 仮説検証 / モデリング → 意思決定 → 効果検証", "いきなりモデル学習", "課題なくデータ集めから", "GPU で全件処理のみ"], correctIndex: 0, explanation: "**データドリブン**(CRISP-DM): Business Understanding → Data → EDA → Modeling → Evaluation → Deployment。**課題定義が最重要**。**OSEMN**(Obtain/Scrub/Explore/Model/Interpret)も類似。" },
];
