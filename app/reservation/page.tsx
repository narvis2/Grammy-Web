"use client";

import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
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
import { useRouter } from "next/navigation";
import { useShowCommonModal } from "@/data/store/useCommonModalStore";

const Reservation = () => {
  const router = useRouter();

  const showCommonModal = useShowCommonModal();

  const [tabIndex, setTabIndex] = useState(0);
  const [startValue, onStartChange] = useState<any>(null);

  const [reservationList, setReservationList] = useState<
    RoomAvailableReservationResponse[]
  >([]);
  const [roomTypeList, setRoomTypeList] = useState<string[]>([]);

  const onReservationClick = useCallback(
    (item: RoomAvailableReservationResponse) => {
      showCommonModal({
        title: "알림",
        contents: "예약 화면으로 넘어갑니다.",
        onConfirm() {
          window.open(
            "https://gramihotel.modoo.at/?link=194u7d3i",
            "_blank",
            "noopener,noreferrer"
          );
        },
      });
    },
    [router, startValue]
  );

  const resultList = useMemo(() => {
    if (reservationList.length === 0 || roomTypeList.length === 0) return [];

    return reservationList.filter(
      (item) => item.roomType === roomTypeList[tabIndex]
    );
  }, [reservationList, tabIndex, roomTypeList]);

  useLayoutEffect(() => {
    const now = new Date();
    onStartChange([now, dayjs(now).add(1, "day").toDate()]);
  }, []);

  return (
    <div className={`pt-20 w-full`}>
      <div className="mx-10 lg:mx-20 mt-10 mb-10">
        <Calendar
          locale="ko"
          minDetail="month"
          maxDetail="month"
          allowPartialRange={true}
          selectRange={true}
          next2Label={null}
          prev2Label={null}
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
      <ReservationAdapter
        reservationList={resultList}
        onReservationClick={(item) => {
          onReservationClick(item);
        }}
      />
    </div>
  );
};

export default Reservation;
