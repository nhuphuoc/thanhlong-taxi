# 🚀 Hướng Dẫn SEO - Đưa Website Lên Google

## ✅ Đã hoàn thành (Tự động)

Các config SEO sau đã được tích hợp sẵn vào website:

### 1. **Metadata cơ bản** ✓
- Title, Description tối ưu
- Keywords cho từ khóa địa phương
- Open Graph (Facebook, Zalo share đẹp)
- Twitter Cards
- Robots meta tags

### 2. **Sitemap & Robots.txt** ✓
- `sitemap.xml` tự động generate
- `robots.txt` cho phép Google index
- Tự động cập nhật khi deploy

### 3. **Structured Data (JSON-LD)** ✓
- LocalBusiness schema
- Địa chỉ, số điện thoại
- Giờ mở cửa (24/7)
- Khu vực phục vụ
- Danh sách dịch vụ
- Links mạng xã hội

### 4. **Web App Manifest** ✓
- PWA ready
- Có thể cài đặt như app mobile

---

## 🔧 Cần làm thủ công (Quan trọng!)

### **Bước 1: Thay đổi domain trong code**

⚠️ **QUAN TRỌNG**: Tìm và thay tất cả `https://taxichauduc.com` thành domain thật của bạn trong các file:

```bash
# Tìm kiếm trong project
grep -r "taxichauduc.com" src/
```

**Các file cần sửa:**
- `src/app/layout.tsx` (line 36, 42, 53)
- `src/app/sitemap.ts` (line 4)
- `src/app/robots.ts` (line 4)
- `src/components/StructuredData.tsx` (line 7, 10, 13)

### **Bước 2: Thêm hình ảnh SEO**

Tạo hình ảnh cho Social Media sharing:

