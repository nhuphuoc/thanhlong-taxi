import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chauduc-taxi.vercel.app' // ⚠️ THAY ĐỔI THÀNH DOMAIN THẬT CỦA BẠN

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
