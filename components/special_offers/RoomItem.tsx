import React, { useMemo, useState } from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";

const things = [
  { name: "TV", image: "/images/tv.jpg", description: "유튜브 및 넷플릭스, 티빙, 와차, 디즈니 플러스, 애플TV 총 5가지의 OTT를 무료로 제공합니다." },
  { name: "냉장고", image: "/images/refrigerator_1.jpg", description: ""},
  { name: "커피 포트", image: "/images/coffee_pot.jpg", description: ""},
  { name: "스타일러", image: "/images/styler.jpg", description: ""},
  { name: "수납공간", image: "/images/towel.jpg", description: ""},
  { name: "드라이기", image: "/images/dryer.jpg", description: ""},
  { name: "가운", image: "/images/gown.jpg", description: ""},
];

const RoomItem = () => {
  const [currentImgPosition, setCurrentImgPosition] = useState(0);

  const item = useMemo(() => {
    return things[currentImgPosition];
  }, [things, currentImgPosition]);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgPosition + 1) % things.length
      : (currentImgPosition - 1 + things.length) % things.length;
    setCurrentImgPosition(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="객실 구비 물품" />
      <div id="carouselExampleCaptions" className="relative">
      {/* Indicators (UI용, 클릭 시 동작 X) */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {things.map((value, index) => {
          return <SliceBtn key={index.toString()} label={index} isActive={index === currentImgPosition} onClick={() => {setCurrentImgPosition(index)}} />
        })}
      </div>

      {/* 슬라이드 영역 */}
      <div className="relative w-full h-[600px] overflow-hidden after:clear-both after:block after:content-['']">
        {/* 여기서 h-full을 추가하여 부모 높이를 상속 */}
        <div
          className="relative float-left w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="relative w-full h-full overflow-hidden bg-cover bg-no-repeat"
            style={{ backgroundPosition: "50%" }}
          >
            <Image
              src={item.image}
              fill={true}
              className="object-cover"
              alt={item.name}
            />
            <div className="absolute inset-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-15"></div>
          </div>
          <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
            <h5 className="text-xl">{item.name}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

      {/* 좌우 네비게이션 (UI용, 클릭 시 동작 X) */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none"
        type="button"
        onClick={() => onSlideImage(false)}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none"
        type="button"
        onClick={() => onSlideImage(true)}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
    </section>
  );
};

export default RoomItem;


const SliceBtn = ({label, isActive, onClick}: {label: number,isActive: boolean, onClick: () => void}) => {
  return <button
  type="button"
  aria-label={`Slice ${label}`}
  className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
    isActive ? "bg-blue-600 opacity-100" : ""
  }`}
  onClick={onClick}
  ></button>
}