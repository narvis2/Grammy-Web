"use client";

import TabLayout from "@/components/common/tab/TabLayout";
import WayToComeContainer from "@/components/home/way/WayToComeContainer";
import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import React, { useState, useEffect, useMemo } from "react";
import { PROLOGUE_TYPE } from "@/data/model/prologue/enum";
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
import { motion } from "framer-motion";
import PageHero from "@/components/common/hero/PageHero";

const heroImages = [
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

  const [selectedPrologue, setSelectedPrologue] = useState<PROLOGUE_TYPE>(
    PROLOGUE_TYPE.INTRODUCTION
  );

  const galleryImage = useMemo<CarouselImageModel[]>(() => {
    return offers.map((item) => ({
      src: item.image,
      label: item.type,
    }));
  }, [offers]);

  const handleTabClick = (prologueType: PROLOGUE_TYPE) => {
    setSelectedPrologue(prologueType);
  };

  const { hotelInfo } = useHotelInfo();

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
      <PageHero
        images={heroImages}
        subtitle="Grami Hotel · Prologue"
        title="PROLOGUE"
        description="포항 구룡포, 그라미 호텔을 소개합니다"
      />

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
