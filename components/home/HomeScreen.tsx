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
import { Grammy } from "@/data/api/endpoint/constants";
import { useSpecialEventList } from "@/data/hooks";
import { staticImageUrl } from "@/data/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselHeader from "./carousel/CarouselHeader";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
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

  const {data: specialEvent} = useSpecialEventList();

  const roomType = queryClient.getQueryData([Grammy.ROOM_TYPE]) as
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

  const specialEventList = useMemo<SpecialEventResponse[]>(() => {
    if (!specialEvent) return [];

    const list = specialEvent.data ?? [];
    if (specialEvent.success && list.length > 0) {
      return list.filter((event) => 
        event.contents.some((content) => findVideoUrlList(content.contentUrl))
      );
    }

    return [];
  }, [specialEvent]);

  const galleryImage = useMemo<CarouselImageModel[]>(() => {
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
      {/* Gallery */}
      <CarouselContainer images={galleryImage} />
      {/* Special Event */}
      {specialEventList.length > 0 && (
        <HomeEventAdapter specialEventList={specialEventList} />
      )}
      {/* RoomType */}
      <RoomTypeContainer roomTypeList={roomTypeList} />
      {/* 오시는 길 */}
      <WayToComeContainer hotelInfo={hotelInfo} />
    </div>
  );
};

export default HomeScreen;
