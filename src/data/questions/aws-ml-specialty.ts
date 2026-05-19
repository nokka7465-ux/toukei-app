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
  {
    id: "mls-q21",
    category: "Built-in",
    difficulty: 3,
    question:
      "SageMaker Built-in **BlazingText** が **特化するタスク** を選びなさい。",
    choices: [
      "画像分類",
      "Word2Vec ・ テキスト分類(高速 GPU 実装)",
      "時系列予測",
      "強化学習",
    ],
    correctIndex: 1,
    explanation:
      "**BlazingText** は **Word2Vec(skip-gram / cbow)とテキスト分類の高速 GPU 実装**。fastText 互換 + 大規模コーパス学習が高速。時系列は DeepAR、画像は IC、強化学習は RL Estimator。",
  },
  {
    id: "mls-q22",
    category: "推論",
    difficulty: 3,
    question:
      "SageMaker の **5 つの推論パターン** のうち、**長時間推論(数十秒〜15 分) ・ 大ペイロード** に最適なものを選びなさい。",
    choices: [
      "Real-time Inference",
      "Serverless Inference",
      "Asynchronous Inference",
      "Batch Transform",
    ],
    correctIndex: 2,
    explanation:
      "**Asynchronous Inference** は **長時間推論(最大 15 分) ・ 大ペイロード(最大 1GB)** 向け。S3 経由でリクエスト / 結果を授受。Real-time は短時間 ・ 低レイテンシ、Batch Transform は静止データの一括推論。",
  },
  {
    id: "mls-q23",
    category: "推論",
    difficulty: 2,
    question:
      "SageMaker **Serverless Inference** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "コールドスタートあり",
      "アイドル時 0 円(リクエストがない時間は課金なし)",
      "GPU エンドポイントを 0 から自動スケール可能",
      "間欠的トラフィックに最適",
    ],
    correctIndex: 2,
    explanation:
      "**Serverless Inference は CPU のみ**(2024 時点)。GPU は Real-time / Asynchronous で利用。コールドスタート ・ アイドル時 0 円 ・ 間欠的トラフィック向きが正しい特徴。",
  },
  {
    id: "mls-q24",
    category: "Bias / Fairness",
    difficulty: 3,
    question:
      "SageMaker Clarify が **学習前のデータバイアス** を検出するために計算する指標として **代表的なもの** を選びなさい。",
    choices: [
      "Class Imbalance(CI)・ Difference in Proportions of Labels(DPL)",
      "Mean Squared Error",
      "Cross-Entropy Loss",
      "AUC-ROC",
    ],
    correctIndex: 0,
    explanation:
      "**Clarify Pre-training Bias 指標**: **Class Imbalance(CI)・ Difference in Proportions of Labels(DPL)・ KL Divergence ・ Total Variation Distance** など。Post-training は予測差分系。",
  },
  {
    id: "mls-q25",
    category: "Pipelines",
    difficulty: 3,
    question:
      "SageMaker **Pipelines** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "Python SDK で DAG を定義",
      "Step Type(Processing / Training / Tuning / Model / Transform 等)を組合せ",
      "Lineage 自動追跡(Step / Artifact / Metadata)",
      "Apache Airflow と完全互換でそのまま DAG をインポートできる",
    ],
    correctIndex: 3,
    explanation:
      "**SageMaker Pipelines は SageMaker 専用 DAG**(Step Functions ベース)。Airflow 互換性はない。**MWAA や Step Functions から SageMaker Pipelines を呼ぶ** のが連携パターン。",
  },
  {
    id: "mls-q26",
    category: "Feature Store",
    difficulty: 3,
    question:
      "SageMaker Feature Store の **Online / Offline Store** の使い分けとして最も適切なものを選びなさい。",
    choices: [
      "Online は推論時の低レイテンシ取得、Offline は学習 ・ バッチ推論用に S3 / Iceberg 形式で保管",
      "Online は学習用、Offline はリアルタイム推論用",
      "両者は完全同一で名前だけ異なる",
      "Online は Glacier 階層、Offline は Standard 階層",
    ],
    correctIndex: 0,
    explanation:
      "**Online Store**(DynamoDB ベース)= **推論時の低レイテンシ Feature 取得**。**Offline Store**(S3 + Iceberg / Parquet)= **学習 ・ バッチ ・ Time-travel** 用。Train/Serve スキュー回避が最大の利点。",
  },
  {
    id: "mls-q27",
    category: "Multi-Model Endpoint",
    difficulty: 3,
    question:
      "**多数の小型モデル(顧客ごとなど)を 1 つのエンドポイントでホストしコスト削減** したい。最適な機能を選びなさい。",
    choices: [
      "Multi-Model Endpoint(MME)",
      "Multi-Container Endpoint",
      "Inference Pipeline",
      "Production Variant",
    ],
    correctIndex: 0,
    explanation:
      "**Multi-Model Endpoint(MME)** は **同一フレームワークの多数モデルを 1 エンドポイントに集約** + 動的ロード。**Multi-Container は異種フレームワーク併用、Inference Pipeline は前処理→推論→後処理の連結**。",
  },
  {
    id: "mls-q28",
    category: "Distillation",
    difficulty: 3,
    question:
      "**Knowledge Distillation(知識蒸留)** の説明として最も適切なものを選びなさい。",
    choices: [
      "大モデル(Teacher)の出力を使って小モデル(Student)を学習し、軽量化と精度を両立",
      "モデル重みを int8 / int4 に量子化する",
      "学習データから不要列を削除する",
      "GPU メモリを最適化する",
    ],
    correctIndex: 0,
    explanation:
      "**Distillation** は **Teacher の Soft Label(確率分布)で Student を学習**、Student は小型ながら Teacher 並みの精度を獲得。**Quantization は重みのビット数削減** で異なる手法(両者併用可)。",
  },
  {
    id: "mls-q29",
    category: "RecordIO",
    difficulty: 3,
    question:
      "SageMaker Built-in アルゴリズム の **多くで推奨される** バイナリ入力形式を選びなさい。",
    choices: [
      "RecordIO-protobuf",
      "Apache Parquet",
      "TFRecord",
      "ORC",
    ],
    correctIndex: 0,
    explanation:
      "**RecordIO-protobuf** は SageMaker Built-in(Linear Learner / FM / KNN / NTM など)で推奨されるバイナリ形式。S3 → SageMaker への高速読込 + Pipe Mode 対応。",
  },
  {
    id: "mls-q30",
    category: "監視",
    difficulty: 3,
    question:
      "SageMaker Model Monitor の **4 種類の監視** として **誤っているもの** を選びなさい。",
    choices: [
      "Data Quality(欠損 ・ 範囲外 ・ 型不一致)",
      "Model Quality(精度劣化、ラベル必要)",
      "Bias Drift(属性別バイアスの変化)",
      "Hardware Drift(GPU 故障率の追跡)",
    ],
    correctIndex: 3,
    explanation:
      "**Model Monitor の 4 種**: Data Quality / Model Quality / Bias Drift / Feature Attribution Drift。**Hardware は CloudWatch の管轄** で Model Monitor の対象外。",
  },
  { id: "mls-q31", category: "Built-in", difficulty: 3, question: "SageMaker Built-in **Object2Vec** の用途として最も適切なものを選びなさい。", choices: ["汎用 Entity Embedding(ユーザ ・ 商品 ・ 文書ペアの類似度学習)", "画像分類", "音声認識", "時系列予測"], correctIndex: 0, explanation: "**Object2Vec**: ペアデータ(user-item / sentence-sentence)から汎用埋め込み生成。推薦システム ・ 文章類似度 ・ Re-ranking など。" },
  { id: "mls-q32", category: "Built-in", difficulty: 3, question: "SageMaker Built-in **Sequence-to-Sequence(seq2seq)** の典型タスクとして最も適切なものを選びなさい。", choices: ["機械翻訳 ・ テキスト要約 ・ 音声認識", "画像分類", "クラスタリング", "回帰のみ"], correctIndex: 0, explanation: "**seq2seq**: Encoder-Decoder + Attention。翻訳 / 要約 / 音声認識 / コード生成。**現代では Transformer に置換が主流**。" },
  { id: "mls-q33", category: "Built-in", difficulty: 3, question: "SageMaker Built-in **IP Insights** の用途として最も適切なものを選びなさい。", choices: ["IP アドレス ・ User の関連性異常検知(不正検知)", "画像認識", "翻訳", "次元削減"], correctIndex: 0, explanation: "**IP Insights**: ユーザ × IP の組み合わせ統計を学習 → 異常な組合せ(不正ログイン / Bot)検知。" },
  { id: "mls-q34", category: "Hyperband", difficulty: 3, question: "**Hyperband** の特徴として最も適切なものを選びなさい。", choices: ["Successive Halving + 多 Bracket で並列に粗探索 + 精密探索", "Bayesian と同じ", "Grid Search の高速版", "ランダム"], correctIndex: 0, explanation: "**Hyperband**: 多くの構成を低リソースで早期打切 → 残ったものを高リソースで精密評価。Bayesian よりも長時間学習の HPO で効率。SageMaker AMT で対応。" },
  { id: "mls-q35", category: "SMOTE", difficulty: 3, question: "**SMOTE(Synthetic Minority Over-sampling Technique)** の仕組みとして最も適切なものを選びなさい。", choices: ["少数クラスの最近傍点間で線形補間し新サンプル生成", "全サンプル複製", "多数クラスを削除", "ラベル反転"], correctIndex: 0, explanation: "**SMOTE**: 少数クラスから k-NN で近傍を選び、その間に線形補間で合成サンプル生成。**ADASYN** は境界近傍を重視した変種。**imbalanced-learn** で利用。" },
  { id: "mls-q36", category: "評価", difficulty: 3, question: "**PR-AUC**(Precision-Recall AUC)が **ROC-AUC** より好まれる場面として最も適切なものを選びなさい。", choices: ["極端なクラス不均衡(陽性が 1% 未満)", "バランスデータ", "回帰タスク", "クラスタリング"], correctIndex: 0, explanation: "**PR-AUC**: 不均衡で TN が大量だと ROC-AUC が楽観的になる → PR は正例のみフォーカス。**陽性 1% 未満の不正検知 / 医療診断** に。" },
  { id: "mls-q37", category: "Quantization", difficulty: 3, question: "**Post-Training Quantization(PTQ)の INT8** で典型的に発生する問題として最も適切なものを選びなさい。", choices: ["精度劣化(特に Outlier 多い層)", "学習時間増加", "GPU が使えない", "デプロイ不可"], correctIndex: 0, explanation: "**PTQ INT8**: 32 bit → 8 bit 量子化で **精度劣化**(Outlier 含む層で顕著)。**Calibration**(代表データで scale 推定)・ **GPTQ / AWQ / SmoothQuant** で改善。" },
  { id: "mls-q38", category: "Deployment", difficulty: 3, question: "Real-time Endpoint の **Serverless 推論モード** の特徴として最も適切なものを選びなさい。", choices: ["アイドル時 0 円 + 自動スケール + 間欠的トラフィックに最適 + GPU 非対応", "Always-on", "GPU 必須", "Batch 専用"], correctIndex: 0, explanation: "**Serverless Inference**: アイドル時 0 円 + 自動スケール 0 → N + コールドスタートあり + **CPU のみ**(GPU は Real-time / Async)。Lambda 風モデル。" },
  { id: "mls-q39", category: "FlashAttention", difficulty: 3, question: "**FlashAttention** が **通常の Attention** より優れる主な点として最も適切なものを選びなさい。", choices: ["メモリ I/O 削減で実時間高速化(計算量同じ)", "計算量を O(n) に削減", "GPU 不要", "精度向上"], correctIndex: 0, explanation: "**FlashAttention**(2022): O(n²) 計算量は同じだが GPU SRAM とのメモリ I/O を最小化 → 実時間 2-4× 高速。長系列学習で有効。v2 / v3 と進化。" },
  { id: "mls-q40", category: "Distributed", difficulty: 3, question: "**SageMaker Model Parallel(SMP)Library** の用途として最も適切なものを選びなさい。", choices: ["大規模モデル(数百億 ・ 兆パラメータ)を GPU 間で分割学習", "データ並列", "GUI", "DB 接続"], correctIndex: 0, explanation: "**SMP**: Tensor Parallel + Pipeline Parallel + Sharded Data Parallel(ZeRO 風)で大規模モデル学習。Llama / GPT クラスを SageMaker で学習する基盤。" },
  { id: "mls-q41", category: "RecordIO", difficulty: 3, question: "**RecordIO + Pipe Mode** の利点として最も適切なものを選びなさい。", choices: ["S3 からストリーミングでデータ読込 → EBS 不要 + I/O 高速", "全データを EBS にコピー", "GUI", "Lambda 必須"], correctIndex: 0, explanation: "**Pipe Mode**: S3 → Training コンテナにストリーミング(Linux Pipe 経由)。**RecordIO Protobuf** との組合せで I/O 効率最大化。**File Mode**(全 download)より高速かつ低 EBS。" },
  { id: "mls-q42", category: "EI", difficulty: 3, question: "**Elastic Inference(EI)** が **GPU フルインスタンス** より優れる点として最も適切なものを選びなさい。", choices: ["CPU インスタンスに小さな GPU アクセラレータをアタッチ(コスト 75% 削減)", "高精度", "学習対応", "Always-on"], correctIndex: 0, explanation: "**EI**: CPU インスタンス + 小規模 GPU(EIA1 ~ EIA2)を Attach。**推論専用 ・ GPU 性能フル不要時にコスト最適化**。**Inferentia 代替**(現在は Inferentia が主流)。" },
  { id: "mls-q43", category: "Differential Privacy", difficulty: 3, question: "**Differential Privacy(DP)** の概念として最も適切なものを選びなさい。", choices: ["個人データ 1 件の有無で集計結果が ε 以下しか変わらない保証", "暗号化のみ", "アクセス制御", "認証"], correctIndex: 0, explanation: "**Differential Privacy**: ノイズ追加で個人特定不可能化。**DP-SGD**(学習時にノイズ付加)・ **PATE**(教師アンサンブル)。**ε(epsilon)** が privacy budget。" },
  { id: "mls-q44", category: "Federated Learning", difficulty: 3, question: "**Federated Learning** の特徴として最も適切なものを選びなさい。", choices: ["生データを集約せず各クライアントで学習 → 重みのみ集約", "全データを 1 サーバへ", "GPU 共有", "暗号化のみ"], correctIndex: 0, explanation: "**Federated Learning**: スマホ / 病院などのクライアント上で学習 → モデル重みのみ中央集約。**プライバシ + データ局所性** が利点。Google Keyboard / 医療 ML で実用。" },
  { id: "mls-q45", category: "Adversarial", difficulty: 3, question: "**敵対的サンプル(Adversarial Example)** の代表的な攻撃手法として最も適切なものを選びなさい。", choices: ["FGSM / PGD(微小摂動で誤分類誘発)", "SQL Injection", "DDoS", "認証回避"], correctIndex: 0, explanation: "**Adversarial Attack**: FGSM(Fast Gradient Sign)・ PGD(Projected GD)・ C&W。人間には見えない摂動で誤分類。**Adversarial Training** で防御。" },
  { id: "mls-q46", category: "Continual Learning", difficulty: 3, question: "**継続学習** で **Catastrophic Forgetting** を防ぐ手法として **誤っているもの** を選びなさい。", choices: ["EWC(Elastic Weight Consolidation)", "Replay Buffer", "LoRA Adapter", "Random Initialization"], correctIndex: 3, explanation: "**Catastrophic Forgetting 対策**: EWC(重要重みを penalty)・ Replay(旧データ混入)・ LoRA(凍結 + Adapter)・ Knowledge Distillation。Random Init は逆効果。" },
  { id: "mls-q47", category: "Fairness", difficulty: 3, question: "**Equalized Odds** の定義として最も適切なものを選びなさい。", choices: ["TPR と FPR が両グループで等しい", "Selection rate が等しい", "Precision が等しい", "AUC が等しい"], correctIndex: 0, explanation: "**Equalized Odds**: 属性 A に対して TPR / FPR がどちらも等しい。**Demographic Parity**(選択率均等)よりも厳しい条件。**Equal Opportunity** は TPR のみ。" },
  { id: "mls-q48", category: "Production", difficulty: 3, question: "**A/B テスト** で **Shadow Mode** の特徴として最も適切なものを選びなさい。", choices: ["新モデルへ並行に投入 → 応答は旧モデルから返す(影響なし負荷試験)", "100% 新モデル", "新モデルを停止", "Auto Scaling"], correctIndex: 0, explanation: "**Shadow Mode**: 本番トラフィックを新モデルにコピー(応答は旧から)。**性能 ・ レイテンシ ・ エラー率を本番影響なしで検証**。Canary の前段で利用。" },
  { id: "mls-q49", category: "コスト", difficulty: 3, question: "SageMaker での **GPU 利用コスト最適化** として **誤っているもの** を選びなさい。", choices: ["Spot Training(最大 90% 割引)", "Inferentia / Graviton 推論", "Multi-Model Endpoint で集約", "全 instance を p4d.24xlarge"], correctIndex: 3, explanation: "**コスト最適化**: Spot Training / Inferentia / Graviton(ARM、20% 安)・ MME。**最大 GPU 常時稼働はコスト爆発**。**Sagemaker Savings Plans** も併用。" },
  { id: "mls-q50", category: "次のステップ", difficulty: 1, question: "MLS-C01 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["SAP-C02(SA Professional)or 三大クラウド ML(Azure DP-100 / GCP Pro MLE)横展開", "Cloud Practitioner", "ITパスポート", "再受験"], correctIndex: 0, explanation: "**MLS-C01 → SAP-C02(SA Pro)・ DOP-C02(DevOps Pro)・ 三大クラウド ML 揃え**(Azure DP-100 / GCP Pro MLE)。**論文 / 学会発表で研究者方向** も。" },
];
