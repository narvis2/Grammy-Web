"use client";

import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { CarouselImageModel } from "@/data/model/image/types";
import { RoomTypeResponse } from "@/data/model/room";
import { useOfferStore } from "@/data/store/useOfferStore";
import { useEffect, useMemo, useState } from "react";
import HomeImageBgContainer from "./bg/HomeImageBgContainer";
import CarouselContainer from "./carousel/CarouselContainer";
import RoomTypeContainer from "./roomtype/RoomTypeContainer";
import WayToComeContainer from "./way/WayToComeContainer";
import { useRoomTypeList, useSpecialEventList } from "@/data/hooks";
import { SpecialEventResponse } from "@/data/model/event/types";
import HomeEventAdapter from "./event/HomeEventAdapter";
import { findVideoUrlList } from "@/data/utils/utils";

const images = [
  { src: "/images/terrace_b_sunrise.jpg", label: "GRAMI HOTEL" },
  { src: "/images/lobby_a.jpg", label: "WELCOME" },
  { src: "/images/main2.jpg", label: "OCEAN VIEW" },
  { src: "/images/mountain_rainbow.jpg", label: "MOUNTAIN VIEW" },
  { src: "/images/terrace_a_morning.jpg", label: "TERRACE VIEW" },
];

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const { hotelInfo } = useHotelInfo();
  const { offers } = useOfferStore();

  const { data: specialEventList } = useSpecialEventList();
  const { data: roomTypeList } = useRoomTypeList();

  const filteredSpecialEventList = useMemo<SpecialEventResponse[]>(() => {
    if (!specialEventList || specialEventList.length === 0) return [];
    return specialEventList.filter((event) =>
      event.contents.some((content) => findVideoUrlList(content.contentUrl))
    );
  }, [specialEventList]);

  const galleryImage = useMemo<CarouselImageModel[]>(() => {
    return offers.map((item) => ({
      src: item.image,
      label: item.type,
    }));
  }, [offers]);

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    !showText && setShowText(true);
  };

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 800);
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="relative">
      <HomeImageBgContainer
        showText={showText}
        currentImageIndex={currentImageIndex}
        images={images}
        onIndicatorClick={handleSlideButtonClick}
      />
      {/* Gallery */}
      <CarouselContainer images={galleryImage} />
      {/* Special Event */}
      {filteredSpecialEventList.length > 0 && (
        <HomeEventAdapter specialEventList={filteredSpecialEventList} />
      )}
      {/* RoomType */}
      <RoomTypeContainer roomTypeList={roomTypeList ?? []} />
      {/* 오시는 길 */}
      <WayToComeContainer hotelInfo={hotelInfo} />
    </div>
  );
};

export default HomeScreen;
