import type { Question } from "@/types/content";

export const databricksDataEngineerQuestions: Question[] = [
  {
    id: "dbx-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Databricks Certified Data Engineer Associate の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational(Lakehouse Fundamentals)",
      "Associate",
      "Professional",
      "Expert",
    ],
    correctIndex: 1,
    explanation:
      "**Data Engineer Associate** は Databricks 認定の **Associate レベル**。基礎は Lakehouse Fundamentals、上位は Data Engineer Professional。",
  },
  {
    id: "dbx-q2",
    category: "Lakehouse",
    difficulty: 2,
    question:
      "Lakehouse Architecture の **Medallion** で、生データの初期取込み層の名称として最も適切なものを選びなさい。",
    choices: [
      "Bronze 層",
      "Silver 層",
      "Gold 層",
      "Platinum 層",
    ],
    correctIndex: 0,
    explanation:
      "Medallion Architecture は **Bronze(生)→ Silver(クレンジング)→ Gold(ビジネス)** の 3 層。Platinum 層は標準には含まれない。",
  },
  {
    id: "dbx-q3",
    category: "Cluster",
    difficulty: 2,
    question:
      "本番ジョブで **コスト効率が良い** クラスタ種別として最も適切なものを選びなさい。",
    choices: [
      "All-purpose Cluster",
      "Job Cluster",
      "SQL Warehouse",
      "Serverless Notebook",
    ],
    correctIndex: 1,
    explanation:
      "**Job Cluster** は自動起動 / 終了で本番ジョブ専用、コスト効率が良い。**All-purpose Cluster** は開発用 ・ 共有可。",
  },
  {
    id: "dbx-q4",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake の **トランザクション履歴** が記録される場所として最も適切なものを選びなさい。",
    choices: [
      "Parquet ファイル内のヘッダー",
      "_delta_log/ ディレクトリ内の JSON ファイル",
      "Hive Metastore",
      "Unity Catalog のシステムテーブル",
    ],
    correctIndex: 1,
    explanation:
      "Delta Lake は **`_delta_log/` ディレクトリ内の JSON(version_*.json)+ チェックポイント Parquet** にトランザクションログを保存。これが ACID の基礎。",
  },
  {
    id: "dbx-q5",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake で **過去のバージョン** にアクセスする SQL 構文として最も適切なものを選びなさい。",
    choices: [
      "SELECT * FROM sales BACKUP 5",
      "SELECT * FROM sales VERSION AS OF 5",
      "SELECT * FROM sales SNAPSHOT 5",
      "SELECT * FROM sales OLD",
    ],
    correctIndex: 1,
    explanation:
      "**`VERSION AS OF n`** または **`TIMESTAMP AS OF '...'`** で過去状態にアクセス。Time Travel の標準構文。`DESCRIBE HISTORY table` で履歴も確認可能。",
  },
  {
    id: "dbx-q6",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake で **小さなファイルを統合** してクエリ性能を改善するコマンドとして最も適切なものを選びなさい。",
    choices: [
      "OPTIMIZE",
      "VACUUM",
      "MERGE INTO",
      "TRUNCATE",
    ],
    correctIndex: 0,
    explanation:
      "**OPTIMIZE** は小さなファイルを統合(Compaction)。`OPTIMIZE table ZORDER BY (col)` でマルチカラムソートも可能。**VACUUM** は古い不要ファイルを削除。",
  },
  {
    id: "dbx-q7",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake で **VACUUM のデフォルト保持期間** として最も適切なものを選びなさい。",
    choices: [
      "1 日(24 時間)",
      "7 日(168 時間)",
      "30 日",
      "90 日",
    ],
    correctIndex: 1,
    explanation:
      "**VACUUM のデフォルト** は **7 日(168 時間)**。`VACUUM table RETAIN 168 HOURS` が同等。短くしすぎると Time Travel が破綻するリスクがある。",
  },
  {
    id: "dbx-q8",
    category: "MERGE",
    difficulty: 3,
    question:
      "Delta Lake で **INSERT / UPDATE / DELETE を一括実行** する SQL 句として最も適切なものを選びなさい。",
    choices: [
      "UPSERT",
      "MERGE INTO",
      "REPLACE INTO",
      "OVERWRITE",
    ],
    correctIndex: 1,
    explanation:
      "**MERGE INTO** が `WHEN MATCHED / WHEN NOT MATCHED` 句で UPSERT / DELETE を一括実行。SCD Type 1 / Type 2 の実装に必須。",
  },
  {
    id: "dbx-q9",
    category: "Spark",
    difficulty: 3,
    question:
      "Spark で **小テーブルを各ノードに配布して結合** する技法の名称として最も適切なものを選びなさい。",
    choices: [
      "Shuffle Hash Join",
      "Sort-Merge Join",
      "Broadcast Join",
      "Cartesian Join",
    ],
    correctIndex: 2,
    explanation:
      "**Broadcast Join** は片方の小テーブルを各 Executor に配布、シャッフル不要で高速。`broadcast(df)` で明示できる。Spark 自動判定の閾値は `spark.sql.autoBroadcastJoinThreshold`。",
  },
  {
    id: "dbx-q10",
    category: "Photon",
    difficulty: 2,
    question:
      "Databricks の **C++ 実装の高速化エンジン** として最も適切なものを選びなさい。",
    choices: [
      "Tungsten",
      "Photon",
      "Catalyst",
      "AQE",
    ],
    correctIndex: 1,
    explanation:
      "**Photon Engine** は Databricks の C++ 実装、SQL クエリを大幅高速化(2 〜 10 倍)。Catalyst は SQL → 物理プラン変換、AQE は実行時の動的最適化。",
  },
  {
    id: "dbx-q11",
    category: "ストリーミング",
    difficulty: 3,
    question:
      "Databricks で **クラウドストレージへのファイル到着を自動検知して取込む** 機能として最も適切なものを選びなさい。",
    choices: [
      "COPY INTO",
      "Auto Loader",
      "Streaming Live Table",
      "DBFS Mount",
    ],
    correctIndex: 1,
    explanation:
      "**Auto Loader** はファイル通知(SNS / EventGrid / Pub/Sub)or Directory Listing で増分取込み。Snowflake の Snowpipe に対応。スキーマ進化にも対応。",
  },
  {
    id: "dbx-q12",
    category: "DLT",
    difficulty: 3,
    question:
      "Delta Live Tables(DLT)で **データ品質チェック** を宣言する句として最も適切なものを選びなさい。",
    choices: [
      "ASSERT",
      "EXPECT",
      "CHECK",
      "CONSTRAIN",
    ],
    correctIndex: 1,
    explanation:
      "DLT の **Expectations** は `EXPECT condition` / `EXPECT OR DROP` / `EXPECT OR FAIL` で宣言。違反時に行 drop / 即停止などの動作を選択できる。",
  },
  {
    id: "dbx-q13",
    category: "DLT",
    difficulty: 3,
    question:
      "DLT で **SCD Type 2(履歴保持)** を宣言型に実装する機能として最も適切なものを選びなさい。",
    choices: [
      "MERGE INTO",
      "APPLY CHANGES INTO",
      "INSERT OVERWRITE",
      "CREATE OR REPLACE",
    ],
    correctIndex: 1,
    explanation:
      "**APPLY CHANGES INTO** は CDC データから SCD Type 1 / Type 2 を宣言的に構築する DLT 専用機能。手動の MERGE INTO より簡潔で間違いが少ない。",
  },
  {
    id: "dbx-q14",
    category: "Workflows",
    difficulty: 2,
    question:
      "Databricks Workflows で **Task 間の依存関係** の表し方として最も適切なものを選びなさい。",
    choices: [
      "クエリでの JOIN",
      "DAG(Task の依存先を指定)",
      "Schema の継承",
      "Cluster の親子関係",
    ],
    correctIndex: 1,
    explanation:
      "Workflows は **DAG(Directed Acyclic Graph)** 形式で Task 間の依存関係を表現。各 Task は `depends_on` で親 Task を指定。",
  },
  {
    id: "dbx-q15",
    category: "Unity Catalog",
    difficulty: 3,
    question:
      "Unity Catalog の階層として最も適切なものを選びなさい。",
    choices: [
      "Workspace → Database → Table",
      "Metastore → Catalog → Schema → Table",
      "Account → Cluster → Notebook → Table",
      "Tenant → Project → Dataset → Table",
    ],
    correctIndex: 1,
    explanation:
      "Unity Catalog の階層は **Metastore → Catalog → Schema → Table / View / Function / Volume / Model**。Metastore はリージョン単位の最上位、複数 Workspace で共有可能。",
  },
  {
    id: "dbx-q16",
    category: "Unity Catalog",
    difficulty: 3,
    question:
      "Unity Catalog で **行単位** にアクセス制御する機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Row Filter",
      "Column Mask",
      "Sensitivity Label",
      "Tag",
    ],
    correctIndex: 0,
    explanation:
      "**Row Filter** は行レベルのアクセス制御。**Column Mask** は列単位の動的マスキング、**Sensitivity Label** は機密度ラベル、**Tag** はメタデータ管理。",
  },
  {
    id: "dbx-q17",
    category: "Sharing",
    difficulty: 2,
    question:
      "**Databricks 環境を持たない受信者にもデータを安全に共有** できる Databricks 発のオープンプロトコルとして最も適切なものを選びなさい。",
    choices: [
      "Delta Sharing",
      "Unity Sharing",
      "Secure Sharing",
      "Open Data Mesh",
    ],
    correctIndex: 0,
    explanation:
      "**Delta Sharing** は Databricks 発のオープンプロトコル(Linux Foundation 寄贈)。Pandas / Spark など多様なクライアントから受信可能、ベンダーロックインなし。",
  },
  {
    id: "dbx-q18",
    category: "MLflow",
    difficulty: 2,
    question:
      "MLflow の主要コンポーネントに **含まれない** ものを選びなさい。",
    choices: [
      "MLflow Tracking",
      "MLflow Model Registry",
      "MLflow Projects",
      "MLflow Pipelines",
    ],
    correctIndex: 3,
    explanation:
      "MLflow の主要 4 コンポーネントは **Tracking / Models / Projects / Model Registry**。Pipelines は別の概念(Vertex AI Pipelines / SageMaker Pipelines)。",
  },
  {
    id: "dbx-q19",
    category: "Mosaic AI",
    difficulty: 3,
    question:
      "Databricks 製のオープンソース基盤モデルの名称として最も適切なものを選びなさい。",
    choices: [
      "Llama",
      "DBRX",
      "Claude",
      "Gemma",
    ],
    correctIndex: 1,
    explanation:
      "**DBRX** は Databricks(MosaicML 買収後)が公開したオープンソース基盤モデル。MoE アーキテクチャ採用、132B パラメータで Llama 2 70B を超える性能。",
  },
  {
    id: "dbx-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "Data Engineer Associate 合格後、Databricks 上位認定として最も適切なものを選びなさい。",
    choices: [
      "Lakehouse Fundamentals",
      "Data Engineer Professional",
      "Cloud Practitioner",
      "Snowflake SnowPro",
    ],
    correctIndex: 1,
    explanation:
      "Data Engineer Associate の上位は **Data Engineer Professional**。ML 寄りなら **ML Practitioner Associate → Machine Learning Professional**、生成 AI なら **Generative AI Engineer Associate** へ。",
  },
];
