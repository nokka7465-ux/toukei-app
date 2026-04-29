import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "統計ロードマップ",
    short_name: "統計ロードマップ",
    description:
      "AIエンジニアになるための統計・数学・Python を一気通貫で学べる無料サイト。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#eef2f8",
    theme_color: "#1d4ed8",
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
