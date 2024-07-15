import Link from "next/link";
import { FaHotel } from "react-icons/fa6";
import { RiCalendarFill } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const [subMenuContent, setSubMenuContent] = useState(null);
  let timeoutId = null;

  const handleMouseEnter = (content) => {
    clearTimeout(timeoutId);
    setSubMenuContent(content);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setSubMenuContent(null);
    }, 7000);
  };

  return (
    <nav className="h-20 z-20 border-b border-gray-200 w-full shadow-sm fixed top-0 bg-white">
      <div className="flex justify-between items-center sm:px-10 p-4">
        <div className="flex items-center gap-2">
          <FaHotel className="text-4xl" />
          <Link href="/" className="text-lg sm:text-xl font-semibold">
            그라미 호텔
          </Link>
        </div>
        <div className="hidden sm:flex space-x-6">
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("prologue")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/prologue"
              className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
            >
              PROLOGUE
            </Link>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("rooms")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/rooms"
              className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
            >
              ROOMS
            </Link>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("special_offers")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/special_offers"
              className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
            >
              SPECIAL OFFERS
            </Link>
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
            <Link
              href="/reservation"
              className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline"
            >
              RESERVATION
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <RiCalendarFill className="text-4xl" />
          <Link
            href="/"
            className="text-lg sm:text-xl font-semibold hover:text-gray-300 transition-colors"
          >
            BOOKING NOW
          </Link>
        </div>
      </div>
      {subMenuContent && (
        <div
          className="absolute left-0 right-0 bg-gray-200 shadow-md border mt-2 w-full opacity-90"
          onMouseEnter={() => clearTimeout(timeoutId)}
          onMouseLeave={handleMouseLeave}
        >
          {subMenuContent === "prologue" && (
            <ul className="flex flex-col gap-0">
              <li className="border-b">
                <Link
                  href="/prologue"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  그라미 호텔
                </Link>
              </li>
              <li>
                <Link
                  href="/prologue"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  오시는 길
                </Link>
              </li>
            </ul>
          )}
          {subMenuContent === "rooms" && (
            <ul className="flex flex-col gap-0">
              <li className="border-b">
                <Link
                  href="/rooms"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  스탠다드 타입
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  로얄 스위트 타입
                </Link>
              </li>
            </ul>
          )}
          {subMenuContent === "special_offers" && (
            <ul className="flex flex-col gap-0">
              <li className="border-b">
                <Link
                  href="/special_offers"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  침구류
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/special_offers"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  어메니티
                </Link>
              </li>
              <li>
                <Link
                  href="/special_offers"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  에스프레소 바 카페
                </Link>
              </li>
            </ul>
          )}
          {subMenuContent === "reservation" && (
            <ul className="flex flex-col gap-0">
              <li className="border-b">
                <Link
                  href="/reservation"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  예약안내
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/reservation"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  실시간 예약
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="block px-4 py-2 text-lg hover:bg-gray-100"
                >
                  공지사항
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}
