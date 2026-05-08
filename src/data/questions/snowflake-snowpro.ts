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
];
