/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    COOKIES_NAME: process.env.COOKIES_NAME,
  },
  images: {
    deviceSizes: [320, 375, 420, 540, 600, 767, 1024, 1280, 1440, 1920],
    domains: [
      "picsum.photos",
      "artgallery-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
