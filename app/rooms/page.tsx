"use client";

import React, { useState, useEffect } from "react";

const images = ["/images/room1.jpg", "/images/room2.jpg", "/images/room3.jpg"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({
    name: "Standard A",
    image: "/images/room1.jpg",
    description: "Standard A 타입입니다.",
  });

  const rooms = [
    {
      name: "Standard A",
      image: "/images/room1.jpg",
      description: "Standard A 타입입니다.",
    },
    {
      name: "Standard B",
      image: "/images/room2.jpg",
      description: "Standard B 타입입니다.",
    },
    {
      name: "Standard C",
      image: "/images/room3.jpg",
      description: "Standard C 타입입니다.",
    },
    {
      name: "Sweet",
      image: "/images/room1.jpg",
      description: "Sweet Room입니다.",
    },
    {
      name: "Corner Sweet",
      image: "/images/room2.jpg",
      description: "Corner Sweet입니다.",
    },
    {
      name: "Royal Sweet A",
      image: "/images/room3.jpg",
      description: "Royal Sweet A타입 입니다.",
    },
    {
      name: "Royal Sweet B",
      image: "/images/room3.jpg",
      description: "Royal Sweet B타입 입니다.",
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

  const handleTabClick = (room) => {
    setSelectedRoom(room);
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
              ROOMS
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
            <a href="/rooms" className="mr-4">
              ROOMS
            </a>
            <a className="mr-4"> |</a>
            <ul className="flex items-center space-x-4">
              {rooms.map((room, index) => (
                <li
                  key={index}
                  className={selectedRoom.name === room.name ? "current" : ""}
                >
                  <a
                    href="#"
                    className="hover:text-blue-700 gap-2"
                    onClick={() => handleTabClick(room)}
                  >
                    {room.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <h5 className="tit">GRAMMY HOTEL</h5>
        </div>
        <div className="flex justify-start mt-8 pl-40">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.name}
            className="object-cover h-96"
          />
          <div className="ml-8">
            <h2 className="text-2xl font-semibold mb-4">{selectedRoom.name}</h2>
            <h5 className="text-sm">GRAMMY HOTEL</h5>
            <p className="text-lg">{selectedRoom.description}</p>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-20 bg-gray-200 mt-8">
        <div className="inner-con flex items-center justify-center">
          <div className="text-center font-semibold font-serif text-4xl">
            <span className="block mb-4">Rooms</span>
            <h5 className="text-sm">그라미 호텔의 특별한 객실을 누려보세요.</h5>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-96"
            />
            <div className="mt-4 text-center">
              <h6 className="text-lg font-semibold">Standard A•B•C</h6>
              <p className="text-sm text-gray-500">
                A타입, B타입, C타입으로 나뉩니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-96"
            />
            <div className="mt-4 text-center">
              <h6 className="text-lg font-semibold">Sweet</h6>
              <p className="text-sm text-gray-500">설명</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-96"
            />
            <div className="mt-4 text-center">
              <h6 className="text-lg font-semibold">Corner Sweet</h6>
              <p className="text-sm text-gray-500">설명</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/room1.jpg"
              alt="Room 1"
              className="object-cover h-96"
            />
            <div className="mt-4 text-center">
              <h6 className="text-lg font-semibold">Royal Sweet A•B</h6>
              <p className="text-sm text-gray-500">A와 B타입으로 나뉩니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
