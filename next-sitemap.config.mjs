/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://cxk-converter.vercel.app",
  generateRobotsTxt: true,
};

export default config;
