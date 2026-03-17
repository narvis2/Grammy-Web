"use client";

import { useEffect, useState, useCallback } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  const Prologue_tabList = [
    { title: PROLOGUE_TYPE.INTRODUCTION, path: RoutePath.PROLOGUE },
    { title: PROLOGUE_TYPE.TABLE_VIEW, path: RoutePath.PROLOGUE },
    { title: PROLOGUE_TYPE.OTHER_INFO, path: RoutePath.PROLOGUE },
    { title: PROLOGUE_TYPE.HOW_TO_COME, path: RoutePath.PROLOGUE },
  ];

  const Offers_tabList = [
    { title: OFFERS_TYPE.BED, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.TERRACE, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.BATH, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.CAFETERIA, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.AMENITIES, path: RoutePath.SPECIAL_OFFERS },
    { title: OFFERS_TYPE.ROOM_ITEMS, path: RoutePath.SPECIAL_OFFERS },
  ];

  const { roomTypeList } = useRoomTypeInfo();

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

  // 히어로 섹션이 있는 페이지 목록
  const pagesWithHero = [
    "/",
    RoutePath.PROLOGUE,
    RoutePath.ROOMS,
    RoutePath.SPECIAL_OFFERS,
    RoutePath.NOTICE,
  ];
  const hasHero = pagesWithHero.includes(pathname);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  const handleMouseEnter = (content: string) => {
    if (timeoutId !== null) clearTimeout(timeoutId);
    setSubMenuContent(content);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setSubMenuContent(null), 600);
    setTimeoutId(id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, handleScroll]);

  if (pathname === RoutePath.LOGIN) return null;

  const showTransparent = hasHero && !isScrolled && !isMenuOpen;
  const textColor = "text-white";

  return (
    <>
      <nav
        className={`h-20 z-30 w-full fixed top-0 transition-all duration-500 ${
          showTransparent ? "navbar-transparent" : "navbar-solid"
        }`}
      >
        {/* 투명 navbar일 때 텍스트 가독성을 위한 상단 그라디언트 */}
        {showTransparent && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        )}
        <div className="relative flex justify-between items-center sm:px-10 px-5 h-full max-w-[1400px] mx-auto">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <Image
              src="/images/grami_logo.svg"
              alt="그라미호텔 로고"
              width={150}
              height={10}
              className="transition-all duration-300"
            />
          </div>

          {/* Desktop Nav */}
          <div
            className="hidden sm:flex ml-10 flex-1 space-x-8 justify-center items-center overflow-x-auto h-full"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            <div
              className="relative group flex-shrink-0"
              onMouseEnter={() => !isMobile && handleMouseEnter("prologue")}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              <NavTab
                menu={{ title: RouteName.PROLOGUE, path: RoutePath.PROLOGUE }}
                className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 ${textColor}`}
              />
              {subMenuContent === "prologue" && (
                <SubMenu menuList={Prologue_tabList} />
              )}
            </div>
            <div
              className="relative group flex-shrink-0"
              onMouseEnter={() => !isMobile && handleMouseEnter("rooms")}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              <NavTab
                menu={{ title: RouteName.ROOMS, path: RoutePath.ROOMS }}
                className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 ${textColor}`}
              />
              {subMenuContent === "rooms" && <SubMenu menuList={roomTypeList} />}
            </div>
            <div
              className="relative group flex-shrink-0"
              onMouseEnter={() => !isMobile && handleMouseEnter("special_offers")}
              onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            >
              <NavTab
                menu={{
                  title: RouteName.SPECIAL_OFFERS,
                  path: RoutePath.SPECIAL_OFFERS,
                }}
                className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 ${textColor}`}
              />
              {subMenuContent === "special_offers" && (
                <SubMenu menuList={Offers_tabList} />
              )}
            </div>
            <button
              type="button"
              className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 flex-shrink-0 ${textColor}`}
              onClick={() => window.alert("서비스 준비중입니다.")}
            >
              EVENT
            </button>
            <button
              type="button"
              className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 flex-shrink-0 ${textColor}`}
              onClick={() => window.alert("서비스 준비중입니다.")}
            >
              REVIEW
            </button>
            <div className="relative group flex-shrink-0">
              <button
                type="button"
                className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 flex-shrink-0 ${textColor}`}
                onClick={() => {
                  window.location.href =
                    "https://booking.naver.com/booking/3/bizes/1227540?area=pll";
                }}
              >
                RESERVATION
              </button>
            </div>
            <div className="flex-shrink-0">
              <NavTab
                menu={{ title: RouteName.NOTICE, path: RoutePath.NOTICE }}
                className={`text-sm tracking-widest-xl font-light uppercase transition-colors duration-300 hover:opacity-70 ${textColor}`}
              />
            </div>
          </div>

          {/* Mobile Hamburger */}
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
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay - nav 외부에 렌더링하여 backdrop-filter 의 containing block 영향을 받지 않도록 함 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-20 bottom-0 z-50"
          >
            {/* 불투명 배경으로 전체 덮기 */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="absolute inset-0 bg-stay-50 overflow-y-auto p-8 min-h-full"
            >
              <div className="max-w-md mx-auto space-y-6">
                {mainMenu.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="border-b border-stay-200 pb-4"
                  >
                    {item.path ? (
                      <a
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg font-display tracking-widest-xl text-stay-950 hover:text-stay-500 transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          item.action?.();
                        }}
                        className="block text-lg font-display tracking-widest-xl text-stay-950 hover:text-stay-500 transition-colors"
                      >
                        {item.title}
                      </button>
                    )}
                    {item.submenu && (
                      <ul className="mt-2 space-y-1 pl-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.path + `?type=${subItem.title}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm text-stay-600 hover:text-stay-400 transition-colors"
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
