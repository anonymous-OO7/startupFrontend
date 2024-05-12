/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "3.68.94.171",
      "3.79.194.15",
      "mohitrai.com",
      "media.licdn.com",
      "localhost",
      "kinsta.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};
