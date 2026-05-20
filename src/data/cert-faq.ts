export type FaqItem = { q: string; a: string };

export const certFaq: Record<string, FaqItem[]> = {
  "g-test": [
    {
      q: "G検定の合格率はどのくらいですか?",
      a: "近年の合格率はおおむね 60〜70% で推移しています。受験者層が事前学習している前提のため、十分準備すれば合格しやすい試験です。ただし 2026 年改訂で生成 AI の比重が大幅に増えたため、最新シラバスへの対応が重要です。",
    },
    {
      q: "G検定の試験時間と問題数はどう変わりましたか?",
      a: "2026 年から、オンライン試験は 100 分・小問 145 問程度、会場試験は 120 分・小問 145 問程度に変更されました。試験時間あたりの問題数が増え、瞬時の判断力が求められます。",
    },
    {
      q: "G検定で生成 AI 関連はどれくらい出ますか?",
      a: "2024 年 11 月の改訂以降、生成 AI(LLM・RAG・LoRA・プロンプトエンジニアリング・RLHF・拡散モデル・AI 規制 EU AI Act など)の出題比重が大幅に増えました。本サイトの[第 7 章 生成 AI と LLM](/certs/g-test/textbook#ch7) を参照してください。",
    },
    {
      q: "G検定の対策にどれくらい時間が必要ですか?",
      a: "実務経験者で 30〜50 時間、未経験者で 60〜100 時間が目安です。本サイトの[学習プラン計算機](/plan)で個別に逆算できます。",
    },
    {
      q: "G検定とE資格の違いは何ですか?",
      a: "G検定はジェネラリスト向けで AI を活用する立場の知識を問います(数式は最小限)。E資格はエンジニア向けで実装力・数学的厳密性が問われ、JDLA 認定プログラムの修了が受験要件です。詳しくは[検定比較](/compare)へ。",
    },
  ],
  "e-shikaku": [
    {
      q: "E資格の合格率と受験要件は?",
      a: "合格率は近年 60〜70% 前後で推移しています。受験には JDLA 認定プログラム(20〜40 万円)の修了が必須です。試験は会場試験 120 分・問題数 104 問。",
    },
    {
      q: "E資格 2026 年シラバス改訂の主な変更点は?",
      a: "E2026#2(2026 年 8 月以降)から新シラバスが適用されます。基盤モデル(BERT/GPT、Few/Zero-shot、RAG)、拡散モデル、フローベース生成モデル、自己教師あり学習(Contrastive Learning)、能動学習、連合学習(FedAvg)、量子化・プルーニング・蒸留が追加されています。",
    },
    {
      q: "E資格対策にはどんな数学レベルが必要ですか?",
      a: "線形代数(行列・固有値分解・特異値分解)、微積分(偏微分・連鎖律)、確率(ベイズ・KL ダイバージェンス)が必須です。本サイトの[数学基礎](/math)で復習できます。",
    },
    {
      q: "E資格 LoRA・RLHF・連合学習の出題例はありますか?",
      a: "本サイトの[E資格 演習問題](/certs/e-shikaku/quiz)で 2026 シラバス対応の問題を多数収録しています。教科書[第 7 章 基盤モデルと最新トレンド](/certs/e-shikaku/textbook#ch7)も参照を。",
    },
    {
      q: "E資格と統計検定の違いは?",
      a: "E資格は深層学習・実装に特化、統計検定は古典統計学の理論に特化しています。AI エンジニア志望なら統計検定 2 級 → E資格、データ分析志望なら統計検定 2 級 → 準1級が王道です。",
    },
  ],
  "ds-literacy": [
    {
      q: "DS検定 リテラシーレベルの出題範囲は?",
      a: "データサイエンティスト協会のスキル定義に基づき、ビジネス力・データサイエンス力・データエンジニアリング力の 3 軸を網羅。Excel・SQL・Python の基礎、可視化、AI 倫理・法務までが範囲です。",
    },
    {
      q: "DSリテラシーレベルの難易度はどのくらい?",
      a: "数学的には統計検定 3 級〜2 級基礎レベル、加えて実務寄りの『どの場面でどの手法を使うか』が問われます。完全文系の方でも 30〜50 時間で合格可能です。",
    },
    {
      q: "DS検定の合格に必要な学習時間は?",
      a: "実務 1〜2 年経験者で 30 時間、未経験者で 60〜80 時間が目安。本サイトの教科書 + 演習問題で 1〜2 ヶ月で対策可能です。",
    },
  ],
  "ds-basic": [
    {
      q: "DS検定 基礎レベルの位置付けは?",
      a: "DS検定リテラシーの上位レベルで、実装ハンズオン要素が増します。Pandas・scikit-learn での簡単な機械学習・統計モデリング・SQL の応用が含まれます。",
    },
    {
      q: "DS基礎の対策時間の目安は?",
      a: "DSリテラシー合格者で 50〜80 時間、未経験者で 100〜150 時間が一般的です。",
    },
  ],
  survey: [
    {
      q: "統計調査士はどんな試験ですか?",
      a: "公的統計の作成・利用に関する基礎知識を測る検定です。統計法・基幹統計・調査設計・標本抽出法が中心で、行政・公共系職業・公的データ分析担当者向けです。",
    },
    {
      q: "統計調査士と統計検定 2 級の違いは?",
      a: "統計検定 2 級が古典的な推測統計に特化しているのに対し、統計調査士は『公的統計の制度・調査の組み立て方』が中心です。",
    },
  ],
  "survey-specialist": [
    {
      q: "専門統計調査士は誰向けですか?",
      a: "市場調査会社・シンクタンク・官公庁の統計部門担当者向け。標本設計・標本誤差の評価・調査票設計・誤差統制を実務レベルで運用できることが求められます。",
    },
  ],
  "genai-passport": [
    {
      q: "生成 AI パスポート検定とは何ですか?",
      a: "一般社団法人 **生成 AI 活用普及協会(GUGA)** が主催する、生成 AI を **業務で安全 / 効果的に使うリテラシー** を測るオンライン検定。技術者ではない一般のビジネスパーソンが主対象で、年 3 〜 4 回(2 月・6 月・10 月など)実施されています。",
    },
    {
      q: "試験の問題数 ・ 時間 ・ 合格率は?",
      a: "**60 問 / 60 分**、4 択選択式(計算問題なし)、合格基準は正答率 **約 70%**。受験者の多くがビジネスパーソンである前提もあり、合格率は **おおむね 70 〜 80%** 前後で推移しています(年度により変動)。",
    },
    {
      q: "G 検定との違いは?",
      a: "**生成 AI パスポート** は生成 AI に特化し、業務活用 ・ コンプライアンスを中心に問います。**G 検定** は AI 全般(機械学習 ・ DL ・ AI 倫理 ・ 各国規制)を技術的にも俯瞰します。両方取得すると『生成 AI を入口に AI 全般までカバーできる人』として強力です。詳しくは[G 検定の概要](/certs/g-test)も参照を。",
    },
    {
      q: "学習時間の目安は?",
      a: "ビジネスパーソンで **30 〜 50 時間**、AI に触ったことがない場合でも **50 〜 80 時間** が目安です。1 〜 2 ヶ月で取得するパターンが典型的。本サイトの[学習プラン計算機](/plan)で個別に逆算できます。",
    },
    {
      q: "合格後のキャリア活用はどうすればよいですか?",
      a: "社内の **AI 活用推進担当 ・ ガイドライン策定メンバー ・ 部門 AI リーダー** などの土台になります。さらに踏み込むなら **G 検定 → DS 検定 → E 資格** とステップアップする学習動線が王道です。",
    },
  ],
  "ds-expert": [
    {
      q: "DS エキスパートはどんな試験ですか?",
      a: "**日本統計学会** が主催する、データサイエンス系統計検定の **最高峰**(DS 基礎 → DS 発展 → DS エキスパート)。Python / R での **高度な統計分析・機械学習・ベイズ・時系列・因果推論・MLOps まで** を測る CBT 90 分の試験です。",
    },
    {
      q: "DS 発展との違いは何ですか?",
      a: "DS 発展が **標準的な分析(回帰・標準的 ML)** までを範囲とするのに対し、DS エキスパートは **ベイズ ・ 因果推論 ・ 時系列 ・ MLOps** までを含みます。実務で 1 〜 3 年経験した中堅以上が想定対象です。",
    },
    {
      q: "学習時間の目安は?",
      a: "**300 時間前後** が中央値。統計検定 2 級・準 1 級レベルの統計理論 + Python の pandas/scikit-learn の操作が前提として必要です。本サイトの[学習プラン計算機](/plan)で個別に逆算できます。",
    },
    {
      q: "合格率はどのくらいですか?",
      a: "統計学会未公表ですが、難易度から **30〜40% 前後** と推定されます。出題は **設計の判断** を問うため、用語暗記だけでは合格できません。",
    },
    {
      q: "受験前に他の検定を取るべきですか?",
      a: "**統計検定 2 級 + 準 1 級** または **DS 発展** の合格相当の理解があると、本試験の準備が大きく楽になります。逆に飛び級で挑戦すると、ベイズ ・ 因果推論で苦戦しがちです。",
    },
  ],
  "python-data": [
    {
      q: "Python 3 エンジニア認定 データ分析試験とは?",
      a: "**一般社団法人 Python エンジニア育成推進協会(PythonED)** が主催する CBT 試験。**NumPy / pandas / Matplotlib / scikit-learn** と統計 / 機械学習の基礎が出題範囲。データサイエンティスト未経験者の登竜門に最適です。",
    },
    {
      q: "試験の問題数 ・ 時間 ・ 合格基準は?",
      a: "**40 問 / 60 分 / 4 択選択式 / 合格 70%(28 問以上正解)**。CBT で全国の試験会場で随時受験可能。",
    },
    {
      q: "学習時間の目安は?",
      a: "Python 文法に慣れている人で **40 〜 60 時間**、未経験者で **80 〜 120 時間** が目安。本サイトの[Python データ分析 教科書](/certs/python-data/textbook)で 10 章を体系学習しつつ、Jupyter で実機演習するのが最短ルートです。",
    },
    {
      q: "DS 検定との違いは?",
      a: "**Python データ分析試験** は Python ライブラリの実装力が中心、**DS 検定** はデータサイエンス全般のリテラシー(ビジネス力含む)が中心。技術志向なら本資格、ビジネス志向なら[DS 検定](/certs/ds-literacy)が向きます。",
    },
    {
      q: "合格後のステップアップは?",
      a: "**DS 発展 → DS エキスパート**(統計理論寄り)、**G 検定 → E 資格**(深層学習寄り)が王道です。",
    },
  ],
  "ai-implementation": [
    {
      q: "AI 実装検定とは何ですか?",
      a: "**一般社団法人 エッジ AI 協会** が主催する、AI の **実装力** を測る検定。**S(専門家)/ A(中級)/ B(入門)** の 3 段階があり、Python ・ NumPy ・ PyTorch / TensorFlow による主要モデルのコード理解が中心です。",
    },
    {
      q: "G 検定 ・ E 資格との違いは?",
      a: "**G 検定** は概念 ・ 倫理が中心(数学最小限)、**E 資格** は高度な数学 + 実装で認定講座が必須。**AI 実装検定** はその中間で、**実装寄りだが認定講座は不要**。独学で受けやすいのが特徴です。",
    },
    {
      q: "学習時間の目安は?",
      a: "A 級で **100 〜 150 時間** が中央値。Python と NumPy / scikit-learn / PyTorch / Keras を一度実機で触っていれば短くなります。本サイトの[Python データ分析 教科書](/certs/python-data)で基礎を固めてから本試験対策に進むと効率的です。",
    },
    {
      q: "B 級から受けるべきですか?",
      a: "プログラミング初心者は B 級から、Python / NumPy / 機械学習を触ったことがある人は A 級から始めるのが目安。A 級は B 級の範囲を含むので、自信があれば A 級から受験して問題ありません。",
    },
    {
      q: "合格後のキャリア活用は?",
      a: "**AI エンジニア / 機械学習エンジニア** の中堅以下のシグナルとして機能します。さらに踏み込みたい場合は **E 資格** で深層学習の数学側、**生成 AI パスポート → G 検定** で事業活用側を補強する道が王道です。",
    },
  ],
  "image-processing": [
    {
      q: "画像処理エンジニア検定 エキスパートとは?",
      a: "**公益財団法人 CG-ARTS 協会** が主催する、画像処理 ・ コンピュータビジョンの **理論と実装の両面** を測る検定。古典的画像処理(フィルタ ・ 周波数解析)から DL ベース CV(CNN ・ U-Net ・ YOLO)まで広範に出題されます。",
    },
    {
      q: "ベーシックとエキスパートの違いは?",
      a: "**ベーシック** は基本的な画像処理(色 ・ 濃度変換 ・ 簡単なフィルタ)が中心、**エキスパート** はその上位で **周波数解析 ・ 機械学習 ・ DL ・ 3 次元視覚** まで含みます。エキスパートが画像 AI エンジニアの専門性証明として位置付けられます。",
    },
    {
      q: "G 検定 ・ E 資格と何が違う?",
      a: "G 検定 / E 資格は AI 全般を扱うのに対し、**画像処理エンジニア検定は画像 ・ CV に特化** しています。**古典手法(フィルタ ・ 周波数 ・ SIFT ・ HOG)の比重が高い** のが他の AI 検定と最も異なる点です。",
    },
    {
      q: "学習時間の目安は?",
      a: "**100 〜 150 時間** が中央値。公式テキスト『ディジタル画像処理』(CG-ARTS 編著)を 1 周し、過去問演習で出題傾向を体感するのが王道です。",
    },
    {
      q: "どんな職種で評価されますか?",
      a: "**自動運転 ・ 医用画像 ・ 産業検査 ・ AR/VR ・ 監視カメラ ・ 生成 AI** など、画像 AI が事業の中核となる企業で評価が高い検定です。",
    },
  ],
  "applied-info": [
    {
      q: "応用情報技術者試験(AP)とは?",
      a: "**情報処理推進機構(IPA)** が主催する国家試験(レベル 3)。実務 3 〜 5 年の IT エンジニアが対象で、ITストラテジスト ・ システムアーキテクト ・ DB スペシャリストなど高度試験(レベル 4)の登竜門に位置付けられます。",
    },
    {
      q: "試験形式と合格率は?",
      a: "**午前 80 問 / 150 分 + 午後 11 問中 5 問選択 / 150 分**。両方で 60 点以上が合格基準。**合格率は約 23 〜 26%** で、IPA 試験の中では中堅難度です。",
    },
    {
      q: "学習時間の目安は?",
      a: "基本情報合格者で **200 〜 300 時間**、未経験者で **300 〜 500 時間** が目安。午前は過去問演習 8 割の比重、午後は『**選択 5 問の徹底対策**』が王道です。",
    },
    {
      q: "AI / データ系の出題はどれくらい?",
      a: "午前で **混同行列の計算 ・ 機械学習用語 ・ 確率統計 ・ アルゴリズム計算量** が頻出。午後はプログラミング(問 3)・DB(問 6)・組込み(問 7)で AI / データに接続できます。本サイトの教科書はこの重点トピックに集中しています。",
    },
    {
      q: "合格後のキャリア活用は?",
      a: "**国家試験で公的認知度が高く、経歴書の 1 行で明確なシグナル** になります。SI 系企業 ・ 金融 ・ 公官庁での評価が高く、転職市場でも『応用情報持ち』はスクリーニングで残りやすい実利があります。",
    },
  ],
  "aws-ai-practitioner": [
    {
      q: "AWS Certified AI Practitioner(AIF-C01)とは?",
      a: "**AWS が提供する AI / 生成 AI / 機械学習の基礎リテラシー** を測る Foundational レベルの認定試験(2024 年追加)。エンジニア限定ではなく、ビジネスサイド ・ PM ・ 営業 ・ コンサルタントなど AWS の AI を活用するすべての職種が想定対象です。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督 / 65 問 / 90 分 / 選択式 / 合格 700 点(1000 点満点)**。受験料約 **100 USD**、有効期限 **3 年**。",
    },
    {
      q: "出題比重は?",
      a: "Domain 1 AI/ML 基礎(20%)・ Domain 2 生成 AI 基礎(24%)・ Domain 3 基盤モデル応用(28%)・ Domain 4 責任ある AI(14%)・ Domain 5 安全性 / コンプライアンス(14%)。**生成 AI 関連が 50% 以上** を占めます。",
    },
    {
      q: "学習時間の目安は?",
      a: "AWS / AI に触れたことがある人で **40 〜 60 時間**、未経験者で **60 〜 100 時間** が目安。本サイトの[G 検定](/certs/g-test) ・ [生成 AI パスポート](/certs/genai-passport)で AI 概念を補強しつつ、AWS マネジメントコンソールで Bedrock を実機で触ると効率的です。",
    },
    {
      q: "次のステップは?",
      a: "AIF-C01 → **AWS Certified Machine Learning Engineer Associate(MLA-C01)** または **Machine Learning Specialty(MLS-C01)** が ML 道の正規ステップ。クラウド全般を強化したいなら **Solutions Architect Associate(SAA-C03)** へ進むのも有力です。",
    },
  ],
  "basic-info": [
    {
      q: "基本情報技術者試験(FE)とは?",
      a: "**情報処理推進機構(IPA)** が主催する国家試験(レベル 2)。**通年 CBT で受験可能** な IT エンジニアの登竜門で、年間 10 万人超が受験。応用情報技術者(AP、レベル 3)の前段に位置付けられます。",
    },
    {
      q: "試験形式と合格率は?",
      a: "**科目 A 60 問 / 90 分 + 科目 B 20 問 / 100 分**(CBT)。両方で **600 / 1000 点以上** が合格基準。合格率は **約 25 〜 35%**。受験料 7,500 円(税込)。",
    },
    {
      q: "2023 年改訂で何が変わりましたか?",
      a: "(1) **通年 CBT 化** で随時受験可能に、(2) 旧『午前 80 問』が **科目 A 60 問** に削減、(3) 旧『午後の言語選択』が **科目 B のアルゴリズム + 情報セキュリティ重点** に再編、(4) 疑似言語が **C 系から Python 風** に変更。",
    },
    {
      q: "学習時間の目安は?",
      a: "**150 〜 250 時間** が中央値。IT パスポート合格者は短く済みます。**科目 B のアルゴリズム** が最大の壁で、トレース表を書く習慣をつけることが合格の鍵です。",
    },
    {
      q: "応用情報との違いは?",
      a: "**FE はマークシート + CBT のみ**(全選択式)、**AP は午後に記述問題** あり。FE は基礎技能の証明、AP は『高度試験への登竜門』として位置付けが異なります。詳しくは[応用情報](/certs/applied-info)のページを。",
    },
  ],
  "azure-ai-900": [
    {
      q: "Microsoft Azure AI Fundamentals(AI-900)とは?",
      a: "**Microsoft が提供する Azure 認定の Fundamentals レベル** に位置する AI 入門認定。Azure Machine Learning ・ AI Vision ・ AI Language ・ Speech ・ Document Intelligence ・ Azure OpenAI Service ・ Microsoft Copilot ファミリを総覧します。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 約 40 〜 60 問 / 60 分 / 選択式 / 合格 700 点(1000 点満点)**。受験料 **約 12,500 円(99 USD)**、**有効期限なし(継続有効)**。",
    },
    {
      q: "AWS AI Practitioner との違いは?",
      a: "**Azure AI-900 は Azure 専用、AWS AI Practitioner は AWS 専用**。両者は競合せず、クラウド AI のリテラシーとして両方持つことに価値があります。AI-900 は **有効期限なし**、AWS AI Practitioner は **3 年**。",
    },
    {
      q: "学習時間の目安は?",
      a: "Azure / AI に触れたことがある人で **40 〜 60 時間**、未経験者で **60 〜 100 時間**。**Microsoft Learn の AI-900 ラーニングパス**(無料)が事実上の公式教材で、本サイトの教科書と組み合わせると効率的です。",
    },
    {
      q: "次のステップは?",
      a: "AI-900 → **AI-102(Azure AI Engineer Associate)** が王道。クラウド全般を強化したいなら **AZ-900 → AZ-104** へ進む道もあります。AWS との二刀流にしたい場合は本サイトの[AWS AI Practitioner](/certs/aws-ai-practitioner)も。",
    },
  ],
  "gcp-gen-ai-leader": [
    {
      q: "Google Cloud Generative AI Leader とは?",
      a: "**Google Cloud が提供する Foundational(基礎)レベル** の生成 AI 認定。**Vertex AI ・ Gemini ・ Imagen ・ Veo ・ Gemini for Workspace** などの生成 AI サービス群と、責任ある AI ・ 組織導入のリーダーシップ知識を測ります。AWS AI Practitioner ・ Azure AI Fundamentals と並ぶ三大クラウドの AI 入門認定の 1 つ。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**オンライン監督受験 or テストセンター / 50 〜 60 問 / 90 分 / 選択式 / 受験料 99 USD / 有効期限 3 年**。コードを書く問題はなく、サービスの選び分けが中心です。",
    },
    {
      q: "AWS AI Practitioner ・ Azure AI-900 との違いは?",
      a: "**ベンダー専用認定**(GCP / AWS / Azure)である点が違いの本質。3 つは競合せず、すべて Foundational レベルで生成 AI のリテラシーを測ります。**三大クラウドを揃えると AI 戦略担当 ・ コンサルタントとして強いシグナル** になります。",
    },
    {
      q: "学習時間の目安は?",
      a: "AI / Google Cloud に触れたことがある人で **40 〜 60 時間**、未経験者で **60 〜 100 時間**。**Google Cloud Skills Boost の専用ラーニングパス**(無料)が事実上の公式教材で、本サイトの教科書と組み合わせると効率的です。",
    },
    {
      q: "次のステップは?",
      a: "Generative AI Leader → **Associate Cloud Engineer**(クラウド全般)または **Professional ML Engineer**(ML 専門)が王道。AWS / Azure と二刀流にしたい場合は本サイトの[AWS AI Practitioner](/certs/aws-ai-practitioner) ・ [Azure AI-900](/certs/azure-ai-900)も。",
    },
  ],
  "db-specialist": [
    {
      q: "データベーススペシャリスト試験(DB)とは?",
      a: "**情報処理推進機構(IPA)** が主催する国家試験(レベル 4 高度試験)。応用情報技術者(レベル 3)の上位で、**DBA / データエンジニア / データアーキテクト** の専門性証明として位置付けられます。年 1 回(秋)実施。",
    },
    {
      q: "試験形式と合格率は?",
      a: "**午前 I + 午前 II + 午後 I + 午後 II の 4 段階**。各段階で 60 点以上が合格基準。**合格率は約 17 〜 18%** で、IPA 試験の中でも難関の部類。受験料 7,500 円(税込)。",
    },
    {
      q: "学習時間の目安は?",
      a: "**300 〜 500 時間** が中央値。応用情報合格者は午前 I が 2 年免除されます。**午後 II の論述問題**(120 分で 1 問の事例)が最大の壁で、過去問の反復演習が合格率に直結します。",
    },
    {
      q: "応用情報との違いは?",
      a: "**応用情報は IT 全般** を浅く広く問うのに対し、**DB スペシャリストは DB ・ データ基盤に特化** して深く問います。午後 II の長文論述 + ER 図 ・ 関係スキーマ作成が最大の違い。",
    },
    {
      q: "合格後のキャリアは?",
      a: "**金融 ・ 公官庁 ・ 大手 SI** で評価が特に高く、**DBA / データエンジニア / データアーキテクト** のシニアポジションへの強いシグナル。同じ IPA 高度試験で **ITストラテジスト ・ システムアーキテクト** に進むキャリアパスも王道です。",
    },
  ],
  "dx-kentei": [
    {
      q: "DX 検定とは?",
      a: "**一般社団法人 日本イノベーション融合学会**(共催: ICT 産業推進機構)が主催する、デジタルトランスフォーメーション(DX)に関するビジネス × IT の知識を測るスコア型認定。**ビジネスサイド ・ 経営層 ・ 企画 ・ コンサルタント** が想定対象です。",
    },
    {
      q: "試験形式とスコア認定は?",
      a: "**オンライン IBT / 120 問 / 60 分 / 4 択選択式**(参考)。スコア型で **800 点以上 = DX エキスパート、700 点以上 = DX プロフェッショナル、600 点以上 = DX スタンダード**(1000 点満点)。年 2 回(7 月・1 月)実施。",
    },
    {
      q: "学習時間の目安は?",
      a: "ビジネスパーソンで **40 〜 60 時間**、IT 業界経験のある人ならさらに短く済みます。**毎年シラバスがアップデート** されるため、最新の IT ニュースのキャッチアップが合格の鍵です。",
    },
    {
      q: "G 検定 ・ 生成 AI パスポートとの違いは?",
      a: "**DX 検定は AI / IoT / クラウド / 5G / ブロックチェーンなど IT トレンドを広く** 問います。G 検定は AI 全般、生成 AI パスポートは生成 AI に特化。**経営側に立つ方は DX 検定** が最も適合します。",
    },
    {
      q: "合格後のキャリア活用は?",
      a: "**DX 推進担当 ・ 企画 ・ コンサル ・ 営業** で評価が高く、**DX エキスパート(800 点以上)** は LinkedIn ・ 名刺に明記する人が多い。社内 DX プロジェクトのリーダー打診のきっかけになります。",
    },
  ],
  "aws-saa": [
    {
      q: "AWS SAA-C03 とは?",
      a: "**AWS Certified Solutions Architect ─ Associate(SAA-C03)** は AWS 認定の Associate レベルで最も人気の高いアーキテクト系資格。EC2 / S3 / RDS / Lambda / VPC / IAM などの主要サービスを Well-Architected Framework に沿って組み合わせる設計力を測ります。",
    },
    {
      q: "試験形式と合格スコアは?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 130 分 / 単一・複数選択 / 合格 720 / 1000 点**。受験料 **150 USD**、有効期限 **3 年**。",
    },
    {
      q: "AI Practitioner との違いは?",
      a: "**AI Practitioner は Foundational(基礎)** で AI / 生成 AI 専用、**SAA は Associate(中級)** でアーキテクト全般を扱います。AWS で本格的にシステムを設計するなら SAA、ビジネスサイドで AI を活用するなら AI Practitioner が適合。両方取得が王道です。",
    },
    {
      q: "学習時間の目安は?",
      a: "AWS 未経験者で **150 〜 200 時間**、Cloud Practitioner / AI Practitioner 合格者で **100 〜 150 時間**、AWS 実務経験者で **60 〜 100 時間** が目安。AWS 無料利用枠で実機を触ると効率的です。",
    },
    {
      q: "合格後のキャリアは?",
      a: "**AWS で仕事をするエンジニアの標準資格**。次のステップは **Solutions Architect Professional(SAP-C02)・ ML Engineer Associate ・ Specialty 系** が王道。世界中のクラウドエンジニア採用で広く参照される認定です。",
    },
  ],
  "it-passport": [
    {
      q: "ITパスポート試験(iパス)とは?",
      a: "**情報処理推進機構(IPA)** が主催する国家試験(レベル 1)。**IT を活用するすべての社会人 ・ 学生** が想定対象で、ストラテジ系 / マネジメント系 / テクノロジ系の 3 分野で IT 全般のリテラシーを測ります。年間受験者数 **20 万人超** で IPA 試験の中で最も裾野が広い入門認定です。",
    },
    {
      q: "試験形式と合格率は?",
      a: "**マウス操作のみのオンライン CBT / 100 問 / 120 分**。総合 600 / 1000 点 + **各分野評価点 300 点以上の足切り**。合格率は **約 50%** で、IPA 試験の中で最も合格しやすい入門レベル。",
    },
    {
      q: "学習時間の目安は?",
      a: "**100 〜 200 時間** が中央値。ITパスポートは出題パターンが安定しているため、**過去問演習を繰り返すだけで合格できる** ケースが多い。1 日 30 分 × 2 ヶ月で対策可能。",
    },
    {
      q: "新卒採用 ・ 就活で評価されますか?",
      a: "新卒採用 ・ 中途採用 ・ 社内 IT リテラシー研修で **広く活用** されています。技術職以外も含む全社員のベースラインとして位置付ける企業も多く、**IT 業界外でも履歴書に記載できる** 強みがあります。",
    },
    {
      q: "次のステップは?",
      a: "iパス合格 → **基本情報技術者(FE、レベル 2)** が王道。技術寄りなら[基本情報](/certs/basic-info)、ビジネス寄りなら[DX 検定](/certs/dx-kentei)、AI 寄りなら[生成 AI パスポート](/certs/genai-passport) ・ [G 検定](/certs/g-test)、データ寄りなら[DS 検定](/certs/ds-literacy)が候補。",
    },
  ],
  "power-bi": [
    {
      q: "Microsoft PL-300(Power BI Data Analyst Associate)とは?",
      a: "**Microsoft が提供するデータアナリスト向けの Associate レベル認定**。Power BI Desktop / Service / Power Query / DAX / Microsoft Fabric / Copilot を使ったデータ分析のライフサイクル全体をカバーします。**ビジネスアナリスト ・ BI 開発者 ・ データアナリスト** が想定対象。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 約 40 〜 60 問 / 120 分 / 選択式 + ケーススタディ + ドラッグ&ドロップ / 合格 700 / 1000 点**。受験料 **約 21,000 円(165 USD)**、有効期限 **1 年**(Microsoft Learn での再認定で延長)。",
    },
    {
      q: "学習時間の目安は?",
      a: "Excel / SQL に慣れている人で **40 〜 60 時間**、未経験者で **60 〜 120 時間** が目安。**Microsoft Learn の PL-300 ラーニングパス**(無料)が事実上の公式教材で、本サイトの教科書と組み合わせると効率的です。",
    },
    {
      q: "Tableau Desktop Specialist との違いは?",
      a: "**PL-300 は Power BI 専用、Tableau Desktop Specialist は Tableau 専用**。両者は競合するベンダー認定。**Microsoft 365 / Azure を採用する企業** なら PL-300、**汎用 ・ 高度可視化重視** なら Tableau が選択肢。",
    },
    {
      q: "次のステップは?",
      a: "PL-300 → **DP-600(Microsoft Fabric Analytics Engineer Associate)** または **DP-700(Fabric Data Engineer Associate)** で Microsoft の最新データ統合プラットフォームを深掘りするのが王道。",
    },
  ],
  "tableau-specialist": [
    {
      q: "Tableau Desktop Specialist とは?",
      a: "**Salesforce(Tableau)** が提供する BI ツール認定の **エントリーレベル**。Tableau Desktop の基本操作 ・ データ接続 ・ 可視化 ・ 計算 ・ 分析 ・ 共有を扱い、**Microsoft Power BI(PL-300)と並ぶ BI 認定の双璧**。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**オンライン監督受験 / 45 問 / 60 分 / 多肢選択 + ハンズオン形式 / 合格 約 75%(参考) / 受験料 100 USD / 有効期限なし(永続)**。スピード勝負で 1 問 80 秒のペース感覚が必要。",
    },
    {
      q: "学習時間の目安は?",
      a: "Excel / SQL に慣れている人で **30 〜 50 時間**、未経験者で **40 〜 80 時間**。**Tableau eLearning(無料)+ サンプルデータ Superstore** での実機演習が王道。",
    },
    {
      q: "Power BI(PL-300)との違いは?",
      a: "**Tableau は汎用 ・ 高度可視化 ・ 欧米系企業で強い**、**Power BI は Microsoft 365 統合に強い**。両者は競合するベンダー認定で、**両方持つと希少な BI スキル証明** に。本サイトの[Power BI](/certs/power-bi)も併用がおすすめ。",
    },
    {
      q: "次のステップは?",
      a: "Specialist → **Tableau Certified Data Analyst**(中級)が王道。Server 系なら **Server Certified Associate** へ進むキャリアパスも。",
    },
  ],
  "azure-ai-102": [
    {
      q: "Microsoft AI-102(Azure AI Engineer Associate)とは?",
      a: "**Azure AI Fundamentals(AI-900)の上位** に位置する Microsoft 認定の Associate レベル。Azure OpenAI / AI Search / Cognitive Services / AI Foundry を **設計 ・ 実装 ・ デプロイ ・ 運用 ・ 監視** する技術者向け。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 約 40 〜 60 問 / 100 分 / 選択式 + ケーススタディ + コード補完 / 合格 700 / 1000 点**。**Python / C# / REST API / JSON / Git** が前提知識。",
    },
    {
      q: "AI-900 との違いは?",
      a: "**AI-900 は概念 ・ サービス選択中心**(コードなし)、**AI-102 はコード実装 ・ デプロイ ・ 監視まで**。AI-900 → AI-102 と段階的に取得するのが王道。",
    },
    {
      q: "学習時間の目安は?",
      a: "AI-900 合格者で **120 〜 150 時間**、未経験者で **150 〜 250 時間**。**Microsoft Learn の AI-102 ラーニングパス + Azure 無料アカウント**(200 USD クレジット + 12 ヶ月無料)で実機ハンズオンが必須。",
    },
    {
      q: "次のステップは?",
      a: "AI-102 → **DP-100(Azure Data Scientist Associate)** で ML 寄りに、または **DP-203(Azure Data Engineer Associate)** でデータ基盤側へ。**AZ-305(Solutions Architect Expert)** で全体アーキテクトに進む道もあります。",
    },
  ],
  "aws-ml-engineer": [
    {
      q: "AWS Certified Machine Learning Engineer Associate(MLA-C01)とは?",
      a: "**AWS が 2024 年に正式リリース** した ML Engineer 向けの **Associate レベル** 認定。**AI Practitioner(Foundational)の上位** で、SageMaker / Bedrock / MLOps を実装する技術者向け。**ML Specialty より入門的** な位置付け。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 130 分 / 合格 720 / 1000 点 / 受験料 150 USD / 有効期限 3 年**。SageMaker / Python / SQL / 統計の基礎が前提知識。",
    },
    {
      q: "AI Practitioner と何が違う?",
      a: "**AI Practitioner は概念中心**(コードなし)、**MLA-C01 は SageMaker 実装 ・ MLOps ・ Pipelines ・ Model Monitor まで** 実装力を測る。AI Practitioner → MLA-C01 が王道パス。",
    },
    {
      q: "学習時間の目安は?",
      a: "AI Practitioner 合格者で **120 〜 150 時間**、未経験者で **150 〜 250 時間**。**AWS Skill Builder + AWS Free Tier(SageMaker Studio Lab は完全無料)** で実機ハンズオンが必須。",
    },
    {
      q: "次のステップは?",
      a: "MLA-C01 → **ML Specialty(MLS-C01)** で深い数学 ・ アルゴリズム理解、または **AWS SAA → SAP** で全体アーキテクトへ。三大クラウド ML を揃えるなら本サイトの[Azure AI-102](/certs/azure-ai-102) ・ [GCP Generative AI Leader](/certs/gcp-gen-ai-leader)も。",
    },
  ],
  "snowflake-snowpro": [
    {
      q: "Snowflake SnowPro Core(COF-C02)とは?",
      a: "**Snowflake** が提供するクラウドデータプラットフォーム認定の **エントリーレベル**。Specialty / Advanced 認定の前提条件で、Snowflake の **アーキテクチャ ・ 基本機能 ・ SQL ・ パフォーマンス ・ セキュリティ** を測る。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**オンライン監督受験(Pearson VUE)or テストセンター / 100 問 / 115 分 / 多肢選択 + 複数選択 / 合格 750 / 1000 点 / 受験料 175 USD / 有効期限 2 年**。",
    },
    {
      q: "学習時間の目安は?",
      a: "SQL 経験者で **40 〜 60 時間**、未経験者で **60 〜 100 時間**。**Snowflake 30 日トライアル**(400 USD クレジット)+ **Snowflake University**(無料)が標準教材。",
    },
    {
      q: "なぜ Snowflake が注目されている?",
      a: "**マルチクラウド対応 ・ ストレージとコンピュートの分離 ・ Time Travel ・ Zero-Copy Cloning ・ Secure Data Sharing** などの独自機能で、**dbt + Snowflake** がモダンデータスタックの標準として急速に拡大中。",
    },
    {
      q: "次のステップは?",
      a: "SnowPro Core → **SnowPro Specialty**(Data Engineer / Data Analyst / Data Scientist / Architect / Administrator)が王道。本サイトの[DB スペシャリスト](/certs/db-specialist)と組み合わせると伝統的 DB + モダン基盤の両軸が揃う。",
    },
  ],
  "gcp-ml-engineer": [
    {
      q: "Google Cloud Professional Machine Learning Engineer とは?",
      a: "**GCP 認定の Professional レベル** で、ML パイプラインの設計 ・ 構築 ・ デプロイ ・ 運用を行うエンジニアを認定。**AWS MLA-C01 / Azure AI-102** と並ぶ三大クラウド ML 認定の 1 つ。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**オンライン監督受験 or テストセンター / 50 〜 60 問 / 120 分 / 受験料 200 USD / 有効期限 2 年**。実機 Vertex AI 経験 + ML / Python / SQL / Cloud Architecture の実務 3 年以上推奨。",
    },
    {
      q: "学習時間の目安は?",
      a: "Generative AI Leader 合格者で **150 〜 200 時間**、未経験者で **200 〜 300 時間**。**Google Cloud Skills Boost(無料)+ 300 USD クレジット付き無料アカウント** で実機ハンズオンが必須。",
    },
    {
      q: "AWS MLA-C01 ・ Azure AI-102 との違いは?",
      a: "**GCP は Professional レベル**(Associate より 1 段上)で、より高度。**Vertex AI / Gemini / BigQuery ML / TPU** が中核。AWS MLA は SageMaker、Azure AI-102 は Azure OpenAI / AI Foundry が中核。",
    },
    {
      q: "次のステップは?",
      a: "ML Engineer → **Professional Data Engineer**(データ基盤側)または **Professional Cloud Architect**(全体)が王道。",
    },
  ],
  "databricks-data-engineer": [
    {
      q: "Databricks Certified Data Engineer Associate とは?",
      a: "**Databricks Lakehouse Platform** 上でデータエンジニアリングを行うエンジニア向けの **Associate レベル** 認定。**Snowflake と並ぶモダンデータ基盤の双璧** で、Apache Spark + Delta Lake + Unity Catalog + Workflows + Photon を測る。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**オンライン監督受験(Kryterion / Webassessor) / 45 問 / 90 分 / 多肢選択 + 複数選択 / 合格 70%(参考) / 受験料 200 USD / 有効期限 2 年**。SQL + Python の基礎が前提知識。",
    },
    {
      q: "学習時間の目安は?",
      a: "SQL + Python に慣れている人で **40 〜 60 時間**、未経験者で **60 〜 100 時間**。**Databricks Community Edition(無料)** + **Databricks Academy(無料公式)** が標準教材。",
    },
    {
      q: "Snowflake SnowPro Core との違いは?",
      a: "**Databricks は Lakehouse(Spark + Delta Lake)・ コードベース** が強み、**Snowflake は SQL ベース DWH** が強み。**両方持つとモダンデータ基盤双璧を制覇** で希少な人材になれる。本サイトの[Snowflake SnowPro Core](/certs/snowflake-snowpro)も。",
    },
    {
      q: "次のステップは?",
      a: "Data Engineer Associate → **Data Engineer Professional**(上位)が王道。ML 寄りなら **ML Practitioner Associate → Machine Learning Professional**、生成 AI なら **Generative AI Engineer Associate** へ。",
    },
  ],
  "it-strategist": [
    {
      q: "ITストラテジスト試験(ST)とは?",
      a: "**情報処理推進機構(IPA)** が主催する国家試験(レベル 4 高度試験)で、**経営戦略と IT を統合する最高峰の認定**。CIO ・ CTO ・ IT コンサルタント ・ DX 推進責任者を目指す技術者が想定対象。",
    },
    {
      q: "試験形式と合格率は?",
      a: "**午前 I + 午前 II + 午後 I(記述)+ 午後 II(論述)の 4 段階**。合格率は **約 14 〜 15%** で IPA 高度試験の中でも最難関の部類。受験料 7,500 円(税込)。年 1 回(春)実施。",
    },
    {
      q: "午後 II 論述試験の対策は?",
      a: "**120 分で 2,000 〜 3,000 字の論述**。事前に **自身の業務経験を 5 〜 10 のテーマに整理 + 章立てパターン 2 〜 3 種を体に染み込ませる** ことが必須。**模範解答の写経 + 自分の経験で書き直し** を 10 編以上やるのが王道。",
    },
    {
      q: "学習時間の目安は?",
      a: "**300 〜 500 時間** が中央値。応用情報合格者は午前 I が 2 年免除されます。本サイトの[ITストラテジスト 教科書](/certs/it-strategist/textbook)で経営戦略 ・ IT 戦略 ・ DX を体系学習できます。",
    },
    {
      q: "合格後のキャリアは?",
      a: "**CIO ・ CTO ・ IT コンサルタント ・ DX 推進責任者** への登竜門。**官公庁 ・ 大手 SI ・ 金融 ・ コンサル** で特に評価が高い。同じ IPA 高度試験で **DB スペシャリスト ・ PM** と組合せると、戦略 + 実装の両軸で強みになります。",
    },
  ],
  "aws-ml-specialty": [
    {
      q: "AWS Certified Machine Learning - Specialty(MLS-C01)とは?",
      a: "**AWS 認定の Specialty レベル** で **AWS ML 認定の最上位**。**ML Engineer Associate(MLA-C01)の上位** として、深い数学 ・ アルゴリズム理解 + 設計判断が問われる高度試験。シニア ML エンジニア向け。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 180 分(MLA より長い) / 合格 750 / 1000 点 / 受験料 300 USD / 有効期限 3 年**。ML 実務 1 〜 2 年 + 統計 ・ 線形代数 ・ 微積分の基礎が前提知識。",
    },
    {
      q: "MLA-C01 と何が違う?",
      a: "**MLA-C01 は SageMaker 操作 ・ サービス選択中心** で実装寄り。**MLS-C01 は『なぜそのアルゴリズムが最適か』『なぜそのハイパーパラメータか』『なぜそのデータ前処理か』** が問われ、より深い数学 ・ アルゴリズム理解が必要。",
    },
    {
      q: "学習時間の目安は?",
      a: "MLA-C01 合格者で **150 〜 250 時間**、未経験者で **200 〜 400 時間**。**Coursera ・ Udemy の AWS ML Specialty 講座 + Practice Exam** が王道学習教材。",
    },
    {
      q: "次のステップは?",
      a: "MLS-C01 → **AWS Solutions Architect Professional(SAP-C02)** で全体アーキテクトに進む、または **三大クラウド ML を揃える** 道があります。本サイトの[Azure AI-102](/certs/azure-ai-102) ・ [GCP Pro ML Engineer](/certs/gcp-ml-engineer)も。",
    },
  ],
  "azure-dp-100": [
    {
      q: "Microsoft Azure Data Scientist Associate(DP-100)とは?",
      a: "**Azure Machine Learning(Azure ML)を用いた ML ワークロードの設計 ・ 実装 ・ 運用** を問う **Associate レベル** の Microsoft 認定。AI-900(Fundamentals)・ AI-102(AI Engineer)と並ぶ Azure AI/ML 三本柱の 1 つで、データサイエンティスト ・ ML エンジニアにとって Azure における最重要認定。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分(参考) / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。Python ・ scikit-learn ・ MLflow ・ Azure 基本が前提知識。",
    },
    {
      q: "AI-102 / AI-900 と何が違う?",
      a: "**AI-900 は概念中心**(Fundamentals)、**AI-102 は AI サービス API 統合**(Azure OpenAI / AI Search / Foundry)、**DP-100 は Azure ML で ML プロジェクトを実装**。データサイエンティスト ・ ML エンジニアは DP-100 が直球、AI Engineer は AI-102。",
    },
    {
      q: "学習時間の目安は?",
      a: "**100 〜 200 時間**。**Microsoft Learn の DP-100 ラーニングパス + GitHub の azureml-examples** が王道学習教材。SDK / CLI v2 を実際に動かすハンズオンが最重要。",
    },
    {
      q: "次のステップは?",
      a: "DP-100 → **AI-102(AI Engineer Associate)** で AI サービス API 統合へ展開、または **DP-203(Azure Data Engineer)** で データエンジニアリングへ。本サイトの[Azure AI-102](/certs/azure-ai-102)も併せて検討を。",
    },
  ],
  "aws-data-engineer": [
    {
      q: "AWS Certified Data Engineer - Associate(DEA-C01)とは?",
      a: "**2024 年 3 月に GA された AWS の新 Associate 認定**。Glue ・ EMR ・ Athena ・ Redshift ・ Kinesis ・ MSK ・ Step Functions ・ Lake Formation など AWS のデータエンジニアリングサービスを取込 ・ 変換 ・ 保管 ・ 分析 ・ ガバナンスの 4 ドメインで体系的に問う。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 130 分 / 合格 720 / 1000 点 / 受験料 150 USD / 有効期限 3 年**。SQL ・ Python ・ AWS 基本(CLF レベル以上)が前提知識。",
    },
    {
      q: "旧 DAS-C01(Data Analytics Specialty)との違いは?",
      a: "**DEA-C01 は Associate レベル** で **DAS-C01(Specialty、廃止予定)の事実上の後継**。Lake Formation ・ DataZone ・ Iceberg などモダンなデータレイクハウス領域が強化されています。",
    },
    {
      q: "学習時間の目安は?",
      a: "AWS 経験者で **80 〜 150 時間**、未経験者で **150 〜 250 時間**。**AWS Skill Builder の DEA-C01 公式問題集 + ハンズオン**(無料利用枠で Glue + Athena + S3 を組む)が王道学習。",
    },
    {
      q: "次のステップは?",
      a: "DEA-C01 → **AWS Solutions Architect Professional(SAP-C02)** で設計の上位へ、または **MLA-C01 / MLS-C01** で ML 系へ展開。本サイトの[AWS MLA-C01](/certs/aws-ml-engineer) ・ [AWS MLS-C01](/certs/aws-ml-specialty)も併せて検討を。",
    },
  ],
  "azure-dp-203": [
    {
      q: "Microsoft Azure Data Engineer Associate(DP-203)とは?",
      a: "**Azure 上のデータエンジニアリングを設計 ・ 実装 ・ 運用** する Associate 認定。Synapse Analytics ・ Data Factory ・ Databricks ・ Stream Analytics ・ Event Hubs ・ ADLS Gen2 ・ Cosmos DB ・ Purview など Azure データプラットフォームの中核を取込 ・ 変換 ・ 保管 ・ 配信 ・ 監視 ・ ガバナンスで問う。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分(参考) / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。SQL ・ Python / Scala ・ Azure 基本が前提知識。",
    },
    {
      q: "AWS DEA-C01 / GCP Pro Data Engineer との違いは?",
      a: "**Azure は Synapse + ADF + Databricks** が中心、**AWS は Glue + Athena + Redshift**、**GCP は BigQuery + Dataflow** が中心。**サービス選び分けの哲学** がクラウドごとに異なるため、本サイトの[AWS DEA-C01](/certs/aws-data-engineer) ・ [GCP Pro Data Engineer](/certs/gcp-data-engineer) と併読でクラウド横断理解を。",
    },
    {
      q: "学習時間の目安は?",
      a: "Azure 経験者で **80 〜 150 時間**、未経験者で **150 〜 250 時間**。**Microsoft Learn の DP-203 ラーニングパス + Synapse Workspace ハンズオン** が王道学習教材。",
    },
    {
      q: "次のステップは?",
      a: "DP-203 → **Azure Solutions Architect Expert(AZ-305)** で全体設計へ展開、または **DP-100(Data Scientist)** や **AI-102(AI Engineer)** で ML / AI 系へ。**Fabric 時代の後継認定として DP-600(Fabric Analytics Engineer)・ DP-700(Fabric Data Engineer)** も注目。",
    },
  ],
  "azure-dp-600": [
    {
      q: "Microsoft Fabric Analytics Engineer Associate(DP-600)とは?",
      a: "**Microsoft Fabric 上で Data + Analytics + BI を設計 ・ 実装** する Analytics Engineer 認定(2024 リリース)。OneLake ・ Lakehouse ・ Warehouse ・ Semantic Model ・ Direct Lake ・ DAX ・ Power BI ・ Pipeline / Dataflow Gen2 ・ Spark / Notebook ・ Real-Time Intelligence を計画 ・ 準備 ・ 実装 ・ 探索 ・ ガバナンスで問う。**dbt 系 Analytics Engineer の Microsoft 版** ポジション。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分前後 / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。SQL(中級)・ Python / PySpark(基本)・ Power BI / DAX が前提知識。",
    },
    {
      q: "PL-300 / DP-203 とどう違うの?",
      a: "**PL-300**(Power BI Analyst)は BI 専門、**DP-203**(Azure DE)は ETL / Synapse 専門。**DP-600 は Fabric SaaS 上でこの 2 つを統合**する役割。**Direct Lake モード ・ OneLake ・ Lakehouse + Warehouse + Semantic Model の連携** が DP-600 ならではの中心トピックです。",
    },
    {
      q: "学習時間の目安は?",
      a: "Power BI / Azure DE 経験者で **100 〜 150 時間**、未経験者で **150 〜 250 時間**。**Microsoft Learn の DP-600 ラーニングパス + Fabric Trial(60 日 ・ F64 相当)** での実機ハンズオンが王道。",
    },
    {
      q: "次のステップは?",
      a: "DP-600 → **DP-700(Fabric Data Engineer Associate)** で DE 専門化、**DP-100(Data Scientist)** で ML 方向、**AZ-305(Solutions Architect Expert)** で全体設計、**AI-102(AI Engineer Associate)** で AI 統合へ。",
    },
  ],
  "azure-dp-700": [
    {
      q: "Microsoft Fabric Data Engineer Associate(DP-700)とは?",
      a: "**Microsoft Fabric 上でデータ取込 ・ 変換 ・ ストリーミング ・ オーケストレーション ・ 監視を実装** する Data Engineer Associate 認定(2024 リリース)。Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL Database ・ Real-Time Dashboard ・ Reflex ・ Git Integration ・ Deployment Pipeline を実装 ・ 取込 / 変換 ・ 監視 / 最適化の 3 ドメインで問う。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 100 分前後 / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。SQL(中級)・ Python/PySpark(中級)・ KQL(基礎)・ Power Query M が前提知識。",
    },
    {
      q: "DP-600 とどう違うの?",
      a: "**DP-700 は Data Engineer**(Lakehouse / Pipeline / Spark / Real-Time 取込変換オーケストレーション)。**DP-600 は Analytics Engineer**(Semantic Model / Direct Lake / DAX / BI)。**両方取得で Fabric 全領域カバー**となり、Microsoft Data エコシステムでのキャリア価値が最大化する。",
    },
    {
      q: "DP-203 との関係は?",
      a: "**DP-203 は Azure Synapse + ADF + Databricks** 時代の Azure DE Associate。**DP-700 は Fabric SaaS 時代の DE Associate**。Synapse → Fabric への業界シフトに伴い、新規プロジェクトでは DP-700 が中心となる見込み。両方取得で**Synapse + Fabric の Azure データ基盤全領域**をカバーできる。",
    },
    {
      q: "次のステップは?",
      a: "DP-700 → **DP-600(Fabric Analytics Engineer)** で BI 寄り、**DP-100(Data Scientist)** で ML、**AZ-305(Solutions Architect Expert)** で全体設計、**AI-102(AI Engineer Associate)** で AI 統合へ。",
    },
  ],
  "azure-az-305": [
    {
      q: "Azure Solutions Architect Expert(AZ-305)とは?",
      a: "**Azure 上のソリューション設計を担う Architect 認定**(Expert レベル)。Identity / Governance / Compute / Storage / DB / Network / Security / BCP / Migration / Cost / Monitor を統合設計で問う。**AZ-303 + AZ-304 の統合後継**(2022 以降)。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 120 分 / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**ケーススタディが重く**、顧客状況 → サービス選定 → トレードオフ判断が中心。",
    },
    {
      q: "前提となる認定 ・ 経験は?",
      a: "**AZ-104(Administrator)合格 + Azure 実務経験 1-2 年以上**が事実上の前提。AZ-204(Developer)経験者も受験可能。Expert 認定なので **Architect 実務感** が求められる。",
    },
    {
      q: "AWS SAA-Pro / GCP Pro Architect との関係は?",
      a: "**3 大クラウドの Expert / Professional Architect 認定**として並立。**マルチクラウド Architect** を目指すなら 3 つすべて取得が理想。AZ-305 + SAP-C02(AWS) + Pro Cloud Architect(GCP)で他に類を見ない希少性。",
    },
    {
      q: "次のステップは?",
      a: "AZ-305 → **AZ-400(DevOps Engineer Expert)**・ **SC-100(Cybersecurity Architect Expert)**・ **AI-102 / DP-100 / DP-203 / DP-600 / DP-700** で領域専門化、**AWS SAP-C02 / GCP Pro Architect** でマルチクラウド。",
    },
  ],
  "sc-100": [
    { q: "Microsoft Cybersecurity Architect Expert(SC-100)とは?", a: "**Zero Trust + Microsoft Security Stack(Defender XDR / Sentinel / Entra / Purview / Intune)+ Compliance + AI Security + Resilience** の統合設計を担う Cybersecurity Architect Expert 認定(2022 リリース)。" },
    { q: "試験形式と合格基準は?", a: "**CBT or オンライン監督 / 40〜60 問 / 120 分前後 / 700 / 1000 点 / 165 USD / 有効期限 1 年(無料更新あり)**。**ケーススタディ重視**。" },
    { q: "前提となる認定・経験は?", a: "**AZ-500 / SC-200 / SC-300 / MS-500** 等のセキュリティ Associate 取得 + Cybersecurity Architect 実務経験が前提の Expert レベル試験。" },
    { q: "AZ-305 との関係は?", a: "**AZ-305 = Azure 全般の Architect Expert**、**SC-100 = セキュリティ専門 Architect Expert**。**両方取得で Azure Architect + Security Architect の Expert 級** が完成し、CISO 候補 / Senior Security Consultant に。" },
    { q: "次のステップは?", a: "SC-100 → **SC-200(SOC Analyst)**・ **SC-300(Identity Admin)**・ **SC-400(Information Protection)** で領域専門化、**CISSP / CCSP / CISM / OSCP** で業界横断、**AWS Security Specialty / GCP PCSE** でマルチクラウド。" },
  ],
  "tableau-data-analyst": [
    { q: "Tableau Certified Data Analyst とは?", a: "**Tableau Specialist の上位 ・ 中級 BI Analyst 認定**(2022+ 新体系)。Connect / Prep / LOD / Calc / Dashboard / Story / Server-Cloud / Pulse の総合実務力を問う。" },
    { q: "試験形式と合格基準は?", a: "**38 問 / 120 分(うち 6-8 問 Performance Task ハンズオン)/ 750 / 1000 / 250 USD / 有効期限 2 年**。実機 Tableau 操作が試される。" },
    { q: "Tableau Specialist との違いは?", a: "**Specialist**: 入門 ・ 経験不問 ・ 有効期限なし ・ 100 USD。**Data Analyst**: 中級 ・ 実務 3-6 ヶ月推奨 ・ 250 USD ・ 2 年 ・ ハンズオン含。" },
    { q: "前提となる経験は?", a: "**実務 3-6 ヶ月推奨**(Specialist 取得済 + 実プロジェクトで Dashboard 構築経験)。**Tableau Trail**(無料公式 LMS)+ **Tableau Public** で学習可能。" },
    { q: "次のステップは?", a: "Data Analyst → **Tableau Server Certified Associate**(Server 管理)・ **Salesforce Tableau Architect**(2024 新設)・ **Power BI PL-300 / Looker / Fabric DP-600** でマルチ BI。" },
  ],
  "snowflake-dea": [
    { q: "SnowPro Advanced: Data Engineer(DEA)とは?", a: "**Snowflake 上でデータ取込 ・ 変換 ・ 最適化を担う Data Engineer の Advanced 認定**。SnowPro Core の上位 ・ Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Polaris / Performance / Cost を実装で問う。" },
    { q: "試験形式と合格基準は?", a: "**65 問 / 115 分 / 750 / 1000 / 375 USD / 有効期限 2 年**。前提: SnowPro Core + Snowflake 実務 1-2 年。Scenario 問題が多い。" },
    { q: "SnowPro Core との違いは?", a: "**Core**: Foundational ・ Architecture / 基本機能。**DEA**: Advanced ・ 実装パターン / Cortex AI / Iceberg / Native Apps / Performance 深掘り。Core 取得が DEA の前提。" },
    { q: "次のステップは?", a: "DEA → **SnowPro Advanced: Architect / Analyst / Administrator / Data Scientist** で領域専門化、**Databricks DE Pro / Microsoft DP-700 / GCP Pro DE / AWS DEA-C01** でマルチクラウド、**dbt Snowflake** で Analytics Engineer。" },
    { q: "学習リソースは?", a: "Snowflake University(公式 LMS)・ **Free Trial 30 日**($400 クレジット)・ **Hands-on Quickstart**(snowflake.com/quickstarts)・ SnowPro Core 復習。" },
  ],
  "databricks-ml-engineer": [
    { q: "Databricks Certified ML Engineer Professional とは?", a: "**Databricks 上で ML を実装 ・ デプロイ ・ 監視する ML Engineer の Professional 認定**。MLflow / Feature Store / AutoML / Model Serving / Lakehouse Monitoring / Mosaic AI(Vector Search + FM API + Agent Framework)/ MLOps の総合実装力。" },
    { q: "試験形式と合格基準は?", a: "**60 問 / 120 分 / 70-75% / 200 USD / 有効期限 2 年**。前提: ML Associate + Databricks 実務 6 ヶ月-1 年。**MLOps + Mosaic AI(GenAI)が大きなウェイト**。" },
    { q: "ML Associate との違いは?", a: "**Associate**: 古典 ML + Spark MLlib / MLflow / Feature Store の基本。**Professional**: Mosaic AI + Model Serving + Lakehouse Monitoring + Asset Bundle + Distributed Training など Production 運用が中心。" },
    { q: "次のステップは?", a: "ML Engineer Pro → **Databricks Data Engineer Professional**(DE 専門)・ **Generative AI Engineer Associate**(2024 新設 ・ GenAI 専門)・ **Solutions Architect Professional**・ **マルチクラウド**: AWS MLS-C01 / Azure DP-100 / GCP Pro MLE。" },
    { q: "学習リソースは?", a: "Databricks Academy(公式 LMS)・ Hands-on Workshop / Quickstart ・ GitHub databricks-industry-solutions ・ **ML Associate を先に取得**(前提)。" },
  ],
  "gcp-data-engineer": [
    {
      q: "GCP Professional Data Engineer とは?",
      a: "**GCP 上のデータエンジニアリング Professional レベル認定**。BigQuery ・ Dataflow ・ Dataproc ・ Pub/Sub ・ Cloud Composer ・ Bigtable ・ Spanner ・ Looker ・ Dataplex を設計 ・ 取込 ・ 保管 ・ 分析 / ML 統合 ・ 信頼性 / 自動化 / 監視 ・ セキュリティ / コンプライアンスの 5 ドメインで問う。",
    },
    {
      q: "試験形式と合格基準は?",
      a: "**CBT(Kryterion)or オンライン監督受験 / 50〜60 問 / 120 分 / 合格スコア非公開(70% 程度が目安) / 受験料 200 USD / 有効期限 2 年**。SQL ・ Python / Java ・ GCP 基本(Cloud Engineer 相当)が前提知識。",
    },
    {
      q: "AWS DEA-C01 / Azure DP-203 との違いは?",
      a: "**GCP は BigQuery 中心 + サーバレス志向**、**AWS は Glue + Athena + Redshift**、**Azure は Synapse + ADF + Databricks**。**GCP は Professional レベル**(他は Associate)で受験料 200 USD / 学習時間も多めです。本サイトの[AWS DEA-C01](/certs/aws-data-engineer) ・ [Azure DP-203](/certs/azure-dp-203) と併読を推奨。",
    },
    {
      q: "学習時間の目安は?",
      a: "GCP 経験者で **100 〜 200 時間**、未経験者で **150 〜 250 時間**。**Skill Boost の Data Engineer Learning Path** が公式の王道学習教材。BigQuery のハンズオンが必須。",
    },
    {
      q: "次のステップは?",
      a: "GCP Pro DE → **Professional ML Engineer** で ML 特化、または **Professional Cloud Architect** で全体設計へ展開。本サイトの[GCP Pro ML Engineer](/certs/gcp-ml-engineer)も併せて検討を。",
    },
  ],
  "qc-kentei": [
    {
      q: "QC検定の各級の難易度は?",
      a: "1 級は研究所・品質管理スタッフ向け(統計検定準 1 級レベル)、2 級は管理職向け(2 級レベル)、3 級は現場リーダー向け(3 級レベル)、4 級は新入社員向けです。",
    },
    {
      q: "QC検定で重要な統計手法は?",
      a: "管理図($\\bar{X}$-R, p, np)、工程能力指数 Cp/Cpk、サンプリング検査(OC 曲線)、直交配列表(田口メソッド)、特性要因図・パレート図など 7 つ道具が中心です。",
    },
  ],
};
