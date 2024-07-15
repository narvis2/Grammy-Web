import {
  RoomAvailableReservationRequest,
  RoomAvailableReservationResponse,
  RoomTypeResponse,
} from "@/data/model/room";
import noneAuthInstance from "../../none/NoneAuthInstance";
import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import { Grammy } from "../../endpoint/constants";

// RoomType 별 RoomList 가져오기
export async function getRoomTypeList() {
  const response = noneAuthInstance
    .get<BaseResponse<RoomTypeResponse[]>>(Grammy.ROOM_TYPE)
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ '${Grammy.ROOM_TYPE} Response 👉`, data);
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}

// 특정 날짜에 예약 가능한 객실 리스트
export async function getRoomAvailableReservationList(
  request: RoomAvailableReservationRequest
) {
  const response = noneAuthInstance<
    BaseResponse<RoomAvailableReservationResponse[]>
  >({
    url: Grammy.AVAILABLE_RESERVATION,
    method: "get",
    params: {
      hotelId: 1,
      checkInDateTime: request.checkInDateTime,
      duration: request.duration,
    },
  })
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ '${Grammy.AVAILABLE_RESERVATION} Response 👉`, data);
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}
