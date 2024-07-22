import React from "react";

type RoomTypeHeaderProps = {
  title: string;
  description: string;
};

const RoomTypeHeader = ({ title, description }: RoomTypeHeaderProps) => {
  return (
    <div className="inner-con flex items-center justify-center">
      <div className="text-center font-semibold font-serif text-4xl">
        <span className="block mb-4">{title}</span>
        <h5 className="text-sm">{description}</h5>
      </div>
    </div>
  );
};

export default React.memo(RoomTypeHeader);
