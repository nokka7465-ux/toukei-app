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
  {
    id: "g1-q18",
    difficulty: 3,
    category: "漸近理論",
    question:
      "$\\sqrt{n}(\\hat{p} - p) \\xrightarrow{d} N(0,\\, p(1-p))$ のとき、デルタ法を用いた $\\sqrt{\\hat{p}}$ の漸近分散として最も適切なものを選びなさい。",
    choices: [
      "$p(1 - p)$",
      "$\\dfrac{1 - p}{4}$",
      "$\\dfrac{1}{4p}$",
      "$\\dfrac{p}{n}$",
    ],
    correctIndex: 1,
    explanation:
      "$g(p) = \\sqrt{p}$、$g'(p) = 1/(2\\sqrt{p})$。デルタ法より $\\sqrt{n}(\\sqrt{\\hat{p}} - \\sqrt{p}) \\xrightarrow{d} N(0,\\ g'(p)^2 \\cdot p(1-p)) = N(0,\\ p(1-p)/(4p)) = N(0,\\ (1-p)/4)$。これは $p$ にあまり依存しない安定した分散で、分散安定化変換の一例。",
  },
  {
    id: "g1-q19",
    difficulty: 2,
    category: "仮説検定",
    question:
      "尤度比検定・ワルド検定・スコア検定について、最も適切でないものを選びなさい。",
    choices: [
      "3 者は漸近的に同じ分布(自由度 $r$ のカイ二乗)に従う",
      "ワルド検定は制約なしの MLE のみ計算すればよい",
      "スコア検定は $H_0$ のもとでの値だけ計算すればよい",
      "尤度比検定は有限標本でも常に最強力である",
    ],
    correctIndex: 3,
    explanation:
      "尤度比検定は単純仮説どうしでネイマン・ピアソン補題により最強力だが、複合仮説や有限標本では最強力性は一般に保証されない。3 者は漸近的に等価で、計算上の都合で使い分ける。",
  },
  {
    id: "g1-q20",
    difficulty: 3,
    category: "計算統計",
    question:
      "メトロポリス・ヘイスティングス法で目標分布 $\\pi$ から実質的にサンプリングするには、提案分布 $q$ について何が必要か。最も適切なものを選びなさい。",
    choices: [
      "$q$ は $\\pi$ と一致する必要がある",
      "$q$ は対称($q(x \\mid y) = q(y \\mid x)$)である必要がある",
      "$q$ は目標分布のサポート全体を訪問できる(既約性)必要がある",
      "$q$ は連続分布である必要がある",
    ],
    correctIndex: 2,
    explanation:
      "MH 法が $\\pi$ にきちんと収束するためには、提案分布 $q$ から構成される連鎖が **既約**(任意の状態から任意の状態に有限ステップで到達可能)で **非周期** である必要がある。対称性は必要ではない(対称ならば受理確率の式が単純化される、というだけ)。",
  },
  {
    id: "g1-q21",
    difficulty: 3,
    category: "推定理論",
    question:
      "正則条件下で、不偏推定量 $\\hat{\\theta}$ の分散が達成できる下限(クラメル・ラオ下限)として最も適切なものを選びなさい($n$ は標本数、$I(\\theta)$ はフィッシャー情報量)。",
    choices: [
      "$\\dfrac{1}{I(\\theta)}$",
      "$\\dfrac{1}{n\\, I(\\theta)}$",
      "$\\dfrac{n}{I(\\theta)}$",
      "$n\\, I(\\theta)$",
    ],
    correctIndex: 1,
    explanation:
      "$n$ 個の独立同分布な標本では情報量が加法的に $n\\, I(\\theta)$ になり、CR 下限は $1/(n\\, I(\\theta))$。MLE はこの下限を漸近的に達成する(漸近有効性)。",
  },
  {
    id: "g1-q22",
    difficulty: 2,
    category: "漸近理論",
    question:
      "「分布収束する $X_n$ と確率収束する定数 $c$ との和・積も分布収束する」という性質をもつ定理の名称として最も適切なものを選びなさい。",
    choices: [
      "ウィルクスの定理",
      "クラメル・ラオの定理",
      "スラツキーの定理",
      "ネイマン・ピアソンの補題",
    ],
    correctIndex: 2,
    explanation:
      "スラツキーの定理: $X_n \\xrightarrow{d} X,\\ Y_n \\xrightarrow{p} c$ なら $X_n + Y_n \\xrightarrow{d} X + c,\\ X_n Y_n \\xrightarrow{d} cX$。標本標準偏差 $\\hat{\\sigma}$ で $\\sigma$ を置き換えても漸近分布が同じ理由を与える。",
  },
  {
    id: "g1-q23",
    difficulty: 3,
    category: "確率解析",
    question:
      "幾何ブラウン運動 $dS_t = \\mu S_t dt + \\sigma S_t dB_t$ について、$Y_t = \\log S_t$ の SDE のドリフト項として最も適切なものを選びなさい。",
    choices: [
      "$\\mu$",
      "$\\mu + \\tfrac{1}{2}\\sigma^2$",
      "$\\mu - \\tfrac{1}{2}\\sigma^2$",
      "$\\mu \\sigma^2$",
    ],
    correctIndex: 2,
    explanation:
      "伊藤の公式を $f(S) = \\log S$ に適用すると、$f' = 1/S$、$f'' = -1/S^2$ より $dY_t = (\\mu - \\tfrac{1}{2}\\sigma^2)\\, dt + \\sigma\\, dB_t$。この $-\\tfrac{1}{2}\\sigma^2$ がブラック・ショールズ式での「対数収益率の期待」を決める部分。",
  },
  {
    id: "g1-q24",
    difficulty: 3,
    category: "十分統計量",
    question:
      "完備十分統計量 $T$ に基づく不偏推定量 $\\hat{\\theta}(T)$ について保証される最も適切な性質を選びなさい。",
    choices: [
      "それが必ず最尤推定量である",
      "それが一様最小分散不偏推定量(UMVUE)である",
      "それが必ずベイズ推定量である",
      "それが必ず正規分布に従う",
    ],
    correctIndex: 1,
    explanation:
      "**レーマン・シェッフェの定理**: 完備十分統計量 $T$ に基づく不偏推定量は UMVUE。「完備性」が「同等な不偏推定量が他に存在しない」ことを保証する鍵。",
  },
  {
    id: "g1-q25",
    difficulty: 2,
    category: "計算統計",
    question:
      "EM アルゴリズムの E ステップで計算する量として最も適切なものを選びなさい。",
    choices: [
      "観測データの対数尤度",
      "完全データ対数尤度の条件付き期待値 $Q(\\theta \\mid \\theta^{(t)}) = E_{\\mathbf{Z} \\mid \\mathbf{X}, \\theta^{(t)}}[\\log L(\\theta; \\mathbf{X}, \\mathbf{Z})]$",
      "勾配 $\\nabla \\log L$",
      "ヘッセ行列",
    ],
    correctIndex: 1,
    explanation:
      "E ステップ: 潜在変数 $\\mathbf{Z}$ について「現在のパラメータ $\\theta^{(t)}$ のもとでの条件付き期待値」を計算 $\\to$ Q 関数。M ステップでこれを最大化して $\\theta^{(t+1)}$ を更新する。",
  },
  {
    id: "g1-q26",
    difficulty: 3,
    category: "仮説検定",
    question:
      "尤度比検定の漸近分布を保証する定理として最も適切なものを選びなさい。",
    choices: [
      "中心極限定理",
      "ウィルクスの定理",
      "ネイマン・ピアソンの補題",
      "コルモゴロフの強大数の法則",
    ],
    correctIndex: 1,
    explanation:
      "ウィルクスの定理: 正則条件下で $H_0$ のもとで $-2 \\log \\Lambda \\xrightarrow{d} \\chi^2(r)$。$r$ は制約の次元。これが尤度比検定の漸近的根拠。",
  },
  {
    id: "g1-q27",
    difficulty: 3,
    category: "確率過程",
    question:
      "強度 $\\lambda$ のポアソン過程について、隣接する 2 つの事象の間隔 $T$ が従う分布は次のうちどれか。",
    choices: [
      "指数分布 $\\mathrm{Exp}(\\lambda)$",
      "ポアソン分布 $\\mathrm{Po}(\\lambda)$",
      "正規分布 $N(0, \\lambda)$",
      "ガンマ分布 $\\mathrm{Ga}(2, \\lambda)$",
    ],
    correctIndex: 0,
    explanation:
      "ポアソン過程の事象間隔は指数分布。これは無記憶性の表れ。一方、$n$ 番目の事象までの時間はガンマ分布(Erlang)に従う。",
  },
  {
    id: "g1-q28",
    difficulty: 3,
    category: "確率過程",
    question:
      "既約・非周期な有限状態マルコフ連鎖について、定常分布に関する正しい記述はどれか。",
    choices: [
      "定常分布は存在しないことが多い",
      "初期分布によって異なる定常分布に収束する",
      "初期分布によらず一意の定常分布に収束する(エルゴード定理)",
      "すべての遷移確率が等しいときのみ定常分布が存在する",
    ],
    correctIndex: 2,
    explanation:
      "既約・非周期な有限マルコフ連鎖はエルゴード定理により、初期分布によらず一意の定常分布に収束する。これは MCMC の理論的基盤になる。",
  },
  {
    id: "g1-q29",
    difficulty: 3,
    category: "確率過程",
    question:
      "標準ブラウン運動 $W(t)$ について、$W(s)$ と $W(t)$($s < t$)の共分散として正しいものはどれか。",
    choices: ["$0$", "$s$", "$t$", "$t - s$"],
    correctIndex: 1,
    explanation:
      "$W(s)$ と $W(t)$ は独立増分性より、$W(t) = W(s) + (W(t) - W(s))$ と分解。$\\mathrm{Cov}(W(s), W(t)) = \\mathrm{Var}(W(s)) = s$($s \\leq t$)。",
  },
  {
    id: "g1-q30",
    difficulty: 3,
    category: "多変量解析の理論",
    question:
      "PCA の最適化問題 $\\max_{\\|\\mathbf{w}\\|=1} \\mathbf{w}^{\\top} \\Sigma \\mathbf{w}$ の解として正しいものはどれか。",
    choices: [
      "$\\Sigma$ の最大固有値に対応する固有ベクトル(最大値は最大固有値)",
      "$\\Sigma$ の最小固有値に対応する固有ベクトル",
      "$\\Sigma$ の対角成分の最大値",
      "$\\Sigma$ のトレース",
    ],
    correctIndex: 0,
    explanation:
      "ラグランジュ未定乗数法より $\\Sigma \\mathbf{w} = \\mu \\mathbf{w}$、つまり $\\mathbf{w}$ は固有ベクトル、$\\mu$ は固有値。最大値は最大固有値 $\\lambda_1$。",
  },
  {
    id: "g1-q31",
    difficulty: 2,
    category: "応用統計",
    question:
      "Shewhart の $\\bar X$ 管理図において、上下管理限界線(UCL/LCL)を中心からどれくらいの幅に設定するのが標準か。",
    choices: [
      "$\\pm 1\\sigma/\\sqrt{n}$",
      "$\\pm 2\\sigma/\\sqrt{n}$",
      "$\\pm 3\\sigma/\\sqrt{n}$",
      "$\\pm 6\\sigma/\\sqrt{n}$",
    ],
    correctIndex: 2,
    explanation:
      "Shewhart の管理図は中心から ±3σ/√n が標準。正規分布のもとで管理状態にある工程では 0.27% しか外れないため、外れたら『異常』と判断する根拠になる。",
  },
  {
    id: "g1-q32",
    difficulty: 3,
    category: "応用統計",
    question:
      "工程能力指数 $C_{pk}$ について、製造業で『工程能力が十分』とされる目安として最も一般的な値はどれか。",
    choices: ["0.5 以上", "1.0 以上", "1.33 以上", "3.0 以上"],
    correctIndex: 2,
    explanation:
      "$C_{pk} \\geq 1.33$ が標準的な目標値。$1.0$ ぎりぎりだと不良率が上がるため、ある程度の余裕を見込む。シックスシグマでは $C_{pk} = 2.0$ が目標。",
  },
  { id: "g1-q33", category: "確率論", difficulty: 3, question: "**確率変数 X, Y が独立** のときの $E[XY]$ として正しいものを選びなさい。", choices: ["$E[X]E[Y]$", "$E[X] + E[Y]$", "$E[X^2]$", "$Var[X]$"], correctIndex: 0, explanation: "**独立性**: $E[XY] = E[X]E[Y]$。これは独立性の必要条件。**Cov(X,Y) = E[XY] - E[X]E[Y] = 0**(独立 → 無相関、逆は不成立)。" },
  { id: "g1-q34", category: "数理統計", difficulty: 3, question: "**十分統計量(Sufficient Statistic)** の定義として最も適切なものを選びなさい。", choices: ["$T(X)$ を与えた下での X の条件分布が θ に依存しない", "T(X) = X の平均", "T(X) が最小", "T(X) が最大尤度"], correctIndex: 0, explanation: "**十分統計量**: $f(X|T(X), \\theta) = f(X|T(X))$。**Neyman-Fisher 分解定理**で識別。**MLE は最小十分統計量の関数**(典型)。" },
  { id: "g1-q35", category: "MLE", difficulty: 3, question: "**MLE(最尤推定)** の **漸近正規性** として正しいものを選びなさい。", choices: ["$\\sqrt{n}(\\hat{\\theta} - \\theta) \\to N(0, I^{-1})$", "完全正規", "常に不偏", "GPU 必須"], correctIndex: 0, explanation: "**MLE 漸近正規**: $\\hat{\\theta} \\sim N(\\theta, I^{-1}/n)$。**Fisher 情報量 I の逆数** が分散。**Cramér-Rao 下界** で達成可能(漸近的に効率的)。" },
  { id: "g1-q36", category: "ベイズ", difficulty: 3, question: "**事後分布** の式として正しいものを選びなさい。", choices: ["$\\pi(\\theta|x) \\propto L(\\theta|x)\\pi(\\theta)$", "$\\pi(\\theta)$", "$L(\\theta|x)$", "$1/L$"], correctIndex: 0, explanation: "**事後 ∝ 尤度 × 事前**(ベイズの定理)。**MAP = argmax 事後** ・ **事前一様 → MLE 一致**。MCMC / VI で計算困難な事後を近似。" },
  { id: "g1-q37", category: "検定理論", difficulty: 3, question: "**Neyman-Pearson Lemma** が **保証する** ものとして最も適切なものを選びなさい。", choices: ["単純帰無 vs 単純対立 で尤度比検定が一様最強力", "全ての検定で最強", "ベイズ要因", "p 値最小"], correctIndex: 0, explanation: "**N-P Lemma**: 単純帰無 H_0 vs 単純対立 H_1 のとき、**尤度比検定が α の検定の中で最強力(検出力最大)**。" },
  { id: "g1-q38", category: "検定理論", difficulty: 3, question: "**尤度比検定統計量** の漸近分布として正しいものを選びなさい。", choices: ["$-2 \\log \\Lambda \\sim \\chi^2_{df}$(Wilks の定理)", "標準正規", "t 分布", "F 分布"], correctIndex: 0, explanation: "**Wilks の定理**: $-2 \\log \\Lambda \\to \\chi^2_q$($q$ = 制約数)。**LR / Wald / Score 検定** の漸近等価性も有名。" },
  { id: "g1-q39", category: "Bayes Factor", difficulty: 3, question: "**Bayes Factor**(BF)が **10 を超える** ときの解釈として最も適切なものを選びなさい。", choices: ["H_1 を強く支持(Strong Evidence)", "H_0 支持", "判定不能", "ランダム"], correctIndex: 0, explanation: "**Jeffreys 解釈**: BF = 10-30 強い支持 / 30-100 非常に強い / >100 決定的。**頻度論 p 値の代替** として Bayes 検定で活用。" },
  { id: "g1-q40", category: "情報量規準", difficulty: 3, question: "**AIC = $-2\\log L + 2k$** で **k** が表すものとして最も適切なものを選びなさい。", choices: ["パラメータ数(ペナルティ項)", "サンプルサイズ", "Loss 値", "Iteration 数"], correctIndex: 0, explanation: "**AIC**: モデル複雑度ペナルティで適合度と簡潔性をバランス。**BIC = -2 log L + k log n** はサンプルサイズも考慮(より厳しいペナルティ)。" },
  { id: "g1-q41", category: "一般化線形モデル", difficulty: 3, question: "**ロジスティック回帰** の **Link 関数** として正しいものを選びなさい。", choices: ["logit($p$) = log($p/(1-p)$)", "log($p$)", "$p$", "1/$p$"], correctIndex: 0, explanation: "**Logistic GLM**: Link = logit、Distribution = Binomial。**Probit / CLog-log** など他リンクも。**Poisson**(log)・ **線形回帰**(identity)が GLM 兄弟。" },
  { id: "g1-q42", category: "GLM", difficulty: 3, question: "**Generalized Linear Model**(GLM)の構成要素として **誤っているもの** を選びなさい。", choices: ["Random component(分布族)", "Systematic component(線形予測子)", "Link function", "Tree split"], correctIndex: 3, explanation: "**GLM 3 要素**: ① Random(指数型分布族)② Systematic(線形予測子 $\\eta = X\\beta$)③ Link($g(\\mu) = \\eta$)。Tree split は決定木。" },
  { id: "g1-q43", category: "時系列", difficulty: 3, question: "**ARMA(p, q) の **定常 ・ 反転可能** 条件として正しいものを選びなさい。", choices: ["AR 多項式の根が単位円外、MA 多項式の根が単位円外", "全根が原点", "全根が単位円内", "条件なし"], correctIndex: 0, explanation: "**定常性**: AR 多項式 $\\phi(z) = 0$ の根が単位円外。**反転可能性**: MA 多項式 $\\theta(z) = 0$ の根が単位円外。両者で時系列モデルの存在性。" },
  { id: "g1-q44", category: "Markov 連鎖", difficulty: 3, question: "**Markov 連鎖** の **エルゴード性** が保証するものとして最も適切なものを選びなさい。", choices: ["唯一の定常分布へ収束(初期条件に依存しない)", "毎回ランダム", "全状態同じ", "GPU 必須"], correctIndex: 0, explanation: "**Ergodic**: 既約 + 非周期 + 正再帰 → 唯一定常分布に収束。**MCMC の理論基盤**(Metropolis-Hastings / Gibbs が定常分布として目的事後分布に収束)。" },
  { id: "g1-q45", category: "確率過程", difficulty: 3, question: "**Brownian Motion(Wiener Process)** の特徴として **誤っているもの** を選びなさい。", choices: ["B(0) = 0、独立増分、$B(t) - B(s) \\sim N(0, t-s)$", "連続パス", "微分可能", "Gauss 過程"], correctIndex: 2, explanation: "**Brown 運動**: 連続パスだが **どこでも微分不可能**(典型的サンプルパス)。確率積分(Itô 計算)・ 金融数学 ・ Diffusion モデルの基礎。" },
  { id: "g1-q46", category: "多変量", difficulty: 3, question: "**多変量正規分布 $N(\\mu, \\Sigma)$** で **線形結合** の分布として正しいものを選びなさい。", choices: ["$a^T X \\sim N(a^T \\mu, a^T \\Sigma a)$", "完全独立", "$a^T X \\sim t$", "Chi-Square"], correctIndex: 0, explanation: "**多変量正規の線形結合は正規**。**周辺分布も正規 ・ 条件付きも正規** という閉包性が特性。" },
  { id: "g1-q47", category: "因果推論", difficulty: 3, question: "**Average Treatment Effect(ATE)** の定義として正しいものを選びなさい。", choices: ["$E[Y(1) - Y(0)]$(全集団での平均処置効果)", "観察データの平均差", "Selection biased", "GPU 制御"], correctIndex: 0, explanation: "**ATE**: 潜在結果 Y(1)(処置)と Y(0)(非処置)の差の期待値。**ATT(被処置者)・ ATC(非処置者)・ CATE(条件付き)** など派生。" },
  { id: "g1-q48", category: "Bootstrap", difficulty: 3, question: "**Bootstrap CI** の代表的方法として **誤っているもの** を選びなさい。", choices: ["Percentile / Basic / BCa / Studentized", "全て同じ精度", "BCa は補正", "Percentile は単純"], correctIndex: 1, explanation: "**Bootstrap CI**: Percentile(単純)・ Basic / Reverse Percentile ・ BCa(Bias-Corrected and Accelerated、最良)・ Studentized(漸近)。**精度は異なる**。" },
  { id: "g1-q49", category: "数理統計", difficulty: 3, question: "**指数型分布族(Exponential Family)** に **属さない** ものを選びなさい。", choices: ["正規分布(σ 既知)", "二項分布", "ポアソン分布", "コーシー分布"], correctIndex: 3, explanation: "**Exponential Family**: 正規 / 二項 / ポアソン / ガンマ / ベルヌーイ / 多項 等(GLM の基盤)。**コーシー分布は属さない**(MLE 唯一性 ・ Score 等の有用性が失われる)。" },
  { id: "g1-q50", category: "次のステップ", difficulty: 1, question: "統計検定 1 級合格後の発展ステップとして最も適切なものを選びなさい。", choices: ["大学院修士 ・ 博士 / DS 検定エキスパート / 学会発表", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**1 級は数理統計の最高峰**。**大学院統計 ・ 計算機統計 ・ 数理ファイナンス / DS Expert / ベイズ統計 / 統計コンサルタント** へ展開。" },
  { id: "g1-q51", category: "数理統計", difficulty: 3, question: "**Cramér-Rao 下界** の意味として最も適切なものを選びなさい。", choices: ["不偏推定量の分散下限 = $1/I(\\theta)$(Fisher 情報量の逆数)", "MLE の漸近正規性", "中心極限定理", "対立仮説"], correctIndex: 0, explanation: "**CRB**: 任意の不偏推定量 $\\hat{\\theta}$ で $\\text{Var}(\\hat{\\theta}) \\geq 1/I(\\theta)$。**MLE は漸近的に CRB 達成**(漸近有効性)。" },
  { id: "g1-q52", category: "数理統計", difficulty: 3, question: "**完備十分統計量** が存在するとき適用される定理として最も適切なものを選びなさい。", choices: ["Rao-Blackwell + Lehmann-Scheffé(UMVUE 構成)", "Neyman-Pearson", "Gauss-Markov", "Bayes"], correctIndex: 0, explanation: "**Rao-Blackwell**: 不偏推定量を十分統計量で条件付け → 分散非増。**Lehmann-Scheffé**: 完備性 + 十分性 → UMVUE(一様最小分散不偏推定量)が唯一。" },
  { id: "g1-q53", category: "確率論", difficulty: 3, question: "**Borel-Cantelli の補題(第 1)** の主張として最も適切なものを選びなさい。", choices: ["$\\sum P(A_n) < \\infty$ → $P(A_n \\text{ i.o.}) = 0$", "全事象が独立", "強大数法則と同等", "中心極限定理"], correctIndex: 0, explanation: "**Borel-Cantelli 1**: 確率総和が有限 → ほとんど確実に有限回しか起こらない。**第 2 補題**: 独立 + 総和発散 → ほとんど確実に無限回。強大数の法則の証明に利用。" },
  { id: "g1-q54", category: "確率論", difficulty: 3, question: "**Slutsky の定理** の主張として最も適切なものを選びなさい。", choices: ["$X_n \\xrightarrow{d} X$、$Y_n \\xrightarrow{p} c$ → $X_n + Y_n \\xrightarrow{d} X+c$ など", "両者独立", "確率収束のみ", "適応性"], correctIndex: 0, explanation: "**Slutsky**: 分布収束と確率収束(定数)の合成則。**Delta Method / 漸近正規性の証明 ・ 統計推測の基盤**。" },
  { id: "g1-q55", category: "数理統計", difficulty: 3, question: "**Delta Method** の用途として最も適切なものを選びなさい。", choices: ["$g(\\hat{\\theta})$ の漸近分布を $g'(\\theta)$ で線形近似", "非線形回帰", "GLM の Link", "Bootstrap"], correctIndex: 0, explanation: "**Delta Method**: $\\sqrt{n}(\\hat{\\theta} - \\theta) \\xrightarrow{d} N(0, \\sigma^2)$ なら $\\sqrt{n}(g(\\hat{\\theta}) - g(\\theta)) \\xrightarrow{d} N(0, [g'(\\theta)]^2 \\sigma^2)$。" },
  { id: "g1-q56", category: "確率論", difficulty: 3, question: "**強大数の法則(SLLN)** の意味として最も適切なものを選びなさい。", choices: ["$\\bar{X}_n \\to \\mu$ a.s.(ほぼ確実に収束)", "確率収束", "分布収束", "L^2 収束"], correctIndex: 0, explanation: "**SLLN**(Kolmogorov): iid + $E|X_1| < \\infty$ → almost sure 収束。**弱大数(WLLN)** は確率収束で条件緩い。**測度論的確率論**の基本定理。" },
  { id: "g1-q57", category: "確率論", difficulty: 3, question: "**マルチンゲール** の定義として最も適切なものを選びなさい。", choices: ["$E[X_{n+1} | \\mathcal{F}_n] = X_n$(条件付き期待値が現在値)", "確率独立", "Markov", "定常過程"], correctIndex: 0, explanation: "**Martingale**: フィルトレーション $\\mathcal{F}_n$ 上で公正ゲーム。**サブマルチンゲール ≥、スーパーマルチンゲール ≤**。**Doob の不等式 ・ 収束定理 / 確率積分** の基礎。" },
  { id: "g1-q58", category: "Bayes", difficulty: 3, question: "**Jeffreys 事前分布** の特徴として最も適切なものを選びなさい。", choices: ["パラメータ変換に不変(Fisher 情報量の平方根)", "ガンマ事前", "Beta 事前", "一様"], correctIndex: 0, explanation: "**Jeffreys Prior**: $\\pi(\\theta) \\propto \\sqrt{I(\\theta)}$。**Reparametrization-invariant**。Improper(積分発散)になることもあり要注意。" },
  { id: "g1-q59", category: "Bayes", difficulty: 3, question: "**Hierarchical Bayes** の **Hyperparameter** の役割として最も適切なものを選びなさい。", choices: ["事前分布の分布(事前の事前)のパラメータ", "事後の平均", "MCMC step size", "Likelihood の係数"], correctIndex: 0, explanation: "**階層モデル**: $\\theta_i \\sim p(\\cdot|\\phi)$、$\\phi \\sim p(\\phi)$。**Hyperparameter φ で事前分布を制御**。Empirical Bayes は φ を MLE 推定。Full Bayes は φ にも事前分布。" },
  { id: "g1-q60", category: "数理統計", difficulty: 3, question: "**Score 関数** の定義として最も適切なものを選びなさい。", choices: ["$U(\\theta) = \\partial \\log L / \\partial \\theta$(対数尤度の勾配)", "ML 推定値", "残差", "Loss 関数"], correctIndex: 0, explanation: "**Score**: $U(\\theta) = \\nabla_\\theta \\log L(\\theta|X)$。**$E[U] = 0$、$\\text{Var}[U] = I(\\theta)$**(Fisher 情報量)。MLE は $U(\\hat{\\theta}) = 0$ の解。" },
  { id: "g1-q61", category: "検定理論", difficulty: 3, question: "**Score 検定(Lagrange Multiplier Test)** の特徴として最も適切なものを選びなさい。", choices: ["帰無仮説下のみで $\\hat{\\theta}$ を求め Score を評価 → 計算軽量", "対立仮説下で MLE", "Wald と同じ", "Bayes Factor"], correctIndex: 0, explanation: "**Score / LM Test**: 帰無下の制約付き MLE のみ必要。**Wald**(対立下 MLE)・ **LR**(両方)と漸近等価。計算コスト最小。" },
  { id: "g1-q62", category: "確率過程", difficulty: 3, question: "**Ornstein-Uhlenbeck 過程** の特徴として最も適切なものを選びなさい。", choices: ["平均回帰型の連続マルコフ過程", "Brown 運動と同じ", "完全独立", "離散過程"], correctIndex: 0, explanation: "**OU 過程**: $dX_t = -\\theta(X_t - \\mu)dt + \\sigma dW_t$。**平均回帰**(mean-reverting)・ Gauss 過程 ・ 定常分布あり。金融 ・ 物理で利用。" },
  { id: "g1-q63", category: "ノンパラ", difficulty: 3, question: "**Kernel Density Estimation(KDE)** の **Bandwidth h** の選択基準として **誤っているもの** を選びなさい。", choices: ["Silverman の経験則", "Cross-Validation(ISE 最小化)", "Plug-in 法", "h を 0 にする"], correctIndex: 3, explanation: "**KDE**: $\\hat{f}(x) = \\frac{1}{nh} \\sum K(\\frac{x - X_i}{h})$。**$h \\to 0$ で点ピーク、$h$ 大でスムージング**。Silverman / CV / Plug-in でバランス取り。" },
  { id: "g1-q64", category: "EM アルゴリズム", difficulty: 3, question: "**EM アルゴリズム** の収束性として最も適切なものを選びなさい。", choices: ["対数尤度を単調非減少 → 局所最適に収束", "全局最適保証", "確率収束のみ", "1 回で収束"], correctIndex: 0, explanation: "**EM**: E-step(期待値)+ M-step(最大化)を反復。**$\\log L(\\theta^{(t+1)}) \\geq \\log L(\\theta^{(t)})$** を保証(Jensen)。局所最適 ・ 鞍点も。" },
  { id: "g1-q65", category: "情報幾何", difficulty: 3, question: "**KL ダイバージェンス** の特徴として **誤っているもの** を選びなさい。", choices: ["非負性 $D(P||Q) \\geq 0$", "$P = Q$ で $0$", "対称性 $D(P||Q) = D(Q||P)$", "Pinsker の不等式で全変動距離と関連"], correctIndex: 2, explanation: "**KL は非対称** $D(P||Q) \\neq D(Q||P)$(距離ではない)。**Jensen-Shannon Divergence** は対称化版。Pinsker: $D_{KL}(P||Q) \\geq 2 D_{TV}(P, Q)^2$。" },
  { id: "g1-q66", category: "数理統計", difficulty: 4, question: "**Glivenko-Cantelli 定理** の主張として最も適切なものを選びなさい。", choices: ["経験分布関数が真の分布関数に一様収束(a.s.)", "中心極限定理", "大数の弱法則", "Bayes 定理"], correctIndex: 0, explanation: "**Glivenko-Cantelli**: $\\sup_x |F_n(x) - F(x)| \\to 0$ a.s.。**統計学の基本定理**(FTC of Stats)。**DKW 不等式**で収束速度も評価可。" },
  { id: "g1-q67", category: "数理統計", difficulty: 4, question: "**指数分布族(Exponential Family)** の標準形として最も適切なものを選びなさい。", choices: ["$f(x;\\theta) = h(x) \\exp(\\eta(\\theta)^T T(x) - A(\\theta))$", "$f = e^{-x}$", "$f = 1/x$", "$f = \\log x$"], correctIndex: 0, explanation: "**Exponential Family**: 正規 / 二項 / ポアソン / ガンマ / ベータ等を統一。**T(x)** が **十分統計量**、**A(θ)** が **対数分配関数**(累積母関数)。GLM の基盤。" },
  { id: "g1-q68", category: "推定理論", difficulty: 4, question: "**UMVUE(一様最小分散不偏推定量)** を求める典型手法として最も適切なものを選びなさい。", choices: ["Rao-Blackwell + Lehmann-Scheffé 定理(完備十分統計量で条件付け)", "MAP", "GD", "Bagging"], correctIndex: 0, explanation: "**Lehmann-Scheffé**: T が完備十分統計量で $g(T)$ が不偏なら $g(T)$ は UMVUE。**Rao-Blackwell**(不偏推定量を T で条件付け → 分散低下)と組合せ。" },
  { id: "g1-q69", category: "推定理論", difficulty: 4, question: "**MLE(最尤推定量)** の漸近正規性の主張として最も適切なものを選びなさい。", choices: ["$\\sqrt{n}(\\hat\\theta_{MLE} - \\theta) \\to N(0, I(\\theta)^{-1})$", "$\\hat\\theta = \\theta$ 確実", "MLE は不偏", "MLE は線形"], correctIndex: 0, explanation: "**MLE 漸近正規**: 漸近不偏 + 漸近的に Cramér-Rao 下限達成 → 漸近有効。**Wilks の定理**(対数尤度比 → $\\chi^2$)・ **Wald / Score Test** で検定。" },
  { id: "g1-q70", category: "検定理論", difficulty: 4, question: "**Neyman-Pearson 補題** の主張として最も適切なものを選びなさい。", choices: ["単純帰無仮説 vs 単純対立仮説で、尤度比検定が最強力検定", "両者同じ", "p 値が α で棄却", "LASSO 最強力"], correctIndex: 0, explanation: "**N-P 補題**: $\\Phi(x) = 1$ if $f_1(x)/f_0(x) > k$ else $0$ が **Most Powerful Test**。**Likelihood Ratio Test**(複合仮説では一般化)・ **UMP / UMPU Test** で発展。" },
  { id: "g1-q71", category: "ベイズ", difficulty: 4, question: "**共役事前分布(Conjugate Prior)** の例として **誤っているもの** を選びなさい。", choices: ["ベルヌーイ尤度 + ベータ事前 → ベータ事後", "ポアソン尤度 + ガンマ事前 → ガンマ事後", "正規尤度(σ既知)+ 正規事前 → 正規事後", "GPU 尤度 + 線形事前 → 線形事後"], correctIndex: 3, explanation: "**Conjugate Prior**: 指数分布族の自然な共役。**Beta-Bernoulli / Gamma-Poisson / Normal-Normal / Inverse-Gamma-Normal(σ²)・ Dirichlet-Multinomial**。GPU 尤度は数学的概念ではない。" },
  { id: "g1-q72", category: "確率過程", difficulty: 4, question: "**Brown 運動(Wiener 過程)** の性質として **誤っているもの** を選びなさい。", choices: ["$W_0 = 0$", "独立増分", "$W_t - W_s \\sim N(0, t-s)$", "ほぼ確実に微分可能"], correctIndex: 3, explanation: "**Brownian Motion**: 連続だが **ほぼ確実にどこでも微分不可能**(極めて荒い ・ Hölder 指数 < 1/2)。**Stochastic Calculus**(Itô 計算)で扱う。金融 ・ 物理 ・ MCMC の基盤。" },
  { id: "g1-q73", category: "確率過程", difficulty: 4, question: "**マルチンゲール(Martingale)** の定義として最も適切なものを選びなさい。", choices: ["$E[X_{t+1} | \\mathcal{F}_t] = X_t$(未来期待値が現在値)", "$X_t = t$", "$X_t$ 独立", "$X_t$ 増加"], correctIndex: 0, explanation: "**Martingale**: 条件付期待値が現在値。**Optional Stopping Theorem**(条件下で停止時刻でも martingale 性)・ **Doob's Inequality / Convergence**。フェアゲーム / 金融 / ベイズ。" },
  { id: "g1-q74", category: "情報理論", difficulty: 4, question: "**Stein の補題**(指数族向け)の主張として最も適切なものを選びなさい。", choices: ["$E[(X - \\mu) g(X)] = \\sigma^2 E[g'(X)]$($X \\sim N(\\mu, \\sigma^2)$)", "$E[X] = 0$", "$Var[X] = 0$", "Bayes 定理"], correctIndex: 0, explanation: "**Stein's Lemma**: 正規分布の特徴付け。**Stein 推定量**(縮小推定 ・ James-Stein で 3 次元以上は MLE 優越)の基盤。**Score Matching**(VAE / Diffusion)にも応用。" },
  { id: "g1-q75", category: "情報幾何", difficulty: 4, question: "**フィッシャー情報行列** の意味として最も適切なものを選びなさい。", choices: ["対数尤度の Hessian の期待値(or スコア関数の共分散)", "GD の Hessian", "GPU 性能", "認証"], correctIndex: 0, explanation: "**Fisher Information**: $I(\\theta) = -E[\\nabla^2 \\log L]$。**情報幾何**で Riemann 計量を定義 → **Natural Gradient**(K-FAC 等)で深層学習にも応用。" },
  { id: "g1-q76", category: "高次元", difficulty: 4, question: "**Lasso の Oracle 性質** が成立する条件として最も適切なものを選びなさい。", choices: ["Restricted Eigenvalue 条件 + 適切な λ 選択(Bickel-Ritov-Tsybakov 2009)", "全て成立", "GPU 必須", "認証"], correctIndex: 0, explanation: "**Oracle Property**(Fan & Li 2001): 真の支持集合を識別 + 漸近正規性。**SCAD / MCP**(Folded Concave)で達成。**RE Condition**(Bickel et al.)が証明の鍵。" },
  { id: "g1-q77", category: "数理最適化", difficulty: 4, question: "**KKT 条件** の構成要素として **誤っているもの** を選びなさい。", choices: ["定常性 ($\\nabla L = 0$)", "Primal Feasibility", "Dual Feasibility + Complementary Slackness", "GPU 利用率"], correctIndex: 3, explanation: "**KKT 4 条件**: ① 定常性 ② Primal 実行可能 ③ Dual 実行可能 ($\\mu \\geq 0$) ④ Complementary Slackness ($\\mu_i g_i = 0$)。**SVM 双対 / 凸最適化** の理論基盤。" },
  { id: "g1-q78", category: "極値", difficulty: 4, question: "**極値理論(Extreme Value Theory)** の Generalized Extreme Value(GEV)分布の 3 タイプとして **誤っているもの** を選びなさい。", choices: ["Gumbel(指数尾)", "Fréchet(重尾)", "Weibull(有限上限)", "Logistic"], correctIndex: 3, explanation: "**Fisher-Tippett 定理**: 最大値の極限分布は GEV(Gumbel / Fréchet / Weibull の 3 種)に統一。**保険 ・ 金融 ・ リスク管理 ・ 気候**に応用。**Peak-over-Threshold**(POT)で GPD も。" },
  { id: "g1-q79", category: "因果推論", difficulty: 4, question: "**Do-Calculus**(Pearl)の 3 つのルールとして **誤っているもの** を選びなさい。", choices: ["Insertion/Deletion of Observations", "Action/Observation Exchange", "Insertion/Deletion of Actions", "GPU Exchange"], correctIndex: 3, explanation: "**Do-Calculus**: ① 観測の追加/削除 ② 介入と観測の交換 ③ 介入の追加/削除。**Pearl SCM** の中核。**Backdoor / Frontdoor 基準 / Identifiability** に応用。" },
  { id: "g1-q80", category: "実務", difficulty: 4, question: "統計検定 1 級で重視される **数理統計学の総合力** として最も適切なものを選びなさい。", choices: ["推定 + 検定 + ベイズ + 確率過程 + 高次元 + 情報幾何 + 数理最適化 の統合", "数学公式のみ", "GUI のみ", "Excel のみ"], correctIndex: 0, explanation: "**1 級試験範囲**: ① 推定理論(UMVUE / MLE / Robust)② 検定理論(NP / LRT)③ ベイズ ・ 確率過程 ④ ノンパラ ・ 多変量 ・ 時系列 ⑤ 数理最適化 ⑥ 情報理論 ・ 因果推論。**大学院修士〜博士相当**。" },
];
