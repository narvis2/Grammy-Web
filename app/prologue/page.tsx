"use client";

import TabLayout from "@/components/common/tab/TabLayout";
import WayToComeContainer from "@/components/home/way/WayToComeContainer";
import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import React, { useState, useEffect } from "react";
import { PROLOGUE_TYPE } from "@/data/model/prologue/enum";
import Image from "next/image";
import Introduction from "@/components/prologue/Introduction";
import TableView from "@/components/prologue/TableView";
import OtherInfo from "@/components/prologue/OtherInfo";

const images = [
  { src: "/images/prologue1.jpg" },
  { src: "/images/prologue2.jpg" },
  { src: "/images/prologue3.jpg" },
  { src: "/images/prologue4.jpg" },
];

const tabList = [
  PROLOGUE_TYPE.INTRODUCTION,
  PROLOGUE_TYPE.TABLE_VIEW,
  PROLOGUE_TYPE.HOW_TO_COME,
  PROLOGUE_TYPE.OTHER_INFO,
];

const Prologue = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const [selectedPrologue, setSelectedPrologue] = useState<PROLOGUE_TYPE>(
    PROLOGUE_TYPE.INTRODUCTION
  );

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

  return (
    <div className="relative">
      <div className="slideshow-container relative">
        <Image
          src={images[currentImageIndex].src}
          alt="Slideshow"
          width={600}
          height={600}
          className="slideshow-image w-full object-cover"
        />
        <div
          className={`absolute bottom-20 inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-serif mb-2">
              PROLOGUE
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-serif">
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
    </div>
  );
};

export default Prologue;
