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
  { id: "gt-q40", difficulty: 3, category: "AI 歴史", question: "**1956 年のダートマス会議** で初めて公式に提唱された言葉として最も適切なものを選びなさい。", choices: ["Artificial Intelligence", "Deep Learning", "Machine Learning", "Big Data"], correctIndex: 0, explanation: "**ダートマス会議**(McCarthy / Minsky / Rochester / Shannon)で『Artificial Intelligence』が初めて公式提唱された。AI 黎明期の象徴的会議。" },
  { id: "gt-q41", difficulty: 3, category: "AI 歴史", question: "**第 2 次 AI ブームの主役** として最も適切なものを選びなさい。", choices: ["エキスパートシステム(知識ベース AI)", "ディープラーニング", "Transformer", "強化学習"], correctIndex: 0, explanation: "**第 1 次(1956-)**: 探索 ・ 推論。**第 2 次(1980-)**: エキスパートシステム / 知識表現。**第 3 次(2010-)**: DL(ImageNet 2012)・ 生成 AI(2022 ChatGPT)。" },
  { id: "gt-q42", difficulty: 3, category: "ニューラルネット", question: "**バックプロパゲーション** の役割として最も適切なものを選びなさい。", choices: ["連鎖律で各層の重みに対する損失の勾配を計算", "ランダム重み初期化", "層を追加", "GPU 起動"], correctIndex: 0, explanation: "**Backprop**: 出力層から入力層へ chain rule で勾配を伝播。**Rumelhart et al. 1986** が現在の形を確立。Autograd ・ Computational Graph はこれを自動化したもの。" },
  { id: "gt-q43", difficulty: 3, category: "CNN", question: "**畳み込み層** が **全結合層** より画像処理に向く理由として最も適切なものを選びなさい。", choices: ["局所性 + 重み共有でパラメータ大幅削減 + 平行移動不変性", "高速計算のみ", "GPU 専用", "ラベル不要"], correctIndex: 0, explanation: "**CNN の 3 大特性**: ① 局所結合(近傍画素のみ)② 重み共有(同じカーネルを全空間で適用)③ 平行移動不変性。FCN(全結合)に比べ **パラメータ 100-1000× 削減**。" },
  { id: "gt-q44", difficulty: 3, category: "強化学習", question: "**強化学習** の **探索 vs 活用(Exploration vs Exploitation)** のトレードオフを解決する代表手法を選びなさい。", choices: ["ε-greedy / UCB / Thompson Sampling", "Random Forest", "K-Means", "PCA"], correctIndex: 0, explanation: "**RL の探索 / 活用**: ε-greedy(ε 確率でランダム)・ UCB(上界信頼区間)・ Thompson Sampling(ベイズ)。Multi-Armed Bandit / Q 学習 / PPO で使用。" },
  { id: "gt-q45", difficulty: 3, category: "強化学習", question: "**AlphaGo** で使われた主要技術として **誤っているもの** を選びなさい。", choices: ["Monte Carlo Tree Search(MCTS)", "深層強化学習", "Policy + Value Network", "BERT"], correctIndex: 3, explanation: "**AlphaGo**(2016): MCTS + Policy Network + Value Network + 自己対戦(self-play)。**AlphaGo Zero / MuZero / AlphaFold** と進化。BERT は NLP の別系統。" },
  { id: "gt-q46", difficulty: 3, category: "倫理", question: "**LAWS(Lethal Autonomous Weapons Systems)** の主な懸念として最も適切なものを選びなさい。", choices: ["人間判断なしの殺傷判断 ・ 戦争のハードル低下 ・ 責任所在", "コスト", "学習時間", "GPU 必要"], correctIndex: 0, explanation: "**LAWS**(自律型致死兵器): 国連 ・ NGO で国際規制議論中。**人間の関与 / 説明責任 / 暴走リスク** が主要論点。**Lethal autonomous decision** が倫理的争点。" },
  { id: "gt-q47", difficulty: 3, category: "著作権", question: "AI 生成物の **著作権** に関する日本の現状として最も適切なものを選びなさい。", choices: ["人間の創作的寄与がある場合に限り著作物として保護(指針)", "AI が著作者になる", "全て自由利用", "著作権なし"], correctIndex: 0, explanation: "**日本(2024 文化庁見解)**: 人間の創作的寄与あり → 著作物 / なし → 著作物ではない可能性。**学習段階の利用は著作権法 30 条の 4 で広く認められる**(日本は AI 開発に寛容)。" },
  { id: "gt-q48", difficulty: 3, category: "Vision", question: "**Vision Transformer(ViT)** の特徴として最も適切なものを選びなさい。", choices: ["画像をパッチ分割 → Transformer で大域 Attention", "CNN の改良版", "RNN ベース", "FFT 専用"], correctIndex: 0, explanation: "**ViT**(2020): 画像を 16×16 パッチ → Linear Embedding → Self-Attention。**大量データで CNN を凌駕**。**Swin Transformer** で階層化 + ローカル Attention。" },
  { id: "gt-q49", difficulty: 3, category: "Diffusion", question: "**Stable Diffusion** が **Latent Diffusion** を採用する理由として最も適切なものを選びなさい。", choices: ["VAE で潜在空間に圧縮してから Diffusion → メモリ ・ 速度大幅改善", "画素を直接生成", "ラベル不要", "GPU 不要"], correctIndex: 0, explanation: "**Stable Diffusion**: VAE で 64×64 潜在空間 → UNet で Diffusion → デコード。**画素 Diffusion(512×512)より 50× 高速** + 同等品質。" },
  { id: "gt-q50", difficulty: 3, category: "次のステップ", question: "G 検定合格後の **JDLA 上位資格** として最も適切なものを選びなさい。", choices: ["E 資格(JDLA Engineer)", "DS 検定", "ITパスポート", "簿記"], correctIndex: 0, explanation: "**G 検定(概念 ・ ビジネス)→ E 資格(数理 ・ 実装)** が JDLA 王道。AWS / Azure / GCP ML 認定で実務深化も。" },
  { id: "gt-q51", difficulty: 3, category: "NLP", question: "**Word2Vec** の **Skip-gram** モデルが学習することとして最も適切なものを選びなさい。", choices: ["中心語から周辺語を予測", "周辺語から中心語を予測", "文書分類", "翻訳"], correctIndex: 0, explanation: "**Skip-gram**: 中心語 → 周辺語予測。**CBOW**: 周辺語 → 中心語予測。**Word2Vec(Mikolov 2013)** は埋め込み学習の古典 ・ 後の BERT / GPT への基盤。" },
  { id: "gt-q52", difficulty: 3, category: "BERT", question: "**BERT(Bidirectional Encoder Representations from Transformers)** の事前学習タスクとして **誤っているもの** を選びなさい。", choices: ["Masked Language Modeling(MLM)", "Next Sentence Prediction(NSP)", "Bidirectional", "Next Token Prediction(GPT 流)"], correctIndex: 3, explanation: "**BERT**: MLM + NSP の双方向 Transformer。**GPT は Next Token Prediction の一方向(Causal)** で対比。BERT は分類 / NER 強い、GPT は生成強い。" },
  { id: "gt-q53", difficulty: 3, category: "CV", question: "**Object Detection の代表モデル** で **YOLO 系** の特徴として最も適切なものを選びなさい。", choices: ["1-stage / 高速 / リアルタイム", "2-stage / 高精度 / 低速", "Segmentation 専用", "クラスタリング"], correctIndex: 0, explanation: "**YOLO(You Only Look Once)**: 1-stage(Single Shot)で高速 ・ リアルタイム。**Faster R-CNN(2-stage)** は高精度 ・ 低速。YOLOv8 / v10 / v11 等で進化。" },
  { id: "gt-q54", difficulty: 3, category: "AI 倫理", question: "**AI システムにおける Fairness(公平性)** の典型的な課題として **誤っているもの** を選びなさい。", choices: ["性別 ・ 人種等のバイアス", "履歴データの偏り", "Feedback Loop の悪化", "GPU 利用率"], correctIndex: 3, explanation: "**Fairness 課題**: トレーニングデータバイアス / 履歴データ偏り / Feedback Loop(自己強化)/ 評価指標差別。GPU は無関係。" },
  { id: "gt-q55", difficulty: 3, category: "AI 倫理", question: "**XAI(Explainable AI)** が **特に重要** な業界として **誤っているもの** を選びなさい。", choices: ["医療診断", "金融融資", "刑事司法", "ゲーム NPC"], correctIndex: 3, explanation: "**XAI 必須**: 医療 / 金融 / 刑事 / 採用 / 教育(EU AI Act High Risk)。**ゲーム NPC は限定リスク**。" },
  { id: "gt-q56", difficulty: 3, category: "ハードウェア", question: "**TPU(Tensor Processing Unit)** の特徴として最も適切なものを選びなさい。", choices: ["Google 設計 ・ 行列演算特化 ASIC", "Intel CPU の派生", "汎用 GPU の競合", "Quantum Computer"], correctIndex: 0, explanation: "**TPU**: Google が ML 用に開発した ASIC。**bfloat16 / 行列乗算ユニット** で大規模 ML 学習 ・ 推論を高速化。Gemini / PaLM 等の Google AI 学習に使用。" },
  { id: "gt-q57", difficulty: 3, category: "Optimization", question: "**Adam Optimizer** の特徴として最も適切なものを選びなさい。", choices: ["1 次 ・ 2 次モーメント推定 + 各パラメータ別学習率調整", "学習率固定", "勾配のみ利用", "GPU 専用"], correctIndex: 0, explanation: "**Adam**: Adaptive Moment Estimation。Momentum + RMSProp の合体。**SGD より速く収束** ・ デフォルト選択肢。**AdamW** は重み減衰修正版で更に強力。" },
  { id: "gt-q58", difficulty: 3, category: "LLM 評価", question: "**HumanEval(コード生成評価)** の特徴として最も適切なものを選びなさい。", choices: ["関数仕様 → コード生成 → 単体テストパスで pass@k 評価", "テキストのみ", "BLEU 評価", "意味類似度"], correctIndex: 0, explanation: "**HumanEval**(OpenAI 2021): 164 個の関数 spec → コード生成 → 単体テストで判定。**pass@1 / pass@10** が代表指標。**MBPP / SWE-bench** も類似。" },
  { id: "gt-q59", difficulty: 3, category: "デプロイ", question: "**MLOps の Continuous Training(継続学習)** の必要性として最も適切なものを選びなさい。", choices: ["Data / Concept Drift に対応 + モデル劣化防止", "GPU 価格上昇", "GUI 改善", "認証"], correctIndex: 0, explanation: "**Continuous Training**: 本番データの分布変化 / 概念変化(Drift)で性能劣化 → 定期再学習。**Trigger ベース(Drift 検出)・ 時刻ベース(月次 etc)** が一般的。" },
  { id: "gt-q60", difficulty: 3, category: "NLP", question: "**GPT(Generative Pre-trained Transformer)** の **Decoder-only** アーキテクチャの特徴として最も適切なものを選びなさい。", choices: ["Causal Mask + 自己回帰生成", "Encoder-Decoder", "Bidirectional", "RNN ベース"], correctIndex: 0, explanation: "**GPT**: Decoder-only Transformer + Causal Mask(過去のみ参照)+ Next Token Prediction で自己回帰生成。**BERT は Encoder-only + 双方向**、**T5 は Encoder-Decoder**。" },
  { id: "gt-q61", difficulty: 3, category: "NLP", question: "**Tokenizer** の代表的アルゴリズムとして **誤っているもの** を選びなさい。", choices: ["BPE(Byte Pair Encoding)", "WordPiece", "SentencePiece", "K-Means"], correctIndex: 3, explanation: "**Tokenizer**: BPE(GPT)・ WordPiece(BERT)・ SentencePiece(T5 / Llama)・ Unigram。K-Means はクラスタリングで無関係。" },
  { id: "gt-q62", difficulty: 3, category: "Generative", question: "**VAE(Variational Autoencoder)** の損失関数として正しいものを選びなさい。", choices: ["再構成損失 + KL ダイバージェンス(事前分布との)", "MSE のみ", "Cross-Entropy のみ", "BCE のみ"], correctIndex: 0, explanation: "**VAE Loss = Reconstruction + KL(q(z|x) || p(z))**。**ELBO 最大化** = 対数尤度下界。Reparameterization Trick で勾配伝播可能。" },
  { id: "gt-q63", difficulty: 3, category: "Generative", question: "**GAN** の **Generator vs Discriminator** の関係として最も適切なものを選びなさい。", choices: ["Min-max ゲーム: G は D を騙し、D は本物 / 偽物を見抜く", "両者協力", "G が常に勝つ", "D が常に勝つ"], correctIndex: 0, explanation: "**GAN**(Goodfellow 2014): G(ノイズ → 偽画像)+ D(本物 / 偽物判定)。**最小最大ゲーム** で Nash 均衡 → G が真分布を学習。Mode Collapse / 学習不安定が課題。" },
  { id: "gt-q64", difficulty: 3, category: "RL", question: "**Q-Learning** で **学習率 α** と **割引率 γ** の役割として最も適切なものを選びなさい。", choices: ["α: 新情報の取り込み度、γ: 将来報酬の重要度", "両者同じ", "α: 探索率、γ: 学習回数", "α: 損失、γ: 勾配"], correctIndex: 0, explanation: "**Q 更新**: $Q(s,a) \\leftarrow Q(s,a) + \\alpha[r + \\gamma \\max Q(s',a') - Q(s,a)]$。**α 大 = 速学習だが不安定**、**γ 大 = 長期視野**。" },
  { id: "gt-q65", difficulty: 2, category: "AI 倫理", question: "**Algorithmic Bias** の典型的発生源として **誤っているもの** を選びなさい。", choices: ["訓練データの偏り(歴史的差別)", "ラベラーの主観", "特徴量選択の偏り", "GPU メーカーの違い"], correctIndex: 3, explanation: "**Algorithmic Bias** 発生源: 訓練データ / ラベラー主観 / 特徴量選択 / プロキシ変数(郵便番号 → 人種代理)/ Feedback Loop。GPU は無関係。" },
  { id: "gt-q66", difficulty: 3, category: "Robotics", question: "**ロボティクス** における **Sim2Real** の課題として最も適切なものを選びなさい。", choices: ["シミュレーションと現実の Reality Gap", "GPU 不足", "認証", "DB クエリ"], correctIndex: 0, explanation: "**Sim2Real**: シミュレータで学習 → 現実転移 → **Reality Gap**(物理ノイズ ・ センサーノイズの差)。**Domain Randomization / Domain Adaptation** で軽減。" },
  { id: "gt-q67", difficulty: 3, category: "Embedding", question: "**Sentence Embedding** モデルとして代表的なものを選びなさい。", choices: ["SBERT(Sentence-BERT)", "Word2Vec", "BERT 単体", "K-Means"], correctIndex: 0, explanation: "**SBERT**: BERT を文埋め込み用に Siamese ファインチューン。**E5 / GTE / BGE** などの最新モデルも。**Word2Vec は単語埋め込み**。" },
  { id: "gt-q68", difficulty: 3, category: "AutoML", question: "**Neural Architecture Search(NAS)** の代表手法として **誤っているもの** を選びなさい。", choices: ["Reinforcement Learning(NASNet)", "Evolutionary Algorithm", "Differentiable Search(DARTS)", "Random Forest"], correctIndex: 3, explanation: "**NAS**: RL ベース(NASNet)・ Evolutionary(AmoebaNet)・ Differentiable(DARTS / ProxylessNAS)・ One-Shot(SuperNet)。**EfficientNet / MobileNetV3** が代表産物。" },
  { id: "gt-q69", difficulty: 3, category: "Multi-modal", question: "**CLIP(OpenAI)** の学習方法として最も適切なものを選びなさい。", choices: ["Image-Text ペアの Contrastive Learning", "Supervised Image Classification", "RNN Sequence", "GAN"], correctIndex: 0, explanation: "**CLIP**: 400M Image-Text ペア + InfoNCE Loss で同一意味のペアを近づける。**Zero-Shot Image Classification** が可能に。**Stable Diffusion の Text Encoder** にも使用。" },
  { id: "gt-q70", difficulty: 3, category: "規制", question: "**日本の AI 戦略 2024** の主要施策として **誤っているもの** を選びなさい。", choices: ["AI 開発に対する寛容な著作権法 30 条の 4", "AI Safety Institute(AISI)設立", "広島 AI プロセス", "AI 全面禁止"], correctIndex: 3, explanation: "**日本 AI 戦略**: 著作権法寛容 + AISI(2024 設立)+ 広島 AI プロセス(G7 主導)+ 事業者ガイドライン。**全面禁止は EU AI Act でもしておらず非現実的**。" },
  { id: "gt-q71", difficulty: 3, category: "Diffusion", question: "**Classifier-Free Guidance(CFG)** の役割として最も適切なものを選びなさい。", choices: ["条件付き / 無条件生成を補間 → プロンプト忠実性向上", "Classifier 学習", "GPU 削減", "Denoising"], correctIndex: 0, explanation: "**CFG**: $\\hat{\\epsilon} = \\epsilon_{uncond} + s(\\epsilon_{cond} - \\epsilon_{uncond})$。**s = CFG Scale**(典型 7-15)。プロンプト遵守度を制御。Stable Diffusion 等で標準。" },
  { id: "gt-q72", difficulty: 3, category: "Audio", question: "**Audio Diffusion**(MusicLM / AudioCraft 等)が生成可能なものとして **誤っているもの** を選びなさい。", choices: ["音楽 ・ 音声 ・ サウンドエフェクト", "歌唱合成", "テキスト記述からの音楽生成", "物理的楽器そのもの"], correctIndex: 3, explanation: "**Audio Diffusion**: 波形 or スペクトログラム空間で Diffusion。**Suno / Udio / MusicLM / AudioGen / MusicGen** などが代表。物理楽器は生成不可。" },
  { id: "gt-q73", difficulty: 3, category: "Federated Learning", question: "**Federated Learning** の主な利点として最も適切なものを選びなさい。", choices: ["生データを共有せずに分散学習(プライバシ保護)", "GPU 削減", "BatchNorm 不要", "認証強化"], correctIndex: 0, explanation: "**FL**: クライアント側でローカル学習 → 重みのみ集約 → グローバルモデル更新。**Google Keyboard / 医療 ML / 金融** で実用。**FedAvg** が代表アルゴリズム。" },
  { id: "gt-q74", difficulty: 3, category: "コード生成", question: "**GitHub Copilot** のベースモデルとして使われている系列を選びなさい。", choices: ["OpenAI Codex / GPT-4 系", "BERT", "T5", "Word2Vec"], correctIndex: 0, explanation: "**GitHub Copilot**: 当初 Codex(GPT-3 ベース)→ 現在 GPT-4 系 + Claude 等のマルチモデル。**Cursor / Aider / Continue** などの IDE 統合も急成長。" },
];
