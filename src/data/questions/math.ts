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
  { id: "math-q24", category: "微分", difficulty: 2, question: "**$f(x) = x^3 - 3x^2 + 2$** の極値の個数として正しいものを選びなさい。", choices: ["極大 1 ・ 極小 1", "極大のみ", "極値なし", "極大 2"], correctIndex: 0, explanation: "$f'(x) = 3x^2 - 6x = 3x(x-2) = 0$ → x=0 で極大、x=2 で極小。" },
  { id: "math-q25", category: "微分", difficulty: 3, question: "**$\\ln(x)$** の x=1 周りでの **Taylor 展開** の 2 次まで近似として正しいものを選びなさい。", choices: ["$(x-1) - \\frac{(x-1)^2}{2}$", "$x - x^2/2$", "$1 + x + x^2/2$", "$x + x^2$"], correctIndex: 0, explanation: "**$\\ln(x)$ の x=1 周り Taylor**: $f(1)=0, f'(1)=1, f''(1)=-1$ → $\\ln(x) \\approx (x-1) - \\frac{(x-1)^2}{2}$。" },
  { id: "math-q26", category: "積分", difficulty: 2, question: "**$\\int_0^1 x \\, dx$** の値として正しいものを選びなさい。", choices: ["1/2", "1", "2", "0"], correctIndex: 0, explanation: "$\\int_0^1 x \\, dx = [x^2/2]_0^1 = 1/2$。三角形の面積として直感的にも分かる。" },
  { id: "math-q27", category: "積分", difficulty: 3, question: "**置換積分** $\\int 2x e^{x^2} dx$ の結果として正しいものを選びなさい。", choices: ["$e^{x^2} + C$", "$2e^{x^2}$", "$x^2 e^x$", "$x e^{x^2}$"], correctIndex: 0, explanation: "**$u = x^2$ → $du = 2x dx$** → $\\int e^u du = e^u + C = e^{x^2} + C$。" },
  { id: "math-q28", category: "線形代数", difficulty: 3, question: "**行列 $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$** の固有値として正しいものを選びなさい。", choices: ["2, 3", "0, 0", "5, 0", "6, 1"], correctIndex: 0, explanation: "対角行列の固有値は対角成分そのもの。$|A - \\lambda I| = (2-\\lambda)(3-\\lambda) = 0$ → $\\lambda = 2, 3$。" },
  { id: "math-q29", category: "線形代数", difficulty: 3, question: "**行列式 $\\det \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$** として正しいものを選びなさい。", choices: ["-2", "2", "10", "0"], correctIndex: 0, explanation: "$\\det = ad - bc = 1 \\cdot 4 - 2 \\cdot 3 = 4 - 6 = -2$。**行列式 0 は逆行列なし(特異)**。" },
  { id: "math-q30", category: "線形代数", difficulty: 3, question: "**ベクトル $(3, 4)$ のノルム(L2)** として正しいものを選びなさい。", choices: ["5", "7", "12", "25"], correctIndex: 0, explanation: "$\\|v\\|_2 = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$。**ピタゴラスの定理 ・ 距離 ・ 単位ベクトル正規化に必須**。" },
  { id: "math-q31", category: "線形代数", difficulty: 3, question: "**内積 $(1, 2) \\cdot (3, 4)$** として正しいものを選びなさい。", choices: ["11", "10", "12", "7"], correctIndex: 0, explanation: "$1 \\cdot 3 + 2 \\cdot 4 = 3 + 8 = 11$。**内積 = 0 で直交、$\\cos\\theta = \\frac{u \\cdot v}{\\|u\\| \\|v\\|}$** で類似度。" },
  { id: "math-q32", category: "確率", difficulty: 2, question: "**サイコロを 2 回振って合計が 7 になる確率** として正しいものを選びなさい。", choices: ["6/36", "3/36", "1/6", "1/12"], correctIndex: 0, explanation: "合計 7 のペア: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) の 6 通り。全 36 通り → 6/36 = 1/6。**最も出やすい合計**。" },
  { id: "math-q33", category: "確率", difficulty: 3, question: "**条件付き確率 $P(A|B)$** の定義として正しいものを選びなさい。", choices: ["$P(A \\cap B) / P(B)$", "$P(A) + P(B)$", "$P(A) - P(B)$", "$P(A) \\cdot P(B)$"], correctIndex: 0, explanation: "**条件付き確率 $P(A|B) = P(A \\cap B) / P(B)$**。B が起きた条件下で A の確率。**ベイズの定理** は $P(A|B) = P(B|A)P(A)/P(B)$。" },
  { id: "math-q34", category: "確率", difficulty: 3, question: "**独立事象 A, B** の $P(A \\cap B)$ として正しいものを選びなさい。", choices: ["$P(A) \\cdot P(B)$", "$P(A) + P(B)$", "$P(A) / P(B)$", "$|P(A) - P(B)|$"], correctIndex: 0, explanation: "**独立**: $P(A \\cap B) = P(A) P(B)$。**$P(A|B) = P(A)$** とも同値。Naive Bayes / 確率モデルの基本仮定。" },
  { id: "math-q35", category: "統計", difficulty: 2, question: "データ {2, 4, 6, 8, 10} の **平均** として正しいものを選びなさい。", choices: ["6", "5", "8", "30"], correctIndex: 0, explanation: "$\\bar{x} = (2+4+6+8+10)/5 = 30/5 = 6$。等差数列の平均は中央値と一致。" },
  { id: "math-q36", category: "統計", difficulty: 3, question: "データ {2, 4, 6, 8, 10} の **分散(母分散)** として正しいものを選びなさい。", choices: ["8", "5", "10", "20"], correctIndex: 0, explanation: "$\\bar{x}=6$、偏差 {-4, -2, 0, 2, 4}、偏差² {16, 4, 0, 4, 16} 合計 40 → $\\sigma^2 = 40/5 = 8$。**標本分散** は n-1=4 で割って 10。" },
  { id: "math-q37", category: "統計", difficulty: 3, question: "**正規分布** で平均 ± **2σ** に含まれる確率として最も近いものを選びなさい。", choices: ["約 95%", "約 68%", "約 99.7%", "約 50%"], correctIndex: 0, explanation: "**68-95-99.7 ルール**: 1σ ≈ 68%、2σ ≈ 95%、3σ ≈ 99.7%。**SD 単位** で考えるのが正規分布の基本。" },
  { id: "math-q38", category: "情報量", difficulty: 3, question: "**確率 1/2 の事象の情報量(log_2)** として正しいものを選びなさい。", choices: ["1 bit", "2 bit", "0 bit", "0.5 bit"], correctIndex: 0, explanation: "$I = -\\log_2(p) = -\\log_2(1/2) = 1$ bit。**確率低いほど情報量大**。**エントロピー H = E[I] = -Σ p log p**。" },
  { id: "math-q39", category: "対数", difficulty: 2, question: "**$\\log_2(8)$** の値として正しいものを選びなさい。", choices: ["3", "2", "8", "1"], correctIndex: 0, explanation: "$2^3 = 8$ → $\\log_2(8) = 3$。**底の変換**: $\\log_a(x) = \\log_b(x)/\\log_b(a)$。Python `math.log2`、 `np.log2`。" },
  { id: "math-q40", category: "対数", difficulty: 3, question: "**$\\log(ab) = ?$** として正しいものを選びなさい。", choices: ["$\\log a + \\log b$", "$\\log a \\cdot \\log b$", "$\\log a - \\log b$", "$(\\log a)^b$"], correctIndex: 0, explanation: "**対数の積 = 和**: $\\log(ab) = \\log a + \\log b$。**商 = 差**: $\\log(a/b) = \\log a - \\log b$。**冪 = 乗**: $\\log(a^b) = b \\log a$。" },
  { id: "math-q41", category: "指数", difficulty: 2, question: "**$e^0$** の値として正しいものを選びなさい。", choices: ["1", "0", "e", "∞"], correctIndex: 0, explanation: "**任意の数の 0 乗は 1**($a^0 = 1$、ただし $a \\neq 0$)。$e^0 = 1$。" },
  { id: "math-q42", category: "シグマ", difficulty: 2, question: "**$\\sum_{i=1}^{5} i$** の値として正しいものを選びなさい。", choices: ["15", "10", "20", "5"], correctIndex: 0, explanation: "$1+2+3+4+5 = 15$。**公式 $\\sum_{i=1}^{n} i = n(n+1)/2$** = 5·6/2 = 15。" },
  { id: "math-q43", category: "シグマ", difficulty: 3, question: "**$\\sum_{i=1}^{n} i^2$** の閉形式として正しいものを選びなさい。", choices: ["$\\frac{n(n+1)(2n+1)}{6}$", "$n(n+1)/2$", "$n^2$", "$n^3/3$"], correctIndex: 0, explanation: "**二乗和の公式**: $\\sum i^2 = n(n+1)(2n+1)/6$。**三乗和**: $\\sum i^3 = (n(n+1)/2)^2$。統計の分散計算で多用。" },
  { id: "math-q44", category: "級数", difficulty: 3, question: "**幾何級数 $\\sum_{n=0}^{\\infty} r^n$**(|r| < 1)の収束値として正しいものを選びなさい。", choices: ["$1/(1-r)$", "$1/r$", "$r/(1-r)$", "1"], correctIndex: 0, explanation: "**$\\sum_{n=0}^{\\infty} r^n = 1/(1-r)$**(|r|<1)。Discount Factor / 連続確率 / Markov 鎖の定常分布解析で多用。" },
  { id: "math-q45", category: "ベクトル", difficulty: 3, question: "**コサイン類似度** の値域として正しいものを選びなさい。", choices: ["[-1, 1]", "[0, 1]", "[0, ∞)", "(-∞, ∞)"], correctIndex: 0, explanation: "$\\cos\\theta \\in [-1, 1]$。**1**: 同方向、**0**: 直交、**-1**: 反対方向。**正規化済みベクトルなら内積 = コサイン類似度**。" },
  { id: "math-q46", category: "確率分布", difficulty: 3, question: "**二項分布 B(n, p)** の期待値として正しいものを選びなさい。", choices: ["$np$", "$np(1-p)$", "$1/p$", "$n/p$"], correctIndex: 0, explanation: "**$E[X] = np$、$Var[X] = np(1-p)$**。$n$ 回試行、各試行成功確率 $p$ の成功回数の分布。**コイン投げ / 不良品検査** に。" },
  { id: "math-q47", category: "確率分布", difficulty: 3, question: "**ポアソン分布 Poisson(λ)** の **分散** として正しいものを選びなさい。", choices: ["λ", "λ²", "1/λ", "√λ"], correctIndex: 0, explanation: "**ポアソン**: $E[X] = Var[X] = \\lambda$(平均 = 分散)。**稀な事象の発生回数**(コールセンター到着 ・ ウイルス感染等)。" },
  { id: "math-q48", category: "確率分布", difficulty: 3, question: "**正規分布 N(μ, σ²) の確率密度関数** に含まれない要素を選びなさい。", choices: ["$\\frac{1}{\\sqrt{2\\pi\\sigma^2}}$", "$\\exp(-\\frac{(x-\\mu)^2}{2\\sigma^2})$", "中心極限定理での重要性", "$x^2$ の log"], correctIndex: 3, explanation: "$N(\\mu, \\sigma^2): \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp(-\\frac{(x-\\mu)^2}{2\\sigma^2})$。**中心極限定理** で多数のランダム要素の和が漸近的に正規。" },
  { id: "math-q49", category: "極限", difficulty: 3, question: "**$\\lim_{x \\to 0} \\frac{\\sin x}{x}$** として正しいものを選びなさい。", choices: ["1", "0", "∞", "未定義"], correctIndex: 0, explanation: "**有名な極限**: $\\lim_{x \\to 0} \\sin x / x = 1$。$\\sin x \\approx x$(x が小さいとき)の根拠。微分公式 $(\\sin x)' = \\cos x$ の導出に使用。" },
  { id: "math-q50", category: "次のステップ", difficulty: 1, question: "数学基礎を一通り学んだ後の **統計学 ・ ML への発展ステップ** として最も適切なものを選びなさい。", choices: ["統計検定 4 級 → 3 級 → 2 級 → 準 1 級 と段階的に", "ITパスポート", "簿記 3 級", "再受験"], correctIndex: 0, explanation: "**数学基礎 → 統計検定 ・ G 検定 ・ E 資格** の順で技術と理論を統合。**3 級で記述統計、2 級で推定 ・ 検定 ・ 回帰、準 1 級で多変量 ・ ベイズ** が標準。" },
  { id: "math-q51", category: "線形代数", difficulty: 3, question: "**正方行列 A が対角化可能** な条件として最も適切なものを選びなさい。", choices: ["n 個の線形独立な固有ベクトルを持つ(対称行列は常に対角化可)", "対称のみ", "正則のみ", "0 行列のみ"], correctIndex: 0, explanation: "**対角化可能 ⇔ n 個の独立な固有ベクトル**。**実対称行列**(エルミート)は直交行列で対角化可(**スペクトル定理**)。固有値の重複度=幾何重複度なら OK。" },
  { id: "math-q52", category: "線形代数", difficulty: 3, question: "**SVD(特異値分解)** $A = U\\Sigma V^T$ の用途として **誤っているもの** を選びなさい。", choices: ["低ランク近似(PCA / 圧縮)", "Pseudo-Inverse 計算", "推薦システム(行列分解)", "GPU メモリ管理"], correctIndex: 3, explanation: "**SVD**: 任意の m×n 行列を分解。**PCA / LSI / 推薦 / Image 圧縮 / 最小二乗 / Pseudo-Inverse** に基幹。特異値 $\\sigma_i$ の大きい $k$ 個で近似(**Eckart-Young 定理**)。" },
  { id: "math-q53", category: "微分積分", difficulty: 3, question: "**多変数関数 $f(x, y)$ の極値判定** で **ヘッセ行列の固有値** がどうなれば極小値か選びなさい。", choices: ["全て正(正定値)", "全て負(負定値)", "符号混在", "全てゼロ"], correctIndex: 0, explanation: "**ヘッセ判定**: 勾配=0 の点で **正定値→極小** ・ 負定値→極大 ・ 符号混在→鞍点 ・ 退化→判定不能。1 変数の $f''(x) > 0$ の多次元拡張。" },
  { id: "math-q54", category: "微分積分", difficulty: 3, question: "**Lagrange 未定乗数法** の幾何的意味として最も適切なものを選びなさい。", choices: ["制約面の接線方向に勾配がない(勾配が制約面の法線と平行)点が極値", "勾配がゼロ", "Hessian がゼロ", "全微分"], correctIndex: 0, explanation: "**$\\nabla f = \\lambda \\nabla g$**: 目的関数の勾配と制約面の法線が平行 ⇔ 制約に沿った動きで $f$ が動かない。**SVM の双対 / 経済学の予算制約** の理論的基盤。" },
  { id: "math-q55", category: "確率", difficulty: 3, question: "**条件付き期待値の Tower Property** として正しいものを選びなさい。", choices: ["$E[E[X|Y]] = E[X]$(繰り返しの法則)", "$E[X|Y] = X$", "$E[X|Y] = Y$", "$E[X|Y] = 0$"], correctIndex: 0, explanation: "**Tower / 全期待値の法則**: $E[E[X|Y]] = E[X]$。**ベイズ統計 ・ Martingale ・ EM アルゴリズム** の基礎。**条件付き分散**: $Var[X] = E[Var[X|Y]] + Var[E[X|Y]]$。" },
  { id: "math-q56", category: "確率", difficulty: 3, question: "**確率変数の Moment Generating Function(MGF)** $M_X(t) = E[e^{tX}]$ の用途として最も適切なものを選びなさい。", choices: ["分布を一意に決定 ・ モーメント計算 ・ 和の分布導出", "確率を直接出す", "GPU 学習", "GUI"], correctIndex: 0, explanation: "**MGF**: $M^{(k)}(0) = E[X^k]$ で k 次モーメント。**独立和**: $M_{X+Y}(t) = M_X(t)M_Y(t)$。**特性関数 $\\phi(t) = E[e^{itX}]$** は MGF 存在しない場合も使える。" },
  { id: "math-q57", category: "統計", difficulty: 3, question: "**Fisher 情報量** $I(\\theta) = E\\left[\\left(\\frac{\\partial \\log f}{\\partial \\theta}\\right)^2\\right]$ の意味として最も適切なものを選びなさい。", choices: ["パラメータ $\\theta$ に関するデータの情報量(Cramér-Rao の下限を決める)", "GPU 利用量", "学習量", "認証量"], correctIndex: 0, explanation: "**Fisher 情報量**: パラメータに関する情報量。**Cramér-Rao**: $Var[\\hat\\theta] \\geq 1/I(\\theta)$。**MLE の漸近分散**は $1/I(\\theta)$ で達成 ・ Jeffreys Prior $\\propto \\sqrt{I(\\theta)}$。" },
  { id: "math-q58", category: "最適化", difficulty: 3, question: "**凸関数** の特徴として **誤っているもの** を選びなさい。", choices: ["局所最適 = 大域最適", "$f''(x) \\geq 0$(1 変数)", "Jensen 不等式 $f(E[X]) \\leq E[f(X)]$", "極値が複数存在"], correctIndex: 3, explanation: "**凸関数**: $f(\\lambda x + (1-\\lambda)y) \\leq \\lambda f(x) + (1-\\lambda)f(y)$。**極値は 1 つのみ**(プラトーは可)。Hessian 正定値 = strict 凸。ML 損失関数の重要性質。" },
  { id: "math-q59", category: "最適化", difficulty: 3, question: "**勾配降下法** の **Step Size $\\eta$** が大きすぎる場合の典型現象として最も適切なものを選びなさい。", choices: ["発散(Loss が振動 / 増加)", "収束高速化", "GPU 不要", "認証成功"], correctIndex: 0, explanation: "**Step Size 設計**: 大→発散 ・ 小→収束遅 ・ 適切→収束速。**Armijo / Wolfe 条件**で適応 ・ **Adam / RMSprop** で次元別調整 ・ **Learning Rate Warmup / Decay** が実務定番。" },
  { id: "math-q60", category: "情報理論", difficulty: 3, question: "**エントロピー $H(X) = -\\sum p(x)\\log p(x)$** が最大化される確率分布として最も適切なものを選びなさい。", choices: ["離散一様分布", "正規分布", "デルタ関数", "ベルヌーイ p=0"], correctIndex: 0, explanation: "**最大エントロピー**: 制約なしの離散→一様。**平均 $\\mu$、分散 $\\sigma^2$ 制約**→正規 N(μ,σ²)。**範囲制約**→一様。MaxEnt 原理は Jaynes 提唱、ベイズ事前分布の選択にも応用。" },
  { id: "math-q61", category: "情報理論", difficulty: 3, question: "**KL ダイバージェンス $D_{KL}(p\\|q)$** の特徴として **誤っているもの** を選びなさい。", choices: ["非負($\\geq 0$、等号は $p=q$)", "対称性なし($D_{KL}(p\\|q) \\neq D_{KL}(q\\|p)$ 一般)", "Cross Entropy - Entropy", "距離(三角不等式成立)"], correctIndex: 3, explanation: "**KL**: 非負 ・ 非対称 ・ 三角不等式不成立 → **距離ではない**。**JS Divergence $= \\frac{1}{2}[D_{KL}(p\\|m) + D_{KL}(q\\|m)]$**(対称 ・ 有界)が距離寄り。VAE の損失に活用。" },
  { id: "math-q62", category: "級数", difficulty: 3, question: "**Taylor 展開** $f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots$ の応用として **誤っているもの** を選びなさい。", choices: ["関数近似(線形 ・ 二次)", "Newton 法", "ヘッセ行列での極値判定", "GPU メモリ割当"], correctIndex: 3, explanation: "**Taylor 展開**: 関数を多項式近似。**Newton 法**(2 次近似)・ **Maclaurin 展開**(a=0)・ **二次最適化(L-BFGS)**で活用。ML の理論解析の中核ツール。" },
  { id: "math-q63", category: "確率分布", difficulty: 3, question: "**指数分布 Exp(λ)** の **無記憶性** の意味として最も適切なものを選びなさい。", choices: ["$P(X > s+t | X > s) = P(X > t)$(過去に依らず将来の分布同じ)", "平均ゼロ", "分散無限", "値域有限"], correctIndex: 0, explanation: "**無記憶性**: 待ち時間の分布が現在までの待ち時間に依らない。**離散版は幾何分布**。**ポアソン過程 ・ サービス時間 ・ 故障時刻** モデル。" },
  { id: "math-q64", category: "確率", difficulty: 3, question: "**マルコフ性** の定義として最も適切なものを選びなさい。", choices: ["未来は現在のみに依存し、過去には依存しない($P(X_{n+1}|X_n, X_{n-1}, \\ldots) = P(X_{n+1}|X_n)$)", "独立", "定常", "ガウス"], correctIndex: 0, explanation: "**Markov 性**: 状態系列の未来は現在のみに依存。**MCMC ・ Hidden Markov Model ・ 強化学習(MDP)・ Brown 運動** の理論基盤。" },
  { id: "math-q65", category: "実務", difficulty: 3, question: "ML / DS で使う数学を **最短経路で習得** する優先順位として最も適切なものを選びなさい。", choices: ["線形代数 → 微積分 → 確率統計 → 最適化(の順、後半は並行可)", "幾何のみ", "数論のみ", "歴史のみ"], correctIndex: 0, explanation: "**ML の数学 4 本柱**: 線形代数(ベクトル ・ 行列 ・ 固有値)→ 微分積分(勾配 ・ 連鎖律)→ 確率統計(分布 ・ 推定)→ 凸最適化(SGD / Adam)。**情報理論** は理解深化用に追加。" },
];
