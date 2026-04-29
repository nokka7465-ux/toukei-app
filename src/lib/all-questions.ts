import type { Question } from "@/types/content";
import { introQuestions } from "@/data/questions/intro";
import { gradeFourQuestions } from "@/data/questions/grade-4";
import { gradeThreeQuestions } from "@/data/questions/grade-3";
import { gradeTwoQuestions } from "@/data/questions/grade-2";
import { gradePre1Questions } from "@/data/questions/grade-pre1";
import { gradeOneQuestions } from "@/data/questions/grade-1";
import { mathBasicsQuestions } from "@/data/questions/math";
import { dsBasicQuestions } from "@/data/questions/ds-basic";
import { dsLiteracyQuestions } from "@/data/questions/ds-literacy";
import { eShikakuQuestions } from "@/data/questions/e-shikaku";
import { gTestQuestions } from "@/data/questions/g-test";
import { qcKenteiQuestions } from "@/data/questions/qc-kentei";
import { surveyQuestions } from "@/data/questions/survey";
import { surveySpecialistQuestions } from "@/data/questions/survey-specialist";

export type Track = {
  key: string;
  label: string;
  href: string;
  group: "main" | "math" | "cert";
  questions: Question[];
};

export const tracks: Track[] = [
  { key: "intro", label: "入門編", href: "/quiz/intro", group: "main", questions: introQuestions },
  { key: "grade-4", label: "4級", href: "/quiz/grade-4", group: "main", questions: gradeFourQuestions },
  { key: "grade-3", label: "3級", href: "/quiz/grade-3", group: "main", questions: gradeThreeQuestions },
  { key: "grade-2", label: "2級", href: "/quiz/grade-2", group: "main", questions: gradeTwoQuestions },
  { key: "grade-pre1", label: "準1級", href: "/quiz/grade-pre1", group: "main", questions: gradePre1Questions },
  { key: "grade-1", label: "1級", href: "/quiz/grade-1", group: "main", questions: gradeOneQuestions },
  { key: "math-basics", label: "数学基礎", href: "/math/quiz", group: "math", questions: mathBasicsQuestions },
  { key: "ds-basic", label: "DS基礎", href: "/certs/ds-basic/quiz", group: "cert", questions: dsBasicQuestions },
  { key: "survey", label: "統計調査士", href: "/certs/survey/quiz", group: "cert", questions: surveyQuestions },
  { key: "survey-specialist", label: "専門統計調査士", href: "/certs/survey-specialist/quiz", group: "cert", questions: surveySpecialistQuestions },
  { key: "g-test", label: "G検定", href: "/certs/g-test/quiz", group: "cert", questions: gTestQuestions },
  { key: "e-shikaku", label: "E資格", href: "/certs/e-shikaku/quiz", group: "cert", questions: eShikakuQuestions },
  { key: "ds-literacy", label: "DS検定", href: "/certs/ds-literacy/quiz", group: "cert", questions: dsLiteracyQuestions },
  { key: "qc-kentei", label: "QC検定", href: "/certs/qc-kentei/quiz", group: "cert", questions: qcKenteiQuestions },
];

export type EnrichedQuestion = Question & {
  trackKey: string;
  trackLabel: string;
  trackHref: string;
};

let _byId: Map<string, EnrichedQuestion> | null = null;

export function getQuestionsById(): Map<string, EnrichedQuestion> {
  if (_byId) return _byId;
  const map = new Map<string, EnrichedQuestion>();
  for (const t of tracks) {
    for (const q of t.questions) {
      map.set(q.id, {
        ...q,
        trackKey: t.key,
        trackLabel: t.label,
        trackHref: t.href,
      });
    }
  }
  _byId = map;
  return map;
}

export function getTotalQuestionCount(): number {
  return tracks.reduce((acc, t) => acc + t.questions.length, 0);
}
