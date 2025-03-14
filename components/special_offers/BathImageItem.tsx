import React from "react";
import Image from "next/image";

type BathImageItemProps = {
  imgUrl: string;
  onClick: () => void;
}

const BathImageItem = ({imgUrl, onClick}: BathImageItemProps) => {

  return (
    <div className="swiper-slide thumbs-slide lg:!w-[126px] md:!h-[135px] w-[126px] h-[110px] cursor-pointer relative" onClick={onClick}>
      <Image
        src={imgUrl}
        alt="Gallery image"
        fill
        className="gallery-image rounded-[28px] border-2 border-transparent transition-all duration-500 hover:border-indigo-600 object-cover"
      />
    </div>
  );
}

export default BathImageItem;