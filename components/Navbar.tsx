import Link from "next/link";
import { FaHotel } from "react-icons/fa6";
import { useEffect, useState } from "react";
import SubMenu from "./navbar/SubMenu";
import { RouteName, RoutePath } from "@/data/model/menu/enum";
import DrawerMenu from "./navbar/DrawerMenu";
import NavTab from "./navbar/NavTab";
import useRoomTypeInfo from "@/data/hooks/roomType/useRoomTypeInfo";

const drawerMenuList = [
  { title: RouteName.PROLOGUE, path: RoutePath.PROLOGUE },
  { title: RouteName.ROOMS, path: RoutePath.ROOMS },
  { title: RouteName.SPECIAL_OFFERS, path: RoutePath.SPECIAL_OFFERS },
  { title: RouteName.RESERVATION, path: RoutePath.RESERVATION },
  { title: RouteName.NOTICE, path: RoutePath.NOTICE },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [subMenuContent, setSubMenuContent] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const { roomTypeList } = useRoomTypeInfo();

  const handleMouseEnter = (content: string) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    setSubMenuContent(content);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setSubMenuContent(null);
    }, 600);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      isMenuOpen && setIsMenuOpen(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav")) {
        isMenuOpen && setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`h-20 z-20 border-b border-gray-200 w-full shadow-sm fixed top-0 bg-white`}
    >
      <div className="flex justify-between items-center sm:px-10 p-4">
        <div className="flex items-center gap-2">
          <FaHotel className="text-3xl" />
          <Link href="/" className="text-lg sm:text-xl font-semibold">
            그라미 호텔
          </Link>
        </div>

        {/* Hamburger Menu Button (visible only on small screens) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5zm10 2H5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu Links (hidden on small screens) */}
        <div className="flex-1 hidden sm:flex space-x-6 justify-center items-center">
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("prologue")}
            onMouseLeave={handleMouseLeave}
          >
            <NavTab
              menu={{ title: RouteName.PROLOGUE, path: RoutePath.PROLOGUE }}
            />

            {/* Submenu for PROLOGUE */}
            {subMenuContent === "prologue" && (
              <SubMenu
                menuList={[
                  { title: "그라미 호텔", path: RoutePath.PROLOGUE },
                  { title: "오시는 길", path: RoutePath.PROLOGUE },
                ]}
              />
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("rooms")}
            onMouseLeave={handleMouseLeave}
          >
            <NavTab menu={{ title: RouteName.ROOMS, path: RoutePath.ROOMS }} />
            {/* Submenu for ROOMS */}
            {subMenuContent === "rooms" && <SubMenu menuList={roomTypeList} />}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("special_offers")}
            onMouseLeave={handleMouseLeave}
          >
            <NavTab
              menu={{
                title: RouteName.SPECIAL_OFFERS,
                path: RoutePath.SPECIAL_OFFERS,
              }}
            />
            {/* Submenu for SPECIAL OFFERS */}
            {subMenuContent === "special_offers" && (
              <SubMenu
                menuList={[
                  { title: "침구류", path: RoutePath.SPECIAL_OFFERS },
                  { title: "어메니티", path: RoutePath.SPECIAL_OFFERS },
                ]}
              />
            )}
          </div>
          <button
            type="button"
            className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
            onClick={() => window.alert("서비스 준비중입니다.")}
          >
            EVENT
          </button>
          <button
            type="button"
            className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
            onClick={() => window.alert("서비스 준비중입니다.")}
          >
            REVIEW
          </button>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("reservation")}
            onMouseLeave={handleMouseLeave}
          >
            <NavTab
              menu={{
                title: RouteName.RESERVATION,
                path: RoutePath.RESERVATION,
              }}
            />
            {/* Submenu for RESERVATION */}
            {subMenuContent === "reservation" && (
              <SubMenu
                menuList={[
                  { title: "예약안내", path: RoutePath.RESERVATION },
                  { title: "실시간 예약", path: RoutePath.RESERVATION },
                ]}
              />
            )}
          </div>
          <NavTab menu={{ title: RouteName.NOTICE, path: RoutePath.NOTICE }} />
        </div>
      </div>

      {/* Mobile Menu (visible only when isMenuOpen is true) */}
      {isMenuOpen && <DrawerMenu menuList={drawerMenuList} />}
    </nav>
  );
}
