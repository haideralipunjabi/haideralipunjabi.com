// next.config.js
const cache = require("./cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching: cache,
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
});
