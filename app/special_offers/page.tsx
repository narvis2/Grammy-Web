"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { OFFER_TYPE } from "@/data/model/offer/enum";
import OfferIcon from "@/components/offers/OfferIcon";
import { useBedTypeList } from "@/data/hooks";
import { BedModel } from "@/data/model/bed/types";
import OfferBedAdapter from "@/components/offers/adapter/OfferBedAdapter";
import OfferServiceAdapter from "@/components/offers/adapter/OfferServiceAdapter";
import { useOfferStore } from "@/data/store/useOfferStore";
import { useSearchParams } from "next/navigation";
import TabLayout from "@/components/common/tab/TabLayout";

const images = [
  { src: "/images/room1.jpg" },
  { src: "/images/room2.jpg" },
  { src: "/images/room3.jpg" },
];

const SpecialOffers = () => {
  const params = useSearchParams();

  const { offers, offerService: serviceList } = useOfferStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [showText, setShowText] = useState(false);

  const [selectedOffer, setSelectedOffer] = useState<OFFER_TYPE>(
    OFFER_TYPE.BED
  );

  const { data: bedType } = useBedTypeList();

  const bedModelList = useMemo<BedModel[]>(() => {
    if (!bedType || !bedType.success) return [];

    const list = bedType.data;
    if (typeof list !== "undefined" && list.length > 0) {
      return list.map<BedModel>((item) => {
        return {
          bedType: item,
          img: "/images/room1.jpg",
          description: "",
        };
      });
    }

    return [];
  }, [bedType]);

  const tabList = useMemo(() => {
    return offers.map((item) => item.type);
  }, [offers]);

  const offersInfo = useMemo(() => {
    return offers.find((item) => item.type === selectedOffer);
  }, [selectedOffer]);

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowText(true);
  };

  const handleTabClick = (offerType: OFFER_TYPE) => {
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
      setSelectedOffer(type as OFFER_TYPE);
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
          tabList={tabList}
          currentTab={selectedOffer}
          onTabClick={(type) => {
            handleTabClick(type as OFFER_TYPE);
          }}
        />

        {!!offersInfo && <OfferIcon offers={offersInfo} />}

        {!!offersInfo &&
          (selectedOffer === OFFER_TYPE.BED ? (
            <OfferBedAdapter showText={showText} bedModelList={bedModelList} />
          ) : selectedOffer === OFFER_TYPE.SERVICE ? (
            <OfferServiceAdapter serviceList={serviceList} />
          ) : (
            <div className="flex justify-center mt-8 mb-12">
              <Image
                src={offersInfo.image}
                alt={offersInfo.type}
                width={400}
                height={400}
                className={`object-cover h-96 ${
                  showText ? "fade-in" : "fade-out"
                }`}
              />
            </div>
          ))}
      </section>
    </div>
  );
};

export default SpecialOffers;
