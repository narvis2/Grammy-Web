import React, { useMemo, useState } from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";
import OffersSliceIndicator from "./OffersSliceIndicator";
import OffersLeftSideButton from "./OffersLeftSideButton";
import OffersRightSideButton from "./OffersRightSideButton";
import OffersImageBackground from "./OffersImageBackground";
import OffersSlice from "./OffersSlice";

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

  const item = useMemo(() => {
    return imageList[currentImgPosition];
  }, [imageList, currentImgPosition]);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgPosition + 1) % imageList.length
      : (currentImgPosition - 1 + imageList.length) % imageList.length;
    setCurrentImgPosition(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="테라스" />
      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-10 md:mb-24">
        "낮에는 햇살 아래 여유롭게, 밤에는 불멍과 함께 낭만적으로"
        <br />
        <br />
        포항 그라미 호텔의 야외 테라스에서
        <br />
        바다를 바라보며 따뜻한 햇살을 만끽하거나,
        <br />
        은은한 조명과 함께하는 감성적인 밤을 즐겨보세요.
        <br />
        <br />
        아침에는 상쾌한 공기와 함께 커피 한 잔,
        <br />
        저녁에는 불멍을 바라보며 깊은 휴식을.
        <br />
        시간의 흐름에 따라 변하는 테라스의 매력을 경험해보세요.
      </p>

      <OffersSlice
        currentImgPosition={currentImgPosition}
        imageList={imageList}
        onSlideImage={onSlideImage}
        setCurrentImgPosition={setCurrentImgPosition}
      />
    </section>
  );
};

export default Terrace;
