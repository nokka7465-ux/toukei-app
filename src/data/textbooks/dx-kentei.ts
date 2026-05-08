import type { Textbook } from "@/types/content";

export const dxKenteiTextbook: Textbook = {
  levelSlug: "dx-kentei",
  title: "DX 検定 教科書",
  intro:
    "**DX 検定** は、一般社団法人 **日本イノベーション融合学会**(共催: 一般社団法人 ICT 産業推進機構)が主催する、**デジタルトランスフォーメーション(DX)** に関するビジネス × IT の知識を測る検定。**ビジネスサイド ・ 経営層 ・ 企画 ・ コンサルタント** が想定対象で、AI / IoT / クラウド / 5G / ブロックチェーン / RPA など最新 IT トレンドと、DX 推進の実務知識を扱います。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DX 検定 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・3 段階のスコア認定・他 DX 関連検定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "DX 検定の位置付け",
          blocks: [
            {
              type: "p",
              text: "**DX 検定** は『**最新 IT トレンド + DX 推進実務**』の知識を 1 試験で総合的に測るユニークな位置付け。**スコア型認定** で、得点に応じて『DX エキスパート』『DX プロフェッショナル』『DX スタンダード』の 3 段階のレベル認定が付与されます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: 一般社団法人 日本イノベーション融合学会",
                "**共催**: 一般社団法人 ICT 産業推進機構",
                "**形式**: オンライン IBT(自宅 ・ 会社で受験可)",
                "**問題数 / 時間**: 120 問 / 60 分(参考)",
                "**回答方式**: 4 択選択式",
                "**スコア認定**: 800 点以上 = DX エキスパート、700 点以上 = DX プロフェッショナル、600 点以上 = DX スタンダード(1000 点満点)",
                "**実施**: 年 2 回(7 月 ・ 1 月)",
                "**受験料**: 一般 11,000 円 / 学割 5,500 円(税込・参考)",
              ],
            },
            { type: "h3", text: "他の DX 関連認定との比較" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**DX 検定**: ビジネス + IT トレンドの広範な知識(本資格)",
                "**DX 推進アドバイザー認定試験**: 全日本情報学習振興協会主催、より入門的",
                "**DX オフィサー試験**: 東京商工会議所、企画 ・ 推進担当向け",
                "**経済産業省 DX 認定制度**: 企業向けの認定(個人ではなく企業)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題範囲と推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題範囲(主要トピック)" },
            {
              type: "list",
              style: "number",
              items: [
                "**DX の概念と歴史**: 経済産業省定義 / 3 段階(デジタイゼーション → デジタライゼーション → DX)",
                "**最新 IT トレンド**: AI / IoT / クラウド / 5G / 6G / ブロックチェーン / 量子",
                "**生成 AI と DX**: ChatGPT 系 / RAG / プロンプトエンジニアリング",
                "**データドリブン経営**: BI / ダッシュボード / KPI / OKR",
                "**システム設計**: SaaS / PaaS / IaaS / ハイブリッド / マイクロサービス",
                "**アジャイル ・ DevOps**: スクラム / カンバン / CI/CD",
                "**情報セキュリティ**: ゼロトラスト / SASE / 個人情報",
                "**DX 人材 ・ リスキリング**: DX 推進指標 / デジタル人材育成",
                "**法制度**: 改正個人情報保護法 / GDPR / 電子帳簿保存法 / インボイス制度",
                "**業界別 DX 事例**: 金融 / 製造 / 小売 / 医療 / 公共",
              ],
            },
            { type: "h3", text: "40 〜 80 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: DX 概念 + 経産省ガイドライン(本教科書 第 2 章)",
                "**Week 2**: 最新 IT トレンド(AI / IoT / クラウド / 5G)",
                "**Week 3**: 生成 AI と業務活用(本サイトの[生成 AI パスポート](/certs/genai-passport)併用)",
                "**Week 4**: データドリブン経営 + アジャイル + セキュリティ",
                "**Week 5**: 法制度 + 業界別事例 + 過去問演習",
              ],
            },
            {
              type: "intuition",
              title: "『広く浅く + 最新』が DX 検定の特徴",
              body: "DX 検定は **個別技術を深掘りするのではなく、最新トレンドを広く知っているか** を測る試験。**毎年シラバスが更新** されるため、過去問だけでなく『最近 1 年の IT ニュースをキャッチアップ』する姿勢が重要です。日経 ・ 日経クロステック ・ ITmedia などの定期購読が有効。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "DX の概念と経済産業省の定義",
      overview:
        "DX の起源、3 段階モデル、経済産業省の DX 推進指標を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "DX の起源と定義",
          blocks: [
            {
              type: "p",
              text: "**DX(Digital Transformation)** という言葉は 2004 年にスウェーデンの **エリック ・ ストルターマン教授** が提唱。日本では **経済産業省『DX 推進ガイドライン(2018)』** で初めて公式定義され、その後 **DX レポート 2(2020)・ 2.1(2021)・ 2.2(2022)** で随時アップデートされています。",
            },
            {
              type: "def",
              title: "経済産業省の DX 定義",
              body: "『企業がビジネス環境の激しい変化に対応し、データとデジタル技術を活用して、顧客や社会のニーズを基に、製品やサービス、ビジネスモデルを変革するとともに、業務そのものや、組織、プロセス、企業文化 ・ 風土を変革し、競争上の優位性を確立すること』",
            },
            { type: "h3", text: "DX レポートの主要メッセージ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**2025 年の崖**: レガシーシステム放置で年間 12 兆円の経済損失リスク",
                "**2 拍子の DX**: デジタイゼーション(IT 化)+ デジタライゼーション(プロセス変革)+ DX(価値創造)",
                "**2 つの DX**: 攻めの DX(新規ビジネス)/ 守りの DX(コスト削減 ・ 業務効率化)",
                "**DX 推進指標**: 経産省が提供する自己診断ツール",
                "**DX 認定制度**: 経済産業省による企業向け認定",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "デジタイゼーション ・ デジタライゼーション ・ DX",
          blocks: [
            {
              type: "def",
              title: "DX への 3 段階",
              body: "**1. デジタイゼーション(Digitization)**: アナログ → デジタル化(紙 → PDF、FAX → メール)。\n\n**2. デジタライゼーション(Digitalization)**: 個別業務プロセスのデジタル化(申請の電子化、ペーパーレス化)。\n\n**3. デジタルトランスフォーメーション(DX)**: ビジネスモデルや組織文化までを変革する段階。",
            },
            {
              type: "intuition",
              title: "3 段階は順番ではなく重ね合わせ",
              body: "実務では 3 段階は **同時並行で進行** することが多く、デジタイゼーションが終わってから DX を始めるわけではありません。**業務の各レイヤーで 3 段階が並行** している状態が現実的です。",
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "DX 推進指標と DX 認定制度",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**DX 推進指標**: 経産省 + IPA 提供の自己診断ツール。35 の質問項目で 0 〜 5 段階評価",
                "**定性指標**: 経営戦略 ・ ビジョン ・ 体制 ・ 人材 ・ 文化",
                "**定量指標**: IT 投資比率 ・ 業務効率化効果 ・ 売上影響",
                "**DX 認定制度**: 経済産業省が認定。情報処理促進法に基づく国の制度",
                "**DX 銘柄**: 経産省 + 東証が選定。投資家向けの優良 DX 企業",
                "**デジタルガバナンス ・ コード**: 経産省策定。企業 DX の実践指針",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "AI と機械学習の最新動向",
      overview:
        "DX 検定で問われる AI 系トピックを生成 AI 中心に整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "AI 全般の最新動向",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AI ⊃ ML ⊃ DL ⊃ 生成 AI** の階層",
                "**ディープラーニングのブレイクスルー**: 2012 年 AlexNet → 2017 年 Transformer",
                "**ChatGPT(2022)以降の生成 AI 時代**",
                "**AI エージェント時代(2024 〜)**: 自律的にタスクを実行する AI",
                "**マルチモーダル AI**: テキスト + 画像 + 音声 + 動画",
                "**オンデバイス AI**: スマホ ・ PC で動く小型 LLM",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "生成 AI のビジネス活用",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ChatGPT / Claude / Gemini / Copilot**: 主要対話型 LLM",
                "**業務効率化**: 議事録 ・ メール ・ レポート ・ コード補助",
                "**RAG**: 社内ドキュメントを検索して根拠付き回答を生成",
                "**プロンプトエンジニアリング**: 役割 ・ 文脈 ・ 出力形式の 5 要素",
                "**生成 AI のリスク**: ハルシネーション ・ 著作権 ・ 情報漏洩",
                "**Microsoft 365 Copilot / Gemini for Workspace / Amazon Q**",
              ],
            },
            {
              type: "p",
              text: "DX 検定では **業務シナリオでの生成 AI 適用判断** が頻出。本サイトの[生成 AI パスポート 教科書](/certs/genai-passport/textbook)で深掘りできます。",
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "AI ガバナンスと規制",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**EU AI Act(2024)**: 世界初の包括的 AI 規制",
                "**日本の AI 事業者ガイドライン(2024)**: 経産省 + 総務省",
                "**広島 AI プロセス**: G7 の AI ガバナンス国際枠組み",
                "**米国大統領令(2023 ・ Biden)**: 後継トランプ政権で見直し",
                "**著作権法 30 条の 4**: AI 学習目的の著作物利用",
                "**個人情報保護法**: AI への個人情報入力の留意点",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "クラウドと最新インフラ技術",
      overview:
        "クラウドサービスモデル ・ ハイパースケーラー ・ コンテナ ・ サーバレスを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "クラウドサービスモデル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**IaaS(Infrastructure as a Service)**: 仮想サーバ ・ ストレージ ・ ネットワーク",
                "**PaaS(Platform as a Service)**: OS ・ ミドルウェア ・ 開発環境",
                "**SaaS(Software as a Service)**: アプリケーション(Salesforce / M365)",
                "**FaaS(Function as a Service)**: 関数単位の実行(AWS Lambda)",
                "**BaaS / DBaaS**: バックエンド / DB のマネージド提供",
              ],
            },
            { type: "h3", text: "ハイパースケーラー 3 社" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**AWS**: クラウド市場シェア 1 位、最も豊富なサービス",
                "**Microsoft Azure**: 2 位、Microsoft 365 統合に強み",
                "**Google Cloud(GCP)**: 3 位、AI / データ分析 ・ Kubernetes に強み",
                "**OCI(Oracle Cloud)・ Alibaba Cloud**: アジア圏で勢力",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "コンテナとサーバレス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Docker**: コンテナの事実上の標準",
                "**Kubernetes(K8s)**: コンテナオーケストレーション",
                "**マネージド K8s**: EKS / AKS / GKE",
                "**サーバレス**: Lambda / Azure Functions / Cloud Functions",
                "**マイクロサービス**: 独立デプロイ可能な小単位",
                "**サービスメッシュ**: Istio / Linkerd",
                "**Backend for Frontend(BFF)**",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "ハイブリッドクラウド ・ マルチクラウド",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ハイブリッドクラウド**: オンプレ + クラウド",
                "**マルチクラウド**: 複数クラウドベンダー併用",
                "**プライベートクラウド**: 自社専用",
                "**エッジコンピューティング**: 利用拠点近くで処理",
                "**Outposts / Anthos / Azure Arc**: ハイブリッド管理基盤",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "IoT ・ 5G ・ ブロックチェーン",
      overview:
        "DX 検定で頻出する周辺技術を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "IoT(Internet of Things)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**センサー**: 温度 ・ 湿度 ・ 加速度 ・ 位置",
                "**IoT プロトコル**: MQTT / CoAP / AMQP / HTTP",
                "**LPWA**: Sigfox / LoRaWAN / NB-IoT(低消費電力広域通信)",
                "**エッジコンピューティング**: 端末側で処理",
                "**デジタルツイン**: 現実物の仮想複製",
                "**スマートファクトリー**: IoT + AI + ロボット",
                "**Industrial IoT(IIoT)・ Industry 4.0**",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "5G と通信技術",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**5G の 3 特性**: 高速大容量(eMBB)・ 超低遅延(URLLC)・ 多数同時接続(mMTC)",
                "**ローカル 5G**: 自社専用 5G ネットワーク",
                "**Beyond 5G / 6G**: 2030 年代の次世代通信",
                "**Wi-Fi 6 / 6E / 7**: 高速無線 LAN",
                "**Starlink などの衛星通信**: 遠隔地カバー",
                "**O-RAN**: 仮想化 ・ オープン化された RAN",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "ブロックチェーンと Web3",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ブロックチェーン**: 分散台帳、改ざん耐性",
                "**ビットコイン / イーサリアム**: 代表的暗号資産",
                "**スマートコントラクト**: ブロックチェーン上の自動契約",
                "**NFT(Non-Fungible Token)**: 唯一性のあるトークン",
                "**DeFi(分散型金融)**: 中央管理者なしの金融",
                "**DAO(分散型自律組織)**",
                "**Web3**: ブロックチェーンベースの次世代 Web",
                "**CBDC(中央銀行デジタル通貨)**: 日銀デジタル円検討中",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "RPA ・ アジャイル ・ DevOps",
      overview:
        "業務効率化と開発高速化のフレームワークを整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "RPA とインテリジェントオートメーション",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**RPA(Robotic Process Automation)**: 定型業務の自動化",
                "**主要製品**: UiPath / Automation Anywhere / Blue Prism / Power Automate",
                "**3 つのレベル**: クラス 1(定型作業)・ クラス 2(AI と組合せ)・ クラス 3(自律型)",
                "**IPA / Hyperautomation**: RPA + AI + Process Mining + iPaaS の統合",
                "**Process Mining**: 業務プロセスの可視化",
                "**iPaaS**: クラウド統合プラットフォーム(MuleSoft / Boomi / Workato)",
                "**ローコード / ノーコード**: Power Apps / kintone / Bubble",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "アジャイルと開発手法",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ウォーターフォール**: 上流 → 下流",
                "**アジャイル開発宣言(2001)**: 価値ベースの開発思想",
                "**スクラム**: スプリント単位、Product Owner / Scrum Master / Dev Team",
                "**カンバン**: 流れの可視化",
                "**XP(eXtreme Programming)**: ペアプロ ・ TDD",
                "**SAFe / LeSS / Nexus**: スケールド ・ アジャイル",
                "**Lean Startup**: MVP / Pivot / Build-Measure-Learn",
                "**Design Sprint**: 5 日間で問題解決",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "DevOps ・ SRE ・ MLOps",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**DevOps**: 開発と運用の融合",
                "**CI/CD**: 自動ビルド ・ テスト ・ デプロイ",
                "**Infrastructure as Code(IaC)**: Terraform / CloudFormation / Pulumi",
                "**SRE(Site Reliability Engineering)**: Google 提唱、信頼性工学",
                "**SLI / SLO / SLA**: サービスレベル指標",
                "**エラーバジェット**: 信頼性目標と新機能のバランス",
                "**MLOps**: ML モデル運用の DevOps 拡張",
                "**LLMOps**: LLM 特有の運用課題",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "情報セキュリティとゼロトラスト",
      overview:
        "現代のセキュリティアーキテクチャと脅威対策を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "ゼロトラストと SASE",
          blocks: [
            {
              type: "def",
              title: "ゼロトラスト(Zero Trust)",
              body: "『**境界防御は限界**』という前提に立ち、社内 ・ 社外を問わず **すべてのアクセスを常に検証** するセキュリティモデル。Forrester が 2010 年に提唱、コロナ禍のリモートワークで急速に普及。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SASE(Secure Access Service Edge)**: ネットワーク + セキュリティのクラウド統合",
                "**SSE(Security Service Edge)**: SASE のセキュリティ部分",
                "**SD-WAN**: ソフトウェア定義 WAN",
                "**ZTNA(Zero Trust Network Access)**: 必要最小限のアクセス",
                "**CASB(Cloud Access Security Broker)**: クラウド利用の統制",
                "**CSPM / CWPP / CIEM**: クラウドセキュリティ管理",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "脅威と対策",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ランサムウェア**: 暗号化 + 脅迫。バックアップ + ネットワーク分離",
                "**サプライチェーン攻撃**: 取引先経由の侵入",
                "**標的型攻撃 / フィッシング**: 教育 + EDR + ソフトウェア署名",
                "**ビジネスメール詐欺(BEC)**: 高度ななりすまし詐欺",
                "**ディープフェイク**: 音声 ・ 動画の偽造",
                "**EDR / XDR / SOC**: 検知 ・ 対応",
                "**SIEM / SOAR**: ログ集約 + 自動応答",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "データ駆動経営と BI",
      overview:
        "BI ツール ・ ダッシュボード ・ KPI / OKR を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "BI ツールとダッシュボード",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Tableau**: 視覚的データ探索の代表",
                "**Power BI**: Microsoft のエンタープライズ BI",
                "**Looker / Looker Studio**: Google 系",
                "**Qlik Sense**: アソシエーション分析",
                "**Domo**: クラウド BI",
                "**メトリクスストア**: 一貫性ある KPI 定義(LookML / dbt Metrics)",
                "**Embedded Analytics**: アプリ内 BI",
                "**Self-service BI**: 非エンジニアによる分析",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "データドリブン経営",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**KPI(Key Performance Indicator)**: 目標達成度の指標",
                "**OKR(Objectives and Key Results)**: Google 流の目標管理",
                "**KGI(Key Goal Indicator)**: 最終目標の指標",
                "**バランススコアカード(BSC)**: 4 視点で経営評価",
                "**A/B テスト**: 実験ベースの意思決定",
                "**Customer Data Platform(CDP)**: 顧客データ統合",
                "**Master Data Management(MDM)**: 基幹データ統一",
                "**データ民主化**: 全社員がデータにアクセス",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "DX 人材とリスキリング",
      overview:
        "DX 推進に必要な人材像と育成 ・ 組織論を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "DX 人材の類型",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ビジネスアーキテクト**: 経営戦略と DX をつなぐ",
                "**プロダクトマネージャー**: プロダクト全体の責任者",
                "**データサイエンティスト**: データ分析専門",
                "**データエンジニア**: データ基盤構築",
                "**サイバーセキュリティエンジニア**",
                "**UX デザイナー**: 顧客体験設計",
                "**ソフトウェアエンジニア**: 内製開発を担う",
                "**AI エンジニア**: ML / LLM の実装 ・ 運用",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "リスキリングと組織変革",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**リスキリング**: 既存人材の新スキル習得",
                "**アップスキリング**: 既存スキルの高度化",
                "**マナビDX**: 経産省 + IPA のデジタル人材育成プラットフォーム",
                "**DX 推進スキル標準(DSS-P)**",
                "**ITSS+ / DSS+**: IT 人材スキル標準のデジタル拡張",
                "**両利きの経営(Ambidexterity)**: 既存事業の深化 + 新規事業の探索",
                "**Agility / Bimodal IT**: 安定運用 + 高速変革の二重組織",
                "**スタートアップ ・ オープンイノベーション**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "業界別 DX 事例と受験対策",
      overview:
        "代表的な DX 事例と試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "業界別 DX 事例",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**金融**: ネット銀行 ・ ロボアド ・ AI 与信 ・ ブロックチェーン送金",
                "**製造**: スマートファクトリー ・ 予知保全 ・ デジタルツイン",
                "**小売 / EC**: O2O / OMO ・ パーソナライズレコメンド ・ 在庫最適化",
                "**医療**: オンライン診療 ・ AI 診断補助 ・ 電子カルテ",
                "**教育 / EdTech**: アダプティブラーニング ・ MOOC ・ AI 採点",
                "**運輸 / 物流**: 自動運転 ・ ドローン配送 ・ ラストワンマイル",
                "**農業**: スマート農業 ・ 衛星画像分析 ・ 自動収穫ロボット",
                "**公共**: GovTech ・ デジタル庁 ・ マイナンバー ・ オンライン行政",
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
                "**第 2 章**: 経産省 DX 定義 / 3 段階 / DX 推進指標 / DX 認定制度",
                "**第 3 章**: AI / ML / DL / 生成 AI / EU AI Act / RAG / プロンプト",
                "**第 4 章**: IaaS/PaaS/SaaS / 3 大クラウド / コンテナ / サーバレス",
                "**第 5 章**: IoT / 5G の 3 特性 / ブロックチェーン / NFT / Web3",
                "**第 6 章**: RPA / アジャイル / スクラム / DevOps / IaC / SRE",
                "**第 7 章**: ゼロトラスト / SASE / ランサムウェア / EDR/SIEM",
                "**第 8 章**: BI ツール / KPI / OKR / CDP / A/B テスト",
                "**第 9 章**: DX 人材類型 / リスキリング / マナビ DX / 両利き経営",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**120 問 / 60 分** = 1 問 30 秒。スピードが命",
                "**直近 1 年の IT ニュース** をキャッチアップしておく",
                "**新製品 ・ 新サービス名** が出題されることがあるので、最新動向の素直な把握",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
                "**消去法**: 知らない用語が出ても他の選択肢から絞る",
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
              text: "DX 検定でビジネス × IT の広範な視野を得たら、関心領域に応じて深掘りを。AI なら[G 検定](/certs/g-test) ・ [生成 AI パスポート](/certs/genai-passport)、データなら[DS 検定](/certs/ds-literacy) ・ [DS エキスパート](/certs/ds-expert)、IT 国家資格なら[応用情報](/certs/applied-info)、クラウドなら[AWS AI Practitioner](/certs/aws-ai-practitioner)が次のステップです。",
            },
            {
              type: "practical",
              title: "DX 検定のキャリア活用",
              body: "**DX 推進担当 ・ 企画 ・ コンサル ・ 営業** で評価が高く、**DX エキスパート(800 点以上)** は LinkedIn ・ 名刺に明記する人が多い。経営層との会話で『最新トレンドを把握している』というシグナルになり、社内 DX プロジェクトのリーダー打診のきっかけにもなります。",
            },
          ],
        },
      ],
    },
  ],
};
