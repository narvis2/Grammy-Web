import React from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";

const Cafeteria = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="카페테리아" />
      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-10 md:mb-0">
        7층 카페테리아에서는 언제나 신선한 물과 향긋한 원두 커피,<br />편리한 전자레인지 등을 구비하여 여행자님께서 잠시 여유를 즐기실 수 있도록 최선을 다하고 있습니다.
        <br />
        한 잔의 커피와 함께 몸과 마음을 재충전하시고, 다음 여정으로 힘차게 나아가실 수 있도록 도와드리겠습니다.
      </p>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/offers_cafe.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/offers_cafe_2.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/offers_cafe_3.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/offers_cafe_4.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cafeteria;
