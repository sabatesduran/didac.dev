const path = require("path");
const withRemoteRefresh = require("next-remote-refresh")({
  // Configure your Next.js project to watch the files you want to refresh
  paths: [path.resolve(__dirname, "posts")],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["source.unsplash.com"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withRemoteRefresh(withMDX(nextConfig));
