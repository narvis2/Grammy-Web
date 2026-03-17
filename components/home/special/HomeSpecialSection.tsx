"use client";

import Image from "next/image";
import FadeIn from "@/components/common/animation/FadeIn";

const features = [
  {
    number: "01",
    tag: "Ocean View",
    title: "탁 트인 오션뷰",
    description:
      "끝없이 펼쳐진 구룡포 바다를 객실에서 바로 감상하세요. 시시각각 변하는 하늘빛과 잔잔한 파도 소리가 일상의 피로를 부드럽게 녹여줍니다.",
    image: "/images/ocean.jpg",
  },
  {
    number: "02",
    tag: "Terrace",
    title: "프라이빗 테라스",
    description:
      "낮에는 따스한 햇살 아래 여유로운 티타임을, 밤에는 은은한 불멍과 함께 낭만적인 시간을. 오직 나만을 위한 테라스에서 특별한 순간을 만들어 보세요.",
    image: "/images/terrace_night.jpg",
  },
  {
    number: "03",
    tag: "Jacuzzi",
    title: "자쿠지 욕조",
    description:
      "따뜻한 물에 몸을 맡기고 눈앞에 펼쳐진 바다와 함께 천천히 흐르는 시간을 느껴보세요. 황금빛 일출과 함께하는 자쿠지 힐링을 경험할 수 있습니다.",
    image: "/images/offers_bath.jpg",
  },
];

const HomeSpecialSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-24 sm:mb-32">
          <span className="text-stay-400 font-display italic tracking-widest-xl text-sm mb-4 block uppercase">
            Special
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-stay-950 tracking-wide">
            그라미 호텔만의 특별함
          </h2>
        </FadeIn>

        <div className="space-y-28 sm:space-y-40">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              >
                {/* 이미지 */}
                <FadeIn
                  direction={isReversed ? "right" : "left"}
                  className={`${
                    isReversed
                      ? "order-1 lg:order-2 lg:col-span-7"
                      : "lg:col-span-7"
                  } aspect-[4/3] overflow-hidden relative`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </FadeIn>

                {/* 텍스트 */}
                <FadeIn
                  direction={isReversed ? "left" : "right"}
                  delay={0.15}
                  className={`${
                    isReversed
                      ? "order-2 lg:order-1 lg:col-span-5 lg:text-right"
                      : "lg:col-span-5"
                  } flex flex-col justify-center ${
                    isReversed ? "lg:items-end" : ""
                  }`}
                >
                  <span className="text-xs text-stay-400 tracking-widest-xl uppercase mb-4">
                    {feature.number} / {feature.tag}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-stay-950 mb-8">
                    {feature.title}
                  </h3>
                  <p className="text-stay-600 font-light leading-[2] mb-10 text-base md:text-lg break-keep font-body">
                    {feature.description}
                  </p>
                  <div className="w-12 h-px bg-stay-300" />
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSpecialSection;