1. **Open Graph Image**: `public/og-image.jpg`
   - Kích thước: **1200 x 630 pixels**
   - Nội dung: Logo + Số điện thoại + "Taxi Châu Đức giá rẻ"
   - Tool gợi ý: [Canva](https://canva.com)

2. **Favicon & Icons**:
   - `public/favicon.ico` (32x32)
   - `public/icon-192.png` (192x192)
   - `public/icon-512.png` (512x512)
   - Tool gợi ý: [RealFaviconGenerator](https://realfavicongenerator.net/)

### **Bước 3: Google Search Console** 🔴 BẮT BUỘC

1. **Truy cập**: [search.google.com/search-console](https://search.google.com/search-console)

2. **Thêm property**: Nhập domain của bạn

3. **Xác thực quyền sở hữu** (chọn 1 trong các cách):
   - **HTML file**: Upload file vào `public/`
   - **HTML tag**: Copy mã và thêm vào `src/app/layout.tsx`:
     ```typescript
     verification: {
       google: 'mã-xác-thực-của-bạn', // Thay vào đây
     }
     ```
   - **DNS record**: Thêm TXT record vào domain

4. **Submit sitemap**:
   - Vào "Sitemaps" trong Search Console
   - Nhập: `https://yourdomain.com/sitemap.xml`
   - Click "Submit"

5. **Yêu cầu Google index**:
   - Vào "URL Inspection"
   - Nhập URL trang chủ
   - Click "Request Indexing"

### **Bước 4: Google My Business (Local SEO)** ⭐ QUAN TRỌNG

Đây là yếu tố quan trọng nhất cho dịch vụ taxi địa phương!

1. **Tạo hồ sơ**: [business.google.com](https://business.google.com)

2. **Điền thông tin**:
   - Tên: "Taxi Châu Đức giá rẻ"
   - Danh mục: "Taxi service"
   - Địa chỉ: Địa chỉ thật tại Châu Đức
   - Số điện thoại: 0357572796
   - Website: Link website của bạn
   - Giờ hoạt động: 24/7

3. **Thêm hình ảnh**:
   - Logo
   - Ảnh xe taxi
   - Ảnh tài xế
   - Ảnh khu vực phục vụ

4. **Xác thực**: Google sẽ gửi mã qua điện thoại hoặc bưu thiếp

5. **Nhờ khách hàng review**: Đây là yếu tố xếp hạng quan trọng!

### **Bước 5: Tối ưu nội dung**

✅ **Đã tốt**:
- Keywords địa phương: Châu Đức, Kim Long, Ngãi Giao...
- Cấu trúc heading (H1, H2) đúng
- Call-to-action rõ ràng
- Mobile-friendly

🔄 **Nên thêm** (không bắt buộc):
- Blog/Tin tức: "Giá cước taxi Châu Đức 2026"
- FAQ: Câu hỏi thường gặp
- Testimonials: Đánh giá khách hàng

### **Bước 6: Backlinks & Citations**

Đăng ký dịch vụ trên các trang:
- **Hotfrog.vn**: [hotfrog.vn](https://hotfrog.vn)
- **Cybo.com**: [cybo.com/VN](https://cybo.com/VN)
- **Tupalo.net**: [tupalo.net](https://tupalo.net)
- **Yellow Pages Vietnam**
- Các diễn đàn địa phương về Bà Rịa - Vũng Tàu

### **Bước 7: Social Media**

Đăng bài thường xuyên trên:
- ✅ Facebook Page: https://www.facebook.com/ut.thanh.374689
- ✅ Zalo Business: https://zalo.me/0357572796
- Instagram (nếu có)
- TikTok (video ngắn về dịch vụ)

---

## 📊 Theo dõi hiệu quả

### Google Analytics 4 (GA4)

1. **Tạo property**: [analytics.google.com](https://analytics.google.com)
2. **Copy Measurement ID**: Dạng `G-XXXXXXXXXX`
3. **Thêm vào website**: Cài Google Analytics trong Next.js

```typescript
// src/app/layout.tsx
import Script from 'next/script'

// Thêm vào <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## ⏱️ Timeline kỳ vọng

| Thời gian | Kết quả |
|-----------|---------|
| **1-3 ngày** | Google bắt đầu index website |
| **1-2 tuần** | Xuất hiện kết quả tìm kiếm chính xác (tên công ty) |
| **2-4 tuần** | Xuất hiện với từ khóa địa phương |
| **1-3 tháng** | Xếp hạng tốt với "taxi châu đức" |
| **3-6 tháng** | Top 3 Google Maps (nếu có GMB tốt) |

---

## 🎯 Checklist tổng hợp

### Deploy & Domain
- [ ] Deploy website lên hosting (Vercel/Netlify)
- [ ] Mua và kết nối domain
- [ ] Cài SSL certificate (HTTPS)

### Thay đổi code
- [ ] Thay domain trong tất cả file
- [ ] Thêm Google verification code
- [ ] Upload hình OG image
- [ ] Tạo favicon

### Google Services
- [ ] Submit Google Search Console
- [ ] Submit sitemap
- [ ] Request indexing
- [ ] Tạo Google My Business
- [ ] Xác thực GMB

### Marketing
- [ ] Đăng ký directories
- [ ] Đăng bài Facebook/Zalo
- [ ] Nhờ khách review GMB
- [ ] Cài Google Analytics

---

## 💡 Tips quan trọng

1. **Domain tên miền**: Nên có từ khóa như `taxichauduc.com`
2. **HTTPS bắt buộc**: Google ưu tiên site có SSL
3. **Mobile-first**: 80% khách tìm taxi qua điện thoại
4. **Tốc độ loading**: Nên < 3 giây
5. **Google My Business**: Quan trọng nhất cho local SEO!
6. **Review 5 sao**: Càng nhiều review tốt, càng xếp hạng cao

---

## 🆘 Hỗ trợ

Nếu cần hỗ trợ thêm về SEO, liên hệ qua Issues trên GitHub.

**Chúc bạn thành công!** 🚀🎉
