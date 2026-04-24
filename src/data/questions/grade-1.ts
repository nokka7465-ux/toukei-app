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
  {
    id: "g1-q11",
    difficulty: 2,
    category: "十分統計量",
    question:
      "ラオ・ブラックウェルの定理が保証する性質として最も適切なものを選びなさい。",
    choices: [
      "不偏推定量を十分統計量で条件付けると、必ず不偏かつ分散が増加する",
      "不偏推定量を十分統計量で条件付けると、必ず不偏かつ分散が低下(または同等)する",
      "最尤推定量は常に不偏である",
      "完備十分統計量は常に存在する",
    ],
    correctIndex: 1,
    explanation:
      "ラオ・ブラックウェルの定理: $\\hat{\\theta}$ が不偏、$T$ が十分統計量なら $\\tilde{\\theta} = E[\\hat{\\theta} \\mid T]$ は不偏かつ $V[\\tilde{\\theta}] \\leq V[\\hat{\\theta}]$。完備性を加えるとレーマン・シェッフェより UMVUE が得られる。",
  },
  {
    id: "g1-q12",
    difficulty: 3,
    category: "分布論",
    question:
      "次のうち指数型分布族の標準形 $f(x;\\theta) = h(x)\\exp(\\eta(\\theta) T(x) - A(\\theta))$ における自然パラメータ $\\eta(\\theta)$ について、$\\mathrm{Bin}(n, p)$($n$ 既知)で正しいものを選びなさい。",
    choices: [
      "$\\eta(p) = p$",
      "$\\eta(p) = \\log p$",
      "$\\eta(p) = \\log(p/(1 - p))$",
      "$\\eta(p) = 1 - p$",
    ],
    correctIndex: 2,
    explanation:
      "二項分布の確率質量を変形すると $P(X = x) = \\binom{n}{x} \\exp(\\log(p/(1-p)) \\cdot x + n\\log(1-p))$。自然パラメータはロジット $\\eta(p) = \\log(p/(1-p))$、十分統計量は $T(x) = x$。",
  },
  {
    id: "g1-q13",
    difficulty: 3,
    category: "ベイズ統計",
    question:
      "ベイズ推論で、データ量が大きくなったとき事後分布はどのようにふるまうか。最も適切なものを選びなさい。",
    choices: [
      "事前分布の影響が強くなり、事前分布の選び方に大きく依存する",
      "事前分布の影響が小さくなり、最尤推定量近くに集中する",
      "常に事前分布と一致する",
      "予測不可能になる",
    ],
    correctIndex: 1,
    explanation:
      "データ量 $n$ が大きくなると、尤度 $p(D \\mid \\theta)$ が事前分布 $\\pi(\\theta)$ よりも事後に強く効くようになり、事後分布は最尤推定量 $\\hat{\\theta}_{\\mathrm{MLE}}$ のまわりに集中していく(漸近正規性)。事前の選び方への依存性が減る、これがベイズの安心材料。",
  },
  {
    id: "g1-q14",
    difficulty: 2,
    category: "推定理論",
    question:
      "$X_1, \\ldots, X_n \\stackrel{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)$ のとき、$\\sigma^2$ の最尤推定量(MLE)として最も適切なものを選びなさい。",
    choices: [
      "$\\hat{\\sigma}^2 = \\dfrac{1}{n} \\sum_{i=1}^{n} (X_i - \\bar{X})^2$",
      "$\\hat{\\sigma}^2 = \\dfrac{1}{n-1} \\sum_{i=1}^{n} (X_i - \\bar{X})^2$",
      "$\\hat{\\sigma}^2 = \\dfrac{1}{n} \\sum_{i=1}^{n} X_i^2$",
      "$\\hat{\\sigma}^2 = \\bar{X}^2$",
    ],
    correctIndex: 0,
    explanation:
      "正規分布の対数尤度を $\\sigma^2$ で偏微分してゼロとおくと $\\hat{\\sigma}^2 = \\dfrac{1}{n} \\sum (X_i - \\bar{X})^2$。分母が $n - 1$ ではなく $n$ なので、これは不偏ではない(下方バイアスを持つ)。$n - 1$ で割ると不偏分散になる。",
  },
  {
    id: "g1-q15",
    difficulty: 2,
    category: "仮説検定",
    question:
      "ネイマン・ピアソンの補題が直接保証する性質として最も適切なものを選びなさい。",
    choices: [
      "あらゆる複合仮説の検定で、尤度比検定が最強力である",
      "単純仮説 $H_0$ vs 単純仮説 $H_1$ の検定で、尤度比検定が最強力である",
      "尤度比検定は常に不偏である",
      "尤度比検定は常に一致検定である",
    ],
    correctIndex: 1,
    explanation:
      "NP 補題は **単純仮説どうし** の検定で、有意水準 $\\alpha$ のもとで最強力検定が尤度比検定である、と保証する。複合仮説への一般的な拡張(UMP 検定の存在)には別の条件(単調尤度比族など)が必要。",
  },
  {
    id: "g1-q16",
    difficulty: 3,
    category: "計算統計",
    question:
      "EM アルゴリズムについて、誤っているものを選びなさい。",
    choices: [
      "観測データの対数尤度を反復ごとに非減少にする",
      "潜在変数モデルの最尤推定に用いられる",
      "常に大域最適解に収束する",
      "E ステップで完全データ対数尤度の条件付き期待値を計算する",
    ],
    correctIndex: 2,
    explanation:
      "EM は観測データの対数尤度の単調非減少性を保証するが、**大域最適に収束するとは限らず**、初期値次第で局所最適に止まることがある。実務では複数初期値を試して最も尤度が高いものを採用するのが標準。",
  },
  {
    id: "g1-q17",
    difficulty: 2,
    category: "計算統計",
    question:
      "ノンパラメトリック・ブートストラップで擬似標本を作る際の方法として最も適切なものを選びなさい。",
    choices: [
      "母集団分布を仮定してそこから生成する",
      "観測標本から非復元抽出で同じサイズの標本を作る",
      "観測標本から復元抽出で同じサイズの標本を作る",
      "観測標本の中央値だけを使ってシミュレートする",
    ],
    correctIndex: 2,
    explanation:
      "ブートストラップは観測標本 $\\mathbf{X}$ から **復元抽出** で同じサイズ $n$ の擬似標本 $\\mathbf{X}^*$ を作る。これを $B$ 回繰り返して得る $\\hat{\\theta}^{*(b)}$ の経験分布を、推定量の標本分布の近似として用いる。母集団分布を仮定しないノンパラメトリック手法。",
  },
];
