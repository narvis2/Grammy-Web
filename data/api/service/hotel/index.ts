import { Grammy } from "@/data/api/endpoint/constants"
import noneAuthInstance from "@/data/api/none/NoneAuthInstance"
import { axiosErrorHandler, BaseResponse } from "@/data/model/base"
import { HotelResponse } from "@/data/model/hotel"

export async function getHotel() {
  const response = noneAuthInstance
    .get<BaseResponse<HotelResponse>>(Grammy.GET_HOTEL)
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ ${Grammy.GET_HOTEL} Response 👉`, data)
      return data
    })
    .catch(axiosErrorHandler())

  return response
}
