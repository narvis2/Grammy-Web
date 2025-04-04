import { RoomTypeResponse } from "@/data/model/room";
import ChipAdapter from "../ChipAdapter";
import ConvenienceItem from "../ConvenienceItem";
import ProductImageAdapter from "./ProductImageAdapter";
import { getCommaNumber } from "@/data/mapper";
import { roomTypeDescriptions, staticImageUrl } from "@/data/utils/constants";
import {
  viewTypeConvert,
  viewTypeDescription,
  viewTypeReservationLink,
} from "@/data/utils/utils";

type ProductAdapterProps = {
  roomTypeInfo: RoomTypeResponse;
  currentTab: string;
};

const ProductAdapter = ({ roomTypeInfo, currentTab }: ProductAdapterProps) => {
  const roomType = roomTypeInfo.roomTypeName;
  const mainImageList = roomTypeInfo.rooms[0].images.map(
    (item) => staticImageUrl + item.imageUrl
  );

  const roomNumberList = roomTypeInfo.rooms.map((item) => `${item.number}호`);

  const description = roomTypeDescriptions.get(roomType);

  return (
    <div className="flex justify-center items-center py-10 px-5">
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProductImageAdapter
          imageList={mainImageList}
          currentTab={currentTab}
        />

        <section>
          <h2 className="text-3xl font-serif uppercase mb-2">{`${roomType} - ${viewTypeConvert(
            roomType
          )}`}</h2>
          <div
            className="flex items-center text-start font-serif text-lg text-#939393 mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {/* <ChipAdapter chipList={roomNumberList} /> */}
            {`${viewTypeDescription(roomType)}`}
          </div>
          <div className="space-y-2 mt-6">
            <p className="text-gray-800 font-semibold">
              <span>최대 인원 : </span>
              <span className="text-gray-600">{`${roomTypeInfo.maxCount} 명`}</span>
            </p>
          </div>
          <div className="flex flex-col items-baseline font-roboto mt-2">
            <p className="text-base text-primary font-semibold">{`주중 가격 : ${getCommaNumber(
              roomTypeInfo.weekdayPrice
            )} ￦`}</p>
            <p className="text-base text-primary font-semibold">{`금요일 가격 : ${getCommaNumber(
              roomTypeInfo.fridayPrice
            )} ￦`}</p>
            {/* text-base text-gray-400 line-through */}
            <p className="text-base text-primary font-semibold">{`주말 가격 : ${getCommaNumber(
              roomTypeInfo.weekendPrice
            )} ￦`}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-8 justify-items-start">
            <ConvenienceItem title={`${viewTypeConvert(roomType)}`} />
            <ConvenienceItem title="욕조" />
            <ConvenienceItem title="와이파이" />
            <ConvenienceItem title="OTT(넷플릭스 등등..)" />
            <ConvenienceItem title="64인치 구글 스마트 티비" />
            <ConvenienceItem title="평일 조식" />
            {roomType === "스위트 B" ||
              (roomTypeInfo.maxCount >= 4 && (
                <ConvenienceItem title="스타일러" />
              ))}
            <ConvenienceItem title="에어컨" />
            {roomType === "디럭스 A 테라스" ||
              roomType === "디럭스 B 테라스" ||
              (roomType === "로얄 스위트 A 테라스" && (
                <ConvenienceItem title="테라스" />
              ))}
            {roomTypeInfo.rooms[0].beds.map((item) => (
              <ConvenienceItem
                key={item.type}
                title={`${item.type} 침대 ${item.count}개`}
              />
            ))}
          </div>

          {!!description && (
            <p
              className="mt-8 text-base text-gray-600 font-serif"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          <section className="mt-8">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gray-300 mr-2"></div>
              <p className="text-gray-800 text-primary font-semibold">
                [객실 이용 안내]
              </p>
              <div className="flex-1 h-px bg-gray-300 ml-2"></div>
            </div>
            {roomTypeInfo.maxCount > 2 && (
              <div className="mt-2 flex items-start">
                <span className="text-base text-gray-600 font-serif mr-2">
                  ㆍ
                </span>
                <p className="text-base text-gray-600 font-serif">
                  2인 기준 금액으로{" "}
                  <span className="font-bold text-red-500">
                    기준 인원 초과 시 1인 20,000원의 추가 비용
                  </span>
                  이 발생합니다.
                </p>
              </div>
            )}
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <div>
                <p className="text-base text-gray-600 font-serif">
                  객실 및 호텔 내부 전체{" "}
                  <span className="font-bold text-red-500">금연</span>입니다.
                </p>
                <p className="text-base text-red-500 font-serif">
                  (흡연 시 객실 재정비 비용 10만원이 부과됩니다.)
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <div>
                <p className="text-base text-gray-600 font-serif">
                  반려동물은 객실 내 출입 불가입니다.
                </p>
                <p className="text-base text-red-500 font-serif">
                  (위반 시 환불불가, 퇴실조치)
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <p className="text-base text-gray-600 font-serif">
                객실{" "}
                <span className="font-bold text-red-500">
                  카드 키 분실 시 20,000원
                </span>
                이 청구됩니다.
              </p>
            </div>
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <p className="text-base text-gray-600 font-serif">
                미성년자는 법적 동의 없이 입실 및 혼숙이 불가합니다.
              </p>
            </div>
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <div>
                <p className="text-base text-gray-600 font-serif">
                  객실 내{" "}
                  <span className="font-bold text-red-500">
                    대게 및 홍게 반입
                  </span>
                  , 취사, 풍선부착, 촛불 이벤트를 금지합니다.
                </p>
                <p className="text-base text-red-500 font-serif">
                  (위반 시 퇴실 조치 및 객실 재정비 비용 10만원이 부과됩니다.)
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <p className="text-base text-gray-600 font-serif">
                사전 문의 없이 예약인원 초과 또는 무단 출입 시{" "}
                <span className="font-bold text-red-500">
                  환불 없이 퇴실조치
                </span>
                됩니다.
              </p>
            </div>
            <div className="mt-2 flex items-start">
              <span className="text-base text-gray-600 font-serif mr-2">
                ㆍ
              </span>
              <p className="text-base text-gray-600 font-serif">
                3인 이상 투숙 시 혼숙 불가합니다. (가족 제외)
              </p>
            </div>
          </section>
        </section>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-[#d76076] font-medium rounded-lg text-sm px-5 py-2.5 text-center w-100% justify-center mt-8 lg:mt-0"
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
      </div>
    </div>
  );
};

export default ProductAdapter;
