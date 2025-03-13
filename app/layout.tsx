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
  // 소셜 미디어 공유용
  openGraph: {
    type: 'website', // 소셜 플랫폼에서 웹사이트임을 명확히 명시
    title: '그라미호텔', // 공유할때 제목
    // 공유할때 노출되는 설명
    description: '포항, 포항호텔, 포항숙소, 그라미호텔, 포항 남구호텔, 풀빌라, 테라스, 오션뷰, 마운틴뷰, 구룡포 해수욕장, 구룡포시장, 일출',
    url: 'https://www.gramihotel.co.kr',
    // 공유 시 대표 이미지로 사용될 URL 
    images: [
      {
        url: 'https://storage.googleapis.com/grammy_static/e608212b-89b7-4fd1-bc10-a97766ac0cb6.jpg',
      },
    ],
  },
  // 정규 URL을 명시하여 중복 콘텐츠 문제 방지
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
