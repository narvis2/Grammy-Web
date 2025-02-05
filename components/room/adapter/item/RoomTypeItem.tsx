import { getCommaNumber } from "@/data/mapper";
import { RoutePath } from "@/data/model/menu/enum";
import { RoomTypeResponse } from "@/data/model/room";
import {
  roomTypeSubDescriptions,
  staticImageUrl,
} from "@/data/utils/constants";
import { bedTypeConvert, heightDividerText } from "@/data/utils/utils";
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
    console.log(`👠 index 👉`, index);
    setCurrentImageIndex(index);
  }

  const description = roomTypeSubDescriptions.get(roomType.roomTypeName);

  return (
    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
        {imageList.length > 0 && (
          <Image
            src={imageList[currentImgIndex]}
            alt="Sustainable Practices for a Greener Future"
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="w-full h-full"
            priority
          />
        )}
        <button
          type="button"
          className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => onSlideImage(false)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => onSlideImage(true)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="p-6 px-2 sm:pr-6 sm:pl-6">
        <div className="flex justify-between items-center mb-4">
          <p className="antialiased font-sans text-lg font-light leading-normal text-inherit !font-semibold">
            {roomType.roomTypeName}
          </p>
          <Link
            type="button"
            href={RoutePath.ROOMS + `?type=${roomType.roomTypeName}`}
            className="text-gray-500 text-sm border border-gray-500 rounded-md px-3 py-1 hover:bg-[#d76076] hover:text-white hover:border-transparent transition-colors"
          >
            더보기
          </Link>
        </div>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 font-normal !text-gray-500">
          {description ?? ""}
        </p>
        <div>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`최대 인원 : ${roomType.maxCount} 명`}
          </p>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`주중 가격 : ${getCommaNumber(roomType.weekdayPrice)} ￦`}
          </p>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`금요일 가격 : ${getCommaNumber(roomType.fridayPrice)} ￦`}
          </p>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`주말 가격 : ${getCommaNumber(roomType.weekendPrice)} ￦`}
          </p>
        </div>
        <div className="mt-4 flex flex-row space-x-1">
          {room.beds.map((item, index) => {
            return (
              <p
                key={item.type}
                className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal"
              >
                {`${bedTypeConvert(item.type)} 침대 ${item.count}개${heightDividerText(room.beds.length, index)}`}
              </p>
            );
          })}
        </div>

        <button
          type="submit"
          className="text-white inline-flex items-center bg-[#d76076] font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full justify-center mt-5"
          onClick={() => {
            window.location.href = "https://booking.naver.com/booking/3/bizes/1227540?area=pll";
          }}
        >
          실시간 예약
        </button>
      </div>
    </div>
  );
};

export default RoomTypeItem;
