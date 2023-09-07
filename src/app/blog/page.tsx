import { format } from "date-fns";
import Link from "next/link";
import T from "@/components/typography";
import { Metadata } from "next";
import { Rss } from "lucide-react";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog - Dídac Sabatés",
  description: "Probably empty but it's a start",
};

export default function Blog() {
  const posts = getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
      <div className="min-w-[50%] flex flex-col">
        <div className="flex items-end justify-between gap-3">
          <T.H1>Blog</T.H1>
          <Link href="/rss.xml" target="_blank">
            <Rss size={20} />
          </Link>
        </div>
        <section className="py-5">
          {posts.map((post: any) => (
            <Link href={"/blog/" + post.slug} passHref key={post.slug}>
              <div className="py-3 flex justify-between align-middle gap-2">
                <div>
                  <T.H3>{post.meta.title}</T.H3>
                  <T.Small className="mt-1 text-muted-foreground">
                    {post.meta.description}
                  </T.Small>
                </div>
                <div className="my-auto">
                  <T.Muted>{format(post.meta.date, "dd/MM/yyyy")}</T.Muted>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
