export const levels = [
  {
    slug: "intro",
    title: "入門編",
    description:
      "4級にも届かない超初心者の方向け。グラフの読み方・割合・平均など、算数レベルから統計に親しむ独自編。",
  },
  {
    slug: "grade-4",
    title: "4級",
    description: "高校基礎レベル。データの基本・確率の初歩。中高生向けの入門コンテンツ。",
  },
  {
    slug: "grade-3",
    title: "3級",
    description: "大学基礎レベル。記述統計・確率分布・推定検定の基本。",
  },
  {
    slug: "grade-2",
    title: "2級",
    description: "大学専門レベル。推定・検定・回帰分析など。受験者数が最も多い。",
  },
  {
    slug: "grade-pre1",
    title: "準1級",
    description: "応用レベル。多変量解析・ベイズ・時系列など高度な内容。",
  },
  {
    slug: "grade-1",
    title: "1級",
    description: "最上位レベル。数理統計学と応用力が試される。",
  },
] as const;

export type LevelSlug = (typeof levels)[number]["slug"];
