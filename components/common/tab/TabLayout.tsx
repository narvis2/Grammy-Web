type TabLayoutProps = {
  title: string;
  tabList: string[];
  currentTab: string;
  onTabClick: (type: string) => void;
};

const TabLayout = ({
  title,
  tabList,
  currentTab,
  onTabClick,
}: TabLayoutProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:pl-20 border-b border-gray-200">
      <a
        href="sub2_room1.html?menu=2&amp;sub=1"
        className="mr-0 lg:mr-8 sm:border-r sm:pr-8 sm:border-gray-200"
      >
        {title}
      </a>
      <div className="text-sm font-medium text-center text-[#939393]">
        <ul className="flex flex-wrap -mb-px justify-center">
          {tabList.map((item) => {
            const isFocused = currentTab === item;
            return (
              <li className="mr-2" key={item}>
                {!isFocused ? (
                  <div
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#d76076] hover:border-[#d76076]"
                    onClick={() => onTabClick(item)}
                  >
                    {item}
                  </div>
                ) : (
                  <div
                    className="inline-block p-4 text-[#c78390] border-b-2 border-[#c78390] rounded-t-lg active "
                    aria-current="page"
                    onClick={() => onTabClick(item)}
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

export default TabLayout;
