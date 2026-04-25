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
];
