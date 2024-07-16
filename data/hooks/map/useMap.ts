import { useCallback, useEffect } from "react";
import { HotelResponse } from "@/data/model/hotel";

const useMap = (hotelInfo: HotelResponse | undefined) => {
  const initMap = useCallback(() => {
    if (!hotelInfo) return;

    const x = parseFloat(hotelInfo.latitude);
    const y = parseFloat(hotelInfo.longitude);

    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    });

    const mapMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });
  }, [hotelInfo]);

  useEffect(() => {
    initMap();
  }, [hotelInfo]);
};
export default useMap;
