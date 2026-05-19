import type { Question } from "@/types/content";

export const itPassportQuestions: Question[] = [
  {
    id: "ip-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "ITパスポート試験(iパス)が分類される IPA のレベルとして最も適切なものを選びなさい。",
    choices: [
      "レベル 1(入門)",
      "レベル 2(基本情報技術者)",
      "レベル 3(応用情報技術者)",
      "レベル 4(高度試験)",
    ],
    correctIndex: 0,
    explanation:
      "ITパスポートは IPA の **レベル 1**(入門)。すべての社会人 ・ 学生が想定対象で、基本情報(レベル 2)・ 応用情報(レベル 3)の前段に位置する。",
  },
  {
    id: "ip-q2",
    category: "合格基準",
    difficulty: 2,
    question:
      "ITパスポート試験の合格基準として最も適切なものを選びなさい。",
    choices: [
      "総合 600 点以上のみ",
      "総合 600 点以上、かつ各分野評価点 300 点以上",
      "全分野 700 点以上",
      "総合 800 点以上のみ",
    ],
    correctIndex: 1,
    explanation:
      "iパスは **総合 600 / 1000 点 + 各分野評価点 300 点以上** の **足切り** あり。3 分野(ストラテジ ・ マネジメント ・ テクノロジ)バランスよく学習する必要。",
  },
  {
    id: "ip-q3",
    category: "数値表現",
    difficulty: 1,
    question:
      "1 GB(ギガバイト)が 1 KB(キロバイト)の何倍に相当するか、最も適切なものを選びなさい。",
    choices: [
      "1,000 倍",
      "1,024 倍",
      "1,048,576 倍",
      "1,073,741,824 倍",
    ],
    correctIndex: 2,
    explanation:
      "**1 GB = 1024 MB = 1024 × 1024 KB ≒ 1,048,576 倍**。容量単位は 1024 倍ずつ(KB → MB → GB → TB)。",
  },
  {
    id: "ip-q4",
    category: "ハードウェア",
    difficulty: 2,
    question:
      "コンピュータの **主記憶装置(メインメモリ)** の特性として最も適切なものを選びなさい。",
    choices: [
      "電源を切ってもデータが残る不揮発性メモリ",
      "電源を切るとデータが消える揮発性メモリ",
      "CPU 内部のレジスタと同じもの",
      "ハードディスクの一部",
    ],
    correctIndex: 1,
    explanation:
      "**主記憶(RAM)は揮発性** で電源を切るとデータが消える。一方 **HDD / SSD** は不揮発性の補助記憶装置。",
  },
  {
    id: "ip-q5",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "ドメイン名から IP アドレスを解決するプロトコルとして最も適切なものを選びなさい。",
    choices: ["DNS", "DHCP", "HTTP", "SMTP"],
    correctIndex: 0,
    explanation:
      "**DNS(Domain Name System)** がドメイン名 → IP アドレス変換を担当。DHCP は動的 IP 割当、HTTP は Web 通信、SMTP はメール送信。",
  },
  {
    id: "ip-q6",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "Web サイトとブラウザ間の通信を **TLS で暗号化** するプロトコルとして最も適切なものを選びなさい。",
    choices: ["HTTP", "HTTPS", "FTP", "Telnet"],
    correctIndex: 1,
    explanation:
      "**HTTPS** は HTTP + TLS で暗号化された Web 通信。URL は `https://` で始まり、443 ポートを使用。",
  },
  {
    id: "ip-q7",
    category: "5G",
    difficulty: 2,
    question:
      "5G の 3 つの主要特性に **含まれない** ものを選びなさい。",
    choices: [
      "高速大容量(eMBB)",
      "超低遅延(URLLC)",
      "多数同時接続(mMTC)",
      "ストレージ大容量化",
    ],
    correctIndex: 3,
    explanation:
      "5G の 3 特性は **eMBB / URLLC / mMTC**。ストレージ容量は通信規格とは無関係。",
  },
  {
    id: "ip-q8",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "情報セキュリティの 3 要素(CIA トライアド)に **含まれない** ものを選びなさい。",
    choices: [
      "機密性(Confidentiality)",
      "完全性(Integrity)",
      "可用性(Availability)",
      "拡張性(Scalability)",
    ],
    correctIndex: 3,
    explanation:
      "**CIA = 機密性 / 完全性 / 可用性**。拡張性は性能 ・ 設計の指標で CIA には含まれない。",
  },
  {
    id: "ip-q9",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "感染した PC のデータを暗号化し、復号と引き換えに金銭を要求するマルウェアの名称として最も適切なものを選びなさい。",
    choices: [
      "ワーム",
      "トロイの木馬",
      "ランサムウェア",
      "スパイウェア",
    ],
    correctIndex: 2,
    explanation:
      "**ランサムウェア**(身代金要求マルウェア)はファイルを暗号化して復号料を要求。バックアップ + ネットワーク分離が代表的対策。",
  },
  {
    id: "ip-q10",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "認証で『**知っているもの ・ 持っているもの ・ 自分自身のもの**』のうち 2 つ以上を組み合わせる方式の名称として最も適切なものを選びなさい。",
    choices: [
      "シングルサインオン(SSO)",
      "多要素認証(MFA)",
      "ID/パスワード認証",
      "ICカード認証",
    ],
    correctIndex: 1,
    explanation:
      "**MFA(Multi-Factor Authentication)** は知識(パスワード)+ 所有(トークン)+ 生体 のうち 2 つ以上を組合わせる方式。SSO は別概念(複数システムを 1 度のログインで使う)。",
  },
  {
    id: "ip-q11",
    category: "PM",
    difficulty: 2,
    question:
      "プロジェクトのアローダイアグラムで **最長経路** を表し、プロジェクト所要時間を決定する経路の名称として最も適切なものを選びなさい。",
    choices: [
      "クリティカルパス",
      "WBS",
      "ガントチャート",
      "PERT",
    ],
    correctIndex: 0,
    explanation:
      "**クリティカルパス** はプロジェクト所要時間を決める最長経路。この経路上の作業の遅れがそのままプロジェクト全体の遅延に直結する。",
  },
  {
    id: "ip-q12",
    category: "サービス",
    difficulty: 2,
    question:
      "サービスの提供レベルを利用者と提供者で合意した文書の名称として最も適切なものを選びなさい。",
    choices: [
      "RFP(提案依頼書)",
      "SLA(サービスレベル合意)",
      "WBS(作業分解構成)",
      "SOW(作業範囲記述書)",
    ],
    correctIndex: 1,
    explanation:
      "**SLA(Service Level Agreement)** はサービス提供レベル(可用性 ・ 応答時間など)を提供者と利用者で合意する文書。",
  },
  {
    id: "ip-q13",
    category: "経営戦略",
    difficulty: 2,
    question:
      "企業の **強み(S)・ 弱み(W)・ 機会(O)・ 脅威(T)** を分析するフレームワークとして最も適切なものを選びなさい。",
    choices: [
      "SWOT 分析",
      "PEST 分析",
      "5 forces",
      "4P",
    ],
    correctIndex: 0,
    explanation:
      "**SWOT** は内部要因(S/W)+ 外部要因(O/T)を 2 軸 4 マトリクスで分析。PEST はマクロ環境、5 forces は業界構造、4P はマーケティング。",
  },
  {
    id: "ip-q14",
    category: "マーケティング",
    difficulty: 2,
    question:
      "マーケティングの **4P** に **含まれない** ものを選びなさい。",
    choices: [
      "Product(製品)",
      "Price(価格)",
      "Place(流通)",
      "People(人材)",
    ],
    correctIndex: 3,
    explanation:
      "**4P = Product / Price / Place / Promotion**。People は 7P(7 つの P)に拡張されたとき含まれる。",
  },
  {
    id: "ip-q15",
    category: "財務",
    difficulty: 2,
    question:
      "**貸借対照表(BS)** の基本式として最も適切なものを選びなさい。",
    choices: [
      "資産 = 負債 + 純資産",
      "収益 - 費用 = 利益",
      "営業利益 = 売上 - 売上原価",
      "ROI = 利益 / 投資額",
    ],
    correctIndex: 0,
    explanation:
      "**貸借対照表(BS)= 資産 = 負債 + 純資産**(左右が一致)。損益計算書(PL)は『収益 - 費用 = 利益』。",
  },
  {
    id: "ip-q16",
    category: "法務",
    difficulty: 2,
    question:
      "プログラムの **ソースコードの表現** を保護する法律として最も適切なものを選びなさい。",
    choices: [
      "特許法",
      "著作権法",
      "実用新案法",
      "意匠法",
    ],
    correctIndex: 1,
    explanation:
      "プログラムは **著作権法** で保護される。特許はアイデア ・ 発明を保護、意匠は工業デザイン、実用新案は小発明。",
  },
  {
    id: "ip-q17",
    category: "開発",
    difficulty: 2,
    question:
      "短期間のスプリントを繰返してソフトウェアを段階的に提供する開発手法として最も適切なものを選びなさい。",
    choices: [
      "ウォーターフォール",
      "スクラム(アジャイル)",
      "ビッグバン開発",
      "パッケージ開発",
    ],
    correctIndex: 1,
    explanation:
      "**スクラム** はアジャイルの代表的フレームワーク。1 〜 4 週間のスプリントを繰り返し、動くソフトウェアを継続的に提供する。",
  },
  {
    id: "ip-q18",
    category: "AI",
    difficulty: 2,
    question:
      "AI ・ 機械学習 ・ ディープラーニング ・ 生成 AI の包含関係として最も適切なものを選びなさい。",
    choices: [
      "AI ⊂ 機械学習 ⊂ ディープラーニング ⊂ 生成 AI",
      "AI ⊃ 機械学習 ⊃ ディープラーニング ⊃ 生成 AI",
      "全て同じ",
      "生成 AI が最も広い概念",
    ],
    correctIndex: 1,
    explanation:
      "**AI ⊃ 機械学習 ⊃ ディープラーニング ⊃ 生成 AI**。AI が最も広く、生成 AI は DL を基礎に新しいコンテンツを作る AI のサブセット。",
  },
  {
    id: "ip-q19",
    category: "DX",
    difficulty: 2,
    question:
      "経済産業省が定義する DX(デジタルトランスフォーメーション)の 3 段階の順序として最も適切なものを選びなさい。",
    choices: [
      "デジタイゼーション → デジタライゼーション → DX",
      "DX → デジタイゼーション → デジタライゼーション",
      "AI → IoT → DX",
      "PoC → MVP → 本番",
    ],
    correctIndex: 0,
    explanation:
      "**デジタイゼーション(紙→デジタル化)→ デジタライゼーション(プロセスのデジタル化)→ DX(ビジネスモデル変革)** の 3 段階が経産省の定義。",
  },
  {
    id: "ip-q20",
    category: "データ活用",
    difficulty: 2,
    question:
      "ビッグデータの **3V** に **含まれない** ものを選びなさい。",
    choices: [
      "Volume(量)",
      "Variety(多様性)",
      "Velocity(速度)",
      "Visibility(可視性)",
    ],
    correctIndex: 3,
    explanation:
      "ビッグデータの **3V = Volume / Variety / Velocity**。Veracity(正確性)を加えた 4V、Value(価値)を加えた 5V もある。",
  },
  {
    id: "ip-q21",
    category: "経営戦略",
    difficulty: 2,
    question:
      "**SWOT 分析** の 4 要素として正しいものを選びなさい。",
    choices: [
      "Strengths / Weaknesses / Opportunities / Threats",
      "Sales / Workflow / Outcomes / Targets",
      "Strategy / Workforce / Operations / Tools",
      "Speed / Workflow / Output / Time",
    ],
    correctIndex: 0,
    explanation:
      "**SWOT = 強み / 弱み(内部)+ 機会 / 脅威(外部)** の 4 象限。内外と正負の組合せで自社環境を整理する経営戦略フレームワーク。",
  },
  {
    id: "ip-q22",
    category: "マネジメント",
    difficulty: 2,
    question:
      "**アジャイル開発** の代表的な手法として **誤っているもの** を選びなさい。",
    choices: ["スクラム", "XP(Extreme Programming)", "カンバン", "ウォーターフォール"],
    correctIndex: 3,
    explanation:
      "**ウォーターフォールは伝統的な逐次型開発** でアジャイルではない。アジャイルは **スクラム / XP / カンバン / Lean / Crystal** などの軽量反復型手法群。",
  },
  {
    id: "ip-q23",
    category: "AI",
    difficulty: 2,
    question:
      "AI の **教師あり学習** に該当するものを選びなさい。",
    choices: [
      "ラベル付きデータから入力 → 出力の関係を学習する",
      "ラベルなしデータから自動でグループ化する",
      "報酬を最大化する行動を学習する",
      "ランダムにデータを選ぶ",
    ],
    correctIndex: 0,
    explanation:
      "**教師あり学習 = ラベル付きデータで学習**(分類 / 回帰)。教師なし学習 = ラベルなし(クラスタリング / 次元削減)、強化学習 = 報酬最大化。",
  },
  {
    id: "ip-q24",
    category: "AI",
    difficulty: 2,
    question:
      "**生成 AI(Generative AI)** が **直接生成できない** ものを選びなさい。",
    choices: ["テキスト", "画像", "音声", "実物の商品"],
    correctIndex: 3,
    explanation:
      "生成 AI は **デジタルコンテンツ(テキスト / 画像 / 音声 / 動画 / コード / 3D)** を生成。**実物の商品は 3D プリンタや工場が必要**。AI は『設計図』までは作れる。",
  },
  {
    id: "ip-q25",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "**フィッシング詐欺** の典型的な手口を選びなさい。",
    choices: [
      "本物そっくりのメール / サイトで認証情報を盗む",
      "DDoS 攻撃でサーバを止める",
      "Web カメラを物理的に盗む",
      "プリンタの紙詰まりを起こす",
    ],
    correctIndex: 0,
    explanation:
      "**フィッシング** は **正規企業を装ったメール / SMS / Web サイト** で ID / パスワード / カード番号を入力させる詐欺。多要素認証 ・ パスワードマネージャ ・ URL 確認が対策。",
  },
  {
    id: "ip-q26",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "**Wi-Fi(無線 LAN)の暗号化方式** で最も新しく安全な規格を選びなさい。",
    choices: ["WEP", "WPA", "WPA2", "WPA3"],
    correctIndex: 3,
    explanation:
      "**WPA3(2018〜)** が最新 ・ 最も安全。WEP / WPA / WPA2 と進化。**WEP は既に脆弱で実用不可**、WPA2 は WPS 脆弱性 ・ KRACK 攻撃あり、WPA3 推奨。",
  },
  {
    id: "ip-q27",
    category: "DB",
    difficulty: 2,
    question:
      "リレーショナル DB の **正規化の目的** として最も適切なものを選びなさい。",
    choices: [
      "データの重複を減らし更新異常を防ぐ",
      "テーブル数を最小化する",
      "SQL を高速化する",
      "ストレージを増やす",
    ],
    correctIndex: 0,
    explanation:
      "**正規化はデータ重複と更新異常を防ぐ**(第 1 → 第 2 → 第 3 → BCNF と段階化)。**ただし JOIN が増えるためパフォーマンス的には逆に遅くなることも**(DWH では非正規化が定石)。",
  },
  {
    id: "ip-q28",
    category: "クラウド",
    difficulty: 2,
    question:
      "**SaaS の代表例** として最も適切なものを選びなさい。",
    choices: [
      "Microsoft 365 / Salesforce / Google Workspace",
      "AWS EC2",
      "Azure Virtual Machines",
      "Linux Kernel",
    ],
    correctIndex: 0,
    explanation:
      "**SaaS = アプリケーションそのものをクラウドで利用**(Office / CRM / Slack / Salesforce 等)。EC2 / Azure VM は **IaaS**、Linux Kernel は OS。",
  },
  {
    id: "ip-q29",
    category: "法令",
    difficulty: 3,
    question:
      "**個人情報保護法** で『要配慮個人情報』に該当するものを選びなさい。",
    choices: ["人種 ・ 信条 ・ 病歴 ・ 犯罪歴", "氏名", "電話番号", "メールアドレス"],
    correctIndex: 0,
    explanation:
      "**要配慮個人情報 = 不当な差別 ・ 偏見が生じる恐れがある情報**(人種 / 信条 / 病歴 / 犯罪歴 / 障害 / 遺伝子等)。原則として **取得には本人の同意が必要**。氏名等は通常の個人情報。",
  },
  {
    id: "ip-q30",
    category: "DX",
    difficulty: 2,
    question:
      "**RPA(Robotic Process Automation)** の典型的な用途を選びなさい。",
    choices: [
      "定型的なパソコン業務(データ入力 ・ 帳票作成)の自動化",
      "工場の物理ロボットアームの制御",
      "ペッパー君のような対人サービス",
      "自動運転の制御",
    ],
    correctIndex: 0,
    explanation:
      "**RPA はソフトウェアロボット**(UiPath / Power Automate / BizRobo!)が **定型 PC 業務を自動化**。物理ロボットや AI とは異なる位置付け。経理 / 人事 / 営業事務で多用。",
  },
  { id: "ip-q31", category: "経営戦略", difficulty: 2, question: "**3C 分析** の 3 要素として正しいものを選びなさい。", choices: ["Customer / Competitor / Company", "Cost / Capacity / Cloud", "Code / Compile / Compute", "Content / Channel / Conversion"], correctIndex: 0, explanation: "**3C 分析**: 顧客 / 競合 / 自社。**4P / SWOT / PEST と並ぶマーケティング基本フレームワーク**。" },
  { id: "ip-q32", category: "ファイナンス", difficulty: 2, question: "**損益分岐点(BEP)** の意味として最も適切なものを選びなさい。", choices: ["売上 = 固定費 + 変動費 となる売上水準", "粗利率最大点", "Cash Flow", "ROI"], correctIndex: 0, explanation: "**損益分岐点 = 固定費 / (1 - 変動費率)**。これを超えると利益、下回ると赤字。" },
  { id: "ip-q33", category: "ストラテジ", difficulty: 2, question: "**KPI** と **KGI** の関係として最も適切なものを選びなさい。", choices: ["KGI(最終目標)→ KPI(中間プロセス指標)で達成度測定", "両者同義", "KPI が最終目標", "KGI は数値化不可"], correctIndex: 0, explanation: "**KGI = Key Goal Indicator(最終目標)** / **KPI = Key Performance Indicator(プロセス指標)**。KGI に対し因果のある KPI を設定。" },
  { id: "ip-q34", category: "マネジメント", difficulty: 2, question: "**ガントチャート** の役割として最も適切なものを選びなさい。", choices: ["タスクのスケジュール ・ 期間 ・ 依存関係を可視化", "アルゴリズムを表す", "DB 設計", "色変更"], correctIndex: 0, explanation: "**ガントチャート**: 横軸=時間、縦軸=タスクの棒グラフ。PM 必携。Microsoft Project / Asana / Backlog で標準。" },
  { id: "ip-q35", category: "PM", difficulty: 2, question: "**WBS(Work Breakdown Structure)** の用途として最も適切なものを選びなさい。", choices: ["プロジェクト作業を階層分解 ・ 可視化", "従業員評価", "予算自動配分", "顧客満足度測定"], correctIndex: 0, explanation: "**WBS**: 大 → 中 → 小タスクへ階層分解。見積もり ・ 工数管理 ・ 進捗管理の基盤。PMBOK スコープ管理。" },
  { id: "ip-q36", category: "アルゴリズム", difficulty: 2, question: "**バブルソート** の計算量として最も適切なものを選びなさい。", choices: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"], correctIndex: 0, explanation: "**バブルソートは O(n²)**(隣接交換 ・ n²/2 回比較)。クイック / マージ / ヒープソートは平均 O(n log n)。" },
  { id: "ip-q37", category: "ネットワーク", difficulty: 2, question: "**DNS** の役割として最も適切なものを選びなさい。", choices: ["ドメイン名 → IP アドレス変換", "暗号化", "ファイル圧縮", "DB 管理"], correctIndex: 0, explanation: "**DNS(Domain Name System)**: 階層型分散名前解決。www.example.com → IP。AレコードでIPv4、AAAAでIPv6、MXでメール、CNAMEで別名。" },
  { id: "ip-q38", category: "ネットワーク", difficulty: 2, question: "**HTTPS** が **HTTP** より優れる点として最も適切なものを選びなさい。", choices: ["TLS で通信暗号化 + サーバ証明書で真正性確認", "高速", "コスト安", "DNS 不要"], correctIndex: 0, explanation: "**HTTPS = HTTP over TLS**: 暗号化(盗聴防止)+ 認証(なりすまし防止)+ 改ざん検知。**Let's Encrypt** で無料証明書取得可能。" },
  { id: "ip-q39", category: "DB", difficulty: 2, question: "**SQL の SELECT 文** で **集計関数を使ってグループ化** するキーワードを選びなさい。", choices: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"], correctIndex: 0, explanation: "**GROUP BY**: 指定列でグループ化 → COUNT / SUM / AVG / MIN / MAX 等を集計。**HAVING** で集計後フィルタ。" },
  { id: "ip-q40", category: "セキュリティ", difficulty: 2, question: "**SQL インジェクション** の対策として最も適切なものを選びなさい。", choices: ["プレースホルダ(プリペアドステートメント)使用", "DB を読み取り専用化", "全クエリを暗号化", "ユーザを単一にする"], correctIndex: 0, explanation: "**SQL インジェクション対策**: プレースホルダで SQL とデータを構造的に分離。エスケープのみは取りこぼし発生。" },
  { id: "ip-q41", category: "セキュリティ", difficulty: 3, question: "**ランサムウェア** 対策として **誤っているもの** を選びなさい。", choices: ["定期バックアップ + オフライン保管", "OS / ソフトのパッチ適用", "不審メール添付ファイル開かない", "身代金を即支払う"], correctIndex: 3, explanation: "**身代金支払いは推奨されない**(復号鍵が来ない / 再攻撃の温床)。バックアップ + Air-gap + 教育 + EDR が定石。" },
  { id: "ip-q42", category: "暗号", difficulty: 2, question: "**共通鍵暗号** の代表アルゴリズムとして最も適切なものを選びなさい。", choices: ["AES", "RSA", "ECDSA", "SHA-256"], correctIndex: 0, explanation: "**共通鍵 = AES / 3DES / ChaCha20**。**公開鍵 = RSA / ECDSA / Ed25519**。**ハッシュ = SHA-256 / SHA-3**(暗号ではないが密接)。" },
  { id: "ip-q43", category: "コンピュータ", difficulty: 2, question: "**CPU の動作周波数(クロック周波数)** が 3 GHz の意味として最も適切なものを選びなさい。", choices: ["1 秒に 30 億回(3 × 10⁹)のクロック信号", "1 秒に 3 億回", "1 秒に 3 万回", "1 秒に 3 回"], correctIndex: 0, explanation: "**GHz = ギガヘルツ = 10⁹ Hz**。3 GHz は秒間 30 億回のクロック。**IPC(Instructions Per Cycle)も性能に影響** するため、クロック周波数だけで性能比較は不適。" },
  { id: "ip-q44", category: "OS", difficulty: 2, question: "**OS** の主な役割として **誤っているもの** を選びなさい。", choices: ["プロセス管理", "メモリ管理", "ファイルシステム管理", "Excel 自動入力"], correctIndex: 3, explanation: "**OS 機能**: プロセス / メモリ / ファイル / デバイス / セキュリティ管理 + ユーザインターフェース。Excel 自動入力は **アプリ層の RPA**。" },
  { id: "ip-q45", category: "プログラミング", difficulty: 2, question: "**変数のスコープ** で **グローバル変数** の特徴として最も適切なものを選びなさい。", choices: ["プログラム全体からアクセス可、副作用リスクあり", "関数内のみ", "クラス内のみ", "存在しない"], correctIndex: 0, explanation: "**グローバル変数**: 全関数からアクセス可。**副作用 ・ デバッグ困難 ・ テスト困難** のリスク。**ローカル変数 + 引数 + 戻り値**(関数型)が現代的。" },
  { id: "ip-q46", category: "Web", difficulty: 2, question: "**Cookie** の主用途として最も適切なものを選びなさい。", choices: ["クライアント側にセッション情報 ・ 設定を保持", "サーバの DB", "暗号化", "ブラウザ高速化"], correctIndex: 0, explanation: "**Cookie**: HTTP リクエストごとに自動送信される小データ。**ログインセッション ・ ユーザ設定 ・ トラッキング** に使う。HttpOnly / Secure / SameSite で安全化。" },
  { id: "ip-q47", category: "IoT", difficulty: 2, question: "**IoT デバイス** の **エッジコンピューティング** の利点として最も適切なものを選びなさい。", choices: ["低レイテンシ + 帯域節約 + プライバシー保護", "GPU 不要", "クラウド禁止", "コスト最大"], correctIndex: 0, explanation: "**Edge Computing**: クラウドに送らずデバイス近傍で処理。**自動運転 ・ 工場制御 ・ AR** などレイテンシ要件で。Jetson / Coral / Raspberry Pi が代表。" },
  { id: "ip-q48", category: "AI 倫理", difficulty: 3, question: "**AI 倫理** の代表的な懸念として **誤っているもの** を選びなさい。", choices: ["プライバシー", "公平性 ・ バイアス", "説明可能性", "GPU 不足"], correctIndex: 3, explanation: "**AI 倫理懸念**: プライバシー / 公平性 / 説明可能性 / 安全性 / 雇用影響 / 著作権 / 偽情報。GPU 不足は技術 ・ 経済問題で倫理ではない。" },
  { id: "ip-q49", category: "DX", difficulty: 2, question: "**2025 年の崖** の説明として最も適切なものを選びなさい。", choices: ["DX 推進が進まないと年間最大 12 兆円の経済損失リスク(経産省 DX レポート)", "AI が反乱する年", "クラウド料金が高騰する年", "5G 完成年"], correctIndex: 0, explanation: "**2025 年の崖**(経産省 DX レポート 2018): レガシーシステム維持と DX 投資不足が続くと年間最大 12 兆円損失の可能性。" },
  { id: "ip-q50", category: "次のステップ", difficulty: 1, question: "ITパスポート合格後の **基礎 IT 系上位資格** として最も適切なものを選びなさい。", choices: ["基本情報技術者試験(FE)", "応用情報技術者", "ITストラテジスト", "再受験"], correctIndex: 0, explanation: "**ITパスポート(L1)→ 基本情報(L2)→ 応用情報(L3)→ 高度試験(L4)** という IPA キャリアパス。学生 / 新人は FE が次の目標。" },
];
