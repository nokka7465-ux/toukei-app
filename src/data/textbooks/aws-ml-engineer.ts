import type { Textbook } from "@/types/content";

export const awsMlEngineerTextbook: Textbook = {
  levelSlug: "aws-ml-engineer",
  title: "AWS Certified Machine Learning Engineer Associate(MLA-C01)教科書",
  intro:
    "**AWS Certified Machine Learning Engineer ─ Associate(MLA-C01)** は、AWS が 2024 年に正式リリースした **ML Engineer 向けの Associate レベル** 認定。**AWS AI Practitioner(AIF-C01)の上位** として、ML パイプラインの **データ準備 ・ 特徴量エンジニアリング ・ モデル学習 ・ デプロイ ・ 監視 ・ MLOps** までを実装できる技術者を認定します。**ML Specialty(MLS-C01)** より入門的で、AWS で本格的に ML を扱う技術者の標準資格として位置付けられます。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "MLA-C01 ─ 試験の全体像",
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
              text: "**MLA-C01** は AWS 認定の **Associate レベル** で、**ML / 生成 AI を業務で実装する技術者** を対象とします。**AI Practitioner(AIF-C01、Foundational)の上位** で、**ML Specialty(MLS-C01、Specialty)** よりは入門的という中間に位置します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Amazon Web Services(AWS)",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 65 問 / 130 分",
                "**回答方式**: 単一選択 + 複数選択 + 順序付け + ケーススタディ",
                "**合格スコア**: 720 / 1000",
                "**有効期限**: 3 年",
                "**受験料**: 150 USD(参考)",
                "**前提知識**: SageMaker / Python / SQL / 統計の基礎",
              ],
            },
            { type: "h3", text: "AWS の ML / AI 認定階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: AI Practitioner(AIF-C01)",
                "**Associate**: ML Engineer(MLA-C01、本資格)",
                "**Specialty**: ML Specialty(MLS-C01)",
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
                "**Domain 1: ML 用データ準備**(28%): S3 / Glue / Data Wrangler / 特徴量エンジニアリング",
                "**Domain 2: ML モデル開発**(26%): SageMaker / 学習 / ハイパーパラメータチューニング / 評価",
                "**Domain 3: ML ワークフローのデプロイとオーケストレーション**(22%): Endpoints / Pipelines / Step Functions / コンテナ",
                "**Domain 4: ML ソリューションのモニタリングと保守 / セキュリティ**(24%): Model Monitor / Clarify / 監査 / コスト",
              ],
            },
            { type: "h3", text: "150 〜 250 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1 〜 2**: AWS 基礎(IAM / S3 / VPC)+ AI Practitioner 範囲復習",
                "**Week 3 〜 4**: SageMaker のすべて(Studio / Pipelines / Endpoints)",
                "**Week 5**: データ準備(Glue / Athena / Data Wrangler / Feature Store)",
                "**Week 6**: 学習 + ハイパーパラメータ + Built-in アルゴリズム",
                "**Week 7**: 推論デプロイ(Real-time / Batch / Async / Serverless / Edge)",
                "**Week 8**: モニタリング + Clarify + コスト最適化",
                "**Week 9**: 生成 AI(Bedrock / Q)概要",
                "**Week 10**: 模擬試験 + 過去問",
              ],
            },
            {
              type: "intuition",
              title: "AWS Skill Builder + 実機ハンズオンが王道",
              body: "**AWS Skill Builder** に MLA-C01 専用ラーニングパスが無料で公開されています。**AWS Free Tier** で SageMaker Studio Lab(完全無料)or Free Tier 内の SageMaker でハンズオンが可能。**実機で SageMaker Pipelines + Endpoints + Model Monitor** を作るのが理解の近道。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "ML の基礎と AWS データサービス",
      overview:
        "ML / DL / 生成 AI の基礎と、AWS のデータサービスを整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "ML の基礎(MLA レベル)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**3 つの学習方式**: 教師あり / なし / 強化学習",
                "**主要モデル**: 線形回帰 / 決定木 / GBDT / SVM / NN / CNN / Transformer",
                "**評価指標**: 分類(Accuracy / Precision / Recall / F1 / ROC-AUC / PR-AUC)・ 回帰(MSE / RMSE / MAE / R²)",
                "**過学習対策**: 正則化 / Dropout / Early Stopping / 交差検証 / データ拡張",
                "**バイアス・バリアンス分解**",
                "**ハイパーパラメータ vs パラメータ**",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "AWS のデータサービス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**S3**: オブジェクトストレージ、ML ワークフローの中核",
                "**S3 Express One Zone**: ms 級レイテンシ、ML 学習向け",
                "**Athena**: S3 上の SQL クエリ(サーバレス)",
                "**Glue**: マネージド ETL + Data Catalog",
                "**Glue DataBrew**: ノーコードデータ準備",
                "**EMR**: Hadoop / Spark / Presto",
                "**Kinesis**: ストリーミングデータ",
                "**Lake Formation**: データレイク管理",
                "**Redshift**: DWH",
                "**Aurora ・ DynamoDB ・ DocumentDB**: トランザクション系",
                "**OpenSearch**: 検索 + 分析",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "データ品質と前処理",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**欠測処理**: 削除 / 平均 / 中央値 / 多重代入",
                "**外れ値検出**: IQR / Z スコア / Isolation Forest",
                "**スケーリング**: 標準化 / Min-Max / ロバストスケーリング",
                "**カテゴリエンコーディング**: One-hot / Target / Ordinal",
                "**不均衡データ**: SMOTE / オーバーサンプリング / アンダーサンプリング / クラス重み",
                "**特徴量エンジニアリング**: ビニング / 変換 / 交互作用 / 集約",
                "**SageMaker Data Wrangler**: GUI でこれらを実行",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Amazon SageMaker の全体像",
      overview:
        "SageMaker のサブサービスを整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "SageMaker の主要コンポーネント",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Studio**: 統合開発環境(JupyterLab ベース)",
                "**SageMaker Studio Lab**: 完全無料の学習環境(Studio とは別)",
                "**SageMaker Canvas**: ノーコード ML",
                "**SageMaker Autopilot**: AutoML",
                "**SageMaker Ground Truth**: ラベル付け管理(Plus は完全マネージド)",
                "**SageMaker Data Wrangler**: データ準備",
                "**SageMaker Feature Store**: 特徴量管理",
                "**SageMaker Pipelines**: ML パイプライン",
                "**SageMaker Model Registry**: モデル管理",
                "**SageMaker Endpoints**: 推論デプロイ",
                "**SageMaker Model Monitor**: ドリフト検出",
                "**SageMaker Clarify**: バイアス検出 + 説明可能性",
                "**SageMaker JumpStart**: 学習済モデル + 微調整テンプレート",
                "**SageMaker MLflow**: マネージド MLflow",
                "**SageMaker HyperPod**: 大規模分散学習向け",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "計算リソース",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**インスタンスタイプ**: ml.t / m / c / r / p / g / inf / trn",
                "**Inferentia(inf)**: AWS 自家製の推論専用 AI チップ",
                "**Trainium(trn)**: AWS 自家製の学習専用 AI チップ",
                "**Spot Training**: 中断耐性ある学習で 90% コスト削減",
                "**Managed Warm Pools**: 学習ジョブの起動高速化",
                "**Reserved / Savings Plans**: 長期コミットで割引",
                "**Distributed Training**: Data Parallel / Model Parallel",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "学習とハイパーパラメータチューニング",
      overview:
        "Built-in アルゴリズム ・ BYOC ・ HPO を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "学習方式の選択",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Built-in アルゴリズム**: XGBoost / Linear Learner / DeepAR / Random Cut Forest / Object Detection / Image Classification など 30 種以上",
                "**スクリプトモード**: Python スクリプトで TensorFlow / PyTorch / Hugging Face を使用",
                "**Bring Your Own Container(BYOC)**: 任意のコンテナで学習",
                "**SageMaker JumpStart**: 学習済モデルからの微調整",
                "**AutoML(Autopilot)**: 自動最適化",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "ハイパーパラメータ最適化(HPO)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Grid Search / Random Search**: 古典的",
                "**Bayesian Optimization**: SageMaker のデフォルト、過去試行から次を予測",
                "**Hyperband**: 早期終了 + 並列探索",
                "**ASHA(非同期的成功半減)**: 並列性高い大規模探索",
                "**Warm Start**: 過去の HPO 結果を引き継ぐ",
                "**Early Stopping**: 性能向上が見込めない試行を打ち切り",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "実験管理とトレーサビリティ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Experiments**: 試行記録(廃止予定、MLflow 推奨)",
                "**SageMaker MLflow**: マネージド MLflow、現在の標準",
                "**Lineage Tracking**: モデル → データ → コードの来歴",
                "**Debugger**: 学習中の異常検出",
                "**Profiler**: GPU / CPU 利用率の可視化",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "推論デプロイ",
      overview:
        "Real-time / Batch / Async / Serverless / Edge を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "推論オプションの選び分け",
          blocks: [
            {
              type: "def",
              title: "推論オプション 5 種",
              body: "**1. Real-time Inference**: 低遅延 ・ 常時稼働。Web/モバイルアプリ向け。\n\n**2. Serverless Inference**: 自動スケール ・ 従量課金。低 / 不定期トラフィック向け。\n\n**3. Asynchronous Inference**: 大ペイロード ・ 長時間処理(最大 1 時間)。\n\n**4. Batch Transform**: 大量データの一括推論、コスト最小。\n\n**5. Edge**: SageMaker Edge Manager でエッジデバイス推論。",
            },
            { type: "h3", text: "デプロイのベストプラクティス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Multi-Model Endpoint(MME)**: 1 エンドポイントに多数モデル同居、コスト効率良",
                "**Multi-Container Endpoint**: 複数コンテナ並列",
                "**Inference Pipelines**: 前処理 → モデル → 後処理を 1 エンドポイントで",
                "**Shadow Variant**: 本番影響なしで新モデル試験",
                "**A/B テスト(Production Variant)**: 重み付けトラフィック分散",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "コンテナとカスタマイズ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pre-built Containers**: TensorFlow / PyTorch / MXNet / Hugging Face / scikit-learn など",
                "**BYOC(Bring Your Own Container)**: 任意の Docker イメージ",
                "**Inference Recommender**: インスタンスタイプ ・ コスト性能の自動推奨",
                "**ONNX**: フレームワーク間の中間表現",
                "**Neo**: モデルの自動コンパイル(ハード最適化)",
                "**TorchServe / TensorFlow Serving**: 推論サーバ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "MLOps とパイプライン",
      overview:
        "SageMaker Pipelines ・ Model Registry ・ CI/CD を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "SageMaker Pipelines",
          blocks: [
            {
              type: "p",
              text: "**SageMaker Pipelines** は ML ワークフローのオーケストレーションツール。Kubeflow Pipelines に対応する位置付けで、**前処理 → 学習 → 評価 → モデル登録 → デプロイ** をコードで定義し、自動実行できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ProcessingStep**: 前処理ジョブ",
                "**TrainingStep**: 学習ジョブ",
                "**TuningStep**: HPO",
                "**ModelStep**: モデル登録",
                "**TransformStep**: バッチ推論",
                "**ConditionStep**: 分岐制御",
                "**LambdaStep**: AWS Lambda 呼出",
                "**CallbackStep**: 外部システムとの統合",
                "**EMRStep / NotebookStep**",
                "**Caching**: 同じステップの再実行を回避",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "オーケストレーション統合",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AWS Step Functions**: より汎用的なステートマシン",
                "**Amazon MWAA**: マネージド Apache Airflow",
                "**Amazon EventBridge**: イベント駆動",
                "**AWS CodePipeline**: CI/CD",
                "**AWS CodeBuild**: ビルド",
                "**Git 統合**: GitHub / GitLab / CodeCommit",
                "**SageMaker Projects**: テンプレート化された MLOps プロジェクト",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Model Registry とモデル昇格",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Model Package Group**: モデルファミリ",
                "**Model Package**: 学習済モデルのバージョン",
                "**Approval Status**: PendingManualApproval / Approved / Rejected",
                "**Stage**: dev / test / prod のステージング",
                "**自動昇格**: 評価指標が閾値を満たす場合に Approved",
                "**Lineage**: データ → コード → モデル → デプロイの追跡",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "モニタリングとデータドリフト",
      overview:
        "Model Monitor ・ Clarify ・ メトリクスを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "SageMaker Model Monitor",
          blocks: [
            {
              type: "def",
              title: "4 種のドリフト監視",
              body: "**1. Data Quality**: 入力データの統計的変化(欠測 ・ 範囲 ・ 分布)\n\n**2. Model Quality**: 予測値 vs 正解の乖離(ground truth が必要)\n\n**3. Bias Drift**: 特定グループへのバイアス変化\n\n**4. Feature Attribution Drift**: 特徴量の重要度変化(SHAP ベース)",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Baseline**: 学習データの統計を基準として保存",
                "**Constraints / Statistics**: 期待される範囲 ・ 統計",
                "**Schedule**: 定期実行(時間 ・ 日)",
                "**Alarms**: CloudWatch でアラーム設定",
                "**自動対応**: EventBridge → Lambda → 再学習トリガー",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "SageMaker Clarify",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**バイアス検出**: 学習前(Pre-training)・ 学習後(Post-training)",
                "**バイアス指標**: Class Imbalance / DPL / KL / Disparate Impact など 21 種",
                "**説明可能性**: SHAP ベースの特徴量重要度",
                "**Partial Dependence Plots**: 個別特徴量の影響",
                "**Online Explainability**: 推論時のリアルタイム説明",
                "**LLM 評価**: 生成 AI の品質 ・ 安全性評価",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "ログ ・ 監査 ・ コスト管理",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**CloudWatch Logs / Metrics**: ログ + メトリクス",
                "**CloudTrail**: API 呼出監査",
                "**X-Ray**: 分散トレーシング",
                "**Cost Explorer + Budgets**: コスト可視化 + アラート",
                "**Tags**: リソース分類 + コスト配賦",
                "**Compute Optimizer**: インスタンス最適化推奨",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "セキュリティとコンプライアンス",
      overview:
        "ML ワークロード固有のセキュリティを整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "ML 特有のセキュリティ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**IAM**: 最小権限、SageMaker Execution Role",
                "**KMS**: モデル / データの暗号化",
                "**VPC + Private Endpoint**: SageMaker をプライベート接続",
                "**Network Isolation**: 学習コンテナをインターネットから切離し",
                "**Secrets Manager**: API キー ・ DB パスワード",
                "**S3 Bucket Policies + Object Lock**: データ保護",
                "**Macie**: S3 内の個人情報自動検出",
                "**GuardDuty**: 脅威検出",
                "**Sensitivity labels**: 分類済データの統制",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "ML 攻撃と対策",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Model Poisoning**: 学習データに悪意ある投入。検証 + 異常検知",
                "**Adversarial Examples**: わずかな摂動で誤分類。Adversarial Training",
                "**Model Inversion**: モデルから訓練データの推測。差分プライバシー",
                "**Membership Inference**: 特定データが訓練に含まれたかの推測",
                "**Prompt Injection**: 生成 AI への悪意あるプロンプト。Guardrails",
                "**Model Extraction**: API 呼出でモデルを複製。レート制限 + 透かし",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "責任ある AI",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Bedrock Guardrails**: 生成 AI の入出力制御",
                "**SageMaker Clarify**: バイアス検出 + 説明可能性",
                "**Model Cards**: モデルの透明性 ・ 制限の文書化",
                "**Data Cards**: 訓練データの来歴 ・ 偏り情報",
                "**AI Service Cards**: AWS AI サービスの設計 ・ 利用範囲",
                "**監査ログ**: CloudTrail で全操作記録",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "生成 AI と Bedrock",
      overview:
        "AWS の生成 AI 関連サービスを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Amazon Bedrock",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Bedrock**: 複数の基盤モデル(Claude / Titan / Llama / Mistral / Cohere)を単一 API で",
                "**Knowledge Bases**: マネージド RAG",
                "**Agents**: ツール使用と行動計画",
                "**Guardrails**: 危険トピック ・ PII の遮断",
                "**Model Evaluation**: 自動評価 + Human-in-the-loop",
                "**Custom Model Import**: 独自モデルの取込み",
                "**Provisioned Throughput**: スループット予約",
                "**Batch Inference**: 50% 割引",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "SageMaker での生成 AI",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker JumpStart**: Hugging Face / Meta などの基盤モデル",
                "**SageMaker Fine-tuning**: 独自データでの微調整",
                "**SageMaker MLflow**: 生成 AI 実験管理",
                "**SageMaker HyperPod**: 大規模学習(数千 GPU)",
                "**SageMaker Distributed Training Libraries**: SMDDP / SMP",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "Amazon Q ファミリ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Amazon Q Developer**: コード補完 ・ 説明 ・ デバッグ",
                "**Amazon Q Business**: 社内データ Q&A",
                "**Amazon Q in QuickSight**: BI / レポート",
                "**Amazon Q in Connect**: コンタクトセンター",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "コスト最適化と受験対策",
      overview:
        "ML ワークロードのコスト管理と試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "コスト最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Spot Training**: 学習 90% コスト削減",
                "**Savings Plans**: 1 / 3 年予約割引",
                "**Inferentia / Trainium**: AWS 自家製 AI チップで価格性能比改善",
                "**Multi-Model Endpoint**: 推論コスト集約",
                "**Serverless Inference**: 不定期トラフィックで安価",
                "**Batch Transform**: 大量データの一括推論",
                "**SageMaker Inference Recommender**: 自動推奨",
                "**Distillation / Quantization**: モデル軽量化",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: 評価指標 / 不均衡対策 / Data Wrangler",
                "**第 3 章**: SageMaker サブサービス全体像 / Inferentia/Trainium",
                "**第 4 章**: Built-in / BYOC / Bayesian HPO / Hyperband / MLflow",
                "**第 5 章**: 推論オプション 5 種 / Multi-Model Endpoint / Inference Recommender",
                "**第 6 章**: SageMaker Pipelines / Model Registry / Step Functions",
                "**第 7 章**: Model Monitor 4 種 / Clarify バイアス指標",
                "**第 8 章**: VPC + Private Endpoint / KMS / Network Isolation",
                "**第 9 章**: Bedrock / JumpStart / Fine-tuning / Amazon Q",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**65 問 / 130 分** = 1 問 約 2 分",
                "**ケーススタディ**: 長文 + 複数問のセット",
                "**最も○○な答え** を選ぶ問題が中心(コスト効率 / 性能 / セキュリティ)",
                "**Practice Exam**(AWS 公式)を必ず受ける",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
              ],
            },
          ],
        },
        {
          id: "ch10-sec3",
          number: "10.3",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "MLA-C01 合格 → **ML Specialty(MLS-C01)** で深い数学 ・ アルゴリズム理解、または **AWS SAA → AWS SAP** でクラウドアーキテクト全般へ。三大クラウド ML を揃えるなら本サイトの[Azure AI-102](/certs/azure-ai-102)・[GCP Generative AI Leader](/certs/gcp-gen-ai-leader)も。",
            },
            {
              type: "practical",
              title: "MLA-C01 のキャリア活用",
              body: "MLA-C01 は **AWS で ML / 生成 AI を実装する技術者** の証明として強力。AI Practitioner(基礎)+ MLA-C01(実装)の組合せは AWS ML スペシャリストとして非常に強いシグナル。**AWS パートナー企業 ・ AI ベンチャー ・ クラウド ML 案件** で評価が特に高い。",
            },
          ],
        },
      ],
    },
  ],
};
