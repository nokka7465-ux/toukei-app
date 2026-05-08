import type { Question } from "@/types/content";

export const awsMlSpecialtyQuestions: Question[] = [
  {
    id: "mls-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "AWS Certified Machine Learning - Specialty(MLS-C01)の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational",
      "Associate",
      "Professional",
      "Specialty",
    ],
    correctIndex: 3,
    explanation:
      "**MLS-C01 は Specialty レベル**。AWS ML 認定階層: AI Practitioner(F)→ ML Engineer Associate → **ML Specialty(本資格、最上位)**。",
  },
  {
    id: "mls-q2",
    category: "数学",
    difficulty: 3,
    question:
      "PCA(主成分分析)の数学的基礎として最も適切なものを選びなさい。",
    choices: [
      "勾配降下法",
      "共分散行列の固有値分解",
      "ベイズの定理",
      "ニュートン法",
    ],
    correctIndex: 1,
    explanation:
      "**PCA** は共分散行列(または相関行列)の **固有値分解**。固有ベクトル方向に分散最大化する次元削減。",
  },
  {
    id: "mls-q3",
    category: "アルゴリズム",
    difficulty: 3,
    question:
      "**高次元の疎なデータ(クリックログ等)** で推薦システムを構築する際、最も適切な SageMaker Built-in アルゴリズムを選びなさい。",
    choices: [
      "Linear Learner",
      "XGBoost",
      "Factorization Machines",
      "K-Means",
    ],
    correctIndex: 2,
    explanation:
      "**Factorization Machines(FM)** は高次元疎データ(クリック ・ 評価ログ)に最適。CTR 予測 ・ 推薦システムで標準。線形モデルでは表現できない交互作用を低次元に埋め込んで学習。",
  },
  {
    id: "mls-q4",
    category: "アルゴリズム",
    difficulty: 3,
    question:
      "AWS SageMaker Built-in で **時系列予測** に特化したアルゴリズムとして最も適切なものを選びなさい。",
    choices: [
      "DeepAR",
      "BlazingText",
      "K-Means",
      "RCF",
    ],
    correctIndex: 0,
    explanation:
      "**DeepAR** は RNN ベースの時系列予測アルゴリズム。複数系列を同時に学習し、汎化性が高い。Forecast サービスの裏でも使われる。",
  },
  {
    id: "mls-q5",
    category: "アルゴリズム",
    difficulty: 3,
    question:
      "SageMaker Built-in の **異常検知** アルゴリズムとして最も適切なものを選びなさい。",
    choices: [
      "Random Cut Forest(RCF)",
      "Linear Learner",
      "DeepAR",
      "PCA",
    ],
    correctIndex: 0,
    explanation:
      "**Random Cut Forest(RCF)** は SageMaker Built-in の異常検知。アンサンブルベースで高次元データに強い。**IP Insights** はアクセスパターン異常に特化。",
  },
  {
    id: "mls-q6",
    category: "不均衡対策",
    difficulty: 3,
    question:
      "クラス比率が 99:1 の不均衡データで、**少数クラスを合成的にオーバーサンプリング** する手法として最も適切なものを選びなさい。",
    choices: [
      "Random Undersampling",
      "SMOTE(Synthetic Minority Over-sampling Technique)",
      "Class Weight 調整のみ",
      "Threshold Moving",
    ],
    correctIndex: 1,
    explanation:
      "**SMOTE** は少数クラスのデータポイント間を線形補間して合成サンプルを作るオーバーサンプリング手法。ADASYN(難サンプル重視)も類似手法。",
  },
  {
    id: "mls-q7",
    category: "前処理",
    difficulty: 3,
    question:
      "学習時とテスト時で **同じスケーリングパラメータを使う** ベストプラクティスとして最も適切なものを選びなさい。",
    choices: [
      "全データで fit_transform、その後 train/test 分割",
      "Train で fit、train + test で transform",
      "Train で fit_transform、Test では transform のみ",
      "Train / Test それぞれで fit_transform",
    ],
    correctIndex: 2,
    explanation:
      "**Train で fit_transform、Test には transform のみ** が正解。テスト統計を訓練に混ぜると **データリーク** になる。Pipeline でラップすると構造的に防げる。",
  },
  {
    id: "mls-q8",
    category: "評価",
    difficulty: 3,
    question:
      "極端な不均衡データの分類で、ROC-AUC より **少数クラスの捕捉性能を反映** する評価指標として最も適切なものを選びなさい。",
    choices: [
      "Accuracy",
      "MSE",
      "PR-AUC(Precision-Recall AUC)",
      "R²",
    ],
    correctIndex: 2,
    explanation:
      "**PR-AUC** は不均衡データで少数派クラスの捕捉性能をより敏感に反映する。**ROC-AUC** は閾値非依存だが、極端な不均衡では PR-AUC のほうが望ましい。",
  },
  {
    id: "mls-q9",
    category: "深層学習",
    difficulty: 3,
    question:
      "深層 NN で **勾配消失問題への対策** に **不適切** なものを選びなさい。",
    choices: [
      "ReLU 系活性化関数の使用",
      "Batch Normalization の挿入",
      "Skip Connection(残差接続)",
      "学習率を極端に小さくする(例: 1e-15)",
    ],
    correctIndex: 3,
    explanation:
      "学習率を極端に小さくしても勾配消失は解決しない(更新がほぼ進まないだけ)。**ReLU・BN・Skip Connection・適切な初期化(He / Xavier)** が代表的対策。",
  },
  {
    id: "mls-q10",
    category: "深層学習",
    difficulty: 3,
    question:
      "現代の LLM(GPT / BERT / Claude / Gemini)の **共通の中核アーキテクチャ** として最も適切なものを選びなさい。",
    choices: [
      "RNN",
      "CNN",
      "Transformer",
      "GAN",
    ],
    correctIndex: 2,
    explanation:
      "**Transformer**(Attention is All You Need、2017)が現代の LLM の中核。Self-Attention で並列処理 + 長距離依存を実現。",
  },
  {
    id: "mls-q11",
    category: "Built-in",
    difficulty: 3,
    question:
      "SageMaker の **トピックモデル** Built-in アルゴリズムとして最も適切なものを選びなさい。",
    choices: [
      "BlazingText",
      "LDA(Latent Dirichlet Allocation)",
      "DeepAR",
      "Linear Learner",
    ],
    correctIndex: 1,
    explanation:
      "**LDA(Latent Dirichlet Allocation)** が SageMaker Built-in のトピックモデル。**NTM(Neural Topic Model)** はニューラル版。BlazingText は Word2Vec / 分類。",
  },
  {
    id: "mls-q12",
    category: "Kinesis",
    difficulty: 3,
    question:
      "リアルタイムストリーミングデータを **自動で S3 / Redshift / Splunk / OpenSearch に配信** する Kinesis サービスとして最も適切なものを選びなさい。",
    choices: [
      "Kinesis Data Streams",
      "Kinesis Data Firehose",
      "Kinesis Data Analytics",
      "Kinesis Video Streams",
    ],
    correctIndex: 1,
    explanation:
      "**Kinesis Data Firehose** は完全マネージドの配信サービス。S3 / Redshift / Splunk / OpenSearch / HTTP エンドポイントへ自動配信。**Data Streams** は生のストリーミング、**Data Analytics** は SQL / Flink。",
  },
  {
    id: "mls-q13",
    category: "形式",
    difficulty: 3,
    question:
      "SageMaker Built-in アルゴリズムが **大規模データの学習で推奨** するファイル形式として最も適切なものを選びなさい。",
    choices: [
      "CSV",
      "JSON",
      "RecordIO(Protobuf)",
      "XML",
    ],
    correctIndex: 2,
    explanation:
      "**RecordIO(Protobuf)** は SageMaker Built-in が推奨する形式。バイナリ + 圧縮で I/O 高速、Pipe Mode 対応。**Parquet** も多くで対応するが、Built-in 標準は RecordIO。",
  },
  {
    id: "mls-q14",
    category: "HPO",
    difficulty: 3,
    question:
      "SageMaker のハイパーパラメータ最適化で、**早期終了 + 並列性** を組み合わせた効率的な手法として最も適切なものを選びなさい。",
    choices: [
      "Grid Search",
      "Random Search",
      "Bayesian Optimization",
      "Hyperband",
    ],
    correctIndex: 3,
    explanation:
      "**Hyperband** は早期終了 + 並列探索を組合わせた手法。Bayesian より大規模並列で有利な場合がある。SageMaker は両方サポート。",
  },
  {
    id: "mls-q15",
    category: "推論",
    difficulty: 3,
    question:
      "推論モデルを **ハードウェア最適化されたバイナリにコンパイル** する SageMaker サービスとして最も適切なものを選びなさい。",
    choices: [
      "SageMaker Neo",
      "SageMaker Clarify",
      "SageMaker Debugger",
      "SageMaker Profiler",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker Neo** はモデルを各種ハードウェア(CPU / GPU / Inferentia / Edge)に最適化コンパイル。推論性能 2 倍 + サイズ 1/10 などが期待できる。",
  },
  {
    id: "mls-q16",
    category: "推論",
    difficulty: 3,
    question:
      "**float32 → int8 に数値精度を下げて推論コスト 2 〜 4 倍削減** する技術の名称として最も適切なものを選びなさい。",
    choices: [
      "Quantization(量子化)",
      "Pruning(剪定)",
      "Distillation(蒸留)",
      "Augmentation(拡張)",
    ],
    correctIndex: 0,
    explanation:
      "**Quantization** は数値精度を下げてサイズ + 計算量を削減。int8 で 4 倍 / 速度 2-3 倍が典型。精度低下 1% 未満が一般的。",
  },
  {
    id: "mls-q17",
    category: "Clarify",
    difficulty: 3,
    question:
      "SageMaker Clarify の **学習前バイアス検出** で評価する代表的な指標として最も適切なものを選びなさい。",
    choices: [
      "MSE",
      "Class Imbalance(CI)・ Difference in Proportions of Labels(DPL)",
      "ROC-AUC",
      "F1",
    ],
    correctIndex: 1,
    explanation:
      "**SageMaker Clarify Pre-training Bias** は CI / DPL / KL / JSD など 21 種の指標を提供。学習前のバイアス検出と学習後の検出は別の指標群。",
  },
  {
    id: "mls-q18",
    category: "Model Monitor",
    difficulty: 3,
    question:
      "SageMaker Model Monitor が **学習データと推論データの分布差** を検出する監視種別として最も適切なものを選びなさい。",
    choices: [
      "Data Quality(Training-Serving Skew)",
      "Model Quality",
      "Bias Drift",
      "Feature Attribution Drift",
    ],
    correctIndex: 0,
    explanation:
      "**Data Quality 監視** が入力特徴量分布の変化(Training-Serving Skew / Covariate Shift)を検出。Model Quality は予測 vs 正解の乖離、Bias Drift はバイアス変化、Feature Attribution Drift は重要度変化。",
  },
  {
    id: "mls-q19",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "SageMaker Training ジョブを **インターネットから完全に切り離し ・ VPC 内のみで実行** する設定として最も適切なものを選びなさい。",
    choices: [
      "Public Access のみで認証強化",
      "Network Isolation = True + VPC Configuration + Private Endpoint",
      "IAM ポリシーのみで制御",
      "MFA 必須化のみ",
    ],
    correctIndex: 1,
    explanation:
      "**Network Isolation = True** + VPC Configuration + Private Endpoint で SageMaker をインターネットから完全切離し可能。データ常駐 ・ コンプライアンス要件で必須。",
  },
  {
    id: "mls-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "MLS-C01 合格後、AWS で全体アーキテクトに進む認定として最も適切なものを選びなさい。",
    choices: [
      "AI Practitioner",
      "ML Engineer Associate",
      "Solutions Architect Professional(SAP-C02)",
      "Cloud Practitioner",
    ],
    correctIndex: 2,
    explanation:
      "MLS-C01 → **AWS Solutions Architect Professional(SAP-C02)** で全体アーキテクトに進むのが王道。三大クラウド ML を揃えるなら **Azure AI-102 / GCP Pro ML Engineer** も視野に。",
  },
];
