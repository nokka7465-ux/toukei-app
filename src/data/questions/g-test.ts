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
];
