"use client";

import React, { useState, useEffect, useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRoomTypeList } from "@/data/hooks";
import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";
import useMap from "@/data/hooks/map/useMap";
import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { getFullAddress, phoneFormatter } from "@/data/mapper";

const images = [
  { src: "/images/room1.jpg", label: "GRAMMY HOTEL" },
  { src: "/images/room2.jpg", label: "GRAMMY WELCOME" },
  { src: "/images/room3.jpg", label: "INDIVIDUAL SWIMMING POOL" },
  { src: "/images/room1.jpg", label: "HINOKI BATHTUB" },
  { src: "/images/room2.jpg", label: "ENOUGHPRESSO CAFE" },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const { hotelInfo } = useHotelInfo();
  const naverMap = useMap(hotelInfo);

  const { data: roomType, isFetching } = useRoomTypeList();

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
    setShowText(true);
  };

  return (
    <div className="relative">
      <div className="slideshow-container relative">
        <img
          src={images[currentImageIndex].src}
          alt="Slideshow"
          className="slideshow-image w-full object-cover"
        />
        <div
          className={`absolute bottom-20 flex flex-col items-center text-center text-white transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="bottom-0 text-3xl sm:text-5xl lg:text-8xl font-serif mb-2">
              {images[currentImageIndex].label}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-serif mb-4">
              포항에서 지친 몸을 쉬어주는 호텔
            </p>
            <div className="flex justify-center space-x-2 mt-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideButtonClick(index)}
                  className={`px-4 py-2 rounded focus:outline-none ${
                    currentImageIndex === index
                      ? "text-black bg-white"
                      : "text-white"
                  }`}
                >
                  {image.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="pt-20 pb-20 text-4xl">
        <div className="inner-con flex items-center justify-center">
          <div className="text-center font-semibold font-serif text-4xl">
            <span>Offers</span>
            <h5 className="text-sm">
              그라미 호텔에서 준비한 특별함을 느껴보세요
            </h5>
          </div>
        </div>

        <div className="swiper-container mt-8 ml-10 mr-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={4}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.label}
                  className="swiper-image object-cover h-30 w-30"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="pt-12 pb-20 bg-[#FFFFFF] ">
        <div className="inner-con flex items-center justify-center">
          <div className="text-center font-semibold font-serif text-4xl">
            <span className="block mb-4">객실 유형</span>
            <h5 className="text-sm">그라미 호텔의 특별한 객실을 누려보세요.</h5>
          </div>
        </div>

        <div className="flex items-start justify-center min-h-screen p-8 mt-8">
          {roomTypeList.length > 0 && (
            <div className="container grid grid-cols-1 gap-8  lg:grid-cols-2">
              {roomTypeList.map((item) => {
                return <RoomTypeItem key={item.roomTypeName} roomType={item} />;
              })}
            </div>
          )}
        </div>
      </section>

      <section
        className={`pt-12 pb-20 px-10 bg-[#FcFcFc] flex flex-col justify-center items-center`}
      >
        <h2 className="text-center font-semibold font-serif text-4xl">
          <span className="block mb-4">오시는 길</span>
        </h2>
        <p className="font-semibold font-serif text-sm mb-6">
          그라미 호텔에 오시는 길을 안내해드립니다.
        </p>
        <div
          id="map"
          style={{ height: "400px", borderRadius: 10 }}
          className="w-full lg:w-1/2 mb-4 lg:mb-4"
        ></div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
          <p className="text-lg">{`• 주소 : ${getFullAddress(hotelInfo)}`}</p>
          <p className="text-lg">{`• 연락처 : ${phoneFormatter(
            hotelInfo?.phoneNumber
          )}`}</p>
          {/* <div className="mt-2">
            <p className="text-lg text-gray-400">• 구룡포 시장 도보 1분 이내</p>
            <p className="text-lg text-gray-400">• 구룡포항 도보 2분 이내</p>
            <p className="text-lg text-gray-400">
              • 주소 : 구룡포항공영주차장 도보 5분 이내
            </p>
            <p className="text-lg text-gray-400">
              • 구룡포 해수욕장 자차 5분 이내
            </p>
            <p className="text-lg text-gray-400">• 호미곶 자차 15분 이내</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
