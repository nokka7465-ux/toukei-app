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
  { id: "az102-q51", category: "AI Foundry", difficulty: 3, question: "**AI Foundry Hub** に **複数 Project** を作成する利点として最も適切なものを選びなさい。", choices: ["共通リソース(Storage / Compute / Connection)+ Project 単位の隔離", "全 Project 完全独立", "GUI 不要", "認証"], correctIndex: 0, explanation: "**Hub と Project**: Hub で組織共通リソース ・ ガバナンス管理 + Project で アプリ ・ チーム単位隔離。**Power BI Workspace 風の階層**。" },
  { id: "az102-q52", category: "Realtime API", difficulty: 3, question: "**Realtime API**(GPT-4o)の **接続方式** として正しいものを選びなさい。", choices: ["WebSocket(双方向 ・ 低レイテンシ)", "REST(リクエスト/レスポンス)", "Batch のみ", "Email"], correctIndex: 0, explanation: "**Realtime API**: WebSocket で **音声 ↔ 音声 直接対話**。**REST だと連続会話の Latency が累積** → Realtime で数百 ms 応答。" },
  { id: "az102-q53", category: "Assistants", difficulty: 3, question: "**Azure OpenAI Assistants API** の **Thread** の役割として最も適切なものを選びなさい。", choices: ["会話履歴を自動管理(Token 上限内で要約 + 保存)", "1 回のみ", "GUI", "認証"], correctIndex: 0, explanation: "**Thread**: 会話セッション + Message 集合 + Token 管理。**Run / Step** で Assistant がツール実行 ・ 応答生成を進める。Stateful 設計。" },
  { id: "az102-q54", category: "Foundry SDK", difficulty: 3, question: "**Azure AI Foundry SDK** の **azure.ai.inference** パッケージの役割として最も適切なものを選びなさい。", choices: ["全 Foundry モデル(OpenAI / Llama / Phi 等)で統一推論 API", "OpenAI 専用", "DB クエリ", "認証のみ"], correctIndex: 0, explanation: "**azure.ai.inference**(2024 GA): ChatCompletions / Embeddings / Image 統一 API → モデル切替がコード変更最小限。**Bedrock Converse API の Azure 版**。" },
  { id: "az102-q55", category: "Phi-3", difficulty: 3, question: "**Microsoft Phi-3 mini**(3.8B)の特徴として最も適切なものを選びなさい。", choices: ["小サイズ + 高品質データで GPT-3.5 級性能", "100B 級", "画像専用", "GPT のラッパ"], correctIndex: 0, explanation: "**Phi-3 mini**(3.8B / 7B / 14B): **教育的キュレーション済データ** で高品質。**SLM(Small Language Model)** の代表。Edge / オンデバイス利用可。" },
  { id: "az102-q56", category: "Document Intelligence", difficulty: 3, question: "**Document Intelligence Generative AI mode** の利点として最も適切なものを選びなさい。", choices: ["ラベル付け不要 + 自然言語 Field 名で抽出 → 数分で運用開始", "大量ラベリング必須", "PDF のみ", "速度劣化"], correctIndex: 0, explanation: "**Generative AI mode**(2024): Few-shot サンプル + 自然言語 Field 名で fine-tune 不要。**従来 Custom Neural Model から世代交代**。" },
  { id: "az102-q57", category: "Vision", difficulty: 3, question: "**Azure AI Vision Image Analysis 4.0** の **基盤モデル** として最も適切なものを選びなさい。", choices: ["Florence(Microsoft Multimodal モデル)", "ResNet", "BERT", "Llama"], correctIndex: 0, explanation: "**Florence**: Microsoft の大規模マルチモーダル基盤モデル。**Image Analysis 4.0 / Custom Vision の裏側 + Caption / Tag / Object Detection 統合**。" },
  { id: "az102-q58", category: "Search", difficulty: 3, question: "**Azure AI Search Vector Search** での **HNSW Index** の特徴として最も適切なものを選びなさい。", choices: ["Hierarchical Navigable Small World グラフで高速 ANN 検索", "K-Means クラスタ", "Brute-Force", "GPU 必須"], correctIndex: 0, explanation: "**HNSW**: Graph-based ANN(Approximate Nearest Neighbor)。**高速 + 高精度**。Azure AI Search / Pinecone / Weaviate / Qdrant 等で採用。" },
  { id: "az102-q59", category: "Prompt Flow", difficulty: 3, question: "**Prompt Flow の Variant** の役割として最も適切なものを選びなさい。", choices: ["同じノードで複数プロンプト ・ モデルを定義 → A/B 比較", "別フロー", "認証", "GUI"], correctIndex: 0, explanation: "**Variant**: 1 ノード内に複数の Variant を作成 → Bulk Evaluation で比較。**プロンプトエンジニアリングの体系化**。Default Variant に昇格で本番反映。" },
  { id: "az102-q60", category: "Tracing", difficulty: 3, question: "**Azure AI Foundry Tracing** の用途として最も適切なものを選びなさい。", choices: ["LLM アプリの実行ログ + Latency + Token + コストを可視化", "認証", "DB", "GUI"], correctIndex: 0, explanation: "**Foundry Tracing**: OpenTelemetry ベース。**Prompt Flow / Agent / Custom App の実行追跡**。**LangSmith / Weights & Biases Traces** の Azure 版。" },
  { id: "az102-q61", category: "Connection", difficulty: 3, question: "**Foundry Connection** の役割として最も適切なものを選びなさい。", choices: ["外部リソース(OpenAI / Search / Storage / Custom API)への認証管理", "GPU 共有", "ライセンス", "DB"], correctIndex: 0, explanation: "**Connection**: API Key / Managed Identity / OAuth で **外部リソース統合**。Project 配下のリソースが共通利用。Secrets を KeyVault で管理。" },
  { id: "az102-q62", category: "Fine-tuning", difficulty: 3, question: "**Azure OpenAI Fine-tuning** で **対応モデル** として **誤っているもの** を選びなさい。", choices: ["GPT-4o / GPT-4o-mini", "GPT-3.5 Turbo", "Babbage-002 / Davinci-002", "GPT-2"], correctIndex: 3, explanation: "**Azure OpenAI Fine-tune 対応**: GPT-4o / 4o-mini / GPT-3.5 Turbo / Babbage / Davinci。**GPT-2 はレガシー**で対象外。" },
  { id: "az102-q63", category: "Distillation", difficulty: 3, question: "**Azure OpenAI Distillation**(2024)の用途として最も適切なものを選びなさい。", choices: ["GPT-4o の出力で GPT-4o-mini をファインチューン → コスト 90% 削減", "学習データ削除", "認証", "DB"], correctIndex: 0, explanation: "**Stored Completions + Distillation**: 大モデルの応答を保存 → 小モデル fine-tune に使用 → 同等品質で大幅コスト削減。Bedrock Distillation と類似機能。" },
  { id: "az102-q64", category: "Cost", difficulty: 3, question: "**Azure OpenAI** の **Global Standard** Deployment の特徴として最も適切なものを選びなさい。", choices: ["複数リージョンで分散処理 → 大量 ・ 安定スループット", "1 リージョン", "GPU 直接", "認証強化"], correctIndex: 0, explanation: "**Global Standard**(2024): Microsoft が複数リージョン横断で容量管理 → 高スループット。**Standard**(リージョン固定)・ **Provisioned**(PTU 予約)と使い分け。" },
  { id: "az102-q65", category: "Cleanroom", difficulty: 3, question: "**Azure AI Foundry の Data Cleanroom**(Preview)の用途として最も適切なものを選びなさい。", choices: ["機密データを公開せずに ML 学習(Confidential Computing)", "GUI", "認証", "BD"], correctIndex: 0, explanation: "**Data Cleanroom**: 複数組織のデータを TEE(Trusted Execution Environment)で結合 → 個別データを公開せず ML 学習。**Privacy-preserving ML** の Azure 実装。" },
  { id: "az102-q66", category: "Vision", difficulty: 3, question: "**Azure AI Vision Image Analysis 4.0** で **Florence-2** が果たす役割として最も適切なものを選びなさい。", choices: ["Foundation Model: Caption / Tag / OCR / Dense Caption 統合", "OCR 専用", "認証", "GPU"], correctIndex: 0, explanation: "**Florence-2**(Microsoft 2024): Vision Foundation Model。**Image Analysis 4.0 の中核**。Dense Caption / Smart Crop / Object Detection / OCR 統合。Custom Vision より柔軟。" },
  { id: "az102-q67", category: "Language", difficulty: 3, question: "**Azure AI Language の Custom Question Answering(CQA)** の特徴として最も適切なものを選びなさい。", choices: ["FAQ / KB から QA Bot 構築 + Multi-turn 対応", "認証", "GPU 学習", "Cost"], correctIndex: 0, explanation: "**CQA**: 旧 QnA Maker 後継。**Knowledge Base + 同義語 + Multi-turn + Chit-Chat**。**CLU(Conversational Language Understanding)** と **Orchestration** で複合 Bot。" },
  { id: "az102-q68", category: "Speech", difficulty: 3, question: "**Azure AI Speech の Custom Neural Voice** の用途として最も適切なものを選びなさい。", choices: ["企業独自の Brand Voice(著名人 / キャラ)を倫理ガード付きで作成", "STT", "認証", "Cost"], correctIndex: 0, explanation: "**Custom Neural Voice**: 限定アクセス + 倫理レビュー必須(なりすまし防止)。**Lite / Pro / Personal Voice** 段階あり。**Brand 統一 / IVR / Audiobook**で活用。" },
  { id: "az102-q69", category: "Document", difficulty: 3, question: "**Document Intelligence の Generative AI Mode**(2024+)の特徴として最も適切なものを選びなさい。", choices: ["事前学習なしで Schema 指定 → LLM が抽出", "Custom 学習必須", "GPU", "認証"], correctIndex: 0, explanation: "**GenAI Mode**(Document Intelligence 2024+): Schema(JSON / YAML)を Prompt 化 → Foundation Model で **Few-Shot 抽出**。学習不要で多様な帳票対応。**Prebuilt / Custom** との 3 方式併存。" },
  { id: "az102-q70", category: "OpenAI", difficulty: 3, question: "**Azure OpenAI On Your Data**(現 Bring Your Own Data)の機能として最も適切なものを選びなさい。", choices: ["Azure AI Search を Retriever に LLM 応答 + Citation(マネージド RAG)", "新規 LLM 学習", "GPU 提供", "認証"], correctIndex: 0, explanation: "**On Your Data / BYOD**: Azure AI Search の Index を OpenAI Chat Completions に接続 → **マネージド RAG**(Citation + Multi-turn)。**Foundry の RAG Wizard** で 1-Click 構築。" },
  { id: "az102-q71", category: "OpenAI", difficulty: 3, question: "**Azure OpenAI Provisioned Throughput Unit(PTU)** の特徴として最も適切なものを選びなさい。", choices: ["容量を予約 → 一定 RPM + 安定レイテンシ", "従量制", "GPU 直購入", "認証"], correctIndex: 0, explanation: "**PTU**: Provisioned Throughput Unit。**1 PTU = 一定 Token/分**。**Pay-as-you-go**(変動)vs **PTU**(予約)。**月 / 年 Reserved** で更に割引。エンタープライズ本番向け。" },
  { id: "az102-q72", category: "Search", difficulty: 3, question: "**Azure AI Search Integrated Vectorization** の利点として最も適切なものを選びなさい。", choices: ["Embedding 生成 + Vector 化を自動実行(コーディングなし)", "全文検索のみ", "GPU 必須", "認証"], correctIndex: 0, explanation: "**Integrated Vectorization**(2024 GA): Skill set に Embedding Skill を組込 → **Indexer 自動実行**。**Image / Audio / Multilingual Embedding** 対応。RAG 構築の劇的簡素化。" },
  { id: "az102-q73", category: "Search", difficulty: 3, question: "**Azure AI Search Semantic Ranker** の役割として最も適切なものを選びなさい。", choices: ["BM25 / Vector の上に Cross-Encoder で再順位(精度向上)", "Embedding", "認証", "GPU"], correctIndex: 0, explanation: "**Semantic Ranker**: L2 Reranking(Cross-Encoder)・ Microsoft Research の Bing 系モデル。**Hybrid Search(BM25 + Vector)+ Semantic Ranker** が RAG の Gold Standard。" },
  { id: "az102-q74", category: "Agent", difficulty: 3, question: "**Azure AI Foundry Agent Service**(2024+)の特徴として最も適切なものを選びなさい。", choices: ["Assistant API 互換 + 統合 Tool + Connection 管理 + Trace", "新規 LLM", "GUI 専用", "認証"], correctIndex: 0, explanation: "**Foundry Agent Service**: OpenAI Assistants API 互換 + **Azure 統合 Tools**(AI Search / Logic Apps / Functions)+ Memory + Tracing + Eval。Multi-Agent も対応。" },
  { id: "az102-q75", category: "Prompt Flow", difficulty: 3, question: "**Prompt Flow** の用途として最も適切なものを選びなさい。", choices: ["LLM ワークフロー(DAG)を GUI / Code 両方で設計 + Eval + Deploy", "学習用", "GUI のみ", "認証"], correctIndex: 0, explanation: "**Prompt Flow**: Foundry / VS Code Extension。**DAG エディタ + Python / LLM Node**・ **Bulk Test / Evaluation / Variant**・ **Deploy as Endpoint**。LangChain / LangSmith の Microsoft 版。" },
  { id: "az102-q76", category: "Content Safety", difficulty: 3, question: "**Azure AI Content Safety** の機能として **誤っているもの** を選びなさい。", choices: ["Text / Image Harm Detection(4 カテゴリ)", "Jailbreak / Prompt Shield 検出", "Groundedness Detection(RAG 乖離)", "GPU 監視"], correctIndex: 3, explanation: "**Content Safety**: Hate / Violence / Sexual / Self-Harm の 4 カテゴリ ・ 0-7 Severity。**Prompt Shield**(Jailbreak)・ **Groundedness**(2024)・ **Protected Material 検出**。" },
  { id: "az102-q77", category: "Fine-tune", difficulty: 3, question: "**Azure OpenAI Fine-tuning** の対応モデルとして **誤っているもの** を選びなさい。", choices: ["GPT-3.5 Turbo / GPT-4o / GPT-4o-mini", "DPO(嗜好最適化)", "RFT(o-series)", "GPT-5 Free"], correctIndex: 3, explanation: "**Fine-tuning**: GPT-3.5 / 4o / 4o-mini を **SFT / DPO / RFT**(o-series 強化学習)で。**Foundry Hub + Project** で実行。Per-Token + 学習時間課金。" },
  { id: "az102-q78", category: "MaaS", difficulty: 3, question: "**Azure AI Foundry Models as a Service(MaaS)** の特徴として最も適切なものを選びなさい。", choices: ["Llama / Mistral / Cohere / DeepSeek 等を Azure 経由でサーバレス API", "OpenAI 専用", "GUI", "認証"], correctIndex: 0, explanation: "**MaaS / Serverless API**: Foundry Model Catalog 経由で Llama / Mistral / Phi / Cohere / **DeepSeek**(2024+)/ Jais 等を Serverless 利用。Pay-as-you-go ・ Azure SLA。" },
  { id: "az102-q79", category: "DevOps", difficulty: 3, question: "**Azure AI Eval** の評価次元として **誤っているもの** を選びなさい。", choices: ["Quality(Groundedness / Relevance)", "Safety(Hate / Violence)", "Performance(Latency / Cost)", "GPU 温度"], correctIndex: 3, explanation: "**Foundry Evaluation**: Quality / Safety / Performance + **Custom Eval**(LLM-as-Judge)。**Risk and Safety / Built-in Evaluator**(Coherence / Fluency / Similarity / F1)。" },
  { id: "az102-q80", category: "Cert", difficulty: 2, question: "**AI-102** の正式名称として最も適切なものを選びなさい。", choices: ["Microsoft Certified: Azure AI Engineer Associate", "Azure Data Scientist", "Solutions Architect", "AI Fundamentals"], correctIndex: 0, explanation: "**AI-102**: Azure AI Engineer Associate。**Vision / Language / Speech / OpenAI / Foundry / Document Intel / Search**を統合実装。**AI-900(F)→ AI-102(A)** の階層。" },
];
