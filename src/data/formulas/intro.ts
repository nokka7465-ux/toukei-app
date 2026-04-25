import type { Formula } from "@/types/content";

export const introFormulas: Formula[] = [
  {
    id: "mean-basic",
    name: "平均",
    category: "代表値",
    tex: "\\text{平均} = \\dfrac{\\text{合計}}{\\text{個数}}",
    description: "全部のデータを足して個数で割る。「ひとりあたり何個か」を表す代表値。",
  },
  {
    id: "ratio",
    name: "割合",
    category: "比べる",
    tex: "\\text{割合} = \\dfrac{\\text{比べられる量}}{\\text{もとにする量}}",
    description:
      "「もとにする量」を 1 としたとき、「比べられる量」がいくつぶんかを表す数。$0$ から $1$ の間の小数になる。",
  },
  {
    id: "percentage",
    name: "百分率(%)",
    category: "比べる",
    tex: "\\text{百分率}\\,(\\%) = \\text{割合} \\times 100",
    description:
      "割合を $100$ 倍した値。「100 のうちいくつぶんか」を直感的に表す表示方法。",
  },
  {
    id: "frequency-ratio",
    name: "相対度数",
    category: "データ",
    tex: "\\text{相対度数} = \\dfrac{\\text{ある階級の度数}}{\\text{全体の度数}}",
    description:
      "全体に占める割合。すべての階級の相対度数を合計するとちょうど $1$ になる。",
  },
  {
    id: "probability-basic",
    name: "確率の基本",
    category: "確率",
    tex: "P(A) = \\dfrac{\\text{Aが起こる場合の数}}{\\text{起こりうるすべての場合の数}}",
    description:
      "「ある出来事 A が起こりやすさ」を $0$(起こらない)から $1$(必ず起こる)の数で表す。",
  },
  {
    id: "range-basic",
    name: "範囲",
    category: "ばらつき",
    tex: "\\text{範囲} = \\text{最大値} - \\text{最小値}",
    description:
      "データのいちばん大きい値から、いちばん小さい値を引いた値。データの広がりの目安。",
  },
];
