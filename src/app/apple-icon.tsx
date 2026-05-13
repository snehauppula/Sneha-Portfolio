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
          background: "#0a0a0a",
          borderRadius: 40,
          border: "3px solid rgba(59, 130, 246, 0.55)",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#fafafa",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.06em",
            lineHeight: 1,
          }}
        >
          S
        </span>
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 44,
            width: 18,
            height: 18,
            borderRadius: 999,
            background: "#3b82f6",
            boxShadow: "0 0 24px rgba(59, 130, 246, 0.85)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
