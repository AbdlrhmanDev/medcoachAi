/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = "medcoachAi"; // 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig; 