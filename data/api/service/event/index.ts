import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import noneAuthInstance from "../../none/NoneAuthInstance";
import { SpecialEventResponse } from "@/data/model/event/types";
import { Grammy } from "../../endpoint/constants";

export async function getSpecialEventList() {
  const response = noneAuthInstance.get<BaseResponse<SpecialEventResponse[]>>(Grammy.EVENT)
  .then((response) => response.data)
  .then((data) => {
    if (process.env.NODE_ENV === "development") {
        console.log(`⭐️ '${Grammy.BANNER} Response 👉`, data);
    }
    
    return data;
  }).catch(axiosErrorHandler());
  
  return response;
}