const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "3.68.94.171", "3.79.194.15"],
  },
  experimental: {
    serverActions: true,
  },
};
