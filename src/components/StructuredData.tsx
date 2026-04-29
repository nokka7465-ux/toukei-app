const SITE_URL = "https://toukei-app.com";
const SITE_NAME = "統計検定 学習帳";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Toukei Study Book",
  url: SITE_URL,
  description:
    "統計検定4級〜1級に対応した無料学習サイト。教科書・公式集・演習問題をすべて無料で学習できます。",
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
  description:
    "統計検定4級〜1級に対応した無料学習サイトを運営。教科書・公式集・演習問題を提供。",
  educationalCredentialAwarded: "統計検定 4級 / 3級 / 2級 / 準1級 / 1級",
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
