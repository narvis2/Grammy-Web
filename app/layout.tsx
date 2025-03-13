import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextLayout, NextProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "그라미호텔",
  description: "포항, 포항호텔, 포항숙소, 그라미호텔, 포항 남구호텔, 풀빌라, 테라스, 오션뷰, 마운틴뷰, 구룡포 해수욕장, 포항 구룡포 과메기문화관, 구룡포항, 구룡포시장",
  icons: {
    icon: '/grami_icon.png',
  },
  keywords: [
    '포항',
    '포항호텔',
    '포항숙소',
    '그라미호텔',
    '포항 남구호텔',
    '풀빌라',
    '테라스',
    '오션뷰',
    '마운틴뷰',
    '구룡포 해수욕장',
    '포항 구룡포 과메기문화관',
    '구룡포항',
    '구룡포시장',
    '일출'
  ],
  verification: {
    google: 'xXx3IWwiMA0Fx9tekBLB2C9PNdZTu9f1w1bU_ygV6nU',
    other: {
      'naver-site-verification': '00810c0a9432a58a26e3dc58db486ce13634b299',
    },
  },
  openGraph: {
    type: 'website',
    title: '그라미호텔',
    description:
      '포항, 포항호텔, 포항숙소, 그라미호텔, 포항 남구호텔, 풀빌라, 테라스, 오션뷰, 마운틴뷰, 구룡포 해수욕장, 구룡포시장, 일출',
    url: 'https://www.gramihotel.co.kr',
    images: [
      {
        url: 'https://storage.googleapis.com/grammy_static/e608212b-89b7-4fd1-bc10-a97766ac0cb6.jpg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.gramihotel.co.kr',
  },
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
