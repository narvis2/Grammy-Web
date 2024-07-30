import usePreventScroll from "@/data/hooks/ui/usePreventScroll";
import { useRouter } from "next/navigation";
import ReservationPrepareHeader from "./header/ReservationPrepareHeader";
import TitleItem from "./content/TitleItem";
import InfoItem from "./content/InfoItem";
import CountItem from "./content/CountItem";
import ReservationPrepareSubHeader from "./header/ReservationPrepareSubHeader";
import SingleInputItem from "./content/SingleInputItem";

const ReservationPrepareModal = () => {
  const router = useRouter();
  const prevent = usePreventScroll();

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed z-30 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex items-center justify-center"
    >
      <div className="relative p-4 w-full max-w-md max-h-[calc(100vh-4rem)] mb-10">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <ReservationPrepareHeader
            title="예약 및 결제 정보 확인"
            onClose={() => router.back()}
          />
          {/* Modal body */}
          <form className="p-4 md:p-5 max-h-[calc(100vh-8rem)] overflow-y-scroll">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <ReservationPrepareSubHeader title="객실 예약 정보" />
              <TitleItem title="객실 유형" info="STANDARD-A" />
              <InfoItem title="총 가격" info="1" />
              <InfoItem title="객실 호수" info="401호" />
              <InfoItem title="체크 인" info="2024-08-16 (금) 15:00" />
              <InfoItem title="체크 아웃" info="2024-08-18 (일) 11:00" />
              <InfoItem title="인원수" info="기준 2명 / 최대 3명" />

              <ReservationPrepareSubHeader title="이용자 정보" />
              <SingleInputItem
                title="성명"
                placeholder="성명을 입력해주세요."
                type="text"
                value=""
              />
              <SingleInputItem
                title="휴대폰 번호"
                placeholder="휴대폰 번호를 입력해주세요."
                type="tel"
                value=""
              />

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  추가 요청 사항
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="추가 문의 사항 및 요청 사항을 입력해주세요!"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-[#d76076] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              예약 및 결제
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPrepareModal;
