import { BaseResponse } from "@/data/model/base";
import { HotelResponse } from "@/data/model/hotel";
import { useMemo } from "react";
import { useQueryClient } from "react-query";

function useQueryInfo() {
  const queryClient = useQueryClient();

  const hotel = queryClient.getQueryData(["useGetHotel"]) as
    | BaseResponse<HotelResponse>
    | undefined;

  const hotelInfo = useMemo(() => {
    if (!hotel) return undefined;

    const data = hotel.data;
    if (hotel.success && !!data) {
      return data;
    }

    return undefined;
  }, [hotel]);

  return {
    hotelInfo,
  };
}

export default useQueryInfo;
