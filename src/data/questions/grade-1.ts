import type { Question } from "@/types/content";

export const gradeOneQuestions: Question[] = [
  {
    id: "g1-q1",
    difficulty: 2,
    category: "分布論",
    question:
      "次のうち指数型分布族に属さないものとして最も適切なものを選びなさい。",
    choices: [
      "正規分布 $N(\\mu, \\sigma^2)$($\\mu, \\sigma^2$ 両方未知)",
      "二項分布 $\\mathrm{Bin}(n, p)$($n$ 既知)",
      "ポアソン分布 $\\mathrm{Po}(\\lambda)$",
      "一様分布 $U(0, \\theta)$",
    ],
    correctIndex: 3,
    explanation:
      "$U(0, \\theta)$ は台がパラメータに依存するため、標準的な正則な指数型分布族には属さない(非正則族)。他は指数型分布族。",
  },
  {
    id: "g1-q2",
    difficulty: 2,
    category: "十分統計量",
    question:
      "正規分布 $N(\\mu, \\sigma^2)$ から独立同分布な標本 $X_1, \\ldots, X_n$ を得るとき、$(\\mu, \\sigma^2)$ の十分統計量として最も適切なものを選びなさい。",
    choices: [
      "$\\bar{X}$ のみ",
      "$\\bar{X}$ と $\\sum X_i^2$",
      "$\\max X_i$",
      "中央値",
    ],
    correctIndex: 1,
    explanation:
      "正規分布の尤度は $\\sum X_i$ と $\\sum X_i^2$ を通してパラメータに依存する。したがって $(\\sum X_i,\\ \\sum X_i^2)$、あるいは同等に $(\\bar{X},\\ \\sum X_i^2)$ が十分統計量。",
  },
  {
    id: "g1-q3",
    difficulty: 2,
    category: "推定理論",
    question:
      "$X_1, \\ldots, X_n \\stackrel{\\text{iid}}{\\sim} \\mathrm{Po}(\\lambda)$ のとき、$\\hat{\\lambda} = \\bar{X}$ の分散のクラメル・ラオ下限として最も適切なものを選びなさい。",
    choices: [
      "$\\lambda$",
      "$\\lambda / n$",
      "$n / \\lambda$",
      "$1 / (n \\lambda)$",
    ],
    correctIndex: 1,
    explanation:
      "ポアソンのフィッシャー情報量は 1 観測あたり $1/\\lambda$。$n$ 観測では $n/\\lambda$。CR 下限は $1/(n/\\lambda) = \\lambda/n$。これは $V[\\bar{X}] = V[X]/n = \\lambda/n$ と一致し、$\\bar{X}$ は UMVUE。",
  },
  {
    id: "g1-q4",
    difficulty: 3,
    category: "漸近理論",
    question:
      "$\\sqrt{n}(\\hat{p} - p) \\xrightarrow{d} N(0, p(1-p))$ のとき、$g(p) = \\log(p/(1-p))$(ロジット)の推定量の漸近分散として最も適切なものを選びなさい。",
    choices: [
      "$p(1-p)$",
      "$\\dfrac{1}{p(1-p)}$",
      "$\\dfrac{1}{n\\, p(1-p)}$",
      "$\\dfrac{p(1-p)}{n}$",
    ],
    correctIndex: 2,
    explanation:
      "$g'(p) = 1/(p(1-p))$。デルタ法より $\\sqrt{n}(g(\\hat{p}) - g(p)) \\xrightarrow{d} N(0,\\ g'(p)^2\\, p(1-p)) = N(0,\\ 1/(p(1-p)))$。$\\hat{g}$ の分散は約 $1/(n\\, p(1-p))$。",
  },
  {
    id: "g1-q5",
    difficulty: 1,
    category: "仮説検定",
    question:
      "尤度比 $\\Lambda$ について帰無仮説下で $-2 \\log \\Lambda$ が漸近的に従う分布として最も適切なものを選びなさい。ただし制約の次元を $r$ とする。",
    choices: [
      "標準正規分布",
      "自由度 $r$ のカイ二乗分布",
      "自由度 $n - r$ のカイ二乗分布",
      "自由度 $r$ の F 分布",
    ],
    correctIndex: 1,
    explanation:
      "ウィルクスの定理より、正則条件の下で $-2 \\log \\Lambda \\xrightarrow{d} \\chi^2(r)$。",
  },
  {
    id: "g1-q6",
    difficulty: 2,
    category: "仮説検定",
    question:
      "ネイマン・ピアソンの補題が保証する性質として最も適切なものを選びなさい。",
    choices: [
      "尤度比検定はあらゆる複合仮説に対して最強力である",
      "有意水準 $\\alpha$ の単純対単純仮説の検定の中で、尤度比検定は最強力である",
      "尤度比検定は常に不偏である",
      "尤度比検定は常に一致検定である",
    ],
    correctIndex: 1,
    explanation:
      "NP 補題は「単純仮説 $H_0$ vs 単純仮説 $H_1$」という設定で、与えられた有意水準の下での最強力検定が尤度比検定であることを保証する。複合仮説一般には拡張が必要。",
  },
  {
    id: "g1-q7",
    difficulty: 2,
    category: "確率過程",
    question:
      "標準ブラウン運動 $B_t$ について $\\mathrm{Cov}(B_s, B_t)\\ (0 \\leq s \\leq t)$ として最も適切なものを選びなさい。",
    choices: ["$0$", "$s$", "$t$", "$\\sqrt{st}$"],
    correctIndex: 1,
    explanation:
      "独立増分と $B_0 = 0$ から $\\mathrm{Cov}(B_s, B_t) = \\mathrm{Var}(B_s) + \\mathrm{Cov}(B_s, B_t - B_s) = s + 0 = s$(一般に $\\min(s,t)$)。",
  },
  {
    id: "g1-q8",
    difficulty: 3,
    category: "確率解析",
    question:
      "幾何ブラウン運動 $dS_t = \\mu S_t\\, dt + \\sigma S_t\\, dB_t$ に対し、$Y_t = \\log S_t$ に伊藤の公式を適用したときのドリフト項として最も適切なものを選びなさい。",
    choices: [
      "$\\mu$",
      "$\\mu - \\tfrac{1}{2}\\sigma^2$",
      "$\\mu + \\tfrac{1}{2}\\sigma^2$",
      "$\\sigma^2$",
    ],
    correctIndex: 1,
    explanation:
      "$f(S) = \\log S$ なら $f' = 1/S$, $f'' = -1/S^2$。伊藤より $dY_t = (\\mu - \\tfrac{1}{2}\\sigma^2)\\, dt + \\sigma\\, dB_t$。ブラック・ショールズの対数変換の要点。",
  },
  {
    id: "g1-q9",
    difficulty: 2,
    category: "計算統計",
    question:
      "EM アルゴリズムの性質として最も適切なものを選びなさい。",
    choices: [
      "対数尤度を反復ごとに単調増加(非減少)させる",
      "常に大域的最適解に収束する",
      "尤度を明示的に計算する必要がある",
      "M ステップで $E[\\log L]$ を計算する",
    ],
    correctIndex: 0,
    explanation:
      "EM は各反復で観測データの対数尤度が単調に非減少することが保証される。ただし局所最適に収束する可能性はあり、大域最適性は保証されない。",
  },
  {
    id: "g1-q10",
    difficulty: 1,
    category: "計算統計",
    question:
      "メトロポリス・ヘイスティングスにおける対称な提案分布($q(x \\mid y) = q(y \\mid x)$)のとき、受理確率として最も適切なものを選びなさい。",
    choices: [
      "$\\alpha(x, y) = \\min(1,\\ \\pi(y)/\\pi(x))$",
      "$\\alpha(x, y) = \\pi(y)/\\pi(x)$",
      "$\\alpha(x, y) = \\min(1,\\ q(x \\mid y)/q(y \\mid x))$",
      "$\\alpha(x, y) = 1$",
    ],
    correctIndex: 0,
    explanation:
      "対称提案のとき $q(x \\mid y)/q(y \\mid x) = 1$ なので、受理確率は目標分布の比 $\\pi(y)/\\pi(x)$ と 1 の小さい方。これが古典的「メトロポリス」。",
  },
];
