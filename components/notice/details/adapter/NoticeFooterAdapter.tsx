import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type NoticeFooterAdapterProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  onHomeClick: () => void;
};

const NoticeFooterAdapter = ({
  onHomeClick,
  onNextClick,
  onPrevClick,
}: NoticeFooterAdapterProps) => {
  return (
    <div className="mt-12 w-full border-t border-t-[#DADADA] pt-6 flex justify-center space-x-4 sm:space-x-8 text-gray-700 pb-16">
      <button
        className="text-lg sm:text-xl md:text-2xl flex items-center hover:text-gray-500 focus:outline-none"
        onClick={onPrevClick}
      >
        <MdNavigateBefore className="mr-2" />
        이전
      </button>
      <button
        className="text-lg sm:text-xl md:text-2xl flex items-center hover:text-gray-500 focus:outline-none"
        onClick={onHomeClick}
      >
        목록
      </button>
      <button
        className="text-lg sm:text-xl md:text-2xl flex items-center hover:text-gray-500 focus:outline-none"
        onClick={onNextClick}
      >
        다음
        <MdNavigateNext className="ml-2" />
      </button>
    </div>
  );
};

export default React.memo(NoticeFooterAdapter);
