import "@/styles/highlight-js/github-dark.css";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import langPython from "highlight.js/lib/languages/python";
import Headings from "@/components/mdx/Headings";
import T from "@/components/typography";
import format from "date-fns/format";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, { languages: { python: langPython } }],
  },
};

const components = {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
};

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <>
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert py-16 md:py-24 mx-auto">
        <Link href="/blog">
          <Button variant="link" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" /> All posts
          </Button>
        </Link>
        <T.H1 className="!mb-0">{props.frontMatter.title}</T.H1>
        <div className="flex items-center gap-3">
          <T.Muted>{format(props.frontMatter.date, "dd/MM/yyyy")}</T.Muted>
          <div className="flex gap-1">
            {props.frontMatter.tags?.split(",").map((tag: string) => (
              <Badge key={tag.trim()} variant={"outline"}>
                {tag.trim()}
              </Badge>
            ))}
          </div>
        </div>

        {/* @ts-ignore */}
        <MDXRemote source={props.content} options={mdxOptions} components={components} />
      </article>
    </>
  );
}

function getPost({ slug }: { slug: string }) {
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

export async function generateMetadata({ params, searchParams }: any) {
  const post = getPost(params);

  const meta: Metadata = {
    title: `${post?.frontMatter?.title} - ${post?.frontMatter?.author}`,
    description: post?.frontMatter?.description,
    openGraph: {
      type: "article",
    },
  };

  meta.twitter = {
    card: "summary",
    site: "@didacsd",
    creator: "@didacsd",
    title: post?.frontMatter?.title,
    description: post?.frontMatter?.description,
  };

  return meta;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
