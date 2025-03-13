import Image from 'next/image';

const BedExample = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* 제목 영역 */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">침구류</h2>
        <p className="text-sm md:text-base text-gray-500">GRAMI HOTEL</p>
      </div>

      {/* 설명 문구 */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-12 md:mb-24">
        편안함을 최우선으로 고려하여 국내에서 전문 제작된 주식회사
        '누우니'의 싱글 및 더블 사이즈 고품질 매트리스를 제공합니다. <br />
        또 한, 사계절 내내 사용할 수 있는 고품질 오리털 이불로 자연스럽게
        공기를 가둬 뛰어난 보온성을 제공하며, <br /> 통기성이 뛰어나 습기를
        조절해 쾌적한 수면 환경을 유지합니다.
      </p>

      {/* 침구류 이미지 영역 */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* 왼쪽 이미지 */}
        <div className="w-full">
          <Image
            src="/images/offers_bed.jpg"
            alt="침구류 이미지 1"
            width={500}
            height={500}
            className="rounded shadow"
          />
        </div>

        {/* 가운데 이미지: small screen에서는 mt-12, md 이상에서는 mt-28 */}
        <div className="w-full md:mt-28 z-10">
          <Image
            src="/images/twin_bed.jpg"
            alt="침구류 이미지 2"
            width={500}
            height={500}
            className="rounded shadow"
          />
        </div>

        {/* 오른쪽 이미지 */}
        <div className="w-full">
          <Image
            src="/images/two_bed.jpg"
            alt="침구류 이미지 3"
            width={500}
            height={500}
            className="rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default BedExample;
