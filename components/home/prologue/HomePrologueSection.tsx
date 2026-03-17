"use client";

import FadeIn from "@/components/common/animation/FadeIn";

const HomePrologueSection = () => {
  return (
    <section className="py-32 sm:py-40 px-6 max-w-4xl mx-auto text-center">
      <FadeIn>
        <span className="text-stay-400 font-display italic tracking-widest-xl text-sm mb-6 block uppercase">
          Prologue
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-stay-950 mb-12 leading-tight tracking-wide">
          일상의 쉼표가 되는 공간
        </h2>
        <div className="w-px h-20 bg-stay-300 mx-auto mb-12" />
        <p className="text-stay-700 leading-[2.2] text-base md:text-lg font-light break-keep font-body">
          포항 구룡포의 고즈넉한 바다를 품은 그라미 호텔은
          <br className="hidden md:block" />
          탁 트인 오션뷰와 산의 웅장함이 어우러진 프리미엄 숙소입니다.
          <br className="hidden md:block" />
          따뜻한 자쿠지에서 맞이하는 황홀한 일출,
          <br className="hidden md:block" />
          테라스 위 은은한 불멍이 선사하는 여유로운 밤.
          <br className="hidden md:block" />
          그라미 호텔에서 온전한 쉼을 경험해 보세요.
        </p>
      </FadeIn>
    </section>
  );
};

export default HomePrologueSection;
