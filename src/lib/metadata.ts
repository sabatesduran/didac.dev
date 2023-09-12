import { siteURL } from "./utils";

export const generateMetadataForPage = (
  title: string = "",
  description: string = "Full Stack Developer and maker"
) => {
  const defaultTitle = "Dídac Sabatés";
  return {
    title: { template: "%s | Dídac Sabatés", default: defaultTitle },
    description: description,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fffff" },
      { media: "(prefers-color-scheme: dark)", color: "#020817" },
    ],
    openGraph: {
      title: title ? `${title} | Dídac Sabatés` : defaultTitle,
      description: description,
      url: siteURL(),
      siteName: defaultTitle,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteURL()}/og?title=${encodeURIComponent(
            title ? title : defaultTitle
          )}`,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      title: title ? `${title} | Dídac Sabatés` : defaultTitle,
      description: description,
      card: "summary_large_image",
      creator: "@didacsd",
      image: `${siteURL()}/og?title=${encodeURIComponent(
        title ? title : defaultTitle
      )}`,
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
