"use client";

import { RoomTypeResponse } from "@/data/model/room";
import RoomTypeHeader from "./RoomTypeHeader";
import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";
import FadeIn from "@/components/common/animation/FadeIn";

type RoomTypeContainerProps = {
  roomTypeList: RoomTypeResponse[];
};

const RoomTypeContainer = ({ roomTypeList }: RoomTypeContainerProps) => {
  return (
    <section className="py-24 bg-warm">
      <RoomTypeHeader
        title="객실 유형"
        description="포항 그라미 호텔의 특별한 객실을 누려보세요."
      />

      <div className="flex items-start justify-center px-6 lg:px-12 mt-8">
        {roomTypeList.length > 0 && (
          <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-[1200px]">
            {roomTypeList.map((item, index) => (
              <FadeIn key={item.roomTypeName} delay={index * 0.1} direction="up">
                <RoomTypeItem roomType={item} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomTypeContainer;
