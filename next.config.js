/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    enableIndexingSeo: process.env.ENABLE_INDEXING_SEO,
    adminWhatsAppNumber: process.env.ADMIN_WHATSAPP_NUMBER,
    adminWhatsAppChatFormat: process.env.ADMIN_WHATSAPP_CHAT_FORMAT,
    baseUrl: process.env.BASE_URL || "https://www.dongyin.id",
  },
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap.xml" },
      { source: "/sitemap/:id.xml", destination: "/api/sitemap/:id" },
    ];
  },
};

module.exports = nextConfig;
