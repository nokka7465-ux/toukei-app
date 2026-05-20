import type { Question } from "@/types/content";

export const surveySpecialistQuestions: Question[] = [
  {
    id: "ss-q1",
    difficulty: 2,
    category: "標本設計",
    question:
      "単純無作為抽出で標本平均の標準誤差を半分にしたい。標本サイズを何倍にすればよいか。",
    choices: ["2 倍", "3 倍", "4 倍", "8 倍"],
    correctIndex: 2,
    explanation:
      "標準誤差 $S/\\sqrt{n}$ を半分にするには $\\sqrt{n}$ を 2 倍 → $n$ を 4 倍。これが『精度向上のコストは加速度的』の根拠。",
  },
  {
    id: "ss-q2",
    difficulty: 2,
    category: "標本設計",
    question:
      "デザイン効果(deff)が 1 より大きいことが意味するのは何か。",
    choices: [
      "標本設計が単純無作為抽出より精度が高い",
      "標本設計が単純無作為抽出より精度が低い",
      "標本サイズが不足",
      "母集団が均質",
    ],
    correctIndex: 1,
    explanation:
      "deff = 実際の設計の分散 / SRS の分散。**deff > 1** = 同じ n でも SRS より分散が大きい = 精度低下。クラスター抽出で起きやすい。",
  },
  {
    id: "ss-q3",
    difficulty: 3,
    category: "標本設計",
    question:
      "層化抽出が単純無作為抽出より精度が高くなる条件として最も正確なものを選びなさい。",
    choices: [
      "標本サイズが大きい",
      "層内が均質(層内分散が小さい)",
      "層間が均質(層間分散が小さい)",
      "層数が少ない",
    ],
    correctIndex: 1,
    explanation:
      "層化分散の式 $V[\\bar X_{st}] = \\sum W_h^2 S_h^2 / n_h$ を見ると、層内分散 $S_h^2$ が小さいほど精度が上がる。**層内が均質、層間が異質** が層化のメリットを最大化する。",
  },
  {
    id: "ss-q4",
    difficulty: 3,
    category: "標本設計",
    question:
      "ネイマン配分(最適配分)で各層の標本サイズ $n_h$ を決めるとき、$n_h$ は何に比例するか。",
    choices: [
      "$N_h$ のみ",
      "$S_h$ のみ",
      "$N_h \\cdot S_h$",
      "$N_h^2$",
    ],
    correctIndex: 2,
    explanation:
      "ネイマン配分: $n_h \\propto N_h S_h$。**層が大きいほど・層内ばらつきが大きいほど多く割り当てる** のが精度最大の選択。",
  },
  {
    id: "ss-q5",
    difficulty: 2,
    category: "標本設計",
    question:
      "クラスター抽出が単純無作為抽出より採用される主な理由は何か。",
    choices: [
      "精度が常に高いから",
      "コスト(地理的アクセス・調査時間)を大幅に削減できるから",
      "母集団リストが不要だから",
      "層化抽出の発展形だから",
    ],
    correctIndex: 1,
    explanation:
      "クラスター抽出は精度ではコストで負ける(deff > 1)。**地理的に集まっている家を訪問するなどコスト効率が圧倒的**。これが採用理由。",
  },
  {
    id: "ss-q6",
    difficulty: 2,
    category: "推定の精緻化",
    question:
      "サンプリングウエイト $w_i$ について、Horvitz-Thompson 推定量の定義として正しいものは?",
    choices: [
      "$w_i$ は単純な平均で、全員に均等",
      "$w_i = 1/\\pi_i$ で、抽出確率の逆数",
      "$w_i$ はランダムに決まる",
      "$w_i = 観測値 / 母集団値$",
    ],
    correctIndex: 1,
    explanation:
      "$w_i = 1/\\pi_i$(抽出確率の逆数)で重み付け、$\\hat T = \\sum w_i x_i$ で母集団総計を不偏推定。これが調査ウエイト = HT 推定量の出発点。",
  },
  {
    id: "ss-q7",
    difficulty: 3,
    category: "推定の精緻化",
    question:
      "事後層別(post-stratification)とレイキング(raking)の違いとして最も正確な説明はどれか。",
    choices: [
      "両者とも 1 次元の補正",
      "両者とも完全に同じ手法",
      "事後層別は単一のクロス集計セル、レイキングは複数の周辺分布を反復的に合わせる",
      "両者ともプライバシー保護の手法",
    ],
    correctIndex: 2,
    explanation:
      "事後層別 = 性別×年齢のセル別比率を母集団に合わせる。レイキング = 性別の比率と年齢の比率を順次合わせる反復手法(セル毎の母集団情報がない場合に有効)。",
  },
  {
    id: "ss-q8",
    difficulty: 3,
    category: "無回答補正",
    question:
      "欠測のメカニズムで MAR(Missing At Random、無作為)が意味することは?",
    choices: [
      "完全に偶然に欠測",
      "観測されたデータで条件付ければ欠測が無作為",
      "欠測値そのものに依存して欠測",
      "欠測は必ず最後の人",
    ],
    correctIndex: 1,
    explanation:
      "MAR = $P(\\text{欠測} | X_{\\text{obs}}, X_{\\text{miss}}) = P(\\text{欠測} | X_{\\text{obs}})$。観測変数で条件付けたら欠測が独立。MAR を仮定すれば回帰代入や多重代入が不偏推定になる。",
  },
  {
    id: "ss-q9",
    difficulty: 3,
    category: "無回答補正",
    question:
      "多重代入(Multiple Imputation, MI)の利点として最も本質的なのはどれか。",
    choices: [
      "計算が高速",
      "代入による不確実性も含めて分散を計算できる(単純代入は分散を過小評価する)",
      "欠測がないように見せかける",
      "データ量を増やす",
    ],
    correctIndex: 1,
    explanation:
      "単純代入は『代入値が真値であるかのように扱う』ため分散過小評価。MI は複数の代入セット → 各セットで推定 → Rubin's rules で統合することで、代入の不確実性を含めて分散を正しく計算する。",
  },
  {
    id: "ss-q10",
    difficulty: 1,
    category: "公的統計",
    question:
      "国勢調査の周期として正しいものを選びなさい。",
    choices: ["毎月", "毎年", "5 年に 1 回", "10 年に 1 回"],
    correctIndex: 2,
    explanation:
      "国勢調査は **5 年周期**(西暦末尾 0・5)。直近は 2020 年(令和 2 年)、次は 2025 年(令和 7 年)。",
  },
  {
    id: "ss-q11",
    difficulty: 2,
    category: "公的統計",
    question:
      "国民経済計算(SNA)の特徴として最も正確な説明はどれか。",
    choices: [
      "全数調査",
      "標本調査",
      "他の調査結果を統合する加工統計",
      "民間企業の自主集計",
    ],
    correctIndex: 2,
    explanation:
      "SNA = 多数の調査結果を統合した **加工統計** で、内閣府が作成。GDP・GNI 等の中核指標の元データ。3 面等価(生産・分配・支出)が成り立つよう調整される。",
  },
  {
    id: "ss-q12",
    difficulty: 3,
    category: "ミクロデータ",
    question:
      "差分プライバシー(Differential Privacy)について正しい説明はどれか。",
    choices: [
      "データの暗号化技術",
      "個別レコードの有無で出力分布がほぼ変わらないようノイズを加える、数学的なプライバシー保証",
      "ランダムにデータを削除する",
      "すべての値を平均値に置き換える",
    ],
    correctIndex: 1,
    explanation:
      "DP は ε-差分プライバシー: 1 人を加える/除いてもクエリ出力分布が $e^\\epsilon$ 倍以内に収まる、という厳密な数学的定義。米国国勢調査が 2020 年から採用、現代の標準。",
  },
  {
    id: "ss-q13",
    difficulty: 2,
    category: "現代統計",
    question:
      "ビッグデータが伝統的な標本調査と異なる根本的な特徴は?",
    choices: [
      "量が多いだけで質的には同じ",
      "無作為標本ではなく、選択バイアスを含む特定の母集団を反映する",
      "全数なので推定誤差がない",
      "リアルタイム取得できない",
    ],
    correctIndex: 1,
    explanation:
      "Twitter / SNS / Web ログは『そのサービス利用者だけ』を反映 = 選択バイアス。『データが大量 = 母集団全体』ではないため、伝統的な統計理論をそのまま使うと誤った結論を出す。",
  },
  {
    id: "ss-q14",
    difficulty: 2,
    category: "現代統計",
    question:
      "SDGs(持続可能な開発目標)について正しい説明はどれか。",
    choices: [
      "1995 年に採択され、2020 年に達成された",
      "2015 年に国連で採択、2030 年達成を目指す 17 目標 169 ターゲット",
      "G7 が独自に決めた目標",
      "民間企業向けの環境基準のみ",
    ],
    correctIndex: 1,
    explanation:
      "SDGs(Sustainable Development Goals)は 2015 年に国連で採択、**2030 年達成** を目指す 17 目標 169 ターゲット 232 指標。日本では総務省統計局が指標プラットフォーム運用。",
  },
  { id: "svsp-q15", category: "標本設計", difficulty: 3, question: "**Neyman 配分** の意味として最も適切なものを選びなさい。", choices: ["層 h のサンプル割当 $n_h \\propto N_h \\sigma_h$(層サイズ × 層内 SD)", "等配分", "比例配分", "ランダム配分"], correctIndex: 0, explanation: "**Neyman 配分**: 層化抽出で総分散を最小化する最適配分。**$n_h = n \\cdot \\frac{N_h \\sigma_h}{\\sum N_k \\sigma_k}$**。費用を考慮した拡張も(最適費用配分)。" },
  { id: "svsp-q16", category: "標本設計", difficulty: 3, question: "**PPS(Probability Proportional to Size)サンプリング** の特徴として最も適切なものを選びなさい。", choices: ["サイズ(従業員数 / 売上等)に比例した確率で抽出 → 大単位ほど選ばれやすい", "等確率", "ランダム", "便宜抽出"], correctIndex: 0, explanation: "**PPS**: クラスタ(企業 / 学校)のサイズに比例した確率で抽出 → 不等確率。**Horvitz-Thompson 推定量 + 設計ウェイト** で不偏推定。" },
  { id: "svsp-q17", category: "標本設計", difficulty: 3, question: "**2 段抽出(Two-stage Cluster Sampling)** で **クラスタ間分散 vs クラスタ内分散** の関係として最も適切なものを選びなさい。", choices: ["クラスタ内分散が小さいと SRS より分散大(逆効率)", "常に SRS より優れる", "両者同じ", "計算不能"], correctIndex: 0, explanation: "**クラスタ内が均質(クラスタ内分散小)→ クラスタ間分散大 → SRS より分散大**(設計効果 DE > 1)。クラスタ内が異質なら効率的。**ICC(クラスタ内相関)** で判定。" },
  { id: "svsp-q18", category: "設計効果", difficulty: 3, question: "**Design Effect(DE)** の定義として最も適切なものを選びなさい。", choices: ["実際の分散 / 同サンプルサイズの SRS の分散", "サンプルサイズ比", "回答率", "Stratification 比"], correctIndex: 0, explanation: "**DE = V(複雑設計) / V(SRS)**。**> 1**: 複雑設計の方が分散大(クラスタ等)、**< 1**: 効率的(層化等)。**有効サンプルサイズ = n / DE**。" },
  { id: "svsp-q19", category: "推定", difficulty: 3, question: "**比推定量(Ratio Estimator)** のバイアスとして最も適切なものを選びなさい。", choices: ["小サンプルではバイアスあり ・ 大サンプルでは漸近不偏", "完全不偏", "常に偏り大", "推定不能"], correctIndex: 0, explanation: "**Ratio Estimator**: $\\hat{Y}_r = (\\bar{y}/\\bar{x}) X$。**有限母集団 + 小サンプル** ではバイアス、$n \\to \\infty$ で消える。**回帰推定量** はバイアス改善の発展形。" },
  { id: "svsp-q20", category: "推定", difficulty: 3, question: "**回帰推定量(Regression Estimator)** の利点として最も適切なものを選びなさい。", choices: ["x と y の回帰関係を活用 → 比推定より柔軟 + 効率的", "計算不可", "ランダム", "層化必須"], correctIndex: 0, explanation: "**Regression Estimator**: $\\hat{Y}_{lr} = \\bar{y} + b(\\bar{X} - \\bar{x})$。**$b$ は回帰係数** で x と y の関係を反映。**比推定は b=$\\bar{y}/\\bar{x}$ の特殊ケース**。" },
  { id: "svsp-q21", category: "無回答", difficulty: 3, question: "**Imputation の MAR(Missing at Random)** の意味として最も適切なものを選びなさい。", choices: ["欠損確率が観測変数のみに依存(未観測変数には依存しない)", "完全ランダム", "未観測に依存", "全て欠損"], correctIndex: 0, explanation: "**MCAR**: 完全ランダム(分析可能)。**MAR**: 観測変数で説明可能 → Multiple Imputation 適用可。**MNAR**: 未観測変数依存 → 補正困難。" },
  { id: "svsp-q22", category: "無回答", difficulty: 3, question: "**Multiple Imputation(MI)** の主な利点として最も適切なものを選びなさい。", choices: ["欠損値の不確実性を補完値の分散として推定値に反映", "1 つの値で固定", "全行削除", "GUI"], correctIndex: 0, explanation: "**MI**: 欠損を **複数回(典型 5〜10)** ランダム補完 → 各データセットで分析 → 結果統合(Rubin's Rule)。**補完不確実性** を SE に反映。MICE / Amelia / scikit-learn IterativeImputer。" },
  { id: "svsp-q23", category: "推定", difficulty: 3, question: "**GREG(Generalized Regression Estimator)** の用途として最も適切なものを選びなさい。", choices: ["既知の補助情報(国勢調査属性)で標本を較正", "ランダム化", "ウェイト均等化", "全数"], correctIndex: 0, explanation: "**GREG / Calibration**: 既知母集団情報(性別 ・ 年齢分布)で **ウェイト調整** → バイアス削減 + 精度向上。Raking とともに公的統計で標準。" },
  { id: "svsp-q24", category: "分散推定", difficulty: 3, question: "**Bootstrap 分散推定** の利点として最も適切なものを選びなさい。", choices: ["複雑設計でも分布仮定なく SE 推定可", "計算不要", "層化のみ", "ランダム化不要"], correctIndex: 0, explanation: "**Bootstrap**: 標本から復元抽出 → リサンプル統計量の分布から SE / CI。**Jackknife / Replicate Weights** とともに複雑調査標準。" },
  { id: "svsp-q25", category: "分散推定", difficulty: 3, question: "**Taylor 線形化法** の用途として最も適切なものを選びなさい。", choices: ["複雑な非線形推定量(比 ・ 回帰)の分散近似", "線形回帰", "GPU 計算", "認証"], correctIndex: 0, explanation: "**Taylor 線形化**: 比 ・ 回帰 ・ 標準誤差を線形近似 → 分散推定。**WesVar / SAS SURVEYMEANS / R survey パッケージ** で標準実装。" },
  { id: "svsp-q26", category: "サンプリングフレーム", difficulty: 3, question: "**サンプリングフレーム** に関する問題として **誤っているもの** を選びなさい。", choices: ["Coverage(未収載)", "Duplication(重複登録)", "Out-of-scope(対象外)", "GPU 不足"], correctIndex: 3, explanation: "**フレーム問題**: Under-coverage(対象未収載)/ Over-coverage(対象外含む)/ Duplication / Misclassification。**理想フレーム ≠ 母集団**。継続的なフレーム整備が必要。" },
  { id: "svsp-q27", category: "倫理", difficulty: 3, question: "**統計法 41 条** に定められる **守秘義務** の対象として最も適切なものを選びなさい。", choices: ["調査票情報 / 事業所情報 / 識別子等を漏洩 ・ 目的外利用", "公開データのみ", "民間調査", "認証"], correctIndex: 0, explanation: "**統計法 41 条**: 公的統計の調査票情報の守秘義務 + 目的外利用禁止。**違反は罰則 ・ 損害賠償** 対象。退職後も継続。" },
  { id: "svsp-q28", category: "Sensus", difficulty: 3, question: "**Census(全数調査)** の利点として **誤っているもの** を選びなさい。", choices: ["小地域別データ取得可", "母集団情報の基盤", "標本誤差なし", "コストが安い"], correctIndex: 3, explanation: "**Census**: 全数 → 小地域別データ + 母集団基盤(他標本調査の Frame)+ 標本誤差なし(非標本誤差は有り)。**コストは膨大**。5 年に 1 回程度。" },
  { id: "svsp-q29", category: "オンライン調査", difficulty: 3, question: "**Online Survey** で起こる **Self-selection Bias** の特徴として最も適切なものを選びなさい。", choices: ["参加者が自発的 → 関心高い人に偏る", "ランダム", "完全代表", "全て同じ"], correctIndex: 0, explanation: "**Self-selection**: 関心 ・ 動機の高い人だけが回答 → 代表性失われる。**Quota Sampling + Calibration** で軽減。完全な無作為抽出には及ばない。" },
  { id: "svsp-q30", category: "Mode Effect", difficulty: 3, question: "**Mode Effect(調査方式効果)** の典型として最も適切なものを選びなさい。", choices: ["訪問面接 vs Web で同じ質問でも回答傾向が異なる", "性別効果", "ランダム", "全て同じ"], correctIndex: 0, explanation: "**Mode Effect**: 訪問面接 / 電話 / 郵送 / Web で **社会的望ましさバイアス ・ 質問解釈** が変わる。**Mixed-mode 設計** で対応 + Mode 効果調整。" },
  { id: "svsp-q31", category: "信頼性 ・ 妥当性", difficulty: 3, question: "**信頼性(Reliability)** と **妥当性(Validity)** の違いとして最も適切なものを選びなさい。", choices: ["信頼性: 再現性 / 妥当性: 測定対象を正しく測れているか", "両者同じ", "信頼性のみ重要", "妥当性のみ重要"], correctIndex: 0, explanation: "**Reliability**: 同条件で繰り返し測定して同じ結果 → 内的整合性(Cronbach's α)・ 再検査信頼性。**Validity**: 構成概念 ・ 内容 ・ 基準関連妥当性。" },
  { id: "svsp-q32", category: "尺度", difficulty: 3, question: "**Likert Scale** の **5 段階 vs 7 段階** の選択基準として最も適切なものを選びなさい。", choices: ["7 段階: より細かい差異検出、5 段階: 簡潔 ・ 認知負荷低", "両者同じ", "ランダム", "10 段階のみ"], correctIndex: 0, explanation: "**7 段階**: より細かい差異(統計学的にも好まれる)。**5 段階**: 簡潔 ・ 認知負荷低。**中点を消した 4 / 6 段階** で強制選択させることも(中央回答バイアス回避)。" },
  { id: "svsp-q33", category: "Question wording", difficulty: 3, question: "**質問文の表現** で **回答に影響を与える要因** として **誤っているもの** を選びなさい。", choices: ["二重否定", "誘導的表現(誘導質問)", "難解な専門用語", "番号付け"], correctIndex: 3, explanation: "**Question wording バイアス**: 二重否定 ・ 誘導表現 ・ 専門用語 ・ Loaded Word ・ 暗黙の前提。**番号付けは中立**。Pilot Test と Cognitive Interview で検証。" },
  { id: "svsp-q34", category: "Anchoring", difficulty: 3, question: "**Anchoring Effect** の意味として最も適切なものを選びなさい。", choices: ["最初に提示された値が後の回答 ・ 判断に影響", "中央値", "標準化", "ランダム化"], correctIndex: 0, explanation: "**Anchoring**: 最初の数値 ・ 選択肢が判断に強い影響(Tversky & Kahneman)。**Willingness to pay 調査 ・ Open vs Range 質問** で大きな効果。" },
  { id: "svsp-q35", category: "Pilot Test", difficulty: 3, question: "**Pilot Test(予備調査)** の目的として **誤っているもの** を選びなさい。", choices: ["質問の理解度 ・ 回答時間 ・ Logic Flow を検証", "回答時間測定", "標本サイズ調整", "本調査結果発表"], correctIndex: 3, explanation: "**Pilot Test**: 質問理解 ・ Skip Logic ・ 回答時間 ・ 操作性 ・ 技術問題を検証 → 本調査前に修正。**結果発表は本調査** の段階。" },
  { id: "svsp-q36", category: "Cognitive Interview", difficulty: 3, question: "**Cognitive Interview** の主目的として最も適切なものを選びなさい。", choices: ["回答者が質問をどう解釈し ・ どう答えるかを観察", "結果集計", "ランダム抽出", "認証"], correctIndex: 0, explanation: "**Cognitive Interview**: Think Aloud / Probing で **質問の認知過程** を解明 → 設問の誤解釈 ・ Memory ・ Judgment ・ Response 段階の問題発見。" },
  { id: "svsp-q37", category: "Mixed-mode", difficulty: 3, question: "**Mixed-mode 調査** の主な利点として最も適切なものを選びなさい。", choices: ["カバレッジ拡大 + 回答率向上 + Mode 選好の多様性対応", "コスト爆発", "回答率低下", "Mode Effect 完全消去"], correctIndex: 0, explanation: "**Mixed-mode**: Web + 郵送 + 電話 + 訪問の組合せ。**カバレッジ(若年 ・ 高齢)・ 回答率向上**。ただし **Mode Effect 調整** が課題。" },
  { id: "svsp-q38", category: "Adaptive Design", difficulty: 3, question: "**Adaptive Survey Design** の用途として最も適切なものを選びなさい。", choices: ["途中の回答状況に応じて Mode / Incentive を動的調整 → 効率最大化", "ランダム化", "GUI", "DBA"], correctIndex: 0, explanation: "**Adaptive Design**: フェーズ別に Mode / Incentive / Follow-up を最適化 → 回答率 ・ 代表性 ・ コストのバランス。**Responsive Design** とも呼ばれる。" },
  { id: "svsp-q39", category: "Big Data", difficulty: 3, question: "**官民データ融合(Big Data + 公的統計)** の例として **誤っているもの** を選びなさい。", choices: ["スーパー POS + CPI 補完", "携帯位置情報 + 国勢調査", "クレカ + 消費統計", "GPU 利用率 + 人口統計"], correctIndex: 3, explanation: "**官民融合**: POS / 携帯 / クレカ / Web スクレイピング + 既存統計 → Nowcasting / 精緻化。GPU 利用率は無関係。" },
  { id: "svsp-q40", category: "AI / ML", difficulty: 3, question: "**AI / ML を統計調査に活用する** 場面として **誤っているもの** を選びなさい。", choices: ["回答の自動コーディング", "Imputation の高度化", "回答者の AI 学習", "デザインの最適化"], correctIndex: 2, explanation: "**ML 活用**: 自動コーディング(NLP)・ Imputation(Random Forest / DL)・ 標本サイズ最適化 ・ 異常検知。**回答者を AI 学習対象にするのは倫理問題**。" },
  { id: "svsp-q41", category: "微小領域推定", difficulty: 3, question: "**Small Area Estimation(SAE)** の主目的として最も適切なものを選びなさい。", choices: ["標本数が少ない地域 ・ 部分集団でも信頼できる推定", "全数調査", "ランダム抽出", "認証"], correctIndex: 0, explanation: "**SAE**: 直接推定の標本不足を補助情報(国勢調査属性等)+ Empirical Bayes / Hierarchical Bayes で改善。**市町村 ・ 細分業種別統計** で必須。" },
  { id: "svsp-q42", category: "Time Series", difficulty: 3, question: "**月次調査の季節調整** の代表的手法として最も適切なものを選びなさい。", choices: ["X-13ARIMA-SEATS(US Census Bureau)", "Random", "Z-score", "PCA"], correctIndex: 0, explanation: "**X-13ARIMA-SEATS**: 月次 / 四半期統計の季節調整標準。**TRAMO-SEATS / STL** など他手法も。経済指標 ・ 人口動態統計で必須。" },
  { id: "svsp-q43", category: "GIS", difficulty: 3, question: "**地理的に紐付けされた統計データ(Geo-coded Statistics)** の活用例として最も適切なものを選びなさい。", choices: ["小地域(町丁目)別人口 ・ 経済指標分析", "クラウド GPU", "認証", "DB バックアップ"], correctIndex: 0, explanation: "**Geo-coded**: 経緯度 ・ 住所 → 小地域集計 → ヒートマップ ・ 空間自己相関 ・ Local Indicator of Spatial Association(LISA)。GIS + 統計の融合領域。" },
  { id: "svsp-q44", category: "Ethics", difficulty: 3, question: "**ESRA(欧州統計研究家協会)倫理綱領** で重要な原則として **誤っているもの** を選びなさい。", choices: ["回答者の自発参加", "個人情報保護", "結果の科学的誠実性", "GPU 共有"], correctIndex: 3, explanation: "**統計調査倫理**: Voluntary Participation / Informed Consent / Confidentiality / Anonymity / Scientific Integrity / Conflict of Interest。GPU は無関係。" },
  { id: "svsp-q45", category: "GDPR", difficulty: 3, question: "**EU GDPR** が **公的統計** に与える影響として最も適切なものを選びなさい。", choices: ["科学研究 ・ 統計目的の例外規定あり(Art 89)", "全面禁止", "民間のみ", "影響なし"], correctIndex: 0, explanation: "**GDPR Art 89**: 科学研究 / 統計 / アーカイブ目的での個人データ処理に **緩和規定**(適切なセーフガード前提)。EU 統計機関 ・ 研究 ・ 国際比較に影響。" },
  { id: "svsp-q46", category: "国際比較", difficulty: 3, question: "**国際比較統計** で気をつけるべき点として **誤っているもの** を選びなさい。", choices: ["定義 ・ 分類 ・ 測定方法の違い", "通貨換算(購買力平価 PPP 等)", "為替変動の影響", "全データ統一済"], correctIndex: 3, explanation: "**国際比較**: 各国で定義 ・ 分類 ・ 時期 ・ 通貨が異なる。**OECD ・ ILO ・ UN** が国際標準分類 ・ Harmonization 推進。**PPP** で通貨調整。" },
  { id: "svsp-q47", category: "テクノロジ", difficulty: 3, question: "**Computer-Assisted Self-Interview(CASI)** の利点として最も適切なものを選びなさい。", choices: ["センシティブ質問でも回答者一人で操作 → 社会的望ましさバイアス軽減", "コスト最高", "回答率低下", "デザイン不可"], correctIndex: 0, explanation: "**CASI**: 回答者が PC ・ タブレットで自己回答 → **センシティブ質問**(性 ・ 違法行為等)の正直な回答促進。**ACASI**(Audio CASI)は読み書き支援。" },
  { id: "svsp-q48", category: "Quality Framework", difficulty: 3, question: "**ESS(European Statistical System)Quality Framework** の品質指標として **誤っているもの** を選びなさい。", choices: ["Relevance(妥当性)", "Accuracy(精度)", "Timeliness(適時性)", "GPU 利用率"], correctIndex: 3, explanation: "**統計品質 6 + α**: Relevance / Accuracy / Timeliness / Punctuality / Accessibility / Coherence / Comparability。**Code of Practice** で各国実装。GPU は無関係。" },
  { id: "svsp-q49", category: "Professional Development", difficulty: 3, question: "**統計家 ・ 調査専門家** の継続的研鑽として **誤っているもの** を選びなさい。", choices: ["AAPOR / JSS / JFS 等の学術会員 + 学会発表", "Stata / R / SAS のスキル", "倫理 ・ プライバシ最新動向", "1 回学べば十分"], correctIndex: 3, explanation: "**継続的研鑽**: 学会(AAPOR ・ JSS ・ 国際会議)・ ソフト(R survey ・ Stata svy ・ SAS Survey)・ 倫理 ・ GDPR ・ AI 統合。" },
  { id: "svsp-q50", category: "次のステップ", difficulty: 1, question: "専門統計調査士合格後の **発展キャリア** として最も適切なものを選びなさい。", choices: ["統計検定 1 級 ・ DS エキスパート ・ 公務員調査 / 民間調査 / 国際機関", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**専門統計調査士 → 統計検定 1 級(数理深掘り)・ DS Expert(ML / Bayes)・ 公的統計機関 / 民間調査(電通 / マクロミル 等) / 国際機関(OECD / UN)** で活躍。" },
  { id: "svsp-q51", category: "サンプリング", difficulty: 4, question: "**Horvitz-Thompson 推定量** の用途として最も適切なものを選びなさい。", choices: ["不等確率抽出における **不偏推定** 量 ・ $\\hat\\theta = \\sum y_i / \\pi_i$", "等確率限定", "GPU 推定", "認証"], correctIndex: 0, explanation: "**HT 推定量**: 包含確率 $\\pi_i$ の逆数で重み付け。**PPS(Probability Proportional to Size)抽出** や複雑な調査設計で標準。**Sen-Yates-Grundy 分散**で精度計算。" },
  { id: "svsp-q52", category: "サンプリング", difficulty: 4, question: "**ネイマン配分**(Neyman Allocation)の特徴として最も適切なものを選びなさい。", choices: ["層内分散 × 層サイズ に比例配分 → 分散最小化", "均等配分", "層サイズに比例のみ", "全件抽出"], correctIndex: 0, explanation: "**Neyman**: $n_h \\propto N_h \\sigma_h$ で **層別推定量の分散最小**。**比例配分**($n_h \\propto N_h$)より効率的(ばらつきが層で異なる場合)。コスト考慮版が **Optimum Allocation**。" },
  { id: "svsp-q53", category: "Weighting", difficulty: 4, question: "**Raking(IPF)** の用途として最も適切なものを選びなさい。", choices: ["複数周辺分布(性 × 年齢 × 地域)に同時整合する Weight を反復計算", "全件平均", "GPU 補正", "認証"], correctIndex: 0, explanation: "**Raking / Iterative Proportional Fitting**: 周辺分布のみ既知(同時分布不明)→ 反復で Weight 調整。**国勢調査整合 / NHK 視聴率 / Pew 等**で標準。" },
  { id: "svsp-q54", category: "Imputation", difficulty: 4, question: "**Multiple Imputation(MI)** の利点として最も適切なものを選びなさい。", choices: ["欠損値を複数回補完 → 補完の不確実性を反映した推定", "1 回補完", "GPU 補完", "全削除"], correctIndex: 0, explanation: "**MI**: 補完 → 解析 → 結合(Rubin's Rules)を m 回繰返。**Var = Within + (1+1/m)Between**。**MCAR/MAR 仮定**で不偏性。MICE / Amelia / mi パッケージで実装。" },
  { id: "svsp-q55", category: "Variance Estimation", difficulty: 4, question: "**複雑なサンプリングデザインの分散推定** として **誤っているもの** を選びなさい。", choices: ["Linearization(Taylor 展開)", "BRR(Balanced Repeated Replication)", "Jackknife / Bootstrap", "単純無作為抽出公式そのまま"], correctIndex: 3, explanation: "**複雑デザイン分散**: Linearization / BRR / Jackknife / Bootstrap。**Design Effect(DEFF)= Var(複雑) / Var(SRS)** > 1 が典型。**SRS 公式そのままは過小評価**で誤り。" },
  { id: "svsp-q56", category: "Mode Effect", difficulty: 4, question: "**Mode Effect(モード効果)** とは何か最も適切なものを選びなさい。", choices: ["調査モード(Web/紙/電話/面接)で回答が変わる効果", "GPU 速度", "Cost 効果", "認証効果"], correctIndex: 0, explanation: "**Mode Effect**: 同質問でもモードで回答変化(社会的望ましさ ・ Acquiescence Bias 等)。**Mixed-Mode 調査の分析時**にモード補正 / 多モデル化(Modeling Approach)で対応。" },
  { id: "svsp-q57", category: "Nonresponse", difficulty: 4, question: "**Nonresponse Bias** の定量化として最も適切なものを選びなさい。", choices: ["$Bias = (n_r / n)(\\bar{y}_r - \\bar{y}_{nr})$(回答者と非回答者の平均差 × 非回答率)", "回答率のみ", "GPU 速度", "Cost"], correctIndex: 0, explanation: "**Nonresponse Bias 公式**(Groves): 回答率 × 回答 / 非回答群間差。**高回答率でも差が大なら大バイアス、低回答率でも差が小なら小バイアス**。R 率だけでは判断不可。" },
  { id: "svsp-q58", category: "Calibration", difficulty: 4, question: "**Calibration Estimator** の特徴として最も適切なものを選びなさい。", choices: ["補助情報(国勢調査等の既知合計)に整合する Weight を生成 → 効率化", "未調整", "全件平均", "GPU 補正"], correctIndex: 0, explanation: "**Calibration**(Deville & Särndal): 補助変数の既知合計に Weight 和を整合化。**GREG(Generalized Regression)** の枠組。**Raking は Calibration の特殊例**。" },
  { id: "svsp-q59", category: "Small Area", difficulty: 4, question: "**Small Area Estimation(SAE)** の用途として最も適切なものを選びなさい。", choices: ["少サンプル地域 / セグメントの推定を補助モデルで強化(Direct Estimate を改善)", "全件抽出", "GPU 推定", "Cost"], correctIndex: 0, explanation: "**SAE**: 県別 / 市町村別など標本少な地域で **Fay-Herriot Model / Nested Error Model** を使い直接推定 + モデル ・ 補助情報で改善。**米国 SAIPE / 日本県別失業推定**等で利用。" },
  { id: "svsp-q60", category: "Probability", difficulty: 4, question: "**確率サンプリング** と **非確率サンプリング** の本質的違いとして最も適切なものを選びなさい。", choices: ["確率SP=包含確率既知 → 不偏推定可、非確率SP=包含確率不明 → モデル依存", "両者同じ", "GPU vs CPU", "認証 vs 認可"], correctIndex: 0, explanation: "**確率サンプリング**: SRS / 層化 / 多段 → デザインベース推定 ・ 不偏性 ・ 信頼区間。**非確率**: Quota / Convenience / Online Panel → モデルベース(Propensity / MRP)依存。" },
  { id: "svsp-q61", category: "MRP", difficulty: 4, question: "**Multilevel Regression and Poststratification(MRP)** の用途として最も適切なものを選びなさい。", choices: ["非確率サンプル(オンラインパネル等)から階層モデル + 事後層化で推定", "等確率限定", "全件抽出", "GPU 専用"], correctIndex: 0, explanation: "**MRP**: 階層ロジスティック回帰で Cell ごとに予測 → 国勢調査 Cell 数で重み付け集計。**Andrew Gelman** らが普及。**米大統領選 ・ Brexit 予測**で活用、近年標準化。" },
  { id: "svsp-q62", category: "Big Data", difficulty: 4, question: "**Total Survey Error(TSE)** と **Total Error Framework for Big Data** の違いとして最も適切なものを選びなさい。", choices: ["Big Data は Selectivity + Measurement に Algorithm Bias / Drift を追加考慮", "両者同じ", "Big Data は誤差ゼロ", "Survey に誤差なし"], correctIndex: 0, explanation: "**TSE(Groves)**: Sampling / Coverage / Nonresponse / Measurement / Processing。**Big Data Total Error**(Japec et al.): Selectivity / Validity / Algorithm Bias / Linkage Error 追加。" },
  { id: "svsp-q63", category: "Linkage", difficulty: 4, question: "**Record Linkage(レコードリンケージ)** の用途として最も適切なものを選びなさい。", choices: ["異なるデータ源(調査 ・ 行政 ・ 民間)の同一人物 ・ 事業所を結合", "GPU 学習", "認証", "Cost"], correctIndex: 0, explanation: "**Record Linkage**: Fellegi-Sunter モデル / Probabilistic Linkage。**Census + 行政データ / 医療レセ + 死亡票** 等で人口統計強化。**Privacy-Preserving Linkage(Bloom Filter 等)** で個人情報保護。" },
  { id: "svsp-q64", category: "AI 統合", difficulty: 4, question: "**統計調査 × AI / ML** の典型統合パターンとして **誤っているもの** を選びなさい。", choices: ["Nonresponse の Imputation を ML(GBDT)で改善", "Open Question を BERT で自動コーディング", "衛星画像 / IoT で補助情報", "AI で完全無作為破棄"], correctIndex: 3, explanation: "**Survey × AI 統合**: ML 補完 / 衛星 ・ IoT 補助情報 / NLP オープン回答コーディング / Active Learning / Privacy(Differential Privacy)。**無作為破棄は調査破壊**。" },
  { id: "svsp-q65", category: "実務", difficulty: 4, question: "**専門統計調査士** で重視される **実務 + 理論統合能力** として最も適切なものを選びなさい。", choices: ["調査企画 + サンプリング設計 + 推定理論 + 統計法 + AI / Big Data 活用を統合判断", "ML 実装のみ", "GUI のみ", "コスト最優先"], correctIndex: 0, explanation: "**専門統計調査士の領域**: 公的統計 + 調査企画 + サンプリング理論(複雑デザイン)+ 推定 ・ 分散 + 統計法 ・ 倫理 + 現代トレンド(Big Data / AI / Privacy)。**理論 + 実務 + 法令 + 最新動向の総合**試験。" },
  { id: "svsp-q66", category: "DSL", difficulty: 4, question: "**Complex Survey Design** で **層化抽出 + クラスター抽出 + 不等確率** を組合せる必要性として最も適切なものを選びなさい。", choices: ["代表性 + コスト効率 + 精度の最適化", "GUI", "GPU", "認証"], correctIndex: 0, explanation: "**Complex Survey**: 層化(地域 / 性別)+ クラスター(調査区)+ PPS(規模比例)+ 多段。**LFS / 国勢 / NHANES** 等で採用。**Design Effect**(DEFF)で SRS との比較。" },
  { id: "svsp-q67", category: "推定", difficulty: 4, question: "**Pseudo-MLE** の用途として最も適切なものを選びなさい。", choices: ["Survey Weight 込みの最尤推定 → 母集団パラメータ推定", "GPU", "認証", "Cost"], correctIndex: 0, explanation: "**Pseudo-MLE**(Survey Likelihood): 通常 MLE は SRS 仮定。**Sampling Weight $w_i$** を組込み $\\sum w_i \\log f(x_i; \\theta)$ を最大化。Stata `svy` / R `survey package` で。" },
  { id: "svsp-q68", category: "Variance", difficulty: 4, question: "**Taylor Series Linearization Variance** の特徴として最も適切なものを選びなさい。", choices: ["非線形推定量を 1 次近似して分散計算", "GUI", "GPU", "認証"], correctIndex: 0, explanation: "**Linearization**: 非線形(比率 / 回帰係数)を Taylor 1 次展開 → 線形組合せで分散計算。**Replication Method**(BRR / Jackknife / Bootstrap)も標準的代替。" },
  { id: "svsp-q69", category: "Resampling", difficulty: 4, question: "**Bootstrap for Survey** の特徴として最も適切なものを選びなさい。", choices: ["Sampling Design 考慮の Resampling(Rao-Wu / Survey Bootstrap)", "通常 Bootstrap", "GPU", "認証"], correctIndex: 0, explanation: "**Survey Bootstrap**: 単純 Bootstrap は Complex Design に不適。**Rao-Wu Bootstrap / Mirror-Match Bootstrap** で層 / クラスター保持。**Jackknife Repeated Replication** も。" },
  { id: "svsp-q70", category: "Nonresponse", difficulty: 4, question: "**Nonresponse Bias 削減** の手法として **誤っているもの** を選びなさい。", choices: ["Weighting Class Adjustment", "Propensity Score Weighting", "Multiple Imputation", "全削除"], correctIndex: 3, explanation: "**Nonresponse 対応**: Weighting(Class / Propensity)・ Imputation(Single / Multiple)・ Calibration。**全削除は代表性破壊**。**MAR 仮定**(Missing at Random)が前提。" },
  { id: "svsp-q71", category: "Imputation", difficulty: 4, question: "**Hot-Deck Imputation** の特徴として最も適切なものを選びなさい。", choices: ["同類の回答者からランダム / 最近隣で値を借りる", "平均で埋める", "GPU", "認証"], correctIndex: 0, explanation: "**Hot-Deck**: Random Donor / Sequential / Nearest Neighbor。**Cold-Deck**(外部源)・ **Mean / Regression / MI** と使い分け。**Census / Income Survey** で実用。" },
  { id: "svsp-q72", category: "Calibration", difficulty: 4, question: "**Generalized Regression Estimator(GREG)** の特徴として最も適切なものを選びなさい。", choices: ["補助情報 X の既知合計に整合する回帰推定 ・ 効率向上", "GUI", "GPU", "認証"], correctIndex: 0, explanation: "**GREG**: $\\hat{Y}_{GREG} = \\hat{Y}_{HT} + \\hat{\\beta}(X - \\hat{X}_{HT})$。**Calibration の特殊例**。補助変数あり時に分散低減。**Post-Stratification の一般化**。" },
  { id: "svsp-q73", category: "Composite", difficulty: 4, question: "**Composite Estimator** の用途として最も適切なものを選びなさい。", choices: ["過去調査との Time-Lag を活用し精度向上(LFS 等のローテーション標本)", "GUI", "GPU", "認証"], correctIndex: 0, explanation: "**Composite Estimator**: ローテーションパネル(LFS / 労働力調査)で**現期 + 過去 + 重複部分**を組合せ。**K-Composite / AK Composite**。" },
  { id: "svsp-q74", category: "Mode", difficulty: 4, question: "**Mixed-Mode Survey** の **Mode Effect Adjustment** として **誤っているもの** を選びなさい。", choices: ["Sequential Mode Selection(Web → 紙 → 訪問)", "Mode Difference 補正(Calibration / IV)", "Single Mode への正規化", "全 Mode 削除"], correctIndex: 3, explanation: "**Mixed-Mode**: Sequential(コスト効率)or Concurrent(選好優先)。**Mode Effect**(回答傾向差)補正は Modeling Approach(IV / Calibration / Imputation)。" },
  { id: "svsp-q75", category: "Web", difficulty: 4, question: "**Online Panel** の代表性確保手法として **誤っているもの** を選びなさい。", choices: ["MRP(Multilevel Regression + Post-Stratification)", "Propensity Weighting + Calibration", "Probability-based Online Panel(GfK / NORC AmeriSpeak)", "全データ平均"], correctIndex: 3, explanation: "**Non-probability Online**: MRP / Propensity Weighting / Calibration / Probability Hybrid。**全平均**は selection bias で偏る。**Pew / Ipsos KnowledgePanel** が実例。" },
  { id: "svsp-q76", category: "Big Data", difficulty: 4, question: "**Big Data + Survey** 統合の代表的手法として最も適切なものを選びなさい。", choices: ["Survey + Admin Data + Sensor の Linkage + Capture-Recapture", "Survey 廃止", "Big Data のみ", "認証"], correctIndex: 0, explanation: "**Survey + Big Data**: Statistics Netherlands / US Census の Admin Records Census。**Record Linkage / Capture-Recapture / Small Area Estimation** で Survey 精度向上 + Big Data 偏り補正。" },
  { id: "svsp-q77", category: "Privacy", difficulty: 4, question: "**Differential Privacy in Surveys** の用途として最も適切なものを選びなさい。", choices: ["US Census 2020 で採用 ・ 個人特定確率を数学的に保証", "GUI", "GPU", "認証"], correctIndex: 0, explanation: "**Differential Privacy**: US Census 2020 公的統計で初の本格採用。**$(\\epsilon, \\delta)$**(プライバシ予算)・ **Noise Injection**で個別特定を防ぐ。日本 / EU でも研究中。" },
  { id: "svsp-q78", category: "AI", difficulty: 4, question: "**Survey × Machine Learning** の代表的応用として **誤っているもの** を選びなさい。", choices: ["Nonresponse Propensity を ML で改善", "Open Question を NLP で自動コーディング", "Active Learning + Adaptive Survey Design", "全削除"], correctIndex: 3, explanation: "**Survey × ML**: Propensity 推定(GBDT)・ NLP コーディング(BERT)・ Adaptive Design / Responsive Design ・ Imputation。**伝統 Survey と統計学の融合** が現代トレンド。" },
  { id: "svsp-q79", category: "Ethics", difficulty: 4, question: "**専門統計調査士** に求められる **倫理規範** として **誤っているもの** を選びなさい。", choices: ["統計法 + 個情法 + 守秘義務", "Codes of Conduct(AAPOR / ICC-ESOMAR)", "回答者の自発性 + 同意", "結果改ざん"], correctIndex: 3, explanation: "**統計家の倫理**: 統計法 ・ 個情法 ・ AAPOR / ESOMAR / ISI Declaration。**結果改ざんは重大違反 + 統計法違反**で資格剥奪 + 刑事罰の可能性。" },
  { id: "svsp-q80", category: "実務", difficulty: 4, question: "**専門統計調査士** で **CSPP 認定** との関係として最も適切なものを選びなさい。", choices: ["国際資格 CSPP(Certified Professional Statistician)と同等領域", "資格", "GUI", "GPU"], correctIndex: 0, explanation: "**専門統計調査士**: 日本統計学会 / 日本統計協会主催 ・ 実務統計家認定。**国際的に CSPP**(米 ASA Accreditation)・ **PStat / GStat / RSS Fellow / ISI Membership** に対応。" },
];
