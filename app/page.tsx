"use client";

import { getHotel } from "@/data/api/service/hotel";

import React, { useState, useEffect } from "react";

const images = ["/images/room1.jpg", "/images/room2.jpg", "/images/room3.jpg"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const requestGetHotel = async () => {
    const response = await getHotel();
    console.log(`⭐️ getHotel() response 👉`, response);

    return response;
  };

  useEffect(() => {
    requestGetHotel();
  }, []);

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

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowText(true);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt="Slideshow"
        className="slideshow-image w-full"
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      <div
        className={`absolute bottom-10 inset-0 flex justify-center items-center text-center text-white transition-opacity duration-500 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative top-1/4">
          <h2 className="text-3xl sm:text-5xl lg:text-8xl font-serif">HOTEL</h2>
          <h5 className="text-base sm:text-lg lg:text-xl font-serif">000</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
