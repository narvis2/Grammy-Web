import { BannerResponse } from "@/data/model/banner/types";

export const bannerData: BannerResponse[] = [
  {
    bannerId: 1,
    title: "그라미 호텔에 오신 것을 환영합니다",
    images: [
      { id: 1, imageUrl: "/images/main2.jpg" },
    ],
    description: "포항 구룡포 최고의 오션뷰 호텔",
    createdAt: "2024-01-01",
  },
];
