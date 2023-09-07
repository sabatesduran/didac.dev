import Rss from "rss";
import { getPosts } from "../blog/page";
import { isDev } from "@/lib/utils";

const SITE_URL_DEV = "http://localhost:3000";
const SITE_URL_PROD = "https://didac.dev";

export async function GET() {
  const siteURL = isDev() ? SITE_URL_DEV : SITE_URL_PROD;
  const posts = await getPosts();

  const feed = new Rss({
    title: "Dídac Sabatés",
    description: "Full Stack Developer and maker",
    feed_url: `${siteURL}/rss.xml`,
    site_url: siteURL,
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.meta.title,
      description: post.meta.description,
      url: `${siteURL}/blog/${post.slug}`,
      guid: `${siteURL}/blog/${post.slug}`,
      date: post.meta.date,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
