import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Toukei Study Book";
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
          padding: "60px 80px",
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
            marginBottom: 40,
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
            marginBottom: 50,
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
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: 12,
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Statistics
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 400,
              fontStyle: "italic",
              color: "#5a5139",
              letterSpacing: 6,
              marginTop: 8,
            }}
          >
            Certification Study
          </div>
          <div
            style={{
              display: "flex",
              gap: 36,
              marginTop: 40,
              fontSize: 32,
              color: "#5a3f13",
              fontWeight: 700,
              letterSpacing: 8,
            }}
          >
            <span>4</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>3</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>2</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>pre-1</span>
            <span style={{ color: "#c9b98c" }}>·</span>
            <span>1</span>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 1,
            background: "#c9b98c",
            marginTop: 50,
            marginBottom: 4,
          }}
        />
        <div
          style={{
            width: "100%",
            height: 4,
            background: "#c9b98c",
            borderBottom: "1px solid #c9b98c",
            marginBottom: 24,
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
          <div>TEXTBOOK · FORMULAS · PRACTICE</div>
          <div style={{ fontStyle: "italic" }}>tokei-app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
