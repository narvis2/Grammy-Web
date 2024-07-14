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
      <div className="slideshow-container relative">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="slideshow-image w-full object-cover"
        />
        <div
          className={`absolute bottom-20 inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-serif mb-2">
              PROLOGUE
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-serif">
              GRAMMY HOTEL
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
            <a href="/prologue" className="hover:text-blue-700 mr-4">
              PROLOGUE
            </a>
            <ul className="flex items-center space-x-4">
              <li className="current">
                <a href="" className="text-rose-500 hover:text-blue-700">
                  호텔
                </a>
              </li>
              <li>
                <a href="" className="hover:text-blue-700">
                  오시는길
                </a>
              </li>
            </ul>
          </div>
          <h5 className="tit">호텔</h5>
        </div>

        <p className="text-center text-xl mt-4">
          그라미 호텔에 오신 것을 환영합니다
        </p>
        <p className="text-center text-sm">GRAMMY HOTEL</p>

        <div className="flex justify-center mt-8">
          <img
            src="/images/room1.jpg"
            alt="Room 1"
            className="object-cover h-96"
          />
        </div>
        <p className="text-center text-lg mt-4">
          포항을 한 몸에 느낄 수 있는 최적의 장소입니다.
          <br />
          <br />
          포항을 방문 혹은 여행을 하면서 쌓인 피로를 그라미 호텔에서
          <br />
          편안하게 재충전하면 거닐었던 포항의 풍경을 다시 떠올려 보세요.
          <br />
          <br />
          둘러보고 싶은 모든 장소가 바로 근처에 있는
          <br />
          마음을 편히 해주는 숙소에 머물러 보세요.
          <br />
          <br />
        </p>

        <p className="text-center text-lg">
          또한 '그라미 호텔'은
          <br />
          포항 관광에 최적화된 장소로 인근 관광하기에 접근 및 교통이 편리합니다.
        </p>
      </section>
      <section>
        <p className="text-center text-8xl mt-4 font-serif">
          Pohang Tour and Perfect Rest
        </p>

        <div className="flex justify-center space-x-4 mt-14">
          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-80"
            />
            <p className="text-sm mt-2">테스트1</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-80"
            />
            <p className="text-sm mt-2">테스트2</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-80"
            />
            <p className="text-sm mt-2">테스트3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
