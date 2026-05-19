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
  {
    id: "dbx-q21",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake の **トランザクションログ** が保存される場所として最も適切なものを選びなさい。",
    choices: [
      "テーブルディレクトリ内の `_delta_log/` サブフォルダ",
      "別の Delta Lake サービス DB",
      "Hive Metastore のみ",
      "Spark Driver メモリ",
    ],
    correctIndex: 0,
    explanation:
      "**`_delta_log/`** に JSON / Parquet で操作履歴を保存(各コミットが 1 ファイル)。10 コミットごとにチェックポイント Parquet を生成して読み込みを高速化。",
  },
  {
    id: "dbx-q22",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake の **OPTIMIZE** コマンドの主目的として最も適切なものを選びなさい。",
    choices: [
      "小ファイルを統合し読み込み性能を改善",
      "テーブルを暗号化する",
      "テーブルを削除する",
      "スキーマを変更する",
    ],
    correctIndex: 0,
    explanation:
      "**OPTIMIZE** は小ファイル統合(Compaction)。ストリーミング取込で生じる小ファイル問題を解消。**OPTIMIZE table ZORDER BY (col)** で Z-Order クラスタリングも同時実行可。",
  },
  {
    id: "dbx-q23",
    category: "Delta Lake",
    difficulty: 3,
    question:
      "Delta Lake の **VACUUM** に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "デフォルト保持期間は 7 日(168 時間)",
      "Time Travel で参照可能な古いファイルを物理削除",
      "保持期間を短くすると Time Travel が壊れる可能性がある",
      "実行直後に新規データが消える",
    ],
    correctIndex: 3,
    explanation:
      "**VACUUM は保持期間より古い未参照ファイルを物理削除**(現行データは消えない)。デフォルト 168 時間。0 時間にすると Time Travel ・ 並行クエリが壊れる可能性、本番は最低 7 日推奨。",
  },
  {
    id: "dbx-q24",
    category: "Auto Loader",
    difficulty: 3,
    question:
      "Auto Loader の **File Notification モード** が **Directory Listing モード** より優れる点を選びなさい。",
    choices: [
      "クラウド storage のイベント通知を使うため、ファイル数が多い時にもスケールする",
      "セキュリティが高い",
      "コストが必ず安い",
      "Spark を不要にする",
    ],
    correctIndex: 0,
    explanation:
      "**File Notification**: S3 SNS+SQS / ADLS Gen2 Event Grid / GCS Pub/Sub などで新着通知。**Directory Listing**(デフォルト)は毎回フォルダ全件スキャンするため大量ファイル時に遅い。",
  },
  {
    id: "dbx-q25",
    category: "DLT",
    difficulty: 3,
    question:
      "Delta Live Tables(DLT)の **Expectations** が定義する内容として最も適切なものを選びなさい。",
    choices: [
      "データ品質ルールと違反時の動作(drop / quarantine / fail)",
      "テーブルのスキーマ",
      "Spark の並列度",
      "Cluster の VM タイプ",
    ],
    correctIndex: 0,
    explanation:
      "**Expectations**: `@dlt.expect`(警告のみ)・ `@dlt.expect_or_drop`(違反行を除外)・ `@dlt.expect_or_fail`(違反でジョブ失敗)。データ品質ゲートを Pipeline に組み込む。",
  },
  {
    id: "dbx-q26",
    category: "DLT",
    difficulty: 3,
    question:
      "DLT の **Streaming Table** と **Materialized View** の違いとして最も適切なものを選びなさい。",
    choices: [
      "Streaming Table は追記中心 ・ 増分処理、Materialized View は完全再計算 or 増分再計算",
      "両者は同義",
      "Streaming Table は読み取り専用",
      "Materialized View は Delta Lake 非対応",
    ],
    correctIndex: 0,
    explanation:
      "**Streaming Table** は追記ストリームベース(冪等性 ・ 進捗管理)。**Materialized View** は SQL クエリ結果の物質化(完全 or 増分 / Enzyme)。両者の境界は最近曖昧化中。",
  },
  {
    id: "dbx-q27",
    category: "Unity Catalog",
    difficulty: 3,
    question:
      "Unity Catalog の **3 階層名前空間** として最も適切なものを選びなさい。",
    choices: [
      "Catalog → Schema → Table / View / Function / Volume",
      "Workspace → Cluster → Notebook",
      "User → Role → Permission",
      "Region → Workspace → Catalog",
    ],
    correctIndex: 0,
    explanation:
      "**Unity Catalog 3 階層**: catalog.schema.table。**Volume**(非構造化ファイル管理)も新たに追加。Workspace 横断のメタデータ共有 + 細粒度アクセス制御 + Lineage を提供。",
  },
  {
    id: "dbx-q28",
    category: "Photon",
    difficulty: 3,
    question:
      "Databricks **Photon Engine** の特徴として最も適切なものを選びなさい。",
    choices: [
      "C++ で書かれた次世代ベクトル化実行エンジン、SQL / DataFrame で透過利用",
      "新しい Python ライブラリ",
      "GPU 専用エンジン",
      "別途インストール必須",
    ],
    correctIndex: 0,
    explanation:
      "**Photon** は C++ ベクトル化エンジン。Spark API と互換 ・ 透過に高速化(2-12×)。SQL Warehouse ・ Job Compute で **`Photon enabled`** を有効化するだけ。GPU ではなく CPU 最適化。",
  },
  {
    id: "dbx-q29",
    category: "Workflows",
    difficulty: 2,
    question:
      "Databricks Workflows(Jobs)で **依存関係のあるタスク** を表現する方法として最も適切なものを選びなさい。",
    choices: [
      "Job 内で Task を作成し『Depends on』で前のタスクを指定して DAG 化",
      "Cron 式で順序を制御する",
      "別 Workspace に分ける",
      "1 つの Notebook に全部書く",
    ],
    correctIndex: 0,
    explanation:
      "**Databricks Jobs(Workflows)** は **複数 Task を DAG で連結**(Depends on)。各 Task は Notebook / JAR / Python wheel / DLT / SQL を実行可能。Airflow より軽量で Databricks ネイティブ。",
  },
  {
    id: "dbx-q30",
    category: "Workflows",
    difficulty: 3,
    question:
      "Workflow Job の **Retry Policy** で **指数バックオフ** を実装する正しい方法を選びなさい。",
    choices: [
      "Retry: Number of retries + Min retry interval(自動的に指数倍化)",
      "毎回固定間隔で再試行",
      "Workflow ではリトライ不可、Job 自体を再実行する",
      "Cron 式で実装",
    ],
    correctIndex: 0,
    explanation:
      "**Job Task の Retry 設定**: Number of retries(最大回数)+ Min retry interval(初回待機)で **指数バックオフ自動適用**。一時的なクラウド障害 ・ rate limit 等で有用。",
  },
  {
    id: "dbx-q31",
    category: "クラスタ",
    difficulty: 3,
    question:
      "Databricks のクラスタ種別で **Job Compute** が **All-Purpose Compute** より優れる点として最も適切なものを選びなさい。",
    choices: [
      "Job 専用で安く(50%+ 割引)、ジョブ完了時に自動終了",
      "対話実行できる",
      "Notebook GUI で操作しやすい",
      "Photon 専用",
    ],
    correctIndex: 0,
    explanation:
      "**Job Compute は Job 専用 + 大幅割引** + 終了時自動破棄。**All-Purpose は対話用 + 共有可能 + 高単価**。本番 Job は Job Compute、開発は All-Purpose が定石。",
  },
  {
    id: "dbx-q32",
    category: "SQL Warehouse",
    difficulty: 2,
    question:
      "SQL Warehouse の **Serverless モード** が **Pro モード** より優れる点を選びなさい。",
    choices: [
      "起動時間が秒単位 ・ Auto-suspend 0 円、本格 BI クエリに最適",
      "より高い精度を保証する",
      "コストが必ず安い",
      "Photon が使えない",
    ],
    correctIndex: 0,
    explanation:
      "**Serverless SQL Warehouse**: Databricks 側で常時 Warm Pool 維持 → **数秒起動 ・ Auto-suspend 0 円**。Pro は VM 起動分の待機(数分)あり。BI ツール接続用には Serverless 推奨。",
  },
  {
    id: "dbx-q33",
    category: "Streaming",
    difficulty: 3,
    question:
      "Structured Streaming の **Trigger** で **マイクロバッチを最大 1 分間隔で実行** したい場合の指定として最も適切なものを選びなさい。",
    choices: [
      "`.trigger(processingTime='1 minute')`",
      "`.trigger(once=True)`",
      "`.trigger(continuous=True)`",
      "Trigger 不要、Default で 1 分",
    ],
    correctIndex: 0,
    explanation:
      "**`processingTime='1 minute'`** で最大 1 分間隔のマイクロバッチ。`availableNow=True` は到着済データを全部処理して停止。`continuous` は実験的低レイテンシモード。",
  },
  {
    id: "dbx-q34",
    category: "Streaming",
    difficulty: 3,
    question:
      "Structured Streaming で **チェックポイント** の主目的として最も適切なものを選びなさい。",
    choices: [
      "障害後のリスタートで重複なく続行(Exactly-once 保証)",
      "クラスタを停止する",
      "Spark UI で見るためだけ",
      "ストレージを暗号化する",
    ],
    correctIndex: 0,
    explanation:
      "**Checkpoint** は処理位置(オフセット)+ 状態を永続化。**`.option('checkpointLocation', '/path/_chk/')` 必須**。Exactly-once は出力先がべき等 + Delta Lake 等のトランザクション対応の組合せで実現。",
  },
  {
    id: "dbx-q35",
    category: "Cost",
    difficulty: 3,
    question:
      "Databricks のコスト最適化として **誤っているもの** を選びなさい。",
    choices: [
      "Spot Instance(プリエンプティブル VM)を使う",
      "Auto-scale で min/max workers を適切に設定",
      "Photon を有効化",
      "常に最大サイズのクラスタを起動",
    ],
    correctIndex: 3,
    explanation:
      "**常時最大サイズはコスト爆発**。Spot / Auto-scale / Photon(高速化 → DBU 削減)・ Job Compute / Auto-suspend がコスト最適化定石。",
  },
  {
    id: "dbx-q36",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "Unity Catalog の **行レベルセキュリティ** を実装する方法として最も適切なものを選びなさい。",
    choices: [
      "Row Filter Function を CREATE FUNCTION で定義 → ALTER TABLE で適用",
      "View で WHERE 句を書く",
      "Cluster Policy を変更",
      "MLflow を有効化",
    ],
    correctIndex: 0,
    explanation:
      "**Row Filter / Column Mask Function**(UDF)を作り `ALTER TABLE ... SET ROW FILTER fn` で適用。ロール ・ クエリーユーザーごとに動的フィルタリング。",
  },
  {
    id: "dbx-q37",
    category: "Lakehouse",
    difficulty: 2,
    question:
      "Medallion Architecture(Bronze / Silver / Gold)の **Bronze 層** の役割として最も適切なものを選びなさい。",
    choices: [
      "ソースの生データを到着順にそのまま保存(無加工)",
      "ビジネス指標 ・ 集計結果",
      "ML 学習用に最適化",
      "BI ダッシュボード専用",
    ],
    correctIndex: 0,
    explanation:
      "**Bronze**: 生データのまま、最小加工(取込日付付与程度)。**Silver**: クレンジング ・ 重複排除 ・ 結合。**Gold**: ビジネス指標 ・ KPI ・ ML 用集計。Databricks 提唱の標準パターン。",
  },
  {
    id: "dbx-q38",
    category: "MLflow",
    difficulty: 3,
    question:
      "Databricks Notebook での **MLflow Autologging** の挙動として最も適切なものを選びなさい。",
    choices: [
      "sklearn / PyTorch / TensorFlow / XGBoost の学習を自動検出してパラメータ ・ メトリクス ・ モデルを記録",
      "Notebook のセル実行履歴を全部保存",
      "全 SQL クエリの結果を保存",
      "Spark UI を MLflow に統合",
    ],
    correctIndex: 0,
    explanation:
      "**`mlflow.autolog()`** で対応フレームワークの fit() を hook、パラメータ ・ メトリクス ・ モデル ・ アーティファクトを自動記録。**Databricks では Notebook 単位でデフォルト ON**。",
  },
  {
    id: "dbx-q39",
    category: "Spark",
    difficulty: 3,
    question:
      "Spark の **広い変換(wide transformation)** に該当する操作を選びなさい。",
    choices: [
      "groupBy / join / repartition",
      "filter / map / withColumn",
      "select / drop",
      "show / collect",
    ],
    correctIndex: 0,
    explanation:
      "**Wide transformation = シャッフル発生**(groupBy / join / repartition / distinct)。**Narrow transformation = パーティション内完結**(filter / map / select)。シャッフルは高コスト。",
  },
  {
    id: "dbx-q40",
    category: "Spark",
    difficulty: 3,
    question:
      "Spark で **Skew(データ偏り)** が発生した時の代表的な対策を選びなさい。",
    choices: [
      "Salting(キーに乱数を追加して分散)or AQE Skew Join",
      "Cluster サイズを最大化",
      "Spot Instance に切替",
      "Job を分割しない",
    ],
    correctIndex: 0,
    explanation:
      "**データ偏り対策**: Salting(キー + 乱数で人工的に分散)/ AQE(Adaptive Query Execution)の Skew Join 自動分割 / Broadcast Join。シャッフル時に少数キーへの集中を避ける。",
  },
  {
    id: "dbx-q41",
    category: "Z-Ordering",
    difficulty: 3,
    question:
      "Delta Lake の **Z-Ordering** が **Partitioning** より優れる場面として最も適切なものを選びなさい。",
    choices: [
      "高カーディナリティ列の範囲フィルタ ・ 複数列での効率的スキャン",
      "極低カーディナリティ列(性別 ・ Yes/No)",
      "テーブル全件スキャン",
      "INSERT 性能向上",
    ],
    correctIndex: 0,
    explanation:
      "**Z-Order** は高カーディナリティ + 範囲スキャン + 複数列(最大 ~10 列まで効果)に最適。**Partition は低カーディナリティ + 完全一致フィルタ**。両者を併用するのが定石。",
  },
  {
    id: "dbx-q42",
    category: "Bloom Filter",
    difficulty: 3,
    question:
      "Delta Lake の **Bloom Filter Index** が高速化する場面として最も適切なものを選びなさい。",
    choices: [
      "高カーディナリティ列の `=` 検索(needle-in-haystack)",
      "範囲検索",
      "GROUP BY",
      "JOIN",
    ],
    correctIndex: 0,
    explanation:
      "**Bloom Filter Index**: `email='x@y.com'` のような **needle-in-haystack(膨大データから単一値検索)** で File Skipping 効果。範囲検索 ・ 集計には効果薄。OPTIMIZE 時に作成。",
  },
  {
    id: "dbx-q43",
    category: "Change Data Feed",
    difficulty: 3,
    question:
      "Delta Lake の **Change Data Feed(CDF)** が提供する機能として最も適切なものを選びなさい。",
    choices: [
      "テーブルの行レベル変更(INSERT / UPDATE / DELETE)を別 Source として読み取り可能",
      "テーブル全体のスナップショット",
      "リアルタイム書込専用",
      "REST API 経由のみ利用可",
    ],
    correctIndex: 0,
    explanation:
      "**CDF**: `ALTER TABLE SET TBLPROPERTIES (delta.enableChangeDataFeed = true)` 有効化。**Silver → Gold 増分更新 ・ 監査ログ ・ 下流連携** に活用。`table_changes()` で取得。",
  },
  {
    id: "dbx-q44",
    category: "Schema Evolution",
    difficulty: 3,
    question:
      "Delta Lake の **`mergeSchema=true`** オプションの効果として最も適切なものを選びなさい。",
    choices: [
      "INSERT / UPDATE 時に新しい列を自動追加",
      "既存列の型変更を許可",
      "スキーマを強制適用",
      "テーブルを削除",
    ],
    correctIndex: 0,
    explanation:
      "**`mergeSchema=true`** で書込時に **新しい列が自動追加**(既存列削除や型変更は不可)。Spark Conf `spark.databricks.delta.schema.autoMerge.enabled` で恒常設定も可能。",
  },
  {
    id: "dbx-q45",
    category: "Lineage",
    difficulty: 2,
    question:
      "Unity Catalog の **Lineage** が記録する情報として **誤っているもの** を選びなさい。",
    choices: [
      "テーブル → テーブルの読み書き関係",
      "列レベルの依存関係",
      "Notebook / Job からのアクセス",
      "Cluster の VM 価格",
    ],
    correctIndex: 3,
    explanation:
      "**Unity Catalog Lineage**: テーブル + 列レベルの up/downstream + Notebook / Job / Dashboard / Workflow からのアクセス。**VM 価格は Billing の領域**。GDPR / 監査対応に活用。",
  },
  {
    id: "dbx-q46",
    category: "Delta Sharing",
    difficulty: 3,
    question:
      "**Delta Sharing** の特徴として最も適切なものを選びなさい。",
    choices: [
      "ベンダーロックインなしのオープンプロトコルで Delta テーブルを外部に共有",
      "Databricks 内部のみで動作",
      "REST API を使わない",
      "認証不要",
    ],
    correctIndex: 0,
    explanation:
      "**Delta Sharing**(オープンプロトコル)で **Databricks 外(pandas / Spark / Trino / Power BI 等)に Delta テーブルを共有**。Recipient は Databricks 不要。物理コピーなし。",
  },
  {
    id: "dbx-q47",
    category: "監視",
    difficulty: 3,
    question:
      "Databricks **Lakehouse Monitoring** が監視する対象として **誤っているもの** を選びなさい。",
    choices: [
      "Data Quality(欠損 ・ 一意性 ・ 分布)",
      "Inference Drift(ML モデル)",
      "Statistical Drift(時系列分布変化)",
      "GPU 故障率",
    ],
    correctIndex: 3,
    explanation:
      "**Lakehouse Monitoring**: TimeSeries / Snapshot / InferenceLog の 3 タイプ。**Data Quality ・ Drift ・ Custom Metrics** を自動収集 + ダッシュボード生成。GPU 監視は Cluster Logs。",
  },
  {
    id: "dbx-q48",
    category: "Connect",
    difficulty: 3,
    question:
      "**Databricks Connect** の用途として最も適切なものを選びなさい。",
    choices: [
      "ローカル IDE(VSCode / IntelliJ)から Databricks クラスタに対して Spark コードを実行",
      "Databricks 内のクラスタ同士を接続",
      "Cloud Storage を mount",
      "REST API を生成",
    ],
    correctIndex: 0,
    explanation:
      "**Databricks Connect**(v2、2023〜): **ローカル PC で書いた Spark / DataFrame コードを Databricks クラスタ実行**。Notebook 外での開発体験を向上。v1 は Server に対する RPC、v2 は Spark Connect ベース。",
  },
  {
    id: "dbx-q49",
    category: "実務",
    difficulty: 3,
    question:
      "新規プロジェクトで Lakehouse 設計を始める際の **最初のステップ** として最も適切なものを選びなさい。",
    choices: [
      "Unity Catalog を有効化 + Catalog / Schema を業務ドメインで設計",
      "全テーブルを Bronze にぶち込む",
      "全データを CSV で保管",
      "Auto Loader を全テーブルに適用",
    ],
    correctIndex: 0,
    explanation:
      "**Unity Catalog 設計**(catalog = 環境 dev/prod or ドメイン、schema = 業務単位)が最重要。アクセス制御 ・ Lineage ・ コスト管理の基礎。テーブル設計はその後の Medallion 化で。",
  },
  {
    id: "dbx-q50",
    category: "次のステップ",
    difficulty: 1,
    question:
      "Data Engineer Associate 合格後のステップで **データ系の上位認定** として最も適切なものを選びなさい。",
    choices: [
      "Databricks Data Engineer Professional",
      "Cloud Practitioner",
      "ITパスポート",
      "Excel 検定",
    ],
    correctIndex: 0,
    explanation:
      "**Databricks Data Engineer Professional**(中級)が直接の上位。**Generative AI Engineer Associate**(2024 新設)も注目。三大クラウドの DE 認定併用もキャリア面で強い。",
  },
];
