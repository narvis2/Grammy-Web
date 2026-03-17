"use client";

import FadeIn from "@/components/common/animation/FadeIn";

const floors = [
  { floor: "9F", info: "객실" },
  { floor: "8F", info: "객실" },
  { floor: "7F", info: "로비 / 카페테리아 / 테라스 / 객실" },
];

const roomTypes = [
  { name: "스탠다드 A", capacity: 2 },
  { name: "스탠다드 B", capacity: 2 },
  { name: "스탠다드 트윈", capacity: 3 },
  { name: "디럭스 A 테라스", capacity: 2 },
  { name: "디럭스 B 테라스", capacity: 2 },
  { name: "스위트 A", capacity: 4 },
  { name: "스위트 B", capacity: 2 },
  { name: "코너 스위트", capacity: 4 },
  { name: "로얄 스위트 A", capacity: 4 },
  { name: "로얄 스위트 B", capacity: 4 },
];

const TableView = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      {/* 층별 안내 */}
      <FadeIn className="mb-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-2xl text-stay-400 uppercase font-body mb-3">
            Floor Guide
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-stay-950 tracking-wide">
            층별 안내
          </h2>
          <div className="section-divider mt-5" />
        </div>

        <div className="space-y-0">
          {/* Header */}
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] border-b-2 border-stay-950/20">
            <div className="py-4 text-center text-xs tracking-widest uppercase text-stay-600 font-medium">
              층수
            </div>
            <div className="py-4 text-center text-xs tracking-widest uppercase text-stay-600 font-medium">
              시설 안내
            </div>
          </div>
          {/* Rows */}
          {floors.map((item) => (
            <div
              key={item.floor}
              className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] border-b border-stay-300/60 hover:bg-stay-100/50 transition-colors duration-300"
            >
              <div className="py-5 text-center font-display text-xl sm:text-2xl text-stay-950 tracking-wider">
                {item.floor}
              </div>
              <div className="py-5 text-center text-sm sm:text-base text-stay-600 font-light">
                {item.info}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* 객실 정보 */}
      <FadeIn>
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-2xl text-stay-400 uppercase font-body mb-3">
            Room Information
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-stay-950 tracking-wide">
            객실 정보
          </h2>
          <div className="section-divider mt-5" />
        </div>

        <div className="space-y-0">
          {/* Header */}
          <div className="grid grid-cols-2 border-b-2 border-stay-950/20">
            <div className="py-4 text-center text-xs tracking-widest uppercase text-stay-600 font-medium">
              객실 유형
            </div>
            <div className="py-4 text-center text-xs tracking-widest uppercase text-stay-600 font-medium">
              최대 수용 인원
            </div>
          </div>
          {/* Rows */}
          {roomTypes.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-2 border-b border-stay-300/60 hover:bg-stay-100/50 transition-colors duration-300"
            >
              <div className="py-5 text-center text-sm sm:text-base text-stay-950 font-light">
                {item.name}
              </div>
              <div className="py-5 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-stay-100 text-sm text-stay-950 font-display">
                  {item.capacity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default TableView;
