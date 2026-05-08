import type { Textbook } from "@/types/content";

export const aiImplementationTextbook: Textbook = {
  levelSlug: "ai-implementation",
  title: "AI 実装検定 教科書",
  intro:
    "**AI 実装検定** は、一般社団法人 **エッジ AI 協会** が主催する、AI を **実装する力** を測る検定です。**S 級(専門家)/ A 級(中級)/ B 級(入門)** の 3 段階があり、Python ・ NumPy ・ PyTorch / TensorFlow といった **実装ライブラリの基本 + 主要モデルのコード理解** が中心。G 検定(概念中心)と E 資格(高度数学 + 実装)の **中間** に位置する実務寄りの試験です。本教科書は A 級を中心に、S 級も視野に入れて 10 章で体系的に解説します。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "AI 実装検定 ─ 試験の全体像",
      overview:
        "S/A/B の 3 段階の位置付け、出題範囲、対策プランを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "AI 実装検定の位置付け",
          blocks: [
            {
              type: "p",
              text: "**AI 実装検定** は、AI のコードを **読める / 書ける / 設計できる** 力を、3 段階(S/A/B)で測ります。G 検定が概念・倫理を、E 資格が高度な数学と実装を問うのに対し、本資格は **「実務で AI のコードを書く現場」を直接的に問う** のが特徴です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: 一般社団法人 エッジ AI 協会",
                "**等級**: S(専門家) / A(中級) / B(入門) の 3 段階",
                "**形式**: オンライン IBT(自宅 / 会社受験可)",
                "**問題数 / 時間**: A 級 60 問 / 60 分(参考)",
                "**回答方式**: 4 択選択式 + コード読解",
                "**合格基準**: 級ごとに異なる(参考: A 級 70%)",
              ],
            },
            { type: "h3", text: "他検定との位置付け" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**G 検定(JDLA)**: AI 概念 ・ 歴史 ・ 倫理(コード問題ほぼなし)",
                "**生成 AI パスポート(GUGA)**: 生成 AI の活用リテラシー",
                "**AI 実装検定 B 級**: AI 実装の入門。コードの基礎が読める",
                "**AI 実装検定 A 級**: 中級。NumPy / PyTorch のコードを書ける / 設計できる",
                "**AI 実装検定 S 級**: 専門家。設計判断や論文レベル",
                "**E 資格(JDLA)**: 高度な数学 + DL 実装。認定講座が必要",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "学習プランと前提知識",
          blocks: [
            { type: "h3", text: "前提知識(A 級基準)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "Python の文法(リスト ・ 関数 ・ クラス)が読める",
                "高校数学レベル(行列の積、偏微分の概念)を理解している",
                "Jupyter / Colab を起動して動かせる",
                "NumPy のブロードキャストが何となく分かる",
              ],
            },
            { type: "h3", text: "100 〜 150 時間プラン(A 級向け)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1 〜 2**: Python + NumPy の手を動かす演習(本サイトの[Python データ分析 教科書](/certs/python-data/textbook)第 2 〜 3 章)",
                "**Week 3 〜 4**: 機械学習の基礎(scikit-learn) + 評価指標 → 第 3 〜 4 章",
                "**Week 5 〜 7**: ニューラルネット + PyTorch / TensorFlow の基礎 → 第 5 〜 7 章",
                "**Week 8**: 主要モデル(CNN / RNN / Transformer)→ 第 8 章",
                "**Week 9**: デプロイ + エッジ + MLOps の入口 → 第 9 章",
                "**Week 10**: 演習 + 模擬試験 → 第 10 章",
              ],
            },
            {
              type: "intuition",
              title: "コード『を読む』が最も効く対策",
              body: "本検定はコード読解問題が頻出。**動かさずに読める力** をつけるには、PyTorch / TensorFlow チュートリアルのコードを **写経(コピーせずタイプ)** が最強。30 分 × 30 日で『どこに何が書いてあるか分かる』感覚が身につきます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Python と NumPy の実装基礎",
      overview:
        "AI 実装で頻出する Python 文法と NumPy の挙動を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Python の実装で押さえるべき文法",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**内包表記 / ジェネレータ式**: メモリ効率と可読性",
                "**ラムダ + map / filter / sorted**: 関数型風の処理",
                "**デコレータ**: `@torch.no_grad()` などライブラリ使用で頻出",
                "**コンテキストマネージャ(`with`)**: ファイル / モデル評価 / GPU 操作",
                "**型ヒント**: `def f(x: torch.Tensor) -> torch.Tensor:`",
                "**dataclass**: パラメータ束ね",
              ],
            },
            {
              type: "code",
              title: "頻出パターン",
              python:
                "from typing import List\nfrom dataclasses import dataclass\n\n@dataclass\nclass Config:\n    lr: float = 1e-3\n    batch_size: int = 32\n    epochs: int = 10\n\ndef batch_loader(data: List[int], batch_size: int):\n    \"\"\"ジェネレータでミニバッチを返す\"\"\"\n    for i in range(0, len(data), batch_size):\n        yield data[i : i + batch_size]\n\ncfg = Config(lr=1e-4)\nprint(cfg)\nfor b in batch_loader(list(range(10)), 3):\n    print(b)",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "NumPy の挙動と落とし穴",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**shape と axis**: ニューラルネットでは `(batch, channel, height, width)` の規約が標準",
                "**ブロードキャスト**: shape の末尾から比較、サイズ 1 は伸ばす",
                "**view と copy**: スライスは元の view、`.copy()` で独立",
                "**float32 vs float64**: GPU は float32 が標準。混在は性能と精度に影響",
                "**ufunc(`np.exp / log / sin`)**: 要素単位の高速演算",
              ],
            },
            {
              type: "code",
              title: "ブロードキャストの実例",
              python:
                "import numpy as np\n\n# (3, 4) と (4,)\nA = np.arange(12).reshape(3, 4)\nv = np.array([10, 20, 30, 40])\nprint(A + v)  # 各行に v が加算される\n\n# (3, 4) と (3, 1)\nu = np.array([[1], [2], [3]])\nprint(A + u)  # 各列に u が加算される",
              runnable: true,
            },
            {
              type: "intuition",
              title: "ブロードキャストの規則 3 行",
              body: "(1) 形状を **末尾から比較**、(2) 各次元のサイズが **同じ or 1 or 一方が存在しない** なら適合、(3) サイズ 1 の次元は **複製** されたかのように振る舞う。これが分かるだけで NumPy のエラーの 8 割が消えます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "機械学習の基礎と scikit-learn",
      overview:
        "教師あり / 教師なし / 強化学習の概念と、scikit-learn の Estimator API を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "教師あり / 教師なし / 強化学習",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**教師あり**: 入力と正解ラベルのペアから学習。回帰 / 分類",
                "**教師なし**: ラベルなしデータからパターン発見。クラスタリング / 次元削減",
                "**強化学習**: 環境との相互作用で報酬最大化。AlphaGo / 自動運転",
                "**自己教師あり学習(SSL)**: データ自身から擬似ラベル。LLM の事前学習はこれ",
              ],
            },
            { type: "h3", text: "scikit-learn の共通 API" },
            {
              type: "code",
              title: "fit / predict / transform",
              python:
                "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('clf', RandomForestClassifier(n_estimators=100, random_state=0)),\n])\n\nscores = cross_val_score(pipe, X, y, cv=5)\nprint('CV mean:', scores.mean())",
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "代表的なモデルとその使い分け",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**線形 / ロジスティック回帰**: 解釈性 ◎、ベースライン",
                "**決定木**: 解釈性 ◎、過学習しやすい",
                "**ランダムフォレスト**: バギング、OOB スコア利用",
                "**勾配ブースティング(XGBoost / LightGBM)**: テーブルデータの王者",
                "**SVM**: マージン最大化、カーネル法",
                "**k-NN**: 単純、スケーリング必須",
                "**k-means / DBSCAN**: クラスタリング",
                "**PCA**: 次元削減、可視化",
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
      id: "ch4",
      number: 4,
      title: "モデル評価とハイパーパラメータ",
      overview:
        "評価指標 ・ 交差検証 ・ ハイパーパラメータ探索を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "評価指標 ─ 分類と回帰",
          blocks: [
            { type: "h3", text: "分類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Accuracy / Precision / Recall / F1**",
                "**ROC-AUC**: 閾値非依存、不均衡やや弱",
                "**PR-AUC**: 不均衡に強い",
                "**Log Loss**: 予測確率の質",
                "**Confusion Matrix**: TP/FP/TN/FN",
              ],
            },
            {
              type: "figure",
              kind: "confusion-matrix",
              caption: "混同行列の 4 領域",
            },
            { type: "h3", text: "回帰" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MSE / RMSE**: 大きな誤差を罰する",
                "**MAE**: 外れ値に頑健",
                "**$R^2$**: 説明分散の割合",
                "**MAPE**: 相対誤差(0 近傍で不安定)",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "ハイパーパラメータ探索",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Grid Search**: 全組合せ網羅。次元の呪い",
                "**Random Search**: 同予算で Grid より発見率高",
                "**ベイズ最適化**: ガウス過程で次の試行を選ぶ。Optuna が標準",
                "**Hyperband / BOHB**: 早期終了 + ベイズ",
                "**ASHA(非同期的成功半減)**: 並列性高い大規模探索",
              ],
            },
            {
              type: "code",
              title: "Optuna によるベイズ最適化",
              python:
                "import optuna\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.datasets import load_breast_cancer\n\nX, y = load_breast_cancer(return_X_y=True)\n\ndef objective(trial):\n    n = trial.suggest_int('n_estimators', 50, 500)\n    md = trial.suggest_int('max_depth', 3, 20)\n    clf = RandomForestClassifier(n_estimators=n, max_depth=md, random_state=0)\n    return cross_val_score(clf, X, y, cv=5).mean()\n\nstudy = optuna.create_study(direction='maximize')\nstudy.optimize(objective, n_trials=20)\nprint(study.best_params)",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "ニューラルネットワークの基礎",
      overview:
        "順伝播 ・ 誤差逆伝播 ・ 活性化関数 ・ 損失関数を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "順伝播と誤差逆伝播",
          blocks: [
            {
              type: "p",
              text: "ニューラルネットの 1 層は **線形変換 → 活性化関数** の組み合わせ。$h = \\sigma(Wx + b)$ という形が基本ブロックです。学習は **誤差逆伝播(backpropagation)** で各パラメータの勾配を計算し、勾配降下で更新します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**順伝播(Forward)**: 入力から出力を計算",
                "**損失関数(Loss)**: 出力と正解の差を測る",
                "**逆伝播(Backward)**: 連鎖律で各パラメータの勾配を計算",
                "**更新(Optimizer)**: SGD / Adam で重みを更新",
              ],
            },
            {
              type: "figure",
              kind: "neural-net-forward",
              caption: "ニューラルネットの順伝播",
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "活性化関数と損失関数",
          blocks: [
            { type: "h3", text: "活性化関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Sigmoid**: $\\sigma(x) = 1/(1+e^{-x})$。出力 (0, 1)。勾配消失しやすい",
                "**tanh**: $(-1, 1)$。Sigmoid より中心化",
                "**ReLU**: $\\max(0, x)$。深層 NN の標準。死に ReLU 問題",
                "**Leaky ReLU / GELU / Swish**: ReLU の改良版",
                "**Softmax**: 多クラス分類の出力",
              ],
            },
            {
              type: "figure",
              kind: "activation-functions",
              caption: "代表的な活性化関数の比較",
            },
            { type: "h3", text: "損失関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MSE**: 回帰",
                "**Cross Entropy**: 分類",
                "**Binary Cross Entropy**: 2 値分類",
                "**Hinge Loss**: SVM",
                "**Triplet Loss**: 距離学習",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "最適化手法と勾配の問題",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SGD**: 確率的勾配降下。学習率の調整が必要",
                "**Momentum**: 過去の勾配方向を加味",
                "**Adam**: 適応的学習率 + Momentum。標準",
                "**AdamW**: Adam + 適切な weight decay",
                "**RMSprop**: 勾配の二乗平均で正規化",
              ],
            },
            {
              type: "figure",
              kind: "gradient-descent-paths",
              caption: "オプティマイザによる軌跡の違い",
            },
            {
              type: "intuition",
              title: "勾配消失と勾配爆発",
              body: "深いネットでは Sigmoid を重ねると **勾配が層を遡るたびに小さくなる**(勾配消失)、または異常に大きくなる(勾配爆発)現象が起きやすい。**ReLU + 適切な初期化(He / Xavier)+ Batch Norm** が標準的な対策です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "PyTorch の実装パターン",
      overview:
        "Tensor / Module / Dataset / DataLoader / 学習ループを整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Tensor と autograd",
          blocks: [
            {
              type: "code",
              title: "Tensor 基礎",
              python:
                "import torch\n\n# Tensor の作成\nx = torch.tensor([[1.0, 2.0], [3.0, 4.0]], requires_grad=True)\nprint(x.shape, x.dtype, x.device)\n\n# 演算は autograd により計算グラフが構築される\ny = (x ** 2).sum()\ny.backward()\nprint(x.grad)  # dy/dx = 2x = [[2,4],[6,8]]\n\n# GPU 利用\nif torch.cuda.is_available():\n    x_gpu = x.to('cuda')",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**`requires_grad=True`**: 勾配計算の対象",
                "**`backward()`**: 自動微分で勾配計算",
                "**`detach()`**: 計算グラフから切り離す",
                "**`with torch.no_grad():`**: 推論時に勾配計算を停止(メモリ節約)",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Module と学習ループ",
          blocks: [
            {
              type: "code",
              title: "標準的な学習ループ",
              python:
                "import torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom torch.utils.data import DataLoader, TensorDataset\n\n# モデル\nclass MLP(nn.Module):\n    def __init__(self, in_dim=10, hidden=32, out_dim=2):\n        super().__init__()\n        self.fc1 = nn.Linear(in_dim, hidden)\n        self.fc2 = nn.Linear(hidden, out_dim)\n    def forward(self, x):\n        h = torch.relu(self.fc1(x))\n        return self.fc2(h)\n\n# ダミーデータ\nX = torch.randn(1000, 10)\ny = torch.randint(0, 2, (1000,))\nloader = DataLoader(TensorDataset(X, y), batch_size=32, shuffle=True)\n\nmodel = MLP()\ncriterion = nn.CrossEntropyLoss()\noptimizer = optim.Adam(model.parameters(), lr=1e-3)\n\nfor epoch in range(5):\n    for xb, yb in loader:\n        optimizer.zero_grad()       # 勾配リセット\n        out = model(xb)              # 順伝播\n        loss = criterion(out, yb)    # 損失\n        loss.backward()              # 逆伝播\n        optimizer.step()             # 更新\n    print(f'epoch {epoch} loss {loss.item():.4f}')",
            },
            {
              type: "intuition",
              title: "学習ループの 5 行を覚える",
              body: "`zero_grad → forward → loss → backward → step` の **5 ステップ** が PyTorch の核。これさえ覚えていれば、どんな複雑なモデルでも構造は同じです。試験でもこの 5 行のいずれかが空欄になるパターンが頻出。",
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Dataset / DataLoader / Transform",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Dataset**: `__len__` と `__getitem__` を実装",
                "**DataLoader**: バッチ化 + シャッフル + 並列化",
                "**Transform**: 画像 ・ テキストの前処理パイプライン",
                "**`num_workers`**: 並列ロードでデータ I/O 高速化",
                "**`pin_memory=True`**: GPU 転送高速化",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "TensorFlow / Keras の実装パターン",
      overview:
        "Keras Sequential / Functional API / カスタム学習ループを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Sequential API と Functional API",
          blocks: [
            {
              type: "code",
              title: "Keras 基礎",
              python:
                "import tensorflow as tf\nfrom tensorflow.keras import layers, models\n\n# Sequential API\nmodel_seq = models.Sequential([\n    layers.Input(shape=(10,)),\n    layers.Dense(32, activation='relu'),\n    layers.Dense(2, activation='softmax'),\n])\n\n# Functional API(分岐 / 結合に強い)\ninputs = layers.Input(shape=(10,))\nh = layers.Dense(32, activation='relu')(inputs)\noutputs = layers.Dense(2, activation='softmax')(h)\nmodel_fn = models.Model(inputs=inputs, outputs=outputs)\n\nmodel_fn.compile(\n    optimizer='adam',\n    loss='sparse_categorical_crossentropy',\n    metrics=['accuracy'],\n)\nmodel_fn.summary()",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**`compile`**: optimizer / loss / metrics を一括指定",
                "**`fit`**: 学習を 1 メソッドで実行",
                "**`evaluate`**: テストデータで評価",
                "**`predict`**: 予測",
                "**Callback**: EarlyStopping / ReduceLROnPlateau / ModelCheckpoint",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "TensorFlow と PyTorch の使い分け",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**PyTorch**: 研究 ・ Kaggle ・ 論文実装で主流。動的グラフで書きやすい",
                "**TensorFlow / Keras**: 本番デプロイ ・ TF-Lite(モバイル)・ TFX が強み",
                "**JAX**: 関数型 + XLA で高速。Google 内部で増加",
                "**最近の傾向**: PyTorch 2.0 + torch.compile で性能ギャップ縮小、PyTorch がデファクト化",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "主要モデル ─ CNN / RNN / Transformer",
      overview:
        "画像 ・ 系列 ・ 自然言語の 3 大アーキテクチャを実装目線で整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "CNN(画像認識)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**畳み込み層**: 局所特徴を抽出。重みの共有",
                "**プーリング層**: 空間方向にダウンサンプル",
                "**全結合層**: 最終的な分類",
                "**Batch Normalization**: 学習安定化",
                "**Dropout**: 過学習抑制",
                "**代表モデル**: LeNet / AlexNet / VGG / ResNet / EfficientNet / Vision Transformer(ViT)",
              ],
            },
            {
              type: "figure",
              kind: "cnn-architecture",
              caption: "CNN の標準構造",
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "RNN / LSTM / Transformer",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**RNN**: 時系列の順序を扱う。勾配消失に弱い",
                "**LSTM / GRU**: ゲート機構で長期依存を扱う",
                "**Seq2Seq**: 機械翻訳の古典構造(エンコーダ + デコーダ)",
                "**Transformer**: Attention 機構。並列化可能、現代の LLM の基盤",
                "**BERT / GPT / T5 / Llama**: Transformer の派生",
              ],
            },
            {
              type: "figure",
              kind: "attention-heatmap",
              caption: "Attention のヒートマップ可視化",
            },
            {
              type: "intuition",
              title: "なぜ Transformer が RNN を置き換えたか",
              body: "RNN は **順次処理** で並列化が困難、長距離依存も覚えにくい。Transformer は Self-Attention で **すべての位置を一度に見渡せる** ため、(1) GPU で並列学習でき大規模化が容易、(2) 長距離依存を捉えやすい。これが LLM 時代を切り拓いた本質です。",
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "強化学習と生成モデル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Q-learning / DQN**: 行動価値関数を学習",
                "**Policy Gradient / PPO**: 方策を直接最適化",
                "**Actor-Critic**: 価値と方策を併用",
                "**GAN**: 生成器 + 識別器の敵対学習",
                "**VAE**: 潜在空間からのサンプリング",
                "**拡散モデル**: ノイズ除去で生成。画像生成の主流",
              ],
            },
            {
              type: "figure",
              kind: "diffusion-process",
              caption: "拡散モデルの順 / 逆過程",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "デプロイ ・ エッジ AI ・ MLOps",
      overview:
        "学習済みモデルの本番運用、エッジデバイスでの推論、軽量化技術を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "エッジ AI の特徴",
          blocks: [
            {
              type: "p",
              text: "**エッジ AI** はクラウドではなく **デバイス側** で AI 推論を行う設計。スマホ ・ 監視カメラ ・ 自動車 ・ 工場などで導入が進み、**プライバシー / 低遅延 / オフライン動作 / 通信コスト削減** が動機です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**TensorFlow Lite**: モバイル / マイコン向け軽量 TF",
                "**ONNX**: フレームワーク間相互運用",
                "**TensorRT**: NVIDIA GPU 向け最適化",
                "**OpenVINO**: Intel CPU / GPU 向け",
                "**Core ML**: Apple デバイス向け",
                "**TPU / NPU**: 専用ハードウェア",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "モデル軽量化技術",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**量子化(Quantization)**: float32 → int8 / int4 で 4 〜 8 倍軽量化",
                "**プルーニング(Pruning)**: 不要な重みを削除",
                "**蒸留(Distillation)**: 大モデル(教師) → 小モデル(生徒)",
                "**MobileNet / EfficientNet-Lite**: モバイル向けの設計済モデル",
                "**LoRA / QLoRA**: LLM の効率的微調整(低ランク適応)",
              ],
            },
            {
              type: "intuition",
              title: "量子化と精度のトレードオフ",
              body: "int8 量子化で **メモリ 4 倍 / 速度 2 〜 3 倍** が典型。精度低下は通常 1% 未満で、適切なキャリブレーションを行えば実務で問題になりません。LLM では **GGUF / AWQ / GPTQ** といった量子化形式が普及しており、家庭の PC でも 7B 〜 70B モデルが動かせるようになっています。",
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "MLOps の基礎",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**実験管理**: MLflow / W&B / Neptune",
                "**モデルレジストリ**: バージョン管理 + ステージング",
                "**特徴量ストア**: 訓練 / 推論で同じ特徴量を再利用",
                "**CI/CD for ML**: テスト + 自動デプロイ",
                "**監視**: 予測分布 ・ 遅延 ・ ドリフト検出",
                "**A/B テスト / シャドーデプロイ**: 安全な新モデル投入",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策の総まとめ",
      overview:
        "範囲別チェックリストと、試験当日のコツをまとめます。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: NumPy のブロードキャスト 3 規則・shape の規約",
                "**第 3 章**: 教師あり/なし/強化学習の違い、scikit-learn の Estimator API",
                "**第 4 章**: 評価指標(分類/回帰)、Optuna による探索",
                "**第 5 章**: ReLU / Adam / 勾配消失 / Batch Norm",
                "**第 6 章**: PyTorch の `zero_grad → forward → loss → backward → step` 5 行",
                "**第 7 章**: Keras Sequential / Functional API / Callback",
                "**第 8 章**: CNN / RNN / Transformer の特徴と代表モデル",
                "**第 9 章**: 量子化・プルーニング・蒸留 / TFLite・ONNX",
                "**MLOps**: 実験管理・モデルレジストリ・ドリフト検出",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**1 問 1 分** のペース感覚。コード読解問題は『**まず関数名を見る**』で 6 割解ける",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
                "**A 級は B 級を含む**: B 級向けの基礎事項も出る",
                "**前日 30 分の復習**: PyTorch / Keras の代表シグネチャを実機で確認",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "合格後のステップアップ",
          blocks: [
            {
              type: "p",
              text: "AI 実装検定 A 級 → **E 資格**(JDLA、より深い数学 + 実装)が王道。または **生成 AI パスポート → G 検定** で AI の事業活用や倫理側を補強する道もあります。本サイトの[/textbook](/textbook)で各検定の教科書にアクセスできます。",
            },
            {
              type: "practical",
              title: "実務でのキャリア活用",
              body: "AI 実装検定 A 級は **AI エンジニア / 機械学習エンジニア / データサイエンティスト** の中堅以下のシグナルとして機能します。**S 級 + 実務経験** だと AI 専門職としての強い認定になります。",
            },
          ],
        },
      ],
    },
  ],
};
