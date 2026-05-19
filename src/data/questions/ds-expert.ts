import type { Question } from "@/types/content";

export const dsExpertQuestions: Question[] = [
  {
    id: "dsx-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "統計検定データサイエンスシリーズの上下関係として最も適切なものを選びなさい。",
    choices: [
      "DS エキスパート → DS 発展 → DS 基礎 の順に難化",
      "DS 基礎 → DS 発展 → DS エキスパート の順に難化",
      "全て同じ難易度",
      "DS 基礎が最も難しい",
    ],
    correctIndex: 1,
    explanation:
      "**DS 基礎(Excel 中心)→ DS 発展(Python/R での標準分析)→ DS エキスパート(高度な統計・ML・因果推論・MLOps)** の順で難化。所要学習時間も 30〜60h → 100〜200h → 300h+ と段階的。",
  },
  {
    id: "dsx-q2",
    category: "EDA",
    difficulty: 2,
    question:
      "右に長い裾を持つ歪んだ分布(例: 年収)に対して、中心傾向の指標として最も適切なものを選びなさい。",
    choices: ["平均", "中央値", "最頻値", "標準偏差"],
    correctIndex: 1,
    explanation:
      "右に長い裾(正の歪度)では平均が大きく引っ張られるため、**中央値** が中心傾向のロバストな指標。年収 ・ 不動産価格 ・ アクセス数などで標準的。",
  },
  {
    id: "dsx-q3",
    category: "欠測値",
    difficulty: 3,
    question:
      "「高所得者ほど所得を回答しない」という欠測パターンに該当するものを選びなさい。",
    choices: [
      "MCAR(完全にランダム)",
      "MAR(欠測ランダム、観測変数で説明可)",
      "MNAR(欠測非ランダム、欠測自体が値に依存)",
      "上記のいずれでもない",
    ],
    correctIndex: 2,
    explanation:
      "欠測の発生が **欠測している値そのもの**(高所得かどうか)に依存しているため **MNAR**。MNAR は単純な代入では補正できず、選択モデルや感度分析が必要。",
  },
  {
    id: "dsx-q4",
    category: "前処理",
    difficulty: 2,
    question:
      "scikit-learn で StandardScaler を使うとき、データリークを防ぐ正しい手順として最も適切なものを選びなさい。",
    choices: [
      "全データで fit し、訓練/テストを分割",
      "訓練データで fit、訓練/テスト両方に transform",
      "訓練/テストそれぞれで fit_transform",
      "テストデータで fit、訓練に transform",
    ],
    correctIndex: 1,
    explanation:
      "テストの統計量を訓練側に混ぜると **データリーク** になり汎化性能を過大評価。**訓練で fit、訓練 / テスト両方に transform** が正しい。Pipeline を使えばこのミスを構造的に防げる。",
  },
  {
    id: "dsx-q5",
    category: "推測統計",
    difficulty: 2,
    question:
      "二項分布 B(n, p) が、n が大きく p が極端でないときに近似できる分布として最も適切なものを選びなさい。",
    choices: ["指数分布", "正規分布", "F 分布", "ベータ分布"],
    correctIndex: 1,
    explanation:
      "中心極限定理の特殊形により、$n$ が大きく $p$ が極端でなければ二項分布は **正規分布 $N(np, np(1-p))$** で近似可能。",
  },
  {
    id: "dsx-q6",
    category: "推測統計",
    difficulty: 3,
    question:
      "100 個の独立な仮説検定を $\\alpha=0.05$ で行うとき、すべての帰無仮説が真でも有意になる検定数の期待値として最も適切なものを選びなさい。",
    choices: ["0 個", "5 個", "50 個", "100 個"],
    correctIndex: 1,
    explanation:
      "1 検定あたり Type I error 確率 0.05 なので、独立に 100 検定を行えば **期待値で 5 個** が誤って有意となる。これが多重検定補正(ボンフェローニ・ホルム・FDR)が必要な理由。",
  },
  {
    id: "dsx-q7",
    category: "回帰",
    difficulty: 2,
    question:
      "ロジスティック回帰の係数 $\\beta_j = 0.7$ のとき、$x_j$ を 1 単位増やしたときのオッズの変化として最も適切なものを選びなさい。",
    choices: [
      "オッズが 0.7 倍になる",
      "オッズが約 2.0 倍になる($e^{0.7} \\approx 2.01$)",
      "オッズが 0.7 増える",
      "オッズに変化なし",
    ],
    correctIndex: 1,
    explanation:
      "ロジスティック回帰の係数は **ログオッズの変化量**。オッズ比は $\\exp(\\beta_j) = e^{0.7} \\approx 2.01$。",
  },
  {
    id: "dsx-q8",
    category: "回帰",
    difficulty: 2,
    question:
      "Lasso(L1 正則化)の特徴として最も適切なものを選びなさい。",
    choices: [
      "係数を完全に 0 にできず変数選択効果がない",
      "係数を完全に 0 にして変数選択効果がある",
      "L2 と完全に同等の効果",
      "ペナルティを使わない最小二乗法と同じ",
    ],
    correctIndex: 1,
    explanation:
      "**Lasso(L1)** は損失関数に $\\sum |\\beta_j|$ を加えるため、最適解で多くの係数が **完全に 0** になり変数選択効果を持つ。Ridge(L2)は係数を 0 寄りに圧縮するが完全には 0 にしない。",
  },
  {
    id: "dsx-q9",
    category: "次元削減",
    difficulty: 2,
    question:
      "PCA の第 1 主成分の方向として最も適切なものを選びなさい。",
    choices: [
      "ラベル間の分散が最小になる方向",
      "観測値の分散が最大になる方向",
      "ラベル間の分散とクラス内分散の比を最小化する方向",
      "残差を最大化する方向",
    ],
    correctIndex: 1,
    explanation:
      "**PCA** は観測データの **分散最大化** 方向に新しい軸を取る。共分散行列の固有値分解で得られ、寄与率は固有値 / 全固有値の和。",
  },
  {
    id: "dsx-q10",
    category: "ML",
    difficulty: 2,
    question:
      "Kaggle や実務のテーブルデータ予測タスクで、現在最も広く使われているアルゴリズム群として最も適切なものを選びなさい。",
    choices: [
      "k-NN",
      "勾配ブースティング(XGBoost / LightGBM / CatBoost)",
      "畳み込みニューラルネット(CNN)",
      "k-means",
    ],
    correctIndex: 1,
    explanation:
      "テーブル予測の事実上の標準は **勾配ブースティング** 系。自動的な変数選択・交互作用検出、欠測 / 外れ値への頑健性、計算速度の点で深層学習を上回ることが多い。",
  },
  {
    id: "dsx-q11",
    category: "評価",
    difficulty: 3,
    question:
      "クラス比率が 99:1 の極端な不均衡データで、モデルの分離性能を評価する指標として最も適切なものを選びなさい。",
    choices: [
      "Accuracy",
      "PR-AUC(Precision-Recall AUC)",
      "MSE",
      "決定係数 $R^2$",
    ],
    correctIndex: 1,
    explanation:
      "不均衡データでは **Accuracy** は 99% を簡単に達成してしまい無意味。**PR-AUC** は少数派クラスの捕捉性能を反映しやすく、**ROC-AUC** より敏感。F1 や Recall も併用が望ましい。",
  },
  {
    id: "dsx-q12",
    category: "評価",
    difficulty: 2,
    question:
      "時系列データの交差検証として最も適切なものを選びなさい。",
    choices: [
      "通常の k-Fold(ランダム分割)",
      "Time Series CV(時間順を守り、未来を訓練に使わない)",
      "Stratified k-Fold",
      "LOOCV(Leave-One-Out)",
    ],
    correctIndex: 1,
    explanation:
      "時系列でランダム分割すると **未来の情報が訓練に混入** し、汎化性能を過大評価する典型的なリーク。**Time Series CV(Forward Chaining / Walk-Forward)** で時間順を守る。",
  },
  {
    id: "dsx-q13",
    category: "ベイズ",
    difficulty: 3,
    question:
      "ベイズの定理 $P(\\theta | D) \\propto P(D | \\theta) P(\\theta)$ における $P(D | \\theta)$ の名称として最も適切なものを選びなさい。",
    choices: ["事前分布", "事後分布", "尤度", "周辺尤度"],
    correctIndex: 2,
    explanation:
      "**$P(D | \\theta)$ は尤度**(likelihood)。$P(\\theta)$ が事前分布、$P(\\theta | D)$ が事後分布、$P(D) = \\int P(D|\\theta)P(\\theta)d\\theta$ が周辺尤度(規格化定数)。",
  },
  {
    id: "dsx-q14",
    category: "ベイズ",
    difficulty: 3,
    question:
      "MCMC の収束診断指標として用いられる Gelman-Rubin 統計量 $\\hat{R}$ について、収束していると判断できる目安として最も適切なものを選びなさい。",
    choices: [
      "$\\hat{R} > 2$",
      "$\\hat{R} < 1.05$",
      "$\\hat{R} = 0$",
      "$\\hat{R} > 100$",
    ],
    correctIndex: 1,
    explanation:
      "**$\\hat{R}$** は複数チェーン間の分散比。**1.0 に近いほど収束** しており、実務では **< 1.05(または 1.01)** が合格ラインの目安。",
  },
  {
    id: "dsx-q15",
    category: "時系列",
    difficulty: 2,
    question:
      "ARIMA(p, d, q) の差分次数 $d$ を決めるために用いられる検定として最も適切なものを選びなさい。",
    choices: [
      "t 検定",
      "F 検定",
      "ADF 検定 / KPSS 検定(単位根の有無)",
      "カイ二乗適合度検定",
    ],
    correctIndex: 2,
    explanation:
      "**ADF 検定 / KPSS 検定** は単位根(非定常性)の有無を判定。単位根があれば差分を取って定常化し、$d$ を 1 つ増やす。",
  },
  {
    id: "dsx-q16",
    category: "因果推論",
    difficulty: 3,
    question:
      "DID(差分の差分)の前提として最も重要なものを選びなさい。",
    choices: [
      "サンプルサイズが必ず 100 以上",
      "処置群と対照群が並行トレンドを持つこと",
      "処置がランダムに割り付けられていること",
      "従属変数が必ず正規分布に従うこと",
    ],
    correctIndex: 1,
    explanation:
      "DID は『**並行トレンド仮定**(処置がなければ両群の傾向が並行に推移したはず)』を前提に、処置前後の差分の差分で因果効果を推定する。",
  },
  {
    id: "dsx-q17",
    category: "因果推論",
    difficulty: 3,
    question:
      "DAG(因果ダイアグラム)で 2 つの矢印が突き当たる点(コライダー)について、最も適切な記述を選びなさい。",
    choices: [
      "コライダーは必ず統制変数として加えるべき",
      "コライダーで条件付けると逆にバイアスを生む",
      "コライダーは因果効果の媒介変数",
      "コライダーは実在しない仮想概念",
    ],
    correctIndex: 1,
    explanation:
      "**コライダー** で条件付けると **コライダーバイアス** を生み、もとは独立だった変数の間に擬似的な相関が生じる。バックドアパスを閉じる目的の交絡変数とは扱いが正反対。",
  },
  {
    id: "dsx-q18",
    category: "SQL",
    difficulty: 2,
    question:
      "ウィンドウ関数 LAG(price, 1) OVER (PARTITION BY user_id ORDER BY ts) が返す値として最も適切なものを選びなさい。",
    choices: [
      "全データの最初の price",
      "同じ user_id 内で時系列順に 1 行前の price",
      "全データの平均 price",
      "次の行の price",
    ],
    correctIndex: 1,
    explanation:
      "**LAG(col, n)** は同パーティション内で **n 行前の値** を返す。前後変化の計算で頻出。",
  },
  {
    id: "dsx-q19",
    category: "MLOps",
    difficulty: 3,
    question:
      "「特徴量分布 P(X) は変わらないが、入力と出力の関係 P(Y|X) が変わってしまった」という現象の名称として最も適切なものを選びなさい。",
    choices: [
      "特徴量ドリフト(Covariate Shift)",
      "ラベルドリフト(Label Shift)",
      "概念ドリフト(Concept Drift)",
      "正則化ドリフト",
    ],
    correctIndex: 2,
    explanation:
      "**概念ドリフト** は入力と出力の関係性そのもの $P(Y|X)$ が変化する現象。コロナ禍での需要予測 / 不正検知の劣化が典型例。",
  },
  {
    id: "dsx-q20",
    category: "MLOps",
    difficulty: 2,
    question:
      "MLOps で『訓練時と推論時で同じ特徴量計算ロジックを使う』ことを保証する仕組みとして最も適切なものを選びなさい。",
    choices: [
      "実験管理ツール(MLflow など)",
      "特徴量ストア(Feature Store)",
      "モデルレジストリ",
      "ロードバランサー",
    ],
    correctIndex: 1,
    explanation:
      "**特徴量ストア(Feast / Tecton など)** は訓練 / 推論で同じ特徴量を再利用するための基盤。これがないと **訓練 / サービング歪み(Training-Serving Skew)** が発生し、モデル精度が劣化する。",
  },
  {
    id: "dsx-q21",
    category: "ベイズ統計",
    difficulty: 3,
    question:
      "MCMC 法のうち **Gibbs Sampling** の特徴として最も適切なものを選びなさい。",
    choices: [
      "条件付き分布から各変数を 1 つずつサンプリングする",
      "提案分布から候補をサンプル → 採択 / 棄却で更新する",
      "勾配を使ってサンプル軌道を生成する",
      "ニュートン法で MAP 推定する",
    ],
    correctIndex: 0,
    explanation:
      "**Gibbs Sampling は各変数の『条件付き分布 p(xᵢ|x_-i)』から順次サンプル**。Metropolis-Hastings は提案 / 採択型、Hamiltonian Monte Carlo(HMC)は勾配ベース、Newton 法はサンプリングではない。",
  },
  {
    id: "dsx-q22",
    category: "因果推論",
    difficulty: 3,
    question:
      "**操作変数法(Instrumental Variable)** が必要となる状況として最も適切なものを選びなさい。",
    choices: [
      "未観測の交絡(隠れた交絡因子)が存在する",
      "サンプルサイズが小さい",
      "従属変数が多い",
      "線形性が成り立たない",
    ],
    correctIndex: 0,
    explanation:
      "**操作変数法**: 未観測交絡因子 U が処置 T と結果 Y の両方に影響する場合、**処置 T には影響するが Y に直接影響しない変数 Z(操作変数)** で因果効果を識別。教育の収益率推定などで頻用。",
  },
  {
    id: "dsx-q23",
    category: "因果推論",
    difficulty: 3,
    question:
      "ランダム化比較試験(RCT)が **倫理的 ・ 実務的に不可能** なときに、**観察データから処置効果を推定** する代表的手法として **誤っているもの** を選びなさい。",
    choices: [
      "傾向スコアマッチング(PSM)",
      "差の差(Difference-in-Differences、DiD)",
      "回帰不連続デザイン(RDD)",
      "単純な相関係数",
    ],
    correctIndex: 3,
    explanation:
      "**観察データの因果推論手法**: PSM ・ DiD ・ RDD ・ Synthetic Control ・ IV など。**単純な相関は因果ではない**(相関 ≠ 因果)。",
  },
  {
    id: "dsx-q24",
    category: "時系列",
    difficulty: 3,
    question:
      "ARIMA(p, d, q)モデルの **d** が表すものとして最も適切なものを選びなさい。",
    choices: [
      "差分の階数(定常化に必要な階差)",
      "自己回帰の次数",
      "移動平均の次数",
      "季節周期",
    ],
    correctIndex: 0,
    explanation:
      "**ARIMA(p, d, q)**: p = AR 次数、d = 差分階数(階差で定常化)、q = MA 次数。季節性は SARIMA(p,d,q)(P,D,Q)_s の (P,D,Q,s)で表す。",
  },
  {
    id: "dsx-q25",
    category: "ベイズ",
    difficulty: 3,
    question:
      "**変分推論(Variational Inference)** の特徴として最も適切なものを選びなさい。",
    choices: [
      "事後分布を近似する分布族の中で KL ダイバージェンスを最小化する",
      "MCMC より遅いが正確",
      "事後分布を厳密に計算する",
      "勾配計算を不要にする",
    ],
    correctIndex: 0,
    explanation:
      "**変分推論** は事後分布 p(θ|D) を扱える分布族 q(θ) で近似し、**KL(q || p) を最小化** する最適化問題に帰着。MCMC より高速 ・ スケーラブルだが近似。VAE の理論的基盤。",
  },
  {
    id: "dsx-q26",
    category: "DL",
    difficulty: 3,
    question:
      "**Transformer** の Multi-Head Attention で、**Head 数を増やす主目的** として最も適切なものを選びなさい。",
    choices: [
      "異なる表現空間で並列に Attention を計算し多様な関係を捉える",
      "学習データを増やす",
      "GPU メモリを節約する",
      "ハイパーパラメータを減らす",
    ],
    correctIndex: 0,
    explanation:
      "**Multi-Head Attention** は **異なる射影行列で並列に Attention を計算**(各 Head が異なる関係を学習)し結果を結合。Head ごとに『構文的依存』『長距離関係』などを分担する効果。",
  },
  {
    id: "dsx-q27",
    category: "DL",
    difficulty: 3,
    question:
      "**Batch Normalization** が学習を安定化させる主な理由として最も適切なものを選びなさい。",
    choices: [
      "Internal Covariate Shift を抑制し、勾配スケールを安定化",
      "パラメータ数を減らす",
      "GPU メモリを節約する",
      "活性化関数を不要にする",
    ],
    correctIndex: 0,
    explanation:
      "**BatchNorm** はミニバッチ単位で平均 0 ・ 分散 1 に正規化 + スケール / シフト学習。**Internal Covariate Shift 抑制 ・ 勾配スケール安定化 ・ 高学習率許容**。Layer Norm は Transformer で標準。",
  },
  {
    id: "dsx-q28",
    category: "評価",
    difficulty: 3,
    question:
      "**Stratified K-Fold Cross Validation** を使う最も適切な場面を選びなさい。",
    choices: [
      "クラス不均衡データの分類問題",
      "時系列データの予測",
      "回帰タスク全般",
      "サンプルサイズが大きすぎる場合",
    ],
    correctIndex: 0,
    explanation:
      "**Stratified K-Fold** は **各 Fold のクラス比率を元データと同じに保つ** ため不均衡データに必須。**時系列は TimeSeriesSplit**(リーク回避)、回帰は通常 K-Fold で OK。",
  },
  {
    id: "dsx-q29",
    category: "次元削減",
    difficulty: 3,
    question:
      "**UMAP(Uniform Manifold Approximation and Projection)** の特徴として最も適切なものを選びなさい。",
    choices: [
      "局所構造と大域構造を両立し、t-SNE より高速",
      "PCA より遅いが線形",
      "ラベル必須の教師あり",
      "勾配計算不要",
    ],
    correctIndex: 0,
    explanation:
      "**UMAP** は **位相幾何ベースの非線形次元削減**。**局所構造保存(t-SNE 同等)+ 大域構造保存(t-SNE より良い)+ 高速**(t-SNE より 10× 速い)。可視化 ・ 前処理で標準化。",
  },
  {
    id: "dsx-q30",
    category: "監視",
    difficulty: 3,
    question:
      "**コンセプトドリフト(Concept Drift)** の説明として最も適切なものを選びなさい。",
    choices: [
      "入力 X と出力 Y の関係 P(Y|X) が時間と共に変化する",
      "入力 X の分布のみが変化する(共変量シフト)",
      "学習データの量が増える",
      "モデルの重みが乱数に近づく",
    ],
    correctIndex: 0,
    explanation:
      "**Concept Drift = P(Y|X) の変化**(顧客嗜好の変化 ・ 不正パターンの進化など)。**Covariate Shift(共変量シフト)= P(X) の変化**。両者を区別して監視 ・ 再学習トリガを設計する。",
  },
];
