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
  ],
};
