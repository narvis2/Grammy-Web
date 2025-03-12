import React from "react";
import Image from "next/image";

type IntroductionItemProps = {
  img: string;
  title: string;
  description: string;
}

const IntroductionReverseItem = ({img, title, description}: IntroductionItemProps) => {
  
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start">
      {/* 설명 영역 (왼쪽) */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      {/* md 이상에서만 보이는 구분선 (이미지 높이와 동일하게 h-[400px]) */}
      <div className="hidden md:block h-[400px] border-l border-gray-300 mx-8"></div>
  
      {/* 이미지 영역 (오른쪽) */}
      <div className="w-full md:w-1/2">
        <Image
          src={img}
          alt="Grami"
          width={600}
          height={400}
          className="rounded-md shadow"
        />
      </div>
  </div>
  );
}

export default IntroductionReverseItem;