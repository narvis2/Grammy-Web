import { useEffect, useState } from "react";
import SubMenu from "./navbar/SubMenu";
import { RouteName, RoutePath } from "@/data/model/menu/enum";
import NavTab from "./navbar/NavTab";
import useRoomTypeInfo from "@/data/hooks/roomType/useRoomTypeInfo";
import { usePathname } from "next/navigation";
import { OFFERS_TYPE } from "@/data/model/offers/enum";
import { PROLOGUE_TYPE } from "@/data/model/prologue/enum";
import useAgent from "@/data/hooks/agent/useAgent";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const { isMobile } = useAgent();
  const [subMenuContent, setSubMenuContent] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Prologue_tabList = [
    { title: PROLOGUE_TYPE.INTRODUCTION, path: RoutePath.PROLOGUE },
    { title: PROLOGUE_TYPE.TABLE_VIEW, path: RoutePath.PROLOGUE },
    { title: PROLOGUE_TYPE.OTHER_INFO, path: RoutePath.PROLOGUE },
    { title: PROLOGUE_TYPE.HOW_TO_COME, path: RoutePath.PROLOGUE },
  ];

  const Offers_tabList = [
    { title: OFFERS_TYPE.BED, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.AMENITIES, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.BATH, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.BREAKFAST, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.ROOM_ITEMS, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.SERVICE, path: RoutePath.SPECIAL_OFFERS },
  ];
  const { roomTypeList } = useRoomTypeInfo();

  const handleMouseEnter = (content: string) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    setSubMenuContent(content);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setSubMenuContent(null);
    }, 600);
    setTimeoutId(id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav")) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    isMobile && document.removeEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isMobile]);

  if (pathname === RoutePath.LOGIN) {
    return null;
  }

  return (
    <nav className="h-20 z-20 border-b border-gray-200 w-full shadow-sm fixed top-0 bg-white">
      <div className="flex justify-between items-center sm:px-10 p-4 h-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => {window.location.href = "/";}}>
          <Image src={"/images/grami_logo.svg"} alt="logo" width={180} height={10} />
        </div>

        <div
          className="ml-10 flex-1 flex space-x-6 justify-start items-center overflow-x-auto scrollbar-hidden sm:justify-center h-full"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
            scrollbarWidth: "none",
          }}
        >
          <div
            className="relative group flex-shrink-0 snap-start"
            onMouseEnter={() =>
              isMobile ? undefined : handleMouseEnter("prologue")
            }
            onMouseLeave={isMobile ? undefined : handleMouseLeave}
          >
            <NavTab
              menu={{ title: RouteName.PROLOGUE, path: RoutePath.PROLOGUE }}
            />
            {subMenuContent === "prologue" && (
              <SubMenu menuList={Prologue_tabList} />
            )}
          </div>
          <div
            className="relative group flex-shrink-0 snap-start"
            onMouseEnter={() =>
              isMobile ? undefined : handleMouseEnter("rooms")
            }
            onMouseLeave={isMobile ? undefined : handleMouseLeave}
          >
            <NavTab menu={{ title: RouteName.ROOMS, path: RoutePath.ROOMS }} />
            {subMenuContent === "rooms" && <SubMenu menuList={roomTypeList} />}
          </div>
          <div
            className="relative group flex-shrink-0 snap-start"
            onMouseEnter={() =>
              isMobile ? undefined : handleMouseEnter("special_offers")
            }
            onMouseLeave={isMobile ? undefined : handleMouseLeave}
          >
            <NavTab
              menu={{
                title: RouteName.SPECIAL_OFFERS,
                path: RoutePath.SPECIAL_OFFERS,
              }}
            />
            {subMenuContent === "special_offers" && (
              <SubMenu menuList={Offers_tabList} />
            )}
          </div>
          <button
            type="button"
            className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:border-b flex-shrink-0 snap-start"
            onClick={() => window.alert("서비스 준비중입니다.")}
          >
            EVENT
          </button>
          <button
            type="button"
            className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:border-b flex-shrink-0 snap-start"
            onClick={() => window.alert("서비스 준비중입니다.")}
          >
            REVIEW
          </button>
          <div
            className="relative group flex-shrink-0 snap-start"
            onMouseEnter={() =>
              isMobile ? undefined : handleMouseEnter("reservation")
            }
            onMouseLeave={isMobile ? undefined : handleMouseLeave}
          >
            <button
              type="button"
              className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:border-b flex-shrink-0 snap-start"
              onClick={() => {
                window.location.href = "https://booking.naver.com/booking/3/bizes/1227540?area=pll";
              }}
            >
              RESERVATION
            </button>
            {/* {subMenuContent === "reservation" && (
              <SubMenu
                menuList={[
                  { title: "예약안내", path: RoutePath.RESERVATION },
                  { title: "실시간 예약", path: RoutePath.RESERVATION },
                ]}
              />
            )} */}
          </div>
          <div className="flex-shrink-0 snap-start">
            <NavTab
              menu={{ title: RouteName.NOTICE, path: RoutePath.NOTICE }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
