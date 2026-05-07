import type { Formula } from "@/types/content";

/**
 * 統計のための数学基礎の公式集。
 * - 数と式・代数・微積分・線形代数(基礎/発展)・確率・多変数微分の各章で頻出する公式。
 */
export const mathBasicsFormulas: Formula[] = [
  // === 指数・対数 ===
  {
    id: "log-product",
    name: "対数の積の公式",
    category: "指数・対数",
    tex: "\\log_a(xy) = \\log_a x + \\log_a y",
    description:
      "積の対数は対数の和。底 $a$ が共通であれば常に成立。尤度の対数化(log-likelihood)で頻用。",
  },
  {
    id: "log-power",
    name: "対数のべき乗の公式",
    category: "指数・対数",
    tex: "\\log_a(x^k) = k \\log_a x",
    description:
      "$x^k$ の対数は $k \\log_a x$。最尤推定で積の尤度を和に変換するときの基本道具。",
  },
  {
    id: "log-base-change",
    name: "対数の底の変換公式",
    category: "指数・対数",
    tex: "\\log_a x = \\frac{\\log_b x}{\\log_b a}",
    description:
      "底を $a$ から $b$ に変える公式。電卓やプログラミング言語の log は通常 $\\log_e$ または $\\log_{10}$ なので、別の底に揃えるときに使う。",
  },
  {
    id: "exp-derivative",
    name: "$e^x$ の微分",
    category: "微積分",
    tex: "\\frac{d}{dx} e^x = e^x",
    description:
      "$e^x$ は微分しても自分自身。$e$ の本質的特徴で、確率分布(指数・正規・ポアソン)の中核に登場する。",
  },
  {
    id: "ln-derivative",
    name: "自然対数の微分",
    category: "微積分",
    tex: "\\frac{d}{dx} \\ln x = \\frac{1}{x}",
    description:
      "$\\ln x$ の微分は $1/x$。最尤推定で対数尤度を微分するときに必須。",
  },

  // === 和の公式 ===
  {
    id: "arith-sum",
    name: "1 から n までの和",
    category: "数列",
    tex: "\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}",
    description:
      "Gauss の公式とも。標本平均の式 $\\bar x = (1/n)\\sum x_i$ の理解の基礎。",
  },
  {
    id: "square-sum",
    name: "1 から n までの 2 乗和",
    category: "数列",
    tex: "\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}",
    description:
      "分散の計算で間接的に使う。回帰分析の正規方程式にも現れる。",
  },
  {
    id: "geometric-sum",
    name: "等比数列の和",
    category: "数列",
    tex: "\\sum_{k=0}^{n-1} ar^k = a \\cdot \\frac{1 - r^n}{1 - r} \\quad (r \\neq 1)",
    description:
      "$|r| < 1$ で $n \\to \\infty$ のとき $a/(1-r)$ に収束。複利計算・割引現在価値・幾何分布の基礎。",
  },

  // === 微分の主要公式 ===
  {
    id: "chain-rule",
    name: "合成関数の微分(連鎖律)",
    category: "微積分",
    tex: "\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)",
    description:
      "ニューラルネットの誤差逆伝播法の数学的基盤。複雑な関数も内側 → 外側の微分の積で計算できる。",
  },
  {
    id: "product-rule",
    name: "積の微分",
    category: "微積分",
    tex: "\\frac{d}{dx} (f g) = f' g + f g'",
    description:
      "尤度関数の微分・期待値の計算で頻用。",
  },
  {
    id: "quotient-rule",
    name: "商の微分",
    category: "微積分",
    tex: "\\frac{d}{dx} \\left(\\frac{f}{g}\\right) = \\frac{f' g - f g'}{g^2}",
    description:
      "分数で表される統計量(変動係数・相関係数など)を微分するときに使う。",
  },

  // === 線形代数(基礎) ===
  {
    id: "dot-product",
    name: "内積",
    category: "線形代数(基礎)",
    tex: "\\boldsymbol{u} \\cdot \\boldsymbol{v} = \\sum_{i=1}^{n} u_i v_i = \\|\\boldsymbol{u}\\| \\|\\boldsymbol{v}\\| \\cos \\theta",
    description:
      "ベクトルの基本演算。回帰の正規方程式・PCA の射影・コサイン類似度の中核。",
  },
  {
    id: "matrix-product",
    name: "行列積",
    category: "線形代数(基礎)",
    tex: "(AB)_{ij} = \\sum_{k} A_{ik} B_{kj}",
    description:
      "$A$ の $i$ 行と $B$ の $j$ 列の内積で $(i,j)$ 成分を計算。$A_{m\\times k}$ と $B_{k\\times n}$ で $AB_{m\\times n}$。",
  },
  {
    id: "matrix-determinant-2x2",
    name: "2x2 行列の行列式",
    category: "線形代数(基礎)",
    tex: "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc",
    description:
      "$\\det = 0$ で逆行列なし(特異)。固有値の積、行列の体積尺度としての意味も。",
  },
  {
    id: "matrix-inverse-2x2",
    name: "2x2 行列の逆行列",
    category: "線形代数(基礎)",
    tex: "A^{-1} = \\frac{1}{\\det A} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
    description:
      "$A^{-1} A = I$。$\\det A = 0$ なら存在しない。回帰係数の閉形式解 $\\hat\\beta = (X^\\top X)^{-1} X^\\top y$ で本質的。",
  },

  // === 線形代数(発展, Ch7) ===
  {
    id: "characteristic-equation",
    name: "特性方程式",
    category: "線形代数(発展)",
    tex: "\\det(A - \\lambda I) = 0",
    description:
      "固有値 $\\lambda$ を求める方程式。$n \\times n$ 行列なら $n$ 個(重複・複素数を含む)。手計算では 2x2/3x3 までが現実的。",
  },
  {
    id: "eigen-equation",
    name: "固有方程式",
    category: "線形代数(発展)",
    tex: "A\\boldsymbol{v} = \\lambda \\boldsymbol{v}",
    description:
      "行列 $A$ の作用が方向 $\\boldsymbol v$ を変えず、長さだけ $\\lambda$ 倍する関係。固有ベクトルは『軸として動かない方向』。",
  },
  {
    id: "trace-eigenvalue",
    name: "トレースと固有値",
    category: "線形代数(発展)",
    tex: "\\mathrm{tr}(A) = \\sum_{i=1}^{n} \\lambda_i, \\quad \\det(A) = \\prod_{i=1}^{n} \\lambda_i",
    description:
      "トレース = 固有値の和、行列式 = 固有値の積。検算の鉄則。",
  },
  {
    id: "diagonalization",
    name: "対角化",
    category: "線形代数(発展)",
    tex: "A = P \\Lambda P^{-1}",
    description:
      "$P$ は固有ベクトルを列に並べた行列、$\\Lambda$ は固有値を対角に並べた対角行列。$A^k = P\\Lambda^k P^{-1}$ でべき乗が高速。",
  },
  {
    id: "spectral-decomposition",
    name: "スペクトル分解(対称行列)",
    category: "線形代数(発展)",
    tex: "A = Q \\Lambda Q^\\top \\quad (A = A^\\top, \\ Q^\\top Q = I)",
    description:
      "対称行列は直交行列で対角化できる。$P^{-1} = P^\\top$ となり扱いが楽。PCA の数学的基盤。",
  },
  {
    id: "svd",
    name: "特異値分解(SVD)",
    category: "線形代数(発展)",
    tex: "A = U \\Sigma V^\\top, \\quad U, V\\,\\text{直交}, \\quad \\Sigma = \\mathrm{diag}(\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0)",
    description:
      "任意の $m \\times n$ 行列に適用可能な分解。$\\sigma_i^2$ は $A^\\top A$ の固有値。PCA・推薦システム・LoRA の理論的基盤。",
  },
  {
    id: "low-rank-approx",
    name: "低ランク近似(Eckart-Young)",
    category: "線形代数(発展)",
    tex: "A_k = \\sum_{i=1}^{k} \\sigma_i \\boldsymbol{u}_i \\boldsymbol{v}_i^\\top",
    description:
      "上位 $k$ 個の特異値だけ残した最良 rank-$k$ 近似。フロベニウスノルム最小化の意味で最適。画像圧縮・LoRA で常用。",
  },
  {
    id: "quadratic-form",
    name: "二次形式",
    category: "線形代数(発展)",
    tex: "Q(\\boldsymbol{x}) = \\boldsymbol{x}^\\top A \\boldsymbol{x} = \\sum_{i,j} A_{ij} x_i x_j",
    description:
      "対称行列 $A$ について定義。多変量正規分布の指数部・SVM の双対問題・最適化の二階条件で頻用。",
  },
  {
    id: "positive-definite",
    name: "正定値行列の判定",
    category: "線形代数(発展)",
    tex: "A\\,\\text{正定値} \\iff \\forall \\boldsymbol{x} \\neq \\boldsymbol{0}, \\ \\boldsymbol{x}^\\top A \\boldsymbol{x} > 0 \\iff \\text{すべての固有値} > 0",
    description:
      "対称行列の凸性判定。共分散行列の逆行列・SVM のカーネル行列で必要。ヘッセ行列が正定値なら極小点。",
  },

  // === 確率・期待値 ===
  {
    id: "expected-value-discrete",
    name: "離散の期待値",
    category: "確率",
    tex: "E[X] = \\sum_{i} x_i \\cdot P(X = x_i)",
    description:
      "離散確率変数の重み付き平均。連続の場合は $\\int x f(x) dx$。",
  },
  {
    id: "variance-formula",
    name: "分散の定義式",
    category: "確率",
    tex: "V[X] = E[(X - E[X])^2] = E[X^2] - (E[X])^2",
    description:
      "計算では右辺の $E[X^2] - (E[X])^2$ が便利。標本分散の公式 $\\hat\\sigma^2 = \\overline{x^2} - \\bar x^2$ もこれが起源。",
  },
  {
    id: "linearity-expectation",
    name: "期待値の線形性",
    category: "確率",
    tex: "E[aX + bY + c] = a E[X] + b E[Y] + c",
    description:
      "$X, Y$ が独立かどうかに関係なく成立。確率の定理の中で最も汎用。回帰の予測値の解釈に直結。",
  },
  {
    id: "variance-linearity",
    name: "分散の線形変換",
    category: "確率",
    tex: "V[aX + b] = a^2 V[X]",
    description:
      "定数項 $b$ は分散に影響しない、係数は 2 乗で効く。標準化 $(X - \\mu)/\\sigma$ で分散 1 に揃う基礎。",
  },
  {
    id: "covariance-formula",
    name: "共分散",
    category: "確率",
    tex: "\\mathrm{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]",
    description:
      "2 変数の連動度合い。独立 $\\Rightarrow$ 共分散 0、逆は成立しない(線形でない関係を捉えられない)。",
  },

  // === 多変数の微分(Ch6) ===
  {
    id: "partial-derivative",
    name: "偏微分",
    category: "多変数微分",
    tex: "\\frac{\\partial f}{\\partial x_i} = \\lim_{h \\to 0} \\frac{f(\\boldsymbol{x} + h\\boldsymbol{e}_i) - f(\\boldsymbol{x})}{h}",
    description:
      "他の変数を固定して 1 変数の微分。回帰係数の最尤推定で各係数について偏微分=0 から正規方程式が導かれる。",
  },
  {
    id: "gradient",
    name: "勾配ベクトル",
    category: "多変数微分",
    tex: "\\nabla f(\\boldsymbol{x}) = \\left(\\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_n}\\right)^\\top",
    description:
      "関数の最大増加方向を指すベクトル。最急降下法・SGD の心臓部。$-\\nabla f$ 方向に進めば最小化。",
  },
  {
    id: "hessian-matrix",
    name: "ヘッセ行列",
    category: "多変数微分",
    tex: "H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}",
    description:
      "2 階偏導関数の行列。対称行列。正定値なら極小点、負定値なら極大点、不定なら鞍点。ニュートン法で利用。",
  },
];
