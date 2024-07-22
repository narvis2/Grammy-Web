import { BaseResponse } from "@/data/model/base";
import { RouteName } from "@/data/model/menu/enum";
import { MenuModel } from "@/data/model/menu/types";
import { RoomTypeResponse } from "@/data/model/room";
import { useMemo } from "react";
import { useQueryClient } from "react-query";

function useRoomTypeInfo() {
  const queryClient = useQueryClient();
  const roomType = queryClient.getQueryData(["useRoomTypeList"]) as
    | BaseResponse<RoomTypeResponse[]>
    | undefined;

  const roomTypeList = useMemo(() => {
    if (!roomType) return [];

    const list = roomType.data ?? [];
    if (roomType.success && list.length > 0) {
      return list.map<MenuModel>((item) => {
        return {
          title: item.roomTypeName,
          path: RouteName.ROOMS,
        };
      });
    }

    return [];
  }, [roomType]);

  return {
    roomTypeList,
  };
}

export default useRoomTypeInfo;
