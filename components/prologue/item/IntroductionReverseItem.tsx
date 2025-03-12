import React from "react";
import Image from "next/image";

type IntroductionItemProps = {
  img: string;
  title: string;
  description: string;
}

const IntroductionReverseItem = ({ img, title, description }: IntroductionItemProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start">
      {/* 이미지 영역: 작은 화면에서는 위에, md 이상에서는 오른쪽에 위치 */}
      <div className="w-full md:w-1/2 order-1 md:order-3">
        <Image
          src={img}
          alt="Grami"
          width={600}
          height={400}
          className="rounded-md shadow"
        />
      </div>

      {/* md 이상에서만 보이는 구분선: 설명과 이미지 사이에 위치 */}
      {/* <div className="hidden md:block md:order-2 h-[400px] border-l border-gray-300 mx-8"></div> */}
  
      {/* 설명 영역: 작은 화면에서는 아래에, md 이상에서는 왼쪽에 위치 */}
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-4 md:mt-0">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="order-3 md:order-2 w-full md:w-auto h-0.5 md:h-[400px] border-t md:border-t-0 md:border-l border-gray-300 md:mx-8 mt-4 md:mt-0"></div>
    </div>
  );
}

export default IntroductionReverseItem;
