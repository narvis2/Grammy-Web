"use client";

import TabLayout from "@/components/common/tab/TabLayout";
import WayToComeContainer from "@/components/home/way/WayToComeContainer";
import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import React, { useState, useEffect, useMemo } from "react";
import { usePrologueStore } from "@/data/store/usePrologueStore";
import { PROLOGUE_TYPE } from "@/data/model/prologue/enum";
import Image from "next/image";
import Introduction from "@/components/prologue/Introduction";
import TableView from "@/components/prologue/TableView";

const images = [
  { src: "/images/room1.jpg" },
  { src: "/images/room2.jpg" },
  { src: "/images/room3.jpg" },
];

const Prologue = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const { prologues } = usePrologueStore();

  const [selectedPrologue, setSelectedPrologue] = useState<PROLOGUE_TYPE>(
    PROLOGUE_TYPE.INTRODUCTION
  );

  const tabList = useMemo(() => {
    return prologues.map((item) => item.type);
  }, [prologues]);

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
              GRAMMY HOTEL
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

      <section className="mt-4">
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
        </div>
      </section>
    </div>
  );
};

export default Prologue;
