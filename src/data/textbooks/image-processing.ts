import type { Textbook } from "@/types/content";

export const imageProcessingTextbook: Textbook = {
  levelSlug: "image-processing",
  title: "画像処理エンジニア検定 エキスパート 教科書",
  intro:
    "**画像処理エンジニア検定 エキスパート** は、**CG-ARTS 協会** が主催する、画像処理 ・ コンピュータビジョンの **理論と実装の両面** を測る検定です。**ベーシック(画像処理の基本)** の上位に位置し、フィルタ ・ 周波数解析 ・ パターン認識 ・ 機械学習 ・ 深層学習(CNN ・ Transformer)・ 3 次元視覚など、現代の画像処理に必要な広範な知識を扱います。本教科書は、エキスパートの出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "画像処理エンジニア検定 ─ 試験の全体像",
      overview:
        "ベーシック / エキスパートの位置付け、出題範囲、対策プランを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "検定の位置付けと特徴",
          blocks: [
            {
              type: "p",
              text: "**画像処理エンジニア検定** は CG-ARTS 協会が主催する、画像処理 ・ コンピュータビジョンの専門検定です。**ベーシック(基本)** と **エキスパート(応用 ・ 実装)** の 2 段階があり、エキスパートは画像処理エンジニア / 機械学習エンジニア / 自動運転やロボティクス開発者の **専門性の証明** として位置付けられます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: 公益財団法人 CG-ARTS 協会",
                "**形式**: マークシート方式(会場試験)",
                "**実施**: 年 2 回(7 月・11 月頃)",
                "**問題数 / 時間**: エキスパート 80 分 / 計算 ・ 記述含む選択式",
                "**合格基準**: 70 点以上(参考)",
                "**合格率(参考)**: 30 〜 40% 前後",
                "**受験料**: 6,800 円(税込・参考)",
              ],
            },
            { type: "h3", text: "他検定との比較" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**G 検定 / E 資格**: AI 全般。画像処理理論は浅い",
                "**画像処理エンジニア(エキスパート)**: 古典 CV(フィルタ・周波数・幾何) + DL ベース CV を両方扱う",
                "**統計検定**: 古典統計学。画像は範囲外",
                "**ディジタル技術検定**: ハードウェア寄り",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題比重と推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題比重(目安)" },
            {
              type: "list",
              style: "number",
              items: [
                "**画像処理基礎**(約 25%): 標本化 ・ 量子化 ・ コントラスト ・ 濃度変換",
                "**フィルタ ・ 周波数解析**(約 20%): 空間フィルタ ・ フーリエ変換 ・ ウェーブレット",
                "**特徴抽出 ・ パターン認識**(約 20%): エッジ ・ コーナー ・ HOG ・ SIFT ・ クラス分類",
                "**機械学習 ・ 深層学習**(約 25%): SVM / NN / CNN / 物体検出 / セグメンテーション",
                "**3 次元視覚**(約 10%): ステレオ ・ オプティカルフロー ・ SfM",
              ],
            },
            { type: "h3", text: "100 〜 150 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1 〜 2**: 公式テキスト『ディジタル画像処理』第 1 〜 5 章 ─ 基礎",
                "**Week 3 〜 4**: 同 第 6 〜 9 章 ─ フィルタ + 周波数 + 復元",
                "**Week 5 〜 6**: 同 第 10 〜 14 章 ─ 特徴抽出 + 認識",
                "**Week 7 〜 8**: 機械学習 / 深層学習 ─ CNN ・ U-Net ・ YOLO",
                "**Week 9**: 3 次元視覚",
                "**Week 10**: 過去問演習 + 模擬試験",
              ],
            },
            {
              type: "intuition",
              title: "古典手法と DL 手法の両方を抑える",
              body: "近年の試験では DL ベースの問題比重が増えていますが、**古典的な空間フィルタ ・ 周波数解析 ・ HOG / SIFT** も依然として頻出です。『DL だけで OK』にはなっておらず、両軸での理解が合格の鍵です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "画像処理の基礎",
      overview:
        "画像のディジタル表現、標本化、量子化、色空間を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "ディジタル画像の表現",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**画素(pixel)**: 画像の最小単位",
                "**標本化(Sampling)**: 連続画像から画素位置を選ぶ",
                "**量子化(Quantization)**: 画素値を有限段階に丸める",
                "**標本化定理(Nyquist)**: 信号最高周波数の 2 倍以上で標本化が必要",
                "**ビット深度**: 8 bit = 256 階調、16 bit = 65,536 階調",
              ],
            },
            { type: "h3", text: "色空間" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**RGB**: ディスプレイの基本(加法混色)",
                "**CMY/CMYK**: 印刷の基本(減法混色)",
                "**YUV / YCbCr**: 輝度 + 色差。圧縮や伝送で標準",
                "**HSV / HSL**: 色相 + 彩度 + 明度。色抽出に便利",
                "**Lab**: 知覚的均等な色空間",
              ],
            },
            {
              type: "intuition",
              title: "JPEG が YCbCr を使う理由",
              body: "人間の視覚は **輝度には敏感、色差には鈍感**。YCbCr では輝度(Y)と色差(Cb, Cr)を分離でき、色差成分のみダウンサンプリングしても視覚的に劣化が分かりにくい。これが JPEG の圧縮効率の鍵です。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "濃度変換とヒストグラム",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ガンマ補正**: $g(x) = x^{1/\\gamma}$。ディスプレイの非線形特性を補正",
                "**コントラスト伸張**: 画素値の範囲を拡大",
                "**ヒストグラム平坦化**: 画素分布を一様に近づける(コントラスト改善)",
                "**ヒストグラム特定化(マッチング)**: 目的の分布に近づける",
                "**閾値処理(2 値化)**: Otsu / 適応的 2 値化",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "空間フィルタリング",
      overview:
        "畳み込みの基礎、平滑化 / 鋭敏化 / エッジ検出フィルタを整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "畳み込みと相関",
          blocks: [
            {
              type: "p",
              text: "**畳み込み(convolution)** は画像にカーネルを適用する基本操作。$(I * K)(x, y) = \\sum_{i,j} I(x-i, y-j) K(i, j)$ という形で、近傍画素の重み付き和を取ります。**相関(correlation)** は畳み込みのカーネル反転をしない版で、CNN の畳み込み層は実は相関に相当します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**境界処理**: ゼロパディング / 反射 / 周期 / 拡張",
                "**ストライド**: カーネルの移動幅",
                "**パディング**: 出力サイズを保つ",
                "**可分カーネル**: 行 × 列の積で表現でき計算量を削減(例: ガウシアン)",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "平滑化フィルタ ・ ノイズ除去",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**平均フィルタ**: 単純平均。ぼけが強い",
                "**ガウシアンフィルタ**: 重み付き平均、エッジ保存とのバランス",
                "**メディアンフィルタ**: 中央値で塩胡椒ノイズに強い、エッジ保存",
                "**バイラテラルフィルタ**: エッジ保存平滑化",
                "**Non-Local Means**: 自己相似性を利用、高品質ノイズ除去",
              ],
            },
            { type: "h3", text: "ノイズの種類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ガウシアンノイズ**: 通常の電気ノイズ",
                "**塩胡椒ノイズ(インパルス)**: 通信エラー / センサ故障",
                "**ポアソンノイズ**: 暗所撮影 ・ 微弱信号",
                "**スペックルノイズ**: SAR / 超音波画像",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "鋭敏化 ・ エッジ検出",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Sobel / Prewitt フィルタ**: 1 次微分。x / y 方向の勾配",
                "**Laplacian フィルタ**: 2 次微分。エッジを 1 つの操作で",
                "**LoG(Laplacian of Gaussian)**: 平滑化 + Laplacian",
                "**Canny エッジ検出**: 平滑化 → 勾配 → 非最大抑制 → ヒステリシス。古典の決定版",
                "**アンシャープマスキング**: 元画像 - 平滑化画像 で輪郭強調",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "周波数解析",
      overview:
        "フーリエ変換 ・ DCT ・ ウェーブレットを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "フーリエ変換",
          blocks: [
            {
              type: "p",
              text: "**2D フーリエ変換** は画像を周波数成分に分解します。低周波は画像の大局的な構造、高周波は細部 / ノイズに対応。**ローパスフィルタ** = 平滑化、**ハイパスフィルタ** = エッジ強調 と理解できます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**FFT**: 高速フーリエ変換($O(N \\log N)$)",
                "**振幅スペクトル**: 各周波数の強さ",
                "**位相スペクトル**: 各周波数の位相",
                "**畳み込み定理**: 空間畳み込み = 周波数領域の積",
                "**サンプリング定理**: $f_s > 2 f_{\\max}$ でないとエイリアシング",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "DCT とウェーブレット",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**DCT(離散コサイン変換)**: 実数版で、JPEG の核(8×8 ブロック DCT)",
                "**ウェーブレット変換**: 時間 / 空間と周波数を同時に局在化。JPEG2000 で採用",
                "**離散ウェーブレット変換(DWT)**: マルチ解像度解析",
                "**Haar / Daubechies / Mexican Hat**: 代表的なウェーブレット",
              ],
            },
            {
              type: "intuition",
              title: "ウェーブレットがフーリエより優れる場面",
              body: "フーリエは『**信号全体に均一な周波数情報**』を与えるのが基本(時間情報を失う)。ウェーブレットは『**この場所のこの周波数**』を表現できるため、エッジや突発的変化のある画像 / 信号で強い。MRI ・ 心電図 ・ 地震波解析でも標準的に使われます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "幾何変換と画像復元",
      overview:
        "アフィン変換 ・ ホモグラフィ ・ 補間 ・ 復元(Wiener / TV)を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "幾何変換",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**アフィン変換**: 平行移動 / 回転 / 拡大縮小 / シア。直線・平行関係を保つ",
                "**ホモグラフィ(射影変換)**: 直線は保つが平行は保たない。3×3 行列",
                "**ホモジニアス座標**: $(x, y) \\to (x, y, 1)$ で行列表現を統一",
                "**逆写像**: 出力画素ごとに入力位置を逆算 → 補間",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "補間と画像復元",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**最近傍補間**: 速いがブロック状",
                "**バイリニア補間**: 4 近傍の重み付き平均",
                "**バイキュービック補間**: 16 近傍。滑らかで標準",
                "**Lanczos**: より高品質な補間",
              ],
            },
            { type: "h3", text: "画像復元" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Wiener フィルタ**: ノイズ + ぼけの逆問題",
                "**全変動(TV)復元**: エッジ保存しつつノイズ除去",
                "**逆畳み込み**: 既知ぼけからの復元",
                "**スーパーレゾリューション**: 低解像度 → 高解像度。最近は SR-CNN / SwinIR / Real-ESRGAN",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "領域処理とモルフォロジ",
      overview:
        "セグメンテーション基礎 ・ ラベリング ・ モルフォロジ演算を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "領域抽出と連結成分",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**閾値処理**: Otsu の手法 / 適応的閾値",
                "**4 近傍 / 8 近傍**: 連結性の定義",
                "**ラベリング**: 連結成分に番号付け",
                "**領域成長法(Region Growing)**: 種点から類似画素を統合",
                "**Watershed**: 地形学的アナロジーで領域分割",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "モルフォロジ演算",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**膨張(Dilation)**: 領域を太らせる",
                "**収縮(Erosion)**: 領域を細らせる",
                "**オープニング**: 収縮 → 膨張(小さなノイズ除去)",
                "**クロージング**: 膨張 → 収縮(小さな穴埋め)",
                "**Top-Hat**: 元画像 - オープニング(明るい点抽出)",
                "**Black-Hat**: クロージング - 元画像(暗い点抽出)",
              ],
            },
            {
              type: "practical",
              title: "実務での使い方",
              body: "**OCR の前処理**(文字の途切れを膨張で補修)、**医用画像のセグメンテーション後処理**(小さな誤検出をオープニングで除去)、**産業検査**(欠陥検出後の小さなノイズ除去)など、画像処理パイプラインの後段で頻出します。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "特徴抽出とパターン認識",
      overview:
        "コーナー / SIFT / HOG / Bag-of-Features と古典的分類器を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "局所特徴量",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Harris コーナー検出**: 自己相関行列の固有値で角を検出",
                "**SIFT**: スケール不変 + 回転不変 + 照明不変。古典の代表",
                "**SURF**: SIFT の高速版",
                "**ORB**: SIFT/SURF より高速で特許制約なし",
                "**HOG(Histogram of Oriented Gradients)**: 勾配方向のヒストグラム。歩行者検出で有名",
                "**LBP(Local Binary Pattern)**: 局所 2 値パターン。テクスチャ解析",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Bag-of-Features と古典分類器",
          blocks: [
            {
              type: "p",
              text: "**Bag-of-Features(BoF)** は、自然言語処理の Bag-of-Words の画像版。SIFT 等の局所特徴を **コードブック(クラスタ中心)** に量子化し、ヒストグラムを画像表現として使用。CNN 普及前の画像分類の主流でした。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SVM**: サポートベクターマシン。マージン最大化",
                "**ランダムフォレスト**: 決定木のアンサンブル",
                "**AdaBoost**: 弱識別器のブースティング(顔検出 Viola-Jones)",
                "**最近傍法(k-NN)**: 単純で効果的",
              ],
            },
            {
              type: "figure",
              kind: "svm-margin",
              caption: "SVM のマージン最大化",
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "深層学習による画像認識",
      overview:
        "CNN ・ Vision Transformer ・ 物体検出 ・ セグメンテーションを整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "CNN の基本構造",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**畳み込み層 + プーリング層 + 全結合層** が基本ブロック",
                "**LeNet**(1998): 元祖 CNN",
                "**AlexNet**(2012): ImageNet で圧勝、DL ブームの発火点",
                "**VGG**(2014): 小さなフィルタを深く重ねる",
                "**ResNet**(2015): 残差接続で 100 層以上を実現",
                "**EfficientNet**(2019): 解像度 / 深さ / 幅をバランスさせる",
                "**Vision Transformer(ViT)**(2020): Transformer を画像に適用",
              ],
            },
            {
              type: "figure",
              kind: "cnn-architecture",
              caption: "CNN の標準構造",
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "物体検出とセグメンテーション",
          blocks: [
            { type: "h3", text: "物体検出" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**R-CNN / Fast R-CNN / Faster R-CNN**: 領域提案 + 分類",
                "**YOLO**(You Only Look Once): リアルタイム検出の代表",
                "**SSD(Single Shot Detector)**: シングルパス検出",
                "**DETR**: Transformer ベース検出",
                "**評価指標**: IoU / mAP",
              ],
            },
            { type: "h3", text: "セグメンテーション" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**FCN**(Fully Convolutional Network): 元祖意味的セグメンテーション",
                "**U-Net**: 医用画像で標準。エンコーダ-デコーダ + skip connection",
                "**Mask R-CNN**: インスタンスセグメンテーション",
                "**DeepLab**: Atrous(膨張)畳み込みで広い受容野",
                "**SAM(Segment Anything)**: 2023、汎用セグメンテーション基盤モデル",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "学習テクニックとデータ拡張",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**転移学習(Transfer Learning)**: ImageNet 事前学習モデルを微調整",
                "**ファインチューニング**: 全層 / 後段層のみ更新",
                "**データ拡張**: 反転 / 回転 / クロップ / 色調整 / Mixup / CutMix",
                "**Batch Normalization**: 学習安定化",
                "**Dropout / Stochastic Depth**: 過学習抑制",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "3 次元視覚と動画処理",
      overview:
        "ステレオ ・ オプティカルフロー ・ SfM ・ NeRF を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "カメラモデルとキャリブレーション",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ピンホールカメラモデル**: 3D → 2D 投影の基本",
                "**内部パラメータ**: 焦点距離 / 主点 / レンズ歪み",
                "**外部パラメータ**: カメラの位置と姿勢",
                "**Zhang のキャリブレーション**: チェッカーボードで内部パラメータ推定",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "ステレオ視と SfM",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ステレオ視**: 2 つのカメラの視差から深さを推定",
                "**エピポーラ幾何**: 対応点探索を 1 次元に削減",
                "**視差(disparity)**: 両画像での同一点のずれ",
                "**SfM(Structure from Motion)**: 動画 / 連続画像から 3D 復元",
                "**SLAM**: 自己位置推定 + 地図作成",
                "**NeRF / 3D Gaussian Splatting**: ニューラル 3D 表現の現代手法",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "オプティカルフローと動画解析",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**オプティカルフロー**: 連続フレーム間の画素移動",
                "**Lucas-Kanade 法**: 局所領域での解析的解法",
                "**Horn-Schunck 法**: 全画像の滑らかさ拘束",
                "**FlowNet / RAFT**: DL ベースのフロー推定",
                "**動画分類**: 3D CNN / I3D / ViViT",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策と応用領域",
      overview:
        "試験当日のチェックリストと、画像処理の応用分野を整理します。",
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
                "**第 2 章**: 標本化定理・色空間(RGB / YCbCr / HSV)・ヒストグラム平坦化",
                "**第 3 章**: ガウシアン / メディアン / Sobel / Laplacian / Canny",
                "**第 4 章**: フーリエ変換・畳み込み定理・DCT(JPEG)・ウェーブレット",
                "**第 5 章**: アフィン変換 / ホモグラフィ / バイキュービック / Wiener",
                "**第 6 章**: モルフォロジ(膨張/収縮/オープニング/クロージング)",
                "**第 7 章**: SIFT / HOG / BoF / SVM / AdaBoost",
                "**第 8 章**: ResNet / U-Net / YOLO / IoU / mAP / Transfer Learning",
                "**第 9 章**: ピンホール / ステレオ / SfM / オプティカルフロー",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**80 分** を全問にバランスよく配分。計算問題は後回し戦略",
                "**過去問は必須**: 出題傾向 ・ 細かい用語の使い回しに慣れる",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
                "**フィルタ計算は手で 1 度はやる**: 3×3 や 5×5 程度の畳み込みは試験中に手計算",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "応用領域とキャリア",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**自動運転**: 車線検出 / 物体検出 / セグメンテーション / 深度推定",
                "**医用画像**: 病変検出 / U-Net セグメンテーション / 3D 再構成",
                "**産業検査**: 不良品検出 / OCR / 寸法計測",
                "**監視 / 顔認証**: 顔検出 / 識別 / 異常検知",
                "**AR/VR**: SLAM / ハンドトラッキング / 環境認識",
                "**生成 AI**: Stable Diffusion / Sora",
              ],
            },
            {
              type: "practical",
              title: "本検定が活きるキャリア",
              body: "**画像処理エンジニア / コンピュータビジョンエンジニア** としての専門性証明、自動運転 / ロボティクス / 医用画像など **画像 AI が事業の中核** の企業で評価されます。さらに踏み込むなら本サイトの[E 資格](/certs/e-shikaku)で深層学習の数学側、[AI 実装検定](/certs/ai-implementation)で実装側を補強する道があります。",
            },
          ],
        },
      ],
    },
  ],
};
