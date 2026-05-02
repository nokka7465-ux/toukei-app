import type { Question } from "@/types/content";

export const introQuestions: Question[] = [
  {
    id: "intro-q1",
    category: "代表値",
    difficulty: 1,
    question:
      "次の 3 人のテスト点数 $80,\\ 70,\\ 60$ の平均点として最も適切なものを選びなさい。",
    choices: ["$60$ 点", "$65$ 点", "$70$ 点", "$80$ 点"],
    correctIndex: 2,
    explanation:
      "平均は「合計 ÷ 個数」。$(80 + 70 + 60) \\div 3 = 210 \\div 3 = 70$ 点。",
  },
  {
    id: "intro-q2",
    category: "比べる",
    difficulty: 1,
    question:
      "$200$ 円のおかしの値段を「$50$ 円」値引きすると、もとの値段に対する値引き割合(%)はいくつになるか。",
    choices: ["$10$ %", "$20$ %", "$25$ %", "$50$ %"],
    correctIndex: 2,
    explanation:
      "割合 $= 50 \\div 200 = 0.25$。これを百分率にすると $0.25 \\times 100 = 25$ %。",
  },
  {
    id: "intro-q3",
    category: "確率",
    difficulty: 1,
    question:
      "コインを 1 回投げたときに表が出る確率として最も適切なものを選びなさい。",
    choices: [
      "$0$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{1}{2}$",
      "$1$",
    ],
    correctIndex: 2,
    explanation:
      "コインの表と裏が出る場合の数は同じ(同様に確からしい)。表が出る確率 $= 1 \\div 2 = \\dfrac{1}{2}$。",
  },
  {
    id: "intro-q4",
    category: "ばらつき",
    difficulty: 1,
    question:
      "クラス 5 人の身長 $150,\\ 155,\\ 160,\\ 165,\\ 170$ cm について、範囲(最大 − 最小)はいくつか。",
    choices: ["$15$ cm", "$20$ cm", "$25$ cm", "$30$ cm"],
    correctIndex: 1,
    explanation:
      "範囲 $= \\text{最大値} - \\text{最小値} = 170 - 150 = 20$ cm。",
  },
  {
    id: "intro-q5",
    category: "データ",
    difficulty: 2,
    question:
      "クラス全員 40 人のうち、ある質問に「はい」と答えたのが 16 人だった。「はい」と答えた人の相対度数(全体に占める割合)はいくつか。",
    choices: ["$0.16$", "$0.25$", "$0.40$", "$0.64$"],
    correctIndex: 2,
    explanation:
      "相対度数 $= 16 \\div 40 = 0.4$。「全体の 40 % が『はい』と答えた」と読める。",
  },
  {
    id: "intro-q6",
    category: "代表値",
    difficulty: 2,
    question:
      "5 人のテスト点数の平均が 70 点だった。合計点として最も適切なものを選びなさい。",
    choices: ["$70$ 点", "$140$ 点", "$280$ 点", "$350$ 点"],
    correctIndex: 3,
    explanation:
      "平均は「合計 ÷ 個数」。逆算すると合計 $=$ 平均 $\\times$ 個数 $= 70 \\times 5 = 350$ 点。",
  },
  {
    id: "intro-q7",
    category: "比べる",
    difficulty: 2,
    question:
      "ある町の人口が、1 年で $5{,}000$ 人から $5{,}500$ 人に増えた。増加率(%)として最も適切なものを選びなさい。",
    choices: ["$5$ %", "$10$ %", "$50$ %", "$100$ %"],
    correctIndex: 1,
    explanation:
      "増えた人数 $= 5{,}500 - 5{,}000 = 500$ 人。増加率 $= 500 \\div 5{,}000 = 0.1 = 10$ %。",
  },
  {
    id: "intro-q8",
    category: "確率",
    difficulty: 2,
    question:
      "サイコロを 1 回投げたとき、$1$ の目が出る確率として最も適切なものを選びなさい。",
    choices: [
      "$\\dfrac{1}{2}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{1}{12}$",
    ],
    correctIndex: 2,
    explanation:
      "サイコロの目は $1 \\sim 6$ の 6 通り、$1$ が出るのはそのうちの 1 通り。確率 $= 1/6$。",
  },
  {
    id: "intro-q9",
    difficulty: 1,
    category: "代表値",
    question:
      "データ $1, 2, 2, 3, 5, 8$ の最頻値はどれか。",
    choices: ["$1$", "$2$", "$3$", "$5$"],
    correctIndex: 1,
    explanation:
      "最頻値はもっとも多く出現する値。ここでは $2$ が 2 回登場し最多なので $2$。",
  },
  {
    id: "intro-q10",
    difficulty: 1,
    category: "代表値",
    question:
      "データ $4, 6, 8, 10, 12$ の中央値はどれか。",
    choices: ["$6$", "$8$", "$10$", "$8.5$"],
    correctIndex: 1,
    explanation:
      "5 個の値を昇順に並べた真ん中の 3 番目の値が中央値。$8$ が中央。",
  },
  {
    id: "intro-q11",
    difficulty: 2,
    category: "ばらつき",
    question:
      "「すべての値が等しいデータ集合」の標準偏差として最も適切なものはどれか。",
    choices: ["$0$", "$1$", "平均と等しい", "計算不能"],
    correctIndex: 0,
    explanation:
      "全値が等しいなら偏差はすべて 0、よって分散も 0、標準偏差も 0。ばらつきがないことを意味する。",
  },
  {
    id: "intro-q12",
    difficulty: 2,
    category: "確率",
    question:
      "コインを 2 回投げて 2 回とも表が出る確率として最も適切なものはどれか。",
    choices: ["$1/2$", "$1/3$", "$1/4$", "$2/3$"],
    correctIndex: 2,
    explanation:
      "2 回独立試行なので $P = (1/2) \\times (1/2) = 1/4$。",
  },
  {
    id: "intro-q13",
    difficulty: 1,
    category: "割合",
    question:
      "100 人のうち 30 人がテストに合格した。合格率はいくらか。",
    choices: ["$0.30$ または $30\\%$", "$0.03$", "$3\\%$", "$0.7$"],
    correctIndex: 0,
    explanation:
      "合格率 = 合格人数 / 全体 = 30/100 = 0.30 = 30%。",
  },
  {
    id: "intro-q14",
    difficulty: 1,
    category: "グラフ",
    question:
      "「項目別の構成比(全体に対する各項目の占める割合)」を表現するのに最も適したグラフはどれか。",
    choices: ["円グラフ", "折れ線グラフ", "ヒストグラム", "散布図"],
    correctIndex: 0,
    explanation:
      "全体を 100% として各項目のシェアを直感的に見せるのに円グラフが定番。項目数が少ないとき(4-6 個程度)に適する。",
  },
  {
    id: "intro-q15",
    difficulty: 2,
    category: "データの分布",
    question:
      "「ヒストグラムが左右対称で釣鐘形」のとき、平均値と中央値の関係として最も近い記述はどれか。",
    choices: [
      "ほぼ等しい",
      "平均が中央値より大きい",
      "中央値が平均より大きい",
      "比較できない",
    ],
    correctIndex: 0,
    explanation:
      "対称な分布では平均 = 中央値が成り立つ。歪んだ分布になると両者は離れる。",
  },
];
