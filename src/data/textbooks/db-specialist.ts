import type { Textbook } from "@/types/content";

export const dbSpecialistTextbook: Textbook = {
  levelSlug: "db-specialist",
  title: "データベーススペシャリスト試験 教科書",
  intro:
    "**データベーススペシャリスト試験(DB)** は、**情報処理推進機構(IPA)** が主催する国家試験(レベル 4)で、IPA の高度試験の中でも **データベース ・ データ基盤** に特化した最高峰の認定。応用情報技術者(AP、レベル 3)の上位に位置し、**DB 設計 ・ チューニング ・ 運用 ・ データモデリング ・ ビッグデータ ・ NoSQL** など、現代のデータエンジニアに必要な広範な知識を測ります。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "データベーススペシャリスト ─ 全体像",
      overview:
        "試験形式・出題範囲・難易度・学習プランを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**データベーススペシャリスト試験(DB)** は IPA の情報処理技術者試験における **レベル 4(高度)** に位置し、データベース ・ データエンジニアリングの **専門家** を認定します。応用情報合格者がスキルアップとして目指す高度試験の代表格で、**DBA(データベース管理者)・ データエンジニア ・ データアーキテクト** のキャリア証明として強力です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: 情報処理推進機構(IPA)",
                "**実施**: 年 1 回(秋、10 月)",
                "**形式**: 筆記試験(マークシート + 記述 + 論述)",
                "**問題構成**: 午前 I + 午前 II + 午後 I + 午後 II の 4 段階",
                "**合格基準**: 各段階で 60 点以上",
                "**合格率(参考)**: 約 17 〜 18%",
                "**受験料**: 7,500 円(税込)",
              ],
            },
            { type: "h3", text: "試験の 4 段階構造" },
            {
              type: "list",
              style: "number",
              items: [
                "**午前 I(50 分 ・ 30 問)**: 共通知識(他の高度試験と同一範囲、応用情報合格で 2 年免除可)",
                "**午前 II(40 分 ・ 25 問)**: DB 中心の専門知識",
                "**午後 I(90 分 ・ 3 問中 2 問選択)**: 記述式の事例問題",
                "**午後 II(120 分 ・ 2 問中 1 問選択)**: 長文の論述形式の事例問題",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "学習プランと午後対策",
          blocks: [
            { type: "h3", text: "300 〜 500 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Month 1 〜 2**: 午前 II の DB 専門知識(本教科書 + 過去問演習)",
                "**Month 3**: 概念データモデル ・ 論理データモデル ・ 物理設計",
                "**Month 4 〜 5**: SQL 中級〜上級 ・ チューニング ・ 索引設計",
                "**Month 6**: 午後 I 演習(短文記述)",
                "**Month 7 〜 8**: 午後 II 演習(長文論述)",
              ],
            },
            { type: "h3", text: "午後対策のキー" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ER 図 / 関係スキーマ作成**: 午後 II の核",
                "**正規化の実践**: 与えられた業務記述から 3NF までの導出",
                "**SQL 記述**: ウィンドウ関数 ・ JOIN ・ サブクエリ",
                "**チューニング**: 実行計画 ・ 索引選択 ・ パーティション",
                "**過去問 5 〜 10 年分** を反復演習",
              ],
            },
            {
              type: "intuition",
              title: "DB 試験の最大の壁は『午後 II の論述』",
              body: "午後 II は 120 分で 1 問の事例問題に取り組み、**ER 図 ・ 関係スキーマの設計 + 数百字の記述** が求められます。書く速度より **業務記述から論理 ・ 物理設計を組み立てる思考力** が問われ、過去問演習の量が合格率に直結します。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "リレーショナルモデルと関係代数",
      overview:
        "リレーショナルモデルの数学的基礎、関係代数、関係論理を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "リレーショナルモデルの基礎",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**リレーション(関係)**: 表(タプルの集合)",
                "**タプル(行)**: レコード",
                "**属性(列)**: フィールド",
                "**ドメイン**: 属性の値域",
                "**主キー(PK)**: タプルを一意に識別",
                "**候補キー / スーパーキー**: 主キーの候補となる属性集合",
                "**外部キー(FK)**: 他リレーションへの参照",
                "**NULL**: 値が未定義 ・ 不明",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "関係代数",
          blocks: [
            {
              type: "p",
              text: "関係代数は **集合論ベース** の DB 操作言語。8 つの基本演算で SQL の理論的基盤を成します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**選択(σ)**: 条件に合うタプルを取り出す(WHERE 相当)",
                "**射影(π)**: 指定列のみ取り出す(SELECT 列指定)",
                "**和(∪)**: 2 つのリレーションの和集合",
                "**差(-)**: 集合の差",
                "**直積(×)**: デカルト積",
                "**結合(⨝)**: 自然結合 / θ 結合",
                "**商(÷)**: 除算",
                "**名前変更(ρ)**: 属性名 / リレーション名の変更",
              ],
            },
            {
              type: "intuition",
              title: "関係代数 = SQL のメンタルモデル",
              body: "SQL は宣言型ですが、内部では関係代数の演算ツリーに変換されてオプティマイザが最適化します。**関係代数を理解すると SQL の動作と性能を予測できる** ようになり、DB スペシャリストの午後問題で大きな武器になります。",
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "関係論理(タプル計算 / ドメイン計算)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**タプル関係論理**: 『あるタプル t について、条件 P を満たすもの』",
                "**ドメイン関係論理**: 『ある値 d について、条件 P を満たすもの』",
                "**全称量化(∀)・ 存在量化(∃)**",
                "**SQL の EXISTS / NOT EXISTS** はタプル関係論理に対応",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "データモデリングと正規化",
      overview:
        "概念設計 ・ ER 図 ・ 正規形 ・ 関数従属性を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "ER 図(Entity-Relationship 図)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**エンティティ(実体)**: 業務上の対象(顧客 ・ 注文 ・ 商品)",
                "**属性**: エンティティの性質",
                "**関連(リレーションシップ)**: エンティティ間の関係",
                "**多重度**: 1:1 / 1:N / N:M",
                "**弱実体(Weak Entity)**: 親実体に依存して識別される",
                "**Chen 記法 / IE 記法 / IDEF1X / UML**: 異なる図記法",
              ],
            },
            { type: "h3", text: "概念 → 論理 → 物理の 3 層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**概念設計(Conceptual)**: 業務領域の ER 図、技術非依存",
                "**論理設計(Logical)**: 関係スキーマへの変換、正規化",
                "**物理設計(Physical)**: 索引 ・ パーティション ・ DBMS 固有設定",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "関数従属性と正規形",
          blocks: [
            {
              type: "def",
              title: "関数従属性(FD)",
              body: "属性集合 X が属性集合 Y を **関数的に決定する** とき $X \\to Y$ と書く。例: 学生番号 → 氏名。\n\n**完全関数従属**: 主キーの全属性に依存(その一部に依存しない)。\n\n**部分関数従属**: 主キーの一部にのみ依存。\n\n**推移関数従属**: $X \\to Y$ かつ $Y \\to Z$($X$ は $Y$ 経由で間接的に $Z$ を決める)。",
            },
            { type: "h3", text: "正規形" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**第 1 正規形(1NF)**: 繰返し項目の排除(原子値)",
                "**第 2 正規形(2NF)**: 1NF + 部分関数従属の排除",
                "**第 3 正規形(3NF)**: 2NF + 推移関数従属の排除",
                "**Boyce-Codd 正規形(BCNF)**: 3NF より厳格(すべての非自明な FD で行列式がスーパーキー)",
                "**第 4 正規形(4NF)**: 多値従属性の排除",
                "**第 5 正規形(5NF / PJNF)**: 結合従属性の排除",
                "**Domain-Key 正規形(DKNF)**: 理論的最高(実務では稀)",
              ],
            },
            {
              type: "intuition",
              title: "実務では 3NF が標準",
              body: "**OLTP(取引系)** では 3NF が事実上の標準。BCNF まで厳格化すると JOIN が増えて性能が悪化することが多い。一方、**DWH(分析系)** はあえて非正規化(スター / スノーフレーク)で読み取り性能を優先する設計が定石です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "SQL 中級〜上級",
      overview:
        "JOIN 上級 ・ ウィンドウ関数 ・ CTE ・ 再帰クエリを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "JOIN 上級",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**INNER JOIN**: 両方にマッチする行のみ",
                "**LEFT / RIGHT / FULL OUTER JOIN**: 片方 / 両方を全部残す",
                "**CROSS JOIN**: 直積。意図しない巨大化に注意",
                "**SELF JOIN**: 同じテーブルとの結合(階層構造 ・ 相関)",
                "**SEMI JOIN(EXISTS)・ ANTI JOIN(NOT EXISTS)**",
                "**LATERAL JOIN**: 行ごとにサブクエリを実行",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "ウィンドウ関数と CTE",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ROW_NUMBER / RANK / DENSE_RANK / NTILE**: 順位",
                "**LAG / LEAD**: 前後行の参照",
                "**FIRST_VALUE / LAST_VALUE / NTH_VALUE**",
                "**集約のウィンドウ化**: SUM / AVG / COUNT OVER (...)",
                "**移動平均**: ROWS BETWEEN N PRECEDING AND CURRENT ROW",
                "**PARTITION BY**: グループ内集計",
                "**WITH 句(CTE)**: クエリの段階的構築",
                "**RECURSIVE CTE**: 階層構造 ・ グラフ走査",
              ],
            },
            {
              type: "code",
              title: "再帰 CTE で組織階層を展開",
              python:
                "-- 部署階層を再帰的にたどる\nWITH RECURSIVE dept_tree AS (\n  -- 起点: ルート(parent_id IS NULL)\n  SELECT id, name, parent_id, 0 AS depth\n  FROM departments\n  WHERE parent_id IS NULL\n  UNION ALL\n  -- 再帰: 子部署\n  SELECT d.id, d.name, d.parent_id, dt.depth + 1\n  FROM departments d\n  JOIN dept_tree dt ON d.parent_id = dt.id\n)\nSELECT depth, name FROM dept_tree ORDER BY depth, id;",
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "ストアドプロシージャ ・ トリガー ・ ビュー",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ビュー(VIEW)**: 仮想テーブル。マテリアライズドビューは実体化",
                "**ストアドプロシージャ**: 名前付き SQL 手続き(PL/SQL / T-SQL)",
                "**トリガー(BEFORE / AFTER / INSTEAD OF)**: イベント駆動",
                "**カーソル**: 行単位処理",
                "**ユーザ定義関数(UDF)**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "トランザクションと同時実行制御",
      overview:
        "ACID ・ ロック ・ 分離レベル ・ 障害回復を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "ACID と分離レベル",
          blocks: [
            {
              type: "def",
              title: "ACID 特性",
              body: "**Atomicity(原子性)**: 全成功 / 全失敗\n\n**Consistency(一貫性)**: 整合性制約を維持\n\n**Isolation(独立性)**: 並行処理の干渉なし\n\n**Durability(永続性)**: コミット後の永続化",
            },
            { type: "h3", text: "分離レベルと並行性異常" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**READ UNCOMMITTED**: ダーティリード許容",
                "**READ COMMITTED**: コミット済のみ参照(多くの DBMS のデフォルト)",
                "**REPEATABLE READ**: ファントムリード以外を防ぐ",
                "**SERIALIZABLE**: 完全直列化",
                "**SNAPSHOT ISOLATION(SI)**: MVCC ベース、PostgreSQL / Oracle が標準採用",
              ],
            },
            { type: "h3", text: "代表的な並行性異常" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ダーティリード**: 未コミットの変更を読む",
                "**ノンリピータブルリード**: 同一クエリで結果が変わる(他 Tx の UPDATE)",
                "**ファントムリード**: 同一範囲クエリで行数が変わる(他 Tx の INSERT)",
                "**ロストアップデート**: 並行更新で 1 つの変更が消える",
                "**ライトスキュー**: SI で起きうる更新異常",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "ロックと MVCC",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**共有ロック(S)**: 読み取り、複数同時可",
                "**排他ロック(X)**: 書き込み、単独",
                "**意図ロック(IS / IX)**: 階層ロックのヒント",
                "**2 相ロック(2PL)**: 厳密な直列化保証",
                "**デッドロック**: 検知 / タイムアウト / 順序付けで回避",
                "**MVCC(マルチバージョン同時実行制御)**: スナップショット分離、リーダー / ライターのブロックを減らす",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "障害回復とログ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**WAL(Write-Ahead Logging)**: 変更を先にログに書く",
                "**REDO ログ / UNDO ログ**: 前進 / 後退",
                "**チェックポイント**: 障害時の起点",
                "**ARIES**: 標準的な復旧アルゴリズム",
                "**バックアップ**: 完全 / 差分 / 増分",
                "**Point-in-Time Recovery(PITR)**: 任意時点への復元",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "物理設計とチューニング",
      overview:
        "索引設計 ・ 実行計画 ・ パーティション ・ クエリ最適化を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "索引設計",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**B-tree 索引**: 最も標準。範囲検索 ・ ソートに強い",
                "**ハッシュ索引**: 等価検索のみ、$O(1)$",
                "**ビットマップ索引**: カーディナリティ低の列(性別 ・ ブール)",
                "**全文索引**: 文書検索向け",
                "**GiST / GIN(PostgreSQL)**: 多目的拡張索引",
                "**カバリング索引**: クエリで参照する全列を含む索引",
                "**複合索引**: 列順が重要(検索パターンと一致)",
                "**式索引 / 関数索引**: 計算結果に索引",
              ],
            },
            {
              type: "intuition",
              title: "索引は『万能薬ではない』",
              body: "索引は読み取りを速くするが **書き込みを遅くする**(挿入 / 更新時に索引も更新が必要)。**実際のクエリパターンに基づいて選定** することが重要で、『なんとなく追加』は逆効果。EXPLAIN で実行計画を確認しながら設計するのが定石。",
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "実行計画とオプティマイザ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**EXPLAIN / EXPLAIN ANALYZE**: 実行計画の取得",
                "**コストベースオプティマイザ(CBO)**: 統計情報からコスト計算",
                "**ルールベースオプティマイザ(RBO)**: 古い方式",
                "**結合方式**: Nested Loop / Hash Join / Sort-Merge Join",
                "**結合順序の最適化**",
                "**統計情報の更新**: ANALYZE / VACUUM(PostgreSQL)",
                "**ヒント句**: オプティマイザへの強制",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "パーティション ・ シャーディング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**水平パーティション**: 行を分割(範囲 / リスト / ハッシュ / コンポジット)",
                "**垂直パーティション**: 列を分割",
                "**シャーディング**: 複数サーバへ水平分散",
                "**レプリケーション**: マスタ / スレーブ ・ マルチマスタ",
                "**読み取り分離**: 書き込み = マスタ / 読み取り = レプリカ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "セキュリティとアクセス制御",
      overview:
        "認証 ・ 認可 ・ 暗号化 ・ 監査を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "アクセス制御",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**GRANT / REVOKE**: 権限付与 / 取消",
                "**RBAC**: 役割ベース",
                "**ABAC**: 属性ベース(より細かい制御)",
                "**行レベルセキュリティ(RLS)**: 行単位のフィルタ",
                "**列レベルセキュリティ**: 列単位のマスキング",
                "**動的データマスキング**: 表示時のマスキング",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "暗号化と SQL インジェクション対策",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**保存時暗号化(TDE)**: ストレージレベル",
                "**通信暗号化**: TLS で接続を暗号化",
                "**列レベル暗号化**: 個別列の AES 暗号",
                "**SQL インジェクション対策**: プレースホルダ + 入力検証 + 最小権限",
                "**監査ログ**: 全操作の記録(誰が / いつ / 何を)",
                "**個人情報保護**: GDPR / 改正個人情報保護法対応",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "NoSQL とビッグデータ",
      overview:
        "NoSQL の 4 種類 ・ CAP 定理 ・ 分散 DB を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "NoSQL の 4 種類",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**キーバリュー型**: Redis / DynamoDB / Memcached。シンプルな KV、超高速",
                "**ドキュメント型**: MongoDB / Couchbase。JSON / BSON 形式",
                "**カラム指向**: Cassandra / HBase / BigTable。大規模分析向け",
                "**グラフ型**: Neo4j / Neptune / TigerGraph。ノード + エッジ",
                "**時系列**: InfluxDB / TimescaleDB",
                "**全文検索**: Elasticsearch / OpenSearch",
                "**ベクトル**: Pinecone / pgvector / Milvus(AI / RAG 用)",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "CAP 定理と BASE",
          blocks: [
            {
              type: "def",
              title: "CAP 定理(Brewer)",
              body: "分散システムは以下の 3 つを **同時に** 満たすことができない:\n\n**Consistency(一貫性)**: 全ノードが同じデータを返す\n\n**Availability(可用性)**: すべてのリクエストに応答\n\n**Partition tolerance(分断耐性)**: ネットワーク分断でも動作\n\n実用上は **CP** か **AP** を選ぶ(P は前提)。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ACID(伝統的 RDB)**: 強一貫性",
                "**BASE(NoSQL 的)**: Basically Available, Soft state, Eventually consistent",
                "**結果整合性(Eventual Consistency)**: 一定時間後に一貫",
                "**強一貫性 / 因果一貫性 / 単調一貫性** など段階的モデル",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "ビッグデータ基盤",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hadoop / HDFS**: 分散ファイルシステム + MapReduce",
                "**Spark**: メモリ内分散処理、Hadoop より高速",
                "**Hive / Presto / Trino**: SQL on Hadoop",
                "**Kafka**: 分散ストリーミング",
                "**データレイクハウス**: Databricks Delta Lake / Apache Iceberg",
                "**カラムナーストレージ**: Parquet / ORC で分析クエリ高速化",
                "**OLAP / OLTP の使い分け**: トランザクション系 vs 分析系",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "DWH とデータ基盤の現代",
      overview:
        "クラウド DWH ・ ETL/ELT ・ データメッシュを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "クラウド DWH",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Snowflake**: マルチクラウド対応、ストレージ / コンピュート分離",
                "**BigQuery(Google)**: サーバレス、SQL 分析特化",
                "**Redshift(AWS)**: 列指向 MPP",
                "**Synapse / Fabric(Microsoft)**: 統合データ分析",
                "**Databricks SQL Warehouse**: レイクハウス系",
                "**スター / スノーフレークスキーマ**: ファクト + ディメンション",
                "**SCD(Slowly Changing Dimensions)**: 履歴管理(タイプ 1 / 2 / 3)",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "ETL ・ ELT ・ データオーケストレーション",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ETL(Extract → Transform → Load)**: 古典的、事前変換",
                "**ELT(Extract → Load → Transform)**: クラウド DWH 時代の主流、生データ先ロード",
                "**dbt(data build tool)**: SQL ベース変換層を Git 管理",
                "**Airflow / Dagster / Prefect**: ワークフローオーケストレーション",
                "**Fivetran / Stitch**: マネージド ELT",
                "**CDC(Change Data Capture)**: DB 変更ストリーム",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "データメッシュとデータガバナンス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**データメッシュ**: ドメイン分散 + データを製品として扱う",
                "**データカタログ**: メタデータ管理(DataHub / Atlas / Collibra)",
                "**リネージ(Lineage)**: データの来歴追跡",
                "**データ契約(Data Contract)**: スキーマ ・ SLA の合意",
                "**データ品質**: Great Expectations / Soda / dbt tests",
                "**Privacy by design + GDPR / 改正個人情報保護法**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策と論述戦略",
      overview:
        "範囲別チェックリストと午後 II 論述戦略を整理します。",
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
                "**第 2 章**: 関係代数 8 演算 / 関係論理 / 候補キー / FK",
                "**第 3 章**: ER 図 / FD / 1NF 〜 BCNF / 概念→論理→物理",
                "**第 4 章**: ウィンドウ関数 / 再帰 CTE / LATERAL / トリガー",
                "**第 5 章**: ACID / 分離レベル / MVCC / WAL / ARIES",
                "**第 6 章**: B-tree / 実行計画 / 結合方式 / パーティション / シャーディング",
                "**第 7 章**: GRANT/REVOKE / RLS / TDE / SQLi 対策",
                "**第 8 章**: NoSQL 4 種 / CAP / BASE / Spark / Kafka",
                "**第 9 章**: クラウド DWH / ELT / dbt / Airflow / データメッシュ",
              ],
            },
            { type: "h3", text: "午前対策" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**午前 I 免除**: 応用情報合格 / 高度試験合格 / 同等資格で 2 年免除可",
                "**午前 II は過去問演習** が圧倒的有効。直近 5 〜 10 年分を 2 周",
                "**60% で次段階に進める**",
              ],
            },
            { type: "h3", text: "午後対策" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**午後 I**: 90 分で 3 問中 2 問選択。SQL 記述 ・ 設計の短文回答",
                "**午後 II**: 120 分で 2 問中 1 問選択。長文事例 + ER 図 ・ 関係スキーマ作成 + 論述",
                "**事例問題の構造**: 業務記述 → 質問群。**業務記述を読み込む時間** を確保",
                "**ER 図 ・ スキーマは下書きを書く**: 答案用紙に直書きは事故のもと",
                "**過去問は 2 周以上**: 同じ問題を繰り返すと型が身につく",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "合格後のキャリア",
          blocks: [
            {
              type: "p",
              text: "DB スペシャリストは **国家試験のレベル 4** で公的認知度が極めて高く、**DBA / データエンジニア / データアーキテクト** のシニアポジションへの強いシグナル。**金融 ・ 公官庁 ・ 大手 SI** で評価が特に高く、転職市場でも『DB スペシャリスト持ち』はスクリーニングで突出します。",
            },
            {
              type: "practical",
              title: "次の挑戦",
              body: "DB の延長線で **AWS Database Specialty / Google Cloud Professional Data Engineer / Snowflake / Databricks 認定** などのクラウド DB 認定があります。または同じ IPA 高度試験で **ITストラテジスト ・ システムアーキテクト** に進むキャリアパスも王道です。本サイトの[DS エキスパート](/certs/ds-expert) ・ [Python データ分析](/certs/python-data)で AI / 分析側の補強もおすすめです。",
            },
          ],
        },
      ],
    },
  ],
};
