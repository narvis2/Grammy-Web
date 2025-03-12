import React from "react";
import Image from "next/image";

type IntroductionItemProps = {
  img: string;
  title: string;
  description: string;
}

const IntroductionItem = ({ img, title, description }: IntroductionItemProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start">
      {/* 이미지 영역 (왼쪽) */}
      <div className="w-full md:w-1/2 order-1">
        <Image
          src={img}
          alt="Grami"
          width={600}
          height={400}
          className="rounded-md shadow"
        />
      </div>
  
      {/* 설명 영역 (오른쪽) */}
      <div className="w-full md:w-1/2 order-2 md:order-3 mt-4 md:mt-0">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p 
          className="text-gray-700 leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: description }} 
        />
      </div>
  
      {/* 구분선
          - 모바일: order-3, w-full, h-0.5, border-t, margin-top 4 (수평선)
          - md 이상: order-2, auto width, h-[400px], border-l, mx-8, margin-top 0 (수직선) */}
      <div className="order-3 md:order-2 w-full md:w-auto h-0.5 md:h-[400px] 
                      border-t md:border-t-0 md:border-l border-gray-300 
                      mt-4 md:mt-0 md:mx-8"></div>
    </div>
  );
}

export default IntroductionItem;
