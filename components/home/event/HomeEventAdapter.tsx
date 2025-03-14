import React from "react";
import { SpecialEventResponse } from "@/data/model/event/types";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { staticImageUrl } from "@/data/utils/constants";
import CarouselHeader from "../carousel/CarouselHeader";

type HomeEventAdapterProps = {
  specialEventList: SpecialEventResponse[]
}

const HomeEventAdapter = ({specialEventList}: HomeEventAdapterProps) => {
  return (<div className="container mx-auto px-4 py-8 pb-20">
    <CarouselHeader
        title="Special Event"
        description="포항 그라미 호텔에서만 즐길 수 있는 특별한 이벤트"
        />
    <div className="swiper-container mt-8">
    <Swiper
        modules={[Navigation, Pagination]}
        rewind={true}
        navigation={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={1}
        breakpoints={{
            976: {
                slidesPerView: 3,
            },
        }}>
            {specialEventList.map((video, idx) => (
                <SwiperSlide key={`event carousel${idx}`}>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        {/* 4:3 비율 비디오 컨테이너 */}
                        <div className="relative w-full aspect-[4/3] bg-black">
                            <video
                                src={staticImageUrl + video.contents[0].contentUrl}
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-base font-semibold mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-500">{`이벤트 기간 : ${video.startDate} ~ ${video.endDate}`}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  </div>);
}

export default HomeEventAdapter;