import type { Textbook } from "@/types/content";
import { introTextbook } from "@/data/textbooks/intro";
import { gradeFourTextbook } from "@/data/textbooks/grade-4";
import { gradeThreeTextbook } from "@/data/textbooks/grade-3";
import { gradeTwoTextbook } from "@/data/textbooks/grade-2";
import { gradePre1Textbook } from "@/data/textbooks/grade-pre1";
import { gradeOneTextbook } from "@/data/textbooks/grade-1";

export type TextbookEntry = {
  levelSlug: string;
  label: string;
  href: string;
  textbook: Textbook;
  sectionIds: string[];
};

const main: Array<{ levelSlug: string; label: string; book: Textbook }> = [
  { levelSlug: "intro", label: "入門編", book: introTextbook },
  { levelSlug: "grade-4", label: "4級", book: gradeFourTextbook },
  { levelSlug: "grade-3", label: "3級", book: gradeThreeTextbook },
  { levelSlug: "grade-2", label: "2級", book: gradeTwoTextbook },
  { levelSlug: "grade-pre1", label: "準1級", book: gradePre1Textbook },
  { levelSlug: "grade-1", label: "1級", book: gradeOneTextbook },
];

export const textbooks: TextbookEntry[] = main.map((m) => ({
  levelSlug: m.levelSlug,
  label: m.label,
  href: `/textbook/${m.levelSlug}`,
  textbook: m.book,
  sectionIds: m.book.chapters.flatMap((ch) => ch.sections.map((s) => s.id)),
}));

export function getAllSectionIds(): string[] {
  return textbooks.flatMap((t) => t.sectionIds);
}
