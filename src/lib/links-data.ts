import { Printables } from "./social-links";

export interface LinkPageItem {
  name: string;
  url: string;
  handle?: string;
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
    name: "hipotec.app",
    description: "Spanish mortgage simulator",
    url: "https://hipotec.app",
  },
  {
    name: "Espía Gasolineras",
    description: "Find the cheapest gas station near you in Spain",
    url: "https://espiagasolineras.com",
  },
  {
    name: "QR Forge",
    description: "Generate QR codes for free",
    url: "https://qrforge.didac.dev",
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
