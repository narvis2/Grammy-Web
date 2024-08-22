import React from "react";
import Image from "next/image";

const Amenity = () => {
  return (
    <div className="p-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="p-10">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-6 ">
              어메니티
            </h2>
            <p className="text-lg text-center font-serif leading-relaxed mb-12">
              '신라 어메니티'의 친환경 포장용지로 제공되는 일회성 욕실
              어메니티를 제공하고 있습니다. <br /> SGS 안전인증을 받은 제품들로,
              일회용이지만 세척이 가능하여 여러 번 재사용할 수 있습니다.
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/amenity.jpeg"
                alt="amenity"
                width={350}
                height={350}
                className="rounded-xl shadow-xl"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900">
              헤어 및 바디 케어
            </h2>
            <p className="text-lg text-center font-serif leading-relaxed text-gray-600 mb-12">
              천연 유래 성분을 사용한 FRECO의 샴푸와 린스, 바디워시가 샤워실에
              구비되어 있습니다.
            </p>
            <div className="gap-8">
              <div className="flex justify-center">
                <Image
                  src="/images/shampoo.jpeg"
                  alt="shampoo"
                  width={350}
                  height={350}
                  className="rounded-xl shadow-xl mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Amenity;
