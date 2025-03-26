import React, { useState } from "react";
import OffersHeader from "./OffersHeader";
import OffersSlice from "./OffersSlice";

const imageList = [
  { name: "카페테리아", image: "/images/offers_cafe.jpg" },
  { name: "카페테리아", image: "/images/cafeteria_new.jpg" },
  { name: "카페테리아", image: "/images/offers_cafe_2.jpg" },
  { name: "카페테리아", image: "/images/offers_cafe_3.jpg" },
  { name: "카페테리아", image: "/images/offers_cafe_4.jpg" },
];

const Cafeteria = () => {
  const [currentImgPosition, setCurrentImgPosition] = useState(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgPosition + 1) % imageList.length
      : (currentImgPosition - 1 + imageList.length) % imageList.length;
    setCurrentImgPosition(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="카페테리아" />
      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-10 md:mb-24">
        7층 카페테리아에서는 언제나 신선한 물과 향긋한 원두 커피,
        <br />
        편리한 전자레인지 등을 구비하여 여행자님께서 잠시 여유를 즐기실 수
        있도록 최선을 다하고 있습니다.
        <br />한 잔의 커피와 함께 몸과 마음을 재충전하시고, 다음 여정으로 힘차게
        나아가실 수 있도록 도와드리겠습니다.
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

export default Cafeteria;
