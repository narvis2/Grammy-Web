"use client";

import React, { useMemo } from "react";
import OffersSliceIndicator from "./OffersSliceIndicator";
import OffersImageBackground from "./OffersImageBackground";
import OffersLeftSideButton from "./OffersLeftSideButton";
import OffersRightSideButton from "./OffersRightSideButton";

type OffersSliceProps = {
  currentImgPosition: number;
  imageList: {
    name: string;
    image: string;
    description?: string;
  }[];
  onSlideImage: (isNext: boolean) => void;
  setCurrentImgPosition: React.Dispatch<React.SetStateAction<number>>;
};

const OffersSlice = ({
  currentImgPosition,
  imageList,
  setCurrentImgPosition,
  onSlideImage,
}: OffersSliceProps) => {
  const item = useMemo(() => {
    return imageList[currentImgPosition];
  }, [imageList, currentImgPosition]);

  return (
    <div className="relative">
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[4] flex items-center gap-0">
        {imageList.map((_, index) => (
          <OffersSliceIndicator
            key={index}
            label={index}
            isActive={index === currentImgPosition}
            onClick={() => setCurrentImgPosition(index)}
          />
        ))}
      </div>

      {/* Image */}
      <OffersImageBackground
        image={item.image}
        name={item.name}
        description={item.description}
      />
      <OffersLeftSideButton onClick={() => onSlideImage(false)} />
      <OffersRightSideButton onClick={() => onSlideImage(true)} />
    </div>
  );
};

export default OffersSlice;
