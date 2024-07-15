"use client";

import React, { useState, useEffect, useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRoomTypeList } from "@/data/hooks";
import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";

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

      <section className="pt-12 pb-20 text-4xl">
        <div className="inner-con flex items-center justify-center">
          <div className="text-center font-semibold font-serif text-4xl">
            <span>Offers</span>
            <h5 className="text-sm">
              그라미 호텔에서 준비한 특별함을 느껴보세요
            </h5>
          </div>
        </div>

        <div className="swiper-container mt-4 ml-10 mr-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={4}
            navigation
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

      <section className="pt-12 pb-20 bg-gray-200 ">
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
                return <RoomTypeItem roomType={item} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
