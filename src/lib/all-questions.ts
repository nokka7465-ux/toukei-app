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
import { genaiPassportQuestions } from "@/data/questions/genai-passport";
import { dsExpertQuestions } from "@/data/questions/ds-expert";
import { pythonDataQuestions } from "@/data/questions/python-data";
import { aiImplementationQuestions } from "@/data/questions/ai-implementation";
import { imageProcessingQuestions } from "@/data/questions/image-processing";
import { appliedInfoQuestions } from "@/data/questions/applied-info";
import { awsAiPractitionerQuestions } from "@/data/questions/aws-ai-practitioner";
import { basicInfoQuestions } from "@/data/questions/basic-info";
import { azureAi900Questions } from "@/data/questions/azure-ai-900";
import { gcpGenAiLeaderQuestions } from "@/data/questions/gcp-gen-ai-leader";
import { dbSpecialistQuestions } from "@/data/questions/db-specialist";
import { dxKenteiQuestions } from "@/data/questions/dx-kentei";
import { awsSaaQuestions } from "@/data/questions/aws-saa";
import { itPassportQuestions } from "@/data/questions/it-passport";
import { powerBiQuestions } from "@/data/questions/power-bi";
import { tableauSpecialistQuestions } from "@/data/questions/tableau-specialist";
import { azureAi102Questions } from "@/data/questions/azure-ai-102";
import { awsMlEngineerQuestions } from "@/data/questions/aws-ml-engineer";
import { snowflakeSnowProQuestions } from "@/data/questions/snowflake-snowpro";

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
  { key: "genai-passport", label: "生成AIパスポート", href: "/certs/genai-passport/quiz", group: "cert", questions: genaiPassportQuestions },
  { key: "ds-expert", label: "DS エキスパート", href: "/certs/ds-expert/quiz", group: "cert", questions: dsExpertQuestions },
  { key: "python-data", label: "Python データ分析", href: "/certs/python-data/quiz", group: "cert", questions: pythonDataQuestions },
  { key: "ai-implementation", label: "AI 実装検定", href: "/certs/ai-implementation/quiz", group: "cert", questions: aiImplementationQuestions },
  { key: "image-processing", label: "画像処理エンジニア検定", href: "/certs/image-processing/quiz", group: "cert", questions: imageProcessingQuestions },
  { key: "applied-info", label: "応用情報技術者", href: "/certs/applied-info/quiz", group: "cert", questions: appliedInfoQuestions },
  { key: "aws-ai-practitioner", label: "AWS AI Practitioner", href: "/certs/aws-ai-practitioner/quiz", group: "cert", questions: awsAiPractitionerQuestions },
  { key: "basic-info", label: "基本情報技術者", href: "/certs/basic-info/quiz", group: "cert", questions: basicInfoQuestions },
  { key: "azure-ai-900", label: "Azure AI-900", href: "/certs/azure-ai-900/quiz", group: "cert", questions: azureAi900Questions },
  { key: "gcp-gen-ai-leader", label: "GCP Generative AI Leader", href: "/certs/gcp-gen-ai-leader/quiz", group: "cert", questions: gcpGenAiLeaderQuestions },
  { key: "db-specialist", label: "DB スペシャリスト", href: "/certs/db-specialist/quiz", group: "cert", questions: dbSpecialistQuestions },
  { key: "dx-kentei", label: "DX 検定", href: "/certs/dx-kentei/quiz", group: "cert", questions: dxKenteiQuestions },
  { key: "aws-saa", label: "AWS SAA", href: "/certs/aws-saa/quiz", group: "cert", questions: awsSaaQuestions },
  { key: "it-passport", label: "ITパスポート", href: "/certs/it-passport/quiz", group: "cert", questions: itPassportQuestions },
  { key: "power-bi", label: "Power BI(PL-300)", href: "/certs/power-bi/quiz", group: "cert", questions: powerBiQuestions },
  { key: "tableau-specialist", label: "Tableau Specialist", href: "/certs/tableau-specialist/quiz", group: "cert", questions: tableauSpecialistQuestions },
  { key: "azure-ai-102", label: "Azure AI-102", href: "/certs/azure-ai-102/quiz", group: "cert", questions: azureAi102Questions },
  { key: "aws-ml-engineer", label: "AWS MLA-C01", href: "/certs/aws-ml-engineer/quiz", group: "cert", questions: awsMlEngineerQuestions },
  { key: "snowflake-snowpro", label: "Snowflake SnowPro Core", href: "/certs/snowflake-snowpro/quiz", group: "cert", questions: snowflakeSnowProQuestions },
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
