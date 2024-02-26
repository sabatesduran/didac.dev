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
  async redirects() {
    return [
      {
        source: '/x',
        destination: 'https://x.com/didacsd',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/didacsd',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/sabatesduran',
        permanent: true,
      },
      {
        source: '/gitlab',
        destination: 'https://gitlab.com/sabatesduran',
        permanent: true,
      },
      {
        source: '/printables',
        destination: 'https://www.printables.com/@didac',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/didacsabates/',
        permanent: true,
      },
      {
        source: '/eg',
        destination: 'https://espiagasolineras.com',
        permanent: true,
      },
    ]
  },
};

const withMDX = require("@next/mdx")();
module.exports = withRemoteRefresh(withMDX(nextConfig));
