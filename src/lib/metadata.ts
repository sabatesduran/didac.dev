import { siteURL } from "./utils";

export const generateMetadataForPage = (
  title: string = "",
  description: string = "Full Stack Developer and maker"
) => {
  return {
    title: { template: "%s | Dídac Sabatés", default: "Dídac Sabatés" },
    description: description,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fffff" },
      { media: "(prefers-color-scheme: dark)", color: "#020817" },
    ],
    openGraph: {
      title,
      description: description,
      url: siteURL(),
      siteName: "Dídac Sabatés",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteURL()}/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      title: `${title} | Dídac Sabatés`,
      description: description,
      card: "summary_large_image",
      creator: "@didacsd",
      image: `${siteURL()}/og?title=${encodeURIComponent(title)}`,
    },
    icons: {
      shortcut: `${siteURL()}/favicons/favicon.ico`,
    },
    alternates: {
      types: {
        "application/rss+xml": `${siteURL()}/rss.xml`,
      },
    },
  };
};
