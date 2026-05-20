import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "統計ロードマップ ─ AI エンジニアになるための統計・数学・Python";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#faf6ec",
          backgroundImage:
            "linear-gradient(to right, rgba(130,110,70,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(130,110,70,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          padding: "56px 80px",
          color: "#2a2416",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              color: "#857a5f",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Toukei Study Book
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#857a5f",
              letterSpacing: 4,
            }}
          >
            EST. 2026
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 4,
            background: "#c9b98c",
            borderTop: "1px solid #c9b98c",
            marginBottom: 4,
          }}
        />
        <div
          style={{
            width: "100%",
            height: 1,
            background: "#c9b98c",
            marginBottom: 44,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: 10,
              lineHeight: 1.05,
              textAlign: "center",
            }}
          >
            Statistics
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 400,
              fontStyle: "italic",
              color: "#5a5139",
              letterSpacing: 5,
              marginTop: 4,
            }}
          >
            × AI · ML · Cloud
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 32,
              fontSize: 22,
              color: "#3a2f1a",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            <span
              style={{
                padding: "8px 18px",
                border: "1.5px solid #c9b98c",
                borderRadius: 999,
                background: "rgba(247,238,212,0.65)",
              }}
            >
              演習 2,670+ 問
            </span>
            <span
              style={{
                padding: "8px 18px",
                border: "1.5px solid #c9b98c",
                borderRadius: 999,
                background: "rgba(247,238,212,0.65)",
              }}
            >
              41 検定対応
            </span>
            <span
              style={{
                padding: "8px 18px",
                border: "1.5px solid #c9b98c",
                borderRadius: 999,
                background: "rgba(247,238,212,0.65)",
              }}
            >
              40+ 教科書
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 26,
              marginTop: 26,
              fontSize: 18,
              color: "#5a5139",
              fontWeight: 500,
              letterSpacing: 3,
            }}
          >
            <span>統計検定</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>G/E 資格</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>DS 検定</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>AWS / Azure / GCP</span>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 1,
            background: "#c9b98c",
            marginTop: 36,
            marginBottom: 4,
          }}
        />
        <div
          style={{
            width: "100%",
            height: 4,
            background: "#c9b98c",
            borderBottom: "1px solid #c9b98c",
            marginBottom: 22,
          }}
        />

        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#5a5139",
            letterSpacing: 4,
          }}
        >
          <div>TEXTBOOK · FORMULAS · PRACTICE · TOOLS</div>
          <div style={{ fontStyle: "italic" }}>toukei-app.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
