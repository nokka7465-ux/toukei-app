import type { Textbook } from "@/types/content";

export const databricksMlEngineerTextbook: Textbook = {
  levelSlug: "databricks-ml-engineer",
  title: "Databricks Certified Machine Learning Engineer Professional 教科書",
  intro:
    "**Databricks Certified ML Engineer Professional** は Databricks 上で ML を実装 ・ デプロイ ・ 監視する ML Engineer の **Professional 認定**。**MLflow / Feature Store / AutoML / Mosaic AI(Vector Search + Foundation Model API + Agent Framework)/ Unity Catalog Model Registry / Lakehouse Monitoring / Asset Bundle** の総合実装。**ML Associate 取得 + 実務 6 ヶ月-1 年**が前提です。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "ML Engineer ─ 試験概要と Databricks Lakehouse",
      overview: "試験形式 ・ DBR ML Runtime ・ Topic Area。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験基本情報",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**問題数 / 時間**: 60 問 / 120 分",
              "**合格点 / 受験料**: 70-75% ・ 200 USD",
              "**有効期限**: 2 年",
              "**前提**: ML Associate 取得 + Databricks 実務 6 ヶ月-1 年",
            ] },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Databricks Runtime for ML(DBR ML)",
          blocks: [
            { type: "p", text: "**DBR ML**: PyTorch / TensorFlow / Hugging Face / XGBoost / MLflow / Feature Store プリインストール。**LTS 版**(2 年サポート)・ **GPU 対応**(NVIDIA Driver + CUDA + cuDNN)。" },
          ],
        },
        {
          id: "ch1-sec3",
          number: "1.3",
          title: "Skills 5 領域",
          blocks: [
            { type: "list", style: "bullet", items: [
              "Experimentation(MLflow / AutoML / Feature Store)",
              "Model Lifecycle Management(Registry / Aliases / Lineage)",
              "Model Deployment(Model Serving / Inference Tables / Monitoring)",
              "Mosaic AI(Vector Search / Foundation Model API / Agent Framework)",
              "MLOps(Asset Bundle / CI/CD / Cluster Policy)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "MLflow + Feature Store",
      overview: "Tracking / Autolog / Model Registry / Feature Store / Point-in-Time Join。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "MLflow 4 モジュール",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Tracking**: Experiment / Run / Param / Metric / Artifact + **Autolog**(1 行で自動記録)",
              "**Projects**: Conda / pip 環境含む再現可能パッケージ",
              "**Models**: Flavor(sklearn / pytorch / pyfunc 等)+ Signature",
              "**Model Registry**: Version / Aliases / Tags / Stages(レガシー)",
            ] },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Unity Catalog Model Registry(2024+ 主流)",
          blocks: [
            { type: "p", text: "**UC Model Registry**: 3 階層命名(`catalog.schema.model`)+ **Cross-Workspace 共有** + **Aliases**(Champion / Challenger 等)+ Tags + Lineage(SQL 風)。**旧 Workspace Model Registry** からの移行が推奨。" },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "Feature Store",
          blocks: [
            { type: "p", text: "**Feature Store**(Unity Catalog 統合)= Delta Table の Feature 専用エイリアス。**Offline**(Training / Batch)+ **Online**(Real-time Inference)。" },
            { type: "list", style: "bullet", items: [
              "**FeatureLookup**: Spark DF に Feature 結合(lookup_key)",
              "**Point-in-Time Join**: `timestamp_lookup_key` で時点整合 → Training-Serving Skew 防止",
              "**Online Store**(2024+): Sync 設定で Real-time 利用",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "AutoML + Hyperopt + Spark ML",
      overview: "Databricks AutoML / Hyperopt + SparkTrials / Distributed Training。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "AutoML",
          blocks: [
            { type: "p", text: "**Databricks AutoML**(FLAML / Lightautoml ベース): Tabular Classification / Regression / Forecasting(SARIMAX / Prophet)。**Notebook 生成 + Editable** で透明性高。" },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Hyperopt + SparkTrials",
          blocks: [
            { type: "p", text: "**Hyperopt**: Tree-structured Parzen Estimator(TPE)で Bayesian Hyperparameter Tuning。**SparkTrials** で Worker 並列実行 + MLflow Autolog 統合で各 Trial 自動記録。**Optuna** も類似選択肢。" },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Distributed Training",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**TorchDistributor**: PyTorch DDP / FSDP",
              "**DeepSpeed Distributor**: 大規模 LLM 学習",
              "**Horovod**(レガシー)",
              "**PySpark ML(MLlib)**: 分散 Spark ML",
              "**Ray on Databricks**(2023+)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Model Serving + Inference Tables + Lakehouse Monitoring",
      overview: "Model Serving / Mosaic AI Gateway / Inference Tables / Drift Detection。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Model Serving",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**マネージド推論**: CPU / GPU / Scale-to-Zero",
              "**A/B Routing**: 複数 Model に Traffic 分散",
              "**Inference Tables**: Request / Response を Delta Table に自動記録",
              "**Mosaic AI Gateway**: Rate Limit / Audit / Cost / Fallback / Caching",
            ] },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Lakehouse Monitoring",
          blocks: [
            { type: "p", text: "**Lakehouse Monitoring**(2024 GA): Delta Table / Inference Table の品質監視。" },
            { type: "list", style: "bullet", items: [
              "**Time Series Profile**: 時間軸メトリクス",
              "**Snapshot Profile**: 現時点統計",
              "**Inference Profile**: Model 入出力 + Drift",
              "**Auto-generated Dashboard**: KS Test / Drift / Statistic Anomaly",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Mosaic AI ─ GenAI Platform",
      overview: "Vector Search / Foundation Model API / Agent Framework / DBRX / AI Functions / Genie。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Mosaic AI Vector Search",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Delta Sync Index**: Delta Table → Auto Embedding + Sync",
              "**Direct Vector Access Index**: 自前 Embedding 提供",
              "**HNSW + Filter + Unity Catalog 統合**",
              "RAG / 推薦の基盤",
            ] },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Foundation Model API",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Pay-per-token**: DBRX / Llama 3 / Mixtral / Mistral",
              "**Provisioned Throughput**: SLA 保証 ・ 専用 GPU",
              "**External Model**: OpenAI / Bedrock / Anthropic / Cohere プロキシ",
              "**Mosaic AI Gateway**: 統一 Rate Limit / Audit / Cost",
            ] },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Agent Framework + AI Functions + Genie",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Agent Framework**(2024 GA): LangChain / LlamaIndex Agent を Deploy + Evaluation + Tracing",
              "**Agent Evaluation**: Faithfulness / Relevance + LLM Judge",
              "**AI Functions**: SQL から `ai_query / ai_extract / ai_classify` 等で LLM 呼出",
              "**Genie**(2024 GA): NL → SQL → Visual ・ Unity Catalog 横断質問応答",
            ] },
          ],
        },
        {
          id: "ch5-sec4",
          number: "5.4",
          title: "DBRX",
          blocks: [
            { type: "p", text: "**DBRX**(2024 MosaicML / Databricks): 132B 総 / 36B Active MoE ・ Apache 2.0 オープン。**Mosaic AI Foundation Model API** で提供。Llama 3 / Mixtral 系と競合。" },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "MLOps + Asset Bundle + 受験対策",
      overview: "MLOps Stacks / Asset Bundle / CI/CD / Cluster Policy / Cost。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Databricks Asset Bundle(DAB)",
          blocks: [
            { type: "p", text: "**DAB**(2024 GA): YAML で Workflow / Notebook / Job / Pipeline / Endpoint をリソース宣言 → **`databricks bundle deploy`** で Dev/Test/Prod 環境にデプロイ。**Git + CI/CD** 統合。" },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "MLOps Stacks",
          blocks: [
            { type: "p", text: "**MLOps Stacks**: DAB ベースの ML 環境テンプレート。**Dev/Staging/Prod 環境 + GitHub Actions / Azure DevOps Pipeline + Test/Lint + Recipe** を 1-Click 構築。" },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Cost + Cluster Policy",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Job Cluster < All-Purpose Cluster**(コスト)",
              "**Spot / Photon / Serverless / Auto-Stop / Pool**",
              "**Cluster Policy**: Type / Size / Library / Tag 強制",
              "**Tag による Department 集計**",
            ] },
          ],
        },
        {
          id: "ch6-sec4",
          number: "6.4",
          title: "受験対策",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Databricks Academy**(公式 LMS)",
              "**Hands-on Workshop / Quickstart**",
              "**ML Associate を先に取得**(前提)",
              "**Sample Notebooks(GitHub: databricks-industry-solutions)**",
            ] },
            { type: "h3", text: "合格後のキャリアパス" },
            { type: "list", style: "bullet", items: [
              "**Databricks Data Engineer Professional**(DE 専門化)",
              "**Generative AI Engineer Associate**(2024 新設 ・ GenAI 専門)",
              "**Databricks Solutions Architect Professional**",
              "**マルチクラウド**: AWS MLS-C01 / Azure DP-100 / GCP Pro MLE",
            ] },
            { type: "practical", title: "Databricks ML Engineer のキャリア価値", body: "**Databricks は 2024-2025 の Lakehouse 最大手**(Snowflake / Fabric / BigQuery と双璧)。**Mosaic AI 買収後の GenAI 戦略**が明確化し、**LLM 開発 + 古典 ML + Feature Store + Vector Search** の総合実装力は希少。**ML Researcher / ML Lead / GenAI Architect** ポジションで強いシグナル。" },
            { type: "p", text: "**結びに**: Databricks ML Engineer は Lakehouse + ML + GenAI + MLOps の総合スキルです。試験合格後も Mosaic AI / DBRX / Agent Framework / Lakehouse Monitoring など機能追加が続くため、Release Notes + Databricks Academy を継続キャッチアップしてください。" },
          ],
        },
      ],
    },
  ],
};
