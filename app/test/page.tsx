import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Test = () => {
  return (
    <div className="relative mt-40 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8">
        공지사항
      </h1>

      <div className="w-3/4 mx-auto border-t-2 border-t-[#262E39] border-b border-b-[#DADADA] h-24 flex justify-between items-center outline-none px-4">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl ml-4">
          공지사항 안내
        </span>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 font-normal mr-4">
          생성 날짜: 20XX.XX.XX
        </span>
      </div>

      <div className="mt-8 w-2/5 mx-auto">
        <img src="/images/room1.jpg" className="w-full h-auto object-cover" />
      </div>

      <div className="mt-8 w-3/4 mx-auto text-sm sm:text-base md:text-lg text-gray-700 font-normal text-center">
        <ul className="list-inside space-y-4 text-left">
          <li>
            <strong>[홈페이지 오픈]</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                2024년 XX월 XX일, 저희 그라미 호텔 홈페이지가 새롭게
                오픈했습니다.
              </li>
            </ul>
          </li>
          <li>
            <strong>[미성년자 입실 관련]</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                청소년 보호법에 따라, 보호자 미 동반 시 미성년자(만 19세 미만)의
                입실이 불가합니다.
              </li>
              <li>보호자의 동의 또는 동행이 필수입니다.</li>
              <li>
                미성년자가 혼자 예약한 경우, 입실 거부와 함께 취소 및 환불은
                불가능합니다.
              </li>
            </ul>
          </li>
          <li>
            <strong>[예약 및 체크인 안내]</strong>
            <ul className="list-disc list-inside mt-2">
              <li>당일 예약은 환불 및 취소가 불가능합니다.</li>
              <li>
                체크인은 24:00까지 가능합니다. 이후 입실은 불가하며, 이 경우
                취소 및 환불이 불가능합니다.
              </li>
              <li>
                체크아웃 시간은 11시까지입니다. 11시를 초과할 경우, 30분마다
                1만원의 추가 요금이 발생합니다.
              </li>
              <li>
                각 객실의 최대 허용 인원 초과 시 현장에서 추가 요금이
                발생합니다. (객실마다 상이하며 현장 지불)
              </li>
            </ul>
          </li>
          <li>
            <strong>[기타 유의 사항]</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                객실 내 흡연은 금지됩니다. 흡연 적발 시 강제 퇴실 조치가
                이루어지며, 환불은 불가하며 침구류 세탁 비용이 청구됩니다.
              </li>
              <li>
                고성방가 및 음주로 인해 다른 손님의 휴식에 방해가 될 경우, 강제
                퇴실 조치가 취해지며 숙박료 환불은 불가능합니다.
              </li>
              <li>
                호텔 시설물의 훼손이나 분실에 대한 책임은 본인에게 있으며, 이에
                따른 수리 비용이 청구됩니다.
              </li>
              <li>애완동물의 반입은 사전에 미리 말씀해 주시기 바랍니다.</li>
              <li>
                개인 물품의 보관 책임은 본인에게 있으며, 분실 시 어떠한 책임도
                지지 않습니다.
              </li>
              <li>
                입실 시간 전 짐 보관 가능 여부는 사전에 문의해주시길 바랍니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mt-12 w-3/4 mx-auto border-t border-t-[#DADADA] pt-6 flex justify-center space-x-8 text-gray-700 mb-16">
        <button className="text-2xl  flex items-center hover:text-gray-500 focus:outline-none">
          <MdNavigateBefore className="mr-2" />
          이전
        </button>
        <button className="text-2xl  flex items-center hover:text-gray-500 focus:outline-none">
          목록
        </button>
        <button className="text-2xl  flex items-center hover:text-gray-500 focus:outline-none">
          다음
          <MdNavigateNext className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Test;
