import { DarkModeToggle } from "@/components/dark-mode-toggle";
import Link from "next/link";
import { Github, X } from "@/lib/social-links";
import { FollowMe } from "@/components/follow-me";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="container flex h-14 items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">Home</Link>
        <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">Blog</Link>
        <Link href="/cv" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">CV</Link>
      </div>
      <div>
        <div className="flex sm:hidden">
          <FollowMe />
        </div>
        <div className="hidden sm:flex items-center justify-end">
          <Link
            href={Github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-grow items-center justify-center w-10 h-10"
            passHref
          >
            <Button variant="ghost" size="icon">
              <Github.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Github.icon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </Link>
          <Link
            href={X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-grow items-center justify-center w-10 h-10"
            passHref
          >
            <Button variant="ghost" size="icon">
              <X.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <X.icon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
