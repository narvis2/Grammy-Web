"use client";

import React from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";
import FadeIn from "@/components/common/animation/FadeIn";

const Bed = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <OffersHeader title="침구류" />

      <FadeIn>
        <p className="text-sm sm:text-base text-body-text font-light leading-[1.9] text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
          편안함을 최우선으로 고려하여 국내에서 전문 제작된 주식회사
          '누우니'의 싱글 및 더블 사이즈 고품질 매트리스를 제공합니다.
          <br />
          사계절 내내 사용할 수 있는 고품질 오리털 이불로 자연스럽게
          공기를 가둬 뛰어난 보온성을 제공하며,
          통기성이 뛰어나 습기를 조절해 쾌적한 수면 환경을 유지합니다.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn delay={0}>
          <div className="relative aspect-square overflow-hidden rounded-sm img-zoom">
            <Image
              src="/images/offers_bed.jpg"
              alt="침구류 이미지 1"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="md:mt-16">
          <div className="relative aspect-square overflow-hidden rounded-sm img-zoom">
            <Image
              src="/images/twin_bed.jpg"
              alt="침구류 이미지 2"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="relative aspect-square overflow-hidden rounded-sm img-zoom">
            <Image
              src="/images/two_bed.jpg"
              alt="침구류 이미지 3"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Bed;
