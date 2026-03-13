import { Metadata } from "next";

export const metadata: Metadata = {
  title: "객실 안내",
  description:
    "그라미호텔 객실 안내. 스탠다드, 디럭스, 스위트, 로얄 스위트 등 다양한 오션뷰 객실을 만나보세요. 포항 구룡포 프리미엄 호텔.",
  openGraph: {
    title: "객실 안내 | 그라미호텔",
    description:
      "그라미호텔의 다양한 객실을 확인하세요. 오션뷰, 마운틴뷰, 테라스 객실 등 포항 최고의 숙소.",
    url: "https://www.gramihotel.co.kr/rooms",
  },
  alternates: {
    canonical: "https://www.gramihotel.co.kr/rooms",
  },
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
