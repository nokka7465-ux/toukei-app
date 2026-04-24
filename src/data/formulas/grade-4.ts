import type { Formula } from "@/types/content";

export const gradeFourFormulas: Formula[] = [
  {
    id: "mean-basic",
    name: "平均値",
    category: "データの基本",
    tex: "\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}",
    description:
      "n 個のデータをすべて足して、データの個数で割った値。データの「真ん中」を表す最も基本的な代表値。",
  },
  {
    id: "median-basic",
    name: "中央値",
    category: "データの基本",
    tex: "\\mathrm{Med}",
    description:
      "データを小さい順(または大きい順)に並べたときに、ちょうど真ん中にくる値。データの個数が偶数のときは中央2つの平均をとる。",
  },
  {
    id: "mode-basic",
    name: "最頻値",
    category: "データの基本",
    tex: "\\mathrm{Mode}",
    description:
      "データの中で最も多く出現する値。度数分布表では度数が最大の階級の階級値を最頻値とする。",
  },
  {
    id: "range",
    name: "範囲(レンジ)",
    category: "データの基本",
    tex: "R = x_{\\max} - x_{\\min}",
    description:
      "データの最大値から最小値を引いた値。データのばらつきの大きさを最も簡単に表す指標。",
  },
  {
    id: "relative-frequency",
    name: "相対度数",
    category: "データの基本",
    tex: "\\text{相対度数} = \\frac{\\text{その階級の度数}}{\\text{全体の度数}}",
    description:
      "度数分布表で、ある階級の度数が全体に占める割合。合計すると 1 になる。",
  },
  {
    id: "quartile",
    name: "四分位数",
    category: "データの基本",
    tex: "Q_1,\\ Q_2 (= \\mathrm{Med}),\\ Q_3",
    description:
      "データを小さい順に並べて 4 等分する 3 つの値。Q₁ は下位 25%、Q₃ は上位 25% の位置を示す。",
  },
  {
    id: "probability-basic",
    name: "確率の定義",
    category: "確率",
    tex: "P(A) = \\frac{\\text{事象 } A \\text{ の起こる場合の数}}{\\text{起こりうるすべての場合の数}}",
    description:
      "同様に確からしい試行において、事象 A の確率は「A が起こる場合の数」÷「全体の場合の数」で求められる。",
  },
  {
    id: "probability-range",
    name: "確率のとりうる範囲",
    category: "確率",
    tex: "0 \\leq P(A) \\leq 1",
    description:
      "確率は必ず 0 以上 1 以下。決して起こらない事象は 0、必ず起こる事象は 1。",
  },
  {
    id: "complement-basic",
    name: "余事象の確率",
    category: "確率",
    tex: "P(A^c) = 1 - P(A)",
    description:
      "「A が起こらない」確率は、1 から「A が起こる確率」を引いたもの。「少なくとも1つ」型の問題で便利。",
  },
  {
    id: "permutation",
    name: "順列",
    category: "場合の数",
    tex: "{}_n P_r = \\frac{n!}{(n-r)!} = n(n-1)\\cdots(n-r+1)",
    description:
      "異なる n 個の中から r 個を選んで順番に並べる並べ方の総数。並べる順序を区別する。",
  },
  {
    id: "combination",
    name: "組合せ",
    category: "場合の数",
    tex: "{}_n C_r = \\binom{n}{r} = \\frac{n!}{r!\\, (n-r)!}",
    description:
      "異なる n 個の中から r 個を選ぶ選び方の総数。順序は区別しない。",
  },
  {
    id: "factorial",
    name: "階乗",
    category: "場合の数",
    tex: "n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1",
    description:
      "1 から n までの整数の積。異なる n 個を1列に並べる並べ方の総数でもある。約束として $0! = 1$。",
  },
];
