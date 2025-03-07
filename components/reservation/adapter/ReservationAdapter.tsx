import { RoomAvailableReservationResponse } from "@/data/model/room";
import ReservationItem from "./item/ReservationItem";

type ReservationAdapterProps = {
  reservationList: RoomAvailableReservationResponse[];
  onReservationClick: (item: RoomAvailableReservationResponse) => void;
};

const ReservationAdapter = ({
  reservationList,
  onReservationClick,
}: ReservationAdapterProps) => {
  return (
    <section className={`flex items-start justify-center min-h-screen p-8`}>
      <div className="container grid grid-cols-1 gap-8  lg:grid-cols-2">
        {reservationList.map((item, index) => (
          <ReservationItem
            key={item.roomNumber.toString()}
            item={item}
            onItemClick={(item) => onReservationClick(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default ReservationAdapter;
