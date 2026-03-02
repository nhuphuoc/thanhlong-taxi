import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Taxi Châu Đức giá rẻ - Dịch Vụ Taxi Uy Tín 24/7',
  description: 'Taxi Châu Đức giá rẻ chuyên cung cấp dịch vụ taxi 4-7 chỗ tại Châu Đức, Kim Long, Ngãi Giao, Bà Rịa, Xuyên Mộc. Gọi ngay 0357572796 để có giá tốt nhất.',
  keywords: [
    'taxi châu đức',
    'taxi giá rẻ châu đức',
    'taxi bà rịa vũng tàu',
    'taxi kim long',
    'taxi ngãi giao',
    'taxi bà rịa',
    'taxi xuyên mộc',
    'dịch vụ taxi 24/7',
    'taxi sân bay',
    'thuê xe châu đức',
  ],
  authors: [{ name: 'Taxi Châu Đức giá rẻ' }],
  creator: 'Taxi Châu Đức giá rẻ',
  publisher: 'Taxi Châu Đức giá rẻ',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://taxichauduc.com', // ⚠️ THAY ĐỔI DOMAIN THẬT
    siteName: 'Taxi Châu Đức giá rẻ',
    title: 'Taxi Châu Đức giá rẻ - Dịch Vụ Taxi Uy Tín 24/7',
    description: 'Taxi Châu Đức giá rẻ chuyên cung cấp dịch vụ taxi 4-7 chỗ tại Châu Đức, Kim Long, Ngãi Giao, Bà Rịa, Xuyên Mộc. Gọi ngay 0357572796.',
    images: [
      {
        url: '/og-image.jpg', // Bạn cần thêm hình ảnh này sau
        width: 1200,
        height: 630,
        alt: 'Taxi Châu Đức giá rẻ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Châu Đức giá rẻ - Dịch Vụ Taxi Uy Tín 24/7',
    description: 'Dịch vụ taxi giá rẻ tại Châu Đức, Bà Rịa - Vũng Tàu. Gọi ngay 0357572796',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // ⚠️ Thêm sau khi có từ Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
