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
];
