import React from "react";

type CarouselHeaderProps = {
  title: string;
  description: string;
};

const CarouselHeader = ({ title, description }: CarouselHeaderProps) => {
  return (
    <div className="inner-con flex items-center justify-center">
      <div className="text-center font-semibold font-serif text-4xl">
        <span>{title}</span>
        <h5 className="text-lg">{description}</h5>
      </div>
    </div>
  );
};

export default React.memo(CarouselHeader);
