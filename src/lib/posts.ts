import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts() {
  // 1) Set blogs directory
  const blogDir = "posts";

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir));

  // 3) For each blog found
  return (
    files
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
      .filter((post: any) => post.meta.published)
  );
}

export function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export function getPostSlugs() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
