import React from "react";
import Image from "next/image";

const Bed = () => {
  return (
    <div className="p-10 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-[clamp(1.5rem,4vw,2.5rem)]">
            수면의 질을 향상시킬 수 있는 잠자리 환경이 준비되어 있습니다.
          </h2>
          <p className="text-lg font-serif text-center text-gray-700 mb-12">
            편안함을 최우선으로 고려하여 국내에서 전문 제작된 주식회사
            '누우니'의 싱글 및 더블 사이즈 고품질 매트리스를 제공합니다. <br />
            또 한, 사계절 내내 사용할 수 있는 고품질 오리털 이불로 자연스럽게
            공기를 가둬 뛰어난 보온성을 제공하며, <br /> 통기성이 뛰어나 습기를
            조절해 쾌적한 수면 환경을 유지합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full">
              <Image
                src="/images/bed1.jpg"
                alt="bed1"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full">
              <Image
                src="/images/bed2.jpg"
                alt="bed2"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full">
              <Image
                src="/images/bed3.jpg"
                alt="bed3"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <p className="text-2xl font-semibold text-center mt-10">
            저희가 준비한 편안한 환경에서 지친 몸을 편안히 회복하고 깊은 휴식을
            취하실 수 있도록 최선을 다하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bed;
