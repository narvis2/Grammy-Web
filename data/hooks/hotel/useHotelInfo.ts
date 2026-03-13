import { hotelData } from "@/data/static";
import { HotelResponse } from "@/data/model/hotel";
import { useMemo } from "react";

function useHotelInfo() {
  const hotelInfo = useMemo<HotelResponse | undefined>(() => {
    return hotelData;
  }, []);

  return {
    hotelInfo,
  };
}

export default useHotelInfo;
