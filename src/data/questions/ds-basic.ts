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
];
