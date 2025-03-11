import React from "react";
import Image from "next/image";
import { GiCoffeeMug } from "react-icons/gi";

const Breakfast = () => {
  return (
    <div className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="p-10">
          <section className="text-center mb-4">
            <div className="flex justify-center mb-6">
              <GiCoffeeMug className="text-3xl" />
            </div>
            <p className="text-lg font-serif leading-relaxed text-gray-700 mb-12">
              {/* 7층 식당에서 평일 아침 간편하고 맛있는 조식을 제공하여,
              여행자님께서 든든하게 하루를 시작하시고, 다음 목적지를 향해 힘차게
              나아가실 수 있도록 최선을 다하겠습니다. */}
              7층 카페테리아에서는 언제나 신선한 물과 향긋한 원두 커피, 편리한 전자레인지 등을 구비하여 여행자님께서 잠시 여유를 즐기실 수 있도록 최선을 다하고 있습니다.
              <br />
              한 잔의 커피와 함께 몸과 마음을 재충전하시고, 다음 여정으로 힘차게 나아가실 수 있도록 도와드리겠습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <Image
                  src="/images/offers_cafe.jpg"
                  alt="카페테리아"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/offers_cafe_2.jpg"
                  alt="카페테리아1"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/offers_cafe_3.jpg"
                  alt="카페테리아2"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/offers_cafe_4.jpg"
                  alt="카페테리아3"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
