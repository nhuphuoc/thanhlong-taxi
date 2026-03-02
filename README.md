# Landing Page - Taxi Châu Đức giá rẻ

Landing page hiện đại cho dịch vụ Taxi Châu Đức giá rẻ, được xây dựng bằng Next.js 15, React 19, và Tailwind CSS. <3

## ✨ Tính năng

- 🎨 **Thiết kế hiện đại**: Giao diện đẹp mắt với tông màu vàng-đen đặc trưng của taxi
- 📱 **Responsive hoàn toàn**: Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- 🚀 **Performance cao**: Sử dụng Next.js App Router và Server Components
- 📞 **Floating Contact Buttons**: Nút gọi điện, Zalo, Facebook Messenger luôn hiển thị
- 🎯 **SEO tối ưu**: Meta tags, structured data, semantic HTML
- ⚡ **Animation mượt mà**: Hiệu ứng hover, bounce, pulse cho CTA buttons

## 🔧 Công nghệ sử dụng

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chỉnh sửa thông tin doanh nghiệp

Mở file `src/app/page.tsx` và tìm phần `DATA` ở đầu file:

```typescript
const DATA = {
  name: "Taxi Châu Đức giá rẻ",
  phone: "0123456789",           // Số điện thoại thật
  phoneDisplay: "0123.456.789",   // Cách hiển thị số điện thoại
  zalo: "0123456789",             // Số Zalo
  facebook: "https://facebook.com/taxithanhlong", // Link Facebook Page
  area: "Phục vụ 24/7 tại khu vực Long Thành, Nhơn Trạch, Biên Hòa, Đồng Nai",
};
```

**Thay đổi các giá trị trên thành thông tin thực tế của bạn.**

### 3. Chạy development server

```bash
npm run dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy

### Build production

```bash
npm run build
npm start
```

### Deploy lên Vercel (Khuyên dùng)

1. Push code lên GitHub
2. Truy cập [vercel.com](https://vercel.com)
3. Import repository
4. Deploy tự động

## 📂 Cấu trúc thư mục

```
thanhlong-taxi/
├── src/
│   └── app/
│       ├── page.tsx          # Landing page chính
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles + Tailwind
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.mjs
```

## 🎨 Tùy chỉnh màu sắc

Để thay đổi màu chủ đạo, chỉnh sửa trong `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Thêm màu tùy chỉnh tại đây
    }
  }
}
```

Hoặc thay đổi trực tiếp trong `page.tsx`:
- Màu vàng chủ đạo: `yellow-400`, `yellow-500`
- Màu nền tối: `gray-900`, `black`
- Màu CTA button: `red-600`, `red-700`

## 📱 Floating Contact Buttons

Landing page có 4 nút liên hệ nổi luôn hiển thị ở góc dưới bên phải:

1. **Zalo** (Màu xanh dương)
2. **Facebook Messenger** (Gradient hồng-tím)
3. **SMS** (Chỉ hiện trên mobile, màu xanh lá)
4. **Gọi điện** (Màu đỏ, có hiệu ứng bounce)

## 🔍 SEO

Để cải thiện SEO, cập nhật metadata trong `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Taxi Châu Đức giá rẻ - Dịch Vụ Taxi Giá Tốt 24/7',
  description: 'Taxi Châu Đức giá rẻ chuyên cung cấp dịch vụ taxi 4-7 chỗ giá rẻ, uy tín.',
}
```

## 📄 License

MIT License - Sử dụng tự do cho mục đích thương mại.

## 💬 Hỗ trợ

Nếu cần hỗ trợ, vui lòng liên hệ qua Issues trên GitHub.

---

**Được xây dựng bởi Claude Code** 🤖
