import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { phoneFormatter } from "@/data/mapper";

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
                  <a href="/reservation">예약하기</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-4xl font-bold">{`${hotelInfo?.name} 호텔`}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full md:w-2/3 space-y-6 md:space-y-0 md:space-x-8 items-center md:items-start">
            <div className="flex flex-col space-y-4 md:w-1/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">주소:</span>{" "}
                {hotelInfo?.address ?? "" + hotelInfo?.addressDetail ?? ""}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">전화번호:</span>{" "}
                {phoneFormatter(hotelInfo?.phoneNumber ?? "")}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">이메일:</span>
                OOO.naver.com
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:w-1/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">대표자:</span>
                OOO
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">사업자 등록번호:</span>
                123-45-67890
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">통신판매신고번호:</span>
                2024-ABC-1234
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:w-1/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">계좌번호:</span>
                123-45-67890
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="font-semibold mr-2">예금주:</span>
                홍길동
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
