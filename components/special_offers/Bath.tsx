"use client";

import React, { useState } from "react";
import OffersHeader from "./OffersHeader";
import OffersSlice from "./OffersSlice";
import FadeIn from "@/components/common/animation/FadeIn";

type BathProps = {
  imgList: string[];
};

const Bath = ({ imgList }: BathProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgIndex + 1) % imgList.length
      : (currentImgIndex - 1 + imgList.length) % imgList.length;
    setCurrentImgIndex(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <OffersHeader title="자쿠지 욕조" />
      <FadeIn>
        <p className="text-sm sm:text-base text-body-text font-light leading-[1.9] text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
          따뜻한 물에 몸을 맡기고,
          눈앞에 펼쳐진 바다와 함께 천천히 흐르는 시간을 느껴보세요.
          <br />
          황금빛 노을이 번지는 하늘, 잔잔한 파도의 속삭임,
          그 순간, 모든 것이 완벽한 쉼이 됩니다.
          <br /><br />
          포항 그라미 호텔에서,
          나만을 위한 럭셔리한 힐링을 경험하세요.
        </p>
      </FadeIn>

      <FadeIn>
        <OffersSlice
          currentImgPosition={currentImgIndex}
          imageList={imgList.map((item) => ({
            name: "욕조",
            image: item,
          }))}
          onSlideImage={onSlideImage}
          setCurrentImgPosition={setCurrentImgIndex}
        />
      </FadeIn>
    </section>
  );
};

export default Bath;
