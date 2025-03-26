import React from "react";
import Image from "next/image";

type OffersImageBackgroundProps = {
  name: string;
  image: string;
  description?: string;
};

const OffersImageBackground = ({
  image,
  description,
  name,
}: OffersImageBackgroundProps) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden after:clear-both after:block after:content-['']">
      {/* 여기서 h-full을 추가하여 부모 높이를 상속 */}
      <div
        className="relative float-left w-full h-full"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-no-repeat"
          style={{ backgroundPosition: "50%" }}
        >
          <Image src={image} fill={true} className="object-cover" alt={name} />
          <div className="absolute inset-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-15"></div>
        </div>
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
          <h5 className="text-xl">{name}</h5>
          {!!description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default OffersImageBackground;
