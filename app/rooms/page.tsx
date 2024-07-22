"use client";

import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";
import RoomImageAdapter from "@/components/room/adapter/RoomImageAdapter";
import RoomTypeAdapter from "@/components/room/adapter/RoomTypeAdapter";
import RoomTabV1 from "@/components/room/tab/RoomTabV1";
import RoomTabV2 from "@/components/room/tab/RoomTabV2";
import { useRoomTypeList } from "@/data/hooks";
import { roomTypeToRoomTypeImageList } from "@/data/mapper/room";
import { RoomTypeImageModel } from "@/data/model/room";
import React, { useState, useMemo } from "react";

const Room = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const { data: roomType, isFetching } = useRoomTypeList();

  const roomTypeList = useMemo(() => {
    if (!roomType) return [];

    const list = roomType.data ?? [];
    if (roomType.success && list.length > 0) {
      return list;
    }

    return [];
  }, [roomType]);

  const roomTypeImages = useMemo<RoomTypeImageModel[]>(() => {
    return roomTypeToRoomTypeImageList(roomTypeList);
  }, [roomTypeList]);

  return (
    <div className="relative">
      {roomTypeImages.length > 0 && (
        <RoomImageAdapter roomTypeImages={roomTypeImages} />
      )}
      <section className="mt-4">
        <RoomTabV2
          tabPosition={tabIndex}
          roomTypeList={roomTypeList}
          onTabClick={(index) => {
            setTabIndex(index);
          }}
        />
        {roomTypeList.length > 0 && (
          <RoomTypeAdapter roomType={roomTypeList[tabIndex]} />
        )}
      </section>

      <section className="pt-12 pb-20 bg-gray-200 mt-28">
        <div className="inner-con flex items-center justify-center">
          <div className="text-center font-semibold font-serif text-4xl">
            <span className="block mb-4">객실 유형</span>
            <h5 className="text-sm">그라미 호텔의 특별한 객실을 누려보세요.</h5>
          </div>
        </div>

        <div className="flex items-start justify-center min-h-screen p-8 mt-8">
          {roomTypeList.length > 0 && (
            <div className="container grid grid-cols-1 gap-8  lg:grid-cols-2">
              {roomTypeList.map((item) => {
                return <RoomTypeItem roomType={item} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Room;
