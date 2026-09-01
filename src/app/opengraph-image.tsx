import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/content";

export const alt = `${SITE_CONFIG.name} logo`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #1d4ed8 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #6366f1 100%)",
              borderRadius: 36,
              boxShadow: "0 20px 60px rgba(37, 99, 235, 0.35)",
            }}
          >
            <svg width="88" height="88" viewBox="0 0 24 24" fill="none">
              <path
                d="m3 3 7 7-7 7"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13 3 7 7-7 7"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.03em",
              }}
            >
              {SITE_CONFIG.name}
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#bfdbfe",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Precision Financial Architecture
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
