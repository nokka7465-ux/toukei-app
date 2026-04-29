/**
 * Site logo (Candidate F: 統 + アロー).
 * The single source of truth for the brand mark used in the header,
 * inline content, and as a reference for the favicon / OG images.
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
    };
  }
  return {
    ink: "#1f1a0f",
    paper: "#fffdf4",
    accent: "#5a7088",
  };
}

export function Logo({ size = 64, className, variant = "light" }: LogoProps) {
  // Logo F renders an ink-card (dark always) so its identity is
  // consistent across light / dark themes. The variant prop is kept
  // for future tweaks but currently only controls the optional accent
  // for badge contrast, since the ink-card style is intentionally
  // theme-agnostic.
  const c = colors(variant === "dark" ? "dark" : "light");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="統計ロードマップ"
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
      <line
        x1="22"
        y1="78"
        x2="78"
        y2="78"
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
