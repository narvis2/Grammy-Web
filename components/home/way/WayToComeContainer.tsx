"use client";

import { getFullAddress } from "@/data/mapper";
import { HotelResponse } from "@/data/model/hotel";
import WayToComeHeader from "./WayToComeHeader";
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
import FadeIn from "@/components/common/animation/FadeIn";

type WayToComeContainerProps = {
  hotelInfo?: HotelResponse;
};

const WayToComeContainer = ({ hotelInfo }: WayToComeContainerProps) => {
  const [openSections, setOpenSections] = useState<{
    [key: string]: boolean;
  }>({
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

  const transportConfig = [
    {
      key: "car",
      icon: <PiCarProfile className="text-xl" />,
      label: "자차",
    },
    {
      key: "bus",
      icon: <TbBus className="text-xl" />,
      label: "대중교통",
    },
    {
      key: "walk",
      icon: <IoFootstepsOutline className="text-xl" />,
      label: "도보",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-cream flex flex-col items-center">
      <WayToComeHeader
        title="오시는 길"
        description="포항 그라미 호텔에 오시는 길을 안내해드립니다."
      />

      <FadeIn className="w-full max-w-[700px]">
        <div
          className="rounded-xl overflow-hidden shadow-sm mb-8"
          style={{ minHeight: "300px", maxHeight: "400px" }}
        >
          <iframe
            src="https://maps.google.com/maps?q=그라미호텔+포항+구룡포&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mb-8 space-y-2 text-sm text-body-text">
          <p>{`주소 : ${getFullAddress(hotelInfo)}`}</p>
          <p>연락처 : 054-727-0600</p>
        </div>

        <div className="space-y-3">
          {transportConfig.map(({ key, icon, label }) => (
            <div
              key={key}
              className="bg-white rounded-lg overflow-hidden border border-warm-dark/30"
            >
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between p-4 text-charcoal hover:bg-warm/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-brand">{icon}</span>
                  <span className="text-sm font-medium tracking-wider">
                    {label}
                  </span>
                </div>
                <span className="text-body-text">
                  {openSections[key] ? (
                    <FaAngleUp className="text-xs" />
                  ) : (
                    <FaAngleDown className="text-xs" />
                  )}
                </span>
              </button>

              {openSections[key] && (
                <div className="px-6 pb-5 bg-cream/50">
                  <ul className="space-y-3 text-sm text-body-text">
                    {key === "car" && (
                      <>
                        <li className="border-l-2 pl-4 border-brand/30">
                          <div>포항톨게이트</div>
                          <div className="flex items-center pt-2">
                            포항IC (김포, 구룡포, 울산·포항고속도로 방면)
                            <TbArrowRampRight2 className="ml-2 text-brand/60" />
                          </div>
                          <div className="flex items-center pt-2">
                            동해교차로 (구룡포 방면 오른쪽)
                            <TbArrowBearRight className="ml-2 text-brand/60" />
                          </div>
                          <div className="flex items-center pt-2">
                            병포교차로 (구룡포 방면 오른쪽)
                            <TbArrowBearRight className="ml-2 text-brand/60" />
                          </div>
                          <div className="flex items-center pt-2">
                            병포교차로 (호미곶, 구룡포 방면 왼쪽)
                            <TbArrowBearLeft className="ml-2 text-brand/60" />
                          </div>
                          <div className="flex items-center pt-2">
                            호미곶해맞이광장 방면 우회전
                            <TbCornerUpRight className="ml-2 text-brand/60" />
                          </div>
                          <div className="flex items-center pt-2">
                            수협교차로 좌회전
                            <TbCornerUpLeft className="ml-2 text-brand/60" />
                          </div>
                          <div className="pt-2 font-medium text-charcoal">
                            그라미 호텔 도착 (25분 소요)
                          </div>
                        </li>
                        <li className="text-xs text-body-text/60 pt-2">
                          교통상황에 따라 달라질 수 있습니다.
                        </li>
                      </>
                    )}
                    {key === "bus" && (
                      <>
                        {[
                          "포항터미널 → 시외버스터미널 → 900 승차 → 구룡포환승센터 하차 (40분)",
                          "포항역(고속철도) → 포항역(시내행) → 9000 승차 → 구룡포환승센터 하차 (1시간)",
                          "포항경주공항 → 9000, 900 승차 → 구룡포환승센터 하차 (20분)",
                          "호미곶 → 해맞이광장 → 9000 승차 → 구룡포환승센터 하차 (25분)",
                          "구룡포해수욕장 → 9000 승차 → 구룡포환승센터 하차 (10분)",
                        ].map((route, i) => (
                          <li
                            key={i}
                            className="border-l-2 border-brand/30 pl-4"
                          >
                            {route}
                          </li>
                        ))}
                        <li className="text-xs text-body-text/60 pt-2">
                          대중교통상황에 따라 달라질 수 있습니다.
                        </li>
                      </>
                    )}
                    {key === "walk" && (
                      <>
                        {[
                          "구룡포시장 도보 1분",
                          "구룡포 환승센터 정류장 1분",
                          "구룡포항 2분",
                          "구룡포 일본인 가옥 거리 1분",
                        ].map((route, i) => (
                          <li
                            key={i}
                            className="border-l-2 border-brand/30 pl-4"
                          >
                            {route}
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default WayToComeContainer;
