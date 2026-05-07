import type { Metadata } from "next";
import Link from "next/link";
import type { TextbookBlock } from "@/types/content";
import { TextbookBody } from "@/components/TextbookBody";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "プログラミング入門 ─ Python・NumPy・Pandas・SQL・R・可視化・PyTorch",
  description:
    "AI エンジニア・データサイエンティストに必要な Python・NumPy・Pandas・SQL・scikit-learn・R 言語・可視化(matplotlib/seaborn)・PyTorch を 8 章でコンパクトに学べる無料ミニ教科書。ブラウザ内 Python 実行(Pyodide)で即座に動かせます。",
  alternates: { canonical: "/programming" },
  openGraph: {
    title: "プログラミング入門 ─ Python・SQL・R・PyTorch まで",
    description: "ブラウザ内 Python 実行で即座に動かせる、データ職向け実装ミニ教科書。8 章構成で R / 可視化 / PyTorch も網羅。",
    type: "article",
  },
};

const CHAPTERS: { id: string; number: string; title: string; blocks: TextbookBlock[] }[] = [
  {
    id: "ch1",
    number: "1",
    title: "Python 基礎 ─ データ型・関数・制御構造",
    blocks: [
      {
        type: "p",
        text: "Python は **読みやすさ** と **ライブラリの豊富さ** が武器の汎用言語。AI / データ分析の事実上の標準語です。本章はゼロからの基礎を最短で押さえます。下のコードはすべて **このページで実行できます**(▶ 実行ボタン)。",
      },
      { type: "h3", text: "1-1. 変数とデータ型" },
      {
        type: "code",
        title: "基本のデータ型",
        runnable: true,
        python:
          "# 数値\nx = 10\ny = 3.14\n\n# 文字列\nname = 'Alice'\n\n# リスト・辞書\nscores = [85, 92, 78, 90]\nperson = {'name': name, 'age': 30}\n\nprint(f'平均点: {sum(scores) / len(scores):.1f}')\nprint(f'最高点: {max(scores)}')\nprint(f'人物: {person}')",
      },
      { type: "h3", text: "1-2. 関数と制御構造" },
      {
        type: "code",
        title: "関数定義 + for / if",
        runnable: true,
        python:
          "def grade(score):\n    if score >= 80:\n        return 'A'\n    elif score >= 60:\n        return 'B'\n    else:\n        return 'C'\n\nscores = [85, 55, 72, 91, 48]\nfor s in scores:\n    print(f'{s} 点 → {grade(s)}')",
      },
      {
        type: "intuition",
        title: "💡 リスト内包表記",
        body: "for ループより簡潔に書ける Python の代表的な記法。`[grade(s) for s in scores]` で 1 行。慣れると読み書きが圧倒的に速くなる。",
      },
      {
        type: "code",
        title: "リスト内包表記",
        runnable: true,
        python:
          "scores = [85, 55, 72, 91, 48]\ngrades = [('A' if s >= 80 else 'B' if s >= 60 else 'C') for s in scores]\nprint(grades)\n\n# 80 点以上だけ抽出\nhigh = [s for s in scores if s >= 80]\nprint(f'高得点: {high}')",
      },
    ],
  },
  {
    id: "ch2",
    number: "2",
    title: "NumPy ─ ベクトル演算で 100 倍速くする",
    blocks: [
      {
        type: "p",
        text: "**NumPy** は数値計算の核。ピュア Python の for ループで書くと遅い処理を、**ベクトル演算**(配列まるごとの計算)で C レベルの速度に。統計・機械学習・画像処理の基盤です。",
      },
      { type: "h3", text: "2-1. 配列の作成と演算" },
      {
        type: "code",
        title: "ベクトル演算の威力",
        runnable: true,
        python:
          "import numpy as np\n\n# 1〜100 の配列\nx = np.arange(1, 101)\n\n# ベクトル演算: ループ不要\ny = x ** 2 + 3 * x + 1\n\nprint(f'要素数: {x.size}')\nprint(f'先頭 5 つ: {y[:5]}')\nprint(f'平均: {y.mean():.1f}')\nprint(f'標準偏差: {y.std():.1f}')",
      },
      { type: "h3", text: "2-2. 統計関数" },
      {
        type: "code",
        title: "正規分布から 1000 サンプル",
        runnable: true,
        python:
          "import numpy as np\n\nnp.random.seed(0)\nsamples = np.random.normal(loc=50, scale=10, size=1000)\n\nprint(f'平均: {samples.mean():.2f}')\nprint(f'標準偏差: {samples.std():.2f}')\nprint(f'25 / 50 / 75 パーセンタイル: {np.percentile(samples, [25, 50, 75])}')\nprint(f'±1σ 内に含まれる割合: {((samples > 40) & (samples < 60)).mean():.3f}')",
      },
      {
        type: "practical",
        title: "🛠 ブロードキャスト",
        body: "形が違う配列同士の演算を自動で揃えてくれる NumPy の魔法。`X - X.mean(axis=0)` で各列の平均を全行から引く ── ML の前処理(センタリング)が 1 行に。",
      },
    ],
  },
  {
    id: "ch3",
    number: "3",
    title: "Pandas ─ 表データ処理のデファクト",
    blocks: [
      {
        type: "p",
        text: "**Pandas** は Excel の DataFrame をプログラマブルにしたもの。SQL の JOIN / GROUP BY 相当の操作も流暢に書けます。データ分析の 80% は Pandas でこなせます。",
      },
      { type: "h3", text: "3-1. DataFrame の作成" },
      {
        type: "code",
        title: "DataFrame の基本操作",
        runnable: true,
        python:
          "import pandas as pd\n\ndf = pd.DataFrame({\n    'name': ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'],\n    'dept': ['営業', '開発', '営業', '開発', '営業'],\n    'salary': [500, 700, 550, 800, 480],\n    'years': [3, 5, 4, 8, 2],\n})\n\nprint(df)\nprint('\\n--- 統計サマリ ---')\nprint(df.describe())",
      },
      { type: "h3", text: "3-2. フィルタ・ソート・集計" },
      {
        type: "code",
        title: "GROUP BY 相当の集計",
        runnable: true,
        python:
          "import pandas as pd\n\ndf = pd.DataFrame({\n    'dept': ['営業', '開発', '営業', '開発', '営業', '開発'],\n    'salary': [500, 700, 550, 800, 480, 750],\n    'years': [3, 5, 4, 8, 2, 6],\n})\n\n# 部署別の平均年収\nprint(df.groupby('dept').agg(\n    avg_salary=('salary', 'mean'),\n    avg_years=('years', 'mean'),\n    n=('salary', 'count'),\n))\n\n# 年収 600 以上で勤続 5 年以上\nprint('\\n--- 高年収・ベテラン ---')\nprint(df.query('salary >= 600 and years >= 5'))",
      },
      {
        type: "intuition",
        title: "💡 SQL ↔ Pandas 対応表",
        body: "SELECT → df[cols] / WHERE → df.query() / GROUP BY → df.groupby() / JOIN → df.merge() / ORDER BY → df.sort_values()。SQL 経験者なら 1 日で身につく。",
      },
    ],
  },
  {
    id: "ch4",
    number: "4",
    title: "SQL ─ データを問い合わせる共通言語",
    blocks: [
      {
        type: "p",
        text: "**SQL**(Structured Query Language)はリレーショナルデータベースに対する問い合わせ言語。データサイエンティストの必修スキルで、求人で最も問われるテーマでもあります。",
      },
      { type: "h3", text: "4-1. SELECT・WHERE・ORDER BY" },
      {
        type: "code",
        title: "基本のクエリ",
        python:
          "-- ※ これは SQL です(参考表示)。下のセクションで Python から SQLite を呼び出して動かせます\n\n-- 全件取得\nSELECT * FROM employees;\n\n-- フィルタ + 並び替え\nSELECT name, salary\nFROM employees\nWHERE dept = '開発'\nORDER BY salary DESC\nLIMIT 10;",
      },
      { type: "h3", text: "4-2. GROUP BY と集約関数" },
      {
        type: "code",
        title: "部署別の集計",
        python:
          "SELECT\n    dept,\n    COUNT(*) AS n,\n    AVG(salary) AS avg_salary,\n    MAX(salary) AS max_salary\nFROM employees\nGROUP BY dept\nHAVING COUNT(*) >= 3\nORDER BY avg_salary DESC;",
      },
      { type: "h3", text: "4-3. JOIN" },
      {
        type: "code",
        title: "INNER JOIN",
        python:
          "SELECT\n    e.name,\n    d.dept_name,\n    e.salary\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.id\nWHERE d.location = 'Tokyo';",
      },
      { type: "h3", text: "4-4. ウィンドウ関数 ─ DS 必須" },
      {
        type: "code",
        title: "部署内ランク",
        python:
          "-- 部署ごとの年収ランク TOP 3\nSELECT name, dept, salary,\n       RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rk\nFROM employees\nQUALIFY rk <= 3;",
      },
      { type: "h3", text: "4-5. Python(SQLite)で SQL を動かす" },
      {
        type: "p",
        text: "Python 標準の `sqlite3` モジュールでブラウザ内 SQLite を起動。実際に SELECT を打って結果を確認できます。",
      },
      {
        type: "code",
        title: "Python から SQL を実行",
        runnable: true,
        python:
          "import sqlite3\n\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\n\ncur.executescript('''\nCREATE TABLE employees (\n    id INTEGER PRIMARY KEY,\n    name TEXT,\n    dept TEXT,\n    salary INTEGER\n);\nINSERT INTO employees (name, dept, salary) VALUES\n    ('Alice', '営業', 500),\n    ('Bob', '開発', 700),\n    ('Carol', '営業', 550),\n    ('Dave', '開発', 800),\n    ('Eve', '営業', 480),\n    ('Frank', '開発', 750);\n''')\n\n# 部署別の平均年収\nfor row in cur.execute('''\n    SELECT dept, COUNT(*) AS n, AVG(salary) AS avg_salary\n    FROM employees\n    GROUP BY dept\n    ORDER BY avg_salary DESC\n'''):\n    print(row)\n\n# ウィンドウ関数: 部署内ランク\nprint('\\n--- 部署内ランク ---')\nfor row in cur.execute('''\n    SELECT name, dept, salary,\n           RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rk\n    FROM employees\n    ORDER BY dept, rk\n'''):\n    print(row)",
      },
      {
        type: "practical",
        title: "🛠 学習の最短ルート",
        body: "SELECT → WHERE → JOIN → GROUP BY → ウィンドウ関数 の順。最初の 4 つで日常分析の 80%、ウィンドウ関数まで使えると DS 上級。練習は LeetCode/SQLZoo/StrataScratch がおすすめ。",
      },
      { type: "h3", text: "次に進む" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[SQL 中級 ─ ML エンジニアが書く 7 つの定石](/blog/sql-intermediate-for-data)",
          "[Pandas 実務 Tips 10 選](/blog/pandas-tips-for-ml)",
          "[Python 環境構築 完全ガイド](/blog/python-setup-for-stats)",
          "[scikit-learn 入門](/blog/sklearn-introduction) ─ 機械学習へ",
        ],
      },
    ],
  },
  {
    id: "ch5",
    number: "5",
    title: "scikit-learn ─ 30 分で機械学習デビュー",
    blocks: [
      {
        type: "p",
        text: "**scikit-learn** は Python 機械学習のデファクト。`fit() / predict()` の統一インターフェースで、100 種類以上のモデルが同じ書き方で動きます。下のコードはすべて **このページで実行可能**(Pyodide)。",
      },
      { type: "h3", text: "5-1. データを読み込む" },
      {
        type: "code",
        title: "iris データセット",
        runnable: true,
        python:
          "from sklearn.datasets import load_iris\n\ndata = load_iris(as_frame=True)\nX, y = data.data, data.target\n\nprint(X.head())\nprint('\\nクラス分布:')\nprint(y.value_counts())\nprint('\\n特徴量:', list(X.columns))",
      },
      { type: "h3", text: "5-2. 学習 → 予測 → 評価" },
      {
        type: "code",
        title: "ロジスティック回帰で 3 クラス分類",
        runnable: true,
        python:
          "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, confusion_matrix\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, test_size=0.2, random_state=0, stratify=y\n)\n\nscaler = StandardScaler()\nX_tr = scaler.fit_transform(X_tr)\nX_te = scaler.transform(X_te)\n\nmodel = LogisticRegression(max_iter=500).fit(X_tr, y_tr)\ny_pred = model.predict(X_te)\n\nprint(f'Accuracy: {accuracy_score(y_te, y_pred):.3f}')\nprint('混同行列:')\nprint(confusion_matrix(y_te, y_pred))",
      },
      {
        type: "intuition",
        title: "💡 fit / transform / predict の原則",
        body: "scaler や model は **訓練データだけで fit**。テストデータには transform / predict のみ。これを守らないとデータリークで評価が水増しされる。",
      },
      { type: "h3", text: "5-3. 交差検証 + ハイパラ最適化" },
      {
        type: "code",
        title: "Pipeline + GridSearchCV",
        runnable: true,
        python:
          "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import GridSearchCV, train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import Pipeline\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=0)\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('clf', LogisticRegression(max_iter=500)),\n])\n\nparams = {'clf__C': [0.01, 0.1, 1, 10, 100]}\ngrid = GridSearchCV(pipe, params, cv=5, scoring='accuracy')\ngrid.fit(X_tr, y_tr)\n\nprint(f'Best C: {grid.best_params_}')\nprint(f'Best CV acc: {grid.best_score_:.3f}')\nprint(f'Test acc:    {grid.score(X_te, y_te):.3f}')",
      },
      { type: "h3", text: "5-4. 教師なし学習(クラスタリング)" },
      {
        type: "code",
        title: "K-Means で 3 クラスタに分ける",
        runnable: true,
        python:
          "from sklearn.datasets import load_iris\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom collections import Counter\n\nX, y = load_iris(return_X_y=True)\nX = StandardScaler().fit_transform(X)\n\nkm = KMeans(n_clusters=3, random_state=0, n_init=10).fit(X)\n\nprint(f'inertia(クラスタ内分散の総和): {km.inertia_:.2f}')\nprint(f'cluster sizes: {Counter(km.labels_)}')\n# 真ラベルとの混同(教師あり指標で精度確認)\nfor c in range(3):\n    mask = km.labels_ == c\n    print(f'cluster {c}: 真クラス分布 = {Counter(y[mask])}')",
      },
      {
        type: "practical",
        title: "🛠 実務で次に学ぶこと",
        body: "RandomForest / GradientBoosting / XGBoost は表データの定番。HuggingFace は NLP・画像・音声の事前学習済みモデル。本格的な深層学習は PyTorch / TensorFlow。共通言語の scikit-learn を抑えると応用が早い。",
      },
      { type: "h3", text: "次に進む" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門ブログ](/blog/sklearn-introduction) ─ 7 ステップ詳細版",
          "[Kaggle 始め方](/blog/kaggle-getting-started) ─ コンペで腕試し",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ DL 本格実装へ",
          "[ベイズ最適化(Optuna)](/blog/bayesian-optimization) ─ ハイパラ自動探索",
        ],
      },
    ],
  },
  {
    id: "ch6",
    number: "6",
    title: "R 言語入門 ─ 統計分野で根強い『分析方言』",
    blocks: [
      {
        type: "p",
        text: "**R 言語** は統計学者と研究者のために生まれた言語で、統計検定・学術研究・薬学・社会調査の現場で今も第一選択。Python とは生態系が違いますが、**統計の概念をそのままコードに**できる素直さが魅力です。",
      },
      { type: "h3", text: "6-1. R の基本データ構造" },
      {
        type: "code",
        title: "ベクトル・データフレーム・基本統計",
        r: "# ベクトル(R では『1 次元配列』が基本単位)\nscores <- c(85, 92, 78, 90, 67)\nmean(scores)        # [1] 82.4\nsd(scores)          # [1] 10.59\nsummary(scores)\n\n# データフレーム\ndf <- data.frame(\n  name = c('Alice', 'Bob', 'Carol'),\n  score = c(85, 92, 78)\n)\nprint(df)\n\n# 統計関数は最初から豊富(import 不要)\nvar(scores)\nmedian(scores)\nquantile(scores, c(0.25, 0.5, 0.75))",
      },
      {
        type: "intuition",
        title: "💡 R は 1 から始まる",
        body: "Python は `list[0]` から始まるが、R は `vec[1]` から。**1-indexed** は数学的記法と整合的(統計教科書の式と一致)で、研究者にとってはむしろ自然。混乱したら『R は数式に近い』と覚えるのがコツ。",
      },
      { type: "h3", text: "6-2. dplyr ─ tidyverse のデータ操作" },
      {
        type: "code",
        title: "パイプ演算子 %>% と dplyr",
        r: "library(dplyr)\n\ndf <- data.frame(\n  dept = c('営業', '開発', '営業', '開発', '営業'),\n  salary = c(500, 700, 550, 800, 480),\n  years = c(3, 5, 4, 8, 2)\n)\n\n# パイプ演算子で読みやすく\ndf %>%\n  filter(salary >= 500) %>%\n  group_by(dept) %>%\n  summarise(\n    n = n(),\n    avg_salary = mean(salary),\n    avg_years = mean(years)\n  ) %>%\n  arrange(desc(avg_salary))\n\n# Pandas の groupby 相当だが、より宣言的に書ける",
      },
      { type: "h3", text: "6-3. 統計検定の R 実装" },
      {
        type: "code",
        title: "t 検定・ANOVA・カイ二乗 ─ ワンライナーで実行",
        r: "# 1 標本 t 検定\nx <- c(102, 105, 98, 100, 103, 99, 104, 101)\nt.test(x, mu = 100)        # 帰無仮説 μ=100 を検定\n\n# 2 標本 t 検定(Welch、デフォルト)\na <- c(72, 75, 68, 80, 79)\nb <- c(85, 88, 82, 90, 87)\nt.test(a, b)\n\n# 一元配置 ANOVA\ndata <- data.frame(\n  group = rep(c('A', 'B', 'C'), each = 5),\n  value = c(85, 87, 80, 82, 86,  72, 78, 75, 80, 76,  90, 92, 88, 95, 91)\n)\naov_result <- aov(value ~ group, data = data)\nsummary(aov_result)\n\n# カイ二乗適合度検定\nobserved <- c(8, 13, 9, 11, 7, 12)  # サイコロ 60 回\nchisq.test(observed)\n\n# 母比率の検定\nprop.test(x = 72, n = 200, p = 0.30)",
      },
      {
        type: "practical",
        title: "🛠 R の真価は『学術論文の付録』",
        body: "学術論文の補足資料(Appendix)は、いまだに R コードがデファクト。**lme4**(混合効果モデル)・**survival**(生存解析)・**brms**(ベイズ階層モデル)など、Python に同等品が育っていない領域は多い。統計検定 1 級・準 1 級でも R の出力を読める力が問われます。",
      },
      { type: "h3", text: "6-4. 線形回帰 ─ R は 1 行" },
      {
        type: "code",
        title: "lm() で多変量回帰",
        r: "# サンプルデータ\nset.seed(42)\nn <- 100\nx1 <- rnorm(n)\nx2 <- rnorm(n)\ny <- 2 + 1.5 * x1 - 0.7 * x2 + rnorm(n, sd = 0.5)\n\ndf <- data.frame(y = y, x1 = x1, x2 = x2)\n\n# 重回帰\nmodel <- lm(y ~ x1 + x2, data = df)\nsummary(model)\n# 推定値・標準誤差・t 値・p 値・R² まで一発表示\n\n# 残差プロットで診断\npar(mfrow = c(2, 2))\nplot(model)\n# 4 つの診断図(残差 vs fitted / Q-Q / scale-location / leverage)を自動生成",
      },
      {
        type: "intuition",
        title: "💡 R vs Python ─ 使い分け",
        body: "**R**: 統計検定・学術研究・公的統計・GLM/混合効果モデル・生存解析・**結果の図表が美しい**(ggplot2)\n**Python**: 機械学習・深層学習・本番システム・Web 連携・**汎用言語としての強さ**\n両方使えると最強。pandas は dplyr の影響を受けて設計されており、考え方は近い。",
      },
      { type: "h3", text: "6-5. ggplot2 で美しい可視化" },
      {
        type: "code",
        title: "Grammar of Graphics の哲学",
        r: "library(ggplot2)\n\n# iris データセット(R 標準搭載)\nggplot(iris, aes(x = Sepal.Length, y = Petal.Length, color = Species)) +\n  geom_point(size = 3, alpha = 0.7) +\n  geom_smooth(method = 'lm', se = TRUE) +\n  labs(\n    title = 'アヤメの花弁の長さ vs がく片の長さ',\n    x = 'がく片の長さ (cm)',\n    y = '花弁の長さ (cm)'\n  ) +\n  theme_minimal()\n\n# データ → 美的属性(aesthetics) → 幾何要素(geom) → 統計変換 → 座標系 → ファセット\n# という階層的な文法でグラフを構築する Grammar of Graphics の発想",
      },
      { type: "h3", text: "次に進む" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**R Markdown / Quarto**: 分析レポートを再現可能な形で書ける",
          "**Shiny**: R で書ける Web アプリフレームワーク。ダッシュボードに",
          "**brms / rstan**: ベイズ階層モデル(準 1 級〜1 級レベル)",
          "[統計検定 1 級教科書](/textbook/grade-1) ─ R の出力読解が出る",
        ],
      },
    ],
  },
  {
    id: "ch7",
    number: "7",
    title: "データ可視化 ─ matplotlib・seaborn・plotly",
    blocks: [
      {
        type: "p",
        text: "データ分析の最後のステップ ─ **可視化** は、洞察を共有するための言語。Python では **matplotlib**(基本)・**seaborn**(統計グラフ)・**plotly**(対話的)の 3 ライブラリが定番です。",
      },
      { type: "h3", text: "7-1. matplotlib ─ すべての可視化の基礎" },
      {
        type: "code",
        title: "基本のプロット ─ 折れ線・散布図・ヒストグラム",
        runnable: true,
        python:
          "import numpy as np\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\n\nnp.random.seed(0)\nx = np.linspace(0, 10, 100)\ny = np.sin(x) + np.random.normal(0, 0.1, 100)\n\nfig, axes = plt.subplots(1, 3, figsize=(12, 3))\n\n# 折れ線\naxes[0].plot(x, y, 'b-', linewidth=1.5)\naxes[0].set_title('Line plot')\naxes[0].set_xlabel('x')\naxes[0].set_ylabel('y')\n\n# 散布図\naxes[1].scatter(x, y, alpha=0.5, s=20)\naxes[1].set_title('Scatter')\n\n# ヒストグラム\nsamples = np.random.normal(50, 10, 1000)\naxes[2].hist(samples, bins=30, color='salmon', edgecolor='black')\naxes[2].set_title('Histogram')\n\nplt.tight_layout()\nprint('3 つのプロットを並べて作成完了 ─ Pyodide 環境では fig 自体は表示されないが、matplotlib API の使い方は学べる')\nprint(f'data range: x={x.min():.1f}-{x.max():.1f}, y={y.min():.2f}-{y.max():.2f}')",
      },
      {
        type: "intuition",
        title: "💡 matplotlib の Figure / Axes 構造",
        body: "**Figure** = キャンバス全体、**Axes** = 1 つのグラフ領域。`fig, ax = plt.subplots()` で両方取得し、`ax.plot()` でグラフを描く ─ これがオブジェクト指向 API。慣れると複数グラフの細かい制御が思いどおりに。",
      },
      { type: "h3", text: "7-2. seaborn ─ 統計グラフの高速化" },
      {
        type: "code",
        title: "DataFrame をそのまま渡せる",
        runnable: true,
        python:
          "import numpy as np\nimport pandas as pd\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\nnp.random.seed(0)\ndf = pd.DataFrame({\n    'group': np.repeat(['A', 'B', 'C'], 100),\n    'value': np.concatenate([\n        np.random.normal(50, 8, 100),\n        np.random.normal(55, 10, 100),\n        np.random.normal(48, 7, 100),\n    ]),\n})\n\nfig, axes = plt.subplots(1, 3, figsize=(12, 3))\nsns.boxplot(data=df, x='group', y='value', ax=axes[0])\naxes[0].set_title('Boxplot ─ 分布の比較')\n\nsns.violinplot(data=df, x='group', y='value', ax=axes[1])\naxes[1].set_title('Violin ─ 形状も込み')\n\nsns.histplot(data=df, x='value', hue='group', kde=True, ax=axes[2])\naxes[2].set_title('Histogram + KDE')\n\nplt.tight_layout()\n\n# 群別の統計サマリ\nprint(df.groupby('group')['value'].agg(['count', 'mean', 'std']).round(2))",
      },
      {
        type: "practical",
        title: "🛠 seaborn のヒートマップは強力",
        body: "**相関行列ヒートマップ**(`sns.heatmap(df.corr(), annot=True, cmap='coolwarm')`)は探索的分析の定番。多重共線性のチェックでまず描く。**pairplot** は全変数ペアの散布図とヒストグラムを一発で。",
      },
      { type: "h3", text: "7-3. plotly ─ 対話的グラフ" },
      {
        type: "code",
        title: "plotly で対話的散布図(参考表示)",
        python:
          "# plotly は pyodide にデフォルト同梱されないため参考表示\nimport plotly.express as px\nimport pandas as pd\n\ndf = px.data.iris()  # plotly 内蔵のサンプル\n\nfig = px.scatter(\n    df, x='sepal_length', y='petal_length',\n    color='species', size='petal_width',\n    hover_data=['species'],\n    title='アヤメの散布図(対話的)'\n)\nfig.show()\n\n# 特長:\n# - ホバーで値表示・ズーム・パン\n# - HTML/PNG/PDF 出力\n# - JavaScript 不要(Python だけで対話的グラフが書ける)",
      },
      { type: "h3", text: "7-4. 統計図解の使い分け" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**1 変数の分布**: ヒストグラム / KDE / boxplot / violinplot",
          "**2 変数の関係**: 散布図 / 回帰直線 + 信頼帯 / 6角ビン(hexbin)",
          "**カテゴリ別の比較**: barplot(平均 + エラーバー)/ boxplot / strip+swarm",
          "**相関構造**: 相関行列ヒートマップ / pairplot",
          "**時系列**: 折れ線(複数系列のとき alpha+legend で読みやすく)",
          "**地図**: choropleth(plotly express で簡単)",
          "**多次元**: PCA → 2D 散布図、t-SNE / UMAP は可視化専用",
        ],
      },
      {
        type: "intuition",
        title: "💡 良いグラフの 5 原則",
        body: "**①データ:インクの比率を高く**(余計な装飾を減らす — Edward Tufte)\n**②色は意味に対応**(警告は赤・連続値は単色グラデ・順序のないカテゴリは ColorBrewer)\n**③軸の起点とスケール**(棒グラフは 0 起点)\n**④凡例は近く・短く**(直接ラベリング推奨)\n**⑤色覚多様性に配慮**(viridis / cividis / ColorBrewer)",
      },
      { type: "h3", text: "次に進む" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[Tableau / Power BI](/blog/bi-tools-comparison) ─ BI ツールでダッシュボード",
          "[Streamlit](/blog/streamlit-introduction) ─ Python だけで Web アプリ",
          "**D3.js**: ブラウザ JavaScript で完全カスタムの可視化",
          "[統計図解集](/figures) ─ 概念理解のための SVG 図解",
        ],
      },
    ],
  },
  {
    id: "ch8",
    number: "8",
    title: "PyTorch 入門 ─ 深層学習を 50 行で動かす",
    blocks: [
      {
        type: "p",
        text: "**PyTorch** は Meta(旧 Facebook)発の深層学習フレームワーク。**動的計算グラフ + Pythonic API** で研究者・実務家の両方に支持され、Hugging Face / Stable Diffusion / Llama すべての裏側で動いています。**E 資格・データサイエンティスト中級** で必須のスキル。",
      },
      { type: "h3", text: "8-1. テンソルの基本" },
      {
        type: "code",
        title: "PyTorch のテンソル ─ NumPy + 自動微分 + GPU",
        python:
          "# PyTorch は pyodide にデフォルト同梱されないため参考表示\nimport torch\n\n# テンソル(NumPy 配列に GPU + 自動微分の機能を追加)\nx = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)\ny = (x ** 2).sum()\n\nprint(f'x: {x}')\nprint(f'y = sum(x^2) = {y.item()}')\n\n# 自動微分: dy/dx = 2x\ny.backward()\nprint(f'dy/dx: {x.grad}')  # tensor([2., 4., 6.])\n\n# GPU 利用(CUDA が使える環境では)\nif torch.cuda.is_available():\n    x_gpu = x.cuda()\n    print(f'on GPU: {x_gpu.device}')",
      },
      {
        type: "intuition",
        title: "💡 自動微分が深層学習を成立させる",
        body: "ニューラルネットの学習 = **損失関数を重みで微分してパラメータを更新**(勾配降下法)。手で微分式を書くのは現代規模(数億パラメータ)では不可能。PyTorch の `loss.backward()` は **計算グラフを逆向きに辿って連鎖律を自動適用**。これがなければ深層学習は実現できなかった、というほど重要な仕組みです。",
      },
      { type: "h3", text: "8-2. 線形回帰を PyTorch で書く" },
      {
        type: "code",
        title: "勾配降下法でゼロから線形回帰",
        python:
          "import torch\nimport torch.nn as nn\nimport torch.optim as optim\n\n# 偽データ: y = 2x + 1 + ノイズ\ntorch.manual_seed(0)\nx = torch.linspace(-3, 3, 100).unsqueeze(1)\ny = 2 * x + 1 + torch.randn_like(x) * 0.5\n\n# モデル定義(1 層の線形変換)\nmodel = nn.Linear(in_features=1, out_features=1)\n\n# 損失関数とオプティマイザ\ncriterion = nn.MSELoss()\noptimizer = optim.SGD(model.parameters(), lr=0.05)\n\n# 学習ループ\nfor epoch in range(200):\n    y_pred = model(x)              # 順伝播\n    loss = criterion(y_pred, y)    # 損失計算\n    optimizer.zero_grad()          # 勾配クリア\n    loss.backward()                # 逆伝播\n    optimizer.step()               # パラメータ更新\n\n    if (epoch + 1) % 50 == 0:\n        w, b = model.weight.item(), model.bias.item()\n        print(f'Epoch {epoch+1:3d}: loss={loss.item():.4f}, w={w:.3f}, b={b:.3f}')\n\n# 最終的に w ≈ 2, b ≈ 1 に収束する",
      },
      { type: "h3", text: "8-3. ニューラルネットによる分類" },
      {
        type: "code",
        title: "MLP で iris の 3 クラス分類",
        python:
          "import torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=0, stratify=y)\nX_tr = StandardScaler().fit_transform(X_tr)\nX_te = StandardScaler().fit_transform(X_te)\n\n# Tensor に変換\nX_tr_t = torch.tensor(X_tr, dtype=torch.float32)\ny_tr_t = torch.tensor(y_tr, dtype=torch.long)\nX_te_t = torch.tensor(X_te, dtype=torch.float32)\n\n# 多層パーセプトロン(MLP)\nclass MLP(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.net = nn.Sequential(\n            nn.Linear(4, 16),\n            nn.ReLU(),\n            nn.Linear(16, 8),\n            nn.ReLU(),\n            nn.Linear(8, 3),  # 3 クラスのロジット\n        )\n\n    def forward(self, x):\n        return self.net(x)\n\nmodel = MLP()\ncriterion = nn.CrossEntropyLoss()\noptimizer = optim.Adam(model.parameters(), lr=0.01)\n\nfor epoch in range(200):\n    optimizer.zero_grad()\n    logits = model(X_tr_t)\n    loss = criterion(logits, y_tr_t)\n    loss.backward()\n    optimizer.step()\n    if (epoch + 1) % 50 == 0:\n        acc = (logits.argmax(1) == y_tr_t).float().mean()\n        print(f'Epoch {epoch+1}: loss={loss:.4f}, train_acc={acc:.3f}')\n\n# テスト評価\nmodel.eval()\nwith torch.no_grad():\n    pred = model(X_te_t).argmax(1).numpy()\nprint(f'\\nTest accuracy: {(pred == y_te).mean():.3f}')",
      },
      { type: "h3", text: "8-4. PyTorch の主要構成要素" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**`torch.Tensor`**: NumPy 配列 + GPU + 自動微分",
          "**`nn.Module`**: モデルの基底クラス。`forward()` を実装",
          "**`nn.Sequential`**: 層を順に積むだけのコンテナ",
          "**Loss**: `nn.MSELoss`(回帰)/ `nn.CrossEntropyLoss`(分類)",
          "**Optimizer**: `optim.SGD` / `optim.Adam`(現代の標準)",
          "**`DataLoader`**: ミニバッチを供給するイテレータ",
          "**`backward()` / `optimizer.step()`**: 学習の心臓部",
        ],
      },
      {
        type: "intuition",
        title: "💡 PyTorch の学習ループは 5 行",
        body: "**①順伝播** `pred = model(x)` → **②損失** `loss = criterion(pred, y)` → **③勾配ゼロ化** `opt.zero_grad()` → **④逆伝播** `loss.backward()` → **⑤更新** `opt.step()`。**これが PyTorch の本体**。あとはモデルを大きくしたりデータを増やすだけで、Llama も Stable Diffusion もこの 5 行で動いています。",
      },
      { type: "h3", text: "8-5. Hugging Face で事前学習モデルを使う" },
      {
        type: "code",
        title: "transformers ライブラリ ─ BERT で感情分析",
        python:
          "# Hugging Face は事前学習済みモデルのハブ\nfrom transformers import pipeline\n\n# 感情分析(英語、最初の実行時にモデルをダウンロード)\nclassifier = pipeline('sentiment-analysis')\n\nresults = classifier([\n    'I love this product!',\n    'This is the worst experience.',\n    'It works fine, nothing special.'\n])\n\nfor r in results:\n    print(f\"label: {r['label']}, score: {r['score']:.3f}\")\n\n# 数行で BERT クラスの SOTA モデルが使える\n# 日本語: rinna/japanese-roberta-base などを指定すれば OK\n# テキスト生成・翻訳・要約・QA すべて pipeline() の引数で切替可能",
      },
      {
        type: "practical",
        title: "🛠 PyTorch を学ぶロードマップ",
        body: "**Lv1**: 線形回帰 + MLP を自分で書く(本章の範囲)\n**Lv2**: CNN で画像分類(Fashion-MNIST → CIFAR-10)\n**Lv3**: RNN/Transformer で系列処理(時系列予測 / 機械翻訳)\n**Lv4**: Hugging Face で fine-tuning(LoRA / PEFT)\n**Lv5**: 分散学習(DDP / FSDP)で大規模モデル\n各 Lv は 1〜2 週間で進める。実務 ML エンジニアは Lv3 まで標準。",
      },
      { type: "h3", text: "結びに ─ 8 章を終えて" },
      {
        type: "p",
        text: "Python 基礎 → NumPy → Pandas → SQL → scikit-learn → R → 可視化 → PyTorch、と 8 章を駆け抜けてきました。**データを取得し(SQL)・整形し(Pandas)・統計分析し(R / scikit-learn)・モデリングし(PyTorch)・伝える(可視化)** ─ データ職の全工程を 1 本の線でつなぐツールキットが揃いました。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "[**E 資格 教科書**](/certs/e-shikaku/textbook) ─ 深層学習の理論と実装",
          "[**G 検定 教科書**](/certs/g-test/textbook) ─ AI の社会実装と倫理",
          "[**統計検定 2 級**](/textbook/grade-2) ─ 統計推論の理論",
          "[**Kaggle 入門ブログ**](/blog/kaggle-getting-started) ─ コンペで実践",
          "[**ロードマップ**](/roadmap) ─ AI エンジニアへの全体像",
        ],
      },
    ],
  },
];

