import type { Question } from "@/types/content";

export const dbSpecialistQuestions: Question[] = [
  {
    id: "db-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "データベーススペシャリスト試験(DB)が分類される IPA 試験のレベルとして最も適切なものを選びなさい。",
    choices: [
      "レベル 1(IT パスポート)",
      "レベル 2(基本情報)",
      "レベル 3(応用情報)",
      "レベル 4(高度試験)",
    ],
    correctIndex: 3,
    explanation:
      "DB スペシャリストは **レベル 4(高度試験)**。応用情報(レベル 3)の上位で、午前 I + 午前 II + 午後 I + 午後 II の 4 段階構造。年 1 回(秋)実施。",
  },
  {
    id: "db-q2",
    category: "関係代数",
    difficulty: 2,
    question:
      "関係代数の **8 つの基本演算** に **含まれない** ものを選びなさい。",
    choices: [
      "選択(σ)",
      "射影(π)",
      "結合(⨝)",
      "微分(d/dx)",
    ],
    correctIndex: 3,
    explanation:
      "関係代数の基本演算は **選択 / 射影 / 和 / 差 / 直積 / 結合 / 商 / 名前変更**。微分は数学の概念で関係代数とは無関係。",
  },
  {
    id: "db-q3",
    category: "正規化",
    difficulty: 2,
    question:
      "**第 2 正規形(2NF)** で排除される従属性として最も適切なものを選びなさい。",
    choices: [
      "完全関数従属",
      "部分関数従属",
      "推移関数従属",
      "多値従属性",
    ],
    correctIndex: 1,
    explanation:
      "**2NF = 1NF + 部分関数従属の排除**。3NF が推移関数従属の排除、4NF が多値従属性の排除。",
  },
  {
    id: "db-q4",
    category: "正規化",
    difficulty: 3,
    question:
      "BCNF(Boyce-Codd 正規形)が 3NF より厳格である理由として最も適切なものを選びなさい。",
    choices: [
      "繰返し項目を完全に排除する",
      "すべての非自明な FD で行列式がスーパーキーであることを要求する",
      "NULL を完全に禁止する",
      "外部キーを禁止する",
    ],
    correctIndex: 1,
    explanation:
      "BCNF は **すべての非自明な関数従属性の行列式がスーパーキー** であることを要求する。3NF より厳格だが、実用上は 3NF で十分なことが多い。",
  },
  {
    id: "db-q5",
    category: "ER 図",
    difficulty: 2,
    question:
      "ER 図で『親実体に依存して識別される実体』の名称として最も適切なものを選びなさい。",
    choices: [
      "強実体(Strong Entity)",
      "弱実体(Weak Entity)",
      "関連実体",
      "コンポジット実体",
    ],
    correctIndex: 1,
    explanation:
      "**弱実体(Weak Entity)** は親実体の主キーがないと識別できない実体。例: 注文に対する注文明細(注文番号がないと識別できない)。",
  },
  {
    id: "db-q6",
    category: "SQL",
    difficulty: 3,
    question:
      "ウィンドウ関数 ROW_NUMBER() と RANK() の違いとして最も適切なものを選びなさい。",
    choices: [
      "ROW_NUMBER は同順位を区別する、RANK は同順位を同じ番号にする(順位飛び)",
      "両者は完全に同じ",
      "ROW_NUMBER は集約関数、RANK は窓関数",
      "RANK は SELECT でのみ、ROW_NUMBER は WHERE でのみ使える",
    ],
    correctIndex: 0,
    explanation:
      "**ROW_NUMBER**: 1, 2, 3, 4, 5...(同値でも区別)。**RANK**: 1, 1, 3, 3, 5(同値は同番号、次は飛ぶ)。**DENSE_RANK**: 1, 1, 2, 2, 3(飛ばない)。",
  },
  {
    id: "db-q7",
    category: "SQL",
    difficulty: 3,
    question:
      "SQL で組織階層のような **再帰的な構造** を扱うのに最も適切な機能を選びなさい。",
    choices: [
      "ストアドプロシージャ",
      "再帰 CTE(WITH RECURSIVE)",
      "ビュー",
      "トリガー",
    ],
    correctIndex: 1,
    explanation:
      "**WITH RECURSIVE** は再帰的に CTE を呼び出して階層構造を展開できる。組織階層 ・ カテゴリツリー ・ グラフ走査で使われる。",
  },
  {
    id: "db-q8",
    category: "ACID",
    difficulty: 2,
    question:
      "ACID 特性で『コミット後の変更がクラッシュ後も保持される』性質として最も適切なものを選びなさい。",
    choices: [
      "Atomicity(原子性)",
      "Consistency(一貫性)",
      "Isolation(独立性)",
      "Durability(永続性)",
    ],
    correctIndex: 3,
    explanation:
      "**Durability(永続性)** はコミット済の変更が永続化される性質。WAL(Write-Ahead Logging)などで実装される。",
  },
  {
    id: "db-q9",
    category: "分離レベル",
    difficulty: 3,
    question:
      "分離レベル READ COMMITTED で **発生しうる** 並行性異常として最も適切なものを選びなさい。",
    choices: [
      "ダーティリードのみ",
      "ノンリピータブルリード ・ ファントムリード",
      "発生しうる異常はない",
      "ロストアップデートのみ",
    ],
    correctIndex: 1,
    explanation:
      "**READ COMMITTED** はダーティリードを防ぐが、**ノンリピータブルリード(同一クエリで結果が変わる)+ ファントムリード(行数が変わる)** は発生しうる。REPEATABLE READ で前者を、SERIALIZABLE で全てを防ぐ。",
  },
  {
    id: "db-q10",
    category: "並行制御",
    difficulty: 3,
    question:
      "PostgreSQL / Oracle が標準採用している、リーダーがライターをブロックしないことを特徴とする同時実行制御方式として最も適切なものを選びなさい。",
    choices: [
      "2 相ロック(2PL)",
      "MVCC(マルチバージョン同時実行制御)",
      "タイムスタンプ順序",
      "悲観的ロック",
    ],
    correctIndex: 1,
    explanation:
      "**MVCC** は各トランザクションに『過去のスナップショット』を見せることで、リーダーがライターをブロックしない仕組み。PostgreSQL / Oracle / SQL Server(SI モード)で標準。",
  },
  {
    id: "db-q11",
    category: "障害回復",
    difficulty: 3,
    question:
      "WAL(Write-Ahead Logging)の主な目的として最も適切なものを選びなさい。",
    choices: [
      "クエリ実行を高速化する",
      "トランザクションの永続性を保証し、障害時に回復可能にする",
      "ストレージの暗号化",
      "ネットワーク帯域の節約",
    ],
    correctIndex: 1,
    explanation:
      "**WAL** はデータファイル変更前にログを書く仕組み。コミット時はログのみ書き込むので高速で、クラッシュ後もログから REDO で復元可能。永続性(D)実装の標準。",
  },
  {
    id: "db-q12",
    category: "索引",
    difficulty: 2,
    question:
      "RDBMS で最も標準的な索引構造として最も適切なものを選びなさい。",
    choices: [
      "B-tree(または B+tree)",
      "ハッシュ索引",
      "ビットマップ索引",
      "全文索引",
    ],
    correctIndex: 0,
    explanation:
      "**B-tree / B+tree** が RDBMS の標準索引。範囲検索 ・ ソートに強く、$O(\\log n)$ で検索可能。ハッシュは等価検索のみ、ビットマップは低カーディナリティ向け。",
  },
  {
    id: "db-q13",
    category: "実行計画",
    difficulty: 3,
    question:
      "結合方式の中で **大量の行同士を結合する際に最も効率的** なことが多いものを選びなさい。",
    choices: [
      "Nested Loop Join",
      "Hash Join",
      "Cartesian Product",
      "Self Join",
    ],
    correctIndex: 1,
    explanation:
      "**Hash Join** は小さい方を Hash 表に展開し、大きい方をスキャンして結合する方式で、大量行同士の結合で効率的。Nested Loop は片方が小さい場合に向く。",
  },
  {
    id: "db-q14",
    category: "パーティション",
    difficulty: 3,
    question:
      "テーブルの行を期間や範囲で物理的に分割する技法の名称として最も適切なものを選びなさい。",
    choices: [
      "正規化",
      "水平パーティション",
      "垂直パーティション",
      "ビュー",
    ],
    correctIndex: 1,
    explanation:
      "**水平パーティション** は行を範囲 / リスト / ハッシュ等で分割する方式。古いデータの分離 ・ 検索高速化 ・ 保守性向上に使う。垂直パーティションは列の分割。",
  },
  {
    id: "db-q15",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "DB レベルで **行単位** に表示制御するセキュリティ機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Transparent Data Encryption(TDE)",
      "Row-Level Security(RLS)",
      "Column-Level Encryption",
      "Dynamic Data Masking",
    ],
    correctIndex: 1,
    explanation:
      "**Row-Level Security(RLS)** は行単位のアクセス制御(例: 営業担当は自分の顧客のみ閲覧可)。TDE は保存時暗号化、Dynamic Data Masking は表示時マスキング。",
  },
  {
    id: "db-q16",
    category: "NoSQL",
    difficulty: 2,
    question:
      "Redis ・ DynamoDB ・ Memcached が分類される NoSQL の種類として最も適切なものを選びなさい。",
    choices: [
      "ドキュメント型",
      "キーバリュー型",
      "カラム指向",
      "グラフ型",
    ],
    correctIndex: 1,
    explanation:
      "**キーバリュー型(KVS)** はシンプルな key-value 構造で超高速。MongoDB はドキュメント型、Cassandra / HBase はカラム指向、Neo4j はグラフ型。",
  },
  {
    id: "db-q17",
    category: "CAP",
    difficulty: 3,
    question:
      "CAP 定理で **同時に満たせない** とされる 3 つの性質に **含まれない** ものを選びなさい。",
    choices: [
      "Consistency(一貫性)",
      "Availability(可用性)",
      "Partition tolerance(分断耐性)",
      "Durability(永続性)",
    ],
    correctIndex: 3,
    explanation:
      "**CAP** は **C / A / P** の 3 つ。Durability は ACID の D で、CAP には含まれない。実用上 P は前提で **CP**(一貫性優先)か **AP**(可用性優先)を選ぶ。",
  },
  {
    id: "db-q18",
    category: "DWH",
    difficulty: 2,
    question:
      "データウェアハウスで使われる **ファクトテーブル + ディメンションテーブル** の典型的なスキーマ設計として最も適切なものを選びなさい。",
    choices: [
      "第 3 正規形(3NF)",
      "BCNF",
      "スター / スノーフレークスキーマ",
      "オブジェクト指向データモデル",
    ],
    correctIndex: 2,
    explanation:
      "**スタースキーマ**(中心 = ファクト、周辺 = ディメンション)・ **スノーフレークスキーマ**(ディメンションをさらに正規化)が DWH の標準設計。読み取り高速化のため意図的に非正規化される。",
  },
  {
    id: "db-q19",
    category: "ETL/ELT",
    difficulty: 3,
    question:
      "クラウド DWH 時代に主流になった『生データを先に DWH へロードしてから DWH 内で変換する』方式の名称として最も適切なものを選びなさい。",
    choices: [
      "ETL(Extract → Transform → Load)",
      "ELT(Extract → Load → Transform)",
      "CDC(Change Data Capture)",
      "WAL(Write-Ahead Logging)",
    ],
    correctIndex: 1,
    explanation:
      "**ELT** はクラウド DWH の計算性能を活用し、**T(変換)を DWH 内で SQL ベースで行う** 方式。dbt がこの T 層を Git 管理するツールとして普及している。",
  },
  {
    id: "db-q20",
    category: "データ基盤",
    difficulty: 2,
    question:
      "データの **来歴(誰がいつどこから取得し、どう変換したか)** を追跡できる仕組みの名称として最も適切なものを選びなさい。",
    choices: [
      "リネージ(Lineage)",
      "ロギング(Logging)",
      "シャーディング(Sharding)",
      "オーケストレーション(Orchestration)",
    ],
    correctIndex: 0,
    explanation:
      "**データリネージ(Lineage)** はデータがどこから来てどう変換されたかの追跡情報。データガバナンスとデバッグに必須で、DataHub / Apache Atlas / OpenLineage などで実装される。",
  },
  {
    id: "db-q21",
    category: "正規化",
    difficulty: 3,
    question:
      "**第 3 正規形(3NF)** の条件として最も適切なものを選びなさい。",
    choices: [
      "2NF を満たし、すべての非キー属性が主キーに推移的に関数従属しない",
      "1NF を満たす",
      "BCNF を満たす",
      "外部キー制約を持つ",
    ],
    correctIndex: 0,
    explanation:
      "**3NF = 2NF + 推移的関数従属の排除**。例: A → B → C のとき C は A に推移的に従属。これを別テーブルに分解する。**BCNF は 3NF の強化版**(候補キーへの推移従属も排除)。",
  },
  {
    id: "db-q22",
    category: "正規化",
    difficulty: 3,
    question:
      "**ボイス・コッド正規形(BCNF)** が **3NF** より厳しい点として最も適切なものを選びなさい。",
    choices: [
      "すべての関数従属で左辺(決定子)が候補キーであること",
      "主キーが必須",
      "外部キーが必須",
      "NULL を許可する",
    ],
    correctIndex: 0,
    explanation:
      "**BCNF**: 任意の関数従属 X → Y で X が候補キーであることを要求。3NF が許す『候補キー以外への推移』も BCNF は排除。3NF と BCNF が一致するケースも多い。",
  },
  {
    id: "db-q23",
    category: "SQL",
    difficulty: 3,
    question:
      "SQL の **ウィンドウ関数** で **行番号を取得** する関数として最も適切なものを選びなさい。",
    choices: ["ROW_NUMBER()", "COUNT(*)", "RANK()", "SUM()"],
    correctIndex: 0,
    explanation:
      "**ROW_NUMBER()** は連続行番号(同値も別番号)。**RANK()** は同値同順位 + ギャップあり、**DENSE_RANK()** は同値同順位 + ギャップなし。`OVER (PARTITION BY ... ORDER BY ...)` 必須。",
  },
  {
    id: "db-q24",
    category: "SQL",
    difficulty: 3,
    question:
      "**WITH 句(CTE)** が **サブクエリ** より優れる点として最も適切なものを選びなさい。",
    choices: [
      "可読性 + 再利用性 + 再帰クエリ対応",
      "実行速度が必ず速い",
      "結果セットが暗号化される",
      "インデックスが自動生成される",
    ],
    correctIndex: 0,
    explanation:
      "**WITH 句(CTE)**: 可読性向上 + 同じクエリの再利用 + **再帰 CTE で階層構造クエリ(社員-上司 / 部品展開)** 可能。マテリアライズは DB 実装次第。",
  },
  {
    id: "db-q25",
    category: "インデックス",
    difficulty: 3,
    question:
      "**B-tree インデックス** と **ハッシュインデックス** の使い分けとして最も適切なものを選びなさい。",
    choices: [
      "B-tree: 範囲検索 ・ ソート、ハッシュ: 等価検索のみ高速",
      "両者は同じ",
      "ハッシュが常に高速",
      "B-tree は等価検索のみ",
    ],
    correctIndex: 0,
    explanation:
      "**B-tree**: 範囲 ・ 不等号 ・ ORDER BY ・ LIKE 'prefix%' に対応(汎用)。**ハッシュ**: 等価検索のみ O(1)、範囲不可。PostgreSQL は両方サポート、MySQL InnoDB は B-tree のみ。",
  },
  {
    id: "db-q26",
    category: "インデックス",
    difficulty: 3,
    question:
      "**カバリングインデックス(Covering Index)** の効果として最も適切なものを選びなさい。",
    choices: [
      "クエリで必要な列を全てインデックスに含めて、テーブル本体を読まずに完結",
      "PRIMARY KEY を自動生成",
      "テーブルを暗号化",
      "JOIN を不要にする",
    ],
    correctIndex: 0,
    explanation:
      "**Covering Index**: SELECT する列 + WHERE で使う列を全てインデックスに含める。**Index Only Scan** が可能で I/O 激減。`INCLUDE` 句(PostgreSQL / SQL Server)で非キー列を含められる。",
  },
  {
    id: "db-q27",
    category: "トランザクション",
    difficulty: 3,
    question:
      "ANSI SQL の **トランザクション分離レベル** で **ファントムリードを防止** するレベルを選びなさい。",
    choices: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable",
    ],
    correctIndex: 3,
    explanation:
      "**Serializable のみファントムリード(範囲クエリの結果が変わる現象)を防止**。RR は同一行の再読み取りでは変わらないが、新規行(ファントム)は防げない(ANSI 規格上)。実装により差異あり(InnoDB の RR はファントムも防ぐ)。",
  },
  {
    id: "db-q28",
    category: "トランザクション",
    difficulty: 3,
    question:
      "**MVCC(Multi-Version Concurrency Control)** の主な利点として最も適切なものを選びなさい。",
    choices: [
      "Reader と Writer が互いをブロックしない(読込が書込を待たない)",
      "ストレージ容量を削減",
      "Index 不要",
      "SQL を簡素化",
    ],
    correctIndex: 0,
    explanation:
      "**MVCC**: 各行に複数バージョン保持 → Reader はスナップショット、Writer は新バージョン作成 → **Read と Write が互いをブロックしない**。PostgreSQL / Oracle / SQL Server(RCSI)で採用。MySQL InnoDB も。",
  },
  {
    id: "db-q29",
    category: "ロック",
    difficulty: 3,
    question:
      "**デッドロック** を検知 ・ 解消する一般的な手法として **誤っているもの** を選びなさい。",
    choices: [
      "デッドロック検出(Wait-for グラフ)で 1 トランザクション中止",
      "タイムアウトで強制中止",
      "トランザクション順序の統一",
      "全テーブルに WRITE LOCK をかける",
    ],
    correctIndex: 3,
    explanation:
      "**全テーブル WRITE LOCK は同時実行性破壊**。デッドロック対策は **Wait-for グラフ検出 ・ Lock Timeout ・ 取得順序統一 ・ ロック粒度最小化** が定石。",
  },
  {
    id: "db-q30",
    category: "チューニング",
    difficulty: 3,
    question:
      "**EXPLAIN PLAN** を使ったクエリチューニングで最も注目すべき指標を選びなさい。",
    choices: [
      "Estimated Rows / Actual Rows / Cost / I/O / Join Algorithm",
      "テーブル名の長さ",
      "SQL の行数",
      "DBA の経験年数",
    ],
    correctIndex: 0,
    explanation:
      "**EXPLAIN ANALYZE**: 推定行数 vs 実行行数の乖離 ・ Cost ・ Buffer Hit ・ JOIN 方式(Nested Loop / Hash / Merge)・ Index Scan vs Seq Scan などを確認。**統計情報の鮮度** も重要。",
  },
  {
    id: "db-q31",
    category: "Partitioning",
    difficulty: 3,
    question:
      "**RDB のパーティショニング** で **Partition Pruning** が効く場面として最も適切なものを選びなさい。",
    choices: [
      "WHERE 句にパーティションキーを含むクエリ",
      "全件 SELECT",
      "JOIN 後の集計",
      "ストアドプロシージャ",
    ],
    correctIndex: 0,
    explanation:
      "**Partition Pruning**: WHERE 句のパーティションキー条件で **不要パーティションを物理的にスキップ**。Range / List / Hash / Composite パーティションで活用。日付列が典型。",
  },
  {
    id: "db-q32",
    category: "NoSQL",
    difficulty: 3,
    question:
      "**CAP 定理** の説明として最も適切なものを選びなさい。",
    choices: [
      "Consistency / Availability / Partition tolerance のうち同時に保証できるのは 2 つまで",
      "3 つ全て保証可能",
      "CA は不要",
      "Partition は無視可能",
    ],
    correctIndex: 0,
    explanation:
      "**CAP 定理**(Brewer): ネットワーク分断時に C(整合性)と A(可用性)はトレードオフ。**CP**: Spanner / HBase、**AP**: DynamoDB / Cassandra(eventual consistency)。**CA**(分断なし前提)は単一ノード DB。",
  },
  {
    id: "db-q33",
    category: "NoSQL",
    difficulty: 2,
    question:
      "**KVS(Key-Value Store)** の代表例として最も適切なものを選びなさい。",
    choices: [
      "Redis / DynamoDB / Memcached",
      "MongoDB",
      "Neo4j",
      "Cassandra",
    ],
    correctIndex: 0,
    explanation:
      "**KVS**: Redis(in-memory)・ DynamoDB(分散)・ Memcached(キャッシュ)。**MongoDB はドキュメント DB、Cassandra は Wide-column、Neo4j はグラフ DB**(全て NoSQL の異なるカテゴリ)。",
  },
  {
    id: "db-q34",
    category: "NoSQL",
    difficulty: 3,
    question:
      "**ドキュメント DB(MongoDB / Couchbase)** の主な特徴として最も適切なものを選びなさい。",
    choices: [
      "JSON / BSON 構造の柔軟なスキーマ、ネストデータ扱える",
      "厳密なスキーマ強制",
      "JOIN が高速",
      "ACID 不可",
    ],
    correctIndex: 0,
    explanation:
      "**ドキュメント DB**: JSON-like の階層データ、スキーマレス(or スキーマ任意)。MongoDB 4.0+ は **マルチドキュメント ACID 対応**。集約パイプラインで JOIN ライクな処理も可能。",
  },
  {
    id: "db-q35",
    category: "DWH",
    difficulty: 3,
    question:
      "**スタースキーマ** の説明として最も適切なものを選びなさい。",
    choices: [
      "Fact テーブル + 非正規化された複数 Dimension テーブル",
      "全テーブルを 3NF まで正規化",
      "1 テーブルにすべて格納",
      "グラフ構造",
    ],
    correctIndex: 0,
    explanation:
      "**スタースキーマ**: 中央の Fact(指標 ・ メトリクス)+ 周辺の Dimension(時間 / 商品 / 顧客等、非正規化)。BI クエリで JOIN 最小化 + 集計高速化。**スノーフレーク**は Dimension を正規化した変種。",
  },
  {
    id: "db-q36",
    category: "DWH",
    difficulty: 3,
    question:
      "**Slowly Changing Dimension(SCD)Type 2** の特徴として最も適切なものを選びなさい。",
    choices: [
      "履歴を保持(新行を追加 + valid_from / valid_to で期間管理)",
      "上書き(履歴消失)",
      "別カラムに前回値を保持",
      "削除不可",
    ],
    correctIndex: 0,
    explanation:
      "**SCD Type**: Type 1 = 上書き / Type 2 = 履歴保持(新行 + 期間)/ Type 3 = カラムで前回値。**Type 2 が最も一般的**(顧客属性の変遷追跡など)。",
  },
  {
    id: "db-q37",
    category: "DWH",
    difficulty: 3,
    question:
      "**列指向ストレージ(Columnar)** が **行指向** より優れる場面として最も適切なものを選びなさい。",
    choices: [
      "分析クエリ(集計 ・ 大量行から少数列を取得)",
      "OLTP の単一行 CRUD",
      "頻繁な更新",
      "外部キー制約",
    ],
    correctIndex: 0,
    explanation:
      "**列指向**: Parquet / ORC / Redshift / BigQuery / ClickHouse。同一列の値が連続 → 圧縮効率 ・ I/O 最小化。**OLTP は行指向(MySQL / PostgreSQL)** が向く。",
  },
  {
    id: "db-q38",
    category: "Replication",
    difficulty: 3,
    question:
      "**同期レプリケーション** と **非同期レプリケーション** のトレードオフとして最も適切なものを選びなさい。",
    choices: [
      "同期: 強整合だが遅延 ・ 可用性低下、非同期: 高速 ・ 高可用だが Lag あり",
      "両者は同じ",
      "非同期の方が常に安全",
      "同期はデータ損失なし、非同期は必ず損失",
    ],
    correctIndex: 0,
    explanation:
      "**同期レプリ**: コミット時に全レプリカ書込完了を待つ → 強整合 + RPO=0 だが遅延 ・ ネットワーク影響大。**非同期レプリ**: 即返信 + バックグラウンド転送 → 高速 + 可用だが障害時の Lag 分損失。",
  },
  {
    id: "db-q39",
    category: "Sharding",
    difficulty: 3,
    question:
      "**シャーディング(水平分散)** の Sharding Key 選定基準として **誤っているもの** を選びなさい。",
    choices: [
      "カーディナリティが高い",
      "アクセス分布が均一になる",
      "JOIN がシャード内で完結",
      "値が常に NULL",
    ],
    correctIndex: 3,
    explanation:
      "**良い Sharding Key**: 高カーディナリティ + 均一分布 + JOIN がシャード内完結 + 不変。**NULL は分散不能**、ホットスポット原因。Spanner の Interleaved Tables は親子をコロケートする手法。",
  },
  {
    id: "db-q40",
    category: "バックアップ",
    difficulty: 3,
    question:
      "**Point-in-Time Recovery(PITR)** の実装に必要な要素として **誤っているもの** を選びなさい。",
    choices: [
      "ベースバックアップ + WAL / binlog の連続アーカイブ",
      "復元時に対象時刻まで WAL を適用",
      "Read Replica を作成",
      "WAL のリテンション期間設定",
    ],
    correctIndex: 2,
    explanation:
      "**PITR**: 定期フルバックアップ + WAL / binlog 連続アーカイブ → 任意時刻の状態に復元。**Read Replica は HA 用** で PITR とは別概念(両者を併用するのは一般的)。",
  },
  {
    id: "db-q41",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "**TDE(Transparent Data Encryption)** が暗号化する対象として最も適切なものを選びなさい。",
    choices: [
      "物理的なデータファイル ・ ログファイル ・ バックアップ",
      "アプリ層のセッション",
      "ネットワーク経路",
      "ユーザー認証",
    ],
    correctIndex: 0,
    explanation:
      "**TDE**: データファイル ・ REDO ログ ・ バックアップを **AES で透過暗号化**(アプリ無修正)。**ネットワークは TLS、列暗号化は Column-Level Encryption** で別途。",
  },
  {
    id: "db-q42",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "**SQL インジェクション** 対策として最も効果が高いものを選びなさい。",
    choices: [
      "プレースホルダ / バインド変数(Prepared Statement)",
      "ユーザ入力の文字列フィルタ",
      "DB を読み取り専用",
      "Web Application Firewall のみで対応",
    ],
    correctIndex: 0,
    explanation:
      "**プレースホルダ(? or $1)で SQL とデータを構造的に分離**。エスケープのみは取りこぼし発生。**WAF は補助層**(本質対策ではない)。ORM(SQLAlchemy / Django ORM)はデフォルトでプレースホルダ。",
  },
  {
    id: "db-q43",
    category: "高可用性",
    difficulty: 3,
    question:
      "**Active-Standby クラスタ** と **Active-Active クラスタ** の主な違いとして最も適切なものを選びなさい。",
    choices: [
      "Active-Standby: 通常時 1 ノードのみ稼働、Active-Active: 複数ノード同時書込",
      "Active-Standby が速い",
      "Active-Active はバックアップ不要",
      "両者は同じ",
    ],
    correctIndex: 0,
    explanation:
      "**Active-Standby**: 通常 1 ノード稼働、障害時に切替(MySQL HA / Oracle Data Guard)。**Active-Active**: 複数ノード同時書込(MySQL Group Replication / Galera / Spanner)。整合性とパフォーマンスのトレードオフ。",
  },
  {
    id: "db-q44",
    category: "Connection Pool",
    difficulty: 3,
    question:
      "**コネクションプール** の主目的として最も適切なものを選びなさい。",
    choices: [
      "DB 接続の確立 / 切断コストを削減し、同時接続数も制限",
      "DB を暗号化する",
      "SQL を自動生成する",
      "インデックスを最適化する",
    ],
    correctIndex: 0,
    explanation:
      "**Connection Pool**(HikariCP / pgbouncer など)で **接続を再利用** + 同時接続数制限。DB は接続 1 つにつき memory ・ プロセスを消費するため、無制限接続はサーバ消耗の原因。",
  },
  {
    id: "db-q45",
    category: "VACUUM",
    difficulty: 3,
    question:
      "PostgreSQL の **VACUUM** の主な役割として最も適切なものを選びなさい。",
    choices: [
      "MVCC で生じた古い行バージョンを物理削除 + 統計情報更新(ANALYZE)",
      "テーブル全体を再構築",
      "インデックスを暗号化",
      "ユーザを削除",
    ],
    correctIndex: 0,
    explanation:
      "**VACUUM**: MVCC の dead タプルを物理削除 + フリースペース回収。**VACUUM ANALYZE で統計情報も更新**。autovacuum で自動実行が標準。Transaction ID 周回(Wraparound)対策にも必須。",
  },
  {
    id: "db-q46",
    category: "Caching",
    difficulty: 3,
    question:
      "DB アクセスを高速化する **キャッシュ戦略** で **Read-through** の特徴として最も適切なものを選びなさい。",
    choices: [
      "アプリ → キャッシュ → ミス時に DB から読込みキャッシュに保存",
      "アプリ → DB を直接読込み",
      "書込は同期、読込は非同期",
      "キャッシュは使わない",
    ],
    correctIndex: 0,
    explanation:
      "**キャッシュパターン**: Read-through(キャッシュ経由)/ Cache-aside(アプリが管理)/ Write-through(同期書込)/ Write-behind(非同期書込)。**Cache-aside が最も一般的**。",
  },
  {
    id: "db-q47",
    category: "Time-series",
    difficulty: 3,
    question:
      "**時系列データベース(TimescaleDB / InfluxDB)** が一般 RDB より優れる点として最も適切なものを選びなさい。",
    choices: [
      "時間軸での自動パーティション ・ ダウンサンプリング ・ 圧縮",
      "JOIN が高速",
      "ACID 強化",
      "GUI が良い",
    ],
    correctIndex: 0,
    explanation:
      "**時系列 DB**: 時間ベース hypertable(自動パーティション)・ Continuous Aggregates(ダウンサンプリング)・ Compression。IoT / メトリクス / 金融データに最適。",
  },
  {
    id: "db-q48",
    category: "Graph DB",
    difficulty: 3,
    question:
      "**Neo4j** などのグラフ DB が **RDB の自己 JOIN** より優れる場面として最も適切なものを選びなさい。",
    choices: [
      "多段の関係性探索(友達の友達の友達など)",
      "単純な等価検索",
      "集計クエリ",
      "OLTP 取引履歴",
    ],
    correctIndex: 0,
    explanation:
      "**グラフ DB**: ノード + リレーション(辺)を 1st-class で扱う。**多段リレーション探索が O(深さ)** で高速(RDB の自己 JOIN は段数で爆発的に遅くなる)。SNS / 不正検知 / 推薦に最適。",
  },
  {
    id: "db-q49",
    category: "Cloud DB",
    difficulty: 3,
    question:
      "**Amazon Aurora** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "MySQL / PostgreSQL 互換",
      "ストレージとコンピュートが分離 ・ 6 重レプリカ",
      "Multi-AZ で自動フェイルオーバー",
      "完全 OSS で商用利用不可",
    ],
    correctIndex: 3,
    explanation:
      "**Aurora**: AWS マネージド ・ MySQL/PostgreSQL 互換 ・ ストレージ分離型(6 重 ・ 3 AZ)・ 自動フェイルオーバー。**商用利用 OK** で AWS の旗艦 RDB。サーバレス v2 も提供。",
  },
  {
    id: "db-q50",
    category: "次のステップ",
    difficulty: 1,
    question:
      "DB スペシャリスト合格後の次のステップとして最も適切なものを選びなさい。",
    choices: [
      "ITストラテジスト ・ システムアーキテクト ・ プロジェクトマネージャ等の IPA レベル 4 横展開",
      "ITパスポート",
      "基本情報",
      "簿記 3 級",
    ],
    correctIndex: 0,
    explanation:
      "**DB SP は IPA レベル 4 高度試験**。横展開で **システムアーキテクト ・ ネットワーク SP ・ 情報処理安全確保支援士 ・ ITストラテジスト ・ プロジェクトマネージャ** など他高度試験へ。**クラウド系**(AWS DEA-C01 / Azure DP-203)併用もキャリア面で強い。",
  },
];
