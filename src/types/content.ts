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
  note?: string;
};
