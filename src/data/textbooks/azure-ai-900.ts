import type { Textbook } from "@/types/content";

export const azureAi900Textbook: Textbook = {
  levelSlug: "azure-ai-900",
  title: "Microsoft Azure AI Fundamentals(AI-900)教科書",
  intro:
    "**Microsoft Azure AI Fundamentals(AI-900)** は、Microsoft Azure 認定の **Fundamentals(基礎)レベル** に位置する AI 入門認定。Azure 上の **AI / 機械学習 / 生成 AI / コンピュータビジョン / 自然言語処理 / 音声 / 文書インテリジェンス** などのサービスを総覧し、各サービスの守備範囲と適切な使い分けを問います。**ビジネスサイド ・ コンサルタント ・ Microsoft 365 / Azure を活用するすべての職種** が想定対象です。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "AI-900 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Azure 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "AI-900 の位置付け",
          blocks: [
            {
              type: "p",
              text: "**Microsoft Azure AI Fundamentals(AI-900)** は Azure 認定の **Fundamentals レベル** に位置する AI 入門認定。**Azure Fundamentals(AZ-900)の AI 版** で、Azure の AI / ML / 生成 AI サービス全般のリテラシーを測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Microsoft",
                "**形式**: CBT(Pearson VUE 試験会場)or オンライン監督受験",
                "**問題数 / 時間**: 約 40 〜 60 問 / 60 分",
                "**回答方式**: 選択式(単一 / 複数)+ 順序付け / マッチング",
                "**合格スコア**: 700 / 1000",
                "**有効期限**: なし(継続有効)",
                "**受験料**: 一般 12,500 円(約 99 USD、参考)",
                "**言語**: 英語 ・ 日本語など複数言語対応",
              ],
            },
            { type: "h3", text: "Microsoft 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Fundamentals**: AZ-900 / AI-900 / DP-900 / SC-900 / MS-900 など、各分野の入門",
                "**Associate**: AZ-104 / AI-102 / DP-203 など、実務向け",
                "**Expert**: AZ-305 / AZ-400 など、上位アーキテクト",
                "**Specialty**: 特定領域の専門認定",
              ],
            },
            { type: "h3", text: "AWS AI Practitioner との比較" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI-900**: Microsoft Azure に特化、有効期限なし、約 12,500 円",
                "**AWS AI Practitioner**: Amazon AWS に特化、有効期限 3 年、約 100 USD",
                "**両者は競合しない**: クラウド ・ AI のリテラシーとして両方持つことに価値あり",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題範囲と推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題ドメイン(公式試験ガイド)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: AI と機械学習の基礎**(15 〜 20%)",
                "**Domain 2: Azure Machine Learning の基礎**(15 〜 20%)",
                "**Domain 3: コンピュータビジョン**(15 〜 20%)",
                "**Domain 4: 自然言語処理**(15 〜 20%)",
                "**Domain 5: 文書インテリジェンス ・ ナレッジマイニング**(15 〜 20%)",
                "**Domain 6: 生成 AI**(20 〜 25%)",
              ],
            },
            { type: "h3", text: "40 〜 80 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: AI / ML の基礎(本サイトの[G 検定 教科書](/certs/g-test/textbook)で土台)",
                "**Week 2**: Azure Machine Learning Studio の概要 + 自動 ML",
                "**Week 3**: コンピュータビジョン(Azure AI Vision / Custom Vision / Face)",
                "**Week 4**: 自然言語処理(Azure AI Language)+ Speech",
                "**Week 5**: 文書インテリジェンス + 生成 AI(Azure OpenAI Service)",
                "**Week 6**: Microsoft Learn + 模擬試験",
              ],
            },
            {
              type: "intuition",
              title: "Microsoft Learn が最強の無料教材",
              body: "AI-900 の対策で **Microsoft Learn(公式無料学習サイト)** が圧倒的に強力。**AI-900 専用ラーニングパス** が公開されており、ハンズオンも含まれています。本サイトの教科書と組み合わせると、概念整理 + 実機操作の両軸で対策できます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "AI と機械学習の基礎",
      overview:
        "ML / DL / 生成 AI の関係、責任ある AI、Microsoft の 6 原則を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "AI ・ ML ・ DL ・ 生成 AI",
          blocks: [
            {
              type: "p",
              text: "AIF-900 でも頻出する基礎構造。**AI ⊃ ML ⊃ DL ⊃ Gen AI** という入れ子と、3 つの学習方式(教師あり / 教師なし / 強化学習)+ 自己教師あり学習を押さえれば 8 割は対応できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**教師あり学習**: 分類 ・ 回帰",
                "**教師なし学習**: クラスタリング ・ 異常検知 ・ 次元削減",
                "**強化学習**: 報酬最大化",
                "**自己教師あり学習**: LLM の事前学習",
                "**転移学習**: 学習済モデルを微調整",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Microsoft の責任ある AI 6 原則",
          blocks: [
            {
              type: "p",
              text: "**Microsoft の責任ある AI 原則** は AI-900 で必出。6 つの柱を覚えましょう。",
            },
            {
              type: "def",
              title: "Microsoft 責任ある AI の 6 原則",
              body: "**1. 公平性(Fairness)**: 異なるグループへの差別を避ける\n\n**2. 信頼性 ・ 安全性(Reliability & Safety)**: 一貫した動作と誤用への耐性\n\n**3. プライバシー ・ セキュリティ(Privacy & Security)**: 個人情報保護とサイバー攻撃への防御\n\n**4. 包括性(Inclusiveness)**: 障害 ・ 多様な背景の利用者に開かれている\n\n**5. 透明性(Transparency)**: 動作とその限界を開示\n\n**6. 説明責任(Accountability)**: 人間が AI の挙動に責任を持つ",
            },
            { type: "h3", text: "対応する Azure サービス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI Content Safety**: 生成コンテンツの安全性スキャン",
                "**Responsible AI Dashboard**: モデルバイアス分析",
                "**Azure AI Studio Guardrails**: プロンプトインジェクション対策",
                "**Microsoft Purview**: データガバナンス",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "ワークロードの分類",
          blocks: [
            {
              type: "p",
              text: "AI-900 では『この業務はどの AI ワークロードに該当するか』を選ばせる問題が頻出。Microsoft が定義する代表ワークロード:",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**機械学習(予測 ・ 分類)**: 売上予測 ・ 退職予測 ・ スパム判定",
                "**コンピュータビジョン**: 画像分類 ・ 物体検出 ・ OCR ・ 顔認識",
                "**自然言語処理**: 感情分析 ・ 言語検出 ・ 要約 ・ 翻訳",
                "**文書インテリジェンス**: 請求書 ・ レシート ・ ID 文書から情報抽出",
                "**ナレッジマイニング**: 大量文書からの検索 ・ 知識発見",
                "**生成 AI**: テキスト ・ 画像 ・ コードの新規生成",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Azure Machine Learning",
      overview:
        "Azure Machine Learning Studio・自動 ML・MLOps の基礎を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Azure Machine Learning Studio",
          blocks: [
            {
              type: "p",
              text: "**Azure Machine Learning(Azure ML)** は Azure 上の ML プラットフォームで、**SageMaker(AWS)** に対応する位置付け。コードベース(Python SDK)・ デザイナー(GUI)・ 自動 ML の 3 つの方法でモデルを構築できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure ML Studio**: Web ベースの統合開発環境",
                "**Designer**: ドラッグ & ドロップで ML パイプラインを構築",
                "**Automated ML(自動 ML)**: アルゴリズム / ハイパーパラメータの自動探索",
                "**Notebooks**: Jupyter ベースの開発環境",
                "**Compute Instance / Cluster**: GPU 含む計算リソース",
                "**Datasets / Datastores**: データ管理",
                "**Model Registry**: モデルのバージョン管理",
                "**Endpoints**: 推論デプロイ(リアルタイム / バッチ)",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "自動 ML(Automated ML)",
          blocks: [
            {
              type: "p",
              text: "**Automated ML** はコードを書かずにモデルを構築できる機能。データセット + タスク種別(分類 / 回帰 / 時系列予測)を指定するだけで、複数のアルゴリズム + ハイパーパラメータの組合せを自動で探索し、最良モデルを返します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**対応タスク**: 分類 ・ 回帰 ・ 時系列予測 ・ コンピュータビジョン ・ NLP",
                "**前処理の自動化**: 欠測補完 ・ スケーリング ・ One-hot 化",
                "**特徴量エンジニアリング**: 自動生成 + 選択",
                "**モデル比較**: AUC / F1 / RMSE などで自動評価",
                "**説明可能性**: SHAP ベースの特徴量重要度",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "MLOps と監視",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pipelines**: 再現可能な ML ワークフロー",
                "**Experiments**: 実験ごとの結果管理",
                "**MLflow 統合**: オープン標準の実験管理",
                "**Data Drift Monitoring**: データ分布の変化を検知",
                "**Model Drift**: モデル性能の劣化を検知",
                "**A/B テスト ・ シャドーデプロイ**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Azure AI Vision(コンピュータビジョン)",
      overview:
        "Azure AI Vision・Custom Vision・Face・Document Intelligence を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Azure AI Vision の主要機能",
          blocks: [
            {
              type: "p",
              text: "**Azure AI Vision(旧 Computer Vision)** は学習済モデルで画像を解析する API サービス。コードを書かずに以下の機能を呼び出せます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**画像分類**: 画像全体のラベル付け",
                "**物体検出**: 物体の位置(バウンディングボックス)+ ラベル",
                "**画像説明**: 画像内容の自然言語説明文を生成",
                "**OCR(Read API)**: 画像 / PDF からテキスト抽出",
                "**ブランド検出**: 既知のロゴを検出",
                "**コンテンツモデレーション**: 成人向け / 暴力的コンテンツの検出",
                "**画像タグ付け**: 多数の説明タグを自動付与",
                "**サムネイル生成**: スマートクロップで重要部分を抽出",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Custom Vision",
          blocks: [
            {
              type: "p",
              text: "**Custom Vision** は **独自データで** 画像分類 / 物体検出モデルを学習できるサービス。少数(数十枚〜)のラベル付き画像から転移学習でカスタムモデルを構築でき、**ノーコードで GUI から** 操作可能です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**プロジェクトタイプ**: 分類(複数 / 単一ラベル)・ 物体検出",
                "**転移学習ベース**: 少データでも実用精度",
                "**エクスポート**: TensorFlow Lite / ONNX / CoreML / Docker でエッジデプロイ可能",
                "**用途例**: 製品検査 ・ 種類判別 ・ 在庫認識",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Face と Document Intelligence",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI Face**: 顔検出 ・ 識別 ・ 属性(年齢 ・ 表情)・ 1 対 1 / 1 対 N 認証",
                "**Azure AI Document Intelligence(旧 Form Recognizer)**: 請求書 ・ レシート ・ ID ・ 名刺 ・ W-2 などの定型文書から構造化データを抽出。事前構築モデル + カスタムモデル両対応",
                "**用途例**: 経費精算自動化 ・ 銀行小切手処理 ・ 保険書類 OCR",
              ],
            },
            {
              type: "intuition",
              title: "Vision サービスの選び分け",
              body: "汎用画像なら **AI Vision**、独自データの分類 / 検出なら **Custom Vision**、顔特化なら **Face**、定型文書 OCR なら **Document Intelligence**、というのが Microsoft の標準パターンです。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Azure AI Language(自然言語処理)",
      overview:
        "Azure AI Language の主要機能と Translator・Speech の概要を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Azure AI Language の主要機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**言語検出**: 入力テキストの言語を識別",
                "**感情分析**: ポジティブ / ネガティブ / ニュートラル",
                "**主要フレーズ抽出**: 文書の重要キーワードを抽出",
                "**エンティティ認識(NER)**: 人名 ・ 場所 ・ 組織 ・ 日付などの抽出",
                "**個人識別情報(PII)検出**: 氏名 ・ 電話 ・ メール ・ クレカなどを検出 / マスキング",
                "**テキスト要約**: 抽出型 / 抽象型(生成型)要約",
                "**質問応答(Question Answering)**: FAQ ベースの回答生成",
                "**会話言語理解(CLU)**: 意図 + エンティティ抽出",
                "**カスタムテキスト分類 / NER**: 独自データで分類器構築",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Translator と Speech",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI Translator**: 100 以上の言語に対応する機械翻訳",
                "**カスタム Translator**: 独自対訳データで業界特化翻訳",
                "**Document Translation**: 文書全体の翻訳(レイアウト保持)",
                "**Speech to Text**: 音声 → テキスト",
                "**Text to Speech**: テキスト → 音声(ニューラル音声)",
                "**Speech Translation**: 音声 → 翻訳済音声 / テキスト",
                "**Speaker Recognition**: 話者識別",
                "**Custom Speech / Custom Voice**: 独自データで音声モデル",
              ],
            },
            {
              type: "intuition",
              title: "Microsoft の音声合成は『感情』『キャラクター』対応",
              body: "Azure の Neural TTS は **数百のニューラル音声 ・ 多言語 ・ 感情(喜び / 悲しみ / 怒り)・ スタイル(ニュース読み / カジュアル)** に対応。会話 AI ・ オーディオブック ・ ナレーション生成でビジネス活用が進んでいます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Azure OpenAI Service と生成 AI",
      overview:
        "Azure OpenAI Service・基盤モデル・プロンプト・RAG を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Azure OpenAI Service の特徴",
          blocks: [
            {
              type: "p",
              text: "**Azure OpenAI Service** は OpenAI の基盤モデル(GPT-4 / GPT-4o / o1 / DALL-E / Whisper など)を **Azure 上のエンタープライズ環境** で利用できるサービス。**OpenAI API との違い** は、Azure の **コンプライアンス ・ プライベートネットワーク ・ Active Directory 認証** が利用できる点です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**提供モデル**: GPT-4 / GPT-4o / o1 / GPT-3.5 / DALL-E 3 / Whisper / Embeddings",
                "**プライベートネットワーク**: Private Endpoint / VNet 統合",
                "**データ取扱い**: 入力データはモデル学習に使われない契約",
                "**RBAC**: Azure AD 統合の細かい権限制御",
                "**コンテンツフィルタ**: 入出力の安全性スキャン",
                "**料金**: 入出力トークン数 + 使用モデルで課金",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Azure AI Studio と Azure AI Foundry",
          blocks: [
            {
              type: "p",
              text: "**Azure AI Foundry**(旧 Azure AI Studio)は生成 AI アプリケーション構築の統合プラットフォーム。OpenAI モデル + Microsoft / Meta / Mistral などのモデルを **モデルカタログ** から選んで利用できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**モデルカタログ**: 複数ベンダーの基盤モデルを一覧 / 比較",
                "**Prompt Flow**: プロンプト + RAG + ガードレールのオーケストレーション",
                "**Agent Service**: エージェント機能(ツール使用 + 自律実行)",
                "**Evaluation**: モデル / プロンプト評価",
                "**Content Safety**: 不適切コンテンツの遮断",
                "**Fine-tuning**: 独自データでの微調整",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "RAG とプロンプトエンジニアリング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI Search(旧 Cognitive Search)**: ベクトル + キーワードのハイブリッド検索",
                "**RAG パターン**: AI Search + Azure OpenAI の組合せが標準",
                "**プロンプトの 5 要素**: 役割 / 文脈 / タスク / 出力形式 / 制約",
                "**Few-shot / Chain-of-Thought**: 応用テクニック",
                "**Function Calling / Tool Use**: LLM に関数を呼ばせる",
                "**On Your Data**: Azure OpenAI に検索データソースを直接結びつける機能",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Azure AI Search とナレッジマイニング",
      overview:
        "全文検索 ・ ベクトル検索 ・ AI Enrichment を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Azure AI Search の機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**全文検索**: BM25 / TF-IDF ベース",
                "**ベクトル検索**: 埋め込みベクトルの類似度検索(意味検索)",
                "**ハイブリッド検索**: 全文 + ベクトル + リランキング",
                "**スコアリングプロファイル**: フィールドごとの重み調整",
                "**ファセット ・ フィルタ**: 検索結果の絞り込み",
                "**自動補完 ・ サジェスト**",
                "**地理空間検索**: 距離 ・ 範囲フィルタ",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "AI Enrichment",
          blocks: [
            {
              type: "p",
              text: "**AI Enrichment** は検索インデックス構築時に Azure AI サービスを **自動適用** する機能。例えば、PDF 文書をインデックス化する際に、(1) Document Intelligence で OCR、(2) AI Language で言語検出 / 感情 / エンティティ抽出、(3) AI Vision で画像説明 を自動付与できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Skills**: 個別の AI 処理(OCR、エンティティ抽出など)",
                "**Skillset**: 複数 Skill の組合せ",
                "**Indexer**: データソース → Skillset → インデックスの自動パイプライン",
                "**Knowledge Store**: 抽出済情報を別ストアに保存",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Microsoft Copilot ファミリ",
      overview:
        "Microsoft 365 Copilot ・ Copilot Studio ・ GitHub Copilot を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Microsoft Copilot ファミリの全体像",
          blocks: [
            {
              type: "p",
              text: "Microsoft の生成 AI アシスタントブランドは **Copilot**。職種 / 製品ごとに最適化されたバリエーションがあり、AI-900 では各 Copilot の守備範囲を問う問題が頻出します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Microsoft 365 Copilot**: Word / Excel / PowerPoint / Outlook / Teams 統合の業務 AI",
                "**Copilot for Sales**: CRM 連携の営業支援",
                "**Copilot for Service**: カスタマーサービス向け",
                "**Copilot for Security**: セキュリティ運用支援",
                "**Copilot Studio**: ノーコードのエージェント / Bot ビルダー",
                "**GitHub Copilot**: コード補完 ・ 説明 ・ テスト生成",
                "**Microsoft Copilot(Bing Chat の後継)**: Web ベースの汎用 Copilot",
                "**Copilot in Power BI**: BI / レポート生成支援",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Copilot Studio とエージェント",
          blocks: [
            {
              type: "p",
              text: "**Microsoft Copilot Studio** はノーコード / ローコードで **カスタム Copilot(エージェント)を構築** できる Power Platform の一部。会話フロー設計 ・ Topic / Entity 定義 ・ 既存システム連携(Power Automate)・ ガードレール設定が GUI で行えます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Topics**: 会話の分岐単位",
                "**Entities**: 抽出するパラメータ(日付 ・ 商品名など)",
                "**Skills / Actions**: 外部システムとの連携",
                "**Generative answers**: ナレッジソースから自動応答",
                "**Channel**: Teams ・ Web ・ SMS などへの公開",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "ユースケース別 Azure AI サービス選択",
      overview:
        "AI-900 で頻出する『この要件にはどのサービス』のパターンを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "代表的なユースケースとサービス選択",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**社内 FAQ チャットボット**: Azure AI Search(RAG)+ Azure OpenAI Service",
                "**コールセンター音声分析**: Speech to Text → AI Language(感情)→ Power BI",
                "**請求書 / 領収書の OCR + 自動仕訳**: Document Intelligence + Power Automate",
                "**異常検知**: Azure ML + Anomaly Detector(現在は ML 統合)",
                "**需要予測**: Azure ML 自動 ML(時系列)",
                "**翻訳付き多言語チャット**: Translator + Speech",
                "**画像内容モデレーション**: AI Vision Content Moderation / Azure AI Content Safety",
                "**コードアシスタント**: GitHub Copilot",
                "**Microsoft 365 内での業務支援**: Microsoft 365 Copilot",
                "**ノーコード社内 Bot**: Copilot Studio",
                "**製造業の不良品検出**: Custom Vision",
                "**身分証認証**: Azure AI Face + Document Intelligence",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "リソースとセキュリティ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure AI services リソース**: 複数の AI サービスを 1 つのキーで利用",
                "**個別リソース**: サービスごとに独立(粒度の細かい権限管理)",
                "**Cognitive Services Multi-service Resource**: 旧名、現在は Azure AI services",
                "**API キー / Azure AD 認証 / Managed Identity**: 認証方式",
                "**Private Endpoint**: VNet 内のみで利用",
                "**Customer-Managed Key(CMK)**: 暗号鍵を顧客側で管理",
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
                "**第 2 章**: AI ⊃ ML ⊃ DL ⊃ Gen AI / Microsoft 責任ある AI 6 原則",
                "**第 3 章**: Azure ML Studio / Designer / Automated ML / Pipelines / Endpoints",
                "**第 4 章**: AI Vision / Custom Vision / Face / Document Intelligence の使い分け",
                "**第 5 章**: AI Language(感情/エンティティ/PII/要約)/ Translator / Speech",
                "**第 6 章**: Azure OpenAI Service / Azure AI Foundry / Prompt Flow",
                "**第 7 章**: Azure AI Search(全文 + ベクトル + ハイブリッド)/ AI Enrichment",
                "**第 8 章**: Microsoft 365 Copilot / Copilot Studio / GitHub Copilot",
                "**第 9 章**: ユースケース → 適切なサービスの即答パターン",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**40 〜 60 問 / 60 分** = 1 問 1 〜 1.5 分",
                "**サービス名のスペル**: 英語版受験では正確なサービス名選択が必須",
                "**新旧サービス名**: Cognitive Services → Azure AI services / Form Recognizer → Document Intelligence など改称が頻出",
                "**Microsoft 6 原則** は順序ではなく内容で覚える",
                "**消去法**: AWS / Google のサービス名が混じる選択肢は誤答",
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
              text: "AI-900 合格 → **AI-102(Azure AI Engineer Associate)** が王道。クラウド全般を強化したいなら **AZ-104(Azure Administrator Associate)** や **AZ-900(Azure Fundamentals)** へ進むのも有力です。AWS 派と二刀流にしたい場合は本サイトの[AWS AI Practitioner](/certs/aws-ai-practitioner)も。",
            },
            {
              type: "practical",
              title: "AI-900 のキャリア活用",
              body: "AI-900 は **Microsoft 認定として明示的に履歴書 / LinkedIn に書ける** 資格。コンサルタント ・ SE ・ PM が **Azure AI を語る信頼性** を補強します。本サイトの[生成 AI パスポート](/certs/genai-passport) ・ [G 検定](/certs/g-test)と組み合わせると **概念面 + Azure 実装面** の両軸で AI リテラシーを示せます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch11",
      number: 11,
      title: "Azure AI Foundry の全体像(2024-2025)",
      overview:
        "2024 年に Azure AI Studio から **Azure AI Foundry** へ大幅リブランド。Hub + Project 階層 + Agent Service + Model Catalog 1,800+ モデル統合の **Microsoft AI 開発の中核プラットフォーム**になりました。",
      sections: [
        {
          id: "ch11-sec1",
          number: "11.1",
          title: "Azure AI Foundry とは",
          blocks: [
            {
              type: "p",
              text: "**Azure AI Foundry**(2024 末リブランド ・ 旧 Azure AI Studio)は、**生成 AI / 古典 ML / Agent / RAG / Fine-tune / Evaluation** を統合した Microsoft の AI 開発 SaaS です。**Hub(管理 / セキュリティ)+ Project(個別開発)** の 2 階層構造で、エンタープライズ規模の AI 開発に対応します。",
            },
            { type: "h3", text: "Hub と Project の役割" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hub**: 組織共通の設定 ・ 接続 ・ Compute ・ Storage ・ Key Vault ・ Container Registry を管理(IT 部門 / Admin が作成)",
                "**Project**: 開発者 / チーム単位のワークスペース(Hub 内に複数作成可)・ Model / Endpoint / Evaluation / Tracing",
                "**Resource 共有**: Hub レベルで Connection(Azure OpenAI / AI Search / Storage 等)を定義 → Project に継承",
                "**Identity-based Access**: Microsoft Entra ID(旧 Azure AD)で Role-based Access Control",
              ],
            },
            {
              type: "intuition",
              title: "💡 旧 Azure ML との関係",
              body: "**Azure AI Foundry と Azure ML は 2024-2025 で統合進行中**。**Generative AI / Agent / Foundation Model** は Foundry 推奨 ・ **Classical ML / AutoML / 大規模 Custom Training** は Azure ML が引き続き強い。両方の Workspace は相互参照可能(Hub レベルで Azure ML 統合)。",
            },
          ],
        },
        {
          id: "ch11-sec2",
          number: "11.2",
          title: "Model Catalog と Foundation Models",
          blocks: [
            {
              type: "p",
              text: "**Foundry Model Catalog** は **1,800+ モデル**(2025 時点)を統一インタフェースで提供します。AI-900 でも各モデル種別の使い分けが問われます。",
            },
            { type: "h3", text: "モデルカテゴリ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure OpenAI**: GPT-4o / 4o-mini / o1 / o3-mini / DALL-E 3 / Whisper / Embeddings(Provisioned PTU 対応)",
                "**Microsoft Phi**: Phi-3 / Phi-3.5 / Phi-4(小規模 ・ オープンウェイト ・ オンデバイス可能)",
                "**Meta Llama**: Llama 3 / 3.1 / 3.2(Vision) / 3.3(MaaS で利用)",
                "**Mistral**: Mistral Large / Small / Codestral(MaaS)",
                "**Cohere**: Command R / R+ / Embed / Rerank(MaaS)",
                "**DeepSeek**: DeepSeek-V3 / R1(2025 追加)",
                "**NVIDIA NIM**: Nemotron / 等(専用ホスト)",
                "**Hugging Face Open**: 数千の OSS モデルを Direct Deploy",
              ],
            },
            { type: "h3", text: "デプロイ形態" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pay-as-you-go(Standard)**: Token 単価従量(OpenAI / Llama / Mistral / Cohere)",
                "**Provisioned Throughput(PTU)**: 容量予約 ・ 一定 RPM 保証 ・ 月 / 年契約で割引",
                "**Serverless API(MaaS)**: Pay-per-token + マネージド SLA(OSS モデルもこの形態)",
                "**Managed Compute**: 専用 VM へデプロイ ・ カスタム Container / Fine-tuned Model",
              ],
            },
          ],
        },
        {
          id: "ch11-sec3",
          number: "11.3",
          title: "Prompt Flow と Tracing",
          blocks: [
            {
              type: "p",
              text: "**Prompt Flow** は LLM ワークフロー(DAG)を **GUI / Code / VS Code 拡張** で開発できる機能。LangChain / LangGraph の Microsoft 公式版です。",
            },
            { type: "h3", text: "Prompt Flow の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Flow DAG**: Python Node + LLM Node + Tool Node を Graph 接続",
                "**Variant**: 同 Node の Prompt バリエーション比較(A/B Test 風)",
                "**Bulk Test**: テストデータセットで一括評価",
                "**Evaluation Flow**: LLM-as-Judge / Built-in Metric で自動採点",
                "**Endpoint Deploy**: Flow を REST API として 1-Click デプロイ",
                "**Tracing**(OpenTelemetry 互換): 各 LLM 呼出のレイテンシ ・ Token / Cost / Input / Output を Trace",
              ],
            },
            {
              type: "practical",
              title: "Prompt Flow vs Direct OpenAI",
              body: "**簡単なチャット**: Azure OpenAI SDK で直接 OK。**RAG / Multi-step / 評価 / 監査が必要**: Prompt Flow。**Foundry Agent Service** は Prompt Flow より一段抽象化された Agent 開発 API。**段階的に複雑になる場合は Direct → Flow → Agent** と進化させるのが王道。",
            },
          ],
        },
        {
          id: "ch11-sec4",
          number: "11.4",
          title: "Foundry Agent Service",
          blocks: [
            {
              type: "p",
              text: "**Foundry Agent Service**(2024 末 - 2025 GA)は、**OpenAI Assistants API 互換**の Azure ホスティング Agent プラットフォーム。Multi-turn + Tool 呼出 + Memory + File Search を統合します。",
            },
            { type: "h3", text: "Agent Service の構成要素" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Assistant**: 役割 + Tools + Model 定義",
                "**Thread**: 会話履歴を保持(Multi-turn の Context)",
                "**Run**: Thread に対する 1 ステップ実行",
                "**Tools**: File Search(RAG)・ Code Interpreter(Python 実行)・ Function Calling(自社 API)・ Azure AI Search / Logic Apps / Functions / Bing Grounding 等の統合",
                "**Built-in Tools**(2024+): Azure Functions / Logic Apps / AI Search / Bing Search を Tool として直接利用",
              ],
            },
            { type: "h3", text: "Multi-Agent / Agent Orchestration" },
            {
              type: "p",
              text: "**Semantic Kernel**(Microsoft の AI Orchestration FW)+ **AutoGen**(Microsoft Research の Multi-Agent FW)+ **Foundry Agent Service** の組合せで、**Supervisor + Sub-agents** の階層構造が構築可能。**Project Astra**(Google)や **Bedrock Multi-Agent**(AWS)と同等の Multi-Agent 戦略を Azure でも実現します。",
            },
          ],
        },
        {
          id: "ch11-sec5",
          number: "11.5",
          title: "Content Safety と Responsible AI",
          blocks: [
            {
              type: "p",
              text: "**Azure AI Content Safety** は Microsoft の **Responsible AI** の柱で、Foundry / Azure OpenAI に標準統合されています。",
            },
            { type: "h3", text: "Content Safety の機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Text / Image Harm Detection**: Hate / Sexual / Violence / Self-Harm の 4 カテゴリ × 0-7 Severity",
                "**Prompt Shields**: Direct Prompt Injection(ユーザー入力)+ Indirect(文書埋込)検出",
                "**Groundedness Detection**: RAG での回答が Source と乖離していないか検証(ハルシネーション抑制)",
                "**Protected Material Detection**: 著作権付きコード / テキストの出力を検出",
                "**Custom Categories**: 自社固有の禁止トピックを学習",
                "**Filter Configurations**: Severity / Annotation / Block 等の設定 ・ 各モデル毎にカスタマイズ可",
              ],
            },
            {
              type: "intuition",
              title: "💡 Content Safety は独立 API でも使える",
              body: "Foundry 外の自社 LLM 推論にも **`/contentsafety` API** で Content Safety を適用できます(Azure OpenAI 経由でなくても OK)。**Open AI 互換 LLM / Self-hosted Llama / Other Cloud** にも統一的に Safety 層を被せられる柔軟性が強み。",
            },
          ],
        },
      ],
    },
    {
      id: "ch12",
      number: 12,
      title: "Microsoft Copilot / Copilot Studio エコシステム",
      overview:
        "Microsoft 365 Copilot を中心とした Copilot ファミリの全体像、Copilot Studio による Low-Code Agent 構築、企業導入の実践を整理します。",
      sections: [
        {
          id: "ch12-sec1",
          number: "12.1",
          title: "Microsoft 365 Copilot ファミリ",
          blocks: [
            {
              type: "p",
              text: "**Microsoft 365 Copilot** は Microsoft が提供する企業向け汎用 AI アシスタント。AI-900 でも Copilot ファミリの使い分けが頻出問題です。",
            },
            { type: "h3", text: "Copilot 製品マトリックス(2024-2025)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Microsoft 365 Copilot**: $30 / user / month(M365 E3/E5 等の追加)・ Word / Excel / PowerPoint / Outlook / Teams / OneNote 統合 ・ Graph API 経由で社内データ活用",
                "**Microsoft 365 Copilot Chat**(旧 Bing Chat Enterprise / Free): 無料 ・ Web Grounding ・ Enterprise Data Protection",
                "**Copilot Pro**($20 / month): 個人向け Web / Mobile + M365 個人版統合",
                "**GitHub Copilot**: $10/user/m(Individual)/ $19(Business)/ $39(Enterprise)・ コード補完 + Chat + Agents",
                "**Copilot in Power BI**: Premium / Fabric F64+ ・ NL → Visual / DAX 補完",
                "**Copilot in Dynamics 365**: Sales / Service / Marketing / Finance 各モジュール内 AI",
                "**Security Copilot**: SOC 向け ・ Threat Hunting + Incident Response 補助",
                "**Copilot for Microsoft Edge**: ブラウザ統合 ・ ページ要約 / 比較",
                "**Copilot+ PC**(2024): NPU 40+ TOPS 搭載 PC 専用 ・ Recall / Cocreator 等のオンデバイス機能",
              ],
            },
            {
              type: "intuition",
              title: "💡 Copilot を選ぶ基本フロー",
              body: "**個人で文書 / コード作業**: Copilot Pro / GitHub Copilot。**チーム / 社内文書統合**: M365 Copilot。**業界アプリ統合**: Dynamics Copilot。**社内独自業務**: **Copilot Studio で Custom Copilot 開発**。**セキュリティチーム**: Security Copilot。",
            },
          ],
        },
        {
          id: "ch12-sec2",
          number: "12.2",
          title: "Copilot Studio による Custom Copilot 開発",
          blocks: [
            {
              type: "p",
              text: "**Microsoft Copilot Studio**(旧 Power Virtual Agents)は **Low-Code で Custom Copilot ・ Agent ・ Plugin を構築**できる SaaS。M365 Copilot を社内業務に拡張する公式手段です。",
            },
            { type: "h3", text: "Copilot Studio の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Topic / Trigger**: ユーザー発話の意図に応じた会話フロー(GUI)",
                "**Generative Actions**: LLM が動的に行動を選択(Procedural な Topic と組合せ)",
                "**Knowledge Sources**: SharePoint / OneDrive / Web URL / Dataverse / Public Web を RAG ソースに",
                "**Connectors**: 1,400+ の Power Platform Connector(Salesforce / Jira / ServiceNow 等)",
                "**Plugins**: M365 Copilot に Plugin として公開可 → ユーザーが Copilot 内で利用",
                "**Channel Deployment**: Teams / M365 Copilot / Web / Slack / Facebook 等にデプロイ",
                "**Authentication**: Entra ID / OAuth で社内データ安全アクセス",
                "**Autonomous Agents**(2024+ GA): Trigger ベースで人間操作なしに動く Agent(例: メール監視 → 自動分類 / 返信)",
              ],
            },
            { type: "h3", text: "Copilot Studio vs Foundry Agent Service" },
            {
              type: "p",
              text: "**Copilot Studio**: Low-Code / Business User 向け / M365 統合が強い。**Foundry Agent Service**: Pro-Code / Developer 向け / 高度なカスタマイズ + Multi-Agent。**両方を併用** することも一般的(Studio で UI / Foundry で複雑ロジック)。",
            },
          ],
        },
        {
          id: "ch12-sec3",
          number: "12.3",
          title: "Microsoft Graph と Copilot 連携",
          blocks: [
            {
              type: "p",
              text: "**Microsoft Graph** は M365 / Azure / Dynamics のメタデータ + コンテンツへの統一 API。M365 Copilot が **社内文書 / メール / カレンダー / 連絡先 / Teams メッセージ** を文脈として活用する基盤です。",
            },
            { type: "h3", text: "Graph と Copilot の関係" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Semantic Index**: Graph のコンテンツを **Vector + Text** で Index 化 → Copilot の RAG ソース",
                "**Graph Connectors**: 外部システム(Salesforce / ServiceNow / Confluence 等)を Graph に取込み → Copilot で横断検索可能に",
                "**Permission Trimming**: Entra ID の権限を尊重 → ユーザーがアクセスできない文書は Copilot からも見えない",
                "**Sensitivity Labels**: Microsoft Purview の機密ラベルが Copilot 出力にも適用",
              ],
            },
            {
              type: "practical",
              title: "Copilot 導入の前提整理",
              body: "**M365 Copilot 導入前のチェック**: ① **データガバナンス**(Sensitivity Label / Purview DLP / Conditional Access)② **権限の整理**(SharePoint / OneDrive の Over-share を Purview で洗い出し)③ **教育**(プロンプト / 出力検証 / ハルシネーション理解)④ **パイロット部門選定**(50-100 名 ・ 3 ヶ月で ROI 測定)。**社内ガバナンスが整っていないと Copilot が機密データを横断引用してしまう** リスクがあります。",
            },
          ],
        },
        {
          id: "ch12-sec4",
          number: "12.4",
          title: "Copilot for Microsoft 365 の業務効果と ROI",
          blocks: [
            {
              type: "p",
              text: "Microsoft の公式調査(WorkLab / Forrester)によれば、Copilot 導入で以下の業務効率向上が報告されています。",
            },
            { type: "h3", text: "代表的な業務改善指標" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**会議要約**: Teams Meeting Notes 自動生成で会議後タスク作成 30-50% 時短",
                "**メール処理**: Outlook Summarize + Draft で受信メール処理時間 20-30% 削減",
                "**文書作成**: Word Copilot で初稿生成 → 編集に集中 → ライティング時間 40-60% 削減",
                "**プレゼン**: PowerPoint Copilot で構造化されたドラフト ・ デザイン提案",
                "**データ分析**: Excel Copilot で Pivot / Chart / 数式提案 ・ アナリスト民主化",
                "**コード**: GitHub Copilot で開発者の生産性 55%+ 向上(Microsoft / GitHub 調査)",
              ],
            },
            { type: "h3", text: "ROI 測定の指標" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Time Saved**: 業務当たり時間削減 × 平均時給で金額換算",
                "**Quality**: 文書 / コードの Review 通過率 / バグ密度",
                "**Adoption**: アクティブユーザー率 / 機能別利用率(Power BI Adoption Insights / Microsoft Viva Insights で計測)",
                "**Sentiment**: 従業員満足度 ・ 離職率の変化",
              ],
            },
          ],
        },
        {
          id: "ch12-sec5",
          number: "12.5",
          title: "Azure AI セキュリティとガバナンス",
          blocks: [
            {
              type: "p",
              text: "AI-900 はセキュリティ / ガバナンスも問われます。Azure AI / Foundry / Copilot のセキュリティ機能を整理します。",
            },
            { type: "h3", text: "セキュリティ機能の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Identity**: Microsoft Entra ID(MFA / Conditional Access / Privileged Identity Management)",
                "**Network**: Private Endpoint + VNet + Network Security Group + Private Link",
                "**Data Encryption**: Customer-Managed Key(CMK)+ Always Encrypted + Confidential Computing(TEE)",
                "**Data Loss Prevention(DLP)**: Microsoft Purview で機密データの Copilot 出力制御",
                "**Audit**: Azure Monitor + Log Analytics + Microsoft Purview Audit",
                "**Compliance**: GDPR / HIPAA / SOC 2 / ISO 27001 / FedRAMP / 個人情報保護法対応",
              ],
            },
            { type: "h3", text: "Customer Copyright Commitment(CCC)" },
            {
              type: "p",
              text: "**Microsoft の Copilot Copyright Commitment**: 商用顧客が Copilot の出力で第三者に著作権侵害訴訟を提起された場合、Microsoft が法的責任を負う(2023 発表)。**Azure OpenAI / GitHub Copilot Business+ / M365 Copilot** が対象。Content Filter を無効化していないこと等の条件あり。",
            },
            {
              type: "practical",
              title: "Microsoft の責任ある AI 原則",
              body: "**6 原則**: ① Fairness(公平性)② Reliability & Safety(信頼性 ・ 安全性)③ Privacy & Security ④ Inclusiveness(包括性)⑤ Transparency ⑥ Accountability。**Responsible AI Standard v2**(2022 公開)で具体的な開発プロセスを定義 ・ **Responsible AI Dashboard** ・ **Responsible AI Toolbox**(OSS)で実装支援。",
            },
          ],
        },
      ],
    },
  ],
};
