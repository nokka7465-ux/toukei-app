const SITE_URL = "https://toukei-app.com";
const SITE_NAME = "統計ロードマップ";
const SITE_LOGO = `${SITE_URL}/icon.png`;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Toukei Roadmap",
  url: SITE_URL,
  description:
    "AIエンジニアになるための統計・数学・Python を一気通貫で学べる無料サイト。統計検定 4 級〜1 級・G 検定・E 資格・DS 検定・QC 検定・三大クラウド ML / Data 認定にも対応。",
  inLanguage: "ja",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  description:
    "統計検定 4 級〜1 級と AI / ML / クラウド系 41 検定に対応した無料学習サイト。教科書・公式集・演習問題 2,670 問・統計計算ツールを完全無料で提供。",
  educationalCredentialAwarded:
    "統計検定 4級 / 3級 / 2級 / 準1級 / 1級 / G検定 / E資格 / DS検定 / QC検定 / AWS / Azure / GCP ML / Data 認定",
  inLanguage: "ja",
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}

export type BreadcrumbItem = { name: string; href: string };

function absoluteUrl(href: string): string {
  if (href.startsWith("http")) return href;
  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.href),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type CourseJsonLdProps = {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  about?: string[];
};

export function CourseJsonLd({
  name,
  description,
  url,
  educationalLevel,
  about,
}: CourseJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(url),
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "ja",
    isAccessibleForFree: true,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      inLanguage: "ja",
    },
  };
  if (educationalLevel) schema.educationalLevel = educationalLevel;
  if (about && about.length > 0) schema.about = about;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type FaqEntry = { q: string; a: string };

export function FaqJsonLd({ entries }: { entries: FaqEntry[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: e.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type LearningResourceProps = {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  about?: string[];
  numberOfQuestions?: number;
  learningResourceType?: string;
};

export function LearningResourceJsonLd({
  name,
  description,
  url,
  educationalLevel,
  about,
  numberOfQuestions,
  learningResourceType = "Quiz",
}: LearningResourceProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name,
    description,
    url: absoluteUrl(url),
    inLanguage: "ja",
    isAccessibleForFree: true,
    learningResourceType,
    educationalUse: "self-assessment",
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
  if (educationalLevel) schema.educationalLevel = educationalLevel;
  if (about && about.length > 0) schema.about = about;
  if (numberOfQuestions) {
    schema.assesses = `${numberOfQuestions} 問の演習問題による自己評価`;
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type QuizJsonLdProps = {
  name: string;
  description: string;
  url: string;
  numberOfQuestions: number;
  about?: string[];
  educationalLevel?: string;
};

export function QuizJsonLd({
  name,
  description,
  url,
  numberOfQuestions,
  about,
  educationalLevel,
}: QuizJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name,
    description,
    url: absoluteUrl(url),
    inLanguage: "ja",
    isAccessibleForFree: true,
    educationalUse: "practice",
    numberOfQuestions,
    typicalAgeRange: "15-",
    learningResourceType: "exam preparation",
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
  if (about && about.length > 0) schema.about = about;
  if (educationalLevel) schema.educationalLevel = educationalLevel;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type ItemListEntry = { name: string; url: string; description?: string };

export function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: ItemListEntry[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(it.url),
      name: it.name,
      ...(it.description ? { description: it.description } : {}),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
