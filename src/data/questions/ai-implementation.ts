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
  {
    id: "aie-q21",
    category: "PyTorch",
    difficulty: 3,
    question:
      "PyTorch で **DataLoader の num_workers > 0** を指定する目的として最も適切なものを選びなさい。",
    choices: [
      "データ前処理を別プロセスで並列実行し GPU 待ち時間を減らす",
      "GPU の数を増やす",
      "モデルのパラメータ数を減らす",
      "学習率を自動調整する",
    ],
    correctIndex: 0,
    explanation:
      "**num_workers** はデータ読込 ・ 前処理を **別プロセスで並列実行**。GPU 学習中に次のバッチを準備し、CPU 律速を解消。Windows では `if __name__ == '__main__':` ガードが必須。",
  },
  {
    id: "aie-q22",
    category: "PyTorch",
    difficulty: 3,
    question:
      "PyTorch の **autograd(自動微分)** で勾配計算を止めたい際の正しい記法を選びなさい。",
    choices: [
      "`with torch.no_grad():`",
      "`torch.cuda.empty_cache()`",
      "`torch.set_grad_enabled(True)`",
      "`tensor.detach_()` は逆効果",
    ],
    correctIndex: 0,
    explanation:
      "**`with torch.no_grad():`** で計算グラフを構築せず推論モード化(メモリ節約 + 高速化)。**`tensor.detach()`** は計算グラフから切り離す(in-place 版 `detach_()` も有効)。",
  },
  {
    id: "aie-q23",
    category: "Keras",
    difficulty: 2,
    question:
      "Keras の **Sequential API と Functional API** の違いとして最も適切なものを選びなさい。",
    choices: [
      "Sequential は線形スタック、Functional は任意の DAG(分岐 / 結合)を構築可能",
      "Sequential は遅く、Functional は速い",
      "両者は完全同一",
      "Functional は TensorFlow でのみ動作",
    ],
    correctIndex: 0,
    explanation:
      "**Sequential** は層を順に積むだけ。**Functional** は **任意の DAG**(Skip Connection / Multi-input / Multi-output)を構築可能。U-Net / ResNet / GAN などは Functional 必須。",
  },
  {
    id: "aie-q24",
    category: "学習テクニック",
    difficulty: 3,
    question:
      "**学習率スケジューリング** の手法で、**Cosine Annealing** の特徴として最も適切なものを選びなさい。",
    choices: [
      "学習率を余弦曲線に従って徐々に下げる",
      "学習率を一定に保つ",
      "学習率を毎エポック 10× に上げる",
      "学習率を乱数で振る",
    ],
    correctIndex: 0,
    explanation:
      "**Cosine Annealing**: `lr = lr_min + 0.5(lr_max - lr_min)(1 + cos(π·t/T))`。Step Decay より滑らか。**SGDR(Warm Restarts)** で周期的にリセットする変種もよく使われる。",
  },
  {
    id: "aie-q25",
    category: "正則化",
    difficulty: 3,
    question:
      "**Dropout** の学習時 / 推論時の動作として正しいものを選びなさい。",
    choices: [
      "学習時: ニューロンを確率 p でゼロ化、推論時: 全ニューロン稼働(出力を 1-p 倍 or 学習時に逆スケール)",
      "学習時 / 推論時 とも同じ動作",
      "推論時のみゼロ化",
      "勾配計算でのみ使用",
    ],
    correctIndex: 0,
    explanation:
      "**Dropout は学習時のみ確率 p でユニットをゼロ化** + アンサンブル効果。**推論時は全ユニット使用**(Inverted Dropout で学習時に `1/(1-p)` スケールが現代の標準)。",
  },
  {
    id: "aie-q26",
    category: "CNN",
    difficulty: 3,
    question:
      "畳み込み層で入力 28×28、kernel=3×3、padding=1、stride=1 のとき、**出力サイズ** を選びなさい。",
    choices: ["26×26", "28×28", "30×30", "14×14"],
    correctIndex: 1,
    explanation:
      "出力 = `(H + 2P - K) / S + 1 = (28 + 2 - 3) / 1 + 1 = 28`。**padding=same**(P = (K-1)/2)で stride=1 なら出力サイズ維持。stride=2 で半分化が定石。",
  },
  {
    id: "aie-q27",
    category: "Transformer",
    difficulty: 3,
    question:
      "Transformer の **Positional Encoding** の役割として最も適切なものを選びなさい。",
    choices: [
      "Self-Attention に系列順序情報を与える",
      "層の数を制御する",
      "Dropout 率を決める",
      "Loss 関数を変える",
    ],
    correctIndex: 0,
    explanation:
      "**Self-Attention は順序情報を持たない**(permutation invariant)ため、**Sin/Cos の Positional Encoding** や **学習型 PE / RoPE / ALiBi** で位置情報を注入。",
  },
  {
    id: "aie-q28",
    category: "デプロイ",
    difficulty: 3,
    question:
      "**TensorRT** の主な役割として最も適切なものを選びなさい。",
    choices: [
      "NVIDIA GPU 向けの推論最適化エンジン(量子化 ・ Layer Fusion ・ Kernel 選択)",
      "学習用フレームワーク",
      "データセット作成ツール",
      "ハイパーパラメータ探索",
    ],
    correctIndex: 0,
    explanation:
      "**TensorRT** は NVIDIA GPU 向けの **推論最適化 SDK**。Layer Fusion ・ Precision Calibration(INT8 / FP16)・ Kernel Auto-Tuning で 2-10× 高速化。学習は PyTorch / TF 等で行う。",
  },
  {
    id: "aie-q29",
    category: "エッジ",
    difficulty: 3,
    question:
      "**エッジ AI のフレームワーク / ランタイム** として **誤っているもの** を選びなさい。",
    choices: [
      "TensorFlow Lite",
      "Core ML",
      "ONNX Runtime",
      "Apache Hadoop",
    ],
    correctIndex: 3,
    explanation:
      "**エッジ AI ランタイム**: TFLite ・ Core ML(iOS)・ ONNX Runtime ・ NCNN ・ MediaPipe ・ MNN ・ TVM。**Apache Hadoop は分散バッチ処理基盤** でエッジとは無関係。",
  },
  {
    id: "aie-q30",
    category: "量子化",
    difficulty: 3,
    question:
      "**Post-Training Quantization(PTQ)** と **Quantization-Aware Training(QAT)** の違いとして最も適切なものを選びなさい。",
    choices: [
      "PTQ は学習後に量子化(簡易)、QAT は学習中に量子化シミュレーション(精度劣化少)",
      "PTQ の方が高精度",
      "QAT は学習不要",
      "両者は同一",
    ],
    correctIndex: 0,
    explanation:
      "**PTQ**: 学習済モデルを後から量子化(数分で完了、精度劣化あり)。**QAT**: 学習時に量子化シミュレーション(疑似量子化ノード挿入)→ 精度劣化最小だが学習コスト増。",
  },
  {
    id: "aie-q31",
    category: "GAN",
    difficulty: 3,
    question:
      "GAN(Generative Adversarial Networks)の **Mode Collapse** とは何か。",
    choices: [
      "Generator が限られた出力パターンしか生成しなくなる現象",
      "Discriminator が常に勝つ現象",
      "学習が発散して NaN になる現象",
      "GPU メモリが不足する現象",
    ],
    correctIndex: 0,
    explanation:
      "**Mode Collapse**: Generator が **Discriminator を騙せる少数の出力パターンに固着**(多様性消失)。**WGAN ・ Spectral Normalization ・ Mini-batch Discrimination** で緩和。",
  },
  {
    id: "aie-q32",
    category: "強化学習",
    difficulty: 3,
    question:
      "**Q 学習** の Bellman 方程式の更新式として正しいものを選びなさい。",
    choices: [
      "Q(s,a) ← Q(s,a) + α[r + γ·max_a' Q(s',a') - Q(s,a)]",
      "Q(s,a) ← α·Q(s,a)",
      "Q(s,a) ← Q(s,a) - reward",
      "Q(s,a) ← π(s,a)",
    ],
    correctIndex: 0,
    explanation:
      "**Q 学習**: `Q(s,a) ← Q(s,a) + α[r + γ·max_a' Q(s',a') - Q(s,a)]`。α は学習率、γ は割引率、`r + γ·max_a' Q(s',a')` がターゲット。off-policy で探索方策に依存しない。",
  },
  {
    id: "aie-q33",
    category: "Loss",
    difficulty: 3,
    question:
      "クラス不均衡データの 2 値分類で **Cross-Entropy より優れた損失関数** として最も適切なものを選びなさい。",
    choices: [
      "Focal Loss",
      "MSE",
      "MAE",
      "Hinge Loss",
    ],
    correctIndex: 0,
    explanation:
      "**Focal Loss**(Lin et al. 2017): `FL(p_t) = -(1-p_t)^γ · log(p_t)`。**簡単サンプル(p_t 大)の損失を減らし、難サンプルに集中**。RetinaNet の物体検出で初登場、クラス不均衡で頻用。",
  },
  {
    id: "aie-q34",
    category: "最適化",
    difficulty: 3,
    question:
      "Adam Optimizer の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "Momentum + RMSProp の組合せ",
      "1 次 / 2 次モーメントの指数移動平均",
      "学習率を全パラメータ一律に適用(Adaptive ではない)",
      "デフォルトの β1=0.9 / β2=0.999",
    ],
    correctIndex: 2,
    explanation:
      "**Adam は Adaptive(パラメータごとに異なる実効学習率)** が本質。1 次モーメント(平均勾配)+ 2 次モーメント(勾配の二乗平均)で各パラメータの学習率を適応的に調整。AdamW は重み減衰を分離した改良版。",
  },
  {
    id: "aie-q35",
    category: "学習",
    difficulty: 3,
    question:
      "**Transfer Learning(転移学習)** で **Fine-tuning** と **Feature Extraction** の使い分けとして最も適切なものを選びなさい。",
    choices: [
      "データ少 + ドメイン近い: Feature Extraction、データ多 + ドメイン遠い: Fine-tuning",
      "常に Fine-tuning",
      "常に Feature Extraction",
      "両者は同義",
    ],
    correctIndex: 0,
    explanation:
      "**Feature Extraction**: 学習済層を凍結し最終層のみ学習(少データ + 近ドメイン向け)。**Fine-tuning**: 全層 or 上位層を再学習(多データ + 遠ドメイン)。両者の中間として段階的解凍(Gradual Unfreezing)もある。",
  },
  {
    id: "aie-q36",
    category: "U-Net",
    difficulty: 3,
    question:
      "U-Net の **Skip Connection** が解決する問題として最も適切なものを選びなさい。",
    choices: [
      "デコーダで失われる空間的詳細を encoder から直接渡す",
      "学習速度を上げる",
      "メモリを節約する",
      "BatchNorm の代替",
    ],
    correctIndex: 0,
    explanation:
      "**U-Net Skip Connection**: encoder の同サイズ特徴量を decoder にチャネル方向結合(concat)。**Pixel-level セグメンテーションに必須**(細部復元)。医療画像で多用。",
  },
  {
    id: "aie-q37",
    category: "YOLO",
    difficulty: 3,
    question:
      "YOLO(You Only Look Once)の特徴として最も適切なものを選びなさい。",
    choices: [
      "画像を一度だけ NN に通して BBox + クラスを同時予測する 1-stage 検出器",
      "Region Proposal を Selective Search で抽出する 2-stage 検出器",
      "セグメンテーション専用モデル",
      "テキスト分類モデル",
    ],
    correctIndex: 0,
    explanation:
      "**YOLO**: 画像をグリッド分割し各セルで BBox + 信頼度 + クラスを一回で予測。**1-stage detector**(高速)。Faster R-CNN は 2-stage(高精度)。最新は YOLOv8 / YOLOv9 / YOLOv10。",
  },
  {
    id: "aie-q38",
    category: "倫理",
    difficulty: 2,
    question:
      "AI モデル開発における **データセットバイアス** の例として **誤っているもの** を選びなさい。",
    choices: [
      "学習データに特定の性別 / 人種が過剰に含まれる",
      "ラベリング作業者の主観的判断の偏り",
      "サンプリング地域の偏り",
      "GPU の数が少ない",
    ],
    correctIndex: 3,
    explanation:
      "**データセットバイアス**: サンプリング偏り / ラベラー主観 / 歴史的偏見 / 計測機器差。**GPU 数は計算リソースの問題でバイアスではない**。",
  },
  {
    id: "aie-q39",
    category: "Edge AI",
    difficulty: 3,
    question:
      "**Coral / Jetson Nano / Raspberry Pi + Movidius** のような **エッジ AI 端末** で重要視される指標として **誤っているもの** を選びなさい。",
    choices: [
      "推論レイテンシ(ms 単位)",
      "消費電力(W)",
      "メモリフットプリント(MB)",
      "学習時間(時間)",
    ],
    correctIndex: 3,
    explanation:
      "**エッジは推論専用**(学習はクラウド側)。重要指標は **推論レイテンシ / 消費電力 / メモリ / モデルサイズ / TOPS**。学習時間は無関係。",
  },
  {
    id: "aie-q40",
    category: "MLOps",
    difficulty: 3,
    question:
      "**MLflow Tracking** が提供する機能として **誤っているもの** を選びなさい。",
    choices: [
      "実験のパラメータ / メトリクス / アーティファクト記録",
      "モデルのバージョニング(Model Registry)",
      "プロジェクト形式での再現性確保(MLproject)",
      "GPU の物理プロビジョニング",
    ],
    correctIndex: 3,
    explanation:
      "**MLflow の 4 コンポーネント**: Tracking / Projects / Models / Model Registry。**GPU プロビジョニングはクラウド / K8s の役割** で MLflow は無関係。",
  },
  {
    id: "aie-q41",
    category: "LLM Fine-tuning",
    difficulty: 3,
    question:
      "**LoRA(Low-Rank Adaptation)** の特徴として最も適切なものを選びなさい。",
    choices: [
      "ベース重みを凍結し小さな低ランク行列のみ学習することで GPU メモリ ・ ストレージを大幅節約",
      "全パラメータを再学習する",
      "推論を 10× 高速化",
      "学習データを増やす",
    ],
    correctIndex: 0,
    explanation:
      "**LoRA**: `W' = W + B·A`(A: r×k, B: d×r、r は低ランク)。**ベース凍結 + AB のみ学習** で GPU メモリ 3× 削減 + 重みサイズ 1000× 削減。**QLoRA**(4bit 量子化 + LoRA)が更に省メモリ。",
  },
  {
    id: "aie-q42",
    category: "音声",
    difficulty: 3,
    question:
      "**メルスペクトログラム** を作る順序として正しいものを選びなさい。",
    choices: [
      "波形 → STFT → メルフィルタバンク → 対数変換",
      "波形 → 対数変換 → FFT → メルフィルタ",
      "波形 → 直接 CNN へ",
      "波形 → MP3 圧縮 → スペクトログラム",
    ],
    correctIndex: 0,
    explanation:
      "**メルスペクトログラム生成**: 波形 → 短時間フーリエ変換(STFT)→ パワースペクトル → メルフィルタバンクで周波数を人間聴覚に近づける → 対数変換。音声認識 ・ 音楽 ML の標準入力。",
  },
  {
    id: "aie-q43",
    category: "Attention",
    difficulty: 3,
    question:
      "**Self-Attention** の計算量(系列長 n に対する)として最も適切なものを選びなさい。",
    choices: ["O(n²·d)", "O(n·d)", "O(d²)", "O(log n)"],
    correctIndex: 0,
    explanation:
      "**Self-Attention は O(n²·d)** が課題(全ペア計算)。**FlashAttention / Sparse Attention / Linformer / Performer** などで線形時間 O(n·d) 化する手法あり。",
  },
  {
    id: "aie-q44",
    category: "学習データ",
    difficulty: 2,
    question:
      "学習データの拡張(Data Augmentation)で **画像に対する代表的手法** として **誤っているもの** を選びなさい。",
    choices: [
      "Random Crop / Flip / Rotation",
      "Color Jitter / Cutout / Mixup",
      "AutoAugment / RandAugment",
      "ガベージコレクション",
    ],
    correctIndex: 3,
    explanation:
      "画像 Augmentation: 幾何変換(Crop / Flip / Rotate)・ 色変換(Jitter)・ パッチ操作(Cutout / Mixup / CutMix)・ 探索ベース(AutoAugment / RandAugment / TrivialAugment)。GC は無関係。",
  },
  {
    id: "aie-q45",
    category: "活性化",
    difficulty: 3,
    question:
      "活性化関数 **Swish(SiLU)** の式として正しいものを選びなさい。",
    choices: [
      "f(x) = x · σ(x) = x · sigmoid(x)",
      "f(x) = max(0, x)",
      "f(x) = tanh(x)",
      "f(x) = max(0.01x, x)",
    ],
    correctIndex: 0,
    explanation:
      "**Swish / SiLU**: `f(x) = x · σ(x)`(x ・ sigmoid x)。ReLU より滑らか + 小負値も若干通す。EfficientNet / Llama 等で標準。**GELU** は別系統(誤差関数ベース)。",
  },
  {
    id: "aie-q46",
    category: "勾配",
    difficulty: 3,
    question:
      "深層 NN の **勾配消失** を起こしやすい活性化関数を選びなさい。",
    choices: [
      "シグモイド / tanh(両端で勾配 ~ 0)",
      "ReLU(片側で 0)",
      "GELU / Swish(滑らか)",
      "Leaky ReLU",
    ],
    correctIndex: 0,
    explanation:
      "**シグモイド / tanh** は両端で勾配が 0 に近づき深層では勾配消失。**ReLU 系**(ReLU / Leaky ReLU / GELU / Swish)で大幅改善。**Residual Connection ・ BatchNorm ・ He 初期化** も対策。",
  },
  {
    id: "aie-q47",
    category: "Pruning",
    difficulty: 3,
    question:
      "**Pruning(枝刈り)** の効果として **誤っているもの** を選びなさい。",
    choices: [
      "モデルサイズ縮小",
      "推論レイテンシ削減(構造化 Pruning の場合)",
      "推論コスト削減",
      "学習データの増加",
    ],
    correctIndex: 3,
    explanation:
      "**Pruning は重みの 0 化**(Unstructured)or **ニューロン / チャネル削除**(Structured)。データを増やすわけではない。Structured Pruning は実機速度向上、Unstructured は専用 HW が必要。",
  },
  {
    id: "aie-q48",
    category: "ベストプラクティス",
    difficulty: 2,
    question:
      "実装プロジェクトで **最初に確認すべきこと** として最も適切なものを選びなさい。",
    choices: [
      "ベースライン(単純モデル / ヒューリスティック)の精度を測る",
      "GPU の最新モデルを購入する",
      "ハイパーパラメータを総当たり探索する",
      "Transformer を必ず使う",
    ],
    correctIndex: 0,
    explanation:
      "**ベースライン確立は鉄則**。ロジスティック回帰 / Random Forest / ルールベースで簡易精度を出してから DL に進む。**DL を闇雲に試す前に EDA + 単純モデル** が時間 ・ コスト効率の正解。",
  },
  {
    id: "aie-q49",
    category: "実装",
    difficulty: 3,
    question:
      "PyTorch で **GPU が利用可能かを判定** する正しいコードを選びなさい。",
    choices: [
      "torch.cuda.is_available()",
      "torch.gpu.exists()",
      "torch.device.gpu",
      "torch.has_cuda()",
    ],
    correctIndex: 0,
    explanation:
      "**`torch.cuda.is_available()`** で GPU 利用可否を boolean で取得。デバイス選択は `device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')` が定番。Apple Silicon は `torch.backends.mps.is_available()`。",
  },
  {
    id: "aie-q50",
    category: "次のステップ",
    difficulty: 1,
    question:
      "AI 実装検定 B / A / S 級合格後の次のステップとして最も適切なものを選びなさい。",
    choices: [
      "E 資格(JDLA Engineer)で数理的に深掘り",
      "G 検定の再受験",
      "ITパスポート",
      "簿記 3 級",
    ],
    correctIndex: 0,
    explanation:
      "**AI 実装検定 → E 資格(JDLA)** が王道。E 資格は **DL の数理的基礎 + 実装力** を測る。AWS MLA-C01 / GCP Pro ML Engineer など三大クラウド ML 認定にも展開可能。",
  },
  {
    id: "aie-q51",
    category: "PyTorch",
    difficulty: 3,
    question:
      "**PyTorch nn.Module** を継承するクラスで **forward()** をオーバーライドする目的として最も適切なものを選びなさい。",
    choices: [
      "順伝播計算を定義 ・ Autograd が自動で逆伝播グラフを構築",
      "学習率を設定",
      "GPU を初期化",
      "認証を行う",
    ],
    correctIndex: 0,
    explanation:
      "**forward()** で順伝播を定義 → `model(x)` で呼出すと内部的に `__call__` 経由で hooks 込みで実行 ・ Autograd が動的計算グラフ構築。**backward()** は自動生成。",
  },
  {
    id: "aie-q52",
    category: "PyTorch",
    difficulty: 3,
    question:
      "**torch.optim.Adam** のパラメータ更新を実行する正しい順序として最も適切なものを選びなさい。",
    choices: [
      "optimizer.zero_grad() → loss.backward() → optimizer.step()",
      "step → backward → zero_grad",
      "backward → step → zero_grad",
      "zero_grad → step → backward",
    ],
    correctIndex: 0,
    explanation:
      "**学習ループ標準**: ① `zero_grad()`(勾配リセット)② `loss.backward()`(勾配計算)③ `step()`(パラメータ更新)。**勾配リセット忘れで累積エラー** が典型バグ。",
  },
  {
    id: "aie-q53",
    category: "PyTorch",
    difficulty: 3,
    question:
      "**model.eval() + torch.no_grad()** を **推論時** に必ず実行する理由として最も適切なものを選びなさい。",
    choices: [
      "Dropout / BatchNorm を推論モードに + 勾配計算停止でメモリ削減 ・ 高速化",
      "学習率を 0 に",
      "GPU 強制",
      "認証スキップ",
    ],
    correctIndex: 0,
    explanation:
      "**eval()**: Dropout は OFF、BatchNorm は学習時統計を使用。**no_grad()**: Autograd OFF → メモリ削減 + 高速化。**推論時の必須セット**。逆に**train()** で学習モードへ戻す。",
  },
  {
    id: "aie-q54",
    category: "DataLoader",
    difficulty: 3,
    question:
      "**DataLoader** の `num_workers > 0` の効果として最も適切なものを選びなさい。",
    choices: [
      "データ読込を別プロセスで並列化 → I/O ボトルネック解消",
      "GPU 高速化",
      "認証",
      "Cost 削減",
    ],
    correctIndex: 0,
    explanation:
      "**num_workers**: マルチプロセスでバッチ準備並列化。**CPU 数の半分〜全部** が目安。**pin_memory=True** で GPU 転送高速化 ・ **persistent_workers=True** で起動コスト削減。",
  },
  {
    id: "aie-q55",
    category: "TensorFlow",
    difficulty: 3,
    question:
      "**TensorFlow Keras** で `model.compile(optimizer, loss, metrics)` の **metrics** の役割として最も適切なものを選びなさい。",
    choices: [
      "学習中 ・ 評価時に追跡する評価指標(損失とは別)",
      "学習率",
      "GPU 設定",
      "認証",
    ],
    correctIndex: 0,
    explanation:
      "**metrics**: accuracy / AUC / Precision / Recall 等を学習中表示 + History 記録。**loss は勾配計算に使用**(必ず微分可能)。**metrics は勾配計算不要 ・ 評価のみ**。",
  },
  {
    id: "aie-q56",
    category: "TensorFlow",
    difficulty: 3,
    question:
      "**tf.data.Dataset.prefetch(tf.data.AUTOTUNE)** の効果として最も適切なものを選びなさい。",
    choices: [
      "CPU データ準備と GPU 計算を **重ね合わせ** → スループット向上",
      "全データオンメモリ",
      "GPU 専用化",
      "認証",
    ],
    correctIndex: 0,
    explanation:
      "**prefetch**: 次バッチを GPU 計算中に CPU で準備。**AUTOTUNE** で動的最適化。**`cache → shuffle → batch → prefetch`** が tf.data の標準パイプライン順序。",
  },
  {
    id: "aie-q57",
    category: "Mixed Precision",
    difficulty: 3,
    question:
      "**Mixed Precision Training**(FP16 / BF16)の利点として最も適切なものを選びなさい。",
    choices: [
      "メモリ半減 + GPU Tensor Core で 2-3x 高速 + 精度維持(Loss Scaling 併用)",
      "FP32 より精度向上",
      "GPU 不要",
      "認証",
    ],
    correctIndex: 0,
    explanation:
      "**Mixed Precision**: FP16(範囲狭・Loss Scaling 必須)/ BF16(範囲広・スケール不要)。PyTorch `torch.cuda.amp.autocast`、TF `mixed_precision.set_global_policy('mixed_float16')`。A100/H100 で爆速。",
  },
  {
    id: "aie-q58",
    category: "Distributed",
    difficulty: 3,
    question:
      "**PyTorch DDP(DistributedDataParallel)** が **DataParallel** より好まれる理由として最も適切なものを選びなさい。",
    choices: [
      "プロセス分離 + AllReduce で複数 GPU/ノードで高速 ・ DataParallel(単プロセス)より効率",
      "GUI 改善",
      "認証",
      "Cost 削減",
    ],
    correctIndex: 0,
    explanation:
      "**DDP**: プロセス毎に GPU 1 枚 + AllReduce で勾配同期 → 線形スケール ・ マルチノード対応。**DataParallel**: 単プロセス + GIL → スケールせず。**FSDP / DeepSpeed ZeRO** で更に省メモリ。",
  },
  {
    id: "aie-q59",
    category: "Hugging Face",
    difficulty: 3,
    question:
      "**Hugging Face Transformers** で `AutoModelForSequenceClassification.from_pretrained(\"bert-base-uncased\")` の意味として最も適切なものを選びなさい。",
    choices: [
      "事前学習 BERT + 分類ヘッドを Hub からロード → Fine-tuning ベース",
      "新規学習",
      "GUI ロード",
      "認証",
    ],
    correctIndex: 0,
    explanation:
      "**from_pretrained**: Hub から重み + 設定 + Tokenizer をダウンロード(Cache 化)。**AutoModelFor***Classification/QA/TokenClassification 等タスク別ヘッド付きクラス**。Trainer API で簡単に Fine-tune。",
  },
  {
    id: "aie-q60",
    category: "LangChain",
    difficulty: 3,
    question:
      "**LangChain** の **Chain** と **Agent** の違いとして最も適切なものを選びなさい。",
    choices: [
      "Chain=静的なシーケンス、Agent=LLM がツール選択して動的に行動",
      "両者同じ",
      "Chain=GUI、Agent=CLI",
      "Chain=GPU、Agent=CPU",
    ],
    correctIndex: 0,
    explanation:
      "**Chain**: 事前定義の処理順(LLM → Output Parser 等)。**Agent**: LLM が ReAct パターンで **Tool 呼び出しを動的判断** → 検索 / API / 計算機。**LangGraph** で Stateful Agent。",
  },
  {
    id: "aie-q61",
    category: "ONNX",
    difficulty: 3,
    question:
      "**ONNX(Open Neural Network Exchange)** の役割として最も適切なものを選びなさい。",
    choices: [
      "FW 共通モデル形式 → PyTorch ↔ TF ↔ ONNX Runtime / TensorRT 等で相互運用",
      "学習専用 FW",
      "GUI",
      "認証",
    ],
    correctIndex: 0,
    explanation:
      "**ONNX**: モデル交換フォーマット。**ONNX Runtime**(CPU / GPU / Mobile)・ **TensorRT**(NVIDIA 最適化)・ **OpenVINO**(Intel)で本番推論加速。**torch.onnx.export** で書出し。",
  },
  {
    id: "aie-q62",
    category: "Quantization",
    difficulty: 3,
    question:
      "**Post-Training Quantization(PTQ)** と **Quantization-Aware Training(QAT)** の違いとして最も適切なものを選びなさい。",
    choices: [
      "PTQ=学習後に変換(速い ・ 精度劣化リスク)、QAT=学習中に量子化シミュレート(精度高 ・ コスト高)",
      "両者同じ",
      "PTQ は GPU 専用",
      "QAT は CPU 専用",
    ],
    correctIndex: 0,
    explanation:
      "**PTQ**: 学習済モデルを INT8 / FP16 化(キャリブレーション小データ)。**QAT**: 学習時 Fake Quant Layer 挿入 → 量子化耐性。**精度重視なら QAT、簡便なら PTQ**。**LLM では GPTQ / AWQ / Bitsandbytes** が主流。",
  },
  {
    id: "aie-q63",
    category: "Serving",
    difficulty: 3,
    question:
      "**TorchServe / TensorFlow Serving** の役割として最も適切なものを選びなさい。",
    choices: [
      "学習済モデルを REST/gRPC API として高性能サーブ ・ Versioning / Batch / Metrics",
      "学習用",
      "GUI",
      "認証専用",
    ],
    correctIndex: 0,
    explanation:
      "**Serving FW**: モデルを HTTP/gRPC で公開 + Dynamic Batching + A/B Routing + Prometheus Metrics + Model Versioning。**vLLM / TGI / Triton Inference Server** は LLM 系で主流。",
  },
  {
    id: "aie-q64",
    category: "MLOps",
    difficulty: 3,
    question:
      "**MLflow** の **4 つの主要モジュール** として **誤っているもの** を選びなさい。",
    choices: [
      "Tracking(実験記録)",
      "Projects(再現可能パッケージ)",
      "Models(モデル形式 / Flavor)",
      "GPU-Manager",
    ],
    correctIndex: 3,
    explanation:
      "**MLflow 4 モジュール**: Tracking / Projects / Models / **Model Registry**。**Tracking** で metric / param / artifact 記録 ・ **Registry** で本番デプロイ管理。Databricks / Azure ML / SageMaker が MLflow 互換。",
  },
  {
    id: "aie-q65",
    category: "実務",
    difficulty: 3,
    question:
      "AI 実装検定で重視される **実装スキル + MLOps 知識の統合** として最も適切なものを選びなさい。",
    choices: [
      "PyTorch / TF 実装 + DataLoader 設計 + 評価 + Serving + Monitoring + Versioning の総合",
      "数学のみ",
      "GUI のみ",
      "Excel のみ",
    ],
    correctIndex: 0,
    explanation:
      "**AI 実装検定の総合領域**: FW 操作(PyTorch / TF / HF)+ データパイプライン + 学習ループ + 評価 + 量子化 ・ 蒸留 + Serving + Monitoring + Drift 検知 + Versioning。**E 資格との橋渡し**となる実装試験。",
  },
];
