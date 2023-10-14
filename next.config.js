/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    HOME_PAGE_MODAL_URL: process.env.HOME_PAGE_MODAL_URL,
  },
};

module.exports = nextConfig;
