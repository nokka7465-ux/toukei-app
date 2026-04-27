import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE_URL = "https://toukei-app-eight.vercel.app";

const now = new Date().toISOString();

const staticUrls = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/textbook", priority: 0.9, changefreq: "weekly" },
  { path: "/formulas", priority: 0.9, changefreq: "monthly" },
  { path: "/quiz", priority: 0.9, changefreq: "weekly" },
  { path: "/roadmap", priority: 0.9, changefreq: "monthly" },
  { path: "/glossary", priority: 0.8, changefreq: "monthly" },
  { path: "/cheatsheet", priority: 0.8, changefreq: "monthly" },
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  { path: "/diagnose", priority: 0.7, changefreq: "yearly" },
  { path: "/exam-info", priority: 0.8, changefreq: "monthly" },
  { path: "/figures", priority: 0.85, changefreq: "monthly" },
  { path: "/explore", priority: 0.9, changefreq: "monthly" },
  { path: "/tools", priority: 0.9, changefreq: "monthly" },
  { path: "/certs/ds-basic", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/ds-basic/textbook", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/ds-basic/quiz", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/survey", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/survey/textbook", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/survey/quiz", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/g-test", priority: 0.8, changefreq: "monthly" },
  { path: "/certs/g-test/textbook", priority: 0.8, changefreq: "monthly" },
  { path: "/certs/g-test/quiz", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/ds-literacy", priority: 0.8, changefreq: "monthly" },
  { path: "/certs/ds-literacy/textbook", priority: 0.8, changefreq: "monthly" },
  { path: "/certs/ds-literacy/quiz", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/e-shikaku", priority: 0.85, changefreq: "monthly" },
  { path: "/certs/e-shikaku/textbook", priority: 0.85, changefreq: "monthly" },
  { path: "/certs/e-shikaku/quiz", priority: 0.75, changefreq: "monthly" },
  { path: "/certs/qc-kentei", priority: 0.75, changefreq: "monthly" },
  { path: "/certs/qc-kentei/textbook", priority: 0.75, changefreq: "monthly" },
  { path: "/certs/qc-kentei/quiz", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/survey-specialist", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/survey-specialist/textbook", priority: 0.7, changefreq: "monthly" },
  { path: "/certs/survey-specialist/quiz", priority: 0.65, changefreq: "monthly" },
  { path: "/math", priority: 0.8, changefreq: "monthly" },
  { path: "/math/textbook", priority: 0.8, changefreq: "monthly" },
  { path: "/math/quiz", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/contact", priority: 0.3, changefreq: "yearly" },
];

const levels = ["intro", "grade-4", "grade-3", "grade-2", "grade-pre1", "grade-1"];
const levelUrls = levels.flatMap((slug) => [
  { path: `/textbook/${slug}`, priority: 0.9, changefreq: "weekly" },
  { path: `/formulas/${slug}`, priority: 0.8, changefreq: "monthly" },
  { path: `/quiz/${slug}`, priority: 0.8, changefreq: "monthly" },
]);

const blogSrc = readFileSync(join(ROOT, "src/data/blog/index.ts"), "utf8");
const slugs = [...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const dates = [...blogSrc.matchAll(/publishedAt:\s*"([^"]+)"/g)].map((m) => m[1]);
if (slugs.length !== dates.length) {
  throw new Error(`blog slug/date mismatch: ${slugs.length} vs ${dates.length}`);
}
const blogUrls = slugs.map((slug, i) => ({
  path: `/blog/${slug}`,
  priority: 0.7,
  changefreq: "monthly",
  lastmod: new Date(dates[i]).toISOString(),
}));

const allUrls = [...staticUrls, ...levelUrls, ...blogUrls];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allUrls
    .map(
      (u) =>
        `<url>\n` +
        `<loc>${SITE_URL}${u.path}</loc>\n` +
        `<lastmod>${u.lastmod ?? now}</lastmod>\n` +
        `<changefreq>${u.changefreq}</changefreq>\n` +
        `<priority>${u.priority}</priority>\n` +
        `</url>`,
    )
    .join("\n") +
  `\n</urlset>\n`;

const outDir = join(ROOT, "public");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sitemap.xml"), xml, "utf8");

console.log(`✓ Generated public/sitemap.xml (${allUrls.length} URLs, ${xml.length} bytes)`);
