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
];
