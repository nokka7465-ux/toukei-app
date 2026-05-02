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

  // === 4 級 さらに追加 ===
  {
    term: "質的データ",
    reading: "しつてきでーた",
    english: "qualitative data",
    definition:
      "性別・血液型・好みなど、数値で大小を比較できないカテゴリのデータ。名義尺度・順序尺度に分類される。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "量的データ",
    reading: "りょうてきでーた",
    english: "quantitative data",
    definition:
      "身長・売上・気温など、数値で大小や差を比較できるデータ。間隔尺度・比例尺度に分類される。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "離散変数と連続変数",
    reading: "りさんへんすうとれんぞくへんすう",
    english: "discrete vs. continuous variable",
    definition:
      "離散変数は人数・回数のような飛び飛びの値、連続変数は身長・時間のように切れ目なく値を取る変数。扱う確率分布が異なる。",
    level: "4",
    category: "データ整理",
    link: "/textbook/grade-4",
  },
  {
    term: "同様に確からしい",
    reading: "どうようにたしからしい",
    english: "equally likely",
    definition:
      "ある試行のすべての根元事象が同じ確率で起こる状態。「サイコロ・コイン・くじ」など古典的確率の前提。",
    level: "4",
    category: "確率",
    link: "/textbook/grade-4",
  },
  {
    term: "樹形図",
    reading: "じゅけいず",
    english: "tree diagram",
    definition:
      "場合の数や確率を漏れなく数えるために、選択を枝分かれで描いた図。条件付き確率の理解にも有効。",
    level: "4",
    category: "場合の数",
    link: "/textbook/grade-4",
  },
  {
    term: "パーセンタイル",
    reading: "ぱーせんたいる",
    english: "percentile",
    definition:
      "データを小さい順に並べたとき下から $p\\%$ の位置にある値。$50$ パーセンタイルは中央値、$25/75$ は四分位数。",
    level: "4",
    category: "ばらつき",
    link: "/textbook/grade-4",
  },

  // === 3 級 さらに追加 ===
  {
    term: "復元抽出",
    reading: "ふくげんちゅうしゅつ",
    english: "sampling with replacement",
    definition:
      "抽出した要素を毎回母集団に戻してから次を引く方法。各回の試行が独立になり、二項分布などの前提となる。",
    level: "3",
    category: "標本抽出",
    link: "/textbook/grade-3",
  },
  {
    term: "非復元抽出",
    reading: "ひふくげんちゅうしゅつ",
    english: "sampling without replacement",
    definition:
      "一度抽出した要素は戻さずに次を引く方法。実際の調査の標準。試行は独立でなく、超幾何分布などで扱う。",
    level: "3",
    category: "標本抽出",
    link: "/textbook/grade-3",
  },
  {
    term: "母平均",
    reading: "ぼへいきん",
    english: "population mean",
    definition:
      "母集団全体の平均値 $\\mu$。標本平均 $\\bar X$ は母平均の不偏推定量で、推測統計の中心的な対象。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "母分散",
    reading: "ぼぶんさん",
    english: "population variance",
    definition:
      "母集団全体の分散 $\\sigma^2$。標本分散より不偏分散($n-1$ で割る)の方が母分散の不偏推定量となる。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "母比率",
    reading: "ぼひりつ",
    english: "population proportion",
    definition:
      "母集団における特定属性を持つ要素の割合 $p$。世論調査や品質管理で「賛成率」「不良率」として推定対象になる。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "標本比率",
    reading: "ひょうほんひりつ",
    english: "sample proportion",
    definition:
      "標本のうち特定属性を持つ要素の割合 $\\hat p$。大標本では $\\hat p \\sim N(p, p(1-p)/n)$ に近づく(中心極限定理)。",
    level: "3",
    category: "推測統計",
    link: "/textbook/grade-3",
  },
  {
    term: "期待値の線形性",
    reading: "きたいちのせんけいせい",
    english: "linearity of expectation",
    definition:
      "$E[aX + bY] = aE[X] + bE[Y]$ が独立性に関係なく常に成り立つ性質。確率論で最も使われる便利な道具。",
    level: "3",
    category: "確率",
    link: "/textbook/grade-3",
  },
  {
    term: "同時分布",
    reading: "どうじぶんぷ",
    english: "joint distribution",
    definition:
      "複数の確率変数 $(X,Y)$ が同時に取る値の確率分布。同時分布から各変数の周辺分布や条件付き分布が得られる。",
    level: "3",
    category: "確率",
    link: "/textbook/grade-3",
  },
  {
    term: "周辺分布",
    reading: "しゅうへんぶんぷ",
    english: "marginal distribution",
    definition:
      "同時分布から他の変数を確率の足し合わせ(積分)で消去して得られる、1 つの変数の単独分布。",
    level: "3",
    category: "確率",
    link: "/textbook/grade-3",
  },
  {
    term: "二項定理",
    reading: "にこうていり",
    english: "binomial theorem",
    definition:
      "$(a+b)^n = \\sum_{k=0}^{n} {}_n C_k a^k b^{n-k}$。二項分布の確率関数の正体でもある重要な展開公式。",
    level: "3",
    category: "場合の数",
    link: "/textbook/grade-3",
  },

  // === 2 級 さらに追加 ===
  {
    term: "一様分布",
    reading: "いちようぶんぷ",
    english: "uniform distribution",
    definition:
      "区間 $[a,b]$ で確率密度が一定の連続分布。乱数生成の基礎で、他分布のシミュレーションの出発点になる。",
    level: "2",
    category: "確率分布",
    link: "/textbook/grade-2",
  },
  {
    term: "幾何分布",
    reading: "きかぶんぷ",
    english: "geometric distribution",
    definition:
      "成功確率 $p$ のベルヌーイ試行を繰り返したときの初めて成功するまでの試行回数の分布。$E[X] = 1/p$。",
    level: "2",
    category: "確率分布",
    link: "/textbook/grade-2",
  },
  {
    term: "信頼水準",
    reading: "しんらいすいじゅん",
    english: "confidence level",
    definition:
      "信頼区間が母数を含む確率(例: 95%)。$1 - \\alpha$ の関係。区間幅と引き換えに信頼度を高められる。",
    level: "2",
    category: "推定",
    link: "/textbook/grade-2",
  },
  {
    term: "検出力",
    reading: "けんしゅつりょく",
    english: "statistical power",
    definition:
      "対立仮説が真のとき正しく帰無仮説を棄却できる確率 $1 - \\beta$。サンプルサイズ設計の基準として使う。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "効果量",
    reading: "こうかりょう",
    english: "effect size",
    definition:
      "群間の差の大きさを標準化した指標(Cohen の $d$ など)。p 値だけでは分からない「実質的な大きさ」を示す。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "ノンパラメトリック検定",
    reading: "のんぱらめとりっくけんてい",
    english: "nonparametric test",
    definition:
      "正規性などの分布仮定を置かず、順位や符号を用いる検定の総称。サンプルが小さい・分布が歪むときに有用。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "ウィルコクソンの符号順位検定",
    reading: "うぃるこくそんのふごうじゅんいけんてい",
    english: "Wilcoxon signed-rank test",
    definition:
      "対応のある 2 群差を、差の符号と順位に基づいて検定するノンパラ手法。対応のある t 検定の正規性を仮定しない代替。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "マン・ホイットニーの U 検定",
    reading: "まんほいっとにーのゆーけんてい",
    english: "Mann–Whitney U test",
    definition:
      "独立な 2 群の中央位置差を順位で検定するノンパラ手法。対応のない t 検定の正規性を仮定しない代替。",
    level: "2",
    category: "検定",
    link: "/textbook/grade-2",
  },
  {
    term: "スピアマンの順位相関係数",
    reading: "すぴあまんのじゅんいそうかんけいすう",
    english: "Spearman's rank correlation",
    definition:
      "2 変数の順位どうしのピアソン相関。単調関係を測り、外れ値や非線形変換に頑健。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2",
  },
  {
    term: "自由度調整済み決定係数",
    reading: "じゆうどちょうせいずみけっていけいすう",
    english: "adjusted R²",
    definition:
      "説明変数を増やすと無闇に上がる $R^2$ を、自由度で罰則化した指標。重回帰のモデル比較の基本ツール。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2",
  },
  {
    term: "AIC",
    reading: "えーあいしー",
    english: "Akaike information criterion",
    definition:
      "$\\mathrm{AIC} = -2\\log L + 2k$。当てはまり($-2\\log L$)とパラメータ数 $k$ の罰則の和。小さいほど良いモデル。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2",
  },
  {
    term: "BIC",
    reading: "びーあいしー",
    english: "Bayesian information criterion",
    definition:
      "$\\mathrm{BIC} = -2\\log L + k\\log n$。AIC よりパラメータ数の罰則が強く、より単純なモデルを選びやすい情報量規準。",
    level: "2",
    category: "回帰",
    link: "/textbook/grade-2",
  },

  // === 準 1 級 さらに追加 ===
  {
    term: "ガンマ分布",
    reading: "がんまぶんぷ",
    english: "gamma distribution",
    definition:
      "形状パラメータ $\\alpha$ ・尺度 $\\beta$ をもつ正値連続分布。$\\alpha=1$ で指数分布、整数 $\\alpha$ でアーラン分布。待ち時間モデルや事前分布で頻出。",
    level: "準1",
    category: "確率分布",
    link: "/textbook/grade-pre1",
  },
  {
    term: "ベータ分布",
    reading: "べーたぶんぷ",
    english: "beta distribution",
    definition:
      "区間 $[0,1]$ 上の連続分布 $\\mathrm{Beta}(\\alpha,\\beta)$。二項分布の共役事前分布として、比率のベイズ推定で標準的に使う。",
    level: "準1",
    category: "確率分布",
    link: "/textbook/grade-pre1",
  },
  {
    term: "対数正規分布",
    reading: "たいすうせいきぶんぷ",
    english: "log-normal distribution",
    definition:
      "$\\log X$ が正規分布に従う右に裾の長い分布。所得・株価・粒径分布など、乗算的に決まる量によく当てはまる。",
    level: "準1",
    category: "確率分布",
    link: "/textbook/grade-pre1",
  },
  {
    term: "多項分布",
    reading: "たこうぶんぷ",
    english: "multinomial distribution",
    definition:
      "二項分布の多カテゴリ版。$n$ 回の試行で $k$ 個のカテゴリそれぞれに何回入るかの同時分布。",
    level: "準1",
    category: "確率分布",
    link: "/textbook/grade-pre1",
  },
  {
    term: "マルコフ連鎖",
    reading: "まるこふれんさ",
    english: "Markov chain",
    definition:
      "次の状態が「現在の状態だけ」で決まる(過去に依存しない)確率過程。MCMC・状態空間モデルの基礎。",
    level: "準1",
    category: "確率過程",
    link: "/textbook/grade-pre1",
  },
  {
    term: "移動平均",
    reading: "いどうへいきん",
    english: "moving average",
    definition:
      "時系列を直近 $k$ 期の平均で平滑化する基本手法。トレンド抽出やノイズ除去に使う。MA モデルとは別概念なので注意。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1",
  },
  {
    term: "指数平滑法",
    reading: "しすうへいかつほう",
    english: "exponential smoothing",
    definition:
      "直近の値ほど重みを大きくする平滑化(重みが幾何的に減衰)。Holt・Holt–Winters でトレンド・季節性に拡張できる。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1",
  },
  {
    term: "状態空間モデル",
    reading: "じょうたいくうかんもでる",
    english: "state space model",
    definition:
      "観測されない状態(state)が時間発展し、それを通じて観測値が得られるという定式化。カルマンフィルタが代表的推定手法。",
    level: "準1",
    category: "時系列",
    link: "/textbook/grade-pre1",
  },
  {
    term: "階層ベイズモデル",
    reading: "かいそうべいずもでる",
    english: "hierarchical Bayesian model",
    definition:
      "事前分布のパラメータ自身にさらに分布(超事前分布)を仮定する多層モデル。グループ間で情報を共有し、推定を安定させる。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1",
  },
  {
    term: "ギブスサンプリング",
    reading: "ぎぶすさんぷりんぐ",
    english: "Gibbs sampling",
    definition:
      "多次元の事後分布から、各変数を「他の変数を固定した条件付き分布」から順番にサンプルする MCMC 手法。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1",
  },
  {
    term: "メトロポリス・ヘイスティングス法",
    reading: "めとろぽりすへいすてぃんぐすほう",
    english: "Metropolis–Hastings algorithm",
    definition:
      "提案分布から候補を発生させ、確率 $\\min(1, r)$ で受容することで目標分布からのサンプルを得る MCMC の基本アルゴリズム。",
    level: "準1",
    category: "ベイズ",
    link: "/textbook/grade-pre1",
  },
  {
    term: "多次元尺度法",
    reading: "たじげんしゃくどほう",
    english: "multidimensional scaling (MDS)",
    definition:
      "対象間の距離(類似度)を保つように、低次元(通常 2 次元)に布置する手法。アンケート分析やブランド地図で使う。",
    level: "準1",
    category: "多変量",
    link: "/textbook/grade-pre1",
  },

  // === 1 級 さらに追加 ===
  {
    term: "完備十分統計量",
    reading: "かんびじゅうぶんとうけいりょう",
    english: "complete sufficient statistic",
    definition:
      "十分性に加え「期待値が常に 0 ⇒ ほぼ確実に 0」となる(完備性)を満たす統計量。UMVUE 構成の鍵となる概念。",
    level: "1",
    category: "推定理論",
    link: "/textbook/grade-1",
  },
  {
    term: "ラオ・ブラックウェルの定理",
    reading: "らおぶらっくうぇるのていり",
    english: "Rao–Blackwell theorem",
    definition:
      "推定量を十分統計量で条件付け期待値を取ると、分散が必ず減少する(または不変)という定理。UMVUE 構成の中心ツール。",
    level: "1",
    category: "推定理論",
    link: "/textbook/grade-1",
  },
  {
    term: "M 推定量",
    reading: "えむすいていりょう",
    english: "M-estimator",
    definition:
      "目的関数 $\\sum \\rho(x_i, \\theta)$ の最小化(または推定方程式の零点)で定義される推定量の総称。最尤・最小二乗・ロバスト推定を含む統一枠組み。",
    level: "1",
    category: "推定理論",
    link: "/textbook/grade-1",
  },
  {
    term: "カーネル密度推定",
    reading: "かーねるみつどすいてい",
    english: "kernel density estimation",
    definition:
      "観測点に滑らかな核(ガウス核など)を載せて足し合わせ、確率密度を推定するノンパラ手法。バンド幅の選択が肝。",
    level: "1",
    category: "ノンパラ",
    link: "/textbook/grade-1",
  },
  {
    term: "経験分布関数",
    reading: "けいけんぶんぷかんすう",
    english: "empirical distribution function",
    definition:
      "観測値から作る階段関数 $F_n(x) = \\frac{1}{n}\\sum \\mathbf{1}_{X_i \\le x}$。標本サイズが大きいと真の cdf に一様収束する(グリヴェンコ・カンテリの定理)。",
    level: "1",
    category: "ノンパラ",
    link: "/textbook/grade-1",
  },

  // === 機械学習 さらに追加 ===
  {
    term: "決定木",
    reading: "けっていぎ",
    english: "decision tree",
    definition:
      "「ある特徴量が閾値以上か」で再帰的にデータを分割していくモデル。解釈しやすいが過学習しやすい。アンサンブルの基礎部品。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ランダムフォレスト",
    reading: "らんだむふぉれすと",
    english: "random forest",
    definition:
      "ブートストラップ標本と特徴のランダム選択で多数の決定木を学習し、平均(または多数決)を取る代表的アンサンブル手法。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "勾配ブースティング",
    reading: "こうばいぶーすてぃんぐ",
    english: "gradient boosting",
    definition:
      "弱学習器(浅い木)を残差にフィットさせ、順次足し合わせる手法。XGBoost・LightGBM など実務分類で最も強力なアプローチの一つ。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "サポートベクターマシン",
    reading: "さぽーとべくたーましん",
    english: "support vector machine (SVM)",
    definition:
      "クラスを最もマージン広く分離する超平面を求める分類器。カーネルトリックで非線形分類にも拡張できる。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "k 近傍法",
    reading: "けーきんぼうほう",
    english: "k-nearest neighbors (kNN)",
    definition:
      "新しい点に最も近い $k$ 個の訓練点から多数決(分類)/平均(回帰)で予測する遅延学習。シンプルだが高次元で性能が落ちやすい。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ナイーブベイズ",
    reading: "ないーぶべいず",
    english: "naive Bayes",
    definition:
      "特徴間の条件付き独立を仮定し、ベイズの定理で事後確率を計算する分類器。テキスト分類で高速かつ強力。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "アンサンブル学習",
    reading: "あんさんぶるがくしゅう",
    english: "ensemble learning",
    definition:
      "複数の弱い学習器を組み合わせて性能を上げる枠組み。バギング・ブースティング・スタッキングが三大手法。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "バギング",
    reading: "ばぎんぐ",
    english: "bagging",
    definition:
      "ブートストラップで作った複数標本で学習器を並列に訓練し、出力を平均/多数決する手法。バリアンスを下げる。ランダムフォレストの基礎。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ブースティング",
    reading: "ぶーすてぃんぐ",
    english: "boosting",
    definition:
      "弱学習器を逐次的に学習し、誤りに重みをつけて次に活かす手法。バイアスを下げる。AdaBoost・勾配ブースティングが代表。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ハイパーパラメータ",
    reading: "はいぱーぱらめーた",
    english: "hyperparameter",
    definition:
      "学習で最適化されず、事前に設定するパラメータ(学習率・木の深さ・正則化強度など)。グリッド/ランダム/ベイズ最適化で探索する。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ドロップアウト",
    reading: "どろっぷあうと",
    english: "dropout",
    definition:
      "学習時に各ニューロンを確率 $p$ でランダムに無効化することで過学習を防ぐ正則化手法。推論時は全ユニットを使い出力をスケール。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "バッチ正規化",
    reading: "ばっちせいきか",
    english: "batch normalization",
    definition:
      "ミニバッチごとに中間層の出力を平均 0・分散 1 に正規化してから線形変換する手法。学習の高速化と安定化に大きく寄与する。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "アテンション機構",
    reading: "あてんしょんきこう",
    english: "attention mechanism",
    definition:
      "入力のどの部分にどれだけ注目するかを重み付けで動的に決める仕組み。Transformer の中核で、機械翻訳・LLM の性能を飛躍させた。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "転移学習",
    reading: "てんいがくしゅう",
    english: "transfer learning",
    definition:
      "大規模データで学習済みのモデル(例: ImageNet/BERT)を、別タスク用に再利用する枠組み。少データで高性能を得る現代の標準。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ファインチューニング",
    reading: "ふぁいんちゅーにんぐ",
    english: "fine-tuning",
    definition:
      "事前学習済みモデルの一部または全パラメータを、目的タスクの少量データで追加学習する手法。LLM の業務カスタマイズで主流。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },

  // === AI 倫理 / 社会(G 検定) ===
  {
    term: "説明可能 AI",
    reading: "せつめいかのうえーあい",
    english: "explainable AI (XAI)",
    definition:
      "AI モデルの予測根拠を人間が解釈できる形で示す技術や思想。SHAP・LIME・Grad-CAM などが代表。医療・与信などで必須。",
    level: "準1",
    category: "AI 倫理",
    link: "/certs/g-test/textbook",
  },
  {
    term: "差分プライバシー",
    reading: "さぶんぷらいばしー",
    english: "differential privacy",
    definition:
      "個別レコードの有無で出力分布がほぼ変わらないようノイズを加え、個人特定リスクを定量的に保証するプライバシー保護技術。",
    level: "準1",
    category: "AI 倫理",
    link: "/certs/g-test/textbook",
  },
  {
    term: "AI 倫理",
    reading: "えーあいりんり",
    english: "AI ethics",
    definition:
      "公平性・透明性・説明責任・プライバシー・安全性など、AI を社会で使う上での原則と実践。各国で AI ガバナンス枠組みが整備中。",
    level: "準1",
    category: "AI 倫理",
    link: "/certs/g-test/textbook",
  },
  {
    term: "データ拡張",
    reading: "でーたかくちょう",
    english: "data augmentation",
    definition:
      "回転・反転・ノイズ付加などで訓練データを人工的に増やす手法。画像・音声で過学習抑制と汎化向上に大きく寄与する。",
    level: "準1",
    category: "機械学習",
    link: "/certs/g-test/textbook",
  },
  {
    term: "ELSI",
    reading: "えるしー",
    english: "ELSI (Ethical, Legal and Social Issues)",
    definition:
      "新技術がもたらす倫理的・法的・社会的課題の総称。AI / ゲノム / 自動運転などで研究開発と並行して検討される。",
    level: "準1",
    category: "AI 倫理",
    link: "/certs/g-test/textbook",
  },

  // === DS 基礎 / データ実務 ===
  {
    term: "データクレンジング",
    reading: "でーたくれんじんぐ",
    english: "data cleansing",
    definition:
      "入力ミス・重複・形式不統一などを発見・修正してデータを分析可能な状態にする工程。実務の分析時間の半分以上を占める。",
    level: "2",
    category: "データ工学",
    link: "/certs/ds-basic/textbook",
  },
  {
    term: "欠損値処理",
    reading: "けっそんちしょり",
    english: "missing value imputation",
    definition:
      "欠損データを除外/平均補完/回帰補完/多重代入などで処理する手法群。欠損メカニズム(MCAR/MAR/MNAR)で適切な手法が変わる。",
    level: "2",
    category: "データ工学",
    link: "/certs/ds-basic/textbook",
  },
  {
    term: "標準化(スケーリング)",
    reading: "ひょうじゅんか",
    english: "feature scaling",
    definition:
      "特徴量を平均 0 ・分散 1(標準化)、または $[0,1]$(正規化)に揃える前処理。距離ベース手法・勾配法で必須。",
    level: "2",
    category: "データ工学",
    link: "/certs/ds-basic/textbook",
  },
  {
    term: "A/B テスト",
    reading: "えーびーてすと",
    english: "A/B testing",
    definition:
      "ユーザーをランダムに 2 群に分け、施策の効果を比較する実験。Web マーケ・プロダクト改善で標準。仮説検定の応用そのもの。",
    level: "2",
    category: "実務",
    link: "/certs/ds-basic/textbook",
  },
  {
    term: "ピボットテーブル",
    reading: "ぴぼっとてーぶる",
    english: "pivot table",
    definition:
      "Excel・BI ツールで、行/列/値を動的に切り替えてクロス集計を行う仕組み。DS 基礎試験では実技の中核機能。",
    level: "2",
    category: "実務",
    link: "/certs/ds-basic/textbook",
  },
  {
    term: "KPI",
    reading: "けーぴーあい",
    english: "Key Performance Indicator",
    definition:
      "目標達成度を測る重要業績評価指標。事業の北極星指標(NSM)とともに、データドリブン経営の意思決定基準となる。",
    level: "2",
    category: "実務",
    link: "/certs/ds-literacy/textbook",
  },

  // === 公的統計 さらに追加 ===
  {
    term: "国民経済計算",
    reading: "こくみんけいざいけいさん",
    english: "System of National Accounts (SNA)",
    definition:
      "国の経済活動を生産・分配・支出の側面から体系的に記録する統計体系。GDP はその主要指標。日本は内閣府が作成。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },
  {
    term: "消費者物価指数",
    reading: "しょうひしゃぶっかしすう",
    english: "Consumer Price Index (CPI)",
    definition:
      "家計が購入する商品・サービスの価格変動を、ある基準時を 100 として表す指数。総務省が作成、日銀の物価目標の対象。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },
  {
    term: "ウェイトバック集計",
    reading: "うぇいとばっくしゅうけい",
    english: "weighting back",
    definition:
      "標本構成と母集団構成のズレを補正するため、各回答に「逆数(または比)」の重みを掛けて集計する手法。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },
  {
    term: "統計的開示制御",
    reading: "とうけいてきかいじせいぎょ",
    english: "statistical disclosure control",
    definition:
      "公的統計データの提供時に、個人や事業所が特定されないよう、頂上値の丸めやセル抑制等で識別リスクを低減する処理。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },
  {
    term: "標本設計",
    reading: "ひょうほんせっけい",
    english: "sample design",
    definition:
      "目標精度・コスト・回収率を踏まえ、抽出方法・標本サイズ・層化変数などを事前に決める計画段階。調査の質を大きく左右する。",
    level: "2",
    category: "公的統計",
    link: "/certs/survey/textbook",
  },

  // === E 資格 / DL 関連用語 ===
  {
    term: "テンソル",
    reading: "てんそる",
    english: "tensor",
    definition:
      "多次元配列。0 階=スカラー、1 階=ベクトル、2 階=行列、3 階以上=テンソル。DL では画像バッチを (N, C, H, W) の 4 階テンソルで扱うのが標準。",
    level: "準1",
    category: "DL 数学",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "特異値分解",
    reading: "とくいちぶんかい",
    english: "singular value decomposition (SVD)",
    definition:
      "任意の行列 $A$ を $A = U \\Sigma V^\\top$ に分解。$U, V$ は直交、$\\Sigma$ は非負特異値の対角。データ圧縮・PCA の高次元実装・推薦システムなどで使う。",
    level: "1",
    category: "DL 数学",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "順伝播",
    reading: "じゅんでんぱ",
    english: "forward propagation",
    definition:
      "ニューラルネットで、入力から出力に向かって計算を進める過程。各層で線形変換 $W\\mathbf x + \\mathbf b$ + 活性化関数を順次適用する。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "誤差逆伝播法",
    reading: "ごさぎゃくでんぱほう",
    english: "backpropagation",
    definition:
      "損失関数の勾配を、出力層から入力層に向かって連鎖律で逐次的に計算するアルゴリズム。DL の学習を支える中核技術。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "ReLU",
    reading: "れる",
    english: "ReLU (Rectified Linear Unit)",
    definition:
      "活性化関数 $\\max(0, x)$。負の領域で勾配 0、正の領域で勾配 1。DL で勾配消失を緩和して学習を成功させた立役者。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "Softmax",
    reading: "そふとまっくす",
    english: "softmax",
    definition:
      "$\\sigma(z)_i = e^{z_i} / \\sum_j e^{z_j}$。多クラス分類の出力層で確率分布に変換。交差エントロピー損失と組合せて使う。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "勾配消失問題",
    reading: "こうばいしょうしつもんだい",
    english: "vanishing gradient problem",
    definition:
      "深いネットワークで逆伝播時に勾配が指数的に小さくなり、初期層が学習できなくなる現象。ReLU・残差接続・LSTM ゲートで緩和。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "残差接続",
    reading: "ざんさせつぞく",
    english: "skip connection / residual connection",
    definition:
      "$\\mathbf{a}^{(l)} = \\mathbf{a}^{(l-1)} + F(\\mathbf{a}^{(l-1)})$。前層の入力を後層に直接足す経路。ResNet で 100 層以上の深層化を実現。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "Adam",
    reading: "あだむ",
    english: "Adam optimizer",
    definition:
      "Momentum と RMSProp を組合せた最適化アルゴリズム。各パラメータの学習率を適応的に調整。現在 DL の事実上のデフォルト。",
    level: "準1",
    category: "DL 基礎",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "CNN",
    reading: "しーえぬえぬ",
    english: "Convolutional Neural Network",
    definition:
      "畳み込み層 + プーリング層を中心に構成された、画像処理に特化した DL アーキテクチャ。LeNet から ResNet・EfficientNet まで多数の派生。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "プーリング",
    reading: "ぷーりんぐ",
    english: "pooling",
    definition:
      "領域ごとに最大値(Max pooling)または平均(Average pooling)を取る操作。ダウンサンプリング + 位置のずれへの頑健性。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "LSTM",
    reading: "えるえすてぃーえむ",
    english: "Long Short-Term Memory",
    definition:
      "RNN の一種。忘却・入力・出力の 3 ゲートを持ち、長期依存を学習可能。機械翻訳・音声認識で長らく主役だった。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "Self-Attention",
    reading: "せるふあてんしょん",
    english: "self-attention",
    definition:
      "入力系列の各位置が他のすべての位置を参照する仕組み。$\\mathrm{softmax}(QK^\\top/\\sqrt{d_k})V$ で計算。Transformer の中核。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "BERT",
    reading: "ばーと",
    english: "BERT",
    definition:
      "Google が 2018 年に発表した Transformer Encoder ベースの事前学習モデル。マスクされた単語の予測(MLM)で学習し、ファインチューニングで様々な NLP タスクに適用。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "GPT",
    reading: "じーぴーてぃー",
    english: "GPT (Generative Pre-trained Transformer)",
    definition:
      "OpenAI が 2018 年から発表している Transformer Decoder ベースの自己回帰生成モデル。次の単語予測で学習し、ChatGPT などの LLM の基盤に。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "VAE",
    reading: "ぶいえーいー",
    english: "Variational Autoencoder",
    definition:
      "Encoder-Decoder で潜在変数の分布を学習する生成モデル。再構成誤差 + KL ダイバージェンスを最小化(ELBO 最大化)。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "GAN",
    reading: "がん",
    english: "Generative Adversarial Network",
    definition:
      "生成器と識別器を競合させる生成モデル。生成器が偽物を作り、識別器が本物 / 偽物を判定。学習が不安定だが、高品質な生成が可能。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "拡散モデル",
    reading: "かくさんもでる",
    english: "diffusion model",
    definition:
      "ノイズを段階的に加える順過程の逆を学習する生成モデル。Stable Diffusion・DALL-E 3 など現代の画像生成 AI の中核。",
    level: "準1",
    category: "DL モデル",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "RLHF",
    reading: "あーるえるえいちえふ",
    english: "Reinforcement Learning from Human Feedback",
    definition:
      "人間が比較した嗜好データから報酬モデルを学習し、LLM を強化学習で微調整する手法。ChatGPT・Claude などの『有用で安全な対話エージェント化』の核心技術。",
    level: "準1",
    category: "強化学習",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "知識蒸留",
    reading: "ちしきじょうりゅう",
    english: "knowledge distillation",
    definition:
      "大きい教師モデルの出力(soft target)を学習目標として、小さい生徒モデルを学習させる手法。BERT → DistilBERT が代表例。",
    level: "準1",
    category: "DL 実装",
    link: "/certs/e-shikaku/textbook",
  },
  {
    term: "量子化",
    reading: "りょうしか",
    english: "quantization",
    definition:
      "DL モデルの重み・活性を float32 から int8 などに変換し、サイズ・推論速度を改善する手法。エッジデバイスでの推論に必須。",
    level: "準1",
    category: "DL 実装",
    link: "/certs/e-shikaku/textbook",
  },

  // === QC 検定 / 品質管理用語 ===
  {
    term: "管理図",
    reading: "かんりず",
    english: "control chart",
    definition:
      "工程から定期的に取った統計量を時系列で記録し、UCL/LCL を引いて異常を判定する図。Shewhart の X̄-R 管理図、p 管理図、c 管理図など。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "工程能力指数",
    reading: "こうていのうりょくしすう",
    english: "process capability index (Cp/Cpk)",
    definition:
      "規格幅に対する工程のばらつきの大きさを表す指標。$C_p = (USL-LSL)/(6\\sigma)$、中心ずれを考慮した $C_{pk}$ も併用。製造業の目標 $C_{pk} \\geq 1.33$。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "シックスシグマ",
    reading: "しっくすしぐま",
    english: "Six Sigma",
    definition:
      "$\\pm 6\\sigma$ の品質管理を目指す改革運動。100 万個に 3.4 個の不良率(3.4 PPM)。$C_{pk} = 2.0$ に相当。モトローラ・GE が広めた。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "OC 曲線",
    reading: "おーしーきょくせん",
    english: "Operating Characteristic Curve",
    definition:
      "抜取検査の性能を示す曲線。横軸=ロット不良率、縦軸=合格確率。AQL では合格、LTPD では不合格となるのが理想。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "AQL",
    reading: "えーきゅーえる",
    english: "Acceptable Quality Level",
    definition:
      "合格品質水準。検査でほぼ常に合格とすべき不良率の上限。生産者リスク α が 5% 以下になる水準。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "LTPD",
    reading: "えるてぃーぴーでぃー",
    english: "Lot Tolerance Percent Defective",
    definition:
      "ロット許容不良率。検査でほぼ常に不合格とすべき不良率。消費者リスク β が 10% 以下になる水準。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "QC 7 つ道具",
    reading: "きゅーしーななつどうぐ",
    english: "Seven QC tools",
    definition:
      "パレート図・特性要因図・ヒストグラム・散布図・管理図・チェックシート・グラフ(層別)。数値データを使った品質改善の基本ツール。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "新 QC 7 つ道具",
    reading: "しんきゅーしーななつどうぐ",
    english: "Seven new QC tools",
    definition:
      "親和図(KJ 法)・連関図・系統図・マトリクス図・マトリクスデータ解析・PDPC 法・アローダイアグラム。言語データ・概念整理に特化。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },
  {
    term: "TQM",
    reading: "てぃーきゅーえむ",
    english: "Total Quality Management",
    definition:
      "総合的品質管理。3 本柱は『顧客重視・全員参加・継続的改善(カイゼン)』。日本の製造業の競争力の源泉となった経営手法。",
    level: "2",
    category: "品質管理",
    link: "/certs/qc-kentei/textbook",
  },

  // === 専門統計調査士用語 ===
  {
    term: "デザイン効果",
    reading: "でざいんこうか",
    english: "design effect (deff)",
    definition:
      "実際の標本設計の分散を、同じ n の単純無作為抽出と比べた比。deff < 1 で精度向上、deff > 1 で精度低下。クラスター抽出は通常 deff > 1。",
    level: "準1",
    category: "標本設計",
    link: "/certs/survey-specialist/textbook",
  },
  {
    term: "ネイマン配分",
    reading: "ねいまんはいぶん",
    english: "Neyman allocation",
    definition:
      "層化抽出で各層の標本サイズを $n_h \\propto N_h S_h$(層サイズ × 層内標準偏差)で決める最適配分法。精度を最大化する。",
    level: "準1",
    category: "標本設計",
    link: "/certs/survey-specialist/textbook",
  },
  {
    term: "Horvitz-Thompson 推定量",
    reading: "ほーびっつとんぷそんすいていりょう",
    english: "Horvitz-Thompson estimator",
    definition:
      "サンプリングウエイト $w_i = 1/\\pi_i$(抽出確率の逆数)を使った母集団総計の不偏推定量 $\\hat T = \\sum w_i x_i$。標本調査の理論的中核。",
    level: "1",
    category: "標本設計",
    link: "/certs/survey-specialist/textbook",
  },
  {
    term: "多重代入法",
    reading: "たじゅうだいにゅうほう",
    english: "Multiple Imputation (MI)",
    definition:
      "欠測値に対して複数のもっともらしい代入値を作り、各セットで推定 → Rubin's rules で統合する手法。代入の不確実性も含めて分散を計算できる。",
    level: "準1",
    category: "標本設計",
    link: "/certs/survey-specialist/textbook",
  },
  // === 機械学習 / ディープラーニング 用語(31 語) ===
  {
    term: "誤差逆伝播",
    reading: "ごさぎゃくでんぱ",
    english: "Backpropagation",
    definition:
      "ニューラルネットの勾配を出力層から入力層へ連鎖律で計算する手法。深層学習の学習を実用化した。",
    level: "準1",
    category: "ディープラーニング",
  },
  {
    term: "活性化関数",
    reading: "かっせいかかんすう",
    english: "Activation Function",
    definition:
      "ニューロンの出力を非線形に変換する関数。ReLU・Sigmoid・Tanh・GELU などが使われる。",
    level: "準1",
    category: "ディープラーニング",
  },
  {
    term: "畳み込みニューラルネット",
    reading: "たたみこみにゅーらるねっと",
    english: "CNN",
    definition:
      "画像処理に特化した NN。畳み込み層で局所特徴を抽出し、プーリング層でダウンサンプリングする。",
    level: "準1",
    category: "ディープラーニング",
  },
  {
    term: "Attention",
    reading: "あてんしょん",
    english: "Attention Mechanism",
    definition:
      "入力の各位置に対する『注目度』を学習する仕組み。Self-Attention では Q・K・V の内積で計算。",
    level: "1",
    category: "ディープラーニング",
  },
  {
    term: "Embedding",
    reading: "えんべでぃんぐ",
    english: "Embedding",
    definition:
      "離散的なトークン(単語など)を密ベクトルに変換する表現。Word2Vec・BERT 埋め込みなど。",
    level: "準1",
    category: "ディープラーニング",
  },
  {
    term: "ROC曲線",
    reading: "あーるおーしーきょくせん",
    english: "ROC Curve",
    definition:
      "二値分類の閾値を動かしたとき、真陽性率(縦軸)と偽陽性率(横軸)の関係を描いた曲線。AUC で性能を要約。",
    level: "2",
    category: "機械学習",
  },
  {
    term: "AUC",
    reading: "えーゆーしー",
    english: "Area Under Curve",
    definition:
      "ROC 曲線の下側面積。1.0 で完璧、0.5 でランダム。閾値非依存の分類性能指標。",
    level: "2",
    category: "機械学習",
  },
  {
    term: "F1スコア",
    reading: "えふわんすこあ",
    english: "F1 Score",
    definition:
      "適合率(Precision)と再現率(Recall)の調和平均。クラス不均衡なデータの分類評価で使われる。",
    level: "2",
    category: "機械学習",
  },
  {
    term: "サポートベクトルマシン",
    reading: "さぽーとべくとるましん",
    english: "SVM",
    definition:
      "クラス間のマージンを最大化する分類器。カーネル法で非線形分離も可能。",
    level: "準1",
    category: "機械学習",
  },
  {
    term: "k-means法",
    reading: "けーみーんずほう",
    english: "k-means Clustering",
    definition:
      "データを k 個のクラスタに分割する代表的な教師なし学習。重心とデータ点の距離を最小化。",
    level: "準1",
    category: "機械学習",
  },
  {
    term: "次元削減",
    reading: "じげんさくげん",
    english: "Dimensionality Reduction",
    definition:
      "高次元データの本質的な構造を低次元で表現する手法群。PCA・t-SNE・UMAP が代表的。",
    level: "準1",
    category: "機械学習",
  },
  {
    term: "特徴量エンジニアリング",
    reading: "とくちょうりょうえんじにありんぐ",
    english: "Feature Engineering",
    definition:
      "ドメイン知識を活用して有用な特徴量を作る作業。テーブルデータのモデル性能を大きく左右する。",
    level: "2",
    category: "機械学習",
  },
  {
    term: "事前学習",
    reading: "じぜんがくしゅう",
    english: "Pre-training",
    definition:
      "大規模な教師なしデータで汎用表現を学習させる段階。BERT・GPT は事前学習 → ファインチューニングの流れ。",
    level: "1",
    category: "ディープラーニング",
  },
  // === LLM / MLOps / 因果推論 用語(20 語) ===
  {
    term: "LLM",
    reading: "えるえるえむ",
    english: "Large Language Model",
    definition:
      "数百億〜数兆パラメータの大規模言語モデル。次トークン予測の事前学習で汎用言語能力を獲得。GPT・Claude・Gemini が代表。",
    level: "1",
    category: "LLM",
  },
  {
    term: "プロンプトエンジニアリング",
    reading: "ぷろんぷとえんじにありんぐ",
    english: "Prompt Engineering",
    definition:
      "LLM への指示文(プロンプト)を設計し、出力品質を引き出す技術。Few-shot や Chain-of-Thought が代表的手法。",
    level: "1",
    category: "LLM",
  },
  {
    term: "RAG",
    reading: "らぐ",
    english: "Retrieval Augmented Generation",
    definition:
      "ユーザー質問に関連する文書を検索 → LLM プロンプトに含めて生成する手法。幻覚抑制と最新情報対応が両立できる。",
    level: "1",
    category: "LLM",
  },
  {
    term: "ハルシネーション",
    reading: "はるしねーしょん",
    english: "Hallucination",
    definition:
      "LLM が事実と異なる内容を、もっともらしく生成してしまう現象。RAG・温度低下・ファクトチェックで対策。",
    level: "1",
    category: "LLM",
  },
  {
    term: "Chain-of-Thought",
    reading: "ちぇーんおぶそーと",
    english: "Chain-of-Thought (CoT)",
    definition:
      "LLM に推論過程を段階的に出させるプロンプト手法。複雑な数学・論理問題で正答率が向上する。",
    level: "1",
    category: "LLM",
  },
  {
    term: "ベクトル DB",
    reading: "べくとるでぃーびー",
    english: "Vector Database",
    definition:
      "Embedding ベクトルを高速類似検索できる DB。Pinecone・Weaviate・pgvector など。RAG の基盤。",
    level: "1",
    category: "LLM",
  },
  {
    term: "コンテキストウィンドウ",
    reading: "こんてきすとうぃんどう",
    english: "Context Window",
    definition:
      "LLM が一度に処理できる入力 + 出力の最大トークン数。GPT-4 = 128K、Claude 4.7 = 1M など年々拡大。",
    level: "1",
    category: "LLM",
  },
  {
    term: "MLOps",
    reading: "えむえるおぷす",
    english: "Machine Learning Operations",
    definition:
      "ML モデルを本番運用するためのプラクティス群。データ・コード・モデルのバージョニング、CI/CD、監視、再学習が中核。",
    level: "1",
    category: "MLOps",
  },
  {
    term: "Data Drift",
    reading: "でーただりふと",
    english: "Data Drift",
    definition:
      "本番運用中に入力データ分布が学習時から変化する現象。モデル精度低下の主因。Evidently 等で監視。",
    level: "1",
    category: "MLOps",
  },
  {
    term: "Feature Store",
    reading: "ふぃーちゃーすとあ",
    english: "Feature Store",
    definition:
      "特徴量を一元管理する基盤。学習と推論で同じ特徴量定義を共有でき、リーク防止と再利用に寄与。",
    level: "1",
    category: "MLOps",
  },
  {
    term: "MLflow",
    reading: "えむえるふろー",
    english: "MLflow",
    definition:
      "実験追跡・モデルレジストリ・サービングを統合した OSS。Tracking UI でハイパラと評価指標を一覧できる。",
    level: "1",
    category: "MLOps",
  },
  {
    term: "因果推論",
    reading: "いんがすいろん",
    english: "Causal Inference",
    definition:
      "観察データから『介入の効果』を推定する統計学。傾向スコア・操作変数・差分の差分・DAG などを駆使。",
    level: "1",
    category: "因果推論",
  },
  {
    term: "傾向スコア",
    reading: "けいこうすこあ",
    english: "Propensity Score",
    definition:
      "介入を受ける確率を共変量から推定したスコア。マッチングや IPW で因果効果を推定する基本道具。",
    level: "1",
    category: "因果推論",
  },
  {
    term: "差分の差分",
    reading: "さぶんのさぶん",
    english: "Difference-in-Differences (DID)",
    definition:
      "処置の前後 × 処置群と対照群 の 2 軸で差を取り、並行トレンド仮定のもとで因果効果を推定する手法。",
    level: "1",
    category: "因果推論",
  },
  {
    term: "操作変数法",
    reading: "そうさへんすうほう",
    english: "Instrumental Variable (IV)",
    definition:
      "処置に影響するが結果には直接影響しない変数を用いて、内生性のある因果効果を推定する手法。",
    level: "1",
    category: "因果推論",
  },
  {
    term: "DAG",
    reading: "だぐ",
    english: "Directed Acyclic Graph",
    definition:
      "変数間の因果関係を有向グラフで表現した図。Judea Pearl の do 計算で識別可能性を判定する基盤。",
    level: "1",
    category: "因果推論",
  },
  {
    term: "Kaggle",
    reading: "かぐる",
    english: "Kaggle",
    definition:
      "世界最大の機械学習コンペプラットフォーム。実データでスキル研鑽・ポートフォリオ作成ができる。",
    level: "準1",
    category: "実装",
  },
  {
    term: "Stacking",
    reading: "すたっきんぐ",
    english: "Stacking",
    definition:
      "複数モデルの予測を入力にメタモデルを学習するアンサンブル手法。Kaggle 上位の常套手段。",
    level: "1",
    category: "機械学習",
  },
  {
    term: "Target Encoding",
    reading: "たーげっとえんこーでぃんぐ",
    english: "Target Encoding",
    definition:
      "カテゴリ変数をそのカテゴリの平均ターゲット値で数値化する手法。リーク対策のため CV 内で計算する必要あり。",
    level: "1",
    category: "機械学習",
  },
  // === コンピュータビジョン / 強化学習 / 拡散 / エージェント (30 語) ===
  {
    term: "ResNet",
    reading: "れずねっと",
    english: "Residual Network",
    definition:
      "残差接続(skip connection)を導入した CNN。100 層超えの深いネットワークでも勾配消失せず学習可能。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "ViT",
    reading: "びてぃー",
    english: "Vision Transformer",
    definition:
      "画像を 16×16 パッチに分割し、Transformer で処理する画像分類モデル。十分な学習データで CNN を超える。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "ImageNet",
    reading: "いめーじねっと",
    english: "ImageNet",
    definition:
      "1000 クラス・約 120 万枚の画像分類ベンチマーク。CV の事前学習データとして長年デファクト。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "U-Net",
    reading: "ゆーねっと",
    english: "U-Net",
    definition:
      "エンコーダ・デコーダ構造 + スキップ接続。医用画像セグメンテーションの標準で、拡散モデルにも応用。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "YOLO",
    reading: "よろ",
    english: "You Only Look Once",
    definition:
      "画像を 1 回処理してバウンディングボックスを出力する物体検出モデル。リアルタイム検出の代表。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "IoU",
    reading: "あいおーゆー",
    english: "Intersection over Union",
    definition:
      "予測と正解のバウンディングボックスの重なり具合。物体検出 ・ セグメンテーションの主要評価指標。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "NMS",
    reading: "えぬえむえす",
    english: "Non-Maximum Suppression",
    definition:
      "物体検出で重複する検出ボックスを除去する後処理。IoU 閾値を使って最高スコアの 1 つだけ残す。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "セグメンテーション",
    reading: "せぐめんてーしょん",
    english: "Segmentation",
    definition:
      "画像をピクセル単位で分類するタスク。Semantic / Instance / Panoptic の 3 種類がある。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "アンカーボックス",
    reading: "あんかーぼっくす",
    english: "Anchor Box",
    definition:
      "物体検出で各位置に予め用意するバウンディングボックスのテンプレート。事前形状を提供して学習を安定化。",
    level: "1",
    category: "コンピュータビジョン",
  },
  {
    term: "MDP",
    reading: "えむでぃーぴー",
    english: "Markov Decision Process",
    definition:
      "強化学習の数学的枠組み。(S, A, P, R, γ) で状態 ・ 行動 ・ 遷移 ・ 報酬 ・ 割引率を定義。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "Q-learning",
    reading: "きゅーらーにんぐ",
    english: "Q-learning",
    definition:
      "状態行動価値 Q(s, a) を学習し、最大 Q を選ぶ方策に従う強化学習アルゴリズム。Bellman 方程式に基づく。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "DQN",
    reading: "でぃーきゅーえぬ",
    english: "Deep Q-Network",
    definition:
      "Q-learning の Q 関数をニューラルネットで近似 + 経験再生 + ターゲットネットを使った手法。Atari で人を超えた。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "Policy Gradient",
    reading: "ぽりしーぐらでぃえんと",
    english: "Policy Gradient",
    definition:
      "方策 π を直接ニューラルネットでパラメータ化し、勾配上昇で報酬期待値を最大化する手法。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "PPO",
    reading: "ぴーぴーおー",
    english: "Proximal Policy Optimization",
    definition:
      "方策更新を一定範囲(クリップ)に抑える方策勾配法。安定性と性能のバランスが良く、RLHF の標準。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "Actor-Critic",
    reading: "あくたーくりてぃっく",
    english: "Actor-Critic",
    definition:
      "方策(Actor)と価値関数(Critic)を同時に学習する強化学習の枠組み。A2C ・ A3C ・ SAC が代表例。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "Bellman 方程式",
    reading: "べるまんほうていしき",
    english: "Bellman Equation",
    definition:
      "現在の価値 = 即時報酬 + 割引した次状態の価値、という再帰的な等式。動的計画法と強化学習の理論的中核。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "報酬関数",
    reading: "ほうしゅうかんすう",
    english: "Reward Function",
    definition:
      "強化学習で各 (状態, 行動) に対して報酬を返す関数。設計が学習結果を大きく左右する。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "割引率",
    reading: "わりびきりつ",
    english: "Discount Factor (γ)",
    definition:
      "将来の報酬を現在価値に換算する係数(0 ≤ γ < 1)。γ が小さいほど短期志向、大きいほど長期志向。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "経験再生",
    reading: "けいけんさいせい",
    english: "Experience Replay",
    definition:
      "過去の経験(s, a, r, s')をバッファに溜め、ランダムにサンプリングして学習する手法。サンプル効率と相関軽減に寄与。",
    level: "1",
    category: "強化学習",
  },
  {
    term: "DDPM",
    reading: "でぃーでぃーぴーえむ",
    english: "Denoising Diffusion Probabilistic Model",
    definition:
      "ノイズ予測タスクとして拡散モデルを定式化した代表論文(Ho et al. 2020)。",
    level: "1",
    category: "生成 AI",
  },
  {
    term: "Classifier-Free Guidance",
    reading: "くらしふぁーふりーがいだんす",
    english: "Classifier-Free Guidance",
    definition:
      "拡散モデルの条件付き生成で、条件あり/なしの予測を線形結合してガイダンス強度を高める手法。",
    level: "1",
    category: "生成 AI",
  },
  {
    term: "CLIP",
    reading: "くりっぷ",
    english: "Contrastive Language-Image Pre-training",
    definition:
      "画像とテキストを同じ埋め込み空間に対応付ける OpenAI のモデル。ゼロショット分類や拡散モデルの条件付けに使用。",
    level: "1",
    category: "生成 AI",
  },
  {
    term: "AI エージェント",
    reading: "えーあいえーじぇんと",
    english: "AI Agent",
    definition:
      "LLM が外部ツールを自律的に呼んでタスクを完遂する仕組み。ReAct ・ Tool Use ・ Multi-Agent が中心概念。",
    level: "1",
    category: "AI エージェント",
  },
  {
    term: "ReAct",
    reading: "りあくと",
    english: "Reason + Act",
    definition:
      "エージェントの基本パターン。推論(Reason)とツール呼び出し(Act)を交互に行うことで複雑タスクを解く。",
    level: "1",
    category: "AI エージェント",
  },
  {
    term: "Tool Use",
    reading: "つーるゆーす",
    english: "Tool Use / Function Calling",
    definition:
      "LLM が宣言された外部関数を引数を埋めて呼び出す機能。OpenAI ・ Anthropic API がネイティブ対応。",
    level: "1",
    category: "AI エージェント",
  },
  {
    term: "Multi-Agent",
    reading: "まるちえーじぇんと",
    english: "Multi-Agent System",
    definition:
      "複数の専門エージェントが協調してタスクを解くアーキテクチャ。プランナー・コーダー・レビュアーなど役割分担。",
    level: "1",
    category: "AI エージェント",
  },
  {
    term: "ASR",
    reading: "えーえすあーる",
    english: "Automatic Speech Recognition",
    definition:
      "音声を文字に変換する技術。OpenAI Whisper が現在の業界標準で、日本語含む多言語対応。",
    level: "1",
    category: "音声 AI",
  },
  {
    term: "TTS",
    reading: "てぃーてぃーえす",
    english: "Text-to-Speech",
    definition:
      "テキストを自然な音声に変換する技術。XTTS-v2 ・ ElevenLabs ・ OpenAI TTS が主要モデル。",
    level: "1",
    category: "音声 AI",
  },
  // === 統計検定2級向け追加用語 ===
  {
    term: "Welch の t 検定",
    reading: "うぇるちのてぃーけんてい",
    english: "Welch's t-test",
    definition:
      "2 標本の平均差を検定する手法のうち、等分散を仮定しないバージョン。Welch-Satterthwaite の近似自由度を用いる。現代の実務では既定値に近い扱い。",
    level: "2",
    category: "仮説検定",
    link: "/textbook/grade-2#ch2-sec5",
  },
  {
    term: "対応のある t 検定",
    reading: "たいおうのあるてぃーけんてい",
    english: "paired t-test",
    definition:
      "同一個体・同一ペアで観測した 2 値の差について 1 標本 t 検定を行う方法。個人差が相殺されるため対応のないものより検出力が高い。",
    level: "2",
    category: "仮説検定",
    link: "/textbook/grade-2#ch2-sec5",
  },
  {
    term: "母分散の検定",
    reading: "ぼぶんさんのけんてい",
    english: "test for population variance",
    definition:
      "正規母集団のもとで、不偏分散を $(n-1)\\hat{s}^2/\\sigma_0^2 \\sim \\chi^2_{n-1}$ で検定。製造工程のばらつき管理などに使う。正規性の崩れに敏感。",
    level: "2",
    category: "仮説検定",
    link: "/textbook/grade-2#ch2-sec4",
  },
  {
    term: "一元配置分散分析",
    reading: "いちげんはいちぶんさんぶんせき",
    english: "one-way ANOVA",
    definition:
      "3 群以上の平均を一度に比較する分散分析。多重比較問題を避けて全体差を判定する。F 統計量で群間平方和と群内平方和の比を取る。",
    level: "2",
    category: "分散分析",
    link: "/textbook/grade-2#ch4-sec1",
  },
  {
    term: "二元配置分散分析",
    reading: "にげんはいちぶんさんぶんせき",
    english: "two-way ANOVA",
    definition:
      "2 つの因子を同時に扱う分散分析。主効果に加えて交互作用 (interaction) を検出できる。繰り返しがあれば交互作用が分離可能。",
    level: "2",
    category: "分散分析",
    link: "/textbook/grade-2#ch4-sec3",
  },
  {
    term: "交互作用",
    reading: "こうごさよう",
    english: "interaction",
    definition:
      "2 元配置以上の分散分析で「ある因子の効果が、別の因子の水準で異なる」現象。プロットの折れ線が平行でないとき交互作用がある。",
    level: "2",
    category: "分散分析",
    link: "/textbook/grade-2#ch4-sec3",
  },
  {
    term: "Bonferroni 補正",
    reading: "ぼんふぇろーにほせい",
    english: "Bonferroni correction",
    definition:
      "$m$ 個の検定で各有意水準を $\\alpha/m$ に厳しくし、全体の Type I エラー率(FWER)を抑える方法。簡便だが保守的。",
    level: "2",
    category: "多重比較",
    link: "/textbook/grade-2#ch4-sec2",
  },
  {
    term: "Tukey の HSD",
    reading: "てゅーきーのえいちえすでぃー",
    english: "Tukey's HSD",
    definition:
      "ANOVA の事後検定で、全ペア比較を等しい有意水準で行う方法。スチューデント化された範囲分布を使う。Bonferroni より検出力が高い。",
    level: "2",
    category: "多重比較",
  },
  {
    term: "重回帰分析",
    reading: "じゅうかいきぶんせき",
    english: "multiple regression",
    definition:
      "複数の説明変数を持つ線形回帰。各偏回帰係数 $\\beta_j$ は他の変数を固定したときの効果。正規方程式 $\\hat{\\beta} = (X^\\top X)^{-1} X^\\top y$。",
    level: "2",
    category: "回帰分析",
    link: "/textbook/grade-2#ch3-sec3",
  },
  {
    term: "偏回帰係数",
    reading: "へんかいきけいすう",
    english: "partial regression coefficient",
    definition:
      "重回帰モデルの個別の係数。「他の説明変数を固定したときの $x_j$ の効果」を表す。単純相関とは異なる。",
    level: "2",
    category: "回帰分析",
    link: "/textbook/grade-2#ch3-sec3",
  },
  {
    term: "自由度調整済み決定係数",
    reading: "じゆうどちょうせいずみけっていけいすう",
    english: "adjusted R-squared",
    definition:
      "重回帰で説明変数を増やすと $R^2$ が必ず上がる問題を補正した指標。意味のない変数を増やすと逆に下がる。",
    level: "2",
    category: "回帰分析",
    link: "/textbook/grade-2#ch3-sec3",
  },
  {
    term: "多重共線性",
    reading: "たじゅうきょうせんせい",
    english: "multicollinearity",
    definition:
      "説明変数同士が強く相関している状態。係数の標準誤差が膨張し、個別 t 値が小さくなる。VIF で診断。",
    level: "2",
    category: "回帰分析",
    link: "/textbook/grade-2#ch3-sec3",
  },
  {
    term: "VIF",
    reading: "ぶいあいえふ",
    english: "Variance Inflation Factor",
    definition:
      "多重共線性の診断指標。$\\mathrm{VIF}_j = 1/(1 - R_j^2)$ で計算され、5〜10 を超えると要注意。",
    level: "2",
    category: "回帰分析",
    link: "/textbook/grade-2#ch3-sec3",
  },
  {
    term: "Cook の距離",
    reading: "くっくのきょり",
    english: "Cook's distance",
    definition:
      "個別観測値が回帰係数に与える影響の総合指標。1 を大きく超える観測点はモデルへの影響が強い。",
    level: "2",
    category: "残差診断",
    link: "/textbook/grade-2#ch3-sec4",
  },
  {
    term: "てこ比",
    reading: "てこひ",
    english: "leverage",
    definition:
      "説明変数 $x$ が他のデータから離れた観測点ほど大きい値を取る指標。$h_{ii}$ で表す。",
    level: "2",
    category: "残差診断",
    link: "/textbook/grade-2#ch3-sec4",
  },
  {
    term: "ヘテロスケダスティシティ",
    reading: "へてろすけだすてぃしてぃ",
    english: "heteroscedasticity",
    definition:
      "回帰の残差の分散が一定でない状態(不均一分散)。残差プロットがラッパ型になる。$\\log y$ 変換や WLS で対処。",
    level: "2",
    category: "残差診断",
    link: "/textbook/grade-2#ch3-sec4",
  },
  // === 因果推論・最新 AI 用語 ===
  {
    term: "合成統制法",
    reading: "ごうせいとうせいほう",
    english: "Synthetic Control Method",
    definition:
      "複数の対照群を重み付けして処置群とそっくりな「人工対照群」を作り、介入効果を推定する手法 (Abadie & Gardeazabal 2003)。1 ユニット処置に強い。",
    level: "1",
    category: "因果推論",
    link: "/causal-inference#ch7",
  },
  {
    term: "Double ML",
    reading: "だぶるえむえる",
    english: "Double Machine Learning",
    definition:
      "高次元共変量を機械学習で扱いながら因果効果を一致推定する枠組み (Chernozhukov et al. 2018)。直交化(Neyman orthogonality)が鍵。",
    level: "1",
    category: "因果推論",
    link: "/causal-inference#ch8",
  },
  {
    term: "Causal Forest",
    reading: "こーざるふぉれすと",
    english: "Causal Forest",
    definition:
      "ランダムフォレストを「同じ葉に入った観測同士で処置効果を推定」する形に拡張した手法 (Wager & Athey 2018)。共変量ごとの異質処置効果 CATE を推定できる。",
    level: "1",
    category: "因果推論",
    link: "/causal-inference#ch8",
  },
  {
    term: "アップリフトモデリング",
    reading: "あっぷりふともでりんぐ",
    english: "uplift modeling",
    definition:
      "「処置によって行動が変わる人」を特定するモデリング。マーケでは「クーポンを送る価値がある人」を抽出するのに使う。",
    level: "1",
    category: "因果推論",
    link: "/causal-inference#ch8",
  },
  {
    term: "Granger 因果性",
    reading: "ぐれんじゃーいんがせい",
    english: "Granger causality",
    definition:
      "$X$ の過去が $Y$ の予測に役立つ、という意味の因果性 (Granger 1969)。VAR モデルで F 検定する。厳密な因果ではない点に注意。",
    level: "準1",
    category: "時系列",
    link: "/time-series#ch8",
  },
  {
    term: "CausalImpact",
    reading: "こーざるいんぱくと",
    english: "CausalImpact",
    definition:
      "Google が公開した因果分析ライブラリ。ベイズ構造時系列モデルで反事実を推定し、介入の効果を測る (Brodersen et al. 2015)。",
    level: "1",
    category: "時系列",
    link: "/time-series#ch8",
  },
  {
    term: "中断時系列分析",
    reading: "ちゅうだんじけいれつぶんせき",
    english: "Interrupted Time Series",
    definition:
      "介入時点の前後でレベル変化(切片)とトレンド変化(傾き)を回帰で推定する古典的手法。公衆衛生介入の評価で広く使われる。",
    level: "準1",
    category: "時系列",
    link: "/time-series#ch8",
  },
  {
    term: "N-BEATS",
    reading: "えぬびーつ",
    english: "Neural Basis Expansion Analysis for Time Series",
    definition:
      "純粋な MLP ブロックで構成された時系列予測モデル (2020)。M4 コンペで Prophet を上回る精度を出した。",
    level: "1",
    category: "時系列",
    link: "/time-series#ch7",
  },
  {
    term: "Temporal Fusion Transformer",
    reading: "てんぽーらるふゅーじょんとらんすふぉーまー",
    english: "Temporal Fusion Transformer (TFT)",
    definition:
      "多変量時系列・カテゴリ・静的共変量を統一的に扱う Transformer ベース予測モデル (2021)。注意機構で重要な時刻を可視化できる。",
    level: "1",
    category: "時系列",
    link: "/time-series#ch7",
  },
  {
    term: "時系列基盤モデル",
    reading: "じけいれつきばんもでる",
    english: "Time Series Foundation Model",
    definition:
      "大規模時系列で事前学習され、Zero-shot 予測ができるモデル。Chronos・TimesFM・Lag-Llama などが 2024 年に登場。",
    level: "1",
    category: "時系列",
    link: "/time-series#ch7",
  },
  {
    term: "RAG",
    reading: "らぐ",
    english: "Retrieval-Augmented Generation",
    definition:
      "外部知識ベースから関連文書を検索してプロンプトに添付してから LLM に答えさせる手法。ハルシネーション抑制と最新情報の活用に有効。",
    level: "1",
    category: "生成 AI",
    link: "/certs/g-test/textbook#ch7-sec2",
  },
  {
    term: "Chain-of-Thought",
    reading: "ちぇーんおぶそーと",
    english: "Chain-of-Thought (CoT)",
    definition:
      "「Let's think step by step」のように推論過程を明示させるプロンプティング手法。算数・推論問題で精度が大幅向上 (Wei et al. 2022)。",
    level: "1",
    category: "生成 AI",
    link: "/certs/g-test/textbook#ch7-sec2",
  },
  {
    term: "ReAct",
    reading: "りあくと",
    english: "Reasoning + Acting",
    definition:
      "LLM に「考える(推論)」と「行動する(ツール使用)」を交互に行わせるパラダイム。現代の AI エージェントの基本設計。",
    level: "1",
    category: "生成 AI",
    link: "/certs/g-test/textbook#ch7-sec2",
  },
  {
    term: "QLoRA",
    reading: "きゅーろーら",
    english: "Quantized Low-Rank Adaptation",
    definition:
      "4 bit 量子化と LoRA を組み合わせた省メモリファインチューニング手法。消費者向け GPU で大規模モデルを学習可能にする。",
    level: "1",
    category: "生成 AI",
    link: "/certs/g-test/textbook#ch7-sec3",
  },
  {
    term: "Constitutional AI",
    reading: "こんすてぃちゅーしょなるえーあい",
    english: "Constitutional AI",
    definition:
      "Anthropic が開発した、人間のフィードバックを AI のフィードバック(AI が AI を批判)で代替するアライメント手法。Claude シリーズに実装。",
    level: "1",
    category: "AI 倫理",
    link: "/certs/g-test/textbook#ch7-sec4",
  },
  {
    term: "EU AI 法",
    reading: "いーゆーえーあいほう",
    english: "EU AI Act",
    definition:
      "2024 年採択の世界初の包括的 AI 規制。リスクを 4 段階(許容不可/高/限定/最小)に分類し義務を課す。違反は最大年間売上の 7% の罰金。",
    level: "1",
    category: "AI 倫理",
    link: "/certs/g-test/textbook#ch7-sec4",
  },
  {
    term: "ハルシネーション",
    reading: "はるしねーしょん",
    english: "hallucination",
    definition:
      "LLM がもっともらしい嘘を生成する現象。RAG・出典明示・検証 LLM で抑制する。",
    level: "1",
    category: "生成 AI",
    link: "/certs/g-test/textbook#ch7-sec4",
  },
  {
    term: "プロンプトインジェクション",
    reading: "ぷろんぷといんじぇくしょん",
    english: "prompt injection",
    definition:
      "悪意あるプロンプトでシステムプロンプトを上書きし、機密漏洩や不正動作を引き起こす攻撃。生成 AI のセキュリティ上の主要リスクの 1 つ。",
    level: "1",
    category: "AI セキュリティ",
    link: "/certs/g-test/textbook#ch7-sec4",
  },
  {
    term: "MoE",
    reading: "えむおーいー",
    english: "Mixture of Experts",
    definition:
      "複数の「エキスパート」サブネットワークから条件に応じて少数だけを活性化させる Transformer アーキテクチャ。Mixtral・DeepSeek-V3 などで採用。",
    level: "1",
    category: "深層学習",
  },
  {
    term: "創発的能力",
    reading: "そうはつてきのうりょく",
    english: "emergent abilities",
    definition:
      "LLM が一定規模を超えると突然現れる能力(算術・推論・コード生成など)。線形改善ではなく相転移的な現象 (Wei et al. 2022)。",
    level: "1",
    category: "深層学習",
    link: "/certs/g-test/textbook#ch7-sec1",
  },
  // === 2026 シラバス改訂対応 ===
  {
    term: "著作権法 30 条の 4",
    reading: "ちょさくけんほう30じょうの4",
    english: "Article 30-4 of Japanese Copyright Act",
    definition:
      "著作物に表現された思想・感情の『享受目的でない』利用を許容する規定(2018 年改正)。AI 学習・解析・特徴量抽出が代表例。ただし著作権者の利益を不当に害する場合は除外。",
    level: "1",
    category: "AI 法務",
    link: "/certs/g-test/textbook#ch7-sec5",
  },
  {
    term: "データドリフト",
    reading: "でーたどりふと",
    english: "data drift / covariate shift",
    definition:
      "本番運用中に入力 P(X) の分布が学習時から変化する現象。季節要因や顧客属性変化が原因。KS 検定や PSI で検出。",
    level: "1",
    category: "MLOps",
    link: "/certs/g-test/textbook#ch7-sec6",
  },
  {
    term: "コンセプトドリフト",
    reading: "こんせぷとどりふと",
    english: "concept drift",
    definition:
      "入力と出力の関係 P(Y|X) が時間とともに変化する現象。顧客嗜好の変化や不正パターンの進化が代表例。再学習が対策。",
    level: "1",
    category: "MLOps",
    link: "/certs/g-test/textbook#ch7-sec6",
  },
  {
    term: "シャドーデプロイ",
    reading: "しゃどーでぷろい",
    english: "shadow deployment",
    definition:
      "新モデルを本番トラフィックに対して並列実行し、本番に影響を与えずに新旧モデルの結果を比較する段階リリース手法。問題なければカナリアリリースに進む。",
    level: "1",
    category: "MLOps",
    link: "/certs/g-test/textbook#ch7-sec6",
  },
  {
    term: "PSI",
    reading: "ぴーえすあい",
    english: "Population Stability Index",
    definition:
      "学習データと運用データの分布変化を測る指標。$\\mathrm{PSI} = \\sum (p_i - q_i) \\log(p_i/q_i)$。0.1 以下なら安定、0.25 以上で大きなドリフト。",
    level: "1",
    category: "MLOps",
    link: "/certs/g-test/textbook#ch7-sec6",
  },
  {
    term: "InfoNCE 損失",
    reading: "いんふぉえぬしーいーそんしつ",
    english: "InfoNCE loss",
    definition:
      "対照学習で使う損失関数。正例ペアと負例ペアのコサイン類似度から、ソフトマックス交差エントロピー型で表現を学習。SimCLR・MoCo・CLIP などの基盤。",
    level: "1",
    category: "自己教師あり学習",
    link: "/certs/e-shikaku/textbook#ch7-sec5",
  },
  {
    term: "SimCLR",
    reading: "しむくりあ",
    english: "SimCLR",
    definition:
      "Chen et al. 2020 の対照学習手法。同じ画像の Augment 版を正例、バッチ内の他画像を負例として、シンプルな枠組みで強力な表現を獲得。バッチサイズが大きいほど強い。",
    level: "1",
    category: "自己教師あり学習",
    link: "/certs/e-shikaku/textbook#ch7-sec5",
  },
  {
    term: "MAE",
    reading: "えむえーいー",
    english: "Masked Autoencoder",
    definition:
      "He et al. 2021。画像の 75% をマスクして残り 25% から再構成する自己教師あり学習。ViT との相性が良く、強い視覚特徴を獲得する。",
    level: "1",
    category: "自己教師あり学習",
    link: "/certs/e-shikaku/textbook#ch7-sec5",
  },
  {
    term: "DINO / DINOv2",
    reading: "でぃーのー",
    english: "DINO / DINOv2",
    definition:
      "Caron et al. 2021/2023。自己蒸留型 SSL で、教師なしでセグメンテーション特徴を獲得する。基盤視覚モデルの 1 つ。",
    level: "1",
    category: "自己教師あり学習",
    link: "/certs/e-shikaku/textbook#ch7-sec5",
  },
  {
    term: "能動学習",
    reading: "のうどうがくしゅう",
    english: "active learning",
    definition:
      "ラベル付けが高コストな場面で、最も学習効果の高いサンプルを選んでラベル付与・再学習を繰り返す手法。獲得関数で『情報的な例』を選別する。",
    level: "1",
    category: "能動学習",
    link: "/certs/e-shikaku/textbook#ch7-sec5",
  },
  {
    term: "Uncertainty Sampling",
    reading: "あんさーてぃんてぃーさんぷりんぐ",
    english: "uncertainty sampling",
    definition:
      "能動学習の代表的獲得関数。モデルが予測に最も自信がない(エントロピー高 / 最大確率小 / margin 小)サンプルを優先してラベル付けする。",
    level: "1",
    category: "能動学習",
    link: "/certs/e-shikaku/textbook#ch7-sec5",
  },
  {
    term: "BALD",
    reading: "ばるど",
    english: "Bayesian Active Learning by Disagreement",
    definition:
      "ベイズ的な能動学習手法。Dropout や Deep Ensemble でモデルパラメータの不確実性を推定し、予測分散が大きいサンプルを優先する。",
    level: "1",
    category: "能動学習",
  },
  {
    term: "連合学習",
    reading: "れんごうがくしゅう",
    english: "Federated Learning",
    definition:
      "データを中央集約せず、各クライアントでローカル学習したモデル更新だけを共有して中央モデルを改善する分散学習。プライバシー保護と規制対応に有用。",
    level: "1",
    category: "連合学習",
    link: "/certs/e-shikaku/textbook#ch7-sec6",
  },
  {
    term: "FedAvg",
    reading: "ふぇどあぶ",
    english: "Federated Averaging",
    definition:
      "連合学習の代表的アルゴリズム (McMahan et al. 2017)。各クライアントが数エポック学習した後、サーバがデータ量で重み付け平均でモデルを集約する。",
    level: "1",
    category: "連合学習",
    link: "/certs/e-shikaku/textbook#ch7-sec6",
  },
  {
    term: "クロスデバイス連合学習",
    reading: "くろすでばいすれんごうがくしゅう",
    english: "cross-device federated learning",
    definition:
      "数百万のスマートフォンや IoT デバイスが参加する連合学習形態。各デバイスのデータは小規模、参加が不安定。Google Gboard などが実例。",
    level: "1",
    category: "連合学習",
    link: "/certs/e-shikaku/textbook#ch7-sec6",
  },
  {
    term: "クロスサイロ連合学習",
    reading: "くろすさいろれんごうがくしゅう",
    english: "cross-silo federated learning",
    definition:
      "数〜数十の組織(病院・銀行・メーカー)が参加する連合学習形態。各組織のデータは大規模で参加は安定。医療画像診断・金融不正検知などで実用化。",
    level: "1",
    category: "連合学習",
    link: "/certs/e-shikaku/textbook#ch7-sec6",
  },
  {
    term: "FedProx",
    reading: "ふぇどぷろっくす",
    english: "FedProx",
    definition:
      "Non-IID データ問題に対処する連合学習アルゴリズム。各クライアントの局所更新に近接項を加え、グローバルモデルから離れすぎないよう制御する。",
    level: "1",
    category: "連合学習",
  },
  {
    term: "プルーニング",
    reading: "ぷるーにんぐ",
    english: "pruning",
    definition:
      "ニューラルネットの重みのうち重要でないものを 0 にする(または削除する)モデル軽量化手法。非構造化(個別重み)と構造化(チャネル・ヘッド)に大別。",
    level: "1",
    category: "モデル軽量化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "Lottery Ticket Hypothesis",
    reading: "ろたりーちけっとかせつ",
    english: "Lottery Ticket Hypothesis",
    definition:
      "Frankle & Carbin 2019。大きなネットワーク内には『勝者の宝くじ券』に相当する小さな部分ネットワークが存在し、それを抽出すれば元と同等の性能が出るという仮説。",
    level: "1",
    category: "モデル軽量化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "知識蒸留",
    reading: "ちしきじょうりゅう",
    english: "knowledge distillation",
    definition:
      "Hinton et al. 2015。大きな教師モデルの Soft Target を小さな生徒モデルに学習させる軽量化手法。温度パラメータでソフト化した分布から、クラス間類似度を継承できる。",
    level: "1",
    category: "モデル軽量化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "DistilBERT",
    reading: "でぃすてぃるばーと",
    english: "DistilBERT",
    definition:
      "Sanh et al. 2019。BERT-base を蒸留して 40% 軽量・60% 高速化、性能 97% 維持。蒸留の有名な実例。",
    level: "1",
    category: "モデル軽量化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "PTQ",
    reading: "ぴーてぃーきゅー",
    english: "Post-Training Quantization",
    definition:
      "学習後のモデルにそのまま量子化を適用する手法。代表: GPTQ・AWQ。安価だが精度低下が出やすい。",
    level: "1",
    category: "量子化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "QAT",
    reading: "きゅーえーてぃー",
    english: "Quantization-Aware Training",
    definition:
      "学習中に量子化を模倣し『量子化に強い重み』を学習する手法。学習コストは高いが PTQ より精度低下が少ない。",
    level: "1",
    category: "量子化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "NF4",
    reading: "えぬえふ4",
    english: "Normal Float 4",
    definition:
      "QLoRA で採用される 4 bit 量子化形式 (Dettmers et al. 2023)。事前学習済み重みが正規分布に近い性質を利用して精度低下を抑制する。",
    level: "1",
    category: "量子化",
    link: "/certs/e-shikaku/textbook#ch7-sec7",
  },
  {
    term: "DPO",
    reading: "でぃーぴーおー",
    english: "Direct Preference Optimization",
    definition:
      "Rafailov et al. 2023。RLHF の RL ステージを強化学習なしの教師あり学習に置き換える手法。実装が簡単で安定し、2023 年以降急速に普及。",
    level: "1",
    category: "ファインチューニング",
    link: "/certs/e-shikaku/textbook#ch7-sec2",
  },
  {
    term: "DoRA",
    reading: "どーら",
    english: "Weight-Decomposed Low-Rank Adaptation",
    definition:
      "Liu et al. 2024。LoRA を方向と大きさに分解した改良版。LoRA より精度が向上することが報告されている。",
    level: "1",
    category: "ファインチューニング",
  },
  {
    term: "Mamba",
    reading: "まんば",
    english: "Mamba (S6)",
    definition:
      "Gu & Dao 2023。Self-Attention の O(n²) を線形時間 O(n) に置き換える状態空間モデル。長系列で Transformer を凌駕する場合がある。",
    level: "1",
    category: "効率的アーキテクチャ",
    link: "/certs/e-shikaku/textbook#ch7-sec3",
  },
  {
    term: "Flash Attention",
    reading: "ふらっしゅあてんしょん",
    english: "Flash Attention",
    definition:
      "Dao et al. 2022。GPU メモリ階層を意識した Attention 実装で、数学的に同一のまま 2〜4 倍高速化。現代の LLM 学習・推論で標準採用。",
    level: "1",
    category: "効率的アーキテクチャ",
    link: "/certs/e-shikaku/textbook#ch7-sec3",
  },
  {
    term: "MCP",
    reading: "えむしーぴー",
    english: "Model Context Protocol",
    definition:
      "Anthropic 2024。AI モデルと外部ツールの接続を標準化するオープンプロトコル。任意の AI クライアントが任意の MCP サーバを使える、エージェント時代のインフラ。",
    level: "1",
    category: "AI エージェント",
    link: "/certs/e-shikaku/textbook#ch7-sec4",
  },
  // === 多変量解析(準1級) ===
  {
    term: "判別分析",
    reading: "はんべつぶんせき",
    english: "discriminant analysis",
    definition:
      "複数の変数からカテゴリを判別するための古典的多変量手法。Fisher の線形判別(LDA)、二次判別(QDA)が代表。教師あり分類の前身。",
    level: "準1",
    category: "多変量解析",
  },
  {
    term: "クラスター分析",
    reading: "くらすたーぶんせき",
    english: "cluster analysis",
    definition:
      "ラベルなしデータをグループ化する教師なし手法。階層的クラスタリング(ウォード法・最遠隣法)、k-means、DBSCAN などが代表。",
    level: "準1",
    category: "多変量解析",
  },
  {
    term: "因子分析",
    reading: "いんしぶんせき",
    english: "factor analysis",
    definition:
      "観測変数の背後にある潜在因子を推定する手法。心理学・マーケティング(顧客満足要因)で広く使用。PCA とは目的が異なる。",
    level: "準1",
    category: "多変量解析",
  },
  {
    term: "主成分分析",
    reading: "しゅせいぶんぶんせき",
    english: "principal component analysis",
    definition:
      "多変量データの分散を最大化する直交軸を順に取り、低次元表現に圧縮する手法。固有値分解または SVD で計算。",
    level: "準1",
    category: "多変量解析",
    link: "/textbook/grade-pre1#ch3",
  },
  {
    term: "Wardの方法",
    reading: "うぉーどのほうほう",
    english: "Ward's method",
    definition:
      "階層的クラスタリングの 1 つ。クラスター間距離をクラスター内分散の増加量で定義。コンパクトな球状クラスターを作りやすい。",
    level: "準1",
    category: "多変量解析",
  },
  {
    term: "k-means クラスタリング",
    reading: "けーみーんずくらすたりんぐ",
    english: "k-means clustering",
    definition:
      "$k$ 個のクラスター中心を反復更新で求める非階層クラスタリング。最も広く使われる。$k$ の決定にはエルボー法・シルエット分析を用いる。",
    level: "準1",
    category: "多変量解析",
  },
  {
    term: "シルエット係数",
    reading: "しるえっとけいすう",
    english: "silhouette coefficient",
    definition:
      "クラスタリングの良さを測る指標。各点が自クラスター内でまとまり、他クラスターから離れているほど 1 に近い。-1 〜 1 の範囲。",
    level: "準1",
    category: "多変量解析",
  },
  {
    term: "エルボー法",
    reading: "えるぼーほう",
    english: "elbow method",
    definition:
      "k-means の最適クラスター数決定法の 1 つ。SSE(クラスター内二乗和)を $k$ の関数としてプロットし、減少が緩やかになる『肘』の位置を $k$ に選ぶ。",
    level: "準1",
    category: "多変量解析",
  },
  // === 品質工学(QC検定) ===
  {
    term: "工程能力指数",
    reading: "こうていのうりょくしすう",
    english: "process capability index (Cp, Cpk)",
    definition:
      "$C_p = (USL - LSL)/(6\\sigma)$ で工程のばらつきが規格内に収まる能力を測る。$C_{pk}$ は中心ずれも考慮。Cp ≥ 1.33 で十分。",
    level: "準1",
    category: "品質工学",
  },
  {
    term: "管理図",
    reading: "かんりず",
    english: "control chart",
    definition:
      "工程の中心値とばらつきを時系列で監視する図。$\\bar{X}$-R 管理図、$p$ 管理図、$np$ 管理図などがある。3σ 管理限界が標準。",
    level: "準1",
    category: "品質工学",
  },
  {
    term: "OC 曲線",
    reading: "おーしーきょくせん",
    english: "Operating Characteristic curve",
    definition:
      "サンプリング検査で『ロット不良率 $p$ が与えられたときに合格となる確率』を描いた曲線。生産者危険(α)・消費者危険(β)が読み取れる。",
    level: "準1",
    category: "品質工学",
  },
  {
    term: "田口メソッド",
    reading: "たぐちめそっど",
    english: "Taguchi method",
    definition:
      "田口玄一の提唱した品質工学。直交配列表 + SN 比で『製品のロバスト性』を最大化する実験計画法。製造業で広く採用。",
    level: "準1",
    category: "品質工学",
  },
  {
    term: "SN比",
    reading: "えすえぬひ",
    english: "Signal-to-Noise ratio",
    definition:
      "田口メソッドで製品の頑健性を測る指標。望大特性・望小特性・望目特性で式が異なる。値が大きいほどばらつきの影響を受けにくい。",
    level: "準1",
    category: "品質工学",
  },
  {
    term: "パレート図",
    reading: "ぱれーとず",
    english: "Pareto chart",
    definition:
      "QC 7 つ道具の 1 つ。不良要因を頻度順に並べた棒グラフ + 累積比率の折れ線。『2:8 法則』で重要な少数要因を特定する。",
    level: "準1",
    category: "QC 7 つ道具",
  },
  {
    term: "特性要因図",
    reading: "とくせいよういんず",
    english: "fishbone diagram / Ishikawa diagram",
    definition:
      "結果に対する要因を 4M(Man, Machine, Material, Method)などで体系化する図。原因分析の出発点として QC で頻用される。",
    level: "準1",
    category: "QC 7 つ道具",
  },
  // === 生存解析(準1級) ===
  {
    term: "ハザード関数",
    reading: "はざーどかんすう",
    english: "hazard function",
    definition:
      "$h(t) = \\lim_{\\Delta t \\to 0} P(t \\leq T < t+\\Delta t \\mid T \\geq t)/\\Delta t$。時点 $t$ まで生存している人が次の瞬間にイベントを起こす瞬時的確率。",
    level: "準1",
    category: "生存解析",
  },
  {
    term: "Kaplan-Meier 推定量",
    reading: "かぷらん-まいやーすいていりょう",
    english: "Kaplan-Meier estimator",
    definition:
      "右打ち切りデータから生存関数 $S(t) = P(T > t)$ をノンパラメトリックに推定する手法。階段状の推定曲線で打ち切り例も活用する。",
    level: "準1",
    category: "生存解析",
    link: "/textbook/grade-pre1#ch9",
  },
  {
    term: "Cox 比例ハザードモデル",
    reading: "こっくすひれいはざーどもでる",
    english: "Cox proportional hazards model",
    definition:
      "$h(t \\mid x) = h_0(t) \\exp(\\beta^\\top x)$。ベースラインハザード $h_0(t)$ を特定せずに係数 $\\beta$ を部分尤度で推定するセミパラ手法。",
    level: "準1",
    category: "生存解析",
    link: "/textbook/grade-pre1#ch9",
  },
  {
    term: "ログランク検定",
    reading: "ろぐらんくけんてい",
    english: "log-rank test",
    definition:
      "2 群以上の生存曲線の差を比較するノンパラ検定。Kaplan-Meier 推定後の標準的検定として臨床試験で広く使用。",
    level: "準1",
    category: "生存解析",
  },
  // === ベイズ・モデル選択(準1級) ===
  {
    term: "MAP 推定",
    reading: "まっぷすいてい",
    english: "Maximum A Posteriori estimation",
    definition:
      "事後分布 $\\pi(\\theta \\mid x)$ を最大化する $\\theta$。事前分布が一様なら MLE と一致。点推定としてベイズ的に妥当。",
    level: "準1",
    category: "ベイズ統計",
  },
  {
    term: "ジェフリーズ事前分布",
    reading: "じぇふりーずじぜんぶんぷ",
    english: "Jeffreys prior",
    definition:
      "Fisher 情報量の平方根に比例する不変事前分布。パラメータ変換に対して不変であり『無情報事前』として議論される。",
    level: "準1",
    category: "ベイズ統計",
  },
  {
    term: "ベイズファクター",
    reading: "べいずふぁくたー",
    english: "Bayes factor",
    definition:
      "2 つのモデル $M_0, M_1$ の周辺尤度の比。ベイズ的なモデル比較指標。Kass-Raftery の解釈基準では BF > 100 で『決定的』。",
    level: "準1",
    category: "ベイズ統計",
  },
  {
    term: "WAIC",
    reading: "わいっく",
    english: "Widely Applicable Information Criterion",
    definition:
      "渡辺澄夫が提唱した情報量規準。AIC・BIC が階層モデルで破綻するケースでも使え、特異モデルや混合分布で安定動作。",
    level: "準1",
    category: "情報量規準",
  },
];
