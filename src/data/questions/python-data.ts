import type { Question } from "@/types/content";

export const pythonDataQuestions: Question[] = [
  {
    id: "pyd-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Python 3 エンジニア認定 データ分析試験の主催団体として最も適切なものを選びなさい。",
    choices: [
      "Python Software Foundation",
      "一般社団法人 Python エンジニア育成推進協会(PythonED)",
      "日本統計学会",
      "JDLA(日本ディープラーニング協会)",
    ],
    correctIndex: 1,
    explanation:
      "Python 3 エンジニア認定試験(基礎・データ分析・実践)は、いずれも **一般社団法人 Python エンジニア育成推進協会(PythonED)** が主催している。",
  },
  {
    id: "pyd-q2",
    category: "Python 文法",
    difficulty: 2,
    question:
      "次のコードの実行結果として最も適切なものを選びなさい。\n\n```python\ndef append(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(append(1))\nprint(append(2))\n```",
    choices: [
      "[1]\\n[2]",
      "[1]\\n[1, 2]",
      "[1]\\n[]",
      "TypeError",
    ],
    correctIndex: 1,
    explanation:
      "可変デフォルト引数(list)は **関数定義時に 1 度だけ** 作られ、呼び出し間で共有される。よって 1 回目で `[1]`、2 回目では同じ list に 2 が追加されて `[1, 2]`。デフォルトは None にして関数内で作るのが定石。",
  },
  {
    id: "pyd-q3",
    category: "Python 文法",
    difficulty: 1,
    question:
      "次のリスト内包表記の出力として最も適切なものを選びなさい。\n\n```python\n[x*2 for x in range(5) if x % 2 == 0]\n```",
    choices: [
      "[0, 2, 4]",
      "[0, 4, 8]",
      "[2, 6, 10]",
      "[0, 1, 2, 3, 4]",
    ],
    correctIndex: 1,
    explanation:
      "`range(5)` = `[0,1,2,3,4]` のうち偶数(0, 2, 4)を選んで 2 倍 → `[0, 4, 8]`。",
  },
  {
    id: "pyd-q4",
    category: "NumPy",
    difficulty: 2,
    question:
      "次のコードの `a.sum(axis=0)` の出力として最も適切なものを選びなさい。\n\n```python\nimport numpy as np\na = np.array([[1, 2, 3], [4, 5, 6]])\nprint(a.sum(axis=0))\n```",
    choices: [
      "[6, 15]",
      "[5, 7, 9]",
      "21",
      "[[1, 2, 3], [4, 5, 6]]",
    ],
    correctIndex: 1,
    explanation:
      "`axis=0` は **行方向に集約 = 列ごとに合計**。1+4=5, 2+5=7, 3+6=9 で `[5, 7, 9]`。`axis=1` なら行ごと合計で `[6, 15]`。",
  },
  {
    id: "pyd-q5",
    category: "NumPy",
    difficulty: 2,
    question:
      "shape=(4, 5) の ndarray と shape=(5,) の ndarray を加算したときの結果の shape として最も適切なものを選びなさい。",
    choices: ["(4, 5)", "(5, 4)", "(4,)", "(5,)"],
    correctIndex: 0,
    explanation:
      "ブロードキャストの規則により、shape=(5,) は shape=(1, 5) と同等に扱われ、行方向に複製されたかのように振る舞う。結果は (4, 5)。",
  },
  {
    id: "pyd-q6",
    category: "NumPy",
    difficulty: 2,
    question:
      "5 × 5 の単位行列を作る関数として最も適切なものを選びなさい。",
    choices: [
      "np.zeros(5)",
      "np.ones((5, 5))",
      "np.eye(5)",
      "np.identity(5, 5)",
    ],
    correctIndex: 2,
    explanation:
      "**`np.eye(N)`** が単位行列。`np.identity(N)` も同等(引数は 1 つ)。",
  },
  {
    id: "pyd-q7",
    category: "pandas",
    difficulty: 2,
    question:
      "DataFrame `df` の整数位置で 1 行目・1 列目の値を取得する正しい記法として最も適切なものを選びなさい。",
    choices: [
      "df.loc[0, 0]",
      "df.iloc[0, 0]",
      "df[0][0]",
      "df.at[0, 0]",
    ],
    correctIndex: 1,
    explanation:
      "**`iloc`** は整数位置ベース、**`loc`** はラベルベース。整数位置で行 0・列 0 を取得するには `iloc[0, 0]`。",
  },
  {
    id: "pyd-q8",
    category: "pandas",
    difficulty: 2,
    question:
      "SQL の LEFT OUTER JOIN に相当する pandas の操作として最も適切なものを選びなさい。",
    choices: [
      "pd.merge(left, right, how='inner')",
      "pd.merge(left, right, how='left')",
      "pd.concat([left, right])",
      "left.append(right)",
    ],
    correctIndex: 1,
    explanation:
      "**`pd.merge(left, right, how='left')`** が LEFT OUTER JOIN 相当。`how` には `'inner', 'left', 'right', 'outer'` を指定する。",
  },
  {
    id: "pyd-q9",
    category: "pandas",
    difficulty: 2,
    question:
      "DataFrame `df` の数値列について平均・最小・最大などの要約統計を一括で出すメソッドとして最も適切なものを選びなさい。",
    choices: [
      "df.summary()",
      "df.describe()",
      "df.info()",
      "df.head()",
    ],
    correctIndex: 1,
    explanation:
      "**`describe()`** が数値列の count / mean / std / min / 25% / 50% / 75% / max を一括で出力する。`info()` は型と欠測情報、`head()` は先頭 5 行。",
  },
  {
    id: "pyd-q10",
    category: "Matplotlib",
    difficulty: 2,
    question:
      "Matplotlib で 1 行 2 列の subplot を作るときの正しい呼び出しとして最も適切なものを選びなさい。",
    choices: [
      "fig, ax = plt.subplots(2, 1)",
      "fig, axes = plt.subplots(1, 2)",
      "fig = plt.subplots(1, 2)",
      "axes = plt.figure(1, 2)",
    ],
    correctIndex: 1,
    explanation:
      "**`plt.subplots(nrows, ncols)`** は (figure, axes 配列) のタプルを返す。1 行 2 列なら `plt.subplots(1, 2)` で、`axes` は長さ 2 の配列。",
  },
  {
    id: "pyd-q11",
    category: "scikit-learn",
    difficulty: 2,
    question:
      "scikit-learn のすべての推定器(Estimator)が実装している共通メソッドとして最も適切なものを選びなさい。",
    choices: [
      "fit",
      "compile",
      "build",
      "evaluate",
    ],
    correctIndex: 0,
    explanation:
      "scikit-learn の共通インターフェースは **`fit(X, y)`** で学習、`predict(X)` で予測、前処理は `transform(X)`。`compile / evaluate` は Keras の API。",
  },
  {
    id: "pyd-q12",
    category: "scikit-learn",
    difficulty: 3,
    question:
      "StandardScaler を訓練データで fit してテストデータに適用する正しい呼び出しとして最も適切なものを選びなさい。",
    choices: [
      "scaler.fit_transform(X_train); scaler.fit_transform(X_test)",
      "scaler.fit(X_train); scaler.transform(X_test)",
      "scaler.fit(X_test); scaler.transform(X_train)",
      "scaler.transform(X_train); scaler.transform(X_test)",
    ],
    correctIndex: 1,
    explanation:
      "**訓練で fit、テストには transform のみ**。テスト側で fit すると訓練 / テストで異なる統計量になりデータリーク + 性能の過大評価につながる。Pipeline でラップすると構造的に防げる。",
  },
  {
    id: "pyd-q13",
    category: "scikit-learn",
    difficulty: 3,
    question:
      "Pipeline + GridSearchCV を使う最大の利点として最も適切なものを選びなさい。",
    choices: [
      "コードが短くなるだけで本質的な利点はない",
      "CV のフォールドごとに前処理を訓練側だけで fit できデータリークを防げる",
      "学習速度が必ず 10 倍速くなる",
      "ハイパーパラメータが自動的にゼロに固定される",
    ],
    correctIndex: 1,
    explanation:
      "Pipeline でラップすると **CV の各フォールドの訓練側だけで前処理を fit** してくれる。手動で前処理 → CV すると、検証用データの統計量も使ってしまう典型的なデータリークになる。",
  },
  {
    id: "pyd-q14",
    category: "ML 評価",
    difficulty: 2,
    question:
      "クラス比率が 99:1 の不均衡データで、Accuracy の代わりに重視すべき指標として最も適切なものを選びなさい。",
    choices: [
      "MSE",
      "F1 スコア / Recall / PR-AUC",
      "決定係数 R²",
      "Log Loss のみ",
    ],
    correctIndex: 1,
    explanation:
      "不均衡データでは Accuracy が過大評価されやすい。少数派クラスの捕捉に敏感な **Recall / F1 / PR-AUC** を重視する。",
  },
  {
    id: "pyd-q15",
    category: "教師なし学習",
    difficulty: 2,
    question:
      "scikit-learn で密度ベースのクラスタリング(任意形状クラスタ + 外れ値検出)に使えるアルゴリズムとして最も適切なものを選びなさい。",
    choices: ["KMeans", "AgglomerativeClustering", "DBSCAN", "PCA"],
    correctIndex: 2,
    explanation:
      "**DBSCAN** は密度ベース。任意形状のクラスタを発見でき、密度の低い点を **外れ値** として扱える。KMeans は凸クラスタ前提、PCA は次元削減。",
  },
  {
    id: "pyd-q16",
    category: "次元削減",
    difficulty: 2,
    question:
      "scikit-learn の PCA を使うときに、**事前にスケーリング(標準化)が推奨される** 主な理由として最も適切なものを選びなさい。",
    choices: [
      "PCA は欠測値に弱いため",
      "PCA は分散最大化なので、スケールが大きい変数に支配されてしまうため",
      "PCA は計算量が大きいため",
      "PCA は分類問題でしか使えないため",
    ],
    correctIndex: 1,
    explanation:
      "PCA は分散最大化方向を求めるため、スケールが大きい変数(例: 年収を円単位)が結果を支配してしまう。**事前に StandardScaler 等で標準化** してから PCA を当てるのが定石。",
  },
  {
    id: "pyd-q17",
    category: "数学",
    difficulty: 2,
    question:
      "ベクトル $\\mathbf{a}=(1,2,3)$ と $\\mathbf{b}=(4,5,6)$ の内積として正しいものを選びなさい。",
    choices: ["32", "21", "12", "0"],
    correctIndex: 0,
    explanation:
      "$\\mathbf{a} \\cdot \\mathbf{b} = 1 \\times 4 + 2 \\times 5 + 3 \\times 6 = 4 + 10 + 18 = 32$。",
  },
  {
    id: "pyd-q18",
    category: "数学",
    difficulty: 2,
    question:
      "勾配降下法の更新式 $\\theta \\leftarrow \\theta - \\alpha \\nabla L(\\theta)$ における $\\alpha$ の名称として最も適切なものを選びなさい。",
    choices: [
      "正則化係数",
      "学習率(learning rate)",
      "活性化関数",
      "残差",
    ],
    correctIndex: 1,
    explanation:
      "**$\\alpha$ は学習率(learning rate)**。大きすぎると発散、小さすぎると収束が遅い。多くの実務で 0.001 〜 0.1 程度から探索する。",
  },
  {
    id: "pyd-q19",
    category: "応用",
    difficulty: 2,
    question:
      "scikit-learn でテキストを Bag-of-Words 形式の特徴量行列に変換する変換器として最も適切なものを選びなさい。",
    choices: [
      "StandardScaler",
      "CountVectorizer",
      "OneHotEncoder",
      "PCA",
    ],
    correctIndex: 1,
    explanation:
      "**`CountVectorizer`** は文書集合を単語の出現回数行列に変換する。重み付けに対数 IDF を加えたものが `TfidfVectorizer`。",
  },
  {
    id: "pyd-q20",
    category: "応用",
    difficulty: 2,
    question:
      "scikit-image の Otsu の手法 (filters.threshold_otsu) の主な用途として最も適切なものを選びなさい。",
    choices: [
      "画像のリサイズ",
      "画像の閾値処理(2 値化)で最適な閾値を自動決定",
      "画像のカラースペース変換",
      "画像の回転",
    ],
    correctIndex: 1,
    explanation:
      "**Otsu の手法** はクラス間分散が最大になる閾値を自動決定する 2 値化アルゴリズム。`filters.threshold_otsu` で取得した閾値を `image > thr` で適用する。",
  },
];
