import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Logo F (apple touch icon variant). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: 100,
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          統
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 38,
            left: 38,
            right: 38,
            height: 6,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 9,
              height: 9,
              borderRadius: 5,
              background: "#3b82f6",
              marginRight: 4,
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              height: 6,
              background: "#3b82f6",
              borderRadius: 3,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 0,
              height: 0,
              borderTop: "11px solid transparent",
              borderBottom: "11px solid transparent",
              borderLeft: "16px solid #3b82f6",
              marginLeft: -1,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
