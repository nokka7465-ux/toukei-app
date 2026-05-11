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
  {
    id: "gt-q26",
    difficulty: 2,
    category: "AI と著作権",
    question:
      "日本の著作権法 30 条の 4 が AI 学習に関して許容している利用として、最も適切な記述はどれか。",
    choices: [
      "著作物に表現された思想・感情の『享受』を目的としない利用(統計的解析・特徴量抽出・モデル学習など)",
      "あらゆる目的での著作物の無許諾利用",
      "商用 AI 開発のみを許容",
      "個人利用の範囲のみ",
    ],
    correctIndex: 0,
    explanation:
      "著作権法 30 条の 4 は『享受目的でない利用』を原則として許容する。AI 学習は技術的工程として非享受目的に該当することが多い。ただし『著作権者の利益を不当に害する場合』は除外(ただし書き)。",
  },
  {
    id: "gt-q27",
    difficulty: 3,
    category: "AI と著作権",
    question:
      "2024 年文化庁の整理で、AI ライフサイクルを 3 段階に分けた論点について最も適切な記述はどれか。",
    choices: [
      "学習段階・生成段階・利用段階の 3 段階で著作権論点が異なる",
      "学習・推論の 2 段階のみで判断する",
      "AI 出力には常に著作権が認められる",
      "AI 出力は常に著作権侵害となる",
    ],
    correctIndex: 0,
    explanation:
      "文化庁『AI と著作権に関する考え方について』(2024年3月) は、(1) 学習段階(30条の4で広く許容)、(2) 生成段階(類似性 + 依拠性で侵害判断)、(3) 利用段階(通常の著作権ルール) の 3 段階で整理。",
  },
  {
    id: "gt-q28",
    difficulty: 2,
    category: "AI 運用",
    question:
      "本番運用 AI の精度劣化の主な原因として『コンセプトドリフト』が指す現象として最も適切なものはどれか。",
    choices: [
      "入力 X と出力 Y の関係 P(Y|X) 自体が時間とともに変化する",
      "入力 X の分布のみが変化する(これはデータドリフト)",
      "ハードウェアの劣化",
      "モデルパラメータが時間で減衰する",
    ],
    correctIndex: 0,
    explanation:
      "コンセプトドリフトは P(Y|X) の変化(顧客の嗜好変化、不正パターンの進化など)。データドリフト(共変量シフト)は P(X) の変化、ラベルドリフトは P(Y) の変化。3 つを区別して理解する。",
  },
  {
    id: "gt-q29",
    difficulty: 2,
    category: "AI 運用",
    question:
      "ML モデルのリリース戦略で「シャドーデプロイ」が指すものとして最も適切な記述はどれか。",
    choices: [
      "本番トラフィックに対して新旧両モデルが推論を行い、本番影響なく結果を比較する",
      "新モデルだけを 100% のトラフィックに即時切り替える",
      "新モデルをローカル環境のみで実行する",
      "新モデルの重みを暗号化する",
    ],
    correctIndex: 0,
    explanation:
      "シャドーデプロイは新モデルを並列実行し、出力差異やレイテンシなどを観測する段階。問題なければカナリアリリース(1% → 5% → 25% → 100%)に進む段階リリースが現代 MLOps の標準。",
  },
  {
    id: "gt-q30",
    difficulty: 3,
    category: "LLM 評価",
    question:
      "大規模言語モデル(LLM)の **総合知識ベンチマーク** として最も代表的なものを選びなさい。",
    choices: [
      "MMLU(Massive Multitask Language Understanding)",
      "BLEU",
      "ROUGE",
      "Perplexity",
    ],
    correctIndex: 0,
    explanation:
      "**MMLU** は 57 タスク横断の知識評価ベンチマーク。**BLEU は機械翻訳、ROUGE は要約、Perplexity は言語モデルの当てやすさ**(低いほど良い)。LLM 比較では MMLU / HellaSwag / GPQA / HumanEval などが頻用。",
  },
  {
    id: "gt-q31",
    difficulty: 3,
    category: "マルチモーダル",
    question:
      "画像とテキストを **同一の埋め込み空間** に射影し、ゼロショット画像分類を可能にしたモデルを選びなさい。",
    choices: ["CLIP(OpenAI)", "BERT", "GPT-2", "ResNet"],
    correctIndex: 0,
    explanation:
      "**CLIP**(2021、OpenAI)は **画像エンコーダ + テキストエンコーダの対照学習(InfoNCE)** で同一埋め込み空間を獲得。ゼロショット画像分類 ・ 画像検索 ・ Stable Diffusion のテキスト条件付けにも利用。",
  },
  {
    id: "gt-q32",
    difficulty: 3,
    category: "Diffusion",
    question:
      "Diffusion モデル(Stable Diffusion など)の学習で **モデルが予測するもの** として最も適切なものを選びなさい。",
    choices: [
      "ノイズが加えられた画像から、加えられたノイズを予測する",
      "画像の RGB 値を直接生成する",
      "画像のクラスラベルを予測する",
      "次のピクセルを 1 つずつ予測する",
    ],
    correctIndex: 0,
    explanation:
      "Diffusion モデルは **拡散過程(forward)で加えたノイズを逆過程(reverse)で予測する** ようパラメータ化。**`L = ||ε - ε_θ(x_t, t)||²`** という単純な MSE 損失で学習する。サンプリング時は純ノイズから少しずつ復元。",
  },
  {
    id: "gt-q33",
    difficulty: 3,
    category: "Agent",
    question:
      "**LLM Agent における Tool Use(関数呼び出し)** の典型的な流れとして最も適切なものを選びなさい。",
    choices: [
      "ユーザ入力 → LLM が Tool 呼び出し JSON を生成 → 実行 → 結果を LLM に戻す → 最終回答",
      "ユーザ入力 → LLM が即座に最終回答",
      "ユーザ入力 → 検索エンジンに直接転送",
      "LLM の重みを毎回更新",
    ],
    correctIndex: 0,
    explanation:
      "**Tool Use / Function Calling** は LLM が **構造化 JSON で Tool 呼び出しを発行** → ホストアプリが実行 → 結果を LLM に再投入 → 最終回答、というループ。OpenAI Functions / Anthropic Tool Use / Gemini Function Calling などが標準化。",
  },
  {
    id: "gt-q34",
    difficulty: 3,
    category: "自己教師あり学習",
    question:
      "自己教師あり学習(Self-Supervised Learning)の代表例として **誤っているもの** を選びなさい。",
    choices: [
      "BERT の Masked Language Modeling",
      "SimCLR の対照学習",
      "MAE(Masked Autoencoder)の画像復元",
      "ImageNet のラベル付き分類学習",
    ],
    correctIndex: 3,
    explanation:
      "ImageNet 分類は **教師あり学習(ラベル必須)**。自己教師あり学習はラベルなしデータから **代理タスク(マスク復元 / 対照)で表現学習** する手法群。基盤モデル(Foundation Models)の中核。",
  },
  {
    id: "gt-q35",
    difficulty: 3,
    category: "RLHF",
    question:
      "RLHF(Reinforcement Learning from Human Feedback)の **典型的な 3 段階** として最も適切なものを選びなさい。",
    choices: [
      "1. SFT(教師ありファインチューン)→ 2. 報酬モデル学習 → 3. PPO で方策最適化",
      "1. ゼロショット推論 → 2. プロンプト調整 → 3. 評価",
      "1. データ収集 → 2. ファインチューン → 3. デプロイ",
      "1. 蒸留 → 2. 量子化 → 3. プルーニング",
    ],
    correctIndex: 0,
    explanation:
      "**RLHF 3 段階**: ① **SFT** で人間の好む応答を模倣、② **報酬モデル** が応答ペアの優劣を学習、③ **PPO**(Proximal Policy Optimization)で報酬を最大化するよう方策を最適化。DPO は ②③ を 1 段階で行う改良版。",
  },
  {
    id: "gt-q36",
    difficulty: 3,
    category: "Catastrophic Forgetting",
    question:
      "**継続学習(Continual Learning)** で旧タスクの性能が急激に劣化する現象の名称を選びなさい。",
    choices: [
      "Catastrophic Forgetting(破壊的忘却)",
      "Mode Collapse",
      "Vanishing Gradient",
      "Curse of Dimensionality",
    ],
    correctIndex: 0,
    explanation:
      "**Catastrophic Forgetting(破壊的忘却)** は新タスクの学習で旧タスクの重みが上書きされる現象。**EWC(Elastic Weight Consolidation)・ Replay Buffer ・ LoRA** などで緩和する。Mode Collapse は GAN、Vanishing Gradient は RNN の問題。",
  },
  {
    id: "gt-q37",
    difficulty: 2,
    category: "AI 倫理",
    question:
      "EU AI Act が定める **AI のリスクカテゴリ** として **誤っているもの** を選びなさい。",
    choices: [
      "Unacceptable Risk(禁止)",
      "High Risk(規制対象)",
      "Limited Risk(透明性義務)",
      "Quantum Risk(量子規制)",
    ],
    correctIndex: 3,
    explanation:
      "**EU AI Act の 4 リスクカテゴリ**: **Unacceptable / High / Limited / Minimal Risk**。Quantum Risk は存在しない。Unacceptable には社会的スコアリング ・ サブリミナル操作などが該当し、禁止される。",
  },
  {
    id: "gt-q38",
    difficulty: 3,
    category: "音声",
    question:
      "OpenAI が公開した **多言語対応の音声認識(ASR)モデル** として最も適切なものを選びなさい。",
    choices: ["Whisper", "WaveNet", "Tacotron", "DALL-E"],
    correctIndex: 0,
    explanation:
      "**Whisper**(2022、OpenAI)は 68 万時間の多言語音声で学習した ASR モデル。99 言語サポート + 翻訳機能。WaveNet / Tacotron は TTS(音声合成)、DALL-E は画像生成。",
  },
  {
    id: "gt-q39",
    difficulty: 3,
    category: "RAG",
    question:
      "**Retrieval-Augmented Generation(RAG)** の典型的な構成として最も適切なものを選びなさい。",
    choices: [
      "ユーザ質問 → 埋め込み + ベクトル検索 → 関連文書を LLM に投入 → 回答生成",
      "ユーザ質問 → LLM の内部知識のみで回答",
      "ユーザ質問 → LLM ファインチューン → 回答",
      "ユーザ質問 → 検索エンジン結果をそのまま返す",
    ],
    correctIndex: 0,
    explanation:
      "**RAG** は **質問を埋め込み化 → ベクトル検索(Pinecone / Vertex AI Search / Azure AI Search)→ 関連文書を context として LLM に投入 → 回答生成**。ハルシネーション抑制と最新情報対応の標準パターン。",
  },
];
