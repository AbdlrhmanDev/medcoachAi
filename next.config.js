/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = "medcoachAi"; // ⚠️ غيّره باسم المستودع الحقيقي
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig; 