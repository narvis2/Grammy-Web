"use client";

import { useEffect, useMemo, useState } from "react";

import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useRoomAvailableReservationList } from "@/data/hooks";
import { RoomAvailableReservationResponse } from "@/data/model/room";
import ReservationTab from "@/components/reservation/tab/ReservationTab";
import ReservationAdapter from "@/components/reservation/adapter/ReservationAdapter";
import { isArray } from "lodash";
import {
  calculateDateDifference,
  formatStayPeriod,
  getCalendarMaxYear,
} from "@/data/mapper/room";
import { RiCalendarCheckFill } from "react-icons/ri";

const Reservation = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [startValue, onStartChange] = useState<any>(null);

  const [reservationList, setReservationList] = useState<
    RoomAvailableReservationResponse[]
  >([]);
  const [roomTypeList, setRoomTypeList] = useState<string[]>([]);

  const { mutateAsync: requestReservationList } =
    useRoomAvailableReservationList({
      onSuccess(data, variables, context) {
        const list = data.data ?? [];
        if (data.success && list.length > 0) {
          setReservationList(list);
        }
      },
      onError(error, variables, context) {},
    });

  const resultList = useMemo(() => {
    if (reservationList.length === 0 || roomTypeList.length === 0) return [];

    return reservationList.filter(
      (item) => item.roomType === roomTypeList[tabIndex]
    );
  }, [reservationList, tabIndex, roomTypeList]);

  useEffect(() => {
    requestReservationList(
      {
        checkInDateTime: dayjs(new Date()).format("YYYY-MM-DD"),
        duration: 1,
      },
      {
        onSuccess(data, variables, context) {
          const list = data.data ?? [];
          if (data.success) {
            if (list.length === 0) {
              setRoomTypeList([]);
              return;
            }

            const roomTypeList = list.reduce<string[]>((acc, item, index) => {
              if (!acc.includes(item.roomType)) {
                return [...acc, item.roomType];
              }
              return acc;
            }, [] as string[]);

            setRoomTypeList(roomTypeList);
          }
        },
      }
    );
  }, []);

  return (
    <div className={`pt-20 w-full`}>
      <div className="mx-10 lg:mx-20 mt-10 mb-10">
        <Calendar
          locale="ko"
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          allowPartialRange={true}
          selectRange={true}
          next2Label={null} // 년도 네비게이션 제거
          prev2Label={null} // 년도 네비게이션 제거
          formatDay={(locale, date) => dayjs(date).format("DD")}
          goToRangeStartOnSelect={true}
          onClickDay={(value) => {
            const now = new Date();
            const differenceNow = dayjs(value).diff(dayjs(now), "day");
            if (differenceNow < 0) {
              onStartChange(null);
            }
          }}
          onChange={async (value) => {
            if (!isArray(value)) return;

            const startDate = value[0] as Date;
            const endDate = value[1] as Date;

            if (!endDate) {
              onStartChange(null);
              return;
            }

            onStartChange(value);

            await requestReservationList({
              checkInDateTime: dayjs(startDate).format("YYYY-MM-DD"),
              duration: calculateDateDifference(startDate, endDate),
            });
          }}
          value={startValue}
          className="mx-auto w-full text-sm border-b"
          minDate={new Date()}
          maxDate={getCalendarMaxYear()}
        />
      </div>
      {roomTypeList.length > 0 && (
        <ReservationTab
          roomTypList={roomTypeList}
          tabPosition={tabIndex}
          onTabClick={(index) => setTabIndex(index)}
        />
      )}

      {startValue !== null && (
        <div className="inline-flex items-center p-2 pl-4 uppercase text-sm rounded-xl bg-white text-#e6e6e6 border border-[#777777] ms-20 mt-10 mb-5 gap-2">
          <RiCalendarCheckFill className="text-sm" />
          {formatStayPeriod(startValue)}
        </div>
      )}
      <ReservationAdapter reservationList={resultList} />
    </div>
  );
};

export default Reservation;
