import type { Question } from "@/types/content";

export const snowflakeSnowProQuestions: Question[] = [
  {
    id: "snow-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Snowflake SnowPro Core の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "コア(基礎)",
      "Specialty",
      "Advanced",
      "Master",
    ],
    correctIndex: 0,
    explanation:
      "**SnowPro Core** は基礎レベル。Specialty / Advanced 認定の前提条件となる。",
  },
  {
    id: "snow-q2",
    category: "アーキテクチャ",
    difficulty: 2,
    question:
      "Snowflake のアーキテクチャの **3 層** に **含まれない** ものを選びなさい。",
    choices: [
      "Database Storage",
      "Query Processing(Virtual Warehouse)",
      "Cloud Services",
      "Application Layer",
    ],
    correctIndex: 3,
    explanation:
      "Snowflake の 3 層は **Database Storage / Query Processing(Virtual Warehouse)/ Cloud Services**。Application Layer は別の概念。",
  },
  {
    id: "snow-q3",
    category: "Warehouse",
    difficulty: 2,
    question:
      "Virtual Warehouse の **Auto-suspend** の主な目的として最も適切なものを選びなさい。",
    choices: [
      "クエリの自動最適化",
      "アイドル時にコストを削減するため自動停止",
      "セキュリティ強化",
      "データ圧縮",
    ],
    correctIndex: 1,
    explanation:
      "**Auto-suspend** は一定時間アイドルの Warehouse を自動停止し、計算コストを削減する。クエリ実行時に **Auto-resume** で自動再開する。",
  },
  {
    id: "snow-q4",
    category: "Warehouse",
    difficulty: 3,
    question:
      "Virtual Warehouse の **最低課金時間** として最も適切なものを選びなさい。",
    choices: [
      "60 分",
      "1 分",
      "60 秒(その後は秒単位課金)",
      "1 秒",
    ],
    correctIndex: 2,
    explanation:
      "Virtual Warehouse は **起動から最低 60 秒、その後は秒単位** 課金。短時間使用でも 60 秒分が最低料金になる。",
  },
  {
    id: "snow-q5",
    category: "テーブル",
    difficulty: 2,
    question:
      "**Time Travel と Fail-safe を持たない** テーブル種別として最も適切なものを選びなさい。",
    choices: [
      "Permanent",
      "Transient",
      "Temporary",
      "External",
    ],
    correctIndex: 2,
    explanation:
      "**Temporary** はセッション内のみ存在し、Time Travel / Fail-safe いずれもなし。**Transient** は Fail-safe なし(Time Travel 0〜1 日)、**Permanent** は両方あり、**External** は外部参照。",
  },
  {
    id: "snow-q6",
    category: "Time Travel",
    difficulty: 2,
    question:
      "Snowflake **Standard Edition** で Permanent テーブルの Time Travel 期間として最も適切なものを選びなさい。",
    choices: [
      "0 日(Time Travel なし)",
      "1 日",
      "7 日",
      "90 日",
    ],
    correctIndex: 1,
    explanation:
      "**Standard Edition** の Time Travel 期間は **1 日**(Permanent テーブル)。**Enterprise+ Edition** では **最大 90 日** まで設定可能。",
  },
  {
    id: "snow-q7",
    category: "Fail-safe",
    difficulty: 3,
    question:
      "Time Travel が切れた後の追加バックアップ期間として最も適切なものを選びなさい。",
    choices: [
      "1 日",
      "3 日",
      "7 日(Fail-safe)",
      "30 日",
    ],
    correctIndex: 2,
    explanation:
      "**Fail-safe** は Time Travel 後の **追加 7 日間** の隠れバックアップ。Snowflake サポート経由でのみ復元可能。**Permanent テーブルのみ** が対象。",
  },
  {
    id: "snow-q8",
    category: "ロード",
    difficulty: 2,
    question:
      "**ファイルが Stage に到着したら自動でロード** する Snowflake の継続的取込みサービスとして最も適切なものを選びなさい。",
    choices: [
      "COPY コマンド",
      "Snowpipe",
      "PUT コマンド",
      "Stream",
    ],
    correctIndex: 1,
    explanation:
      "**Snowpipe** は S3 SQS / EventGrid 通知でファイル到着をトリガにして自動ロードする継続的取込み機能。バッチの COPY と並ぶ標準パターン。",
  },
  {
    id: "snow-q9",
    category: "ロード",
    difficulty: 3,
    question:
      "COPY ロードで **既にロード済のファイル** を再ロードしたい場合のオプションとして最も適切なものを選びなさい。",
    choices: [
      "ON_ERROR = 'CONTINUE'",
      "FORCE = TRUE",
      "PATTERN = '*'",
      "TRUNCATECOLUMNS = TRUE",
    ],
    correctIndex: 1,
    explanation:
      "**FORCE = TRUE** で既ロード済ファイルも再ロード可能。デフォルトは Snowflake が `LOAD_HISTORY` を見てスキップする。",
  },
  {
    id: "snow-q10",
    category: "VARIANT",
    difficulty: 3,
    question:
      "Snowflake で **JSON / Avro / XML をそのまま格納し、SQL でクエリできる** 型として最も適切なものを選びなさい。",
    choices: [
      "STRING",
      "JSON 専用型",
      "VARIANT",
      "BLOB",
    ],
    correctIndex: 2,
    explanation:
      "**VARIANT** は半構造化データを保持できる Snowflake の独自型。`raw:user.name::STRING` のようにドット記法 + キャストでアクセス可能。",
  },
  {
    id: "snow-q11",
    category: "Cloning",
    difficulty: 3,
    question:
      "Snowflake の **Zero-Copy Cloning** の主な特徴として最も適切なものを選びなさい。",
    choices: [
      "実データを物理的にコピーするため数時間かかる",
      "メタデータ操作のみで瞬時に複製、変更分のみコピーオンライトで保存",
      "ストレージ容量を 2 倍消費",
      "Cloning は Permanent テーブルのみ可能",
    ],
    correctIndex: 1,
    explanation:
      "**Zero-Copy Cloning** はメタデータ操作だけで瞬時に複製。実データは参照を共有し、変更があった部分のみ新規データとして書き込まれるコピーオンライト方式。",
  },
  {
    id: "snow-q12",
    category: "キャッシュ",
    difficulty: 3,
    question:
      "Snowflake の **Result Cache** の有効期間として最も適切なものを選びなさい。",
    choices: [
      "1 時間",
      "24 時間(データ不変なら)",
      "7 日",
      "永続(削除なし)",
    ],
    correctIndex: 1,
    explanation:
      "**Result Cache** は Cloud Services 層に保存され、**24 時間有効**(元データに変更がなければ)。同じクエリで即時返答が可能。",
  },
  {
    id: "snow-q13",
    category: "パフォーマンス",
    difficulty: 3,
    question:
      "Snowflake が自動的に作る **圧縮済 ・ 列指向のストレージ単位** の名称として最も適切なものを選びなさい。",
    choices: [
      "Block",
      "Micro-partition",
      "Page",
      "Chunk",
    ],
    correctIndex: 1,
    explanation:
      "**Micro-partition**(50 〜 500 MB)は Snowflake が自動的に作るストレージ単位。クエリのフィルタ条件で **Pruning**(除外)され I/O を削減する。",
  },
  {
    id: "snow-q14",
    category: "Sharing",
    difficulty: 3,
    question:
      "Snowflake **Secure Data Sharing** の主な特徴として最も適切なものを選びなさい。",
    choices: [
      "データを別 Account にコピーして共有",
      "データをコピーせず別 Account からアクセス可能(同一 Region 内が前提、Cross-region は別途)",
      "FTP 経由でファイル共有",
      "REST API でのみ共有可能",
    ],
    correctIndex: 1,
    explanation:
      "**Secure Data Sharing** はデータをコピーせず、メタデータでアクセス権を共有する仕組み。Provider と Consumer が同一 Region であれば即座に共有でき、Cross-region は Replication が必要。",
  },
  {
    id: "snow-q15",
    category: "ロール",
    difficulty: 2,
    question:
      "Snowflake のシステム定義ロールで **最上位の全権限** を持つロールとして最も適切なものを選びなさい。",
    choices: [
      "SYSADMIN",
      "ACCOUNTADMIN",
      "SECURITYADMIN",
      "PUBLIC",
    ],
    correctIndex: 1,
    explanation:
      "**ACCOUNTADMIN** は最上位ロール、全権限を持つ。日常使用は推奨されず、**SYSADMIN**(オブジェクト作成)・ **SECURITYADMIN**(ユーザ ・ ロール管理)を組み合わせて使うのが定石。",
  },
  {
    id: "snow-q16",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "Snowflake で **Customer + Snowflake + クラウドプロバイダの 3 つの鍵** で暗号化を行う仕組みの名称として最も適切なものを選びなさい。",
    choices: [
      "Single-Secret Encryption",
      "Tri-Secret Secure",
      "Bring-Your-Own-Key",
      "Customer-Managed Encryption Key(CMEK)",
    ],
    correctIndex: 1,
    explanation:
      "**Tri-Secret Secure** は顧客 + Snowflake + クラウドプロバイダの 3 つの鍵を組み合わせた暗号化方式。顧客が鍵を破棄すれば Snowflake もデータを復号できなくなる。",
  },
  {
    id: "snow-q17",
    category: "ガバナンス",
    difficulty: 3,
    question:
      "Snowflake で **行レベルでアクセス制御** する機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Dynamic Data Masking",
      "Row Access Policy",
      "External Tokenization",
      "Object Tagging",
    ],
    correctIndex: 1,
    explanation:
      "**Row Access Policy(RLS)** は行レベルアクセス制御。**Dynamic Data Masking** は列単位のマスキング、**Object Tagging** はメタデータ管理。",
  },
  {
    id: "snow-q18",
    category: "Snowpark",
    difficulty: 2,
    question:
      "Snowflake で **Python / Java / Scala の DataFrame 風 API** を提供するフレームワークの名称として最も適切なものを選びなさい。",
    choices: [
      "Snowpark",
      "Snowsight",
      "SnowSQL",
      "Snowpipe",
    ],
    correctIndex: 0,
    explanation:
      "**Snowpark** は Python / Java / Scala で DataFrame 風の API を提供。pandas 風のコードが Snowflake 内で SQL に自動変換される。SnowSQL は CLI、Snowsight は Web UI、Snowpipe はデータロード。",
  },
  {
    id: "snow-q19",
    category: "Cortex",
    difficulty: 3,
    question:
      "Snowflake **Cortex AI** の機能として **不適切** なものを選びなさい。",
    choices: [
      "SQL から LLM(Llama / Mistral)を呼び出す関数",
      "ベクトル検索(Cortex Search)",
      "自然言語からの SQL 生成(Cortex Analyst)",
      "Excel / Word ファイルの直接編集",
    ],
    correctIndex: 3,
    explanation:
      "**Cortex AI** は SQL ベースの LLM 関数 ・ ベクトル検索 ・ 自然言語 SQL 生成 ・ Document AI などを提供する Snowflake の AI 機能。Office ファイルの編集は範囲外。",
  },
  {
    id: "snow-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "SnowPro Core 合格後、Snowflake の中級認定で次のステップとして最も適切なものを選びなさい。",
    choices: [
      "SnowPro Core 再受験",
      "SnowPro Specialty(Data Engineer / Data Analyst 等)",
      "AWS Cloud Practitioner",
      "Microsoft AZ-900",
    ],
    correctIndex: 1,
    explanation:
      "SnowPro Core 合格後は **SnowPro Specialty**(Data Engineer / Data Analyst / Data Scientist / Architect / Administrator)が王道。さらに上位の Advanced 系へも進める。",
  },
  {
    id: "snow-q21",
    category: "アーキテクチャ",
    difficulty: 3,
    question:
      "Snowflake の **マルチクラスタウェアハウス** の主目的として最も適切なものを選びなさい。",
    choices: [
      "同時実行クエリ数の増加に応じて自動的にクラスタを起動",
      "クエリ自体を高速化する",
      "ストレージを圧縮する",
      "Time Travel の保持期間を延長",
    ],
    correctIndex: 0,
    explanation:
      "**Multi-cluster Warehouse** は **同時実行クエリ数の増加(キュー発生)に応じて追加クラスタを自動起動**(Auto Scaling)。1 クエリ自体は高速化しない(それは Warehouse サイズの問題)。",
  },
  {
    id: "snow-q22",
    category: "ロード",
    difficulty: 3,
    question:
      "**継続的なクラウドストレージ → Snowflake への自動取込** に最適な機能を選びなさい。",
    choices: [
      "Snowpipe",
      "COPY INTO",
      "PUT コマンド",
      "Internal Stage",
    ],
    correctIndex: 0,
    explanation:
      "**Snowpipe** は **クラウドストレージのイベント通知(S3 / GCS / Azure)を契機にバッチを即時取込**。マイクロバッチ(数秒〜分)で継続ストリーミングを実現。COPY INTO は一括コマンド。",
  },
  {
    id: "snow-q23",
    category: "Time Travel",
    difficulty: 3,
    question:
      "Standard Edition での **Time Travel 最大保持期間** を選びなさい。",
    choices: ["1 日", "7 日", "30 日", "90 日"],
    correctIndex: 0,
    explanation:
      "**Standard Edition は最大 1 日**。**Enterprise Edition 以上で最大 90 日** に拡張可能。Time Travel は誤削除復旧 ・ 過去スナップショットクエリ。Fail-safe は Time Travel 終了後の追加 7 日。",
  },
  {
    id: "snow-q24",
    category: "Cloning",
    difficulty: 3,
    question:
      "Zero-Copy Cloning の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "瞬時にデータベース / スキーマ / テーブルを複製",
      "クローン時点でストレージ容量はほぼゼロ",
      "クローン後に変更された部分のみ追加ストレージを消費",
      "メタデータは独立しないため元テーブルへの変更がクローンにも即反映",
    ],
    correctIndex: 3,
    explanation:
      "**Zero-Copy Cloning** はメタデータポインタ複製 + Copy-on-Write。**元とクローンは独立**(片方の変更は他方に反映されない)。dev / test 環境構築に最適。",
  },
  {
    id: "snow-q25",
    category: "Data Sharing",
    difficulty: 3,
    question:
      "Snowflake **Secure Data Sharing** に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "データを物理コピーせずに別アカウントへ共有",
      "共有先は読み取り専用",
      "Reader Account で Snowflake 未契約の組織にも共有可能",
      "共有時にデータ複製が発生し追加ストレージ課金",
    ],
    correctIndex: 3,
    explanation:
      "**Data Sharing は物理コピーなし(ポインタ共有)**。共有元のストレージ ・ コンピュートのみ課金。Reader Account で **Snowflake 未契約の組織へも共有可**。Marketplace の基盤。",
  },
  {
    id: "snow-q26",
    category: "ストアド",
    difficulty: 3,
    question:
      "Snowflake のストアドプロシージャで **使えない言語** を選びなさい。",
    choices: ["JavaScript", "Python", "Java / Scala", "C++"],
    correctIndex: 3,
    explanation:
      "Snowflake Stored Procedure 対応言語: **JavaScript ・ Python ・ Java ・ Scala ・ SQL Scripting**。**C++ は対応外**。Snowpark で Python / Java / Scala の DataFrame API も利用可。",
  },
  {
    id: "snow-q27",
    category: "Cortex AI",
    difficulty: 3,
    question:
      "Snowflake **Cortex AI** の機能として **誤っているもの** を選びなさい。",
    choices: [
      "SQL から LLM(Llama / Mistral 等)を呼び出す",
      "ベクトル埋め込み生成と類似検索",
      "Cortex Search(マネージド検索)",
      "Snowflake のテーブル設計を自動生成",
    ],
    correctIndex: 3,
    explanation:
      "**Cortex AI**: COMPLETE / TRANSLATE / SUMMARIZE / SENTIMENT などの LLM 関数、Cortex Search(マネージド検索 + ベクトル)、EMBED_TEXT。**テーブル設計自動生成は提供されない**。",
  },
  {
    id: "snow-q28",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "Snowflake の **動的データマスキング** の特徴として最も適切なものを選びなさい。",
    choices: [
      "クエリ実行時にロールに応じて列の値をマスクする",
      "テーブルの行を物理削除する",
      "テーブルを暗号化する",
      "クラスタリングキーを最適化する",
    ],
    correctIndex: 0,
    explanation:
      "**Dynamic Data Masking** は **`CREATE MASKING POLICY`** で列ごとにロール条件を定義し、クエリ実行時にマスク。**Row Access Policy** で行単位制御も併用可。両者で列 ・ 行レベルの細粒度アクセス制御。",
  },
  {
    id: "snow-q29",
    category: "コスト",
    difficulty: 3,
    question:
      "Snowflake の **コスト最適化** として **誤っているもの** を選びなさい。",
    choices: [
      "Auto Suspend / Resume を有効化",
      "Warehouse サイズを適切に調整(over-provisioning を避ける)",
      "結果キャッシュ / Metadata キャッシュを活用",
      "Always-on で常時最大サイズの Warehouse を起動",
    ],
    correctIndex: 3,
    explanation:
      "**Always-on + 最大サイズ Warehouse はコスト爆発**。**Auto Suspend(60s〜)・ サイズ適正化 ・ キャッシュ活用** が定石。Multi-cluster は同時実行多い時のみ。",
  },
  {
    id: "snow-q30",
    category: "Iceberg",
    difficulty: 3,
    question:
      "Snowflake の **Iceberg Tables** に関する説明として最も適切なものを選びなさい。",
    choices: [
      "外部クラウドストレージ上の Apache Iceberg 形式テーブルを Snowflake 管理 or 外部 Catalog で利用",
      "Snowflake 内部のみで動作",
      "Iceberg は読み取り専用",
      "Time Travel は使えない",
    ],
    correctIndex: 0,
    explanation:
      "**Snowflake Iceberg Tables**(2024 GA)は **外部ストレージ(S3 / GCS / Azure)+ Iceberg 形式**を Snowflake 管理 or 外部 Catalog で扱う。**マルチエンジン**(Spark / Trino / Athena)からも同じテーブルを利用可。",
  },
  { id: "snow-q31", category: "アーキテクチャ", difficulty: 3, question: "Snowflake のレイヤー構造で **3 層** に該当しないものを選びなさい。", choices: ["Cloud Services Layer", "Query Processing Layer(Compute)", "Database Storage Layer", "Local Storage Layer"], correctIndex: 3, explanation: "**Snowflake 3 層アーキテクチャ**: ① Cloud Services(認証 / メタデータ / 最適化)② Query Processing(Virtual Warehouse)③ Storage(Micro-partition、列指向)。Compute と Storage が分離 ・ 独立スケール。" },
  { id: "snow-q32", category: "Micro-partition", difficulty: 3, question: "Snowflake の **Micro-partition** の典型的サイズとして最も適切なものを選びなさい。", choices: ["50-500 MB(非圧縮、自動管理)", "1 KB", "1 GB", "ユーザ指定"], correctIndex: 0, explanation: "**Micro-partition**: 50-500 MB 非圧縮(圧縮後 16 MB 程度)。**自動管理**(ユーザ設定不要)・ 列指向 ・ メタデータ(min/max / null 数)で自動的に **File Pruning**。" },
  { id: "snow-q33", category: "Clustering", difficulty: 3, question: "Snowflake の **Automatic Clustering** の役割として最も適切なものを選びなさい。", choices: ["Clustering Key で micro-partition を継続的に最適配置", "Index 作成", "VM 起動", "ライセンス管理"], correctIndex: 0, explanation: "**Automatic Clustering**: テーブルに Clustering Key 定義 → バックグラウンドで再クラスタリング。**大規模 + 頻繁な範囲クエリ** に有効。コスト発生。" },
  { id: "snow-q34", category: "Result Cache", difficulty: 3, question: "Snowflake の **3 種のキャッシュ** で **最も優先される** ものを選びなさい。", choices: ["Result Cache(24h, Cloud Services 層)", "Local Disk Cache(Warehouse SSD)", "Remote Disk Cache", "Metadata Cache"], correctIndex: 0, explanation: "**キャッシュ階層**: ① Result Cache(Cloud Services、24h、同 SQL + データ未変更で 0 コスト)② Local Disk(Warehouse SSD)③ Remote Disk(Storage)。Result Cache が最強。" },
  { id: "snow-q35", category: "Variants", difficulty: 3, question: "Snowflake の **VARIANT 型** の主用途として最も適切なものを選びなさい。", choices: ["半構造化データ(JSON / Avro / Parquet)をネスト構造のまま格納", "数値専用", "暗号化", "GIS データ専用"], correctIndex: 0, explanation: "**VARIANT**: JSON / XML / Avro / ORC / Parquet を **そのまま格納** + `data:path.field` 構文でクエリ。**自動的に列指向ストレージに最適化**。半構造化分析の柔軟性。" },
  { id: "snow-q36", category: "Streams", difficulty: 3, question: "Snowflake の **Stream** の役割として最も適切なものを選びなさい。", choices: ["テーブルの変更(CDC: Insert/Update/Delete)を追跡", "外部 API 呼出", "暗号化", "VM 起動"], correctIndex: 0, explanation: "**Stream**: テーブルの変更を追跡(Delta)+ **Task** と組合せで自動 ELT パイプライン構築。**Standard / Append-only / Insert-only** の 3 種。" },
  { id: "snow-q37", category: "Tasks", difficulty: 3, question: "Snowflake の **Task** の役割として最も適切なものを選びなさい。", choices: ["SQL / Stored Procedure をスケジュール or 依存 DAG で実行", "Lambda の代替", "GUI", "DB バックアップ"], correctIndex: 0, explanation: "**Task**: Cron スケジュール or 親 Task 完了トリガで SQL / SP 実行。**Task Tree(DAG)** で複雑 ELT 構築。Stream + Task で CDC ETL 自動化。" },
  { id: "snow-q38", category: "Snowpark", difficulty: 3, question: "**Snowpark** の特徴として最も適切なものを選びなさい。", choices: ["Python / Java / Scala の DataFrame API で Snowflake 上のデータ処理", "新規 DB", "認証ライブラリ", "GUI"], correctIndex: 0, explanation: "**Snowpark**: PySpark 風 DataFrame API で **Snowflake サーバサイド実行**(データ移動なし)。**UDF / Stored Procedure** も Python / Java で書ける。" },
  { id: "snow-q39", category: "Snowpark Container", difficulty: 3, question: "**Snowpark Container Services**(SPCS)の用途として最も適切なものを選びなさい。", choices: ["Snowflake 上で Docker コンテナ実行 + GPU サポート", "VM 提供のみ", "DB 接続", "暗号化"], correctIndex: 0, explanation: "**SPCS**(2024 GA): Snowflake が管理する **Kubernetes 上でコンテナ実行** + GPU。LLM 推論 ・ ML 学習 ・ サードパーティアプリホスティングを Snowflake 内で完結。" },
  { id: "snow-q40", category: "Cortex AI", difficulty: 3, question: "**Cortex Search** の用途として最も適切なものを選びなさい。", choices: ["マネージドハイブリッド検索(BM25 + Vector)+ 引用付き回答", "古典検索のみ", "DB 管理", "課金 API"], correctIndex: 0, explanation: "**Cortex Search**(2024): Snowflake マネージド RAG 検索。**BM25 + Vector + Semantic Reranker** + 自動 chunking。AWS Bedrock KB / Azure AI Search / Vertex AI Search に相当。" },
  { id: "snow-q41", category: "Cortex AI", difficulty: 3, question: "**Cortex Analyst** の役割として最も適切なものを選びなさい。", choices: ["自然言語 → SQL を Semantic Model 経由で生成 ・ 実行", "GUI 作成", "DB 認証", "GPU 制御"], correctIndex: 0, explanation: "**Cortex Analyst**(2024): NL2SQL。Semantic Model(YAML 定義)を使って **業務用語 → 正確な SQL** に変換。BI ツールとの統合 ・ 自社アプリ組込にも。" },
  { id: "snow-q42", category: "Document AI", difficulty: 3, question: "Snowflake **Document AI** の用途として最も適切なものを選びなさい。", choices: ["PDF / 画像から構造化情報を Snowflake テーブルに抽出", "DB クエリ", "GUI", "課金"], correctIndex: 0, explanation: "**Document AI**(2024): PDF / 画像から請求書 / レシート / 契約書を自動抽出 → テーブル化。Arctic-TILT モデルベース。" },
  { id: "snow-q43", category: "Marketplace", difficulty: 3, question: "**Snowflake Marketplace** の特徴として最も適切なものを選びなさい。", choices: ["サードパーティのデータ ・ アプリを Snowflake 内で直接購入 ・ 利用", "GitHub の代替", "Stack Overflow の代替", "Linux 配布"], correctIndex: 0, explanation: "**Snowflake Marketplace**: 2000+ のデータ ・ アプリリスト。S&P / Dun & Bradstreet / Weather など。**Data Sharing 基盤** で物理コピーなく即時利用可。" },
  { id: "snow-q44", category: "Native App", difficulty: 3, question: "**Snowflake Native App Framework** の特徴として最も適切なものを選びなさい。", choices: ["Snowflake 内で動作するアプリを開発 ・ Marketplace で配布", "GUI 作成", "DB 管理", "課金停止"], correctIndex: 0, explanation: "**Native App Framework**(2024 GA): プロバイダがアプリを Snowflake 内で配布 → コンシューマのアカウントで実行。**データを外部に出さずに分析 ・ ML を共有**。" },
  { id: "snow-q45", category: "ID/Auth", difficulty: 3, question: "Snowflake の **マルチファクタ認証(MFA)** の対応方法として最も適切なものを選びなさい。", choices: ["Duo Security 統合 + 強制 MFA ポリシー", "Snowflake 独自で対応不可", "MFA 不要", "GUI ログインのみ"], correctIndex: 0, explanation: "**Snowflake MFA**: Duo Security ネイティブ統合。**Account レベルで MFA 強制ポリシー** 設定可能。SSO(SAML / OAuth)・ Key-pair Auth(プログラマブル)も。" },
  { id: "snow-q46", category: "セキュリティ", difficulty: 3, question: "Snowflake の **Network Policy** の役割として最も適切なものを選びなさい。", choices: ["許可 / 拒否 IP リストでアカウントアクセスを制限", "DB 容量制限", "GPU 制御", "認証ログのみ"], correctIndex: 0, explanation: "**Network Policy**: IP Allow / Block List(account / user レベル)。**Private Connectivity**(AWS PrivateLink / Azure Private Link / GCP Private Service Connect)で VPC 隔離も。" },
  { id: "snow-q47", category: "Replication", difficulty: 3, question: "**Snowflake Database Replication** の用途として最も適切なものを選びなさい。", choices: ["別リージョン / アカウントへの DB 複製 + Failover", "Stream の代替", "Marketplace 経由", "GUI 作成"], correctIndex: 0, explanation: "**Replication**: クロスリージョン / アカウントの DB ・ Account レプリケーション。**Business Continuity Plan**(BCP)・ DR ・ 移行に活用。**Snowflake Failover** で自動切替も。" },
  { id: "snow-q48", category: "Performance", difficulty: 3, question: "Snowflake クエリの **パフォーマンス低下原因** として **誤っているもの** を選びなさい。", choices: ["Warehouse サイズ不足", "Bad Clustering(範囲スキャン非効率)", "頻繁な小ファイル(non-Snowpipe)", "Index がない"], correctIndex: 3, explanation: "**Snowflake はインデックス不要**(Micro-partition + Metadata で自動 Pruning)。性能低下原因は WH サイズ / Clustering / Spillage / 小ファイル。Query Profile で診断。" },
  { id: "snow-q49", category: "Snowsight", difficulty: 2, question: "**Snowsight**(新 Web UI)の特徴として最も適切なものを選びなさい。", choices: ["クエリ実行 + Worksheet + Dashboard + ML Studio が統合", "クエリ専用", "BI 専用", "管理者用のみ"], correctIndex: 0, explanation: "**Snowsight**(2023 標準化): Worksheet ・ Dashboard ・ Streamlit in Snowflake ・ Cortex AI Studio など統合。Classic UI から完全置換。" },
  { id: "snow-q50", category: "次のステップ", difficulty: 1, question: "SnowPro Core 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["SnowPro Specialty(Data Engineer / Architect 等)→ Advanced", "AWS Cloud Practitioner", "ITパスポート", "再受験"], correctIndex: 0, explanation: "**Core → Specialty(Data Engineer / Architect / Administrator / Analyst / Scientist)→ Advanced**。OSS / マルチクラウド志向なら **Databricks DE / AWS DEA-C01 / Azure DP-203** も視野。" },
  { id: "snow-q51", category: "Architecture", difficulty: 3, question: "Snowflake の **3 層アーキテクチャ** の構成として最も適切なものを選びなさい。", choices: ["Storage(Micro-partition)/ Compute(Virtual Warehouse)/ Cloud Services(Metadata / Auth)", "Bronze / Silver / Gold", "Web / App / DB", "GUI / API / DB"], correctIndex: 0, explanation: "**Snowflake Multi-Cluster Shared Data Architecture**: Storage(S3/Blob/GCS 上の不変 Micro-partition)+ Compute(独立 Warehouse)+ Cloud Services(Metadata / Optimizer / Auth)。Storage と Compute 分離が肝。" },
  { id: "snow-q52", category: "Warehouse", difficulty: 3, question: "**Multi-Cluster Warehouse** の動作として最も適切なものを選びなさい。", choices: ["同時接続増で Cluster 数を Auto Scale(同時実行用、サイズ変えず)", "サイズ自動拡張", "Storage 拡張", "GPU 拡張"], correctIndex: 0, explanation: "**Multi-Cluster WH**: min/max Cluster 設定 → 同時クエリ増で Cluster 増加(Scaling Out)。**Auto-Suspend / Resume**(Concurrency 用)。**Scaling Policy**: Standard / Economy。" },
  { id: "snow-q53", category: "Caching", difficulty: 3, question: "Snowflake の **3 種類のキャッシュ** として **誤っているもの** を選びなさい。", choices: ["Metadata Cache", "Result Cache(24h)", "Local Disk Cache(Warehouse SSD)", "GPU Cache"], correctIndex: 3, explanation: "**3 種 Cache**: Metadata Cache(無料)・ **Result Cache**(24h、Warehouse 不要で同クエリ即返)・ **Local Disk Cache**(Warehouse SSD、Resume 中保持)。GPU Cache は存在しない。" },
  { id: "snow-q54", category: "Snowpipe", difficulty: 3, question: "**Snowpipe** と **COPY INTO** の使い分けとして最も適切なものを選びなさい。", choices: ["Snowpipe=継続的 / 自動(マイクロバッチ)、COPY INTO=バッチ / 手動 / Bulk", "両者同じ", "学習 vs 推論", "GPU vs CPU"], correctIndex: 0, explanation: "**Snowpipe**: Serverless ・ 自動取込(S3 Event / REST API)・ Auto Ingest ・ Per-Compute 課金。**COPY INTO**: Warehouse 利用のバッチ取込 ・ 大量データ向き。" },
  { id: "snow-q55", category: "Streams", difficulty: 3, question: "Snowflake **Streams** の用途として最も適切なものを選びなさい。", choices: ["テーブル変更を CDC で捕捉(Insert/Update/Delete)→ Task / MERGE で増分処理", "全テーブルバックアップ", "GUI", "認証"], correctIndex: 0, explanation: "**Stream**: テーブル上の **Change Tracking**(Append-Only / Insert-Only / Standard)。**Task + Stream + MERGE** で増分 ELT パイプライン構築。" },
  { id: "snow-q56", category: "Tasks", difficulty: 3, question: "Snowflake **Task** の特徴として最も適切なものを選びなさい。", choices: ["スケジュール SQL 実行 ・ DAG(After 依存)・ Stream 連携 ・ Serverless / WH 選択可", "GUI のみ", "学習用", "GPU 必須"], correctIndex: 0, explanation: "**Task**: cron 風スケジュール + DAG(`AFTER`)・ Stream 連動 ・ **Serverless Task / Warehouse Task** 選択 ・ **Conditional Trigger**(`WHEN SYSTEM$STREAM_HAS_DATA`)で増分のみ実行可。" },
  { id: "snow-q57", category: "Security", difficulty: 3, question: "Snowflake **Dynamic Data Masking** の用途として最も適切なものを選びなさい。", choices: ["列単位で Role に応じてマスク(PII / 機密データの動的マスキング)", "全列暗号化", "Endpoint", "GUI"], correctIndex: 0, explanation: "**DDM**: Masking Policy を列に付与 → クエリ時に Role で平文 / マスクを動的切替。**Row Access Policy**(行レベル制御)と併用で細粒度アクセス制御。" },
  { id: "snow-q58", category: "Security", difficulty: 3, question: "**Snowflake Tag-Based Masking** の利点として最も適切なものを選びなさい。", choices: ["Tag(例: PII)を列に付与 → Policy を Tag 経由で一括適用 → スケーラブル", "GUI 専用", "GPU", "認証 SSO"], correctIndex: 0, explanation: "**Object Tag + Tag-Based Masking**: 数千列を 1 Tag + 1 Policy で管理。**Tag-Based Lineage / Data Classification** とも統合。エンタープライズガバナンスに必須。" },
  { id: "snow-q59", category: "Cortex", difficulty: 3, question: "**Snowflake Cortex** の特徴として最も適切なものを選びなさい。", choices: ["SQL から LLM / Embedding / 文書解析を呼出 → データ移動なしで AI 適用", "ETL 専用", "GUI 専用", "GPU 学習"], correctIndex: 0, explanation: "**Cortex AI**: `COMPLETE / SUMMARIZE / SENTIMENT / TRANSLATE / EXTRACT_ANSWER / EMBED_TEXT` 関数。**Cortex Search / Analyst** で RAG / NL2SQL。データ持出なしの AI。" },
  { id: "snow-q60", category: "Sharing", difficulty: 3, question: "**Secure Data Sharing** の特徴として最も適切なものを選びなさい。", choices: ["データを物理コピーせず Provider → Consumer に Read Only 共有 ・ ストレージ追加コストなし", "S3 経由コピー", "ETL 必須", "GPU 必須"], correctIndex: 0, explanation: "**Secure Data Sharing**: Provider が **Share**(Listing)作成 → Consumer がマウント。コピーなし ・ 課金なし(Consumer の Compute のみ)。**Marketplace** の基盤。" },
  { id: "snow-q61", category: "TimeTravel", difficulty: 3, question: "Snowflake **Time Travel** の保持期間として最も適切なものを選びなさい。", choices: ["Standard 最大 1 日 ・ Enterprise+ で最大 90 日 ・ Fail-Safe 7 日(復旧用)", "全 Edition 24h", "1 年", "永久"], correctIndex: 0, explanation: "**Time Travel**: Standard=1 日まで、**Enterprise+ = 0-90 日**設定可。**Fail-Safe**: Time Travel 後の 7 日(Snowflake 復旧のみ、ユーザー不可)。" },
  { id: "snow-q62", category: "Optimization", difficulty: 3, question: "**Search Optimization Service** の用途として最も適切なものを選びなさい。", choices: ["Point Lookup / Substring / Geospatial を高速化(LIKE / IN / 等価検索)", "全テーブル", "GUI", "GPU"], correctIndex: 0, explanation: "**SOS**(Search Optimization Service): 等価 / Substring / Geo / Variant 検索を高速化。**Materialized View / Clustering Key** と使い分け。**Enterprise+** で利用可。" },
  { id: "snow-q63", category: "Iceberg", difficulty: 3, question: "**Snowflake Iceberg Tables** の利点として最も適切なものを選びなさい。", choices: ["Open Format(S3 上 Parquet)を Snowflake と他エンジン(Spark / Trino)で共有", "Native のみ高速", "GUI", "GPU"], correctIndex: 0, explanation: "**Iceberg Tables**: S3 上の Parquet + Iceberg Manifest を **Snowflake-Managed / Catalog-Managed** で扱う。**Lakehouse + Snowflake 連携** を実現。" },
  { id: "snow-q64", category: "Streamlit", difficulty: 3, question: "**Streamlit in Snowflake(SiS)** の用途として最も適切なものを選びなさい。", choices: ["Snowflake 内で Python データアプリ開発 + ホスティング(データ持出なし)", "GUI BI", "ETL", "認証"], correctIndex: 0, explanation: "**Streamlit in Snowflake**: Python データアプリを Snowflake 内で実行 ・ ホスティング。**Cortex 関数 + Snowpark + ロール継承**でセキュアなインタラクティブアプリ構築。" },
  { id: "snow-q65", category: "実務", difficulty: 3, question: "SnowPro Core で頻出の **典型アーキテクチャ** として最も適切なものを選びなさい。", choices: ["Stage(S3) → Snowpipe → Streams → Tasks(ELT) → Materialized Views → BI(+ Cortex)", "EC2 のみ", "Lambda のみ", "RDS のみ"], correctIndex: 0, explanation: "**Snowflake 王道スタック**: Stage(S3/Azure/GCS)→ Snowpipe(継続取込)→ Stream + Task で増分 ELT → Materialized View / Search Optimization → BI(Tableau/Sigma)/ Cortex AI。" },
  { id: "snow-q66", category: "Warehouse", difficulty: 3, question: "**Virtual Warehouse のサイズ変更** の即時性として最も適切なものを選びなさい。", choices: ["新規クエリから新サイズ適用 ・ 実行中クエリは旧サイズ完了", "全クエリ即時中断", "Warehouse 再作成必要", "GPU 取替"], correctIndex: 0, explanation: "**WH Resize**: ALTER 即時反映だが**実行中クエリは旧サイズで完了**。**Scaling Out**(Multi-Cluster で並列度)vs **Scaling Up**(Size で計算力)。" },
  { id: "snow-q67", category: "Loading", difficulty: 3, question: "**Snowpipe の Auto-Ingest** モードの動作として最も適切なものを選びなさい。", choices: ["S3 イベント通知(SQS / SNS)→ Snowpipe REST 起動 → 自動 COPY", "Cron スケジュール", "手動", "GPU"], correctIndex: 0, explanation: "**Auto-Ingest**: S3 Event → SNS / SQS → Snowpipe(Serverless)・ 通常数秒 - 数分で取込。**REST Mode**(Pipe + API)もありストリーミング Source 向き。" },
  { id: "snow-q68", category: "Streams", difficulty: 3, question: "**Stream の Append-only / Insert-only / Standard** の違いとして最も適切なものを選びなさい。", choices: ["Append=INSERT のみ、Insert-only=External Table 用、Standard=INS/UPD/DEL", "全て同じ", "GPU", "認証"], correctIndex: 0, explanation: "**Stream Type**: Standard(全 DML)・ Append-only(INSERT のみ ・ 軽量)・ Insert-only(External / Iceberg 用)。**Source Table の `MIN_DATA_EXTENSION_TIME_IN_DAYS`** で保持期間延長。" },
  { id: "snow-q69", category: "Task", difficulty: 3, question: "**Task の DAG** で **AFTER** 句の意味として最も適切なものを選びなさい。", choices: ["親 Task 完了後に実行 → 依存関係 DAG 構築", "並列実行", "認証", "GPU"], correctIndex: 0, explanation: "**Task DAG**: `CREATE TASK t2 AFTER t1` で親子依存。**Root Task は SCHEDULE 設定**(cron / interval)・ **WHEN SYSTEM$STREAM_HAS_DATA** で増分のみ実行。" },
  { id: "snow-q70", category: "TimeTravel", difficulty: 3, question: "**Time Travel + Zero-Copy Clone** の組合せ用途として最も適切なものを選びなさい。", choices: ["DB / Schema / Table を過去時点でクローン → 開発 / テスト / Backup", "DB バックアップのみ", "認証", "GPU"], correctIndex: 0, explanation: "**Zero-Copy Clone**: CLONE 元のメタデータ参照のみ → **コピーコストなし**で過去時点まで巨大 DB クローン。`CLONE ... AT (TIMESTAMP => ...)` で。" },
  { id: "snow-q71", category: "Sharing", difficulty: 3, question: "**Secure Data Sharing** で **Reader Account** の利用シーンとして最も適切なものを選びなさい。", choices: ["Snowflake アカウント未所持の Consumer に Provider 側で Reader を作成 → 閲覧", "Provider 同士共有", "認証 SSO", "GPU"], correctIndex: 0, explanation: "**Reader Account**: Provider が管理する Lightweight Account。**Consumer が Snowflake 契約なしでも Share 利用可**(課金は Provider 持ち)。**Listing / Marketplace** とは別概念。" },
  { id: "snow-q72", category: "Marketplace", difficulty: 3, question: "**Snowflake Marketplace** の典型コンテンツとして **誤っているもの** を選びなさい。", choices: ["Data Listings(企業 / 統計 / 天候 / 地理)", "AI / ML Applications", "Native Apps(Snowpark Container Services)", "GPU Cluster"], correctIndex: 3, explanation: "**Marketplace**: Data Listings + Apps + Native Apps(Snowpark Container Services で完全分離実行)・ Connector。**収益化 + プライベート / パブリック配布**。" },
  { id: "snow-q73", category: "Snowpark", difficulty: 3, question: "**Snowpark** で対応する言語として **誤っているもの** を選びなさい。", choices: ["Python", "Scala / Java", "SQL UDF / Stored Procedure", "Excel VBA"], correctIndex: 3, explanation: "**Snowpark**: Python / Scala / Java で **DataFrame ライク API**。**UDF / Stored Procedure** で Compute Push-down。**Snowpark Container Services**(K8s ライク)で任意ワークロード実行。" },
  { id: "snow-q74", category: "Cortex AI", difficulty: 3, question: "**Snowflake Cortex AI** の機能として **誤っているもの** を選びなさい。", choices: ["LLM Functions(COMPLETE / SUMMARIZE / TRANSLATE / SENTIMENT)", "Cortex Search(RAG)/ Cortex Analyst(NL2SQL)", "Document AI / Forecasting / Anomaly Detection", "GPU 直販"], correctIndex: 3, explanation: "**Cortex AI**: LLM SQL Functions / **Cortex Search**(マネージド RAG)・ **Cortex Analyst**(NL2SQL)・ **Document AI / Forecasting / Anomaly Detection / Classification**。Snowflake AI 統合の中核。" },
  { id: "snow-q75", category: "Iceberg", difficulty: 3, question: "**Snowflake Iceberg Tables** の特徴として最も適切なものを選びなさい。", choices: ["S3 上の Parquet + Iceberg Manifest を Snowflake / 他エンジンで共有", "Native のみ", "GUI", "認証"], correctIndex: 0, explanation: "**Iceberg Tables**: **Snowflake-Managed**(Snowflake 完全制御)or **Catalog-Managed**(外部 Catalog/Polaris)。**Spark / Trino / DuckDB / Databricks と Lakehouse 共有**。" },
  { id: "snow-q76", category: "Polaris", difficulty: 3, question: "**Apache Polaris**(Snowflake が OSS 化)の役割として最も適切なものを選びなさい。", choices: ["Open Iceberg Catalog ・ マルチエンジン共有", "Snowflake 専用", "認証 SSO", "GPU"], correctIndex: 0, explanation: "**Polaris**(2024 OSS 化、Apache 2.0): Iceberg Catalog OSS。**Snowflake / Spark / Trino / Flink 等を統合**。Unity Catalog OSS(Databricks 2024)と並ぶ Open Lakehouse Catalog の双璧。" },
  { id: "snow-q77", category: "Streamlit", difficulty: 3, question: "**Streamlit in Snowflake(SiS)** の用途として最も適切なものを選びなさい。", choices: ["Snowflake 内で Python データアプリ ・ Cortex / Snowpark 統合", "ETL", "認証", "GPU"], correctIndex: 0, explanation: "**SiS**: Python データアプリを Snowflake 内ホスティング → データ持出なし。**Cortex Functions / Snowpark / Native App 統合**でセキュアなアプリ開発。" },
  { id: "snow-q78", category: "Security", difficulty: 3, question: "**Snowflake の Network Policy** の用途として最も適切なものを選びなさい。", choices: ["IP Whitelist / Blacklist で接続元制限", "GUI", "GPU", "認証 SSO のみ"], correctIndex: 0, explanation: "**Network Policy**: Allowed / Blocked IP リスト + VPC ID(Private Link)。**SCIM**(自動プロビ)・ **OAuth / SAML / Key Pair / Passwordless** 認証も。" },
  { id: "snow-q79", category: "Cost", difficulty: 3, question: "**Snowflake のコスト最適化** として **誤っているもの** を選びなさい。", choices: ["Auto Suspend / Resume(Warehouse)", "Result / Local Cache 活用", "Reserved Capacity / Snowflake Credit", "全 Warehouse 常時 X-Large 起動"], correctIndex: 3, explanation: "**Cost 最適化**: Auto Suspend(60s〜)・ Cache 活用 ・ Cluster サイズ適正化 ・ Reserved Capacity ・ Resource Monitor + 予算 Alert。**常時最大は爆発**。" },
  { id: "snow-q80", category: "Cert", difficulty: 2, question: "**SnowPro Core** の特徴として最も適切なものを選びなさい。", choices: ["Foundational 試験 ・ Snowflake 基礎 ・ Specialty / Advanced への基盤", "Specialty", "Professional", "Foundational なし"], correctIndex: 0, explanation: "**SnowPro Core**(現 Core 試験): 基礎レベル ・ Architecture / Loading / Performance / Security / Governance / Data Sharing / Cortex 入門。**Specialty(DE / Architect / Data Analyst)→ Advanced** へ。" },
];
