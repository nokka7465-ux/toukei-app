import { ImageResponse } from "next/og";
import { getToolBySlug } from "@/lib/tools-registry";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) {
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
          ツールが見つかりません
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0f172a 0%, #14532d 50%, #15803d 100%)",
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
            color: "#bbf7d0",
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Statistical Tools · 統計ロードマップ
        </div>

        <div
          style={{
            display: "flex",
            padding: "6px 14px",
            borderRadius: 8,
            background: "#22c55e",
            color: "#0f172a",
            fontSize: 22,
            fontWeight: 700,
            marginTop: 18,
            alignSelf: "flex-start",
          }}
        >
          {tool.category}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 20,
            letterSpacing: "-0.01em",
          }}
        >
          {tool.title}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#dcfce7",
            lineHeight: 1.5,
            marginTop: 24,
          }}
        >
          {tool.description.slice(0, 110)}
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
            color: "#bbf7d0",
            fontSize: 22,
          }}
        >
          {[
            "ブラウザ完結",
            "データ送信なし",
            "登録不要",
            "完全無料",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "6px 14px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 6,
              }}
            >
              ✓ {tag}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#86efac",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>無料オンライン計算ツール</div>
          <div style={{ display: "flex", fontSize: 20 }}>toukei-app.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
