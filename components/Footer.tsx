import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const { hotelInfo } = useHotelInfo();

  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <div className="mb-4">
              <ul className="flex flex-row flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
                <li className="border-b border-transparent hover:border-black py-2">
                  <a href="/prologue">소개</a>
                </li>
                <li className="border-b border-transparent hover:border-black py-2">
                  <a href="/rooms">객실보기</a>
                </li>
                <li className="border-b border-transparent hover:border-black py-2">
                  <a href="/notice">공지사항</a>
                </li>
                <li className="border-b border-transparent hover:border-black py-2">
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "https://booking.naver.com/booking/3/bizes/1227540?area=pll";
                    }}
                  >
                    예약하기
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-4xl font-bold">{`${hotelInfo?.name} 호텔`}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full md:w-2/3 space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12 items-center md:items-start">
            <div className="flex flex-col space-y-4 md:w-2/4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">주소:</span>{" "}
                {hotelInfo?.address ?? "" + hotelInfo?.addressDetail ?? ""}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">전화번호:</span>{" "}
                {"054-727-0600"}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">이메일:</span>
                az49890@naver.com
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:w-2/5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">대표자:</span>
                최수영
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">사업자 등록번호:</span>
                {hotelInfo?.hotelDetail?.businessNumber ??
                  "등록된 정보가 없습니다."}
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:w-1/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">계좌번호:</span>
                {hotelInfo?.hotelDetail?.accountNumber ??
                  "등록된 정보가 없습니다."}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">예금주:</span>
                {hotelInfo?.hotelDetail?.depositor ?? "등록된 정보가 없습니다."}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                {/* 인스타그램 텍스트 대신 아이콘 사용 */}
                <AiFillInstagram className="text-2xl mr-2" />
                {"grami_hotel_offical"}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">
            &copy; 2024 그라미호텔. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
