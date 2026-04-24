export type Formula = {
  id: string;
  name: string;
  category: string;
  tex: string;
  description: string;
};

export type Question = {
  id: string;
  category: string;
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
