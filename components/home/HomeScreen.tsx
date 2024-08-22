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
  { src: "/images/main1.jpg", label: "GRAMMY HOTEL" },
  { src: "/images/main2.jpg", label: "GRAMMY WELCOME" },
  { src: "/images/main3.jpg", label: "INDIVIDUAL SWIMMING POOL" },
  { src: "/images/main4.jpg", label: "HINOKI BATHTUB" },
  { src: "/images/main1.jpg", label: "ENOUGHPRESSO CAFE" },
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
      {/* 메인 배너 이미지 */}
      <HomeImageBgContainer
        showText={showText}
        currentImageIndex={currentImageIndex}
        images={images}
        onIndicatorClick={handleSlideButtonClick}
      />
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
