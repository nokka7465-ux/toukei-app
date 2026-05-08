import type { Textbook } from "@/types/content";

export const gcpMlEngineerTextbook: Textbook = {
  levelSlug: "gcp-ml-engineer",
  title: "Google Cloud Professional Machine Learning Engineer 教科書",
  intro:
    "**Google Cloud Professional Machine Learning Engineer** は、Google Cloud 認定の **Professional レベル** で、**ML パイプラインの設計 ・ 構築 ・ デプロイ ・ 運用** ができるエンジニアを認定する高度試験です。**AWS ML Engineer Associate(MLA-C01)・ Azure AI Engineer(AI-102)** と並ぶ三大クラウド ML 認定の 1 つで、**Vertex AI ・ Gemini ・ BigQuery ML ・ TensorFlow / PyTorch on GCP ・ Kubeflow** など Google Cloud のフル AI スタックを扱います。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "GCP ML Engineer ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 GCP 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**Professional ML Engineer** は GCP 認定の **Professional レベル** に位置する高度認定。**Generative AI Leader(Foundational)** より上位で、**ML パイプラインの設計者 ・ 実装者** を対象とします。Vertex AI を中心に、**TensorFlow / PyTorch / Kubeflow / BigQuery ML** を組合せた本格的な ML システムを設計できる力を測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Google Cloud",
                "**形式**: オンライン監督受験 or テストセンター",
                "**問題数 / 時間**: 50 〜 60 問 / 120 分",
                "**回答方式**: 選択式(単一 / 複数)+ ケーススタディ",
                "**合格スコア**: 公開なし(参考: 約 70%)",
                "**有効期限**: 2 年(再認定が必要)",
                "**受験料**: 200 USD(参考)",
                "**前提知識**: ML / Python / SQL / Cloud Architecture の実務 3 年以上推奨",
              ],
            },
            { type: "h3", text: "GCP 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: Cloud Digital Leader / Generative AI Leader",
                "**Associate**: Associate Cloud Engineer / Associate Data Practitioner",
                "**Professional**: Cloud Architect / Data Engineer / **ML Engineer(本資格)** / Cloud Developer / Security / DevOps / Network",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "公式試験ガイドのドメイン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Architecting low-code AI solutions**(約 13%): AutoML / BQML / 学習済 API",
                "**Collaborating within and across teams to manage data and models**(約 14%): MLOps / 共同作業",
                "**Scaling prototypes into ML models**(約 18%): プロトタイプ → 本番モデル化",
                "**Serving and scaling models**(約 20%): デプロイ ・ オンライン / バッチ予測 ・ スケーリング",
                "**Automating and orchestrating ML pipelines**(約 22%): Vertex AI Pipelines / Kubeflow / Cloud Composer",
                "**Monitoring AI solutions**(約 13%): Model Monitoring / ドリフト検出 ・ 再学習",
              ],
            },
            { type: "h3", text: "200 〜 300 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Month 1**: GCP 基礎 + ML 基礎(本サイトの[Generative AI Leader 教科書](/certs/gcp-gen-ai-leader/textbook)で土台)",
                "**Month 2**: Vertex AI フル機能(AutoML / Custom Training / Pipelines / Endpoints)",
                "**Month 3**: BigQuery ML + データエンジニアリング",
                "**Month 4**: TensorFlow / PyTorch on GCP + Kubeflow",
                "**Month 5**: MLOps + Model Monitoring + 模擬試験",
              ],
            },
            {
              type: "intuition",
              title: "Google Cloud Skills Boost + 実機ハンズオン必須",
              body: "Professional レベルは **実機での Vertex AI 操作経験** が前提。**Google Cloud Skills Boost(無料)+ 300 USD クレジット付き無料アカウント** で本格的にハンズオンするのが王道。**Coursera のスペシャライゼーション** も効果的です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Vertex AI のフル機能",
      overview:
        "Vertex AI のサブサービスを Professional レベルで整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Vertex AI の主要コンポーネント",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Vertex AI Workbench**: マネージド Jupyter(JupyterLab + GCP 統合)",
                "**Vertex AI Studio**: 生成 AI のプロンプト ・ Tuning ・ 評価",
                "**Vertex AI Pipelines**: Kubeflow ベースの ML パイプライン",
                "**Vertex AI Feature Store**: 特徴量管理(Online + Offline serving)",
                "**Vertex AI Model Registry**: モデルバージョン管理",
                "**Vertex AI Endpoints**: オンライン推論",
                "**Vertex AI Batch Predictions**: バッチ推論",
                "**Vertex AI Model Monitoring**: ドリフト検出",
                "**Vertex AI Experiments**: 実験管理(MLflow 互換)",
                "**Vertex AI Tensorboard**: 学習可視化",
                "**Vertex AI Vizier**: ベイズ最適化サービス",
                "**Vertex AI Explanations**: 説明可能性(XRAI / Integrated Gradients / Sampled Shapley)",
                "**Vertex AI Matching Engine**: ベクトル類似度検索",
                "**Vertex AI Agent Builder**: ノーコードエージェント",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "AutoML と Custom Training",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AutoML Tables**: 表データの分類 / 回帰 / 時系列予測",
                "**AutoML Vision**: 画像分類 ・ 物体検出",
                "**AutoML Text**: テキスト分類 ・ エンティティ抽出 ・ 感情分析",
                "**AutoML Video**: 動画分類 ・ オブジェクトトラッキング",
                "**Custom Training**: TensorFlow / PyTorch / scikit-learn / XGBoost / Custom コンテナ",
                "**Pre-built Containers**: TF / PyTorch の標準環境",
                "**Custom Container**: Docker 任意イメージ",
                "**Hyperparameter Tuning(Vizier)**: ベイズ最適化",
                "**Distributed Training**: Multi-worker / Parameter Server / Reduction Server",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "計算リソースとコスト",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Machine Types**: n1 / n2 / e2 / a2(GPU)/ tpu-v3, v4, v5",
                "**TPU(Tensor Processing Unit)**: Google 自家製 AI チップ、TF / PyTorch / JAX 対応",
                "**TPU v5e**: 推論 ・ 中規模学習向け、コスト効率重視",
                "**TPU v5p**: 大規模学習向け、生成 AI などで使用",
                "**Spot VM**: 中断耐性ある学習で 60 〜 80% 割引",
                "**Committed Use Discounts(CUD)**: 1 / 3 年予約割引",
                "**Reserved Capacity**: 計画的キャパシティ",
                "**Custom Service Account**: 最小権限の原則",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "BigQuery ML と SQL ML",
      overview:
        "SQL から ML を扱える BQML を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "BigQuery ML(BQML)の特徴",
          blocks: [
            {
              type: "p",
              text: "**BQML** は SQL のみで ML を扱える Google 独自の機能。**データウェアハウス内で完結** し、データの移動が不要なため、**業務分析者がそのまま ML を始められる** 利点が大きい。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**サポートモデル**: 線形回帰 / ロジスティック / k-means / 行列分解 / ARIMA / Boosted Tree / DNN / Transformer / AutoML / Vertex 統合 / インポートモデル",
                "**ML.PREDICT**: 学習済モデルでの推論",
                "**ML.GENERATE_TEXT**: BQ から Gemini を呼出",
                "**ML.GENERATE_EMBEDDING**: ベクトル化",
                "**ML.UNDERSTAND_TEXT / ML.TRANSLATE / ML.ANNOTATE_IMAGE**: NLP / 翻訳 / 画像",
                "**Remote model**: Vertex AI モデルを BQML で呼出",
                "**Vector Search**: ベクトル類似度検索",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "BQML の使いどころ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**プロトタイピング**: SQL アナリストが ML を試作",
                "**大規模データの学習**: BQ 上で並列学習",
                "**Embedding 生成**: 大量テキスト → ベクトル化",
                "**バッチ推論**: 数十億行へ ML.PREDICT を一発実行",
                "**ハイブリッド構成**: BQML(プロトタイプ)→ Vertex AI(本番化)が王道",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "データエンジニアリング",
      overview:
        "Google Cloud の主要データサービスを ML 視点で整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "ストレージ ・ DB",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cloud Storage(GCS)**: オブジェクトストレージ、ML データレイクの中核",
                "**BigQuery**: マネージド DWH、列指向 + サーバレス",
                "**Cloud SQL**: マネージド MySQL / PostgreSQL / SQL Server",
                "**Spanner**: グローバル分散 RDB",
                "**Bigtable**: NoSQL ワイドカラム、IoT / 時系列",
                "**Firestore**: ドキュメント型 NoSQL",
                "**AlloyDB**: PostgreSQL 互換高性能 DB",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "ETL ・ オーケストレーション",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cloud Dataflow**: Apache Beam ベースのストリーム + バッチ ETL",
                "**Cloud Dataproc**: Hadoop / Spark マネージド",
                "**Cloud Composer**: マネージド Apache Airflow",
                "**Cloud Data Fusion**: GUI ベース ETL(CDAP ベース)",
                "**Cloud Pub/Sub**: メッセージング ・ ストリーミング",
                "**Cloud Run / Cloud Functions**: サーバレスコンピュート",
                "**Workflows**: ステートマシン形式のサービス連携",
                "**Eventarc**: イベント駆動連携",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Dataplex とデータガバナンス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Dataplex**: マルチクラウド データガバナンス + リネージ",
                "**Data Catalog**: メタデータカタログ",
                "**Cloud DLP(Sensitive Data Protection)**: 個人情報自動検出",
                "**IAM + Service Account**: 最小権限",
                "**VPC Service Controls**: ネットワーク境界",
                "**CMEK(Customer-Managed Encryption Keys)**: 顧客管理鍵",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "TensorFlow / PyTorch on GCP",
      overview:
        "GCP での DL フレームワーク活用を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "TensorFlow on GCP",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**TensorFlow Distribution Strategies**: MirroredStrategy / MultiWorkerMirroredStrategy / TPUStrategy / ParameterServerStrategy",
                "**tf.data**: 効率的なデータパイプライン",
                "**TFRecord**: 効率的なバイナリ形式",
                "**TF Hub**: 学習済モデル",
                "**TFX(TensorFlow Extended)**: 本番 ML パイプライン",
                "**Keras**: 高レベル API",
                "**Saved Model 形式**: GCP デプロイの標準",
                "**TFLite**: モバイル ・ エッジ",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "PyTorch on GCP",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**PyTorch Distributed**: DDP / FSDP / Pipeline Parallel",
                "**PyTorch on TPU**: PyTorch/XLA で TPU 利用",
                "**TorchServe**: 推論サーバ",
                "**TorchScript**: 本番デプロイ向けシリアライズ",
                "**Hugging Face Integration**: Transformers ライブラリ",
                "**PyTorch Lightning**: 学習ループの抽象化",
                "**ONNX Export**: フレームワーク間相互運用",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "JAX と分散学習",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**JAX**: 関数型 + XLA、Google 内部で多用",
                "**JAX on TPU**: TPU で最高性能",
                "**Flax / Haiku**: JAX の高レベル API",
                "**Ray + JAX**: 分散ハイパーパラメータ探索",
                "**MaxText / MaxDiffusion**: Google 製の大規模 LLM / 拡散モデル学習フレームワーク",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "MLOps と Vertex AI Pipelines",
      overview:
        "Kubeflow Pipelines をベースとした GCP の MLOps を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Vertex AI Pipelines",
          blocks: [
            {
              type: "p",
              text: "**Vertex AI Pipelines** は **Kubeflow Pipelines + TFX** をベースとしたサーバレス ML パイプラインサービス。**Component(部品)** を組合わせてワークフローを定義し、**Pipeline Definition(YAML)** にコンパイルしてサーバレス実行されます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**KFP DSL**: Python で Component を定義 + Pipeline を組立",
                "**Pre-built Components**: Google が提供する標準部品",
                "**Custom Component**: 任意 Docker イメージで独自処理",
                "**Pipeline Run**: 実行インスタンス",
                "**Pipeline Schedule**: 定期実行",
                "**Caching**: 同じ入力のステップは再実行をスキップ",
                "**Artifact Lineage**: データ → モデルの来歴追跡",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "実験管理とトレーサビリティ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Vertex AI Experiments**: ML 実験の比較管理",
                "**Vertex AI Tensorboard**: 学習指標の可視化",
                "**MLflow Integration**: オープンソース MLflow との互換",
                "**Cloud Source Repositories / GitHub**: コード管理",
                "**Cloud Build**: コンテナ自動ビルド",
                "**Artifact Registry**: コンテナイメージレジストリ",
                "**Cloud Deploy**: 継続的デリバリ",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "モデル昇格とガバナンス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Vertex AI Model Registry**: モデルバージョン管理",
                "**Model Aliases**: dev / staging / prod 等のラベル",
                "**Approval Workflow**: Cloud Build / Cloud Deploy で承認制御",
                "**Endpoint Traffic Splitting**: 複数モデルのトラフィック分散",
                "**Shadow Mode**: 本番影響なしで新モデル試験",
                "**A/B テスト**: トラフィック比率を段階的に",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "デプロイとサービング",
      overview:
        "オンライン / バッチ予測 ・ スケーリングを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "推論オプション",
          blocks: [
            {
              type: "def",
              title: "推論オプションの選び分け",
              body: "**1. Online Prediction**: ms 級のリアルタイム推論。Endpoint 経由\n\n**2. Batch Prediction**: 大量データの一括処理(GCS への CSV 出力など)\n\n**3. Online Serving with Co-located Feature Store**: 低遅延 + 特徴量取得統合\n\n**4. Edge / On-device**: TFLite で IoT / モバイル推論",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Auto-scaling**: トラフィック量で自動スケール",
                "**Min replicas / Max replicas**: スケール範囲設定",
                "**GPU / TPU 推論**: 高スループット用",
                "**Private Endpoint**: VPC 内のみ",
                "**Custom Serving Container**: 任意の推論サーバ",
                "**Optimized Tensorflow Runtime**: GCP 最適化版",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "コンテナとモデル形式",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pre-built Containers**: TensorFlow / PyTorch / scikit-learn / XGBoost",
                "**Custom Container**: HTTP サーバとして提供",
                "**Saved Model(TF)・ TorchScript / ONNX**: 標準モデル形式",
                "**NVIDIA Triton**: マルチフレームワーク推論サーバ",
                "**TensorRT**: NVIDIA GPU 推論最適化",
                "**Optimized TensorFlow Runtime(OTR)**: GCP 最適化",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "コスト最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Spot VM**: 学習で 60 〜 80% 割引(中断あり)",
                "**Reduction Server**: 分散学習の集約専用 VM、安価",
                "**Committed Use Discounts**: 1 / 3 年予約",
                "**Right Sizing**: 不要に大きい Machine Type を見直し",
                "**Min replicas = 0**: 不定期トラフィック向け",
                "**Cold Start**: 起動時の遅延、Min replicas で吸収",
                "**Distillation / Quantization**: モデル軽量化",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Model Monitoring とドリフト",
      overview:
        "Vertex AI Model Monitoring の仕組みを整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Vertex AI Model Monitoring",
          blocks: [
            {
              type: "def",
              title: "監視の 2 種類",
              body: "**Training-Serving Skew**: 学習データ vs 推論データの分布差。学習時のスキーマと比較\n\n**Prediction Drift**: 推論データの時間経過での分布変化。直近期間と過去期間を比較",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**統計指標**: KL Divergence / Jensen-Shannon / L-infinity / Chi-squared",
                "**Categorical Features**: 分布変化の検出",
                "**Numerical Features**: 統計量の変化",
                "**Sample Rate**: 全推論の何 % をサンプル",
                "**Alerting**: Cloud Monitoring と統合",
                "**Re-training Trigger**: ドリフト検出 → 再学習自動起動",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Vertex AI Explanations",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**XRAI**: 画像 ・ 動画向け説明",
                "**Integrated Gradients**: NN ベース、勾配ベース",
                "**Sampled Shapley**: ツリー / 表データ向け",
                "**Feature Importance**: グローバル + ローカル",
                "**Counterfactual Explanations**: 反実仮想",
                "**Online Explanations**: 推論時のリアルタイム説明",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "責任ある AI",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Google AI 原則 7 つ**: 公平性 / 偏見回避 / 安全性 / 説明責任 / プライバシー / 科学的卓越性 / 原則に沿う用途",
                "**Fairness Indicators**: バイアス指標(Equal Opportunity / Demographic Parity 等)",
                "**Vertex AI Safety**: 生成 AI の安全フィルタ",
                "**SynthID**: AI 生成物への透かし",
                "**Model Cards**: モデルの透明性ドキュメント",
                "**Data Cards**: 訓練データの記述",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "生成 AI と Gemini ファミリ",
      overview:
        "Gemini ・ Vertex AI Studio ・ RAG を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Gemini と Vertex AI Studio",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gemini ファミリ**: 2.5 Pro / 2.0 Flash / Nano",
                "**Imagen**: 画像生成",
                "**Veo**: 動画生成",
                "**Vertex AI Studio**: プロンプト試作 + Tuning + 評価",
                "**Vertex AI Model Garden**: 複数ベンダー基盤モデル(Llama / Mistral / Anthropic)",
                "**Function Calling**: モデルにツール呼出させる",
                "**Grounding(検索ベース)**: ハルシネーション抑制",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "RAG と Vertex AI Search",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Vertex AI Search**: マネージド全文 + ベクトル検索",
                "**Vertex AI Matching Engine**: 高性能ベクトル検索",
                "**Embedding API**: text-embedding / multimodal embedding",
                "**Hybrid Search**: ベクトル + キーワード + リランキング",
                "**Prompt Optimizer**: プロンプト最適化(Vertex AI 内蔵)",
                "**Context Caching**: 長コンテキストの再利用",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "Tuning と Distillation",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Supervised Fine-tuning**: ラベル付きデータで微調整",
                "**RLHF / RLAIF**: 強化学習ベース",
                "**Distillation**: 大モデル → 小モデル",
                "**Adapter / LoRA**: 部分微調整",
                "**Hyperparameter Tuning(Vizier)**: ベイズ最適化",
                "**Co-training / Self-training**: ラベルなしデータ活用",
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
                "**第 2 章**: Vertex AI サブサービス全体像 / TPU v5e vs v5p / Spot VM",
                "**第 3 章**: BQML 関数(ML.PREDICT / GENERATE_TEXT / GENERATE_EMBEDDING)",
                "**第 4 章**: GCS / BigQuery / Spanner / Bigtable / Pub/Sub / Composer",
                "**第 5 章**: TensorFlow Distribution Strategies / PyTorch/XLA / JAX",
                "**第 6 章**: Vertex AI Pipelines(Kubeflow ベース)/ Components / Caching",
                "**第 7 章**: Online vs Batch / Custom Container / Triton / TensorRT",
                "**第 8 章**: Training-Serving Skew vs Prediction Drift / Explanations 3 種",
                "**第 9 章**: Gemini / Imagen / Vertex AI Search / Function Calling / Grounding",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**50 〜 60 問 / 120 分** = 1 問 約 2 分。長文ケーススタディ問題は時間配分注意",
                "**Best Practice ベース** の出題: 『この要件で最もコスト効率 ・ 性能 ・ セキュリティ的に最適なのは?』",
                "**サービス名の正確性**: Vertex AI 統合前の旧名(AI Platform / Cloud Datalab 等)が混じる選択肢に注意",
                "**Coursera / Skill Boost の練習問題** を必ず受ける",
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
              text: "Professional ML Engineer 合格 → **Professional Data Engineer** で データ基盤側を強化、または **Professional Cloud Architect** で全体アーキテクトに進むのが王道。**三大クラウド ML Pro** を揃えるなら本サイトの[AWS MLA-C01](/certs/aws-ml-engineer)・[Azure AI-102](/certs/azure-ai-102)も。",
            },
            {
              type: "practical",
              title: "GCP ML Engineer のキャリア活用",
              body: "Professional ML Engineer は **AI / ML エンジニアの上位職** で評価が高く、**機械学習基盤の設計者 ・ MLOps エンジニア ・ AI ソリューションアーキテクト** などへの転身に強い。**Vertex AI 案件 ・ BQML 案件 ・ 大規模 LLM 学習** を扱う技術者として希少性が高い認定です。",
            },
          ],
        },
      ],
    },
  ],
};
