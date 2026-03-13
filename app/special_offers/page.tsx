"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { OFFERS_TYPE } from "@/data/model/offers/enum";
import { useSearchParams } from "next/navigation";
import TabLayout from "@/components/common/tab/TabLayout";
import { RoutePath } from "@/data/model/menu/enum";
import Bed from "@/components/special_offers/Bed";
import Amenity from "@/components/special_offers/Amenity";
import Bath from "@/components/special_offers/Bath";
import Cafeteria from "@/components/special_offers/Cafeteria";
import RoomItem from "@/components/special_offers/RoomItem";
import Terrace from "@/components/special_offers/Terrace";
import { useOfferStore } from "@/data/store/useOfferStore";
import { CarouselImageModel } from "@/data/model/image/types";
import CarouselContainer from "@/components/home/carousel/CarouselContainer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useGetAnalyticsTag from "@/data/hooks/analytics/useGetAnalyticsTag";
import { AnimatePresence, motion } from "framer-motion";

const images: Map<string, string[]> = new Map([
  [
    OFFERS_TYPE.BED,
    ["/images/offers_bed.jpg", "/images/twin_bed.jpg", "/images/two_bed.jpg"],
  ],
  [
    OFFERS_TYPE.TERRACE,
    [
      "/images/terrace_night.jpg",
      "/images/terrace_a_night_2.jpg",
      "/images/terrace_b_sunrise.jpg",
      "/images/terrace_a_morning.jpg",
      "/images/terrace_a_2.jpg",
      "/images/terrace_view.jpg",
    ],
  ],
  [
    OFFERS_TYPE.CAFETERIA,
    [
      "/images/offers_cafe.jpg",
      "/images/cafeteria_5.jpg",
      "/images/cafeteria_6.jpg",
      "/images/cafeteria_7.jpg",
      "/images/offers_cafe_2.jpg",
      "/images/offers_cafe_3.jpg",
      "/images/offers_cafe_4.jpg",
    ],
  ],
  [
    OFFERS_TYPE.BATH,
    [
      "/images/offers_bath.jpg",
      "/images/royal_b_bath.jpg",
      "/images/bath3.jpg",
      "/images/bath4.jpg",
    ],
  ],
  [
    OFFERS_TYPE.AMENITIES,
    ["/images/amenity_a.jpg", "/images/offers_shampoo.jpg"],
  ],
  [
    OFFERS_TYPE.ROOM_ITEMS,
    [
      "/images/coffee_pot.jpg",
      "/images/towel.jpg",
      "/images/gown.jpg",
      "/images/tv.jpg",
    ],
  ],
]);

const tabList = [
  OFFERS_TYPE.CAFETERIA,
  OFFERS_TYPE.TERRACE,
  OFFERS_TYPE.BATH,
  OFFERS_TYPE.BED,
  OFFERS_TYPE.AMENITIES,
  OFFERS_TYPE.ROOM_ITEMS,
];

const SpecialOffers = () => {
  const params = useSearchParams();
  const { offers } = useOfferStore();
  useGetAnalyticsTag();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const [selectedOffer, setSelectedOffer] = useState<OFFERS_TYPE>(
    OFFERS_TYPE.BED
  );

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowText(true);
  };

  const handleTabClick = (offerType: OFFERS_TYPE) => {
    setShowText(false);
    setTimeout(() => {
      setSelectedOffer(offerType);
      setShowText(true);
    }, 200);
  };

  const galleryImage = useMemo<CarouselImageModel[]>(() => {
    return offers.map((item) => ({
      src: item.image,
      label: item.type,
    }));
  }, [offers]);

  const currentImageList = useMemo(() => {
    return images.get(selectedOffer) ?? [];
  }, [selectedOffer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % currentImageList.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageList]);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 800);
    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    const type = params.get("type");
    if (type) {
      setSelectedOffer(type as OFFERS_TYPE);
    }
  }, [params]);

  useEffect(() => {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex(0);
    }
  }, [selectedOffer]);

  useEffect(() => {
    const type = params.get("type");
    const matchedPrologue = Object.values(OFFERS_TYPE).find(
      (value) => value === type
    );
    if (matchedPrologue) {
      setSelectedOffer(matchedPrologue);
    }
  }, [params]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="slideshow-container relative">
        <AnimatePresence mode="sync">
          <motion.div
            key={`${selectedOffer}-${currentImageIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {currentImageList[currentImageIndex] && (
              <Image
                src={currentImageList[currentImageIndex]}
                alt={`그라미호텔 ${selectedOffer} 시설 이미지`}
                fill
                className="object-cover"
                priority
              />
            )}
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
              Grami Hotel · Special Offers
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light tracking-wide mb-4">
              Special Offers
            </h1>
            <p className="text-base sm:text-lg font-light tracking-wider font-body opacity-80">
              {selectedOffer}
            </p>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {currentImageList.map((_, index) => (
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
          title="SPECIAL OFFERS"
          href={RoutePath.SPECIAL_OFFERS}
          tabList={tabList}
          currentTab={selectedOffer}
          onTabClick={(type) => handleTabClick(type as OFFERS_TYPE)}
        />

        <motion.div
          key={selectedOffer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {selectedOffer === OFFERS_TYPE.BED && <Bed />}
          {selectedOffer === OFFERS_TYPE.TERRACE && <Terrace />}
          {selectedOffer === OFFERS_TYPE.BATH && (
            <Bath imgList={currentImageList} />
          )}
          {selectedOffer === OFFERS_TYPE.CAFETERIA && <Cafeteria />}
          {selectedOffer === OFFERS_TYPE.AMENITIES && <Amenity />}
          {selectedOffer === OFFERS_TYPE.ROOM_ITEMS && <RoomItem />}
        </motion.div>
      </section>

      <CarouselContainer images={galleryImage} />
    </div>
  );
};

export default SpecialOffers;
