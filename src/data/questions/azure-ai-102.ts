import type { Question } from "@/types/content";

export const azureAi102Questions: Question[] = [
  {
    id: "az102-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Microsoft AI-102(Azure AI Engineer Associate)が分類される認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Fundamentals",
      "Associate",
      "Expert",
      "Specialty",
    ],
    correctIndex: 1,
    explanation:
      "**AI-102 は Associate レベル**。Fundamentals に AI-900、Expert に AZ-305 などがある。",
  },
  {
    id: "az102-q2",
    category: "AI-900 比較",
    difficulty: 2,
    question:
      "AI-102 が AI-900 に対して **追加で問う** 内容として最も適切なものを選びなさい。",
    choices: [
      "AI / ML / 生成 AI の基本概念",
      "Azure サービスの選び分け",
      "SDK / REST API / IaC によるコード実装 ・ デプロイ ・ 監視",
      "Microsoft 責任ある AI の 6 原則",
    ],
    correctIndex: 2,
    explanation:
      "**AI-900 は概念 ・ サービス選択中心**(コード問題ほぼなし)、**AI-102 は実装 ・ コード ・ API 呼出 ・ デプロイ ・ 監視まで** を測る。前提知識として C# / Python / REST API / JSON / Git が必要。",
  },
  {
    id: "az102-q3",
    category: "リソース",
    difficulty: 2,
    question:
      "**1 つのキー / エンドポイントで複数の Azure AI サービスを利用** できるリソースの名称として最も適切なものを選びなさい。",
    choices: [
      "Azure AI services リソース(マルチサービス)",
      "個別サービスリソース",
      "Azure AI Foundry Hub",
      "Azure OpenAI リソース",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI services リソース(マルチサービス)** は 1 つのキー / エンドポイントで複数 AI サービス利用可能。個別リソースはサービスごとに分離される(細かい権限管理に有利)。",
  },
  {
    id: "az102-q4",
    category: "認証",
    difficulty: 3,
    question:
      "Azure AI サービスへの認証で、**長期保管しなくて済む推奨方式** として最も適切なものを選びなさい。",
    choices: [
      "Subscription Key を環境変数に保存",
      "Microsoft Entra ID + Managed Identity",
      "ハードコードした API Key",
      "anonymously アクセス",
    ],
    correctIndex: 1,
    explanation:
      "**Microsoft Entra ID + Managed Identity** が推奨。アプリ / VM / Function に自動配布され、キーの長期保管が不要。Subscription Key より安全 ・ 管理性が高い。",
  },
  {
    id: "az102-q5",
    category: "Azure OpenAI",
    difficulty: 2,
    question:
      "Azure OpenAI で **本番大規模運用** で予測可能なコストとスループットを確保する購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "Standard デプロイ(トークン課金)",
      "Provisioned Throughput Units(PTU)",
      "Free Tier",
      "Spot Instance",
    ],
    correctIndex: 1,
    explanation:
      "**PTU(Provisioned Throughput Units)** はスループット(トークン/秒)を予約する購入モデル。本番大規模 + 予測可能コスト + 確実な性能を実現。",
  },
  {
    id: "az102-q6",
    category: "Azure OpenAI",
    difficulty: 3,
    question:
      "GPT-4o などのモデルに **JSON Schema での構造化出力** を強制する機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Function Calling",
      "Structured Outputs",
      "Streaming",
      "Embeddings",
    ],
    correctIndex: 1,
    explanation:
      "**Structured Outputs** は JSON Schema を指定してモデル出力を強制的に構造化する機能。Function Calling とも組合せて使える。",
  },
  {
    id: "az102-q7",
    category: "RAG",
    difficulty: 3,
    question:
      "Azure AI Search の **Semantic Ranker** の主な役割として最も適切なものを選びなさい。",
    choices: [
      "ドキュメントをベクトル化する",
      "検索結果を ML ベースでリランキングし関連性を高める",
      "ベクトル DB の管理",
      "OCR を実行する",
    ],
    correctIndex: 1,
    explanation:
      "**Semantic Ranker** は検索結果に対して **意味的な関連性** で再順序付けする ML ベースのリランカー。ハイブリッド検索の最終段で使われ、RAG の精度を大きく改善する。",
  },
  {
    id: "az102-q8",
    category: "RAG",
    difficulty: 3,
    question:
      "Azure AI Search の **AI Enrichment(AI 拡充)** で実行できないものとして最も適切なものを選びなさい。",
    choices: [
      "PDF からの OCR(Document Intelligence Skill)",
      "言語検出 ・ エンティティ抽出(AI Language Skill)",
      "画像説明文の自動付与(AI Vision Skill)",
      "Azure VM の起動 ・ 停止",
    ],
    correctIndex: 3,
    explanation:
      "AI Enrichment は **Azure AI サービスの Skill** を組合わせるパイプライン。VM 起動 ・ 停止のようなインフラ操作は範囲外で、Custom Skill(Azure Function 等)で行う。",
  },
  {
    id: "az102-q9",
    category: "Vision",
    difficulty: 3,
    question:
      "請求書から **構造化された KV(キーバリュー)+ 表 + チェックボックス** を抽出する Azure AI サービスとして最も適切なものを選びなさい。",
    choices: [
      "Azure AI Vision Read API",
      "Azure AI Document Intelligence",
      "Custom Vision",
      "Face",
    ],
    correctIndex: 1,
    explanation:
      "**Document Intelligence**(旧 Form Recognizer)は構造化抽出に特化。Read API は純粋な OCR、Vision Image Analysis は画像分類 / 物体検出 / 説明、Custom Vision は独自モデル。",
  },
  {
    id: "az102-q10",
    category: "Vision",
    difficulty: 3,
    question:
      "Custom Vision モデルを **TensorFlow Lite / ONNX 形式でエクスポート** したい場合、選択すべき Domain として最も適切なものを選びなさい。",
    choices: [
      "General",
      "General(compact)",
      "Food",
      "Landmarks",
    ],
    correctIndex: 1,
    explanation:
      "**General(compact)** などの **compact ドメイン** がエッジ ・ モバイル展開向け。TensorFlow Lite / ONNX / CoreML / Docker でエクスポートして、デバイス上で推論できる。",
  },
  {
    id: "az102-q11",
    category: "Language",
    difficulty: 2,
    question:
      "Azure AI Language で **意図(Intent)+ エンティティ(Entity)** を抽出するサービス名として最も適切なものを選びなさい。",
    choices: [
      "Sentiment Analysis",
      "Conversational Language Understanding(CLU)",
      "Named Entity Recognition(NER)",
      "Translator",
    ],
    correctIndex: 1,
    explanation:
      "**CLU(旧 LUIS の後継)** が Intent + Entity 抽出のサービス。Bot 開発で使われ、Question Answering と並ぶ Azure AI Language の中核機能。",
  },
  {
    id: "az102-q12",
    category: "Language",
    difficulty: 3,
    question:
      "複数の CLU プロジェクト + Question Answering を統合して **1 つの会話エージェント** として振る舞わせる機能として最も適切なものを選びなさい。",
    choices: [
      "Orchestration Workflow",
      "Bot Framework Composer",
      "Power Virtual Agents",
      "OpenAI Assistant",
    ],
    correctIndex: 0,
    explanation:
      "**Orchestration Workflow** は複数の CLU + Question Answering プロジェクトをトップレベルで統合し、ユーザの発話を適切なプロジェクトにルーティングする機能。",
  },
  {
    id: "az102-q13",
    category: "Speech",
    difficulty: 2,
    question:
      "**音声 → 翻訳済テキスト or 音声** を 1 つの API で実現する Azure AI Speech 機能として最も適切なものを選びなさい。",
    choices: [
      "Speech to Text",
      "Text to Speech",
      "Speech Translation",
      "Speaker Recognition",
    ],
    correctIndex: 2,
    explanation:
      "**Speech Translation** は音声 → 翻訳テキスト or 音声を 1 つの API で実現する Speech サービスの機能。リアルタイム字幕にも使われる。",
  },
  {
    id: "az102-q14",
    category: "Foundry",
    difficulty: 2,
    question:
      "Azure AI Foundry で **プロンプト + RAG + Function Calling のオーケストレーション** を構築する機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Prompt Flow",
      "Bicep",
      "Azure Logic Apps",
      "Azure Functions",
    ],
    correctIndex: 0,
    explanation:
      "**Prompt Flow** は Azure AI Foundry に統合された生成 AI 開発のオーケストレーションツール。プロンプト ・ 検索 ・ 関数呼出を Visual に組み立て、デプロイ ・ 評価まで一貫処理。",
  },
  {
    id: "az102-q15",
    category: "Agent",
    difficulty: 3,
    question:
      "Azure AI Agent Service で利用できる **組込みツール** に **含まれない** ものを選びなさい。",
    choices: [
      "File Search(ナレッジ検索)",
      "Code Interpreter",
      "Function Calling",
      "Stripe Payment 自動処理",
    ],
    correctIndex: 3,
    explanation:
      "AI Agent Service の組込みツールは **File Search / Code Interpreter / Function Calling** など。決済などの個別処理は Function Calling で外部 API を呼出して実装する。",
  },
  {
    id: "az102-q16",
    category: "Content Safety",
    difficulty: 3,
    question:
      "Azure AI Content Safety の **Prompt Shields** 機能の主な役割として最も適切なものを選びなさい。",
    choices: [
      "出力テキストの暴力 / 性的 / 自傷 / 憎悪検出",
      "プロンプトインジェクション(直接 / 間接)対策",
      "画像の不適切コンテンツ検出",
      "著作権保護コンテンツ検出",
    ],
    correctIndex: 1,
    explanation:
      "**Prompt Shields** はプロンプトインジェクション(直接 ・ 間接)を検出 ・ 防御する機能。Direct Attack / Indirect Attack の 2 種を扱う。",
  },
  {
    id: "az102-q17",
    category: "評価",
    difficulty: 3,
    question:
      "RAG で生成された回答が **提供されたソース情報に基づいているか** を評価する指標として最も適切なものを選びなさい。",
    choices: [
      "Groundedness",
      "Relevance",
      "Coherence",
      "Fluency",
    ],
    correctIndex: 0,
    explanation:
      "**Groundedness** は『回答が提供された情報源に裏付けられているか』を評価。ハルシネーション検出の鍵指標。Relevance は質問との関連性、Coherence は論理性、Fluency は流暢さ。",
  },
  {
    id: "az102-q18",
    category: "デプロイ",
    difficulty: 2,
    question:
      "Azure AI services を **オンプレミス / エッジで動かす** デプロイ手段として最も適切なものを選びなさい。",
    choices: [
      "Azure App Service",
      "Container Deployment(Cognitive Services Container)",
      "Azure Functions",
      "Azure Logic Apps",
    ],
    correctIndex: 1,
    explanation:
      "**Container Deployment** は AI サービスを Docker コンテナとして取得し、オンプレ / エッジで動かす方式。データ常駐 ・ 低遅延が必要な環境で使われる。",
  },
  {
    id: "az102-q19",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "Azure OpenAI を **VNet 内のプライベート接続のみ** で利用するための機能として最も適切なものを選びなさい。",
    choices: [
      "Azure Front Door",
      "Private Endpoint",
      "Public IP",
      "Application Gateway",
    ],
    correctIndex: 1,
    explanation:
      "**Private Endpoint** で Azure OpenAI を VNet 内のプライベート IP のみで利用可能。データがインターネットに出ないため、エンタープライズ要件で重要。",
  },
  {
    id: "az102-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "AI-102 合格後、Azure の次のステップとして最も適切なものを選びなさい。",
    choices: [
      "AZ-900(Azure Fundamentals)",
      "DP-100(Azure Data Scientist Associate)",
      "MS-900(Microsoft 365 Fundamentals)",
      "PL-100(Power Platform App Maker)",
    ],
    correctIndex: 1,
    explanation:
      "AI-102(AI Engineer Associate)の自然な次のステップは **DP-100(Azure Data Scientist Associate)** で ML 寄りに進むか、**DP-203(Azure Data Engineer Associate)** でデータ基盤側に進む。",
  },
];
