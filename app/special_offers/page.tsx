"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import { motion } from "framer-motion";
import PageHero from "@/components/common/hero/PageHero";

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

  const [selectedOffer, setSelectedOffer] = useState<OFFERS_TYPE>(
    OFFERS_TYPE.BED
  );

  const handleTabClick = (offerType: OFFERS_TYPE) => {
    setSelectedOffer(offerType);
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

  const heroImages = useMemo(() => {
    return currentImageList.map((src) => ({
      src,
      alt: `그라미호텔 ${selectedOffer} 시설 이미지`,
    }));
  }, [currentImageList, selectedOffer]);

  useEffect(() => {
    const type = params.get("type");
    if (type) {
      setSelectedOffer(type as OFFERS_TYPE);
    }
  }, [params]);

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
      {heroImages.length > 0 && (
        <PageHero
          key={selectedOffer}
          images={heroImages}
          subtitle="Grami Hotel · Special Offers"
          title="SPECIAL OFFERS"
          description={selectedOffer}
        />
      )}

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
