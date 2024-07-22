import { RoomTypeResponse } from "@/data/model/room";

type RoomTabV1Props = {
  roomTypeList: RoomTypeResponse[];
  tabIndex: number;
  onTabClick: (index: number) => void;
};

const RoomTabV1 = ({ tabIndex, roomTypeList, onTabClick }: RoomTabV1Props) => {
  return (
    <div className="inner-con inner-1760 flex items-center justify-between ml-10 mr-10">
      <div className="tap-menu view-tap flex items-center">
        <a href="/rooms" className="mr-4">
          객실 유형
        </a>
        <a className="mr-4"> |</a>
        <ul className="flex items-center space-x-4">
          {roomTypeList.map((item, index) => {
            const isFocused = tabIndex === index;
            return (
              <li
                key={item.roomTypeName}
                className={tabIndex === index ? "current" : ""}
              >
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
      <h5 className="tit">GRAMMY HOTEL</h5>
    </div>
  );
};

export default RoomTabV1;
