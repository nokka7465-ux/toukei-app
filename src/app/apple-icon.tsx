import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)",
          color: "#fdfcf7",
          fontFamily: "serif",
          fontWeight: 700,
          fontSize: 110,
          letterSpacing: "-0.02em",
        }}
      >
        統
      </div>
    ),
    { ...size },
  );
}
