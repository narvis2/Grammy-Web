"use client";

import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { BaseResponse } from "@/data/model/base";
import { CarouselImageModel } from "@/data/model/image/types";
import { RoomTypeResponse } from "@/data/model/room";
import { useOfferStore } from "@/data/store/useOfferStore";
import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import HomeImageBgContainer from "./bg/HomeImageBgContainer";
import CarouselContainer from "./carousel/CarouselContainer";
import RoomTypeContainer from "./roomtype/RoomTypeContainer";
import WayToComeContainer from "./way/WayToComeContainer";
import { AuthModel } from "@/data/model/auth/types";
import { useSetAuthModelState } from "@/data/store/useAuthStore";

const images = [
  { src: "/images/Main1.jpg", label: "GRAMI HOTEL" },
  { src: "/images/main2.jpg", label: "GRAMI WELCOME" },
  { src: "/images/main3.jpg", label: "MOUNTAIN VIEW" },
  { src: "/images/main4.jpg", label: "OCEAN VIEW" },
  { src: "/images/Main1.jpg", label: "HEALING TIME" },
];

type HomeScreenProps = {
  auth: AuthModel;
};

const HomeScreen = ({
  auth: { accessToken, refreshToken },
}: HomeScreenProps) => {
  const queryClient = useQueryClient();

  const setAuth = useSetAuthModelState();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const { hotelInfo } = useHotelInfo();
  const { offers } = useOfferStore();

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

  const offersImage = useMemo<CarouselImageModel[]>(() => {
    return offers.map((item) => {
      return {
        src: item.image,
        label: item.type,
      };
    });
  }, [offers]);

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    !showText && setShowText(true);
  };

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

  useEffect(() => {
    if (accessToken && refreshToken) {
      setAuth({ accessToken: accessToken, refreshToken: refreshToken });
    }
  }, [accessToken, refreshToken]);

  return (
    <div className="relative">
      <HomeImageBgContainer
        showText={showText}
        currentImageIndex={currentImageIndex}
        images={images}
        onIndicatorClick={handleSlideButtonClick}
      />
      <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row justify-center md:space-x-2 space-y-2 md:space-y-0 p-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleSlideButtonClick(index)}
            className="h-8 w-[70px] md:w-[80px] text-xs md:text-sm text-white bg-black bg-opacity-50 rounded-md cursor-pointer"
          >
            {image.label}
          </button>
        ))}
      </div>
      {/* Offers */}
      <CarouselContainer images={offersImage} />
      {/* RoomType */}
      <RoomTypeContainer roomTypeList={roomTypeList} />
      {/* 오시는 길 */}
      <WayToComeContainer hotelInfo={hotelInfo} />
    </div>
  );
};

export default HomeScreen;
