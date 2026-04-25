import type { TextbookBlock } from "@/types/content";
import { introTextbook } from "@/data/textbooks/intro";
import { gradeFourTextbook } from "@/data/textbooks/grade-4";
import { gradeThreeTextbook } from "@/data/textbooks/grade-3";
import { gradeTwoTextbook } from "@/data/textbooks/grade-2";
import { gradePre1Textbook } from "@/data/textbooks/grade-pre1";
import { gradeOneTextbook } from "@/data/textbooks/grade-1";
import { dsBasicTextbook } from "@/data/textbooks/ds-basic";
import { surveyTextbook } from "@/data/textbooks/survey";
import { mathBasicsTextbook } from "@/data/textbooks/math";
import { gTestTextbook } from "@/data/textbooks/g-test";
import { dsLiteracyTextbook } from "@/data/textbooks/ds-literacy";
import { glossary } from "@/data/glossary";
import { blogPosts } from "@/data/blog";
import { introFormulas } from "@/data/formulas/intro";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";
import { levels } from "@/data/levels";

export type SearchSource =
  | "textbook"
  | "glossary"
  | "blog"
  | "formula";

export type SearchItem = {
  id: string;
  source: SearchSource;
  title: string;
  context: string; // breadcrumb-like ("4級 教科書 > 第1章")
  text: string; // searchable body text (kept short)
  url: string;
};

function blockToText(b: TextbookBlock): string {
  switch (b.type) {
    case "p":
      return b.text;
    case "math":
      return b.tex;
    case "def":
      return `${b.title} ${b.body}`;
    case "ex":
      return `${b.title} ${b.body}`;
    case "list":
      return b.items.join(" ");
    case "h3":
    case "h4":
      return b.text;
  }
}

function trimText(s: string, max = 1200): string {
  if (s.length <= max) return s;
  return s.slice(0, max);
}

function levelTitle(slug: string): string {
  return levels.find((l) => l.slug === slug)?.title ?? slug;
}

export const searchIndex: SearchItem[] = (() => {
  const items: SearchItem[] = [];

  // Textbook sections (1 entry per section, body text concatenated)
  const textbookSets: {
    book: typeof gradeFourTextbook;
    urlBase: string;
    displayTitle: string;
  }[] = [
    { book: introTextbook, urlBase: "/textbook/intro", displayTitle: levelTitle("intro") },
    { book: gradeFourTextbook, urlBase: "/textbook/grade-4", displayTitle: levelTitle("grade-4") },
    { book: gradeThreeTextbook, urlBase: "/textbook/grade-3", displayTitle: levelTitle("grade-3") },
    { book: gradeTwoTextbook, urlBase: "/textbook/grade-2", displayTitle: levelTitle("grade-2") },
    { book: gradePre1Textbook, urlBase: "/textbook/grade-pre1", displayTitle: levelTitle("grade-pre1") },
    { book: gradeOneTextbook, urlBase: "/textbook/grade-1", displayTitle: levelTitle("grade-1") },
    { book: dsBasicTextbook, urlBase: "/certs/ds-basic/textbook", displayTitle: "DS基礎" },
    { book: surveyTextbook, urlBase: "/certs/survey/textbook", displayTitle: "統計調査士" },
    { book: mathBasicsTextbook, urlBase: "/math/textbook", displayTitle: "数学基礎" },
    { book: gTestTextbook, urlBase: "/certs/g-test/textbook", displayTitle: "G検定" },
    { book: dsLiteracyTextbook, urlBase: "/certs/ds-literacy/textbook", displayTitle: "DS検定" },
  ];
  for (const { book, urlBase, displayTitle } of textbookSets) {
    for (const ch of book.chapters) {
      for (const sec of ch.sections) {
        const text = trimText(sec.blocks.map(blockToText).join(" "));
        items.push({
          id: `tb-${book.levelSlug}-${sec.id}`,
          source: "textbook",
          title: `${sec.number} ${sec.title}`,
          context: `${displayTitle}教科書 · 第${ch.number}章 ${ch.title}`,
          text,
          url: `${urlBase}#${sec.id}`,
        });
      }
    }
  }

  // Glossary terms
  for (const t of glossary) {
    items.push({
      id: `gl-${t.term}`,
      source: "glossary",
      title: t.term,
      context: `用語集 · ${t.level}級 · ${t.category}`,
      text: `${t.reading} ${t.english ?? ""} ${t.definition}`,
      url: t.link ?? `/glossary#level-${t.level}`,
    });
  }

  // Blog posts
  for (const post of blogPosts) {
    const text = trimText(
      `${post.description} ${post.body.map(blockToText).join(" ")}`,
    );
    items.push({
      id: `bl-${post.slug}`,
      source: "blog",
      title: post.title,
      context: `ブログ · ${post.category}`,
      text,
      url: `/blog/${post.slug}`,
    });
  }

  // Formulas
  const formulaSets: { slug: string; formulas: typeof gradeFourFormulas }[] = [
    { slug: "intro", formulas: introFormulas },
    { slug: "grade-4", formulas: gradeFourFormulas },
    { slug: "grade-3", formulas: gradeThreeFormulas },
    { slug: "grade-2", formulas: gradeTwoFormulas },
    { slug: "grade-pre1", formulas: gradePre1Formulas },
    { slug: "grade-1", formulas: gradeOneFormulas },
  ];
  for (const { slug, formulas } of formulaSets) {
    const lvl = levelTitle(slug);
    for (const f of formulas) {
      items.push({
        id: `fo-${slug}-${f.id}`,
        source: "formula",
        title: f.name,
        context: `${lvl}公式集 · ${f.category}`,
        text: `${f.tex} ${f.description}`,
        url: `/formulas/${slug}`,
      });
    }
  }

  return items;
})();

const SOURCE_LABEL: Record<SearchSource, string> = {
  textbook: "教科書",
  glossary: "用語集",
  blog: "ブログ",
  formula: "公式集",
};

export function sourceLabel(src: SearchSource): string {
  return SOURCE_LABEL[src];
}

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

export type SearchResult = {
  item: SearchItem;
  score: number;
  /** Snippet around the first match. */
  snippet: string;
};

function makeSnippet(text: string, query: string, max = 140): string {
  if (!text) return "";
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  const i = lower.indexOf(q);
  if (i === -1) return text.slice(0, max);
  const start = Math.max(0, i - 30);
  const end = Math.min(text.length, i + q.length + max - 30);
  const ellipsisStart = start > 0 ? "…" : "";
  const ellipsisEnd = end < text.length ? "…" : "";
  return `${ellipsisStart}${text.slice(start, end)}${ellipsisEnd}`;
}

export function search(query: string, max = 30): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];
  for (const item of searchIndex) {
    const titleLower = item.title.toLowerCase();
    const contextLower = item.context.toLowerCase();
    const textLower = item.text.toLowerCase();
    let score = 0;
    let firstMatchToken = "";

    for (const token of tokens) {
      let tokenHit = false;
      if (titleLower.includes(token)) {
        score += 8;
        tokenHit = true;
      }
      if (contextLower.includes(token)) {
        score += 3;
        tokenHit = true;
      }
      if (textLower.includes(token)) {
        score += 1;
        tokenHit = true;
      }
      if (tokenHit && !firstMatchToken) firstMatchToken = token;
    }

    if (score > 0) {
      const snippet = firstMatchToken
        ? makeSnippet(item.text, firstMatchToken)
        : item.text.slice(0, 140);
      results.push({ item, score, snippet });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, max);
}
