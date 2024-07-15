"use client";

import { RoomTypeResponse } from "@/data/model/room";
import RoomItem from "./item/RoomItem";

type RoomAdapterProps = {
  roomType: RoomTypeResponse;
};

const RoomAdapter = ({ roomType }: RoomAdapterProps) => {
  return (
    <section
      className={`flex items-start justify-center min-h-screen p-8 mt-8`}
    >
      {/* container grid grid-cols-1 gap-8 lg:grid-cols-2 */}
      <div className="container grid grid-cols-1 gap-8  lg:grid-cols-2">
        {roomType.rooms.map((item, index) => (
          <RoomItem key={item.number.toString()} room={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomAdapter;
