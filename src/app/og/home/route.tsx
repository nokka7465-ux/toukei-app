import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0b1220 0%, #1e3a8a 60%, #1d4ed8 100%)",
          color: "#fdfcf7",
          padding: "60px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 14,
              background: "#fdfcf7",
              color: "#0b1220",
              fontFamily: "serif",
              fontWeight: 700,
              fontSize: 44,
              lineHeight: 1,
              position: "relative",
            }}
          >
            統
            <div
              style={{
                display: "flex",
                position: "absolute",
                bottom: 10,
                left: 14,
                right: 14,
                height: 4,
                background: "#3b82f6",
                borderRadius: 2,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#cbd5e1",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Toukei Roadmap
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          統計ロードマップ
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#e5e7eb",
            marginTop: 28,
            lineHeight: 1.4,
          }}
        >
          AIエンジニアになるための
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#fdfcf7",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          統計・数学・Python を一気通貫で学ぶ
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 36,
            color: "#cbd5e1",
            fontSize: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "8px 14px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 6,
            }}
          >
            📐 数学
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>→</div>
          <div
            style={{
              display: "flex",
              padding: "8px 14px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 6,
            }}
          >
            📊 統計
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>→</div>
          <div
            style={{
              display: "flex",
              padding: "8px 14px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 6,
            }}
          >
            🤖 機械学習
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>→</div>
          <div
            style={{
              display: "flex",
              padding: "8px 14px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 6,
            }}
          >
            🎓 検定
          </div>
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
          <div style={{ display: "flex" }}>無料 · 完全クライアント · 会員登録不要</div>
          <div style={{ display: "flex", fontSize: 20 }}>toukei-app.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
