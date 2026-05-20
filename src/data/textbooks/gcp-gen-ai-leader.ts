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
    {
      id: "ch11",
      number: 11,
      title: "Gemini 2.0 / 2.5 と Reasoning Models(2024-2025)",
      overview:
        "Gemini は 2024 末 - 2025 で **Native Multimodal / Thinking Mode / Agent / Veo / Imagen 3 統合** へ大進化。Gen AI Leader 試験も同等の最新トピックを反映しています。",
      sections: [
        {
          id: "ch11-sec1",
          number: "11.1",
          title: "Gemini ファミリと選択基準",
          blocks: [
            {
              type: "p",
              text: "Gemini ファミリは性能 ・ コスト ・ 用途別に階層化されています。Gen AI Leader 試験ではタスク → モデル選定の判断力が問われます。",
            },
            { type: "h3", text: "Gemini 2.x ファミリ(2024-2025)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gemini 2.0 Pro** / **2.5 Pro**: 主力 ・ 高精度 ・ 200 万 Token Context",
                "**Gemini 2.0 Flash** / **2.5 Flash**: 高速 ・ 低コスト ・ マルチモーダル",
                "**Gemini 2.0 Flash-Lite** / **2.5 Flash-Lite**: さらに軽量 ・ 安価",
                "**Gemini 2.0 Flash Thinking** / **2.5 Thinking**: o1 系 Reasoning Model(数学 / コード / 論理に強い)",
                "**Gemini Nano**: オンデバイス(Android / Chrome 内蔵)",
                "**Imagen 3**: 画像生成(DALL-E 3 / Midjourney 競合)",
                "**Veo 2 / Veo 3**: 動画生成(Sora 競合)・ 60 秒+ の高品質",
                "**Chirp / Lyria**: 音声合成 / 音楽生成",
              ],
            },
            {
              type: "intuition",
              title: "💡 即答フローチャート",
              body: "**高頻度 / 大量**: Flash-Lite / Flash。**精度重視**: Pro / Thinking。**数学 ・ コード ・ 多段推論**: Thinking 系。**マルチモーダル(画像 + 動画 + 音声)**: 2.x 系どれでも Native 対応。**オンデバイス(Android 端末内)**: Nano。**画像生成**: Imagen 3。**動画生成**: Veo 2/3。",
            },
          ],
        },
        {
          id: "ch11-sec2",
          number: "11.2",
          title: "Native Multimodal の意義",
          blocks: [
            {
              type: "p",
              text: "Gemini は **設計当初からマルチモーダル(Text / Image / Audio / Video)を Native に処理**する初の大規模モデル。GPT-4 等の「テキスト中心 + Vision 拡張」とは設計思想が異なります。",
            },
            { type: "h3", text: "Native Multimodal の特徴" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Tokenizer がマルチモーダル**: 画像 / 音声 / 動画を直接トークン化(ピクセル / 音声波形 / フレーム)",
                "**Cross-modal Reasoning**: 「動画の 10:23 で女性が言った内容を要約 + 画像で示せ」が 1 回の推論で可能",
                "**Real-time Audio + Video**(Project Astra): カメラ + マイク Live ストリームでチャット",
                "**Long Video Understanding**: 1-2 時間の動画を 1 回の Context で理解(200 万 Token = 約 11 時間音声 / 約 1 時間映像相当)",
              ],
            },
            {
              type: "practical",
              title: "ユースケース例",
              body: "**製造業**: 設備カメラ映像 → 故障兆候の自動検知 + 整備マニュアル参照 + 作業指示生成。**医療**: 内視鏡動画 → 病変箇所マーキング + カルテ自動入力 + 過去症例比較。**教育**: 授業動画 → 章ごとの要約 + 練習問題自動生成 + 個別化解説。**Native Multimodal でないと困難な複合タスク**こそ Gemini の独壇場。",
            },
          ],
        },
        {
          id: "ch11-sec3",
          number: "11.3",
          title: "Thinking Mode と Reasoning Models",
          blocks: [
            {
              type: "p",
              text: "**Gemini 2.0 Flash Thinking**(2024 末)・ **Gemini 2.5 Pro Thinking**(2025)は OpenAI o1 / o3 と同様の **Test-Time Compute Scaling** モデル。推論時に内部で長い思考過程を生成して回答精度を高めます。",
            },
            { type: "h3", text: "Reasoning Model の仕組み" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Chain-of-Thought を内部で延長**: 数千トークンの思考過程を生成(出力には表示しない / Trace で見られる)",
                "**Self-Reflection**: 中間結論を批判 ・ 修正",
                "**RLHF / Self-Play with Verifier** で訓練(数学 ・ コードは検証可能なため強化学習が効きやすい)",
                "**AIME / MATH / GPQA / Codeforces で人間専門家超え**",
              ],
            },
            { type: "h3", text: "Reasoning Model を選ぶ場面" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**数学 / 物理 / 化学の難問**(競技数学レベル)",
                "**複雑なコード生成 / バグ修正 / 設計レビュー**",
                "**法律 / 医療の多段推論**(条文解釈 / 鑑別診断)",
                "**戦略立案 / 投資判断 の論理検証**",
              ],
            },
            {
              type: "intuition",
              title: "💡 Reasoning Model のトレードオフ",
              body: "**精度 ↑ / レイテンシ ↑(数秒-数十秒)/ Token コスト ↑**。**チャットや要約には過剰スペック**。**深い分析 / 専門的回答** で価値を発揮。**Gen AI Leader 試験**では「Reasoning Model を選ぶべき / 通常モデルで十分」の判断が問われる。",
            },
          ],
        },
        {
          id: "ch11-sec4",
          number: "11.4",
          title: "Context Caching と Long Context 活用",
          blocks: [
            {
              type: "p",
              text: "**Context Caching**(Gemini 1.5+)は、長文 Prompt の前半を Cache 化して再利用時のコストを **75% 削減** + レイテンシ短縮する機能。Gen AI 経済の核心技術です。",
            },
            { type: "h3", text: "Context Caching の使い所" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**マルチターンチャット**: System Prompt + 過去履歴を Cache",
                "**長大ドキュメント QA**: 1 冊の本 / 大型契約書を Cache → ユーザーが繰返し質問",
                "**Multi-Query Agent**: 同一 Context に対して複数 Sub-task",
                "**RAG の代替**: 中規模文書(100K-1M Token)なら RAG なしで Cache に丸ごと入れるほうがシンプル",
              ],
            },
            { type: "h3", text: "Long Context の活用パターン" },
            {
              type: "p",
              text: "Gemini の **200 万 Token Context** は、**1 つの企業の全社内文書 ・ 数百本の論文 ・ 大規模コードベース** を一度に読込める容量。**Single-shot Long Context** vs **Retrieval(RAG)** のトレードオフを理解することが重要です。",
            },
            {
              type: "practical",
              title: "Long Context vs RAG",
              body: "**Long Context が有利**: ① 文書数百 - 数千 Token 規模 ② 全体俯瞰が必要 ③ 1-shot で完結。**RAG が有利**: ① 文書数十万 + ② 頻繁更新 ③ Citation 必須 ④ コスト最重視。**ハイブリッド**: RAG で Top-K → Long Context で精読、が現代の主流。",
            },
          ],
        },
        {
          id: "ch11-sec5",
          number: "11.5",
          title: "Gemini 周辺サービスと Google 統合",
          blocks: [
            { type: "h3", text: "Gemini for Workspace(統合 AI)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gemini in Gmail / Docs / Sheets / Slides / Meet**: M365 Copilot 競合",
                "**Help me write / organize / visualize**: 各アプリ内の自然言語操作",
                "**Gemini Code Assist**: GitHub Copilot 競合 ・ IDE 統合",
                "**Gemini in Chrome**(Tab Compare / Page Summary 等)",
                "**Gemini App**(無料 / Advanced $19.99/月)",
              ],
            },
            { type: "h3", text: "NotebookLM" },
            {
              type: "p",
              text: "**NotebookLM**(Google Labs → 一般公開): アップロードしたソース(PDF / Doc / Web / 音声 / 動画)を **Grounded で QA / Summary / Mind Map / Audio Overview**(2 人 AI による Podcast 風音声解説)生成。学習 / リサーチ用途で爆発的人気。",
            },
            { type: "h3", text: "Deep Research" },
            {
              type: "p",
              text: "**Gemini Deep Research**(2024 末 Gemini Advanced 機能): ユーザー質問に対し **多段 Web 検索 + 文書統合 + Citation 付きレポート**(数十ページ)を自動生成。**OpenAI Deep Research(2025)・ Perplexity Pro Search** と同等の AI Research Agent。",
            },
          ],
        },
      ],
    },
    {
      id: "ch12",
      number: 12,
      title: "Project Astra / Agent Builder と Embodied AI",
      overview:
        "Google の Agent ・ Embodied AI 戦略(Astra / Mariner / SIMA / Genie 2 / RT-2)を、Gen AI Leader 試験に必要な範囲で整理します。",
      sections: [
        {
          id: "ch12-sec1",
          number: "12.1",
          title: "Project Astra(Multimodal Real-time Agent)",
          blocks: [
            {
              type: "p",
              text: "**Project Astra**(Google I/O 2024 発表 ・ 2025 順次展開)は、**カメラ + マイク + 画面共有 で Real-time にユーザーを支援する Universal AI Agent** です。",
            },
            { type: "h3", text: "Astra の特徴" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Real-time Multimodal**: ビデオ + 音声 + 画面を **常時 Stream 処理**(レイテンシ <1 秒)",
                "**Persistent Memory**: 過去 10 分以上の出来事を覚えている",
                "**Multimodal Reasoning**: 「机の上の眼鏡どこに置いた?」「画面のコードを修正して」など世界モデル + 行動指示",
                "**Cross-device**: スマホ ・ Chrome ・ スマートグラス(Android XR)で同一 Agent",
                "**Comparison**: OpenAI Realtime API + GPT-4o Voice Mode と同等概念",
              ],
            },
            {
              type: "practical",
              title: "Astra のビジネス活用",
              body: "**コールセンター**: オペレータ画面と顧客状況を Astra が見て Real-time 提案。**現場作業**: スマートグラスで作業者を Astra が誘導(整備 / 検査)。**教育**: 個別チューター(問題を見せると解説 ・ 弱点指摘)。**バリアフリー**: 視覚障害者の生活支援。**Astra は単独製品ではなく Gemini 2.x の応用形** として理解。",
            },
          ],
        },
        {
          id: "ch12-sec2",
          number: "12.2",
          title: "Project Mariner(Browser Agent)",
          blocks: [
            {
              type: "p",
              text: "**Project Mariner**(2024 末発表)は、**ブラウザを Agent が自動操作**する技術。**Anthropic Computer Use / OpenAI Operator** と並ぶ AI による Web Task 自動化です。",
            },
            { type: "h3", text: "Mariner の機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ブラウザ画面を Vision で理解** → クリック ・ 入力 ・ スクロール",
                "**自然言語タスク** → 例: 「Amazon で送料無料の有機コーヒー豆を見つけてカートに入れて」",
                "**Chrome 拡張機能 として提供**(Trusted Tester から段階展開)",
                "**Multi-step Plan**: タスクを分解 → 順次実行 → エラー時の自動リカバリ",
              ],
            },
            { type: "h3", text: "Browser Agent の社会的論点" },
            {
              type: "p",
              text: "Browser Agent は **Web エコノミー全体に大きな影響**(自動購買 / 自動申込 / Bot 流入の急増)。**EU AI Act / 著作権 / robots.txt 拡張 / Bot 課金モデル** など、Gen AI Leader として把握すべき新たな論点です。",
            },
          ],
        },
        {
          id: "ch12-sec3",
          number: "12.3",
          title: "Vertex AI Agent Builder",
          blocks: [
            {
              type: "p",
              text: "**Vertex AI Agent Builder**(旧 Gen App Builder, 2024 リブランド)は、**Low-Code で生成 AI アプリ ・ Agent を構築**できる Google Cloud の SaaS です。",
            },
            { type: "h3", text: "Agent Builder の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Vertex AI Search**(マネージド RAG): 取込 + Embed + 検索 + Reranker + Citation",
                "**Vertex AI Conversation**(旧 Dialogflow CX): GUI で会話フロー設計",
                "**Agent Garden**: Pre-built Agent テンプレート(契約書レビュー / 商品レコメンド 等)",
                "**Agent Engine**(2024+): 任意の Agent FW(LangChain / LangGraph / CrewAI / AutoGen)を Vertex AI でホスト",
                "**Connectors**: BigQuery / Looker / Cloud Storage / GitHub 等のデータソース",
                "**Grounding + Guardrails**: Safety Filter + Grounding Score 出力",
              ],
            },
            { type: "h3", text: "AgentSpace(2024 末)" },
            {
              type: "p",
              text: "**Google AgentSpace** は **企業向け Agent 統合 SaaS**。Salesforce / Workday / Confluence / Box / OneDrive / Slack 等を横断検索 + Agent タスク実行。M365 Copilot + Foundry Agent Service / Amazon Q Business に対応する Google の答え。",
            },
          ],
        },
        {
          id: "ch12-sec4",
          number: "12.4",
          title: "Embodied AI と Robotics",
          blocks: [
            {
              type: "p",
              text: "**Embodied AI**(身体性 AI)= 物理世界と相互作用する AI。Google DeepMind は **Vision-Language-Action(VLA)モデル** で世界をリードしています。",
            },
            { type: "h3", text: "Google DeepMind の Embodied AI" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**RT-2 / RT-X**(2023): 大規模 VLA モデル ・ 67 種のロボット ・ 多タスク",
                "**Gemini Robotics**(2025): Gemini 2.0 ベースの VLA ・ Apptronik Apollo / 他ヒューマノイドに展開",
                "**SIMA**(Scalable Instructable Multiworld Agent): ゲーム環境(No Man's Sky 等)で自然言語指示通り行動",
                "**Genie 1 / Genie 2**(2023-2024): 1 枚の画像 / テキストから **インタラクティブ 3D 環境を生成**(World Model + 物理シミュレータ)",
              ],
            },
            { type: "h3", text: "Embodied AI のビジネスインパクト" },
            {
              type: "p",
              text: "**製造業 / 物流 / 介護 / 家事 ロボット**で 2025-2030 に大規模商用化見込み。**Figure 02 / Tesla Optimus / Boston Dynamics Atlas / Apptronik Apollo / 1X Neo / Unitree H1 / Sanctuary Phoenix** が代表ヒューマノイド。Gen AI Leader として、**事業機会 ・ 雇用への影響 ・ 倫理 / 安全規制** を理解しておくべきです。",
            },
            {
              type: "practical",
              title: "World Models の戦略的意義",
              body: "**World Models**(LeCun JEPA / DeepMind Genie / OpenAI Sora 等)= **環境の物理 / 因果を学習し未来予測 + 計画**できるモデル。**ロボット / 自動運転 / シミュレーション学習** の基盤。**Gemini 2.x の Native Video 理解** は World Model 路線の出発点。**LLM の次のフロンティア**として Gen AI Leader が押さえるべきトピック。",
            },
          ],
        },
        {
          id: "ch12-sec5",
          number: "12.5",
          title: "Google AI 戦略と業界変革",
          blocks: [
            {
              type: "p",
              text: "Gen AI Leader 試験の最終トピックは、**経営者 ・ 戦略担当として Google AI を活用する戦略思考**です。",
            },
            { type: "h3", text: "Google AI の差別化要因" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**TPU(Tensor Processing Unit)**: NVIDIA GPU と並ぶ AI 専用チップ ・ Trillium(v6)/ v7 で更に進化",
                "**統合スタック**: Search / YouTube / Maps / Workspace / Cloud / Android / Pixel を AI で横断",
                "**長期 R&D**: DeepMind(AlphaGo / AlphaFold / Genie / Astra)・ Google Research の論文数",
                "**マルチモーダル先行**: Native Multimodal ・ World Models ・ Embodied AI の進度",
                "**Open Models**: Gemma(オープン Gemini 派生)・ コミュニティ参加",
              ],
            },
            { type: "h3", text: "業界変革の主要シナリオ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Search 変革**: 従来 10 本リンク → AI Overviews(回答型)→ Gemini Deep Research(レポート型)",
                "**Workspace × Copilot 戦争**: M365 Copilot vs Gemini for Workspace の覇権争い",
                "**Cloud × AI**: AWS / Azure / GCP の差別化軸は AI 機能 + TPU / GPU 確保力",
                "**Hardware × AI**: Pixel 9 + Gemini Nano / Android XR(スマートグラス)",
                "**Robotics × AI**: Apptronik 等との提携 ・ Embodied AI 商用化",
                "**Quantum × AI**(Willow 2024): 量子コンピューティングが AI 加速器化する未来",
              ],
            },
            {
              type: "practical",
              title: "Gen AI Leader として持つべき問い",
              body: "**①** 自社業務のうち AI 介入で最大 ROI が出るのは? **②** Workspace / Cloud / 独自 LLM のどれを選ぶか(コスト / Lock-in / Compliance)**③** 競合が先に AI 化した場合の Disruption リスクは? **④** 倫理 / 雇用 / 規制(EU AI Act / 個情法)対応は十分か? **⑤** 3-5 年の **Agent / Embodied AI / Quantum AI** ロードマップを どう描くか? **これらを経営アジェンダ化** することが Gen AI Leader の役割。",
            },
          ],
        },
      ],
    },
  ],
};
