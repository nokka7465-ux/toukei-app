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
];
