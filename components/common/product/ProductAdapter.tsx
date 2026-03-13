"use client";

import { RoomTypeResponse } from "@/data/model/room";
import ConvenienceItem from "../ConvenienceItem";
import ProductImageAdapter from "./ProductImageAdapter";
import { roomTypeDescriptions, staticImageUrl } from "@/data/utils/constants";
import {
  viewTypeConvert,
  viewTypeDescription,
  viewTypeReservationLink,
} from "@/data/utils/utils";
import FadeIn from "../animation/FadeIn";

type ProductAdapterProps = {
  roomTypeInfo: RoomTypeResponse;
  currentTab: string;
};

const ProductAdapter = ({ roomTypeInfo, currentTab }: ProductAdapterProps) => {
  const roomType = roomTypeInfo.roomTypeName;
  const mainImageList = roomTypeInfo.rooms[0].images.map(
    (item) => staticImageUrl + item.imageUrl
  );

  const description = roomTypeDescriptions.get(roomType);

  return (
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="left">
          <ProductImageAdapter
            imageList={mainImageList}
            currentTab={currentTab}
          />
        </FadeIn>

        <FadeIn direction="right" delay={0.15}>
          <section>
            {/* Room Title */}
            <p className="text-xs tracking-widest-2xl text-brand uppercase font-body mb-3">
              {viewTypeConvert(roomType)}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal tracking-wide mb-4">
              {roomType}
            </h2>
            <div className="w-10 h-px bg-brand mb-6" />

            {/* Description */}
            <p
              className="text-body-text text-sm sm:text-base font-light leading-relaxed"
              style={{ whiteSpace: "pre-line" }}
            >
              {viewTypeDescription(roomType)}
            </p>

            {/* Capacity */}
            <div className="mt-6 flex items-center gap-3">
              <span className="bg-warm text-charcoal text-xs tracking-wider px-4 py-2 rounded-full">
                최대 {roomTypeInfo.maxCount}명
              </span>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <ConvenienceItem title={viewTypeConvert(roomType)} />
              {roomType !== "스탠다드 B" &&
                roomType !== "스탠다드 트윈" &&
                roomType !== "디럭스 B 테라스" && (
                  <ConvenienceItem title="욕조" />
                )}
              <ConvenienceItem title="와이파이" />
              <ConvenienceItem title="OTT(넷플릭스 등등..)" />
              <ConvenienceItem title="64인치 구글 스마트 티비" />
              <ConvenienceItem title="평일 조식" />
              {(roomType === "스위트 B" || roomTypeInfo.maxCount >= 4) && (
                <ConvenienceItem title="스타일러" />
              )}
              <ConvenienceItem title="에어컨" />
              {(roomType === "디럭스 A 테라스" ||
                roomType === "디럭스 B 테라스" ||
                roomType === "로얄 스위트 A 테라스") && (
                <ConvenienceItem title="테라스" />
              )}
              {roomTypeInfo.rooms[0].beds.map((item) => (
                <ConvenienceItem
                  key={item.type}
                  title={`${item.type} 침대 ${item.count}개`}
                />
              ))}
            </div>

            {/* Description HTML */}
            {!!description && (
              <p
                className="mt-8 text-sm text-body-text font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {/* 객실 이용 안내 */}
            <div className="mt-10 pt-8 border-t border-warm-dark/60">
              <h3 className="text-center font-display text-lg text-charcoal tracking-wider mb-6">
                객실 이용 안내
              </h3>
              <div className="space-y-3 text-sm text-body-text font-light leading-relaxed">
                {roomTypeInfo.maxCount > 2 && (
                  <p>
                    · 2인 기준 금액으로{" "}
                    <span className="text-brand-dark font-normal">
                      기준 인원 초과 시 1인 20,000원의 추가 비용
                    </span>
                    이 발생합니다.
                  </p>
                )}
                <p>
                  · 객실 및 호텔 내부 전체{" "}
                  <span className="text-brand-dark font-normal">금연</span>
                  입니다.
                  <br />
                  <span className="text-brand-dark text-xs ml-3">
                    (흡연 시 객실 재정비 비용 10만원이 부과됩니다.)
                  </span>
                </p>
                <p>
                  · 반려동물은 객실 내 출입 불가입니다.
                  <br />
                  <span className="text-brand-dark text-xs ml-3">
                    (위반 시 환불불가, 퇴실조치)
                  </span>
                </p>
                <p>
                  · 객실{" "}
                  <span className="text-brand-dark font-normal">
                    카드 키 분실 시 20,000원
                  </span>
                  이 청구됩니다.
                </p>
                <p>· 미성년자는 법적 동의 없이 입실 및 혼숙이 불가합니다.</p>
                <p>
                  · 객실 내{" "}
                  <span className="text-brand-dark font-normal">
                    대게 및 홍게 반입
                  </span>
                  , 취사, 풍선부착, 촛불 이벤트를 금지합니다.
                  <br />
                  <span className="text-brand-dark text-xs ml-3">
                    (위반 시 퇴실 조치 및 객실 재정비 비용 10만원이 부과됩니다.)
                  </span>
                </p>
                <p>
                  · 사전 문의 없이 예약인원 초과 또는 무단 출입 시{" "}
                  <span className="text-brand-dark font-normal">
                    환불 없이 퇴실조치
                  </span>
                  됩니다.
                </p>
                <p>· 3인 이상 투숙 시 혼숙 불가합니다. (가족 제외)</p>
              </div>
            </div>

            {/* Booking Button */}
            <button
              type="button"
              className="w-full mt-10 py-4 bg-charcoal text-white text-sm tracking-widest-xl uppercase rounded-sm hover:bg-brand-dark transition-colors duration-300"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "click", {
                    event_category: "예약버튼",
                    event_label: "ROOM 실시간 예약",
                  });
                }
                window.location.href = viewTypeReservationLink(roomType);
              }}
            >
              실시간 예약
            </button>
          </section>
        </FadeIn>
      </div>
    </div>
  );
};

export default ProductAdapter;
