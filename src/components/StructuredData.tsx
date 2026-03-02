import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://chauduc-taxi.vercel.app', // ⚠️ THAY ĐỔI DOMAIN
    name: 'Taxi Châu Đức giá rẻ',
    description: 'Dịch vụ taxi giá rẻ, uy tín tại Châu Đức và các khu vực lân cận tại Bà Rịa - Vũng Tàu',
    url: 'https://chauduc-taxi.vercel.app', // ⚠️ THAY ĐỔI DOMAIN
    telephone: '+84357572796',
    priceRange: '$$',
    image: 'https://chauduc-taxi.vercel.app/og-image.jpg', // ⚠️ THAY ĐỔI DOMAIN
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Châu Đức',
      addressRegion: 'Bà Rịa - Vũng Tàu',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.5365, // ⚠️ Thêm tọa độ GPS thật của địa chỉ
      longitude: 107.2457,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Châu Đức',
      },
      {
        '@type': 'City',
        name: 'Kim Long',
      },
      {
        '@type': 'City',
        name: 'Ngãi Giao',
      },
      {
        '@type': 'City',
        name: 'Bà Rịa',
      },
      {
        '@type': 'City',
        name: 'Xuyên Mộc',
      },
    ],
    sameAs: [
      'https://www.facebook.com/ut.thanh.374689',
      'https://zalo.me/0357572796',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dịch vụ Taxi',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taxi sân bay',
            description: 'Dịch vụ đưa đón sân bay',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taxi đi tỉnh',
            description: 'Dịch vụ taxi liên tỉnh',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Xe hợp đồng',
            description: 'Thuê xe theo ngày, theo tháng',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taxi nội thành',
            description: 'Di chuyển trong thành phố',
          },
        },
      ],
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
