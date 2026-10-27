/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Static export can't run Next's image optimizer at request time, so
    // this stays unoptimized. The old "imgix" loader was never actually
    // reachable in dev/export and can be dropped.
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
