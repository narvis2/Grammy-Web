import { RoomTypeResponse } from "@/data/model/room";
import { staticImageUrl } from "@/data/utils/constants";
import dayjs from "dayjs";

export const roomTypeToRoomTypeImageList = (
  roomTypeList: RoomTypeResponse[]
) => {
  if (roomTypeList.length === 0) return [];

  return roomTypeList
    .map((item) => {
      const rooms = item.rooms;
      const roomsImage = rooms[0].images;

      const imageUrl =
        rooms.length > 0 && roomsImage.length > 0
          ? staticImageUrl + roomsImage[0].imageUrl
          : null;
      return imageUrl
        ? {
            roomType: item.roomTypeName,
            imageUrl: imageUrl,
          }
        : null;
    })
    .filter((item) => item !== null);
};

export const calculateDateDifference = (
  checkInDate: Date,
  checkOutDate?: Date
) => {
  if (checkOutDate === null || checkOutDate === undefined) {
    return 1;
  }

  const difference = dayjs(checkOutDate).diff(dayjs(checkInDate), "day");
  return difference;
};

export const getCalendarMaxYear = () => {
  const aYearFromNow = new Date();
  return new Date(aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1));
};

export const formatStayPeriod = (values: any): string => {
  const startDate = values[0] as Date;
  const endDate = values[1] as Date;
  const checkIn = dayjs(startDate);
  const checkOut = endDate ? dayjs(endDate) : checkIn.add(1, "day");

  const nights = checkOut.diff(checkIn, "day");
  const periodString = `${checkIn.format("YYYY.MM.DD")} ~ ${checkOut.format(
    "YYYY.MM.DD"
  )}`;

  return `${nights}박 ${nights + 1}일 (${periodString})`;
};
