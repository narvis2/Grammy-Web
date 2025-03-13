import React, { useRef } from "react";

type CarouselHeaderProps = {
  title: string;
  description: string;
};

const CarouselHeader = ({ title, description }: CarouselHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="inner-con flex items-center justify-center"
    >
      <div className="text-center font-semibold font-serif text-4xl">
        <span>{title}</span>
        <h5 className="text-lg mt-2">{description}</h5>
      </div>
    </div>
  );
};

export default React.memo(CarouselHeader);
