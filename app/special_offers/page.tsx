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

const images: Map<string, string[]> = new Map([
  [OFFERS_TYPE.BED, ["/images/offers_bed.jpg", "/images/twin_bed.jpg", "/images/two_bed.jpg"]],
  [OFFERS_TYPE.TERRACE, ["/images/terrace_night.jpg", "/images/terrace_a_night_2.jpg", "/images/terrace_b_sunrise.jpg", "/images/terrace_a_morning.jpg", "/images/terrace_a_2.jpg", "/images/terrace_view.jpg"]],
  [OFFERS_TYPE.CAFETERIA, ["/images/offers_cafe.jpg", "/images/offers_cafe_2.jpg", "/images/offers_cafe_3.jpg", "/images/offers_cafe_4.jpg"]],
  [OFFERS_TYPE.BATH, ["/images/offers_bath.jpg", "/images/royal_b_bath.jpg", "/images/bath3.jpg", "/images/bath4.jpg"]],
  [OFFERS_TYPE.AMENITIES, ["/images/amenity_a.jpg", "/images/offers_shampoo.jpg"]],
  [OFFERS_TYPE.ROOM_ITEMS, ["/images/coffee_pot.jpg", "/images/towel.jpg", "/images/gown.jpg", "/images/tv.jpg"]],
]);


const tabList = [
  OFFERS_TYPE.BED,
  OFFERS_TYPE.TERRACE,
  OFFERS_TYPE.BATH,
  OFFERS_TYPE.CAFETERIA,
  OFFERS_TYPE.AMENITIES,
  OFFERS_TYPE.ROOM_ITEMS,
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

  const currentImageList = useMemo(() => {
    return images.get(selectedOffer) ?? []
  }, [selectedOffer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageList]);

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

  useEffect(() => {
    if (currentImageIndex !== 0) {
      setCurrentImageIndex(0);
    }
  }, [selectedOffer])

  return (
    <div className="relative">
      <div className="slideshow-container relative">
        <div className="relative w-full h-full">
          <Image
            src={currentImageList[currentImageIndex]}
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
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-serif mb-2">
              Special Offers
            </h2>

            <p className="text-base sm:text-lg lg:text-xl font-serif">
              {selectedOffer}
            </p>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {currentImageList.map((image, index) => (
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
          {selectedOffer === OFFERS_TYPE.TERRACE && <Terrace />}
          {selectedOffer === OFFERS_TYPE.BATH && <Bath imgList={currentImageList} />}
          {selectedOffer === OFFERS_TYPE.CAFETERIA && <Cafeteria />}
          {selectedOffer === OFFERS_TYPE.AMENITIES && <Amenity />}
          {selectedOffer === OFFERS_TYPE.ROOM_ITEMS && <RoomItem />}
        </div>
      </section>
    </div>
  );
};

export default SpecialOffers;
