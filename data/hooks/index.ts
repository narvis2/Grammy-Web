import { HotelResponse } from "../model/hotel";
import { RoomResponse, RoomTypeResponse } from "../model/room";
import { BannerResponse } from "../model/banner/types";
import { NoticeResponse } from "../model/notice/types";
import { BedType } from "../model/bed/enum";
import { SpecialEventResponse } from "../model/event/types";
import {
  hotelData,
  roomTypeData,
  getRoomById,
  bannerData,
  noticeData,
  getNoticeById,
  bedTypeData,
  specialEventData,
} from "../static";

type StaticQueryResult<T> = {
  data: T | undefined;
  isLoading: false;
  isFetching: false;
  isError: false;
  success: true;
};

function makeResult<T>(data: T): StaticQueryResult<T> {
  return {
    data,
    isLoading: false,
    isFetching: false,
    isError: false,
    success: true,
  };
}

export const useGetHotel = () => makeResult(hotelData);

export const useRoomTypeList = () => makeResult(roomTypeData);

export const useSpecialEventList = () => makeResult(specialEventData);

export const useBannerList = () => makeResult(bannerData);

export const useNoticeList = () => makeResult(noticeData);

export const useNoticeDetails = (noticeId: string) =>
  makeResult(getNoticeById(noticeId));

export const useBedTypeList = () => makeResult(bedTypeData);

export const useRoomDetails = (roomId: string) =>
  makeResult(getRoomById(roomId));
