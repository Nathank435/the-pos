import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0e1c40",
          backgroundImage: "linear-gradient(135deg, #12224a, #0b1530)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "0 90px",
        }}
      >
        {/* accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 10, backgroundColor: "#1d4ed8" }} />

        {/* logo mark */}
        <svg width="132" height="132" viewBox="0 0 32 32" fill="none">
          <path
            d="M7 4.5h13.5a2 2 0 0 1 2 2V23l-2.4-1.5L17.7 23l-2.4-1.5L12.9 23l-2.4-1.5L8.1 23a2 2 0 0 1-1.1-1.8V6.5a2 2 0 0 1 2-2Z"
            fill="#ffffff"
            fillOpacity="0.16"
          />
          <path
            d="M7 4.5h13.5a2 2 0 0 1 2 2V23l-2.4-1.5L17.7 23l-2.4-1.5L12.9 23l-2.4-1.5L8.1 23a2 2 0 0 1-1.1-1.8V6.5a2 2 0 0 1 2-2Z"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M10.5 9h8.5M10.5 12.5h8.5M10.5 16h5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="22.5" cy="22.5" r="6" fill="#1d4ed8" stroke="#0b1530" strokeWidth="1.6" />
          <path d="M20 22.6l1.7 1.7 3-3.2" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* wordmark */}
        <div style={{ display: "flex", marginTop: 28, fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>
          <span style={{ color: "#ffffff" }}>The</span>
          <span style={{ color: "#60a5fa" }}>POS</span>
          <span style={{ color: "#94a3b8", fontWeight: 600 }}>.co.uk</span>
        </div>

        {/* tagline */}
        <div style={{ display: "flex", marginTop: 22, fontSize: 38, fontWeight: 500, color: "#cbd5e1", textAlign: "center" }}>
          Compare POS systems &amp; card machines for UK businesses
        </div>

        {/* trust strip */}
        <div style={{ display: "flex", marginTop: 40, fontSize: 24, fontWeight: 700, letterSpacing: 4, color: "#60a5fa" }}>
          INDEPENDENT · UK-FOCUSED · PLAIN ENGLISH
        </div>
      </div>
    ),
    { ...size },
  );
}
