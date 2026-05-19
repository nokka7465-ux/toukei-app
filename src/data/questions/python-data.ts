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
  { id: "pyd-q21", category: "NumPy", difficulty: 3, question: "NumPy で **ブロードキャスト** が成立する条件として最も適切なものを選びなさい。", choices: ["後ろから次元を揃え、各次元が一致 or 1 であること", "全次元が一致", "1 次元配列のみ", "型が同じ"], correctIndex: 0, explanation: "**ブロードキャスト**: 後ろから次元を見て、一致 or 1(=拡張可) ならブロードキャスト。例: (3,4)+(4,) = OK、(3,4)+(3,) = NG。" },
  { id: "pyd-q22", category: "NumPy", difficulty: 3, question: "**`np.dot(A, B)`** と **`A @ B`** の違いとして最も適切なものを選びなさい。", choices: ["2D 行列では同じ。高次元では `@` が batched matmul として動作", "全く違う動作", "`np.dot` は GPU 利用", "`@` は Python 2 専用"], correctIndex: 0, explanation: "**`@`(matmul)** は **batched matmul に対応**(高次元で各バッチごとに行列積)。**`np.dot`** は 2D で同等だが高次元動作が異なる。" },
  { id: "pyd-q23", category: "NumPy", difficulty: 3, question: "NumPy 配列の **メモリ効率的な型** として最も適切なものを選びなさい。", choices: ["不要に float64 を使わず int32 / float32 を選ぶ", "全部 object 型", "全部 string", "list で持つ"], correctIndex: 0, explanation: "**dtype 選定**: 値域に応じた最小型(int8/16/32 / float32)。**画像は uint8、ML 学習は float32** が定石。object dtype は内部で Python list と同等で遅い。" },
  { id: "pyd-q24", category: "pandas", difficulty: 3, question: "pandas の **`groupby().agg()`** で **複数集計を別エイリアス** で行う方法として最も適切なものを選びなさい。", choices: ["`df.groupby('k').agg(s_mean=('s','mean'), s_max=('s','max'))`", "`df.groupby('k').sum()` のみ", "`df.apply(...)` 必須", "pandas では不可"], correctIndex: 0, explanation: "**Named Aggregation**(pandas 0.25+): `agg(新列名=(列, 関数))` の記法。複数の集計を分かりやすく定義。匿名 dict 記法も可能だがこちらが推奨。" },
  { id: "pyd-q25", category: "pandas", difficulty: 3, question: "pandas の **`SettingWithCopyWarning`** が出る典型ケースとして最も適切なものを選びなさい。", choices: ["連鎖インデックスで代入(df[df.x>0]['y'] = ...)を行う", "copy() を使う", "`.loc` を使う", "concat を使う"], correctIndex: 0, explanation: "**Chained assignment**(df[cond]['col']=val)は **view か copy か不明**。`df.loc[cond, 'col'] = val` を使う。明示的に copy が必要なら `.copy()`。" },
  { id: "pyd-q26", category: "pandas", difficulty: 3, question: "pandas の **`merge` の how パラメータ** で、**両側に存在する key のみ残す** のはどれか。", choices: ["inner", "left", "right", "outer"], correctIndex: 0, explanation: "**inner**: 両側に存在する key のみ。**left**: 左側を全保持。**right**: 右側全保持。**outer**: 全 key。SQL JOIN と同じ概念。" },
  { id: "pyd-q27", category: "pandas", difficulty: 3, question: "pandas で **大規模 CSV を分割読込** する方法として最も適切なものを選びなさい。", choices: ["`pd.read_csv('big.csv', chunksize=10000)` でイテレータ取得", "全部メモリに読込", "Excel で開く", "CSV を諦める"], correctIndex: 0, explanation: "**`chunksize`** で **DataFrame のイテレータ**(各 chunk が DataFrame)を取得。**Polars / DuckDB / Dask** など大規模対応ライブラリへの切替も選択肢。" },
  { id: "pyd-q28", category: "pandas", difficulty: 2, question: "**`pd.read_csv` でカラム指定して読込** したい場合に使う引数を選びなさい。", choices: ["usecols=['a', 'b', 'c']", "select='a, b, c'", "filter_columns=...", "cols=..."], correctIndex: 0, explanation: "**`usecols=[...]`** で **必要列のみ読込** → メモリ ・ I/O 大幅削減。dtype 指定 + parse_dates + na_values を組合せると最強。" },
  { id: "pyd-q29", category: "可視化", difficulty: 3, question: "Matplotlib で **複数サブプロット** を作る関数として最も適切なものを選びなさい。", choices: ["plt.subplots(nrows, ncols)", "plt.figure() 多用", "plt.subplot() 一回", "plt.plot のみ"], correctIndex: 0, explanation: "**`fig, axes = plt.subplots(2, 3, figsize=(12, 6))`** で 2×3 グリッド。axes[i, j] で各 ax アクセス。`fig.tight_layout()` で重なり防止。" },
  { id: "pyd-q30", category: "可視化", difficulty: 3, question: "**Seaborn** の `sns.pairplot()` の用途として最も適切なものを選びなさい。", choices: ["全数値列のペアごと散布図 + 対角に分布(EDA に頻用)", "棒グラフのみ", "時系列専用", "3D 可視化"], correctIndex: 0, explanation: "**pairplot**: DataFrame の数値列同士の散布図行列 + 対角ヒストグラム / KDE。`hue` でクラス分け可。EDA の初手として超頻用。" },
  { id: "pyd-q31", category: "scikit-learn", difficulty: 3, question: "scikit-learn の **`fit_transform()` を学習データに適用、テストデータには `transform()` のみ** 使う理由として最も適切なものを選びなさい。", choices: ["テスト統計量で学習することは Data Leak を起こすため", "速度向上のため", "型変換のため", "メモリ節約のため"], correctIndex: 0, explanation: "**Train データの統計量(平均 ・ 分散)で fit → Test に transform(同じ統計量)** が原則。Test の統計量で fit_transform すると Data Leak。Pipeline + 交差検証で自動的に守る。" },
  { id: "pyd-q32", category: "scikit-learn", difficulty: 3, question: "**Pipeline + GridSearchCV** の利点として最も適切なものを選びなさい。", choices: ["前処理を含めた CV で Data Leak 回避 + ハイパラ自動探索", "速度のみ向上", "Excel 互換", "GPU 利用"], correctIndex: 0, explanation: "**Pipeline**: scaler → model を 1 オブジェクト化。GridSearchCV が各 fold で **scaler.fit を Train のみで適用** → Test に transform。CV 内 Data Leak 防止の鉄則。" },
  { id: "pyd-q33", category: "scikit-learn", difficulty: 3, question: "**ロジスティック回帰** の `solver` で **L1 正則化に対応** する代表的なものを選びなさい。", choices: ["liblinear / saga", "lbfgs", "newton-cg", "newton-cholesky"], correctIndex: 0, explanation: "**L1 対応 solver**: liblinear(小〜中規模)・ saga(大規模)。**lbfgs / newton-cg は L2 / Elastic Net 専用**。マルチクラスで L1 を使うなら saga。" },
  { id: "pyd-q34", category: "Cross Validation", difficulty: 3, question: "**`cross_val_score` のデフォルト CV** として最も適切なものを選びなさい。", choices: ["分類器: StratifiedKFold(k=5)、回帰: KFold(k=5)", "常に LOO", "常に Train/Test 分割", "全データで fit"], correctIndex: 0, explanation: "**scikit-learn の cross_val_score**: 分類 = StratifiedKFold(5)、回帰 = KFold(5)。`cv=int / object / generator` で任意指定。`cv=TimeSeriesSplit()` で時系列。" },
  { id: "pyd-q35", category: "Imbalanced", difficulty: 3, question: "クラス不均衡対策として最も適切な **scikit-learn の方法** を選びなさい。", choices: ["`class_weight='balanced'` or `imbalanced-learn` の SMOTE", "全データを削除", "ラベルを反転", "学習を諦める"], correctIndex: 0, explanation: "**class_weight='balanced'**: クラス頻度の逆数で重み付け。**imbalanced-learn**: SMOTE(オーバー)/ RandomUnderSampler / ADASYN / SMOTETomek。Pipeline 内で使う場合は `imblearn.Pipeline`。" },
  { id: "pyd-q36", category: "評価", difficulty: 3, question: "クラス不均衡の 2 値分類で **Accuracy より重要** な指標として最も適切なものを選びなさい。", choices: ["Precision / Recall / F1 / PR-AUC", "Accuracy のみで十分", "MSE", "R²"], correctIndex: 0, explanation: "**不均衡時の Accuracy は誤解を招く**(99% 多数派なら常に多数派予測で Acc=99%)。**Precision / Recall / F1 / PR-AUC ・ ROC-AUC** で評価。具体的タスクで何が重要かで選ぶ。" },
  { id: "pyd-q37", category: "Tree-based", difficulty: 3, question: "**XGBoost / LightGBM / CatBoost** の特徴として **誤っているもの** を選びなさい。", choices: ["勾配ブースティング", "欠損値を内部で扱う", "並列 ・ GPU 対応", "DL より深いネットワーク"], correctIndex: 3, explanation: "**GBDT**: 浅い決定木の段階的アンサンブル。**LightGBM(Leaf-wise + GOSS)・ CatBoost(カテゴリ自動)・ XGBoost(汎用)** が三大ライブラリ。テーブルデータでは DL より強いことが多い。" },
  { id: "pyd-q38", category: "次元削減", difficulty: 3, question: "**PCA(主成分分析)** を **データの可視化** に使う際の典型的な次元数を選びなさい。", choices: ["2 〜 3 次元", "100 次元", "1 次元", "そのまま"], correctIndex: 0, explanation: "**可視化**: 2 〜 3 次元に PCA / t-SNE / UMAP で削減。**特徴量削減 / 高速化** 目的なら累積寄与率 80-95% を維持する次元数を選ぶ。" },
  { id: "pyd-q39", category: "クラスタリング", difficulty: 3, question: "**K-Means** で **K を選ぶ手法** として **誤っているもの** を選びなさい。", choices: ["エルボー法(Inertia の屈曲点)", "シルエットスコア", "Gap Statistic", "ランダム選択"], correctIndex: 3, explanation: "**K 選定**: エルボー / シルエット / Gap / BIC / Davies-Bouldin。複数指標を併用してドメイン知識で確定。ランダム選択は不可。" },
  { id: "pyd-q40", category: "Time Series", difficulty: 3, question: "Pandas で **時系列リサンプリング**(時間単位を変更)に使うメソッドを選びなさい。", choices: ["`df.resample('D').mean()` (日次に集約)", "`df.groupby('date').mean()`", "`df.pivot()`", "`df.melt()`"], correctIndex: 0, explanation: "**`resample()`**: 時系列 Index に必要。`'D'`(日次)・ `'M'`(月末)・ `'W'`(週)・ `'H'` などのオフセットエイリアスで集約。`asfreq()` で頻度変更のみも可。" },
  { id: "pyd-q41", category: "並列", difficulty: 3, question: "**joblib** の `Parallel` の主用途として最も適切なものを選びなさい。", choices: ["scikit-learn 互換の並列実行(GridSearchCV 等)・ループ並列化", "Web スクレイピング", "DB アクセス", "GUI 構築"], correctIndex: 0, explanation: "**joblib.Parallel**: `Parallel(n_jobs=-1)(delayed(f)(x) for x in data)` で簡単並列化。scikit-learn の `n_jobs` の実体。プロセス並列(loky)/ スレッド並列対応。" },
  { id: "pyd-q42", category: "Performance", difficulty: 3, question: "pandas で **遅い iterrows() の代替** として最も適切なものを選びなさい。", choices: ["ベクトル化 + apply(axis=1) + itertuples", "for ループのみ", "iterrows を必ず使う", "Excel で計算"], correctIndex: 0, explanation: "**速度順**: ベクトル化 > itertuples > apply > iterrows。`iterrows` は Python オブジェクト返却で激遅。**まずベクトル化を試す** が原則、不可能なら `.apply(axis=1)` か `.itertuples()`。" },
  { id: "pyd-q43", category: "Polars", difficulty: 3, question: "**Polars** が pandas より優れる主な点として最も適切なものを選びなさい。", choices: ["Rust 実装 + lazy 評価 + 多コア並列 → 大規模で高速", "Web 連携", "GUI が良い", "Python 2 対応"], correctIndex: 0, explanation: "**Polars**(Rust ベース): pandas より 5-10× 高速、メモリ効率良。**Lazy API**(`.lazy()...collect()`)で最適化。Apache Arrow をネイティブサポート。pandas からの段階移行可能。" },
  { id: "pyd-q44", category: "DuckDB", difficulty: 3, question: "**DuckDB** の特徴として最も適切なものを選びなさい。", choices: ["インプロセス分析 DB(SQLite の OLAP 版)・ Parquet 直接クエリ", "リモート DBMS", "GUI 専用", "ETL ツール"], correctIndex: 0, explanation: "**DuckDB**: シングルファイル / インプロセス分析 DB(C++ 列指向)。pandas / Polars と相互運用 + Parquet / CSV を SQL で直接クエリ。データサイエンティストの新標準ツール。" },
  { id: "pyd-q45", category: "MLflow", difficulty: 3, question: "**MLflow Tracking** で記録できるものとして **誤っているもの** を選びなさい。", choices: ["パラメータ", "メトリクス(数値)", "アーティファクト(モデル / 画像)", "GPU 物理温度"], correctIndex: 3, explanation: "**MLflow Tracking**: params(設定)・ metrics(数値時系列)・ artifacts(任意ファイル)・ tags(検索用)。GPU 物理温度は nvidia-smi / Datadog などインフラ系。" },
  { id: "pyd-q46", category: "テスト", difficulty: 3, question: "**pytest** の代表的フィクスチャの使い方として最も適切なものを選びなさい。", choices: ["`@pytest.fixture` でセットアップ関数を定義 → テスト関数の引数で受取", "全テストにグローバル変数", "テストの実行順序固定", "並列実行不可"], correctIndex: 0, explanation: "**Fixture**: `@pytest.fixture` で定義、テスト関数の引数名で自動注入。scope=session / module / class / function でライフサイクル制御。`conftest.py` で共有。" },
  { id: "pyd-q47", category: "環境", difficulty: 3, question: "Python の **仮想環境管理ツール** として **誤っているもの** を選びなさい。", choices: ["venv / virtualenv", "conda / mamba", "Poetry / uv / Pipenv", "Webpack"], correctIndex: 3, explanation: "**仮想環境**: venv(標準)・ virtualenv ・ conda(科学計算)・ Poetry(モダン)・ uv(Rust 製、爆速)・ Pipenv。**Webpack は JS バンドラ** で別系統。" },
  { id: "pyd-q48", category: "Notebook", difficulty: 3, question: "Jupyter Notebook の **マジックコマンド** で **セルの実行時間を計測** するものを選びなさい。", choices: ["`%timeit` / `%%timeit`", "`%time`", "`%matplotlib`", "`%load`"], correctIndex: 0, explanation: "**`%timeit`** は **行**、**`%%timeit`** は **セル全体** を複数回実行して統計取得。**`%time`** は単発計測。`%matplotlib inline` は plot 描画。" },
  { id: "pyd-q49", category: "コーディング", difficulty: 3, question: "Python の **`with` 文** の主な役割として最も適切なものを選びなさい。", choices: ["コンテキスト管理(リソース確保 / 解放を確実化)", "ループ", "条件分岐", "クラス定義"], correctIndex: 0, explanation: "**`with` 文**: `__enter__` / `__exit__` を持つコンテキストマネージャ。ファイル / DB 接続 / lock / pytorch.no_grad など **try-finally の構文糖**。" },
  { id: "pyd-q50", category: "次のステップ", difficulty: 1, question: "Python データ分析試験合格後の次のステップとして最も適切なものを選びなさい。", choices: ["G 検定 ・ E 資格 ・ DS 検定 ・ Python 3 エンジニア認定実践 など", "ITパスポート", "簿記 3 級", "再受験のみ"], correctIndex: 0, explanation: "**Python データ分析 → G 検定**(AI 全般)/ **E 資格**(DL 数理)/ **DS 検定**(DS / DE / ビジネス力)/ **Python 3 エンジニア実践 ・ データ分析実践試験** など、技術 ・ AI ・ ビジネスの 3 方向に展開可。" },
];
