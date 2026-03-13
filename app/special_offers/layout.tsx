import { Metadata } from "next";

export const metadata: Metadata = {
  title: "부대시설 안내",
  description:
    "그라미호텔 부대시설 안내. 카페테리아, 테라스, 욕실, 침대, 어메니티 등 특별한 호텔 시설을 확인하세요.",
  openGraph: {
    title: "부대시설 안내 | 그라미호텔",
    description:
      "그라미호텔의 특별한 부대시설을 만나보세요. 카페테리아, 오션뷰 테라스, 프리미엄 어메니티.",
    url: "https://www.gramihotel.co.kr/special_offers",
  },
  alternates: {
    canonical: "https://www.gramihotel.co.kr/special_offers",
  },
};

export default function SpecialOffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
