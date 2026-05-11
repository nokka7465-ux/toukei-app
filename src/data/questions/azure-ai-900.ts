import type { Question } from "@/types/content";

export const azureAi900Questions: Question[] = [
  {
    id: "az900-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Microsoft Azure AI Fundamentals(AI-900)が分類される認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Fundamentals(基礎)",
      "Associate(アソシエイト)",
      "Expert(エキスパート)",
      "Specialty(専門)",
    ],
    correctIndex: 0,
    explanation:
      "AI-900 は Microsoft 認定の **Fundamentals(基礎)レベル**。Associate に AI-102、Expert に AZ-305 などがある。",
  },
  {
    id: "az900-q2",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "Microsoft の責任ある AI の 6 原則に **含まれない** ものを選びなさい。",
    choices: [
      "公平性(Fairness)",
      "信頼性 ・ 安全性(Reliability & Safety)",
      "拡張性(Scalability)",
      "包括性(Inclusiveness)",
    ],
    correctIndex: 2,
    explanation:
      "Microsoft の責任ある AI 6 原則は **公平性 ・ 信頼性/安全性 ・ プライバシー/セキュリティ ・ 包括性 ・ 透明性 ・ 説明責任**。拡張性は性能 / 設計の指標で 6 原則には含まれない。",
  },
  {
    id: "az900-q3",
    category: "ワークロード",
    difficulty: 2,
    question:
      "「製造ラインのカメラ画像から不良品を判別する」業務に最も適切な AI ワークロードを選びなさい。",
    choices: [
      "自然言語処理",
      "コンピュータビジョン",
      "音声認識",
      "強化学習",
    ],
    correctIndex: 1,
    explanation:
      "**コンピュータビジョン**(画像分類 / 物体検出)が該当。Microsoft では Custom Vision で独自データから不良品判別モデルを構築できる。",
  },
  {
    id: "az900-q4",
    category: "Azure ML",
    difficulty: 2,
    question:
      "Azure Machine Learning で **コードを書かずに** ML モデルを構築 / 比較できる機能として最も適切なものを選びなさい。",
    choices: [
      "Azure CLI",
      "Automated ML(自動 ML)",
      "Azure DevOps",
      "Azure Data Factory",
    ],
    correctIndex: 1,
    explanation:
      "**Automated ML** はデータと目的タスクを指定するだけで複数アルゴリズム + ハイパーパラメータの組合せを自動探索。Designer もノーコードだがこちらはドラッグ & ドロップによるパイプライン構築。",
  },
  {
    id: "az900-q5",
    category: "Azure ML",
    difficulty: 2,
    question:
      "Azure Machine Learning でモデル学習に使うクラウドリソースとして最も適切なものを選びなさい。",
    choices: [
      "Compute Instance / Compute Cluster",
      "Storage Account のみ",
      "App Service",
      "Power BI",
    ],
    correctIndex: 0,
    explanation:
      "**Compute Instance**(個人開発用)・ **Compute Cluster**(分散学習用、スケール可能)が Azure ML の標準計算リソース。GPU 対応 VM も選べる。",
  },
  {
    id: "az900-q6",
    category: "AI Vision",
    difficulty: 2,
    question:
      "請求書 ・ 領収書から構造化データ(金額 ・ 日付 ・ 取引先など)を抽出するのに最も適切な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Vision(画像分析)",
      "Custom Vision",
      "Azure AI Document Intelligence",
      "Azure AI Face",
    ],
    correctIndex: 2,
    explanation:
      "**Azure AI Document Intelligence**(旧 Form Recognizer)は請求書 ・ レシート ・ ID 文書などの定型文書から構造化データを抽出する専用サービス。",
  },
  {
    id: "az900-q7",
    category: "AI Vision",
    difficulty: 2,
    question:
      "少数のラベル付き画像から **独自の画像分類モデル** を構築するのに最も適切な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Vision",
      "Custom Vision",
      "Document Intelligence",
      "Face",
    ],
    correctIndex: 1,
    explanation:
      "**Custom Vision** は独自データで画像分類 / 物体検出モデルを構築できるサービス。GUI 操作のみで転移学習を活用し、少データから実用精度のモデルを作れる。",
  },
  {
    id: "az900-q8",
    category: "AI Language",
    difficulty: 2,
    question:
      "Azure AI Language の機能として **不適切** なものを選びなさい。",
    choices: [
      "感情分析(Sentiment Analysis)",
      "個人識別情報(PII)検出",
      "音声合成(Text to Speech)",
      "主要フレーズ抽出",
    ],
    correctIndex: 2,
    explanation:
      "音声合成は **Azure AI Speech サービス** の機能。AI Language はテキストの感情分析 ・ 言語検出 ・ 主要フレーズ抽出 ・ エンティティ認識 ・ PII 検出 ・ 要約 ・ 質問応答などを担当。",
  },
  {
    id: "az900-q9",
    category: "AI Language",
    difficulty: 3,
    question:
      "FAQ 形式の質問応答ボットを構築するのに最も適切な Azure AI Language の機能を選びなさい。",
    choices: [
      "感情分析",
      "Question Answering(質問応答)",
      "Translator",
      "PII 検出",
    ],
    correctIndex: 1,
    explanation:
      "**Question Answering**(旧 QnA Maker の後継)は FAQ ペアを取り込んで質問応答ボットを構築する Azure AI Language の機能。生成 AI と組み合わせると更に強力。",
  },
  {
    id: "az900-q10",
    category: "Speech",
    difficulty: 2,
    question:
      "音声を文字起こし(音声 → テキスト)する Azure AI Speech の機能として最も適切なものを選びなさい。",
    choices: [
      "Speech to Text",
      "Text to Speech",
      "Speech Translation",
      "Speaker Recognition",
    ],
    correctIndex: 0,
    explanation:
      "**Speech to Text** が音声 → テキスト変換。Text to Speech は逆(音声合成)、Speech Translation は音声 → 翻訳、Speaker Recognition は話者識別。",
  },
  {
    id: "az900-q11",
    category: "Azure OpenAI",
    difficulty: 2,
    question:
      "Azure OpenAI Service で利用 **できない** モデルとして最も適切なものを選びなさい。",
    choices: [
      "GPT-4o",
      "DALL-E 3",
      "Whisper",
      "Llama 3(Meta)",
    ],
    correctIndex: 3,
    explanation:
      "Azure OpenAI Service は **OpenAI のモデルのみ** を提供(GPT 系・DALL-E・Whisper・Embeddings)。Llama / Mistral などの他社モデルは **Azure AI Foundry のモデルカタログ** から利用する。",
  },
  {
    id: "az900-q12",
    category: "Azure OpenAI",
    difficulty: 3,
    question:
      "Azure OpenAI Service と通常の OpenAI API の主な違いとして最も適切なものを選びなさい。",
    choices: [
      "提供されるモデルが全く異なる",
      "Azure 上のエンタープライズ機能(プライベートネットワーク、Azure AD 認証、リージョン選択など)が利用可",
      "Azure OpenAI のほうが必ず安い",
      "Azure OpenAI は無料",
    ],
    correctIndex: 1,
    explanation:
      "Azure OpenAI は **モデルは同等(OpenAI のもの)**だが、**Azure のエンタープライズ機能(VNet、Private Endpoint、Azure AD、リージョン制御、コンプライアンス)** が利用できる点が最大の違い。",
  },
  {
    id: "az900-q13",
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
      "**Few-shot プロンプティング** は少数の例を示すことでパターンを理解させる手法。例なしの **Zero-shot** より精度が高くなることが多い。",
  },
  {
    id: "az900-q14",
    category: "RAG",
    difficulty: 3,
    question:
      "社内ドキュメントを使った Q&A を構築する際、Azure OpenAI Service と組み合わせる検索基盤として最も適切なものを選びなさい。",
    choices: [
      "Azure AI Search",
      "Azure SQL Database",
      "Azure Storage Queue",
      "Azure Service Bus",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Search**(旧 Cognitive Search)は **全文検索 + ベクトル検索 + ハイブリッド検索** に対応し、Azure OpenAI と組み合わせる **RAG パターンの標準** ストレージ。",
  },
  {
    id: "az900-q15",
    category: "Azure AI Search",
    difficulty: 3,
    question:
      "Azure AI Search の AI Enrichment(AI 拡充)で **できない** ものを選びなさい。",
    choices: [
      "PDF 文書からの OCR(Document Intelligence)",
      "言語検出 ・ 感情分析(AI Language)",
      "画像説明文の自動付与(AI Vision)",
      "BIOS 設定の自動変更",
    ],
    correctIndex: 3,
    explanation:
      "AI Enrichment はインデックス作成時に **Azure AI サービスを自動適用** する仕組み。OCR / 言語検出 / 感情 / 画像説明など。BIOS 設定はインフラ操作で範囲外。",
  },
  {
    id: "az900-q16",
    category: "Copilot",
    difficulty: 2,
    question:
      "ノーコード / ローコードでカスタム会話 Bot(エージェント)を構築するための Microsoft のサービスとして最も適切なものを選びなさい。",
    choices: [
      "Microsoft 365 Copilot",
      "Microsoft Copilot Studio",
      "GitHub Copilot",
      "Bing Chat Enterprise",
    ],
    correctIndex: 1,
    explanation:
      "**Microsoft Copilot Studio** はノーコード / ローコードでカスタム Copilot(エージェント)を構築できる Power Platform の一部。Topics / Entities / Skills を GUI で設計。",
  },
  {
    id: "az900-q17",
    category: "Copilot",
    difficulty: 1,
    question:
      "VS Code などの IDE 内でコード補完 ・ 説明 ・ テスト生成を行う Microsoft の AI ツールとして最も適切なものを選びなさい。",
    choices: [
      "Microsoft 365 Copilot",
      "GitHub Copilot",
      "Power Automate",
      "Bing Chat",
    ],
    correctIndex: 1,
    explanation:
      "**GitHub Copilot** は IDE 統合のコードアシスタント。Microsoft 365 Copilot は Word / Excel / Outlook 等の Office 統合 AI。",
  },
  {
    id: "az900-q18",
    category: "ユースケース",
    difficulty: 3,
    question:
      "コールセンターの音声録音から顧客感情の傾向を分析するパイプラインで使うサービスの組み合わせとして最も適切なものを選びなさい。",
    choices: [
      "AI Vision → AI Language",
      "Speech to Text → AI Language(感情分析)",
      "Translator → Document Intelligence",
      "Custom Vision → Face",
    ],
    correctIndex: 1,
    explanation:
      "**Speech to Text で音声 → テキスト → AI Language の感情分析** が標準パターン。BI 可視化に Power BI を組み合わせるのも頻出。",
  },
  {
    id: "az900-q19",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "Azure AI サービスをパブリックインターネットを通さず VNet 内のみで利用する仕組みとして最も適切なものを選びなさい。",
    choices: [
      "Private Endpoint(プライベートエンドポイント)",
      "Public IP",
      "Application Gateway",
      "Azure Front Door",
    ],
    correctIndex: 0,
    explanation:
      "**Private Endpoint** で Azure AI サービスを VNet 内のプライベート IP のみで利用可能。データがインターネットに出ないため、エンタープライズ要件で重要。",
  },
  {
    id: "az900-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "AI-900 合格後、Azure の AI 認定で次に挑戦するのに最も適切なものを選びなさい。",
    choices: [
      "AZ-900(Azure Fundamentals)",
      "AI-102(Azure AI Engineer Associate)",
      "MS-900(Microsoft 365 Fundamentals)",
      "DP-900(Azure Data Fundamentals)",
    ],
    correctIndex: 1,
    explanation:
      "AI-900 は Fundamentals。次の **Associate レベル** が **AI-102(Azure AI Engineer Associate)** で、Azure AI / OpenAI / Cognitive Search を実装する力を測る。",
  },
  {
    id: "az900-q21",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "Microsoft の責任ある AI 6 原則として **誤っているもの** を選びなさい。",
    choices: [
      "Fairness(公平性)",
      "Reliability & Safety",
      "Privacy & Security",
      "Maximum Throughput(最大スループット)",
    ],
    correctIndex: 3,
    explanation:
      "**Microsoft Responsible AI 6 原則**: Fairness / Reliability & Safety / Privacy & Security / Inclusiveness / Transparency / Accountability。スループットは性能指標で原則ではない。",
  },
  {
    id: "az900-q22",
    category: "Azure ML",
    difficulty: 2,
    question:
      "**Azure Machine Learning** の役割として最も適切なものを選びなさい。",
    choices: [
      "ML モデルの学習 ・ デプロイ ・ 運用を統合管理する Azure サービス",
      "Power BI のレポート作成専用ツール",
      "Excel の代替",
      "リレーショナル DB",
    ],
    correctIndex: 0,
    explanation:
      "**Azure Machine Learning(Azure ML)** は ML の **データ ・ 学習 ・ デプロイ ・ MLOps** を統合管理するプラットフォーム。AutoML / Designer(ノーコード)/ SDK / CLI v2 を提供。",
  },
  {
    id: "az900-q23",
    category: "Azure OpenAI",
    difficulty: 2,
    question:
      "**Azure OpenAI Service** で利用できるモデルファミリとして **誤っているもの** を選びなさい。",
    choices: [
      "GPT-4 / GPT-4o",
      "DALL-E(画像生成)",
      "Whisper(音声認識)",
      "Llama 3(Meta)",
    ],
    correctIndex: 3,
    explanation:
      "**Azure OpenAI は OpenAI モデルのみ**(GPT-4 / GPT-4o / DALL-E / Whisper / text-embedding-3 等)。**Llama 3 は Azure AI Foundry / Model Catalog 経由** で別途利用可能。",
  },
  {
    id: "az900-q24",
    category: "Vision",
    difficulty: 2,
    question:
      "画像内のテキスト(印字 + 手書き混在)を抽出したい。最適な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Vision(Read API)",
      "Azure AI Speech",
      "Azure AI Language",
      "Azure AI Translator",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Vision の Read API**(旧 OCR)は印字 + 手書きを含むテキスト抽出を提供。Document Intelligence(旧 Form Recognizer)は構造化文書解析の上位サービス。",
  },
  {
    id: "az900-q25",
    category: "Language",
    difficulty: 2,
    question:
      "顧客サポートのチャットボットを実装したい。**意図(Intent)・ エンティティ抽出** に最適な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Language - CLU(Conversational Language Understanding)",
      "Azure AI Speech",
      "Azure AI Vision",
      "Azure AI Translator",
    ],
    correctIndex: 0,
    explanation:
      "**CLU(Conversational Language Understanding)** は **Intent + Entity 抽出** で自然言語理解を提供(旧 LUIS の後継)。Bot Service + CLU + QnA(Custom Question Answering)が定番構成。",
  },
  {
    id: "az900-q26",
    category: "Speech",
    difficulty: 2,
    question:
      "Azure AI Speech が提供する機能として **誤っているもの** を選びなさい。",
    choices: [
      "Speech to Text(音声認識)",
      "Text to Speech(音声合成)",
      "Speech Translation(音声翻訳)",
      "OCR(画像から文字抽出)",
    ],
    correctIndex: 3,
    explanation:
      "**Azure AI Speech** は STT / TTS / Speech Translation / Speaker Recognition / Custom Speech を提供。**OCR は Azure AI Vision の Read API** の機能。",
  },
  {
    id: "az900-q27",
    category: "Document Intelligence",
    difficulty: 3,
    question:
      "請求書 ・ レシート ・ ID カードなど **構造化文書から表 ・ Key-Value を抽出** する Azure AI サービスを選びなさい。",
    choices: [
      "Document Intelligence(旧 Form Recognizer)",
      "Azure AI Search",
      "Azure AI Vision Image Analysis",
      "Azure AI Translator",
    ],
    correctIndex: 0,
    explanation:
      "**Document Intelligence(旧 Form Recognizer)** は **請求書 / レシート / ID / 名刺 / 契約書 / 表 / Key-Value 抽出** の構造化文書解析。Custom Model でテンプレ学習も可能。",
  },
  {
    id: "az900-q28",
    category: "AutoML",
    difficulty: 2,
    question:
      "Azure ML の **AutoML** に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "アルゴリズム選択 ・ ハイパーパラメータ探索 ・ 特徴量エンジニアリングを自動化",
      "Classification / Regression / Forecasting / NLP / Computer Vision タスクをサポート",
      "primary_metric を指定して最適化目標を選べる",
      "GPU を直接 SSH で操作する機能",
    ],
    correctIndex: 3,
    explanation:
      "**AutoML は GUI / SDK で完結** し SSH 操作は不要。Classification / Regression / Forecasting / NLP / CV / Many Models をサポート。",
  },
  {
    id: "az900-q29",
    category: "Copilot",
    difficulty: 2,
    question:
      "**Microsoft 365 Copilot** の特徴として最も適切なものを選びなさい。",
    choices: [
      "Word / Excel / PowerPoint / Outlook / Teams 内で文章生成 ・ 要約 ・ Q&A を提供",
      "GPU クラスタを直接借りる",
      "Azure 仮想マシンを起動する",
      "DNS 設定を自動化する",
    ],
    correctIndex: 0,
    explanation:
      "**Microsoft 365 Copilot** は Office アプリ内で **GPT-4 + Microsoft Graph(社内データ)** を統合した業務 AI。**Copilot Studio** で独自 Copilot を作れる。",
  },
  {
    id: "az900-q30",
    category: "AI Foundry",
    difficulty: 2,
    question:
      "**Azure AI Foundry**(旧 Azure AI Studio)の主眼として最も適切なものを選びなさい。",
    choices: [
      "生成 AI / Agent / Prompt Flow / 1700+ モデルカタログ / 評価 / Content Safety を統合",
      "DBA 専用ツール",
      "古典 ML 専用",
      "Power Platform の代替",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Foundry** は **生成 AI 時代の Azure AI 統合スタジオ**。Model Catalog / Prompt Flow / Agent / Evaluation / Content Safety / 1700+ モデルを統合。AI-102 の中核。",
  },
];
