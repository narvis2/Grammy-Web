import { getCommaNumber } from "@/data/mapper";
import { RoomAvailableReservationResponse } from "@/data/model/room";
import {
  roomTypeSubDescriptions,
  staticImageUrl,
} from "@/data/utils/constants";
import { useState } from "react";

type ReservationItemProps = {
  item: RoomAvailableReservationResponse;
};

const ReservationItem = ({ item }: ReservationItemProps) => {
  const imageList = item.imageUrl.map((item) => staticImageUrl + item);

  const [currentImgIndex, setCurrentImageIndex] = useState<number>(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgIndex + 1) % imageList.length
      : (currentImgIndex - 1 + imageList.length) % imageList.length;
    setCurrentImageIndex(index);
  }

  const description = roomTypeSubDescriptions.get(item.roomType);

  return (
    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
        <img
          src={imageList[currentImgIndex]}
          loading={"lazy"}
          alt="Sustainable Practices for a Greener Future"
          className="object-cover w-full h-full"
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
      <div className="p-6 px-2 sm:pr-6 sm:pl-6">
        <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
          {item.roomType}
        </p>
        <a
          href="#"
          className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
        >
          {`${item.roomNumber}호`}
        </a>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          {description ?? ""}
        </p>
        <div>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`총 인원 : ${item.guestCount} 명`}
          </p>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`가격 : ${getCommaNumber(item.totalPrice)} ￦`}
          </p>
        </div>
        <div className="mt-4">
          {item.beds.map((item, index) => {
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

export default ReservationItem;
