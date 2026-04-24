import type { Formula } from "@/types/content";

export const gradeThreeFormulas: Formula[] = [
  {
    id: "mean",
    name: "標本平均",
    category: "記述統計",
    tex: "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i",
    description:
      "n 個のデータ x₁, x₂, …, xₙ の平均値。データの中心的な位置を示す代表値。",
  },
  {
    id: "median",
    name: "中央値",
    category: "記述統計",
    tex: "\\mathrm{Med} = \\begin{cases} x_{((n+1)/2)} & (n\\ \\text{が奇数}) \\\\ \\dfrac{x_{(n/2)} + x_{(n/2+1)}}{2} & (n\\ \\text{が偶数}) \\end{cases}",
    description:
      "データを昇順に並べたときの中央の値。外れ値の影響を受けにくい代表値。",
  },
  {
    id: "variance",
    name: "標本分散",
    category: "記述統計",
    tex: "s^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2",
    description: "各データと平均との差の2乗の平均。ばらつきを表す指標。",
  },
  {
    id: "sd",
    name: "標本標準偏差",
    category: "記述統計",
    tex: "s = \\sqrt{\\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2}",
    description: "分散の正の平方根。データと同じ単位でばらつきを表現できる。",
  },
  {
    id: "iqr",
    name: "四分位範囲",
    category: "記述統計",
    tex: "\\mathrm{IQR} = Q_3 - Q_1",
    description:
      "第3四分位数 Q₃ と第1四分位数 Q₁ の差。中央50%のデータの広がりを示す。",
  },
  {
    id: "covariance",
    name: "共分散",
    category: "2変数データ",
    tex: "s_{xy} = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})",
    description:
      "2変数の連動を測る指標。正なら同方向、負なら逆方向に変動する傾向。",
  },
  {
    id: "correlation",
    name: "相関係数",
    category: "2変数データ",
    tex: "r = \\frac{s_{xy}}{s_x s_y} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2}\\, \\sqrt{\\sum (y_i - \\bar{y})^2}}",
    description:
      "2変数の直線的な関連の強さ。-1 〜 1 の値をとり、絶対値が大きいほど強い相関。",
  },
  {
    id: "complement",
    name: "余事象の確率",
    category: "確率",
    tex: "P(A^c) = 1 - P(A)",
    description: "事象 A が起こらない確率は、1 から A の確率を引いたもの。",
  },
  {
    id: "addition",
    name: "確率の加法定理",
    category: "確率",
    tex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
    description:
      "A または B が起こる確率。互いに排反なら $P(A \\cap B) = 0$ で単純な和になる。",
  },
  {
    id: "conditional",
    name: "条件付き確率",
    category: "確率",
    tex: "P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}",
    description:
      "事象 A が起こったという条件のもとで B が起こる確率。A と B が独立なら $P(B \\mid A) = P(B)$。",
  },
  {
    id: "multiplication-independent",
    name: "独立事象の乗法定理",
    category: "確率",
    tex: "P(A \\cap B) = P(A)\\, P(B)",
    description: "A と B が独立のとき、両方同時に起こる確率は確率の積。",
  },
  {
    id: "expectation",
    name: "期待値(離散)",
    category: "確率変数",
    tex: "E[X] = \\sum_{i} x_i\\, P(X = x_i)",
    description:
      "確率変数 X の平均的な値。各値にその確率を掛けて和をとる。",
  },
  {
    id: "variance-rv",
    name: "確率変数の分散",
    category: "確率変数",
    tex: "V[X] = E[(X - E[X])^2] = E[X^2] - (E[X])^2",
    description:
      "X の平均まわりのばらつき。計算は $E[X^2]$ から $(E[X])^2$ を引く形が便利。",
  },
  {
    id: "linear-transform",
    name: "線形変換の期待値・分散",
    category: "確率変数",
    tex: "E[aX + b] = aE[X] + b,\\qquad V[aX + b] = a^2 V[X]",
    description:
      "定数倍と定数加算の変換則。分散は定数倍の2乗で効き、定数加算は影響しない。",
  },
  {
    id: "binomial",
    name: "二項分布",
    category: "確率分布",
    tex: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
    description:
      "成功確率 p の独立試行を n 回行ったときの成功回数 X の分布。$E[X] = np$, $V[X] = np(1-p)$。",
  },
  {
    id: "normal-standardize",
    name: "正規分布の標準化",
    category: "確率分布",
    tex: "Z = \\frac{X - \\mu}{\\sigma} \\sim N(0,\\, 1)",
    description:
      "平均 μ, 標準偏差 σ の正規分布を、標準正規分布 N(0,1) に変換する式。",
  },
  {
    id: "ci-mean-known-sigma",
    name: "母平均の信頼区間(σ既知)",
    category: "推定",
    tex: "\\bar{X} \\pm z_{\\alpha/2}\\, \\frac{\\sigma}{\\sqrt{n}}",
    description:
      "母分散が既知のときの母平均の信頼区間。95%なら $z_{0.025} \\approx 1.96$ を用いる。",
  },
  {
    id: "ci-proportion",
    name: "母比率の信頼区間",
    category: "推定",
    tex: "\\hat{p} \\pm z_{\\alpha/2}\\, \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}",
    description:
      "標本比率 p̂ から母比率 p を推定する。サンプルサイズが十分大きいときに正規近似が使える。",
  },
];
