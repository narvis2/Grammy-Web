import React from "react";
import Image from "next/image";
import { GiKnifeFork } from "react-icons/gi";

const Breakfast = () => {
  return (
    <div className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="p-10">
          <section className="text-center mb-4">
            <div className="flex justify-center mb-6">
              <GiKnifeFork className="text-3xl" />
            </div>
            <p className="text-lg font-serif leading-relaxed text-gray-700 mb-12">
              7층 식당에서 매일 아침 간편하고 맛있는 조식을 제공하여,
              여행자님께서 든든하게 하루를 시작하시고, 다음 목적지를 향해 힘차게
              나아가실 수 있도록 최선을 다하겠습니다.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/offers_cafe.jpg"
                alt="조식 이미지"
                width={400}
                height={400}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
