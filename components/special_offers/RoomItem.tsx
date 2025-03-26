import React, { useState } from "react";
import OffersHeader from "./OffersHeader";
import OffersSlice from "./OffersSlice";

const things = [
  {
    name: "TV",
    image: "/images/tv.jpg",
    description:
      "유튜브 및 넷플릭스, 티빙, 와차, 디즈니 플러스, 애플TV 총 5가지의 OTT를 무료로 제공합니다.",
  },
  { name: "냉장고", image: "/images/refrigerator_a.jpg", description: "" },
  { name: "커피 포트", image: "/images/coffee_pot.jpg", description: "" },
  { name: "스타일러", image: "/images/styler.jpg", description: "" },
  { name: "수납공간", image: "/images/towel.jpg", description: "" },
  { name: "드라이기", image: "/images/dryer.jpg", description: "" },
  { name: "가운", image: "/images/gown.jpg", description: "" },
];

const RoomItem = () => {
  const [currentImgPosition, setCurrentImgPosition] = useState(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgPosition + 1) % things.length
      : (currentImgPosition - 1 + things.length) % things.length;
    setCurrentImgPosition(index);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="객실 구비 물품" />
      <OffersSlice
        currentImgPosition={currentImgPosition}
        imageList={things}
        onSlideImage={onSlideImage}
        setCurrentImgPosition={setCurrentImgPosition}
      />
    </section>
  );
};

export default RoomItem;
