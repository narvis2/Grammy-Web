"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { OfferModel } from "@/data/model/offer/types";
import { OFFER_TYPE } from "@/data/model/offer/enum";
import OfferIcon from "@/components/offers/OfferIcon";
import { useBedTypeList } from "@/data/hooks";
import { BedModel } from "@/data/model/bed/types";
import OfferBedAdapter from "@/components/offers/adapter/OfferBedAdapter";

const images = [
  { src: "/images/room1.jpg", width: 600, height: 600 },
  { src: "/images/room2.jpg", width: 600, height: 600 },
  { src: "/images/room3.jpg", width: 600, height: 600 },
];

const offers: OfferModel[] = [
  {
    type: OFFER_TYPE.BED,
    image: "/images/room1.jpg",
    description: "총 4가지 유형의 침대를 제공해드리고 있습니다.",
  },
  {
    type: OFFER_TYPE.AMENITIES,
    image: "/images/room2.jpg",
    description: "일회용 욕실 어메니티를 제공해드리고 있습니다.",
  },
  {
    type: OFFER_TYPE.BATH,
    image: "/images/room3.jpg",
    description: "욕조가 설치되어 있습니다.",
  },
  {
    type: OFFER_TYPE.ESPRESSO_CAFE,
    image: "/images/room1.jpg",
    description: "카페를 즐기실 수 있습니다.",
  },
  {
    type: OFFER_TYPE.TOURIST,
    image: "/images/room2.jpg",
    description: "관광지 주변에 위치하고 있습니다.",
  },
];

const SpecialOffers = () => {
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

  return (
    <div className="relative">
      <div className="slideshow-container relative">
        <Image
          src={images[currentImageIndex].src}
          alt="Slideshow"
          width={images[currentImageIndex].width}
          height={images[currentImageIndex].height}
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

      <section className="mt-8">
        <div className="inner-con inner-1760 flex items-center justify-between">
          <div className="tap-menu view-tap flex items-center">
            <a href="/special_offers" className="mr-4">
              SPECIAL OFFERS
            </a>
            <a className="mr-4"> |</a>
            <ul className="flex items-center space-x-4">
              {offers.map((offer, index) => (
                <li
                  key={offer.type}
                  className={selectedOffer === offer.type ? "current" : ""}
                >
                  <a
                    href="#"
                    className="hover:text-blue-700 gap-2"
                    onClick={() => handleTabClick(offer.type)}
                  >
                    {offer.type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <h5 className="tit">GRAMMY HOTEL</h5>
        </div>

        <OfferIcon selectedOffer={selectedOffer} />

        {!!offersInfo &&
          (selectedOffer === OFFER_TYPE.BED ? (
            <OfferBedAdapter
              showText={showText}
              bedModelList={bedModelList}
              offers={offersInfo}
            />
          ) : (
            <>
              <p className="text-center text-xl mt-4">
                {offersInfo.description}
              </p>

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
            </>
          ))}
      </section>
    </div>
  );
};

export default SpecialOffers;
