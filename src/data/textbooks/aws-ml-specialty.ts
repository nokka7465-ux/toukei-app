import type { Textbook } from "@/types/content";

export const awsMlSpecialtyTextbook: Textbook = {
  levelSlug: "aws-ml-specialty",
  title: "AWS Certified Machine Learning - Specialty(MLS-C01)教科書",
  intro:
    "**AWS Certified Machine Learning - Specialty(MLS-C01)** は、AWS 認定の **Specialty レベル** で **AWS ML 認定の最上位**。**ML Engineer Associate(MLA-C01)の上位** として、**深い数学 ・ アルゴリズム理解 + 設計判断 + 実装ニュアンス** が問われる高度試験です。**シニア ML エンジニア ・ ML 専門コンサルタント ・ 研究開発者** を対象とし、AWS で ML を扱うすべての職種の頂点に位置します。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "MLS-C01 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 AWS ML 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**MLS-C01** は AWS 認定の **Specialty レベル** で、ML / 深層学習 / 統計の **深い専門知識** が問われる最高峰試験。**MLA-C01(Associate)が SageMaker / 実装中心** だったのに対し、**MLS-C01 は数学的背景 ・ アルゴリズム選択 ・ ハイパーパラメータの細かい設計判断** までを測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Amazon Web Services(AWS)",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 65 問 / 180 分",
                "**回答方式**: 単一選択 + 複数選択 + ケーススタディ",
                "**合格スコア**: 750 / 1000",
                "**有効期限**: 3 年",
                "**受験料**: 300 USD(参考)",
                "**前提知識**: ML 実務 1 〜 2 年 + 統計 ・ 線形代数 ・ 微積分の基礎",
              ],
            },
            { type: "h3", text: "AWS ML 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: AI Practitioner(AIF-C01)",
                "**Associate**: ML Engineer Associate(MLA-C01)",
                "**Specialty**: ML Specialty(MLS-C01、本資格)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "公式試験ガイドのドメイン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: Data Engineering**(20%): データ収集 ・ 変換 ・ 保管",
                "**Domain 2: Exploratory Data Analysis**(24%): EDA ・ 特徴量エンジニアリング",
                "**Domain 3: Modeling**(36%): アルゴリズム選択 ・ ハイパーパラメータ ・ 評価",
                "**Domain 4: Machine Learning Implementation and Operations**(20%): デプロイ ・ MLOps ・ セキュリティ",
              ],
            },
            { type: "h3", text: "200 〜 400 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Month 1**: ML 基礎 + 数学(線形代数 / 微積分 / 統計)",
                "**Month 2**: アルゴリズム深掘り(GBDT / NN / 時系列 / クラスタリング / 強化学習)",
                "**Month 3**: SageMaker フル機能 + Built-in アルゴリズム",
                "**Month 4**: AWS データサービス + デプロイ + MLOps",
                "**Month 5**: 模擬試験 + 過去問",
              ],
            },
            {
              type: "intuition",
              title: "MLS-C01 の本質は『数学 + アルゴリズム選択 + AWS 統合』",
              body: "**MLA-C01 が SageMaker 操作とサービス選択中心** だったのに対し、**MLS-C01 は『なぜそのアルゴリズムが最適か』『なぜそのハイパーパラメータか』『なぜそのデータ前処理か』** が問われます。**Coursera ・ Udemy の AWS ML Specialty 講座 + Practice Exam** が王道学習教材。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "ML の数学的基礎",
      overview:
        "Specialty レベルで問われる線形代数 ・ 微積分 ・ 統計を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "線形代数",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ベクトル / 行列の基本演算**",
                "**内積 / 外積 / 転置 / 逆行列**",
                "**固有値 / 固有ベクトル**: PCA の基礎",
                "**特異値分解(SVD)**: 次元削減 / 推薦システム",
                "**ノルム**: L1(マンハッタン)/ L2(ユークリッド)",
                "**コサイン類似度**: テキスト ・ 画像の類似性",
                "**ランク / 線形独立**",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "確率統計",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**確率分布**: 正規 / 二項 / ポアソン / ベータ / ガンマ / 多項",
                "**期待値 / 分散 / 共分散 / 相関**",
                "**条件付確率 / ベイズの定理**",
                "**最尤推定 / MAP 推定**",
                "**仮説検定 / p 値 / 信頼区間**",
                "**多重検定補正**: ボンフェローニ / FDR",
                "**中心極限定理 / 大数の法則**",
                "**ブートストラップ / Cross Validation**",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "微積分と最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**偏微分 / 連鎖律(Chain Rule)**",
                "**勾配降下法 / 確率的勾配降下法(SGD)**",
                "**Momentum / Adam / RMSprop / AdamW**",
                "**Newton 法 / 準 Newton 法(BFGS / L-BFGS)**",
                "**ヘッセ行列 / Jacobian**",
                "**正則化(L1 / L2)**",
                "**凸最適化 / 非凸最適化**",
                "**勾配消失 / 勾配爆発**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "データエンジニアリング",
      overview:
        "AWS のデータ収集 ・ 変換 ・ 保管を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "データ収集とストリーミング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**S3**: データレイクの中核",
                "**Kinesis Data Streams**: リアルタイムストリーミング、保持 1 〜 365 日",
                "**Kinesis Data Firehose**: 自動配信(S3 / Redshift / Splunk / OpenSearch)",
                "**Kinesis Data Analytics**: ストリーム SQL / Apache Flink",
                "**Amazon MSK**: マネージド Kafka",
                "**AWS Glue**: ETL + Data Catalog",
                "**AWS DMS**: DB 移行 + CDC",
                "**Step Functions**: ワークフロー",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "データ形式と保管",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**形式**: CSV / JSON / Parquet / ORC / Avro / TFRecord / RecordIO",
                "**Parquet vs ORC**: 列指向、Parquet がエコシステム広",
                "**RecordIO**: SageMaker Built-in アルゴリズムの推奨形式",
                "**Compression**: gzip / snappy / lz4 / zstd",
                "**S3 Storage Classes**: Standard / IA / Glacier 系の使い分け",
                "**S3 Lifecycle**: 自動移行",
                "**Athena**: S3 上の SQL",
                "**Redshift**: マネージド DWH",
                "**Lake Formation**: データレイク統合",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Feature Store と Glue DataBrew",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Feature Store**: Online + Offline 特徴量",
                "**Online**: 低遅延推論用",
                "**Offline**: 学習用、S3 + Glue Catalog",
                "**Glue DataBrew**: ノーコード ETL(250+ 変換)",
                "**Glue Studio**: GUI / コードベース ETL",
                "**Glue Crawler**: スキーマ自動検出",
                "**Glue Job Bookmark**: 増分処理",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "EDA と特徴量エンジニアリング",
      overview:
        "データ理解 ・ 前処理 ・ 不均衡対策を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "EDA(探索的データ分析)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**数値要約**: mean / median / std / quartile / skewness / kurtosis",
                "**可視化**: ヒストグラム / 箱ひげ / 散布図 / ヒートマップ / バイオリン",
                "**相関分析**: Pearson / Spearman / Kendall",
                "**多重共線性**: VIF",
                "**外れ値検出**: IQR / Z-score / Isolation Forest / Local Outlier Factor",
                "**SageMaker Data Wrangler**: GUI EDA + 前処理",
                "**SageMaker Clarify Pre-training Bias**: バイアス事前検出",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "特徴量エンジニアリング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**スケーリング**: StandardScaler / MinMaxScaler / RobustScaler",
                "**カテゴリエンコーディング**: One-hot / Ordinal / Target / Frequency / Hashing",
                "**変換**: 対数 / Box-Cox / Yeo-Johnson",
                "**ビニング**: 等幅 / 等頻度 / 決定木ベース",
                "**特徴量交差**: 多項式 / 任意関数",
                "**集約特徴量**: Window over time",
                "**テキスト**: TF-IDF / Word2Vec / BERT 埋め込み",
                "**画像拡張**: 反転 / 回転 / 色調整 / Mixup / CutMix",
                "**時系列**: ラグ / 移動平均 / フーリエ展開",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "欠測 ・ 不均衡対策",
          blocks: [
            { type: "h3", text: "欠測対策" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MCAR / MAR / MNAR の判別**",
                "**単一代入**: 平均 / 中央値 / 最頻値",
                "**KNN 代入 / 回帰代入**",
                "**多重代入(Multiple Imputation)**: MICE",
                "**Indicator 列 + 代入**: 欠測情報を残す",
              ],
            },
            { type: "h3", text: "不均衡対策" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Oversampling**: SMOTE / ADASYN",
                "**Undersampling**: ランダム / Tomek Links / NearMiss",
                "**Class Weight 調整**",
                "**Threshold Moving**: 予測閾値の調整",
                "**Cost-Sensitive Learning**",
                "**評価指標**: PR-AUC / F1 / Recall(Accuracy ではなく)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Built-in アルゴリズムと選び分け",
      overview:
        "SageMaker Built-in 30+ アルゴリズムと選択基準を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "教師あり学習 Built-in",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Linear Learner**: 線形 / ロジスティック回帰",
                "**XGBoost**: GBDT、テーブル予測の主力",
                "**Factorization Machines**: 推薦 / 高次元疎データ",
                "**KNN**: 近傍ベース",
                "**Image Classification(ResNet)**",
                "**Object Detection(SSD)**",
                "**Semantic Segmentation**",
                "**BlazingText**: Word2Vec / Text Classification",
                "**Sequence-to-Sequence**: 翻訳 / 要約",
                "**DeepAR**: 時系列予測(RNN)",
                "**Tabular Auto-ML(AutoGluon)**",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "教師なし学習 Built-in",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**K-Means**: クラスタリング",
                "**PCA(Principal Component Analysis)**: 次元削減",
                "**Random Cut Forest(RCF)**: 異常検知",
                "**IP Insights**: アクセスパターン異常検知",
                "**LDA(Latent Dirichlet Allocation)**: トピックモデル",
                "**NTM(Neural Topic Model)**: ニューラルトピックモデル",
                "**Object2Vec**: 埋め込み学習",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "強化学習とフレームワーク",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker RL**: 強化学習(Q-learning / DQN / PPO)",
                "**OpenAI Gym / Vowpal Wabbit / RLlib**",
                "**用途**: ロボット / 自動運転 / 推薦 / 在庫最適化 / ゲーム",
                "**Built-in に加え BYOC**: TensorFlow / PyTorch / MXNet / Hugging Face / scikit-learn / XGBoost フレームワーク",
                "**JumpStart**: 事前学習済モデル + ファインチューニング",
                "**Bedrock 統合**: 生成 AI",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "ハイパーパラメータと評価",
      overview:
        "HPO ・ 評価指標 ・ Cross Validation を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "ハイパーパラメータ最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Grid Search**: 全組合せ網羅、次元の呪い",
                "**Random Search**: 同予算で Grid より発見率高",
                "**Bayesian Optimization**: SageMaker デフォルト",
                "**Hyperband**: 早期終了 + 並列、SageMaker サポート",
                "**ASHA(非同期的成功半減)**",
                "**Warm Start**: 過去 HPO の引継ぎ",
                "**Early Stopping**: 性能向上が見込めない試行を打ち切り",
                "**Population-Based Training(PBT)**",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "評価指標(Specialty レベル)",
          blocks: [
            { type: "h3", text: "分類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Accuracy / Precision / Recall / F1 / F-beta**",
                "**ROC-AUC vs PR-AUC**: 不均衡対応",
                "**Log Loss(Binary / Multi)**: 確率の質",
                "**Macro / Micro / Weighted Average**",
                "**Confusion Matrix**: 混同行列",
                "**Cohen's Kappa**: 一致度",
                "**Matthews Correlation Coefficient(MCC)**",
              ],
            },
            { type: "h3", text: "回帰" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MSE / RMSE / MAE / R² / MAPE / MASE**",
                "**残差プロット / Q-Q プロット**",
                "**Heteroscedasticity 検定**",
                "**正規性検定(Shapiro-Wilk / KS)**",
              ],
            },
            { type: "h3", text: "ランキング / 推薦" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MAP@K / NDCG@K**",
                "**MRR(Mean Reciprocal Rank)**",
                "**Precision/Recall@K**",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Cross Validation",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**K-Fold(k=5/10)**: 標準",
                "**Stratified K-Fold**: 分類でクラス比率を保つ",
                "**Time Series Split**: 時系列で時間順を守る",
                "**Group K-Fold**: 同グループの混在を防ぐ",
                "**Leave-One-Out CV**: 計算コスト高",
                "**Nested CV**: HPO + 評価の両立",
                "**Bias-Variance Tradeoff**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "深層学習の深堀り",
      overview:
        "CNN / RNN / Transformer / 生成モデルの実装ニュアンスを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "CNN と画像処理",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**畳み込み + プーリング + 全結合**",
                "**Padding / Stride / Dilation**",
                "**Batch Normalization / Layer Normalization / Group Normalization**",
                "**Dropout / Stochastic Depth**",
                "**Skip Connection(ResNet)**: 勾配消失対策",
                "**Inception / DenseNet / EfficientNet**",
                "**Transfer Learning**: ImageNet 事前学習",
                "**Vision Transformer(ViT)**: Attention ベース",
                "**Object Detection**: YOLO / Faster R-CNN / DETR",
                "**Segmentation**: U-Net / DeepLab / Mask R-CNN",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "RNN ・ Transformer ・ NLP",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**RNN / LSTM / GRU**: 順次処理",
                "**勾配消失 / 勾配爆発**: ゲート機構の理由",
                "**Seq2Seq**: 翻訳 ・ 要約",
                "**Attention 機構**: Self-Attention / Multi-Head",
                "**Transformer**: 並列処理 + 長距離依存",
                "**BERT / GPT / T5**: 事前学習 + 微調整",
                "**RAG**: Retrieval Augmented Generation",
                "**Tokenization**: BPE / WordPiece / SentencePiece",
                "**Embedding**: Word2Vec / GloVe / fastText / 文埋め込み",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "生成モデル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**GAN(Generative Adversarial Network)**: 生成器 + 識別器",
                "**VAE(Variational Autoencoder)**: 潜在空間",
                "**拡散モデル(Diffusion Model)**: ノイズ除去、画像生成の主役",
                "**Flow-based**: 可逆変換",
                "**Autoregressive**: GPT / PixelCNN",
                "**LLM Fine-tuning**: SFT / RLHF / DPO / LoRA / QLoRA",
                "**Bedrock**: Claude / Titan / Llama / Mistral / Stability AI",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "デプロイと推論最適化",
      overview:
        "推論オプション ・ Inference Recommender ・ コスト最適化を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "推論オプション(Specialty レベル)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Real-time Inference**: 低遅延 ・ 常時稼働",
                "**Serverless Inference**: 自動スケール ・ 従量課金",
                "**Asynchronous Inference**: 大ペイロード ・ 長時間",
                "**Batch Transform**: 大量データ ・ 一括",
                "**Edge(Greengrass / SageMaker Edge)**: IoT 推論",
                "**Multi-Model Endpoint**: 多数モデル同居",
                "**Multi-Container Endpoint**: 異種モデル同時",
                "**Inference Pipeline**: 前処理 + モデル + 後処理",
                "**Production Variants**: A/B テスト",
                "**Shadow Variants**: 本番影響なしテスト",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "推論最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Quantization**: float32 → int8 / int4",
                "**Pruning**: 不要重みの削除",
                "**Distillation**: 大 → 小モデル",
                "**Neo**: モデルの自動コンパイル(ハード最適化)",
                "**Inferentia / Trainium**: AWS 自家製 AI チップ",
                "**TensorRT / ONNX Runtime / Triton**: 推論サーバ",
                "**Model Compilation**: Graph Optimization / Operator Fusion",
                "**Inference Recommender**: インスタンスタイプ推奨",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "Auto Scaling と容量計画",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Auto Scaling Policies**: Target Tracking / Step / Scheduled",
                "**Min / Max Replicas**: スケール範囲",
                "**Cold Start 対策**: Provisioned Concurrency",
                "**Load Testing**: Inference Recommender / 自前ベンチマーク",
                "**Multi-AZ**: 可用性",
                "**Cross-Region**: 災害対策",
                "**Throttling 対策**: Retry with backoff",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "MLOps と本番運用",
      overview:
        "Pipelines ・ Model Monitor ・ セキュリティを Specialty レベルで整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "SageMaker Pipelines 高度",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ProcessingStep / TrainingStep / TuningStep / ConditionStep**",
                "**Lambda / Callback / EMR / Notebook Steps**",
                "**Caching**: 同じステップ ・ 同じ入力で結果再利用",
                "**Pipeline Parameters**: 動的入力",
                "**Conditional Branching**",
                "**Lineage Tracking**: データ → モデルの来歴",
                "**SageMaker Projects**: テンプレート化 MLOps",
                "**SageMaker Studio + Git**: ブランチベース開発",
                "**MLflow on SageMaker**: 実験管理",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Model Monitor 高度",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Quality**: 統計値変化(欠測 / 範囲 / 分布)",
                "**Model Quality**: 予測 vs 正解の乖離",
                "**Bias Drift**: 特定グループへのバイアス変化",
                "**Feature Attribution Drift**: SHAP ベース重要度変化",
                "**Baseline 設定**: 学習データの統計",
                "**Schedule 監視**: 定期実行",
                "**CloudWatch + EventBridge**: アラート + 自動対応",
                "**Human-in-the-loop(A2I)**: 低信頼予測の人間レビュー",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "セキュリティ ・ 責任ある AI",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Clarify**: バイアス + 説明可能性",
                "**Differential Privacy**: 差分プライバシー",
                "**Federated Learning**: 連合学習",
                "**Homomorphic Encryption**: 準同型暗号",
                "**VPC + PrivateLink**: ネットワーク分離",
                "**Network Isolation = True**: コンテナをインターネットから切離し",
                "**KMS / Secrets Manager**: 暗号鍵 / 機密情報",
                "**IAM**: 最小権限 ・ Execution Role",
                "**Macie**: S3 内の個人情報自動検出",
                "**Bedrock Guardrails**: 生成 AI 安全制御",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策と問題演習",
      overview:
        "Specialty レベルの試験戦略を整理します。",
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
                "**第 2 章**: 線形代数 ・ 統計 ・ 微積分の基礎",
                "**第 3 章**: Kinesis / Glue / Feature Store / Parquet vs RecordIO",
                "**第 4 章**: EDA / 特徴量エンジニアリング / 不均衡対策(SMOTE 等)",
                "**第 5 章**: Built-in 30+ アルゴリズム + 選び分け",
                "**第 6 章**: HPO(Bayesian / Hyperband)/ 評価指標(分類 / 回帰 / ランキング)",
                "**第 7 章**: CNN / RNN / Transformer / 生成モデル",
                "**第 8 章**: 推論 5 種 / Quantization / Distillation / Inferentia",
                "**第 9 章**: Pipelines / Model Monitor / Clarify / VPC + Network Isolation",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**65 問 / 180 分** = 1 問 約 3 分(MLA より長い)",
                "**ケーススタディ**: 複雑な要件 + 制約 + 最適選択",
                "**最も○○な答え** を選ぶ問題が中心",
                "**消去法**: 明らかに不適切な選択肢から除外",
                "**Practice Exam**(AWS 公式)+ 模擬試験 サイト で出題傾向把握",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "MLS-C01 合格 → AWS で ML / AI スペシャリストの最高峰。次は **AWS Solutions Architect Professional(SAP-C02)** で全体アーキテクトに進む、または **三大クラウド ML を揃える** 道があります。本サイトの[Azure AI-102](/certs/azure-ai-102) ・ [GCP Professional ML Engineer](/certs/gcp-ml-engineer)も。",
            },
            {
              type: "practical",
              title: "MLS-C01 のキャリア活用",
              body: "MLS-C01 は **AWS で ML を扱う技術者の頂点認定**。**シニア ML エンジニア ・ ML 専門コンサルタント ・ AI ベンチャー CTO** での評価が極めて高い。**AI Practitioner → MLA-C01 → MLS-C01** のフルパスは AWS ML スペシャリストとしての最強の証明です。",
            },
          ],
        },
      ],
    },
  ],
};
