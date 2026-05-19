import type { Question } from "@/types/content";

export const eShikakuQuestions: Question[] = [
  {
    id: "esh-q1",
    difficulty: 1,
    category: "数学的基礎",
    question:
      "$3 \\times 4$ 行列 $A$ と $4 \\times 5$ 行列 $B$ の積 $AB$ の形として正しいものを選びなさい。",
    choices: ["$3 \\times 5$", "$4 \\times 4$", "$5 \\times 3$", "計算できない"],
    correctIndex: 0,
    explanation:
      "行列積では『$A$ の列数 = $B$ の行数』が必要。一致しているので積は計算可能で、形は $A$ の行数 × $B$ の列数 = $3 \\times 5$。",
  },
  {
    id: "esh-q2",
    difficulty: 2,
    category: "数学的基礎",
    question:
      "実対称行列の固有値分解 $A = V \\Lambda V^\\top$ について、$V$ が満たす性質として最も適切なものは?",
    choices: ["対角行列", "直交行列(V V^⊤ = I)", "上三角行列", "正規分布の共分散行列"],
    correctIndex: 1,
    explanation:
      "実対称行列の固有値分解では、固有ベクトルを並べた $V$ は **直交行列**(V V^⊤ = I)になる。固有値は対角行列 $\\Lambda$ に並ぶ。",
  },
  {
    id: "esh-q3",
    difficulty: 2,
    category: "情報理論",
    question:
      "KL ダイバージェンス $D_{KL}(P\\|Q)$ の性質として誤っているものを 1 つ選びなさい。",
    choices: [
      "常に 0 以上の値を取る",
      "P = Q のとき 0 になる",
      "対称($D_{KL}(P\\|Q) = D_{KL}(Q\\|P)$)である",
      "$P$ と $Q$ のずれを表す",
    ],
    correctIndex: 2,
    explanation:
      "KL は **非対称** で、一般に $D_{KL}(P\\|Q) \\neq D_{KL}(Q\\|P)$。他の選択肢はすべて正しい性質。",
  },
  {
    id: "esh-q4",
    difficulty: 2,
    category: "情報理論",
    question:
      "分類問題の損失関数として **交差エントロピー** が標準的に使われる理由として最も適切なのは?",
    choices: [
      "計算が高速だから",
      "最尤推定の対数尤度の最大化と等価だから",
      "微分しても定数になるから",
      "出力層が線形変換だけで済むから",
    ],
    correctIndex: 1,
    explanation:
      "交差エントロピー最小化 = 観測ラベルへの対数尤度最大化。確率モデルの最尤推定と等価で、理論的に自然。",
  },
  {
    id: "esh-q5",
    difficulty: 1,
    category: "機械学習基礎",
    question:
      "L1 正則化(ラッソ)の特徴として最も適切なものを選びなさい。",
    choices: [
      "重みが滑らかに小さくなる",
      "重みのいくつかが完全にゼロになる(スパース解)",
      "重みが必ず正になる",
      "外れ値に弱くなる",
    ],
    correctIndex: 1,
    explanation:
      "L1 罰則(ダイヤモンド型)の幾何学から、最適点は座標軸上に来やすい → スパース解。L2 は球型なので滑らかに収縮する。",
  },
  {
    id: "esh-q6",
    difficulty: 2,
    category: "機械学習基礎",
    question:
      "k-fold 交差検証(K=5)で得られる分割数として正しいものを選びなさい。",
    choices: [
      "訓練 1 / 検証 1 = 計 2 セット",
      "訓練 5 / 検証 5 = 計 5 セット",
      "訓練 4/5 / 検証 1/5 を 5 通り",
      "訓練 1/2 / 検証 1/2 を 2 通り",
    ],
    correctIndex: 2,
    explanation:
      "K-Fold CV ではデータを K 分割し、各分割を 1 回ずつ検証データに使う。K=5 なら 5 通りの (訓練 4/5, 検証 1/5) を作って性能の平均を取る。",
  },
  {
    id: "esh-q7",
    difficulty: 2,
    category: "ニューラルネット",
    question:
      "活性化関数 ReLU の **欠点** として最も指摘されるものを選びなさい。",
    choices: [
      "出力が (0, 1) に制限される",
      "微分が複雑で逆伝播が重い",
      "負の領域で勾配が 0 になり、ニューロンが死ぬ問題(dying ReLU)",
      "勾配爆発が起きやすい",
    ],
    correctIndex: 2,
    explanation:
      "ReLU は負の領域で勾配 0 → 一度負に入ったニューロンが学習しない問題(dying ReLU)。Leaky ReLU や ELU で対策。",
  },
  {
    id: "esh-q8",
    difficulty: 2,
    category: "ニューラルネット",
    question:
      "ResNet の革新的な点として、最も本質的なのはどれか。",
    choices: [
      "畳み込みカーネルを 1×1 にした",
      "残差接続(skip connection)で勾配を直接伝える経路を作った",
      "Sigmoid を ReLU に置き換えた",
      "FC 層を完全になくした",
    ],
    correctIndex: 1,
    explanation:
      "ResNet の核心は **skip connection**: $\\mathbf{a}^{(l)} = \\mathbf{a}^{(l-1)} + F(\\cdot)$。これで勾配が損失なく前の層に伝わり、100 層以上の深層学習が可能になった。",
  },
  {
    id: "esh-q9",
    difficulty: 2,
    category: "最適化",
    question:
      "Adam 最適化アルゴリズムの特徴として正しい説明はどれか。",
    choices: [
      "勾配を直接使うシンプルな手法で、一切の状態を持たない",
      "Momentum と RMSProp を組合せ、各パラメータの学習率を適応的に調整",
      "2 次微分(ヘッセ行列)を使う",
      "学習率を一切調整しない",
    ],
    correctIndex: 1,
    explanation:
      "Adam = Adaptive Moment Estimation。1 次モーメント(Momentum)と 2 次モーメント(RMSProp)の両方を保持し、要素ごとに学習率を適応的に決める。",
  },
  {
    id: "esh-q10",
    difficulty: 2,
    category: "ニューラルネット",
    question:
      "バッチ正規化(BatchNorm)の効果として誤っているのはどれか。",
    choices: [
      "学習を高速化する",
      "勾配消失を緩和する",
      "テスト時にもバッチが必要",
      "正則化効果がある",
    ],
    correctIndex: 2,
    explanation:
      "BatchNorm は学習時にバッチ統計を使うが、**推論時はバッチ全体の移動平均** を使うのでバッチが不要。他の選択肢は正しい性質。",
  },
  {
    id: "esh-q11",
    difficulty: 1,
    category: "CNN",
    question:
      "CNN で **重み共有(parameter sharing)** が行われる理由として最も適切なのは?",
    choices: [
      "計算を簡単にするため",
      "画像の平行移動不変性を活かし、パラメータ数を大幅に減らすため",
      "GPU メモリの制約のため",
      "畳み込みが必ず 3×3 だから",
    ],
    correctIndex: 1,
    explanation:
      "同じカーネルを画像全体にスライドさせる(重み共有)ので、画像のどこに特徴があっても同じフィルタで検出できる。パラメータ数も大幅減。",
  },
  {
    id: "esh-q12",
    difficulty: 3,
    category: "RNN/LSTM",
    question:
      "LSTM が基本 RNN と比べて優れている点として最も本質的なのは?",
    choices: [
      "より多くのパラメータを持つ",
      "ゲート機構により長期依存を選択的に記憶・忘却できる",
      "計算が速い",
      "活性化関数が違う",
    ],
    correctIndex: 1,
    explanation:
      "基本 RNN は『過去を全部重みつきで足す』ので長期依存で勾配消失。LSTM は **忘却・入力・出力ゲート** で『どれだけ覚える/捨てる/出力する』を学習可能にし、長期依存を保持できる。",
  },
  {
    id: "esh-q13",
    difficulty: 2,
    category: "Transformer",
    question:
      "Transformer の Self-Attention で、$Q K^\\top$ を $\\sqrt{d_k}$ で割る目的は?",
    choices: [
      "計算量を減らす",
      "次元が大きいときに内積値が大きくなりすぎ、softmax の勾配が消失するのを防ぐ",
      "値を確率に変換する",
      "並列化を可能にする",
    ],
    correctIndex: 1,
    explanation:
      "次元 $d_k$ が大きいと $Q K^\\top$ の値も大きくなり、softmax 出力が極端に偏って勾配が消える。$\\sqrt{d_k}$ で割ってスケールを調整 → 学習の安定化。",
  },
  {
    id: "esh-q14",
    difficulty: 2,
    category: "Transformer",
    question:
      "BERT と GPT の違いとして最も正確な説明はどれか。",
    choices: [
      "BERT は CNN ベース、GPT は RNN ベース",
      "BERT は Encoder のみで MLM(マスク予測)、GPT は Decoder のみで自己回帰",
      "両者とも双方向の Encoder-Decoder",
      "BERT は教師なし学習なし、GPT は教師あり学習なし",
    ],
    correctIndex: 1,
    explanation:
      "BERT(Encoder のみ・双方向 MLM)→ 文を埋め込んで分類等に使う。GPT(Decoder のみ・自己回帰)→ 次の単語予測で文章生成。両者とも Transformer ベースだが用途で構成が違う。",
  },
  {
    id: "esh-q15",
    difficulty: 3,
    category: "強化学習",
    question:
      "Q 学習について、もっとも正確な説明はどれか。",
    choices: [
      "オンポリシー手法で、現在の方策に従って学習する",
      "オフポリシー手法で、現在の方策と異なる方策で学習可能",
      "方策を直接ニューラルネットでモデル化する",
      "報酬の即時値のみを最大化する",
    ],
    correctIndex: 1,
    explanation:
      "Q 学習は **オフポリシー**: 現在の方策(例: ε-greedy)で行動選択しつつ、更新では『最適方策で取った場合の Q 値』(max を取る)で学習する。",
  },
  {
    id: "esh-q16",
    difficulty: 3,
    category: "生成モデル",
    question:
      "VAE と GAN の違いとして最も正確なものを選びなさい。",
    choices: [
      "両者とも明示的な確率モデルを学習する",
      "VAE は変分下界(ELBO)を最大化、GAN は生成器と識別器のミニマックスゲーム",
      "VAE はサンプル品質が GAN より常に高い",
      "GAN は潜在変数を持たない",
    ],
    correctIndex: 1,
    explanation:
      "VAE は確率モデルで ELBO 最大化(変分推論)。GAN は明示的な確率モデルなしで、識別器との競争で生成器が真の分布に近づく。両者とも潜在変数を持つが、扱い方が異なる。",
  },
  {
    id: "esh-q17",
    difficulty: 2,
    category: "実装",
    question:
      "深層学習モデルの **量子化(Quantization)** の効果として最も正確な説明は?",
    choices: [
      "精度を保ったまま、モデルサイズと推論速度を改善する(典型的に 4 倍小さく・2-4 倍速く)",
      "モデルのパラメータ数を増やす",
      "学習の安定性を上げる",
      "勾配計算を速くする",
    ],
    correctIndex: 0,
    explanation:
      "量子化は重み・活性を float32 → int8 に変換。サイズ 1/4・推論 2-4 倍速・精度低下は通常 1% 未満。エッジデバイス推論で必須技術。",
  },
  {
    id: "esh-q18",
    difficulty: 3,
    category: "実装",
    question:
      "知識蒸留(Knowledge Distillation)とは何か、もっとも正確な説明を選びなさい。",
    choices: [
      "大きい教師モデルの出力(soft target)を学習目標として、小さい生徒モデルを学習させる",
      "学習データを加工して水増しする",
      "特徴量を主成分分析で圧縮する",
      "モデルから重要度の低い重みを削除する",
    ],
    correctIndex: 0,
    explanation:
      "蒸留は『大きい教師の振る舞いを小さい生徒に真似させる』。BERT → DistilBERT(40% 小型・60% 速度・性能 95%維持)が代表例。プルーニング(重み削除)とは別概念。",
  },
  {
    id: "esh-q19",
    difficulty: 2,
    category: "AI 倫理",
    question:
      "AI システムの **公平性(Fairness)** において、Demographic Parity と Equal Opportunity が一般に両立しないことが知られている。この事実が示唆するのは?",
    choices: [
      "公平性の定義は 1 つに統一されている",
      "公平性には複数の定義があり、社会的にどれを優先するかが議論となる",
      "AI の公平性は技術だけで解決できる",
      "Demographic Parity が常に正しい指標である",
    ],
    correctIndex: 1,
    explanation:
      "公平性の数学的定義は複数(Demographic Parity / Equal Opportunity / Equalized Odds 等)あり、相互に両立しない。どれを採用するかは技術ではなく社会的・倫理的判断。",
  },
  {
    id: "esh-q20",
    difficulty: 2,
    category: "AI 倫理",
    question:
      "差分プライバシー(Differential Privacy)の特徴として最も正確な説明は?",
    choices: [
      "個人データを暗号化して計算する",
      "個別レコードの有無で出力分布がほぼ変わらないようノイズを加え、特定リスクを数学的に保証する",
      "データを匿名化して個人情報を削除する",
      "アクセス権限で保護する",
    ],
    correctIndex: 1,
    explanation:
      "差分プライバシーは **数学的な保護保証**: 1 人を加える/除いてもクエリ結果の確率分布がほぼ同じ(ε-differential privacy)。米国国勢調査 2020 で採用、現代のプライバシー保護の標準。",
  },
  {
    id: "es-q-attn-1",
    difficulty: 2,
    category: "Transformer",
    question:
      "Self-Attention で計算される $\\mathrm{softmax}(QK^\\top / \\sqrt{d_k}) V$ について、$\\sqrt{d_k}$ で割る目的として最も適切なものはどれか。",
    choices: [
      "内積のスケールが大きくなりすぎてソフトマックスの勾配が消失するのを防ぐ",
      "計算量を削減する",
      "正則化を強くする",
      "値を整数に丸める",
    ],
    correctIndex: 0,
    explanation:
      "$d_k$ が大きいと $QK^\\top$ の値の分散が増え、ソフトマックスが極端に尖って勾配が消える。$\\sqrt{d_k}$ で割って標準化することで安定する(Attention is All You Need 論文で導入)。",
  },
  {
    id: "es-q-mha",
    difficulty: 2,
    category: "Transformer",
    question:
      "Multi-Head Attention の利点として最も適切な説明はどれか。",
    choices: [
      "異なる表現サブ空間で同時に注意を計算でき、文法的関係・意味的関係など多様なパターンを並列で捉えられる",
      "計算量が単純な Attention より小さくなる",
      "パラメータ数が削減される",
      "学習データが少なくて済む",
    ],
    correctIndex: 0,
    explanation:
      "$h$ 個のヘッドが各 $d/h$ 次元のサブ空間で別々に注意を計算する。文法・意味・指示関係など、異なる側面を並列で捉えられるのが利点。",
  },
  {
    id: "es-q-bn-ln",
    difficulty: 2,
    category: "正規化",
    question:
      "Batch Normalization と Layer Normalization の主な違いとして最も適切なものはどれか。",
    choices: [
      "BN はバッチ内の同じチャネルで正規化、LN は同一サンプルの全特徴量で正規化する。RNN/Transformer では LN が標準",
      "BN は分類問題のみ、LN は回帰のみで使う",
      "BN は GPU で動かない",
      "LN はバッチサイズが大きくないと使えない",
    ],
    correctIndex: 0,
    explanation:
      "BN はミニバッチ統計量に依存するためバッチサイズが小さい/系列長が可変の RNN/Transformer に向かない。LN はサンプル内で正規化するためバッチサイズに依存せず、Transformer 系の標準。",
  },
  {
    id: "es-q-adam",
    difficulty: 2,
    category: "最適化",
    question:
      "Adam オプティマイザの主な特徴として最も適切な説明はどれか。",
    choices: [
      "1 次モーメント(勾配)と 2 次モーメント(勾配の二乗)の指数移動平均を使い、パラメータごとに適応的な学習率を計算する",
      "全パラメータに同じ学習率を使う",
      "学習率を一切持たない",
      "勾配を使わずに最適化する",
    ],
    correctIndex: 0,
    explanation:
      "Adam = Adaptive Moment Estimation。$m_t$(1 次モーメント)と $v_t$(2 次モーメント)の指数移動平均を用い、$\\hat{m}_t / (\\sqrt{\\hat{v}_t} + \\epsilon)$ でパラメータ更新。SGD・モメンタム・RMSprop の良いところを統合した万能型。",
  },
  {
    id: "es-q-dropout",
    difficulty: 2,
    category: "正則化",
    question:
      "Dropout の主な役割として最も適切な説明はどれか。",
    choices: [
      "学習時にニューロンを確率 $p$ でゼロにすることで、複数のサブネットワークのアンサンブルとして機能し過学習を抑制",
      "推論時にメモリを節約する",
      "勾配消失を防ぐ",
      "活性化関数を非線形にする",
    ],
    correctIndex: 0,
    explanation:
      "Dropout (Srivastava et al. 2014) は学習時に各ニューロンをランダムにゼロにする。これは多数のサブネットワークの暗黙的アンサンブルで、強力な正則化効果がある。推論時は全ニューロンを使い、出力をスケール調整する。",
  },
  {
    id: "es-q-lora",
    difficulty: 3,
    category: "ファインチューニング",
    question:
      "LoRA (Low-Rank Adaptation) で元のモデル重み $W \\in \\mathbb{R}^{d \\times d}$ を更新する方法として最も適切なものはどれか。",
    choices: [
      "$W$ を凍結し、$\\Delta W = AB$($A \\in \\mathbb{R}^{d \\times r}, B \\in \\mathbb{R}^{r \\times d}$、$r \\ll d$)を学習対象とする",
      "$W$ 全体を再学習する",
      "$W$ をゼロに初期化する",
      "$W$ をランダム化する",
    ],
    correctIndex: 0,
    explanation:
      "LoRA は重み更新を低ランク行列の積で近似。学習対象が $2 \\times d \\times r$($r$ は通常 8〜64)に減るため、$d^2$ より遥かに少ない。VRAM とディスクを大幅削減し、QLoRA では消費者 GPU で大規模モデルがファインチューン可能。",
  },
  {
    id: "es-q-rlhf",
    difficulty: 3,
    category: "RLHF",
    question:
      "RLHF (Reinforcement Learning from Human Feedback) の典型的な手順として最も適切なものはどれか。",
    choices: [
      "(1) SFT で指示応答ペアでファインチューン → (2) 人間の好み比較で報酬モデルを学習 → (3) PPO で報酬を最大化するよう LLM を強化学習",
      "人間がすべての応答を直接ラベル付けする",
      "勾配降下を一切使わない",
      "事前学習データだけでファインチューンを行う",
    ],
    correctIndex: 0,
    explanation:
      "RLHF は 3 段階。(1) SFT で指示追従、(2) 人間が「A と B どちらが良いか」を比較ラベル付けして報酬モデル(RM)を学習、(3) PPO で RM が高い報酬を出す方向に LLM を強化学習。ChatGPT・Claude・Gemini はこの枠組みで訓練。",
  },
  {
    id: "es-q-diff",
    difficulty: 3,
    category: "拡散モデル",
    question:
      "拡散モデル(DDPM)の Forward 過程と Reverse 過程について最も適切な説明はどれか。",
    choices: [
      "Forward は画像にガウスノイズを徐々に加える固定の過程、Reverse はノイズから画像を復元する学習可能な過程",
      "Forward と Reverse のどちらも学習対象",
      "Forward は学習対象、Reverse は固定",
      "両方とも GAN と同じ敵対的学習で訓練",
    ],
    correctIndex: 0,
    explanation:
      "Forward は数学的に定義されたノイズ追加過程で、学習不要。Reverse はニューラルネットがノイズを予測する学習過程で、$\\mathcal{L} = \\mathbb{E}[\\| \\epsilon - \\epsilon_\\theta(x_t, t) \\|^2]$ を最小化。生成時はランダムノイズから Reverse を逆向きに辿る。",
  },
  {
    id: "es-q-quant",
    difficulty: 3,
    category: "量子化",
    question:
      "深層学習モデルの量子化(quantization)について、INT8 量子化の利点として最も適切なものはどれか。",
    choices: [
      "FP32 と比べて 4 倍のメモリ効率と高速な推論を実現できる(精度低下は通常 1〜2% 程度)",
      "学習時間が短縮される",
      "勾配がより安定する",
      "過学習が抑制される",
    ],
    correctIndex: 0,
    explanation:
      "FP32 (32 ビット) を INT8 (8 ビット) に量子化するとメモリ・帯域・演算量が 4 倍効率化。Post-Training Quantization (PTQ) と Quantization-Aware Training (QAT) の 2 手法。",
  },
  {
    id: "es-q-foundation",
    difficulty: 2,
    category: "基盤モデル",
    question:
      "「基盤モデル(Foundation Model)」の特徴として最も適切な説明はどれか。",
    choices: [
      "大規模データで自己教師あり事前学習され、ファインチューンや Few-shot で多様な下流タスクに適応できるモデル",
      "完全に教師あり学習のみで作られたモデル",
      "1 つのタスクに特化したモデル",
      "小規模モデルのみを指す",
    ],
    correctIndex: 0,
    explanation:
      "「Foundation Model」は Stanford の Bommasani et al. (2021) が提唱した用語。大規模データで事前学習し、下流タスクへの転移を主目的とするモデル。GPT・Claude・BERT・Stable Diffusion・SAM などが該当。",
  },
  {
    id: "es-q-ssl-1",
    difficulty: 2,
    category: "自己教師あり学習",
    question:
      "Contrastive Learning(対照学習)で使われる InfoNCE 損失の基本的な仕組みとして最も適切な記述はどれか。",
    choices: [
      "正例ペアの埋め込みを近づけ、負例ペアの埋め込みを遠ざけるよう、ソフトマックス交差エントロピー型の損失を最適化する",
      "ピクセル単位の MSE を最小化する",
      "教師ラベルとの一致を直接最大化する",
      "ガウス対数尤度を最大化する",
    ],
    correctIndex: 0,
    explanation:
      "InfoNCE では同じ画像の Augment 版を正例ペア、他画像を負例として、コサイン類似度をソフトマックスに通した分布で交差エントロピーを取る。SimCLR・MoCo などの基盤。温度パラメータ τ で分布の鋭さを制御する。",
  },
  {
    id: "es-q-active-1",
    difficulty: 2,
    category: "能動学習",
    question:
      "能動学習の獲得関数として『Uncertainty Sampling』が選ぶサンプルとして最も適切な記述はどれか。",
    choices: [
      "モデルが予測に最も自信がない(エントロピー高 / 最大確率小)サンプル",
      "モデルが予測に最も自信があるサンプル",
      "ランダムに選ばれたサンプル",
      "入力空間の中心に最も近いサンプル",
    ],
    correctIndex: 0,
    explanation:
      "Uncertainty Sampling は『分からない例から学ぶ』戦略。最大確率が小さい・エントロピーが大きい・margin(1位と2位の差)が小さいサンプルを優先してラベル付け。BALD は Bayesian な拡張で、パラメータの不確実性も考慮する。",
  },
  {
    id: "es-q-fed-1",
    difficulty: 2,
    category: "連合学習",
    question:
      "FedAvg(Federated Averaging)の基本動作として最も適切な記述はどれか。",
    choices: [
      "各クライアントがローカルで数エポック学習し、サーバが各クライアントの重みをデータ量で重み付け平均する",
      "全クライアントのデータをサーバに送信して中央集約学習する",
      "クライアント間で勾配を直接ピア間共有する",
      "サーバがクライアントの代わりに学習する",
    ],
    correctIndex: 0,
    explanation:
      "FedAvg は McMahan et al. (2017)。$w_{t+1} = \\sum_k (n_k/n) w_t^k$ で集約。データを動かさずにモデル更新だけを共有することで、医療・金融・モバイルでプライバシー保護学習を実現する。",
  },
  {
    id: "es-q-fed-2",
    difficulty: 3,
    category: "連合学習",
    question:
      "連合学習の主要課題のうち、Non-IID データ問題への代表的な対策手法はどれか。",
    choices: [
      "FedProx・SCAFFOLD・FedNova などのアルゴリズム",
      "FedAvg の単純な拡張で十分",
      "クライアントを 1 台に絞る",
      "学習を中断する",
    ],
    correctIndex: 0,
    explanation:
      "クライアント間でデータ分布が偏ると FedAvg の収束が悪化する。FedProx は近接項で局所更新を制御、SCAFFOLD はクライアント・サーバ両側でドリフト補正、FedNova はローカルエポック数の不均衡を補正、と各手法が異なる Non-IID 問題に対処する。",
  },
  {
    id: "es-q-pruning",
    difficulty: 2,
    category: "モデル軽量化",
    question:
      "プルーニングの分類で『構造化プルーニング』が非構造化プルーニングと比較して優れている点として最も適切なものはどれか。",
    choices: [
      "チャネル・ヘッド・層単位で削除するため、専用ハードなしでも実推論速度が向上する",
      "個別重みを削除するため、最大限のスパース化が可能",
      "学習時間が短縮される",
      "理論的な圧縮率が常に高い",
    ],
    correctIndex: 0,
    explanation:
      "非構造化プルーニング(個別重みを 0 にする)は理論的圧縮率は高いが、専用スパース演算ハードがないと実速度が出ない。構造化プルーニング(チャネル・ヘッド単位)は標準 GPU/CPU でそのまま高速化されるため実用性が高い。",
  },
  {
    id: "es-q-distill",
    difficulty: 2,
    category: "知識蒸留",
    question:
      "知識蒸留で『温度パラメータ T』を 1 より大きくする目的として最も適切な記述はどれか。",
    choices: [
      "教師の出力分布をソフト化し、クラス間の類似度構造を生徒に伝える",
      "推論を高速化する",
      "教師モデルを軽量化する",
      "学習データの数を減らす",
    ],
    correctIndex: 0,
    explanation:
      "温度を上げたソフトマックスはより滑らかな分布になり、Hard label にはない『犬と狼は似ている』のようなクラス間の相対関係(Soft Target の情報)を生徒が学べる。Hinton et al. (2015) の蒸留論文が基礎。",
  },
  {
    id: "es-q-quant-2",
    difficulty: 3,
    category: "量子化",
    question:
      "QLoRA で採用されている NF4(Normal Float 4)量子化の特徴として最も適切な記述はどれか。",
    choices: [
      "正規分布に従う重みを 4 bit で表現するために最適化された量子化形式で、精度低下を抑える",
      "整数のみを表現できる",
      "8 bit 量子化と等価",
      "精度を犠牲にして速度のみを最適化する",
    ],
    correctIndex: 0,
    explanation:
      "NF4 は事前学習済み LLM の重みが正規分布に近い性質を利用し、その分布に最適化された 4 bit 量子化方式(Dettmers et al. 2023)。標準的な INT4 より精度低下が小さく、QLoRA で 65B モデルを 48GB GPU で扱える理由。",
  },
  { id: "e-q38", category: "Transformer", difficulty: 3, question: "**Cross-Attention** の **Vanilla Self-Attention** との違いとして最も適切なものを選びなさい。", choices: ["Q は target、K/V は source(encoder-decoder で別系列を結合)", "完全同一", "計算量増", "GPU 不要"], correctIndex: 0, explanation: "**Cross-Attention**: Q = decoder hidden、K/V = encoder hidden。**Seq2Seq Transformer**(翻訳 / Summary)・ **マルチモーダル**(画像 → テキスト)で使用。" },
  { id: "e-q39", category: "RAG", difficulty: 3, question: "**RAG の Retrieval** で **MRR(Mean Reciprocal Rank)** の意味として最も適切なものを選びなさい。", choices: ["正解文書の Rank の逆数の平均(1/rank)", "Precision のみ", "Recall のみ", "GPU 数"], correctIndex: 0, explanation: "**MRR = (1/N) Σ 1/rank_i**。正解が上位にあるほど高評価。**NDCG / Recall@K / MAP** と並ぶ Retrieval 評価指標。" },
  { id: "e-q40", category: "強化学習", difficulty: 3, question: "**PPO(Proximal Policy Optimization)** の特徴として最も適切なものを選びなさい。", choices: ["方策の更新幅を制限(Clipping)→ 安定 + サンプル効率", "完全 Off-policy", "Q 学習と同一", "TD のみ"], correctIndex: 0, explanation: "**PPO**: 旧方策との Ratio をクリッピング → 大きな更新を防ぐ。**RLHF / ChatGPT 学習** で実用された代表的手法。" },
  { id: "e-q41", category: "強化学習", difficulty: 3, question: "**Actor-Critic** の説明として最も適切なものを選びなさい。", choices: ["Actor が方策、Critic が価値関数を学習し協調", "Critic だけ", "Actor だけ", "DB 連携"], correctIndex: 0, explanation: "**Actor-Critic**: 方策(Actor)+ 価値関数(Critic、Baseline で分散削減)。**A2C / A3C / PPO / SAC** などのファミリ。" },
  { id: "e-q42", category: "GAN", difficulty: 3, question: "**GAN の Wasserstein 距離(WGAN)** の利点として最も適切なものを選びなさい。", choices: ["KL/JS Divergence より勾配が安定 → 学習が崩壊しにくい", "計算高速", "GPU 不要", "ラベル不要"], correctIndex: 0, explanation: "**WGAN**: Wasserstein-1 距離(Earth-Mover)で勾配安定。**Lipschitz 制約(Weight Clipping / Gradient Penalty)** で実装。Mode Collapse 緩和。" },
  { id: "e-q43", category: "Diffusion", difficulty: 3, question: "**Stable Diffusion** での **U-Net** の役割として最も適切なものを選びなさい。", choices: ["潜在空間でノイズを推定(各 timestep で)", "VAE Encoder", "Tokenizer", "認証"], correctIndex: 0, explanation: "**Stable Diffusion 構成**: VAE Encoder → U-Net(ノイズ予測、Cross-Attention でテキスト条件化)→ VAE Decoder。U-Net が画像生成の核。" },
  { id: "e-q44", category: "Speech", difficulty: 3, question: "**WaveNet** の特徴として最も適切なものを選びなさい。", choices: ["Dilated Causal Convolution で時系列音声生成", "RNN ベース", "Transformer", "Random"], correctIndex: 0, explanation: "**WaveNet**(DeepMind 2016): 自己回帰 + Dilated Causal Conv で raw audio 生成。**Tacotron + WaveNet** が TTS 一世代前の標準。**現代は Vall-E / NaturalSpeech 等**。" },
  { id: "e-q45", category: "Multi-task", difficulty: 3, question: "**Multi-task Learning** の利点として最も適切なものを選びなさい。", choices: ["関連タスクで共有表現 → 正則化効果 + データ効率", "1 タスクのみ精度", "完全分離", "GPU 不要"], correctIndex: 0, explanation: "**Multi-task**: 共有 Encoder + Task-specific Head → 関連タスクで知識共有 + 正則化効果 + データ少ないタスクの精度向上。**Hard / Soft Parameter Sharing** がある。" },
  { id: "e-q46", category: "Self-supervised", difficulty: 3, question: "**SimCLR** の **対照学習(Contrastive Learning)** の Loss として最も適切なものを選びなさい。", choices: ["NT-Xent(温度付き Cross-Entropy)", "MSE", "BCE", "CTC"], correctIndex: 0, explanation: "**SimCLR**: Augmented Positive Pair の類似度 - 他 sample との類似度。**NT-Xent Loss**(InfoNCE 系)で実装。**MoCo / BYOL / DINO** など類似アプローチ。" },
  { id: "e-q47", category: "Distillation", difficulty: 3, question: "**Knowledge Distillation** で **Teacher Logit に Temperature** を適用する理由として最も適切なものを選びなさい。", choices: ["Soft Label を作り Student が暗黙の関係を学習", "学習高速化のみ", "GPU 削減", "ラベル削減"], correctIndex: 0, explanation: "**Distillation**: Teacher の高温度 Softmax(soft label)→ クラス間の相対関係を Student に伝達。**Hard Label より情報量大**。" },
  { id: "e-q48", category: "Production", difficulty: 3, question: "**ONNX Runtime + INT8 量子化** で本番推論を高速化する場合の典型的なステップとして最も適切なものを選びなさい。", choices: ["PyTorch → ONNX エクスポート → ONNX Runtime で INT8 量子化", "PyTorch のみ", "全層 FP32", "GPU 必須"], correctIndex: 0, explanation: "**ONNX Runtime デプロイ**: torch.onnx.export → onnxruntime.quantization で動的 ・ 静的量子化 → CPU / GPU / Mobile で実行。" },
  { id: "e-q49", category: "実務", difficulty: 3, question: "**LLM Fine-tuning** で **コスト効率最大化** に **誤っている** ものを選びなさい。", choices: ["LoRA / QLoRA", "Adapter Tuning", "Prompt Tuning", "全層 fine-tune を毎回"], correctIndex: 3, explanation: "**PEFT(Parameter Efficient Fine-Tuning)**: LoRA / QLoRA / Adapter / Prompt Tuning / Prefix Tuning。**全層 fine-tune** は計算 + メモリ大、PEFT 推奨。" },
  { id: "e-q50", category: "次のステップ", difficulty: 1, question: "E 資格合格後の **発展キャリア** として最も適切なものを選びなさい。", choices: ["AWS MLA-C01 / MLS-C01 ・ GCP Pro MLE ・ Azure DP-100 / AI-102 でクラウド ML 統合", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**E 資格 → 三大クラウド ML 認定** で実装力 + クラウド運用力統合。**論文執筆 ・ Kaggle Grandmaster ・ 研究職** で深堀りも。" },
];
