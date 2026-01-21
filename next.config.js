const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  output: "export",
  basePath: isProd ? "/kamwisiyauya.github.io" : undefined,
  // assetPrefix: isProd ? "/behind-the-code-nextjs-portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
});
