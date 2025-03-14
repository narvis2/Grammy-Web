import React from "react";
import OffersHeader from "./OffersHeader";
import IntroductionItem from "../prologue/item/IntroductionItem";
import IntroductionReverseItem from "../prologue/item/IntroductionReverseItem";

const Amenity = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="Amenity" />
      <IntroductionItem 
        img="/images/amenity_a.jpg" 
        title="어메니티"
        description="'신라 어메니티'의 친환경 포장용지로 제공되는 일회성 욕실
        어메니티를 제공하고 있습니다. <br /> SGS 안전인증을 받은 제품들로,
        일회용이지만 세척이 가능하여 여러 번 재사용할 수 있습니다.
        " 
      />
      <div className="mt-8">
        <IntroductionReverseItem 
            img="/images/offers_shampoo.jpg" 
            title="헤어 및 바디 케어"
            description="천연 유래 성분을 사용한 FRECO의 샴푸와 린스, 바디워시가 샤워실에
              구비되어 있습니다." 
        />
      </div>
    </section>
  );
};

export default Amenity;
