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
  {
    id: "az102-q21",
    category: "Azure OpenAI",
    difficulty: 3,
    question:
      "Azure OpenAI の **On Your Data**(旧称 Bring Your Own Data)機能の説明として最も適切なものを選びなさい。",
    choices: [
      "Azure OpenAI を社内データを参照する RAG として動かすマネージド機能(AI Search 統合)",
      "OpenAI のモデルをファインチューニングする機能",
      "OpenAI の API を完全オンプレで動かす機能",
      "プロンプトを暗号化する機能",
    ],
    correctIndex: 0,
    explanation:
      "**Azure OpenAI On Your Data** は **Azure AI Search を retrieval として GPT モデルに渡すマネージド RAG**。Studio から数クリックで設定可能。Bedrock Knowledge Bases に相当。",
  },
  {
    id: "az102-q22",
    category: "Azure AI Search",
    difficulty: 3,
    question:
      "Azure AI Search(旧 Cognitive Search)で **テキスト ・ ベクトル ・ ハイブリッド検索を 1 クエリで実行** する機能を選びなさい。",
    choices: [
      "Hybrid Search(BM25 + Vector + Semantic Reranking)",
      "Faceted Navigation",
      "Semantic Search のみ",
      "BM25 のみ",
    ],
    correctIndex: 0,
    explanation:
      "**Hybrid Search** は **キーワード(BM25)+ ベクトル類似度 + Semantic Reranker(L2 ランキング)** を組合せ、RAG の retrieval 品質を最大化。RAG の標準構成。",
  },
  {
    id: "az102-q23",
    category: "AI Foundry",
    difficulty: 3,
    question:
      "Azure AI Foundry(旧 Azure AI Studio)が **Azure ML Studio と異なる主眼** として最も適切なものを選びなさい。",
    choices: [
      "ジェネレーティブ AI ・ Agent ・ プロンプトフロー ・ モデルカタログを統合",
      "古典的 ML の AutoML 専用",
      "DBA 専用ツール",
      "Power BI の置き換え",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Foundry** は **生成 AI ・ Agent ・ Prompt Flow ・ 1700+ モデルカタログ ・ Evaluation ・ Content Safety** を統合した AI Engineer 向けの新スタジオ。**Azure ML Studio は古典 ML 中心**。",
  },
  {
    id: "az102-q24",
    category: "Prompt Flow",
    difficulty: 3,
    question:
      "Azure AI Foundry の **Prompt Flow** が解決する課題として最も適切なものを選びなさい。",
    choices: [
      "プロンプト ・ Tool 呼出 ・ 評価のオーケストレーションを GUI + コードで構築 ・ 評価 ・ デプロイ",
      "GPU の自動プロビジョニング",
      "ファインチューニングの自動化",
      "音声合成専用パイプライン",
    ],
    correctIndex: 0,
    explanation:
      "**Prompt Flow** は **LLM アプリケーションの DAG**(プロンプト + Tool 呼出 + 後処理 + 評価)を構築し、**バージョン管理 ・ バッチ評価 ・ デプロイ** を一気通貫で行う。LangChain と類似だが GUI 込み。",
  },
  {
    id: "az102-q25",
    category: "Content Safety",
    difficulty: 3,
    question:
      "Azure AI Content Safety の **検出カテゴリ** として **誤っているもの** を選びなさい。",
    choices: ["Hate", "Self-harm", "Sexual", "Politics(政治的中立性検査)"],
    correctIndex: 3,
    explanation:
      "**Content Safety の標準カテゴリは 4 つ**: **Hate / Self-harm / Sexual / Violence**。各カテゴリ severity 0-7 でスコアリング + Prompt Shield(脱獄)+ Groundedness(接地)+ Protected Material(著作権)。",
  },
  {
    id: "az102-q26",
    category: "AI Vision",
    difficulty: 2,
    question:
      "**画像内のテキスト(印字 + 手書き)を抽出** する Azure AI サービスとして最も適切なものを選びなさい。",
    choices: [
      "Azure AI Vision Image Analysis(Read API)",
      "Form Recognizer / Document Intelligence",
      "Custom Vision",
      "Computer Vision の Spatial Analysis",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Vision の Read API**(旧 OCR)は **印字 + 手書き混在の画像 ・ PDF からテキスト抽出**。**Document Intelligence は表 ・ レシート ・ 請求書などの構造化文書** を解析する上位サービス。",
  },
  {
    id: "az102-q27",
    category: "Document Intelligence",
    difficulty: 3,
    question:
      "Azure Document Intelligence(旧 Form Recognizer)の **Custom モデル** で **少量データから請求書フォーマットを学習** する手法を選びなさい。",
    choices: [
      "Custom Template Model(構造固定の文書、5 サンプルから)",
      "Custom Neural Model(構造可変、ラベル付き 5 サンプル以上)",
      "上記の両方が用途に応じて選択可能",
      "Document Intelligence では Custom 学習はできない",
    ],
    correctIndex: 2,
    explanation:
      "**Custom Template = 構造固定**(レイアウトが同じ書式向け、5+ サンプル)、**Custom Neural = 構造可変**(様々なフォーマットを統一スキーマで抽出、ラベル付き 5+ サンプル)。両者を用途に応じて選択。",
  },
  {
    id: "az102-q28",
    category: "Speech",
    difficulty: 2,
    question:
      "Azure AI Speech の **Custom Speech**(STT カスタム)で **業界用語の認識精度を上げる** ために用意するデータとして最も適切なものを選びなさい。",
    choices: [
      "音声 + 文字起こし ペアの学習データ + ドメイン用語リスト",
      "ノイズデータのみ",
      "GPU 仮想マシン",
      "REST API キーのみ",
    ],
    correctIndex: 0,
    explanation:
      "**Custom Speech** は **音声 + 文字起こし(.wav + .txt)+ Pronunciation データ + ドメイン Phrase List** で精度向上。固有名詞 ・ 業界用語の認識率改善が主用途。",
  },
  {
    id: "az102-q29",
    category: "Translator",
    difficulty: 2,
    question:
      "**Custom Translator** で **業界用語を含むカスタム翻訳モデル** を作る場合、**最低限必要なデータ** を選びなさい。",
    choices: [
      "対訳の Translation Memory(TMX / Excel)10,000 文以上推奨",
      "音声サンプル",
      "画像とキャプション",
      "OCR 出力のみ",
    ],
    correctIndex: 0,
    explanation:
      "**Custom Translator** は **対訳コーパス(TMX / XLIFF / Excel / Aligned)** で学習。**並行コーパス 10,000 文以上推奨**。専門用語辞書(Dictionary)と組合せでさらに精度向上。",
  },
  {
    id: "az102-q30",
    category: "Cost",
    difficulty: 2,
    question:
      "Azure OpenAI の **Provisioned Throughput Units(PTU)** モデルの説明として最も適切なものを選びなさい。",
    choices: [
      "予約 ・ 専有スループット課金、レイテンシ安定 ・ 大規模ワークロード向け",
      "従量課金で 1 リクエスト単位の料金",
      "完全無料の研究用枠",
      "GPU を直接借りる課金",
    ],
    correctIndex: 0,
    explanation:
      "**Provisioned Throughput Units(PTU)** は **GPT-4 等を予約 ・ 専有スループットで利用**(月額)。**レイテンシ安定 ・ 大規模一定ワークロード** 向け。**従量(Pay-as-you-go)** は変動的トラフィック向き。",
  },
  { id: "az102-q31", category: "Foundry", difficulty: 3, question: "AI Foundry の **Model Catalog** に含まれる典型的なモデルとして **誤っているもの** を選びなさい。", choices: ["Azure OpenAI(GPT-4 / GPT-4o)", "Llama / Mistral / Phi", "DeepSeek / DBRX / Qwen", "macOS の Siri"], correctIndex: 3, explanation: "**Model Catalog**(1700+): OpenAI / Microsoft Phi / Meta Llama / Mistral / Cohere / Stability / NVIDIA / DeepSeek / Databricks DBRX / Alibaba Qwen / Hugging Face。Siri は無関係。" },
  { id: "az102-q32", category: "Foundry", difficulty: 3, question: "AI Foundry の **AI Studio** と **Hub** の関係として最も適切なものを選びなさい。", choices: ["Hub: チーム共通リソース / Project: アプリ単位の隔離環境", "両者同じ", "Hub は廃止", "Project は古い"], correctIndex: 0, explanation: "**Hub**: 共通 Compute / Connection / Storage / Identity を Workspace 横断管理。**Project**: Hub 配下でアプリ ・ チームごとのリソース隔離 + ガバナンス。" },
  { id: "az102-q33", category: "Embedding", difficulty: 3, question: "Azure OpenAI で **テキスト埋め込み** の最新モデルとして最も適切なものを選びなさい。", choices: ["text-embedding-3-small / text-embedding-3-large", "GPT-4", "DALL-E 3", "Whisper"], correctIndex: 0, explanation: "**text-embedding-3-large**(3072 次元、最高精度)/ **3-small**(1536 次元、コスト効率)。旧 ada-002 は廃止予定。RAG / Semantic Search / クラスタリングで活用。" },
  { id: "az102-q34", category: "Assistant API", difficulty: 3, question: "Azure OpenAI **Assistant API** の主要機能として **誤っているもの** を選びなさい。", choices: ["Thread(会話履歴管理)", "Code Interpreter", "File Search(RAG)", "GPU 直接アクセス"], correctIndex: 3, explanation: "**Assistant API**: Thread + Run + Tools(Code Interpreter / File Search / Function Calling)。会話履歴と Tool 利用を自動管理。GPU 直接アクセスは無関係。" },
  { id: "az102-q35", category: "Realtime API", difficulty: 3, question: "Azure OpenAI **Realtime API** の特徴として最も適切なものを選びなさい。", choices: ["WebSocket で低レイテンシ音声 ・ テキスト双方向通信", "REST のみ", "Batch 専用", "GPU 専用"], correctIndex: 0, explanation: "**Realtime API**(2024 GA): GPT-4o Realtime で **音声 → 音声直接対話**(数百 ms 応答)。電話 ・ 通訳 ・ 会話 AI で実装容易。" },
  { id: "az102-q36", category: "Vision", difficulty: 3, question: "Azure AI Vision の **Custom Vision** を超える上位機能として最も適切なものを選びなさい。", choices: ["Image Analysis 4.0(Florence ベース)+ Video Indexer + Spatial Analysis", "Power BI", "OCR のみ", "DB 接続"], correctIndex: 0, explanation: "**Image Analysis 4.0**: Florence(Microsoft 大規模 Vision モデル)で標準的物体 / シーン認識。**Video Indexer**(顔 / 音声 / OCR 等の動画分析)・ **Spatial Analysis** で複合的視覚分析。" },
  { id: "az102-q37", category: "Speech", difficulty: 3, question: "Azure AI Speech の **Speech to Text** で **業界用語のカスタマイズ** に使う方法として最も適切なものを選びなさい。", choices: ["Custom Speech(音声 + 文字起こしデータで fine-tune)", "Custom Vision", "Translator", "Bot Service"], correctIndex: 0, explanation: "**Custom Speech**: 音声 + 文字起こし(WAV + TXT)+ Phrase List で fine-tune。**業界用語 ・ 固有名詞 ・ 訛り** に対応。**Pronunciation Assessment** も提供。" },
  { id: "az102-q38", category: "Document Intelligence", difficulty: 3, question: "Azure Document Intelligence の **Generative AI mode**(2024)の特徴として最も適切なものを選びなさい。", choices: ["ラベル付け不要の少サンプルで Field 抽出を自然言語指示", "従来通り大量ラベリング必要", "PDF のみ", "Table のみ"], correctIndex: 0, explanation: "**Generative AI mode**: 文書 + Field 名(自然言語)を渡すと自動抽出 → fine-tune 不要。Few-shot サンプルで精度向上可。Custom Neural Model からの世代交代。" },
  { id: "az102-q39", category: "Translator", difficulty: 3, question: "Azure Translator の **Document Translation** の特徴として最も適切なものを選びなさい。", choices: ["PDF / Word / PowerPoint のレイアウトを保持したまま翻訳", "テキストのみ", "音声のみ", "BBox 検出"], correctIndex: 0, explanation: "**Document Translation**: Blob Storage 上の文書を **元レイアウト保持** で翻訳 → 別 Blob に保存。**Async**(非同期、大量文書対応)。Custom Translator と組合せ可。" },
  { id: "az102-q40", category: "Language", difficulty: 3, question: "Azure AI Language の **Custom Question Answering(CQA)** の用途として最も適切なものを選びなさい。", choices: ["FAQ ・ KB から Q&A ペアを学習 → 自然言語質問応答", "翻訳", "音声合成", "GUI 構築"], correctIndex: 0, explanation: "**CQA**(旧 QnA Maker 後継): FAQ 文書をインポート → 質問の表現揺れに頑健な Q&A Bot。**Azure AI Search + LLM** で Custom Question Answering Service として展開。" },
  { id: "az102-q41", category: "Search", difficulty: 3, question: "Azure AI Search の **Skillset** の用途として最も適切なものを選びなさい。", choices: ["インデックスデータに OCR / NER / 埋め込み等を追加するエンリッチパイプライン", "管理コンソール", "認証", "GPU 制御"], correctIndex: 0, explanation: "**Skillset**: AI 機能を Search Index 作成時に組込(Cognitive Skills)。OCR / Key Phrase / Entity / Embedding / Custom Skill(REST)で拡張。" },
  { id: "az102-q42", category: "Search", difficulty: 3, question: "Azure AI Search の **Indexer** の役割として最も適切なものを選びなさい。", choices: ["データソース(Blob / SQL / Cosmos / etc)→ Index への取込スケジュール", "新規 Search サービス作成", "クエリ実行", "認証"], correctIndex: 0, explanation: "**Indexer**: スケジュール ・ 増分でデータソースから Index 構築。**Change Detection**(Cosmos の \\_ts、SQL の SQL Integrated Change Tracking)で増分更新自動化。" },
  { id: "az102-q43", category: "セキュリティ", difficulty: 3, question: "Azure OpenAI を **VNet 内に閉じる** 構成として最も適切なものを選びなさい。", choices: ["Private Endpoint + Disable Public Network Access", "Public 接続 + IP Whitelist", "Internet Gateway", "VPN 経由のみ"], correctIndex: 0, explanation: "**Private Endpoint** で Azure OpenAI のプライベート IP を VNet に発行 → Public 接続を Disable。**Data Residency**(US / EU / Australia)+ **Customer-Managed Key** で完全コントロール。" },
  { id: "az102-q44", category: "Cost", difficulty: 3, question: "Azure OpenAI の **コスト最適化** として **誤っているもの** を選びなさい。", choices: ["Provisioned Throughput Units(PTU、大規模安定)", "Model 軽量化(GPT-4o-mini / 3.5)", "Token 上限 ・ Stop sequence", "全リクエストに max_tokens=100000 を指定"], correctIndex: 3, explanation: "**コスト最適化**: 適切なモデル選択 + PTU(大規模)+ Prompt Caching + Token 制限。**max_tokens を必要以上に大きく取るとコスト爆発**(課金は実出力 token 数だが SLO 計算に影響)。" },
  { id: "az102-q45", category: "Content Safety", difficulty: 3, question: "Content Safety の **Prompt Shield** の役割として最も適切なものを選びなさい。", choices: ["Prompt Injection(脱獄)・ Indirect Injection 攻撃の検出", "GPU 暗号化", "DB 監視", "課金停止"], correctIndex: 0, explanation: "**Prompt Shield**(2024): Direct(脱獄試行)/ Indirect(外部 Web 文書経由)Injection の検出。Content Safety の他フィルタ(Hate / Self-harm / Sexual / Violence)と組合せて使う。" },
  { id: "az102-q46", category: "Content Safety", difficulty: 3, question: "Content Safety の **Protected Material Detection** の用途として最も適切なものを選びなさい。", choices: ["生成テキストが既知の保護コンテンツ(歌詞 / コード / 文学)を含むか検出", "顔認識", "ロゴ検出", "翻訳"], correctIndex: 0, explanation: "**Protected Material Detection**: 既知の **歌詞 ・ 文学 ・ コード** との一致を検出 → 著作権リスク回避。Generative AI ガバナンスの一環。" },
  { id: "az102-q47", category: "Evaluation", difficulty: 3, question: "AI Foundry **Evaluation** が提供する自動メトリクスとして **誤っているもの** を選びなさい。", choices: ["Groundedness / Relevance / Coherence / Fluency", "Hate / Violence / Self-harm / Sexual(Content Safety)", "Custom Code-based(BLEU / Rouge 等)", "GPU 温度"], correctIndex: 3, explanation: "**Foundry Evaluation**: AI-assisted(Groundedness / Relevance / Coherence)+ Safety(Hate 等)+ Code-based(BLEU / Rouge / F1)+ Custom。GPU 温度は別系統。" },
  { id: "az102-q48", category: "Agent", difficulty: 3, question: "**Azure AI Agent Service**(2024)の特徴として最も適切なものを選びなさい。", choices: ["Function Calling + Knowledge + Code Interpreter + Browser を Foundry 内で統合", "Excel の代替", "GPU 仮想化", "DB 接続"], correctIndex: 0, explanation: "**AI Agent Service**: Assistants API の後継。Foundry 内で Tool + Memory + Tracing が統合。Bing Search / SharePoint / Azure Function 連携が標準。" },
  { id: "az102-q49", category: "Networking", difficulty: 3, question: "Azure AI Foundry を **企業ネットワーク隔離** で構成する場合の中核要素として最も適切なものを選びなさい。", choices: ["Managed VNet + Private Endpoint + Customer-Managed Key + Microsoft Entra ID", "Public Network のみ", "VPN なし", "Cookie 認証"], correctIndex: 0, explanation: "**企業隔離 Foundry**: Managed VNet(Hub レベル)+ Private Endpoint(Storage / KeyVault / OpenAI / Search 等)+ CMK + Entra ID。**Outbound Internet 制限** も可能。" },
  { id: "az102-q50", category: "次のステップ", difficulty: 1, question: "AI-102 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["DP-100(Data Scientist)or AZ-305(Solutions Architect Expert)", "MS-900", "AZ-104 再受験", "ITパスポート"], correctIndex: 0, explanation: "**AI-102 → DP-100(Data Scientist)** で ML 深掘り、または **AZ-305(Solutions Architect Expert)** で設計上位へ。3 大クラウド ML 認定揃え(AWS MLA-C01 / GCP Pro MLE)も視野。" },
];
