"use client";

import React, { useState, useEffect, useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRoomTypeList } from "@/data/hooks";
import useMap from "@/data/hooks/map/useMap";
import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import CarouselContainer from "@/components/home/carousel/CarouselContainer";
import RoomTypeContainer from "@/components/home/roomtype/RoomTypeContainer";
import WayToComeContainer from "@/components/home/way/WayToComeContainer";
import HomeImageBgContainer from "@/components/home/bg/HomeImageBgContainer";
import { useQueryClient } from "react-query";
import { BaseResponse } from "@/data/model/base";
import { RoomTypeResponse } from "@/data/model/room";

const images = [
  { src: "/images/room1.jpg", label: "GRAMMY HOTEL" },
  { src: "/images/room2.jpg", label: "GRAMMY WELCOME" },
  { src: "/images/room3.jpg", label: "INDIVIDUAL SWIMMING POOL" },
  { src: "/images/room1.jpg", label: "HINOKI BATHTUB" },
  { src: "/images/room2.jpg", label: "ENOUGHPRESSO CAFE" },
];

const Home = () => {
  const queryClient = useQueryClient();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const { hotelInfo } = useHotelInfo();
  const naverMap = useMap(hotelInfo);

  const roomType = queryClient.getQueryData(["useRoomTypeList"]) as
    | BaseResponse<RoomTypeResponse[]>
    | undefined;

  const roomTypeList = useMemo(() => {
    if (!roomType) return [];

    const list = roomType.data ?? [];
    if (roomType.success && list.length > 0) {
      return list;
    }

    return [];
  }, [roomType]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(textTimer);
  }, []);

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    !showText && setShowText(true);
  };

  return (
    <div className="relative">
      {/* 메인 배너 이미지 */}
      <HomeImageBgContainer
        showText={showText}
        currentImageIndex={currentImageIndex}
        images={images}
        onIndicatorClick={handleSlideButtonClick}
      />
      {/* Offers */}
      <CarouselContainer images={images} />
      {/* RoomType */}
      <RoomTypeContainer roomTypeList={roomTypeList} />
      {/* 오시는 길 */}
      <WayToComeContainer hotelInfo={hotelInfo} />
    </div>
  );
};

export default Home;
