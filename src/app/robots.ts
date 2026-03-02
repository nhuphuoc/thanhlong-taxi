import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://chauduc-taxi.vercel.app' // ⚠️ THAY ĐỔI THÀNH DOMAIN THẬT CỦA BẠN

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
