import { useMutation, useQuery } from "react-query";
import { T_Mutation, T_Query } from "../model/base";
import { HotelResponse } from "../model/hotel";
import { getHotel } from "../api/service/hotel";
import {
  getRoomAvailableReservationList,
  getRoomDetails,
  getRoomTypeList,
} from "../api/service/room";
import {
  RoomAvailableReservationRequest,
  RoomAvailableReservationResponse,
  RoomResponse,
  RoomTypeResponse,
} from "../model/room";
import { getBannerList } from "../api/service/banner";
import { BannerResponse } from "../model/banner/types";
import { NoticeResponse } from "../model/notice/types";
import { getNoticeDetail, getNoticeList } from "../api/service/notice";
import { BedType } from "../model/bed/enum";
import { getBedTypeList } from "../api/service/bed";
import { SignInRequest, SignInResponse } from "../model/sign/types";
import { requestSignIn } from "../api/service/sign";
import { ReservationCreateRequest } from "../model/reservation/types";
import {
  requestReservation,
  requestReservationPrepare,
} from "../api/service/reservation";
import { PaymentRequest } from "../model/pay/types";
import { Grammy } from "../api/endpoint/constants";

export const useGetHotel = (customOptions?: T_Query<HotelResponse>) =>
  useQuery([Grammy.GET_HOTEL], () => getHotel(), {
    retry: false,
    notifyOnChangeProps: ["data", "error"], // 렌더링 반복의 주범. 나열된 속성 중 하나라도 변경되는 경우에만 구성 요소가 다시 렌더링
    refetchOnMount: false, // 마운트 시 데이터가 오래된 경우 다시 가져옴
    refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부
    refetchIntervalInBackground: false, // 탭/창이 백그라운드에 있는 동안 가져오지 않게
    refetchOnReconnect: false, // 다시 연결할 때 쿼리를 다시 가져오지 않음
    ...customOptions,
  });

export const useRoomTypeList = (customOptions?: T_Query<RoomTypeResponse[]>) =>
  useQuery([Grammy.ROOM_TYPE], () => getRoomTypeList(), {
    retry: false,
    notifyOnChangeProps: ["data", "error"], // 렌더링 반복의 주범. 나열된 속성 중 하나라도 변경되는 경우에만 구성 요소가 다시 렌더링
    refetchOnMount: false, // 마운트 시 데이터가 오래된 경우 다시 가져옴
    refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부
    refetchIntervalInBackground: false, // 탭/창이 백그라운드에 있는 동안 가져오지 않게
    refetchOnReconnect: false, // 다시 연결할 때 쿼리를 다시 가져오지 않음
    ...customOptions,
  });

export const useBannerList = (customOptions?: T_Query<BannerResponse[]>) =>
  useQuery([Grammy.BANNER], () => getBannerList(), customOptions);

export const useNoticeList = (customOptions?: T_Query<NoticeResponse[]>) =>
  useQuery([Grammy.NOTICE], () => getNoticeList(), {
    notifyOnChangeProps: ["data", "error"], // 렌더링 반복의 주범. 나열된 속성 중 하나라도 변경되는 경우에만 구성 요소가 다시 렌더링
    refetchOnMount: false, // 마운트 시 데이터가 오래된 경우 다시 가져옴
    refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부
    refetchIntervalInBackground: false, // 탭/창이 백그라운드에 있는 동안 가져오지 않게
    refetchOnReconnect: false, // 다시 연결할 때 쿼리를 다시 가져오지 않음
    keepPreviousData: true, // 쿼리 키(ex.페이지 번호)가 변경되어서 새로운 데이터를 요청하는 동안에도 마지막 data값을 유지
    ...customOptions,
  });

export const useNoticeDetails = (
  noticeId: string,
  customOptions?: T_Query<NoticeResponse>
) =>
  useQuery([Grammy.NOTICE_DETAILS, noticeId], () => getNoticeDetail(noticeId), {
    notifyOnChangeProps: ["data", "error"], // 렌더링 반복의 주범. 나열된 속성 중 하나라도 변경되는 경우에만 구성 요소가 다시 렌더링
    refetchOnMount: false, // 마운트 시 데이터가 오래된 경우 다시 가져옴
    refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부
    refetchIntervalInBackground: false, // 탭/창이 백그라운드에 있는 동안 가져오지 않게
    refetchOnReconnect: false, // 다시 연결할 때 쿼리를 다시 가져오지 않음
    ...customOptions,
  });

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
  useQuery([Grammy.BED], () => getBedTypeList(), {
    notifyOnChangeProps: ["data", "error"], // 렌더링 반복의 주범. 나열된 속성 중 하나라도 변경되는 경우에만 구성 요소가 다시 렌더링
    refetchOnMount: false, // 마운트 시 데이터가 오래된 경우 다시 가져옴
    refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부
    refetchIntervalInBackground: false, // 탭/창이 백그라운드에 있는 동안 가져오지 않게
    refetchOnReconnect: false, // 다시 연결할 때 쿼리를 다시 가져오지 않음
    ...customOptions,
  });

export const useRequestSignIn = (
  customOption?: T_Mutation<SignInResponse, SignInRequest>
) => useMutation((params) => requestSignIn(params), customOption);

export const useRequestReservationPrepare = (
  customOption?: T_Mutation<number, ReservationCreateRequest>
) => useMutation((params) => requestReservationPrepare(params), customOption);

export const useRoomDetails = (
  roomId: string,
  customOptions?: T_Query<RoomResponse>
) =>
  useQuery([Grammy.ROOM_DETAILS, roomId], () => getRoomDetails(roomId), {
    notifyOnChangeProps: ["data", "error"], // 렌더링 반복의 주범. 나열된 속성 중 하나라도 변경되는 경우에만 구성 요소가 다시 렌더링
    refetchOnMount: false, // 마운트 시 데이터가 오래된 경우 다시 가져옴
    refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부
    refetchIntervalInBackground: false, // 탭/창이 백그라운드에 있는 동안 가져오지 않게
    refetchOnReconnect: false, // 다시 연결할 때 쿼리를 다시 가져오지 않음
    ...customOptions,
  });

export const useRequestReservation = (
  customOption?: T_Mutation<any, PaymentRequest>
) => useMutation((params) => requestReservation(params), customOption);
