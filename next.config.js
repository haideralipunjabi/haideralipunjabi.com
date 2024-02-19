/** @type {import('next').NextConfig} */
const STATIC_BUILD = process.env.STATIC_BUILD == "true";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts"],
};
if(STATIC_BUILD) {
  nextConfig["output"] = "export";
  nextConfig["images"] = {
    loader: 'custom',
    loaderFile: './lib/image.ts',
  }
}
module.exports = nextConfig;