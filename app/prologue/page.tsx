"use client";

import TabLayout from "@/components/common/tab/TabLayout";
import WayToComeContainer from "@/components/home/way/WayToComeContainer";
import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import React, { useState, useEffect, useMemo } from "react";
import { PROLOGUE_TYPE } from "@/data/model/prologue/enum";
import Image from "next/image";
import Introduction from "@/components/prologue/Introduction";
import TableView from "@/components/prologue/TableView";
import OtherInfo from "@/components/prologue/OtherInfo";
import CarouselContainer from "@/components/home/carousel/CarouselContainer";
import { useOfferStore } from "@/data/store/useOfferStore";
import { CarouselImageModel } from "@/data/model/image/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSearchParams } from "next/navigation";

const images = [
  { src: "/images/lobby_a.jpg" },
  { src: "/images/nine_f.jpg" },
  { src: "/images/cafe_b.jpg" },
  { src: "/images/terrace_a_2.jpg" },
];

const tabList = [
  PROLOGUE_TYPE.INTRODUCTION,
  PROLOGUE_TYPE.TABLE_VIEW,
  PROLOGUE_TYPE.HOW_TO_COME,
  PROLOGUE_TYPE.OTHER_INFO,
];

const Prologue = () => {
  const params = useSearchParams();
  const { offers } = useOfferStore();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const [selectedPrologue, setSelectedPrologue] = useState<PROLOGUE_TYPE>(
    PROLOGUE_TYPE.INTRODUCTION
  );

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
    setShowText(true);
  };

  const handleTabClick = (prologueType: PROLOGUE_TYPE) => {
    setShowText(false);
    setTimeout(() => {
      setSelectedPrologue(prologueType);
      setShowText(true);
    }, 200);
  };

  const { hotelInfo } = useHotelInfo();

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
    const type = params.get("type");
    const matchedPrologue = Object.values(PROLOGUE_TYPE).find(
      (value) => value === type
    );
    
    if (matchedPrologue) {
      setSelectedPrologue(matchedPrologue);
    }
  }, [params])

  return (
    <div className="relative mb-40">
      <div className="slideshow-container relative">
        <div className="relative w-full h-full">
          <Image
            src={images[currentImageIndex].src}
            alt="Slideshow"
            fill
            className="slideshow-image object-cover"
          />
        </div>
        <div
          className={`absolute bottom-20 inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif mb-2">
              PROLOGUE
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-serif mt-4">
              GRAMI HOTEL
            </p>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideButtonClick(index)}
                  className={`w-4 h-4 rounded-full focus:outline-none ${
                    currentImageIndex === index ? "bg-blue-800" : "bg-blue-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section>
        <TabLayout
          title="PROLOGUE"
          tabList={tabList}
          currentTab={selectedPrologue}
          onTabClick={(type) => {
            handleTabClick(type as PROLOGUE_TYPE);
          }}
        />

        <div className="mt-8">
          {selectedPrologue === PROLOGUE_TYPE.INTRODUCTION && <Introduction />}
          {selectedPrologue === PROLOGUE_TYPE.TABLE_VIEW && <TableView />}
          {selectedPrologue === PROLOGUE_TYPE.HOW_TO_COME && (
            <WayToComeContainer hotelInfo={hotelInfo} />
          )}
          {selectedPrologue === PROLOGUE_TYPE.OTHER_INFO && <OtherInfo />}
        </div>
      </section>

      <CarouselContainer images={galleryImage} />
    </div>
  );
};

export default Prologue;
