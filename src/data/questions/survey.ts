import type { Question } from "@/types/content";

export const surveyQuestions: Question[] = [
  {
    id: "sv-q1",
    category: "統計法",
    difficulty: 1,
    question:
      "日本の統計制度の根幹を定めた法律として最も適切なものを選びなさい。",
    choices: [
      "統計調査法",
      "統計法",
      "公的統計推進法",
      "統計利用促進法",
    ],
    correctIndex: 1,
    explanation:
      "「統計法」が公式な名称。1947 年に制定され、2007 年に全面改正(現行法)、2009 年 4 月施行。基幹統計の指定や統計委員会の設置などを定めている。",
  },
  {
    id: "sv-q2",
    category: "公的統計",
    difficulty: 1,
    question:
      "国勢調査の実施頻度として最も適切なものを選びなさい。",
    choices: [
      "毎年",
      "5 年に 1 回",
      "10 年に 1 回",
      "経済情勢に応じて随時",
    ],
    correctIndex: 1,
    explanation:
      "国勢調査は西暦の末尾が 0 と 5 の年に実施(5 年周期)。直近は 2020 年(令和2年)、次回は 2025 年。日本の人口・世帯統計の基本となる。",
  },
  {
    id: "sv-q3",
    category: "公的統計",
    difficulty: 2,
    question:
      "「完全失業率」の元データとなる基幹統計として最も適切なものを選びなさい。",
    choices: [
      "国勢統計",
      "労働力統計",
      "賃金構造基本統計",
      "家計統計",
    ],
    correctIndex: 1,
    explanation:
      "労働力統計(労働力調査)は総務省統計局が月次で実施し、就業状態・完全失業率・労働時間などを計算する。景気判断の重要指標。",
  },
  {
    id: "sv-q4",
    category: "標本抽出",
    difficulty: 2,
    question:
      "母集団全員ではなく一部だけを取り出して調べる方法を一般に何というか。",
    choices: [
      "全数調査",
      "標本調査",
      "業務調査",
      "加工統計",
    ],
    correctIndex: 1,
    explanation:
      "標本調査(sample survey)が正解。全員調べるのは全数調査(国勢調査など)。標本調査は手間とコストを抑えつつ、適切な標本サイズなら高い精度で母集団を推定できる。",
  },
  {
    id: "sv-q5",
    category: "標本抽出",
    difficulty: 2,
    question:
      "母集団をいくつかの層(性別・年齢・地域など)に分け、各層から無作為に標本を取る方法を何というか。",
    choices: [
      "単純無作為抽出",
      "系統抽出",
      "層化抽出",
      "多段抽出",
    ],
    correctIndex: 2,
    explanation:
      "層化抽出(stratified sampling)。母集団に明確な区分があるとき、各区分から比例的(または別の基準で)標本を取ることで、偏りを抑え推定精度を上げられる。",
  },
  {
    id: "sv-q6",
    category: "標本抽出",
    difficulty: 3,
    question:
      "母集団を一定間隔で並べ、ランダムなスタート地点から $k$ 番目ごとに抽出する方法を何というか。",
    choices: [
      "単純無作為抽出",
      "系統抽出",
      "層化抽出",
      "クラスター抽出",
    ],
    correctIndex: 1,
    explanation:
      "系統抽出(systematic sampling)。例: 1000 人から 100 人を取るなら 10 人おきに 1 人。スタート地点だけランダムにする。実装が簡単だが、母集団に周期性があると偏る欠点がある。",
  },
  {
    id: "sv-q7",
    category: "公的統計",
    difficulty: 2,
    question:
      "国民経済計算(SNA、GDP の元データ)の作成主体として最も適切なものを選びなさい。",
    choices: [
      "総務省統計局",
      "経済産業省",
      "内閣府",
      "日本銀行",
    ],
    correctIndex: 2,
    explanation:
      "GDP(国内総生産)を含む国民経済計算は内閣府が作成。複数の他統計を組み合わせて推計する加工統計の代表例。",
  },
  {
    id: "sv-q8",
    category: "調査票",
    difficulty: 2,
    question:
      "調査票の質問文を設計するときに **避けるべき** 例として最も適切なものを選びなさい。",
    choices: [
      "短く明確な日本語で書く",
      "選択肢を網羅的かつ排他的にする",
      "答えを誘導するような表現を使う",
      "回答者の負担を考えて質問数を絞る",
    ],
    correctIndex: 2,
    explanation:
      "「答えを誘導する表現」(リーディング・クエスチョン)は調査結果に偏りを生む典型的な問題。「あなたもこの政策に賛成ですよね?」のような尋ね方は避け、中立的に「賛成 / 反対 / どちらでもない」を聞く。",
  },
  {
    id: "sv-q9",
    category: "公的統計",
    difficulty: 2,
    question:
      "「家計調査」の実施周期として最も適切なものを選びなさい。",
    choices: [
      "毎月",
      "四半期",
      "年 1 回",
      "5 年に 1 回",
    ],
    correctIndex: 0,
    explanation:
      "家計調査は **毎月** 実施される基幹統計(総務省統計局)。家計の収入・支出を把握し、消費者物価指数のウエート付けや消費動向の分析に使われる。",
  },
  {
    id: "sv-q10",
    category: "標本抽出",
    difficulty: 3,
    question:
      "母集団を「学校 → クラス → 生徒」という階層で 1 段ずつ標本を選んでいく抽出法を何というか。",
    choices: [
      "層化抽出",
      "系統抽出",
      "多段抽出",
      "クォータ抽出",
    ],
    correctIndex: 2,
    explanation:
      "**多段抽出(multi-stage sampling)**: 母集団を階層構造で捉え、上位から順にランダムに選んでいく方法。全国規模の調査でよく使われ、移動コストや調査員配置の効率化が図れる。",
  },
  {
    id: "sv-q11",
    category: "統計法",
    difficulty: 2,
    question:
      "統計法で定められている公的統計の分類として最も適切なものを選びなさい。",
    choices: [
      "重要統計と参考統計",
      "基幹統計と一般統計",
      "国家統計と地方統計",
      "公開統計と非公開統計",
    ],
    correctIndex: 1,
    explanation:
      "統計法では **基幹統計**(政策決定の基礎として特に重要)と **一般統計** の 2 種類に分類。基幹統計には国勢統計・労働力統計・家計統計など約 50 が指定されている。",
  },
  {
    id: "sv-q12",
    difficulty: 2,
    category: "標本抽出",
    question:
      "国勢調査のように全数調査を行う場合の利点として最も適切なものはどれか。",
    choices: [
      "標本誤差が原理的に存在せず、母集団全体の正確な値が得られる",
      "費用が最も安い",
      "短時間で完了する",
      "回答率を気にしなくてよい",
    ],
    correctIndex: 0,
    explanation:
      "全数調査(センサス)は母集団全員を調査するため標本誤差はない(ただし測定誤差・無回答誤差は残る)。費用と時間が膨大なので、5 年に 1 度などの大規模国家統計でしか実施されない。",
  },
  {
    id: "sv-q13",
    difficulty: 2,
    category: "公的統計",
    question:
      "「労働力調査」を実施する政府統計機関として最も適切なものはどれか。",
    choices: ["総務省統計局", "厚生労働省", "経済産業省", "内閣府"],
    correctIndex: 0,
    explanation:
      "労働力調査は総務省統計局が毎月実施する基幹統計。完全失業率・就業者数の公表に使われる。選定された世帯を 4 か月連続で調査する設計。",
  },
  {
    id: "sv-q14",
    difficulty: 1,
    category: "標本抽出",
    question:
      "層化抽出法(Stratified Sampling)の主な目的として最も適切なものはどれか。",
    choices: [
      "母集団内の重要な層(地域・年齢・性別など)が確実に標本に含まれ、推定精度が上がる",
      "標本サイズを最小化する",
      "計算を簡単にする",
      "全数調査と同じ精度を保証する",
    ],
    correctIndex: 0,
    explanation:
      "層化抽出は事前に層を定義し、各層から比例的に抽出する。各層の代表性を保証でき、層内分散が小さければ単純無作為より精度が向上。世論調査・市場調査の標準。",
  },
  {
    id: "sv-q15",
    difficulty: 3,
    category: "標本抽出",
    question:
      "クラスター抽出法を採用するメリットとして最も適切なものはどれか。",
    choices: [
      "調査コストを大幅に削減できる(地理的に近いクラスターを選んで集中調査)",
      "標本誤差が常に最小になる",
      "全数調査より高精度",
      "層内の異質性を最大化する",
    ],
    correctIndex: 0,
    explanation:
      "クラスター抽出は『地理的に近い世帯群』のような自然な集まりを単位として抽出する。コスト削減が最大の動機。ただし同じクラスター内の観測は似がちで、標本誤差は単純無作為より大きくなる傾向。",
  },
  {
    id: "sv-q16",
    difficulty: 2,
    category: "誤差",
    question:
      "標本調査の誤差のうち「無回答誤差」を最小化する方法として最も適切なものはどれか。",
    choices: [
      "回答率向上策(訪問・督促・インセンティブ)を実施し、加重調整で残りを補正",
      "サンプルサイズを倍にする",
      "層化抽出に切り替える",
      "全数調査にする",
    ],
    correctIndex: 0,
    explanation:
      "無回答は回答者と非回答者の特性差(無回答バイアス)を生む。回答率を上げる努力 + 残った無回答に対しては事後重み付けで補正する。サンプルサイズを増やしても無回答バイアスは解消しない。",
  },
  {
    id: "sv-q17",
    difficulty: 2,
    category: "公的統計",
    question:
      "「家計調査」が公表する代表的な指標として最も適切なものはどれか。",
    choices: [
      "1 世帯当たりの消費支出",
      "完全失業率",
      "GDP",
      "鉱工業生産指数",
    ],
    correctIndex: 0,
    explanation:
      "家計調査(総務省)は世帯の収支構造を把握する基幹統計。失業率は労働力調査、GDP は内閣府国民経済計算、鉱工業生産は経産省。",
  },
  {
    id: "sv-q18",
    difficulty: 3,
    category: "公的統計",
    question:
      "公的統計の二次利用に関する制度として「オーダーメード集計」の説明として最も適切なものはどれか。",
    choices: [
      "研究者の依頼に応じて、政府機関が個別に集計を作成し提供する制度",
      "個人情報を含む生データを直接配布する制度",
      "公開済み公表表のダウンロードサービス",
      "海外への輸出専用",
    ],
    correctIndex: 0,
    explanation:
      "統計法 33 条に基づくオーダーメード集計は、研究者・実務家のニーズに合わせて統計局が独自集計を作成・提供する制度。個別調査票情報の提供(33 条の 2)とは別。",
  },

  // === Ch5 回答プロセスと非標本誤差 ===
  {
    id: "sv-casm1",
    difficulty: 2,
    category: "回答プロセス",
    question:
      "Tourangeau の **CASM 4 段階モデル** の正しい順序はどれか。",
    choices: [
      "理解 → 検索 → 判断 → 表出",
      "表出 → 判断 → 検索 → 理解",
      "理解 → 判断 → 検索 → 表出",
      "検索 → 理解 → 表出 → 判断",
    ],
    correctIndex: 0,
    explanation:
      "**Comprehension(理解) → Retrieval(検索) → Judgment(判断) → Response(表出)**。各段階で誤差が混入する。設計時にどの段階の障害を予防するかを意識するのが認知的調査方法論。",
  },
  {
    id: "sv-casm2",
    difficulty: 2,
    category: "非標本誤差",
    question:
      "**非標本誤差** に **含まれない** ものはどれか。",
    choices: [
      "カバレッジ誤差",
      "測定誤差",
      "標本誤差(サンプリングのばらつきから生じる誤差)",
      "処理誤差",
    ],
    correctIndex: 2,
    explanation:
      "標本誤差は **標本抽出のランダムさ** から生じ、$1/\\sqrt n$ で減少する別ジャンル。非標本誤差は標本サイズを増やしても減らないので、ビッグデータでも残る。",
  },
  {
    id: "sv-casm3",
    difficulty: 2,
    category: "非標本誤差",
    question:
      "1936 年米大統領選で **Literary Digest** 誌の予測が大きく外れた主因はどれか。",
    choices: [
      "標本サイズが小さすぎた",
      "標本フレーム(電話帳・自動車登録)が当時の富裕層に偏っており、**カバレッジ誤差** が深刻だった",
      "回答用紙の印刷が悪かった",
      "計算ミス",
    ],
    correctIndex: 1,
    explanation:
      "1000 万人の標本でも、当時の電話・車所有者は富裕層(共和党寄り)に偏っていた。『**標本数だけでは精度を保証しない**』という調査統計学の歴史的な教訓。Web 調査の偏りも本質的に同じ問題。",
  },
  {
    id: "sv-casm4",
    difficulty: 3,
    category: "ウェイト調整",
    question:
      "Web 調査での性別 × 年代の偏りを補正する **事後層化** について、最も適切な記述はどれか。",
    choices: [
      "観察可能な属性の偏りは補正できるが、観察できない属性(意識・行動)の偏りは残る",
      "標本誤差をゼロにできる魔法の手法",
      "回答率を 100% にできる",
      "事後層化は禁止されている",
    ],
    correctIndex: 0,
    explanation:
      "事後層化は『観察可能な属性』を母集団構成比に合わせるだけ。観察できない属性で回答者と非回答者が違えば、無回答バイアスは残る。だから設計段階での回答率向上が最初の防波堤。",
  },
  { id: "sv-q23", category: "標本設計", difficulty: 3, question: "**単純無作為抽出(SRS)** の特徴として最も適切なものを選びなさい。", choices: ["母集団の各単位が等確率で選ばれる", "均等な層から抽出", "便宜的に選ぶ", "順番に選ぶ"], correctIndex: 0, explanation: "**SRS**: 各単位の包含確率が等しい。**復元 / 非復元**(通常は非復元)。理論的に最も基本だが、層が偏ると分散大きく非効率。" },
  { id: "sv-q24", category: "標本設計", difficulty: 3, question: "**層化抽出** の利点として最も適切なものを選びなさい。", choices: ["層内ばらつき小 ・ 層間ばらつき大 のとき、SRS より分散小", "コスト最小", "回答率向上", "目的不要"], correctIndex: 0, explanation: "**層化抽出**: 母集団を **同質な層** に分けて層ごとに抽出。**層内分散が小さい場合に SRS より効率的**(推定精度高)。Neyman 配分で最適配分。" },
  { id: "sv-q25", category: "標本設計", difficulty: 3, question: "**クラスタ抽出** が **単純無作為抽出** より好まれる場面として最も適切なものを選びなさい。", choices: ["地理的に広域 → 訪問コスト削減", "精度向上", "回答率向上のみ", "標本サイズ削減"], correctIndex: 0, explanation: "**Cluster Sampling**: 地理的 ・ 組織的クラスタ(町丁目 / 学校 / 病院)を抽出 → クラスタ内で全数 or 副標本。**コスト効率 ◎ ・ 精度 ✕**(SRS より分散大、クラスタ内相関のため)。" },
  { id: "sv-q26", category: "標本設計", difficulty: 3, question: "**多段抽出** の典型例として最も適切なものを選びなさい。", choices: ["市町村 → 町丁目 → 世帯 → 個人 と段階的に抽出", "1 段抽出", "層化のみ", "便宜法"], correctIndex: 0, explanation: "**多段抽出**: 行政区分などを階層的に。**国勢調査 ・ 国民生活基礎調査 等の大規模公的統計** で標準。各段で SRS / 確率比例(PPS)を使用。" },
  { id: "sv-q27", category: "標本サイズ", difficulty: 3, question: "**標本サイズ算出** で必要な情報として **誤っているもの** を選びなさい。", choices: ["母集団分散 σ²(or 推定値)", "希望精度(SE)", "有意水準 / 信頼区間幅", "回答者の名前"], correctIndex: 3, explanation: "**$n = (Z_{\\alpha/2} σ / d)^2$** で算出。**σ ・ Z_{α/2}(信頼水準)・ d(精度)** が必要。回答者の名前は無関係。" },
  { id: "sv-q28", category: "ウェイティング", difficulty: 3, question: "**サンプリングウェイト(設計ウェイト)** の意味として最も適切なものを選びなさい。", choices: ["包含確率の逆数(各標本が母集団何人を代表するか)", "回帰係数", "精度", "ランダム値"], correctIndex: 0, explanation: "**設計ウェイト = 1 / π_i**(π_i: 単位 i の包含確率)。**Horvitz-Thompson 推定量**: $\\hat{Y} = \\sum y_i / \\pi_i$。サンプリング設計を反映した推定。" },
  { id: "sv-q29", category: "ウェイティング", difficulty: 3, question: "**Calibration(較正)** の用途として最も適切なものを選びなさい。", choices: ["既知の補助情報(性別 ・ 年齢分布)に標本を合わせて推定精度向上", "ランダム化", "層化と同じ", "サンプル増加"], correctIndex: 0, explanation: "**Calibration**: 設計ウェイトを補助変数(性別 / 年齢 / 地域)で調整 → 既知母集団特性と一致。**Raking / GREG 推定** が代表手法。回収率の偏りも軽減。" },
  { id: "sv-q30", category: "公的統計", difficulty: 3, question: "**国勢調査** の特徴として最も適切なものを選びなさい。", choices: ["5 年ごとに **全数調査**(基幹統計)", "標本調査", "毎月実施", "民間主導"], correctIndex: 0, explanation: "**国勢調査**: 5 年ごと(2025 が次回)・ 全数 ・ 基幹統計。**他の標本調査(労働力 / 家計 / 国民生活基礎)の母集団情報基盤**。" },
  { id: "sv-q31", category: "公的統計", difficulty: 3, question: "**労働力調査** の調査主体として最も適切なものを選びなさい。", choices: ["総務省統計局", "厚生労働省", "経済産業省", "日銀"], correctIndex: 0, explanation: "**労働力調査**: 総務省統計局 ・ 月次 ・ 標本約 4 万世帯。**完全失業率 / 雇用者数 / 就業構造** を公表。**毎月勤労統計**(厚労省、賃金 ・ 労働時間)と対比的。" },
  { id: "sv-q32", category: "回答率", difficulty: 3, question: "**無回答(Non-response)** の種別 **項目無回答** と **単位無回答** の違いとして最も適切なものを選びなさい。", choices: ["項目: 一部質問のみ未回答 / 単位: 調査票全体未回答", "両者同じ", "項目は無視", "単位は無視"], correctIndex: 0, explanation: "**項目無回答**: 特定質問のみ未回答 → 補定(Imputation)で対応。**単位無回答**: 調査票全体未回答 → ウェイト調整(Non-response Adjustment)。" },
  { id: "sv-q33", category: "回答率", difficulty: 3, question: "**Imputation(補定)** の手法として **誤っているもの** を選びなさい。", choices: ["Mean Imputation(平均値代入)", "Hot Deck(類似回答者の値)", "Regression Imputation", "全行削除"], correctIndex: 3, explanation: "**Imputation**: Mean / Hot Deck / Regression / Multiple Imputation。**全行削除はサンプルサイズ激減 ・ バイアス増 → 推奨されない**(MAR 仮定下でも非効率)。" },
  { id: "sv-q34", category: "オープンデータ", difficulty: 3, question: "**e-Stat** の役割として最も適切なものを選びなさい。", choices: ["政府統計の総合窓口(API + Excel ・ CSV 公開)", "民間調査", "GUI のみ", "認証"], correctIndex: 0, explanation: "**e-Stat**(政府統計の総合窓口): API でプログラマブルアクセス + 多形式 DL。**地理情報(jSTAT MAP)・ オンライン分析(SSDSE)** など多機能。" },
  { id: "sv-q35", category: "個人情報", difficulty: 3, question: "**統計法** が定める **匿名データ** の特徴として最も適切なものを選びなさい。", choices: ["個人識別不可化された調査票情報を学術研究 ・ 教育目的で利用", "公開データ", "暗号化された生データ", "完全自由利用"], correctIndex: 0, explanation: "**統計法 36 条**: 匿名データ(集計済 + 識別子削除 + 摂動)を学術研究 ・ 教育 ・ 公益目的に提供。**オーダーメード集計**(研究者特注集計)も統計法に基づく。" },
  { id: "sv-q36", category: "倫理", difficulty: 3, question: "**調査票の質問順序** で典型的なバイアスとして最も適切なものを選びなさい。", choices: ["Order Effect(直前質問が次の回答に影響)", "ランダム化で消える", "存在しない", "DBA 対応"], correctIndex: 0, explanation: "**Order Effect / Carryover Effect**: 直前質問が次の認識 ・ 回答に影響。**ランダム化された質問順序 / 注意深い設計** で軽減。Pilot Test で検証。" },
  { id: "sv-q37", category: "設問設計", difficulty: 3, question: "**Double-barreled question** の問題点として最も適切なものを選びなさい。", choices: ["1 質問に複数の論点 → 回答が一意に解釈不能", "答えやすい", "短い", "ランダム"], correctIndex: 0, explanation: "**Double-barreled**: 『この商品の品質と価格に満足ですか』のように **2 点同時に問う** → 1 つに回答しても他方は不明。**1 質問 1 論点** が原則。" },
  { id: "sv-q38", category: "設問設計", difficulty: 3, question: "**リッカート尺度** の典型として最も適切なものを選びなさい。", choices: ["5 段階 or 7 段階の同意度(強反対〜強賛成)", "Yes/No", "10000 段階", "ランダム選択"], correctIndex: 0, explanation: "**Likert Scale**: 5 / 7 段階の同意度。**中間選択肢(どちらでもない)を入れるか** が設計議論。**中間を消して 4 / 6 段階** で強制選択させる場合も。" },
  { id: "sv-q39", category: "推定", difficulty: 3, question: "**Horvitz-Thompson 推定量** の特徴として最も適切なものを選びなさい。", choices: ["不等確率抽出でも不偏推定可能", "復元抽出専用", "層化専用", "便宜抽出向け"], correctIndex: 0, explanation: "**Horvitz-Thompson**: $\\hat{Y} = \\sum_{i \\in S} y_i / \\pi_i$。**包含確率 π_i さえ既知なら不等確率抽出でも不偏**。PPS(Probability Proportional to Size)サンプリングで活用。" },
  { id: "sv-q40", category: "Web 調査", difficulty: 3, question: "**Web パネル調査** の主な懸念として **誤っているもの** を選びなさい。", choices: ["カバレッジバイアス(IT 弱者除外)", "Self-selection バイアス", "Professional Respondent", "全国民必須回答"], correctIndex: 3, explanation: "**Web Panel**: コスト ・ 速度 ◎ ・ バイアス懸念 大(IT 利用率 / Self-selection / 報酬目当ての Professional Respondent)。**Calibration ・ Quota Sampling** で軽減。" },
  { id: "sv-q41", category: "GIS", difficulty: 3, question: "**地理空間データ** を統計調査で活用する例として **誤っているもの** を選びなさい。", choices: ["小地域メッシュ集計", "ヒートマップ可視化", "人流データ + 国勢調査の組合せ", "GPU 学習"], correctIndex: 3, explanation: "**地理空間統計**: 小地域メッシュ / Choropleth Map / Hot Spot / 空間オートコリレーション。**人流 ・ ATM ・ POS データ** と国勢調査の融合は新領域。GPU は無関係。" },
  { id: "sv-q42", category: "標本誤差", difficulty: 3, question: "**標準誤差(SE)** と **標準偏差(SD)** の違いとして最も適切なものを選びなさい。", choices: ["SE: 推定量の散らばり(SD / √n)、SD: データの散らばり", "両者同じ", "SE は廃止", "SD は計算不能"], correctIndex: 0, explanation: "**SD**: データのばらつき。**SE = SD / √n**: 推定量のばらつき。**サンプルサイズ n が大きいほど SE は小**(精度向上)。" },
  { id: "sv-q43", category: "信頼区間", difficulty: 3, question: "**95% 信頼区間** の正しい解釈として最も適切なものを選びなさい。", choices: ["同様の抽出を多数行えば 95% が真値を含む区間", "母数が 95% の確率で区間内にある", "標本が 95% の確率で正しい", "誤差ゼロ"], correctIndex: 0, explanation: "**頻度論的 CI**: 真値は固定、区間がランダム。同様の手続きで多数の CI を作れば 95% が真値を含む。**ベイズの確信区間** は真値が分布として扱われ解釈異なる。" },
  { id: "sv-q44", category: "誤差", difficulty: 3, question: "**サンプリング誤差** と **非サンプリング誤差** の例で **非サンプリング誤差** に該当するものを選びなさい。", choices: ["回答者の誤回答 / 入力ミス / 設問解釈相違", "サンプルサイズ 100", "層化抽出", "PPS"], correctIndex: 0, explanation: "**サンプリング誤差**: 抽出に起因(SE)。**非サンプリング誤差**: 測定誤差 / 入力ミス / 設問解釈 / 無回答 / カバレッジ。**サンプルサイズを増やしても消えない**。" },
  { id: "sv-q45", category: "推定", difficulty: 3, question: "**比推定(Ratio Estimator)** の利点として最も適切なものを選びなさい。", choices: ["補助変数 x と相関が高ければ単純平均より分散小", "全て同じ", "サンプル削減", "回答率向上"], correctIndex: 0, explanation: "**比推定**: $\\hat{Y} = (\\bar{y}/\\bar{x}) \\cdot X$(X: 既知母集団合計)。**x と y が強い相関** であれば SE を大幅削減可能。Auxiliary information の活用例。" },
  { id: "sv-q46", category: "経済統計", difficulty: 3, question: "**消費者物価指数(CPI)** の調査主体として最も適切なものを選びなさい。", choices: ["総務省統計局", "経産省", "日銀", "厚労省"], correctIndex: 0, explanation: "**CPI**: 総務省統計局 ・ 月次。**全国 ・ 東京都区部** の物価動向。**ラスパイレス指数 ・ 5 年に 1 度の基準年変更**。日銀は **物価安定目標 2% の達成評価** に活用。" },
  { id: "sv-q47", category: "経済統計", difficulty: 3, question: "**家計調査** の調査主体と特徴として最も適切なものを選びなさい。", choices: ["総務省統計局 ・ 月次 ・ 家計簿による消費実態", "民間調査", "毎日", "年 1 回"], correctIndex: 0, explanation: "**家計調査**: 総務省統計局 ・ 月次 ・ 約 9000 世帯 ・ 6 ヶ月家計簿。**消費支出 / 食料消費 / 貯蓄** など分析。" },
  { id: "sv-q48", category: "ビッグデータ", difficulty: 3, question: "**伝統的統計調査 + ビッグデータ** の融合の例として **誤っているもの** を選びなさい。", choices: ["POS データ + 物価調査", "携帯位置情報 + 人流", "Web スクレイピング + 物価", "GPU 利用率 + 国勢調査"], correctIndex: 3, explanation: "**官民データ融合**: POS / 携帯位置 / Web 価格 / クレカ / SNS + 既存調査。**Nowcasting**(リアルタイム予測)で価値増。GPU 利用率は無関係。" },
  { id: "sv-q49", category: "倫理", difficulty: 3, question: "**統計法上の調査票情報の取扱い** で **誤っているもの** を選びなさい。", choices: ["統計目的以外の利用は原則禁止", "目的外利用には罰則", "二次利用には承認が必要", "公開後は自由利用可"], correctIndex: 3, explanation: "**統計法**: 調査票情報は **目的外利用禁止 + 守秘義務 + 罰則**。**匿名データ提供 / オーダーメード集計** には別途承認 ・ 手続き。" },
  { id: "sv-q50", category: "次のステップ", difficulty: 1, question: "統計調査士合格後の次のステップとして最も適切なものを選びなさい。", choices: ["専門統計調査士 ・ 統計検定 2 級 / 準 1 級 ・ DS 検定", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**統計調査士 → 専門統計調査士(実務上位)・ 統計検定 2 級 / 準 1 級(数理深掘り)・ DS 検定(機械学習方向)**。**公務員 ・ 調査会社 ・ コンサル** でキャリア活用。" },
];
