import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";

const STEPS = [
  { num: 1, emoji: "📐", title: "数学基礎" },
  { num: 2, emoji: "📊", title: "統計学(基礎)" },
  { num: 3, emoji: "🔬", title: "統計学(応用)" },
  { num: 4, emoji: "🤖", title: "機械学習・DL" },
  { num: 5, emoji: "🎓", title: "AI 系検定" },
];

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)",
          color: "#fdfcf7",
          padding: "50px 70px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 12,
              background: "#fdfcf7",
              color: "#0b1220",
              fontFamily: "serif",
              fontWeight: 700,
              fontSize: 36,
              lineHeight: 1,
              position: "relative",
            }}
          >
            統
            <div
              style={{
                display: "flex",
                position: "absolute",
                bottom: 8,
                left: 12,
                right: 12,
                height: 3,
                background: "#3b82f6",
                borderRadius: 2,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#94a3b8",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            AI Engineer Roadmap
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          AIエンジニア・ロードマップ
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#cbd5e1",
            marginTop: 12,
          }}
        >
          5 フェーズ ─ 350〜930 時間 ─ 完全無料
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 36,
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.num}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "10px 18px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 8,
                fontSize: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 40,
                  height: 40,
                  background: "#3b82f6",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {s.num}
              </div>
              <div style={{ display: "flex" }}>{s.emoji}</div>
              <div style={{ display: "flex", color: "#fff" }}>{s.title}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#94a3b8",
            fontSize: 20,
            paddingTop: 20,
          }}
        >
          <div style={{ display: "flex" }}>統計ロードマップ</div>
          <div style={{ display: "flex" }}>toukei-app.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
