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

export type TextbookBlock =
  | { type: "p"; text: string }
  | { type: "math"; tex: string }
  | { type: "def"; title: string; body: string }
  | { type: "ex"; title: string; body: string }
  | { type: "list"; style?: "bullet" | "number"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string };

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
