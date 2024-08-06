import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import noneAuthInstance from "../../none/NoneAuthInstance";
import { Grammy } from "../../endpoint/constants";
import { NoticeResponse } from "@/data/model/notice/types";

export async function getNoticeList() {
  const response = noneAuthInstance
    .get<BaseResponse<NoticeResponse[]>>(Grammy.NOTICE)
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ '${Grammy.NOTICE} Response 👉`, data);
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}

export async function getNoticeDetail(noticeId: string) {
  const url = `${Grammy.NOTICE_DETAILS}/${noticeId}`;

  const response = await noneAuthInstance
    .get<BaseResponse<NoticeResponse>>(url)
    .then((response) => response.data)
    .then((data) => {
      console.log(`⭐️ '${Grammy.NOTICE_DETAILS} Response 👉`, data);
      return data;
    })
    .catch(axiosErrorHandler());

  return response;
}
