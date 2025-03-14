import React, { useMemo, useState } from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";

type BathProps = {
  imgList: string[]
}

const Bath = ({imgList}: BathProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgIndex + 1) % imgList.length
      : (currentImgIndex - 1 + imgList.length) % imgList.length;
      setCurrentImgIndex(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <OffersHeader title="자쿠지 욕조" />
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-12 md:mb-16">
          따뜻한 물에 몸을 맡기고,
          <br />
          눈앞에 펼쳐진 바다와 함께 천천히 흐르는 시간을 느껴보세요.
          <br />
          황금빛 노을이 번지는 하늘, 잔잔한 파도의 속삭임,
          <br />
          그 순간, 모든 것이 완벽한 쉼이 됩니다.
          <br />
          <br />
          포항 그라미 호텔에서,
          <br />
          나만을 위한 럭셔리한 힐링을 경험하세요.
        </p>

        <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                {imgList.map((value, index) => {
                  return <SliceBtn key={value + index.toString()} label={index} isActive={index === currentImgIndex} onClick={() => {setCurrentImgIndex(index)}} />
                })}
              </div>
        
              {/* 슬라이드 영역 */}
              <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden after:clear-both after:block after:content-['']">
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
                      src={imgList[currentImgIndex]}
                      fill={true}
                      className="object-cover"
                      alt={'욕조'}
                    />
                    <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                      <h5 className="text-xl">{`자쿠지 욕조`}</h5>
                    </div>
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
      </div>
    </section>
  );
};

export default Bath;

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
