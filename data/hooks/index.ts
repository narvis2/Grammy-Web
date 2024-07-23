import { useMutation, useQuery } from "react-query";
import { T_Mutation, T_Query } from "../model/base";
import { HotelResponse } from "../model/hotel";
import { getHotel } from "../api/service/hotel";
import {
  getRoomAvailableReservationList,
  getRoomTypeList,
} from "../api/service/room";
import {
  RoomAvailableReservationRequest,
  RoomAvailableReservationResponse,
  RoomTypeResponse,
} from "../model/room";
import { getBannerList } from "../api/service/banner";
import { BannerResponse } from "../model/banner/types";
import { NoticeResponse } from "../model/notice/types";
import { getNoticeList } from "../api/service/notice";
import { BedType } from "../model/bed/enum";
import { getBedTypeList } from "../api/service/bed";

export const useGetHotel = (customOptions?: T_Query<HotelResponse>) =>
  useQuery(["useGetHotel"], () => getHotel(), customOptions);

export const useRoomTypeList = (customOptions?: T_Query<RoomTypeResponse[]>) =>
  useQuery(["useRoomTypeList"], () => getRoomTypeList(), customOptions);

export const useBannerList = (customOptions?: T_Query<BannerResponse[]>) =>
  useQuery(["useBannerList"], () => getBannerList(), customOptions);

export const useNoticeList = (customOptions?: T_Query<NoticeResponse[]>) =>
  useQuery(["useNoticeList"], () => getNoticeList(), customOptions);

export const useRoomAvailableReservationList = (
  customOption?: T_Mutation<
    RoomAvailableReservationResponse[],
    RoomAvailableReservationRequest
  >
) =>
  useMutation(
    (params) => getRoomAvailableReservationList(params),
    customOption
  );

export const useBedTypeList = (customOptions?: T_Query<BedType[]>) =>
  useQuery(["useBedTypeList"], () => getBedTypeList(), customOptions);
