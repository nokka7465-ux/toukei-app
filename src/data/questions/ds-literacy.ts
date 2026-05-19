import type { Question } from "@/types/content";

export const dsLiteracyQuestions: Question[] = [
  {
    id: "dsl-q1",
    category: "DS の 3 軸",
    difficulty: 1,
    question:
      "データサイエンティスト協会が定義する「データサイエンティストに必要な 3 つのスキル」として最も適切な組み合わせを選びなさい。",
    choices: [
      "プログラミング力 / 数学力 / 英語力",
      "データサイエンス力 / データエンジニアリング力 / ビジネス力",
      "Python 力 / SQL 力 / 統計力",
      "可視化 / 分析 / 報告",
    ],
    correctIndex: 1,
    explanation:
      "DS 協会のスキルセットは「データサイエンス力(統計・数学・ML)」「データエンジニアリング力(SQL・データ基盤)」「ビジネス力(課題設定・推進)」の 3 軸構成。",
  },
  {
    id: "dsl-q2",
    category: "機械学習",
    difficulty: 2,
    question:
      "二値分類問題の評価指標として、「実際に陽性なものをどれだけ捉えたか」を測るものとして最も適切なものを選びなさい。",
    choices: [
      "正解率(Accuracy)",
      "適合率(Precision)",
      "再現率(Recall)",
      "F1 値",
    ],
    correctIndex: 2,
    explanation:
      "**再現率(Recall)= TP / (TP + FN)**「陽性のうちどれだけ正しく陽性と判定できたか」。**適合率(Precision)= TP / (TP + FP)**「陽性と判定したうちどれだけ実際に陽性か」。両者のバランスが F1 値。",
  },
  {
    id: "dsl-q3",
    category: "機械学習",
    difficulty: 2,
    question:
      "学習データに過剰に適合し、未知のデータで性能が落ちる現象を何というか。",
    choices: [
      "未学習(Underfitting)",
      "過学習(Overfitting)",
      "正則化",
      "クロスバリデーション",
    ],
    correctIndex: 1,
    explanation:
      "**過学習(Overfitting)** = 学習データのノイズまで覚えてしまい、新しいデータで性能が落ちる現象。対策は **正則化・データ追加・特徴量削減・クロスバリデーション** など。",
  },
  {
    id: "dsl-q4",
    category: "可視化",
    difficulty: 1,
    question:
      "「2 つの量の関係を見たい」ときに最も適切なグラフを選びなさい。",
    choices: ["棒グラフ", "円グラフ", "折れ線グラフ", "散布図"],
    correctIndex: 3,
    explanation:
      "2 変数の関係(身長と体重、広告費と売上など)を見るのは **散布図** が定番。棒は大きさ比較、円は割合、折れ線は時間変化に向く。",
  },
  {
    id: "dsl-q5",
    category: "データエンジニアリング",
    difficulty: 2,
    question:
      "SQL で「複数テーブルを結合する」のに使う構文として最も適切なものを選びなさい。",
    choices: ["GROUP BY", "ORDER BY", "JOIN", "WHERE"],
    correctIndex: 2,
    explanation:
      "**JOIN** は 2 つ以上のテーブルを結合する SQL の基本構文。INNER JOIN・LEFT JOIN・RIGHT JOIN などの種類がある。GROUP BY は集計、ORDER BY はソート、WHERE は絞り込み。",
  },
  {
    id: "dsl-q6",
    category: "データエンジニアリング",
    difficulty: 2,
    question:
      "**生のままのデータ** を大量に保存し、後で必要に応じて構造化・分析する基盤として最も適切なものを選びなさい。",
    choices: [
      "リレーショナルデータベース(RDB)",
      "データウェアハウス(DWH)",
      "データレイク",
      "OLTP データベース",
    ],
    correctIndex: 2,
    explanation:
      "**データレイク** は構造化・非構造化を問わず生データを大量に保存する仕組み(Amazon S3 など)。DWH(BigQuery、Snowflake 等)は分析用に整理されたデータの保管庫。RDB と OLTP は業務トランザクション処理用。",
  },
  {
    id: "dsl-q7",
    category: "ビジネス力",
    difficulty: 2,
    question:
      "データ分析プロジェクトの代表的な進行モデルとして最も適切なものを選びなさい。",
    choices: [
      "ウォーターフォール",
      "アジャイル",
      "CRISP-DM",
      "スクラム",
    ],
    correctIndex: 2,
    explanation:
      "**CRISP-DM(Cross-Industry Standard Process for Data Mining)** はデータ分析プロジェクトの標準的な 6 ステップ(ビジネス理解 → データ理解 → データ準備 → モデリング → 評価 → 展開)。アジャイルやスクラムはソフト開発全般、ウォーターフォールも汎用。",
  },
  {
    id: "dsl-q8",
    category: "ビジネス力",
    difficulty: 1,
    question:
      "「分析の目的を最初に明確に定めること」が重要な理由として最も適切なものを選びなさい。",
    choices: [
      "計算量を減らせるから",
      "目的が曖昧だと、関係ない分析に時間を使い、ビジネス価値につながらないから",
      "プログラム言語の選択に影響するから",
      "上司の指示通りに動けるから",
    ],
    correctIndex: 1,
    explanation:
      "データ分析の最大の落とし穴は「**目的不明確のまま分析を始めて、関係ない結論が出る**」こと。CRISP-DM の最初のステップ「ビジネス理解」が強調されるのもこのため。常に「何のための分析か?」を問うクセが大事。",
  },
  {
    id: "dsl-q9",
    category: "機械学習",
    difficulty: 2,
    question:
      "クロスバリデーション(交差検証)の主な目的として最も適切なものを選びなさい。",
    choices: [
      "学習を高速化する",
      "モデルの汎化性能を信頼性高く推定する",
      "正解率を必ず向上させる",
      "データ量を増やす",
    ],
    correctIndex: 1,
    explanation:
      "**交差検証** はデータを K 分割し、K-1 個で学習・1 個で評価を K 回繰り返して平均を取る手法。**過学習を見抜き、未知データへの汎化性能を信頼性高く推定** するのが目的。データ量自体は増やせない。",
  },
  {
    id: "dsl-q10",
    category: "データエンジニアリング",
    difficulty: 2,
    question:
      "SQL で「テーブル `users` から `age` が 20 以上の人数を数える」式として最も適切なものを選びなさい。",
    choices: [
      "$\\mathrm{SELECT}~\\mathrm{COUNT}(*)~\\mathrm{FROM}~\\mathrm{users}~\\mathrm{WHERE}~\\mathrm{age} >= 20$",
      "$\\mathrm{SELECT}~\\mathrm{age}~\\mathrm{FROM}~\\mathrm{users}~\\mathrm{ORDER~BY}~\\mathrm{age}$",
      "$\\mathrm{SELECT}~*~\\mathrm{FROM}~\\mathrm{users}~\\mathrm{GROUP~BY}~\\mathrm{age}$",
      "$\\mathrm{COUNT}(\\mathrm{users}, \\mathrm{age} >= 20)$",
    ],
    correctIndex: 0,
    explanation:
      "条件付きカウントは「`SELECT COUNT(*) FROM テーブル WHERE 条件`」が基本形。COUNT(*) は行数を数える、WHERE で絞り込み。これを書ける/読めるのは DS の必須リテラシー。",
  },
  {
    id: "dsl-q11",
    category: "DS の 3 軸",
    difficulty: 2,
    question:
      "次のスキルのうち、DS 協会の「データエンジニアリング力」に分類されるものとして最も適切なものを選びなさい。",
    choices: [
      "ヒストグラムから分布形を読み取る",
      "ビジネス課題を分析の問いに変換する",
      "SQL でデータベースから必要なデータを抽出する",
      "ステークホルダーに分析結果をプレゼンする",
    ],
    correctIndex: 2,
    explanation:
      "SQL によるデータ抽出は典型的な **データエンジニアリング力**。ヒストグラム読み取りは DS 力、課題変換とプレゼンはビジネス力。",
  },
  {
    id: "dsl-q12",
    difficulty: 1,
    category: "データ倫理",
    question:
      "個人情報の取り扱いで「仮名化」と「匿名化」の違いとして最も適切な説明はどれか。",
    choices: [
      "仮名化は復元可能な置換、匿名化は本人を識別不能にする不可逆処理",
      "両者は完全に同じ意味",
      "仮名化は不可逆、匿名化は復元可能",
      "どちらも個人情報保護法で同等に扱われる",
    ],
    correctIndex: 0,
    explanation:
      "仮名化は ID を別記号に置換する『復元可能』な処理。匿名化は本人特定不能にする不可逆処理。GDPR・個人情報保護法でも区別され、扱い・規制が異なる。",
  },
  {
    id: "dsl-q13",
    difficulty: 2,
    category: "AI 概念",
    question:
      "「教師あり学習」「教師なし学習」「強化学習」のうち、ラベル付きデータが必要なのはどれか。",
    choices: [
      "教師あり学習のみ",
      "全部",
      "教師なし学習のみ",
      "強化学習のみ",
    ],
    correctIndex: 0,
    explanation:
      "教師あり学習は (X, y) のペアでラベル y が必要。教師なし学習は X だけで構造を発見(クラスタリング・次元削減)。強化学習は環境からの報酬で学ぶため事前ラベル不要。",
  },
  {
    id: "dsl-q14",
    difficulty: 1,
    category: "データ可視化",
    question:
      "「年代別の売上構成比の推移を 5 年分見せたい」とき、最も適した可視化はどれか。",
    choices: [
      "積み上げ棒グラフ または 100% 積み上げ面グラフ",
      "円グラフ 1 枚",
      "散布図",
      "ヒストグラム",
    ],
    correctIndex: 0,
    explanation:
      "時系列(横軸)× カテゴリ別構成(積み上げ)を表現できるのが積み上げ棒/面グラフ。円グラフ 1 枚では時系列が表現できない。",
  },
  {
    id: "dsl-q15",
    difficulty: 2,
    category: "ビジネス力",
    question:
      "データ分析プロジェクトで最も重要な初期ステップとして最も適切なものはどれか。",
    choices: [
      "課題設定とビジネス目的の明確化",
      "最新の機械学習モデルの選定",
      "データの収集",
      "ダッシュボードの作成",
    ],
    correctIndex: 0,
    explanation:
      "「何を解きたいか」が定まらないとどんな高度な分析も意味が薄い。CRISP-DM フレームワークでも最初は『Business Understanding』。",
  },
  {
    id: "dsl-q16",
    difficulty: 2,
    category: "データエンジニアリング",
    question:
      "リレーショナルデータベース(RDB)と NoSQL の使い分けとして最も適切な説明はどれか。",
    choices: [
      "RDB は構造化データと厳密な整合性に強く、NoSQL は柔軟な構造と大規模スケーリングに強い",
      "RDB は速く、NoSQL は遅い",
      "RDB はクラウドで動かない",
      "どちらも完全互換で使い分け不要",
    ],
    correctIndex: 0,
    explanation:
      "RDB(MySQL・PostgreSQL)は ACID トランザクションと SQL の表現力が強み。NoSQL(MongoDB・Cassandra・DynamoDB)は柔軟スキーマと水平スケーラビリティが強み。",
  },
  {
    id: "dsl-q17",
    difficulty: 2,
    category: "AI 倫理",
    question:
      "AI の判断結果に対する「説明可能性(Explainability)」が特に重要となる場面として最も適切なものはどれか。",
    choices: [
      "融資の与信判定・医療診断・採用選考など、当事者への影響が大きい意思決定",
      "ゲームの推薦",
      "天気予報",
      "言語翻訳",
    ],
    correctIndex: 0,
    explanation:
      "EU AI Act でも『高リスク AI システム』として与信・医療・採用などが定義されており、判断根拠を説明できる仕組み(SHAP・LIME など)が要求される。",
  },
  {
    id: "dsl-q18",
    difficulty: 1,
    category: "確率の感覚",
    question:
      "「95% の信頼区間」を厳密に解釈すると最も適切な記述はどれか。",
    choices: [
      "同じ手順を繰り返したとき、計算される区間の 95% が真値を含む",
      "真値が区間内にある確率が 95%",
      "p 値が 0.95 になる",
      "サンプルの 95% が区間に入る",
    ],
    correctIndex: 0,
    explanation:
      "頻度主義の信頼区間は『手続きの性質』。真値は固定されており、区間が確率的に動く。実務では 1) と 2) の違いは曖昧に扱われがちだが、厳密には 1) が正解。",
  },
  {
    id: "dsl-q19",
    difficulty: 3,
    category: "AI 概念",
    question:
      "LLM(大規模言語モデル)の典型的な弱点として最も適切なものはどれか。",
    choices: [
      "事実と異なるもっともらしい応答を生成しうる(ハルシネーション)",
      "計算が速すぎる",
      "翻訳ができない",
      "学習データを完全暗記する",
    ],
    correctIndex: 0,
    explanation:
      "LLM は確率的に次の単語を予測する仕組みのため、もっともらしい嘘を生成しうる。RAG(検索拡張生成)・出典明示・検証ステップで抑制する。",
  },
  {
    id: "dsl-q20",
    difficulty: 2,
    category: "データ可視化",
    question:
      "データ可視化で「色覚バリアフリー」に配慮した色選定として最も適切なものはどれか。",
    choices: [
      "ColorBrewer や Viridis の色覚多様性対応パレットを使う",
      "赤と緑のみ使う",
      "色相を多用する",
      "白黒のみ使う",
    ],
    correctIndex: 0,
    explanation:
      "P/D 型色覚異常は赤緑の判別が苦手。ColorBrewer や matplotlib の Viridis は色覚多様性対応として広く使われる。",
  },

  // === Ch4 機械学習の主要手法 ===
  {
    id: "dsl-ml1",
    difficulty: 2,
    category: "機械学習",
    question:
      "**Lasso 回帰**(L1 正則化)が **Ridge 回帰**(L2 正則化)と比べて持つ特徴的な性質はどれか。",
    choices: [
      "係数を完全にゼロにできる(=特徴選択効果がある)",
      "計算が常に Ridge より高速",
      "多重共線性に強い",
      "正則化項がない",
    ],
    correctIndex: 0,
    explanation:
      "L1 ノルムはゼロで角を持つため、最適解が原点付近に張り付き、係数が **完全にゼロ** になる。これが特徴選択効果。L2 は滑らかなのでゼロにはなりにくい。多重共線性には Ridge の方が強い。",
  },
  {
    id: "dsl-ml2",
    difficulty: 2,
    category: "機械学習",
    question:
      "**勾配ブースティング**(XGBoost / LightGBM)の学習方式として正しい記述はどれか。",
    choices: [
      "決定木を独立に並列学習し、平均する",
      "前段の残差を次の弱学習器が予測する形で順次に学習する",
      "全データの平均だけで予測する",
      "ニューラルネットの一種",
    ],
    correctIndex: 1,
    explanation:
      "GBM は **逐次的(boosting)** に弱学習器(決定木)を積み上げ、前段の予測残差を次の木が補正する。並列のランダムフォレスト(bagging)と対照的。表形式データでは現代のデファクト。",
  },
  {
    id: "dsl-ml3",
    difficulty: 2,
    category: "機械学習",
    question:
      "クラス比率 99:1 の不均衡データで分類モデルを評価する。最も適切な指標はどれか。",
    choices: [
      "正解率(Accuracy)",
      "PR-AUC・F1・Recall(陽性側)",
      "RMSE",
      "決定係数 $R^2$",
    ],
    correctIndex: 1,
    explanation:
      "Accuracy 99% でも『すべて多数派と予測』で達成できる(陽性 0 検出)。少数派の検出力を見るには Precision・Recall・F1・PR-AUC を使う。RMSE/$R^2$ は回帰用。",
  },
  {
    id: "dsl-ml4",
    difficulty: 2,
    category: "機械学習",
    question:
      "**k-means クラスタリング** で適切な $k$ を決める一般的な方法はどれか。",
    choices: [
      "$k$ は必ず 3 にする",
      "エルボー法(クラスタ内平方和の屈曲点)やシルエットスコアの最大値を見る",
      "ランダムに選ぶ",
      "データ数 $n$ の平方根",
    ],
    correctIndex: 1,
    explanation:
      "**エルボー法**: $k$ を増やすとクラスタ内分散が減るが、屈曲点(膝)が最適。**シルエットスコア**: 同クラスタの近さ + 別クラスタの遠さで $k$ を評価。両者を併用するのが実務。",
  },
  {
    id: "dsl-ml5",
    difficulty: 3,
    category: "機械学習",
    question:
      "Netflix Prize で優勝した推薦アルゴリズムの中核となる数学的手法はどれか。",
    choices: [
      "ナイーブベイズ",
      "ユーザー × アイテム評価行列の **行列分解(SVD・ALS)**",
      "k-NN による単純近傍",
      "深層強化学習",
    ],
    correctIndex: 1,
    explanation:
      "Netflix Prize(2006-09)優勝モデルは行列分解 + アンサンブル。ユーザー特徴ベクトル × アイテム特徴ベクトルの内積で評価を予測。math Ch7 の SVD・低ランク近似が直接の数学的基盤。",
  },

  // === Ch5 倫理・プライバシー・AI ガバナンス ===
  {
    id: "dsl-eth1",
    difficulty: 2,
    category: "倫理・プライバシー",
    question:
      "個人情報保護法における **要配慮個人情報** に **該当しない** ものはどれか。",
    choices: [
      "病歴・治療履歴",
      "犯罪歴",
      "氏名・住所",
      "人種・信条・社会的身分",
    ],
    correctIndex: 2,
    explanation:
      "氏名・住所は個人情報だが要配慮個人情報ではない。要配慮個人情報は人種・信条・社会的身分・病歴・犯罪歴・障害など、本人同意なしの取得が原則禁止される情報。",
  },
  {
    id: "dsl-eth2",
    difficulty: 2,
    category: "倫理・プライバシー",
    question:
      "GDPR の **忘れられる権利**(Right to be Forgotten)について正しい記述はどれか。",
    choices: [
      "事業者がデータを忘れる権利",
      "本人がデータの削除を請求でき、事業者は応じる義務がある",
      "AI モデルがパラメータを忘れる権利",
      "サーバーログの自動消去機能",
    ],
    correctIndex: 1,
    explanation:
      "GDPR 第 17 条で規定。EU 域内の個人は事業者にデータ削除を請求でき、事業者は法的根拠がない限り応じる義務がある。違反時の制裁金は最大 2,000 万ユーロまたは全世界売上の 4%。",
  },
  {
    id: "dsl-eth3",
    difficulty: 3,
    category: "倫理・プライバシー",
    question:
      "**$k$-匿名化** について正しい記述はどれか。",
    choices: [
      "$k$ 個のレコードをランダムに削除する",
      "同じ準識別子(年齢・性別・住所など)を持つ個人が常に $k$ 人以上存在することを保証する",
      "暗号化アルゴリズムの一種",
      "サンプルサイズを $k$ 倍にする",
    ],
    correctIndex: 1,
    explanation:
      "$k$-匿名化は『**他のデータと突合しても $k$ 人未満に絞り込めない**』ことを保証する技法。Sweeney (2002)。$k=5$ なら同じ準識別子を持つ人が必ず 5 人以上いる。Netflix Prize の再識別問題への対応の一つ。",
  },
  {
    id: "dsl-eth4",
    difficulty: 3,
    category: "AI 公平性",
    question:
      "AI 公平性指標について、Chouldechova / Kleinberg らが示した **不可能性定理** が主張することは何か。",
    choices: [
      "公平な AI は技術的に作れない",
      "群間で陽性率が異なる場合、Demographic Parity・Equal Opportunity・Equalized Odds の 3 指標は数学的に同時には満たせない",
      "公平性指標は 1 つに統一されている",
      "公平性は法律で禁止されている",
    ],
    correctIndex: 1,
    explanation:
      "群間で base rate(真の陽性率)が違う場合、複数の公平性指標は互いに矛盾する。COMPAS 論争はこの構造の現実例で『どの公平性を満たすか』は社会的合意が必要 ─ 技術だけでは決められない。",
  },
  {
    id: "dsl-eth5",
    difficulty: 2,
    category: "AI 公平性",
    question:
      "AI モデルの個別予測を説明する手法として、ゲーム理論のシャプレイ値に基づくものはどれか。",
    choices: [
      "LIME",
      "SHAP",
      "PDP",
      "Permutation Importance",
    ],
    correctIndex: 1,
    explanation:
      "SHAP (SHapley Additive exPlanations) はシャプレイ値で各特徴量の貢献を計算する Local + Global の説明手法。XGBoost / LightGBM 等で標準的に使われ、与信・医療など説明責任の必要な領域で頻用。",
  },
  {
    id: "dsl-eth6",
    difficulty: 2,
    category: "AI ガバナンス",
    question:
      "EU AI Act について最も適切な記述はどれか(2024 年施行)。",
    choices: [
      "全ての AI 利用を禁止する規制",
      "リスクレベル別(禁止 / ハイリスク / 限定リスク / 最小リスク)に要求事項を定める世界初の包括的 AI 規制",
      "EU 域外には適用されない",
      "違反時に制裁金はない",
    ],
    correctIndex: 1,
    explanation:
      "EU AI Act は世界初の包括的 AI 規制(2024 施行・段階的適用)。社会信用スコアなど『禁止』、医療・採用など『ハイリスク』、生成 AI など『限定リスク』(透明性義務)、最小リスクの 4 段階。違反は最大全世界売上 7%。",
  },
  { id: "dsl-q32", category: "ビジネス力", difficulty: 3, question: "**仮説検証サイクル** の典型として **正しい順序** を選びなさい。", choices: ["課題定義 → 仮説 → データ収集 → 検証 → 意思決定", "データ収集 → 仮説 → 課題", "意思決定 → 検証 → 仮説", "ランダム"], correctIndex: 0, explanation: "**仮説検証**: 業務課題 → ビジネス仮説 → データ ・ 分析設計 → 統計検証 → 意思決定 → 実行 → 効果測定。**仮説なしの探索的分析 → データ漁り** は失敗パターン。" },
  { id: "dsl-q33", category: "DS 力", difficulty: 3, question: "**Train / Validation / Test 分割** の主目的として最も適切なものを選びなさい。", choices: ["Train: 学習 / Val: HPO ・ Early Stop / Test: 最終評価(リーク回避)", "全て同じ", "Test 不要", "Random なら 1 分割"], correctIndex: 0, explanation: "**3 分割**: Train(70%)/ Val(15%)/ Test(15%)が典型。**HPO は Val で、Test は 1 回だけ最終評価**。Test 上で繰り返し評価すると間接的に過学習。" },
  { id: "dsl-q34", category: "DS 力", difficulty: 3, question: "**過学習(Overfitting)** の典型的な対策として **誤っているもの** を選びなさい。", choices: ["正則化(L1/L2 / Dropout)", "Early Stopping", "データ拡張", "学習データを削減"], correctIndex: 3, explanation: "**過学習対策**: 正則化 / Dropout / Early Stop / Data Augmentation / Cross-Validation / 単純モデル化。学習データ削減は逆効果(汎化性能低下)。" },
  { id: "dsl-q35", category: "DS 力", difficulty: 3, question: "**ROC-AUC = 0.5** の意味として最も適切なものを選びなさい。", choices: ["ランダム予測と同等(モデル無価値)", "完璧", "学習不足のみ", "高精度"], correctIndex: 0, explanation: "**ROC-AUC**: 1.0 = 完璧、0.5 = ランダム、0 = 完全逆転。**0.7 以上で実用、0.8+ で良好、0.9+ で優秀**。クラス不均衡には PR-AUC が好まれる。" },
  { id: "dsl-q36", category: "DE 力", difficulty: 3, question: "**ETL** と **ELT** の違いとして最も適切なものを選びなさい。", choices: ["ETL: 変換後ロード(従来 DWH)、ELT: ロード後変換(クラウド DWH)", "両者同じ", "ETL は廃止", "ELT は古い"], correctIndex: 0, explanation: "**ETL**: 中間サーバで変換 → DWH ロード(従来 DWH 時代)。**ELT**: 生データロード → DWH 内で変換(BigQuery / Snowflake 等の安価ストレージで主流)。" },
  { id: "dsl-q37", category: "DE 力", difficulty: 3, question: "**データレイクハウス** の特徴として最も適切なものを選びなさい。", choices: ["Data Lake の柔軟性 + DWH の構造 ・ ACID を統合", "Data Lake のみ", "DWH のみ", "ファイルサーバ"], correctIndex: 0, explanation: "**Lakehouse**: Delta Lake / Iceberg / Hudi で Data Lake に ACID + Schema + Time Travel 追加。**Databricks / Snowflake / Microsoft Fabric** が代表ベンダー。" },
  { id: "dsl-q38", category: "DE 力", difficulty: 3, question: "**Apache Spark** が **Hadoop MapReduce** より優れる主要点として最も適切なものを選びなさい。", choices: ["インメモリ処理 + DAG 実行で 10-100× 高速", "ディスク優先", "Java 必須", "GUI"], correctIndex: 0, explanation: "**Spark**: メモリ駐留 + 遅延評価 + DAG 最適化 → MR の中間ディスク書込を回避 → 10-100× 高速。**Spark SQL / PySpark / MLlib / Structured Streaming**。" },
  { id: "dsl-q39", category: "DE 力", difficulty: 3, question: "**カラムナーフォーマット(Parquet / ORC)** の利点として **誤っているもの** を選びなさい。", choices: ["圧縮率向上", "Predicate Pushdown", "列単位スキャンで I/O 削減", "OLTP 高速化"], correctIndex: 3, explanation: "**Parquet / ORC**: 列指向 → 分析クエリ(集計 ・ 少数列スキャン)に最適。**OLTP(行単位アクセス)には不向き** → 行指向 DB が適切。" },
  { id: "dsl-q40", category: "ビジネス力", difficulty: 3, question: "**KPI ツリー** の設計で重要な原則として最も適切なものを選びなさい。", choices: ["最終 KGI から論理的に分解 → 各 KPI が因果関係で繋がる", "ランダムに集める", "数値ありき", "全社員に同じ KPI"], correctIndex: 0, explanation: "**KPI ツリー**: KGI(最終目標)→ 要素分解 → 中間 KPI → 行動 KPI。**因果ロジック + Measurable + Controllable**(操作可能)が原則。" },
  { id: "dsl-q41", category: "ビジネス力", difficulty: 3, question: "**A/B テスト** で **必要サンプルサイズ** を決める際の要素として **誤っているもの** を選びなさい。", choices: ["効果量(検出したい差)", "有意水準 α", "検出力 1-β", "GPU 数"], correctIndex: 3, explanation: "**サンプルサイズ計算**: 効果量(MDE)+ α + 検出力 + ばらつき。**Optimizely / Statsig 等の Calculator** で算出。GPU は無関係。" },
  { id: "dsl-q42", category: "DS 力", difficulty: 3, question: "**Train/Test Split** で **時系列データ** を扱う際の注意点として最も適切なものを選びなさい。", choices: ["時系列順を保ち未来データを Train に含めない(リーク防止)", "ランダム分割", "全データ Train", "Test 不要"], correctIndex: 0, explanation: "**TimeSeriesSplit**: Train を過去 → Test を未来 → リーク防止。**Walk-Forward Validation / Expanding Window / Rolling Window** が時系列の標準。" },
  { id: "dsl-q43", category: "DS 力", difficulty: 3, question: "**特徴量エンジニアリング** で **One-Hot Encoding** が **不適切** な場面として最も適切なものを選びなさい。", choices: ["カーディナリティ極高(郵便番号 ・ ユーザ ID 等)→ 次元爆発", "2 値分類", "カテゴリ少数", "Tree-based"], correctIndex: 0, explanation: "**One-Hot 不適切**: 高カーディナリティ(数千〜)→ 列爆発 → メモリ ・ 計算負荷。**Target Encoding / Hashing Trick / Embedding** で対処。" },
  { id: "dsl-q44", category: "ビジネス力", difficulty: 3, question: "**データ分析の成果** を経営層に伝える際のベストプラクティスとして **誤っているもの** を選びなさい。", choices: ["ビジネスインパクト + 推奨アクション + リスク", "技術的詳細を全部説明", "可視化 + 一目で分かる結論", "前提と限界を明示"], correctIndex: 1, explanation: "**経営層プレゼン**: Why(課題)+ What(結論)+ How(推奨アクション)+ Risk。**技術詳細は Appendix**。Story Telling と Data Visualization が重要。" },
  { id: "dsl-q45", category: "DE 力", difficulty: 3, question: "**MLOps** の **Training Pipeline** の典型構成として最も適切なものを選びなさい。", choices: ["データ取得 → 前処理 → 学習 → 評価 → 登録 → デプロイ", "学習のみ", "デプロイのみ", "手動 ・ Notebook"], correctIndex: 0, explanation: "**MLOps Pipeline**: Data Validation → Preprocessing → Training → Evaluation → Model Registry → CI/CD → Deployment → Monitoring → Retraining。**End-to-End 自動化** が目標。" },
  { id: "dsl-q46", category: "DS 力", difficulty: 3, question: "**因果推論** が **相関分析** より重要な場面として最も適切なものを選びなさい。", choices: ["介入(価格変更 / 広告 / 治療)の効果測定", "ランキング作成", "可視化のみ", "BBox 検出"], correctIndex: 0, explanation: "**因果推論**: P(Y|do(T)) を推定。**A/B Test ・ DID ・ RDD ・ IV / Propensity Score**。**相関 ≠ 因果** → 意思決定では因果が重要。" },
  { id: "dsl-q47", category: "倫理", difficulty: 3, question: "**個人情報保護法** の **要配慮個人情報** の取得 ・ 利用について **正しい記述** を選びなさい。", choices: ["原則として本人同意が必要", "同意不要", "公開情報なら自由", "削除不可"], correctIndex: 0, explanation: "**要配慮個人情報**(人種 / 信条 / 病歴 / 犯罪歴等): **取得 ・ 第三者提供に原則本人同意必須**。**通常の個人情報**(氏名 / 住所等)より厳格な保護。" },
  { id: "dsl-q48", category: "倫理", difficulty: 3, question: "**XAI(Explainable AI)** が特に重要な業界として **誤っているもの** を選びなさい。", choices: ["医療診断", "信用スコア", "刑事司法", "ゲーム NPC"], correctIndex: 3, explanation: "**XAI 必須業界**: 医療 / 金融 / 信用 / 採用 / 刑事司法 / 教育 - 説明責任 + 規制(EU AI Act, GDPR)。ゲーム NPC は限定リスク。" },
  { id: "dsl-q49", category: "学習", difficulty: 3, question: "データサイエンティストとして **継続的学習** で **誤っているもの** を選びなさい。", choices: ["Kaggle / SIGNATE 等のコンペ参加", "論文 ・ ブログ ・ コミュニティ", "OSS への貢献", "1 回学べば十分"], correctIndex: 3, explanation: "**継続的学習が必須**: 技術進化が速い(LLM / Diffusion / Agent 等)。**Kaggle ・ arXiv ・ X / GitHub ・ Meetup ・ DS 検定エキスパート** などで継続研鑽。" },
  { id: "dsl-q50", category: "次のステップ", difficulty: 1, question: "DS 検定リテラシー合格後の **発展的ステップ** として最も適切なものを選びなさい。", choices: ["DS 検定エキスパート / 統計検定 2 級 / G 検定 ・ E 資格", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**DS Literacy → DS Expert ・ 統計検定 2 級 / 準 1 級 ・ G 検定 ・ E 資格 ・ 三大クラウド ML**(Azure DP-100 / AWS MLA-C01 / GCP Pro MLE)で技術 ・ 統計 ・ クラウドを統合。" },
];
