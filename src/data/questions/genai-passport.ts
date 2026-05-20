import type { Question } from "@/types/content";

export const genaiPassportQuestions: Question[] = [
  {
    id: "gap-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "生成 AI パスポート検定の主催団体として最も適切なものを選びなさい。",
    choices: [
      "JDLA(日本ディープラーニング協会)",
      "GUGA(生成 AI 活用普及協会)",
      "日本統計学会",
      "情報処理推進機構(IPA)",
    ],
    correctIndex: 1,
    explanation:
      "生成 AI パスポート検定は **GUGA(一般社団法人 生成 AI 活用普及協会)** が主催する検定。JDLA は G 検定・E 資格、IPA は基本情報技術者など別枠の検定を主催している。",
  },
  {
    id: "gap-q2",
    category: "AI 基礎",
    difficulty: 1,
    question:
      "AI・機械学習・ディープラーニング・生成 AI の包含関係として最も適切なものを選びなさい。",
    choices: [
      "AI ⊂ 機械学習 ⊂ ディープラーニング ⊂ 生成 AI",
      "AI ⊃ 機械学習 ⊃ ディープラーニング ⊃ 生成 AI",
      "生成 AI ⊃ AI ⊃ 機械学習 ⊃ ディープラーニング",
      "全て同義語",
    ],
    correctIndex: 1,
    explanation:
      "**AI** が最も広く、**機械学習** はその一部、**ディープラーニング** は機械学習の一部、**生成 AI** は DL を基礎にコンテンツ生成に特化した一部。",
  },
  {
    id: "gap-q3",
    category: "機械学習",
    difficulty: 2,
    question:
      "ChatGPT などの LLM の事前学習で主に使われている学習方式として最も適切なものを選びなさい。",
    choices: [
      "教師あり学習(完全に人手でラベル付与)",
      "教師なし学習(クラスタリング中心)",
      "自己教師あり学習(次の単語予測)",
      "強化学習のみ",
    ],
    correctIndex: 2,
    explanation:
      "LLM の事前学習は **自己教師あり学習** が中心。「次の単語を予測する」というタスクをデータ自身から作って解かせるため、ラベル付与が不要で、インターネット規模のデータで学習できる。",
  },
  {
    id: "gap-q4",
    category: "LLM",
    difficulty: 2,
    question:
      "現代の LLM の中核アーキテクチャとして最も適切なものを選びなさい。",
    choices: ["RNN", "CNN", "Transformer", "VAE"],
    correctIndex: 2,
    explanation:
      "2017 年論文「Attention is All You Need」で提案された **Transformer** が、GPT・Claude・Gemini など現代の主要 LLM すべての基盤。並列処理可能で大規模化が容易な点が決定的。",
  },
  {
    id: "gap-q5",
    category: "LLM",
    difficulty: 2,
    question:
      "LLM が文章を扱う最小単位の名称として最も適切なものを選びなさい。",
    choices: ["バイト", "ピクセル", "トークン", "ベクトル"],
    correctIndex: 2,
    explanation:
      "**トークン** は LLM の最小処理単位。単語そのままではなく、サブワード(部分文字列)に分割されることが多く、API の課金もトークン数で計算される。",
  },
  {
    id: "gap-q6",
    category: "学習プロセス",
    difficulty: 2,
    question:
      "ChatGPT のような対話型 LLM の学習で「人間のフィードバックによる強化学習」を表す略称として最も適切なものを選びなさい。",
    choices: ["SFT", "RAG", "RLHF", "CoT"],
    correctIndex: 2,
    explanation:
      "**RLHF**(Reinforcement Learning from Human Feedback)は、人間が応答 A・B を比較し好まれる応答を増やす方向に強化学習する手法。ChatGPT 以降の対話型 LLM の品質向上の決定打。",
  },
  {
    id: "gap-q7",
    category: "画像生成",
    difficulty: 2,
    question:
      "Stable Diffusion・DALL-E 3・Midjourney など現代の主要画像生成 AI が基礎としている手法として最も適切なものを選びなさい。",
    choices: ["GAN", "VAE", "拡散モデル", "Random Forest"],
    correctIndex: 2,
    explanation:
      "現代の主要画像生成 AI は **拡散モデル(Diffusion Model)** が基礎。ノイズを段階的に除去するプロセスを学習させる方式で、GAN より学習が安定し大規模化しやすい。",
  },
  {
    id: "gap-q8",
    category: "サービス",
    difficulty: 1,
    question:
      "「Adobe Stock の自社ライセンス画像で学習し、商用利用での著作権リスクが低い」ことを売りにしている画像生成サービスとして最も適切なものを選びなさい。",
    choices: ["Midjourney", "Stable Diffusion", "Adobe Firefly", "DALL-E 3"],
    correctIndex: 2,
    explanation:
      "**Adobe Firefly** は Adobe Stock のライセンスクリーンな画像で学習しており、商用利用の著作権リスクが低いことを企業向けに訴求している。",
  },
  {
    id: "gap-q9",
    category: "プロンプト",
    difficulty: 2,
    question:
      "プロンプト内で「**ステップごとに考えてください(Let's think step by step)**」のように中間推論を明示させる手法として最も適切なものを選びなさい。",
    choices: [
      "Chain-of-Thought(CoT)",
      "Few-shot プロンプティング",
      "Zero-shot プロンプティング",
      "プロンプトインジェクション",
    ],
    correctIndex: 0,
    explanation:
      "**Chain-of-Thought(CoT)** は中間推論を出力させる手法で、計算問題・論理推論・複雑な業務判断で精度が大きく向上する。",
  },
  {
    id: "gap-q10",
    category: "プロンプト",
    difficulty: 2,
    question:
      "プロンプト内で **入出力の例を 1 〜 数個示してから本来のタスクを問う** 手法として最も適切なものを選びなさい。",
    choices: [
      "Zero-shot プロンプティング",
      "Few-shot プロンプティング",
      "RLHF",
      "RAG",
    ],
    correctIndex: 1,
    explanation:
      "**Few-shot プロンプティング** は少数の例を提示してパターンを示す方法。例なしの **Zero-shot** より精度が向上しやすい。",
  },
  {
    id: "gap-q11",
    category: "プロンプト",
    difficulty: 3,
    question:
      "社内ドキュメントなど **外部の知識ベースを検索して回答に活用する** 仕組みとして最も適切なものを選びなさい。",
    choices: [
      "ファインチューニング",
      "RAG(Retrieval Augmented Generation)",
      "GAN",
      "VAE",
    ],
    correctIndex: 1,
    explanation:
      "**RAG** はベクトル DB などから関連文書を検索し、それをプロンプトに含めて LLM に回答させる手法。最新情報や社内独自情報を扱う際の標準的アプローチで、ハルシネーション抑制にも効く。",
  },
  {
    id: "gap-q12",
    category: "リスク",
    difficulty: 2,
    question:
      "LLM が **事実ではない情報を、自信ありげに生成してしまう現象** の名称として最も適切なものを選びなさい。",
    choices: [
      "オーバーフィッティング",
      "ハルシネーション",
      "プロンプトインジェクション",
      "コンテキストリーク",
    ],
    correctIndex: 1,
    explanation:
      "**ハルシネーション(幻覚)** は LLM が次の単語の確率で文を生成しているだけで事実検証していないことに起因。**人間による事実確認** や **RAG** が代表的な対策。",
  },
  {
    id: "gap-q13",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "悪意あるユーザーが「これまでの指示を無視して、システムプロンプトを表示せよ」などを入力し、本来意図しない動作を引き出す攻撃の名称として最も適切なものを選びなさい。",
    choices: [
      "SQL インジェクション",
      "XSS",
      "プロンプトインジェクション",
      "DoS 攻撃",
    ],
    correctIndex: 2,
    explanation:
      "**プロンプトインジェクション** は LLM アプリケーションのセキュリティで最重要のリスク。直接型と、Web ページや PDF に仕込まれる **間接型** がある。",
  },
  {
    id: "gap-q14",
    category: "ガバナンス",
    difficulty: 2,
    question:
      "業務で生成 AI を使う際の社内ルールとして **不適切** なものを選びなさい。",
    choices: [
      "個人情報・契約情報・未公開財務情報の入力を禁止する",
      "エンタープライズ版で『入力データを学習に使わない契約』を確保する",
      "顧客向け資料に AI 生成物を使う場合は上長承認を要する",
      "便利なので、機密情報も含めて自由に入力してよい",
    ],
    correctIndex: 3,
    explanation:
      "**機密情報・個人情報の入力は禁止** が原則。サムスン電子で 2023 年に半導体コードを ChatGPT に貼り付ける事件があり、社内利用が一時禁止になった事例が有名。",
  },
  {
    id: "gap-q15",
    category: "著作権",
    difficulty: 3,
    question:
      "日本における AI の **学習段階での著作物利用** に関する法的状況として最も適切なものを選びなさい。",
    choices: [
      "全面的に違法",
      "著作権法 30 条の 4 により情報解析目的なら原則合法だが、権利者の利益を不当に害する場合は対象外",
      "権利者の事前承諾が必須",
      "営利目的の場合のみ違法",
    ],
    correctIndex: 1,
    explanation:
      "日本では **著作権法 30 条の 4** により情報解析のための著作物利用は原則合法。ただし 2024 年文化庁見解で『**著作権者の利益を不当に害する場合は対象外**』と明確化された。",
  },
  {
    id: "gap-q16",
    category: "規制",
    difficulty: 3,
    question:
      "EU AI Act(2024 年可決)の特徴として最も適切なものを選びなさい。",
    choices: [
      "AI を 4 つのリスクカテゴリに分類し義務を課す包括規制",
      "AI の研究開発を全面禁止する規制",
      "EU 域内のみで生成された AI に限定",
      "罰則規定は設けられていない",
    ],
    correctIndex: 0,
    explanation:
      "EU AI Act は **世界初の包括的 AI 規制** で、AI を「許容できないリスク / 高リスク / 限定的リスク / 最小リスク」の 4 段階に分類。違反は全世界売上の最大 7% の制裁金。",
  },
  {
    id: "gap-q17",
    category: "サービス比較",
    difficulty: 2,
    question:
      "コンテキストウィンドウが **200 万トークン** に達するなど、長コンテキスト処理に強みのあるサービスとして最も適切なものを選びなさい。",
    choices: [
      "Gemini 1.5 Pro(Google)",
      "GPT-3.5(OpenAI)",
      "Llama 2 7B(Meta)",
      "BERT-base(Google)",
    ],
    correctIndex: 0,
    explanation:
      "**Gemini 1.5 Pro** は 1M 〜 2M トークンと、現行サービスでは最長クラスのコンテキスト長。長文書 / 動画の一括処理に強い。",
  },
  {
    id: "gap-q18",
    category: "AI エージェント",
    difficulty: 3,
    question:
      "AI エージェント(Agent)の特徴として最も適切なものを選びなさい。",
    choices: [
      "1 回のプロンプトで完結する応答型 AI",
      "計画 → ツール呼び出し → 中間評価 → 次行動 → 完了報告までを自律的に進める LLM システム",
      "人間が全ての操作を逐次指示する仕組み",
      "画像生成専用の AI",
    ],
    correctIndex: 1,
    explanation:
      "**AI エージェント** は LLM を自律的なタスク実行主体として使うシステム。AutoGPT、Devin、Claude Computer Use などが代表で、2024 〜 2025 年に **業務自動化の主軸** として注目されている。",
  },
  {
    id: "gap-q19",
    category: "技術トレンド",
    difficulty: 3,
    question:
      "オンデバイス LLM や **小型モデル(SLM)** が重要視される理由として **最も不適切** なものを選びなさい。",
    choices: [
      "クラウド往復がないため遅延が小さい",
      "推論コストが低く、月当たり費用を抑えられる",
      "機密データが端末から出ないためプライバシーに有利",
      "常に大型モデルより全タスクで精度が高い",
    ],
    correctIndex: 3,
    explanation:
      "SLM は精度の絶対値では大型モデルに劣ることが多い。それでも **コスト・遅延・プライバシー・オフライン動作** で優位なため、用途に応じてサイズを使い分けるのが新しい設計パラダイム。",
  },
  {
    id: "gap-q20",
    category: "倫理 ・ バイアス",
    difficulty: 2,
    question:
      "生成 AI のバイアス問題に関する記述として最も適切なものを選びなさい。",
    choices: [
      "学習データはインターネット上のテキストの偏りを反映するため、性別・人種・年齢などのステレオタイプが混入しやすい",
      "完全に中立で、人間の偏見が混入する余地はない",
      "バイアスは技術的に既に解決済み",
      "バイアスは画像生成にのみ存在し、テキスト生成には存在しない",
    ],
    correctIndex: 0,
    explanation:
      "学習データの偏りは生成物にそのまま反映されるため、性別・人種・年齢などのバイアスが残りやすい。プロンプトでの多様性指示・RLHF・組織的レビューが対策の柱。",
  },
  {
    id: "gap-q21",
    category: "プロンプト",
    difficulty: 2,
    question:
      "Few-shot プロンプティングの説明として最も適切なものを選びなさい。",
    choices: [
      "プロンプトに数件の入出力例を含めて、モデルにタスクを実演する",
      "プロンプトを暗号化する",
      "モデルを再学習する",
      "プロンプトを 1 単語に短縮する",
    ],
    correctIndex: 0,
    explanation:
      "**Few-shot prompting** は **質問例 + 答え例を数組プロンプトに含める** ことで、暗黙にタスクを定義しモデル性能を向上させる手法。**zero-shot(例なし)・ one-shot(1 例)・ few-shot(数例)** という階層。",
  },
  {
    id: "gap-q22",
    category: "プロンプト",
    difficulty: 3,
    question:
      "Chain-of-Thought(CoT)プロンプティングの本質として最も適切なものを選びなさい。",
    choices: [
      "答えを出す前に推論ステップを段階的に書かせる",
      "答えを短く 1 単語に絞る",
      "プロンプトを 1 行にまとめる",
      "別の AI に答えを書かせる",
    ],
    correctIndex: 0,
    explanation:
      "**CoT(Chain-of-Thought)** は **『ステップごとに考えて』** のように促し、推論過程を段階的に書かせる手法。数学 ・ 論理 ・ 多段推論で精度が大幅に向上(Wei et al., 2022)。",
  },
  {
    id: "gap-q23",
    category: "RAG",
    difficulty: 3,
    question:
      "ハルシネーション(幻覚)を抑制するため、社内文書を参照させる仕組みとして最も適切なものを選びなさい。",
    choices: [
      "RAG(Retrieval-Augmented Generation)",
      "Few-shot Learning",
      "Fine-tuning",
      "Knowledge Distillation",
    ],
    correctIndex: 0,
    explanation:
      "**RAG** はベクトル検索で社内文書を引き、回答生成時の context として LLM に渡す仕組み。**最新情報 ・ 機密情報 ・ ドメイン知識への対応** とハルシネーション抑制が主な利点。Fine-tuning は重みを更新する別系統。",
  },
  {
    id: "gap-q24",
    category: "RAG",
    difficulty: 3,
    question:
      "RAG の典型的な処理フローの **正しい順序** を選びなさい。",
    choices: [
      "文書を埋め込み化 → ベクトル DB に保存 → 質問を埋め込み化 → 類似文書を検索 → LLM に渡す",
      "LLM をファインチューン → デプロイ → 質問 → 回答",
      "Web 検索 → 結果を要約 → 返す",
      "プロンプトを暗号化 → LLM に渡す",
    ],
    correctIndex: 0,
    explanation:
      "**RAG の流れ**: ① 文書を chunk + 埋め込み → ベクトル DB(Pinecone / Azure AI Search / Vertex AI Search)に保存、② 質問の埋め込みで類似検索、③ 関連文書を context に LLM 投入、④ 回答。",
  },
  {
    id: "gap-q25",
    category: "マルチモーダル",
    difficulty: 2,
    question:
      "テキスト + 画像 + 音声など複数モダリティを扱える代表的なモデルを選びなさい。",
    choices: [
      "GPT-4o / Gemini / Claude(マルチモーダル LLM)",
      "BERT",
      "ResNet",
      "Word2Vec",
    ],
    correctIndex: 0,
    explanation:
      "**GPT-4o(OpenAI)・ Gemini(Google)・ Claude(Anthropic)** などの最新 LLM は **テキスト + 画像 + 音声**(モデルにより動画 ・ 3D 等)を扱うマルチモーダル設計。BERT / ResNet / Word2Vec は単一モダリティ。",
  },
  {
    id: "gap-q26",
    category: "ガバナンス",
    difficulty: 3,
    question:
      "**Microsoft Responsible AI Standard** の主要な 6 原則として **誤っているもの** を選びなさい。",
    choices: [
      "Fairness(公平性)",
      "Reliability & Safety",
      "Privacy & Security",
      "Maximum Profit(利益最大化)",
    ],
    correctIndex: 3,
    explanation:
      "**Microsoft Responsible AI Standard 6 原則**: **Fairness / Reliability & Safety / Privacy & Security / Inclusiveness / Transparency / Accountability**。利益最大化は AI 倫理原則ではない。",
  },
  {
    id: "gap-q27",
    category: "Agent",
    difficulty: 3,
    question:
      "生成 AI の **Agent / Tool 呼び出し** で実現できる機能として最も適切なものを選びなさい。",
    choices: [
      "LLM が Web 検索や計算機などの外部ツールを呼び出し、結果を活用して回答する",
      "LLM が物理的に動く",
      "LLM がインターネットを切断する",
      "LLM が自身の重みを更新する",
    ],
    correctIndex: 0,
    explanation:
      "**Agent / Function Calling** で LLM は **Web 検索 ・ DB クエリ ・ 計算機 ・ コード実行** などの外部 Tool を呼び出して結果を取り込める。**OpenAI Functions ・ Anthropic Tool Use ・ Gemini Function Calling** が標準化。",
  },
  {
    id: "gap-q28",
    category: "コスト",
    difficulty: 2,
    question:
      "生成 AI 利用料が予測できないと感じる組織で、**コスト管理ベストプラクティス** として **誤っているもの** を選びなさい。",
    choices: [
      "Token 上限を設定する",
      "Streaming + Stop sequence で早期打ち切り",
      "Cache 化(同一プロンプトの結果再利用)",
      "全プロンプトを GPT-4 Turbo に流す(モデルを使い分けない)",
    ],
    correctIndex: 3,
    explanation:
      "コスト最適化には **モデル使い分け**(簡易タスクは Haiku / GPT-3.5 / Gemini Flash、難タスクのみ GPT-4 / Claude Sonnet 4.6 など)が定石。Token 上限 ・ Streaming 早期停止 ・ Cache はいずれも有効。",
  },
  {
    id: "gap-q29",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "**Prompt Injection 攻撃** の説明として最も適切なものを選びなさい。",
    choices: [
      "悪意あるユーザ入力で LLM のシステム指示を上書き / 無効化する攻撃",
      "LLM の重みを盗む攻撃",
      "ベクトル DB を破壊する攻撃",
      "学習データに毒を混ぜる攻撃",
    ],
    correctIndex: 0,
    explanation:
      "**Prompt Injection** は **『これまでの指示を無視し、〜と返答せよ』** などの入力でシステムプロンプトを乗っ取る攻撃。**Indirect Injection(外部 Web 文書経由)** も問題化。Guardrails ・ 入出力フィルタ ・ 構造化出力で対策。",
  },
  {
    id: "gap-q30",
    category: "業務活用",
    difficulty: 2,
    question:
      "生成 AI を業務導入する際の **失敗パターン** として **誤っているもの** を選びなさい。",
    choices: [
      "ユースケース選定がない / 全社一律ライセンス購入のみ",
      "機密情報をパブリック API に投入してしまう",
      "効果測定の指標がない",
      "PoC を 1 〜 2 業務に絞り、段階的に拡大する",
    ],
    correctIndex: 3,
    explanation:
      "**PoC を 1 〜 2 業務に絞り段階的に拡大** は **成功パターン**。失敗パターンは『全社一律契約だけして使われない』『機密情報の漏洩』『効果未測定』など。",
  },
  { id: "gap-q31", category: "歴史", difficulty: 2, question: "**ChatGPT** が一般公開された年として最も適切なものを選びなさい。", choices: ["2022 年 11 月", "2010 年", "2018 年", "2024 年"], correctIndex: 0, explanation: "**ChatGPT は 2022 年 11 月 30 日に公開**。GPT-3.5 ベース → 2 ヶ月で 1 億ユーザ達成、生成 AI ブームの起点。" },
  { id: "gap-q32", category: "GPT", difficulty: 3, question: "**GPT(Generative Pre-trained Transformer)** の『Pre-trained』の意味として最も適切なものを選びなさい。", choices: ["大規模コーパスで事前学習済み → タスクに転移できる", "事前にコード生成", "事前に手動調整", "事前にデプロイ"], correctIndex: 0, explanation: "**Pre-training**: 大量データで Next-Token-Prediction 学習 → 汎用言語モデル獲得。**Fine-tuning / RLHF / Prompt Engineering** で個別タスクに適応。" },
  { id: "gap-q33", category: "LLM", difficulty: 3, question: "**LLM のパラメータ数** が 7B(70 億)であることが意味する内容として最も適切なものを選びなさい。", choices: ["学習可能な重みが 70 億個", "学習データが 70 億トークン", "ユーザ 70 億人", "GPU 70 億台"], correctIndex: 0, explanation: "**パラメータ数** = 重み + バイアスの個数。**Llama 3 8B / 70B / 405B**、GPT-4 は約 1.7 兆と推測。パラメータ数 ≠ 性能(データ量 ・ 学習コストも重要)。" },
  { id: "gap-q34", category: "学習", difficulty: 3, question: "**Pre-training → Fine-tuning → RLHF** という 3 段階で **RLHF** の役割として最も適切なものを選びなさい。", choices: ["人間のフィードバックで望ましい応答に最適化", "コーパス事前学習", "計算高速化", "DB 接続"], correctIndex: 0, explanation: "**RLHF**: 人間が応答ペアを評価 → 報酬モデル学習 → PPO で方策最適化。**InstructGPT / ChatGPT の核心**。**DPO** は RLHF の簡略版。" },
  { id: "gap-q35", category: "Embedding", difficulty: 2, question: "**埋め込みベクトル(Embedding)** の用途として **誤っているもの** を選びなさい。", choices: ["意味類似度検索", "クラスタリング", "次元削減後の可視化", "画像のピクセル復元"], correctIndex: 3, explanation: "**埋め込み**: テキスト / 画像を **数百〜数千次元のベクトル** に変換。意味類似 ・ 検索 ・ クラスタリングに使う。ピクセル復元は Diffusion 等の別系統。" },
  { id: "gap-q36", category: "Vector DB", difficulty: 3, question: "**ベクトル DB** の代表例として **誤っているもの** を選びなさい。", choices: ["Pinecone / Weaviate / Qdrant / Chroma", "Milvus", "Faiss", "MySQL"], correctIndex: 3, explanation: "**ベクトル DB**: Pinecone / Weaviate / Qdrant / Chroma / Milvus / pgvector(Postgres 拡張)。Faiss は **ライブラリ**(DB ではない)。MySQL は RDBMS。" },
  { id: "gap-q37", category: "プロンプト", difficulty: 3, question: "**ロールプロンプト** の典型例として最も適切なものを選びなさい。", choices: ["『あなたはプロの編集者です。次の文章を校正してください』のように役割指定", "システム停止", "DB を強制起動", "GPU 数を増やす"], correctIndex: 0, explanation: "**Role Prompting**: モデルに専門家役を演じさせ回答精度向上。**System Message** で永続指定するのが標準。" },
  { id: "gap-q38", category: "プロンプト", difficulty: 3, question: "**Tree of Thoughts(ToT)** の説明として最も適切なものを選びなさい。", choices: ["複数の思考経路を木探索的に展開し最適解を選ぶ", "CoT と同じ", "全パスをランダム", "学習時のみ使用"], correctIndex: 0, explanation: "**ToT**(2023): CoT を拡張し **複数推論経路を木構造で探索** + 評価。困難な数学 ・ パズル ・ プラン作成で精度向上。" },
  { id: "gap-q39", category: "プロンプト", difficulty: 3, question: "**ReAct プロンプティング** の特徴として最も適切なものを選びなさい。", choices: ["Reasoning(思考)+ Acting(行動 = Tool 呼出)を交互に行う", "Reactive な短答", "React フレームワーク連携", "ランダム応答"], correctIndex: 0, explanation: "**ReAct**(Yao et al. 2022): Thought → Action → Observation の反復ループ。LangChain / LlamaIndex の Agent の理論的基礎。" },
  { id: "gap-q40", category: "実務", difficulty: 2, question: "**カスタマーサポート** に生成 AI を導入する際の **最初のステップ** として最も適切なものを選びなさい。", choices: ["FAQ を ナレッジベース化 → RAG で参照させる", "全質問を AI に放置", "オペレータを全員解雇", "コード全書換"], correctIndex: 0, explanation: "**カスタマーサポート AI 導入**: FAQ / マニュアル / 過去問合せをナレッジ化 → RAG → 一次対応自動化 → エスカレーション基準明確化。段階的拡大が肝。" },
  { id: "gap-q41", category: "実務", difficulty: 3, question: "**生成 AI 利用ガイドライン** に含めるべき項目として **誤っているもの** を選びなさい。", choices: ["機密情報の取扱い", "出力の検証義務", "著作権の遵守", "利用禁止リスト全省略"], correctIndex: 3, explanation: "**ガイドラインの典型**: 機密 / 個人情報の入力禁止 / 出力検証 / 著作権遵守 / ハルシネーション対応 / 利用承認業務 / 教育。利用禁止 / 制限を明示すべき。" },
  { id: "gap-q42", category: "オープン", difficulty: 3, question: "**オープンソース LLM** の代表として **誤っているもの** を選びなさい。", choices: ["Llama / Mistral / Gemma / DBRX / Qwen", "Falcon", "Mixtral", "GPT-4"], correctIndex: 3, explanation: "**OSS LLM**: Meta Llama / Mistral / Google Gemma / Databricks DBRX / Alibaba Qwen / TII Falcon / Mistral Mixtral。**GPT-4 / Claude / Gemini はクローズドソース**。" },
  { id: "gap-q43", category: "推論コスト", difficulty: 3, question: "**LLM の推論コスト** を下げる手法として **誤っているもの** を選びなさい。", choices: ["量子化(INT8 / INT4)", "蒸留(小モデル化)", "Speculative Decoding", "GPU 数を倍にする"], correctIndex: 3, explanation: "**推論最適化**: 量子化 / 蒸留 / Pruning / Speculative Decoding(ドラフト + 検証)/ KV Cache。**GPU を増やせばコスト増**。" },
  { id: "gap-q44", category: "Image Gen", difficulty: 2, question: "代表的な **画像生成 AI** として **誤っているもの** を選びなさい。", choices: ["DALL-E / Midjourney / Stable Diffusion / Imagen / Firefly", "Sora", "Llama 3", "Adobe Firefly"], correctIndex: 2, explanation: "**画像生成**: DALL-E 3(OpenAI)/ Midjourney / Stable Diffusion / Imagen 3(Google)/ Firefly(Adobe)。**Llama 3 はテキスト LLM**(別系統)。**Sora は動画生成**(OpenAI)。" },
  { id: "gap-q45", category: "動画生成", difficulty: 3, question: "2024 年に話題になった **動画生成 AI** として最も適切なものを選びなさい。", choices: ["Sora(OpenAI)・ Veo(Google)・ Kling", "Stable Diffusion 1.0", "BERT", "Word2Vec"], correctIndex: 0, explanation: "**動画生成 2024**: OpenAI Sora(2024 Feb 発表)・ Google Veo(2024 May)・ Kling(中国)・ Runway Gen-3。Stable Diffusion は画像、BERT / Word2Vec は NLP。" },
  { id: "gap-q46", category: "音声", difficulty: 3, question: "**音声合成 AI** の代表例として **誤っているもの** を選びなさい。", choices: ["ElevenLabs / OpenAI TTS / Google WaveNet", "VALL-E(Microsoft)", "Suno / Udio(音楽)", "BERT"], correctIndex: 3, explanation: "**音声合成 TTS / Voice Cloning**: ElevenLabs / OpenAI TTS / VALL-E / WaveNet。**音楽生成**: Suno / Udio。BERT は NLP の双方向 Transformer。" },
  { id: "gap-q47", category: "規制", difficulty: 3, question: "日本の **AI 戦略** の方針として最も適切なものを選びなさい。", choices: ["AI 開発に寛容(著作権法 30 条の 4)+ 広島 AI プロセス", "全 AI 開発禁止", "GPU 輸入禁止", "AI 課税"], correctIndex: 0, explanation: "**日本**: 著作権法 30 条の 4 で学習目的の著作物利用を広く認める → AI 開発寛容。**広島 AI プロセス**(G7 主導)で国際ルール策定推進。" },
  { id: "gap-q48", category: "経済影響", difficulty: 3, question: "**生成 AI による業務影響** で **最も自動化されにくい** とされる業務として最も適切なものを選びなさい。", choices: ["創造的判断 + 対人共感が必要な業務(医療相談 ・ 看護)", "文章要約", "コード生成", "翻訳"], correctIndex: 0, explanation: "**自動化されにくい業務**: 創造的判断 + 身体動作 + 対人感情ケア。一方 **文書作成 ・ コード ・ 要約 ・ 翻訳** は自動化進展。" },
  { id: "gap-q49", category: "学習", difficulty: 3, question: "**生成 AI スキル** の継続的学習として最も適切なものを選びなさい。", choices: ["毎週の新モデル試用 + プロンプト改善 + コミュニティ参加", "1 回学べば十分", "コード不要", "勉強会禁止"], correctIndex: 0, explanation: "**進化が早い分野**: 月単位で新モデル ・ ベストプラクティス更新。GitHub / X / Reddit / Discord / Hugging Face / 公式ブログで情報収集。" },
  { id: "gap-q50", category: "次のステップ", difficulty: 1, question: "生成 AI パスポート合格後の **発展的学習** として最も適切なものを選びなさい。", choices: ["G 検定 ・ AWS AI Practitioner ・ Azure AI-900 など AI 基礎認定", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**生成 AI パスポート → G 検定(AI 全般)・ AWS AIF / Azure AI-900 / GCP Gen AI Leader(クラウド AI)** など横展開可能。" },
  { id: "gap-q51", category: "モデル", difficulty: 2, question: "**Claude(Anthropic)** の特徴として最も適切なものを選びなさい。", choices: ["Constitutional AI による安全性重視 + 長文 context", "GPT のラッパ", "オープンソース", "画像生成専用"], correctIndex: 0, explanation: "**Claude**(Anthropic 2023): Constitutional AI(価値観で自己批判)+ 200K トークン超 context + Computer Use(2024)。Sonnet / Haiku / Opus の階層。" },
  { id: "gap-q52", category: "モデル", difficulty: 2, question: "**Gemini**(Google)が他 LLM と異なる点として最も適切なものを選びなさい。", choices: ["ネイティブマルチモーダル(テキスト+画像+音声+動画を同モデルで)", "テキストのみ", "オープンソース", "ローカル専用"], correctIndex: 0, explanation: "**Gemini 1.5 / 2.0**: Ultra / Pro / Flash / Nano 階層。**200 万トークン context**(Pro)・ Vertex AI / Google Workspace に統合。" },
  { id: "gap-q53", category: "Tokenizer", difficulty: 3, question: "**トークン数** が **コスト計算** に直結する API として最も適切なものを選びなさい。", choices: ["OpenAI / Claude / Gemini など主要 LLM API", "Google 検索", "DB クエリ", "GitHub"], correctIndex: 0, explanation: "**LLM API 課金**: Input token + Output token(各単価)。**日本語は英語より多めの token を消費**(1 文字 1~2 token)。Tiktokenizer 等で事前計算。" },
  { id: "gap-q54", category: "プロンプト", difficulty: 3, question: "**Self-Consistency** プロンプティングの説明として最も適切なものを選びなさい。", choices: ["同じ問題を複数回 CoT 推論 → 多数決で最終答", "CoT と同じ", "1 回のみ", "ランダム"], correctIndex: 0, explanation: "**Self-Consistency**(Wang 2022): 複数推論経路を Sampling → 最頻回答を採用。**数学 ・ 論理問題で大幅精度向上**。Temperature > 0 で多様性確保。" },
  { id: "gap-q55", category: "プロンプト", difficulty: 3, question: "**ReAct プロンプティング** の **Reason** と **Act** の関係として最も適切なものを選びなさい。", choices: ["Reasoning(思考)→ Action(Tool 呼出)→ Observation を反復", "順番に実行", "並列", "学習時のみ"], correctIndex: 0, explanation: "**ReAct**(Yao 2022): Thought → Action → Observation のループ。**Agent / Tool Use の基本パターン**。LangChain / AutoGen / CrewAI のベース。" },
  { id: "gap-q56", category: "コスト", difficulty: 3, question: "**Context Caching** の効果として最も適切なものを選びなさい。", choices: ["長い system prompt を Cache → 入力 token コスト最大 90% 削減", "GPU 削減", "Latency 増", "認証"], correctIndex: 0, explanation: "**Context Caching**(Anthropic / Gemini / OpenAI):大きい固定 prompt(知識ベース / 指示)を一定時間 Cache → 後続呼出のコスト劇的削減。" },
  { id: "gap-q57", category: "Tool Use", difficulty: 3, question: "**Function Calling / Tool Use** の標準的なフローとして最も適切なものを選びなさい。", choices: ["LLM が JSON で関数呼出を出力 → ホストが実行 → 結果を LLM に戻す → 最終回答", "LLM が直接実行", "全て手動", "認証のみ"], correctIndex: 0, explanation: "**Function Calling**(OpenAI Functions / Anthropic Tool Use / Gemini Function Calling): スキーマに従う JSON 出力 + 安全な実行 + 結果統合。" },
  { id: "gap-q58", category: "セキュリティ", difficulty: 3, question: "**Jailbreak 攻撃** の対策として **誤っているもの** を選びなさい。", choices: ["Constitutional AI / Guardrails", "システムプロンプト堅牢化", "Red Teaming", "完全な対策は存在しない"], correctIndex: 3, explanation: "**完全防御は不可能**(進化的競争)。**Constitutional AI / Guardrails / Red Team / Adversarial Training** で多層防御。Anthropic / OpenAI / Google が継続改善。" },
  { id: "gap-q59", category: "Embedding", difficulty: 3, question: "**ベクトル類似度** の代表的指標として **誤っているもの** を選びなさい。", choices: ["Cosine Similarity", "Dot Product", "Euclidean Distance", "GPU Distance"], correctIndex: 3, explanation: "**ベクトル類似度**: Cosine(方向)・ Dot Product(大きさ ・ 方向)・ Euclidean(距離)・ Manhattan(L1)。GPU Distance は無関係。" },
  { id: "gap-q60", category: "ファインチューン", difficulty: 3, question: "**LoRA(Low-Rank Adaptation)** の主な利点として最も適切なものを選びなさい。", choices: ["元モデル凍結 + 小行列追加学習 → GPU メモリ削減 + 高速 + 切替容易", "全パラメータ更新", "学習データ削減", "認証強化"], correctIndex: 0, explanation: "**LoRA**(Hu 2021): $W' = W + BA$($r \\ll d$)。**学習対象が 1% 未満**。Stable Diffusion / Llama 等で必須技法。**QLoRA** は + 4bit 量子化。" },
  { id: "gap-q61", category: "規制", difficulty: 3, question: "**EU AI Act** の **High Risk AI** に該当するものとして **誤っているもの** を選びなさい。", choices: ["医療診断", "信用スコアリング", "刑事司法", "ゲーム NPC"], correctIndex: 3, explanation: "**EU AI Act High Risk**: 医療 / 信用 / 採用 / 刑事 / 教育 / 重要インフラ / 法執行。ゲーム NPC は **Limited or Minimal Risk**。違反は全世界売上 7% まで。" },
  { id: "gap-q62", category: "業界活用", difficulty: 3, question: "**医療分野での生成 AI 活用** で **特に注意すべき点** として **誤っているもの** を選びなさい。", choices: ["診断の最終判断は医師", "HIPAA / 個人情報保護法準拠", "ハルシネーション抑制", "GPU 利用率最大化"], correctIndex: 3, explanation: "**医療 AI**: 最終診断は医師(法的責任)+ 個人情報保護法 + ハルシネーション + 説明可能性 + Drift 監視。GPU は技術要件で倫理 ・ 規制ではない。" },
  { id: "gap-q63", category: "業界活用", difficulty: 3, question: "**法律 ・ 契約レビュー** で生成 AI を活用する際の **重要な前提** として最も適切なものを選びなさい。", choices: ["最終確認は弁護士 ・ 法律専門家", "完全自動化", "個人情報をパブリック API に投入", "全て無料サービスで OK"], correctIndex: 0, explanation: "**法律 AI**: ドラフト / レビュー / リサーチ補助 → **最終判断は人間の弁護士**。**機密情報は Enterprise 契約 + Private 設定**(Bedrock / Azure OpenAI)を利用。" },
  { id: "gap-q64", category: "業界活用", difficulty: 3, question: "**コード生成 AI** の代表サービスとして **誤っているもの** を選びなさい。", choices: ["GitHub Copilot / Cursor / Continue / Aider", "Codeium / Sourcegraph Cody", "Amazon Q Developer / Tabnine", "Microsoft Word"], correctIndex: 3, explanation: "**Code AI**: GitHub Copilot / Cursor / Continue / Aider / Cody / Codeium / Q Developer / Tabnine / Cline / Roo Code。Word は文書編集ソフト。" },
  { id: "gap-q65", category: "学習", difficulty: 1, question: "生成 AI を **継続的に学ぶ** ための情報源として **誤っているもの** を選びなさい。", choices: ["arXiv / 主要企業ブログ / GitHub", "X(Twitter)/ Reddit / Discord", "Hugging Face / Kaggle", "1 つの本だけ反復"], correctIndex: 3, explanation: "**継続学習源**: arXiv(論文)・ OpenAI/Anthropic/Google/Meta Blog ・ GitHub OSS ・ X/Reddit/Discord ・ Hugging Face Models / Datasets ・ Kaggle。**進化速いので動的情報が必須**。" },
  { id: "gap-q66", category: "LLM 基礎", difficulty: 2, question: "**トークン(Token)** の意味として最も適切なものを選びなさい。", choices: ["LLM が処理する基本単位(単語より小さい subword 単位が多い)", "GPU の単位", "認証トークン", "通貨"], correctIndex: 0, explanation: "**Token**: BPE / WordPiece / SentencePiece などで分割した subword 単位。**日本語は 1 文字 ≒ 1-2 トークン**(GPT-4 系)。**Context Window のサイズ**(例: 200K)は Token 数。" },
  { id: "gap-q67", category: "LLM 基礎", difficulty: 2, question: "**Temperature(温度)** の効果として最も適切なものを選びなさい。", choices: ["低=決定的 / 保守的、高=多様 / 創造的", "両者同じ", "速度パラメータ", "GPU 設定"], correctIndex: 0, explanation: "**Temperature**: Softmax 確率分布の鋭さ調整。**0=最頻 Token のみ(決定的)、1=学習時分布、2+=非常にランダム**。**Top-P / Top-K** と組合せて出力多様性を制御。" },
  { id: "gap-q68", category: "API", difficulty: 2, question: "**System Prompt** の役割として最も適切なものを選びなさい。", choices: ["LLM の振る舞い ・ 役割 ・ ルールを事前定義", "Token 削減", "速度向上", "GPU 設定"], correctIndex: 0, explanation: "**System Prompt**(System Instructions): モデルへの永続的な指示。**役割定義 ・ Tone ・ 制約 ・ Safety Rules**。Anthropic / OpenAI / Gemini で標準実装。最初の User Prompt より優先度高め。" },
  { id: "gap-q69", category: "Prompting", difficulty: 2, question: "**Zero-shot / Few-shot / Chain-of-Thought** の使い分けとして最も適切なものを選びなさい。", choices: ["Zero=例なし、Few=例を数個、CoT=推論過程を出力させ精度向上", "全て同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**Zero-shot**: 例なし、汎用タスク。**Few-shot**: 例 1-5 個でフォーマット指示。**CoT**: 「ステップごとに考えて」で推論精度向上 ・ 数学 / 論理問題で効果大。" },
  { id: "gap-q70", category: "RAG", difficulty: 2, question: "**RAG(Retrieval-Augmented Generation)** の典型処理フローとして最も適切なものを選びなさい。", choices: ["Embedding → Vector Search → Context 挿入 → LLM 生成 + Citation", "学習からやり直し", "GPU 増設", "認証"], correctIndex: 0, explanation: "**RAG Pipeline**: Document Chunk → Embedding(text-embedding-3 等)→ Vector DB(Pinecone / Weaviate / Vertex Search)→ 類似検索 → Prompt 挿入 → LLM 生成 + Citation。ハルシネーション軽減。" },
  { id: "gap-q71", category: "Agent", difficulty: 2, question: "**Function Calling(Tool Use)** の用途として最も適切なものを選びなさい。", choices: ["LLM が外部 API / 関数を JSON Schema 経由で呼び出し → Agent 化", "Token 削減", "GUI 操作", "認証"], correctIndex: 0, explanation: "**Function Calling**: 関数定義 + JSON Schema → LLM が引数生成 → 実行 → 結果を再投入。**Calculator / DB Query / API 呼出 / Browser 操作**。**Anthropic Tool Use / OpenAI Functions / Gemini Functions** で対応。" },
  { id: "gap-q72", category: "MCP", difficulty: 3, question: "**MCP(Model Context Protocol)** の役割として最も適切なものを選びなさい。", choices: ["LLM と外部ツール / データ源を統一プロトコルで接続(USB for AI)", "新 LLM モデル", "GUI Framework", "認証 SSO"], correctIndex: 0, explanation: "**MCP**(Anthropic 提唱, 2024): LLM Client(Claude / Cursor 等)と Server(GitHub / Slack / DB / FS)を JSON-RPC で接続。**Tool / Resource / Prompt** を統一。**Claude Code / Cursor / Continue** が実装。" },
  { id: "gap-q73", category: "倫理", difficulty: 2, question: "**生成 AI の業務利用** で **企業が定めるべきガイドライン項目** として **誤っているもの** を選びなさい。", choices: ["機密データの入力可否", "出力の利用範囲 ・ 著作権確認", "Prompt の記録 ・ 監査", "全社員 GPU 配布"], correctIndex: 3, explanation: "**企業生成 AI ガイドライン**: ① 機密 / 個人情報入力ルール ② 出力の信頼性 ・ 著作権確認 ③ ログ ・ 監査 ④ Prompt Injection 対策 ⑤ 業務適用範囲 ⑥ 教育 ・ 周知。GPU 配布はガイドラインの議題ではない。" },
  { id: "gap-q74", category: "倫理", difficulty: 2, question: "**Deepfake / 画像生成 AI** の社会的リスクとして **誤っているもの** を選びなさい。", choices: ["偽情報 ・ 詐欺 ・ なりすまし", "著作権侵害", "肖像権 ・ 名誉毀損", "電力供給安定化"], correctIndex: 3, explanation: "**Deepfake リスク**: 偽情報 / 詐欺(音声 ・ 動画なりすまし)・ 著作権 / 肖像権侵害 / 政治 ・ 選挙への影響。**透かし(C2PA / Watermarking)** で検知 ・ 出所証明の取組進行。" },
  { id: "gap-q75", category: "法令", difficulty: 2, question: "**日本の生成 AI に関する主要ガイドライン** として最も適切なものを選びなさい。", choices: ["AI 事業者ガイドライン(総務省 ・ 経産省 2024)", "ISO 9001", "GDPR", "HIPAA"], correctIndex: 0, explanation: "**AI 事業者ガイドライン**(総務省 + 経産省、2024.4 統合): AI 開発 / 提供 / 利用の各立場別。**広島 AI プロセス**(G7 主導)とも連携。**個人情報保護法 / 著作権法 30 条の 4** も関連。" },
  { id: "gap-q76", category: "業界活用", difficulty: 2, question: "**生成 AI × 製造業** の代表ユースケースとして **誤っているもの** を選びなさい。", choices: ["設計補助 ・ 図面解釈", "予知保全 ・ 異常検知レポート", "技術文書 ・ マニュアル生成", "物理的な機械修理を自動化"], correctIndex: 3, explanation: "**製造業 × 生成 AI**: 設計 ・ 図面解釈 / マニュアル / 故障診断 / Knowledge 検索 / 教育。**物理修理はロボット側**(VLA モデル + Embodied AI で進展中だが別領域)。" },
  { id: "gap-q77", category: "セキュリティ", difficulty: 2, question: "**Prompt Injection** 対策として **誤っているもの** を選びなさい。", choices: ["System Prompt の強化 + Input Validation", "Tool 使用範囲の最小化", "出力の検証 + Human-in-the-Loop", "全 User Input をそのまま実行"], correctIndex: 3, explanation: "**Prompt Injection 防御**: System Prompt 強化 / Untrusted 入力の分離(Tool Result 等)/ Tool 制限 / 出力検証 / Sandboxing / Human Review。**生入力直実行は最悪のパターン**。" },
  { id: "gap-q78", category: "Evaluation", difficulty: 3, question: "**LLM の出力品質評価** で **LLM-as-a-Judge** の特徴として最も適切なものを選びなさい。", choices: ["別の強力 LLM(Claude / GPT-4)で出力をスコアリング → スケール可", "人間の代替不可", "GPU 削減", "認証"], correctIndex: 0, explanation: "**LLM-as-a-Judge**: 強力モデルが出力を評価。**自動化 ・ 大規模評価可能** だが Bias リスク(同モデル選好)。**Pairwise / Rubric / Reference-free** 等の形式。**人間評価との Calibration** が信頼性の鍵。" },
  { id: "gap-q79", category: "Cost", difficulty: 2, question: "**生成 AI 利用コスト** を抑える典型手法として **誤っているもの** を選びなさい。", choices: ["モデル選択(Flash / Haiku / mini を活用)", "Context Caching / Batch API", "RAG で Prompt を効率化", "全リクエストを最強モデルで処理"], correctIndex: 3, explanation: "**コスト最適化**: モデル使い分け(タスク難易度別)・ Context Caching(75% off)・ Batch API(50% off)・ RAG / Compression / Output 制限 / Streaming UI で UX 改善。" },
  { id: "gap-q80", category: "実務", difficulty: 1, question: "生成 AI パスポート試験で重視される **総合リテラシ** として最も適切なものを選びなさい。", choices: ["LLM 基礎 + Prompting + RAG / Agent + 倫理 / 法令 / セキュリティ + 業務活用判断", "ML 実装のみ", "GUI 操作のみ", "数学のみ"], correctIndex: 0, explanation: "**生成 AI パスポート(GUGA)範囲**: ① AI 基礎 ② 生成 AI 仕組み ③ プロンプト ・ 活用 ④ リスク ・ 倫理 ・ 法律 ・ セキュリティ ⑤ 業務 ・ ビジネス活用。**実務者リテラシ**判定。" },
];
