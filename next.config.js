/** @type {import('next').NextConfig} */
const APP_DIR = process.env.APP_DIR == "true";
module.exports = {
  reactStrictMode: true,
  pageExtensions: APP_DIR
    ? ["jsx", "js", "tsx", "ts"]
    : ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    unoptimized: !APP_DIR,
  },
  experimental: {
    appDir: APP_DIR,
  },
};
