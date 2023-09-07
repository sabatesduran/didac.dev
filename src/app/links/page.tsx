import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import T from "@/components/typography";
import { Metadata } from "next";
import { SocialLinksArray } from "@/lib/social-links";
import { LinkPageItems } from "@/lib/links-data";
import { generateMetadataForPage } from "@/lib/metadata";

export const metadata: Metadata = generateMetadataForPage(
  "Links",
  "Full Stack Developer and maker"
);

export default function Links() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
      <div className="min-w-[50%] flex flex-col">
        <div className="flex items-center justify-between">
          <T.H1>Links</T.H1>
          <div className="flex items-center justify-center gap-3">
            {SocialLinksArray.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
        <section className="py-10 flex flex-col gap-3">
          {LinkPageItems.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{link.name}</CardTitle>
                  {link.description && (
                    <CardDescription>{link.description}</CardDescription>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
