import "@/styles/highlight-js/github-dark.css";

import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import langPython from "highlight.js/lib/languages/python";
import Headings from "@/components/mdx/Headings";
import T from "@/components/typography";
import format from "date-fns/format";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getPost, getPostSlugs } from "@/lib/posts";
import { generateMetadataForPage } from "@/lib/metadata";
import { Navbar } from "@/components/navbar";
import { SocialLinks } from "@/lib/social-links";

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
      <Navbar />
      <article className="prose prose-sm px-4 sm:px-0 md:prose-base lg:prose-lg prose-slate dark:prose-invert py-10 mx-auto">
        <Link href="/blog">
          <Button variant="link" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" /> All posts
          </Button>
        </Link>
        <T.H1 className="!mb-0">{props.frontMatter.title}</T.H1>
        <div className="flex items-center flex-wrap gap-3">
          <T.Muted>{format(props.frontMatter.date, "dd/MM/yyyy")}</T.Muted>
        </div>

        {/* @ts-ignore */}
        <MDXRemote source={props.content} options={mdxOptions} components={components} />

        <div className="italic">
          <hr className="!mt-20 !mb-8" />I hope it was a nice reading if you
          (not) liked, let me know{" "}
          <a href={SocialLinks.x.url}>{SocialLinks.x.handle}</a>.
        </div>
      </article>
    </>
  );
}

export async function generateMetadata({ params }: any) {
  const post = getPost(params);

  const meta = generateMetadataForPage(
    post?.frontMatter?.title,
    post?.frontMatter?.description
  );

  meta.openGraph.type = "article";
  meta.twitter.title = `${post?.frontMatter?.title} - ${post?.frontMatter?.author}`;
  meta.twitter.title = post?.frontMatter?.description;

  return meta;
}

export async function generateStaticParams() {
  return getPostSlugs();
}
