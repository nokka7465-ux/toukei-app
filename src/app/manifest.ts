import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "統計検定 学習帳",
    short_name: "統計検定",
    description:
      "統計検定 4 級〜1 級と関連検定 7 種を完全網羅した、無料の総合学習サイト。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fdfcf7",
    theme_color: "#1f2937",
    lang: "ja",
    categories: ["education", "books", "productivity"],
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "演習問題",
        short_name: "演習",
        url: "/quiz",
      },
      {
        name: "苦手問題の復習",
        short_name: "復習",
        url: "/review",
      },
      {
        name: "模試",
        short_name: "模試",
        url: "/mock",
      },
      {
        name: "サイト内検索",
        short_name: "検索",
        url: "/search",
      },
    ],
  };
}
