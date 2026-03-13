import { Metadata } from "next";

export const metadata: Metadata = {
  title: "호텔 소개",
  description:
    "그라미호텔 소개. 포항 구룡포에 위치한 프리미엄 오션뷰 호텔. 호텔 시설, 오시는 길, 부대시설 안내.",
  openGraph: {
    title: "호텔 소개 | 그라미호텔",
    description:
      "포항 구룡포 그라미호텔을 소개합니다. 호텔 시설, 오시는 길, 부대시설 정보를 확인하세요.",
    url: "https://www.gramihotel.co.kr/prologue",
  },
  alternates: {
    canonical: "https://www.gramihotel.co.kr/prologue",
  },
};

export default function PrologueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
