import { Grammy } from "@/data/api/endpoint/constants";
import { BaseResponse } from "@/data/model/base";
import { RoutePath } from "@/data/model/menu/enum";
import { MenuModel } from "@/data/model/menu/types";
import { RoomTypeResponse } from "@/data/model/room";
import { useMemo } from "react";
import { useQueryClient } from "react-query";

function useRoomTypeInfo() {
  const queryClient = useQueryClient();
  const roomType = queryClient.getQueryData([Grammy.ROOM_TYPE]) as
    | BaseResponse<RoomTypeResponse[]>
    | undefined;

  const roomTypeList = useMemo(() => {
    if (!roomType) return [];

    const list = roomType.data ?? [];
    if (roomType.success && list.length > 0) {
      return list.map<MenuModel>((item) => {
        return {
          title: item.roomTypeName,
          path: RoutePath.ROOMS,
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
