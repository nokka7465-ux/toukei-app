import type { Book } from "@/types/content";

// Amazon アソシエイトプログラムの承認後、ここに自分のアソシエイト ID(例: "yourname-22")を入れる。
// 空のままだと通常の Amazon 検索リンクとして動作する(アフィリエイト報酬なし)。
const AMAZON_AFFILIATE_TAG = "";

export function amazonSearchUrl(query: string): string {
  const base = `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}`;
  return AMAZON_AFFILIATE_TAG ? `${base}&tag=${AMAZON_AFFILIATE_TAG}` : base;
}

export const isAffiliateEnabled = AMAZON_AFFILIATE_TAG !== "";

export const booksByLevel: Record<string, Book[]> = {
  "grade-4": [
    {
      title: "日本統計学会公式認定 統計検定4級対応 データの活用",
      publisher: "東京図書",
      note: "4級の出題範囲に対応した公式テキスト。中高生の入門にも最適。",
    },
    {
      title: "日本統計学会公式認定 統計検定4級 公式問題集",
      publisher: "実務教育出版",
      note: "直近の過去問を収録した公式問題集。出題形式に慣れるのに必須。",
    },
  ],
  "grade-3": [
    {
      title: "日本統計学会公式認定 統計検定3級対応 データの分析",
      publisher: "東京図書",
      note: "記述統計・確率・推定の基礎まで、3級の出題範囲に沿って解説。",
    },
    {
      title: "日本統計学会公式認定 統計検定3級 公式問題集",
      publisher: "実務教育出版",
      note: "過去問を収録。解法の着眼点を身につけるための定番。",
    },
  ],
  "grade-2": [
    {
      title: "日本統計学会公式認定 統計検定2級対応 統計学基礎",
      publisher: "東京図書",
      note: "2級の出題範囲に完全準拠した公式テキスト。推定・検定・回帰まで。",
    },
    {
      title: "日本統計学会公式認定 統計検定2級 公式問題集",
      publisher: "実務教育出版",
      note: "過去問を収録。計算量の多い問題に慣れるために繰り返し演習したい。",
    },
    {
      title: "統計学入門(基礎統計学I) 東京大学出版会",
      publisher: "東京大学出版会",
      note: "通称「赤本」。2級レベルの理論を丁寧に学びたい人向けの定番書。",
    },
  ],
  "grade-pre1": [
    {
      title: "日本統計学会公式認定 統計検定準1級対応 統計学実践ワークブック",
      publisher: "学術図書出版社",
      note: "通称「ワークブック」。準1級対策の事実上の必読書。",
    },
    {
      title: "日本統計学会公式認定 統計検定準1級 公式問題集",
      publisher: "実務教育出版",
      note: "過去問集。ワークブックと並行して演習を回すのが王道ルート。",
    },
    {
      title: "現代数理統計学の基礎",
      publisher: "共立出版",
      note: "数理統計の基礎を体系的に学べる。理論面を強化したい人向け。",
    },
  ],
  "grade-1": [
    {
      title: "日本統計学会公式認定 統計検定1級対応 統計学",
      publisher: "東京図書",
      note: "1級「統計数理」「統計応用」の出題範囲をカバーする公式テキスト。",
    },
    {
      title: "日本統計学会公式認定 統計検定1級 公式問題集",
      publisher: "実務教育出版",
      note: "記述式の過去問を収録。解答作成の型を身につけるのに必須。",
    },
    {
      title: "現代数理統計学",
      publisher: "学術図書出版社",
      note: "竹村彰通『現代数理統計学』。1級の数理部分で参照される古典的名著。",
    },
  ],
};
