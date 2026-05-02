import type { Question } from "@/types/content";

export type ExplainMode = "explain" | "deeper" | "similar";

const SYSTEM_PROMPT = `あなたは統計検定・データサイエンス・機械学習の指導が専門の日本人の家庭教師です。質問者は資格試験(統計検定・G検定・E資格・DS検定・QC検定)の受験者です。

回答時の方針:
- 日本語で、丁寧かつ簡潔に答える
- 数式は KaTeX 用のドル記号($...$ または $$...$$)で囲む
- マークダウンで構造化(見出し・箇条書き・コードブロック)
- 想像で答えず、不確実なときは「私の知る限り…」と前置き
- 「正解は○○です」のような独断は避け、「考え方の流れ」を中心に説明
- 1 回の応答は最大 600 字程度に収める`;

export function buildPrompt(
  q: Question,
  mode: ExplainMode,
  userQuestion?: string,
): { system: string; user: string } {
  const choicesText = q.choices
    .map((c, i) => `${String.fromCharCode(0x2460 + i)} ${c}`)
    .join("\n");
  const correctMark = String.fromCharCode(0x2460 + q.correctIndex);

  const baseContext = `# 元の問題
カテゴリ: ${q.category}
難易度: ${"★".repeat(q.difficulty)}${"☆".repeat(3 - q.difficulty)}

問題: ${q.question}

選択肢:
${choicesText}

正解: ${correctMark}
公式解説: ${q.explanation}`;

  let userPrompt = baseContext;
  if (mode === "explain") {
    userPrompt += `\n\n上記の問題について、**初学者にもわかるように** より丁寧な解説をしてください。具体的には:
1. 何が問われているのか(問題の意図)
2. 解くのに必要な前提知識
3. ステップバイステップの導出
4. 正解選択肢が他より優れる理由、他の選択肢の落とし穴
5. 関連する典型的な引っかけパターン(あれば)`;
  } else if (mode === "deeper") {
    userPrompt += `\n\n上記の問題に関連する **発展的な内容** を解説してください:
1. この問題の背景にある統計理論の体系的な位置づけ
2. 関連する公式・定理(可能なら導出も)
3. 実務やデータ分析でどう使われるか
4. より上位レベル(準1級・1級など)の試験で問われる発展型の問題例`;
  } else if (mode === "similar") {
    userPrompt += `\n\n上記の問題と **同じ考え方で解ける類題** を 3 問作成してください:
- 数値や設定だけ変えた『パラメータ違い』の同型問題
- 同じ概念を別の角度から問う『言い換え』問題
- 一段階発展させた『発展』問題

各問題には:
1. 問題文
2. 4 つの選択肢
3. 正解と簡潔な解説
を付けてください。`;
  }

  if (userQuestion && userQuestion.trim()) {
    userPrompt += `\n\n# 質問者からの追加質問\n${userQuestion.trim()}`;
  }

  return { system: SYSTEM_PROMPT, user: userPrompt };
}

const DEMO_RESPONSES: Record<ExplainMode, string> = {
  explain: `## 問題の意図
この問題は、統計の基本概念のうち **特定の論点** を理解しているかを確認するものです。本物の AI 解説を表示するには環境変数 \`OPENAI_API_KEY\` を設定してください。

## 考え方のステップ
1. 問題文を読み解く
2. 必要な公式を思い出す
3. 数値を当てはめて計算
4. 選択肢の中から最も近いものを選ぶ

## 公式解説の補足
公式解説をベースに、**前提知識・典型パターン・引っかけポイント**を補完するのが本機能の役割です。

> ⚠ これはデモ応答です。\`OPENAI_API_KEY\` を設定すると本物の解説が表示されます。`,

  deeper: `## 発展的な観点
この問題の背景にある **統計理論の位置づけ** を解説します(本物の AI 解説には環境変数の設定が必要です)。

### 関連する公式・定理
- 中心極限定理
- 最尤推定の漸近性質
- 標本分布論

### 実務での応用
A/B テスト、医療統計、品質管理などで日常的に登場します。

### 上位試験での発展
準1級・1級では、本問題と同じ考え方を **より複雑な設定** で問う発展問題が出題されます。

> ⚠ これはデモ応答です。`,

  similar: `## 類題1(パラメータ違い)
*問題文*: 〇〇が△△のとき、××はどれか。
- ① 候補A
- ② 候補B
- ③ 候補C
- ④ 候補D

**正解: ②** — 簡潔な解説。

## 類題2(言い換え)
別の角度から同じ概念を問う問題。

## 類題3(発展)
一段階発展させた応用問題。

> ⚠ これはデモ応答です。\`OPENAI_API_KEY\` を設定すると本物の類題が生成されます。`,
};

export function getDemoResponse(mode: ExplainMode): string {
  return DEMO_RESPONSES[mode];
}
