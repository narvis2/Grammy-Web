import Link from "next/link";
import { FaHotel } from "react-icons/fa6";
import { RiCalendarFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="h-20 z-20 border-b border-gray-200 w-full shadow-sm p-4 sm:px-10 flex justify-between items-center fixed top-0 bg-white">
      <div className="flex items-center gap-2">
        <FaHotel className="text-4xl" />
        <Link href="/" className="text-lg sm:text-xl font-semibold">
          그라미 호텔
        </Link>
      </div>
      <div className="hidden sm:flex space-x-6">
        <Link
          href="/prologue"
          className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline hover:text-gray-300"
        >
          PROLOGUE
        </Link>
        <Link
          href="/rooms"
          className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline hover:text-gray-300"
        >
          ROOMS
        </Link>
        <Link
          href="/special_offers"
          className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline hover:text-gray-300"
        >
          SPECIAL OFFERS
        </Link>
        <button className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline hover:text-gray-300">
          EVENT
        </button>
        <button className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline hover:text-gray-300">
          REVIEW
        </button>
        <button className="text-lg sm:text-xl hover:text-gray-300 transition-colors hover:underline hover:text-gray-300">
          RESERVATION
        </button>
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
    </nav>
  );
}
