import React from "react";
import Image from "next/image";
import OffersHeader from "./OffersHeader";

const Terrace = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <OffersHeader title="테라스" />
      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-10 md:mb-0">
      "낮에는 햇살 아래 여유롭게, 밤에는 불멍과 함께 낭만적으로"<br/>
      <br/>
      그라미 호텔의 야외 테라스에서<br/>
      바다를 바라보며 따뜻한 햇살을 만끽하거나,<br/>
      은은한 조명과 함께하는 감성적인 밤을 즐겨보세요.<br/>
      <br/>
      아침에는 상쾌한 공기와 함께 커피 한 잔,<br/>
      저녁에는 불멍을 바라보며 깊은 휴식을.<br/>
      시간의 흐름에 따라 변하는 테라스의 매력을 경험해보세요.
      </p>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/terrace_a_night_2.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/terrace_a_morning.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/terrace_b_sunrise.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
          </div>

          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/terrace_night.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/terrace_view.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                src="/images/terrace_a_2.jpg"
                width={800}
                height={600}
                className="block rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terrace;
