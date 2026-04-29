import { ImageResponse } from "next/og";
import { mockConfigs } from "@/data/mock-config";
import { levels } from "@/data/levels";

export const runtime = "nodejs";
export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(mockConfigs).map((level) => ({ level }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ level: string }> },
) {
  const { level } = await params;
  const config = mockConfigs[level];
  const meta = levels.find((l) => l.slug === level);
  if (!config || !meta) {
    return new Response("Not found", { status: 404 });
  }
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
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#fdfcf7",
              color: "#0b1220",
              fontFamily: "serif",
              fontWeight: 700,
              fontSize: 32,
              lineHeight: 1,
              position: "relative",
            }}
          >
            統
            <div
              style={{
                display: "flex",
                position: "absolute",
                bottom: 7,
                left: 11,
                right: 11,
                height: 3,
                background: "#3b82f6",
                borderRadius: 2,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#9ca3af",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Mock Exam
          </div>
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {config.label}
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 40,
            color: "#d1d5db",
            fontSize: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ color: "#9ca3af", fontSize: 22, marginRight: 8 }}>
              制限時間
            </span>
            <span>{config.timeMinutes} 分</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ color: "#9ca3af", fontSize: 22, marginRight: 8 }}>
              出題数
            </span>
            <span>{config.questionTarget} 問</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ color: "#9ca3af", fontSize: 22, marginRight: 8 }}>
              合格基準
            </span>
            <span>{config.passPct}%</span>
          </div>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#9ca3af",
            fontSize: 24,
          }}
        >
          <div>統計ロードマップ ─ 本番形式の無料模試</div>
          <div style={{ fontSize: 20 }}>toukei-app.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
