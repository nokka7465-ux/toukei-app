import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** Logo F: 統 + アロー — see src/components/Logo.tsx for the canonical source. */
export default function Icon() {
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
          background: "#1f1a0f",
          color: "#fffdf4",
          padding: 0,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: 280,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginTop: 80,
          }}
        >
          統
        </div>
        {/* Arrow line */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 110,
            left: 110,
            right: 110,
            height: 16,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 24,
              height: 24,
              borderRadius: 12,
              background: "#5a7088",
              marginRight: 8,
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              height: 16,
              background: "#5a7088",
              borderRadius: 8,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 0,
              height: 0,
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft: "44px solid #5a7088",
              marginLeft: -2,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
