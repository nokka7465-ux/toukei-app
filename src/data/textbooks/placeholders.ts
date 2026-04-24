import type { Textbook } from "@/types/content";

function buildPlaceholder(
  levelSlug: string,
  title: string,
  intro: string,
): Textbook {
  return {
    levelSlug,
    title,
    intro,
    chapters: [
      {
        id: "placeholder",
        number: 1,
        title: "執筆中",
        overview:
          "こちらの級の教科書は現在執筆中です。4級から順に公開していきます。",
        sections: [
          {
            id: "placeholder-1",
            number: "1.1",
            title: "公開準備中",
            blocks: [
              {
                type: "p",
                text: "教科書形式の解説は、まず 4級から順次公開しています。この級の本文が公開されるまでは、下記のコンテンツをご利用ください。",
              },
              {
                type: "list",
                style: "bullet",
                items: [
                  "**公式集** — 当該級の出題範囲をカバーする重要公式をまとめています。",
                  "**問題を解く** — 選択式のオリジナル類題で実力チェックができます。各問題に ★☆☆ 基礎 / ★★☆ 標準 / ★★★ 応用 の難易度バッジつき。",
                ],
              },
              {
                type: "p",
                text: "教科書本文の更新をお待ちいただけると幸いです。",
              },
            ],
          },
        ],
      },
    ],
  };
}

export const gradeOneTextbook = buildPlaceholder(
  "grade-1",
  "1級 教科書",
  "数理統計学の理論(十分統計量・漸近理論・最尤推定など)を体系的に扱う最上位の級です。",
);
