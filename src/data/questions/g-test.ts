import type { Question } from "@/types/content";

export const gTestQuestions: Question[] = [
  {
    id: "gt-q1",
    category: "AI 概論",
    difficulty: 1,
    question:
      "「AI」という言葉が初めて使われたとされる会議として最も適切なものを選びなさい。",
    choices: [
      "1956 年のダートマス会議",
      "1965 年のチューリング会議",
      "1980 年の MIT AI 会議",
      "2010 年の ImageNet 会議",
    ],
    correctIndex: 0,
    explanation:
      "1956 年のダートマス会議で、ジョン・マッカーシーが「Artificial Intelligence(人工知能)」という用語を提案。AI 研究の出発点とされる。",
  },
  {
    id: "gt-q2",
    category: "AI 概論",
    difficulty: 2,
    question:
      "第 2 次 AI ブーム(1980 年代)の主役となった技術として最も適切なものを選びなさい。",
    choices: [
      "ディープラーニング",
      "エキスパートシステム",
      "強化学習",
      "Transformer",
    ],
    correctIndex: 1,
    explanation:
      "第 2 次 AI ブームは「**エキスパートシステム**」(専門家の知識をルール化して機械に与える方式)が主役。「知識獲得のボトルネック」で行き詰まり、第 2 次の冬の時代へ。",
  },
  {
    id: "gt-q3",
    category: "機械学習",
    difficulty: 2,
    question:
      "AI・機械学習・ディープラーニングの包含関係として最も適切なものを選びなさい。",
    choices: [
      "AI ⊂ 機械学習 ⊂ ディープラーニング",
      "AI ⊃ 機械学習 ⊃ ディープラーニング",
      "AI = 機械学習 = ディープラーニング",
      "ディープラーニング ⊃ AI",
    ],
    correctIndex: 1,
    explanation:
      "**AI ⊃ 機械学習 ⊃ ディープラーニング**(AI が最も広く、機械学習はその一部、ディープラーニングはさらにその一部)。",
  },
  {
    id: "gt-q4",
    category: "機械学習",
    difficulty: 2,
    question:
      "教師なし学習に分類される手法として最も適切なものを選びなさい。",
    choices: [
      "ロジスティック回帰",
      "決定木",
      "k-means クラスタリング",
      "ランダムフォレスト",
    ],
    correctIndex: 2,
    explanation:
      "**k-means** はラベルなしデータをクラスタに分ける教師なし学習。残り 3 つは正解(ラベル)を必要とする教師あり学習。",
  },
  {
    id: "gt-q5",
    category: "ディープラーニング",
    difficulty: 2,
    question:
      "画像認識タスクで広く使われるディープラーニングのモデルとして最も適切なものを選びなさい。",
    choices: ["RNN", "CNN", "GAN", "BERT"],
    correctIndex: 1,
    explanation:
      "**CNN(Convolutional Neural Network、畳み込みニューラルネット)**は画像のローカルな特徴を捉えるのが得意で、画像認識の標準。RNN は時系列、GAN は生成、BERT は自然言語の埋め込み。",
  },
  {
    id: "gt-q6",
    category: "ディープラーニング",
    difficulty: 3,
    question:
      "現代の大規模言語モデル(LLM)の基盤となっているアーキテクチャとして最も適切なものを選びなさい。",
    choices: ["LSTM", "CNN", "Transformer", "GAN"],
    correctIndex: 2,
    explanation:
      "**Transformer**(2017 年論文「Attention is All You Need」)は、Attention 機構を中心とした並列処理可能なアーキテクチャ。GPT・BERT・Claude など現代の LLM の基盤。",
  },
  {
    id: "gt-q7",
    category: "歴史",
    difficulty: 1,
    question:
      "Google DeepMind 開発の AlphaGo がイ・セドル九段を破った年として最も適切なものを選びなさい。",
    choices: ["2010 年", "2013 年", "2016 年", "2020 年"],
    correctIndex: 2,
    explanation:
      "2016 年、AlphaGo がイ・セドル九段を 4 勝 1 敗で破る。「囲碁は AI には難しすぎる」という従来の見方を覆した出来事。",
  },
  {
    id: "gt-q8",
    category: "倫理",
    difficulty: 2,
    question:
      "AI の倫理問題として議論されることの少ない論点を選びなさい。",
    choices: [
      "アルゴリズムの公平性(fairness)",
      "判断根拠の説明可能性(XAI)",
      "学習データのプライバシー",
      "プログラム言語の選択",
    ],
    correctIndex: 3,
    explanation:
      "プログラム言語の選択は技術的な判断で、倫理問題ではない。AI 倫理の主要論点は **公平性・説明可能性・プライバシー・透明性・責任の所在** など。",
  },
  {
    id: "gt-q9",
    category: "機械学習",
    difficulty: 2,
    question:
      "ディープラーニングが 2010 年代に大きく発展した背景として、最も適切でないものを選びなさい。",
    choices: [
      "GPU による計算資源の進化",
      "ImageNet などの大規模ラベル付きデータの存在",
      "ReLU・ドロップアウトなどのアルゴリズム改良",
      "プログラム言語の Java から Python への移行",
    ],
    correctIndex: 3,
    explanation:
      "DL の発展要因は「**ビッグデータ・計算資源(GPU)・アルゴリズム改良**」の3つが定番。プログラム言語の選択は本質的要因ではない。",
  },
  {
    id: "gt-q10",
    category: "ディープラーニング",
    difficulty: 3,
    question:
      "「ニューラルネットの学習で勾配が層を遡るほど小さくなり、深い層が学習しない」現象を何というか。",
    choices: [
      "過学習(overfitting)",
      "勾配消失問題",
      "次元の呪い",
      "局所最適解",
    ],
    correctIndex: 1,
    explanation:
      "**勾配消失問題(vanishing gradient problem)**: 多層ネットでは誤差逆伝播の勾配が層を遡るほど 0 に近づき、深い層の重みが更新されない。**ReLU 活性化関数** や **Batch Normalization** などで緩和される。",
  },
  {
    id: "gt-q11",
    category: "AI 概論",
    difficulty: 2,
    question:
      "「AI が下した判断の根拠を人間に説明できるようにする」研究分野として最も適切なものを選びなさい。",
    choices: [
      "XAI(説明可能 AI)",
      "AGI(汎用人工知能)",
      "AutoML(自動機械学習)",
      "RPA(ロボティック・プロセス・オートメーション)",
    ],
    correctIndex: 0,
    explanation:
      "**XAI(Explainable AI)**: AI の判断根拠を人間が理解できる形で示す研究領域。医療・金融・採用など、説明責任が必要な領域で必須。AGI は汎用 AI(将来的構想)、AutoML はモデル探索の自動化、RPA は業務自動化。",
  },
  {
    id: "gt-q21",
    difficulty: 1,
    category: "生成 AI",
    question:
      "RAG(Retrieval-Augmented Generation)が解決する LLM の主要な課題はどれか。",
    choices: [
      "ハルシネーションを抑制し、最新情報や社内情報をプロンプトに取り込めるようにする",
      "GPU の使用量を半減させる",
      "学習を高速化する",
      "モデルのパラメータ数を圧縮する",
    ],
    correctIndex: 0,
    explanation:
      "RAG は外部知識ベースから関連文書を検索してプロンプトに添付してから LLM に答えさせる手法。学習データの更新がなくても最新情報を活用でき、根拠付きで回答できるためハルシネーションが抑制される。",
  },
  {
    id: "gt-q22",
    difficulty: 2,
    category: "生成 AI",
    question:
      "Chain-of-Thought (CoT) プロンプティングが特に効果を発揮するタスクとして最も適切なものはどれか。",
    choices: [
      "多段階の推論や算術を要する問題",
      "短い文書要約",
      "感情分析の二値分類",
      "翻訳タスク",
    ],
    correctIndex: 0,
    explanation:
      "CoT は「Let's think step by step」のように推論過程を明示させる手法で、算数・論理推論など多段階思考が必要な問題で精度を大幅に向上させる。",
  },
  {
    id: "gt-q23",
    difficulty: 2,
    category: "生成 AI",
    question:
      "LoRA(Low-Rank Adaptation)の主な利点として最も適切なものはどれか。",
    choices: [
      "元のモデルを凍結したまま小さな低ランク行列だけを学習するため、VRAM とディスク容量を大幅に節約できる",
      "学習データを自動生成できる",
      "ハイパーパラメータを自動最適化する",
      "モデルの推論速度を 10 倍に高速化する",
    ],
    correctIndex: 0,
    explanation:
      "LoRA は各層の更新を低ランク行列の積で近似する。学習対象パラメータが元の 0.1〜1% 程度に減るため、消費者向け GPU でも大規模モデルをファインチューンできる。QLoRA では 4 bit 量子化と組み合わせて更に省メモリ化。",
  },
  {
    id: "gt-q24",
    difficulty: 2,
    category: "AI 規制",
    question:
      "EU AI 法(EU AI Act)の特徴として最も適切な説明はどれか。",
    choices: [
      "AI システムをリスクに応じて 4 段階(許容不可/高/限定/最小)に分類し、各段階に異なる義務を課す",
      "AI 開発を完全に禁止する",
      "中国・日本企業のみが対象",
      "違反者は無罪",
    ],
    correctIndex: 0,
    explanation:
      "EU AI 法(2024 採択)は世界初の包括的 AI 規制。リスクベースのアプローチで、信用スコア・採用などの「高リスク」AI には透明性・人的監視・データ品質などの義務が課せられる。違反は最大年間売上の 7% の罰金。",
  },
  {
    id: "gt-q25",
    difficulty: 2,
    category: "生成 AI",
    question:
      "拡散モデル(Diffusion Model)による画像生成の基本的な仕組みとして最も適切なものはどれか。",
    choices: [
      "画像にノイズを徐々に加える順過程と、ノイズを除去する逆過程を学び、ノイズから段階的に画像を生成する",
      "GAN と同じく生成器と識別器の対戦で生成する",
      "ピクセルを 1 つずつ自己回帰で生成する",
      "ベクトル空間内で最近傍検索する",
    ],
    correctIndex: 0,
    explanation:
      "拡散モデルは「クリーンな画像 → 完全ノイズ」の Forward 過程と「ノイズ → クリーン画像」の Reverse 過程を学習する。生成時はランダムノイズから出発し、段階的にノイズを除いて画像を生成。Stable Diffusion・DALL-E 3・Imagen など主流の画像生成手法。",
  },
];
