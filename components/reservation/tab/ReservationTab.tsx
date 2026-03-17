type ReservationTabProps = {
  roomTypList: string[];
  tabPosition: number;
  onTabClick: (index: number) => void;
};

const ReservationTab = ({
  roomTypList,
  tabPosition,
  onTabClick,
}: ReservationTabProps) => {
  return (
    <div className="flex flex-row justify-center items-center border-b border-t border-gray-200">
      <div className="text-sm font-medium text-center text-[#939393]">
        <ul className="flex flex-wrap -mb-px justify-center">
          {roomTypList.map((item, index) => {
            const isFocused = tabPosition === index;
            return (
              <li key={item} className="mr-2">
                {!isFocused ? (
                  <div
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#bfae94] hover:border-[#bfae94]"
                    onClick={() => onTabClick(index)}
                  >
                    {item}
                  </div>
                ) : (
                  <div
                    className="inline-block p-4 text-[#3f3025] border-b-2 border-[#3f3025] rounded-t-lg active "
                    aria-current="page"
                    onClick={() => onTabClick(index)}
                  >
                    {item}
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

export default ReservationTab;
