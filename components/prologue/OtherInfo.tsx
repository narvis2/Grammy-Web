import { useState } from "react";
import Image from "next/image";

const Market = [
  { name: "참맛 대게 전문점", image: "/images/food1.jpg" },
  { name: "다마 수산", image: "/images/food2.jpg" },
  { name: "태흥 수산", image: "/images/food3.jpg" },
  { name: "정여사 밥이랑 회랑", image: "/images/food4.jpg" },
  { name: "텃밥 보리밥", image: "/images/food5.jpg" },
];

const JapaneseStreet = {
  restaurants: [
    { name: "할머니 본가", image: "/images/food6.jpg" },
    { name: "구룡포 구판장", image: "/images/food7.jpg" },
    { name: "김가네 솥떡", image: "/images/food8.jpg" },
    { name: "이까대또", image: "/images/food9.jpg" },
  ],
  cafes: [
    { name: "구룡포애 오소", image: "/images/cafe1.jpg" },
    { name: "동백을 지나서", image: "/images/cafe2.jpg" },
    { name: "까멜리아", image: "/images/cafe3.jpg" },
    { name: "여든 여덟밤", image: "/images/cafe4.jpg" },
    { name: "구룡포 호랑이 바나나 글라세", image: "/images/cafe5.jpg" },
  ],
  experiences: [{ name: "후루사또야", image: "/images/experience.jpg" }],
};

const OtherInfo = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const handleDialogOpen = (name: string) => {
    setActiveDialog(name);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <section className="pt-5 pb-20 px-8 md:px-16 lg:px-24 flex flex-col items-center">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-16">
        <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/guryongpo.jpeg"
            alt="구룡포 시장"
            layout="responsive"
            width={600}
            height={400}
            className="w-full h-72 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 bg-white bg-opacity-30 rounded-lg">
            <div className="bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-[90%] text-center">
              <h2 className="text-white font-bold text-shadow-md mb-3 text-[clamp(1.2rem,3vw,2rem)]">
                구룡포 시장
              </h2>
              <p className="text-white text-[clamp(0.9rem,2.5vw,1.3rem)]">
                구룡포시장은 한국의 대표적인 전통 시장으로, 다양한 해산물을
                활용한 요리를 즉석에서 즐길 수 있는 곳입니다. 전통적인 한국
                시장의 분위기와 지역 특산물을 경험해 보세요.
              </p>
            </div>
            <button
              onClick={() => handleDialogOpen("구룡포시장")}
              className="bg-gray-300 text-white py-2 px-4 rounded-lg shadow hover:bg-black transition duration-300 mt-4 md:mt-5"
            >
              자세히 보기
            </button>
            {activeDialog === "구룡포시장" && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
                onClick={closeDialog}
              >
                <div className="relative bg-white rounded-lg p-6 md:p-8 max-w-4xl w-full h-[80vh] max-h-[80vh] overflow-y-auto mx-14 md:mx-16">
                  <button
                    onClick={closeDialog}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
                  >
                    &times;
                  </button>
                  <h4 className="text-xl font-bold mb-6 text-center">
                    추천 맛집
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Market.map((place, index) => (
                      <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
                      >
                        <div
                          className="w-full h-40 bg-cover bg-center rounded-t-lg"
                          style={{
                            backgroundImage: `url(${place.image})`,
                          }}
                        ></div>
                        <div className="p-4">
                          <h5 className="text-lg font-semibold text-center">
                            {place.name}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/japanstreet.jpeg"
            alt="일본인 가옥 거리"
            layout="responsive"
            width={600}
            height={400}
            className="w-full h-72 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 bg-white bg-opacity-30 rounded-lg">
            <div className="bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-[90%] text-center">
              <h3 className="text-white font-bold text-shadow-md mb-3 text-[clamp(1.2rem,3vw,2rem)]">
                일본인 가옥 거리
              </h3>
              <p className="text-white text-[clamp(0.9rem,2.5vw,1.3rem)]">
                일본인 가옥 거리는 일본 식민지 시대의 건축물이 잘 보존된 곳으로,
                다양한 맛집과 카페, 일본 문화 체험을 즐길 수 있는 곳입니다.
                <br />
                전통적인 일본의 맛과 현대적인 감각을 함께 경험해 보세요.
              </p>
            </div>
            <button
              onClick={() => handleDialogOpen("일본인 가옥 거리")}
              className="bg-gray-300 text-white py-2 px-4 rounded-lg shadow hover:bg-black transition duration-300 mt-4 md:mt-5"
            >
              자세히 보기
            </button>
            {activeDialog === "일본인 가옥 거리" && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
                onClick={closeDialog}
              >
                <div className="relative bg-white rounded-lg p-6 md:p-8 max-w-4xl w-full h-[80vh] max-h-[80vh] overflow-y-auto mx-14 md:mx-16">
                  <button
                    onClick={closeDialog}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
                  >
                    &times;
                  </button>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-bold mb-4 text-center">
                        추천 맛집
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {JapaneseStreet.restaurants.map((restaurant, index) => (
                          <div
                            key={index}
                            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
                          >
                            <div
                              className="w-full h-40 bg-cover bg-center rounded-t-lg"
                              style={{
                                backgroundImage: `url(${restaurant.image})`,
                              }}
                            ></div>
                            <div className="p-4">
                              <h6 className="text-lg font-semibold text-center">
                                {restaurant.name}
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold mb-4 text-center">
                        카페
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {JapaneseStreet.cafes.map((cafe, index) => (
                          <div
                            key={index}
                            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
                          >
                            <div
                              className="w-full h-40 bg-cover bg-center rounded-t-lg"
                              style={{
                                backgroundImage: `url(${cafe.image})`,
                              }}
                            ></div>
                            <div className="p-4">
                              <h6 className="text-lg font-semibold text-center">
                                {cafe.name}
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold mb-4 text-center">
                        일본 전통 의상 체험
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {JapaneseStreet.experiences.map((experience, index) => (
                          <div
                            key={index}
                            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
                          >
                            <div
                              className="w-full h-40 bg-cover bg-center rounded-t-lg"
                              style={{
                                backgroundImage: `url(${experience.image})`,
                              }}
                            ></div>
                            <div className="p-4">
                              <h6 className="text-lg font-semibold text-center">
                                {experience.name}
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherInfo;
