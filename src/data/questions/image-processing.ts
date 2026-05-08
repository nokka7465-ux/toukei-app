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
];
