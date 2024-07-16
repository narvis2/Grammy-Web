import { getCommaNumber } from "@/data/mapper";
import { RoomAvailableReservationResponse } from "@/data/model/room";
import { staticImageUrl } from "@/data/utils/constants";

type ReservationItemProps = {
  item: RoomAvailableReservationResponse;
};

const ReservationItem = ({ item }: ReservationItemProps) => {
  return (
    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
        <img
          src={`${staticImageUrl + item.imageUrl}`}
          loading={"lazy"}
          alt="Sustainable Practices for a Greener Future"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 px-2 sm:pr-6 sm:pl-6">
        <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
          {item.roomType}
        </p>
        <a
          href="#"
          className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
        >
          {`${item.roomNumber}호`}
        </a>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          {`편안한 분위기를 느낄 수 있는 객실입니다.`}
        </p>
        <div>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
            {`가격 : ${getCommaNumber(item.totalPrice)} ￦`}
          </p>
        </div>
        {/* <div className="mt-4">
          {room.beds.map((item, index) => {
            return (
              <p
                key={item.type}
                className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal"
              >
                {`${item.type} 침대 ${item.count}개`}
              </p>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ReservationItem;
