/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    COOKIES_NAME: process.env.COOKIES_NAME,
  },
};

module.exports = nextConfig;
