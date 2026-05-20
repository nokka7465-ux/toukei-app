import type { Question } from "@/types/content";

export const imageProcessingQuestions: Question[] = [
  {
    id: "img-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "画像処理エンジニア検定の主催団体として最も適切なものを選びなさい。",
    choices: [
      "JDLA(日本ディープラーニング協会)",
      "公益財団法人 CG-ARTS 協会",
      "情報処理推進機構(IPA)",
      "日本写真学会",
    ],
    correctIndex: 1,
    explanation:
      "画像処理エンジニア検定は **公益財団法人 CG-ARTS 協会** が主催。ベーシックとエキスパートの 2 段階で、年 2 回(7 月・11 月頃)実施。",
  },
  {
    id: "img-q2",
    category: "標本化",
    difficulty: 2,
    question:
      "標本化定理(Nyquist の定理)で、信号の最高周波数を $f_{\\max}$ とするとき、エイリアシングを起こさない標本化周波数 $f_s$ の条件として最も適切なものを選びなさい。",
    choices: [
      "$f_s > f_{\\max} / 2$",
      "$f_s > 2 f_{\\max}$",
      "$f_s = f_{\\max}$",
      "$f_s$ は信号と無関係",
    ],
    correctIndex: 1,
    explanation:
      "**標本化定理**: 信号の最高周波数の **2 倍より大きい** 標本化周波数が必要。これを満たさないと折返し歪み(エイリアシング)が発生する。",
  },
  {
    id: "img-q3",
    category: "色空間",
    difficulty: 2,
    question:
      "JPEG が圧縮効率を上げるために輝度 / 色差を分離する目的で採用している色空間として最も適切なものを選びなさい。",
    choices: ["RGB", "CMYK", "YCbCr", "HSV"],
    correctIndex: 2,
    explanation:
      "JPEG は **YCbCr** に変換し、人間の視覚が鈍感な **色差成分(Cb, Cr)をダウンサンプリング** することで高い圧縮率を実現する。",
  },
  {
    id: "img-q4",
    category: "ヒストグラム",
    difficulty: 2,
    question:
      "画像のコントラストを改善するために、画素値の分布を一様に近づける処理として最も適切なものを選びなさい。",
    choices: [
      "ヒストグラム平坦化",
      "ガンマ補正",
      "畳み込み",
      "二値化",
    ],
    correctIndex: 0,
    explanation:
      "**ヒストグラム平坦化(Histogram Equalization)** は累積分布関数を使って画素値を一様分布に近づける処理。コントラストの低い画像を改善する古典的手法。",
  },
  {
    id: "img-q5",
    category: "フィルタ",
    difficulty: 2,
    question:
      "塩胡椒ノイズ(インパルスノイズ)に対して、エッジを保存しつつノイズを除去する古典的フィルタとして最も適切なものを選びなさい。",
    choices: [
      "平均フィルタ",
      "ガウシアンフィルタ",
      "メディアンフィルタ",
      "Sobel フィルタ",
    ],
    correctIndex: 2,
    explanation:
      "**メディアンフィルタ** は中央値を採用するため、突発的な極値(塩胡椒ノイズ)に強く、エッジも比較的保存できる。平均 / ガウシアンは平滑化過剰になりがち。",
  },
  {
    id: "img-q6",
    category: "エッジ検出",
    difficulty: 2,
    question:
      "古典的エッジ検出の決定版とされ、平滑化 → 勾配計算 → 非最大抑制 → ヒステリシス閾値処理 の段階を持つ手法として最も適切なものを選びなさい。",
    choices: [
      "Sobel フィルタ",
      "Laplacian フィルタ",
      "Canny エッジ検出",
      "メディアンフィルタ",
    ],
    correctIndex: 2,
    explanation:
      "**Canny エッジ検出** は 4 段階(平滑化→勾配→非最大抑制→ヒステリシス)からなる手法で、現代でも古典的エッジ検出の標準。",
  },
  {
    id: "img-q7",
    category: "周波数",
    difficulty: 3,
    question:
      "畳み込み定理(Convolution Theorem)に関して最も適切な記述を選びなさい。",
    choices: [
      "空間領域の畳み込みは周波数領域の積に対応する",
      "空間領域の畳み込みは周波数領域の和に対応する",
      "空間領域の畳み込みは周波数領域でも畳み込み",
      "空間と周波数領域は完全に独立",
    ],
    correctIndex: 0,
    explanation:
      "**畳み込み定理**: $\\mathcal{F}\\{f * g\\} = \\mathcal{F}\\{f\\} \\cdot \\mathcal{F}\\{g\\}$。空間の畳み込みが周波数領域では単なる積になるため、大きなカーネルは FFT 経由で高速計算できる。",
  },
  {
    id: "img-q8",
    category: "周波数",
    difficulty: 2,
    question:
      "JPEG が 8×8 ブロックごとに適用している直交変換として最も適切なものを選びなさい。",
    choices: [
      "離散フーリエ変換(DFT)",
      "離散コサイン変換(DCT)",
      "離散ウェーブレット変換(DWT)",
      "K 平均クラスタリング",
    ],
    correctIndex: 1,
    explanation:
      "JPEG は **DCT(離散コサイン変換)** を 8×8 ブロックに適用。実数で計算でき、自然画像のエネルギーを低周波に集中させる性質が圧縮効率に有利。",
  },
  {
    id: "img-q9",
    category: "周波数",
    difficulty: 2,
    question:
      "JPEG2000 で採用された、時間 / 空間と周波数を同時に局在化できる変換として最も適切なものを選びなさい。",
    choices: [
      "DCT",
      "ウェーブレット変換",
      "FFT",
      "Hadamard 変換",
    ],
    correctIndex: 1,
    explanation:
      "**ウェーブレット変換** は『この場所のこの周波数』を表現でき、JPEG2000 で採用された。エッジや突発的な変化のある画像で有利。",
  },
  {
    id: "img-q10",
    category: "幾何変換",
    difficulty: 2,
    question:
      "アフィン変換が **保存しない** 性質として最も適切なものを選びなさい。",
    choices: [
      "直線性(直線は直線のまま)",
      "平行性(平行な直線は平行のまま)",
      "角度",
      "比率(ある方向の長さ比)",
    ],
    correctIndex: 2,
    explanation:
      "アフィン変換(平行移動 / 回転 / 拡大縮小 / シア)は **直線性 ・ 平行性 ・ 比率** は保存するが、**角度は一般に保存しない**(シア / 非等方拡縮で変化)。",
  },
  {
    id: "img-q11",
    category: "補間",
    difficulty: 2,
    question:
      "画像拡大時に滑らかで標準的とされる補間手法として最も適切なものを選びなさい。",
    choices: [
      "最近傍補間",
      "バイリニア補間",
      "バイキュービック補間",
      "K-NN 補間",
    ],
    correctIndex: 2,
    explanation:
      "**バイキュービック補間** は 16 近傍を使う 3 次補間で、滑らかさと細部保存のバランスが良く現代の標準。最近傍は速いがブロック状、バイリニアは中間。",
  },
  {
    id: "img-q12",
    category: "モルフォロジ",
    difficulty: 2,
    question:
      "**収縮 → 膨張** の順で適用するモルフォロジ演算の名称として最も適切なものを選びなさい。",
    choices: [
      "オープニング",
      "クロージング",
      "Top-Hat",
      "Black-Hat",
    ],
    correctIndex: 0,
    explanation:
      "**オープニング = 収縮 → 膨張**。小さなノイズや突起を除去するのに使う。クロージングは膨張 → 収縮で、小さな穴を埋める。",
  },
  {
    id: "img-q13",
    category: "特徴量",
    difficulty: 2,
    question:
      "スケール不変・回転不変・照明不変の特性を持ち、長らく古典的画像マッチングの標準として使われてきた局所特徴量として最も適切なものを選びなさい。",
    choices: ["HOG", "SIFT", "LBP", "Haar-like"],
    correctIndex: 1,
    explanation:
      "**SIFT(Scale-Invariant Feature Transform)** はスケール / 回転 / 照明変化に頑健な局所特徴量で、画像マッチング・パノラマ合成・3D 復元などで使われた。SURF / ORB などの後継も派生している。",
  },
  {
    id: "img-q14",
    category: "特徴量",
    difficulty: 2,
    question:
      "歩行者検出の古典的アルゴリズム(Dalal & Triggs, 2005)で使われた特徴量として最も適切なものを選びなさい。",
    choices: ["SIFT", "HOG(Histogram of Oriented Gradients)", "LBP", "ORB"],
    correctIndex: 1,
    explanation:
      "**HOG** は勾配方向のヒストグラムで人間の輪郭をうまく捉え、HOG + SVM での歩行者検出が CNN 普及前の標準だった。",
  },
  {
    id: "img-q15",
    category: "古典分類器",
    difficulty: 3,
    question:
      "Viola-Jones の顔検出アルゴリズムで使われた、弱識別器をブースティングする手法として最も適切なものを選びなさい。",
    choices: [
      "AdaBoost",
      "ランダムフォレスト",
      "k-means",
      "PCA",
    ],
    correctIndex: 0,
    explanation:
      "Viola-Jones(2001)は **Haar-like 特徴 + AdaBoost + カスケード構造** で初めて高速な顔検出を実現。デジカメの顔検出機能に広く採用された。",
  },
  {
    id: "img-q16",
    category: "深層学習",
    difficulty: 2,
    question:
      "2012 年の ImageNet コンテストで圧勝し、現代のディープラーニングブームの起点となった CNN モデルの名称として最も適切なものを選びなさい。",
    choices: ["LeNet", "AlexNet", "ResNet", "EfficientNet"],
    correctIndex: 1,
    explanation:
      "**AlexNet**(Krizhevsky 2012)は ImageNet で前年比 10% 以上の精度向上を達成。GPU + ReLU + Dropout という現代の DL の主要要素を結集していた。",
  },
  {
    id: "img-q17",
    category: "深層学習",
    difficulty: 2,
    question:
      "医用画像のセグメンテーションで標準的に使われる、エンコーダ-デコーダ + skip connection 構造を持つモデルとして最も適切なものを選びなさい。",
    choices: ["VGG", "U-Net", "YOLO", "BERT"],
    correctIndex: 1,
    explanation:
      "**U-Net** は医用画像セグメンテーションの標準。エンコーダで縮小、デコーダで拡大しつつ skip connection で詳細を保持する設計。",
  },
  {
    id: "img-q18",
    category: "深層学習",
    difficulty: 3,
    question:
      "物体検出の評価指標として、IoU の閾値ごとの平均適合率を平均した指標の名称として最も適切なものを選びなさい。",
    choices: [
      "mAP(mean Average Precision)",
      "F1 スコア",
      "RMSE",
      "PSNR",
    ],
    correctIndex: 0,
    explanation:
      "**mAP** は物体検出の標準指標。COCO では IoU 閾値 0.5 〜 0.95 の平均、PASCAL VOC では 0.5 など、流派により定義が異なる。",
  },
  {
    id: "img-q19",
    category: "3D 視覚",
    difficulty: 3,
    question:
      "ステレオ視で対応点探索を 1 次元上に制限する幾何学的拘束の名称として最も適切なものを選びなさい。",
    choices: [
      "ホモグラフィ拘束",
      "アフィン拘束",
      "エピポーラ拘束",
      "ピンホール拘束",
    ],
    correctIndex: 2,
    explanation:
      "**エピポーラ拘束** により、片方の画像のある点に対応する点は、もう片方の画像で **エピポーラ線** 上にあることが保証される。これで 2D 探索が 1D 探索に削減される。",
  },
  {
    id: "img-q20",
    category: "動画",
    difficulty: 2,
    question:
      "連続するフレーム間で各画素がどう移動したかを推定する処理の名称として最も適切なものを選びなさい。",
    choices: [
      "ステレオマッチング",
      "オプティカルフロー",
      "セグメンテーション",
      "Bag-of-Features",
    ],
    correctIndex: 1,
    explanation:
      "**オプティカルフロー** はフレーム間の画素移動を推定。Lucas-Kanade(局所)・Horn-Schunck(大域)が古典手法、近年は RAFT などの DL ベースが標準。",
  },
  { id: "img-q21", category: "古典 CV", difficulty: 3, question: "**Sobel フィルタ** の主目的を選びなさい。", choices: ["エッジ検出(x / y 方向勾配)", "平滑化", "色相変換", "リサイズ"], correctIndex: 0, explanation: "**Sobel フィルタ**: 3×3 カーネルで x / y 方向の輝度勾配を計算 → エッジ強度 ・ 方向。Canny エッジ検出の前段としても利用。" },
  { id: "img-q22", category: "古典 CV", difficulty: 3, question: "**Canny エッジ検出** の処理順序として正しいものを選びなさい。", choices: ["ガウシアン平滑化 → 勾配計算 → Non-Max Suppression → 二重閾値 → ヒステリシス", "二重閾値 → 平滑化 → 勾配計算", "勾配計算のみ", "Hough 変換だけ"], correctIndex: 0, explanation: "**Canny**: ① ガウシアン平滑化 ② Sobel で勾配 ③ Non-Max Suppression(細線化)④ 高低 2 閾値 ⑤ ヒステリシスで連結。古典エッジ検出の決定版。" },
  { id: "img-q23", category: "古典 CV", difficulty: 3, question: "**Hough 変換** の主目的を選びなさい。", choices: ["パラメータ空間への投票で直線 / 円を検出", "色変換", "圧縮", "ヒストグラム平坦化"], correctIndex: 0, explanation: "**Hough 変換**: 画像空間 → パラメータ空間(ρ,θ)に投票し直線 ・ 円を検出。OpenCV `HoughLinesP` / `HoughCircles` で実装。" },
  { id: "img-q24", category: "ヒストグラム", difficulty: 2, question: "**ヒストグラム平坦化(Equalization)** の効果として最も適切なものを選びなさい。", choices: ["コントラスト向上(暗 / 明部の利用範囲拡張)", "ノイズ除去", "色変換", "エッジ強調"], correctIndex: 0, explanation: "**Histogram Equalization** は累積分布関数(CDF)で輝度を再マッピングし、ヒストグラムを均等化 → コントラスト向上。CLAHE は局所適用版。" },
  { id: "img-q25", category: "色空間", difficulty: 3, question: "色空間の組合せとして **誤っているもの** を選びなさい。", choices: ["RGB ↔ HSV", "RGB ↔ YCbCr", "RGB ↔ Lab", "RGB ↔ ハッシュ"], correctIndex: 3, explanation: "標準色空間: RGB / HSV / HSL / YCbCr / Lab / XYZ / CMYK。**HSV は色相分離、YCbCr は JPEG 圧縮、Lab は知覚均等** で用途別。ハッシュは色空間ではない。" },
  { id: "img-q26", category: "モルフォロジー", difficulty: 3, question: "**膨張(Dilation)+ 収縮(Erosion)** の順序で行う処理として最も適切なものを選びなさい。", choices: ["クロージング(穴 ・ 切れ目を埋める)", "オープニング", "ガウシアン", "メディアン"], correctIndex: 0, explanation: "**クロージング = 膨張 → 収縮**: 穴 ・ 切れ目を埋める。**オープニング = 収縮 → 膨張**: 小ノイズ除去。2 値画像処理の定番。" },
  { id: "img-q27", category: "フィルタ", difficulty: 3, question: "**メディアンフィルタ** が **平均値フィルタ** より優れる場面として最も適切なものを選びなさい。", choices: ["ごま塩(salt-and-pepper)ノイズ除去", "ガウシアンノイズ除去", "エッジ強調", "色変換"], correctIndex: 0, explanation: "**メディアンフィルタ**: 領域内の中央値を採用 → 外れ値耐性。**ごま塩ノイズに最適**。平均フィルタは外れ値に弱い。ガウシアンノイズはガウシアン or バイラテラルが良い。" },
  { id: "img-q28", category: "周波数", difficulty: 3, question: "**JPEG 圧縮** で使われる変換として最も適切なものを選びなさい。", choices: ["離散コサイン変換(DCT)+ 量子化 + Huffman 符号化", "FFT のみ", "DWT(Wavelet)", "PCA"], correctIndex: 0, explanation: "**JPEG**: 8×8 ブロック DCT → 量子化(高周波削減)→ Zigzag → Huffman / Run-length 符号化。**JPEG 2000 は DWT 採用**。両者は別規格。" },
  { id: "img-q29", category: "特徴点", difficulty: 3, question: "**SIFT** の特徴として **誤っているもの** を選びなさい。", choices: ["スケール不変", "回転不変", "照度変化に強い", "リアルタイム動画向け超高速"], correctIndex: 3, explanation: "**SIFT**: スケール ・ 回転 ・ 照度不変の局所特徴量。精度は高いが **計算重い**。リアルタイムは **ORB / FAST + BRIEF** が定番。SURF は SIFT の高速版。" },
  { id: "img-q30", category: "Stereo", difficulty: 3, question: "**ステレオマッチング** で求まる主な情報として最も適切なものを選びなさい。", choices: ["視差(disparity)→ 深度マップ", "カメラ姿勢", "ピント位置", "色相"], correctIndex: 0, explanation: "**Stereo**: 左右カメラの視差 d を計算 → 深度 z = f·b/d(f: 焦点距離、b: 基線長)。SGM / BM などの古典法、DL では PSMNet / RAFT-Stereo が標準。" },
  { id: "img-q31", category: "CNN", difficulty: 3, question: "**Pooling 層** の主目的として最も適切なものを選びなさい。", choices: ["空間次元の縮小 + 平行移動不変性", "学習率の調整", "重みの初期化", "Loss の計算"], correctIndex: 0, explanation: "**Pooling(Max / Average)**: 空間次元を半分等に縮小 + 局所不変性。**Stride=2 の Conv で代替** する設計(ResNet 後半 / EfficientNet)も主流。" },
  { id: "img-q32", category: "CNN", difficulty: 3, question: "**Receptive Field(受容野)** の説明として最も適切なものを選びなさい。", choices: ["出力 1 ピクセルが影響を受ける入力領域", "出力チャネル数", "ストライド幅", "活性化関数の名称"], correctIndex: 0, explanation: "**Receptive Field**: 深い層ほど広い領域を見る(層数 / Stride / Kernel で決まる)。Dilation Convolution で計算量を増やさず RF 拡大。" },
  { id: "img-q33", category: "DL Arch", difficulty: 3, question: "**ResNet** が **VGG** より深い NN を学習可能にした技術として最も適切なものを選びなさい。", choices: ["Skip Connection(残差接続)", "BatchNorm の不使用", "GPU の進化のみ", "学習率の自動調整"], correctIndex: 0, explanation: "**Skip Connection**: `y = F(x) + x`。勾配消失問題を緩和し 100+ 層の学習を可能に。Bottleneck Block で計算効率も向上。ResNet 以降の DL アーキテクチャの標準パーツ。" },
  { id: "img-q34", category: "DL Arch", difficulty: 3, question: "**Inception(GoogLeNet)** の特徴として最も適切なものを選びなさい。", choices: ["異なるサイズのフィルタを並列適用し結合する Inception Block", "1 種類のフィルタのみ使用", "全結合層なし", "RNN"], correctIndex: 0, explanation: "**Inception**: 1×1 / 3×3 / 5×5 / Pool を並列実行し concat → スパース性 + 多スケール対応。1×1 Conv で次元削減してから 3×3/5×5 を実行する設計が肝。" },
  { id: "img-q35", category: "Segmentation", difficulty: 3, question: "**Semantic / Instance / Panoptic Segmentation** の違いとして最も適切なものを選びなさい。", choices: ["Semantic: クラス別ピクセル / Instance: 個体識別 / Panoptic: 両者統合", "全て同じ", "Semantic と Instance は同義", "Panoptic は古典手法"], correctIndex: 0, explanation: "**Semantic**: 各ピクセルにクラス(車 ・ 道路等)。**Instance**: 同クラス内の個体識別(車 1 / 車 2)。**Panoptic**: Semantic + Instance を統合 → 全ピクセルに『クラス + 個体 ID』。" },
  { id: "img-q36", category: "Segmentation", difficulty: 3, question: "**U-Net** が **医療画像** で広く使われる理由として最も適切なものを選びなさい。", choices: ["少データでも高精度 + Skip Connection で細部復元", "GPU 不要", "実行が極速", "ラベル不要"], correctIndex: 0, explanation: "**U-Net**: Encoder-Decoder + Skip Connection。**少データ + 高精度ピクセルレベル** で医療画像 ・ 衛星画像に最適。Data Augmentation との組合せが鉄板。" },
  { id: "img-q37", category: "Detection", difficulty: 3, question: "**Faster R-CNN** の構成要素として **誤っているもの** を選びなさい。", choices: ["Region Proposal Network(RPN)", "RoI Pooling", "Classification + BBox Regression Head", "Selective Search"], correctIndex: 3, explanation: "**Faster R-CNN は Selective Search を RPN で置換** したのが本質(高速化)。RPN がアンカー単位で proposal 生成 → RoI Pool → 分類 + 回帰。" },
  { id: "img-q38", category: "Detection", difficulty: 3, question: "**1-stage vs 2-stage Detector** のトレードオフとして最も適切なものを選びなさい。", choices: ["1-stage(YOLO / SSD): 速い、2-stage(Faster R-CNN / Cascade): 精度高め", "1-stage が常に高精度", "2-stage は常に速い", "両者は同等"], correctIndex: 0, explanation: "**1-stage**(YOLO / SSD / RetinaNet): 1 回の forward で BBox + クラス → 速い。**2-stage**(Faster R-CNN / Cascade): Proposal → 分類 → 精度高。最近は DETR 等 Transformer ベースも。" },
  { id: "img-q39", category: "Anchor", difficulty: 3, question: "**Anchor-free Detector(FCOS / CenterNet)** の利点として最も適切なものを選びなさい。", choices: ["Anchor 設計不要、ハイパーパラメータ削減", "Anchor が多くて高精度", "計算量増加", "BBox 不要"], correctIndex: 0, explanation: "**Anchor-free**: 中心点 + サイズで直接予測。アンカーの **数 / 比 / スケール** ハイパラ不要。FCOS / CenterNet / DETR が代表。" },
  { id: "img-q40", category: "GAN", difficulty: 3, question: "**Pix2Pix / CycleGAN** の用途として最も適切なものを選びなさい。", choices: ["画像 → 画像変換(白黒↔カラー、夏↔冬等)", "テキスト分類", "音声認識", "DB クエリ"], correctIndex: 0, explanation: "**Pix2Pix**: 対応ペア必須(輪郭→写真)。**CycleGAN**: 対応ペア不要 + Cycle Consistency Loss(馬↔シマウマ、夏↔冬)。Conditional GAN ファミリ。" },
  { id: "img-q41", category: "Diffusion", difficulty: 3, question: "**Latent Diffusion(Stable Diffusion)** が **画素空間 Diffusion** より優れる点として最も適切なものを選びなさい。", choices: ["VAE で潜在空間に圧縮してから Diffusion → メモリ ・ 速度大幅改善", "画素を直接生成", "ラベル不要", "GPU 不要"], correctIndex: 0, explanation: "**Stable Diffusion**: VAE で 64×64 潜在空間に圧縮 → UNet で Diffusion → デコード。**画素空間 Diffusion(512×512)より 50× 高速** + 同等品質。" },
  { id: "img-q42", category: "Vision Transformer", difficulty: 3, question: "**Vision Transformer(ViT)** が **CNN** と決定的に異なる点として最も適切なものを選びなさい。", choices: ["パッチに分割 → Transformer エンコーダで Self-Attention", "畳み込みだけ使う", "RNN", "FFT 専用"], correctIndex: 0, explanation: "**ViT**: 画像を 16×16 パッチに分割 → 各パッチを Linear Embedding → Self-Attention で大域関係。大量データで CNN を凌駕。Swin Transformer は階層化版。" },
  { id: "img-q43", category: "SAM", difficulty: 3, question: "**SAM(Segment Anything Model)** の特徴として最も適切なものを選びなさい。", choices: ["プロンプト(点 / BBox / マスク)で任意領域をゼロショットセグメント", "ImageNet 1000 クラスのみ", "音声入力", "テキスト分類"], correctIndex: 0, explanation: "**SAM**(Meta 2023): 11M 画像 ・ 1.1B マスクで学習 → **ゼロショット** で任意領域セグメント。プロンプタブル(点 / ボックス / マスク / テキスト)。SAM 2 で動画対応。" },
  { id: "img-q44", category: "深度推定", difficulty: 3, question: "**単眼深度推定(Monocular Depth Estimation)** の代表モデルとして最も適切なものを選びなさい。", choices: ["MiDaS / DPT / Depth Anything", "YOLO", "SAM", "Pix2Pix"], correctIndex: 0, explanation: "**Monocular Depth**: 1 枚画像から深度推定(相対深度が多い)。**MiDaS / DPT(MiDaS 後継)・ Depth Anything**(2024)。AR / 3D 復元 / ロボティクスで活用。" },
  { id: "img-q45", category: "NeRF", difficulty: 3, question: "**NeRF(Neural Radiance Fields)** の特徴として最も適切なものを選びなさい。", choices: ["多視点画像から 3D シーンを暗黙関数で表現 + 新視点合成", "2D 画像分類", "テキスト生成", "音声合成"], correctIndex: 0, explanation: "**NeRF**: シーンを **MLP `F(x,d) → (色,密度)`** で表現。多視点画像から学習 → 新視点でレンダリング。**Gaussian Splatting** は明示的 3D 表現で高速化された新世代手法。" },
  { id: "img-q46", category: "Augmentation", difficulty: 3, question: "**Mixup** の Augmentation 手法として最も適切なものを選びなさい。", choices: ["2 枚の画像 + ラベルを線形補間して学習", "1 枚をクロップする", "回転だけ", "色変換だけ"], correctIndex: 0, explanation: "**Mixup**: `x' = λx_a + (1-λ)x_b、y' = λy_a + (1-λ)y_b`(λ ~ Beta(α,α))。決定境界を滑らかに。**CutMix** はパッチ置換版、**Mosaic** は 4 枚モザイク(YOLOv4)。" },
  { id: "img-q47", category: "評価指標", difficulty: 3, question: "物体検出の評価指標 **mAP(mean Average Precision)** の説明として最も適切なものを選びなさい。", choices: ["各クラスの PR 曲線下面積(AP)をクラス平均", "F1 スコアと同じ", "精度のみ", "再現率のみ"], correctIndex: 0, explanation: "**mAP**: Precision-Recall 曲線下面積(AP)をクラス平均。IoU 閾値別(mAP@0.5 / mAP@0.5:0.95)の値を報告。COCO 標準は mAP@[0.5:0.95]。" },
  { id: "img-q48", category: "OCR", difficulty: 3, question: "OCR の最新ベストプラクティスとして **誤っているもの** を選びなさい。", choices: ["Detection(EAST / DBNet)+ Recognition(CRNN / TrOCR)の 2 段", "Tesseract OCR", "TrOCR(Transformer ベース)", "古典ルールベースのみ"], correctIndex: 3, explanation: "**現代 OCR**: DL ベース 2 段(Text Detection + Recognition)が標準。TrOCR / PaddleOCR / Tesseract 5 系。古典ルールベース単独は精度不足。" },
  { id: "img-q49", category: "実装", difficulty: 3, question: "**OpenCV** の **Python バインディング** で画像読込関数として最も適切なものを選びなさい。", choices: ["cv2.imread('path.jpg')(BGR で返す)", "cv2.read_image()", "cv2.load()", "cv2.open()"], correctIndex: 0, explanation: "**`cv2.imread()`** は **BGR 順**(RGB ではない)で numpy 配列返却。matplotlib / PIL は RGB。`cv2.cvtColor(img, cv2.COLOR_BGR2RGB)` で変換頻出。" },
  { id: "img-q50", category: "次のステップ", difficulty: 1, question: "画像処理エンジニア検定 エキスパート合格後の次のステップとして最も適切なものを選びなさい。", choices: ["E 資格 / AI 実装検定 S 級 / GCP Pro ML Engineer など実装系上位", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "画像処理エンジニア合格後は **DL 全般を深掘り**(E 資格 / AI 実装 S 級)、**業務応用**(AWS / GCP ML Engineer)、**研究志向**(CVPR / ECCV 論文読解)など方向性別に。" },
  { id: "img-q51", category: "Color", difficulty: 3, question: "**RGB → HSV 色空間変換** の利点として最も適切なものを選びなさい。", choices: ["色相 ・ 彩度 ・ 明度を分離 → 照明変動に頑健な色抽出", "GPU 高速", "圧縮", "認証"], correctIndex: 0, explanation: "**HSV**: Hue / Saturation / Value。**色抽出 ・ 彩度ベースのセグメント**で照明変化に頑健。**Lab / YCbCr** も類似目的(輝度 ・ 色差分離)。" },
  { id: "img-q52", category: "Filter", difficulty: 3, question: "**ガウシアンフィルタ** とメディアンフィルタの違いとして最も適切なものを選びなさい。", choices: ["ガウシアン=線形 ・ ぼかし向き、メディアン=非線形 ・ Salt & Pepper Noise 除去", "両者同じ", "ガウシアンが Salt 向き", "両者非線形"], correctIndex: 0, explanation: "**ガウシアン**: 線形畳込み ・ 滑らかぼかし ・ Gaussian Noise 向き。**メディアン**: 非線形 ・ **Salt & Pepper Noise(ごま塩)に強い** ・ エッジ保持良。**Bilateral Filter** は両者の中間(エッジ保持 + ぼかし)。" },
  { id: "img-q53", category: "Edge", difficulty: 3, question: "**Canny エッジ検出器** の処理手順として最も適切なものを選びなさい。", choices: ["ガウシアン → 勾配 → Non-Max Suppression → Double Threshold → Hysteresis", "Sobel のみ", "Laplacian のみ", "FFT のみ"], correctIndex: 0, explanation: "**Canny**(1986): ① Gaussian Blur ② Sobel 勾配 ③ Non-Maximum Suppression(細線化)④ Double Threshold ⑤ Hysteresis(連結)。**伝統的エッジ検出のゴールデンスタンダード**。" },
  { id: "img-q54", category: "Morphology", difficulty: 3, question: "**Opening = Erosion → Dilation** の効果として最も適切なものを選びなさい。", choices: ["小さなノイズ除去 + 全体形状保持", "輪郭強調", "GPU 高速化", "圧縮"], correctIndex: 0, explanation: "**Opening**(Erosion → Dilation): 小ノイズ除去 ・ 細い接続切断。**Closing**(Dilation → Erosion): 小穴埋め ・ 切れ目接続。**Morphological Gradient = Dilation - Erosion**(輪郭抽出)。" },
  { id: "img-q55", category: "Hough", difficulty: 3, question: "**Hough 変換** の用途として最も適切なものを選びなさい。", choices: ["パラメータ空間で直線 ・ 円検出(画像座標 → (ρ, θ) または (a, b, r) 投票)", "ノイズ除去", "圧縮", "GPU"], correctIndex: 0, explanation: "**Hough Transform**: 画像エッジ → パラメータ空間(直線 ρ-θ / 円 a-b-r)で投票 → ピーク検出。**Lane Detection / 円検出 / 一般化 Hough(形状)**。エッジ二値化が前段に必要。" },
  { id: "img-q56", category: "Features", difficulty: 3, question: "**SIFT(Scale-Invariant Feature Transform)** の特徴として最も適切なものを選びなさい。", choices: ["スケール ・ 回転 ・ 照明不変な局所特徴量 + Descriptor", "色のみ", "Edge のみ", "GPU 専用"], correctIndex: 0, explanation: "**SIFT**(Lowe 2004): DoG ピラミッドでキーポイント → 主方向 → 128 次元 Descriptor。**Image Matching / Stitching / Object Recognition**。**SURF / ORB / AKAZE / SuperPoint(DL)** が進化版。" },
  { id: "img-q57", category: "Segmentation", difficulty: 3, question: "**Watershed 法** の用途として最も適切なものを選びなさい。", choices: ["勾配画像を地形と見なし水流で領域分割 ・ 結合領域分離", "Edge 検出", "圧縮", "GPU"], correctIndex: 0, explanation: "**Watershed**: 勾配画像を地形として **谷から水を注ぎ堤を作る**。Over-Segmentation 対策にマーカー指定 ・ Distance Transform で前処理。**接触した細胞 / 同色物体の分離**に強い。" },
  { id: "img-q58", category: "CNN", difficulty: 3, question: "**Receptive Field(受容野)** の意味として最も適切なものを選びなさい。", choices: ["出力 1 ピクセルが元入力のどれだけの範囲に依存するか", "GPU 使用率", "学習率", "認証"], correctIndex: 0, explanation: "**Receptive Field**: 深層 CNN の各層で 1 ニューロンの入力依存範囲。**Dilated Convolution / Stride / Pooling** で拡大。**Effective Receptive Field** は理論値より小さい(ガウシアン的)。" },
  { id: "img-q59", category: "CNN", difficulty: 3, question: "**Transposed Convolution(逆畳み込み)** の用途として最も適切なものを選びなさい。", choices: ["特徴マップを Upsample(U-Net Decoder / GAN Generator)", "Pooling", "Activation", "正則化"], correctIndex: 0, explanation: "**Transposed Conv**(ConvTranspose2d): Stride > 1 で空間拡大。**U-Net Decoder / DCGAN Generator**。**Checkerboard Artifact** あり → **PixelShuffle / Bilinear + Conv** で代替も。" },
  { id: "img-q60", category: "Object Detection", difficulty: 3, question: "**YOLO(You Only Look Once)** の特徴として最も適切なものを選びなさい。", choices: ["1 段階(One-Stage)で BB + Class を同時予測 → リアルタイム性高", "2 段階", "GPU 不可", "Segmentation 専用"], correctIndex: 0, explanation: "**One-Stage(YOLO / SSD / RetinaNet)**: グリッド単位で同時予測 → 高速。**Two-Stage(Faster R-CNN)**: RPN → Detection で高精度。**YOLO v8 / v9 / v10 / v11**(2024+)が現在主流。" },
  { id: "img-q61", category: "Segmentation", difficulty: 3, question: "**Semantic / Instance / Panoptic Segmentation** の違いとして最も適切なものを選びなさい。", choices: ["Semantic=クラス別、Instance=個体別、Panoptic=両者統合", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**Semantic**(人 / 車 / 道のクラス分け)・ **Instance**(人 1, 人 2 を区別)・ **Panoptic**(Stuff + Things 統合)。**SAM**(Segment Anything Model, Meta 2023)で Zero-shot Segmentation。" },
  { id: "img-q62", category: "GAN", difficulty: 3, question: "**StyleGAN** の特徴として最も適切なものを選びなさい。", choices: ["Style 制御 + 高解像度顔画像生成 ・ Latent Space の Disentanglement", "Detection 専用", "OCR", "圧縮"], correctIndex: 0, explanation: "**StyleGAN**(Karras et al., NVIDIA): **Mapping Network**(W 空間)+ **AdaIN**(Style 注入)→ Style 制御 + 高解像度。**StyleGAN3** で Aliasing 解消。Diffusion 台頭で相対的低下も研究継続。" },
  { id: "img-q63", category: "Diffusion", difficulty: 3, question: "**Diffusion Model(DDPM)** の基本原理として最も適切なものを選びなさい。", choices: ["画像にノイズ追加(Forward)→ 学習で逆ノイズ除去(Reverse)→ 生成", "全部 1 ステップ", "GAN と同じ", "VAE と同じ"], correctIndex: 0, explanation: "**Diffusion**(Ho et al. 2020): Forward(ノイズ追加)+ Reverse(学習)。**Stable Diffusion**(Latent Diffusion)・ **DALL-E 3 / Midjourney / SD3 / Flux** が代表。**Score-based / Flow Matching** で進化。" },
  { id: "img-q64", category: "ViT", difficulty: 3, question: "**Vision Transformer(ViT)** の入力処理として最も適切なものを選びなさい。", choices: ["画像を 16x16 パッチに分割 → 各パッチを Embedding → Transformer 入力", "1 ピクセル毎", "Edge 抽出", "FFT"], correctIndex: 0, explanation: "**ViT**(Dosovitskiy et al. 2020): 画像を Patch + Position Embedding + Class Token → Transformer Encoder。**Data-hungry(大規模 PT 必要)**だが Inductive Bias 少。**Swin / DeiT / DINOv2** で改良。" },
  { id: "img-q65", category: "実務", difficulty: 3, question: "画像処理エンジニア検定エキスパートで頻出の **典型タスク** として最も適切なものを選びなさい。", choices: ["Color → Filter → Edge → Morphology → Features → CNN → Detection / Segmentation の総合", "色変更のみ", "GUI 操作のみ", "Excel のみ"], correctIndex: 0, explanation: "**画像処理 / CV の流れ**: ① 古典(Color / Filter / Edge / Morphology / Hough / SIFT)② DL(CNN / ResNet / EfficientNet)③ 応用(Detection / Segmentation / GAN / Diffusion / ViT)。**古典 + DL 統合理解** が試験の中核。" },
  { id: "img-q66", category: "Sampling", difficulty: 3, question: "**サンプリング定理(Nyquist)** の主張として最も適切なものを選びなさい。", choices: ["信号の最高周波数の 2 倍以上のサンプリングで元信号復元可", "1 倍で十分", "GPU", "認証"], correctIndex: 0, explanation: "**Nyquist-Shannon**: $f_s \\geq 2 f_{max}$。**Aliasing**(エイリアシング)= サンプリング不足で偽周波数。**Anti-Aliasing Filter** で防ぐ。画像 ・ 音声処理の基礎。" },
  { id: "img-q67", category: "Frequency", difficulty: 3, question: "**Fourier 変換** の画像処理での用途として最も適切なものを選びなさい。", choices: ["画像を周波数領域に変換 → フィルタ / 圧縮 / モアレ除去", "認証", "GPU 速度", "Cost"], correctIndex: 0, explanation: "**2D FFT**: 空間周波数解析。**Low-Pass(ぼかし)/ High-Pass(エッジ強調)/ Band-Pass(モアレ除去)**。**JPEG=DCT** はコサイン変換版で圧縮効率高い。" },
  { id: "img-q68", category: "Compression", difficulty: 3, question: "**JPEG 圧縮** の主要手順として **誤っているもの** を選びなさい。", choices: ["YCbCr 変換 + Chroma Subsampling", "8x8 DCT", "量子化(Q-Table)+ Huffman Coding", "GPU 圧縮"], correctIndex: 3, explanation: "**JPEG**: RGB → YCbCr → 4:2:0 サブサンプリング → 8x8 DCT → 量子化(Q-Table)→ ZigZag + RLE + Huffman。**Loss が量子化段階**で発生。**JPEG XL / WebP / AVIF** が後継。" },
  { id: "img-q69", category: "Color", difficulty: 3, question: "**色空間 CIE Lab** の特徴として最も適切なものを選びなさい。", choices: ["人間の知覚と均等な距離 → 色差計算に適合", "RGB と同じ", "GPU 専用", "認証"], correctIndex: 0, explanation: "**CIE Lab**: L(明度)・ a(緑-赤)・ b(青-黄)。**ΔE**(色差)で人間の知覚距離を反映。**HSV / HSL** は知覚と非均等。プロ画像処理 / 印刷で標準。" },
  { id: "img-q70", category: "Histogram", difficulty: 3, question: "**ヒストグラム平坦化(Equalization)** の効果として最も適切なものを選びなさい。", choices: ["明度分布を均等化 → コントラスト強調", "色変換", "GPU", "認証"], correctIndex: 0, explanation: "**Histogram Equalization**: 累積分布関数(CDF)で値再配置 → コントラスト向上。**CLAHE**(局所適応版)が実用的(全体平坦化のノイズ増を抑制)。" },
  { id: "img-q71", category: "Camera", difficulty: 3, question: "**Pinhole Camera Model** の基本式として最も適切なものを選びなさい。", choices: ["$u = f X / Z + c_x$、$v = f Y / Z + c_y$(透視投影)", "$u = X$", "$u = Z$", "$u = f$"], correctIndex: 0, explanation: "**Pinhole**: 透視投影。**Intrinsic**(焦点距離 f / 主点 c / 歪み)+ **Extrinsic**(R / T)で **Camera Calibration**(Zhang's Method / OpenCV `calibrateCamera`)。" },
  { id: "img-q72", category: "3D", difficulty: 3, question: "**Stereo Vision** の Disparity と Depth の関係として最も適切なものを選びなさい。", choices: ["Depth = f × B / Disparity(B=Baseline)", "両者独立", "GPU", "認証"], correctIndex: 0, explanation: "**Stereo**: 2 カメラで Disparity(視差)→ Depth 計算。**SGM(Semi-Global Matching)** が古典。**Active Stereo**(IR パターン投射 ・ Kinect / RealSense)・ **ToF / LiDAR** も。" },
  { id: "img-q73", category: "DL", difficulty: 3, question: "**ResNet** の **Skip Connection** の役割として最も適切なものを選びなさい。", choices: ["勾配消失を緩和 → 100 層超の深い NN 学習可能に", "速度向上のみ", "GPU 削減", "認証"], correctIndex: 0, explanation: "**ResNet**(He et al. 2015): Residual Connection $y = F(x) + x$ で勾配が直接流れる → ImageNet 152 層。**DenseNet**(密結合)・ **HighwayNet**(ゲート)も。" },
  { id: "img-q74", category: "DL", difficulty: 3, question: "**EfficientNet** の特徴として最も適切なものを選びなさい。", choices: ["Compound Scaling(Depth / Width / Resolution を同時拡張)", "Depth のみ", "認証", "GUI"], correctIndex: 0, explanation: "**EfficientNet**(Tan & Le 2019): NAS で B0 ベース → φ で 3 軸同時 Scaling → B0-B7。**EfficientNetV2**(2021): Fused-MBConv 追加で高速化。**MobileNet / ShuffleNet** はエッジ向け。" },
  { id: "img-q75", category: "DL", difficulty: 3, question: "**Vision Transformer(ViT)** の入力処理として最も適切なものを選びなさい。", choices: ["16x16 Patch 化 + Position Embedding + Class Token → Transformer", "1 ピクセル毎", "Edge 抽出のみ", "FFT"], correctIndex: 0, explanation: "**ViT**(Dosovitskiy et al. 2020): Patch + Position Embed + Cls Token → Transformer Encoder。**Data-hungry**(JFT-300M 事前学習)・ **Swin / DeiT / DINOv2** で改良。" },
  { id: "img-q76", category: "Detection", difficulty: 3, question: "**YOLO v8 / v9 / v10 / v11** の共通特徴として最も適切なものを選びなさい。", choices: ["One-Stage Detection + Anchor-Free / 軽量 + リアルタイム", "Two-Stage", "GUI", "認証"], correctIndex: 0, explanation: "**YOLO 系**: One-Stage + (近年は)Anchor-Free。**v8**(Ultralytics)・ **v9 / v10**(GELAN / PGI)・ **v11**(2024)で精度+速度両立。**Detection / Pose / Segmentation** 統合。" },
  { id: "img-q77", category: "Segmentation", difficulty: 3, question: "**Segment Anything Model(SAM)** の特徴として最も適切なものを選びなさい。", choices: ["Zero-shot Segmentation + Prompt(Point / Box / Text)対応", "教師あり専用", "GPU 不要", "認証"], correctIndex: 0, explanation: "**SAM**(Meta 2023, **SAM 2** 2024): 11M 画像 + 1B Mask で学習。**Zero-shot**(任意オブジェクト)・ **Prompt-able**(Click / Box / Text)。**動画追跡(SAM 2)**で進化。" },
  { id: "img-q78", category: "Generative", difficulty: 3, question: "**Diffusion Model**(DDPM / Stable Diffusion / Flux)の基本原理として最も適切なものを選びなさい。", choices: ["ノイズ追加 → 逆ノイズ除去を学習 → 生成", "GAN と同じ", "VAE と同じ", "認証"], correctIndex: 0, explanation: "**Diffusion**: Forward(ノイズ追加)+ Reverse(学習)・ Stable Diffusion / SDXL / SD3 / **Flux**(2024 高品質)・ **DALL-E 3 / Midjourney v6**。**Latent Diffusion** で効率化。" },
  { id: "img-q79", category: "VLM", difficulty: 3, question: "**Vision-Language Model(VLM)** の代表例として **誤っているもの** を選びなさい。", choices: ["GPT-4o / Claude 3.5 / Gemini 1.5", "LLaVA / CogVLM / Qwen2-VL / Pixtral", "Phi-3 Vision / Florence-2", "Microsoft Word"], correctIndex: 3, explanation: "**VLM(Multimodal LLM)**: クローズド(GPT-4o / Claude / Gemini)+ OSS(LLaVA / CogVLM / Qwen-VL / Pixtral / Phi-3 Vision / Florence-2 / DINOv2)。**画像理解 + キャプション + QA**統合。" },
  { id: "img-q80", category: "Cert", difficulty: 2, question: "**画像処理エンジニア検定 エキスパート** の対象として最も適切なものを選びなさい。", choices: ["古典画像処理 + CNN + Detection / Segmentation + GAN / Diffusion / VLM の総合", "ITパスポート相当", "GUI 操作のみ", "数学のみ"], correctIndex: 0, explanation: "**CG-ARTS 画像処理エンジニア**: Basic(古典中心)→ **Expert**(古典 + DL + 応用)。**OpenCV / scikit-image / PyTorch Vision / Hugging Face**実務知識が求められる。" },
];
