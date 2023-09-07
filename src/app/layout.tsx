"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { isDev } from "@/lib/utils";
import { FollowMe } from "@/components/follow-me";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noHomeButttonPaths = ["/", "/links"];
  const showHomeButton = !noHomeButttonPaths.includes(pathname);
  const showFollowButton = pathname !== "/links";

  return (
    <html lang="en">
      {!isDev() && (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "2148d9da1cbb473c8f74ac25c731d499"}'
        />
      )}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {showHomeButton && (
            <div className="absolute top-3 left-3">
              <Link href="/">
                <Button variant="outline" size="icon">
                  <Home className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Got to homepage</span>
                </Button>
              </Link>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-2">
              {showFollowButton && <FollowMe />}
              <DarkModeToggle />
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
