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
];
