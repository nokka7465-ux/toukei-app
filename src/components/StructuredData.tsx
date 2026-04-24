const SITE_URL = "https://toukei-app-eight.vercel.app";
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
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
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
