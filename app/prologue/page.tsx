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
import useGetAnalyticsTag from "@/data/hooks/analytics/useGetAnalyticsTag";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  { src: "/images/lobby_a.jpg", alt: "그라미호텔 로비 전경" },
  { src: "/images/nine_f.jpg", alt: "그라미호텔 9층 전망" },
  { src: "/images/cafe_b.jpg", alt: "그라미호텔 카페테리아" },
  { src: "/images/terrace_a_2.jpg", alt: "그라미호텔 오션뷰 테라스" },
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
  useGetAnalyticsTag();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const [selectedPrologue, setSelectedPrologue] = useState<PROLOGUE_TYPE>(
    PROLOGUE_TYPE.INTRODUCTION
  );

  const galleryImage = useMemo<CarouselImageModel[]>(() => {
    return offers.map((item) => ({
      src: item.image,
      label: item.type,
    }));
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 800);
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
  }, [params]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="slideshow-container relative">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="hero-overlay absolute inset-0 z-[1]" />

        {/* Content */}
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="w-px h-16 bg-white/50 mx-auto mb-8"
              initial={{ scaleY: 0 }}
              animate={showText ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-xs sm:text-sm tracking-widest-2xl font-light mb-4 uppercase font-body">
              Grami Hotel · Prologue
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light tracking-wide mb-6">
              PROLOGUE
            </h1>
            <p className="text-sm sm:text-base font-light tracking-wider font-body opacity-80">
              포항 구룡포, 그라미 호텔을 소개합니다
            </p>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-12">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideButtonClick(index)}
                  className={`rounded-full transition-all duration-500 ${
                    currentImageIndex === index
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 flex flex-col items-center text-white/60"
            initial={{ opacity: 0 }}
            animate={showText ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-[10px] tracking-widest-2xl uppercase font-body mb-3">
              Scroll
            </span>
            <div className="scroll-indicator">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="opacity-60">
                <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1" />
                <motion.circle
                  cx="8"
                  cy="8"
                  r="2"
                  fill="white"
                  animate={{ cy: [8, 14, 8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Section */}
      <section>
        <TabLayout
          title="PROLOGUE"
          tabList={tabList}
          currentTab={selectedPrologue}
          onTabClick={(type) => handleTabClick(type as PROLOGUE_TYPE)}
        />

        <motion.div
          key={selectedPrologue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {selectedPrologue === PROLOGUE_TYPE.INTRODUCTION && <Introduction />}
          {selectedPrologue === PROLOGUE_TYPE.TABLE_VIEW && <TableView />}
          {selectedPrologue === PROLOGUE_TYPE.HOW_TO_COME && (
            <WayToComeContainer hotelInfo={hotelInfo} />
          )}
          {selectedPrologue === PROLOGUE_TYPE.OTHER_INFO && <OtherInfo />}
        </motion.div>
      </section>

      <CarouselContainer images={galleryImage} />
    </div>
  );
};

export default Prologue;
