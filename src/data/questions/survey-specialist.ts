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
];
