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

  // === Ch7 線形代数の発展 ===
  {
    id: "math-eig1",
    difficulty: 2,
    category: "線形代数",
    question:
      "行列 $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$ の固有値として正しい組合せはどれか。",
    choices: [
      "$\\lambda_1 = 5,\\ \\lambda_2 = 2$",
      "$\\lambda_1 = 4,\\ \\lambda_2 = 3$",
      "$\\lambda_1 = 7,\\ \\lambda_2 = 0$",
      "$\\lambda_1 = 6,\\ \\lambda_2 = 1$",
    ],
    correctIndex: 0,
    explanation:
      "特性方程式 $(4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda-5)(\\lambda-2) = 0$ より $\\lambda = 5, 2$。検算: 和 = トレース $4+3=7$、積 = 行列式 $12-2=10$。",
  },
  {
    id: "math-eig2",
    difficulty: 2,
    category: "線形代数",
    question:
      "対称行列について正しい記述はどれか。",
    choices: [
      "固有値は必ず複素数になる",
      "固有値は必ず実数で、固有ベクトルは互いに直交するように選べる",
      "対角化できないことが多い",
      "行列式は常に正",
    ],
    correctIndex: 1,
    explanation:
      "対称行列(共分散行列・ヘッセ行列など統計で頻出)の固有値は実数、固有ベクトルは直交。これが PCA・スペクトル分解の数学的根拠。",
  },
  {
    id: "math-eig3",
    difficulty: 2,
    category: "線形代数",
    question:
      "$3 \\times 3$ 行列の固有値が $\\{2, 3, 5\\}$ のとき、行列式 $\\det(A)$ はいくらか。",
    choices: [
      "$10$",
      "$30$",
      "$60$",
      "$15$",
    ],
    correctIndex: 1,
    explanation:
      "行列式 = 固有値の積。$\\det(A) = 2 \\times 3 \\times 5 = 30$。同様にトレースは固有値の和 $2+3+5=10$。",
  },
  {
    id: "math-diag1",
    difficulty: 3,
    category: "線形代数",
    question:
      "対角化 $A = P\\Lambda P^{-1}$ ができたとき、$A^{10}$ の効率的な計算方法はどれか。",
    choices: [
      "$A$ を 10 回かけ算する",
      "$A^{10} = P\\Lambda^{10} P^{-1}$ で、$\\Lambda^{10}$ は固有値の 10 乗を対角に並べるだけ",
      "$P^{10} \\Lambda P^{-10}$ と置き換える",
      "対角化ではべき乗は計算できない",
    ],
    correctIndex: 1,
    explanation:
      "$A^k = P\\Lambda^k P^{-1}$。中間の $P^{-1}P$ がすべて打ち消し合い、対角行列のべき乗(=スカラーのべき乗)に帰着する。マルコフ連鎖の長期挙動・指数行列の計算でも本質的に同じトリック。",
  },
  {
    id: "math-svd1",
    difficulty: 2,
    category: "線形代数",
    question:
      "特異値分解 $A = U\\Sigma V^\\top$ について正しい記述はどれか。",
    choices: [
      "$A$ は正方行列でなければならない",
      "$U, V$ は直交行列で、$\\Sigma$ の対角成分(特異値)は非負",
      "特異値は必ず固有値と一致する",
      "SVD は計算コストが大きすぎて実務では使えない",
    ],
    correctIndex: 1,
    explanation:
      "SVD は任意の $m \\times n$ 行列に適用可能。$U, V$ は直交、特異値は $\\sigma_i \\geq 0$。$\\sigma_i^2$ は $A^\\top A$ の固有値で、対称対角化と関連。NumPy / SciPy で 1 行で計算でき、PCA・推薦・LoRA で常用。",
  },
  {
    id: "math-svd2",
    difficulty: 3,
    category: "線形代数",
    question:
      "上位 $k$ 個の特異値だけ残した低ランク近似 $A_k$ について、Eckart-Young の定理が主張することは何か。",
    choices: [
      "$A_k$ はフロベニウスノルムで $A$ から最も離れている",
      "$A_k$ は rank-$k$ の行列の中で、フロベニウスノルム $\\|A - B\\|_F$ を最小化する $B$",
      "$A_k$ は計算上意味のない近似",
      "$A_k$ は必ず元の $A$ と一致する",
    ],
    correctIndex: 1,
    explanation:
      "Eckart-Young の定理: rank 制約付きの最良近似は SVD の上位 $k$ 項を残す形で得られる。画像圧縮・推薦システム(Netflix Prize)・LoRA(LLM の低ランク fine-tune)の理論的基盤。",
  },
  {
    id: "math-quad1",
    difficulty: 2,
    category: "線形代数",
    question:
      "対称行列 $A$ が **正定値** であることと同値な条件はどれか。",
    choices: [
      "すべての固有値が 0",
      "すべての固有値が正",
      "少なくとも 1 つの固有値が正",
      "行列式が 0",
    ],
    correctIndex: 1,
    explanation:
      "正定値 ⇔ すべての固有値 > 0 ⇔ 任意の非ゼロ $\\boldsymbol x$ で $\\boldsymbol x^\\top A \\boldsymbol x > 0$。共分散行列の逆行列・SVM の双対カーネル行列で重要。最適化での『極小判定』は正定値性で行う。",
  },
  {
    id: "math-quad2",
    difficulty: 3,
    category: "線形代数",
    question:
      "ヘッセ行列の固有値が正と負の両方を含む(不定)とき、その点の性質は何か。",
    choices: [
      "極小点",
      "極大点",
      "鞍点(saddle point)",
      "判定不能",
    ],
    correctIndex: 2,
    explanation:
      "ヘッセ行列が不定 ⇔ ある方向で凸・別の方向で凹 ⇔ 鞍点。深層学習の損失曲面では極小よりも鞍点が圧倒的に多いことが知られ、SGD で抜けやすい設計が研究されている。",
  },
];
