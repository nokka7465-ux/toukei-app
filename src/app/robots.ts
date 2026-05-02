import type { MetadataRoute } from "next";

const SITE_URL = "https://toukei-app.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Personalisation/state pages are user-specific; no SEO value, often
        // duplicate-looking content. Block to keep the index focused on the
        // canonical educational pages.
        disallow: [
          "/api/",
          "/bookmarks",
          "/review",
          "/og/", // OG images are referenced by metadata, no need to crawl
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
