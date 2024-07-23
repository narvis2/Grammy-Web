import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import noneAuthInstance from "../../none/NoneAuthInstance";
import { BedType } from "@/data/model/bed/enum";
import { Grammy } from "../../endpoint/constants";

export async function getBedTypeList() {
  const response = noneAuthInstance
    .get<BaseResponse<BedType[]>>(Grammy.BED)
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ '${Grammy.BED} Response 👉`, data);
      return data;
    })
    .catch(axiosErrorHandler());
  return response;
}
