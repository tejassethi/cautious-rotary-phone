/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    googleAnalyticsID: process.env.googleAnalyticsID,
  },
};

module.exports = nextConfig;
