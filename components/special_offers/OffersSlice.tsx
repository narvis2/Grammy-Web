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
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {imageList.map((value, index) => {
          return (
            <OffersSliceIndicator
              key={index.toString()}
              label={index}
              isActive={index === currentImgPosition}
              onClick={() => {
                setCurrentImgPosition(index);
              }}
            />
          );
        })}
      </div>

      {/* 슬라이드 영역 */}
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
