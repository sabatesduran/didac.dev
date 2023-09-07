import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const SITE_URL_DEV = "http://localhost:3000";
const SITE_URL_PROD = "https://didac.dev";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDev() {
  return process.env.NODE_ENV === "development";
}

export function siteURL() {
  return isDev() ? SITE_URL_DEV : SITE_URL_PROD;
}
