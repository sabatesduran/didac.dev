import Rss from "rss";
import { siteURL } from "@/lib/utils";
import { getPosts } from "@/lib/posts";

export async function GET() {
  const SITE_URL = siteURL();
  const posts = await getPosts();

  const feed = new Rss({
    title: "Dídac Sabatés",
    description: "Full Stack Developer and maker",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.meta.title,
      description: post.meta.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      guid: `${SITE_URL}/blog/${post.slug}`,
      date: post.meta.date,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
