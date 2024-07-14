"use client";

import React, { useState, useEffect } from "react";
import { FaShower, FaBed, FaBath, FaCoffee } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import Image from "next/image";

const images = [
  { src: "/images/room1.jpg", width: 800, height: 600 },
  { src: "/images/room2.jpg", width: 800, height: 600 },
  { src: "/images/room3.jpg", width: 800, height: 600 },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState({
    name: "침구류",
    image: "/images/room1.jpg",
    description: "침대를 제공해드리고 있습니다.",
    width: 800,
    height: 600,
  });

  const offers = [
    {
      name: "침구류",
      image: "/images/room1.jpg",
      description: "침대를 제공해드리고 있습니다.",
      width: 800,
      height: 600,
    },
    {
      name: "어메니티",
      image: "/images/room2.jpg",
      description: "일회용 욕실 어메니티를 제공해드리고 있습니다.",
      width: 800,
      height: 600,
    },
    {
      name: "욕조",
      image: "/images/room3.jpg",
      description: "욕조가 설치되어 있습니다.",
      width: 800,
      height: 600,
    },
    {
      name: "에스프레소 바 카페",
      image: "/images/room1.jpg",
      description: "카페를 즐기실 수 있습니다.",
      width: 800,
      height: 600,
    },
    {
      name: "관광지",
      image: "/images/room2.jpg",
      description: "관광지 주변에 위치하고 있습니다.",
      width: 800,
      height: 600,
    },
  ];

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

  const handleSlideButtonClick = (index) => {
    setCurrentImageIndex(index);
    setShowText(true);
  };

  const handleTabClick = (offer) => {
    setShowText(false);
    setTimeout(() => {
      setSelectedOffer(offer);
      setShowText(true);
    }, 200);
  };

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
              {selectedOffer.name}
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
                  key={index}
                  className={selectedOffer.name === offer.name ? "current" : ""}
                >
                  <a
                    href="#"
                    className="hover:text-blue-700 gap-2"
                    onClick={() => handleTabClick(offer)}
                  >
                    {offer.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <h5 className="tit">GRAMMY HOTEL</h5>
        </div>

        <p className="flex justify-center mt-8 text-4xl">
          {selectedOffer.name === "침구류" && <FaBed />}
          {selectedOffer.name === "어메니티" && <FaShower />}
          {selectedOffer.name === "욕조" && <FaBath />}
          {selectedOffer.name === "에스프레소 바 카페" && <FaCoffee />}
          {selectedOffer.name === "관광지" && <MdPlace />}
        </p>
        <p className="text-center text-xl mt-4">{selectedOffer.description}</p>

        <div className="flex justify-center mt-8">
          <Image
            src={selectedOffer.image}
            alt={selectedOffer.name}
            width={selectedOffer.width}
            height={selectedOffer.height}
            className={`object-cover h-96 ${showText ? "fade-in" : "fade-out"}`}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
