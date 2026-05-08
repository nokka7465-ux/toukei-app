import type { Textbook } from "@/types/content";

export const basicInfoTextbook: Textbook = {
  levelSlug: "basic-info",
  title: "基本情報技術者試験 教科書(AI ・ データ重点)",
  intro:
    "**基本情報技術者試験(FE)** は **情報処理推進機構(IPA)** が主催する国家試験(レベル 2)で、IT エンジニアの **入門資格** として最も知名度が高い試験です。**通年実施の CBT** で受けやすく、年間 10 万人超が受験。応用情報技術者試験(AP)の前段として、また、新卒・中途のエンジニア就職時に評価される基礎技能の証明として位置付けられます。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "基本情報技術者試験 ─ 全体像",
      overview:
        "試験形式・出題範囲・科目 A/B の戦略を整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**基本情報技術者試験(FE)** は IPA の情報処理技術者試験における **レベル 2**(入門〜実務初級)。**ITパスポート(レベル 1)→ 基本情報(レベル 2)→ 応用情報(レベル 3)→ 高度試験(レベル 4)** という階段状の体系の 2 段目に位置し、年間受験者数は **10 万人を超える** 大規模な国家試験です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: 情報処理推進機構(IPA)",
                "**実施**: 通年(CBT 方式、随時)",
                "**形式**: 科目 A 60 問(90 分) + 科目 B 20 問(100 分)",
                "**合格基準**: 科目 A・B ともに 600 / 1000 点以上",
                "**合格率(参考)**: 約 25 〜 35%(年度により変動)",
                "**受験料**: 7,500 円(税込)",
              ],
            },
            { type: "h3", text: "2023 年改訂のポイント" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**通年 CBT 化**: いつでも受験可能に",
                "**科目 A**: 旧『午前』。テクノロジ系 / マネジメント系 / ストラテジ系の知識問題",
                "**科目 B**: 旧『午後』。**アルゴリズム + 情報セキュリティが重点化**",
                "**疑似言語**: C 系から **Python 風の構文** に変更",
                "**問題数削減**: 旧 80 問 → 60 問(科目 A)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "学習プランと推奨教材",
          blocks: [
            { type: "h3", text: "150 〜 250 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1 〜 3**: 科目 A の基礎(コンピュータ / ネットワーク / セキュリティ)",
                "**Week 4 〜 6**: 科目 A 続き(DB / ソフトウェア工学 / プロジェクトマネジメント / 経営戦略)",
                "**Week 7 〜 9**: 科目 B のアルゴリズム(疑似言語 + データ構造)",
                "**Week 10 〜 11**: 科目 B の情報セキュリティ(必須)",
                "**Week 12**: 過去問演習 + 模擬試験",
              ],
            },
            {
              type: "intuition",
              title: "FE 合格の最大の壁は『科目 B のアルゴリズム』",
              body: "科目 A は知識問題で過去問演習で対応可能。一方、**科目 B のアルゴリズム問題は読解力 + 思考力** が必要で、ここで詰まる受験者が多い。**疑似言語に慣れる + トレース(机上での実行追跡)を習慣化** することが合格の鍵です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "コンピュータシステムの基礎",
      overview:
        "プロセッサ ・ メモリ階層 ・ 数値表現 ・ 論理演算を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "数値表現と論理演算",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**2 進数 / 16 進数 / 10 進数の相互変換**",
                "**負数の表現**: 2 の補数(主流)",
                "**浮動小数点数**: IEEE 754(単精度 32 bit / 倍精度 64 bit)",
                "**論理演算**: AND / OR / NOT / XOR / NAND / NOR",
                "**論理回路**: 組合せ回路(加算器 ・ デコーダ)/ 順序回路(フリップフロップ)",
                "**ド・モルガンの法則**: $\\overline{A \\land B} = \\overline{A} \\lor \\overline{B}$",
              ],
            },
            {
              type: "code",
              title: "2 進数 ・ 16 進数の相互変換",
              python:
                "# 2 進数 → 10 進数\nprint(int('1101', 2))  # 13\n\n# 10 進数 → 2 進数 ・ 16 進数\nprint(bin(13))   # '0b1101'\nprint(hex(255))  # '0xff'\n\n# ビット演算\nprint(0b1010 & 0b1100)  # AND → 0b1000 = 8\nprint(0b1010 | 0b1100)  # OR  → 0b1110 = 14\nprint(0b1010 ^ 0b1100)  # XOR → 0b0110 = 6",
              runnable: true,
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "プロセッサとメモリ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**CPU**: 演算装置 + 制御装置 + レジスタ + キャッシュ",
                "**パイプライン**: 命令を段階分割して並列処理",
                "**スーパースカラ ・ マルチコア**",
                "**メモリ階層**: レジスタ > L1/L2/L3 キャッシュ > メインメモリ > SSD > HDD",
                "**ヒット率**: キャッシュヒット率と平均アクセス時間の計算",
                "**仮想記憶 / ページング / ページフォルト**",
                "**RAID 0/1/5/6/10**: ストライピング ・ ミラー ・ パリティ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "アルゴリズムとデータ構造(科目 B 重点)",
      overview:
        "疑似言語の読み方、基本データ構造、ソート ・ 探索を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "疑似言語の読み方",
          blocks: [
            {
              type: "p",
              text: "FE 2023 年改訂以降は **Python 風の疑似言語** が使われます。代入は `←`、繰返しは `for / while`、条件分岐は `if / elseif / else`。**変数の型を厳密に書かない** などの違いはあるものの、Python に慣れている人は読みやすい設計です。",
            },
            {
              type: "code",
              title: "疑似言語イメージ(Python で実装した同等処理)",
              python:
                "# 配列 a の最大値を求める\ndef find_max(a):\n    max_val = a[0]\n    for i in range(1, len(a)):\n        if a[i] > max_val:\n            max_val = a[i]\n    return max_val\n\nprint(find_max([3, 1, 4, 1, 5, 9, 2, 6]))  # 9",
              runnable: true,
            },
            {
              type: "intuition",
              title: "トレース表を作る習慣",
              body: "アルゴリズム問題は **トレース(机上実行)** で答えに辿り着くケースが多い。変数の値を **i / a[i] / max_val** のように表で追うと、ミスが激減します。試験中は問題用紙の余白に表を書くのが定番です。",
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "基本データ構造",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**配列(Array)**: 連続メモリ、インデックスアクセス $O(1)$",
                "**リスト(連結リスト)**: ノードのチェーン、挿入削除 $O(1)$",
                "**スタック(Stack)**: LIFO。push / pop",
                "**キュー(Queue)**: FIFO。enqueue / dequeue",
                "**ハッシュ表**: 平均 $O(1)$、衝突対処(連鎖法 / オープンアドレス)",
                "**木**: 二分木 ・ 二分探索木 ・ 平衡木 ・ ヒープ",
                "**グラフ**: 隣接行列 / 隣接リスト",
              ],
            },
            {
              type: "code",
              title: "スタックとキューの基本",
              python:
                "# スタック(LIFO)\nstack = []\nstack.append(1); stack.append(2); stack.append(3)\nprint(stack.pop())  # 3\nprint(stack.pop())  # 2\n\n# キュー(FIFO)\nfrom collections import deque\nq = deque()\nq.append(1); q.append(2); q.append(3)\nprint(q.popleft())  # 1\nprint(q.popleft())  # 2",
              runnable: true,
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "ソートと探索",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**バブルソート**: $O(n^2)$、安定",
                "**選択ソート**: $O(n^2)$、不安定",
                "**挿入ソート**: $O(n^2)$、安定、ほぼソート済データに強い",
                "**マージソート**: $O(n \\log n)$、安定、外部メモリ要",
                "**クイックソート**: 平均 $O(n \\log n)$、不安定",
                "**ヒープソート**: $O(n \\log n)$、その場ソート",
                "**線形探索**: $O(n)$",
                "**二分探索**: $O(\\log n)$、ソート済前提",
              ],
            },
            {
              type: "intuition",
              title: "計算量と n の関係",
              body: "$n=10^4$ なら $O(n^2)$ でも 1 秒以内($10^8$ 演算)、$n=10^6$ では $O(n \\log n)$ が必要、$n=10^9$ なら $O(n)$ 以下が必須。**入力サイズ → 計算量の上限 → アルゴリズム選択** の逆算が試験 ・ 実務の共通パターンです。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "情報セキュリティ(科目 B 必須)",
      overview:
        "暗号 ・ 認証 ・ 攻撃と対策 ・ リスクマネジメントを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "暗号と認証の基礎",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**共通鍵暗号(対称鍵)**: AES が標準。高速だが鍵配送が課題",
                "**公開鍵暗号**: RSA / ECC。鍵配送解決、低速",
                "**ハイブリッド方式**: 公開鍵で共通鍵交換 → 共通鍵で本文暗号化(TLS の標準)",
                "**ハッシュ**: SHA-256 / SHA-3。一方向性 ・ 衝突困難性",
                "**デジタル署名**: 秘密鍵で署名、公開鍵で検証",
                "**PKI(公開鍵基盤)**: 認証局(CA)・ 証明書 ・ 失効管理",
              ],
            },
            { type: "h3", text: "認証 ・ 認可" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**3 要素認証**: 知識(パスワード)+ 所有(トークン)+ 生体",
                "**MFA / 2 段階認証**: 多要素",
                "**OAuth / OpenID Connect**: 認可 / 認証の標準",
                "**SSO**: シングルサインオン",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "代表的な攻撃と対策",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SQL インジェクション**: プレースホルダ + 入力値検証",
                "**XSS(クロスサイトスクリプティング)**: 出力エスケープ + CSP",
                "**CSRF**: トークン + SameSite Cookie",
                "**ディレクトリトラバーサル**: パス正規化",
                "**バッファオーバーフロー**: 安全な言語 / ASLR / DEP",
                "**標的型攻撃 / フィッシング**: 教育 + EDR",
                "**ランサムウェア**: バックアップ + ネットワーク分離",
                "**DDoS**: WAF + レートリミット + CDN",
                "**ゼロデイ攻撃**: パッチ管理 + 多層防御",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "情報セキュリティマネジメント",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**CIA トライアド**: 機密性 / 完全性 / 可用性",
                "**ISMS / ISO 27001**: 情報セキュリティマネジメント",
                "**リスクアセスメント**: 識別 → 分析 → 評価 → 対応",
                "**4 つのリスク対応**: 回避 ・ 低減 ・ 移転 ・ 受容",
                "**インシデント対応**: 検知 ・ 封じ込め ・ 根絶 ・ 復旧 ・ 教訓",
                "**ゼロトラスト**: 内部ネットワークも信用しない設計",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "ネットワーク",
      overview:
        "OSI 参照モデル ・ TCP/IP ・ プロトコル ・ ネットワーク機器を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "OSI 参照モデルと TCP/IP",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**OSI 7 層**: 物理 / データリンク / ネットワーク / トランスポート / セッション / プレゼンテーション / アプリケーション",
                "**TCP/IP 4 層**: ネットワーク I/F / インターネット(IP) / トランスポート(TCP/UDP) / アプリケーション(HTTP/DNS/SMTP)",
                "**TCP**: コネクション型、信頼性、3 ウェイハンドシェイク",
                "**UDP**: コネクションレス、低遅延、動画 / VoIP",
                "**IP アドレス**: IPv4(32 bit)・ IPv6(128 bit)",
                "**サブネットマスク / CIDR**: ネットワーク部とホスト部の分離",
                "**ポート番号**: 80(HTTP)・ 443(HTTPS)・ 22(SSH)・ 25(SMTP)",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "ネットワーク機器とプロトコル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**リピータ / ハブ**: 物理層、信号増幅 ・ 分配",
                "**ブリッジ / スイッチ**: データリンク層、MAC アドレスで転送",
                "**ルータ**: ネットワーク層、IP アドレスで経路選択",
                "**L7 ロードバランサ / リバースプロキシ**: アプリケーション層",
                "**DNS**: ドメイン名 → IP アドレス解決",
                "**DHCP**: 動的 IP 割当",
                "**NAT / NAPT**: プライベート IP とグローバル IP の変換",
                "**HTTP / HTTPS**: TLS 暗号化",
                "**WebSocket**: 双方向通信",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "データベース",
      overview:
        "RDB の基礎 ・ SQL ・ 正規化 ・ トランザクションを整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "RDB と SQL の基礎",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**主キー / 外部キー**: 行の識別 ・ 参照整合性",
                "**SELECT / FROM / WHERE / GROUP BY / HAVING / ORDER BY**",
                "**INNER / LEFT / RIGHT / FULL OUTER JOIN**",
                "**INSERT / UPDATE / DELETE**: データ操作",
                "**CREATE / ALTER / DROP**: データ定義(DDL)",
                "**GRANT / REVOKE**: 権限制御(DCL)",
                "**集約関数**: COUNT / SUM / AVG / MIN / MAX",
                "**サブクエリ ・ EXISTS / IN**",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "正規化とトランザクション",
          blocks: [
            { type: "h3", text: "正規化" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**1NF**: 繰返し項目の排除",
                "**2NF**: 1NF + 部分関数従属の排除",
                "**3NF**: 2NF + 推移関数従属の排除",
                "**BCNF**: 3NF をさらに厳格化",
              ],
            },
            { type: "h3", text: "トランザクション" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ACID 特性**: Atomicity / Consistency / Isolation / Durability",
                "**ロック**: 共有(S)/ 排他(X)・ 2 相ロック",
                "**デッドロック**: 検知 ・ 回避(タイムアウト ・ 順序付け)",
                "**分離レベル**: READ UNCOMMITTED / COMMITTED / REPEATABLE READ / SERIALIZABLE",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "ソフトウェア開発",
      overview:
        "開発プロセス ・ テスト ・ 設計手法を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "開発プロセスとテスト",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ウォーターフォール**: 上流 → 下流の段階的開発",
                "**反復 / インクリメンタル**: 小さく作って積み上げ",
                "**アジャイル / スクラム**: スプリント単位で価値を継続提供",
                "**DevOps / CI/CD**: 自動ビルド ・ テスト ・ デプロイ",
                "**テスト工程**: 単体 → 結合 → システム → 受入",
                "**ホワイトボックステスト**: 命令網羅 / 分岐網羅",
                "**ブラックボックステスト**: 同値分割 / 境界値分析",
                "**TDD**: テスト駆動開発",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "設計とプログラミング言語",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**OOP の 4 原則**: カプセル化 ・ 継承 ・ 多態性 ・ 抽象化",
                "**SOLID 原則**: 単一責任 ・ オープンクローズド ・ リスコフ ・ インタフェース分離 ・ 依存性逆転",
                "**MVC / MVVM / クリーンアーキテクチャ**",
                "**マイクロサービス / モノリス**",
                "**スクリプト言語**: Python / JavaScript / Ruby",
                "**コンパイル言語**: C / C++ / Java / Go / Rust",
                "**関数型言語**: Haskell / Lisp / OCaml",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "プロジェクトマネジメントとサービス",
      overview:
        "PM ・ サービスマネジメント ・ システム監査を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "プロジェクトマネジメント",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**PMBOK**: 5 プロセス群 + 10 知識エリア",
                "**WBS**: 作業の階層分解",
                "**ガントチャート / アローダイアグラム**: スケジュール可視化",
                "**クリティカルパス**: 最長経路 = プロジェクト期間",
                "**EVM**: PV / EV / AC で進捗評価",
                "**リスクマネジメント**: 識別 / 分析 / 対応 / 監視",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "サービスマネジメントと監査",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ITIL**: サービス戦略 ・ 設計 ・ 移行 ・ 運用 ・ 継続的改善",
                "**SLA / SLO / SLI**: サービスレベル",
                "**インシデント / 問題 / 変更管理**",
                "**システム監査**: 計画 ・ 予備 ・ 本調査 ・ 評価 ・ 報告",
                "**内部統制**: COBIT / IT ガバナンス / J-SOX",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "経営戦略と AI / データ",
      overview:
        "経営戦略 ・ マーケティング ・ AI 基礎を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "経営戦略 ・ マーケティング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SWOT 分析 / PEST 分析 / 5 forces**: 環境分析",
                "**バランススコアカード(BSC)**",
                "**ポーターの 3 つの基本戦略**: コストリーダーシップ / 差別化 / 集中",
                "**プロダクトポートフォリオ管理(PPM)**: 花形 / 金のなる木 / 問題児 / 負け犬",
                "**4P**: Product / Price / Place / Promotion",
                "**STP**: Segmentation / Targeting / Positioning",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "AI / データの基礎",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AI ⊃ ML ⊃ DL ⊃ 生成 AI**",
                "**3 つの学習方式**: 教師あり / なし / 強化学習",
                "**主要モデル**: 線形回帰 ・ 決定木 ・ ニューラルネット ・ CNN ・ Transformer",
                "**評価指標**: 適合率 / 再現率 / F1",
                "**データの 3V**: Volume / Variety / Velocity(ビッグデータ)",
                "**DX 3 段階**: デジタイゼーション → デジタライゼーション → DX",
              ],
            },
            {
              type: "p",
              text: "FE では AI / データ関連は **概念把握中心** で、計算問題は科目 A の混同行列程度。本サイトの[G 検定 教科書](/certs/g-test/textbook)・[AI とは](/about-ai)で補強できます。",
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
        "範囲別チェックリストと、試験当日の戦略をまとめます。",
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
                "**第 2 章**: 2 進数 ・ 浮動小数 ・ 論理演算 ・ メモリ階層 ・ RAID",
                "**第 3 章**: 疑似言語 ・ スタック ・ キュー ・ 木 ・ ソートと探索",
                "**第 4 章**: 暗号 ・ 認証 ・ 攻撃と対策 ・ ISMS",
                "**第 5 章**: OSI ・ TCP/IP ・ DNS ・ NAT ・ ポート番号",
                "**第 6 章**: 正規化 ・ JOIN ・ ACID ・ 分離レベル",
                "**第 7 章**: ウォーターフォール ・ アジャイル ・ テスト ・ OOP",
                "**第 8 章**: WBS ・ EVM ・ クリティカルパス ・ ITIL",
                "**第 9 章**: SWOT ・ 4P ・ AI 用語 ・ DX 3 段階",
              ],
            },
            { type: "h3", text: "科目 A の戦略" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**60 問 / 90 分** = 1 問 1.5 分。迷ったらスキップ",
                "**過去問 5 〜 10 年分を 2 周** が王道",
                "**IPA 公式アプリ** で隙間時間に演習",
                "**600 / 1000 点** で合格",
              ],
            },
            { type: "h3", text: "科目 B の戦略" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**20 問 / 100 分** = 1 問 5 分。アルゴリズムは時間配分が命",
                "**疑似言語のトレース表** を必ず書く",
                "**情報セキュリティは 4 問** 程度。シナリオ読解",
                "**残り 16 問はアルゴリズム + データ構造**",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "合格後のステップアップ",
          blocks: [
            {
              type: "p",
              text: "FE 合格 → **応用情報技術者(AP)** が王道。本サイトの[応用情報 教科書](/certs/applied-info/textbook)で次のステップ。AI / データに進むなら [G 検定](/certs/g-test) ・ [Python データ分析](/certs/python-data) ・ [DS 検定](/certs/ds-literacy)が並行候補です。",
            },
            {
              type: "practical",
              title: "FE のキャリア活用",
              body: "FE は **新卒 IT 採用 ・ 中途エンジニア転職** の最低ラインとして広く認知されています。SI 系 ・ 大手 SE ・ 公官庁 IT 部門で基礎技能の証明として機能。応用情報合格者でも『FE 持ち』を併記することで一貫性を示せます。",
            },
          ],
        },
      ],
    },
  ],
};
