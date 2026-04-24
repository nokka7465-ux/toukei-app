import type { Formula } from "@/types/content";

export const gradeOneFormulas: Formula[] = [
  {
    id: "exp-family",
    name: "指数型分布族",
    category: "分布論",
    tex: "f(x; \\theta) = h(x)\\, \\exp\\!\\left(\\sum_{j=1}^{k} \\eta_j(\\theta)\\, T_j(x) - A(\\theta)\\right)",
    description:
      "自然パラメータ $\\eta_j$、十分統計量 $T_j$、キュムラント関数 $A(\\theta)$ による標準形。MLE、共役事前分布、GLM の基礎構造。",
  },
  {
    id: "sufficiency",
    name: "フィッシャー-ネイマン分解定理",
    category: "十分統計量",
    tex: "f(\\mathbf{x}; \\theta) = g(T(\\mathbf{x}); \\theta)\\, h(\\mathbf{x})",
    description:
      "統計量 $T$ が $\\theta$ の十分統計量である必要十分条件は、尤度がこの形に分解されること。",
  },
  {
    id: "rao-blackwell",
    name: "ラオ・ブラックウェルの定理",
    category: "十分統計量",
    tex: "\\tilde{\\theta} = E[\\hat{\\theta} \\mid T],\\quad \\mathrm{MSE}(\\tilde{\\theta}) \\leq \\mathrm{MSE}(\\hat{\\theta})",
    description:
      "不偏推定量を十分統計量で条件付けた推定量は、元の推定量以下の分散を持つ。最良の推定量を作る手続き。",
  },
  {
    id: "lehmann-scheffe",
    name: "レーマン・シェッフェの定理",
    category: "十分統計量",
    tex: "T:\\text{完備十分統計量},\\ \\hat{\\theta}(T):\\text{不偏} \\Rightarrow \\hat{\\theta}(T) \\text{ は UMVUE}",
    description:
      "完備かつ十分な統計量に基づく不偏推定量は、一様最小分散不偏推定量(UMVUE)になる。",
  },
  {
    id: "cramer-rao",
    name: "クラメル・ラオの下限",
    category: "推定理論",
    tex: "\\mathrm{Var}(\\hat{\\theta}) \\geq \\frac{1}{n\\, I(\\theta)}",
    description:
      "正則条件下で不偏推定量の分散の下限。MLE は漸近的にこの下限を達成する(漸近有効性)。",
  },
  {
    id: "delta-method",
    name: "デルタ法",
    category: "漸近理論",
    tex: "\\sqrt{n}(\\hat{\\theta} - \\theta) \\xrightarrow{d} N(0, \\sigma^2) \\Rightarrow \\sqrt{n}(g(\\hat{\\theta}) - g(\\theta)) \\xrightarrow{d} N(0,\\, g'(\\theta)^2 \\sigma^2)",
    description:
      "連続微分可能な変換 $g$ による推定量の漸近分布を求める基本道具。$g'(\\theta) \\neq 0$ が前提。",
  },
  {
    id: "slutsky",
    name: "スラツキーの定理",
    category: "漸近理論",
    tex: "X_n \\xrightarrow{d} X,\\ Y_n \\xrightarrow{p} c \\Rightarrow X_n + Y_n \\xrightarrow{d} X + c,\\ X_n Y_n \\xrightarrow{d} cX",
    description:
      "分布収束と確率収束を組み合わせる基本定理。標準化統計量の漸近分布を扱う際の基礎。",
  },
  {
    id: "likelihood-ratio",
    name: "尤度比検定",
    category: "仮説検定",
    tex: "-2 \\log \\Lambda = -2 \\log \\frac{\\sup_{\\theta \\in \\Theta_0} L(\\theta)}{\\sup_{\\theta \\in \\Theta} L(\\theta)} \\xrightarrow{d} \\chi^2(r)",
    description:
      "ウィルクスの定理。帰無仮説下で $-2 \\log \\Lambda$ は自由度 $r$(制約次元)のカイ二乗に漸近する。",
  },
  {
    id: "wald-test",
    name: "Wald 検定",
    category: "仮説検定",
    tex: "W = (\\hat{\\theta} - \\theta_0)^{\\top}\\, \\widehat{I}(\\hat{\\theta})\\, (\\hat{\\theta} - \\theta_0) \\xrightarrow{d} \\chi^2(r)",
    description:
      "MLE の漸近正規性に基づく検定。尤度比検定・スコア検定と漸近的に等価。",
  },
  {
    id: "score-test",
    name: "スコア検定(ラオ検定)",
    category: "仮説検定",
    tex: "S = U(\\theta_0)^{\\top}\\, I(\\theta_0)^{-1}\\, U(\\theta_0) \\xrightarrow{d} \\chi^2(r)",
    description:
      "帰無仮説下のスコア $U = \\partial \\log L / \\partial \\theta$ の漸近分布に基づく検定。MLE の計算が不要。",
  },
  {
    id: "neyman-pearson",
    name: "ネイマン・ピアソンの補題",
    category: "仮説検定",
    tex: "\\varphi^*(\\mathbf{x}) = \\begin{cases} 1 & \\text{if } L(\\theta_1)/L(\\theta_0) > k \\\\ 0 & \\text{if } L(\\theta_1)/L(\\theta_0) < k \\end{cases}",
    description:
      "単純仮説 $H_0 : \\theta = \\theta_0$ vs $H_1 : \\theta = \\theta_1$ の検定では、尤度比検定が与えられた有意水準で最強力。",
  },
  {
    id: "brownian-motion",
    name: "ブラウン運動(ウィーナー過程)",
    category: "確率過程",
    tex: "B_t - B_s \\sim N(0,\\, t - s),\\ 0 \\leq s < t",
    description:
      "独立増分、正規分布、連続軌道、$B_0 = 0$ を満たす連続時間確率過程。確率解析と金融数学の基盤。",
  },
  {
    id: "ito-formula",
    name: "伊藤の公式",
    category: "確率解析",
    tex: "dX_t = \\mu_t\\, dt + \\sigma_t\\, dB_t \\Rightarrow df(X_t) = f'(X_t)\\, dX_t + \\tfrac{1}{2} f''(X_t)\\, \\sigma_t^2\\, dt",
    description:
      "確率微分方程式における連鎖律。決定論的な連鎖律に $\\tfrac{1}{2} f'' \\sigma^2\\, dt$ 項が加わるのが特徴。",
  },
  {
    id: "em-algorithm",
    name: "EM アルゴリズム",
    category: "計算統計",
    tex: "Q(\\theta \\mid \\theta^{(t)}) = E_{Z \\mid X, \\theta^{(t)}}\\!\\left[\\log L(\\theta; X, Z)\\right]",
    description:
      "E ステップで完全データ対数尤度の条件付き期待値を計算し、M ステップで最大化する反復法。尤度を単調増加させる。",
  },
  {
    id: "mcmc-metropolis",
    name: "メトロポリス・ヘイスティングス比",
    category: "計算統計",
    tex: "\\alpha(x, y) = \\min\\!\\left(1,\\ \\frac{\\pi(y)\\, q(x \\mid y)}{\\pi(x)\\, q(y \\mid x)}\\right)",
    description:
      "目標分布 $\\pi$ からサンプリングする MCMC の受理確率。詳細釣合条件を満たし、$\\pi$ に収束する連鎖を構成する。",
  },
  {
    id: "jensen-inequality",
    name: "イェンセンの不等式",
    category: "不等式",
    tex: "g\\,:\\,\\text{凸}\\ \\Rightarrow\\ g(E[X]) \\leq E[g(X)]",
    description:
      "凸関数について、期待値と関数の順序。KL ダイバージェンスの非負性や EM アルゴリズムの収束性証明で本質的な役割。",
  },
];
