import { siteURL } from "./utils";

export const generateMetadataForPage = (
  title: string,
  description: string,
  titleAbsolute: boolean = false
) => {
  const titleData = titleAbsolute
    ? { absolute: "Dídac Sabatés" }
    : {
        template: "%s | Dídac Sabatés",
        default: "Dídac Sabatés",
      };

  return {
    title: titleData,
    description: description,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fffff" },
      { media: "(prefers-color-scheme: dark)", color: "#020817" },
    ],
    openGraph: {
      title: `${title} | Dídac Sabatés`,
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
      card: "summary_large_image",
      creator: "@didacsd",
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
