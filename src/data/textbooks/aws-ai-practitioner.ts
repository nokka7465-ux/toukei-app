import type { Textbook } from "@/types/content";

export const awsAiPractitionerTextbook: Textbook = {
  levelSlug: "aws-ai-practitioner",
  title: "AWS Certified AI Practitioner 教科書",
  intro:
    "**AWS Certified AI Practitioner(AIF-C01)** は、Amazon Web Services が提供する **AI / 生成 AI / 機械学習の基礎リテラシー** を測る入門レベル(Foundational)の認定試験です。エンジニア限定ではなく、**ビジネスサイド・PM・営業・コンサルタント** など、AWS の AI サービスを活用するすべての職種が想定対象。本教科書は、AWS の AI / ML サービス群と、生成 AI 時代に必要な基礎知識を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "AIF-C01 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 AWS 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**AWS Certified AI Practitioner(AIF-C01)** は AWS 認定の **Foundational(基礎)レベル** に位置し、**Cloud Practitioner(CLF-C02)の AI 版** として 2024 年に追加された比較的新しい認定です。Specialty(専門)の **Machine Learning Specialty(MLS-C01)** や、Associate の **Machine Learning Engineer Associate** より入門的です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Amazon Web Services(AWS)",
                "**形式**: CBT(Pearson VUE 試験会場)or オンライン監督試験",
                "**問題数 / 時間**: 65 問 / 90 分",
                "**回答方式**: 選択式(単一 / 複数)+ 順序付け / マッチング",
                "**合格スコア**: 700 / 1000(参考)",
                "**有効期限**: 3 年(再認定が必要)",
                "**受験料**: 100 USD(参考)",
                "**言語**: 英語 ・ 日本語など複数言語対応",
              ],
            },
            { type: "h3", text: "出題分野(公式試験ガイド)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: AI と ML の基礎**(約 20%)",
                "**Domain 2: 生成 AI の基礎**(約 24%)",
                "**Domain 3: 基盤モデルのアプリケーション**(約 28%)",
                "**Domain 4: 責任ある AI のためのガイドライン**(約 14%)",
                "**Domain 5: AI ソリューションの安全性 ・ コンプライアンス**(約 14%)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "学習プランと推奨前提知識",
          blocks: [
            { type: "h3", text: "推奨前提" },
            {
              type: "list",
              style: "bullet",
              items: [
                "AWS の **基本的なクラウド概念**(IAM / S3 / EC2 など)を知っている",
                "AI / 機械学習の **概要**(教師あり / 教師なし / 強化学習)を理解している",
                "**生成 AI**(ChatGPT 等)に触れたことがある",
                "プログラミングは **読めるレベル** で十分(コードを書く問題はほぼなし)",
              ],
            },
            { type: "h3", text: "60 〜 80 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: AI / ML の基礎(本サイトの[G 検定 教科書](/certs/g-test/textbook)で補強可能)",
                "**Week 2**: 生成 AI の基礎(本サイトの[生成 AI パスポート 教科書](/certs/genai-passport/textbook)も併用)",
                "**Week 3 〜 4**: AWS の AI / ML サービス群を一通り(SageMaker / Bedrock / Comprehend / Rekognition 等)",
                "**Week 5**: 責任ある AI とコンプライアンス",
                "**Week 6**: 演習 + 模擬試験",
              ],
            },
            {
              type: "intuition",
              title: "コードよりサービスの『使い分け』",
              body: "本試験では『**この要件にはどの AWS サービスが最適か**』を選ばせる問題が中心。たとえば『リアルタイムで音声をテキスト化したい』なら **Amazon Transcribe**、『機密情報を含む文書から要約を作成したい』なら **Amazon Bedrock + ガードレール** という具合。**サービスの守備範囲を覚える** のが合格の鍵です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "AI / 機械学習の基礎",
      overview:
        "ML / DL / 生成 AI の関係、教師あり / なし / 強化学習、評価指標を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "AI ・ ML ・ DL ・ 生成 AI の関係",
          blocks: [
            {
              type: "def",
              title: "用語の階層",
              body: "**AI** が最も広く、**機械学習(ML)** はデータからパターンを学ぶ AI のサブセット。**ディープラーニング(DL)** は多層 NN を使う ML のサブセット。**生成 AI** は DL を基礎に新しいコンテンツを作る AI。\n\nAWS は『AI / ML / DL / Gen AI』の各層に対応するサービスを提供しており、**抽象度が高いほど** 開発工数が小さく、**低いほど** カスタマイズ性が高い。",
            },
            { type: "h3", text: "3 つの学習方式" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**教師あり学習**: ラベル付きデータ → 分類 ・ 回帰",
                "**教師なし学習**: ラベルなし → クラスタリング ・ 次元削減 ・ 異常検知",
                "**強化学習**: 報酬信号で行動を最適化(SageMaker RL)",
                "**自己教師あり学習**: データ自身から擬似ラベル(LLM 事前学習)",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "評価指標とユースケース選択",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**分類**: Accuracy / Precision / Recall / F1 / ROC-AUC",
                "**回帰**: MSE / RMSE / MAE / R²",
                "**不均衡データ**: PR-AUC / F1 / Recall を重視",
                "**生成 AI**: BLEU / ROUGE / Perplexity / ヒューマン評価",
              ],
            },
            { type: "h3", text: "代表的なユースケース → アルゴリズム" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**スパム判定**: バイナリ分類(ロジスティック回帰 / GBDT)",
                "**売上予測**: 回帰 / 時系列(Prophet / DeepAR)",
                "**顧客セグメント化**: クラスタリング(k-means)",
                "**異常検知**: Isolation Forest / Autoencoder",
                "**レコメンド**: 協調フィルタリング / Two-Tower",
                "**チャットボット**: LLM(Bedrock / Lex)",
                "**画像分類**: CNN / Vision Transformer",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "AWS の AI / ML サービス全体像",
      overview:
        "AWS の AI / ML スタックを 3 層(AI Services / ML Services / ML Frameworks)で整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "3 層の AWS AI / ML スタック",
          blocks: [
            {
              type: "p",
              text: "AWS の AI / ML サービスは大きく **3 層** に分かれます。上位ほど開発工数が小さく、下位ほどカスタマイズ性が高い構造です。",
            },
            {
              type: "list",
              style: "number",
              items: [
                "**AI Services(最上位)**: 学習済モデルを API で呼ぶだけ。Rekognition / Comprehend / Transcribe / Polly / Translate / Forecast / Personalize / Textract",
                "**ML Services(中位)**: 自分のデータでカスタムモデル構築。**Amazon SageMaker** がフラッグシップ",
                "**ML Frameworks & Infrastructure(下位)**: TensorFlow / PyTorch / MXNet を **EC2 / EKS / Inferentia / Trainium** で動かす",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "代表的な AI Services",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Amazon Rekognition**: 画像 ・ 動画分析(物体検出 ・ 顔検出 ・ コンテンツモデレーション)",
                "**Amazon Comprehend**: 自然言語処理(感情 ・ エンティティ ・ トピック ・ 言語検出)",
                "**Amazon Comprehend Medical**: 医療文書から PHI / 疾患 ・ 投薬を抽出",
                "**Amazon Transcribe**: 音声 → テキスト変換",
                "**Amazon Polly**: テキスト → 音声合成",
                "**Amazon Translate**: 機械翻訳",
                "**Amazon Textract**: 文書 / 表 / フォームの OCR + 構造抽出",
                "**Amazon Forecast**: 時系列予測(マネージド)",
                "**Amazon Personalize**: レコメンドエンジン",
                "**Amazon Lex**: チャットボット",
                "**Amazon Kendra**: エンタープライズ検索(セマンティック検索)",
                "**Amazon Fraud Detector**: 不正検知",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Amazon SageMaker の全体像",
          blocks: [
            {
              type: "p",
              text: "**Amazon SageMaker** は ML のライフサイクル全体(準備 → 学習 → デプロイ → 監視)をカバーするマネージドサービス群です。AIF-C01 では概要把握が中心で、深い実装はマシンラーニングスペシャリティ試験の範囲です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Studio**: 統合開発環境(JupyterLab ベース)",
                "**SageMaker Canvas**: ノーコード ML(ビジネスサイド向け)",
                "**SageMaker Autopilot**: AutoML",
                "**SageMaker Ground Truth**: ラベル付け管理",
                "**SageMaker Data Wrangler**: データ準備",
                "**SageMaker Feature Store**: 特徴量管理",
                "**SageMaker Pipelines**: ML パイプライン",
                "**SageMaker Model Registry**: モデル管理",
                "**SageMaker Endpoints**: 推論デプロイ(リアルタイム / バッチ / サーバレス / 非同期)",
                "**SageMaker Model Monitor**: ドリフト検出",
                "**SageMaker Clarify**: バイアス検出 / 説明可能性",
                "**SageMaker JumpStart**: 学習済モデル + 微調整テンプレート",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Amazon Bedrock と基盤モデル",
      overview:
        "AWS の生成 AI フラッグシップ Bedrock の使い方と、提供される基盤モデルを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Amazon Bedrock の概要",
          blocks: [
            {
              type: "p",
              text: "**Amazon Bedrock** は、複数の **基盤モデル(Foundation Model, FM)** を **単一の API** で利用できるマネージドサービス。データを **AWS 環境内に閉じる** 設計で、エンタープライズ用途での生成 AI 採用が進みやすい構造になっています。",
            },
            { type: "h3", text: "Bedrock で利用可能な代表モデル" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Anthropic Claude(3, 3.5, Opus)**: 文章生成 ・ コーディング ・ 推論で評価が高い",
                "**Amazon Titan**: AWS 自家製。テキスト生成 ・ 埋め込み ・ 画像生成",
                "**Meta Llama**: オープンモデルの代表",
                "**Mistral / Mixtral**: 欧州系の高性能モデル",
                "**Cohere**: 埋め込み ・ 多言語",
                "**Stability AI**: 画像生成(Stable Diffusion 系)",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "基盤モデルのカスタマイズ",
          blocks: [
            {
              type: "def",
              title: "3 段階のカスタマイズ",
              body: "**1. プロンプトエンジニアリング**: モデルを変えずプロンプトだけ工夫。**最もコスト効率が良い**。\n\n**2. 検索拡張生成(RAG)**: 外部知識を検索 → プロンプトに含める。**社内データ活用に最適**。\n\n**3. ファインチューニング / 継続的事前学習**: モデル自体を再学習。最も効果が大きいが **コストとリスクが高い**。",
            },
            { type: "h3", text: "Bedrock の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Knowledge Bases**: マネージド RAG(Bedrock + ベクトル DB 連携)",
                "**Agents**: ツール使用と行動計画ができるエージェント機能",
                "**Guardrails**: 危険トピック ・ 個人情報 ・ 不適切コンテンツの遮断",
                "**Model Evaluation**: 複数モデルの比較評価",
                "**Custom Model Import**: カスタムモデルの取り込み",
              ],
            },
            {
              type: "intuition",
              title: "RAG vs Fine-tuning の選び分け",
              body: "情報が **頻繁に更新される / 出典明記が必要 / 社内ドキュメント中心** なら **RAG** が第一選択。**口調 ・ スタイル ・ ブランドトーン** をモデルに染み込ませたいなら **Fine-tuning**。実務では『**まず RAG、ダメなら Fine-tuning**』が定石です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "プロンプトエンジニアリング",
      overview:
        "Bedrock などで効果的に基盤モデルを使うためのプロンプト設計を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "プロンプトの構造",
          blocks: [
            {
              type: "def",
              title: "プロンプトの 5 要素",
              body: "**1. 役割(Role)**: 立場の指定\n**2. 文脈(Context)**: 背景情報\n**3. タスク(Task)**: 何をしてほしいか\n**4. 出力形式(Format)**: 表 / JSON / 文字数\n**5. 制約(Constraints)**: 専門用語禁止 / トーン / 長さ",
            },
            { type: "h3", text: "応用テクニック" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Zero-shot / Few-shot**: 例なし / 少数例提示",
                "**Chain-of-Thought(CoT)**: 思考過程を出させる",
                "**Self-Consistency**: 多回試行で多数決",
                "**ReAct**: 推論 + 行動の交互",
                "**ToT(Tree of Thoughts)**: 思考を木構造で探索",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "RAG のアーキテクチャ",
          blocks: [
            {
              type: "p",
              text: "**RAG(Retrieval Augmented Generation)** は、(1) ユーザの質問を **埋め込みベクトルに変換**、(2) **ベクトル DB で類似文書を検索**、(3) 検索結果をプロンプトに含めて LLM に渡す、という 3 段階で動作します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**埋め込みモデル**: Titan Embeddings / Cohere Embed",
                "**ベクトル DB**: OpenSearch / Aurora pgvector / Pinecone(マネージド)",
                "**チャンク戦略**: 固定長 / 段落 / 意味単位の分割",
                "**ハイブリッド検索**: ベクトル + キーワード",
                "**リランキング**: 検索結果の再順序付け",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "ML パイプラインと SageMaker 詳細",
      overview:
        "データ準備 → 学習 → デプロイ → 監視のライフサイクルを整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "データ準備とラベル付け",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**データソース**: S3(主流) / RDS / Redshift / DynamoDB / Glue",
                "**データ形式**: CSV / Parquet / TFRecord / RecordIO",
                "**SageMaker Ground Truth**: マネージドラベリング(人間 + ML 補助)",
                "**SageMaker Data Wrangler**: GUI でデータ前処理",
                "**AWS Glue**: ETL マネージド",
                "**EMR**: 大規模データ処理(Spark / Hive)",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "学習とハイパーパラメータ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Training Jobs**: マネージド学習(GPU / CPU 自動プロビジョン)",
                "**Built-in アルゴリズム**: XGBoost / Linear Learner / DeepAR / Random Cut Forest など",
                "**Bring Your Own Container(BYOC)**: 任意のコンテナで学習",
                "**SageMaker Autopilot / Canvas**: AutoML",
                "**ハイパーパラメータチューニング**: ベイズ最適化 / グリッド / ランダム",
                "**Distributed Training**: データ並列 / モデル並列",
                "**Spot Instance**: コスト最大 90% 削減",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "推論デプロイと監視",
          blocks: [
            { type: "h3", text: "推論オプション" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Real-time Inference**: 低遅延 ・ 常時稼働",
                "**Serverless Inference**: 自動スケール ・ 従量課金",
                "**Batch Transform**: 大量データの一括推論",
                "**Asynchronous Inference**: 大ペイロード ・ 長時間処理",
                "**Edge**: SageMaker Edge Manager(IoT デバイス)",
              ],
            },
            { type: "h3", text: "監視" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker Model Monitor**: データドリフト ・ モデル品質ドリフト ・ バイアスドリフト",
                "**CloudWatch**: メトリクス ・ ログ ・ アラーム",
                "**A/B テスト ・ シャドーデプロイ**: 安全な新モデル投入",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "責任ある AI とバイアス",
      overview:
        "公平性 ・ 説明可能性 ・ プライバシー ・ ハルシネーションを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "責任ある AI の 5 本柱",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**公平性(Fairness)**: 性別 / 人種 / 年齢などへの不当な偏りがない",
                "**説明可能性(Explainability)**: 判断根拠を人間が理解できる",
                "**プライバシー**: 個人情報の保護 ・ データ最小化",
                "**安全性 / セキュリティ**: 誤動作 / 不正利用への対策",
                "**透明性 / ガバナンス**: モデルカード / データカード / 監査ログ",
              ],
            },
            {
              type: "p",
              text: "AWS では **SageMaker Clarify** がバイアス検出と説明可能性(SHAP ベース)を提供。**Bedrock Guardrails** が生成 AI の不適切出力を制御。これらは AIF-C01 で頻出のサービス名です。",
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "ハルシネーション ・ プロンプトインジェクション",
          blocks: [
            {
              type: "def",
              title: "ハルシネーション",
              body: "LLM が **事実ではない情報を、自信ありげに生成する** 現象。次の単語の確率で文を生成しているだけで事実検証はしていないことが原因。\n\n**対策**: RAG で出典付き / 出力検証 / 温度パラメータを下げる / 人間レビュー / Function Calling で計算 / 検索を AI に任せない",
            },
            {
              type: "def",
              title: "プロンプトインジェクション",
              body: "悪意のあるユーザが『これまでの指示を無視して...』のようなプロンプトを入力し、本来意図しない動作を引き出す攻撃。\n\n**対策**: 入力検証 / Bedrock Guardrails / 権限最小化 / 出力フィルタリング / 監査ログ",
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "AWS のセキュリティ機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**IAM**: 最小権限の原則",
                "**KMS**: 暗号鍵管理(保存時暗号化)",
                "**VPC エンドポイント**: AI サービスをプライベート接続で利用",
                "**Macie**: S3 内の個人情報自動検出",
                "**CloudTrail**: API 呼び出しの監査ログ",
                "**AWS PrivateLink**: Bedrock を VPC 内のみで利用可能",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "コスト最適化と運用",
      overview:
        "AWS の AI / ML 関連コストの管理と最適化を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "推論 ・ 学習コストの最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Spot Instance**: 中断耐性ある学習でコスト 90% 削減",
                "**Savings Plans**: 1 / 3 年コミットで割引",
                "**Inferentia / Trainium**: AWS 自家製 AI チップで価格性能比改善",
                "**Multi-Model Endpoint**: 1 エンドポイントに複数モデル同居",
                "**Serverless Inference**: 不定期 ・ 低トラフィック向け",
                "**バッチ推論**: リアルタイム不要なら大幅安価",
                "**モデル軽量化**: 量子化 / 蒸留 / プルーニング",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Bedrock 生成 AI のコスト",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**On-Demand**: 入力 / 出力トークン課金。試験 ・ PoC に最適",
                "**Provisioned Throughput**: スループットを事前確保。本番大規模で割安",
                "**Batch**: 50% 割引(処理に時間許容)",
                "**プロンプト圧縮**: 不要な指示 / 冗長な例示を削減",
                "**プロンプトキャッシング**: 共通システムプロンプトを再利用",
                "**より小さいモデル**: Haiku / Mini 系を試す",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "ユースケース別アーキテクチャパターン",
      overview:
        "AIF-C01 で頻出する『この要件にはどのサービス』のパターンを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "代表的なユースケース",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**社内 FAQ チャットボット**: Bedrock Knowledge Bases(RAG)+ S3 + OpenSearch",
                "**コールセンター音声分析**: Transcribe → Comprehend(感情)→ QuickSight",
                "**請求書 / 領収書の OCR + 自動仕訳**: Textract + Comprehend + Step Functions",
                "**異常検知 ・ 不正検知**: Lookout for Metrics / Fraud Detector",
                "**需要予測**: Forecast / SageMaker DeepAR",
                "**レコメンド**: Personalize",
                "**翻訳付き多言語対応**: Translate + Polly",
                "**画像内容モデレーション**: Rekognition Content Moderation",
                "**コードアシスタント**: Amazon Q Developer",
                "**ビジネス問い合わせ ・ 業務支援**: Amazon Q Business",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Amazon Q ファミリ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Amazon Q Developer**: コード補完 / 説明 / セキュリティ脆弱性検出 / リファクタリング",
                "**Amazon Q Business**: 社内データに繋いで業務質問に回答",
                "**Amazon Q in QuickSight**: BI ダッシュボード作成補助",
                "**Amazon Q in Connect**: コンタクトセンター向け回答提案",
              ],
            },
            {
              type: "p",
              text: "Amazon Q は **AWS が提供する AI アシスタントブランド** で、職種ごとに最適化されたバリエーションを持ちます。試験では『**この職種ならどの Q を選ぶか**』が問われます。",
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
        "範囲別チェックリストと試験当日の戦略を整理します。",
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
                "**第 2 章**: AI ⊃ ML ⊃ DL ⊃ Gen AI / 教師あり-なし-強化 / 評価指標",
                "**第 3 章**: AI Services 一覧と各サービスの **守備範囲**(Rekognition / Comprehend / Transcribe / Polly / Translate / Textract / Forecast / Personalize / Kendra)",
                "**第 4 章**: Bedrock + 提供モデル + Knowledge Bases + Agents + Guardrails",
                "**第 5 章**: プロンプトの 5 要素 + Few-shot / CoT / RAG",
                "**第 6 章**: SageMaker Studio / Canvas / Autopilot / Pipelines / Endpoints / Model Monitor",
                "**第 7 章**: 責任ある AI 5 本柱 / SageMaker Clarify / Guardrails / IAM / KMS",
                "**第 8 章**: Spot / Inferentia / Bedrock 課金モデル / プロンプト最適化",
                "**第 9 章**: ユースケース → 適切なサービスの即答パターン / Amazon Q ファミリ",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**65 問 / 90 分** = 1 問 約 1.4 分。長文ユースケース問題は慎重に",
                "**サービス名のスペル**: 英語版受験では正確なサービス名選択が必須",
                "**消去法**: AWS の他サービス(EC2 / Lambda)が混じる選択肢は AI 文脈で誤答",
                "**生成 AI / Bedrock 関連が出題増加中**: Domain 2-3 で半分超",
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
              text: "AIF-C01 合格 → **AWS Certified Machine Learning Engineer Associate(MLA-C01)** または **Machine Learning Specialty(MLS-C01)** が王道。クラウド全般を強化したいなら **Solutions Architect Associate(SAA-C03)** へ進むのも有力です。",
            },
            {
              type: "practical",
              title: "AIF-C01 のキャリア活用",
              body: "AIF-C01 は **AWS 認定として明示的に履歴書に書ける** 資格で、特に **コンサルタント / SE / PM** が AWS の AI を語る際の信頼性を補強します。本サイトの[生成 AI パスポート](/certs/genai-passport) ・ [G 検定](/certs/g-test)と組み合わせると **概念面 + AWS 実装面** の両軸で AI リテラシーを示せます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch11",
      number: 11,
      title: "Amazon Bedrock 2024-2025 の進化",
      overview:
        "Bedrock は 2024-2025 で Multi-Agent Collaboration / Distillation / Cross-Region Inference / Prompt Caching など大幅進化。試験範囲も改定されています。",
      sections: [
        {
          id: "ch11-sec1",
          number: "11.1",
          title: "Knowledge Bases の進化(GraphRAG / Hierarchical / Reranking)",
          blocks: [
            {
              type: "p",
              text: "Bedrock Knowledge Bases(KB)は **マネージド RAG** の中核。2024 年に複数の重要機能が追加されました。",
            },
            { type: "h3", text: "新機能(2024+)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hierarchical Chunking**: 親子 Chunk 構造で **小 Chunk で検索 + 大 Chunk で生成** → 精度向上",
                "**Metadata Filter**: タグ / 属性で検索結果を絞り込み(ユーザー権限別 ・ 日付範囲等)",
                "**GraphRAG**(2024 末 Preview): Neptune Graph で **エンティティ関係を活用した複雑質問**(Multi-Hop)に対応",
                "**Reranking**(2024 GA): Cohere Rerank 3.5 等で Top-K を再順位 → 関連性大幅向上",
                "**Structured Data Retrieval**(Preview): Redshift / Athena 等の構造化データも KB 経由でクエリ",
              ],
            },
            {
              type: "intuition",
              title: "💡 KB の使い分け",
              body: "**シンプル QA**: 標準 Chunking + Vector のみ。**複雑 / Multi-Hop**: Hierarchical + Reranking + GraphRAG。**SaaS 横断**: Metadata Filter で Tenant 分離。**社内文書 + DB 横断**: Structured Data Retrieval。**まず標準で始めて精度不足なら段階的に強化** が王道。",
            },
          ],
        },
        {
          id: "ch11-sec2",
          number: "11.2",
          title: "Bedrock Agents と Multi-Agent Collaboration",
          blocks: [
            { type: "h3", text: "Bedrock Agents の構成要素" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundation Model**: Agent の頭脳(Claude / Llama 等)",
                "**Action Groups**: Lambda + OpenAPI Schema で外部 API 呼出",
                "**Knowledge Base**: RAG で社内情報参照",
                "**Guardrails**: 入出力フィルタリング(同じ Guardrail を複数 Agent で共有可)",
                "**Memory**: 会話履歴を保持(Session 跨ぎ Memory も 2024+)",
                "**Trace**: 思考過程を可視化(デバッグ ・ 監査)",
              ],
            },
            { type: "h3", text: "Multi-Agent Collaboration(2024 GA)" },
            {
              type: "p",
              text: "**Supervisor Agent** が複雑タスクを **Sub-agents** に分解委譲する階層構造。例: 旅行プランナー Supervisor → 航空券 Agent + ホテル Agent + アクティビティ Agent。各 Sub は特化した Action / KB を持ち、Supervisor が統合して最終回答。",
            },
            {
              type: "practical",
              title: "Multi-Agent vs 単一 Agent の選び方",
              body: "**単一 Agent**: タスクが特定ドメインに限定。**Multi-Agent**: ① ドメインが分かれる(技術サポート + 営業 + 経理 等)② Tool 数が膨大(20+)③ 並列処理で速度向上したい。**Agent 1 つあたり 5-10 Action / 1-3 KB に絞る** のが Anthropic の推奨。",
            },
          ],
        },
        {
          id: "ch11-sec3",
          number: "11.3",
          title: "Guardrails の進化と Content Filtering",
          blocks: [
            { type: "h3", text: "Guardrails の機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Content Filters**: Hate / Insults / Sexual / Violence / Misconduct / Prompt Attack の 6 カテゴリ x 4 段階(NONE / LOW / MED / HIGH)",
                "**Denied Topics**: 自由記述で禁止トピック定義(例: 競合製品の推薦)",
                "**Sensitive Information Filter**: PII / Custom Regex Pattern を Mask / Block",
                "**Word Filter**: 特定キーワード(製品名 / 不適切表現)Block",
                "**Contextual Grounding Check**: RAG での Grounding スコア低い回答を Block → ハルシネーション抑制",
                "**Automated Reasoning Checks**(2024 末 Preview): 論理的整合性を Formal Verification で検証",
              ],
            },
            {
              type: "intuition",
              title: "💡 Guardrails の独立性が強み",
              body: "**1 つの Guardrail を複数 Foundation Model 横断で共有** できる(Claude / Llama / Titan 等)。**Independent API**(`ApplyGuardrail`)で Pre/Post Inference 制御も。**Bedrock を使わない自社 LLM 推論** にも Guardrails を適用できる(2024 拡張)。",
            },
          ],
        },
        {
          id: "ch11-sec4",
          number: "11.4",
          title: "Model Distillation と Cross-Region Inference",
          blocks: [
            { type: "h3", text: "Model Distillation(2024 GA)" },
            {
              type: "p",
              text: "**Teacher Model**(Claude 3.5 Sonnet など)の出力で **Student Model**(Claude 3 Haiku など)を Fine-tune し、特定タスクで **精度を保ったまま 75% コスト削減 + 500% 高速化** を実現します。",
            },
            { type: "h3", text: "Distillation ワークフロー" },
            {
              type: "list",
              style: "number",
              items: [
                "Training Prompts を準備(プロダクション履歴 or 専用データセット)",
                "Bedrock が Teacher を呼出して回答生成(Synthetic Data)",
                "Student を Fine-tune(LoRA ベース)",
                "Distilled Student を Provisioned Throughput でデプロイ",
              ],
            },
            { type: "h3", text: "Cross-Region Inference(2024 GA)" },
            {
              type: "p",
              text: "**複数リージョンに Inference を自動分散**することで、① 単一リージョンの容量制約回避 ② 低レイテンシ ③ 高可用性 を実現。**追加コストなし**で「Inference Profile」を選ぶだけ。",
            },
            {
              type: "practical",
              title: "コスト最適化の組合せ",
              body: "**① モデル選定**(Haiku / Nova Micro 等の軽量モデル)+ **② Prompt Caching**(Anthropic Claude 3.5+ で 90% コスト減 ・ 入力 Token のみ)+ **③ Cross-Region Inference**(容量問題回避)+ **④ Distillation**(特定タスクの恒久的高速化)+ **⑤ Batch API**(50% off / 非同期 OK な場合)。これらを **重ねて使う**ことが本番運用の鍵。",
            },
          ],
        },
        {
          id: "ch11-sec5",
          number: "11.5",
          title: "Bedrock Marketplace と Nova ファミリ",
          blocks: [
            { type: "h3", text: "Bedrock Marketplace(2024 GA)" },
            {
              type: "p",
              text: "Hugging Face / Databricks / NVIDIA / IBM など **100+ の追加モデル**を Bedrock 経由で利用可能に。**統一 API / 統一課金 / VPC エンドポイント / IAM** を Marketplace モデルにも適用できるのが強みです。",
            },
            { type: "h3", text: "Amazon Nova ファミリ(2024 re:Invent)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Nova Micro**: テキストのみ ・ 超低コスト / 超高速(Haiku / Gemini Flash 競合)",
                "**Nova Lite**: マルチモーダル(画像 + 動画 + テキスト)・ 低コスト",
                "**Nova Pro**: 主力モデル ・ 高精度 + マルチモーダル",
                "**Nova Premier**(2025): フラッグシップ(GPT-4o / Claude Opus 競合)",
                "**Nova Canvas**: 画像生成(Stable Diffusion / DALL-E 競合)",
                "**Nova Reel**: 動画生成(Sora / Veo 競合)",
              ],
            },
            {
              type: "intuition",
              title: "💡 Nova vs 他モデル",
              body: "**Nova の強み**: ① **AWS ネイティブ**(課金 ・ IAM 統合)② **マルチモーダルが標準**(Lite/Pro)③ **コストパフォーマンス重視**。**Anthropic Claude が依然として最高精度** ・ **Nova はコスト効率 + Amazon 統合** で使い分けが現実的。",
            },
          ],
        },
      ],
    },
    {
      id: "ch12",
      number: 12,
      title: "SageMaker と Amazon Q ファミリの最新進化",
      overview:
        "SageMaker は 2024 年に大きな再ブランディング(Unified Studio)が行われ、Amazon Q はビジネス / 開発者 / アナリスト向けに細分化しました。",
      sections: [
        {
          id: "ch12-sec1",
          number: "12.1",
          title: "SageMaker Unified Studio(2024)",
          blocks: [
            {
              type: "p",
              text: "**SageMaker Unified Studio**(2024 re:Invent 発表)は、従来の SageMaker Studio + Glue Studio + EMR Studio + Athena + Redshift Query Editor + Bedrock IDE を **1 つの UI に統合**した次世代環境です。",
            },
            { type: "h3", text: "統合された機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Catalog 統合**: Lake Formation / Glue Catalog をネイティブ参照",
                "**SageMaker Lakehouse**: S3 + Redshift + Iceberg を統一クエリ(Iceberg REST Catalog 互換)",
                "**Generative AI Development**: Bedrock IDE 統合 ・ Prompt 開発 ・ Agent 構築",
                "**ML Development**: 従来の Notebook / Training / Endpoint / Pipelines",
                "**SQL Analytics**: Athena / Redshift / EMR 互換クエリ",
                "**Project + Domain**: Workspace 階層 ・ IAM Identity Center 統合",
              ],
            },
            {
              type: "intuition",
              title: "💡 旧 SageMaker Studio との関係",
              body: "**旧 Studio はサポート継続** だが、**新規プロジェクトは Unified Studio が推奨**。**Unified Studio = SageMaker + 多データソース + GenAI の包括的 IDE**。**AWS DataZone(2023 GA)の発展形**として位置付けられます。",
            },
          ],
        },
        {
          id: "ch12-sec2",
          number: "12.2",
          title: "SageMaker AI(2024 リブランド)",
          blocks: [
            {
              type: "p",
              text: "**従来の SageMaker は \"SageMaker AI\" にリブランド**(2024 末)。これにより SageMaker は **Data + Analytics + AI の包括プラットフォーム** に拡張し、SageMaker AI はその AI 部分を指す呼称になりました。",
            },
            { type: "h3", text: "SageMaker AI の構成要素" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker AI Studio**(旧 SageMaker Studio): IDE + Notebook + Code Editor",
                "**SageMaker Canvas**: No-Code ML + Generative AI 統合",
                "**SageMaker Autopilot**: AutoML(コード生成型)",
                "**SageMaker JumpStart**: Foundation Model + Solution Templates",
                "**SageMaker HyperPod**(2023 GA + 2024 拡張): 大規模分散学習(数千 GPU)",
                "**SageMaker Inference**: Real-time / Serverless / Async / Batch / Multi-Model / Inference Recommender",
              ],
            },
            { type: "h3", text: "HyperPod の意義" },
            {
              type: "p",
              text: "**HyperPod** は数百〜数千 GPU の長期間学習(LLM 事前学習等)向け。**ノード障害時の自動復旧 / Checkpoint / Cluster Resilience** が組込まれており、数週間にわたる学習を中断なく実行可能。**Meta Llama / Stability AI / Perplexity** も AWS HyperPod 利用。",
            },
          ],
        },
        {
          id: "ch12-sec3",
          number: "12.3",
          title: "Amazon Q ファミリ全体像",
          blocks: [
            {
              type: "p",
              text: "**Amazon Q** は AWS の汎用生成 AI アシスタント。役割別に細分化されています。AIF-C01 でも Q ファミリの使い分けが頻出問題。",
            },
            { type: "h3", text: "Amazon Q Developer(旧 CodeWhisperer)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**コード補完 / 生成 / リファクタリング / 単体テスト生成**",
                "**Amazon Q Developer Agents**: 機能追加 / コード変換(Java 8 → 17)/ AWS Best Practices Review",
                "**IDE 統合**: VS Code / JetBrains / AWS Toolkit / CLI",
                "**Free Tier あり**(個人 ・ 5 月コード補完上限)",
                "**GitHub Copilot 競合** ・ AWS リソース文脈に強い",
              ],
            },
            { type: "h3", text: "Amazon Q Business" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**社内ナレッジ統合**: Slack / Teams / Confluence / SharePoint / Salesforce / Google Drive 40+ コネクタ",
                "**社員向け QA + 業務代行**: 会議要約 / メール下書き / ドキュメント検索 + Citation",
                "**Q Apps**: 自然言語で社内ミニアプリ作成",
                "**Q Actions**: ServiceNow / Zendesk 等への自動アクション",
              ],
            },
            { type: "h3", text: "Q in QuickSight / Connect / Glue / その他" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Q in QuickSight**: 自然言語 → ダッシュボード ・ Story 自動生成",
                "**Q in Connect**: コンタクトセンター(コール対応中の Real-time 提案)",
                "**Q in Glue**: ETL ジョブを自然言語で生成",
                "**Q in Chime**: 会議要約 / Action Item 抽出",
                "**Q for Migration**(Mainframe / VMware / .NET → AWS の自動変換)",
              ],
            },
          ],
        },
        {
          id: "ch12-sec4",
          number: "12.4",
          title: "AWS Generative AI Stack 全体像",
          blocks: [
            {
              type: "p",
              text: "AIF-C01 でよく問われる **「ユースケースに最も適した AWS サービスは?」** 問題は、以下の 3 層モデルで整理すると即答できます。",
            },
            { type: "h3", text: "AWS Generative AI 3 層" },
            {
              type: "list",
              style: "number",
              items: [
                "**Top Layer(エンドユーザー向けアプリ)**: Amazon Q ファミリ(Developer / Business / QuickSight / Connect 等)・ 即時利用 ・ ノーコード",
                "**Middle Layer(API でモデルを利用)**: Amazon Bedrock(マネージド Foundation Model API)・ Knowledge Bases / Agents / Guardrails",
                "**Bottom Layer(自前で構築 / カスタマイズ)**: SageMaker AI(Custom Training / HyperPod / JumpStart / Inference)",
              ],
            },
            {
              type: "intuition",
              title: "💡 即答パターン",
              body: "**「業務効率化したい」→ Amazon Q**(Business / Developer)・ **「自社アプリに LLM 組込」→ Bedrock**(KB + Agents + Guardrails)・ **「独自モデル学習 / Fine-tune」→ SageMaker JumpStart / HyperPod**。**「画像 / 動画 / 音声を簡単に」→ Rekognition / Polly / Transcribe**(AI Services 直行)。",
            },
          ],
        },
        {
          id: "ch12-sec5",
          number: "12.5",
          title: "AIF-C01 v2(2024 改訂)の出題変化",
          blocks: [
            {
              type: "p",
              text: "AIF-C01 は 2024 末 - 2025 にかけて出題範囲が **生成 AI 寄りに大幅シフト**しました。学習比重も以下のように調整が必要です。",
            },
            { type: "h3", text: "改訂後の出題ウェイト目安" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Fundamentals of AI / ML**: 約 20%(古典 ML / 評価指標 / バイアス)",
                "**Fundamentals of Generative AI**: 約 24%(LLM / プロンプト / RAG / Fine-tuning)",
                "**Applications of Foundation Models**: 約 28%(**Bedrock + Q ファミリが大きな比重**)",
                "**Guidelines for Responsible AI**: 約 14%(公平性 / 説明可能性 / Guardrails)",
                "**Security, Compliance, Governance**: 約 14%(IAM / KMS / Macie / プライバシ)",
              ],
            },
            { type: "h3", text: "新出題トピック(2024-2025)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Prompt Caching**(Claude 3.5+)による課金最適化",
                "**Multi-Agent Collaboration**(Bedrock Agents)",
                "**Cross-Region Inference**",
                "**Model Distillation**",
                "**Amazon Nova ファミリ**(Micro / Lite / Pro / Premier / Canvas / Reel)",
                "**SageMaker HyperPod**",
                "**Amazon Q Developer Agents**(機能追加 / Java 8→17 等)",
              ],
            },
            {
              type: "practical",
              title: "学習リソース",
              body: "**AWS Skill Builder の無料ラーニングパス**(AWS Certified AI Practitioner Plan)+ **AWS Cloud Quest: Generative AI**(ゲーム式)+ **AWS Builder Labs**(実機 Bedrock)+ **公式問題集 20 問** が王道セット。**Anthropic Console / Bedrock Playground** で実際に Claude / Nova を触ることで Tier 1 - 3 の区別が体感的に分かります。",
            },
          ],
        },
      ],
    },
  ],
};
