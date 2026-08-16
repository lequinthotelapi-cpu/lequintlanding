import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { hotel } from "@/data/hotel";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fachadaPath = path.join(process.cwd(), "assets/imgs/fachada.jpg");
  const fachadaBuffer = await readFile(fachadaPath);
  const fachadaSrc = `data:image/jpeg;base64,${fachadaBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#141414",
        }}
      >
        <img
          src={fachadaSrc}
          alt=""
          width={1200}
          height={630}
          style={{ objectFit: "cover", position: "absolute", inset: 0 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "64px",
            background:
              "linear-gradient(0deg, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.1) 55%)",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 700, color: "#fafafa" }}>
            {hotel.nombre}
          </div>
          <div style={{ fontSize: 28, color: "#e7e5dc", marginTop: 12 }}>
            {`${hotel.ciudad}, ${hotel.pais}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