export default function ProgrammingPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "プログラミング", href: "/programming" },
        ]}
      />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>プログラミング入門ミニ教科書</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Programming</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          プログラミング入門ミニ教科書
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose">
          AI エンジニア・データサイエンティストに必要な{" "}
          <strong>Python(基礎・NumPy・Pandas)</strong>・<strong>SQL</strong>・
          <strong>scikit-learn</strong>・<strong>R 言語</strong>・
          <strong>データ可視化(matplotlib/seaborn)</strong>・<strong>PyTorch</strong>{" "}
          を 8 章でまとめた実装ミニ教科書。Python のサンプルはすべて{" "}
          <strong>ブラウザ内で実行可能</strong>(Pyodide)で、書き換えても動きます。
        </p>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4 leading-relaxed">
          ※ 初回は Pyodide(~10MB)を CDN から読み込みます。読込後は爆速で実行できます。SQL は標準ライブラリ sqlite3 経由で実行。R / PyTorch のコードは参考表示(ブラウザ内実行は対象外)。
        </p>
      </header>

      <nav className="paper rounded-lg p-5 mb-10" aria-label="目次">
        <h2 className="text-sm font-bold ui-sans mb-3 chapter-eyebrow">目次</h2>
        <ol className="space-y-1 text-sm ui-sans">
          {CHAPTERS.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="text-[var(--link)] hover:underline">
                第 {c.number} 章 ─ {c.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-12">
        {CHAPTERS.map((ch) => (
          <section key={ch.id} id={ch.id} className="scroll-mt-20">
            <header className="mb-5 pb-3 border-b border-[var(--page-border)]">
              <div className="chapter-eyebrow mb-1">Chapter {ch.number}</div>
              <h2 className="text-2xl font-bold tracking-wide">{ch.title}</h2>
            </header>
            <TextbookBody blocks={ch.blocks} />
          </section>
        ))}
      </div>

      <section className="mt-16 paper rounded-lg p-6">
        <header className="mb-3">
          <div className="chapter-eyebrow mb-1">Next</div>
          <h2 className="text-xl font-bold">次のステップ</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ui-sans">
          <li>
            <Link href="/textbook" className="text-[var(--link)] hover:underline">
              統計教科書 ─ 級別の本文
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[var(--link)] hover:underline">
              ブログ ─ Python・SQL・ML 実装記事
            </Link>
          </li>
          <li>
            <Link href="/causal-inference" className="text-[var(--link)] hover:underline">
              因果推論ミニ教科書
            </Link>
          </li>
          <li>
            <Link href="/roadmap" className="text-[var(--link)] hover:underline">
              AIエンジニア・ロードマップ
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
