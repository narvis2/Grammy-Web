import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import noneAuthInstance from "../../none/NoneAuthInstance";
import { BannerResponse } from "@/data/model/banner/types";
import { Grammy } from "../../endpoint/constants";

export async function getBannerList() {
  const response = noneAuthInstance
    .get<BaseResponse<BannerResponse[]>>(Grammy.BANNER)
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ '${Grammy.BANNER} Response 👉`, data);
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}
