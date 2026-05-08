import type { Textbook } from "@/types/content";

export const snowflakeSnowProTextbook: Textbook = {
  levelSlug: "snowflake-snowpro",
  title: "Snowflake SnowPro Core 教科書",
  intro:
    "**Snowflake SnowPro Core Certification(COF-C02)** は、**Snowflake** が提供するクラウドデータプラットフォーム認定の **エントリーレベル**。**マルチクラウド対応 ・ ストレージとコンピュートの分離 ・ セキュアデータシェアリング** で世界中の企業に採用されている Snowflake の **アーキテクチャ ・ 基本機能 ・ SQL ・ パフォーマンス ・ セキュリティ** を測ります。**データエンジニア ・ DWH 担当 ・ アナリティクスエンジニア** が想定対象。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "SnowPro Core ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Snowflake 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**SnowPro Core(COF-C02)** は Snowflake 認定の **コア(基礎)レベル**。すべての Snowflake 認定の前提となる **登竜門** で、これ以上の Specialty / Advanced を取得する場合は SnowPro Core が必須前提となります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Snowflake",
                "**形式**: オンライン監督受験(Pearson VUE)or テストセンター",
                "**問題数 / 時間**: 100 問 / 115 分",
                "**回答方式**: 多肢選択 + 複数選択",
                "**合格スコア**: 750 / 1000",
                "**有効期限**: 2 年(再認定が必要)",
                "**受験料**: 175 USD(参考)",
                "**前提知識**: SQL の基礎 + データベースの基本概念",
              ],
            },
            { type: "h3", text: "Snowflake 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SnowPro Associate(Associate Architect / Platform / Solutions Provider)**: 入門の上位",
                "**SnowPro Core(本資格)**: 基礎",
                "**SnowPro Specialty**: Data Engineer / Data Analyst / Data Scientist / Architect / Administrator",
                "**SnowPro Advanced**: Data Engineer / Architect / Administrator / Data Analyst / Data Scientist",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題ドメイン(公式試験ガイド)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: Snowflake AI Data Cloud Features and Architecture**(25%): Account ・ Cloud ・ アーキテクチャ",
                "**Domain 2: Account Access and Security**(20%): Role ・ ユーザ ・ ネットワーク ・ 暗号化",
                "**Domain 3: Performance Concepts**(15%): クラスタリング ・ キャッシュ ・ Search Optimization",
                "**Domain 4: Data Loading and Unloading**(10%): COPY / Snowpipe / Data Engineering Pipeline",
                "**Domain 5: Data Transformations**(20%): SQL / Stored Procedure / UDF / Snowpark",
                "**Domain 6: Data Protection and Data Sharing**(10%): Time Travel / Fail-safe / Cloning / Sharing",
              ],
            },
            { type: "h3", text: "60 〜 100 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: アーキテクチャ + 主要オブジェクト(本教科書 第 2 〜 3 章)",
                "**Week 2**: SQL + データロード(第 4 〜 5 章)",
                "**Week 3**: パフォーマンス + コスト(第 6 章)",
                "**Week 4**: Time Travel + データシェアリング(第 7 章)",
                "**Week 5**: セキュリティ + ガバナンス(第 8 章)",
                "**Week 6**: 模擬試験 + 過去問",
              ],
            },
            {
              type: "intuition",
              title: "Snowflake トライアル + Hands-on Lab が王道",
              body: "**Snowflake 30 日トライアル**(400 USD クレジット)で実機演習が可能。**Snowflake University** に SnowPro Core 専用ラーニングパスが無料公開されています。**実機で TPC-H サンプル** を触りながら本教科書を進めるのが最短ルート。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Snowflake のアーキテクチャ",
      overview:
        "ストレージ / コンピュート / クラウドサービス層の 3 層構造を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "3 層アーキテクチャ",
          blocks: [
            {
              type: "p",
              text: "Snowflake の最大の特徴は **ストレージとコンピュートの完全分離 + 共有データアーキテクチャ**。これにより **同じデータに対して複数の独立したコンピュートが並列にアクセス** でき、競合せずスケールアウトできます。",
            },
            {
              type: "def",
              title: "Snowflake の 3 層",
              body: "**1. Database Storage**: マイクロパーティション化された圧縮済 ・ 列指向ストレージ。S3 / Azure Blob / GCS にホスト。**ユーザは直接アクセス不可**。\n\n**2. Query Processing(Virtual Warehouse)**: 計算層。**X-Small 〜 6X-Large** のサイズ。複数並列起動可能。\n\n**3. Cloud Services**: メタデータ ・ 認証 ・ クエリ最適化 ・ アクセス制御 ・ Time Travel などを担う管理層。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Virtual Warehouse",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**T-Shirt サイズ**: XS(1 ノード)→ 6XL(512 ノード)",
                "**Auto-suspend**: 一定時間アイドルで自動停止(コスト削減)",
                "**Auto-resume**: クエリ実行時に自動再開",
                "**Multi-cluster Warehouse**: 同時実行クエリ多数で自動スケールアウト",
                "**Standard Edition**: シングルクラスタ",
                "**Enterprise+ Edition**: マルチクラスタ可能",
                "**Resource Monitor**: クレジット使用量の監視 ・ 制限",
                "**Per-second billing**: 起動から 60 秒最低 + 1 秒単位課金",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "マルチクラウド対応",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**サポートクラウド**: AWS / Azure / GCP",
                "**リージョン**: 各クラウドの主要リージョン",
                "**Cross-Region Replication**: リージョン間レプリケーション",
                "**Cross-Cloud Replication**: クラウド間レプリケーション",
                "**Snowgrid**: マルチクラウド ・ マルチリージョンの統合管理",
                "**External Stages**: S3 / Azure Blob / GCS への参照",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Snowflake のオブジェクト階層",
      overview:
        "Account / Database / Schema / Table の階層を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "オブジェクトの階層",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Organization**: 複数 Account の統括",
                "**Account**: テナント単位、URL: `https://<account>.<region>.snowflakecomputing.com`",
                "**Database**: 論理的なデータの集合",
                "**Schema**: Database 内の論理グループ",
                "**Table / View / Stage / Stream / Task / Function / Procedure**: スキーマ内オブジェクト",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "テーブルの種類",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Permanent**: 標準テーブル、Time Travel + Fail-safe あり",
                "**Transient**: Fail-safe なし、Time Travel あり(0 〜 1 日)",
                "**Temporary**: セッション内のみ、Fail-safe / Time Travel なし",
                "**External**: S3 / Azure Blob / GCS のファイルを参照(Snowflake 外保管)",
                "**Iceberg Tables**: Apache Iceberg 形式での外部 ・ Snowflake 管理",
                "**Hybrid Tables(Unistore)**: トランザクション + 分析の両立",
                "**Dynamic Tables**: マテリアライズドビュー進化版",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "View ・ Stage ・ Stream ・ Task",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**View**: 仮想テーブル(SELECT 定義)",
                "**Materialized View**: 実体化、自動更新、Enterprise+ Edition",
                "**Secure View / Secure Materialized View**: 定義非公開",
                "**Stage**: ファイルの一時置き場(Internal / External)",
                "**Stream**: テーブルの変更追跡(CDC)",
                "**Task**: SQL の定期実行(クロン式)",
                "**Pipe(Snowpipe)**: ファイル到着でストリーミングロード",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "データロードとアンロード",
      overview:
        "COPY コマンド ・ Snowpipe ・ ファイル形式を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "ファイル形式とステージ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**サポート形式**: CSV / TSV / JSON / Avro / Parquet / ORC / XML",
                "**File Format オブジェクト**: 形式定義の再利用",
                "**Internal Stage**: User / Table / Named",
                "**External Stage**: S3 / Azure Blob / GCS への参照",
                "**Stage 暗号化**: AWS_SSE / KMS / Customer-Managed Key",
                "**PUT / GET コマンド**: SnowSQL 経由でローカル ⇔ Internal Stage",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "COPY コマンドと一括ロード",
          blocks: [
            {
              type: "code",
              title: "COPY INTO の例",
              python:
                "-- ファイル形式作成\nCREATE FILE FORMAT csv_format\n  TYPE = 'CSV'\n  FIELD_DELIMITER = ','\n  SKIP_HEADER = 1\n  NULL_IF = ('NULL', '');\n\n-- 外部ステージ作成\nCREATE STAGE my_s3_stage\n  URL = 's3://my-bucket/data/'\n  CREDENTIALS = (AWS_KEY_ID = 'xxx' AWS_SECRET_KEY = 'yyy')\n  FILE_FORMAT = csv_format;\n\n-- ロード\nCOPY INTO sales_table\nFROM @my_s3_stage\nPATTERN = '.*\\.csv'\nON_ERROR = 'CONTINUE';",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ON_ERROR**: CONTINUE / SKIP_FILE / ABORT_STATEMENT",
                "**VALIDATION_MODE**: ロード前検証",
                "**FORCE = TRUE**: 既ロード済ファイルも再ロード",
                "**PATTERN**: 正規表現でファイル選択",
                "**並列度**: ファイルを 100 〜 250 MB に分割すると最適",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Snowpipe(継続的ロード)",
          blocks: [
            {
              type: "p",
              text: "**Snowpipe** はファイルが Stage に到着したら自動でロードする継続的取込み機能。バッチ COPY の代替として **数分以内のリアルタイム性** を実現します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Auto-Ingest**: S3 SQS / EventGrid 通知で自動起動",
                "**REST API**: 明示的なファイル通知",
                "**Snowpipe Streaming(Kafka 統合)**: ms 級のストリーミング",
                "**Per-file 課金**: ロードファイル数で課金",
                "**Snowpark Python API**: コードからのロード制御",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "SQL とデータ変換",
      overview:
        "Snowflake SQL ・ 半構造化データ ・ Stored Procedure ・ Snowpark を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Snowflake SQL の特徴",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ANSI SQL 準拠 + 独自拡張**",
                "**JOIN**: INNER / LEFT / RIGHT / FULL OUTER / CROSS / LATERAL / ASOF",
                "**ウィンドウ関数**: ROW_NUMBER / RANK / LAG / LEAD / NTILE",
                "**CTE / 再帰 CTE**: WITH RECURSIVE",
                "**QUALIFY**: ウィンドウ関数の結果でフィルタ",
                "**COPY GRANTS**: 権限の引継ぎ",
                "**ZEROIFNULL / NULLIFZERO / NVL / COALESCE**",
                "**TRY_CAST**: 失敗時 NULL を返す型変換",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "半構造化データ(VARIANT)",
          blocks: [
            {
              type: "p",
              text: "**VARIANT** 型は JSON / Avro / XML を **そのまま格納 → SQL でクエリ** できる Snowflake の独自型。スキーマ進化に強く、データレイク的な使い方が可能です。",
            },
            {
              type: "code",
              title: "VARIANT の例",
              python:
                "-- JSON をそのまま格納\nCREATE TABLE events (raw VARIANT);\n\nINSERT INTO events SELECT PARSE_JSON('{\"user\": \"alice\", \"action\": \"click\", \"item\": {\"id\": 42}}');\n\n-- ドット記法 + コロン記法でアクセス\nSELECT\n  raw:user::STRING AS user,\n  raw:action::STRING AS action,\n  raw:item.id::NUMBER AS item_id\nFROM events;",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**FLATTEN**: 配列を行に展開",
                "**OBJECT_CONSTRUCT / ARRAY_CONSTRUCT**: JSON 構築",
                "**LATERAL FLATTEN**: クロス結合的に展開",
                "**Schema Detection**: VARIANT から論理スキーマを推論",
                "**INFER_SCHEMA**: Parquet / Avro からのスキーマ推論",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Stored Procedure ・ UDF ・ Snowpark",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Stored Procedure**: JavaScript / Python / Scala / SQL で記述",
                "**UDF(User Defined Function)**: SQL / JavaScript / Python / Java / Scala",
                "**External Function**: AWS Lambda / Azure Function / GCP Cloud Function を呼出",
                "**Snowpark**: Python / Java / Scala API、DataFrame 風で SQL 生成",
                "**Snowpark ML**: 特徴量エンジニアリング ・ ML モデル構築",
                "**Cortex AI**: SQL から LLM(Llama / Claude / Mistral)を呼出",
                "**Cortex Search**: ベクトル検索",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "パフォーマンスとコスト最適化",
      overview:
        "クラスタリング ・ キャッシュ ・ Resource Monitor を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "マイクロパーティションとクラスタリング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Micro-partition**: Snowflake が自動的に作る圧縮済 ・ 列指向の単位(50 〜 500 MB)",
                "**Pruning**: クエリのフィルタ条件でマイクロパーティションを除外、I/O 削減",
                "**Cluster Key**: 並べ替えのヒント。大規模テーブルで自動最適化",
                "**Automatic Clustering**: バックグラウンドで再クラスタリング(Enterprise+)",
                "**SYSTEM$CLUSTERING_INFORMATION**: クラスタ品質の確認",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "3 種のキャッシュ",
          blocks: [
            {
              type: "def",
              title: "Snowflake のキャッシュ階層",
              body: "**1. Result Cache(クエリ結果)**: クラウドサービス層に保存、24 時間有効、データ不変なら同じクエリで即返答\n\n**2. Local Disk Cache(SSD)**: Warehouse の SSD にデータをキャッシュ、Warehouse 再起動で消える\n\n**3. Remote Disk(マイクロパーティション)**: 元の永続ストレージ\n\nクエリは **Result → Local SSD → Remote** の順で確認される。",
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Search Optimization と Query Acceleration",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Search Optimization Service**: 等価検索 ・ サブストリング検索の高速化(Enterprise+)",
                "**Query Acceleration Service**: 一時的に追加の計算リソースを動的に付与",
                "**Materialized View**: 集計結果の事前計算 + 自動更新",
                "**Result Reuse**: 同一クエリの結果を再利用",
                "**Data Sampling**: TABLESAMPLE で確率的サンプリング",
                "**EXPLAIN**: クエリプランの確認",
                "**Query Profile**: 実行詳細の可視化(UI)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Time Travel ・ Cloning ・ Data Sharing",
      overview:
        "Snowflake の独自機能を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Time Travel と Fail-safe",
          blocks: [
            {
              type: "def",
              title: "データ保護の 2 段階",
              body: "**Time Travel**: 過去の状態にクエリ ・ 復元できる期間。Standard Edition では 1 日、Enterprise+ で最大 90 日。誤削除 ・ 誤更新からの復旧。\n\n**Fail-safe**: Time Travel が切れた後の **追加 7 日間** の隠れバックアップ(Snowflake サポート経由でのみ復元可)。Permanent テーブルのみ。",
            },
            {
              type: "code",
              title: "Time Travel の例",
              python:
                "-- 1 時間前の状態をクエリ\nSELECT * FROM sales\n  AT(OFFSET => -3600);\n\n-- 特定タイムスタンプの状態\nSELECT * FROM sales\n  AT(TIMESTAMP => '2025-04-01 09:00:00'::TIMESTAMP);\n\n-- 特定クエリ実行直前の状態\nSELECT * FROM sales\n  BEFORE(STATEMENT => '8e5d0ca9-005e-44e6-b858-a8f5b37c5726');\n\n-- テーブルを 1 日前の状態に復元\nUNDROP TABLE sales;",
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Zero-Copy Cloning",
          blocks: [
            {
              type: "p",
              text: "**Zero-Copy Cloning** はテーブル ・ Schema ・ Database を **メタデータ操作だけで瞬時に複製** する機能。実データはコピーせず参照を共有し、変更があった部分のみ新規データとして書き込まれます(コピーオンライト)。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**用途**: dev / test 環境の作成、本番データのスナップショット、A/B 試験",
                "**コスト**: クローン時点ではほぼゼロ(変更分のみ課金)",
                "**Database / Schema / Table の単位でクローン可能**",
                "**`CREATE TABLE my_test CLONE prod.sales;`** のような構文",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "Data Sharing と Marketplace",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Secure Data Sharing**: 別 Account へデータをコピーせず安全に共有",
                "**Reader Account**: Snowflake 未契約の取引先にも提供可能",
                "**Snowflake Marketplace**: 公開データセット ・ サードパーティデータの売買",
                "**Snowflake Native Apps**: アプリ自体を Snowflake 上で配布",
                "**Data Clean Room**: 複数組織間で個別データを開示せず分析",
                "**Listings**: 共有の単位",
                "**Cross-region / Cross-cloud Sharing**: リージョン ・ クラウドを超えた共有",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "セキュリティとガバナンス",
      overview:
        "ロール ・ 認証 ・ 暗号化 ・ ガバナンス機能を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "RBAC と Role 階層",
          blocks: [
            {
              type: "p",
              text: "Snowflake は **RBAC(Role-Based Access Control)** が基本。**ユーザ → ロール → オブジェクトへの権限** の 3 段階で、ロールの **継承(Role Hierarchy)** が可能。",
            },
            { type: "h3", text: "システム定義ロール" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ACCOUNTADMIN**: 最上位、全権限。日常使用は推奨されない",
                "**SECURITYADMIN**: Role / User 管理",
                "**USERADMIN**: User / Role 作成",
                "**SYSADMIN**: 一般オブジェクト作成 ・ 管理",
                "**PUBLIC**: デフォルトロール、最小権限",
                "**ORGADMIN**: 組織レベルの管理",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "認証とネットワーク",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**MFA(多要素認証)**: 必須化推奨",
                "**SSO(SAML / OAuth)**: Okta / Azure AD / Ping",
                "**SCIM**: ユーザ ・ グループの自動同期",
                "**Key-pair Authentication**: パスワードレス API 認証",
                "**OAuth**: 外部システム統合",
                "**Network Policies**: IP allowlist / blocklist",
                "**Private Connectivity**: AWS PrivateLink / Azure Private Link / GCP Private Service Connect",
                "**Tri-Secret Secure**: 顧客 + Snowflake + クラウドの 3 鍵による暗号化",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "データガバナンス機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Row Access Policy(RLS)**: 行レベルセキュリティ",
                "**Dynamic Data Masking**: 列レベルマスキング(動的)",
                "**External Tokenization**: 外部トークン化サービスとの連携",
                "**Tag**: メタデータのタグ付け",
                "**Object Tagging + Policy Assignment**: タグでポリシー一括管理",
                "**Access History**: 監査ログ",
                "**Login History**: ログイン履歴",
                "**Snowflake Horizon**: 統合ガバナンス機能",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "Snowpark と Cortex AI",
      overview:
        "Snowflake のプログラミング ・ AI 統合機能を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Snowpark",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Snowpark API**: Python / Java / Scala で DataFrame 風の API",
                "**Snowpark Python**: pandas 風のコード → SQL 自動変換",
                "**UDF / Stored Procedure を Python で**",
                "**Snowpark Container Services**: Snowflake 上でコンテナ実行",
                "**Snowpark ML**: 機械学習 API",
                "**External Network Access**: Snowflake から外部 API 呼出",
                "**Native Apps**: Snowflake 上で配布可能なアプリ",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Cortex AI",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cortex LLM Functions**: SQL から `COMPLETE / SUMMARIZE / TRANSLATE / SENTIMENT / EXTRACT_ANSWER` などの LLM 関数",
                "**Cortex Search**: ベクトル + キーワードのハイブリッド検索",
                "**Cortex Analyst**: 自然言語からの SQL 生成 + 質問応答",
                "**Cortex Agents**: タスク実行エージェント",
                "**Document AI**: PDF からの情報抽出",
                "**Snowflake Copilot**: SQL コーディング AI アシスタント",
                "**サポート LLM**: Llama 3 / Mistral / Snowflake Arctic / Claude(参考)",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "他システム統合",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Connectors / Drivers**: JDBC / ODBC / Python / Spark",
                "**dbt / Fivetran / Stitch**: ELT パートナー",
                "**Tableau / Power BI / Looker**: BI 連携",
                "**Apache Iceberg**: オープンテーブル形式での相互運用",
                "**Streamlit in Snowflake**: アプリ開発 UI",
                "**Snowflake Notebooks**: Jupyter 風のノートブック",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策の総まとめ",
      overview:
        "範囲別チェックリストと試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: 3 層アーキテクチャ / Virtual Warehouse / マルチクラウド",
                "**第 3 章**: テーブル種別 4 種(Permanent/Transient/Temporary/External)/ Stream / Task",
                "**第 4 章**: COPY / Snowpipe / File Format / Internal vs External Stage",
                "**第 5 章**: VARIANT / FLATTEN / Snowpark / Cortex AI",
                "**第 6 章**: マイクロパーティション / 3 種キャッシュ / Search Optimization",
                "**第 7 章**: Time Travel(Standard 1 日 / Enterprise+ 90 日)/ Fail-safe(7 日)/ Zero-Copy Cloning / Data Sharing",
                "**第 8 章**: RBAC / システム定義ロール 6 種 / Network Policies / RLS / Dynamic Data Masking",
                "**第 9 章**: Snowpark / Cortex LLM Functions / Snowflake Copilot",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**100 問 / 115 分** = 1 問 約 70 秒、スピード勝負",
                "**Edition 別の機能差**: Standard / Enterprise+ / Business Critical / VPS で機能差あり",
                "**Time Travel の期間**: Standard 1 日、Enterprise+ で最大 90 日",
                "**Fail-safe の 7 日間 + Permanent のみ**",
                "**Marketplace**: Free / Paid / Personalized",
                "**Snowflake University の練習問題** を必ず受ける",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "SnowPro Core 合格 → **SnowPro Specialty(Data Engineer / Data Analyst / Data Scientist / Architect / Administrator)** が次のステップ。クラウドに関する知識を加えるなら本サイトの[AWS SAA](/certs/aws-saa) ・ [Azure AI-900](/certs/azure-ai-900)も。",
            },
            {
              type: "practical",
              title: "SnowPro Core のキャリア活用",
              body: "Snowflake は **金融 ・ 小売 ・ メディア ・ ヘルスケア** など幅広い業界で採用が拡大中。**データエンジニア ・ アナリティクスエンジニア ・ データプラットフォーム担当** で評価が高く、**dbt + Snowflake** 案件が特に多い。本サイトの[DB スペシャリスト](/certs/db-specialist)と組合せると、伝統的 DB + モダンデータ基盤の両軸で強みになります。",
            },
          ],
        },
      ],
    },
  ],
};
