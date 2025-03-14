"use client";

import ProductAdapter from "@/components/common/product/ProductAdapter";
import TabLayout from "@/components/common/tab/TabLayout";
import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";
import RoomImageAdapter from "@/components/room/adapter/RoomImageAdapter";
import { useRoomTypeList } from "@/data/hooks";
import { roomTypeToRoomTypeImageList } from "@/data/mapper/room";
import { RoutePath } from "@/data/model/menu/enum";
import { RoomTypeImageModel, RoomTypeResponse } from "@/data/model/room";
import { useSearchParams } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";

const Room = () => {
  const params = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>("스탠다드 A");

  const { data: roomType, isFetching } = useRoomTypeList();

  const roomTypeList = useMemo(() => {
    if (!roomType) return [];

    const list = roomType.data ?? [];
    if (roomType.success && list.length > 0) {
      return list;
    }

    return [];
  }, [roomType]);

  const tabList = useMemo<string[]>(() => {
    return roomTypeList.map((item) => item.roomTypeName);
  }, [roomTypeList]);

  const roomTypeImages = useMemo<RoomTypeImageModel[]>(() => {
    return roomTypeToRoomTypeImageList(roomTypeList);
  }, [roomTypeList]);

  const roomTypeInfo = useMemo<RoomTypeResponse | undefined>(() => {
    if (!currentTab || roomTypeList.length === 0) return undefined;
    return roomTypeList.find((item) => item.roomTypeName === currentTab);
  }, [currentTab, roomTypeList]);

  useEffect(() => {
    const type = params.get("type");
    if (type) {
      setCurrentTab(type);
    }
  }, [params]);

  return (
    <div className="relative">
      {roomTypeImages.length > 0 && (
        <RoomImageAdapter roomTypeImages={roomTypeImages} />
      )}
      {!!currentTab && (
        <section className="mt-4">
          <TabLayout
            title="객실 유형"
            href={RoutePath.ROOMS}
            currentTab={currentTab}
            tabList={tabList}
            onTabClick={(type) => {
              setCurrentTab(type);
            }}
          />
          {!!roomTypeInfo && <ProductAdapter roomTypeInfo={roomTypeInfo} currentTab={currentTab} />}
        </section>
      )}

      <section className="pt-12 pb-20 bg-gray-200 mt-20">
        <div className="inner-con flex items-center justify-center">
          <div className="text-center font-semibold font-serif text-4xl">
            <span className="block mb-4">객실 유형</span>
            <h5 className="text-lg">포항 그라미 호텔의 특별한 객실을 누려보세요.</h5>
          </div>
        </div>

        <div className="flex items-start justify-center min-h-screen p-8 mt-8">
          {roomTypeList.length > 0 && (
            <div className="container grid grid-cols-1 gap-8  lg:grid-cols-2">
              {roomTypeList.map((item) => {
                return <RoomTypeItem key={item.roomTypeName} roomType={item} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Room;
