import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { LinkPageItem } from "@/lib/links-data";

export const Github: LinkPageItem = {
  name: "Github",
  url: "https://github.com/sabatesduran",
  icon: GithubIcon,
};

export const X: LinkPageItem = {
  name: "X",
  url: "https://x.com/didacsd",
  handle: "@didacsd",
  icon: TwitterIcon,
};

export const LinkedIn: LinkPageItem = {
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/didacsabates/",
  icon: LinkedinIcon,
};

export const SocialLinks = {
  github: Github,
  x: X,
  linkedin: LinkedIn,
};

export const SocialLinksArray: LinkPageItem[] = [Github, X, LinkedIn];

// Other links

export const Printables: LinkPageItem = {
  name: "Printables",
  description: "Where I have my 3D printing models",
  url: "https://www.printables.com/@didac",
};

export const OtherLinks = {
  printables: Printables,
};
