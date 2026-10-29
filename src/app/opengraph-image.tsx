import { ImageResponse } from "next/og";

export const alt = "Logo Palace — logo design and website development agency in San Francisco";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111214",
          color: "#F5F2EC",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: "#F5F2EC",
              color: "#111214",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            LP
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, display: "flex" }}>
            logo Palace<span style={{ color: "#FF5A1F" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            Logos and websites that make your business unforgettable.
          </div>
          <div style={{ fontSize: 30, color: "#A9ABB3" }}>Branding & web design · San Francisco, California</div>
        </div>
        <div style={{ position: "absolute", right: -80, top: -80, width: 320, height: 320, borderRadius: 999, background: "#FF5A1F", display: "flex" }} />
      </div>
    ),
    size,
  );
}
