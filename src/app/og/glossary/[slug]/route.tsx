import { ImageResponse } from "next/og";
import { getGlossaryBySlug } from "@/lib/glossary-registry";

export const runtime = "nodejs";

const LEVEL_COLOR: Record<string, string> = {
  "4": "#10b981",
  "3": "#0ea5e9",
  "2": "#8b5cf6",
  "準1": "#f59e0b",
  "1": "#e11d48",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const term = getGlossaryBySlug(decodeURIComponent(slug));

  if (!term) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            background: "#0b1220",
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
          }}
        >
          用語が見つかりません
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  const levelColor = LEVEL_COLOR[term.level] ?? "#6b7280";
  const def = term.definition.slice(0, 110);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0b1220 0%, #1e3a8a 60%, #1d4ed8 100%)",
          color: "#fdfcf7",
          padding: "60px 70px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#cbd5e1",
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Glossary · 統計ロードマップ
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "6px 14px",
              borderRadius: 8,
              background: levelColor,
              color: "#0b1220",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {term.level}級
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#cbd5e1",
            }}
          >
            {term.category}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 20,
            letterSpacing: "-0.01em",
          }}
        >
          {term.term}
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 12,
            color: "#cbd5e1",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>{term.reading}</div>
          {term.english && (
            <div style={{ display: "flex" }}>· {term.english}</div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#e5e7eb",
            lineHeight: 1.5,
            marginTop: 32,
          }}
        >
          {def}
          {term.definition.length > 110 ? "…" : ""}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#9ca3af",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>統計用語集 · 無料</div>
          <div style={{ display: "flex", fontSize: 20 }}>toukei-app.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
