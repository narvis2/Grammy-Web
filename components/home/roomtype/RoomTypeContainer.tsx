import { RoomTypeResponse } from "@/data/model/room";
import RoomTypeHeader from "./RoomTypeHeader";
import RoomTypeItem from "@/components/room/adapter/item/RoomTypeItem";

type RoomTypeContainerProps = {
  roomTypeList: RoomTypeResponse[];
};

const RoomTypeContainer = ({ roomTypeList }: RoomTypeContainerProps) => {
  return (
    <section className="pt-12 pb-20 bg-[#FFFFFF] ">
      <RoomTypeHeader
        title="객실 유형"
        description="그라미 호텔의 특별한 객실을 누려보세요."
      />

      <div className="flex items-start justify-center min-h-screen p-8 mt-8">
        {roomTypeList.length > 0 && (
          <div className="container grid grid-cols-1 gap-8  lg:grid-cols-2">
            {roomTypeList.map((item) => {
              return <RoomTypeItem key={item.roomTypeName} roomType={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomTypeContainer;
