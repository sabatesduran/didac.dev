import { Printables } from "./social-links";

export interface LinkPageItem {
  name: string;
  url: string;
  icon?: any;
  description?: string;
  image?: any;
}

export const LinkPageItems: LinkPageItem[] = [
  {
    name: Printables.name,
    description: Printables.description,
    url: Printables.url,
  },
  {
    name: "Website",
    url: "https://didac.dev",
  },
];
