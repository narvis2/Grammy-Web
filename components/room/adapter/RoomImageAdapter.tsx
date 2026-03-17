"use client";

import { RoomTypeImageModel } from "@/data/model/room";
import { useMemo } from "react";
import PageHero from "@/components/common/hero/PageHero";

type RoomImageAdapterProps = {
  roomTypeImages: RoomTypeImageModel[];
};

const RoomImageAdapter = ({ roomTypeImages }: RoomImageAdapterProps) => {
  const heroImages = useMemo(
    () =>
      roomTypeImages.map((item) => ({
        src: item.imageUrl,
        alt: `${item.roomType} 객실 이미지`,
      })),
    [roomTypeImages]
  );

  return (
    <PageHero
      images={heroImages}
      subtitle="Grami Hotel · Rooms"
      title="ROOMS"
      description="포항 그라미 호텔의 특별한 객실"
    />
  );
};

export default RoomImageAdapter;
