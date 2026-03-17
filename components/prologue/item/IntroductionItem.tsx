"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "@/components/common/animation/FadeIn";

type IntroductionItemProps = {
  img: string;
  title: string;
  description: string;
};

const IntroductionItem = ({
  img,
  title,
  description,
}: IntroductionItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* 이미지 영역 (왼쪽) */}
      <FadeIn direction="left" className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm img-zoom">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </FadeIn>

      {/* 구분선 */}
      <div className="hidden md:block w-px h-64 bg-stay-300/60" />

      {/* 설명 영역 (오른쪽) */}
      <FadeIn direction="right" delay={0.15} className="w-full md:w-1/2">
        <h3 className="font-display text-2xl sm:text-3xl text-stay-950 tracking-wide mb-4">
          {title}
        </h3>
        <div className="w-10 h-px bg-stay-300 mb-6" />
        <p
          className="text-stay-600 leading-[1.9] text-sm sm:text-base font-light"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </FadeIn>
    </div>
  );
};

export default IntroductionItem;
