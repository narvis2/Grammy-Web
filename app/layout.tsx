import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextLayout, NextProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gramihotel.co.kr"),
  title: {
    default: "그라미호텔 | 포항 구룡포 오션뷰 호텔",
    template: "%s | 그라미호텔",
  },
  description: "포항 구룡포에 위치한 그라미호텔. 오션뷰 객실, 테라스, 풀빌라를 갖춘 프리미엄 숙소. 구룡포 해수욕장 인근, 일출 명소.",
  icons: {
    icon: '/grami_icon.png',
  },
  keywords: [
    '포항호텔',
    '포항숙소',
    '그라미호텔',
    '포항 구룡포 호텔',
    '포항 오션뷰 호텔',
    '포항 풀빌라',
    '포항 테라스 호텔',
    '구룡포 숙소',
    '구룡포 해수욕장 호텔',
    '포항 일출 호텔',
    '포항 남구호텔',
    '마운틴뷰',
    '구룡포항',
    '구룡포시장',
  ],
  verification: {
    google: 'xXx3IWwiMA0Fx9tekBLB2C9PNdZTu9f1w1bU_ygV6nU',
    other: {
      'naver-site-verification': '00810c0a9432a58a26e3dc58db486ce13634b299',
    },
  },
  openGraph: {
    type: 'website',
    siteName: '그라미호텔',
    title: '그라미호텔 | 포항 구룡포 오션뷰 호텔',
    description: '포항 구룡포에 위치한 그라미호텔. 오션뷰 객실, 테라스, 풀빌라를 갖춘 프리미엄 숙소. 구룡포 해수욕장 인근, 일출 명소.',
    url: 'https://www.gramihotel.co.kr',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://storage.googleapis.com/grammy_static/e608212b-89b7-4fd1-bc10-a97766ac0cb6.jpg',
        width: 1200,
        height: 630,
        alt: '포항 그라미호텔 전경 - 오션뷰 프리미엄 호텔',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '그라미호텔 | 포항 구룡포 오션뷰 호텔',
    description: '포항 구룡포에 위치한 그라미호텔. 오션뷰 객실, 테라스, 풀빌라를 갖춘 프리미엄 숙소.',
    images: ['https://storage.googleapis.com/grammy_static/e608212b-89b7-4fd1-bc10-a97766ac0cb6.jpg'],
  },
  alternates: {
    canonical: 'https://www.gramihotel.co.kr',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "그라미호텔",
  description: "포항 구룡포에 위치한 오션뷰 프리미엄 호텔. 테라스, 풀빌라, 카페테리아를 갖춘 최고의 숙소.",
  url: "https://www.gramihotel.co.kr",
  telephone: "054-727-0600",
  email: "az49890@naver.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "경상북도 포항시 남구 호미곶면 대보리 221-4",
    addressLocality: "포항시",
    addressRegion: "경상북도",
    postalCode: "37936",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.0767",
    longitude: "129.3918",
  },
  image: [
    "https://storage.googleapis.com/grammy_static/e608212b-89b7-4fd1-bc10-a97766ac0cb6.jpg",
  ],
  starRating: {
    "@type": "Rating",
    ratingValue: "4",
  },
  checkinTime: "15:00",
  checkoutTime: "11:00",
  priceRange: "₩₩₩",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "오션뷰", value: true },
    { "@type": "LocationFeatureSpecification", name: "테라스", value: true },
    { "@type": "LocationFeatureSpecification", name: "풀빌라", value: true },
    { "@type": "LocationFeatureSpecification", name: "카페테리아", value: true },
    { "@type": "LocationFeatureSpecification", name: "무료 Wi-Fi", value: true },
  ],
  hasMap: "https://map.naver.com/p/entry/place/1511534638",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextProviders>
          <NextLayout>
            {children}
            {modal}
          </NextLayout>
        </NextProviders>
        <div id="common"></div>
        <div id="loading"></div>
      </body>
    </html>
  );
}
