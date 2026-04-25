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
    definition:
      "データの中でもっとも多く出現する値。質的データ(カテゴリ)で唯一使える代表値であり、分布の山の位置を表す。複数の値が同じ最大度数なら最頻値は複数となる。",
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
      "二値応答変数(成功/失敗)を扱う GLM。オッズの対数 $\\log(p/(1-p)) = \\beta_0 + \\beta_1 x + \\cdots$ をモデル化する。係数 $\\beta_j$ は「説明変数が 1 単位増えたときオッズが $e^{\\beta_j}$ 倍になる」と解釈できる。マーケティング・医療で頻出。",
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

  // === 4級 追加 / データ整理・確率の基本 ===
  {
    term: "度数",
    reading: "どすう",
    english: "frequency",
    definition:
      "ある階級(または値)に属するデータの個数。度数分布表で各階級ごとに数えた件数のこと。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "相対度数",
    reading: "そうたいどすう",
    english: "relative frequency",
    definition:
      "各階級の度数を全体の度数で割った値(=割合)。データ規模が違う集団同士の比較に便利。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "累積度数",
    reading: "るいせきどすう",
    english: "cumulative frequency",
    definition:
      "ある階級までの度数を順に足し上げた値。「○○以下が何人いるか」が一目でわかる。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "階級",
    reading: "かいきゅう",
    english: "class interval",
    definition:
      "度数分布表で連続データを区切る区間(例: 60〜70 点)。階級幅は基本的に揃える。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "階級値",
    reading: "かいきゅうち",
    english: "class midpoint",
    definition:
      "各階級の中央の値(=区間の中点)。度数分布表から平均などを計算するときの代表値として使う。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "散布図",
    reading: "さんぷず",
    english: "scatter plot",
    definition:
      "2 変数を横軸 $x$・縦軸 $y$ に取って点でプロットした図。2 変数の関係(相関)を視覚的に確認できる。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4",
  },
  {
    term: "棒グラフ",
    reading: "ぼうぐらふ",
    english: "bar chart",
    definition:
      "カテゴリごとの数量を棒の高さで比べる図。質的データ・離散量に向く。隣接させない(ヒストグラムとは異なる)。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4",
  },
  {
    term: "折れ線グラフ",
    reading: "おれせんぐらふ",
    english: "line chart",
    definition:
      "時系列など順序のあるデータを線でつないだ図。推移・トレンドを示すのに適している。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4",
  },
  {
    term: "円グラフ",
    reading: "えんぐらふ",
    english: "pie chart",
    definition:
      "全体を 100% として各項目の構成比を扇形で示す図。カテゴリが多すぎると見にくい。",
    level: "4",
    category: "可視化",
    link: "/textbook/grade-4",
  },
  {
    term: "試行",
    reading: "しこう",
    english: "trial",
    definition:
      "結果が偶然に決まる行為(コイン投げ・サイコロを振るなど)。確率の議論の出発点。",
    level: "4",
    category: "確率",
    link: "/textbook/grade-4",
  },
  {
    term: "事象",
    reading: "じしょう",
    english: "event",
    definition:
      "試行の結果として起こりうる集合(例: サイコロで偶数の目が出る)。1 個の結果は「根元事象」と呼ぶ。",
    level: "4",
    category: "確率",
    link: "/textbook/grade-4",
  },
  {
    term: "排反事象",
    reading: "はいはんじしょう",
    english: "mutually exclusive events",
    definition:
      "同時には起こりえない事象どうし。$A \\cap B = \\emptyset$。確率の加法定理で和の確率がそのまま足し算になる条件。",
    level: "4",
    category: "確率",
    link: "/textbook/grade-4",
  },

  // === 3級 追加 / 標本・分布の基礎 ===
  {
    term: "母集団",
    reading: "ぼしゅうだん",
    english: "population",
    definition:
      "調査・推測の対象となる全データ集団。母集団の真の値(母平均・母分散など)を「母数(パラメータ)」と呼ぶ。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "標本",
    reading: "ひょうほん",
    english: "sample",
    definition:
      "母集団から抽出された一部のデータ。標本から計算した値(標本平均など)を「統計量」と呼ぶ。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "全数調査",
    reading: "ぜんすうちょうさ",
    english: "census",
    definition:
      "母集団の全要素を調べる調査(国勢調査など)。誤差は小さいがコスト・時間がかかる。",
    level: "3",
    category: "標本抽出",
    link: "/textbook/grade-3",
  },
  {
    term: "標本調査",
    reading: "ひょうほんちょうさ",
    english: "sample survey",
    definition:
      "母集団の一部だけを調べて全体を推測する調査。コストが低く、ほとんどの社会調査で採用される。",
    level: "3",
    category: "標本抽出",
    link: "/textbook/grade-3",
  },
  {
    term: "無作為抽出",
    reading: "むさくいちゅうしゅつ",
    english: "random sampling",
    definition:
      "母集団のどの要素も同じ確率で標本に選ばれるようにする抽出法。推測統計の前提となる。",
    level: "3",
    category: "標本抽出",
    link: "/textbook/grade-3",
  },
  {
    term: "標準正規分布",
    reading: "ひょうじゅんせいきぶんぷ",
    english: "standard normal distribution",
    definition:
      "平均 0・分散 1 の正規分布 $N(0,1)$。任意の正規分布は標準化により標準正規分布に変換できる。",
    level: "3",
    category: "確率分布",
    link: "/textbook/grade-3",
  },
  {
    term: "z 値",
    reading: "ぜっとち",
    english: "z-score",
    definition:
      "$z = (x - \\mu) / \\sigma$。データを標準化したときの値。「平均から標準偏差いくつ分離れているか」を表す。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "確率密度関数",
    reading: "かくりつみつどかんすう",
    english: "probability density function (pdf)",
    definition:
      "連続型確率変数の分布を表す関数 $f(x)$。区間 $[a,b]$ の確率は $\\int_a^b f(x)\\,dx$。",
    level: "3",
    category: "確率分布",
    link: "/textbook/grade-3",
  },
  {
    term: "累積分布関数",
    reading: "るいせきぶんぷかんすう",
    english: "cumulative distribution function (cdf)",
    definition:
      "$F(x) = P(X \\le x)$。「$x$ 以下になる確率」を返す関数。pdf を積分すると得られる。",
    level: "3",
    category: "確率分布",
    link: "/textbook/grade-3",
  },
  {
    term: "大数の法則",
    reading: "たいすうのほうそく",
    english: "law of large numbers",
    definition:
      "標本サイズ $n$ を大きくするほど、標本平均が母平均に近づく(確率収束する)という法則。推測統計の基盤。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "ベルヌーイ分布",
    reading: "べるぬーいぶんぷ",
    english: "Bernoulli distribution",
    definition:
      "0 か 1 の値だけを取る最も単純な分布。$P(X=1)=p$。$n$ 回の独立試行を集めると二項分布になる。",
    level: "3",
    category: "確率分布",
    link: "/textbook/grade-3",
  },

  // === 2級 追加 / 推定・検定・分散分析 ===
  {
    term: "不偏推定量",
    reading: "ふへんすいていりょう",
    english: "unbiased estimator",
    definition:
      "期待値が母数に一致する推定量 $E[\\hat\\theta] = \\theta$。標本平均は母平均の不偏推定量、不偏分散は母分散の不偏推定量。",
    level: "2",
    category: "推定",
    link: "/textbook/grade-2",
  },
  {
    term: "カイ二乗分布",
    reading: "かいにじょうぶんぷ",
    english: "chi-squared distribution",
    definition:
      "標準正規変数 $Z_1,\\dots,Z_k$ の二乗和 $\\sum Z_i^2$ の分布。自由度 $k$。分散の検定や独立性の検定で使う。",
    level: "2",
    category: "確率分布",
    link: "/textbook/grade-2",
  },
  {
    term: "F 分布",
    reading: "えふぶんぷ",
    english: "F distribution",
    definition:
      "2 つの独立なカイ二乗統計量の比の分布。分散分析・分散比の検定に使う。",
    level: "2",
    category: "確率分布",
    link: "/textbook/grade-2",
  },
  {
    term: "F 検定",
    reading: "えふけんてい",
    english: "F test",
    definition:
      "F 分布を使った検定の総称。2 群の分散の等しさの検定や、回帰モデルの全係数 0 の検定など。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "対応のある t 検定",
    reading: "たいおうのあるてぃーけんてい",
    english: "paired t-test",
    definition:
      "同じ被験者の前後比較など、ペア構造があるデータの平均差の検定。差 $d_i$ の平均が 0 かを検定する。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "対応のない t 検定",
    reading: "たいおうのないてぃーけんてい",
    english: "two-sample t-test",
    definition:
      "独立な 2 群の平均差の検定。等分散を仮定するスチューデントの t 検定と、仮定しないウェルチの t 検定がある。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "分散分析",
    reading: "ぶんさんぶんせき",
    english: "ANOVA (analysis of variance)",
    definition:
      "3 群以上の平均差を、群間変動と群内変動の比(F 値)で同時に検定する手法。一元配置・二元配置などがある。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "残差",
    reading: "ざんさ",
    english: "residual",
    definition:
      "実測値とモデルによる予測値の差 $y_i - \\hat y_i$。回帰の当てはまりや前提(等分散・独立性)を残差プロットで診断する。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2",
  },
  {
    term: "多重共線性",
    reading: "たじゅうきょうせんせい",
    english: "multicollinearity",
    definition:
      "重回帰で説明変数どうしが強く相関している状態。係数の推定が不安定になる。VIF などで検出する。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2",
  },
  {
    term: "単純無作為抽出",
    reading: "たんじゅんむさくいちゅうしゅつ",
    english: "simple random sampling",
    definition:
      "母集団のすべての要素が等しい確率で選ばれる、最も基本的な無作為抽出法。",
    level: "2",
    category: "標本抽出",
    link: "/textbook/grade-2",
  },
  {
    term: "層化抽出",
    reading: "そうかちゅうしゅつ",
    english: "stratified sampling",
    definition:
      "母集団を性別・年代などの層に分け、各層から無作為抽出する方法。層内が均質なほど推定精度が上がる。",
    level: "2",
    category: "標本抽出",
    link: "/textbook/grade-2",
  },
  {
    term: "クラスター抽出",
    reading: "くらすたーちゅうしゅつ",
    english: "cluster sampling",
    definition:
      "母集団を地域・学校などの集落(クラスター)に分け、いくつかのクラスターを丸ごと抽出する方法。コスト効率が高い。",
    level: "2",
    category: "標本抽出",
    link: "/textbook/grade-2",
  },

  // === 準1級 追加 / 多変量・ベイズ・時系列 ===
  {
    term: "ベイズ推定",
    reading: "べいずすいてい",
    english: "Bayesian estimation",
    definition:
      "事前分布とデータから事後分布 $p(\\theta|x) \\propto p(x|\\theta)p(\\theta)$ を求め、その分布(または期待値・MAP)で推定する方法。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1",
  },
  {
    term: "事前分布",
    reading: "じぜんぶんぷ",
    english: "prior distribution",
    definition:
      "データを観察する前に持つパラメータ $\\theta$ への信念を表す確率分布 $p(\\theta)$。共役分布や無情報事前分布が代表的。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1",
  },
  {
    term: "偏相関係数",
    reading: "へんそうかんけいすう",
    english: "partial correlation",
    definition:
      "他の変数の影響を統制(線形回帰で除去)した上での 2 変数の相関。見かけの相関と本当の関係を区別するのに使う。",
    level: "準1",
    category: "多変量",
    link: "/textbook/grade-pre1",
  },
  {
    term: "因子分析",
    reading: "いんしぶんせき",
    english: "factor analysis",
    definition:
      "観測変数の背後に潜む少数の共通因子を抽出する手法。心理測定や品質工学で広く使われる。主成分分析と目的が異なる。",
    level: "準1",
    category: "多変量",
    link: "/textbook/grade-pre1",
  },
  {
    term: "クラスター分析",
    reading: "くらすたーぶんせき",
    english: "cluster analysis",
    definition:
      "似たデータをグループ化する教師なし手法。階層的クラスタリング(ウォード法など)と非階層型(k-means)がある。",
    level: "準1",
    category: "多変量",
    link: "/textbook/grade-pre1",
  },
  {
    term: "一般化線形モデル",
    reading: "いっぱんかせんけいもでる",
    english: "generalized linear model (GLM)",
    definition:
      "線形予測子 $\\eta = X\\beta$ をリンク関数で結ぶ、線形回帰の一般化。正規・二項・ポアソンなど指数型分布族を扱える。",
    level: "準1",
    category: "回帰",
    link: "/textbook/grade-pre1",
  },
  {
    term: "リンク関数",
    reading: "りんくかんすう",
    english: "link function",
    definition:
      "GLM で目的変数の期待値 $\\mu$ と線形予測子 $\\eta$ を結ぶ関数 $g(\\mu) = \\eta$。ロジット・対数・恒等など。",
    level: "準1",
    category: "回帰",
    link: "/textbook/grade-pre1",
  },
  {
    term: "生存時間解析",
    reading: "せいぞんじかんかいせき",
    english: "survival analysis",
    definition:
      "イベント発生までの時間を、打ち切り(まだ起きていないデータ)を考慮して扱う手法。カプラン・マイヤー・Cox 比例ハザードが代表。",
    level: "準1",
    category: "応用",
    link: "/textbook/grade-pre1",
  },
  {
    term: "ハザード関数",
    reading: "はざーどかんすう",
    english: "hazard function",
    definition:
      "時刻 $t$ まで生存していた条件のもとで、その瞬間にイベントが起こる「率」。$h(t) = f(t)/S(t)$。",
    level: "準1",
    category: "応用",
    link: "/textbook/grade-pre1",
  },
  {
    term: "ホワイトノイズ",
    reading: "ほわいとのいず",
    english: "white noise",
    definition:
      "平均 0・分散一定で、時刻間に相関がない時系列。予測モデルの「予測できない残差」が満たすべき性質。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1",
  },
  {
    term: "季節調整",
    reading: "きせつちょうせい",
    english: "seasonal adjustment",
    definition:
      "時系列から季節パターンを取り除く処理。経済統計(GDP・小売販売額など)では原系列と季節調整値が併記される。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1",
  },

  // === 1級 追加 / 数理統計の理論 ===
  {
    term: "一致推定量",
    reading: "いっちすいていりょう",
    english: "consistent estimator",
    definition:
      "標本サイズ $n \\to \\infty$ で母数に確率収束する推定量。最尤推定量は通常の正則条件下で一致性を持つ。",
    level: "1",
    category: "推定理論",
    link: "/textbook/grade-1",
  },
  {
    term: "漸近正規性",
    reading: "ぜんきんせいきせい",
    english: "asymptotic normality",
    definition:
      "$\\sqrt{n}(\\hat\\theta - \\theta)$ が $n \\to \\infty$ で正規分布に分布収束する性質。最尤推定量は正則条件下でこれを満たす。",
    level: "1",
    category: "推定理論",
    link: "/textbook/grade-1",
  },
  {
    term: "スコア関数",
    reading: "すこあかんすう",
    english: "score function",
    definition:
      "対数尤度のパラメータ偏微分 $U(\\theta) = \\partial \\log L / \\partial \\theta$。期待値 0 で、その分散がフィッシャー情報量。",
    level: "1",
    category: "推定理論",
    link: "/textbook/grade-1",
  },
  {
    term: "ベイズ因子",
    reading: "べいずいんし",
    english: "Bayes factor",
    definition:
      "2 つのモデル $M_1, M_0$ の周辺尤度の比 $B_{10} = p(x|M_1)/p(x|M_0)$。ベイズ流のモデル比較・仮説検定の基本量。",
    level: "1",
    category: "ベイズ",
    link: "/textbook/grade-1",
  },
  {
    term: "ジェフリーズ事前分布",
    reading: "じぇふりーずじぜんぶんぷ",
    english: "Jeffreys prior",
    definition:
      "フィッシャー情報量の平方根に比例する事前分布 $p(\\theta) \\propto \\sqrt{I(\\theta)}$。再パラメータ化で不変な無情報事前分布。",
    level: "1",
    category: "ベイズ",
    link: "/textbook/grade-1",
  },

  // === 機械学習 / AI(G検定・DS検定向け) ===
  {
    term: "教師あり学習",
    reading: "きょうしありがくしゅう",
    english: "supervised learning",
    definition:
      "正解ラベル付きのデータから入出力の関係を学習する枠組み。分類(離散ラベル)と回帰(連続値)に分かれる。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "教師なし学習",
    reading: "きょうしなしがくしゅう",
    english: "unsupervised learning",
    definition:
      "ラベルなしデータから構造(クラスター・低次元表現)を発見する枠組み。k-means・主成分分析・自己符号化器など。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "強化学習",
    reading: "きょうかがくしゅう",
    english: "reinforcement learning",
    definition:
      "エージェントが環境と相互作用し、報酬を最大化する行動方策を試行錯誤で学ぶ枠組み。AlphaGo・自動運転などで成功。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "過学習",
    reading: "かがくしゅう",
    english: "overfitting",
    definition:
      "訓練データに合わせ込みすぎ、未知データへの汎化性能が低下する現象。モデル複雑度に対しデータが少ないと起きやすい。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "正則化",
    reading: "せいそくか",
    english: "regularization",
    definition:
      "損失関数に係数の大きさへの罰則を加え過学習を抑える手法。L1(ラッソ・スパース化)と L2(リッジ・縮小)が代表的。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "交差検証",
    reading: "こうさけんしょう",
    english: "cross validation",
    definition:
      "データを K 分割し、各部分をテスト用に回しながら平均性能を評価する手法。少データでの汎化性能評価の標準手法。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "混同行列",
    reading: "こんどうぎょうれつ",
    english: "confusion matrix",
    definition:
      "分類予測を「真陽性・偽陽性・偽陰性・真陰性」の 4 マスにまとめた表。各種評価指標の出発点。",
    level: "準1",
    category: "評価指標",
    link: "/certs/g-test/textbook",
  },
  {
    term: "適合率と再現率",
    reading: "てきごうりつとさいげんりつ",
    english: "precision and recall",
    definition:
      "適合率 = TP/(TP+FP)(陽性予測のうち本当に陽性)、再現率 = TP/(TP+FN)(本当の陽性のうち拾えた割合)。両者の調和平均が F1。",
    level: "準1",
    category: "評価指標",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ROC 曲線",
    reading: "あーるおーしーきょくせん",
    english: "ROC curve",
    definition:
      "閾値を動かしたときの「真陽性率(再現率)」と「偽陽性率」をプロットした曲線。曲線下面積 AUC が分類器の総合性能。",
    level: "準1",
    category: "評価指標",
    link: "/certs/g-test/textbook",
  },
  {
    term: "勾配降下法",
    reading: "こうばいこうかほう",
    english: "gradient descent",
    definition:
      "損失関数の勾配方向と逆向きにパラメータを少しずつ更新する最適化法。バッチ・確率的(SGD)・ミニバッチがある。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ニューラルネットワーク",
    reading: "にゅーらるねっとわーく",
    english: "neural network",
    definition:
      "線形変換と非線形活性化関数を多層に積んだ関数近似モデル。多層化したものをディープラーニングと呼ぶ。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "Transformer",
    reading: "とらんすふぉーまー",
    english: "Transformer",
    definition:
      "自己注意機構(self-attention)を中核とするディープラーニングモデル。BERT・GPT など現代の大規模言語モデルの基盤。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "バイアスとバリアンス",
    reading: "ばいあすとばりあんす",
    english: "bias-variance tradeoff",
    definition:
      "予測誤差はバイアス²(モデルの単純さの偏り)+ バリアンス(訓練データへの敏感さ)+ ノイズに分解される。両者のトレードオフがモデル選択の核心。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },

  // === 統計調査士 / 公的統計 ===
  {
    term: "統計法",
    reading: "とうけいほう",
    english: "Statistics Act",
    definition:
      "公的統計の作成・利用に関する基本法律(2007 年全部改正)。基幹統計の指定、統計データの目的外利用、秘密保護などを規定。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },
  {
    term: "基幹統計",
    reading: "きかんとうけい",
    english: "fundamental statistics",
    definition:
      "国勢統計(国勢調査)など、特に重要として総務大臣が指定する公的統計。報告義務・正確性確保の規定が強化されている。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },
  {
    term: "標本誤差",
    reading: "ひょうほんごさ",
    english: "sampling error",
    definition:
      "標本調査で全数を見ないことから生じる、推定値と母集団真値のズレ。標本サイズの平方根に反比例して小さくなる。",
    level: "2",
    category: "標本抽出",
    link: "/certs/survey/textbook",
  },
  {
    term: "非標本誤差",
    reading: "ひひょうほんごさ",
    english: "non-sampling error",
    definition:
      "回答漏れ・回答ミス・集計ミスなど、抽出以外の原因で生じる誤差。標本サイズを増やしても減らない。",
    level: "2",
    category: "標本抽出",
    link: "/certs/survey/textbook",
  },
  {
    term: "多段抽出",
    reading: "ただんちゅうしゅつ",
    english: "multistage sampling",
    definition:
      "都道府県 → 市区町村 → 世帯のように、段階的に抽出単位を絞り込む方法。大規模調査でコストを抑えられる。",
    level: "2",
    category: "標本抽出",
    link: "/certs/survey/textbook",
  },
];
