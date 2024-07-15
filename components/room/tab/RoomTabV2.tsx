import { RoomTypeResponse } from "@/data/model/room";

type RoomTabProps = {
  roomTypeList: RoomTypeResponse[];
  tabPosition: number;
  onTabClick: (index: number) => void;
};

const RoomTabV2 = ({ roomTypeList, tabPosition, onTabClick }: RoomTabProps) => {
  return (
    <div className="flex flex-row justify-start items-center pl-20 border-b border-gray-200">
      <a href="sub2_room1.html?menu=2&amp;sub=1" className="mr-16">
        객실 유형
      </a>
      <div className="text-sm font-medium text-center text-[#939393]">
        <ul className="flex flex-wrap -mb-px justify-center">
          {roomTypeList.map((item, index) => {
            const isFocused = tabPosition === index;
            return (
              <li className="mr-2">
                {!isFocused ? (
                  <div
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#d76076] hover:border-[#d76076]"
                    onClick={() => onTabClick(index)}
                  >
                    {item.roomTypeName}
                  </div>
                ) : (
                  <div
                    className="inline-block p-4 text-[#c78390] border-b-2 border-[#c78390] rounded-t-lg active "
                    aria-current="page"
                    onClick={() => onTabClick(index)}
                  >
                    {item.roomTypeName}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RoomTabV2;
