import type { Textbook, TextbookBlock } from "@/types/content";

/** 1 ブロックの推定文字数 */
export function blockTextLength(b: TextbookBlock): number {
  switch (b.type) {
    case "p":
      return b.text.length;
    case "math":
      return b.tex.length;
    case "def":
    case "ex":
      return b.title.length + b.body.length;
    case "list":
      return b.items.reduce((s, i) => s + i.length, 0);
    case "h3":
    case "h4":
      return b.text.length;
    case "intuition":
    case "practical":
      return (b.title?.length ?? 0) + b.body.length;
    case "figure":
      return b.caption?.length ?? 0;
    case "code":
      return (b.python?.length ?? 0) + (b.r?.length ?? 0);
  }
}

/** ブロック列の読了目安(分)。日本語は 500 字/分換算 */
export function readingMinutes(blocks: TextbookBlock[]): number {
  const total = blocks.reduce((sum, b) => sum + blockTextLength(b), 0);
  return Math.max(1, Math.ceil(total / 500));
}

export type TextbookStats = {
  chapters: number;
  sections: number;
  characters: number;
  readingMinutes: number;
};

/** 教科書全体の統計を計算 */
export function getTextbookStats(book: Textbook): TextbookStats {
  let characters = 0;
  let sections = 0;
  for (const ch of book.chapters) {
    for (const sec of ch.sections) {
      sections += 1;
      characters += sec.blocks.reduce((s, b) => s + blockTextLength(b), 0);
    }
  }
  return {
    chapters: book.chapters.length,
    sections,
    characters,
    readingMinutes: Math.max(1, Math.ceil(characters / 500)),
  };
}
