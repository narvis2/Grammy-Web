import { roomTypeData } from "@/data/static";
import { RoutePath } from "@/data/model/menu/enum";
import { MenuModel } from "@/data/model/menu/types";
import { useMemo } from "react";

function useRoomTypeInfo() {
  const roomTypeList = useMemo(() => {
    return roomTypeData.map<MenuModel>((item) => {
      return {
        title: item.roomTypeName,
        path: RoutePath.ROOMS,
      };
    });
  }, []);

  return {
    roomTypeList,
  };
}

export default useRoomTypeInfo;
