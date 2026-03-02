'use client';

import Image from 'next/image';
import { Phone, Clock, Shield, DollarSign, Car, MapPin, Plane, Building2, MessageCircle, Mail } from 'lucide-react';

// ===== THAY ĐỔI THÔNG TIN TẠI ĐÂY =====
const DATA = {
  name: "Taxi Châu Đức giá rẻ",
  phone: "0357572796",
  phoneDisplay: "035.757.2796",
  zalo: "0357572796",
  facebook: "https://www.facebook.com/ut.thanh.374689",
  area: "Phục vụ 24/7 tại Châu Đức, Kim Long, Ngãi Giao, Bà Rịa, Xuyên Mộc, Bà Rịa - Vũng Tàu",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Taxi Châu Đức logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-2xl md:text-3xl font-black text-yellow-400">
              {DATA.name}
            </h1>
          </div>
          <a
            href={`tel:${DATA.phone}`}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Gọi ngay
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 text-center bg-gradient-to-b from-yellow-50 via-white to-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-yellow-500 mb-6 drop-shadow-lg leading-tight">
              Dịch Vụ Taxi<br />Giá Tốt Nhất
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              {DATA.area}
            </p>
            <p className="text-lg text-gray-600 mb-10">
              Xe 4-7 chỗ sạch sẽ • Tài xế chuyên nghiệp • An toàn tuyệt đối
            </p>

            {/* CTA Button - Cực lớn */}
            <a
              href={`tel:${DATA.phone}`}
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-3xl md:text-5xl font-black py-8 px-12 rounded-3xl shadow-[0_15px_35px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 active:scale-95 animate-pulse"
            >
              <span className="flex items-center gap-4 justify-center">
                <Phone className="w-12 h-12 md:w-16 md:h-16" />
                {DATA.phoneDisplay}
              </span>
            </a>
          </div>

          {/* Feature Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <DollarSign className="w-12 h-12" />,
                title: "Giá Rẻ Nhất",
                desc: "Cam kết giá tốt nhất khu vực, minh bạch không phụ thu."
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Nhanh Chóng",
                desc: "Có mặt sau 5-10 phút gọi, sẵn sàng phục vụ 24/24."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Uy Tín",
                desc: "Xe đời mới sạch sẽ, tài xế lái xe an toàn, nhiệt tình."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-lg border-2 border-yellow-100 hover:border-yellow-300 transition-all hover:shadow-xl group">
                <div className="text-yellow-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-yellow-400">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Đa dạng dịch vụ, đáp ứng mọi nhu cầu di chuyển của bạn
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: <Plane className="w-10 h-10" />, title: "Đưa Đón Sân Bay", desc: "Nội Bài, Tân Sơn Nhất, sân bay quốc tế" },
              { icon: <MapPin className="w-10 h-10" />, title: "Đi Tỉnh", desc: "Vũng Tàu, Đà Lạt, các tỉnh lân cận" },
              { icon: <Building2 className="w-10 h-10" />, title: "Xe Hợp Đồng", desc: "Thuê xe theo tháng, theo ngày" },
              { icon: <Car className="w-10 h-10" />, title: "Taxi Nội Thành", desc: "Di chuyển nhanh trong thành phố" }
            ].map((service, i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all group border border-gray-700 hover:border-yellow-400">
                <div className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Cam Kết Của Chúng Tôi
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Sự hài lòng của bạn là ưu tiên hàng đầu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "💰 Giá Cả Hợp Lý", desc: "Bảng giá minh bạch, không chặt chém, không phụ thu bất hợp lý" },
              { title: "🚗 Xe Chất Lượng", desc: "Xe đời mới, máy lạnh mát, nội thất sạch sẽ, không mùi khó chịu" },
              { title: "👨‍✈️ Tài Xế Chuyên Nghiệp", desc: "Lái xe an toàn, nhiệt tình, am hiểu địa phương" },
              { title: "⚡ Nhanh Chóng", desc: "Có mặt kịp thời, đúng hẹn, không để bạn chờ đợi" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md border-l-4 border-yellow-400 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-6">
              Gọi ngay để nhận ưu đãi tốt nhất!
            </p>
            <a
              href={`tel:${DATA.phone}`}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-2xl md:text-3xl font-black py-6 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-8 h-8" />
                {DATA.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Khu Vực Phục Vụ
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Chúng tôi có mặt khắp các khu vực tại Bà Rịa - Vũng Tàu
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <MapPin className="w-5 h-5" />, name: "Châu Đức" },
                { icon: <MapPin className="w-5 h-5" />, name: "Kim Long" },
                { icon: <MapPin className="w-5 h-5" />, name: "Ngãi Giao" },
                { icon: <MapPin className="w-5 h-5" />, name: "Xã Bang" },
                { icon: <MapPin className="w-5 h-5" />, name: "Cù Bị" },
                { icon: <MapPin className="w-5 h-5" />, name: "Bà Rịa" },
                { icon: <MapPin className="w-5 h-5" />, name: "Xuyên Mộc" },
                { icon: <MapPin className="w-5 h-5" />, name: "Xuân Sơn" },
                { icon: <MapPin className="w-5 h-5" />, name: "Bàu Chinh" },
                { icon: <MapPin className="w-5 h-5" />, name: "Làng Lớn" },
                { icon: <MapPin className="w-5 h-5" />, name: "Sóng Xoài 3" },
                { icon: <MapPin className="w-5 h-5" />, name: "Các khu vực lân cận" },
              ].map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-white rounded-lg border border-yellow-100 hover:border-yellow-300 hover:shadow-md transition-all group"
                >
                  <div className="text-yellow-500 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{area.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
                Gọi Ngay - Có Xe Liền!
              </h3>
              <p className="text-lg text-gray-900 mb-6">
                Dù bạn đang ở đâu trong khu vực, chúng tôi sẽ đến ngay
              </p>
              <a
                href={`tel:${DATA.phone}`}
                className="inline-block bg-black hover:bg-gray-900 text-yellow-400 text-2xl font-black py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-7 h-7" />
                  {DATA.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Zalo Button */}
        <a
          href={`https://zalo.me/${DATA.zalo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Chat qua Zalo"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Facebook Messenger Button */}
        <a
          href={DATA.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Chat qua Facebook Messenger"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.45 5.513 3.737 7.153V22l4.332-2.38c.636.176 1.302.27 1.931.27 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1.062 11.758l-2.437-2.6-4.75 2.6 5.219-5.542 2.5 2.6 4.688-2.6-5.22 5.542z" />
          </svg>
        </a>

        {/* SMS Button - Mobile Only */}
        <a
          href={`sms:${DATA.phone}`}
          className="md:hidden w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Gửi tin nhắn SMS"
        >
          <Mail className="w-7 h-7" />
        </a>

        {/* Main Call Button - Animated */}
        <a
          href={`tel:${DATA.phone}`}
          className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] animate-bounce hover:scale-110 transition-all"
          aria-label="Gọi điện thoại"
        >
          <Phone className="w-9 h-9" />
        </a>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-black text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-2">© 2026 {DATA.name}</p>
          <p className="text-sm">Phục vụ tận tâm • An toàn trên mọi nẻo đường</p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href={`tel:${DATA.phone}`} className="hover:text-yellow-400 transition-colors">
              Hotline: {DATA.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
