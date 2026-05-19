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
  { id: "dp203-q31", category: "Fabric", difficulty: 3, question: "**Microsoft Fabric** の **OneLake** の特徴として最も適切なものを選びなさい。", choices: ["全 Fabric ワークロード(Lakehouse / Warehouse / Power BI / Real-Time)が共通利用する単一データレイク", "Workspace ごとに分離", "DB 専用", "GPU 連携"], correctIndex: 0, explanation: "**OneLake**: Fabric の単一データレイク(Delta Parquet)。**1 物理コピーで全エンジン共有** → データ重複 ・ コピー削減。**OneLake Explorer** で Windows / macOS から直接アクセス。" },
  { id: "dp203-q32", category: "Fabric", difficulty: 3, question: "Fabric の **Lakehouse** と **Warehouse** の違いとして最も適切なものを選びなさい。", choices: ["Lakehouse: Spark + Delta、Warehouse: T-SQL ・ Transaction 最適化 ・ 全機能 SQL", "両者同じ", "Lakehouse は古い", "Warehouse は廃止"], correctIndex: 0, explanation: "**Lakehouse**: Spark / SQL Endpoint で Delta テーブル。**Warehouse**: T-SQL + Multi-Table Transaction + フル SQL 互換。両者は OneLake で共通 → BI / 分析で使い分け。" },
  { id: "dp203-q33", category: "Cosmos DB", difficulty: 3, question: "Cosmos DB の **Throughput Provisioning** で **Manual** と **Autoscale** の違いとして最も適切なものを選びなさい。", choices: ["Manual: 固定 RU/s、Autoscale: 10% - 100% で自動スケール(変動課金)", "両者同じ", "Manual は廃止", "Autoscale は手動"], correctIndex: 0, explanation: "**Manual**: 固定 RU/s で安定 ・ 安価。**Autoscale**: 最大値の 10% - 100% で自動 → ピーク追従 + 待機時 10% 課金。変動的ワークロードに最適。" },
  { id: "dp203-q34", category: "ADF", difficulty: 3, question: "**Self-hosted Integration Runtime** の用途として最も適切なものを選びなさい。", choices: ["オンプレ DB / VPN 内データソース → ADF 連携", "クラウド DB", "GUI のみ", "GPU 制御"], correctIndex: 0, explanation: "**Self-hosted IR**: オンプレ ・ プライベートネットワーク内のデータソース(SQL Server / Oracle / File Share)→ Azure ADF / Synapse Pipelines 連携。Outbound のみで安全接続。" },
  { id: "dp203-q35", category: "ADF", difficulty: 3, question: "ADF Pipeline の **Trigger** 種別として **誤っているもの** を選びなさい。", choices: ["Schedule(時刻ベース)", "Tumbling Window(時間窓ベース)", "Event(Blob 作成 ・ 削除)", "GPU 監視"], correctIndex: 3, explanation: "**ADF Triggers**: Schedule / Tumbling Window(時間窓で連続実行)/ Event(Storage / Custom)/ Manual。GPU 監視は無関係。" },
  { id: "dp203-q36", category: "Mapping Data Flow", difficulty: 3, question: "Mapping Data Flow の **Debug モード** の特徴として最も適切なものを選びなさい。", choices: ["対話的に Spark cluster 起動 + 各 Transformation で Preview", "本番実行", "GUI 編集のみ", "DB 接続のみ"], correctIndex: 0, explanation: "**Debug Mode**: 専用 Spark Cluster を起動 → 各 Step の Preview / Statistics / Sink Mapping。開発時に **Time-to-debug** 短縮。コスト発生。" },
  { id: "dp203-q37", category: "Synapse", difficulty: 3, question: "Synapse Dedicated SQL Pool の **PAUSE** の効果として最も適切なものを選びなさい。", choices: ["Compute 停止 → 課金 0(ストレージ課金のみ残る)", "Storage 削除", "テーブル削除", "暗号化"], correctIndex: 0, explanation: "**PAUSE**: Compute 課金停止(再開まで)。ストレージ課金は残る。**夜間 ・ 週末停止で大幅コスト削減**。Resume で約 1 分で再開。" },
  { id: "dp203-q38", category: "Synapse", difficulty: 3, question: "Synapse Serverless SQL Pool の **OPENROWSET** の用途として最も適切なものを選びなさい。", choices: ["ADLS 上の Parquet / CSV / JSON / Delta を ad-hoc に SQL クエリ", "新規テーブル作成", "クラスタ管理", "認証"], correctIndex: 0, explanation: "**OPENROWSET**: SELECT 内で `OPENROWSET(BULK 'abfss://...', FORMAT='parquet') AS r` の形式で **Storage 上のファイルを直接 SQL**。External Table と並ぶ Serverless の核心。" },
  { id: "dp203-q39", category: "Stream Analytics", difficulty: 3, question: "Stream Analytics の **Output に最適な宛先** で **誤っているもの** を選びなさい。", choices: ["Azure SQL DB", "Cosmos DB", "Power BI(リアルタイムダッシュボード)", "S3 直接"], correctIndex: 3, explanation: "**Stream Analytics Output**: SQL DB / Synapse / Cosmos / ADLS / Blob / Event Hubs / Service Bus / Power BI / Functions。**S3 は AWS 用** で直接非対応(Kinesis 等を使う)。" },
  { id: "dp203-q40", category: "Event Hubs", difficulty: 3, question: "**Event Hubs Capture** の動作として最も適切なものを選びなさい。", choices: ["メッセージを Blob / ADLS に自動 Avro 保存(指定時間 or サイズ閾値)", "Stream Analytics と同じ", "Lambda 起動", "暗号化"], correctIndex: 0, explanation: "**Event Hubs Capture**: Throughput Unit 単位で **Blob / ADLS Gen2 に自動 Avro 保存**。秒〜分単位 + サイズ閾値で出力。Lambda / Functions 不要のアーカイブ。" },
  { id: "dp203-q41", category: "Databricks", difficulty: 3, question: "Databricks の **Delta Live Tables(DLT)** の宣言的 ETL の利点として最も適切なものを選びなさい。", choices: ["テーブル定義 + 依存関係 + データ品質 Expectation を SQL/Python で宣言", "命令的 Spark コード", "GUI のみ", "DB 接続"], correctIndex: 0, explanation: "**DLT**: `@dlt.table` / `@dlt.expect` で宣言。**Lineage 自動 + Streaming/Batch 統一 + データ品質強制 + 自動リトライ**。生 Spark より大幅に保守性向上。" },
  { id: "dp203-q42", category: "Lakehouse", difficulty: 3, question: "**Medallion Architecture** の **Gold 層** の役割として最も適切なものを選びなさい。", choices: ["BI ・ ML 用にビジネスドメイン別集計 ・ 整形済", "生データ", "クレンジング途中", "RAW"], correctIndex: 0, explanation: "**Medallion**: Bronze(RAW)→ Silver(クレンジング ・ 結合)→ Gold(ビジネスメトリクス ・ ML 特徴量)。**Gold は読込専用 ・ パブリッシュ層**。" },
  { id: "dp203-q43", category: "Power BI", difficulty: 3, question: "Power BI **Direct Lake モード** の特徴として最も適切なものを選びなさい。", choices: ["OneLake の Delta テーブルを Import モード並みに高速読込(キャッシュなし)", "ローカル DB のみ", "Excel と同じ", "ハイブリッド"], correctIndex: 0, explanation: "**Direct Lake**: Fabric Lakehouse / Warehouse の Delta を Import モード並み速度 + DirectQuery 並みのフレッシュさで読込。**Premium / PPU 必須**。" },
  { id: "dp203-q44", category: "Synapse Link", difficulty: 3, question: "**Synapse Link for Dataverse** の用途として最も適切なものを選びなさい。", choices: ["Dynamics 365 / Power Apps データを ETL なしで Synapse 分析", "Excel 連携", "GPU 制御", "GUI"], correctIndex: 0, explanation: "**Synapse Link for Dataverse**: Power Platform / D365 のデータを Synapse / ADLS に near-realtime レプリケート → BI / ML。**Common Data Service**(Microsoft の Business データ)を分析する標準。" },
  { id: "dp203-q45", category: "Purview", difficulty: 3, question: "**Microsoft Purview Data Map** の役割として最も適切なものを選びなさい。", choices: ["Azure / オンプレ / マルチクラウドのメタデータ + Lineage + 機密分類", "DB クエリ実行", "GPU 制御", "GUI のみ"], correctIndex: 0, explanation: "**Purview Data Map**: Scan(自動メタデータ収集)・ Classification(機密検出 ・ Sensitivity Label)・ Lineage(系譜可視化)。**Multi-cloud**(AWS / GCP)もサポート。" },
  { id: "dp203-q46", category: "Performance", difficulty: 3, question: "Synapse Dedicated SQL Pool のパフォーマンスチューニングとして **誤っているもの** を選びなさい。", choices: ["Distribution Style 適切設定(Hash / Replicated / Round-Robin)", "Statistics 更新(Auto / Manual)", "Workload Management(WLM)", "全テーブルを Heap"], correctIndex: 3, explanation: "**Synapse パフォーマンス**: 分散方式 + Sort Key + Stats + WLM + Materialized View + Result Cache。**Heap はステージング用**、本番は CCI(Clustered Columnstore Index)が標準。" },
  { id: "dp203-q47", category: "セキュリティ", difficulty: 3, question: "Synapse の **Always Encrypted** の効果として最も適切なものを選びなさい。", choices: ["列の暗号化を **クライアント側で実行** → DB 管理者にも平文不可", "サーバ側のみ暗号化", "全テーブル暗号化", "ネットワーク暗号化"], correctIndex: 0, explanation: "**Always Encrypted**: クライアント側で暗号化 → DB 管理者 ・ Azure 社員にも平文不可。**Secure Enclaves 版** で範囲検索 / パターンマッチも対応。" },
  { id: "dp203-q48", category: "コスト", difficulty: 3, question: "Synapse Workspace のコスト最適化として **誤っているもの** を選びなさい。", choices: ["Dedicated SQL Pool は使わない時 PAUSE", "Serverless SQL を活用", "Spark Pool に Auto-Pause", "全 Pool 24/7 起動"], correctIndex: 3, explanation: "**コスト最適化**: Dedicated SQL Pool は Pause + Serverless で ad-hoc + Spark Pool に Auto-Pause(最小 5 分)+ Reserved Capacity(常時稼働なら)。" },
  { id: "dp203-q49", category: "Fabric Capacity", difficulty: 3, question: "**Fabric Capacity** の単位 **CU(Capacity Unit)** で **F2** の意味として最も適切なものを選びなさい。", choices: ["2 CU(基本ティア)", "2 GB", "2 GPU", "2 サーバ"], correctIndex: 0, explanation: "**Fabric Capacity**: F2 / F4 / F8 / F16 ・・・ F2048 まで。**CU(Capacity Unit)** で課金。F2 が最小ティア(月数万円程度)。F64+ で Power BI Pro ライセンス代替も可。" },
  { id: "dp203-q50", category: "次のステップ", difficulty: 1, question: "DP-203 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["DP-100(Data Scientist)/ DP-600(Fabric Analytics)/ AZ-305(Solutions Architect Expert)", "MS-900", "MD-100 再受験", "ITパスポート"], correctIndex: 0, explanation: "**DP-203 → DP-600(Fabric Analytics)・ DP-700(Fabric Data Engineer)で Fabric 深堀り、DP-100 で ML 連携、AZ-305 で全体設計**。三大クラウド DE 揃え(AWS DEA-C01 / GCP Pro DE)も。" },
];
