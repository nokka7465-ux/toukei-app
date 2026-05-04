// データサイエンス・AI・プログラミングスクールのアフィリエイトデータ。
//
// `url` には A8.net で取得した各案件のアフィリエイトリンクを差し込んでください。
// 取得していない案件は `url` を空文字 ("") のままにしておくと、UIから自動的に非表示になります。
//
// 取得手順:
//   1. https://www.a8.net/ にログイン
//   2. プログラム検索で各サービス名を検索 → 提携申請
//   3. 承認後「広告リンク」から「テキスト」リンクをコピーして下に貼り付け

export type School = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  // どの検定・分野に推薦するか（blog の category や cert 名と部分一致）
  fitFor: string[];
  url: string;
};

export const SCHOOLS: School[] = [
  {
    id: "techacademy",
    name: "TechAcademy（データサイエンス / AI コース）",
    description:
      "現役エンジニアがマンツーマンでサポート。Python・統計・機械学習を 4 週間〜から最短で習得。無料相談・無料体験あり。",
    badge: "無料体験あり",
    fitFor: ["E資格", "G検定", "DS基礎", "DS検定", "プログラミング", "AI"],
    url: "",
  },
  {
    id: "aidemy",
    name: "Aidemy Premium",
    description:
      "AI 学習に特化したオンライン特化型スクール。E 資格対応コースが充実。経済産業省「Reスキリング講座」対象で最大70%給付の対象。",
    badge: "給付金対象",
    fitFor: ["E資格", "G検定", "AI", "ディープラーニング", "機械学習"],
    url: "",
  },
  {
    id: "datamix",
    name: "データミックス",
    description:
      "現役のデータサイエンティスト講師が指導。統計検定 2 級レベルから実務応用までを 6 ヶ月で学ぶ本格カリキュラム。",
    badge: "実務志向",
    fitFor: ["統計検定", "DS基礎", "DS検定", "機械学習"],
    url: "",
  },
  {
    id: "kikagaku",
    name: "キカガク",
    description:
      "Python・数学・機械学習・ディープラーニングを基礎から E 資格対応レベルまで網羅。長期コースは給付金対象。",
    badge: "給付金対象",
    fitFor: ["E資格", "G検定", "AI", "数学", "ディープラーニング"],
    url: "",
  },
  {
    id: "code-camp",
    name: "CodeCamp（オーダーメイドコース）",
    description:
      "現役エンジニアによるマンツーマンレッスン。Python・データサイエンス・AI を自分のペースで学べる。",
    badge: "マンツーマン",
    fitFor: ["プログラミング", "Python", "G検定"],
    url: "",
  },
  {
    id: "dmm-webcamp",
    name: "DMM WEBCAMP（データサイエンスコース）",
    description:
      "未経験から実務レベルのデータ分析力を身につける転職特化型コース。給付金で最大 70% オフ。",
    badge: "転職保証",
    fitFor: ["データサイエンス", "DS基礎", "DS検定", "機械学習"],
    url: "",
  },
];

export function pickSchoolsForCategory(
  category: string | undefined,
  limit = 3,
): School[] {
  const enabled = SCHOOLS.filter((s) => s.url !== "");
  if (enabled.length === 0) return [];
  if (!category) return enabled.slice(0, limit);

  const cat = category.toLowerCase();
  const matched = enabled.filter((s) =>
    s.fitFor.some((f) => f.toLowerCase().includes(cat) || cat.includes(f.toLowerCase())),
  );
  return matched.length > 0 ? matched.slice(0, limit) : enabled.slice(0, limit);
}

export const isSchoolAffiliateEnabled: boolean = SCHOOLS.some((s) => s.url !== "");
