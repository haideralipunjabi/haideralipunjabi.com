/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: process.env.APP_DIR == 'true'
    ? ["jsx", "js", "tsx", "ts"]
    : ["page.tsx", "page.ts", "page.jsx", "page.js"],
  experimental: {
    appDir: process.env.APP_DIR == 'true',
  },
};
