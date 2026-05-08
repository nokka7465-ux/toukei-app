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
];
