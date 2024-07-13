import axios, { AxiosError } from "axios"
import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query"

export interface BaseResponse<T> {
  code: number
  data?: T
  resultMsg?: string
  success: boolean
}

export function axiosErrorHandler() {
  return (error: Error | AxiosError) => {
    if (axios.isAxiosError(error) && error.response) {
      console.warn(
        `🦋🦋🦋 ${error.config?.baseURL}${error.config?.url} API Error 👉`,
        error.response.data,
      )
      return error.response.data as BaseResponse<any>
    } else {
      const errorResult: BaseResponse<any> = {
        code: -1,
        resultMsg: "",
        success: false,
        data: undefined,
      }

      return errorResult
    }
  }
}

type T_Query<T> = UseQueryOptions<
  BaseResponse<T>,
  any,
  BaseResponse<T>,
  string[]
>
type T_InfiniteQuery<T> = UseInfiniteQueryOptions<
  BaseResponse<T>,
  any,
  BaseResponse<T>,
  BaseResponse<T>,
  string[]
>

type T_Mutation<T, F> = UseMutationOptions<BaseResponse<T>, any, F, any>

export type { T_Query, T_Mutation, T_InfiniteQuery }
