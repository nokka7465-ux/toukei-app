export type GlossaryTerm = {
  term: string;
  reading: string;
  english?: string;
  definition: string;
  level: "4" | "3" | "2" | "準1" | "1";
  category: string;
  link?: string; // 関連する教科書節への内部リンク
};

export const glossary: GlossaryTerm[] = [
  // === 4級 / 記述統計の基本 ===
  {
    term: "平均値",
    reading: "へいきんち",
    english: "mean",
    definition:
      "全データの合計をデータ数で割った値。データの中心位置を表すもっとも基本的な代表値。",
    level: "4",
    category: "代表値",
    link: "/textbook/grade-4#ch1-sec1",
  },
  {
    term: "中央値",
    reading: "ちゅうおうち",
    english: "median",
    definition:
      "データを昇順に並べたとき真ん中にくる値。外れ値の影響を受けにくい代表値。",
    level: "4",
    category: "代表値",
    link: "/textbook/grade-4#ch1-sec1",
  },
  {
    term: "最頻値",
    reading: "さいひんち",
    english: "mode",
    definition: "データの中でもっとも多く出現する値。カテゴリデータで特に有用。",
    level: "4",
    category: "代表値",
    link: "/textbook/grade-4#ch1-sec1",
  },
  {
    term: "範囲",
    reading: "はんい",
    english: "range",
    definition:
      "データの最大値から最小値を引いた値。もっとも単純なばらつきの指標。",
    level: "4",
    category: "ばらつき",
    link: "/textbook/grade-4#ch1-sec2",
  },
  {
    term: "四分位数",
    reading: "しぶんいすう",
    english: "quartile",
    definition:
      "データを昇順で 4 等分したときの 3 つの区切り値 $Q_1, Q_2, Q_3$。$Q_2$ は中央値。",
    level: "4",
    category: "ばらつき",
    link: "/textbook/grade-4#ch1-sec2",
  },
  {
    term: "四分位範囲",
    reading: "しぶんいはんい",
    english: "IQR (interquartile range)",
    definition: "$Q_3 - Q_1$。中央 50% のデータの広がり。外れ値に頑健。",
    level: "4",
    category: "ばらつき",
    link: "/textbook/grade-4#ch1-sec2",
  },
  {
    term: "箱ひげ図",
    reading: "はこひげず",
    english: "box plot",
    definition:
      "最小値・$Q_1$・中央値・$Q_3$・最大値の五数で分布を要約する図。複数群比較に便利。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4#ch1-sec2",
  },
  {
    term: "度数分布表",
    reading: "どすうぶんぷひょう",
    english: "frequency table",
    definition:
      "データを階級に分け、各階級の度数(個数)をまとめた表。ヒストグラムの基礎。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4#ch1-sec3",
  },
  {
    term: "ヒストグラム",
    reading: "ひすとぐらむ",
    english: "histogram",
    definition:
      "度数分布表を棒グラフ化したもの。隣の棒は隙間なく並べ、データの分布形を視覚化する。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4#ch1-sec3",
  },
  {
    term: "順列",
    reading: "じゅんれつ",
    english: "permutation",
    definition:
      "異なる $n$ 個から $r$ 個を選んで順序付けて並べる方法の総数。${}_n P_r$。",
    level: "4",
    category: "場合の数",
    link: "/textbook/grade-4#ch2-sec2",
  },
  {
    term: "組合せ",
    reading: "くみあわせ",
    english: "combination",
    definition:
      "異なる $n$ 個から $r$ 個を順序を区別せず選ぶ方法の総数。${}_n C_r$。",
    level: "4",
    category: "場合の数",
    link: "/textbook/grade-4#ch2-sec2",
  },
  {
    term: "余事象",
    reading: "よじしょう",
    english: "complementary event",
    definition:
      "事象 $A$ が起こらない事象。$P(A^c) = 1 - P(A)$。「少なくとも〜」型の問題に強い。",
    level: "4",
    category: "確率",
    link: "/textbook/grade-4#ch3-sec2",
  },

  // === 3級 / 記述統計と分布 ===
  {
    term: "分散",
    reading: "ぶんさん",
    english: "variance",
    definition:
      "偏差の 2 乗の平均。データのばらつきの大きさを表す代表的な指標。$s^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2$。",
    level: "3",
    category: "ばらつき",
    link: "/textbook/grade-3#ch1-sec1",
  },
  {
    term: "標準偏差",
    reading: "ひょうじゅんへんさ",
    english: "standard deviation",
    definition:
      "分散の正の平方根。もとのデータと同じ単位でばらつきを表現できる。",
    level: "3",
    category: "ばらつき",
    link: "/textbook/grade-3#ch1-sec1",
  },
  {
    term: "共分散",
    reading: "きょうぶんさん",
    english: "covariance",
    definition:
      "$s_{xy} = \\frac{1}{n}\\sum (x_i - \\bar{x})(y_i - \\bar{y})$。2 変数の連動の方向を示す。",
    level: "3",
    category: "2変数",
    link: "/textbook/grade-3#ch1-sec2",
  },
  {
    term: "相関係数",
    reading: "そうかんけいすう",
    english: "correlation coefficient",
    definition:
      "$r = s_{xy}/(s_x s_y)$。$-1 \\leq r \\leq 1$ の値で 2 変数の直線関係の強さを表す。",
    level: "3",
    category: "2変数",
    link: "/textbook/grade-3#ch1-sec2",
  },
  {
    term: "標準化",
    reading: "ひょうじゅんか",
    english: "standardization (z-score)",
    definition:
      "$z = (x - \\bar{x}) / s$ により、平均 0・標準偏差 1 の物差しに変換する操作。",
    level: "3",
    category: "変換",
    link: "/textbook/grade-3#ch1-sec3",
  },
  {
    term: "偏差値",
    reading: "へんさち",
    english: "T-score",
    definition:
      "z スコアを $T = 50 + 10 z$ に変換した値。平均 50・標準偏差 10 の物差し。",
    level: "3",
    category: "変換",
    link: "/textbook/grade-3#ch1-sec3",
  },
  {
    term: "条件付き確率",
    reading: "じょうけんつきかくりつ",
    english: "conditional probability",
    definition:
      "事象 $A$ が起こったもとで $B$ が起こる確率。$P(B \\mid A) = P(A \\cap B)/P(A)$。",
    level: "3",
    category: "確率",
    link: "/textbook/grade-3#ch2-sec1",
  },
  {
    term: "確率変数",
    reading: "かくりつへんすう",
    english: "random variable",
    definition:
      "試行結果に応じて値が確率的に決まる変数。離散と連続がある。$X, Y$ で表すのが慣例。",
    level: "3",
    category: "確率",
    link: "/textbook/grade-3#ch2-sec2",
  },
  {
    term: "期待値",
    reading: "きたいち",
    english: "expectation",
    definition:
      "確率変数の「ならした平均値」。離散なら $E[X] = \\sum x_i p_i$。",
    level: "3",
    category: "確率",
    link: "/textbook/grade-3#ch2-sec2",
  },
  {
    term: "二項分布",
    reading: "にこうぶんぷ",
    english: "binomial distribution",
    definition:
      "成功確率 $p$ のベルヌーイ試行を $n$ 回繰り返したときの成功回数 $X$ の分布。$E[X] = np$、$V[X] = np(1-p)$。",
    level: "3",
    category: "分布",
    link: "/textbook/grade-3#ch3-sec1",
  },
  {
    term: "正規分布",
    reading: "せいきぶんぷ",
    english: "normal (Gaussian) distribution",
    definition:
      "釣鐘型の連続分布 $N(\\mu, \\sigma^2)$。中心極限定理により多くの平均量がこれに近づく。",
    level: "3",
    category: "分布",
    link: "/textbook/grade-3#ch3-sec2",
  },
  {
    term: "信頼区間",
    reading: "しんらいくかん",
    english: "confidence interval",
    definition:
      "母集団の未知パラメータが「ある信頼度で」入る区間。例: $\\bar{X} \\pm 1.96\\,\\sigma/\\sqrt{n}$。",
    level: "3",
    category: "推定",
    link: "/textbook/grade-3#ch4-sec1",
  },
  {
    term: "中心極限定理",
    reading: "ちゅうしんきょくげんていり",
    english: "central limit theorem (CLT)",
    definition:
      "母集団の分布によらず、$n$ が十分大きいとき標本平均は近似的に正規分布に従う、という定理。",
    level: "3",
    category: "理論",
    link: "/textbook/grade-3#ch4-sec1",
  },

  // === 2級 / 推定・検定・回帰 ===
  {
    term: "不偏分散",
    reading: "ふへんぶんさん",
    english: "unbiased sample variance",
    definition:
      "$\\hat{s}^2 = \\frac{1}{n-1}\\sum (X_i - \\bar{X})^2$。母分散 $\\sigma^2$ の不偏推定量。",
    level: "2",
    category: "推定",
    link: "/textbook/grade-2#ch1-sec1",
  },
  {
    term: "標準誤差",
    reading: "ひょうじゅんごさ",
    english: "standard error (SE)",
    definition:
      "推定量のばらつきの大きさ。標本平均なら $\\sigma/\\sqrt{n}$。$n$ を増やすと縮む。",
    level: "2",
    category: "推定",
    link: "/textbook/grade-2#ch1-sec1",
  },
  {
    term: "自由度",
    reading: "じゆうど",
    english: "degrees of freedom",
    definition:
      "推定で「自由に動ける情報の数」。不偏分散の自由度は $n - 1$、回帰の残差は $n - k - 1$ など。",
    level: "2",
    category: "推定",
    link: "/textbook/grade-2#ch1-sec1",
  },
  {
    term: "t 分布",
    reading: "てぃーぶんぷ",
    english: "Student's t-distribution",
    definition:
      "標準正規より裾が厚い釣鐘型分布。母分散未知での母平均の推定・検定に使う。自由度を持つ。",
    level: "2",
    category: "分布",
    link: "/textbook/grade-2#ch1-sec2",
  },
  {
    term: "帰無仮説",
    reading: "きむかせつ",
    english: "null hypothesis",
    definition:
      "「差はない」「効果はない」など、退屈で当たり障りのない出発点となる仮説。$H_0$。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec1",
  },
  {
    term: "対立仮説",
    reading: "たいりつかせつ",
    english: "alternative hypothesis",
    definition: "帰無仮説に反する、研究者が示したい仮説。$H_1$ または $H_a$。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec1",
  },
  {
    term: "有意水準",
    reading: "ゆういすいじゅん",
    english: "significance level",
    definition:
      "「$H_0$ が真なのに棄却してしまう確率」の上限。慣例的に $\\alpha = 0.05$ や $0.01$。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec1",
  },
  {
    term: "p 値",
    reading: "ぴーち",
    english: "p-value",
    definition:
      "$H_0$ のもとで、現在のデータと同等以上に極端なデータが観測される確率。$p < \\alpha$ で棄却。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec1",
  },
  {
    term: "第1種の誤り",
    reading: "だいいっしゅのあやまり",
    english: "Type I error",
    definition: "$H_0$ が真なのに棄却してしまう誤り。確率は $\\alpha$。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec1",
  },
  {
    term: "第2種の誤り",
    reading: "だいにしゅのあやまり",
    english: "Type II error",
    definition:
      "$H_1$ が真なのに $H_0$ を棄却できない誤り。確率は $\\beta$。検出力は $1 - \\beta$。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec1",
  },
  {
    term: "カイ二乗検定",
    reading: "かいにじょうけんてい",
    english: "chi-squared test",
    definition:
      "観測度数と期待度数の食い違いを $\\chi^2 = \\sum (O - E)^2/E$ で測る検定。適合度・独立性に使う。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2#ch2-sec3",
  },
  {
    term: "回帰係数",
    reading: "かいきけいすう",
    english: "regression coefficient",
    definition:
      "回帰直線の傾き $\\hat{\\beta}$。$x$ が 1 単位増えたときの $y$ の予測値の変化量。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2#ch3-sec1",
  },
  {
    term: "決定係数",
    reading: "けっていけいすう",
    english: "coefficient of determination",
    definition:
      "$R^2 = 1 - \\mathrm{RSS}/\\mathrm{TSS}$。回帰モデルが応答変数の分散をどれだけ説明できたかの指標。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2#ch3-sec1",
  },
  {
    term: "最小二乗法",
    reading: "さいしょうにじょうほう",
    english: "ordinary least squares (OLS)",
    definition:
      "残差の 2 乗和を最小にするように回帰係数を推定する方法。$\\hat{\\boldsymbol{\\beta}} = (X^{\\top}X)^{-1}X^{\\top}\\mathbf{y}$。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2#ch3-sec1",
  },

  // === 準1級 / 多変量・ベイズ・時系列 ===
  {
    term: "ポアソン分布",
    reading: "ぽあそんぶんぷ",
    english: "Poisson distribution",
    definition:
      "単位時間あたり平均 $\\lambda$ 回起こる稀な事象の発生回数の分布。$E[X] = V[X] = \\lambda$。",
    level: "準1",
    category: "分布",
    link: "/textbook/grade-pre1#ch1-sec1",
  },
  {
    term: "指数分布",
    reading: "しすうぶんぷ",
    english: "exponential distribution",
    definition:
      "ポアソン過程の事象間隔(待ち時間)の分布。$E[T] = 1/\\lambda$。無記憶性をもつ。",
    level: "準1",
    category: "分布",
    link: "/textbook/grade-pre1#ch1-sec1",
  },
  {
    term: "多変量正規分布",
    reading: "たへんりょうせいきぶんぷ",
    english: "multivariate normal",
    definition:
      "正規分布の多次元版 $N_k(\\boldsymbol{\\mu}, \\Sigma)$。線形変換も周辺分布も条件付き分布も正規。",
    level: "準1",
    category: "分布",
    link: "/textbook/grade-pre1#ch1-sec2",
  },
  {
    term: "ベイズの定理",
    reading: "べいずのていり",
    english: "Bayes' theorem",
    definition:
      "事後分布 $\\propto$ 尤度 $\\times$ 事前分布。データを見て信念を更新する公式。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1#ch2-sec1",
  },
  {
    term: "事後分布",
    reading: "じごぶんぷ",
    english: "posterior distribution",
    definition:
      "データを観測した後の母数 $\\theta$ の分布。点推定や信用区間の出発点。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1#ch2-sec1",
  },
  {
    term: "共役分布",
    reading: "きょうやくぶんぷ",
    english: "conjugate prior",
    definition:
      "事前分布と尤度の組み合わせで、事後分布が同じ族の分布に閉じる関係。例: ベータ-二項。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1#ch2-sec2",
  },
  {
    term: "重回帰分析",
    reading: "じゅうかいきぶんせき",
    english: "multiple regression",
    definition:
      "複数の説明変数を持つ線形回帰モデル。$\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$。",
    level: "準1",
    category: "回帰",
    link: "/textbook/grade-pre1#ch3-sec1",
  },
  {
    term: "ロジスティック回帰",
    reading: "ろじすてぃっくかいき",
    english: "logistic regression",
    definition:
      "二値応答変数を扱う回帰。$\\log(p/(1-p)) = \\beta_0 + \\beta_1 x + \\cdots$ をモデル化。",
    level: "準1",
    category: "回帰",
    link: "/textbook/grade-pre1#ch3-sec2",
  },
  {
    term: "主成分分析",
    reading: "しゅせいぶんぶんせき",
    english: "PCA (principal component analysis)",
    definition:
      "分散共分散行列の固有ベクトル方向に射影することで、多変量データを低次元に圧縮する手法。",
    level: "準1",
    category: "多変量",
    link: "/textbook/grade-pre1#ch3-sec3",
  },
  {
    term: "AR モデル",
    reading: "えーあーるもでる",
    english: "autoregressive model",
    definition:
      "$X_t = \\phi_1 X_{t-1} + \\cdots + \\phi_p X_{t-p} + \\varepsilon_t$。過去の値で現在を予測する時系列モデル。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1#ch4-sec1",
  },
  {
    term: "ARIMA",
    reading: "ありま",
    english: "ARIMA (autoregressive integrated moving average)",
    definition:
      "差分を取って定常化した後 ARMA でモデル化する非定常時系列の標準モデル。$\\mathrm{ARIMA}(p, d, q)$。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1#ch4-sec1",
  },

  // === 1級 / 数理統計の理論 ===
  {
    term: "指数型分布族",
    reading: "しすうがたぶんぷぞく",
    english: "exponential family",
    definition:
      "$f(x;\\theta) = h(x)\\exp(\\eta(\\theta)T(x) - A(\\theta))$ の形に書ける分布族。十分統計量・最尤推定との相性が抜群。",
    level: "1",
    category: "理論",
    link: "/textbook/grade-1#ch1-sec1",
  },
  {
    term: "十分統計量",
    reading: "じゅうぶんとうけいりょう",
    english: "sufficient statistic",
    definition:
      "「$T$ さえあれば、$\\mathbf{X}$ の細部はもう $\\theta$ について情報を持たない」という統計量。フィッシャー・ネイマンの分解定理で判定。",
    level: "1",
    category: "理論",
    link: "/textbook/grade-1#ch1-sec1",
  },
  {
    term: "最尤推定",
    reading: "さいゆうすいてい",
    english: "maximum likelihood estimation (MLE)",
    definition:
      "尤度関数 $L(\\theta) = \\prod f(X_i;\\theta)$ を最大化するパラメータを推定値とする方法。一致性・漸近正規性・漸近有効性をもつ。",
    level: "1",
    category: "推定",
    link: "/textbook/grade-1#ch1-sec2",
  },
  {
    term: "フィッシャー情報量",
    reading: "ふぃっしゃーじょうほうりょう",
    english: "Fisher information",
    definition:
      "$I(\\theta) = -E[\\partial^2 \\log f / \\partial \\theta^2]$。データが $\\theta$ について持つ情報の量。",
    level: "1",
    category: "理論",
    link: "/textbook/grade-1#ch1-sec2",
  },
  {
    term: "クラメル・ラオの下限",
    reading: "くらめる・らおのかげん",
    english: "Cramér–Rao lower bound",
    definition:
      "正則条件下で不偏推定量の分散の下限 $V[\\hat{\\theta}] \\geq 1/(nI(\\theta))$。MLE は漸近的にこれを達成する。",
    level: "1",
    category: "理論",
    link: "/textbook/grade-1#ch1-sec2",
  },
  {
    term: "デルタ法",
    reading: "でるたほう",
    english: "delta method",
    definition:
      "$\\sqrt{n}(\\hat{\\theta} - \\theta) \\to N(0, \\sigma^2)$ から $\\sqrt{n}(g(\\hat{\\theta}) - g(\\theta)) \\to N(0, g'(\\theta)^2\\sigma^2)$ を導く道具。",
    level: "1",
    category: "漸近理論",
    link: "/textbook/grade-1#ch1-sec3",
  },
  {
    term: "ネイマン・ピアソン補題",
    reading: "ねいまん・ぴあそんほだい",
    english: "Neyman–Pearson lemma",
    definition:
      "単純仮説どうしの検定において、有意水準 $\\alpha$ のもとでの最強力検定が尤度比検定であることを保証する定理。",
    level: "1",
    category: "検定理論",
    link: "/textbook/grade-1#ch2-sec1",
  },
  {
    term: "尤度比検定",
    reading: "ゆうどひけんてい",
    english: "likelihood ratio test",
    definition:
      "$\\Lambda = \\sup L(\\theta_0) / \\sup L(\\theta)$ を使った検定。$-2\\log\\Lambda$ が漸近的にカイ二乗分布に従う(ウィルクスの定理)。",
    level: "1",
    category: "検定理論",
    link: "/textbook/grade-1#ch2-sec2",
  },
  {
    term: "EM アルゴリズム",
    reading: "いーえむあるごりずむ",
    english: "EM (expectation-maximization)",
    definition:
      "潜在変数モデルでの最尤推定を、E ステップと M ステップを繰り返して反復的に解く方法。GMM・HMM などに使う。",
    level: "1",
    category: "計算統計",
    link: "/textbook/grade-1#ch3-sec1",
  },
  {
    term: "MCMC",
    reading: "えむしーえむしー",
    english: "Markov chain Monte Carlo",
    definition:
      "目標分布に収束するマルコフ連鎖を構成して、その軌跡をサンプルとして使うベイズ推論の主役手法。MH 法・ギブス法など。",
    level: "1",
    category: "計算統計",
    link: "/textbook/grade-1#ch3-sec2",
  },
  {
    term: "ブートストラップ",
    reading: "ぶーとすとらっぷ",
    english: "bootstrap",
    definition:
      "観測標本から復元抽出で擬似標本を多数作り、推定量の分布や標準誤差を近似する汎用的な手法。",
    level: "1",
    category: "計算統計",
    link: "/textbook/grade-1#ch3-sec2",
  },
];
