/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.funblocks.website",
  generateIndexSitemap: true,
  sitemapSize: 5000, // 調整這個值，確保它小於您的總URL數量
};
