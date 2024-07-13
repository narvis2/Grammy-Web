"use client";

import React, { useState, useEffect } from "react";

const images = ["/images/room1.jpg", "/images/room2.jpg", "/images/room3.jpg"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 텍스트를 나타내기 위한 타이머 설정
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1초 후에 텍스트가 나타나도록 설정

    return () => clearTimeout(textTimer);
  }, []);

  const handleSlideButtonClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowText(true); // 버튼 클릭 시 텍스트를 바로 나타나게 설정
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt="Slideshow"
        className="slideshow-image w-full"
      />
      <section>
        <div className="inner-con inner-1760 flex items-center justify-between">
          <div className="tap-menu view-tap flex items-center">
            <li className="view-menu current">
              <a href="/prologue" className="text-blue-500 hover:text-blue-700">
                PROLOGUE
              </a>
              <ul className="sub-menu flex items-center space-x-4">
                <li className="current">
                  <a href="" className="text-blue-500 hover:text-blue-700">
                    호텔
                  </a>
                </li>
                <li>
                  <a href="" className="text-blue-500 hover:text-blue-700">
                    오시는길
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <h5 className="tit">호텔</h5>
        </div>
      </section>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        className={`absolute bottom-40 inset-0 flex justify-center items-center text-center text-white transition-opacity duration-500 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative top-1/4">
          <h2 className="text-3xl sm:text-5xl lg:text-8xl font-serif">
            Prologue
          </h2>
          <h5 className="text-base sm:text-lg lg:text-xl font-serif">
            포항 호텔
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
