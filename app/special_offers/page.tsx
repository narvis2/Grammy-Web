"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { OFFERS_TYPE } from "@/data/model/offers/enum";
import { useSearchParams } from "next/navigation";
import TabLayout from "@/components/common/tab/TabLayout";
import { RoutePath } from "@/data/model/menu/enum";
import Bed from "@/components/special_offers/Bed";
import Amenity from "@/components/special_offers/Amenity";
import Bath from "@/components/special_offers/Bath";
import Breakfast from "@/components/special_offers/Breakfast";
import RoomItem from "@/components/special_offers/RoomItem";
import Service from "@/components/special_offers/Service";

const images = [
  { src: "/images/offers1.jpg" },
  { src: "/images/offers2.jpg" },
  { src: "/images/offers3.jpg" },
];

const tabList = [
  OFFERS_TYPE.BED,
  OFFERS_TYPE.AMENITIES,
  OFFERS_TYPE.BATH,
  OFFERS_TYPE.CAFETERIA,
  OFFERS_TYPE.ROOM_ITEMS,
  OFFERS_TYPE.SERVICE,
];

const SpecialOffers = () => {
  const params = useSearchParams();

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
    if (type) {
      setSelectedOffer(type as OFFERS_TYPE);
    }
  }, [params]);

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
              Special Offers
            </h2>

            <p className="text-base sm:text-lg lg:text-xl font-serif">
              {selectedOffer}
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
          title="SPECIAL OFFERS"
          href={RoutePath.SPECIAL_OFFERS}
          tabList={tabList}
          currentTab={selectedOffer}
          onTabClick={(type) => {
            handleTabClick(type as OFFERS_TYPE);
          }}
        />
        <div className="mt-8">
          {selectedOffer === OFFERS_TYPE.BED && <Bed />}
          {selectedOffer === OFFERS_TYPE.AMENITIES && <Amenity />}
          {selectedOffer === OFFERS_TYPE.BATH && <Bath />}
          {selectedOffer === OFFERS_TYPE.CAFETERIA && <Breakfast />}
          {selectedOffer === OFFERS_TYPE.ROOM_ITEMS && <RoomItem />}
          {selectedOffer === OFFERS_TYPE.SERVICE && <Service />}
        </div>
      </section>
    </div>
  );
};

export default SpecialOffers;
