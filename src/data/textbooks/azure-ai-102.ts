import type { Textbook } from "@/types/content";

export const azureAi102Textbook: Textbook = {
  levelSlug: "azure-ai-102",
  title: "Microsoft Azure AI Engineer Associate(AI-102)教科書",
  intro:
    "**Microsoft Azure AI Engineer Associate(AI-102)** は、**Azure AI Fundamentals(AI-900)の上位** に位置する Azure AI 認定の **Associate レベル**。Azure AI サービス(Vision / Language / Speech / Document Intelligence)・ Azure OpenAI / Azure AI Search / Azure AI Foundry を **設計 ・ 実装 ・ デプロイ ・ 運用 ・ 監視** する技術者向けの試験です。**AI エンジニア ・ クラウド AI 開発者 ・ データサイエンティスト** が想定対象。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "AI-102 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・AI-900 との違いを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**AI-102** は Microsoft 認定の **Associate レベル** の AI 認定で、**Azure AI Fundamentals(AI-900)の上位** に位置します。AI-900 が概念 ・ サービス選択中心だったのに対し、**AI-102 は実装 ・ コード ・ API 呼出 ・ デプロイ ・ 監視まで** を測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Microsoft",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 約 40 〜 60 問 / 100 分",
                "**回答方式**: 選択式 + ケーススタディ + 並べ替え + ドラッグ&ドロップ + コード補完",
                "**合格スコア**: 700 / 1000",
                "**有効期限**: 1 年(Microsoft Learn での再認定で延長)",
                "**受験料**: 一般 21,103 円(165 USD、参考)",
                "**前提知識**: C# または Python、REST API、JSON、Git の基礎",
              ],
            },
            { type: "h3", text: "AI-900 との比較" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**AI-900(Foundational)**: AI / ML / 生成 AI 概念、Azure サービス選択、Microsoft 責任ある AI 6 原則。コード問題ほぼなし",
                "**AI-102(Associate、本資格)**: SDK / REST API / Bicep / ARM / Container 配備、Azure OpenAI 実装、RAG パイプライン、監視。コード問題あり",
                "**両方推奨**: AI-900 で土台を作ってから AI-102 で実装力を測る",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題ドメイン(2024 年改訂シラバス)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: AI ソリューションの計画と管理**(15 〜 20%): Cognitive Services リソース ・ コスト ・ セキュリティ ・ デプロイ",
                "**Domain 2: 生成 AI ソリューションの実装**(15 〜 20%): Azure OpenAI / Azure AI Foundry / プロンプト / ファインチューニング",
                "**Domain 3: エージェント ソリューションの実装**(10 〜 15%): Azure AI Agent Service",
                "**Domain 4: コンピュータビジョン ソリューションの実装**(15 〜 20%): Azure AI Vision / Custom Vision / Face / Document Intelligence",
                "**Domain 5: 自然言語処理ソリューションの実装**(15 〜 20%): Azure AI Language / Translator / Speech",
                "**Domain 6: ナレッジマイニングと情報抽出**(15 〜 20%): Azure AI Search / RAG / AI Enrichment",
              ],
            },
            { type: "h3", text: "120 〜 200 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1 〜 2**: AI-900 範囲を復習 + Azure 環境セットアップ",
                "**Week 3 〜 4**: Cognitive Services リソース ・ SDK ・ REST API",
                "**Week 5 〜 6**: Azure OpenAI + Prompt Flow + Fine-tuning",
                "**Week 7**: Azure AI Search + RAG パイプライン",
                "**Week 8**: AI Vision + Speech + Language の実装",
                "**Week 9**: Document Intelligence + Custom Vision",
                "**Week 10**: AI Agent Service + Function Calling",
                "**Week 11 〜 12**: 模擬試験 + 過去問",
              ],
            },
            {
              type: "intuition",
              title: "Microsoft Learn の AI-102 専用ラーニングパス + Azure 無料枠が必須",
              body: "AI-102 は **コード実装力** を測るため、**実機ハンズオン** が不可欠。**Microsoft Learn の専用ラーニングパス**(無料)と **Azure 無料アカウント**(200 USD クレジット + 12 ヶ月無料サービス)で、Azure OpenAI / AI Search / Cognitive Services を実際に動かせます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Azure AI services のリソース管理",
      overview:
        "Cognitive Services リソース ・ 認証 ・ デプロイの基礎を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "リソースの種類と作成",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI services リソース(マルチサービス)**: 1 つのキー / エンドポイントで複数 AI サービス利用可能",
                "**個別サービスリソース**: AI Vision / Speech / Language など独立",
                "**Azure OpenAI リソース**: 別途、申請承認が必要",
                "**料金プラン**: F0(Free)/ S0 〜 S4(Standard)・ コミット単位課金あり",
                "**リージョン**: サービスごとに利用可能リージョンが異なる",
                "**Container Deployment**: オンプレ / エッジで AI サービスを動かす",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "認証とアクセス制御",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Subscription Key + Endpoint**: 最も単純、長期保管に注意",
                "**Microsoft Entra ID(旧 Azure AD)認証**: 推奨、Managed Identity と統合",
                "**Managed Identity**: アプリ / VM / Function に自動配布",
                "**RBAC**: Azure ロールベースアクセス制御",
                "**Customer-Managed Key(CMK)**: 暗号鍵を顧客側で管理",
                "**Private Endpoint**: VNet 内のみで利用",
                "**Sensitivity Labels**: Microsoft Purview 統合の機密ラベル",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "監視と診断",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure Monitor**: メトリクス + ログの一元監視",
                "**Application Insights**: アプリケーション側のトレース",
                "**Log Analytics**: KQL でログ分析",
                "**Cost Management + Budgets**: 利用コスト管理",
                "**Health alerts**: サービス障害通知",
                "**Diagnostic settings**: ログのアーカイブ ・ 連携",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Azure OpenAI Service の実装",
      overview:
        "Azure OpenAI のモデル選択 ・ デプロイ ・ API 呼出を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "モデルとデプロイ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**GPT-4o / GPT-4 Turbo / o1 / o3**: 汎用テキスト + マルチモーダル",
                "**GPT-3.5 Turbo**: 軽量 ・ 低コスト",
                "**DALL-E 3**: 画像生成",
                "**Whisper**: 音声認識",
                "**text-embedding-3-large / 3-small**: 埋め込みモデル",
                "**Standard デプロイ**: トークン課金",
                "**Provisioned Throughput Units(PTU)**: スループット予約、本番大規模向け",
                "**Global Standard / Data Zone Standard**: データ常駐の地理的制約に対応",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "API 呼出と SDK",
          blocks: [
            {
              type: "code",
              title: "Python SDK での Chat Completion",
              python:
                "from openai import AzureOpenAI\n\nclient = AzureOpenAI(\n    azure_endpoint=\"https://your-resource.openai.azure.com/\",\n    api_key=\"YOUR_KEY\",\n    api_version=\"2024-10-21\",\n)\n\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",  # デプロイ名\n    messages=[\n        {\"role\": \"system\", \"content\": \"あなたは親切なアシスタントです。\"},\n        {\"role\": \"user\", \"content\": \"Azure OpenAI とは?\"},\n    ],\n    temperature=0.3,\n    max_tokens=500,\n)\nprint(response.choices[0].message.content)",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**REST API**: HTTP POST で直接呼出",
                "**Python / .NET / JavaScript / Java SDK**: 各言語の SDK",
                "**Azure AI Foundry**: モデル選択 ・ プロンプト試作 ・ デプロイの IDE",
                "**Streaming**: 部分応答を逐次受信",
                "**Function Calling**: モデルに関数を呼ばせる",
                "**Structured Outputs**: JSON Schema での出力強制",
                "**Vision API**: 画像入力でマルチモーダル",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "ファインチューニングとカスタマイズ",
          blocks: [
            {
              type: "def",
              title: "3 段階のカスタマイズ",
              body: "**1. プロンプトエンジニアリング**: モデル変えずプロンプトのみ。最もコスト効率良い。\n\n**2. RAG**: 外部知識を検索 → プロンプトに含める。Azure AI Search 統合。\n\n**3. ファインチューニング**: モデル自体を独自データで再学習。コスト高だが特殊用途で効果大。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Supervised Fine-tuning(SFT)**: ラベル付きデータでの微調整",
                "**Distillation(蒸留)**: 大モデル → 小モデル",
                "**RLHF(Reinforcement Learning from Human Feedback)**",
                "**LoRA / QLoRA**: 効率的な部分微調整",
                "**Continuous fine-tuning**: 継続的な微調整",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "RAG と Azure AI Search",
      overview:
        "RAG パイプラインの設計 ・ 実装 ・ 評価を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Azure AI Search の機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**全文検索**: BM25 / TF-IDF",
                "**ベクトル検索**: 埋め込みベクトルの類似度",
                "**ハイブリッド検索**: 全文 + ベクトル + リランキング",
                "**Semantic Ranker**: ML ベースのリランキング",
                "**スコアリングプロファイル**: フィールド重み付け",
                "**ファセット ・ フィルタ ・ 自動補完**",
                "**Geospatial Search**: 地理空間検索",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "RAG パイプライン設計",
          blocks: [
            {
              type: "p",
              text: "**RAG(Retrieval Augmented Generation)** は社内ドキュメントを使った Q&A の標準パターン。Azure AI Search + Azure OpenAI が定番構成です。",
            },
            { type: "h3", text: "RAG パイプラインの段階" },
            {
              type: "list",
              style: "number",
              items: [
                "**インジェスト**: 文書を取込み、チャンク分割",
                "**埋め込み生成**: text-embedding-3 でベクトル化",
                "**インデキシング**: Azure AI Search にベクトル + メタデータを保存",
                "**クエリ埋め込み**: ユーザ質問をベクトル化",
                "**検索**: ベクトル + 全文のハイブリッド検索",
                "**リランキング**: Semantic Ranker で上位調整",
                "**プロンプト構築**: 検索結果をシステムプロンプトに含める",
                "**生成**: GPT モデルが回答を生成",
                "**Grounding**: 出典を含めて回答",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "AI Enrichment(AI 拡充)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Skills**: 個別の AI 処理(OCR / 言語検出 / エンティティ抽出 / 画像説明)",
                "**Skillset**: 複数 Skill の組合せ",
                "**Indexer**: データソース → Skillset → インデックスの自動パイプライン",
                "**Custom Skill**: Azure Function などで独自 AI 処理",
                "**Knowledge Store**: 抽出済情報を別ストアに保存",
                "**Debug Session**: スキルセットのデバッグ",
                "**Incremental indexing**: 差分インデキシング",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "コンピュータビジョン実装",
      overview:
        "Azure AI Vision ・ Custom Vision ・ Face ・ Document Intelligence の実装を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Azure AI Vision",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**画像分析(Image Analysis)**: タグ / オブジェクト / 説明 / 顔検出 / OCR",
                "**Read API(OCR)**: 高度な OCR、多言語、手書き対応",
                "**Image Captioning(Floating Point)**: 自然言語による画像説明",
                "**Spatial Analysis**: 動画から人の動き分析",
                "**Content Moderation**: 不適切コンテンツ検出",
                "**Background Removal**: 背景削除",
                "**Vector Embeddings**: 画像のベクトル化(類似画像検索向け)",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Custom Vision",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**プロジェクト種別**: 分類(複数 / 単一ラベル)・ 物体検出",
                "**Domain**: General / Food / Landmarks / Retail / Compact(エッジ向け)",
                "**Quick Test ・ Predict API**",
                "**Iteration**: モデルバージョン管理",
                "**Performance タブ**: 精度 ・ 適合率 ・ 再現率",
                "**Export**: TensorFlow Lite / ONNX / CoreML / Docker",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Document Intelligence",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**事前構築モデル**: 請求書 ・ レシート ・ ID ・ 名刺 ・ W-2 ・ 健康保険カード",
                "**Layout モデル**: 表 ・ チェックボックス ・ 段落構造抽出",
                "**Read モデル**: 純粋な OCR + 言語検出",
                "**General Document**: 汎用的な KV 抽出",
                "**Custom モデル**: 独自フォームの学習(Template / Neural)",
                "**Studio**: ノーコードのアノテーション + 学習",
                "**Composed model**: 複数カスタムモデルの統合",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "自然言語処理(Azure AI Language)",
      overview:
        "Language サービスの主要機能と Conversational Language Understanding を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Azure AI Language の主要機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Language Detection**: 入力テキストの言語識別",
                "**Sentiment Analysis**: ポジティブ / ネガティブ / ニュートラル + 信頼度",
                "**Key Phrase Extraction**: 主要キーワード",
                "**Named Entity Recognition(NER)**: 人 / 場所 / 組織 / 日付",
                "**PII Detection**: 個人情報の検出 / マスキング",
                "**Linked Entities**: Wikipedia 等へのリンク",
                "**Text Analytics for Health**: 医療文書特化",
                "**Summarization**: 抽出型 + 抽象型(生成型)要約",
                "**Question Answering**: FAQ ベースの質問応答",
                "**Custom Text Classification / NER**: 独自データで分類器構築",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Conversational Language Understanding(CLU)",
          blocks: [
            {
              type: "p",
              text: "**CLU**(旧 LUIS の後継)は意図(Intent)+ エンティティ(Entity)を抽出するサービス。Azure AI Bot Service と組合せてチャットボットを構築する。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Intent**: ユーザの意図(『フライト予約』『天気確認』など)",
                "**Entity**: パラメータ(『東京』『2024 年 3 月 1 日』)",
                "**Utterance**: 訓練用の発話例",
                "**Orchestration Workflow**: 複数 CLU プロジェクト + Question Answering の統合",
                "**Multi-language**: 同一プロジェクトで多言語対応",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Translator と Speech",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI Translator**: 100 以上の言語の機械翻訳",
                "**Document Translation**: 文書全体の翻訳(レイアウト保持)",
                "**Custom Translator**: 独自対訳データで業界特化翻訳",
                "**Speech to Text**: 音声 → テキスト",
                "**Text to Speech**: テキスト → 音声(Neural Voice)",
                "**Speech Translation**: 音声 → 翻訳音声 / テキスト",
                "**Speaker Recognition**: 話者識別 ・ 検証",
                "**Custom Speech / Custom Voice**: 独自データで音声モデル",
                "**Real-time captioning**: リアルタイム字幕",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Azure AI Foundry とエージェント",
      overview:
        "Azure AI Foundry での開発と AI Agent Service を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Azure AI Foundry",
          blocks: [
            {
              type: "p",
              text: "**Azure AI Foundry**(旧 Azure AI Studio)は **生成 AI アプリ開発の統合プラットフォーム**。モデル選択 ・ プロンプト試作 ・ 評価 ・ デプロイ ・ 監視を 1 か所で完結できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hub / Project**: 環境とプロジェクトの階層",
                "**Model Catalog**: OpenAI / Microsoft / Meta / Mistral / Cohere など複数ベンダー",
                "**Prompt Flow**: プロンプト + RAG + Function Calling のオーケストレーション",
                "**Evaluation**: 自動評価(Groundedness / Relevance / Coherence / Fluency)",
                "**Content Safety**: 入出力の安全性スキャン",
                "**Tracing**: プロンプト → 検索 → 生成のトレース",
                "**Compute**: 開発 ・ 学習 ・ 推論の計算リソース",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Azure AI Agent Service",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AI Agent Service**: 自律的なタスク実行エージェントの構築 ・ 実行サービス",
                "**Tools**: File Search / Code Interpreter / Function Calling",
                "**Threads**: 会話履歴の管理",
                "**Knowledge sources**: AI Search との統合",
                "**Multi-Agent**: 複数エージェントの協調",
                "**Tracing & Evaluation**: エージェント挙動の監視 ・ 評価",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "責任ある AI とコンテンツセーフティ",
      overview:
        "Microsoft の責任ある AI と Azure AI Content Safety を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Microsoft 責任ある AI 6 原則",
          blocks: [
            {
              type: "def",
              title: "6 原則(AI-900 と共通)",
              body: "**公平性 / 信頼性と安全性 / プライバシーとセキュリティ / 包括性 / 透明性 / 説明責任**\n\nAI-102 では各原則を **実装 ・ 監視レベル** で問う。",
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Azure AI Content Safety",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Text Moderation**: 暴力 / 性的 / 自傷 / 憎悪の 4 カテゴリ + 重大度",
                "**Image Moderation**: 同 4 カテゴリの画像版",
                "**Prompt Shields**: プロンプトインジェクション対策(Direct / Indirect)",
                "**Groundedness Detection**: ハルシネーション検出",
                "**Protected Material**: 著作権保護コンテンツの検出",
                "**Custom Categories**: 業界 ・ 用途特化の安全分類",
                "**Studio**: ノーコードでカテゴリ閾値調整",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "AI 評価と監視",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Groundedness**: 回答が提供された情報に基づいているか",
                "**Relevance**: 質問に関連した回答か",
                "**Coherence**: 回答が論理的か",
                "**Fluency**: 文として自然か",
                "**Similarity / BLEU / ROUGE / METEOR**: 機械翻訳 ・ 要約評価",
                "**A/B テスト**: モデル ・ プロンプトの比較",
                "**人間レビュー**: 自動評価では拾えない側面",
                "**Continuous monitoring**: 本番後の品質監視",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "デプロイ ・ 統合 ・ パフォーマンス",
      overview:
        "本番運用のためのデプロイ ・ コスト最適化 ・ スケーリングを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "デプロイ手段",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure App Service**: マネージド Web アプリ",
                "**Azure Functions**: サーバレス、AI トリガー処理",
                "**Azure Kubernetes Service(AKS)**: 大規模コンテナ",
                "**Azure Container Apps**: サーバレスコンテナ",
                "**Azure Logic Apps / Power Automate**: ノーコード統合",
                "**Bicep / ARM Template / Terraform**: IaC",
                "**Azure DevOps / GitHub Actions**: CI/CD",
                "**Container Deployment**: AI services をオンプレ / エッジで",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "コスト最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**モデル選択**: GPT-3.5 vs GPT-4o ・ Mini を要件に応じて使い分け",
                "**Batch API**: 50% 割引(処理に時間許容)",
                "**Provisioned Throughput Units(PTU)**: 安定スループット + 予測可能コスト",
                "**プロンプト最適化**: 不要な指示削減",
                "**Embedding キャッシュ**: 同じテキストの再計算を避ける",
                "**Tier 切替**: Free → Standard → Premium の段階利用",
                "**Reserved Capacity**: 1 / 3 年予約割引",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "可用性と DR",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Multi-region デプロイ**",
                "**Azure Front Door**: グローバルロードバランサ + CDN",
                "**Traffic Manager**: DNS ベースのルーティング",
                "**Backup と Restore**: モデル / インデックスのバックアップ",
                "**Capacity planning**: トラフィックスパイクの吸収",
                "**Throttling 対策**: Retry with exponential backoff",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策の総まとめ",
      overview:
        "範囲別チェックリストと試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: マルチサービス vs 個別 / Subscription Key vs Entra ID / Private Endpoint",
                "**第 3 章**: GPT-4o デプロイ / Python SDK / PTU / Function Calling / Structured Outputs",
                "**第 4 章**: AI Search ハイブリッド検索 / Semantic Ranker / RAG パイプライン 9 段",
                "**第 5 章**: AI Vision / Custom Vision / Face / Document Intelligence の使い分け",
                "**第 6 章**: AI Language / CLU / Translator / Speech",
                "**第 7 章**: Azure AI Foundry / Prompt Flow / AI Agent Service",
                "**第 8 章**: 責任ある AI 6 原則 / Content Safety / Groundedness 評価",
                "**第 9 章**: App Service / Functions / AKS / Bicep / コスト最適化",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**40 〜 60 問 / 100 分** = 1 問 約 2 分。コード補完問題は時間配分注意",
                "**ケーススタディ**: 長文 + 複数問。ケースを保存しておけるので戻って見直し可",
                "**コード補完問題**: Python / C# / REST API のシグネチャを暗記",
                "**サービス名**: 旧名(Cognitive Services / Form Recognizer)が混じる選択肢に注意",
                "**Microsoft Learn の練習問題** + 実機ハンズオンを必ず",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "AI-102 合格 → **DP-100(Azure Data Scientist Associate)** で ML 寄りに、または **DP-203(Azure Data Engineer Associate)** でデータ基盤側に進むのが王道。**Azure Solutions Architect Expert(AZ-305)** で全体アーキテクトに進む道もあります。本サイトの[Azure AI-900](/certs/azure-ai-900) ・ [AWS AI Practitioner](/certs/aws-ai-practitioner) ・ [GCP Generative AI Leader](/certs/gcp-gen-ai-leader)で三大クラウドを揃えるのもおすすめ。",
            },
            {
              type: "practical",
              title: "AI-102 のキャリア活用",
              body: "AI-102 は **Azure 上で AI を実装する技術者** の証明として強力。**Microsoft 365 Copilot 関連 ・ Azure OpenAI 案件 ・ クラウド AI 開発** で評価が高く、AI-900(基礎)+ AI-102(実装)の組合せは Azure AI スペシャリストとして強いシグナル。",
            },
          ],
        },
      ],
    },
  ],
};
