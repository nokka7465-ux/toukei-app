import type { Formula } from "@/types/content";

export const gradePre1Formulas: Formula[] = [
  {
    id: "mgf",
    name: "積率母関数(MGF)",
    category: "確率論",
    tex: "M_X(t) = E[e^{tX}]",
    description:
      "積率母関数。$t$ について何回でも微分でき、$M_X^{(k)}(0) = E[X^k]$ として各次のモーメントを取り出せる。",
  },
  {
    id: "char-fn",
    name: "特性関数",
    category: "確率論",
    tex: "\\varphi_X(t) = E[e^{itX}]",
    description:
      "特性関数はつねに存在し、分布を一意に定める。独立な確率変数の和の分布は特性関数の積として扱える。",
  },
  {
    id: "joint-density",
    name: "同時確率密度と周辺密度",
    category: "多変量分布",
    tex: "f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y)\\, dy",
    description:
      "同時密度 $f_{X,Y}$ から、他方の変数で積分すると周辺密度が得られる。独立なら $f_{X,Y} = f_X f_Y$。",
  },
  {
    id: "multivariate-normal",
    name: "多変量正規分布",
    category: "多変量分布",
    tex: "f(\\mathbf{x}) = \\frac{1}{(2\\pi)^{k/2} |\\Sigma|^{1/2}} \\exp\\!\\left(-\\tfrac{1}{2} (\\mathbf{x} - \\boldsymbol{\\mu})^{\\top} \\Sigma^{-1} (\\mathbf{x} - \\boldsymbol{\\mu})\\right)",
    description:
      "平均ベクトル $\\boldsymbol{\\mu}$、分散共分散行列 $\\Sigma$ の $k$ 次元正規分布。任意の線形結合も正規分布になる。",
  },
  {
    id: "bayes-theorem",
    name: "ベイズの定理",
    category: "ベイズ統計",
    tex: "P(\\theta \\mid D) = \\frac{P(D \\mid \\theta)\\, P(\\theta)}{P(D)}",
    description:
      "事前分布 $P(\\theta)$ と尤度 $P(D \\mid \\theta)$ から事後分布 $P(\\theta \\mid D)$ を得る。ベイズ推論の基礎。",
  },
  {
    id: "conjugate-beta-binomial",
    name: "ベータ-二項の共役性",
    category: "ベイズ統計",
    tex: "\\theta \\sim \\mathrm{Beta}(\\alpha, \\beta),\\ X \\sim \\mathrm{Bin}(n, \\theta) \\Rightarrow \\theta \\mid X = k \\sim \\mathrm{Beta}(\\alpha + k,\\ \\beta + n - k)",
    description:
      "二項尤度にベータ事前分布を組むと、事後もベータ分布。成功数 $k$ と失敗数 $n-k$ が事前パラメータに加算される。",
  },
  {
    id: "map",
    name: "最大事後確率(MAP)推定",
    category: "ベイズ統計",
    tex: "\\hat{\\theta}_{\\mathrm{MAP}} = \\arg\\max_{\\theta}\\, p(\\theta \\mid D) = \\arg\\max_{\\theta}\\, p(D \\mid \\theta)\\, p(\\theta)",
    description:
      "事後分布を最大化する点推定。正則化付き最尤推定と対応する(事前分布=正則化項)。",
  },
  {
    id: "mle",
    name: "最尤推定(MLE)",
    category: "推定理論",
    tex: "\\hat{\\theta}_{\\mathrm{MLE}} = \\arg\\max_{\\theta}\\, \\prod_{i=1}^{n} f(x_i; \\theta)",
    description:
      "尤度関数を最大化するパラメータ。一致性・漸近正規性・漸近有効性(クラメル・ラオの下限達成)をもつ。",
  },
  {
    id: "fisher-information",
    name: "フィッシャー情報量",
    category: "推定理論",
    tex: "I(\\theta) = E\\!\\left[\\left(\\frac{\\partial}{\\partial \\theta}\\log f(X; \\theta)\\right)^{\\!2}\\right] = -E\\!\\left[\\frac{\\partial^2}{\\partial \\theta^2}\\log f(X; \\theta)\\right]",
    description:
      "スコア関数の分散。クラメル・ラオ下限 $\\mathrm{Var}(\\hat{\\theta}) \\geq 1/(n I(\\theta))$ で不偏推定量の精度限界を与える。",
  },
  {
    id: "pca",
    name: "主成分分析(PCA)",
    category: "多変量解析",
    tex: "\\Sigma\\, v_k = \\lambda_k\\, v_k",
    description:
      "分散共分散行列の固有ベクトル $v_k$ が主成分の軸、固有値 $\\lambda_k$ がその主成分の分散。累積寄与率で次元削減を行う。",
  },
  {
    id: "multiple-regression",
    name: "重回帰モデル(行列表示)",
    category: "多変量解析",
    tex: "\\hat{\\boldsymbol{\\beta}} = (X^{\\top} X)^{-1} X^{\\top} \\mathbf{y}",
    description:
      "最小二乗推定量の行列表示。計画行列 $X$ が列独立ならこの形で解ける。残差の分散 $\\sigma^2$ の推定は $\\mathrm{RSS}/(n - p)$。",
  },
  {
    id: "logistic-regression",
    name: "ロジスティック回帰",
    category: "多変量解析",
    tex: "\\log \\frac{p}{1 - p} = \\beta_0 + \\beta_1 x_1 + \\cdots + \\beta_k x_k",
    description:
      "応答変数が二値のとき、ロジット $\\log(p/(1-p))$ を線形回帰でモデル化。係数 $\\beta_j$ はオッズ比の対数と解釈される。",
  },
  {
    id: "anova",
    name: "一元配置分散分析の F 統計量",
    category: "分散分析",
    tex: "F = \\frac{\\mathrm{MS}_{\\mathrm{between}}}{\\mathrm{MS}_{\\mathrm{within}}} \\sim F(k - 1,\\ N - k)",
    description:
      "$k$ 群の平均の差の検定。群間平均平方/群内平均平方が F 分布に従う。群間自由度 $k-1$、群内自由度 $N-k$。",
  },
  {
    id: "ma-process",
    name: "MA(q) 過程",
    category: "時系列解析",
    tex: "X_t = \\mu + \\varepsilon_t + \\theta_1 \\varepsilon_{t-1} + \\cdots + \\theta_q \\varepsilon_{t-q}",
    description:
      "移動平均過程。ホワイトノイズ $\\varepsilon_t$ の有限個の線形結合。常に定常で、自己相関はラグ $q$ より先で $0$ になる。",
  },
  {
    id: "ar-process",
    name: "AR(p) 過程",
    category: "時系列解析",
    tex: "X_t = \\phi_1 X_{t-1} + \\phi_2 X_{t-2} + \\cdots + \\phi_p X_{t-p} + \\varepsilon_t",
    description:
      "自己回帰過程。特性方程式の根がすべて単位円の外にあれば定常。PACF がラグ $p$ で打ち切られる性質で次数を判定。",
  },
  {
    id: "arima",
    name: "ARIMA(p,d,q)",
    category: "時系列解析",
    tex: "(1 - \\phi_1 B - \\cdots - \\phi_p B^p)(1 - B)^d X_t = (1 + \\theta_1 B + \\cdots + \\theta_q B^q)\\varepsilon_t",
    description:
      "$d$ 回差分をとって定常化した後、AR(p)-MA(q) モデルで表現する。非定常時系列の基本モデル。",
  },
  {
    id: "markov-chain",
    name: "マルコフ連鎖の定常分布",
    category: "確率過程",
    tex: "\\pi P = \\pi,\\quad \\sum_i \\pi_i = 1",
    description:
      "推移確率行列 $P$ の左固有ベクトル(固有値1)として定常分布 $\\pi$ が得られる。既約かつ非周期なら一意に存在する。",
  },
  {
    id: "kl-divergence",
    name: "KL ダイバージェンス",
    category: "情報量",
    tex: "D_{\\mathrm{KL}}(P \\| Q) = \\sum_x p(x) \\log \\frac{p(x)}{q(x)}",
    description:
      "確率分布 $P$ と $Q$ の違いを測る非対称な距離。$P = Q$ のとき $0$、それ以外で正。最尤推定とも深く関係する。",
  },
  {
    id: "bootstrap",
    name: "ブートストラップ",
    category: "リサンプリング",
    tex: "\\hat{\\theta}^{*(b)} = T(X_1^{*(b)}, \\ldots, X_n^{*(b)}),\\quad b = 1, \\ldots, B",
    description:
      "観測標本から復元抽出で擬似標本を $B$ 個作り、推定量の分布を近似する。信頼区間や標準誤差の推定に使う。",
  },
];
