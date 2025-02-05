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
import { AnimatePresence, motion } from "framer-motion";

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

  // 모바일 오버레이에 표시할 메인 메뉴 배열 (하위 서브메뉴 포함)
  const mainMenu = [
    {
      title: RouteName.PROLOGUE,
      path: RoutePath.PROLOGUE,
      submenu: Prologue_tabList,
    },
    {
      title: RouteName.ROOMS,
      path: RoutePath.ROOMS,
      submenu: roomTypeList,
    },
    {
      title: RouteName.SPECIAL_OFFERS,
      path: RoutePath.SPECIAL_OFFERS,
      submenu: Offers_tabList,
    },
    {
      title: "EVENT",
      action: () => window.alert("서비스 준비중입니다."),
    },
    {
      title: "REVIEW",
      action: () => window.alert("서비스 준비중입니다."),
    },
    {
      title: "RESERVATION",
      action: () =>
        (window.location.href =
          "https://booking.naver.com/booking/3/bizes/1227540?area=pll"),
    },
    {
      title: RouteName.NOTICE,
      path: RoutePath.NOTICE,
    },
  ];

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

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  if (pathname === RoutePath.LOGIN) {
    return null;
  }

  return (
    <nav className="h-20 z-20 border-b border-gray-200 w-full shadow-sm fixed top-0 bg-white">
      <div className="flex justify-between items-center sm:px-10 p-4 h-full">
        {/* 로고 영역 */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Image
            src={"/images/grami_logo.svg"}
            alt="logo"
            width={165}
            height={10}
          />
        </div>

        {/* 데스크탑 네비게이션 (sm 이상) */}
        <div
          className="hidden sm:flex ml-10 flex-1 flex space-x-6 justify-start items-center overflow-x-auto scrollbar-hidden sm:justify-center h-full"
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
                window.location.href =
                  "https://booking.naver.com/booking/3/bizes/1227540?area=pll";
              }}
            >
              RESERVATION
            </button>
          </div>
          <div className="flex-shrink-0 snap-start">
            <NavTab
              menu={{ title: RouteName.NOTICE, path: RoutePath.NOTICE }}
            />
          </div>
        </div>

        {/* 모바일 햄버거 버튼 (sm 미만) */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* 모바일 네비게이션 메뉴 오버레이 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.6, // fade in/out 시간이 0.6초
                ease: [0.33, 1, 0.68, 1], // 약간의 overshoot와 lingering 효과를 주는 cubic-bezier 함수
              },
            }}
            className="fixed inset-x-0 top-20 bottom-0 z-50 transition-opacity duration-300"
          >
            {/* 반투명 배경 (클릭 시 메뉴 닫기) */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            {/* 전체 화면 오버레이 메뉴 패널 */}
            <div className="relative bg-white w-full h-full p-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                {mainMenu.map((item, index) => (
                  <div key={index} className="space-y-2">
                    {item.path ? (
                      <a
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg font-medium hover:text-gray-700"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          item.action && item.action();
                        }}
                        className="block text-lg font-medium hover:text-gray-700"
                      >
                        {item.title}
                      </button>
                    )}
                    {item.submenu && (
                      <ul className="space-y-1 pl-4 border-l border-gray-300">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm hover:text-gray-600"
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
