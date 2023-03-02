/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com", "images.squarespace-cdn.com", "www.beyoung.in"],
  },
});
