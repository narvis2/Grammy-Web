import { axiosErrorHandler, BaseResponse } from "@/data/model/base";
import noneAuthInstance from "../../none/NoneAuthInstance";
import { SignInRequest, SignInResponse } from "@/data/model/sign/types";
import { Grammy } from "../../endpoint/constants";

export async function requestSignIn(request: SignInRequest) {
  const body = {
    email: request.email,
    password: request.password,
  };

  const response = await noneAuthInstance
    .post<BaseResponse<SignInResponse>>(Grammy.SIGN_IN, body)
    .then((response) => response.data)
    .catch((error) => axiosErrorHandler()(error));

  if (!response.success) {
    return Promise.reject(response);
  }

  return response;
}
