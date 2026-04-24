import type { Formula } from "@/types/content";

export const gradeTwoFormulas: Formula[] = [
  {
    id: "unbiased-variance",
    name: "不偏分散",
    category: "記述統計・推定量",
    tex: "s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2",
    description:
      "母分散の不偏推定量。標本分散の分母を $n$ ではなく $n-1$ とすることで $E[s^2] = \\sigma^2$ を満たす。",
  },
  {
    id: "standard-error",
    name: "標本平均の標準誤差",
    category: "記述統計・推定量",
    tex: "\\mathrm{SE}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}",
    description:
      "標本平均のばらつきの大きさ。母標準偏差を $\\sqrt{n}$ で割った値で、n を増やすと縮む。",
  },
  {
    id: "poisson",
    name: "ポアソン分布",
    category: "確率分布",
    tex: "P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}",
    description:
      "単位時間あたり平均 λ 回起こる稀な事象の発生回数の分布。$E[X] = V[X] = \\lambda$。",
  },
  {
    id: "geometric",
    name: "幾何分布",
    category: "確率分布",
    tex: "P(X = k) = (1-p)^{k-1} p",
    description:
      "成功確率 $p$ のベルヌーイ試行で、初めて成功するまでの試行回数 $X$ の分布。$E[X] = 1/p$。",
  },
  {
    id: "exponential",
    name: "指数分布",
    category: "確率分布",
    tex: "f(x) = \\lambda e^{-\\lambda x},\\quad x \\geq 0",
    description:
      "ポアソン過程における事象間の待ち時間の分布。$E[X] = 1/\\lambda$, $V[X] = 1/\\lambda^2$。無記憶性をもつ。",
  },
  {
    id: "uniform",
    name: "一様分布",
    category: "確率分布",
    tex: "f(x) = \\frac{1}{b - a},\\quad a \\leq x \\leq b",
    description:
      "区間 $[a,b]$ 上で確率密度が一定となる連続分布。$E[X] = (a+b)/2$, $V[X] = (b-a)^2/12$。",
  },
  {
    id: "chi-square-df",
    name: "カイ二乗分布",
    category: "標本分布",
    tex: "Y = \\sum_{i=1}^{k} Z_i^2 \\sim \\chi^2(k)",
    description:
      "独立な標準正規乱数の2乗和は自由度 $k$ のカイ二乗分布に従う。分散の推定や適合度検定で使う。",
  },
  {
    id: "t-dist",
    name: "t 分布",
    category: "標本分布",
    tex: "T = \\frac{Z}{\\sqrt{Y/k}} \\sim t(k)",
    description:
      "標準正規 $Z$ と自由度 $k$ のカイ二乗 $Y$ が独立のとき $T$ は自由度 $k$ の t 分布に従う。母分散未知の母平均推定に使う。",
  },
  {
    id: "f-dist",
    name: "F 分布",
    category: "標本分布",
    tex: "F = \\frac{Y_1/k_1}{Y_2/k_2} \\sim F(k_1,\\, k_2)",
    description:
      "独立な2つのカイ二乗変数の自由度で割った比の分布。2つの分散の比較や回帰の有意性検定に用いる。",
  },
  {
    id: "clt",
    name: "中心極限定理",
    category: "標本分布",
    tex: "\\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{d} N(0,\\, 1)\\quad (n \\to \\infty)",
    description:
      "母集団の分布によらず、標本平均は $n$ が十分大きいとき近似的に正規分布に従う。大標本理論の基礎。",
  },
  {
    id: "ci-mean-unknown",
    name: "母平均の信頼区間(σ未知)",
    category: "推定",
    tex: "\\bar{X} \\pm t_{\\alpha/2}(n-1)\\, \\frac{s}{\\sqrt{n}}",
    description:
      "母分散が未知で不偏分散 $s^2$ を用いる場合の母平均の信頼区間。自由度 $n-1$ の t 分布を使う。",
  },
  {
    id: "ci-variance",
    name: "母分散の信頼区間",
    category: "推定",
    tex: "\\left[\\frac{(n-1)s^2}{\\chi^2_{\\alpha/2}(n-1)},\\ \\frac{(n-1)s^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\right]",
    description:
      "正規母集団における母分散の信頼区間。カイ二乗分布の上側・下側パーセント点を用いる。",
  },
  {
    id: "z-test-mean",
    name: "母平均の検定(σ既知)",
    category: "仮説検定",
    tex: "Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}",
    description:
      "帰無仮説 $H_0: \\mu = \\mu_0$ の検定統計量。$|Z| > z_{\\alpha/2}$ で両側 $\\alpha$ 棄却。",
  },
  {
    id: "t-test-mean",
    name: "母平均の検定(σ未知)",
    category: "仮説検定",
    tex: "T = \\frac{\\bar{X} - \\mu_0}{s / \\sqrt{n}} \\sim t(n-1)",
    description:
      "母分散未知での母平均の検定。不偏分散 $s^2$ を使い、自由度 $n-1$ の t 分布で棄却判定。",
  },
  {
    id: "two-sample-t",
    name: "2標本 t 検定(等分散)",
    category: "仮説検定",
    tex: "T = \\frac{\\bar{X}_1 - \\bar{X}_2}{s_p\\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}},\\quad s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}",
    description:
      "2群の母平均の差の検定。等分散を仮定し、プールした分散 $s_p^2$ を使う。自由度は $n_1 + n_2 - 2$。",
  },
  {
    id: "proportion-test",
    name: "母比率の検定",
    category: "仮説検定",
    tex: "Z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0 (1 - p_0) / n}}",
    description:
      "帰無仮説 $H_0: p = p_0$ の検定統計量。正規近似を用いるので $np_0, n(1-p_0)$ が十分大きいことが必要。",
  },
  {
    id: "chi-goodness",
    name: "カイ二乗適合度検定",
    category: "仮説検定",
    tex: "\\chi^2 = \\sum_{i} \\frac{(O_i - E_i)^2}{E_i}",
    description:
      "観測度数 $O_i$ と期待度数 $E_i$ の乖離を測る統計量。自由度は $(\\text{カテゴリ数}) - 1 - (\\text{推定パラメータ数})$。",
  },
  {
    id: "chi-independence",
    name: "カイ二乗独立性検定",
    category: "仮説検定",
    tex: "\\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}},\\quad \\mathrm{df} = (r-1)(c-1)",
    description:
      "分割表で行変数と列変数が独立かを検定。期待度数は $E_{ij} = (行計)(列計)/(総計)$。",
  },
  {
    id: "regression-slope",
    name: "単回帰の回帰係数",
    category: "回帰分析",
    tex: "\\hat{\\beta} = \\frac{s_{xy}}{s_x^2} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}",
    description:
      "最小二乗法による単回帰直線の傾き。切片は $\\hat{\\alpha} = \\bar{y} - \\hat{\\beta} \\bar{x}$ で求まる。",
  },
  {
    id: "coefficient-determination",
    name: "決定係数",
    category: "回帰分析",
    tex: "R^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}",
    description:
      "回帰モデルが従属変数の分散をどれだけ説明できたかの指標。$0 \\leq R^2 \\leq 1$、単回帰では $R^2 = r^2$。",
  },
];
