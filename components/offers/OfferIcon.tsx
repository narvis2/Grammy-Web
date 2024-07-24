import { OFFER_TYPE } from "@/data/model/offer/enum";
import React from "react";
import { FaCoffee } from "react-icons/fa";
import { FaBath, FaBed, FaShower } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { OfferModel } from "@/data/model/offer/types";

type OfferIconProps = {
  offers: OfferModel;
};

const OfferIcon = ({ offers }: OfferIconProps) => {
  const icon = () => {
    switch (offers.type) {
      case OFFER_TYPE.BED:
        return <FaBed />;
      case OFFER_TYPE.AMENITIES:
        return <FaShower />;
      case OFFER_TYPE.BATH:
        return <FaBath />;
      case OFFER_TYPE.ESPRESSO_CAFE:
        return <FaCoffee />;
      case OFFER_TYPE.SERVICE:
        return <RiServiceLine />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 text-4xl">
      {icon()}
      <p className="text-center font-semibold font-serif mt-4 text-base">
        {offers.description}
      </p>
    </div>
  );
};

export default React.memo(OfferIcon);
