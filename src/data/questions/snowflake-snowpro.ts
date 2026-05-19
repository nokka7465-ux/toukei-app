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
];
