export type Formula = {
  id: string;
  name: string;
  category: string;
  tex: string;
  description: string;
};

export type Difficulty = 1 | 2 | 3;

export type Question = {
  id: string;
  category: string;
  difficulty: Difficulty;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

export type Book = {
  title: string;
  publisher?: string;
  tag?: string;
  note?: string;
};

/** 図解(SVG)の種類 — DiagramRegistry のキーに対応 */
export type DiagramKind =
  | "normal-curve"
  | "normal-rejection-region"
  | "histogram-vs-bar"
  | "scatter-regression"
  | "roc-curve"
  | "bias-variance"
  | "clt-convergence"
  | "binomial-shape"
  | "boxplot-anatomy"
  | "confidence-interval";

export type TextbookBlock =
  | { type: "p"; text: string }
  | { type: "math"; tex: string }
  | { type: "def"; title: string; body: string }
  | { type: "ex"; title: string; body: string }
  | { type: "list"; style?: "bullet" | "number"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  /** 「なぜそうなるか」の直感解説ボックス */
  | { type: "intuition"; title?: string; body: string }
  /** 実務での使われ方コラム(マーケ・品質管理など) */
  | { type: "practical"; title?: string; body: string }
  /** 図解(SVG)。kind は DiagramRegistry のキー */
  | { type: "figure"; kind: DiagramKind; caption?: string };

export type TextbookSection = {
  id: string;
  number: string;
  title: string;
  blocks: TextbookBlock[];
};

export type TextbookChapter = {
  id: string;
  number: number;
  title: string;
  overview?: string;
  sections: TextbookSection[];
};

export type Textbook = {
  levelSlug: string;
  title: string;
  intro: string;
  chapters: TextbookChapter[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  /** 3〜5 個の短い要約箇条書き(TL;DR) */
  tldr?: string[];
  body: TextbookBlock[];
};
