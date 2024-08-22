import React from "react";
import Image from "next/image";
import { RiServiceLine } from "react-icons/ri";

const things = [
  { name: "TV", image: "/images/tv.jpg" },
  { name: "냉장고", image: "/images/refrigerator.jpg" },
  { name: "커피 포트", image: "/images/coffeeport.jpg" },
  { name: "스타일러", image: "/images/styler.jpg" },
  { name: "수납공간", image: "/images/acceptance.jpg" },
];

const RoomItem = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-10">
          <section className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
              <RiServiceLine className="text-3xl sm:text-4xl lg:text-5xl" />
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-serif leading-relaxed text-gray-700">
              여행자님의 편안한 숙박을 위해 사소한 것 하나하나에 세심한 주의를
              기울이고 있습니다.
              <br />
              여러 세부 사항을 고려하여 여행자님께서 편안하고 쾌적한 휴식을
              취하실 수 있도록 몇몇 유용한 물품들을 객실에 준비해 두었습니다.
            </p>
          </section>

          <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              {things.map((thing, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-50 p-2 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative w-full h-32 sm:h-40 lg:h-48">
                    <Image
                      src={thing.image}
                      alt={thing.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-4 text-gray-900">
                    {thing.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
