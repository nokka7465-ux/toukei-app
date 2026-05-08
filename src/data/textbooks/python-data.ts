import type { Textbook } from "@/types/content";

export const pythonDataTextbook: Textbook = {
  levelSlug: "python-data",
  title: "Python 3 エンジニア認定 データ分析試験 教科書",
  intro:
    "**Python 3 エンジニア認定 データ分析試験** は、一般社団法人 **Python エンジニア育成推進協会(PythonED)** が主催する、Python によるデータ分析の **基礎力** を測る CBT 試験です。主教材『Python によるあたらしいデータ分析の教科書』(翔泳社)に準拠し、**Python 文法・NumPy・pandas・Matplotlib・scikit-learn・統計と機械学習の基礎** が出題範囲です。本教科書は、その全範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "試験の全体像と学習プラン",
      overview:
        "試験形式・出題範囲・推奨学習プランを整理し、効率の良い対策の設計図を作ります。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "Python データ分析試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**Python 3 エンジニア認定 データ分析試験** は、Python の文法を一通り押さえた上で、**NumPy / pandas / Matplotlib / scikit-learn の基本的な使い方** と **統計 / 機械学習の基礎** を測る試験です。データサイエンティスト未経験者・初学者の登竜門として位置付けられます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: 一般社団法人 Python エンジニア育成推進協会(PythonED)",
                "**形式**: CBT(全国の試験会場で随時受験可)",
                "**問題数 / 時間**: 40 問 / 60 分(4 択選択式)",
                "**合格基準**: 正答率 70%(28 問以上)",
                "**受験料**: 一般 11,000 円 / 学割 5,500 円(税込・参考)",
                "**主教材**: 『Python によるあたらしいデータ分析の教科書』第 2 版(翔泳社)",
              ],
            },
            { type: "h3", text: "他の Python 系資格との位置付け" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Python 3 エンジニア認定 基礎試験**: 文法のみ(本試験の前段)",
                "**Python 3 エンジニア認定 データ分析試験(本試験)**: 分析ライブラリ + 統計 / ML 基礎",
                "**Python 3 エンジニア認定 実践試験**: 実務寄りの応用",
                "**統計検定 DS 基礎 / DS 発展 / DS エキスパート**: 統計理論寄り(同社サイト[/certs/ds-expert](/certs/ds-expert)参照)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題比重と推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題比重(目安)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Python と環境**(約 10%): 基本文法 / 環境構築 / 仮想環境 / Jupyter",
                "**数学の基礎**(約 15%): 行列・微分・確率の入門",
                "**ライブラリの基礎**(約 30%): NumPy + pandas + Matplotlib",
                "**機械学習の基礎**(約 35%): scikit-learn + 回帰 / 分類 / クラスタリング / 評価",
                "**応用 / 環境**(約 10%): scikit-image・自然言語処理など軽い応用",
              ],
            },
            { type: "h3", text: "60 〜 80 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: Python 文法の復習 + 環境構築 → 第 2 章",
                "**Week 2 〜 3**: NumPy / pandas / Matplotlib の手を動かす演習 → 第 3 〜 5 章",
                "**Week 4**: scikit-learn の基本(fit / predict)→ 第 6 章",
                "**Week 5**: 機械学習の主要モデル + 評価 → 第 7 〜 8 章",
                "**Week 6**: 応用 + 演習 + 過去問 → 第 9 〜 10 章",
              ],
            },
            {
              type: "intuition",
              title: "「読む」より「動かす」が圧倒的に効く",
              body: "選択式とはいえ、コードの **戻り値の shape**(NumPy)・**インデックスの違い**(pandas)・**fit/transform の使い分け**(sklearn)など、実際に動かさないと選択肢の細かな違いが見えません。Jupyter で 1 日 30 分でも触ると合格率が大きく変わります。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Python 文法と環境の復習",
      overview:
        "本試験で前提となる Python の基本文法・データ構造・標準ライブラリを最小限のポイントで整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "型・データ構造・制御フロー",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**基本型**: int, float, str, bool, None",
                "**コレクション**: list, tuple, dict, set",
                "**list と tuple**: list は可変、tuple は不変。tuple は dict のキーになれる",
                "**内包表記**: `[x*2 for x in xs if x > 0]` ─ 高速 + Pythonic",
                "**条件式**: `a if cond else b`(三項演算子)",
                "**例外処理**: try / except / finally / raise",
              ],
            },
            {
              type: "code",
              title: "リスト内包表記とジェネレータ",
              python:
                "# リスト内包表記(全要素をメモリに展開)\nsquares = [x**2 for x in range(1_000_000) if x % 2 == 0]\n\n# ジェネレータ式(遅延評価、メモリ効率良)\nsquares_gen = (x**2 for x in range(1_000_000) if x % 2 == 0)\n\n# sum はジェネレータも受け付ける\ntotal = sum(x**2 for x in range(1_000_000) if x % 2 == 0)\nprint(total)",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "関数・スコープ・ラムダ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**デフォルト引数**: `def f(x, y=10):` 可変オブジェクトをデフォルトにすると共有される罠",
                "**可変長引数**: `*args`(タプル) / `**kwargs`(辞書)",
                "**ラムダ式**: `lambda x: x * 2`。`map / filter / sorted` の key で頻出",
                "**スコープ**: LEGB(Local → Enclosing → Global → Built-in)",
                "**デコレータ**: `@functools.lru_cache` などをよく使う",
              ],
            },
            {
              type: "practical",
              title: "可変デフォルト引数の罠",
              body: "`def append(x, lst=[]):` のように **list をデフォルト引数にする** と、関数オブジェクト生成時に 1 度だけ list が作られ、呼び出し間で共有されます。これは試験でも実務でも頻出のバグの種。**デフォルトは None にして関数内で作る** のが定石です。",
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "環境 ・ パッケージ管理",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**venv**: 標準仮想環境(`python -m venv .venv`)",
                "**pip**: パッケージインストーラ(`pip install pandas`)",
                "**conda**: Anaconda の環境管理。バイナリ依存のあるパッケージで強い",
                "**Jupyter Notebook / JupyterLab**: 対話的分析の標準",
                "**requirements.txt / pyproject.toml**: 依存固定",
              ],
            },
            { type: "h3", text: "代表的なマジックコマンド" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**`%timeit`**: コードの計測",
                "**`%matplotlib inline`**: ノートブック内に図を埋め込む",
                "**`!pip install ...`**: シェルコマンド実行",
                "**`?obj` / `??obj`**: ドキュメント / ソースコード参照",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "NumPy ─ 数値計算の基礎",
      overview:
        "ndarray の基本・ブロードキャスト・主要関数を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "ndarray の作成と属性",
          blocks: [
            {
              type: "code",
              title: "ndarray の基本操作",
              python:
                "import numpy as np\n\na = np.array([[1, 2, 3], [4, 5, 6]])\nprint(a.shape)   # (2, 3)\nprint(a.ndim)    # 2\nprint(a.dtype)   # int64\nprint(a.size)    # 6\n\n# 形状変更\nb = a.reshape(3, 2)\nc = a.flatten()  # 1次元化\n\n# 主要な作成関数\nzeros = np.zeros((2, 3))\nones = np.ones((2, 3))\neye = np.eye(3)              # 単位行列\nrng = np.arange(0, 10, 2)    # [0, 2, 4, 6, 8]\nlin = np.linspace(0, 1, 5)   # [0, 0.25, 0.5, 0.75, 1]",
              runnable: true,
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "インデキシング ・ スライシング ・ ブロードキャスト",
          blocks: [
            {
              type: "code",
              title: "高度なインデキシング",
              python:
                "import numpy as np\n\na = np.arange(20).reshape(4, 5)\n\n# 基本スライス\nprint(a[1:3, 2:4])\n\n# ブール索引\nmask = a > 10\nprint(a[mask])\n\n# Fancy インデキシング\nrows = [0, 2]\ncols = [1, 3]\nprint(a[rows, :][:, cols])\n\n# ブロードキャスト: shape (4,5) と shape (5,) の和\nv = np.array([1, 2, 3, 4, 5])\nprint(a + v)  # 各行に v が足される",
              runnable: true,
            },
            {
              type: "intuition",
              title: "ブロードキャストの規則",
              body: "(1) 形状を **末尾から比較**、(2) 各次元のサイズが **同じ or 1 or 一方が存在しない** なら適合、(3) サイズ 1 の次元は他方の長さに **複製** されたかのように振る舞う。これにより明示的なループなしで高速にベクトル演算が書けます。",
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "主要関数と統計量",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**集約**: `sum, mean, std, var, min, max`(`axis=` で軸指定)",
                "**線形代数**: `np.dot, np.linalg.inv, np.linalg.solve, np.linalg.eig, np.linalg.svd`",
                "**乱数**: `np.random.default_rng()` ─ 新しい標準",
                "**ユニバーサル関数(ufunc)**: `np.exp, np.log, np.sin` ─ 要素ごとに高速",
                "**ソート / 検索**: `np.sort, np.argsort, np.where`",
              ],
            },
            {
              type: "code",
              title: "axis 指定の例",
              python:
                "import numpy as np\n\na = np.array([[1, 2, 3], [4, 5, 6]])\n\n# 全体\nprint(a.sum())          # 21\n# 列方向(各列について行を足す)\nprint(a.sum(axis=0))    # [5, 7, 9]\n# 行方向(各行について列を足す)\nprint(a.sum(axis=1))    # [6, 15]",
              runnable: true,
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "pandas ─ 表形式データの操作",
      overview:
        "Series / DataFrame・読込・選択・集計・結合・欠測処理を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Series と DataFrame",
          blocks: [
            {
              type: "p",
              text: "pandas の中心は **Series(1 次元)** と **DataFrame(2 次元)**。NumPy の ndarray にラベル(インデックス)を付けたもの、というのが第一近似のメンタルモデルです。",
            },
            {
              type: "code",
              title: "DataFrame 基礎",
              python:
                "import pandas as pd\n\ndf = pd.DataFrame({\n    'name': ['Alice', 'Bob', 'Carol'],\n    'age': [25, 30, 35],\n    'city': ['Tokyo', 'Osaka', 'Tokyo'],\n})\n\nprint(df.shape)        # (3, 3)\nprint(df.dtypes)\nprint(df.describe())   # 数値列の要約統計\nprint(df.info())       # 型 / 欠測 / メモリ",
              runnable: true,
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "選択 ・ フィルタ ・ 集計",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**列選択**: `df['col']`(Series) / `df[['c1','c2']]`(DataFrame)",
                "**行選択**: `df.loc[label, col]`(ラベル) / `df.iloc[idx, col]`(整数位置)",
                "**ブール索引**: `df[df['age'] > 30]`",
                "**条件 + 列**: `df.loc[df['city']=='Tokyo', 'name']`",
                "**ソート**: `df.sort_values('age', ascending=False)`",
              ],
            },
            {
              type: "code",
              title: "groupby + agg",
              python:
                "import pandas as pd\n\ndf = pd.DataFrame({\n    'city': ['Tokyo', 'Tokyo', 'Osaka', 'Osaka'],\n    'sales': [100, 200, 150, 250],\n    'orders': [10, 20, 15, 25],\n})\n\n# 単一の集約\nprint(df.groupby('city')['sales'].sum())\n\n# 複数の集約\nprint(df.groupby('city').agg(\n    sales_total=('sales', 'sum'),\n    orders_avg=('orders', 'mean'),\n))",
              runnable: true,
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "結合 ・ 欠測処理 ・ ピボット",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**merge**: SQL の JOIN 相当(`how='inner' / 'left' / 'right' / 'outer'`)",
                "**concat**: 縦 / 横方向の結合",
                "**join**: index を使った merge",
                "**isna / fillna / dropna**: 欠測検出 / 埋め / 削除",
                "**pivot_table**: クロス集計",
                "**melt**: 横長 → 縦長(tidy data 形式へ)",
              ],
            },
            {
              type: "practical",
              title: "tidy data の原則",
              body: "**1 行 = 1 観測、1 列 = 1 変数、1 セル = 1 値**。多くの分析ライブラリ(seaborn / scikit-learn 等)はこの形式を前提にしているため、`melt` で縦長に変換することがしばしば最初の作業になります。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Matplotlib ─ 可視化の基礎",
      overview:
        "Pyplot 風 API・Object 指向 API・主要グラフ・スタイルを整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Figure と Axes",
          blocks: [
            {
              type: "p",
              text: "Matplotlib の図は **Figure(キャンバス)** の上に **Axes(グラフ枠)** が 1 つ以上配置されています。Object 指向 API(`fig, ax = plt.subplots()`)を使うほうが拡張性 / 明確さの面で推奨されます。",
            },
            {
              type: "code",
              title: "subplots を使った標準パターン",
              python:
                "import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\n\nfig, ax = plt.subplots(figsize=(6, 4))\nax.plot(x, np.sin(x), label='sin')\nax.plot(x, np.cos(x), label='cos')\nax.set_xlabel('x')\nax.set_ylabel('y')\nax.set_title('sin / cos')\nax.legend()\nax.grid(True)\nplt.show()",
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "主要グラフ種別",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**plot**: 折れ線(時系列・関数)",
                "**scatter**: 散布図(2 変数関係)",
                "**bar / barh**: 棒グラフ(カテゴリ)",
                "**hist**: ヒストグラム(分布)",
                "**boxplot**: 箱ひげ図",
                "**imshow**: 行列を画像として可視化",
              ],
            },
            { type: "h3", text: "subplot で複数グラフ" },
            {
              type: "code",
              title: "1 行 2 列の subplot",
              python:
                "import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(-3, 3, 100)\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\naxes[0].plot(x, x**2)\naxes[0].set_title('x^2')\naxes[1].plot(x, np.exp(x))\naxes[1].set_title('exp(x)')\nfig.tight_layout()\nplt.show()",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "scikit-learn の基礎",
      overview:
        "Estimator API・前処理・Pipeline・GridSearchCV を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Estimator API ─ fit / predict / transform",
          blocks: [
            {
              type: "p",
              text: "scikit-learn のすべてのモデルは **共通インターフェース** を持ちます: `fit(X, y)` で学習、`predict(X)` で予測、`transform(X)` で前処理結果を取得。これにより **モデルを差し替えてもコードがほぼ同じ** で済む設計です。",
            },
            {
              type: "code",
              title: "代表パターン",
              python:
                "from sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.3, random_state=0)\n\n# 前処理(訓練でfit、両方にtransform)\nscaler = StandardScaler()\nX_tr_s = scaler.fit_transform(X_tr)\nX_te_s = scaler.transform(X_te)\n\n# モデル\nclf = LogisticRegression(max_iter=1000)\nclf.fit(X_tr_s, y_tr)\nprint(clf.score(X_te_s, y_te))",
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Pipeline と GridSearchCV",
          blocks: [
            {
              type: "p",
              text: "**Pipeline** は前処理とモデルを 1 つのオブジェクトにまとめる仕組み。**`Pipeline + GridSearchCV`** の組み合わせは scikit-learn のハイパーパラメータ探索の標準パターンで、**データリークを構造的に防ぎつつ最適化** できます。",
            },
            {
              type: "code",
              title: "Pipeline + GridSearchCV",
              python:
                "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('clf', LogisticRegression(max_iter=1000)),\n])\n\nparam_grid = {'clf__C': [0.1, 1, 10]}\ngrid = GridSearchCV(pipe, param_grid, cv=5)\ngrid.fit(X, y)\nprint(grid.best_params_, grid.best_score_)",
            },
            {
              type: "intuition",
              title: "Pipeline は『前処理 + モデル』を 1 つのモデル扱いにする",
              body: "Pipeline で包むと、CV のフォールドごとに **訓練側だけで前処理を fit** してくれます。これがないと『全データでスケーリング → CV』というデータリークを起こしがちです。`pipe.fit(X, y)` のように **モデル単体と同じインターフェース** で使える設計が秀逸です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "教師あり学習 ─ 回帰と分類",
      overview:
        "回帰 / 分類の主要モデルと、scikit-learn での代表的な使い方を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "回帰の主要モデル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**LinearRegression**: 通常最小二乗",
                "**Ridge / Lasso / ElasticNet**: 正則化付き線形",
                "**DecisionTreeRegressor**: 決定木回帰",
                "**RandomForestRegressor**: 決定木のバギング",
                "**GradientBoostingRegressor / XGBoost / LightGBM**: 勾配ブースティング",
                "**SVR**: サポートベクター回帰(カーネル)",
                "**KNeighborsRegressor**: k-NN 回帰",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "分類の主要モデル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**LogisticRegression**: 線形分類器",
                "**KNeighborsClassifier**: k-NN",
                "**DecisionTreeClassifier**: 決定木",
                "**RandomForestClassifier**: ランダムフォレスト",
                "**SVC**: サポートベクターマシン",
                "**GaussianNB / MultinomialNB**: ナイーブベイズ",
                "**MLPClassifier**: 多層パーセプトロン",
              ],
            },
            {
              type: "figure",
              kind: "svm-margin",
              caption: "SVM のマージン最大化",
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "教師なし学習とモデル評価",
      overview:
        "クラスタリング・次元削減と、評価指標 / 交差検証を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "クラスタリング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**KMeans**: 凸クラスタ前提、k を事前に指定",
                "**AgglomerativeClustering**: 階層的クラスタリング",
                "**DBSCAN**: 密度ベース。任意形状 + 外れ値検出",
                "**GaussianMixture**: 混合ガウス分布",
              ],
            },
            {
              type: "figure",
              kind: "k-means-clusters",
              caption: "k-means の収束。3 クラスタの中心更新",
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "次元削減 ・ 多様体学習",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**PCA**: 主成分分析(分散最大化)",
                "**TruncatedSVD**: スパース行列向け SVD",
                "**TSNE**: 非線形次元削減(可視化)",
                "**UMAP**: TSNE 後継。大規模で高速",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "評価指標",
          blocks: [
            { type: "h3", text: "分類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**accuracy_score**",
                "**precision_score / recall_score / f1_score**",
                "**roc_auc_score / roc_curve**",
                "**confusion_matrix**",
                "**classification_report**(まとめて出力)",
              ],
            },
            { type: "h3", text: "回帰" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**mean_squared_error / mean_absolute_error**",
                "**r2_score**",
              ],
            },
            {
              type: "code",
              title: "cross_val_score でモデル評価",
              python:
                "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nclf = RandomForestClassifier(random_state=0)\nscores = cross_val_score(clf, X, y, cv=5, scoring='f1_macro')\nprint(scores)\nprint('mean:', scores.mean())",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "数学の基礎(行列・微分・確率)",
      overview:
        "出題範囲に含まれる『数学の基礎』の最低限を、機械学習との接続を意識して整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "ベクトルと行列",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ベクトル**: 1 次元配列。長さ(ノルム)・内積",
                "**行列**: 2 次元配列。積・転置・逆行列",
                "**ノルム**: $L_2$ ノルム = $\\sqrt{\\sum x_i^2}$、$L_1$ ノルム = $\\sum |x_i|$",
                "**内積**: $\\mathbf{a} \\cdot \\mathbf{b} = \\sum a_i b_i$",
                "**固有値 / 固有ベクトル**: $A\\mathbf{v} = \\lambda \\mathbf{v}$",
              ],
            },
            {
              type: "figure",
              kind: "eigenvectors",
              caption: "固有ベクトルは線形変換で方向が変わらない方向",
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "微分と勾配降下法",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**微分**: 関数の傾き $\\frac{df}{dx}$",
                "**偏微分**: 多変数で 1 つの変数だけ動かしたときの傾き",
                "**勾配**: 偏微分のベクトル $\\nabla f$",
                "**勾配降下法**: $\\theta \\leftarrow \\theta - \\alpha \\nabla L(\\theta)$",
                "**連鎖律(Chain Rule)**: $(f \\circ g)' = f'(g) \\cdot g'$",
              ],
            },
            {
              type: "figure",
              kind: "gradient-descent-paths",
              caption: "勾配降下法: 学習率と経路",
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "確率と分布の最低限",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**期待値 / 分散**: $E[X]$ / $V[X]$",
                "**正規分布**: $X \\sim N(\\mu, \\sigma^2)$",
                "**条件付き確率 / ベイズの定理**",
                "**独立性**: $P(A \\cap B) = P(A) P(B)$",
              ],
            },
            {
              type: "figure",
              kind: "normal-curve",
              caption: "正規分布の標準形",
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "応用と試験対策の総まとめ",
      overview:
        "scikit-image / 自然言語処理の入口と、試験当日のチェックリストを整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "scikit-image による画像処理の入口",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**読込 / 保存**: `io.imread, io.imsave`",
                "**カラースペース**: `color.rgb2gray, color.rgb2hsv`",
                "**フィルタ**: `filters.gaussian, filters.sobel`(エッジ)",
                "**閾値処理**: `filters.threshold_otsu`",
                "**特徴抽出**: `feature.canny`(エッジ検出)",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "自然言語処理の入口",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**前処理**: トークン化、ストップワード除去、ステミング / 見出し語化",
                "**Bag of Words / TF-IDF**: 古典的な特徴量化",
                "**`CountVectorizer / TfidfVectorizer`**: scikit-learn の標準",
                "**Word Embedding**: word2vec / GloVe / fastText",
                "**最近の主流**: BERT / GPT などの Transformer 系(本試験の範囲外だが概念は把握を)",
              ],
            },
          ],
        },
        {
          id: "ch10-sec3",
          number: "10.3",
          title: "試験対策の最終チェックと当日のコツ",
          blocks: [
            { type: "h3", text: "範囲別チェックリスト" },
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: 内包表記 / lambda / 可変デフォルト引数の罠",
                "**第 3 章**: ndarray の shape / axis / ブロードキャストの 3 規則",
                "**第 4 章**: loc vs iloc / merge の how / groupby + agg",
                "**第 5 章**: subplots と Axes ベース API",
                "**第 6 章**: fit / predict / transform の使い分け、Pipeline + GridSearchCV",
                "**第 7-8 章**: 主要モデルの種類と評価指標(分類 / 回帰)",
                "**第 9 章**: 内積・偏微分・勾配・正規分布",
                "**第 10 章**: scikit-image / NLP の最低限",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**40 問 / 60 分** = 1 問 1.5 分。コード片の読解は速さが命",
                "**選択肢のシグネチャを見比べる**: `fit_transform vs transform`、`loc vs iloc` などは混同しやすい",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
                "**前日に Jupyter で 30 分復習**: 主要 API のシグネチャを実機で確認",
              ],
            },
            {
              type: "practical",
              title: "合格後のステップアップ",
              body: "本資格 → **統計検定 DS 発展 / DS エキスパート**(統計理論寄り)、**G 検定**(AI 全般)、**E 資格**(深層学習実装)へ進むのが王道。本サイトの[/textbook](/textbook)から各検定の教科書にアクセスできます。",
            },
          ],
        },
      ],
    },
  ],
};
