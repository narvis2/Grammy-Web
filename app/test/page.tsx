import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Test = () => {
  return (
    <div className="relative mt-40 text-center text-6xl font-semibold">
      공지사항
      <div className="mt-10 w-3/4 mx-auto border-t-2 border-t-[#262E39] border-b border-b-[#DADADA] h-24 text-4xl flex justify-between items-center outline-none px-4">
        <span className="ml-4">공지사항 안내</span>
        <span className="text-lg text-gray-500 font-normal mr-4">
          생성 날짜: 20XX.XX.XX
        </span>
      </div>
      <div className="mt-8 w-2/5 mx-auto">
        <img src="/images/room1.jpg" className="w-full h-auto object-cover" />
      </div>
      <div className="mt-8 w-3/4 mx-auto text-lg text-gray-700 font-normal">
        <p>그라미 호텔 홈페이지가 오픈했습니다.</p>
      </div>
      <div className="mt-12 w-3/4 mx-auto border-t border-t-[#DADADA] pt-6 flex justify-center space-x-6 text-gray-700 mb-16">
        <button className="text-2xl flex items-center hover:text-gray-500 focus:outline-none">
          <MdNavigateBefore className="mr-2" />
          이전
        </button>
        <button className="text-2xl flex items-center hover:text-gray-500 focus:outline-none">
          목록
        </button>
        <button className="text-2xl flex items-center hover:text-gray-500 focus:outline-none">
          다음
          <MdNavigateNext className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Test;
