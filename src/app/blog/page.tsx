import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
import Link from "next/link";
import T from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Dídac Sabatés",
  description: "Probably empty but it's a start",
};

export default function Blog() {
  // 1) Set blogs directory
  const blogDir = "posts";

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir));

  // 3) For each blog found
  const posts = files
    .map((filename) => {
      // 4) Read the content of that blog
      const fileContent = fs.readFileSync(
        path.join(blogDir, filename),
        "utf-8"
      );

      // 5) Extract the metadata from the blog's content
      const { data: frontMatter } = matter(fileContent);

      // 6) Return the metadata and page slug
      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a, b) => {
      // Order by newer date
      const dateA = new Date(a.meta.date);
      const dateB = new Date(b.meta.date);
      return dateB.getTime() - dateA.getTime();
    })
    // Filter by published
    .filter((post: any) => post.meta.published);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:px-24 md:py-24">
      <div className="min-w-[50%] flex flex-col">
        <T.H1>Blog</T.H1>
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
