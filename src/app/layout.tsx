import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Script from "next/script";
import { isDev } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {!isDev() && (
        <>
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "2148d9da1cbb473c8f74ac25c731d499"}'
          />
          <Script
            src="https://unpkg.com/@tinybirdco/flock.js"
            data-host="https://api.tinybird.co"
            data-token="p.eyJ1IjogIjg1ZDUxNWYzLWY4YmMtNDliNi1iZWU3LTFkOWM2NjZkYzlhMiIsICJpZCI6ICI3MTg5NzM2Ni0xMzY4LTQwNTYtYWQ5Yi1jMmRkZTdmYjRlYmQiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.z-eljb7LypZBNcaodzsZb_8mJDtYIblV3rDZswwEbzE"
          />
        </>
      )}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
