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
];
