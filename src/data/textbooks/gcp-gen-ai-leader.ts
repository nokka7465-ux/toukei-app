import type { Textbook } from "@/types/content";

export const gcpGenAiLeaderTextbook: Textbook = {
  levelSlug: "gcp-gen-ai-leader",
  title: "Google Cloud Generative AI Leader 教科書",
  intro:
    "**Google Cloud Generative AI Leader** は、Google Cloud 認定の **Foundational(基礎)レベル** の生成 AI 認定。AWS AI Practitioner ・ Azure AI Fundamentals と並ぶ **三大クラウドベンダーの AI 入門認定** の 1 つで、Google Cloud の **Vertex AI ・ Gemini ・ Imagen ・ Veo ・ Workspace Copilot(旧 Duet AI)** などの生成 AI サービス群と、生成 AI を組織で導入するためのリーダーシップ知識を測ります。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "Generative AI Leader ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Google Cloud 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**Google Cloud Generative AI Leader** は、Google Cloud 認定の **Foundational レベル** に位置付けられた生成 AI 入門認定。**Cloud Digital Leader** の生成 AI 特化版として 2025 年にリリースされ、**ビジネスサイド ・ コンサルタント ・ 経営層** が想定対象です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Google Cloud",
                "**形式**: オンライン監督受験 or テストセンター",
                "**問題数 / 時間**: 50 〜 60 問 / 90 分(参考)",
                "**回答方式**: 選択式(単一 / 複数)",
                "**合格スコア**: Google Cloud 公開なし(参考: 70%)",
                "**有効期限**: 3 年(再認定が必要)",
                "**受験料**: 99 USD(参考)",
                "**言語**: 英語(日本語は順次対応)",
              ],
            },
            { type: "h3", text: "Google Cloud 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: Cloud Digital Leader / Generative AI Leader(本資格)",
                "**Associate**: Associate Cloud Engineer / Associate Data Practitioner",
                "**Professional**: Cloud Architect / Data Engineer / **ML Engineer** / Cloud Developer / Cloud Security Engineer など",
              ],
            },
            { type: "h3", text: "三大クラウド AI 入門認定の比較" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Google Cloud Generative AI Leader**: Google Cloud に特化、Gemini ・ Vertex AI 中心",
                "**AWS Certified AI Practitioner(AIF-C01)**: AWS に特化、Bedrock ・ SageMaker 中心",
                "**Microsoft Azure AI Fundamentals(AI-900)**: Azure に特化、Azure OpenAI ・ Copilot 中心",
                "**3 つは競合せず、いずれも生成 AI 入門として有効**",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題ドメイン(公式試験ガイド ベース)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: 生成 AI の基礎**(約 25%): LLM ・ Transformer ・ プロンプト ・ RAG ・ ハルシネーション",
                "**Domain 2: Google Cloud の生成 AI ポートフォリオ**(約 30%): Gemini ・ Vertex AI ・ Imagen ・ Veo ・ Workspace 統合",
                "**Domain 3: 生成 AI による業務変革**(約 20%): ユースケース ・ ROI ・ 組織導入戦略",
                "**Domain 4: 責任ある AI とコンプライアンス**(約 15%): バイアス ・ 透明性 ・ プライバシー ・ Gemini Safety",
                "**Domain 5: モデル評価とコスト最適化**(約 10%): メトリクス ・ コスト見積",
              ],
            },
            { type: "h3", text: "40 〜 80 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: 生成 AI / LLM の基礎(本サイトの[生成 AI パスポート 教科書](/certs/genai-passport/textbook)で土台)",
                "**Week 2**: Google Cloud の AI / ML サービス全体像(Vertex AI / Gemini / Imagen)",
                "**Week 3**: ユースケースと業務変革(ヘルスケア ・ 金融 ・ 小売の事例)",
                "**Week 4**: 責任ある AI + コンプライアンス + コスト",
                "**Week 5**: 模擬試験 + 過去問演習",
              ],
            },
            {
              type: "intuition",
              title: "Google Cloud Skills Boost が公式の最強教材",
              body: "**Google Cloud Skills Boost**(無料アカウントで利用可能)に **Generative AI Leader 専用ラーニングパス** が公開されており、ビデオ + ハンズオンが揃っています。本サイトの教科書と組み合わせると、概念整理 + 実機操作の両軸で対策できます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "生成 AI の基礎",
      overview:
        "LLM / Transformer / トークン / プロンプト / RAG / ハルシネーションを整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "AI ・ ML ・ DL ・ 生成 AI",
          blocks: [
            {
              type: "p",
              text: "**AI ⊃ ML ⊃ DL ⊃ 生成 AI** という入れ子は他のクラウド認定と共通。3 つの学習方式(教師あり / なし / 強化)+ 自己教師あり学習(LLM 事前学習)を押さえれば前提は整います。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "LLM と Transformer",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**LLM(大規模言語モデル)**: 数十億〜数兆パラメータの言語モデル",
                "**Transformer**: 2017 年論文。Self-Attention で並列処理可能",
                "**事前学習 → SFT → RLHF**: 3 段階の学習パイプライン",
                "**コンテキストウィンドウ**: Gemini 1.5 Pro は最大 200 万トークン(1 〜 2 時間の動画 / 数百 PDF を一度に処理可能)",
                "**マルチモーダル**: テキスト + 画像 + 音声 + 動画を統合",
              ],
            },
            {
              type: "intuition",
              title: "Gemini が長コンテキストで強い理由",
              body: "Google が独自開発した **MoE(Mixture of Experts)アーキテクチャ + 効率的な Attention 実装** で 200 万トークンの長コンテキストを実用的に動かせる点が Gemini の強み。これにより『**動画全体を要約**』『**社内 PDF を 100 件まとめて分析**』のようなユースケースが現実的になります。",
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "プロンプトエンジニアリング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**プロンプトの 5 要素**: 役割 / 文脈 / タスク / 出力形式 / 制約",
                "**Zero-shot / Few-shot**: 例なし / 少数例提示",
                "**Chain-of-Thought(CoT)**: 中間推論を出させる",
                "**Self-Consistency**: 多回試行で多数決",
                "**ReAct**: 推論 + 行動の交互",
                "**Function Calling / Tool Use**: モデルに関数を呼ばせる",
              ],
            },
          ],
        },
        {
          id: "ch2-sec4",
          number: "2.4",
          title: "RAG とハルシネーション",
          blocks: [
            {
              type: "p",
              text: "**RAG(Retrieval Augmented Generation)** は外部知識を検索 → プロンプトに含めて回答させる手法。**ハルシネーション(事実誤りの生成)** への代表的な対策で、Google Cloud では **Vertex AI Search + Gemini** が標準パターンです。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**埋め込みモデル**: テキストをベクトルに変換",
                "**ベクトル DB**: 類似検索の高速化",
                "**チャンク戦略**: 文書の適切な分割",
                "**ハイブリッド検索**: ベクトル + キーワード + リランキング",
                "**Grounding**: 回答に出典を明示し、ハルシネーションを抑制",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Google Cloud の AI / ML ポートフォリオ",
      overview:
        "Vertex AI を中心に Google Cloud の AI / ML サービス群を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Vertex AI の全体像",
          blocks: [
            {
              type: "p",
              text: "**Vertex AI** は Google Cloud の AI / ML プラットフォーム。**SageMaker(AWS)・ Azure ML(Microsoft)** に対応し、**学習 ・ 推論 ・ チューニング ・ デプロイ ・ モニタリング** を統合的に扱えます。生成 AI 機能も **Vertex AI Studio / Model Garden / Agent Builder** として統合されています。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Vertex AI Studio**: 生成 AI のプロンプト ・ チューニング ・ 評価 IDE",
                "**Vertex AI Workbench**: Jupyter ベースの開発環境",
                "**Vertex AI Pipelines**: Kubeflow ベースの ML パイプライン",
                "**Vertex AI Model Garden**: Google / オープンソース / サードパーティの基盤モデルカタログ",
                "**Vertex AI Agent Builder**: ノーコード / ローコードのエージェント / RAG ビルダー",
                "**Vertex AI Search**: RAG 用エンタープライズ検索",
                "**Vertex AI AutoML**: ノーコード ML 構築",
                "**Vertex AI Feature Store**: 特徴量管理",
                "**Vertex AI Endpoints**: 推論デプロイ",
                "**Vertex AI Model Monitoring**: ドリフト検出",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Gemini ファミリ",
          blocks: [
            {
              type: "p",
              text: "**Gemini** は Google が開発した **マルチモーダル基盤モデル** ファミリ。テキスト + 画像 + 音声 + 動画 + コードを統合的に扱える点と、長コンテキスト(最大 200 万トークン)が特徴です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gemini 2.0 Flash**: 高速 ・ 低コスト、リアルタイム応答向け",
                "**Gemini 2.5 Pro**: 最高性能の汎用モデル、200 万トークン",
                "**Gemini Nano**: オンデバイス(Pixel ・ Android)向け",
                "**Code Gemini**: コード生成特化",
                "**Imagen**: 画像生成モデル",
                "**Veo**: 動画生成モデル",
                "**Lyria**: 音楽生成モデル",
                "**Chirp**: 音声認識 ・ 音声合成",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "AI 用 API とソリューション",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cloud Vision API**: 画像分析(物体検出 ・ OCR ・ 顔属性)",
                "**Cloud Video Intelligence**: 動画解析",
                "**Cloud Natural Language API**: 感情 ・ エンティティ ・ 構文解析",
                "**Cloud Translation**: 機械翻訳",
                "**Cloud Speech-to-Text / Text-to-Speech**",
                "**Document AI**: 請求書 ・ レシート ・ ID の OCR + 構造化",
                "**Contact Center AI**: コールセンター AI",
                "**Recommendations AI**: レコメンド",
                "**Healthcare API + Healthcare NL API**: 医療データ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Google Workspace と Gemini for Workspace",
      overview:
        "Workspace 統合 AI の Gemini for Workspace と Google Cloud の Copilot 系を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Gemini for Workspace",
          blocks: [
            {
              type: "p",
              text: "**Gemini for Workspace**(旧 Duet AI for Workspace)は Google Workspace(Gmail / Docs / Sheets / Slides / Meet)に統合された AI アシスタント。**Microsoft 365 Copilot** に対応する位置付けです。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gmail での AI**: メール下書き ・ 要約 ・ 返信案",
                "**Docs での AI**: 文書作成 ・ 要約 ・ 改善提案",
                "**Sheets での AI**: 数式生成 ・ データ分析 ・ 表の自動作成",
                "**Slides での AI**: スライド生成 ・ 画像生成(Imagen)",
                "**Meet での AI**: ノイズキャンセリング ・ 議事録 ・ 翻訳",
                "**Side panel(Gemini)**: Workspace 内のサイドパネル AI",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Gemini Code Assist と他の AI ツール",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gemini Code Assist**: VS Code / IntelliJ / Cloud Shell 向けのコード補完 ・ 説明 ・ テスト生成(GitHub Copilot に対応)",
                "**Gemini Cloud Assist**: Google Cloud 運用 ・ アーキテクチャ提案",
                "**Vertex AI Agent Builder**: ノーコードのエージェント / 検索ボット",
                "**NotebookLM**: 特定ドキュメントを学習させたパーソナル AI ノート",
                "**Project Astra**: 次世代マルチモーダルアシスタント(研究プレビュー)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Vertex AI Studio とモデルカスタマイズ",
      overview:
        "プロンプト設計、ファインチューニング、評価のワークフローを整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Vertex AI Studio の機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Prompt design**: プロンプトの試作 ・ 比較",
                "**Multi-turn chat**: 会話形式の試行",
                "**Model selection**: Gemini Pro / Flash / Imagen などの選択",
                "**Tuning**: 教師ありファインチューニング ・ RLHF",
                "**Distillation**: 大モデルから小モデルへの蒸留",
                "**Evaluation**: 自動評価 ・ Human-in-the-loop",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "3 段階のカスタマイズ",
          blocks: [
            {
              type: "def",
              title: "カスタマイズの選択",
              body: "**1. プロンプトエンジニアリング**: モデルを変えずプロンプトのみで調整。最もコスト効率が良い。\n\n**2. RAG**: 外部知識を検索 → プロンプトに含める。社内データ活用に最適。Vertex AI Search が標準。\n\n**3. ファインチューニング**: モデル自体を独自データで再学習。Vertex AI の **教師あり微調整 / RLHF / Distillation** が利用可能。",
            },
            {
              type: "intuition",
              title: "RAG vs Fine-tuning の選び分け",
              body: "**最新情報 / 出典明記 / 社内データ中心** なら **RAG** が第一選択。**口調 ・ スタイル ・ ブランドトーンの定着** が必要なら **Fine-tuning**。実務では『**まず RAG、それでも足りなければ Fine-tuning**』が定石です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "ユースケース別アーキテクチャ",
      overview:
        "Google Cloud の生成 AI で頻出する『この要件にはどのサービス』のパターンを整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "代表的な生成 AI ユースケース",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**社内 FAQ チャットボット**: Vertex AI Search + Gemini(RAG パターン)",
                "**コールセンター音声分析**: Speech-to-Text → Natural Language API → BigQuery + Looker",
                "**請求書 / 領収書の OCR + 自動仕訳**: Document AI + Workflows",
                "**異常検知**: Vertex AI(AutoML)+ BigQuery ML",
                "**需要予測**: BigQuery ML(時系列モデル)or Vertex AI Forecast",
                "**翻訳付き多言語チャット**: Translation + Speech",
                "**画像内容モデレーション**: Cloud Vision SafeSearch + Vertex AI Guardrails",
                "**コードアシスタント**: Gemini Code Assist",
                "**Workspace 内での業務支援**: Gemini for Workspace",
                "**ノーコード社内 Bot**: Vertex AI Agent Builder",
                "**動画生成**: Veo via Vertex AI",
                "**画像生成**: Imagen via Vertex AI",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "BigQuery ML と AI 統合",
          blocks: [
            {
              type: "p",
              text: "**BigQuery ML(BQML)** は SQL のみで機械学習モデルを構築 ・ 推論できる Google Cloud 独自の機能。**Vertex AI との統合** で生成 AI を SQL から呼べる点が大きな強み。データウェアハウスから直接 AI を扱える業務分析者向けの差別化ポイントです。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ML.PREDICT**: 学習済モデルでの推論",
                "**ML.GENERATE_TEXT**: BigQuery から Gemini を呼び出して文章生成",
                "**ML.GENERATE_EMBEDDING**: 埋め込みベクトル生成",
                "**ML.UNDERSTAND_TEXT**: NLP 機能の呼び出し",
                "**ML.TRANSLATE**: 翻訳",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "責任ある AI と Google の AI 原則",
      overview:
        "Google の AI 原則 ・ Vertex AI Safety ・ プライバシー保護を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Google の AI 原則",
          blocks: [
            {
              type: "p",
              text: "**Google の AI 原則** は 2018 年に公開された AI 開発の基本指針。AI-Leader 試験で必出のフレームワークです。",
            },
            {
              type: "def",
              title: "Google の 7 つの AI 原則",
              body: "**1. 社会に有益であること(Be socially beneficial)**\n\n**2. 不公平な偏見を生まない / 強化しない**\n\n**3. 安全性のために構築 ・ テストされる**\n\n**4. 人々への説明責任を持つ**\n\n**5. プライバシー設計の原則を組み込む**\n\n**6. 高い科学的卓越性の基準を維持**\n\n**7. これらの原則に沿った用途のみで利用可能とする**\n\n加えて『**AI を追求しない領域**』として、**武器 ・ 監視 ・ 国際法違反** などを挙げている。",
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Vertex AI のセーフティ機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Safety Filters**: 有害コンテンツの自動遮断(ハラスメント / 危険なコンテンツ等)",
                "**Citation metadata**: 生成物の引用元メタデータ",
                "**Grounding**: Google 検索 / Vertex AI Search のソースに基づいた回答",
                "**Adversarial testing**: プロンプトインジェクション対策",
                "**Model cards**: モデルの透明性 ・ 限界の文書化",
                "**SynthID**: AI 生成画像 ・ 動画への透かし",
                "**Watermark for text**: 生成テキストの識別",
              ],
            },
            {
              type: "intuition",
              title: "Grounding が Google の差別化",
              body: "**Grounding with Google Search** は、Gemini の回答を Google 検索結果に基づかせる機能。これにより **最新情報の反映 ・ 出典の自動付与 ・ ハルシネーション抑制** が同時に実現できます。Google が検索エンジン会社である強みを活かした独自機能です。",
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "プライバシーとデータ管理",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**データ常駐(Data residency)**: リージョン指定で物理的な保管場所を制御",
                "**VPC Service Controls**: AI サービスをプライベートに",
                "**CMEK(Customer-Managed Encryption Keys)**: 顧客管理の暗号鍵",
                "**Cloud DLP**: 個人情報の自動検出 ・ マスキング",
                "**Privileged Access Management**: 細かい権限管理",
                "**No data used for training contract**: 入力データを学習に使わない契約",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "コスト最適化と運用",
      overview:
        "Google Cloud の生成 AI 関連コスト管理と最適化を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Vertex AI ・ Gemini のコスト構造",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**On-Demand**: 入力 / 出力トークン課金。試験 ・ PoC 向き",
                "**Provisioned Throughput**: スループットを事前確保。本番大規模で割安",
                "**Batch Prediction**: 大量データの一括処理で低コスト",
                "**Context Caching**: 長コンテキストの繰返し利用でコスト削減",
                "**Free Tier**: Vertex AI の一部機能 / 月次無料枠",
                "**Committed Use Discounts(CUD)**: 1 / 3 年コミットで割引",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "コスト最適化のテクニック",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**モデル選択**: Flash(高速 ・ 低コスト)vs Pro(最高性能)を要件に応じて使い分け",
                "**プロンプト圧縮**: 不要な指示 / 冗長な例示を削減",
                "**Context Caching**: 繰り返し使うシステムプロンプトをキャッシュ",
                "**Distillation**: 本番では小型モデルへ蒸留",
                "**Vertex AI Cost Estimator**: 使用前にコスト見積",
                "**Cloud Billing アラート**: 予算超過の検知",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "業務変革と組織導入",
      overview:
        "生成 AI による業務変革のフレームワークと組織導入のステップを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "AI ファーストへの組織変革",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Strategic alignment**: 経営戦略との整合",
                "**Operating model**: 中央集権 / 分散 / ハブ&スポークの選択",
                "**Center of Excellence(CoE)**: AI 専門部門の設立",
                "**MLOps / LLMOps**: 本番運用の標準化",
                "**Change management**: 従業員の AI リテラシー教育",
                "**ROI 測定**: 効率化 ・ 売上 ・ 顧客満足度",
                "**Ethics committee**: AI 倫理委員会",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "業界別ユースケース",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**金融**: 不正検知 ・ 与信 ・ 投資レポート自動化 ・ KYC",
                "**ヘルスケア**: 診断補助 ・ 創薬 ・ 医療文書要約 ・ 患者対応",
                "**小売 / EC**: 商品レコメンド ・ 在庫予測 ・ チャットボット",
                "**製造**: 不良品検出 ・ 予知保全 ・ 設計支援",
                "**教育**: パーソナライズ学習 ・ 採点 ・ 教材生成",
                "**メディア**: コンテンツ生成 ・ 翻訳 ・ 字幕生成",
                "**法律**: 契約書レビュー補助 ・ リーガルリサーチ",
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
                "**第 2 章**: AI ⊃ ML ⊃ DL ⊃ Gen AI / LLM / Transformer / プロンプト / RAG / ハルシネーション",
                "**第 3 章**: Vertex AI のサブサービス + Gemini ファミリ + Imagen / Veo",
                "**第 4 章**: Gemini for Workspace / Code Assist / Cloud Assist の使い分け",
                "**第 5 章**: Vertex AI Studio + 3 段階のカスタマイズ(プロンプト / RAG / Fine-tuning)",
                "**第 6 章**: ユースケース → サービス選択の即答パターン + BigQuery ML",
                "**第 7 章**: Google の 7 つの AI 原則 + Grounding + SynthID",
                "**第 8 章**: モデル選択(Flash vs Pro)+ Context Caching + Provisioned Throughput",
                "**第 9 章**: 組織導入(CoE / MLOps / Change management)+ 業界別ユースケース",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**50 〜 60 問 / 90 分** = 1 問 約 1.5 分",
                "**サービス名のスペル**: 英語版受験で正確なサービス名選択が必須",
                "**新旧サービス名**: Duet AI → Gemini など改称が頻出",
                "**Google の 7 原則** は順序ではなく内容で覚える",
                "**消去法**: AWS / Azure のサービス名が混じる選択肢は誤答",
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
              text: "Generative AI Leader 合格 → **Associate Cloud Engineer** または **Professional ML Engineer / Professional Data Engineer** が王道。三大クラウドを揃えたい場合は本サイトの[AWS AI Practitioner](/certs/aws-ai-practitioner) ・ [Azure AI-900](/certs/azure-ai-900)も。",
            },
            {
              type: "practical",
              title: "GCP Generative AI Leader のキャリア活用",
              body: "Google Cloud 認定として **履歴書 / LinkedIn に記載可能**。クラウド AI の三大ベンダーをすべてカバーしている人材は希少で、コンサルタント ・ 経営層補佐 ・ AI 戦略担当として強いシグナルになります。",
            },
          ],
        },
      ],
    },
  ],
};
