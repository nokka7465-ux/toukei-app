import type { Question } from "@/types/content";

export const gradePre1Questions: Question[] = [
  {
    id: "gp1-q1",
    difficulty: 3,
    category: "確率論",
    question:
      "指数分布 $f(x) = \\lambda e^{-\\lambda x}\\ (x \\geq 0)$ の積率母関数として最も適切なものを選びなさい。",
    choices: [
      "$\\dfrac{\\lambda}{\\lambda - t}\\ (t < \\lambda)$",
      "$\\dfrac{\\lambda - t}{\\lambda}$",
      "$e^{\\lambda t}$",
      "$1 - e^{-\\lambda t}$",
    ],
    correctIndex: 0,
    explanation:
      "$M(t) = \\int_0^\\infty e^{tx} \\lambda e^{-\\lambda x}\\, dx = \\lambda \\int_0^\\infty e^{-(\\lambda - t)x}\\, dx = \\dfrac{\\lambda}{\\lambda - t}$($t < \\lambda$ で収束)。",
  },
  {
    id: "gp1-q2",
    difficulty: 2,
    category: "多変量分布",
    question:
      "2変数正規分布に従う $(X, Y)$ について、$X$ と $Y$ の相関係数が $0$ なら両者は独立である。この命題は正しいか。",
    choices: [
      "常に正しい",
      "$X, Y$ が同時に正規分布であれば正しい",
      "一般には正しいが、例外がある",
      "常に誤り",
    ],
    correctIndex: 1,
    explanation:
      "一般には無相関と独立は一致しないが、$X, Y$ の同時分布が2変数正規分布のときは「相関 $= 0$ ⟺ 独立」。",
  },
  {
    id: "gp1-q3",
    difficulty: 2,
    category: "ベイズ統計",
    question:
      "事前分布を $\\theta \\sim \\mathrm{Beta}(2, 2)$ とし、$n = 10$ 回のベルヌーイ試行で成功が $k = 7$ 回得られた。事後分布として最も適切なものを選びなさい。",
    choices: [
      "$\\mathrm{Beta}(7, 3)$",
      "$\\mathrm{Beta}(9, 5)$",
      "$\\mathrm{Beta}(2, 2)$",
      "$\\mathrm{Beta}(12, 4)$",
    ],
    correctIndex: 1,
    explanation:
      "ベータ-二項の共役性より事後 $\\mathrm{Beta}(\\alpha + k,\\ \\beta + n - k) = \\mathrm{Beta}(2 + 7,\\ 2 + 3) = \\mathrm{Beta}(9, 5)$。",
  },
  {
    id: "gp1-q4",
    difficulty: 3,
    category: "ベイズ統計",
    question:
      "ある病気の有病率 $P(D) = 0.01$、検査の感度 $P(+ \\mid D) = 0.99$、偽陽性率 $P(+ \\mid D^c) = 0.05$ のとき、陽性と判定された人が実際に病気である確率(陽性的中率)として最も近いものを選びなさい。",
    choices: ["約 $0.17$", "約 $0.50$", "約 $0.83$", "約 $0.99$"],
    correctIndex: 0,
    explanation:
      "$P(D \\mid +) = \\dfrac{0.99 \\times 0.01}{0.99 \\times 0.01 + 0.05 \\times 0.99} = \\dfrac{0.0099}{0.0099 + 0.0495} \\approx 0.167$。",
  },
  {
    id: "gp1-q5",
    difficulty: 2,
    category: "推定理論",
    question:
      "平均 $\\mu$、既知分散 $\\sigma^2$ の正規分布から $n$ 個の標本を得たとき、$\\mu$ のフィッシャー情報量として最も適切なものを選びなさい(標本全体での値)。",
    choices: [
      "$\\sigma^2 / n$",
      "$n / \\sigma^2$",
      "$n \\sigma^2$",
      "$1 / \\sigma^2$",
    ],
    correctIndex: 1,
    explanation:
      "1観測あたりの情報量は $1/\\sigma^2$。独立なら情報量は加法的で、$n$ 個の標本では $n/\\sigma^2$。$\\mathrm{Var}(\\bar{X}) = \\sigma^2/n$ と対応する。",
  },
  {
    id: "gp1-q6",
    difficulty: 2,
    category: "推定理論",
    question:
      "最尤推定量が一般にもつ性質として最も適切でないものを選びなさい。",
    choices: [
      "一致性(標本サイズ $\\to \\infty$ で真値に確率収束)",
      "漸近正規性",
      "必ず不偏である",
      "漸近的にクラメル・ラオ下限を達成する(漸近有効性)",
    ],
    correctIndex: 2,
    explanation:
      "MLE は一致性・漸近正規性・漸近有効性をもつが、有限標本では一般に不偏ではない(例:正規分布の分散の MLE は下方バイアスをもつ)。",
  },
  {
    id: "gp1-q7",
    difficulty: 1,
    category: "多変量解析",
    question:
      "主成分分析において、分散共分散行列の固有値が $\\lambda_1 = 5,\\ \\lambda_2 = 3,\\ \\lambda_3 = 1.5,\\ \\lambda_4 = 0.5$ であった。第2主成分までの累積寄与率として最も近いものを選びなさい。",
    choices: ["$50\\%$", "$65\\%$", "$80\\%$", "$95\\%$"],
    correctIndex: 2,
    explanation:
      "固有値の総和 $= 10$。累積寄与率 $= (5 + 3)/10 = 0.80 = 80\\%$。",
  },
  {
    id: "gp1-q8",
    difficulty: 2,
    category: "多変量解析",
    question:
      "ロジスティック回帰 $\\log(p/(1-p)) = \\beta_0 + \\beta_1 x$ で $\\beta_1 = 0.693$ と推定されたとき、$x$ が1単位増えたときのオッズ比として最も近いものを選びなさい。",
    choices: ["$0.69$", "$1.00$", "$1.69$", "$2.00$"],
    correctIndex: 3,
    explanation:
      "オッズ比 $= e^{\\beta_1} = e^{0.693} \\approx 2.0$。$\\ln 2 \\approx 0.693$ を利用。",
  },
  {
    id: "gp1-q9",
    difficulty: 2,
    category: "分散分析",
    question:
      "一元配置分散分析で $3$ 群合計 $N = 30$ の観測があり、群間平方和 $\\mathrm{SS}_B = 60$、群内平方和 $\\mathrm{SS}_W = 270$ だった。F 統計量として最も近いものを選びなさい。",
    choices: ["$1.5$", "$2.0$", "$3.0$", "$5.0$"],
    correctIndex: 2,
    explanation:
      "$\\mathrm{MS}_B = 60/(3-1) = 30$、$\\mathrm{MS}_W = 270/(30-3) = 10$。$F = 30/10 = 3.0$。",
  },
  {
    id: "gp1-q10",
    difficulty: 1,
    category: "時系列解析",
    question:
      "AR(1) 過程 $X_t = 0.6 X_{t-1} + \\varepsilon_t$ の定常性として最も適切なものを選びなさい。",
    choices: [
      "定常である",
      "定常でない(発散する)",
      "$X_{t-1}$ の係数の符号によらず非定常",
      "判定には $\\varepsilon_t$ の分布が必要",
    ],
    correctIndex: 0,
    explanation:
      "AR(1) は $|\\phi_1| < 1$ のときに定常。$|0.6| < 1$ なので定常過程である。",
  },
  {
    id: "gp1-q11",
    difficulty: 3,
    category: "確率過程",
    question:
      "2状態マルコフ連鎖の推移確率行列 $P = \\begin{pmatrix} 0.7 & 0.3 \\\\ 0.4 & 0.6 \\end{pmatrix}$ の定常分布として最も近いものを選びなさい。",
    choices: [
      "$(0.50,\\ 0.50)$",
      "$(0.57,\\ 0.43)$",
      "$(0.40,\\ 0.60)$",
      "$(0.70,\\ 0.30)$",
    ],
    correctIndex: 1,
    explanation:
      "$\\pi P = \\pi$ より $0.7\\pi_1 + 0.4\\pi_2 = \\pi_1$、$\\pi_1 + \\pi_2 = 1$。解くと $0.4\\pi_2 = 0.3\\pi_1$ から $\\pi_1 : \\pi_2 = 4 : 3$、すなわち $\\pi \\approx (0.571,\\ 0.429)$。",
  },
  {
    id: "gp1-q12",
    difficulty: 3,
    category: "情報量",
    question:
      "離散分布 $P = (0.5, 0.5)$ と $Q = (0.25, 0.75)$ に対する $D_{\\mathrm{KL}}(P \\| Q)$ として最も近いものを選びなさい。",
    choices: ["$0$", "約 $0.21$", "約 $0.50$", "約 $1.00$"],
    correctIndex: 1,
    explanation:
      "$D_{\\mathrm{KL}}(P\\|Q) = 0.5 \\log_2(0.5/0.25) + 0.5 \\log_2(0.5/0.75) = 0.5(1) + 0.5 \\log_2(2/3) \\approx 0.5 - 0.292 \\approx 0.208$(ビット)。",
  },
  {
    id: "gp1-q13",
    difficulty: 2,
    category: "確率分布",
    question:
      "ポアソン分布 $\\mathrm{Po}(\\lambda)$ について、平均と分散の関係として最も適切なものを選びなさい。",
    choices: [
      "$E[X] = \\lambda,\\ V[X] = \\lambda^2$",
      "$E[X] = \\lambda,\\ V[X] = \\lambda$",
      "$E[X] = \\lambda^2,\\ V[X] = \\lambda$",
      "$E[X] = \\lambda,\\ V[X] = \\sqrt{\\lambda}$",
    ],
    correctIndex: 1,
    explanation:
      "ポアソン分布の特徴的な性質: 平均と分散がともに $\\lambda$ に等しい。データの分散が平均より顕著に大きい場合は「過分散」、小さい場合は「過小分散」と呼ばれ、ポアソンモデルが適切でない可能性を示唆する。",
  },
  {
    id: "gp1-q14",
    difficulty: 3,
    category: "多変量分布",
    question:
      "2 変数正規分布 $(X, Y) \\sim N_2(\\boldsymbol{\\mu}, \\Sigma)$ で $X$ と $Y$ の相関係数が $\\rho = 0.5$、$\\sigma_X = 2$、$\\sigma_Y = 4$、$\\mu_X = \\mu_Y = 0$ のとき、$E[Y \\mid X = 4]$ として最も適切なものを選びなさい。",
    choices: ["$2$", "$4$", "$8$", "$16$"],
    correctIndex: 1,
    explanation:
      "2 変数正規の条件付き期待値の公式 $E[Y \\mid X = x] = \\mu_Y + \\rho (\\sigma_Y/\\sigma_X)(x - \\mu_X)$ より、$E[Y \\mid X=4] = 0 + 0.5 \\times (4/2) \\times (4 - 0) = 0.5 \\times 2 \\times 4 = 4$。",
  },
  {
    id: "gp1-q15",
    difficulty: 2,
    category: "確率分布",
    question:
      "指数分布 $\\mathrm{Exp}(\\lambda)$ に従う待ち時間 $T$ について、平均待ち時間が $5$ 分のとき、$\\lambda$ として最も適切なものを選びなさい。",
    choices: ["$0.1$", "$0.2$", "$1$", "$5$"],
    correctIndex: 1,
    explanation:
      "指数分布の期待値は $E[T] = 1/\\lambda$。$E[T] = 5$ なら $\\lambda = 1/5 = 0.2$。1 分あたり平均 $0.2$ 件のペースで起こる現象、と読み解ける。",
  },
];
