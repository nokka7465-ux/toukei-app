/**
 * Logo candidates for preview at /logos.
 * Each logo is a self-contained inline SVG, sized via CSS so they can render
 * cleanly at icon (32px), header (48px), and OG (256px+) scales.
 */

type LogoProps = {
  size?: number;
  className?: string;
  /** "light" = darks render dark; "dark" = darks render cream. */
  variant?: "light" | "dark";
};

function colors(variant: "light" | "dark") {
  if (variant === "dark") {
    return {
      ink: "#fdfcf7",
      paper: "#1f2937",
      accent: "#8fb8e5",
      muted: "#94a3b8",
    };
  }
  return {
    ink: "#1f1a0f",
    paper: "#fffdf4",
    accent: "#5a7088",
    muted: "#857a5f",
  };
}

/** A — 統 with subtle frame (refined version of current). */
export function LogoA({ size = 64, className, variant = "light" }: LogoProps) {
  const c = colors(variant);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ ロゴ A"
    >
      <rect width="100" height="100" rx="20" fill={c.paper} stroke={c.ink} strokeWidth="3" />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="700"
        fontSize="62"
        fill={c.ink}
      >
        統
      </text>
    </svg>
  );
}

/** B — σ (sigma) glyph evoking statistics, with circular badge. */
export function LogoB({ size = 64, className, variant = "light" }: LogoProps) {
  const c = colors(variant);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ ロゴ B"
    >
      <circle cx="50" cy="50" r="46" fill={c.accent} />
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="74"
        fill={c.paper}
      >
        σ
      </text>
    </svg>
  );
}

/** C — Normal (bell) curve under a horizontal axis. */
export function LogoC({ size = 64, className, variant = "light" }: LogoProps) {
  const c = colors(variant);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ ロゴ C"
    >
      <rect width="100" height="100" rx="18" fill={c.paper} stroke={c.ink} strokeWidth="3" />
      <line x1="14" y1="74" x2="86" y2="74" stroke={c.ink} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M 14 74 C 30 74, 36 24, 50 24 C 64 24, 70 74, 86 74"
        fill="none"
        stroke={c.accent}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="24" r="4.5" fill={c.accent} />
    </svg>
  );
}

/** D — Roadmap path with three steps. */
export function LogoD({ size = 64, className, variant = "light" }: LogoProps) {
  const c = colors(variant);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ ロゴ D"
    >
      <rect width="100" height="100" rx="18" fill={c.paper} stroke={c.ink} strokeWidth="3" />
      <path
        d="M 18 78 Q 32 78, 36 60 Q 40 42, 56 42 Q 70 42, 76 26"
        fill="none"
        stroke={c.accent}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray="2 6"
      />
      <circle cx="18" cy="78" r="6" fill={c.accent} />
      <circle cx="50" cy="48" r="6" fill={c.accent} />
      <circle cx="80" cy="22" r="7" fill={c.ink} />
      <circle cx="80" cy="22" r="3" fill={c.paper} />
    </svg>
  );
}

/** E — Stacked bars rising (data growing). */
export function LogoE({ size = 64, className, variant = "light" }: LogoProps) {
  const c = colors(variant);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ ロゴ E"
    >
      <rect width="100" height="100" rx="18" fill={c.paper} stroke={c.ink} strokeWidth="3" />
      <rect x="20" y="60" width="14" height="22" rx="2" fill={c.muted} />
      <rect x="40" y="44" width="14" height="38" rx="2" fill={c.accent} />
      <rect x="60" y="28" width="14" height="54" rx="2" fill={c.ink} />
      <line x1="14" y1="84" x2="86" y2="84" stroke={c.ink} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M 22 22 L 26 18 L 26 21 L 78 21 L 78 18 L 82 22 L 78 26 L 78 23 L 26 23 L 26 26 Z"
        fill={c.accent}
        opacity="0.6"
      />
    </svg>
  );
}

/** F — Combined 統 + roadmap arrow (modern hybrid). */
export function LogoF({ size = 64, className, variant = "light" }: LogoProps) {
  const c = colors(variant);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ ロゴ F"
    >
      <rect width="100" height="100" rx="20" fill={c.ink} />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="700"
        fontSize="46"
        fill={c.paper}
      >
        統
      </text>
      <path
        d="M 22 78 L 78 78"
        stroke={c.accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 70 72 L 78 78 L 70 84"
        stroke={c.accent}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="78" r="3" fill={c.accent} />
    </svg>
  );
}

export const LOGOS = [
  {
    id: "A",
    name: "クラシック 統",
    description:
      "現在のロゴをリファイン。明朝の『統』を細い縁取りで囲み、教科書らしい古典的な印象。",
    Component: LogoA,
  },
  {
    id: "B",
    name: "シグマ・バッジ",
    description:
      "統計を象徴する $\\sigma$(シグマ)を円形バッジに。シンプルでアプリアイコン向き。",
    Component: LogoB,
  },
  {
    id: "C",
    name: "ベルカーブ",
    description:
      "正規分布のシルエット。視認性が高く、統計サイトと一目で分かる。",
    Component: LogoC,
  },
  {
    id: "D",
    name: "ロードマップ・パス",
    description:
      "3 つのマイルストーンを結ぶ点線ルート。『ロードマップ』の名前と一致。",
    Component: LogoD,
  },
  {
    id: "E",
    name: "成長グラフ",
    description:
      "右肩上がりの棒グラフ + 上向き矢印。学習成長感とデータ感を両立。",
    Component: LogoE,
  },
  {
    id: "F",
    name: "統 + アロー(ハイブリッド)",
    description:
      "ダーク背景に明朝の『統』+ 下にロードマップ矢印。最も汎用性が高い候補。",
    Component: LogoF,
  },
];
