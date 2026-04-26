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
];
