import type { Question } from "@/types/content";

export const azureDp203Questions: Question[] = [
  {
    id: "dp203-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Microsoft Azure Data Engineer Associate(DP-203)の認定レベルとして最も適切なものを選びなさい。",
    choices: ["Fundamentals", "Associate", "Expert", "Specialty"],
    correctIndex: 1,
    explanation:
      "**DP-203 は Associate レベル**。Azure データ系認定: DP-900(Fundamentals)→ **DP-203 / DP-100 / DP-300(Associate)**。Expert は AZ-305(Solutions Architect)等の上位。",
  },
  {
    id: "dp203-q2",
    category: "ストレージ",
    difficulty: 2,
    question:
      "**分析(Synapse / Databricks / Hadoop)用途** で Azure Storage を選択する場合、最も適切な構成を選びなさい。",
    choices: [
      "Blob Storage(HNS 無効)",
      "ADLS Gen2(HNS 有効)",
      "Azure Files",
      "Premium SSD Disk",
    ],
    correctIndex: 1,
    explanation:
      "**分析用途は ADLS Gen2(Hierarchical Namespace 有効)が一択**。POSIX ACL ・ 階層構造 ・ ABFS ドライバ対応。**HNS は後から有効化可能だが無効化不可**。",
  },
  {
    id: "dp203-q3",
    category: "Cosmos DB",
    difficulty: 3,
    question:
      "Cosmos DB の整合性レベルで **同一セッション内で read your writes を保証しデフォルトで推奨される** ものを選びなさい。",
    choices: ["Strong", "Bounded Staleness", "Session", "Eventual"],
    correctIndex: 2,
    explanation:
      "**Session(デフォルト)** は同一セッション(クライアント)内で read-your-writes を保証。Strong は最厳格 ・ 高遅延、Eventual は最低遅延 ・ 最低保証、Bounded Staleness は K 操作 / T 時間以内の遅延を許容。",
  },
  {
    id: "dp203-q4",
    category: "Cosmos DB",
    difficulty: 3,
    question:
      "Cosmos DB のパーティションキー選定として **誤っているもの** を選びなさい。",
    choices: [
      "カーディナリティが高い列を選ぶ",
      "読込 ・ 書込が均等に分散する列を選ぶ",
      "論理パーティション 1 つあたり 20GB / 10000 RU/s が上限",
      "ホットパーティションを意図的に作って性能を上げる",
    ],
    correctIndex: 3,
    explanation:
      "**ホットパーティションは避けるべき**。1 つのパーティションに負荷集中するとアプリ全体の性能を律速する。パーティションキーは **カーディナリティ高 + 均等分散 + サイズ ・ RU 上限内** を満たすものを選ぶ。",
  },
  {
    id: "dp203-q5",
    category: "Synapse",
    difficulty: 2,
    question:
      "Synapse Dedicated SQL Pool の **テーブル分散方式** のうち、**小規模ディメンション(2GB 未満)** に最適なものを選びなさい。",
    choices: [
      "Hash Distribution",
      "Round-Robin",
      "Replicated",
      "Heap",
    ],
    correctIndex: 2,
    explanation:
      "**Replicated は全 Distribution に複製** され JOIN シャッフル不要。**小規模ディメンション(2GB 未満)で爆発的な高速化**。Hash は大規模ファクト、Round-Robin はステージング向け。",
  },
  {
    id: "dp203-q6",
    category: "Synapse",
    difficulty: 2,
    question:
      "**ADLS Gen2 上の Parquet ファイルにアドホックに SQL を投げたい**。Synapse の最適な機能を選びなさい。",
    choices: [
      "Dedicated SQL Pool",
      "Serverless SQL Pool",
      "Spark Pool",
      "Data Explorer Pool",
    ],
    correctIndex: 1,
    explanation:
      "**Serverless SQL Pool** は **ADLS 上のファイルに直接 SQL**(Pay-per-query、5 USD/TB 程度)。Athena に相当する Azure サービス。**継続的 BI には Dedicated**、**ETL/ML には Spark Pool**。",
  },
  {
    id: "dp203-q7",
    category: "Synapse",
    difficulty: 3,
    question:
      "Synapse の **Lake Database** が提供する機能として最も適切なものを選びなさい。",
    choices: [
      "Spark Pool で書いたテーブルを Serverless SQL Pool から自動的にクエリできる",
      "Dedicated SQL Pool のテーブルを Power BI に強制 Import する",
      "ADF を不要にする",
      "Cosmos DB のデータをトランザクショナルに扱う",
    ],
    correctIndex: 0,
    explanation:
      "**Lake Database** は **Spark Pool で作成した Delta / Parquet テーブルを Serverless SQL Pool から自動的に SQL でクエリ可能** にする統合機能。同一 Workspace で Spark と SQL の境界をシームレスに。",
  },
  {
    id: "dp203-q8",
    category: "ADF",
    difficulty: 2,
    question:
      "Azure Data Factory(ADF)の構成要素として **誤っているもの** を選びなさい。",
    choices: [
      "Linked Service",
      "Dataset",
      "Pipeline",
      "Lake Formation",
    ],
    correctIndex: 3,
    explanation:
      "**Lake Formation は AWS のサービス** で ADF とは無関係。ADF は **Linked Service / Dataset / Pipeline / Activity / Trigger / Integration Runtime** で構成。",
  },
  {
    id: "dp203-q9",
    category: "ADF",
    difficulty: 3,
    question:
      "**ADF 内で GUI ベース(コードレス)に複雑なデータ変換を構築したい**。最適な機能を選びなさい。",
    choices: [
      "Pipeline",
      "Mapping Data Flow",
      "Wrangling Data Flow",
      "Custom Activity",
    ],
    correctIndex: 1,
    explanation:
      "**Mapping Data Flow** は ADF 内の **GUI ベース Spark ETL**(Source / Derived Column / Aggregate / Join / Conditional Split / Window)。Pipeline はオーケストレーション、Wrangling は Power Query ベースの軽い前処理。",
  },
  {
    id: "dp203-q10",
    category: "Streaming",
    difficulty: 2,
    question:
      "**ストリーム取込基盤として Kafka 互換 API も提供** する Azure サービスを選びなさい。",
    choices: [
      "Event Hubs",
      "IoT Hub",
      "Service Bus",
      "Notification Hubs",
    ],
    correctIndex: 0,
    explanation:
      "**Event Hubs** は **ビッグデータ向けストリーム取込基盤**(Kafka 互換 API も提供)。IoT Hub は IoT デバイス双方向通信、Service Bus はエンタープライズメッセージング、Notification Hubs はモバイル PUSH。",
  },
  {
    id: "dp203-q11",
    category: "Stream Analytics",
    difficulty: 3,
    question:
      "Stream Analytics のウィンドウ関数で **重複なし ・ 隙間なしの固定時間ウィンドウ** を選びなさい。",
    choices: [
      "Tumbling Window",
      "Hopping Window",
      "Sliding Window",
      "Session Window",
    ],
    correctIndex: 0,
    explanation:
      "**Tumbling Window** は **重複なし ・ 隙間なし ・ 固定サイズ** の最も基本的なウィンドウ。Hopping は重複あり、Sliding はイベント発生時、Session は連続イベント単位。",
  },
  {
    id: "dp203-q12",
    category: "Databricks",
    difficulty: 3,
    question:
      "Delta Lake が提供する機能として **誤っているもの** を選びなさい。",
    choices: [
      "ACID トランザクション",
      "Time Travel(VERSION AS OF)",
      "Z-Order クラスタリング",
      "ストアドプロシージャ",
    ],
    correctIndex: 3,
    explanation:
      "**Delta Lake はデータレイク向けトランザクションレイヤー** で ACID / Time Travel / MERGE / Z-Order / OPTIMIZE / VACUUM が主要機能。**ストアドプロシージャは関係 DB の機能** で Delta Lake にはない。",
  },
  {
    id: "dp203-q13",
    category: "Databricks",
    difficulty: 3,
    question:
      "**ADLS Gen2 上の新着ファイルを自動検出して Bronze 層に取り込む** Databricks 機能を選びなさい。",
    choices: [
      "Auto Loader",
      "COPY INTO",
      "MERGE INTO",
      "Mount Point",
    ],
    correctIndex: 0,
    explanation:
      "**Auto Loader** は **ADLS Gen2 / S3 上の新着ファイルを自動検出して取込** + **スキーマ進化対応**。**Bronze 層への取込で標準的に使われる**。COPY INTO はバッチロード、MERGE INTO は upsert、Mount は接続。",
  },
  {
    id: "dp203-q14",
    category: "Lakehouse",
    difficulty: 2,
    question:
      "Medallion Architecture(Bronze / Silver / Gold)の説明として **誤っているもの** を選びなさい。",
    choices: [
      "Bronze は生データを到着順にそのまま保存",
      "Silver はクレンジング ・ 結合 ・ 重複排除済みのクリーンデータ",
      "Gold はビジネス指標 ・ ダッシュボード ・ ML 用集計データ",
      "Gold → Silver → Bronze の順に変換が進む",
    ],
    correctIndex: 3,
    explanation:
      "**Bronze → Silver → Gold の順に品質が向上** していく。生データ(Bronze)→ クリーン(Silver)→ ビジネス指標(Gold)。逆方向は誤り。",
  },
  {
    id: "dp203-q15",
    category: "Power BI",
    difficulty: 2,
    question:
      "Power BI の接続モードで **クエリのたびにソースに問合せ ・ リアルタイム性が高いが応答が遅め** のものを選びなさい。",
    choices: ["Import", "DirectQuery", "Live Connection", "Dual"],
    correctIndex: 1,
    explanation:
      "**DirectQuery** はクエリのたびにソースに問合せ、リアルタイム ・ 大容量対応、ただし応答遅め。Import は高速だがサイズ上限。Composite Model で両者を組合せ。",
  },
  {
    id: "dp203-q16",
    category: "Synapse Link",
    difficulty: 3,
    question:
      "**Cosmos DB のトランザクションデータを ETL なしで Synapse から分析できる** 機能を選びなさい。",
    choices: [
      "Synapse Link for Cosmos DB",
      "ADF Copy Activity",
      "Data Migration Service",
      "Database Migration Assistant",
    ],
    correctIndex: 0,
    explanation:
      "**Synapse Link for Cosmos DB** は **Cosmos DB のトランザクションシステムを ETL なしで Synapse から分析**。HTAP(Hybrid Transactional/Analytical Processing)を実現。**Synapse Link for Dataverse** も同様。",
  },
  {
    id: "dp203-q17",
    category: "Monitoring",
    difficulty: 2,
    question:
      "Azure Monitor で **詳細ログを KQL(Kusto Query Language)で検索** できるサービスを選びなさい。",
    choices: [
      "Metrics",
      "Log Analytics",
      "Application Insights",
      "Alerts",
    ],
    correctIndex: 1,
    explanation:
      "**Log Analytics** は **KQL でログ検索** + 集計 + 可視化。Metrics は数値時系列、Alerts は通知ルール、Application Insights はアプリ APM。",
  },
  {
    id: "dp203-q18",
    category: "Performance",
    difficulty: 3,
    question:
      "Synapse Dedicated SQL Pool のクエリ最適化として **誤っているもの** を選びなさい。",
    choices: [
      "AUTO_CREATE_STATISTICS / AUTO_UPDATE_STATISTICS で統計情報を自動更新",
      "Result Set Cache を無効化する",
      "Workload Management で優先度 ・ リソース割当",
      "Materialized View で集計を事前計算",
    ],
    correctIndex: 1,
    explanation:
      "**Result Set Cache は同一クエリの結果を再利用** してコスト ・ 時間を削減する機能。**有効化すべき**。統計情報自動更新 ・ Workload Management ・ Materialized View はすべて最適化に有効。",
  },
  {
    id: "dp203-q19",
    category: "Purview",
    difficulty: 3,
    question:
      "Microsoft Purview の構成要素として **誤っているもの** を選びなさい。",
    choices: [
      "Data Map",
      "Data Catalog",
      "Data Lineage",
      "Lake Formation",
    ],
    correctIndex: 3,
    explanation:
      "**Lake Formation は AWS のサービス**。Microsoft Purview は **Data Map(メタデータ)・ Data Catalog(検索 / 用語集)・ Data Lineage(系譜)・ Data Insights ・ Data Policy** で構成される統合ガバナンスソリューション。",
  },
  {
    id: "dp203-q20",
    category: "Security",
    difficulty: 2,
    question:
      "**クエリ時にロールベースで列の値をマスクする** Synapse 機能を選びなさい。",
    choices: [
      "Column-Level Security",
      "Row-Level Security",
      "Dynamic Data Masking",
      "Always Encrypted",
    ],
    correctIndex: 2,
    explanation:
      "**Dynamic Data Masking** は **クエリ時にロールベースで列の値をマスク**(クレジットカード番号の下 4 桁のみ表示など)。Column-Level Security は GRANT で列単位、RLS は行単位、Always Encrypted は暗号化。",
  },
  {
    id: "dp203-q21",
    category: "PolyBase",
    difficulty: 3,
    question:
      "Synapse Dedicated SQL Pool で **ADLS Gen2 上の大量 Parquet を高速にロードする** 標準的な方法として最も適切なものを選びなさい。",
    choices: [
      "INSERT INTO 一行ずつ",
      "COPY INTO statement(または CTAS via PolyBase)",
      "BCP コマンド",
      "Azure Data Studio の GUI インポート",
    ],
    correctIndex: 1,
    explanation:
      "**`COPY INTO` ステートメント** は **PolyBase の後継 ・ 推奨**(2020 GA)。**ADLS / Blob 上の CSV/Parquet/ORC を MPP 並列ロード**。BCP / INSERT は遅く小規模向け。",
  },
  {
    id: "dp203-q22",
    category: "CTAS / CETAS",
    difficulty: 3,
    question:
      "Synapse の **CETAS(CREATE EXTERNAL TABLE AS SELECT)** が実行する処理を選びなさい。",
    choices: [
      "クエリ結果を Parquet ファイルとして ADLS にエクスポートし、外部テーブルとして登録",
      "外部テーブルを内部テーブルに変換",
      "外部テーブルにデータを INSERT する",
      "Linked Server を作成する",
    ],
    correctIndex: 0,
    explanation:
      "**CETAS** は **クエリ結果を Parquet で ADLS にエクスポート + 外部テーブル登録** を 1 ステップで行う(Serverless / Dedicated 両対応)。**バッチ ETL の出力 ・ Lake へのデータ書出に頻用**。",
  },
  {
    id: "dp203-q23",
    category: "Synapse Pipelines",
    difficulty: 2,
    question:
      "Synapse Pipelines と Azure Data Factory(ADF)の関係として最も適切なものを選びなさい。",
    choices: [
      "完全に別のサービスで互換性がない",
      "Synapse Pipelines は ADF と同じエンジンを Synapse Workspace 内に統合したもの",
      "Synapse Pipelines は ADF の上位サービスで全機能を内包する",
      "Synapse Pipelines は Spark Pool 上でのみ動作する",
    ],
    correctIndex: 1,
    explanation:
      "**Synapse Pipelines は ADF と同一エンジン** を Synapse Workspace に統合。**90%+ の機能が共通**。一部 ADF 専用機能(SSIS 統合等)があるが、新規プロジェクトは Synapse Pipelines 推奨。",
  },
  {
    id: "dp203-q24",
    category: "Cosmos DB",
    difficulty: 3,
    question:
      "**Cosmos DB の Analytical Store** に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "トランザクション Store とは別の列指向ストア",
      "Synapse Link 経由で ETL なしに Synapse から SQL アクセス可能",
      "OLTP のクエリ性能を低下させない",
      "Analytical Store からトランザクションが書き戻される",
    ],
    correctIndex: 3,
    explanation:
      "**Analytical Store は読み取り専用の列指向ミラー**(分析用)。**トランザクション側からの自動同期は一方向のみ**(Analytical → Transactional は無し)。Synapse Link 経由でのみアクセス。",
  },
  {
    id: "dp203-q25",
    category: "IoT Hub",
    difficulty: 3,
    question:
      "IoT Hub の **メッセージルーティング** 機能で **デバイスメッセージを Event Hubs に振り分ける** 構成を選びなさい。",
    choices: [
      "Built-in endpoint だけを使う",
      "Routes + Custom endpoint(Event Hubs)を構成",
      "Storage Account に直接書込",
      "Stream Analytics で受信",
    ],
    correctIndex: 1,
    explanation:
      "**Routes + Custom endpoint(Event Hubs / Storage / Service Bus)** で **メッセージ ・ デバイスツイン変更 ・ デバイスライフサイクル** を SQL 風クエリで振り分け。Built-in endpoint はデフォルト宛先のみ。",
  },
  {
    id: "dp203-q26",
    category: "Event Hubs",
    difficulty: 2,
    question:
      "**Event Hubs に流れるメッセージを ADLS Gen2 / Blob に自動キャプチャ** したい。最適な機能を選びなさい。",
    choices: [
      "Event Hubs Capture",
      "Event Hubs Geo-DR",
      "Event Hubs Mirror",
      "Stream Analytics",
    ],
    correctIndex: 0,
    explanation:
      "**Event Hubs Capture** は **メッセージを Avro 形式で ADLS / Blob に自動書き出し**(ウィンドウ秒/MB 設定)。**コードレスでアーカイブ + バッチ分析の入口** に。Stream Analytics でも可能だがコスト高。",
  },
  {
    id: "dp203-q27",
    category: "Stream Analytics",
    difficulty: 3,
    question:
      "Stream Analytics で **静的なマスタデータ(国コード一覧など)を JOIN したい**。最適な機能を選びなさい。",
    choices: [
      "Reference Data Input",
      "Window JOIN",
      "Streaming Input",
      "Cross Apply",
    ],
    correctIndex: 0,
    explanation:
      "**Reference Data Input** は **静的(または低頻度更新)のマスタデータを Blob / SQL DB から読み込み**、ストリームと JOIN。`JOIN ReferenceData ON ...` で利用。",
  },
  {
    id: "dp203-q28",
    category: "Power BI",
    difficulty: 2,
    question:
      "**Power BI でセルフサービス ETL(Power Query)を Service 上で再利用したい**。最適な機能を選びなさい。",
    choices: [
      "Power BI Dataset",
      "Power BI Dataflows",
      "Power BI Datamarts",
      "Power BI Paginated Reports",
    ],
    correctIndex: 1,
    explanation:
      "**Power BI Dataflows** は **Power Query を Service 上で動かし ADLS Gen2 に出力する ETL レイヤー**。複数 Dataset から再利用 ・ スケジュール実行 ・ 増分更新可能。Datamart は DB レイヤー。",
  },
  {
    id: "dp203-q29",
    category: "選び分け",
    difficulty: 3,
    question:
      "**OLTP(秒単位の小さな書込が多い)用途** で Azure SQL Database と Synapse Dedicated SQL Pool を比較した場合、**正しい記述** を選びなさい。",
    choices: [
      "Synapse の方が OLTP に向く",
      "Azure SQL Database が OLTP 向き、Synapse は OLAP 向き",
      "両者は同等で目的の差はない",
      "OLTP は Cosmos DB のみが対応",
    ],
    correctIndex: 1,
    explanation:
      "**Azure SQL Database は OLTP**(行指向 ・ 細かい行更新)、**Synapse Dedicated SQL Pool は OLAP / DWH**(列指向 ・ 大量集計)。**用途が完全に異なる**。Cosmos DB は NoSQL OLTP の選択肢。",
  },
  {
    id: "dp203-q30",
    category: "監視",
    difficulty: 2,
    question:
      "**Synapse Dedicated SQL Pool のクエリ実行履歴 ・ 実行プラン ・ DMV を見たい**。最適な機能を選びなさい。",
    choices: [
      "Azure Monitor Metrics",
      "Synapse Studio Monitor Hub + DMV(sys.dm_pdw_*)",
      "Azure Activity Log",
      "Azure Advisor",
    ],
    correctIndex: 1,
    explanation:
      "**Synapse Studio の Monitor Hub** + **`sys.dm_pdw_*` DMV クエリ** で **実行履歴 ・ Distributed Plan ・ Worker メトリクス** を確認。Azure Monitor Metrics は時系列メトリクス、Activity Log は API 呼び出し監査。",
  },
];
