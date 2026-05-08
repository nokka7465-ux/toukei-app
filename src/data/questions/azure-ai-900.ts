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
];
