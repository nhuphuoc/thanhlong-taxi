import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://taxichauduc.com' // ⚠️ THAY ĐỔI THÀNH DOMAIN THẬT CỦA BẠN

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
