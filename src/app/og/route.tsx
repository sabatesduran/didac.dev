import { Inter } from "next/font/google";
import { ImageResponse } from "next/server";

export const runtime = "edge";
const interScript = Inter({ subsets: ["latin"] });

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    const fontData = await fetch(
      new URL("../../styles/fonts/Inter-SemiBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 48,
            fontWeight: 600,
            padding: "40px",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#3B81F6",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          <h1>{title}</h1>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>didac.dev</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
