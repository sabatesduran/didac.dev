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
    name: "Espía Gasolineras",
    url: "https://espiagasolineras.com",
  },
  {
    name: "CV",
    url: "https://didac.dev/cv",
  },
  {
    name: "Website",
    url: "https://didac.dev",
  },
];
