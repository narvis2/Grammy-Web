import { getFullAddress, phoneFormatter } from "@/data/mapper";
import { HotelResponse } from "@/data/model/hotel";
import WayToComeHeader from "./WayToComeHeader";
import useMap from "@/data/hooks/map/useMap";
import { useState } from "react";
import { IoFootstepsOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { PiCarProfile } from "react-icons/pi";
import { TbArrowRampRight2 } from "react-icons/tb";
import { TbArrowBearRight } from "react-icons/tb";
import { TbArrowBearLeft } from "react-icons/tb";
import { TbCornerUpRight } from "react-icons/tb";
import { TbCornerUpLeft } from "react-icons/tb";

type WayToComeContainerProps = {
  hotelInfo?: HotelResponse;
};

const WayToComeContainer = ({ hotelInfo }: WayToComeContainerProps) => {
  const naverMap = useMap(hotelInfo);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    car: false,
    bus: false,
    walk: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="pt-12 pb-20 px-10 bg-[#FcFcFc] flex flex-col justify-center items-center">
      <WayToComeHeader
        title="오시는 길"
        description="포항 그라미 호텔에 오시는 길을 안내해드립니다."
      />

      <div
        id="map"
        style={{ minHeight: "300px", maxHeight: "400px", borderRadius: 10 }}
        className="w-full lg:w-1/2 mb-4 lg:mb-4"
      ></div>

      <div className="w-full lg:w-1/2">
        <p className="text-lg">{`• 주소 : ${getFullAddress(hotelInfo)}`}</p>
        <p className="text-lg">{`• 연락처 : 054-727-0600`}</p>

        {["car", "bus", "walk"].map((type) => (
          <div
            key={type}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-5 mt-5"
          >
            <button
              onClick={() => toggleSection(type)}
              className="w-full flex items-center justify-between p-4 text-white font-semibold focus:outline-none bg-gray-400"
            >
              <div className="flex items-center">
                {type === "car" && <PiCarProfile className="text-2xl mr-3" />}
                {type === "bus" && <TbBus className="text-2xl mr-3" />}
                {type === "walk" && (
                  <IoFootstepsOutline className="text-2xl mr-3" />
                )}
                <span>
                  {type === "car"
                    ? "자차"
                    : type === "bus"
                      ? "대중교통"
                      : "도보"}
                </span>
              </div>
              <span>
                {openSections[type] ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {openSections[type] && (
              <div className="p-4 bg-gray-50">
                <ul className="space-y-4">
                  {type === "car" && (
                    <>
                      <li className="border-l-4 pl-4 border-gray-500">
                        <div className="flex items-center">
                          <div>포항톨게이트</div>
                        </div>
                        <div className="flex items-center pt-4">
                          <div>
                            포항IC (김포, 구룡포, 울산•포항고속도로 방면 오른쪽
                            고속도로 출구)
                          </div>
                          <TbArrowRampRight2 className="ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center pt-4">
                          <div>
                            동해교차로 (김포, 호미곶해맞이광장, 구룡포 방면
                            오른쪽 방향)
                          </div>
                          <TbArrowBearRight className="ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center pt-4">
                          <div>
                            병포교차로 (호미곶해맞이광장, 구룡포 방면 오른쪽
                            방향)
                          </div>
                          <TbArrowBearRight className="ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center pt-4">
                          <div>병포교차로 (호미곶, 구룡포 방면 왼쪽 방향)</div>
                          <TbArrowBearLeft className="ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center pt-4">
                          <div>
                            '호미곶해맞이광장, 구룡포공영주차장' 방면 우회전
                          </div>
                          <TbCornerUpRight className="ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center pt-4">
                          <div>수협교차로 좌회전</div>
                          <TbCornerUpLeft className="ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center pt-4">
                          <div>그라미 호텔 도착 (25분 소요)</div>
                        </div>
                      </li>
                      <li className="pt-4">
                        교통상황에 따라 달라질 수 있습니다.
                      </li>
                    </>
                  )}
                  {type === "bus" && (
                    <>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          포항터미널 → 시외버스터미널 → 900 (기본) 승차 →
                          구룡포환승센터 하차 (40분 소요, 택시 30분)
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          포항역(고속철도) → 포항역(시내행) → 9000 (기본) 승차 →
                          구룡포환승센터 하차 (1시간 소요, 택시 30분)
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          포항경주공항 → 9000, 900 (기본) 승차 → 구룡포환승센터
                          하차 (20분 소요, 택시 15분)
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          호미곶 → 해맞이광장 (면민회관) → 9000 (기본) 승차 →
                          구룡포항환승센터 하차 (25분 소요, 택시 15분)
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          구룡포해수욕장 → 9000 (기본) 승차 → 구룡포환승센터
                          하차 (10분 소요, 택시 5분)
                        </div>
                      </li>
                      <li className="pt-4">
                        대중교통상황에 따라 달라질 수 있습니다.
                      </li>
                    </>
                  )}
                  {type === "walk" && (
                    <>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          구룡포시장 도보 1분
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          구룡포 환승센터 정류장 1분
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          구룡포항 2분
                        </div>
                      </li>
                      <li>
                        <div className="border-l-4 border-gray-500 pl-4">
                          구룡포 일본인 가옥 거리 1분
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WayToComeContainer;
