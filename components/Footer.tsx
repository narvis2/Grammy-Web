import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { phoneFormatter } from "@/data/mapper";
import Link from "next/link";

export default function Footer() {
  const { hotelInfo } = useHotelInfo();

  return (
    <footer className="bg-[#F5F5F5] py-2">
      <div className="max-w-screen-xl w-full mx-auto p-4 md:flex md:items-center md:justify-between border-b-gray-200 border-b">
        <div className="text-sm text-gray-800 sm:text-center">
          <span className="hover:underline text-semibold text-lg">
            {`${hotelInfo?.name} 호텔`}
          </span>
        </div>
        <ul className="flex flex-wrap gap-4 md:gap-6 items-center text-sm text-gray-800 mt-2 sm:mt-0">
          <li>
            <Link
              href="/faqs"
              className="hover:underline text-semibold text-lg"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* 왼쪽 영역 - 주소, 사업자 등록번호, 전화번호 */}
        <div className="flex space-x-6 items-center">
          <div>
            <span className="font-semibold">주소:</span>{" "}
            {hotelInfo?.address ?? "" + hotelInfo?.addressDetail ?? ""}
          </div>
          <div>
            <span className="font-semibold">사업자 등록번호:</span> 123-45-67890
          </div>
          <div>
            <span className="font-semibold">전화번호:</span>{" "}
            {phoneFormatter(hotelInfo?.phoneNumber ?? "")}
          </div>
        </div>

        {/* 오른쪽 영역 - 공지사항 */}
        <div>{/* 공지사항 내용 */}</div>
      </div>
    </footer>
  );
}
