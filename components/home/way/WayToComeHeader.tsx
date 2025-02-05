import React from "react";

type WayToComeHeaderProps = {
  title: string;
  description: string;
};

const WayToComeHeader = ({ title, description }: WayToComeHeaderProps) => {
  return (
    <>
      <h2 className="text-center font-semibold font-serif text-4xl">
        <span className="block mb-4">{title}</span>
      </h2>
      <p className="font-semibold font-serif text-lg mb-6">{description}</p>
    </>
  );
};

export default React.memo(WayToComeHeader);
