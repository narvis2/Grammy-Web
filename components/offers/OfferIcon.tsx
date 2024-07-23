import { OFFER_TYPE } from "@/data/model/offer/enum";
import React from "react";
import { FaCoffee } from "react-icons/fa";
import { FaBath, FaBed, FaShower } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";

type OfferIconProps = {
  selectedOffer: OFFER_TYPE;
};

const OfferIcon = ({ selectedOffer }: OfferIconProps) => {
  const icon = () => {
    switch (selectedOffer) {
      case OFFER_TYPE.BED:
        return <FaBed />;
      case OFFER_TYPE.AMENITIES:
        return <FaShower />;
      case OFFER_TYPE.BATH:
        return <FaBath />;
      case OFFER_TYPE.ESPRESSO_CAFE:
        return <FaCoffee />;
      case OFFER_TYPE.TOURIST:
        return <MdPlace />;
    }
  };

  return <p className="flex justify-center mt-8 text-4xl">{icon()}</p>;
};

export default React.memo(OfferIcon);
