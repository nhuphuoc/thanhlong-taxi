import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Taxi Châu Đức giá rẻ - Dịch Vụ Taxi Uy Tín 24/7',
  description: 'Taxi Châu Đức giá rẻ chuyên cung cấp dịch vụ taxi 4-7 chỗ tại Châu Đức, Kim Long, Ngãi Giao, Bà Rịa, Xuyên Mộc. Gọi ngay 0357572796 để có giá tốt nhất.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
