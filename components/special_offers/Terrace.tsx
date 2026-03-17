"use client";

import React, { useState } from "react";
import OffersHeader from "./OffersHeader";
import OffersSlice from "./OffersSlice";
import FadeIn from "@/components/common/animation/FadeIn";

const imageList = [
  { name: "테라스 A", image: "/images/terrace_a_night_2.jpg" },
  { name: "테라스 A", image: "/images/terrace_a_morning.jpg" },
  { name: "테라스 B", image: "/images/terrace_b_sunrise.jpg" },
  { name: "테라스 A", image: "/images/terrace_night.jpg" },
  { name: "테라스 A", image: "/images/terrace_view.jpg" },
  { name: "테라스 A", image: "/images/terrace_a_2.jpg" },
];

const Terrace = () => {
  const [currentImgPosition, setCurrentImgPosition] = useState(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgPosition + 1) % imageList.length
      : (currentImgPosition - 1 + imageList.length) % imageList.length;
    setCurrentImgPosition(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <OffersHeader title="테라스" />
      <FadeIn>
        <p className="text-sm sm:text-base text-stay-600 font-light leading-[1.9] text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
          &ldquo;낮에는 햇살 아래 여유롭게, 밤에는 불멍과 함께 낭만적으로&rdquo;
          <br /><br />
          포항 그라미 호텔의 야외 테라스에서
          바다를 바라보며 따뜻한 햇살을 만끽하거나,
          은은한 조명과 함께하는 감성적인 밤을 즐겨보세요.
          <br /><br />
          아침에는 상쾌한 공기와 함께 커피 한 잔,
          저녁에는 불멍을 바라보며 깊은 휴식을.
          시간의 흐름에 따라 변하는 테라스의 매력을 경험해보세요.
        </p>
      </FadeIn>

      <FadeIn>
        <OffersSlice
          currentImgPosition={currentImgPosition}
          imageList={imageList}
          onSlideImage={onSlideImage}
          setCurrentImgPosition={setCurrentImgPosition}
        />
      </FadeIn>
    </section>
  );
};

export default Terrace;
