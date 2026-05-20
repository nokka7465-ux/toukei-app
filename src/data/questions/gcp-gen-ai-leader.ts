import type { Question } from "@/types/content";

export const gcpGenAiLeaderQuestions: Question[] = [
  {
    id: "gcpgai-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Google Cloud Generative AI Leader が分類される認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational(基礎)",
      "Associate(アソシエイト)",
      "Professional(プロフェッショナル)",
      "Specialty(専門)",
    ],
    correctIndex: 0,
    explanation:
      "Generative AI Leader は **Foundational(基礎)レベル**。同じ Foundational には Cloud Digital Leader がある。Associate に Associate Cloud Engineer、Professional に ML Engineer などがある。",
  },
  {
    id: "gcpgai-q2",
    category: "Gemini",
    difficulty: 2,
    question:
      "Google が開発した **マルチモーダル基盤モデル** ファミリの名称として最も適切なものを選びなさい。",
    choices: ["Claude", "GPT-4", "Gemini", "Llama"],
    correctIndex: 2,
    explanation:
      "**Gemini** は Google のマルチモーダル基盤モデル(テキスト + 画像 + 音声 + 動画 + コード)。Claude は Anthropic、GPT-4 は OpenAI、Llama は Meta。",
  },
  {
    id: "gcpgai-q3",
    category: "Gemini",
    difficulty: 2,
    question:
      "高速 ・ 低コストでリアルタイム応答に向いている Gemini モデルとして最も適切なものを選びなさい。",
    choices: [
      "Gemini Pro",
      "Gemini Flash",
      "Gemini Nano",
      "Gemini Code",
    ],
    correctIndex: 1,
    explanation:
      "**Gemini Flash** は高速 ・ 低コスト向け。Pro は最高性能の汎用、Nano はオンデバイス、Code Gemini はコード生成特化。",
  },
  {
    id: "gcpgai-q4",
    category: "Gemini",
    difficulty: 3,
    question:
      "Gemini 1.5 Pro / 2.5 Pro の長コンテキスト機能の特徴として最も適切なものを選びなさい。",
    choices: [
      "最大 4,000 トークン",
      "最大 32,000 トークン",
      "最大 200 万トークン",
      "コンテキスト機能なし",
    ],
    correctIndex: 2,
    explanation:
      "Gemini 1.5 Pro / 2.5 Pro は **最大 200 万トークン** のコンテキストウィンドウを持つ。1 〜 2 時間の動画 / 数百 PDF を一度に処理できる規模で、Google の差別化機能。",
  },
  {
    id: "gcpgai-q5",
    category: "Vertex AI",
    difficulty: 2,
    question:
      "Google Cloud の AI / ML プラットフォームとして最も適切なものを選びなさい。",
    choices: [
      "Amazon SageMaker",
      "Vertex AI",
      "Azure Machine Learning",
      "Databricks",
    ],
    correctIndex: 1,
    explanation:
      "**Vertex AI** が Google Cloud の AI / ML プラットフォーム。SageMaker は AWS、Azure ML は Microsoft、Databricks は別ベンダー。",
  },
  {
    id: "gcpgai-q6",
    category: "Vertex AI",
    difficulty: 2,
    question:
      "Vertex AI で生成 AI のプロンプト ・ チューニング ・ 評価を行う IDE として最も適切なものを選びなさい。",
    choices: [
      "Vertex AI Workbench",
      "Vertex AI Studio",
      "Vertex AI Pipelines",
      "Vertex AI Feature Store",
    ],
    correctIndex: 1,
    explanation:
      "**Vertex AI Studio** は生成 AI 専用の開発 IDE。Workbench は Jupyter ベースの汎用開発環境、Pipelines は ML パイプライン、Feature Store は特徴量管理。",
  },
  {
    id: "gcpgai-q7",
    category: "Vertex AI",
    difficulty: 3,
    question:
      "Vertex AI で **複数ベンダーの基盤モデル** を一覧 ・ 比較できる機能として最も適切なものを選びなさい。",
    choices: [
      "Model Garden",
      "Workbench",
      "Pipelines",
      "Feature Store",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Model Garden** は Google の Gemini / Imagen / オープンソース(Llama / Mistral 等)/ サードパーティの基盤モデルを一覧 ・ デプロイできるカタログ機能。",
  },
  {
    id: "gcpgai-q8",
    category: "Workspace",
    difficulty: 2,
    question:
      "Google Workspace(Gmail / Docs / Sheets / Slides / Meet)に統合された AI アシスタントの名称として最も適切なものを選びなさい。",
    choices: [
      "Microsoft 365 Copilot",
      "Gemini for Workspace",
      "Amazon Q",
      "Notion AI",
    ],
    correctIndex: 1,
    explanation:
      "**Gemini for Workspace**(旧 Duet AI for Workspace)が Workspace 統合 AI。Microsoft 365 Copilot は Microsoft の同等サービス。",
  },
  {
    id: "gcpgai-q9",
    category: "コードアシスタント",
    difficulty: 2,
    question:
      "VS Code / IntelliJ / Cloud Shell でコード補完 ・ 説明 ・ テスト生成を行う Google Cloud のサービスとして最も適切なものを選びなさい。",
    choices: [
      "Gemini Code Assist",
      "GitHub Copilot",
      "Amazon Q Developer",
      "Cursor",
    ],
    correctIndex: 0,
    explanation:
      "**Gemini Code Assist** が Google Cloud のコードアシスタント(旧 Duet AI for Developers)。GitHub Copilot は Microsoft 系、Amazon Q Developer は AWS。",
  },
  {
    id: "gcpgai-q10",
    category: "プロンプト",
    difficulty: 2,
    question:
      "プロンプト内に **入出力の例を 1 〜 数個示してから本来のタスクを問う** 手法として最も適切なものを選びなさい。",
    choices: [
      "Zero-shot プロンプティング",
      "Few-shot プロンプティング",
      "Chain-of-Thought",
      "ファインチューニング",
    ],
    correctIndex: 1,
    explanation:
      "**Few-shot プロンプティング** は少数の例でパターンを示す手法。例なしの **Zero-shot** より精度が向上することが多い。",
  },
  {
    id: "gcpgai-q11",
    category: "RAG",
    difficulty: 3,
    question:
      "Google Cloud で社内ドキュメントを使った RAG(Retrieval Augmented Generation)を構築する際、最も適切な検索基盤を選びなさい。",
    choices: [
      "Vertex AI Search",
      "Cloud SQL",
      "Pub/Sub",
      "Cloud Run",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Search**(旧 Enterprise Search)はベクトル + キーワード + リランキングのハイブリッド検索ができる、Vertex AI と統合された RAG 用検索基盤。",
  },
  {
    id: "gcpgai-q12",
    category: "ハルシネーション",
    difficulty: 2,
    question:
      "Gemini の回答を **Google 検索結果に基づかせて出典を明示** することでハルシネーションを抑制する Google 独自機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Grounding(with Google Search)",
      "Watermarking",
      "Distillation",
      "Quantization",
    ],
    correctIndex: 0,
    explanation:
      "**Grounding** は回答を信頼できるソース(Google 検索 / Vertex AI Search)に基づかせる機能。最新情報の反映 + 出典付与 + ハルシネーション抑制を同時に実現する Google の差別化。",
  },
  {
    id: "gcpgai-q13",
    category: "BigQuery",
    difficulty: 3,
    question:
      "BigQuery 内で SQL から Gemini を呼び出して文章生成する関数として最も適切なものを選びなさい。",
    choices: [
      "ML.PREDICT",
      "ML.GENERATE_TEXT",
      "ML.UNDERSTAND_TEXT",
      "ML.TRANSLATE",
    ],
    correctIndex: 1,
    explanation:
      "**ML.GENERATE_TEXT** が BigQuery から Gemini を呼び出して文章を生成する関数。SQL のみで AI 機能を扱える点が BigQuery ML の強み。ML.PREDICT は学習済モデルでの推論、ML.TRANSLATE は翻訳。",
  },
  {
    id: "gcpgai-q14",
    category: "責任ある AI",
    difficulty: 3,
    question:
      "Google の AI 原則(2018 年公開)に **含まれない** ものを選びなさい。",
    choices: [
      "社会に有益であること",
      "不公平な偏見を生まない / 強化しない",
      "プライバシー設計の原則を組み込む",
      "あらゆる商業利用を最大化する",
    ],
    correctIndex: 3,
    explanation:
      "Google の 7 つの AI 原則は (1) 社会に有益、(2) 偏見回避、(3) 安全性、(4) 説明責任、(5) プライバシー、(6) 科学的卓越性、(7) 原則に沿う用途。商業利用最大化は含まれない。",
  },
  {
    id: "gcpgai-q15",
    category: "セーフティ",
    difficulty: 3,
    question:
      "AI 生成画像 ・ 動画に **目に見えない透かし(Watermark)** を埋め込む Google の技術として最も適切なものを選びなさい。",
    choices: [
      "SynthID",
      "Cloud DLP",
      "Cloud KMS",
      "VPC Service Controls",
    ],
    correctIndex: 0,
    explanation:
      "**SynthID** は AI 生成コンテンツに識別可能な透かしを埋め込む Google DeepMind の技術。AI 生成物の追跡可能性を高める責任ある AI の実装。",
  },
  {
    id: "gcpgai-q16",
    category: "コスト",
    difficulty: 2,
    question:
      "Vertex AI Gemini の本番大規模運用で、**スループットを事前確保することで予測可能なコストにする** 購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "On-Demand",
      "Provisioned Throughput",
      "Spot Instance",
      "Free Tier",
    ],
    correctIndex: 1,
    explanation:
      "**Provisioned Throughput** はスループット(トークン/秒)を事前確保する購入モデル。本番大規模で予測可能なコスト + 確実な性能を実現。",
  },
  {
    id: "gcpgai-q17",
    category: "コスト",
    difficulty: 3,
    question:
      "繰り返し使う **長いシステムプロンプトのコスト** を削減する Vertex AI の機能として最も適切なものを選びなさい。",
    choices: [
      "Context Caching",
      "Distillation",
      "Quantization",
      "Pruning",
    ],
    correctIndex: 0,
    explanation:
      "**Context Caching** は同じシステムプロンプトを複数回使うとき、内部的にキャッシュして再計算を避ける機能。長コンテキストの繰返し利用でコストを大幅削減できる。",
  },
  {
    id: "gcpgai-q18",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "Vertex AI を VNet 内のプライベート接続のみで利用するための Google Cloud の機能として最も適切なものを選びなさい。",
    choices: [
      "VPC Service Controls",
      "Public IP",
      "Cloud Armor",
      "Cloud CDN",
    ],
    correctIndex: 0,
    explanation:
      "**VPC Service Controls** で AI サービスをパブリックインターネットを通さず VPC 内でのみ利用可能にできる。データの社外流出を防ぐ。",
  },
  {
    id: "gcpgai-q19",
    category: "ユースケース",
    difficulty: 3,
    question:
      "コールセンターの音声録音から顧客感情を分析するパイプラインで使う Google Cloud のサービスの組み合わせとして最も適切なものを選びなさい。",
    choices: [
      "Cloud Vision → Natural Language API",
      "Speech-to-Text → Natural Language API(感情分析)→ BigQuery / Looker",
      "Document AI → Translation",
      "Imagen → Veo",
    ],
    correctIndex: 1,
    explanation:
      "**Speech-to-Text で音声 → テキスト → Natural Language API の感情分析 → BigQuery / Looker で可視化** が標準パターン。Contact Center AI ソリューションで提供される。",
  },
  {
    id: "gcpgai-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "Generative AI Leader 合格後、Google Cloud の ML 関連認定で次のステップとして最も適切なものを選びなさい。",
    choices: [
      "Cloud Digital Leader",
      "Associate Cloud Engineer / Professional ML Engineer",
      "AWS Solutions Architect Professional",
      "Microsoft Certified Trainer",
    ],
    correctIndex: 1,
    explanation:
      "Generative AI Leader は Foundational。次のステップは **Associate Cloud Engineer**(クラウド全般)または **Professional ML Engineer**(ML 専門)が王道。",
  },
  { id: "gcpgai-q21", category: "Vertex AI", difficulty: 2, question: "**Vertex AI** の役割として最も適切なものを選びなさい。", choices: ["GCP の AI / ML 統合プラットフォーム", "BigQuery の SQL エディタ", "Compute Engine の管理ツール", "Cloud Storage のフロントエンド"], correctIndex: 0, explanation: "**Vertex AI** は GCP の AI/ML プラットフォーム。Model Garden / Pipelines / AutoML / Workbench / Endpoints / Feature Store / Model Registry を統合。" },
  { id: "gcpgai-q22", category: "Gemini", difficulty: 2, question: "**Gemini** モデルファミリで **最も高性能** な系列として最も適切なものを選びなさい。", choices: ["Gemini Ultra / Pro", "Gemini Nano", "Gemini Flash", "Gemini Lite"], correctIndex: 0, explanation: "**Gemini Ultra / Pro** が最高性能(大規模クラウド推論)。**Flash** は高速 ・ 低コスト、**Nano** はオンデバイス。用途に応じて使い分け。" },
  { id: "gcpgai-q23", category: "Gemini", difficulty: 3, question: "Gemini の **マルチモーダル機能** として **誤っているもの** を選びなさい。", choices: ["テキスト", "画像", "音声 ・ 動画", "実物商品の物理生成"], correctIndex: 3, explanation: "**Gemini はネイティブマルチモーダル**(テキスト / 画像 / 音声 / 動画入出力)。物理生成は不可(設計図までは生成可能)。" },
  { id: "gcpgai-q24", category: "Vertex AI Search", difficulty: 3, question: "**Vertex AI Search** の主機能として最も適切なものを選びなさい。", choices: ["マネージドエンタープライズ検索 + Retrieval + Semantic Reranker + 引用付き回答生成", "Web スクレイピング", "Google 検索の API", "SEO ツール"], correctIndex: 0, explanation: "**Vertex AI Search**(旧 Enterprise Search): マネージド RAG プラットフォーム。社内文書ベクトル化 + Semantic Reranker + Gemini で引用付き回答。" },
  { id: "gcpgai-q25", category: "RAG", difficulty: 3, question: "GCP で RAG を構築する際の **ベクトル検索の選択肢** として **誤っているもの** を選びなさい。", choices: ["Vertex AI Vector Search", "BigQuery Vector Search", "AlloyDB / Cloud SQL with pgvector", "Cloud Functions"], correctIndex: 3, explanation: "GCP ベクトル DB: **Vertex AI Vector Search**(旧 Matching Engine、専用高性能)・ **BigQuery Vector Search**(SQL 内蔵)・ **AlloyDB / Cloud SQL pgvector**。Cloud Functions はサーバレス実行。" },
  { id: "gcpgai-q26", category: "Prompt Engineering", difficulty: 2, question: "**プロンプトエンジニアリング** の基本原則として **誤っているもの** を選びなさい。", choices: ["役割を明示する", "具体的な指示と制約", "Few-shot 例を含める", "曖昧で短い指示が常に最良"], correctIndex: 3, explanation: "**プロンプトは具体性 ・ 明確性 ・ 構造化が鍵**。役割指定 + タスク説明 + 例示 + 出力形式 + 制約。曖昧 ・ 短いプロンプトは精度低下要因。" },
  { id: "gcpgai-q27", category: "Model Garden", difficulty: 2, question: "Vertex AI **Model Garden** の特徴として最も適切なものを選びなさい。", choices: ["Google / OSS / サードパーティの 100+ モデルをカタログ化", "GPU 専用市場", "学習データセット販売", "個人モデル販売"], correctIndex: 0, explanation: "**Model Garden**: Gemini / PaLM / Claude(via Vertex)・ Llama / Gemma / Mistral / DBRX など 100+ モデルを統一カタログ化。1 クリックでデプロイ + ファインチューン。" },
  { id: "gcpgai-q28", category: "倫理", difficulty: 3, question: "Google の **Responsible AI 原則** として **誤っているもの** を選びなさい。", choices: ["社会に有益", "不公正な偏見を作らない / 強化しない", "プライバシー設計を組込", "利益最大化のみ追求"], correctIndex: 3, explanation: "**Google AI 原則 7 つ**: 社会有益 / 不公正バイアス回避 / 安全性 / アカウンタビリティ / プライバシー / 科学的厳密性 / 原則準拠利用。利益最大化は AI 倫理原則ではない。" },
  { id: "gcpgai-q29", category: "Grounding", difficulty: 3, question: "**Grounding** の説明として最も適切なものを選びなさい。", choices: ["LLM の回答を信頼できるデータソースに紐付け / 引用付与", "GPU の物理接地", "サーバを地下に設置", "電気を切る"], correctIndex: 0, explanation: "**Grounding**: 回答を **検証可能な情報源(社内 DB / Google Search / 引用文書)に紐付け** + 引用表示。ハルシネーション抑制 + 信頼性向上の核心技術。" },
  { id: "gcpgai-q30", category: "SynthID", difficulty: 3, question: "Google の **SynthID** の役割として最も適切なものを選びなさい。", choices: ["AI 生成コンテンツに人間には見えない電子透かしを埋め込む", "学習データを暗号化", "GPU 速度向上", "DBA ツール"], correctIndex: 0, explanation: "**SynthID**: DeepMind 開発。画像 / 音声 / 動画 / テキストに不可視透かし。**生成 AI コンテンツの真偽判定**(ディープフェイク対策)。" },
  { id: "gcpgai-q31", category: "Workspace", difficulty: 2, question: "**Google Workspace + Gemini for Workspace** で実現できる機能として **誤っているもの** を選びなさい。", choices: ["Gmail 返信生成", "Docs / Sheets 内 AI 補助", "Meet 自動議事録", "印刷物の物理配送"], correctIndex: 3, explanation: "**Gemini for Workspace**: Gmail / Docs / Sheets / Slides / Meet 内で生成 ・ 要約 ・ 翻訳 ・ 画像生成。物理配送は対象外。Copilot for M365 と競合関係。" },
  { id: "gcpgai-q32", category: "コスト", difficulty: 3, question: "Vertex AI Gemini の **コスト最適化** として **誤っているもの** を選びなさい。", choices: ["Gemini Flash で軽量タスク処理", "Context Caching(Implicit / Explicit)", "Token 上限 ・ Stop sequence 設定", "全タスクを Gemini Ultra で実行"], correctIndex: 3, explanation: "**コスト最適化**: モデル使い分け(Flash / Pro / Ultra)+ Context Caching + Token 制御 + Batch Mode。すべて Ultra は最大コスト ・ 不要な高精度。" },
  { id: "gcpgai-q33", category: "ファインチューン", difficulty: 3, question: "Vertex AI の **Tuning 手法** として **誤っているもの** を選びなさい。", choices: ["Supervised Tuning(SFT)", "RLHF Tuning", "Adapter Tuning(PEFT)", "Quantum Tuning"], correctIndex: 3, explanation: "Vertex AI Tuning: **Supervised / RLHF / Adapter(PEFT、LoRA 等)**。Quantum Tuning は存在しない研究用語。Distillation も対応。" },
  { id: "gcpgai-q34", category: "セキュリティ", difficulty: 3, question: "GCP の **生成 AI セキュリティ** で **VPC Service Controls** が提供する保護として最も適切なものを選びなさい。", choices: ["Vertex AI / BigQuery 等の API をサービス境界外から遮断", "GPU の物理隔離", "Gemini モデルの暗号化", "課金停止"], correctIndex: 0, explanation: "**VPC SC**: サービス境界(perimeter)で **API アクセス制限**。データ exfiltration 対策の中核。Vertex AI / Cloud Storage / BigQuery / Pub/Sub に適用可。" },
  { id: "gcpgai-q35", category: "DLP", difficulty: 3, question: "**Sensitive Data Protection(旧 DLP)** の使い方として最も適切なものを選びなさい。", choices: ["プロンプト / 出力から PII / 機微情報を検出 ・ マスキング", "GPU 監視", "Gemini モデルを切替", "課金ダッシュボード"], correctIndex: 0, explanation: "**SDP**: 150+ infoType 自動検出(クレカ / SSN / 氏名 / 住所等)・ De-identification(マスキング / ハッシュ / 形式保存暗号化)。RAG 入力前段の前処理に有効。" },
  { id: "gcpgai-q36", category: "BigQuery ML", difficulty: 3, question: "**BigQuery ML(BQML)** で SQL から生成 AI を呼ぶ関数として最も適切なものを選びなさい。", choices: ["ML.GENERATE_TEXT(Gemini 呼び出し)", "ML.PREDICT", "ML.EVALUATE", "ML.TRAINING_INFO"], correctIndex: 0, explanation: "**`ML.GENERATE_TEXT(MODEL `gemini-1.5-pro`, TABLE input)`** で SQL 内から Gemini 呼出。**`ML.GENERATE_EMBEDDING` / `ML.PROCESS_DOCUMENT`** など追加。" },
  { id: "gcpgai-q37", category: "Agent", difficulty: 3, question: "Vertex AI **Agent Builder** で構築できるエージェントの特徴として **誤っているもの** を選びなさい。", choices: ["Tool Use(API 呼出)", "Conversation flow 定義", "Grounding 機能", "GPU 物理組立"], correctIndex: 3, explanation: "**Agent Builder**: ノーコード〜ローコードで Agent 構築(Tool Use / Flow / Grounding / Search 統合)。Function Calling for Gemini と組合せて柔軟実装。" },
  { id: "gcpgai-q38", category: "MLOps", difficulty: 3, question: "生成 AI モデルの **継続評価(Continuous Evaluation)** に重要な指標として **誤っているもの** を選びなさい。", choices: ["回答の事実性(Factuality)", "Groundedness", "Toxicity / Safety", "GPU 温度"], correctIndex: 3, explanation: "**生成 AI 評価指標**: Factuality / Groundedness / Toxicity / Helpfulness / Latency / Coherence / Citation。GPU 温度はインフラ監視。" },
  { id: "gcpgai-q39", category: "Vertex AI Studio", difficulty: 2, question: "**Vertex AI Studio** の主用途として最も適切なものを選びなさい。", choices: ["生成 AI のプロンプト試作 + テスト + デプロイの統合 GUI", "ハードウェア設計", "ネットワーク設定", "請求書発行"], correctIndex: 0, explanation: "**Vertex AI Studio**: Gemini / 他 LLM を Web GUI で試作。プロンプト保存 / バージョニング / コードエクスポート(Python / Curl)。" },
  { id: "gcpgai-q40", category: "業務活用", difficulty: 3, question: "生成 AI 導入の **典型的な失敗パターン** として **誤っているもの** を選びなさい。", choices: ["ユースケース選定なし", "ROI 測定なし", "PoC が PoC で終わる", "段階的にスコープ拡大"], correctIndex: 3, explanation: "**段階的拡大は成功パターン**。失敗パターン: 何のために使うか不明 / ROI 測定なし / PoC 倒れ / 機密情報投入。" },
  { id: "gcpgai-q41", category: "Embedding", difficulty: 3, question: "Vertex AI の **textembedding-gecko** が生成する埋め込みの典型的な次元数として最も近いものを選びなさい。", choices: ["768 次元", "10 次元", "10000 次元", "100 万次元"], correctIndex: 0, explanation: "**textembedding-gecko@003**: 768 次元(英語)。Gemini Embedding は新世代で 1024 次元(削減可能)。BERT も 768、t-SNE 用 2-3 次元への可視化次元削減もよくある。" },
  { id: "gcpgai-q42", category: "Token", difficulty: 2, question: "**LLM のトークン** に関する説明として最も適切なものを選びなさい。", choices: ["単語よりも細かい単位(英語約 1 単語 = 1.3 トークン、日本語 1 文字 = 1〜2 トークン)", "1 トークン = 1 文字", "1 トークン = 1 ページ", "1 トークン = 1 秒"], correctIndex: 0, explanation: "**Token = 言語の最小単位**(BPE / SentencePiece 等で分割)。Gemini 1.5 Pro は 200 万トークンの context、Llama 3 は 8000-128K。日本語は英語より多くのトークンを消費。" },
  { id: "gcpgai-q43", category: "Multi-Agent", difficulty: 3, question: "**マルチエージェントシステム** の利点として最も適切なものを選びなさい。", choices: ["専門化された複数エージェントが協調し複雑なタスクを分担", "1 エージェントで全部解決", "GPU 数を増やす", "学習速度向上"], correctIndex: 0, explanation: "**Multi-Agent**: Manager Agent が分担計画 → Specialist Agents(Search / Code / Data 等)に委譲 → 結果統合。AutoGen / CrewAI / LangGraph などフレームワーク。" },
  { id: "gcpgai-q44", category: "Long Context", difficulty: 3, question: "**ロングコンテキスト LLM** で重要な技術として **誤っているもの** を選びなさい。", choices: ["Sliding Window Attention", "Rotary Position Embedding(RoPE)", "Mamba / SSM", "PCA"], correctIndex: 3, explanation: "**Long Context 技術**: SWA / RoPE / ALiBi / Mamba(SSM)/ Linear Attention。PCA は次元削減でロングコンテキストとは無関係。Gemini 1.5 Pro 200 万トークンが代表。" },
  { id: "gcpgai-q45", category: "Function Calling", difficulty: 3, question: "Gemini の **Function Calling** で **構造化出力を強制** する仕組みとして最も適切なものを選びなさい。", choices: ["関数スキーマ(name + 引数定義)を渡し、モデルが JSON で関数呼出を生成", "プロンプトに『JSON で返せ』と書くだけ", "Temperature を 0 にする", "GPU を増やす"], correctIndex: 0, explanation: "**Function Calling**: 関数スキーマ(OpenAPI 風)を渡し、Gemini が **構造化 JSON で関数呼出を生成**。Tool Use の標準化。プロンプト指示だけより信頼性高。" },
  { id: "gcpgai-q46", category: "Data 準備", difficulty: 2, question: "Fine-tuning 用データセットの **量と質のトレードオフ** で **誤っているもの** を選びなさい。", choices: ["少量でも高品質なら有効", "ノイズの多い大量データより、整理された少量が良い", "ラベルの一貫性が重要", "量さえあれば品質は無視で良い"], correctIndex: 3, explanation: "**品質 >> 量**。少量(100 〜数千)でも高品質ラベル ・ 整理データで効果大。LoRA / QLoRA など効率手法で少量データから始める。" },
  { id: "gcpgai-q47", category: "業界活用", difficulty: 3, question: "**医療分野** での生成 AI 活用で **特に注意すべき点** として最も適切なものを選びなさい。", choices: ["診断は最終的に医師判断、HIPAA / 個人情報保護法準拠、ハルシネーション", "コスト最小化のみ", "速度最優先", "GPU 種別"], correctIndex: 0, explanation: "**医療 AI**: 最終診断は医師(規制要件)、HIPAA / 個人情報保護法準拠、ハルシネーション抑制必須。説明可能性 ・ 監査ログ ・ Drift 監視も必須。" },
  { id: "gcpgai-q48", category: "EU AI Act", difficulty: 3, question: "**EU AI Act** が定める **High Risk AI** に含まれるものとして **誤っているもの** を選びなさい。", choices: ["医療診断", "採用 ・ 信用スコアリング", "刑事司法", "ゲーム NPC"], correctIndex: 3, explanation: "**High Risk AI**: 医療 / 採用 / 信用 / 刑事 / 教育 / 重要インフラ / 法執行など。ゲーム NPC は限定リスクまたは最小リスク。違反金は全世界売上の最大 7%。" },
  { id: "gcpgai-q49", category: "実装", difficulty: 3, question: "GCP で **AI 推論 API のレートリミット対策** として最も適切なものを選びなさい。", choices: ["指数バックオフ + リトライ + キューイング", "リトライを無効化", "Always-on で固定 RPS", "GPU を増やす"], correctIndex: 0, explanation: "**Rate Limit 対策**: 指数バックオフ + ジッタ + リトライ + キューイング(Pub/Sub / Cloud Tasks)。429 / 503 でリトライ、5xx は exponential backoff が定石。" },
  { id: "gcpgai-q50", category: "次のステップ", difficulty: 1, question: "GCP Gen AI Leader 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["Professional Cloud Architect ・ Pro ML Engineer ・ Pro Data Engineer 等の Professional", "ITパスポート", "簿記 3 級", "Cloud Digital Leader 再受験"], correctIndex: 0, explanation: "Foundational → **Associate → Professional** への王道。AI 系深掘りなら Pro ML Engineer、データ基盤なら Pro Data Engineer、全体設計なら Pro Cloud Architect。" },
  { id: "gcpgai-q51", category: "Gemini", difficulty: 3, question: "**Gemini 1.5 Pro** の特徴として最も適切なものを選びなさい。", choices: ["最大 200 万トークンの長文 ・ マルチモーダル(動画 / 音声)・ Context Caching 対応", "テキスト専用", "8K トークン上限", "画像出力専用"], correctIndex: 0, explanation: "**Gemini 1.5 Pro**: 200 万トークン Context(GPT-4o の 100x)・ 動画 / 音声 / 画像理解 ・ **Context Caching** で再利用コスト 75% 減。長文 RAG / コード解析に強い。" },
  { id: "gcpgai-q52", category: "Gemini", difficulty: 3, question: "**Gemini Flash** モデルの位置づけとして最も適切なものを選びなさい。", choices: ["低レイテンシ ・ 低コスト ・ 高頻度タスク向けの軽量モデル", "最高性能", "学習用", "Embedding 専用"], correctIndex: 0, explanation: "**Gemini Flash / Flash-Lite**: 100 万トークン Context + 高速 + 低コスト。**Pro / Ultra より 1/10 コスト**でチャット / 要約 / 分類など高頻度 ・ 大量タスクに最適。" },
  { id: "gcpgai-q53", category: "RAG", difficulty: 3, question: "**Vertex AI Search**(旧 Enterprise Search)の用途として最も適切なものを選びなさい。", choices: ["マネージド RAG: ベクトル検索 + Reranking + Citation 付き回答生成", "学習データ作成", "GPU 学習", "認証"], correctIndex: 0, explanation: "**Vertex AI Search**: マネージド RAG プラットフォーム。**Ingest → Embedding → ベクトル DB → Search → LLM Synthesis + Citation**を一気通貫。エンタープライズ検索の標準。" },
  { id: "gcpgai-q54", category: "RAG", difficulty: 3, question: "**Vector Search**(旧 Matching Engine)の役割として最も適切なものを選びなさい。", choices: ["大規模 ANN(近似最近傍)サービス → 数十億ベクトルから ms 級検索", "RDB", "GUI", "学習"], correctIndex: 0, explanation: "**Vector Search**: ScaNN ベース ANN。**RAG / 推薦 / 類似画像 / 異常検知** に。Vertex AI Embeddings API と組合せで RAG 構築。Hybrid Search(疎+密)対応。" },
  { id: "gcpgai-q55", category: "Embedding", difficulty: 3, question: "**Vertex AI Embeddings(text-embedding-004 等)** の主用途として最も適切なものを選びなさい。", choices: ["文章 → 768 次元ベクトル化 → 類似検索 / RAG / 分類 / 推薦", "画像生成", "音声生成", "コード補完"], correctIndex: 0, explanation: "**text-embedding-004 / multilingual / multimodal-embedding-001**(画像 + テキスト共通空間)。RAG / Semantic Search / 推薦の基盤。**Task Type** 指定でタスク最適化。" },
  { id: "gcpgai-q56", category: "Tuning", difficulty: 3, question: "**Vertex AI Gemini Fine-tuning** の特徴として最も適切なものを選びなさい。", choices: ["Supervised Fine-tuning(SFT)・ LoRA Adapter ベース ・ Vertex AI Pipelines 統合", "Full Pretraining", "GUI のみ", "学習データ不要"], correctIndex: 0, explanation: "**Gemini Tuning**: **LoRA / Adapter-based Supervised Fine-tuning**。教師データ JSONL 投入 → Tuned Model 生成 → Endpoint デプロイ。**Distillation**(蒸留)も Preview。" },
  { id: "gcpgai-q57", category: "Prompting", difficulty: 3, question: "**Chain-of-Thought(CoT)** プロンプティングの効果として最も適切なものを選びなさい。", choices: ["「ステップごとに考えて」と指示 → 推論精度向上(数学 / コード / 多段推論)", "速度向上", "コスト削減", "GPU 不要"], correctIndex: 0, explanation: "**CoT**: 「Let's think step by step」(Zero-shot)/ 例示(Few-shot)で中間推論を生成。**数学 / コード / 論理問題** で大幅精度向上。**Self-Consistency** / **ToT** / **GoT** の基礎。" },
  { id: "gcpgai-q58", category: "Agent", difficulty: 3, question: "**ReAct(Reasoning + Acting)** パターンの特徴として最も適切なものを選びなさい。", choices: ["Thought → Action(Tool 呼出)→ Observation のループで推論 + 行動", "学習データ生成", "GUI 自動化", "認証 SSO"], correctIndex: 0, explanation: "**ReAct**(Yao et al. 2022): LLM が Thought / Action / Observation を交互に出力 → 外部 Tool 呼出と推論を統合。**LangChain / Agent Builder** の基本パターン。" },
  { id: "gcpgai-q59", category: "Safety", difficulty: 3, question: "**Vertex AI Safety Filter** の制御項目として **誤っているもの** を選びなさい。", choices: ["Harassment", "Hate Speech", "Sexually Explicit", "Cost"], correctIndex: 3, explanation: "**Safety Categories**: Harassment / Hate / Sexually Explicit / Dangerous(自傷 / 武器 / 違法行為)。**Threshold**(BLOCK_NONE / LOW / MED / HIGH)。Cost は Filter 対象外。" },
  { id: "gcpgai-q60", category: "Responsible AI", difficulty: 3, question: "**Google Responsible AI 原則** で最も重要視される項目として最も適切なものを選びなさい。", choices: ["公平性 ・ 透明性 ・ 安全性 ・ プライバシー ・ Accountability の Human-Centric AI", "速度最優先", "コスト最優先", "GUI 最優先"], correctIndex: 0, explanation: "**Google AI Principles(2018)**: 社会的便益 / 不公正な偏見回避 / 安全性 / 説明責任 / プライバシー / 科学的卓越性 / 責任ある利用。**禁止用途**: 武器 / 不当監視 / 国際法違反等。" },
  { id: "gcpgai-q61", category: "Compliance", difficulty: 3, question: "**EU AI Act の General Purpose AI(GPAI)** に課される要件として最も適切なものを選びなさい。", choices: ["技術文書 ・ 著作権ポリシー ・ 学習データサマリ公開 + 高 Capability は追加義務", "規制なし", "禁止", "Capability 一律不問"], correctIndex: 0, explanation: "**GPAI**(基盤モデル): 技術文書 / 著作権遵守 / 学習データサマリ公開。**Systemic Risk GPAI**(>10^25 FLOPs): モデル評価 / インシデント報告 / サイバーセキュリティ追加義務。" },
  { id: "gcpgai-q62", category: "業界活用", difficulty: 3, question: "**金融分野** での生成 AI 活用の典型ユースケースとして最も適切なものを選びなさい。", choices: ["KYC / 契約書要約 / コールセンター支援 / 不正検知の補助", "顧客資産直接運用", "規制無視", "個人情報公開"], correctIndex: 0, explanation: "**金融 GenAI**: KYC / 契約書要約 / 規制対応 / コール対応 / 不正検知補助。**Human-in-the-Loop** 必須、最終判断は人 ・ 監査ログ ・ Drift 監視で説明責任。" },
  { id: "gcpgai-q63", category: "Cost", difficulty: 3, question: "**Vertex AI Gemini Context Caching** の効果として最も適切なものを選びなさい。", choices: ["長文 Prompt の Token を Cache → 再利用時のコスト 75% 削減 ・ レイテンシ短縮", "速度低下", "コスト増", "GPU 不要"], correctIndex: 0, explanation: "**Context Caching**(Gemini 1.5 以降): プロンプト前半(システムプロンプト / 大量資料)を 1 時間 Cache → 後続呼出のコスト 75% 減。RAG / Agent / マルチターンで効果大。" },
  { id: "gcpgai-q64", category: "Architecture", difficulty: 3, question: "**RAG の基本アーキテクチャ** の構成要素として **誤っているもの** を選びなさい。", choices: ["Document Loader / Chunker", "Embedding + Vector Store", "Retriever + Reranker", "GPU Auto Scaling"], correctIndex: 3, explanation: "**RAG Pipeline**: ① Loader → ② Chunk → ③ Embedding → ④ Vector Store → ⑤ Retriever(類似検索)→ ⑥ Reranker(再順位)→ ⑦ LLM Synthesis + Citation。GPU Scaling は実装詳細。" },
  { id: "gcpgai-q65", category: "実務", difficulty: 3, question: "GCP Gen AI Leader 試験で重視される **ビジネス視点の判断** として最も適切なものを選びなさい。", choices: ["ユースケースの選定 → ROI / 倫理 / コンプラ評価 → PoC → Production → Monitoring の段階展開", "全社一斉導入", "技術検証なし", "規制無視"], correctIndex: 0, explanation: "**ビジネス ・ リーダー視点**: ① ユースケース選定(ROI / リスク評価)② PoC(精度 / コスト)③ 段階展開(部門→全社)④ Governance(Responsible AI / 監査)⑤ 継続 Monitoring。Gen AI Leader 試験の中核。" },
];
