import type { Question } from "@/types/content";

export const aiImplementationQuestions: Question[] = [
  {
    id: "aie-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "AI 実装検定の主催団体として最も適切なものを選びなさい。",
    choices: [
      "JDLA(日本ディープラーニング協会)",
      "一般社団法人 エッジ AI 協会",
      "GUGA(生成 AI 活用普及協会)",
      "日本統計学会",
    ],
    correctIndex: 1,
    explanation:
      "AI 実装検定は **一般社団法人 エッジ AI 協会** が主催。S(専門家)/ A(中級)/ B(入門)の 3 段階で、AI を実装する力を測る検定。",
  },
  {
    id: "aie-q2",
    category: "Python",
    difficulty: 2,
    question:
      "次のコードの実行結果として最も適切なものを選びなさい。\n\n```python\nimport numpy as np\nA = np.arange(6).reshape(2, 3)\nv = np.array([10, 20, 30])\nprint((A + v).shape)\n```",
    choices: [
      "(2,)",
      "(3,)",
      "(2, 3)",
      "ブロードキャスト不可で ValueError",
    ],
    correctIndex: 2,
    explanation:
      "shape (2, 3) と (3,) のブロードキャスト。末尾から比較して 3 == 3、(2,) は伸ばせるので (2, 3) になる。各行に v が加算される。",
  },
  {
    id: "aie-q3",
    category: "ML 基礎",
    difficulty: 2,
    question:
      "ChatGPT などの LLM の事前学習で主に使われる学習方式として最も適切なものを選びなさい。",
    choices: [
      "教師あり学習(全データに人手ラベル)",
      "強化学習(報酬最大化)のみ",
      "自己教師あり学習(次の単語予測)",
      "教師なし学習(クラスタリング中心)",
    ],
    correctIndex: 2,
    explanation:
      "LLM の事前学習は **自己教師あり学習** が中心。次の単語予測タスクをデータ自身から作り、ラベル付与不要でインターネット規模のデータで学習できるのが利点。",
  },
  {
    id: "aie-q4",
    category: "ML 評価",
    difficulty: 2,
    question:
      "クラス比率が 99:1 の不均衡データで、Accuracy の代わりに重視すべき指標として最も適切なものを選びなさい。",
    choices: [
      "MSE",
      "F1 スコア / Recall / PR-AUC",
      "決定係数 R²",
      "学習率",
    ],
    correctIndex: 1,
    explanation:
      "不均衡データでは Accuracy が過大評価されやすい。少数派クラスの捕捉に敏感な **F1 / Recall / PR-AUC** を重視。",
  },
  {
    id: "aie-q5",
    category: "scikit-learn",
    difficulty: 3,
    question:
      "scikit-learn の Pipeline + GridSearchCV を使う最大の利点として最も適切なものを選びなさい。",
    choices: [
      "コードが短くなるだけで本質的な利点はない",
      "CV のフォールドごとに前処理を訓練側だけで fit でき、データリークを防げる",
      "学習速度が必ず 10 倍速くなる",
      "ハイパーパラメータが自動的に 0 になる",
    ],
    correctIndex: 1,
    explanation:
      "Pipeline でラップすると **CV の各フォールドの訓練側だけで前処理を fit** してくれる。手動で前処理 → CV すると検証データの統計量も使ってしまう典型的なリーク。",
  },
  {
    id: "aie-q6",
    category: "ハイパーパラメータ",
    difficulty: 2,
    question:
      "Optuna ・ Hyperopt が採用しているハイパーパラメータ探索手法として最も適切なものを選びなさい。",
    choices: [
      "Grid Search のみ",
      "Random Search のみ",
      "ベイズ最適化(過去試行から次を予測)",
      "総当り検索のみ",
    ],
    correctIndex: 2,
    explanation:
      "Optuna / Hyperopt は **ベイズ最適化**(TPE などのアルゴリズム)で次の試行を選ぶ。Grid / Random より少ない試行で最適点に近づきやすい。",
  },
  {
    id: "aie-q7",
    category: "NN 基礎",
    difficulty: 2,
    question:
      "深層ニューラルネットの活性化関数として、現代の標準とされるものを選びなさい。",
    choices: ["Sigmoid", "tanh", "ReLU", "Identity"],
    correctIndex: 2,
    explanation:
      "深層 NN では **ReLU** が標準。Sigmoid / tanh は勾配消失しやすく、ReLU + 適切な初期化(He / Xavier)+ Batch Norm が事実上の標準セット。",
  },
  {
    id: "aie-q8",
    category: "NN 基礎",
    difficulty: 3,
    question:
      "勾配消失問題への対策として **不適切** なものを選びなさい。",
    choices: [
      "ReLU 系活性化関数を使う",
      "Batch Normalization を入れる",
      "残差接続(Residual Connection)を加える",
      "学習率を極端に小さくする(例: 1e-15)",
    ],
    correctIndex: 3,
    explanation:
      "学習率を極端に小さくしても勾配消失は解決しない(更新がほぼ進まないだけ)。**ReLU・Batch Norm・残差接続・適切な初期化** が代表的対策。",
  },
  {
    id: "aie-q9",
    category: "オプティマイザ",
    difficulty: 2,
    question:
      "現代の深層学習で最もよく使われるオプティマイザとして最も適切なものを選びなさい。",
    choices: [
      "標準 SGD(モメンタムなし)",
      "Adam / AdamW",
      "Newton 法",
      "遺伝的アルゴリズム",
    ],
    correctIndex: 1,
    explanation:
      "**Adam / AdamW** が現代の標準。適応的学習率 + Momentum で多くの問題でデフォルト選択。Transformer 系では特に AdamW が標準。",
  },
  {
    id: "aie-q10",
    category: "PyTorch",
    difficulty: 3,
    question:
      "PyTorch の標準的な学習ループの 5 ステップとして最も適切なものを選びなさい。",
    choices: [
      "compile → fit → evaluate → predict → save",
      "zero_grad → forward → loss → backward → step",
      "load → preprocess → train → test → deploy",
      "init → train → eval → save → load",
    ],
    correctIndex: 1,
    explanation:
      "**`optimizer.zero_grad() → output = model(x) → loss = criterion(output, y) → loss.backward() → optimizer.step()`** の 5 行が PyTorch 学習ループの核。",
  },
  {
    id: "aie-q11",
    category: "PyTorch",
    difficulty: 3,
    question:
      "推論時に勾配計算を無効化してメモリと計算を節約する PyTorch の正しい記述として最も適切なものを選びなさい。",
    choices: [
      "`with torch.no_grad():` ブロック内で推論を実行",
      "`model.train()` を呼ぶ",
      "`requires_grad=True` を設定",
      "`torch.compile()` を呼ぶ",
    ],
    correctIndex: 0,
    explanation:
      "**`with torch.no_grad():`** で計算グラフ構築をスキップ。推論時 / 評価時のメモリ節約と高速化に必須。`model.eval()` と併用するのが定石。",
  },
  {
    id: "aie-q12",
    category: "Keras",
    difficulty: 2,
    question:
      "Keras で学習を 1 メソッドで実行するための関数として最も適切なものを選びなさい。",
    choices: ["model.compile()", "model.fit()", "model.evaluate()", "model.predict()"],
    correctIndex: 1,
    explanation:
      "**`model.fit(X, y, epochs=...)`** が学習を実行。`compile` は事前設定(optimizer / loss / metrics)、`evaluate` はテスト評価、`predict` は予測。",
  },
  {
    id: "aie-q13",
    category: "CNN",
    difficulty: 2,
    question:
      "画像分類タスクで広く使われる代表的なアーキテクチャとして最も適切なものを選びなさい。",
    choices: ["ResNet", "LSTM", "BERT", "GPT"],
    correctIndex: 0,
    explanation:
      "**ResNet** は画像分類の代表的 CNN。残差接続(skip connection)で深いネットの学習を可能にした。LSTM は時系列、BERT/GPT は自然言語。",
  },
  {
    id: "aie-q14",
    category: "Transformer",
    difficulty: 3,
    question:
      "Transformer が RNN を置き換えた最大の理由として最も適切なものを選びなさい。",
    choices: [
      "メモリ消費が小さい",
      "Self-Attention で全位置を一度に見渡せ、並列計算が可能",
      "学習データが少なくて済む",
      "活性化関数が ReLU のみで構成される",
    ],
    correctIndex: 1,
    explanation:
      "Transformer は **Self-Attention** で全位置を一度に見渡せ、(1) GPU で並列学習可能、(2) 長距離依存を捉えやすい、という 2 つの利点で RNN を置き換えた。",
  },
  {
    id: "aie-q15",
    category: "強化学習",
    difficulty: 3,
    question:
      "強化学習の代表的な手法 PPO(Proximal Policy Optimization)が分類されるカテゴリとして最も適切なものを選びなさい。",
    choices: [
      "教師あり学習",
      "教師なし学習",
      "方策勾配法(Policy Gradient)",
      "k-means クラスタリング",
    ],
    correctIndex: 2,
    explanation:
      "**PPO** は方策勾配法の代表。OpenAI で広く使われ、近年は LLM の RLHF にも採用される。",
  },
  {
    id: "aie-q16",
    category: "生成モデル",
    difficulty: 2,
    question:
      "Stable Diffusion・DALL-E・Midjourney など現代の主要画像生成 AI が基礎としているモデルとして最も適切なものを選びなさい。",
    choices: ["GAN", "VAE", "拡散モデル", "k-NN"],
    correctIndex: 2,
    explanation:
      "現代の主要画像生成 AI は **拡散モデル**。ノイズを段階的に除去するプロセスを学習させる方式で、GAN より学習が安定し大規模化しやすい。",
  },
  {
    id: "aie-q17",
    category: "エッジ AI",
    difficulty: 2,
    question:
      "モデルのサイズと計算量を削減して、float32 → int8 に変換する技術の名称として最も適切なものを選びなさい。",
    choices: [
      "プルーニング",
      "蒸留",
      "量子化(Quantization)",
      "正則化",
    ],
    correctIndex: 2,
    explanation:
      "**量子化(Quantization)** は数値精度を下げてサイズ / 計算を削減。int8 量子化でメモリ 4 倍 / 速度 2〜3 倍が典型で、精度低下は通常 1% 未満。",
  },
  {
    id: "aie-q18",
    category: "エッジ AI",
    difficulty: 2,
    question:
      "大モデルから小モデルへ知識を移転する技術として最も適切なものを選びなさい。",
    choices: [
      "プルーニング",
      "蒸留(Knowledge Distillation)",
      "正則化",
      "Dropout",
    ],
    correctIndex: 1,
    explanation:
      "**蒸留** は大モデル(教師)の出力を小モデル(生徒)が真似るように学習させる手法。スマホ向け軽量モデルでよく使われる。",
  },
  {
    id: "aie-q19",
    category: "MLOps",
    difficulty: 2,
    question:
      "AI モデルの本番運用で、訓練時と推論時の特徴量計算を一致させ、Training-Serving Skew を防ぐための仕組みとして最も適切なものを選びなさい。",
    choices: [
      "実験管理ツール(MLflow など)",
      "特徴量ストア(Feature Store)",
      "ロードバランサー",
      "リバースプロキシ",
    ],
    correctIndex: 1,
    explanation:
      "**特徴量ストア(Feast / Tecton など)** は訓練 / 推論で同じ特徴量を再利用するための基盤。これがないと Training-Serving Skew でモデル精度が劣化する。",
  },
  {
    id: "aie-q20",
    category: "互換性",
    difficulty: 2,
    question:
      "PyTorch / TensorFlow など異なるフレームワーク間でモデルをやり取りするための標準フォーマットとして最も適切なものを選びなさい。",
    choices: [
      "ONNX(Open Neural Network Exchange)",
      "JSON",
      "CSV",
      "PNG",
    ],
    correctIndex: 0,
    explanation:
      "**ONNX** は PyTorch / TensorFlow / JAX など複数フレームワーク間の中間表現。エッジ推論ランタイム(ONNX Runtime / TensorRT 等)でも広く使われる。",
  },
];
