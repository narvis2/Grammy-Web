import { Metadata } from "next";

export const metadata: Metadata = {
  title: "예약하기",
  description:
    "그라미호텔 객실 예약. 포항 구룡포 오션뷰 호텔의 객실을 예약하세요. 스탠다드, 디럭스, 스위트 객실 제공.",
  openGraph: {
    title: "예약하기 | 그라미호텔",
    description:
      "그라미호텔 객실을 예약하세요. 포항 구룡포 최고의 오션뷰 호텔.",
    url: "https://www.gramihotel.co.kr/reservation",
  },
  alternates: {
    canonical: "https://www.gramihotel.co.kr/reservation",
  },
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
