import { BaseResponse } from "@/data/model/base";
import { RefreshTokenResponse } from "@/data/model/sign/types";
import { useAuthStore } from "@/data/store/useAuthStore";
import { baseUrl } from "@/data/utils/constants";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const authInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});

authInstance.defaults.headers.common["Content-Type"] = "application/json";

authInstance.defaults.timeout = 3000;

authInstance.interceptors.request.use(
  async (config: any | AxiosRequestConfig) => {
    const baseUrl = config.baseURL;
    const url = config.url;

    const accessToken = useAuthStore.getState().getAccessToken();
    console.log(`📮 accessToken 👉`, accessToken);

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    console.log(`📮 Auth API Request Url 👉`, baseUrl + url);
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response) {
      const data = error.response.data as BaseResponse<any>;

      // Token 이 만료된 경우 Token 재발급
      if (data.code === -1006) {
        const {
          getAccessToken,
          getRefreshToken,
          setAccessToken,
          clearAccessToken,
        } = useAuthStore.getState();
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        if (accessToken && refreshToken) {
          try {
            clearAccessToken();
            const response = await axios.post<
              BaseResponse<RefreshTokenResponse>
            >(`http://localhost:8080/api/v1/sign/refresh-token`, null, {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
                "Content-Type": "application/json",
              },
              timeout: 30000,
            });

            const newAccessToken = response.data.data?.accessToken;

            if (!newAccessToken) {
              console.log(
                `🙀 refreshToken API 를 통해 요청했으나 newAccessToken 이 undefined 임 🙀`
              );
              return Promise.reject(error);
            }

            setAccessToken(newAccessToken);

            const errorConfig = error.config;
            if (errorConfig) {
              errorConfig.headers["Authorization"] = `Bearer ${newAccessToken}`;
              return authInstance.request(errorConfig);
            } else {
              console.error("🙀 error.config 가 undefined 입니다 🙀");
            }
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        } else {
          console.error("🙀 액세스 토큰 또는 리프레시 토큰이 없습니다 🙀");
        }
      }
    }

    return Promise.reject(error);
  }
);

export default authInstance;
