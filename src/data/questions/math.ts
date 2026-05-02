import type { Question } from "@/types/content";

export const mathBasicsQuestions: Question[] = [
  {
    id: "math-q1",
    category: "割合",
    difficulty: 1,
    question:
      "あるテストで $200$ 人中 $40$ 人が合格した。合格率(%)として最も適切なものを選びなさい。",
    choices: ["$10\\%$", "$20\\%$", "$25\\%$", "$40\\%$"],
    correctIndex: 1,
    explanation:
      "合格率 $= 40 \\div 200 = 0.20 = 20\\%$。「比べる量 ÷ もとにする量 × 100」が百分率の基本式。",
  },
  {
    id: "math-q2",
    category: "割合",
    difficulty: 2,
    question:
      "ある町の失業率が $5.0\\%$ から $4.6\\%$ に下がった。減少した「**ポイント数**」として最も適切なものを選びなさい。",
    choices: ["$0.4$ ポイント", "$0.4\\%$", "$8\\%$", "$0.04\\%$"],
    correctIndex: 0,
    explanation:
      "「ポイント」は単純な差。$5.0 - 4.6 = 0.4$ ポイント。一方、減少率(率の率)で言うなら $0.4 / 5.0 = 8\\%$。混同しないよう注意。",
  },
  {
    id: "math-q3",
    category: "指数",
    difficulty: 1,
    question: "$2^3 \\times 2^4$ の値として最も適切なものを選びなさい。",
    choices: ["$2^7 = 128$", "$2^{12} = 4096$", "$2^1 = 2$", "$8 \\times 16 = 128$"],
    correctIndex: 0,
    explanation:
      "指数法則 $a^m \\times a^n = a^{m+n}$ より $2^{3+4} = 2^7 = 128$。選択肢 4 も値は同じだが、指数法則の理解を問うので選択肢 1 が正解の意図。",
  },
  {
    id: "math-q4",
    category: "指数",
    difficulty: 2,
    question:
      "$0.000\\,000\\,5$ を科学記法で表したものとして最も適切なものを選びなさい。",
    choices: [
      "$5 \\times 10^7$",
      "$5 \\times 10^{-7}$",
      "$0.5 \\times 10^{-6}$",
      "$5 \\times 10^{-6}$",
    ],
    correctIndex: 1,
    explanation:
      "$0.000\\,000\\,5 = 5 \\times 10^{-7}$。0 が小数点以下に 6 つ並んだ後 5 が来るので、$10^{-7}$。「$5 \\times 10^{-6}$」だと $0.000\\,005$ なので別の値。",
  },
  {
    id: "math-q5",
    category: "総和",
    difficulty: 1,
    question: "$\\sum_{i=1}^{5} i$ の値として最も適切なものを選びなさい。",
    choices: ["$5$", "$10$", "$15$", "$25$"],
    correctIndex: 2,
    explanation:
      "$1 + 2 + 3 + 4 + 5 = 15$。または公式 $\\dfrac{n(n+1)}{2}$ より $\\dfrac{5 \\times 6}{2} = 15$。",
  },
  {
    id: "math-q6",
    category: "総和",
    difficulty: 2,
    question:
      "データ $x_1 = 2,\\ x_2 = 4,\\ x_3 = 6$ について、$\\sum_{i=1}^{3} x_i^2$ の値として最も適切なものを選びなさい。",
    choices: ["$12$", "$36$", "$56$", "$144$"],
    correctIndex: 2,
    explanation:
      "$\\sum x_i^2 = 2^2 + 4^2 + 6^2 = 4 + 16 + 36 = 56$。「$x_i$ をそれぞれ 2 乗してから足す」ことに注意。$\\left(\\sum x_i\\right)^2 = 12^2 = 144$ とは別物。",
  },
  {
    id: "math-q7",
    category: "対数",
    difficulty: 2,
    question: "$\\log_{10} 1000$ の値として最も適切なものを選びなさい。",
    choices: ["$1$", "$2$", "$3$", "$10$"],
    correctIndex: 2,
    explanation:
      "対数の定義 $\\log_a M = N \\Leftrightarrow a^N = M$ より、$10^3 = 1000$ なので $\\log_{10} 1000 = 3$。",
  },
  {
    id: "math-q8",
    category: "対数",
    difficulty: 3,
    question:
      "対数法則を使って $\\log(x^2 / y)$ を変形したとき、最も適切なものを選びなさい。",
    choices: [
      "$2\\log x \\cdot \\log y$",
      "$2\\log x + \\log y$",
      "$2\\log x - \\log y$",
      "$\\log x^2 \\cdot \\log y^{-1}$",
    ],
    correctIndex: 2,
    explanation:
      "対数法則の「積 → 和」「商 → 差」「累乗 → 係数」を順に適用: $\\log(x^2/y) = \\log x^2 - \\log y = 2\\log x - \\log y$。",
  },
  {
    id: "math-q9",
    difficulty: 2,
    category: "微分",
    question:
      "$f(x) = e^{x}$ の導関数として最も適切なものはどれか。",
    choices: ["$e^{x}$", "$x e^{x-1}$", "$\\ln x$", "$1$"],
    correctIndex: 0,
    explanation:
      "指数関数 $e^x$ の導関数はそのもの $e^x$。これが微積分・確率密度関数で頻出する性質。",
  },
  {
    id: "math-q10",
    difficulty: 2,
    category: "微分",
    question:
      "$f(x) = \\ln x$ の導関数として最も適切なものはどれか($x > 0$)。",
    choices: ["$\\dfrac{1}{x}$", "$x$", "$e^x$", "$\\ln x$"],
    correctIndex: 0,
    explanation:
      "$\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}$。最尤推定の対数尤度関数の微分で重要。",
  },
  {
    id: "math-q11",
    difficulty: 2,
    category: "積分",
    question:
      "$\\displaystyle\\int_0^1 2x \\, dx$ の値はいくつか。",
    choices: ["$1$", "$2$", "$0.5$", "$0$"],
    correctIndex: 0,
    explanation:
      "$\\int 2x \\, dx = x^2 + C$、定積分 = $1^2 - 0^2 = 1$。",
  },
  {
    id: "math-q12",
    difficulty: 3,
    category: "線形代数",
    question:
      "対称行列 $A$ の固有値分解 $A = Q\\Lambda Q^\\top$ について、$Q$ が満たす性質として最も適切なものはどれか。",
    choices: [
      "直交行列($Q^\\top Q = I$)",
      "上三角行列",
      "対角行列",
      "ベクトル",
    ],
    correctIndex: 0,
    explanation:
      "対称行列の固有値分解では $Q$ の列が正規直交基底をなすため、$Q^\\top Q = I$ となる(直交行列)。$\\Lambda$ は固有値を対角に並べた対角行列。",
  },
  {
    id: "math-q13",
    difficulty: 2,
    category: "確率",
    question:
      "事象 $A$ と $B$ が独立のとき、$P(A \\cap B)$ として最も適切な式はどれか。",
    choices: [
      "$P(A) P(B)$",
      "$P(A) + P(B)$",
      "$P(A) - P(B)$",
      "$P(A \\mid B)$",
    ],
    correctIndex: 0,
    explanation:
      "独立とは $P(A \\cap B) = P(A) P(B)$ が成り立つこと。逆にこの等式を独立性の **定義** に取ることもある。",
  },
  {
    id: "math-q14",
    difficulty: 3,
    category: "線形代数",
    question:
      "ベクトル $\\mathbf{u} = (1, 2)$、$\\mathbf{v} = (3, -1)$ の内積として最も適切なものはどれか。",
    choices: ["$1$", "$5$", "$-1$", "$7$"],
    correctIndex: 0,
    explanation:
      "$\\mathbf{u} \\cdot \\mathbf{v} = 1 \\times 3 + 2 \\times (-1) = 3 - 2 = 1$。回帰分析の正規方程式や PCA で頻出する基本演算。",
  },
  {
    id: "math-q15",
    difficulty: 2,
    category: "数列・極限",
    question:
      "$\\displaystyle\\lim_{n \\to \\infty} \\left(1 + \\dfrac{1}{n}\\right)^n$ の値として最も適切なものはどれか。",
    choices: ["$e \\approx 2.718$", "$1$", "$0$", "$\\infty$"],
    correctIndex: 0,
    explanation:
      "ネイピア数 $e$ の定義式の 1 つ。連続複利計算・指数分布・ポアソン分布など、確率統計の至るところに登場する基本定数。",
  },
];
