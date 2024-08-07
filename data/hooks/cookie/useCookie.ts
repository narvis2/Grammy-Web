import { AuthModel } from "@/data/model/auth/types";
import { cookies } from "next/headers";

const useCookie = () => {
  const cookie = cookies();
  const accessToken = cookie.get("A_TOKEN")?.value;
  const refreshToken = cookie.get("R_TOKEN")?.value;

  return <AuthModel>{ accessToken, refreshToken };
};

export default useCookie;
