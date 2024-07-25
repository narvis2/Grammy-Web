import { getCommaNumber } from "@/data/mapper";
import { RoomTypeResponse } from "@/data/model/room";
import {
  roomTypeSubDescriptions,
  staticImageUrl,
} from "@/data/utils/constants";
import { useState } from "react";

type RoomTypeAdapterProps = {
  roomType: RoomTypeResponse;
};

const RoomTypeAdapter = ({ roomType }: RoomTypeAdapterProps) => {
  const [mainTypeIndex, setMainTypeIndex] = useState<number>(0);

  const mainImageList = roomType.rooms[0].images.map(
    (item) => staticImageUrl + item.imageUrl
  );

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (mainTypeIndex + 1) % mainImageList.length
      : (mainTypeIndex - 1 + mainImageList.length) % mainImageList.length;
    setMainTypeIndex(index);
  }

  const description = roomTypeSubDescriptions.get(roomType.roomTypeName);

  return (
    <div className="flex flex-col sm:flex-row justify-start lg:justify-center lg:items-center mt-10 lg:mt-20 px-10 sm:px-0">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg">
        <img
          src={mainImageList[mainTypeIndex]}
          alt={roomType.roomTypeName}
          className="object-cover h-96"
        />
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="p-6 px-2 sm:pr-6 sm:pl-4">
        <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
          {roomType.roomTypeName}
        </p>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
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
            {`주말 가격 : ${getCommaNumber(roomType.weekendPrice)} ￦`}
          </p>
        </div>
        <div className="mt-4">
          {roomType.rooms[0].beds.map((item, index) => {
            return (
              <p
                key={item.type}
                className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal"
              >
                {`${item.type} 침대 ${item.count}개`}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomTypeAdapter;
