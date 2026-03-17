"use client";

import { RoutePath } from "@/data/model/menu/enum";
import { RoomTypeResponse } from "@/data/model/room";
import {
  roomTypeSubDescriptions,
  staticImageUrl,
} from "@/data/utils/constants";
import {
  bedTypeConvert,
  viewTypeReservationLink,
} from "@/data/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type RoomTypeItemProps = {
  roomType: RoomTypeResponse;
};

const RoomTypeItem = ({ roomType }: RoomTypeItemProps) => {
  const room = roomType.rooms[0];
  const imageList = room.images.map((item) => staticImageUrl + item.imageUrl);
  const [currentImgIndex, setCurrentImageIndex] = useState<number>(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgIndex + 1) % imageList.length
      : (currentImgIndex - 1 + imageList.length) % imageList.length;
    setCurrentImageIndex(index);
  }

  const description = roomTypeSubDescriptions.get(roomType.roomTypeName);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] img-zoom">
        {imageList.length > 0 && (
          <Image
            src={imageList[currentImgIndex]}
            alt={`${roomType.roomTypeName} 객실 이미지`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        )}

        {/* Prev/Next Buttons */}
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:opacity-100"
          style={{ opacity: 0.7 }}
          onClick={() => onSlideImage(false)}
        >
          <svg width="8" height="14" viewBox="0 0 6 10" fill="none">
            <path
              stroke="#2a221a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:opacity-100"
          style={{ opacity: 0.7 }}
          onClick={() => onSlideImage(true)}
        >
          <svg width="8" height="14" viewBox="0 0 6 10" fill="none">
            <path
              stroke="#2a221a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 z-10 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
          {currentImgIndex + 1} / {imageList.length}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-display text-2xl text-stay-950 tracking-wide">
            {roomType.roomTypeName}
          </h3>
          <Link
            href={RoutePath.ROOMS + `?type=${roomType.roomTypeName}`}
            className="text-xs tracking-wider text-stay-600 border border-stay-300 rounded-full px-4 py-1.5 hover:bg-stay-950 hover:text-white hover:border-stay-950 transition-all duration-300"
          >
            더보기
          </Link>
        </div>

        <p className="text-sm text-stay-600 leading-relaxed mb-4 font-light">
          {description ?? ""}
        </p>

        <div className="flex items-center gap-3 text-xs text-stay-600 mb-4">
          <span className="bg-stay-100 px-3 py-1 rounded-full">
            최대 {roomType.maxCount}명
          </span>
          {room.beds.map((item, index) => (
            <span key={item.type} className="bg-stay-100 px-3 py-1 rounded-full">
              {`${bedTypeConvert(item.type)} ${item.count}개`}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="w-full py-3 bg-stay-950 text-white text-sm tracking-widest-xl uppercase rounded hover:bg-stay-800 transition-colors duration-300"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "click", {
                event_category: "예약버튼",
                event_label: "실시간 예약",
              });
            }
            window.location.href = viewTypeReservationLink(
              roomType.roomTypeName
            );
          }}
        >
          예약하기
        </button>
      </div>
    </div>
  );
};

export default RoomTypeItem;
