/** Per-level mock exam configuration based on the actual official exam format. */
export type MockConfig = {
  levelSlug: string;
  label: string;
  timeMinutes: number;
  /** Number of questions to use. If our pool is smaller, we use everything. */
  questionTarget: number;
  /** Pass threshold as a percentage (0-100). */
  passPct: number;
  note: string;
};

export const mockConfigs: Record<string, MockConfig> = {
  intro: {
    levelSlug: "intro",
    label: "入門編 模試",
    timeMinutes: 30,
    questionTarget: 20,
    passPct: 60,
    note: "サイト独自編。4 級に届かない方の腕試し用。",
  },
  "grade-4": {
    levelSlug: "grade-4",
    label: "統計検定 4 級 模試",
    timeMinutes: 60,
    questionTarget: 30,
    passPct: 60,
    note: "本番 60 分・30 問・四肢択一・60 点合格に準拠。",
  },
  "grade-3": {
    levelSlug: "grade-3",
    label: "統計検定 3 級 模試",
    timeMinutes: 60,
    questionTarget: 30,
    passPct: 65,
    note: "本番 60 分・30 問・四肢択一・65 点合格に準拠。",
  },
  "grade-2": {
    levelSlug: "grade-2",
    label: "統計検定 2 級 模試",
    timeMinutes: 90,
    questionTarget: 35,
    passPct: 60,
    note: "本番 90 分・35 問・五肢択一・60 点合格に準拠。",
  },
  "grade-pre1": {
    levelSlug: "grade-pre1",
    label: "統計検定 準 1 級 模試",
    timeMinutes: 90,
    questionTarget: 30,
    passPct: 60,
    note: "本番形式に近づけた構成(参考)。実際の試験は記述あり。",
  },
  "grade-1": {
    levelSlug: "grade-1",
    label: "統計検定 1 級 模試",
    timeMinutes: 90,
    questionTarget: 25,
    passPct: 60,
    note: "1 級は本番が記述式。ここでは類題の選択式のみ。",
  },
};

export const mockLevels = Object.keys(mockConfigs);
