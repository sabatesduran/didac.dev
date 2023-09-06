import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import T from "@/components/typography";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links - Dídac Sabatés",
  description: "Full Stack Developer and maker",
};

export default function Links() {
  const socialLinks = [
    {
      name: "X",
      url: "https://x.com/didacsd",
      icon: <Twitter />,
    },
    {
      name: "Github",
      url: "https://github.com/sabatesduran",
      icon: <Github />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/didacsabates/",
      icon: <Linkedin />,
    },
  ];

  const links = [
    {
      title: "Printables",
      description: "Where I have my 3D printing models",
      url: "https://www.printables.com/@didac",
    },
    {
      title: "Website",
      url: "https://didac.dev",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
      <div className="min-w-[50%] flex flex-col">
        <div className="flex items-center justify-between">
          <T.H1>Links</T.H1>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <section className="py-10 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{link.title}</CardTitle>
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
