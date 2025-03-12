import authInstance from "../../auth/AuthInstance";
import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import { Grammy } from "../../endpoint/constants";
import { ReservationCreateRequest } from "@/data/model/reservation/types";
import { PaymentRequest } from "@/data/model/pay/types";

export async function requestReservationPrepare(
  request: ReservationCreateRequest
) {
  const response = await authInstance
    .post<BaseResponse<number>>(Grammy.RESERVATION_PREPARE, request)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      if (process.env.NODE_ENV === "development") {
        console.log(`⭐️ '${Grammy.RESERVATION_PREPARE} Response 👉`, data);
      }
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}

export async function requestReservation(request: PaymentRequest) {
  const response = await authInstance
    .post<BaseResponse<any>>(Grammy.RESERVATION, request)
    .then((response) => response.data)
    .then((data) => {
      if (process.env.NODE_ENV === "development") {
        console.log(`⭐️ POST '${Grammy.RESERVATION} Response 👉`, data);
      }
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}
