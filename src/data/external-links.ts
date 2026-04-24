// 外部プラットフォーム(note・BOOTH 等)のリンク。
// アカウント取得後、それぞれの URL を埋める。
// 空文字列のままだと「準備中」として表示される。

export const externalLinks = {
  note: "", // 例: "https://note.com/tamalu_toukei"
  booth: "", // 例: "https://tamalu.booth.pm"
  twitter: "", // 例: "https://twitter.com/yourhandle"
} as const;

export type ExternalPlatform = keyof typeof externalLinks;
