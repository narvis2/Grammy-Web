import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Plx from "react-plx";

const parallaxData = {
  fadeIn: [
    {
      start: "self",
      duration: 300,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -20,
          property: "translateY",
        },
      ],
    },
  ],
};

const Introduction = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    terrace: false,
    oceanBathtub: false,
    separateViewSpace: false,
    mountainView: false,
    oceanView: false,
  });

  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({
    terrace: false,
    oceanBathtub: false,
    separateViewSpace: false,
    mountainView: false,
    oceanView: false,
  });

  const refs = {
    terrace: useRef<HTMLParagraphElement | null>(null),
    oceanBathtub: useRef<HTMLParagraphElement | null>(null),
    separateViewSpace: useRef<HTMLParagraphElement | null>(null),
    mountainView: useRef<HTMLParagraphElement | null>(null),
    oceanView: useRef<HTMLParagraphElement | null>(null),
  };

  const handleToggle = (key: keyof typeof expanded) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const checkTextOverflow = (key: keyof typeof refs) => {
    const element = refs[key].current;
    if (!element) return;

    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    const maxHeight = lineHeight * 3;

    setShowMore((prev) => ({
      ...prev,
      [key]: element.scrollHeight > maxHeight,
    }));
  };

  useEffect(() => {
    checkTextOverflow("terrace");
    checkTextOverflow("oceanBathtub");
    checkTextOverflow("separateViewSpace");
    checkTextOverflow("mountainView");
    checkTextOverflow("oceanView");

    const handleResize = () => {
      checkTextOverflow("terrace");
      checkTextOverflow("oceanBathtub");
      checkTextOverflow("separateViewSpace");
      checkTextOverflow("mountainView");
      checkTextOverflow("oceanView");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Plx parallaxData={parallaxData.fadeIn}>
        <section className="h-[300px] flex justify-center items-center bg-cover bg-center relative bg-[url('/images/Introduction1.jpg')]">
          <div className="bg-black bg-opacity-60 p-5 rounded-lg max-w-[90%] text-center">
            <h2 className="text-white font-bold text-shadow-md mb-5 text-[clamp(1.5rem,4vw,2.5rem)]">
              자연이 선사하는 아름다운 풍경
            </h2>
            <p className="text-white text-[clamp(1rem,2.5vw,1.5rem)] duration-500 ">
              저희 호텔은 바다와 산의 두 가지 자연의 경관을 독특하게 경험할 수
              있는 선택지를 제공합니다.
              <br /> 마운틴뷰 객실에서는 장엄한 산의 웅장함, 오션뷰 객실에서는
              바다의 광활함을 감상하실 수 있습니다.
              <br /> 각기 다른 매력의 자연 풍경을 통해 특별한 휴식을 즐겨보세요.
            </p>
          </div>
        </section>
      </Plx>

      <section className="flex flex-col items-center mt-10 my-5 px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto">
          <Plx parallaxData={parallaxData.fadeIn}>
            <div className="p-5 border border-gray-300 rounded-lg shadow-md min-h-[400px] max-h-[600px]">
              <Image
                src="/images/mountain.jpg"
                alt="Mountain View"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
              />
              <h3 className="mt-2 text-center text-xl">마운틴 뷰</h3>
              <p
                ref={refs.mountainView}
                className={`text-base leading-relaxed overflow-hidden transition-max-height duration-500 ${
                  expanded.mountainView ? "max-h-full" : "max-h-[4.5em]"
                }`}
              >
                산의 웅장한 전망을 넓은 창문을 통해 감상하며, 시간에 따라 변하는
                산의 다양한 색조와 질감을 느껴보세요. 매일매일 변화하는 자연의
                아름다움을 감상할 수 있으며, 고요한 자연 속에서 평온함과 완벽한
                힐링의 순간을 선사할 것입니다.
              </p>
              {showMore.mountainView && (
                <button
                  onClick={() => handleToggle("mountainView")}
                  className="mt-2 text-blue-500"
                >
                  {expanded.mountainView ? "닫기" : "더보기"}
                </button>
              )}
            </div>
          </Plx>
          <Plx parallaxData={parallaxData.fadeIn}>
            <div className="p-5 border border-gray-300 rounded-lg shadow-md min-h-[400px] max-h-[600px]">
              <Image
                src="/images/ocean.jpg"
                alt="Ocean View"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
              />
              <h3 className="mt-2 text-center text-xl">오션 뷰</h3>
              <p
                ref={refs.oceanView}
                className={`text-base leading-relaxed overflow-hidden transition-max-height duration-500 ${
                  expanded.oceanView ? "max-h-full" : "max-h-[4.5em]"
                }`}
              >
                탁 트인 바다의 경치를 한눈에 담아내며, 파도와 하늘이 만나는
                아름다운 풍경이 시원하게 펼쳐집니다. 해가 뜨고 지는 순간마다
                변하는 바다의 풍경을 감상하면서 시각적인 즐거움과 완벽한 힐링의
                순간을 만끽해 보세요.
              </p>
              {showMore.oceanView && (
                <button
                  onClick={() => handleToggle("oceanView")}
                  className="mt-2 text-blue-500"
                >
                  {expanded.oceanView ? "닫기" : "더보기"}
                </button>
              )}
            </div>
          </Plx>
        </div>
      </section>

      <Plx parallaxData={parallaxData.fadeIn}>
        <section className="mt-10 h-[300px] flex justify-center items-center bg-cover bg-center relative bg-[url('/images/Introduction2.jpg')]">
          <div className="bg-black bg-opacity-60 p-5 rounded-lg max-w-[90%] text-center">
            <h2 className="text-white font-bold text-shadow-md mb-5 text-[clamp(1.5rem,4vw,2.5rem)]">
              다양한 객실 시설
            </h2>
            <p className="text-white text-[clamp(1rem,2.5vw,1.5rem)]">
              총 43개의 객실을 10가지 유형으로 나뉘어, 객실마다 차별화된 시설을
              배치하여 여행자님의 취향과 일행의 수에 맞추어
              <br /> 아름다운 전망과 편안하고 독특한 시설을 부담 없는 가격으로
              누리실 수 있습니다.
            </p>
          </div>
        </section>
      </Plx>

      <section className="flex flex-col items-center mt-10 my-5 px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto">
          <Plx parallaxData={parallaxData.fadeIn}>
            <div className="p-5 border border-gray-300 rounded-lg shadow-md min-h-[400px] max-h-[600px]">
              <Image
                src="/images/ocean_view_terace.jpg"
                alt="Terrace"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
              />
              <h3 className="mt-2 text-center text-xl">개별 테라스</h3>
              <p
                ref={refs.terrace}
                className={`text-base leading-relaxed overflow-hidden transition-max-height duration-500 ${
                  expanded.terrace ? "max-h-full" : "max-h-[4.5em]"
                }`}
              >
                고요한 파도 소리가 잔잔하게 들려오면서 느끼는 마음의 안정감과
                바다의 시원한 바람이 살랑이며 상쾌한 마음을 느낄 수 있습니다.
                이러한 여유 속에서 진정한 힐링과 재충전을 할 수 있습니다.
              </p>
              {showMore.terrace && (
                <button
                  onClick={() => handleToggle("terrace")}
                  className="mt-2 text-blue-500"
                >
                  {expanded.terrace ? "닫기" : "더보기"}
                </button>
              )}
            </div>
          </Plx>

          <Plx parallaxData={parallaxData.fadeIn}>
            <div className="p-5 border border-gray-300 rounded-lg shadow-md min-h-[400px] max-h-[600px]">
              <Image
                src="/images/loyal_suite_a_bathtub.jpg"
                alt="Ocean Bathtub"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
              />
              <h3 className="mt-2 text-center text-xl">오션 뷰 욕조</h3>
              <p
                ref={refs.oceanBathtub}
                className={`text-base leading-relaxed overflow-hidden transition-max-height duration-500 ${
                  expanded.oceanBathtub ? "max-h-full" : "max-h-[4.5em]"
                }`}
              >
                투명하게 펼쳐져 있는 속이 뚫린 듯한 바다의 전망을 감상하면서,
                따뜻한 물에 몸을 담그어 한층 더 편안해지고, 스트레스와 피로가
                자연스럽게 녹아내리는 목욕시간을 경험하실 수 있습니다.
              </p>
              {showMore.oceanBathtub && (
                <button
                  onClick={() => handleToggle("oceanBathtub")}
                  className="mt-2 text-blue-500"
                >
                  {expanded.oceanBathtub ? "닫기" : "더보기"}
                </button>
              )}
            </div>
          </Plx>

          <Plx parallaxData={parallaxData.fadeIn}>
            <div className="p-5 border border-gray-300 rounded-lg shadow-md min-h-[400px] max-h-[600px]">
              <Image
                src="/images/loyal_suite_b_room.jpg"
                alt="Separate View Space"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-sm"
              />
              <h3 className="mt-2 text-center text-xl">실내 전망 공간</h3>
              <p
                ref={refs.separateViewSpace}
                className={`text-base leading-relaxed overflow-hidden transition-max-height duration-500 ${
                  expanded.separateViewSpace ? "max-h-full" : "max-h-[4.5em]"
                }`}
              >
                수면공간과 별도로 구분지어 오로지 바다를 구경하기 위한 바다의
                경치를 더욱 넓고 편안하게 감상할 수 있는 독립적인 공간입니다.
                개별 테라스와 다르게 조용하고 아늑하게 바다의 아름다운 풍경을
                만끽할 수 있습니다.
              </p>
              {showMore.separateViewSpace && (
                <button
                  onClick={() => handleToggle("separateViewSpace")}
                  className="mt-2 text-blue-500"
                >
                  {expanded.separateViewSpace ? "닫기" : "더보기"}
                </button>
              )}
            </div>
          </Plx>
        </div>
      </section>

      <Plx parallaxData={parallaxData.fadeIn}>
        <section className="mt-10 h-[300px] flex justify-center items-center bg-cover bg-center relative bg-[url('/images/Introduction3.jpg')]">
          <div className="bg-black bg-opacity-60 p-5 rounded-lg max-w-[80%] text-center">
            <p className="text-white text-[clamp(1rem,2.5vw,1.5rem)]">
              저희 호텔을 찾아주셔서 감사합니다. <br /> 저희 호텔에서의 휴식이
              여행자님의 소중한 추억으로 남길 바라겠습니다. <br /> 여행의 마지막
              순간까지도 특별한 경험이 되도록 최선을 다하겠습니다.
            </p>
          </div>
        </section>
      </Plx>
    </div>
  );
};

export default Introduction;
