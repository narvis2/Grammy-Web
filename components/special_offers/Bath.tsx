import React, { useState } from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";
import BathImageItem from "./BathImageItem";

type BathProps = {
  imgList: string[]
}

const Bath = ({imgList}: BathProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <OffersHeader title="욕조" />
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-12 md:mb-24">
          따뜻한 물에 몸을 맡기고,
          <br />
          눈앞에 펼쳐진 바다와 함께 천천히 흐르는 시간을 느껴보세요.
          <br />
          황금빛 노을이 번지는 하늘, 잔잔한 파도의 속삭임,
          <br />
          그 순간, 모든 것이 완벽한 쉼이 됩니다.
          <br />
          <br />
          그라미 호텔에서,
          <br />
          나만을 위한 럭셔리한 힐링을 경험하세요.
        </p>

        <div className="flex flex-col-reverse gap-8 mx-auto">
          <div className="slider-box flex flex-col xl:flex-row gap-8">
            <div className="box xl:w-[1062px] w-full gallery relative">
              <div className="swiper main-slide-carousel swiper-container relative">
                <div className="swiper-wrapper h-auto">
                  <div className="swiper-slide cursor-pointer !mr-0">
                    <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl overflow-hidden relative">
                      <Image
                        src={imgList[currentImgIndex]}
                        alt="Gallery image"
                        fill
                        className="gallery-image object-cover rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[126px] w-full nav-for-slider">
              <div className="swiper-wrapper h-auto flex xl:flex-col justify-center md:gap-7 gap-4">
                {imgList.map((item, index) => (<BathImageItem key={index.toString()} imgUrl={item} onClick={() => {setCurrentImgIndex(index)}} />))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="lightbox"
        className="hidden fixed z-[999] top-0 left-0 w-screen h-screen overflow-hidden bg-black/80"
      >
        <span
          id="close"
          className="text-white text-3xl absolute top-5 right-7 cursor-pointer"
        >
          &times;
        </span>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            id="lightbox-image"
            src=""
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Bath;
