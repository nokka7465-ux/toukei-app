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
  {
    id: "gp1-q16",
    difficulty: 2,
    category: "多変量解析",
    question:
      "ロジスティック回帰 $\\log(p/(1-p)) = \\beta_0 + \\beta_1 x$ で $\\hat{\\beta}_1 = 1.0$ と推定されたとき、$x$ が 1 単位増えたときのオッズ比として最も近いものを選びなさい($e \\approx 2.72$)。",
    choices: ["$1.0$", "$1.72$", "$2.72$", "$10$"],
    correctIndex: 2,
    explanation:
      "オッズ比は $e^{\\hat{\\beta}_1} = e^1 \\approx 2.72$。「$x$ が 1 単位増えるとオッズが約 2.72 倍になる」と解釈する。",
  },
  {
    id: "gp1-q17",
    difficulty: 2,
    category: "時系列解析",
    question:
      "AR(1) 過程 $X_t = \\phi X_{t-1} + \\varepsilon_t$ が定常になる条件として最も適切なものを選びなさい。",
    choices: [
      "$\\phi > 0$",
      "$\\phi = 1$",
      "$|\\phi| < 1$",
      "$\\phi$ の値によらず常に定常",
    ],
    correctIndex: 2,
    explanation:
      "AR(1) は $|\\phi| < 1$ のとき(弱)定常。$\\phi = 1$ ではランダムウォーク(非定常)、$|\\phi| > 1$ では発散。",
  },
  {
    id: "gp1-q18",
    difficulty: 2,
    category: "ベイズ統計",
    question:
      "事前分布 $\\theta \\sim \\mathrm{Beta}(1, 1)$(一様分布)を仮定し、$n = 4$ 回のベルヌーイ試行で成功 $3$、失敗 $1$ を観測した。事後分布として最も適切なものを選びなさい。",
    choices: [
      "$\\mathrm{Beta}(3, 1)$",
      "$\\mathrm{Beta}(4, 2)$",
      "$\\mathrm{Beta}(1, 1)$",
      "$\\mathrm{Beta}(5, 3)$",
    ],
    correctIndex: 1,
    explanation:
      "ベータ-二項共役性より、事後分布は $\\mathrm{Beta}(\\alpha + k,\\ \\beta + n - k) = \\mathrm{Beta}(1 + 3,\\ 1 + 1) = \\mathrm{Beta}(4, 2)$。事後の期待値は $4/6 \\approx 0.67$。",
  },
  {
    id: "gp1-q19",
    difficulty: 3,
    category: "多変量解析",
    question:
      "重回帰モデル $\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$ で多重共線性が強いとき、起こる症状として最も適切でないものを選びなさい。",
    choices: [
      "係数の標準誤差が極端に大きくなる",
      "係数推定値が不安定で、データを少し変えるだけで大きく変動する",
      "決定係数 $R^2$ が必ず低下する",
      "$X^{\\top}X$ の行列式がほぼゼロに近づく",
    ],
    correctIndex: 2,
    explanation:
      "多重共線性は係数の推定を不安定にするが、$R^2$ 自体は予測の説明力を測る指標で、多重共線性があっても下がるとは限らない。むしろ高いままで「予測はできるが係数の解釈が困難」という状況が生まれる。診断には VIF を見る。",
  },
  {
    id: "gp1-q20",
    difficulty: 2,
    category: "時系列解析",
    question:
      "MA(q) モデル $X_t = \\varepsilon_t + \\theta_1 \\varepsilon_{t-1} + \\cdots + \\theta_q \\varepsilon_{t-q}$ について、自己相関関数 ACF の性質として最も適切なものを選びなさい。",
    choices: [
      "ラグ $h > q$ で ACF は 0 になる",
      "ラグ $h$ が大きくなっても ACF は減衰しない",
      "ACF は周期的に振動する",
      "ACF は AR モデルと同じ形を持つ",
    ],
    correctIndex: 0,
    explanation:
      "MA(q) は過去 $q$ 期のノイズしか引きずらないので、ラグ $q$ より先では ACF は 0 になる(打ち切られる)。これがモデル次数 $q$ の判定基準。AR(p) は逆に PACF がラグ $p$ で打ち切られる。",
  },
  {
    id: "gp1-q21",
    difficulty: 3,
    category: "ベイズ統計",
    question:
      "ある検査の感度 $0.99$、偽陽性率 $0.05$、有病率 $0.001$ のとき、陽性と判定された人が実際に病気である確率(陽性的中率、PPV)として最も近いものを選びなさい。",
    choices: ["約 $0.019$", "約 $0.099$", "約 $0.99$", "約 $0.001$"],
    correctIndex: 0,
    explanation:
      "ベイズの定理: $P(D|+) = \\dfrac{0.99 \\times 0.001}{0.99 \\times 0.001 + 0.05 \\times 0.999} = \\dfrac{0.00099}{0.00099 + 0.04995} \\approx 0.0194$。有病率が低いと PPV も大幅に下がる。",
  },
  {
    id: "gp1-q22",
    difficulty: 2,
    category: "多変量解析",
    question:
      "重回帰モデルの自由度調整済み決定係数 $R^2_{\\mathrm{adj}}$ を導入する目的として最も適切なものを選びなさい。",
    choices: [
      "計算量を減らすため",
      "標本サイズの違いを補正するため",
      "無関係な説明変数を増やすことで $R^2$ が見かけ上上がる問題を補正するため",
      "$R^2$ を $0$ に近づけるため",
    ],
    correctIndex: 2,
    explanation:
      "重回帰では説明変数を増やすほど $R^2$ は単調に上がる(無関係でも下がらない)。これを補正するため、変数の数 $k$ に応じてペナルティを課したのが $R^2_{\\mathrm{adj}}$。モデル比較で重要。",
  },
  {
    id: "gp1-q23",
    difficulty: 2,
    category: "多変量解析",
    question:
      "PCA を実行する前にデータを標準化(z スコア化)すべき場面として最も適切なものを選びなさい。",
    choices: [
      "全変数の単位が同じ",
      "変数の単位がバラバラ(身長 cm と体重 kg など)",
      "標本サイズが小さい",
      "標本サイズが大きい",
    ],
    correctIndex: 1,
    explanation:
      "PCA は分散の大きい変数の方向を優先的に拾う性質があるため、単位が違うと「単位が大きい変数」に引きずられる。標準化で各変数の分散を 1 に揃えてから PCA する、というのが標準作法。",
  },
  {
    id: "gp1-q24",
    difficulty: 3,
    category: "ベイズ統計",
    question:
      "ガンマ-ポアソン共役性について、$\\theta \\sim \\mathrm{Gamma}(\\alpha, \\beta)$ を事前分布とし、$X \\sim \\mathrm{Po}(\\theta)$ から $n$ 個の独立観測 $\\sum X_i = s$ を得たときの事後分布として最も適切なものを選びなさい。",
    choices: [
      "$\\mathrm{Gamma}(\\alpha + s,\\ \\beta + n)$",
      "$\\mathrm{Gamma}(\\alpha,\\ \\beta + n)$",
      "$\\mathrm{Gamma}(\\alpha + n,\\ \\beta + s)$",
      "$\\mathrm{Gamma}(\\alpha s,\\ \\beta n)$",
    ],
    correctIndex: 0,
    explanation:
      "ガンマ-ポアソン共役性: 事後 $\\mathrm{Gamma}(\\alpha + \\sum x_i,\\ \\beta + n)$。事前パラメータに観測の合計と件数を加えるだけ、というシンプルな更新ルール。",
  },
  {
    id: "gp1-q25",
    difficulty: 2,
    category: "確率過程",
    question:
      "2 状態マルコフ連鎖の遷移行列 $P = \\begin{pmatrix} 0.9 & 0.1 \\\\ 0.5 & 0.5 \\end{pmatrix}$ について、定常分布 $(\\pi_1, \\pi_2)$ として最も近いものを選びなさい。",
    choices: [
      "$(0.5, 0.5)$",
      "$(0.83, 0.17)$",
      "$(0.9, 0.1)$",
      "$(0.7, 0.3)$",
    ],
    correctIndex: 1,
    explanation:
      "$\\pi P = \\pi$ かつ $\\pi_1 + \\pi_2 = 1$ を解く。$0.9\\pi_1 + 0.5\\pi_2 = \\pi_1$ より $0.5\\pi_2 = 0.1\\pi_1$、つまり $\\pi_1 = 5\\pi_2$。$\\pi_2 = 1/6 \\approx 0.167$、$\\pi_1 = 5/6 \\approx 0.833$。",
  },
  {
    id: "gp1-q26",
    difficulty: 3,
    category: "時系列解析",
    question:
      "ARIMA(0, 1, 1) モデルについて、最も適切な説明を選びなさい。",
    choices: [
      "原系列は定常で、AR(1) モデルが当てはまる",
      "1 階差分を取ると MA(1) モデルが当てはまる",
      "1 階差分を取ると AR(1) モデルが当てはまる",
      "2 階差分を取らないと定常にならない",
    ],
    correctIndex: 1,
    explanation:
      "$\\mathrm{ARIMA}(p, d, q)$ で $d = 1$ は「1 階差分で定常化」、$p = 0,\\ q = 1$ は「差分後は MA(1)」を意味する。SES(指数平滑)とも数学的に等価で、トレンドのある時系列の基本モデル。",
  },
  {
    id: "gp1-q27",
    difficulty: 2,
    category: "多変量解析",
    question:
      "主成分分析(PCA)について、もっとも適切な説明はどれか。",
    choices: [
      "観測変数の背後にある共通因子を仮定するモデル",
      "群を最もよく分離する射影方向を探す手法",
      "分散共分散行列の固有値分解を用いて、分散最大方向を順次取る手法",
      "クラスタリングと同じく、データを群に分ける手法",
    ],
    correctIndex: 2,
    explanation:
      "PCA は分散共分散行列(または相関行列)の固有値分解を行い、固有値の大きい順に主成分を取る次元削減手法。1 は因子分析、2 は判別分析、4 はクラスタリング。",
  },
  {
    id: "gp1-q28",
    difficulty: 2,
    category: "多変量解析",
    question:
      "ある分散共分散行列の固有値が $\\lambda_1 = 6,\\ \\lambda_2 = 3,\\ \\lambda_3 = 1$ であった。第 2 主成分までの累積寄与率は何 % か。",
    choices: ["60%", "75%", "85%", "90%"],
    correctIndex: 3,
    explanation:
      "固有値の総和 = 10。第 2 主成分までの寄与は $(6 + 3) / 10 = 0.9 = 90\\%$。",
  },
  {
    id: "gp1-q29",
    difficulty: 3,
    category: "多変量解析",
    question:
      "k-means クラスタリングが最小化する目的関数として最も適切なのはどれか。",
    choices: [
      "全データの分散の和",
      "クラスタ内の点と重心の距離の 2 乗和(WCSS)",
      "群間距離の最大値",
      "シルエット係数",
    ],
    correctIndex: 1,
    explanation:
      "k-means は WCSS(within-cluster sum of squares)を最小化する。シルエット係数はクラスタ数評価の指標であり、目的関数自体ではない。",
  },
  {
    id: "gp1-q30",
    difficulty: 2,
    category: "GLM",
    question:
      "ロジスティック回帰について、もっとも適切な説明はどれか。",
    choices: [
      "応答変数が連続値で、リンク関数は恒等関数",
      "応答変数が二値で、リンク関数はロジット",
      "応答変数がカウントで、リンク関数は対数",
      "応答変数が正値で、リンク関数は逆数",
    ],
    correctIndex: 1,
    explanation:
      "ロジスティック回帰は二項分布 + ロジットリンクの GLM。3 はポアソン回帰、4 はガンマ回帰、1 は線形回帰。",
  },
  {
    id: "gp1-q31",
    difficulty: 3,
    category: "GLM",
    question:
      "ポアソン回帰の応用において、応答データの分散が平均よりも明らかに大きい(過分散)状況での適切な対処はどれか。",
    choices: [
      "サンプルサイズをさらに増やす",
      "二項分布を仮定し直す",
      "負の二項回帰または準ポアソン回帰を使う",
      "ロジスティック回帰に置き換える",
    ],
    correctIndex: 2,
    explanation:
      "ポアソン回帰は『分散 = 平均』を仮定するため、過分散があると標準誤差が過小評価される。負の二項分布や準ポアソンが標準的な対処法。",
  },
  {
    id: "gp1-q32",
    difficulty: 2,
    category: "分散分析",
    question:
      "一元配置分散分析(ANOVA)の F 統計量について、正しい説明はどれか。",
    choices: [
      "F = 群内分散 / 群間分散",
      "F = 群間分散 / 群内分散",
      "F = 全分散 / 群間分散",
      "F = 残差分散 / 全分散",
    ],
    correctIndex: 1,
    explanation:
      "ANOVA の F は『群間ばらつき(信号)/ 群内ばらつき(ノイズ)』。群間が群内に比べて大きいほど、群差が有意になる。",
  },
  {
    id: "gp1-q33",
    difficulty: 3,
    category: "分散分析",
    question:
      "二元配置 ANOVA で『交互作用が有意』と判定された場合の解釈としてもっとも適切なものはどれか。",
    choices: [
      "両方の主効果は無視できる",
      "ある要因の効果が、もう一方の要因の水準によって変わる",
      "両要因とも独立して効いている",
      "単純な足し算でモデル化できる",
    ],
    correctIndex: 1,
    explanation:
      "交互作用が有意 = 『要因 A の効果が要因 B の水準で異なる(またはその逆)』。主効果のみで解釈してはいけない。",
  },
  {
    id: "gp1-q34",
    difficulty: 2,
    category: "ノンパラ検定",
    question:
      "正規性が成り立たない 2 群独立データの中央位置の差を検定したい。最も適切な手法はどれか。",
    choices: [
      "対応のある t 検定",
      "Wilcoxon の符号順位検定",
      "Mann-Whitney の U 検定",
      "Fisher の正確検定",
    ],
    correctIndex: 2,
    explanation:
      "独立 2 群のノンパラ比較は Mann-Whitney(Wilcoxon の順位和検定とも呼ばれる)。Wilcoxon 符号順位検定は対応あり、Fisher 正確検定は分割表用。",
  },
  {
    id: "gp1-q35",
    difficulty: 2,
    category: "ノンパラ検定",
    question:
      "対応のある 2×2 分割表(治療前後の二値結果)に対する適切な検定はどれか。",
    choices: [
      "カイ二乗独立性検定",
      "Fisher の正確検定",
      "McNemar 検定",
      "Kruskal-Wallis 検定",
    ],
    correctIndex: 2,
    explanation:
      "対応のあるペアデータの二値結果には McNemar 検定。変化のあったペア(陽→陰、陰→陽)のみが情報を持ち、変化なしのセルは無視する。",
  },
  {
    id: "gp1-q36",
    difficulty: 3,
    category: "生存時間解析",
    question:
      "カプラン・マイヤー法について、もっとも適切な説明はどれか。",
    choices: [
      "打ち切りデータをすべて除外して生存率を計算する",
      "イベント発生時点で順次生存確率を更新する階段関数を推定する",
      "ハザード関数の形を仮定して尤度最大化で推定する",
      "共変量の効果を含めた回帰モデルである",
    ],
    correctIndex: 1,
    explanation:
      "KM は『各イベント時点で(1 − d_j/n_j)を順次掛ける』ノンパラメトリック推定。打ち切りデータも『その時点までは生存していた』情報として活用する。3 はパラメトリック、4 は Cox 比例ハザード。",
  },
  {
    id: "gp1-q37",
    difficulty: 3,
    category: "生存時間解析",
    question:
      "Cox 比例ハザードモデルで、ある共変量の係数が $\\hat\\beta = 0.405$ と推定された。この共変量が 1 単位増えたときのハザード比はおよそいくらか($e^{0.405} \\approx 1.5$)。",
    choices: ["0.5 倍", "1.0 倍", "1.5 倍", "2.0 倍"],
    correctIndex: 2,
    explanation:
      "Cox モデルではハザード比 = $e^{\\beta}$。$e^{0.405} \\approx 1.5$ なので、1 単位増で瞬間的なリスクが 1.5 倍になる。",
  },
  {
    id: "gp1-q38",
    difficulty: 2,
    category: "実験計画",
    question:
      "Fisher の実験計画 3 原則として正しい組合せはどれか。",
    choices: [
      "反復・無作為化・局所管理(ブロック化)",
      "反復・回帰化・誤差最小化",
      "標準化・無作為化・正規化",
      "対称化・繰り返し・線形化",
    ],
    correctIndex: 0,
    explanation:
      "Fisher の 3 原則は反復(replication)・無作為化(randomization)・局所管理(local control / blocking)。実験から因果効果を推定するための基本ルール。",
  },
  {
    id: "gp1-q39",
    difficulty: 2,
    category: "ベイズ統計",
    question:
      "共役事前分布(conjugate prior)について最も適切な記述はどれか。",
    choices: [
      "尤度と組み合わせると事後分布が事前分布と同じ族になる事前分布",
      "常に最も精度が高くなる事前分布",
      "一様分布のみを指す",
      "サンプルサイズが大きいときにのみ使える事前分布",
    ],
    correctIndex: 0,
    explanation:
      "共役事前は計算上扱いやすく、解析的に事後が求まる。例: ベルヌーイ尤度+ベータ事前→ベータ事後、正規尤度(分散既知)+正規事前→正規事後、ポアソン尤度+ガンマ事前→ガンマ事後。",
  },
  {
    id: "gp1-q40",
    difficulty: 3,
    category: "ベイズ統計",
    question:
      "MCMC(マルコフ連鎖モンテカルロ)で「バーンイン期間(burn-in)」を破棄する理由として最も適切なものはどれか。",
    choices: [
      "初期値の影響が抜けて定常分布(目標の事後分布)に収束するまでの過渡的サンプルを除くため",
      "計算量を減らすため",
      "棄却率を上げるため",
      "ランダムシードを変えるため",
    ],
    correctIndex: 0,
    explanation:
      "MCMC は初期状態から始まるマルコフ連鎖。最初は初期値依存が強く目標分布から外れる。連鎖が定常分布に収束するまでを burn-in として除外する。トレースプロットや Gelman-Rubin 統計量で収束を確認。",
  },
  {
    id: "gp1-q41",
    difficulty: 2,
    category: "多変量解析",
    question:
      "主成分分析(PCA)で「第1主成分の固有値が全分散の60%を占める」と言うとき、最も適切な解釈はどれか。",
    choices: [
      "第1主成分軸に射影するとデータの全分散の60%が説明できる",
      "第1主成分はデータの60%を完全に予測する",
      "第1主成分は60%の確率で正しい",
      "第1主成分の重み係数の絶対値が0.6である",
    ],
    correctIndex: 0,
    explanation:
      "PCA の固有値は対応する主成分軸の分散。固有値の総和は元データの全分散と等しい(共分散行列の対角和)。寄与率 = 固有値 / 固有値の総和。",
  },
  {
    id: "gp1-q42",
    difficulty: 3,
    category: "時系列",
    question:
      "ARIMA(p, d, q) モデルについて、$d$ が表すものとして最も適切なものはどれか。",
    choices: [
      "差分の階数(定常化のために何回階差を取るか)",
      "AR 項の数",
      "MA 項の数",
      "季節性の周期",
    ],
    correctIndex: 0,
    explanation:
      "ARIMA(p, d, q) の $d$ は階差の階数。元系列が非定常(トレンドあり)のとき $d$ 回階差を取って定常化してから AR(p) と MA(q) をあてはめる。多くの実データで $d = 1$ または $d = 2$。",
  },
  {
    id: "gp1-q43",
    difficulty: 2,
    category: "生存解析",
    question:
      "Kaplan-Meier 推定量で「打ち切り(censoring)」を考慮する基本的な考え方として最も適切なものはどれか。",
    choices: [
      "イベント発生時点でのみ生存確率を更新し、打ち切られた被験者はその時点までリスク集合から除外",
      "打ち切られた被験者を全員イベント発生として扱う",
      "打ち切られた被験者を完全に無視する(最初から含めない)",
      "打ち切り時点で生存確率を 0 にリセットする",
    ],
    correctIndex: 0,
    explanation:
      "KM 推定量は、各イベント時点で「死亡数 / リスク集合サイズ」を計算し、それらを掛け合わせる。打ち切られた被験者は、その時点まではリスク集合に貢献し、それ以降は除外される。これにより右打ち切りデータが扱える。",
  },
  {
    id: "gp1-q44",
    difficulty: 3,
    category: "生存解析",
    question:
      "Cox 比例ハザードモデル $h(t \\mid x) = h_0(t) \\exp(\\beta^\\top x)$ について、最も適切な記述はどれか。",
    choices: [
      "ベースラインハザード $h_0(t)$ を特定せずに $\\beta$ を部分尤度で推定できる(セミパラメトリック)",
      "$h_0(t)$ を必ず正規分布として推定する",
      "全ての共変量が独立であることを仮定する",
      "打ち切りデータには使えない",
    ],
    correctIndex: 0,
    explanation:
      "Cox モデルの特徴は、$h_0(t)$ の関数形を仮定せずに係数 $\\beta$ を推定できる「セミパラメトリック」性。比例ハザード仮定(共変量の効果が時間によらず一定)と打ち切り対応が前提。",
  },
  {
    id: "gp1-q45",
    difficulty: 2,
    category: "一般化線形モデル",
    question:
      "ロジスティック回帰がリンク関数として使う関数として最も適切なものはどれか。",
    choices: [
      "ロジット関数 $\\mathrm{logit}(p) = \\log\\dfrac{p}{1-p}$",
      "対数関数 $\\log p$",
      "プロビット関数 $\\Phi^{-1}(p)$",
      "恒等関数 $p$",
    ],
    correctIndex: 0,
    explanation:
      "ロジスティック回帰は GLM の一種で、応答変数が二項分布、リンク関数がロジット。プロビット回帰は別モデル(リンク関数が $\\Phi^{-1}$)。",
  },
  {
    id: "gp1-q46",
    difficulty: 3,
    category: "情報量規準",
    question:
      "AIC = -2 log L + 2k と BIC = -2 log L + k log n の主な違いとして最も適切なものはどれか。",
    choices: [
      "BIC はサンプルサイズ $n$ にも罰則を与えるため、$n$ が大きいほどパラメータ数を厳しく抑える傾向がある",
      "AIC は分類問題のみ、BIC は回帰問題のみに使う",
      "BIC は計算が AIC より高速",
      "AIC は事後確率を計算する",
    ],
    correctIndex: 0,
    explanation:
      "AIC は予測精度志向(KL 距離最小化)、BIC はベイズ理論的な「真のモデルを当てる」志向。$\\log n > 2$ ($n > 7$) 以上のサンプルでは BIC のほうがパラメータ数を厳しく抑える。",
  },
  {
    id: "gp1-q47",
    difficulty: 3,
    category: "混合モデル",
    question:
      "線形混合モデル(LMM)が必要になる典型的なデータ構造はどれか。",
    choices: [
      "学校・クラスのような階層構造を持つデータ、被験者ごとの繰り返し測定データなど、観測が独立でない場合",
      "完全独立な観測のみ",
      "離散値の観測のみ",
      "時系列データのみ",
    ],
    correctIndex: 0,
    explanation:
      "混合効果モデルは固定効果(全体平均)と変量効果(被験者・クラスごとのランダム切片など)を併せ持つ。学校→クラス→生徒の階層、繰り返し測定パネルデータなど、観測が独立でないデータで適切。",
  },
  {
    id: "gp1-q48",
    difficulty: 3,
    category: "ノンパラメトリック",
    question:
      "Wilcoxon の符号順位検定が前提とするのは、対応のある t 検定の前提のうちどれを緩めたものか。",
    choices: [
      "差の正規性の仮定を不要にし、対称性のみを仮定する",
      "対応関係そのものを不要にする",
      "サンプルサイズの大きさの仮定を緩める",
      "等分散性の仮定を緩める",
    ],
    correctIndex: 0,
    explanation:
      "Wilcoxon 符号順位検定は対応のある t 検定のノンパラ版。差 $D_i$ の **正規性** の仮定を不要にする代わりに「差の分布が中央値まわりに対称」を仮定。順位ベースなので外れ値に強い。",
  },
];
