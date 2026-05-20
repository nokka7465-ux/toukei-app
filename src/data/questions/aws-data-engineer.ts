import type { Question } from "@/types/content";

export const awsDataEngineerQuestions: Question[] = [
  {
    id: "dea-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "AWS Certified Data Engineer - Associate(DEA-C01)の認定レベルとして最も適切なものを選びなさい。",
    choices: ["Foundational", "Associate", "Professional", "Specialty"],
    correctIndex: 1,
    explanation:
      "**DEA-C01 は Associate レベル**(2024 年 GA)。AWS データ系認定: AIF-C01(Foundational)→ **DEA-C01 / MLA-C01 / SAA(Associate)** → MLS-C01(Specialty)。",
  },
  {
    id: "dea-q2",
    category: "S3",
    difficulty: 2,
    question:
      "**1 ヶ月以上アクセスがなく、ミリ秒で取り出せる必要があるデータ** に最適な S3 ストレージクラスを選びなさい。",
    choices: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Deep Archive",
    ],
    correctIndex: 2,
    explanation:
      "**S3 Glacier Instant Retrieval** は **ミリ秒取り出し + 低頻度アクセス** 向け。Standard-IA より安く、Glacier Flexible(数分〜数時間取り出し)より速い。月数回程度のアクセスに最適。",
  },
  {
    id: "dea-q3",
    category: "S3",
    difficulty: 3,
    question:
      "**Athena でクエリコストを最小化したい**。最も効果が大きい施策を選びなさい。",
    choices: [
      "Bucket を Multi-Region 複製する",
      "Parquet + Snappy + パーティショニングで保存する",
      "S3 Object Lock を有効化する",
      "Lifecycle で Glacier に移動する",
    ],
    correctIndex: 1,
    explanation:
      "**Athena は スキャン量 5 USD/TB の従量課金**。**Parquet(列指向)+ Snappy 圧縮 + パーティション + Predicate Pushdown** で **不要列 ・ 不要パーティションをスキップ** し 90% 以上のコスト削減が可能。",
  },
  {
    id: "dea-q4",
    category: "Glue",
    difficulty: 2,
    question:
      "**Glue Job が処理済みデータを再処理しないように増分処理する** 機能として最も適切なものを選びなさい。",
    choices: [
      "Job Bookmarks",
      "DPU Auto Scaling",
      "Glue Crawler",
      "Glue Connection",
    ],
    correctIndex: 0,
    explanation:
      "**Job Bookmarks** は **既処理データの位置を記憶** し増分処理を実現。S3 / JDBC ソースで利用可。Crawler はスキーマ推論、DPU は計算リソース、Connection は接続情報。",
  },
  {
    id: "dea-q5",
    category: "Glue",
    difficulty: 2,
    question:
      "Glue で **Spark を使わず軽量な Python スクリプト** だけ動かすジョブ種別として最も適切なものを選びなさい。",
    choices: ["Spark Job", "Python Shell Job", "Streaming Job", "Ray Job"],
    correctIndex: 1,
    explanation:
      "**Python Shell Job** は **Spark を起動しない軽量 Python ランタイム**。pandas / boto3 程度で済む処理に最適でコスト低。大規模分散処理は Spark Job、ストリームは Streaming Job。",
  },
  {
    id: "dea-q6",
    category: "Glue",
    difficulty: 2,
    question:
      "**ノーコードで GUI ベースのデータプロファイリング ・ 変換レシピを作成** したい場合に最適な AWS サービスを選びなさい。",
    choices: ["Glue Studio", "Glue DataBrew", "Glue Crawler", "Lake Formation"],
    correctIndex: 1,
    explanation:
      "**Glue DataBrew** は **GUI 完結のノーコード ETL**(250+ 組込変換 ・ プロファイリング ・ Recipe 再利用)。**Glue Studio は Spark コードを生成する開発支援 GUI** で、両者は別物。",
  },
  {
    id: "dea-q7",
    category: "Athena",
    difficulty: 3,
    question:
      "**Athena からパーティションメタデータをカタログに登録せず、テンプレートから動的に解決** する機能を選びなさい。",
    choices: [
      "MSCK REPAIR TABLE",
      "Partition Projection",
      "Federated Query",
      "CTAS",
    ],
    correctIndex: 1,
    explanation:
      "**Partition Projection** は **パーティションメタデータをテーブルプロパティのテンプレートから動的解決** する機能。**MSCK REPAIR や Crawler が不要** で、大量パーティションでも高速。",
  },
  {
    id: "dea-q8",
    category: "Redshift",
    difficulty: 3,
    question:
      "Redshift で **大規模ファクトテーブルと小規模ディメンションテーブルを JOIN** する場合の最適な分散方式を選びなさい。",
    choices: [
      "ファクト=EVEN、ディメンション=KEY",
      "ファクト=KEY(JOIN 列)、ディメンション=ALL",
      "ファクト=ALL、ディメンション=ALL",
      "両方とも EVEN",
    ],
    correctIndex: 1,
    explanation:
      "**小規模ディメンション=ALL(全ノードに複製)、大規模ファクト=KEY(JOIN 列でハッシュ分散)** がコロケート JOIN の鉄板。**ALL は容量を食うが、JOIN シャッフルを完全排除** し高速化。",
  },
  {
    id: "dea-q9",
    category: "Redshift",
    difficulty: 3,
    question:
      "Redshift で **クラスタ間でデータを物理コピーせずに共有** する機能として最も適切なものを選びなさい。",
    choices: [
      "Spectrum",
      "Federated Query",
      "Data Sharing",
      "UNLOAD",
    ],
    correctIndex: 2,
    explanation:
      "**Redshift Data Sharing** はクラスタ間 / アカウント間で **物理コピーなしにテーブルを共有**。Spectrum は S3 を読む、Federated Query は RDS を読む、UNLOAD は S3 へエクスポート。",
  },
  {
    id: "dea-q10",
    category: "EMR",
    difficulty: 2,
    question:
      "EMR クラスタの Node 種別として **HDFS データを保持しない計算専用** ノードを選びなさい。",
    choices: ["Master Node", "Core Node", "Task Node", "Edge Node"],
    correctIndex: 2,
    explanation:
      "**Task Node** は **HDFS なし ・ 計算のみ**。Spot で安価に拡張するのが定石。Master はクラスタ管理、Core は HDFS データ + 計算。",
  },
  {
    id: "dea-q11",
    category: "Kinesis",
    difficulty: 2,
    question:
      "**サーバレスで S3 / Redshift / OpenSearch にバッファリングして配信する** Kinesis サービスを選びなさい。",
    choices: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Managed Service for Apache Flink",
      "MSK",
    ],
    correctIndex: 1,
    explanation:
      "**Kinesis Data Firehose** は **フルマネージド ・ サーバレス** な配信サービス。サイズ / 時間でバッファリングし S3 / Redshift / OpenSearch / Splunk に配信。Lambda 変換 ・ Parquet 変換も組込対応。",
  },
  {
    id: "dea-q12",
    category: "Kinesis",
    difficulty: 3,
    question:
      "Kinesis Data Streams で **コンシューマごとに 2MB/s の専有帯域** を割り当てたい。最も適切な機能を選びなさい。",
    choices: [
      "Provisioned mode",
      "On-demand mode",
      "Enhanced Fan-Out",
      "Shard splitting",
    ],
    correctIndex: 2,
    explanation:
      "**Enhanced Fan-Out** はコンシューマごとに **2MB/s の専有スループット + 70ms 以下のレイテンシ** を提供。複数 Lambda / Application を並列実行する際に必須。",
  },
  {
    id: "dea-q13",
    category: "Streaming",
    difficulty: 3,
    question:
      "**SQL でリアルタイムウィンドウ集計 ・ JOIN を行いたい**。最も適切な AWS サービスを選びなさい。",
    choices: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Managed Service for Apache Flink",
      "Athena",
    ],
    correctIndex: 2,
    explanation:
      "**Managed Service for Apache Flink(旧 Kinesis Data Analytics)** は **Apache Flink ベースのリアルタイム ETL / ウィンドウ集計 / JOIN**。SQL / Python / Java / Scala で実装可能。",
  },
  {
    id: "dea-q14",
    category: "Orchestration",
    difficulty: 2,
    question:
      "**サーバレス + AWS サービス連携 + 低コスト** でデータパイプラインをオーケストレーションしたい。最適なサービスを選びなさい。",
    choices: ["Step Functions", "MWAA", "Glue Workflows", "EventBridge Pipes"],
    correctIndex: 0,
    explanation:
      "**Step Functions** は **サーバレス ・ AWS ネイティブ統合 ・ 従量課金** で AWS 連携が最強。**MWAA は Apache Airflow フルマネージドだが常時稼働で高コスト**。Python DAG 資産がある場合のみ MWAA 推奨。",
  },
  {
    id: "dea-q15",
    category: "Orchestration",
    difficulty: 2,
    question:
      "Step Functions のワークフロー種別のうち、**5 分以内 ・ 高頻度 ・ Lambda 連携向け** のものを選びなさい。",
    choices: [
      "Standard Workflow",
      "Express Workflow",
      "Synchronous Express",
      "State Machine v2",
    ],
    correctIndex: 1,
    explanation:
      "**Express Workflow** は **5 分以内 ・ 高頻度実行 ・ at-least-once / Lambda リアルタイム連携** 向け。Standard は最大 1 年実行 ・ exactly-once、ETL 向け。",
  },
  {
    id: "dea-q16",
    category: "Iceberg",
    difficulty: 3,
    question:
      "Apache Iceberg テーブルが提供する機能として **誤っているもの** を選びなさい。",
    choices: [
      "ACID トランザクション",
      "スキーマ進化(列追加 ・ 名前変更)",
      "Time Travel(過去スナップショットクエリ)",
      "Spark を使わず HDFS だけで動作する",
    ],
    correctIndex: 3,
    explanation:
      "Iceberg は **Spark / Trino / Flink / Athena など複数エンジン** で動作。**HDFS 専用ではない**(S3 / GCS など任意のオブジェクトストレージで動作)。ACID / スキーマ進化 / Time Travel / Hidden Partitioning が主要機能。",
  },
  {
    id: "dea-q17",
    category: "Lake Formation",
    difficulty: 3,
    question:
      "Lake Formation で **タグベースで部署 ・ センシティビティ単位の権限管理** を実現する機能を選びなさい。",
    choices: [
      "IAM Identity Center",
      "LF-Tag",
      "Resource Tag",
      "S3 Object Tag",
    ],
    correctIndex: 1,
    explanation:
      "**LF-Tag(Lake Formation Tag)** は **データベース / テーブル / 列にタグを付与し、タグベースで権限ポリシー** を管理。属性ベースアクセス制御(ABAC)を実現。",
  },
  {
    id: "dea-q18",
    category: "Security",
    difficulty: 2,
    question:
      "**S3 への KMS 暗号化呼び出し回数を削減してコストを下げる** 機能として最も適切なものを選びなさい。",
    choices: [
      "S3 Bucket Keys",
      "SSE-S3",
      "Customer-Managed Key",
      "Client-Side Encryption",
    ],
    correctIndex: 0,
    explanation:
      "**S3 Bucket Keys** は **Bucket 単位の中間鍵を生成** し、KMS API 呼び出し回数を最大 99% 削減。SSE-KMS のコスト最適化テクニック。",
  },
  {
    id: "dea-q19",
    category: "Security",
    difficulty: 3,
    question:
      "**S3 / Glue Data Catalog 内の PII / 機微情報を ML ベースで自動検出** するサービスを選びなさい。",
    choices: ["Amazon Macie", "AWS Config", "Trusted Advisor", "GuardDuty"],
    correctIndex: 0,
    explanation:
      "**Amazon Macie** は **S3 内の PII / 機微情報(クレジットカード番号 ・ 氏名 ・ 住所など)を ML ベースで自動検出**。GuardDuty は脅威検知、Config は構成管理、Trusted Advisor は推奨事項。",
  },
  {
    id: "dea-q20",
    category: "Cost",
    difficulty: 2,
    question:
      "**全アカウント横断で S3 ストレージ使用状況を可視化** するサービスを選びなさい。",
    choices: [
      "S3 Storage Lens",
      "Cost Explorer",
      "CloudWatch Metrics",
      "Trusted Advisor",
    ],
    correctIndex: 0,
    explanation:
      "**S3 Storage Lens** は **組織横断 ・ アカウント横断 ・ Bucket 単位** のストレージメトリクス可視化。コスト ・ 使用率 ・ ベストプラクティス遵守を一覧化。",
  },
  {
    id: "dea-q21",
    category: "Glue",
    difficulty: 3,
    question:
      "**Glue Job で Kafka(MSK)から取り込んだストリームを 1 分ごとに Parquet で書き込みたい**。最適な Job 種別を選びなさい。",
    choices: [
      "Spark Job(Batch)",
      "Python Shell Job",
      "Streaming Job",
      "Ray Job",
    ],
    correctIndex: 2,
    explanation:
      "**Glue Streaming Job** は **Kinesis / MSK からのストリーム ETL** 専用。Spark Structured Streaming ベースでマイクロバッチ間隔(`window`)を秒/分単位で指定。Spark Job(Batch)は静止データ用。",
  },
  {
    id: "dea-q22",
    category: "Redshift",
    difficulty: 3,
    question:
      "Redshift で **同時クエリ数の急増に対応してクラスタを一時的に複製スケールアウト** する機能を選びなさい。",
    choices: [
      "Workload Management(WLM)",
      "Concurrency Scaling",
      "Result Cache",
      "Data Sharing",
    ],
    correctIndex: 1,
    explanation:
      "**Concurrency Scaling** は **読込クエリのキューが溜まると自動で別クラスタを起動して並列処理**。1 時間/日まで無料(超過分は秒単位課金)。WLM は優先度 ・ メモリ割当の管理。",
  },
  {
    id: "dea-q23",
    category: "Redshift",
    difficulty: 3,
    question:
      "Redshift Spectrum と Athena の違いとして **誤っているもの** を選びなさい。",
    choices: [
      "Spectrum は Redshift クラスタの計算リソースを利用するが、Athena は完全サーバレス",
      "Spectrum は Redshift から S3 上の外部テーブルを読むが、Athena は単独で S3 を読む",
      "両者とも内部エンジンは同じ Presto / Trino 系である",
      "Spectrum は無料で使えるが、Athena は有料である",
    ],
    correctIndex: 3,
    explanation:
      "**両者ともスキャン量に応じた従量課金**。Spectrum は **Redshift クラスタからの S3 外部テーブル読込**、Athena は **完全サーバレスの S3 SQL**。エンジンは Presto / Trino 系で類似。",
  },
  {
    id: "dea-q24",
    category: "Migration",
    difficulty: 3,
    question:
      "**オンプレ Oracle から AWS RDS PostgreSQL への CDC(変更データキャプチャ)を含めた移行** に最適な AWS サービスを選びなさい。",
    choices: [
      "AWS DMS(Database Migration Service)",
      "AWS DataSync",
      "AWS Snowball",
      "AWS Backup",
    ],
    correctIndex: 0,
    explanation:
      "**AWS DMS** は **異種 DB 間の移行(Oracle → PostgreSQL 等)+ CDC** を提供。**SCT(Schema Conversion Tool)で DDL 変換 → DMS でデータ移行 + 継続的 CDC**。DataSync はファイル、Snowball は大容量物理転送。",
  },
  {
    id: "dea-q25",
    category: "Zero-ETL",
    difficulty: 3,
    question:
      "**Aurora MySQL のトランザクションデータを ETL なしで Redshift から分析する** AWS の機能を選びなさい。",
    choices: [
      "Aurora-Redshift Zero-ETL Integration",
      "DMS Continuous Replication",
      "Glue Crawler",
      "Redshift Federated Query",
    ],
    correctIndex: 0,
    explanation:
      "**Aurora-Redshift Zero-ETL Integration**(2023 GA)は **Aurora MySQL/PostgreSQL のトランザクションを Redshift に自動レプリケーション**(秒単位)。**DMS のような ETL 構築不要**。HTAP の AWS 実装。",
  },
  {
    id: "dea-q26",
    category: "Governance",
    difficulty: 3,
    question:
      "AWS の **データメッシュ ・ データプロデューサー / コンシューマーのセルフサービス** 統合プラットフォームを選びなさい。",
    choices: [
      "Lake Formation",
      "DataZone",
      "Glue Data Catalog",
      "Macie",
    ],
    correctIndex: 1,
    explanation:
      "**Amazon DataZone** は **Data Mesh 統合プラットフォーム**。ドメイン ・ プロジェクト ・ Asset 単位でカタログ ・ ガバナンス ・ Producer/Consumer ワークフローを提供。Lake Formation はテーブル単位の権限制御。",
  },
  {
    id: "dea-q27",
    category: "Glue",
    difficulty: 2,
    question:
      "**Kafka / Kinesis のメッセージスキーマを集中管理し、互換性をチェック** する機能として最も適切なものを選びなさい。",
    choices: [
      "Glue Data Catalog",
      "Glue Schema Registry",
      "MSK Connect",
      "EventBridge Schema Registry",
    ],
    correctIndex: 1,
    explanation:
      "**Glue Schema Registry** は **Kafka(MSK)/ Kinesis 用のスキーマ管理**(Avro / JSON / Protobuf)。Producer/Consumer 間の互換性チェック ・ バージョニング。EventBridge Schema Registry は EventBridge 専用。",
  },
  {
    id: "dea-q28",
    category: "Athena",
    difficulty: 3,
    question:
      "**Athena から Iceberg テーブルに対して `MERGE INTO` で upsert を実行** したい。最低限必要な要件として **誤っているもの** を選びなさい。",
    choices: [
      "Athena Engine v3 を使うこと",
      "テーブル形式を ICEBERG にすること",
      "Glue Data Catalog で Iceberg 形式として登録",
      "Redshift クラスタを別途プロビジョニングすること",
    ],
    correctIndex: 3,
    explanation:
      "**Redshift は不要**。**Athena Engine v3 + Iceberg テーブル + Glue Catalog** だけで MERGE / UPDATE / DELETE / Time Travel が可能。**サーバレスで ACID DML** を実現。",
  },
  {
    id: "dea-q29",
    category: "BI",
    difficulty: 2,
    question:
      "**AWS ネイティブ BI サービス** で SPICE インメモリエンジン ・ Q(自然言語クエリ)・ 埋め込み分析を提供するものを選びなさい。",
    choices: [
      "QuickSight",
      "Athena",
      "Redshift",
      "OpenSearch Dashboards",
    ],
    correctIndex: 0,
    explanation:
      "**Amazon QuickSight** は AWS ネイティブ BI(Tableau / Power BI / Looker に相当)。**SPICE インメモリ ・ Q(自然言語)・ 埋め込み分析 ・ ML Insights**。Athena / Redshift / S3 と統合。",
  },
  {
    id: "dea-q30",
    category: "CDC",
    difficulty: 3,
    question:
      "**RDS / Aurora の変更を S3 / Redshift にリアルタイム配信** したい。**フルマネージド** な選択肢を選びなさい。",
    choices: [
      "Database Migration Service(DMS)",
      "AWS DataSync",
      "Storage Gateway",
      "Redshift Spectrum",
    ],
    correctIndex: 0,
    explanation:
      "**DMS の CDC モード** で **RDS / Aurora の binlog 変更を S3 / Redshift / Kinesis に継続レプリケーション**。Aurora-Redshift Zero-ETL がより新しいシンプル選択肢、DMS は柔軟性が高い汎用選択肢。",
  },
  { id: "dea-q31", category: "S3 Select", difficulty: 3, question: "**S3 Select** の用途として最も適切なものを選びなさい。", choices: ["S3 オブジェクト内の必要列 ・ 行のみを SQL で取得 → 転送量削減", "Bucket 全文検索", "暗号化", "VPC 内通信"], correctIndex: 0, explanation: "**S3 Select**: CSV / JSON / Parquet 内を SQL でフィルタ + 列選択 → アプリへ転送量削減。**Athena との違い**: 単一オブジェクトのみ ・ 軽量 ・ 安価。" },
  { id: "dea-q32", category: "Lake Formation", difficulty: 3, question: "Lake Formation の **LF-Tags** の利点として最も適切なものを選びなさい。", choices: ["タグベースで横断的に権限を一括管理(ABAC)", "テーブル単位のみ", "ユーザ単位のみ", "暗号化のみ"], correctIndex: 0, explanation: "**LF-Tags(タグベース ・ ABAC)**: DB / Table / Column にタグ + ユーザ / Role にタグ条件で権限定義 → スケーラブル。**従来 IAM 風 ・ 名前付き Grant の管理破綻を解決**。" },
  { id: "dea-q33", category: "Glue Streaming", difficulty: 3, question: "**AWS Glue Streaming ETL** の特徴として最も適切なものを選びなさい。", choices: ["Kinesis / MSK ストリーム → Spark Structured Streaming で連続 ETL", "Batch 専用", "Lambda の代替", "GPU 必須"], correctIndex: 0, explanation: "**Glue Streaming**: Spark Structured Streaming ベース。マイクロバッチ(秒〜分)・ Schema 検出 ・ Glue Schema Registry 連携。Kinesis / MSK → S3 / Redshift。" },
  { id: "dea-q34", category: "EMR", difficulty: 3, question: "**EMR Serverless** が **EMR on EC2** より優れる場面として最も適切なものを選びなさい。", choices: ["クラスタ管理不要 + 自動スケール + 短時間ジョブで安価", "高度カスタマイズ", "Spot 利用", "長時間 Always-on"], correctIndex: 0, explanation: "**EMR Serverless**: Spark / Hive をサーバレス実行 → クラスタ起動 ・ 終了不要。**短時間 ・ 間欠 ・ 開発用** に最適。**EMR on EC2** は長時間 Always-on + 高度設定向け。" },
  { id: "dea-q35", category: "Glue Catalog", difficulty: 3, question: "Glue Data Catalog の **テーブル定義** に含まれる情報として **誤っているもの** を選びなさい。", choices: ["スキーマ ・ パーティション ・ ストレージロケーション", "ファイル形式 ・ シリアライザ", "圧縮形式", "実データの全文"], correctIndex: 3, explanation: "**Catalog はメタデータのみ**(実データは S3 等)。スキーマ / Partition / Location / SerDe / Format / Compression / Statistics(行数 / サイズ)。" },
  { id: "dea-q36", category: "Glue Crawler", difficulty: 3, question: "**Glue Crawler** の挙動として **誤っているもの** を選びなさい。", choices: ["S3 / JDBC / DynamoDB 等を Scan", "スキーマ ・ パーティションを自動推論", "テーブル / Partition 追加", "全行をスキャンして表示"], correctIndex: 3, explanation: "**Crawler**: メタデータ収集のみ(実データ全行スキャンしない)。サンプリングでスキーマ推論。**Cron** スケジュール + Incremental Crawl で省コスト。" },
  { id: "dea-q37", category: "Athena", difficulty: 3, question: "**Athena Workgroup** の用途として最も適切なものを選びなさい。", choices: ["クエリ単位の課金タグ + データ スキャン上限 + 結果保存先制御", "GUI のみ", "DBA 専用", "認証"], correctIndex: 0, explanation: "**Workgroup**: 部署 ・ プロジェクト別管理。**Data Scan Limit / Query Result Encryption / Result Location / Cost Allocation Tag**。Engine v3 を Workgroup で固定指定も。" },
  { id: "dea-q38", category: "Redshift", difficulty: 3, question: "**Redshift Serverless** が **Redshift Provisioned** より優れる場面として最も適切なものを選びなさい。", choices: ["変動的ワークロード + 運用ゼロ + RPU 自動スケール", "Always-on で安定", "高度ノード制御", "GUI"], correctIndex: 0, explanation: "**Redshift Serverless**: コンピュートとストレージ分離 + RPU(Redshift Processing Unit)で自動スケール。**PoC ・ 開発 ・ 変動ワークロード** に最適。Provisioned は固定 ・ 大規模安定向け。" },
  { id: "dea-q39", category: "Redshift", difficulty: 3, question: "Redshift で **VACUUM** が必要なケースとして最も適切なものを選びなさい。", choices: ["大量 DELETE 後 + ソート順崩れの解消", "INSERT のみ", "クラスタ起動時", "全クエリ前"], correctIndex: 0, explanation: "**VACUUM**: DELETE で生成された Deleted Row のスペース回収 + ソート再構成。**RA3 ノードでは Auto VACUUM**(自動)。Provisioned で手動 VACUUM 必要なケース減少中。" },
  { id: "dea-q40", category: "Kinesis", difficulty: 3, question: "**Kinesis Data Streams** の **Shard** あたりの上限として最も適切なものを選びなさい。", choices: ["Write 1 MB/s + 1000 records/s, Read 2 MB/s", "Write 10 GB/s", "Read 無制限", "Shard なし"], correctIndex: 0, explanation: "**Shard**: Write 1 MB/s + 1000 records/s, Read 2 MB/s。**On-Demand**(2021)で自動スケール ・ Shard 管理不要に。" },
  { id: "dea-q41", category: "Firehose", difficulty: 3, question: "**Kinesis Data Firehose** の **データ変換** として最も適切なものを選びなさい。", choices: ["Lambda で行単位変換 + Parquet/ORC への列指向変換", "全データを Lambda 経由", "変換不可", "Athena 必須"], correctIndex: 0, explanation: "**Firehose 変換**: Lambda(任意ロジック)+ 組込 JSON → Parquet/ORC 変換(Glue Catalog 連携)+ Dynamic Partitioning。S3 Bucket への配信前に処理。" },
  { id: "dea-q42", category: "MSK", difficulty: 3, question: "**Amazon MSK** が **Kinesis Data Streams** より優れる場面として最も適切なものを選びなさい。", choices: ["既存 Kafka エコシステム ・ Connect / KSQL 活用 + 標準プロトコル", "AWS 専用", "GPU 利用", "コスト最小"], correctIndex: 0, explanation: "**MSK**: Apache Kafka フルマネージド。**Kafka Connect / KSQL / Schema Registry / 標準プロトコル**。マルチクラウド ・ ハイブリッド ・ 移行容易。" },
  { id: "dea-q43", category: "Step Functions", difficulty: 3, question: "**AWS Step Functions** の **Express Workflow** が **Standard** より優れる点として最も適切なものを選びなさい。", choices: ["高スループット ・ 短時間 ・ 低コスト(従量 + 1ms 単位課金)", "Always-on", "GPU 利用", "GUI"], correctIndex: 0, explanation: "**Express**: 高頻度 ・ 短時間(< 5 分)・ Amazon API Gateway ・ Lambda 連携。**Standard**: 長時間(< 1 年)・ Exactly-once。価格モデル異なる。" },
  { id: "dea-q44", category: "MWAA", difficulty: 3, question: "**Amazon MWAA(Managed Workflows for Apache Airflow)** の主要利点として最も適切なものを選びなさい。", choices: ["Airflow OSS 互換 + マネージド + VPC 統合", "GUI 完結", "DB 不要", "GPU 必須"], correctIndex: 0, explanation: "**MWAA**: Apache Airflow フルマネージド。**Composer(GCP)・ Azure Data Factory** に相当。複雑 ETL DAG + Python 柔軟性。" },
  { id: "dea-q45", category: "Iceberg", difficulty: 3, question: "**Apache Iceberg** が **Hive Table Format** より優れる点として **誤っているもの** を選びなさい。", choices: ["スキーマ進化(列追加 ・ 削除 ・ 型変更)", "Hidden Partition", "ACID トランザクション", "Spark の置換"], correctIndex: 3, explanation: "**Iceberg**: Hive 後継テーブル形式(Spark / Trino / Athena 等で使用)。Schema Evolution / Hidden Partition / ACID / Time Travel。**Spark は実行エンジン、Iceberg はテーブル形式**(別レイヤー)。" },
  { id: "dea-q46", category: "DataZone", difficulty: 3, question: "**Amazon DataZone** の用途として最も適切なものを選びなさい。", choices: ["Data Mesh + Data Catalog + ガバナンス + アクセスワークフロー統合", "DB 管理", "GPU 制御", "認証"], correctIndex: 0, explanation: "**DataZone**: Domain / Project / Asset 階層で Data Mesh。**Publish / Subscribe ワークフロー** + ガバナンス + 検索 + Lineage。" },
  { id: "dea-q47", category: "監視", difficulty: 3, question: "**CloudWatch Logs Insights** の用途として最も適切なものを選びなさい。", choices: ["ログを SQL 風クエリで集計 ・ 分析(対話的 EDA)", "GUI 編集", "DBA 専用", "認証管理"], correctIndex: 0, explanation: "**CloudWatch Logs Insights**: SQL 風クエリ(`fields / filter / stats / sort`)。**運用障害分析 ・ 性能トレース ・ セキュリティ調査** に。" },
  { id: "dea-q48", category: "セキュリティ", difficulty: 3, question: "**S3 Server-Side Encryption** の選択肢として **誤っているもの** を選びなさい。", choices: ["SSE-S3(AWS 管理鍵)", "SSE-KMS(KMS 鍵 + 監査)", "SSE-C(顧客提供鍵)", "SSE-Email"], correctIndex: 3, explanation: "**SSE 種別**: S3(AWS 管理)・ KMS(KMS で監査 ・ ローテーション)・ C(クライアントが鍵管理 ・ 透過暗号化)・ DSSE-KMS(2 重暗号化)。Email は無関係。" },
  { id: "dea-q49", category: "GovCloud", difficulty: 3, question: "**規制業界(金融 ・ 医療 ・ 政府)** のデータエンジニアリングで重要な要素として **誤っているもの** を選びなさい。", choices: ["VPC + Private Endpoint", "KMS / CMK", "Lake Formation 細粒度アクセス", "Public Bucket"], correctIndex: 3, explanation: "**規制業界**: Private 接続 + 暗号化 + 細粒度アクセス + 監査(CloudTrail / Lake Formation Audit)。**Public Bucket は禁忌**。S3 Block Public Access 推奨。" },
  { id: "dea-q50", category: "次のステップ", difficulty: 1, question: "DEA-C01 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["MLA-C01 / MLS-C01(ML 連携)・ SAP-C02(全体設計)・ Specialty", "ITパスポート", "Cloud Practitioner", "再受験"], correctIndex: 0, explanation: "**DEA-C01 → ML 系**(MLA-C01 / MLS-C01)で MLOps 拡張、**SAP-C02** で全体設計、**Security / Networking Specialty** で深掘り。**Snowflake / Databricks** で OSS / マルチクラウド側へ展開も。" },
  { id: "dea-q51", category: "Ingest", difficulty: 3, question: "**Kinesis Data Streams** と **Kinesis Data Firehose** の本質的な違いとして最も適切なものを選びなさい。", choices: ["KDS=自前 Consumer / Shard 管理(低レイテンシ)、Firehose=フルマネージド配信(S3/Redshift)", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**KDS**: Shard / Consumer 自前管理 ・ <1 秒レイテンシ ・ 多 Consumer。**Firehose**: フルマネージド ・ S3 / Redshift / Splunk / OpenSearch 配信 ・ Buffer / 変換 / 圧縮 ・ 60 秒最小。" },
  { id: "dea-q52", category: "Streaming", difficulty: 3, question: "**MSK(Managed Kafka)** を選ぶ典型シーンとして最も適切なものを選びなさい。", choices: ["Kafka エコシステム互換(Connect / Streams)・ マルチ Consumer Group ・ Exactly Once 必須", "学習用 GPU", "Endpoint", "ETL 専用"], correctIndex: 0, explanation: "**MSK**: Apache Kafka 完全互換。**Connect / Schema Registry / MirrorMaker** あり。**MSK Serverless** で運用簡易化。**KDS との差**: Consumer Group / Compaction / Exactly-Once / OSS 互換。" },
  { id: "dea-q53", category: "Storage", difficulty: 3, question: "**S3 Intelligent-Tiering** の自動移行先として最も適切なものを選びなさい。", choices: ["Frequent → Infrequent → Archive Instant → Archive → Deep Archive を自動", "GPU 階層", "CPU 階層", "認証階層"], correctIndex: 0, explanation: "**Intelligent-Tiering**: アクセスパターンを監視 → 自動階層移行(取り出しコストなし)。**未知 / 変動アクセスデータの最適化** に。Glacier 系は復元時間 / コストとトレードオフ。" },
  { id: "dea-q54", category: "Lakehouse", difficulty: 3, question: "**Apache Iceberg / Hudi / Delta Lake** の共通機能として最も適切なものを選びなさい。", choices: ["ACID トランザクション ・ Time Travel ・ Schema Evolution ・ Partition Evolution", "GPU 推論", "Endpoint", "認証"], correctIndex: 0, explanation: "**Open Table Format**: S3 上で ACID / Time Travel / Upsert / Schema Evolution。**Athena / EMR / Redshift / Glue** で Iceberg ネイティブサポート。Data Lakehouse の中核。" },
  { id: "dea-q55", category: "Glue", difficulty: 3, question: "**AWS Glue Job Bookmark** の用途として最も適切なものを選びなさい。", choices: ["処理済みデータを記録 → 次回実行で増分処理(重複防止)", "GPU 管理", "認証管理", "Cost 管理"], correctIndex: 0, explanation: "**Job Bookmark**: 前回処理位置を保存 → 次回は差分のみ処理。**ENABLE / DISABLE / PAUSE**。S3 / DynamoDB / RDS など Connector 別に対応。冪等性 + コスト削減。" },
  { id: "dea-q56", category: "Athena", difficulty: 3, question: "**Athena Federated Query** の用途として最も適切なものを選びなさい。", choices: ["S3 だけでなく RDS / DynamoDB / MySQL 等を **Lambda Connector** で横断クエリ", "GUI", "Endpoint", "認証"], correctIndex: 0, explanation: "**Federated Query**: Lambda ベースのコネクタで S3 以外のデータソースを SQL 横断。**RDBMS / NoSQL / SaaS API** 統合。クエリ最適化 ・ Partition Pushdown も対応。" },
  { id: "dea-q57", category: "Redshift", difficulty: 3, question: "**Redshift RA3 + Managed Storage** の利点として最も適切なものを選びなさい。", choices: ["Compute と Storage 分離 → 独立スケール ・ Concurrency Scaling / Data Sharing 対応", "GPU 専用", "GUI", "認証"], correctIndex: 0, explanation: "**RA3**: Managed Storage(S3 + SSD キャッシュ)で Compute と分離。**Data Sharing**(クラスター間共有)・ **Concurrency Scaling**(自動拡張)・ **AQUA**(クエリアクセラレーション)。" },
  { id: "dea-q58", category: "Redshift", difficulty: 3, question: "**Redshift Materialized View** の用途として最も適切なものを選びなさい。", choices: ["事前計算結果を保持 ・ Incremental Refresh で頻出集計を高速化", "Endpoint", "認証", "GPU"], correctIndex: 0, explanation: "**Materialized View**: SELECT 結果を実体化。**Auto Refresh(増分)** ・ **Query Rewrite**(オプティマイザが自動利用)。BI ダッシュボード ・ 頻出集計の高速化に必須。" },
  { id: "dea-q59", category: "EMR", difficulty: 3, question: "**EMR Serverless** と **EMR on EC2 / EKS** の使い分けとして最も適切なものを選びなさい。", choices: ["Serverless=Spark/Hive を瞬時起動(運用フリー)、EC2/EKS=細かい設定 ・ Spot 大量利用", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**EMR Serverless**: 起動秒 ・ Auto Scale ・ JVM 内部最適化。**EMR on EC2**: 細かなチューニング ・ Spot ・ HBase / Presto 等。**EMR on EKS**: Kubernetes 統合 ・ マルチテナント。" },
  { id: "dea-q60", category: "Quality", difficulty: 3, question: "**AWS Glue Data Quality** の特徴として最も適切なものを選びなさい。", choices: ["DQDL(Data Quality Definition Language)でルール定義 ・ Job / Schedule 実行 ・ レポート", "GUI のみ", "学習用", "Endpoint"], correctIndex: 0, explanation: "**Glue Data Quality**: **DQDL** でルール(Completeness / Uniqueness / Distinct Count / Range / Custom SQL)。Glue Studio / Lake Formation 統合。**Data Mesh の品質保証** に活用。" },
  { id: "dea-q61", category: "Lake Formation", difficulty: 3, question: "**Lake Formation Tag-Based Access Control(LF-TBAC)** の利点として最も適切なものを選びなさい。", choices: ["列 ・ 行 ・ セル単位のアクセス制御を Tag で表現 → スケーラブル", "GUI", "GPU", "認証 SSO"], correctIndex: 0, explanation: "**LF-TBAC**: Column / Row / Cell Level Security を Tag(Department=Finance 等)で制御。**Tag を Persona 別に付与** → 多数の Database / Table を一括管理。GDPR / HIPAA 対応に。" },
  { id: "dea-q62", category: "Orchestration", difficulty: 3, question: "**AWS Step Functions** と **MWAA(Managed Airflow)** の選び方として最も適切なものを選びなさい。", choices: ["Step Functions=AWS ネイティブ統合 ・ サーバーレス、MWAA=Airflow OSS / 複雑 DAG ・ オンプレ移行", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**Step Functions**: AWS サービス ASL ベースで統合(Express / Standard)。**MWAA**: Airflow DAG / OSS Operator / 多クラウド ・ オンプレ統合。複雑な依存 / OSS なら MWAA。" },
  { id: "dea-q63", category: "Cost", difficulty: 3, question: "**S3 Storage Lens** の用途として最も適切なものを選びなさい。", choices: ["全 Bucket / Region のストレージ ・ アクティビティ可視化 → コスト最適化", "GPU 監視", "認証監視", "Endpoint 監視"], correctIndex: 0, explanation: "**Storage Lens**: 組織全体の S3 利用状況(サイズ / Object 数 / Tier / Encryption / Public)を可視化。**Advanced Tier** で詳細メトリクス + Activity Tracking + Recommendations。" },
  { id: "dea-q64", category: "Modeling", difficulty: 3, question: "**Star Schema** と **Snowflake Schema** の違いとして最も適切なものを選びなさい。", choices: ["Star=Dim 非正規化(JOIN 少)、Snowflake=Dim 正規化(JOIN 多 ・ 重複少)", "両者同じ", "OLTP vs OLAP", "学習 vs 推論"], correctIndex: 0, explanation: "**Star**: Fact + 非正規化 Dim(JOIN シンプル ・ BI 高速)。**Snowflake**: Dim 正規化 → 重複少 ・ 整合性高 ・ JOIN 増。Redshift / Snowflake DWH では Star が一般的。" },
  { id: "dea-q65", category: "DataMesh", difficulty: 3, question: "**Data Mesh** 原則と AWS 実装の対応として最も適切なものを選びなさい。", choices: ["Domain Ownership + Data as Product + Self-Serve Platform + Federated Governance を Lake Formation で実現", "全データ単一 Lake", "全 ETL 単一チーム", "認証なし"], correctIndex: 0, explanation: "**Data Mesh**(Zhamak Dehghani 提唱): 4 原則。AWS では**Lake Formation Cross-Account Share / Data Catalog / LF-TBAC / DataZone(Domain / Project)** で実装。Producer / Consumer 分離。" },
  { id: "dea-q66", category: "Glue", difficulty: 3, question: "**Glue Crawler** の役割として最も適切なものを選びなさい。", choices: ["S3 / RDS をスキャン → Schema 推測 → Glue Data Catalog 更新", "ETL 実行", "GUI", "認証"], correctIndex: 0, explanation: "**Glue Crawler**: スキャン → スキーマ推測 → Catalog 自動更新。**Schedule / On-demand**。**Athena / Redshift Spectrum / EMR** が Catalog 経由で参照。" },
  { id: "dea-q67", category: "Athena", difficulty: 3, question: "**Athena** の課金体系として最も適切なものを選びなさい。", choices: ["スキャンしたデータ量(TB)で課金", "クエリ回数", "時間", "GPU 時間"], correctIndex: 0, explanation: "**Athena 料金**: スキャン TB($5/TB)+ Provisioned Capacity(2024+)。**Parquet / ORC + Partition + Compression**で大幅削減。**Athena Workgroup** でコスト管理。" },
  { id: "dea-q68", category: "Athena", difficulty: 3, question: "**Athena Federated Query** の用途として最も適切なものを選びなさい。", choices: ["RDS / DynamoDB / Redshift / Snowflake 等を Athena から横断 SQL", "S3 のみ", "GPU", "認証"], correctIndex: 0, explanation: "**Federated Query**: Lambda Connector で複数データ源横断。**MySQL / PG / Redshift / DDB / Snowflake / SaaS API**。データ移動なしで統合分析。" },
  { id: "dea-q69", category: "Redshift", difficulty: 3, question: "**Redshift RA3 + Managed Storage** の利点として最も適切なものを選びなさい。", choices: ["Compute / Storage 分離 + Data Sharing + Concurrency Scaling", "全 Cluster Compute 専用", "ストレージ固定", "認証"], correctIndex: 0, explanation: "**RA3**: ストレージ S3(Managed Storage)・ **Data Sharing**(Cross-Cluster)・ **Concurrency Scaling**(自動拡張)・ **AQUA**(クエリアクセラレータ)・ Provisioned + Serverless 両対応。" },
  { id: "dea-q70", category: "Redshift", difficulty: 3, question: "**Redshift Spectrum** の用途として最も適切なものを選びなさい。", choices: ["S3 上の Parquet / ORC を Redshift から直接 SQL", "Cluster ストレージ", "GPU", "認証"], correctIndex: 0, explanation: "**Redshift Spectrum**: S3 を External Table 化 → ペタバイト級分析。**Cluster Storage を超えるデータ**を扱える。Athena と類似だが Cluster 利用の有無で使い分け。" },
  { id: "dea-q71", category: "EMR", difficulty: 3, question: "**EMR Serverless** vs **EMR on EC2 / EKS** の使い分けとして最も適切なものを選びなさい。", choices: ["Serverless=瞬時起動 ・ Spark Batch、EC2=細設定 / Spot、EKS=K8s 統合", "両者同じ", "Serverless=GUI", "EKS=単一 VM"], correctIndex: 0, explanation: "**EMR Serverless**: Workload Run 単位 ・ 起動秒 ・ Auto Scale。**EMR on EC2**: HBase / Hive / Presto 等の長期 Cluster + Spot。**EMR on EKS**: Kubernetes 統合 / 既存 K8s 環境活用。" },
  { id: "dea-q72", category: "Streaming", difficulty: 3, question: "**Kinesis Data Streams** の **Shard** の役割として最も適切なものを選びなさい。", choices: ["並列処理単位(1 Shard = 1 MB/s write / 2 MB/s read)", "認証単位", "課金単位", "GPU"], correctIndex: 0, explanation: "**KDS Shard**: 並列処理 ・ Partition Key で振り分け。**Resharding**(Split / Merge)でスケール。**Enhanced Fan-Out**(専用 Consumer / 2 MB/s)で多 Consumer 対応。" },
  { id: "dea-q73", category: "Streaming", difficulty: 3, question: "**Kinesis Firehose** の特徴として最も適切なものを選びなさい。", choices: ["フルマネージド配信 ・ S3 / Redshift / OpenSearch / Splunk へ", "Shard 管理", "Consumer 自前", "認証"], correctIndex: 0, explanation: "**Firehose(Data Streams 派生)**: 自動 Buffering(MB / 秒)+ 圧縮 / 暗号化 / Lambda 変換 → Destination 配信。**KDS との違い**: フルマネージド + 配信特化。" },
  { id: "dea-q74", category: "MSK", difficulty: 3, question: "**Amazon MSK Serverless** の特徴として最も適切なものを選びなさい。", choices: ["Apache Kafka 完全互換 + Cluster 管理不要 + 自動スケール", "Kafka 非互換", "GPU 必須", "認証 SSO 専用"], correctIndex: 0, explanation: "**MSK Serverless**: Kafka 互換のフルマネージド ・ Capacity 設定不要 ・ Auto Scale ・ Connect / Schema Registry 統合。**MSK Provisioned**(Cluster 設定)と使い分け。" },
  { id: "dea-q75", category: "Iceberg", difficulty: 3, question: "**S3 Tables**(2024+)の用途として最も適切なものを選びなさい。", choices: ["S3 上の Apache Iceberg 完全マネージド ・ AWS Analytics 統合", "Athena 専用", "GUI", "認証"], correctIndex: 0, explanation: "**S3 Tables**(2024 re:Invent): Iceberg-native managed buckets ・ **Athena / EMR / Redshift / Glue / Bedrock 統合**・ Compaction / Snapshot 管理を AWS が実施。" },
  { id: "dea-q76", category: "Quality", difficulty: 3, question: "**AWS Glue Data Quality** の DQDL の用途として最も適切なものを選びなさい。", choices: ["Data Quality Rule を YAML 風 DSL で定義 → 自動評価", "GUI 設計", "認証", "GPU"], correctIndex: 0, explanation: "**Glue Data Quality**(2023 GA): DQDL(Data Quality Definition Language)で **Completeness / Uniqueness / Custom SQL** ルール定義。**Schedule + Score / Lake Formation 統合**。" },
  { id: "dea-q77", category: "Governance", difficulty: 3, question: "**Amazon DataZone** の役割として最も適切なものを選びなさい。", choices: ["Domain ベース Data Catalog + Producer/Consumer 仲介 + Lineage", "GPU 提供", "認証 SSO", "Cost 管理"], correctIndex: 0, explanation: "**DataZone**(2023 GA): **Data Mesh の AWS 実装**。Domain / Project / Asset 階層 ・ Subscription Approval Flow ・ Lake Formation 統合 ・ AI / ML アセット共有。" },
  { id: "dea-q78", category: "Lake Formation", difficulty: 3, question: "**Lake Formation Tag-Based Access Control(LF-TBAC)** の利点として最も適切なものを選びなさい。", choices: ["列 / 行 / セル単位の Permission を Tag で表現 → スケーラブル", "GUI", "GPU", "認証 SSO"], correctIndex: 0, explanation: "**LF-TBAC**: Tag(例: Department=Finance)を Catalog 資産に付与 → Persona 別 Permission 一括管理。**数千列 / 数万行制御**を Tag で抽象化。GDPR / HIPAA 対応に必須。" },
  { id: "dea-q79", category: "Cost", difficulty: 3, question: "**AWS データ基盤のコスト最適化** として **誤っているもの** を選びなさい。", choices: ["Parquet + Partition で Scan 削減", "S3 Intelligent-Tiering / Glacier 階層化", "Redshift RA3 + 一時停止 + Reserved", "全データ常時 Hot Tier"], correctIndex: 3, explanation: "**Cost 最適化**: 列指向 + Partition / S3 階層 / Reserved / Spot / Athena Workgroup 制限 / Redshift Pause / EMR Spot。**全データ Hot は爆発的コスト**。" },
  { id: "dea-q80", category: "Cert", difficulty: 2, question: "**DEA-C01** の **位置づけ** として最も適切なものを選びなさい。", choices: ["Associate レベル(2024 リリース新試験 ・ ML / DA と並列)", "Specialty", "Foundational", "Professional"], correctIndex: 0, explanation: "**DEA-C01**(2024 リリース): **AWS Certified Data Engineer Associate**。**Data Analytics Specialty 廃止**の後継 ・ MLA-C01 と並列の Associate。実務 DE 必須認定化が進行中。" },
];
