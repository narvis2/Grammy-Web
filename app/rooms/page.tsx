"use client";

import ProductAdapter from "@/components/common/product/ProductAdapter";
import TabLayout from "@/components/common/tab/TabLayout";
import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";
import RoomImageAdapter from "@/components/room/adapter/RoomImageAdapter";
import { useRoomTypeList } from "@/data/hooks";
import useGetAnalyticsTag from "@/data/hooks/analytics/useGetAnalyticsTag";
import { roomTypeToRoomTypeImageList } from "@/data/mapper/room";
import { RoutePath } from "@/data/model/menu/enum";
import { RoomTypeImageModel, RoomTypeResponse } from "@/data/model/room";
import { useSearchParams } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
import FadeIn from "@/components/common/animation/FadeIn";
import { motion } from "framer-motion";

const Room = () => {
  const params = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>("스탠다드 A");

  useGetAnalyticsTag();

  const { data: roomTypeList } = useRoomTypeList();

  const list = roomTypeList ?? [];

  const tabList = useMemo<string[]>(() => {
    return list.map((item) => item.roomTypeName);
  }, [list]);

  const roomTypeImages = useMemo<RoomTypeImageModel[]>(() => {
    return roomTypeToRoomTypeImageList(list);
  }, [list]);

  const roomTypeInfo = useMemo<RoomTypeResponse | undefined>(() => {
    if (!currentTab || list.length === 0) return undefined;
    return list.find((item) => item.roomTypeName === currentTab);
  }, [currentTab, list]);

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
        <section>
          <TabLayout
            title="객실 유형"
            href={RoutePath.ROOMS}
            currentTab={currentTab}
            tabList={tabList}
            onTabClick={(type) => setCurrentTab(type)}
          />
          {!!roomTypeInfo && (
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProductAdapter
                roomTypeInfo={roomTypeInfo}
                currentTab={currentTab}
              />
            </motion.div>
          )}
        </section>
      )}

      {/* All Rooms Grid */}
      <section className="bg-warm/50 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <FadeIn className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest-2xl text-brand uppercase font-body mb-3">
              All Room Types
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-wide">
              객실 유형
            </h2>
            <div className="section-divider mt-5 mb-6" />
            <p className="text-body-text text-sm sm:text-base font-light">
              포항 그라미 호텔의 특별한 객실을 누려보세요.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          {list.length > 0 && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
              {list.map((item, index) => (
                <FadeIn key={item.roomTypeName} delay={index * 0.05}>
                  <RoomTypeItem roomType={item} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Room;
